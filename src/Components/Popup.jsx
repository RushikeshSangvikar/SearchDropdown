import React, {useState} from 'react'
import { Button, Checkbox, Radio } from '@material-ui/core'
import './Popup.css'

const Popup = ({ data = [], multiselect, setInputValue, popupDisplay, setPopupDisplay, style }) => {
    const Component = multiselect ? Checkbox : Radio
    const [checkedValues, setCheckedValues] = useState([])
    const shouldDisable = !checkedValues.length
    const disabledStyles = shouldDisable ? { opacity: 0.25 } : {}

    const onChange = (e, color) => {
        if(e.target.checked) {
            const newChecked = multiselect ? [...checkedValues, color]: [color]
            setCheckedValues(newChecked)
        } else {
            multiselect && setCheckedValues(checkedValues.filter(val => val !== color))
        }
    }

    const handleSubmit = () => {
        const colors = checkedValues.toString()
        // For time being I have used 'Colours -' to display final results.
        // We can anyways have this conditional with the help of `useObjectsArray` state used in App.
        const result = `Colours - ${colors}`
        setInputValue(result)
        setPopupDisplay(false)
    }
    const handleClear = () => {
        setCheckedValues([])
    }

    if(!data.length || !popupDisplay) {
        return null
    }
    return (
        <div className="popup" style={style}>
            <div className="multiSelect">
                {/* Not sure what this does :-( ... but as per UI I have added the same */}
                <Checkbox indeterminate />
            </div>
            <div className="wrap">
                {data.map((color, index) => {
                    return (
                        <div key={index} className="option">
                            <Component
                                checked={checkedValues.includes(color)}
                                value={color}
                                color="default"
                                onChange={e => onChange(e, color)}
                            />
                            <span>{color}</span>
                        </div>
                    )
                })}
            </div>
            <div className="footer">
                <Button
                    disabled={shouldDisable}
                    onClick={handleClear}
                    className="clear"
                    style={{ color: 'black', ...disabledStyles }}
                >
                    Clear
                </Button>
                <Button
                    disabled={shouldDisable}
                    onClick={handleSubmit}
                    className="submit"
                    style={{ color: 'green', ...disabledStyles }}
                >
                    Submit
                </Button>
            </div>
        </div>
    )
}

export default Popup