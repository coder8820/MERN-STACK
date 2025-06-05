import "./Todo.css";

export const Todo = () => {
  return (
    <section className="todo-container">
      <header>
        <h1>Todo Applicaiton</h1>
      </header>
      <section className="form">
        <div>
            <input type="text" className="todo-input" autoComplete="off" />
        </div>
        <div type="submit" className="todo-btn">Add task</div>
      </section>
    </section>
  );
};
