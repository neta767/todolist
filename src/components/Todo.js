import {useRef, useState} from "react";

export function Todo({todo, onRemoveTodo, onMarkTodoAsCompleted, onSaveTodo}) {
    const [editMode, setEditMode] = useState(false);
    const input1Ref = useRef(todo.title);

    function handelOutOfFocus(event) {
        onSaveTodo(event.target.value, todo);
        setEditMode(!editMode);
    }

    const handelDoubleClick = () => {
        setEditMode(!editMode);
        input1Ref.current.focus();
    }

    return (
        <li className={`${editMode ? 'editing' : ''} ${todo.completed ? 'completed' : ''}`}>
            <div className="view"
                 onDoubleClick={handelDoubleClick}>
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
                   ref={input1Ref}
            />
        </li>
    );
}
