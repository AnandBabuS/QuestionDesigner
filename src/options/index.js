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
    const disableDelete = options && options.length <= 2
    const disableCreate = options && options.length >= 6
    return (
        <div>
            { displayOperations && (
            <div className="question">
                <label> Question </label>
                <input className="inputField fullWidth" value={question} onChange={onQuestionChange} />
            </div>) }
            <div className="container options">
                <div className="row">
                    { option }
                </div>
            </div>
            { displayOperations && (
                <Buttons
                    disableDelete={disableDelete}
                    disableCreate={disableCreate}
                    onCreate={addOption}
                    onDelete={deleteOption}
                />) }
        </div>
    )
}

export default Options