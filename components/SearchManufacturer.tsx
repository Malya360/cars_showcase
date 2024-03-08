'use client';

import { Combobox, Transition } from '@headlessui/react';
import { setManufacturerProps } from '@/types';
import React from 'react'

const SearchManufacturer = ({manufacturer,setManufacturer}:setManufacturerProps) => {
  return (
    <div className='search-manufacturer'>
        <Combobox>
            <div className='relative w-full'>

            </div>

        </Combobox>
    </div>
  )
}

export default SearchManufacturer;