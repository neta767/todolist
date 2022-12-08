import {Todo} from "./Todo";

export function TodosList({todos, onRemoveTodo, onMarkTodoAsCompleted, onSaveTodo}) {
    return (
        <ul className="todo-list">
            {todos.map((todo) => (
                <Todo key={todo.id}
                      todo={todo}
                      onRemoveTodo={onRemoveTodo}
                      onMarkTodoAsCompleted={onMarkTodoAsCompleted}
                      onSaveTodo={onSaveTodo}
                />
            ))}
        </ul>
    );
}