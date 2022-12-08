export function Footer({onClearAllCompletedTodos, itemLeftCount}) {
    return (
        <footer className="footer">
            <span className="todo-count">
                <strong>{itemLeftCount}</strong> items left
            </span>
            <button
                className="clear-completed"
                onClick={onClearAllCompletedTodos}>Clear completed
            </button>
        </footer>
    );
}
