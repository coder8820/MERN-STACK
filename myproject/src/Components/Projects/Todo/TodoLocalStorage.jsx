const todoKey = "todoData";

export const getInitailTodoData = ()=>{
    const rawTodo = localStorage.getItem(todoKey);
    if (!rawTodo) return [];
    return JSON.parse(rawTodo);
}

export const setTodoData = (data) => {
    return localStorage.setItem(todoKey, JSON.stringify(data));
}