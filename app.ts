interface Todo{
    id:number,
    task:string,
    status:boolean
}

class TodoList{
    private todos : Todo[] = [];

    addTask(task:string):void{
        const newTodo:Todo={
            id:this.todos.length+1,
            task,
            status:false
        };
        this.todos.push(newTodo);
    }


    completeTask(id:number):void{
        const todo = this.todos.find(todo=>todo.id === id);
        if(todo){
            todo.status= true;
        }
    }

    getTasks(): Todo[]{
        return this.todos;
    }

}

const myTodo = new TodoList();

myTodo.addTask("learn typescript")
myTodo.addTask("learn spring boot")


myTodo.completeTask(1)


console.log(myTodo.getTasks())