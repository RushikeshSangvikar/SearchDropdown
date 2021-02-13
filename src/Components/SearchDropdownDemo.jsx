import React, { useState } from 'react'
import { FormControlLabel, Switch } from '@material-ui/core'
import SearchDropdown from './SearchDropdown'
import './SearchDropdownDemo.css'

const SearchDropdownDemo = () => {
    const [useObjectsArray, setUseObjectsArray] = useState(false)
    const colors = ['Green', 'Red', 'Yellow', 'Blue', 'Black']
    const components = [
        { "title": "Button", "path": "demo-button" },
        { "title": "Selection Control", "path": "demo-selection-control" },
        { "title": "Input", "path": "demo-input" },
        { "title": "Snackbar", "path": "demo-snack-bar" },
        { "title": "Chips", "path": "demo-chips" },
        { "title": "Progress Tabs", "path": "demo-vertical-tabs" },
        { "title": "Typography", "path": "demo-wip" },
        { "title": "Card", "path": "demo-wip" },
        { "title": "Pagination", "path": "demo-wip" },
        { "title": "Progress Tabs", "path": "demo-wip" }
    ];
    const data = useObjectsArray ? components : colors
    const label = `Used ${useObjectsArray ? 'objects': 'strings' } array (i.e. ${useObjectsArray ? 'components': 'colors' }) for demonstration`
    return (
        <div className="searchDropdownDemo">
            <FormControlLabel
                style={{ marginBottom: 32 }}
                control={
                    <Switch
                        checked={useObjectsArray}
                        onChange={e => {setUseObjectsArray(e.target.checked)}}
                    />
                }
                label={label}
            />
            <div className="demoComponents">
                {/* Dropdown */}
                <div key='DropdownMultiSelect'>
                    <span>1. Dropdown multi select</span>
                    <SearchDropdown searchable={false} data={data} multiselect />
                </div>
                <div key='DropdownSingleSelect'>
                    <span>2. Dropdown single select</span>
                    <SearchDropdown searchable={false} data={data} multiselect={false} />
                </div>
                {/* Autocompletes */}
                <div key='SearchableMultiSelect'>
                    <span>1. Searchable multi select</span>
                    <SearchDropdown searchable data={data} multiselect />
                </div>
                <div key='SearchableSingleSelect'>
                    <span>2. Searchable single select</span>
                    <SearchDropdown searchable data={data} multiselect={false} />
                </div>
            </div>
        </div>
    )
}

export default SearchDropdownDemo