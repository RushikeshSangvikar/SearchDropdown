import React from 'react'
import AutoComplete from './AutoComplete'
import Dropdown from './Dropdown'

const SearchDropdown = ({ multiselect, searchable, data }) => {
    // here I am assuming objects must have a title property else it's a string.
    const formattedData = data.map(component => component.title || component)
    return (
        searchable
            ?   <AutoComplete data={formattedData} multiselect={multiselect} />
            :   <Dropdown data={formattedData} multiselect={multiselect} />
    )
}

export default SearchDropdown