import React from 'react'
// import { getAllTodo, addToDO, updateToDO, deleteToDo } from '../utils/HandleApi';

import {BiEdit} from "react-icons/bi"
import {AiFillDelete} from "react-icons/ai"

const FormIcon = ({name, updateMode, deleteToDo}) => {
    return (
        <div className="todo">
            <div className="text">{name}</div>
            <div className="icons">
                <BiEdit className='icon' onClick={updateMode} />
                <AiFillDelete className='icon' onClick={deleteToDo} />
            </div>
        </div>
    )
}

export default FormIcon