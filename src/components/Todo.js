import {useEffect, useRef, useState} from "react";

export function Todo({todo, onRemoveTodo, onMarkTodoAsCompleted, onSaveTodo}) {
    const editInput = useRef(null);
    const [editMode, setEditMode] = useState(false);
    useEffect(() => {
        editInput.current.focus();
    }, [editMode])

    function handelOutOfFocus(event) {
        onSaveTodo(event.target.value, todo);
        setEditMode(!editMode);
    }

    return (
        <li className={`${editMode ? 'editing' : ''} ${todo.completed ? 'completed' : ''}`}>
            <div className="view"
                 onDoubleClick={() => setEditMode(!editMode)}>
                <input className="toggle"
                       type="checkbox"
                       checked={todo.completed}
                       onChange={() => onMarkTodoAsCompleted(todo)}
                />
                <label>{todo.title}</label>
                <button className="destroy"
                        onClick={() => onRemoveTodo(todo)}
                />
            </div>
            <input className="edit"
                   onBlur={handelOutOfFocus}
                   ref={editInput}
                   defaultValue={todo.title}
            />
        </li>
    );
}
