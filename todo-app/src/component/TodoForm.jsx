import React, { useState, useEffect } from 'react';
import FormIcon from './FormIcon.js';
import { getAllTodo, addToDO, updateToDO, deleteToDo } from '../utils/HandleApi';

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('');
  const handleSubmet = (e) => {
    e.preventDefault();
    setValue('');
    addTodo(value);
  };

  const [toDo, setToDo] = useState([]);
  const [text, setText] = useState('');
  const [isUpdating, setIsUpdating] = useState(false);
  const [toDoId, setToDoId] = useState('');

  useEffect(() => {
    getAllTodo(setToDo);
  }, []);
  console.log(toDo)
  const updateMode = (_id, text) => {
    setIsUpdating(true);
    setText(text);
    setToDoId(_id);
  };

  return (
    <form className='TodoForm' onSubmit={handleSubmet}>
      <div className="Inputtop">
        <input
          type="text"
          placeholder="Add....."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div
          className="btn"
          onClick={isUpdating
            ? () => updateToDO(toDoId, text, setToDo, setText, setIsUpdating)
            : () => addToDO(text, setText, setToDo)}
        >
          {isUpdating ? 'Update' : 'Add'}
        </div>
      </div>

      <div className="list">

        {
          // console.log(`map.${toDo}`)
          toDo?.map(({_id, name}) => {
          console.log(name)

            return (
        <FormIcon
          key={_id}
          name={name}
          updateMode={() => updateMode(_id, name)}
          deleteToDo={() => deleteToDo(_id, setToDo)}
        />)
          })
        }
      </div>
    </form>
  );
};

export default TodoForm;
