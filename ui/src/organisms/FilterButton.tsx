import React, { Fragment, useState } from 'react';
import { Dialog, Transition, Switch, Listbox, Combobox } from '@headlessui/react';
import { AdjustmentsHorizontalIcon } from '@heroicons/react/20/solid';
import { XMarkIcon } from '@heroicons/react/24/outline';
import TagPicker from '../molecules/TagPicker';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import classNames from '../helper/classNames';


interface Props {
    tags: string[]
    cities: string[]
}

export default function FilterButton({ tags, cities }: Props) {
    const [open, setOpen] = useState(false)

    return (
        <>
            <div className="relative flex items-center justify-between">
                <button
                    type="button"
                    onClick={() => { setOpen(true) }}
                    className="inline-flex items-center rounded-full bg-gray-100 px-3 py-2 text-sm font-medium text-black shadow-sm hover:bg-blue-500 hover:text-white shadow-lg ring-1 ring-black ring-opacity-5"
                >
                    <AdjustmentsHorizontalIcon className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
                    Filtros
                </button>
            </div>
            <SideBlock open={open} setOpen={setOpen} tags={tags} cities={cities} />
        </>
    )
}

interface SideBlockProps {
    open: boolean
    setOpen: (state: boolean) => void
    tags: string[]
    cities: string[]
}

function SideBlock({ open, setOpen, tags, cities }: SideBlockProps) {

    const [toggle, setToggle] = useState(false)
    const [selectedTags, setSelectedTags] = useState<string[]>([])
    const [eventName, setEventName] = useState('')
    const [selectedCity, setselectedCity] = useState('Todas')

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={setOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                            <Transition.Child
                                as={Fragment}
                                enter="transform transition ease-in-out duration-500 sm:duration-700"
                                enterFrom="translate-x-full"
                                enterTo="translate-x-0"
                                leave="transform transition ease-in-out duration-500 sm:duration-700"
                                leaveFrom="translate-x-0"
                                leaveTo="translate-x-full"
                            >
                                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-in-out duration-500"
                                        enterFrom="opacity-0"
                                        enterTo="opacity-100"
                                        leave="ease-in-out duration-500"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <div className="absolute -ml-8 -left-6 flex pl-4 py-4 sm:-ml-10 sm:pr-4">
                                            <button
                                                type="button"
                                                className="relative text-gray-300 hover:text-white"
                                                onClick={() => setOpen(false)}
                                            >
                                                <span className="absolute -inset-2.5" />
                                                <span className="sr-only">Fechar filtros</span>
                                                <XMarkIcon className="h-10 w-10 px-2 py-2 rounded-full stroke-2 bg-black/10 text-white" aria-hidden="true" />
                                            </button>
                                        </div>
                                    </Transition.Child>
                                    <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                                        <div className="px-4 sm:px-6">
                                            <Dialog.Title className="text-base font-semibold leading-6 text-gray-900">
                                                Filtros
                                            </Dialog.Title>
                                        </div>
                                        <div className="relative mt-6 flex-1 px-4 sm:px-6">
                                            {/* Filters */}
                                            <div className="sm:col-span-4">
                                                <label htmlFor="event_name" className="block text-sm font-medium leading-6 text-gray-900">
                                                    Nome do evento
                                                </label>
                                                <div className="relative mt-2 ">
                                                    <Combobox value={eventName} onChange={setEventName}>
                                                        <Combobox.Input
                                                            onChange={(event) => setEventName(event.target.value)}
                                                            className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 sm:text-sm sm:leading-6"
                                                        />
                                                    </Combobox>
                                                </div>
                                            </div>

                                            <div className="sm:col-span-4 py-2">
                                                <ListCities cities={cities} selected={selectedCity} setSelected={setselectedCity} />
                                            </div>

                                            <div className="flex justify-between">
                                                <div className="py-2 space-y-2">
                                                    <fieldset>
                                                        <legend className="text-sm font-semibold leading-6 text-gray-900">Tipo do evento</legend>
                                                        <div className="mt-2 space-y-2">
                                                            <div className="relative flex gap-x-1">
                                                                <div className="flex h-6 items-center">
                                                                    <input
                                                                        id="in_person"
                                                                        name="in_person"
                                                                        type="checkbox"
                                                                        className="h-4 w-4 rounded border-gray-300 text-blue-500 focus:ring-blue-500"
                                                                    />
                                                                </div>
                                                                <div className="text-sm leading-6">
                                                                    <label htmlFor="in_person" className="font-medium text-gray-900">
                                                                        Presencial
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div className="relative flex gap-x-1">
                                                                <div className="flex h-6 items-center">
                                                                    <input
                                                                        id="online"
                                                                        name="online"
                                                                        type="checkbox"
                                                                        className="h-4 w-4 rounded border-gray-300 text-blue-500 focus:ring-blue-500"
                                                                    />
                                                                </div>
                                                                <div className="text-sm leading-6">
                                                                    <label htmlFor="online" className="font-medium text-gray-900">
                                                                        Online
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </fieldset>
                                                </div>
                                                <div className="py-2 space-y-2">
                                                    <legend className="block text-sm font-medium leading-6 text-gray-900">Ainda dá pra participar?</legend>
                                                    <Switch
                                                        checked={toggle}
                                                        onChange={setToggle}
                                                        className={`${toggle ? 'bg-blue-600' : 'bg-gray-200'
                                                            } relative inline-flex h-6 w-11 items-center rounded-full`}
                                                    >
                                                        <span className="sr-only">Ainda dá pra participar?</span>
                                                        <span
                                                            className={`${toggle ? 'translate-x-6' : 'translate-x-1'
                                                                } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                                                        />
                                                    </Switch>
                                                </div>
                                            </div>
                                            <div className="py-2 space-y-2" >
                                                <label htmlFor="tags" className="block text-sm font-medium leading-6 text-gray-900">
                                                    Tags
                                                </label>
                                                <TagPicker tags={tags} selectedTags={selectedTags} setSelected={setSelectedTags} />
                                            </div>

                                            <div className="mt-6 flex items-center justify-end gap-x-6">
                                                <button
                                                    type="submit"
                                                    className="rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
                                                >
                                                    Limpar filtros!
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}

interface listCitiesProps {
    cities: string[]
    selected: string
    setSelected: (selected: string) => void
}

function ListCities({ cities, selected, setSelected }: listCitiesProps) {

    return (
        <Listbox value={selected} onChange={setSelected}>
            {({ open }) => (
                <>
                    <Listbox.Label className="block text-sm font-medium leading-6 text-gray-900">Cidade do evento</Listbox.Label>
                    <div className="relative mt-2">
                        <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 sm:text-sm sm:leading-6">
                            <span className="flex items-center">
                                <span className="ml-3 block truncate">{selected}</span>
                            </span>
                            <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                                <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                            </span>
                        </Listbox.Button>

                        <Transition
                            show={open}
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                {cities.map((city) => (
                                    <Listbox.Option
                                        key={city}
                                        className={({ active }) =>
                                            classNames(
                                                active ? 'bg-blue-500 text-white' : 'text-gray-900',
                                                'relative cursor-default select-none py-2 pl-3 pr-9'
                                            )
                                        }
                                        value={city}
                                    >
                                        {({ selected, active }) => (
                                            <>
                                                <div className="flex items-center">
                                                    <span
                                                        className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                                                    >
                                                        {city}
                                                    </span>
                                                </div>

                                                {selected ? (
                                                    <span
                                                        className={classNames(
                                                            active ? 'text-white' : 'text-blue-500',
                                                            'absolute inset-y-0 right-0 flex items-center pr-4'
                                                        )}
                                                    >
                                                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                    </span>
                                                ) : null}
                                            </>
                                        )}
                                    </Listbox.Option>
                                ))}
                            </Listbox.Options>
                        </Transition>
                    </div>
                </>
            )}
        </Listbox>
    )
}
