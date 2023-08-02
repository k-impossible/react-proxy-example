const DisplayTodo = ({todos, getAllTodo}) => {


    return(
        <div className="display-wrapper">
            <div className="display-box">
                <div className="display-board">
                    <ul>
                        {todos.map((todo,index) => {
                        return (
                            <li key = {index} className={index%2 === 0?'odd':'even'}>
                                <span>{index + 1}</span>
                                <span>{todo.todo}</span>
                                <span>{todo.category}</span>
                                <span>{todo.isComplete}</span>
                            </li>
                        )
                        })}
                    </ul>
                </div>
                <div className="get-button">
                    <button onClick={() => getAllTodo()}>Get all Todos</button>
                </div>
            </div>
        </div>
    )
}

export default DisplayTodo;