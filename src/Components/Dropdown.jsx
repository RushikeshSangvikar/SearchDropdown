import React, { useState } from 'react'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp'
import './Dropdown.css'
import Popup from "./Popup";

const Dropdown = ({ multiselect, data = [] }) => {
    const [popupDisplay, setPopupDisplay] = useState(false)
    const [inputValue, setInputValue] = useState('')
    return (
        <div className="dropdown">
            <div className="dropdownInput">
                <input
                    className="input"
                    value={inputValue}
                    onClick={() => setPopupDisplay(!popupDisplay)}
                    placeholder={'Select value'}
                    onChange={e => setInputValue(e.target.value)}
                />
                <div className="icon" onClick={() => setPopupDisplay(!popupDisplay)}>
                    {popupDisplay ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                </div>
            </div>
            <Popup
                popupDisplay={popupDisplay}
                style={{ marginLeft: 8 }}
                multiselect={multiselect}
                data={data}
                setInputValue={setInputValue}
                setPopupDisplay={setPopupDisplay}
            />
        </div>
    )
}

export default Dropdown