import React from 'react'

const Buttons = ({ onCreate, onDelete, disableCreate = false, disableDelete = false }) => (
    <div className="alignCenter">
        <button disabled={disableCreate} className="btn btn-lg btn-success" onClick={ onCreate }>Create</button>
        <button disabled={disableDelete} className="btn btn-lg btn-danger button" onClick={ onDelete }>Delete</button>
    </div>
)

export default Buttons
