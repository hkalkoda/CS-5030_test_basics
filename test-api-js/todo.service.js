class todoservice{
    todo_data = {
        "todo":[{
            "title": "T0",
            "description": "D1",
            "done": false
        },{
            "title": "T1",
            "description": "D1",
            "done": false
        },{
            "title": "T2",
            "description": "D1",
            "done": false
        }]
    }
    constructor(){
        this.todos=this.todo_data;
    }

    get_todos(){
        return this.todos;
    }

    add_todo(todo){
        // Your code here
        this.todo_data.todo.push(todo)
    }

    delete_todo(title){
        // Your code here
        this.todo_data.todo.shift(title,1)
    }

    update_todo(title, todo){
        // Your code here
        let c = this.todo_data.todo.findIndex((m) => m.title == title)
        this.todo_data.todo.splice(c,1,todo)

    }

}
module.exports= todoservice;