// Code generated by go-enum DO NOT EDIT.
// Version: 0.6.0
// Revision: 919e61c0174b91303753ee3898569a01abb32c97
// Build Date: 2023-12-18T15:54:43Z
// Built By: goreleaser

package event

import (
	"database/sql/driver"
	"errors"
	"fmt"
)

const (
	// EventTypeOfOnline is a EventTypeOf of type Online.
	EventTypeOfOnline EventTypeOf = iota
	// EventTypeOfInPerson is a EventTypeOf of type In_person.
	EventTypeOfInPerson
)

var ErrInvalidEventTypeOf = errors.New("not a valid EventTypeOf")

const _EventTypeOfName = "onlinein_person"

var _EventTypeOfMap = map[EventTypeOf]string{
	EventTypeOfOnline:   _EventTypeOfName[0:6],
	EventTypeOfInPerson: _EventTypeOfName[6:15],
}

// String implements the Stringer interface.
func (x EventTypeOf) String() string {
	if str, ok := _EventTypeOfMap[x]; ok {
		return str
	}
	return fmt.Sprintf("EventTypeOf(%d)", x)
}

// IsValid provides a quick way to determine if the typed value is
// part of the allowed enumerated values
func (x EventTypeOf) IsValid() bool {
	_, ok := _EventTypeOfMap[x]
	return ok
}

var _EventTypeOfValue = map[string]EventTypeOf{
	_EventTypeOfName[0:6]:  EventTypeOfOnline,
	_EventTypeOfName[6:15]: EventTypeOfInPerson,
}

// ParseEventTypeOf attempts to convert a string to a EventTypeOf.
func ParseEventTypeOf(name string) (EventTypeOf, error) {
	if x, ok := _EventTypeOfValue[name]; ok {
		return x, nil
	}
	return EventTypeOf(0), fmt.Errorf("%s is %w", name, ErrInvalidEventTypeOf)
}

// MarshalText implements the text marshaller method.
func (x EventTypeOf) MarshalText() ([]byte, error) {
	return []byte(x.String()), nil
}

// UnmarshalText implements the text unmarshaller method.
func (x *EventTypeOf) UnmarshalText(text []byte) error {
	name := string(text)
	tmp, err := ParseEventTypeOf(name)
	if err != nil {
		return err
	}
	*x = tmp
	return nil
}

var errEventTypeOfNilPtr = errors.New("value pointer is nil") // one per type for package clashes

// Scan implements the Scanner interface.
func (x *EventTypeOf) Scan(value interface{}) (err error) {
	if value == nil {
		*x = EventTypeOf(0)
		return
	}

	// A wider range of scannable types.
	// driver.Value values at the top of the list for expediency
	switch v := value.(type) {
	case int64:
		*x = EventTypeOf(v)
	case string:
		*x, err = ParseEventTypeOf(v)
	case []byte:
		*x, err = ParseEventTypeOf(string(v))
	case EventTypeOf:
		*x = v
	case int:
		*x = EventTypeOf(v)
	case *EventTypeOf:
		if v == nil {
			return errEventTypeOfNilPtr
		}
		*x = *v
	case uint:
		*x = EventTypeOf(v)
	case uint64:
		*x = EventTypeOf(v)
	case *int:
		if v == nil {
			return errEventTypeOfNilPtr
		}
		*x = EventTypeOf(*v)
	case *int64:
		if v == nil {
			return errEventTypeOfNilPtr
		}
		*x = EventTypeOf(*v)
	case float64: // json marshals everything as a float64 if it's a number
		*x = EventTypeOf(v)
	case *float64: // json marshals everything as a float64 if it's a number
		if v == nil {
			return errEventTypeOfNilPtr
		}
		*x = EventTypeOf(*v)
	case *uint:
		if v == nil {
			return errEventTypeOfNilPtr
		}
		*x = EventTypeOf(*v)
	case *uint64:
		if v == nil {
			return errEventTypeOfNilPtr
		}
		*x = EventTypeOf(*v)
	case *string:
		if v == nil {
			return errEventTypeOfNilPtr
		}
		*x, err = ParseEventTypeOf(*v)
	}

	return
}

// Value implements the driver Valuer interface.
func (x EventTypeOf) Value() (driver.Value, error) {
	return x.String(), nil
}
