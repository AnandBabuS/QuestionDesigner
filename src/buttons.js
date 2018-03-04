import React from 'react'

const Buttons = ({ onCreate, onDelete }) => (
    <div>
        <button onClick={ onCreate }>Create</button>
        <button style={{ marginLeft: '10px' }} onClick={ onDelete }>Delete</button>
    </div>
)

export default Buttons
