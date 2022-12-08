export function Header({title, onAddTodo}) {
    function handelTaskInput(even) {
        if (even.key === 'Enter') {
            onAddTodo(even.target.value);
            even.target.value = '';
        }
    }

    return (
        <header className="header">
            <h1>{title}</h1>
            <input className="new-todo"
                   placeholder="What needs to be done?"
                   autoFocus
                   onKeyUp={handelTaskInput}
            />
        </header>
    );
}
