import React, { useState } from 'react'
import Popup from './Popup'
import './AutoComplete.css'

const AutoComplete = ({ data, multiselect }) => {
    const [inputValue, setInputValue] = useState('')
    const [popupDisplay, setPopupDisplay] = useState(false)
    const filteredData = inputValue
        // Here I am ignoring case while searching
        ? data.filter(color => color.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase()))
        : data

    return (
        <div className="autoComplete">
            <input
                autoComplete="new-password"
                id="searchInput"
                onFocus={() => setPopupDisplay(true)}
                className="searchInput"
                value={inputValue}
                placeholder={'Select value'}
                onChange={e => setInputValue(e.target.value)}
            />
            <Popup
                popupDisplay={popupDisplay}
                multiselect={multiselect}
                data={filteredData}
                setInputValue={setInputValue}
                setPopupDisplay={setPopupDisplay}
            />
        </div>
    )
}

export default AutoComplete