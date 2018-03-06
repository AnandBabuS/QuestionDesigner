import React from 'react'

const Option = ({ option, index, onChange }) => (
    <div className="col-lg-12 alignCenter">
        <label> Option {index + 1} </label>
        <input className="inputField midSizeWidth" onChange={ (event) => onChange(index, event.target.value) } value={ option } />
    </div>
)

export default Option