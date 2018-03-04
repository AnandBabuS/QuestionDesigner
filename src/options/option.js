import React from 'react'

const Option = ({ option, index, onChange }) => (
    <div className="col-lg-6">
        <label> Option {index + 1} </label>
        <input onChange={ (event) => onChange(index, event.target.value) } value={ option } />
    </div>
)

export default Option