import React from 'react'

const Question = ({ question, isSelected, index, onSelected }) => (
    <div onClick={() => onSelected(index)} className="selectable" style={ isSelected ? {fontWeight: 'bold'} : {}}>
        { question }
    </div>
)

export default Question