import React from 'react'
import Question from './question'
import map from 'lodash/map'

const Questions = ( { questions, selectedData, onSelected } ) => (
    map( questions, (question, index, data) => {
        return <Question question={question} key={index} onSelected={onSelected} index={index} isSelected={ selectedData == index } />
    })
)

export default Questions