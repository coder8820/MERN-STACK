const todoKey = "todoData";

export const getInitailTodoData = () => {
    const rawTodo = localStorage.getItem(todoKey);
    // Check for null, empty string, or "undefined"
    if (!rawTodo || rawTodo === "undefined") return [];
    
    try {
        return JSON.parse(rawTodo);
    } catch (error) {
        console.error("Failed to parse todo data:", error);
        return [];
    }
};

export const setTodoData = (data) => {
    return localStorage.setItem(todoKey, JSON.stringify(data));
};
