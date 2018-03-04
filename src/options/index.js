import React from 'react'
import Option from './option'
import Buttons from '../buttons'
import map from 'lodash/map'
import isEmpty from 'lodash/isEmpty'

const Options = ( { options, selectedData, onChange, question, onQuestionChange, addOption, deleteOption } ) => {
    const option = map( options, (option, index, data) => {
        return <Option option={option} key={index} onChange={onChange} index={index} />
    })
    const displayOperations = !isEmpty(options)
    return (
        <div>
            { displayOperations && (
            <div>
                <label> Question </label>
                <input value={question} onChange={onQuestionChange} />
            </div>) }
            <div className="container">
                <div className="row">
                    { option }
                </div>
            </div>
            { displayOperations && (<Buttons onCreate={addOption} onDelete={deleteOption} />) }
        </div>
    )
}

export default Options