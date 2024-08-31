"use strict";
class TodoList {
    constructor() {
        this.todos = [];
    }
    addTask(task) {
        const newTodo = {
            id: this.todos.length + 1,
            task,
            status: false
        };
        this.todos.push(newTodo);
    }
    completeTask(id) {
        const todo = this.todos.find(todo => todo.id === id);
        if (todo) {
            todo.status = true;
        }
    }
    getTasks() {
        return this.todos;
    }
}
const myTodo = new TodoList();
myTodo.addTask("learn typescript");
myTodo.addTask("learn spring boot");
myTodo.completeTask(1);
console.log(myTodo.getTasks());
