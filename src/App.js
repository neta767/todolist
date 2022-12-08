import './App.css';
import {Header} from "./components/Header";
import {ToggleAll} from "./components/ToggleAll";
import {Footer} from "./components/Footer";
import {TodosList} from "./components/TodosList";
import {useEffect, useState} from "react";

function App() {
    const [todos, setTodos] = useState([]);
    const [nonCompletedTodosCount, setNonCompletedTodosCount] = useState(0);
    const appTitle = 'TodosApp';

    useEffect(() => {
        setTodos([]);
        setNonCompletedTodosCount(0);
        //     fetch('https://jsonplaceholder.typicode.com/todos')
        //         .then(response => response.json())
        //         .then(setTodos)
    }, [])
    /**
     * useEffect append when the pointer change!!
     **/
    useEffect(() => {
        const uncompleted = todos.filter(todo => !todo.completed);
        setNonCompletedTodosCount(uncompleted.length);
    }, [todos]);

    const addTodo = (title) => {
        const newTodos = todos.concat({id: Date.now(), title, completed: false});
        setTodos(newTodos);
    };

    const removeTodo = (todoToRemove) => {
        const newTodos = todos.filter(currentTodo => currentTodo.id !== todoToRemove.id);
        setTodos(newTodos);
    };

    const markTodoAsCompleted = (todoToComplete) => {
        const newTodos = todos.map(currentTodo => (currentTodo === todoToComplete ?
            ({...currentTodo, completed: !currentTodo.completed}) : currentTodo));
        setTodos(newTodos);
    };

    const clearAllCompletedTodos = () => {
        const newTodos = todos.filter(currentTodo => !currentTodo.completed);
        setTodos(newTodos);
    };

    const markAllTodosAsCompleted = (checkedValue) => {
        // const newTodos= todos.map(currentTodo => currentTodo.completed = checkedValue);
        const newTodos = todos.map(currentTodo => ({...currentTodo, completed: checkedValue}));
        setTodos(newTodos);
    };

    const saveTodo = (title, todoToSave) => {
        const newTodos = todos.map(currentTodo => (currentTodo === todoToSave ?
            ({...currentTodo, title}) : currentTodo));
        setTodos(newTodos);
    };

    return (
        <section className="todoapp">
            <Header onAddTodo={addTodo}
                    title={appTitle}
            />
            <ToggleAll onToggleAll={markAllTodosAsCompleted}>
                <TodosList todos={todos}
                           onRemoveTodo={removeTodo}
                           onMarkTodoAsCompleted={markTodoAsCompleted}
                           onSaveTodo={saveTodo}/>
            </ToggleAll>
            <Footer itemLeftCount={nonCompletedTodosCount}
                    onClearAllCompletedTodos={clearAllCompletedTodos}
            />
        </section>
    );
}

export default App;
