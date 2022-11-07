

var todoservice = require('./todo.service.js');
describe('todo test suite', () => {

    test("truth_value", () => {
        expect(true).toBe(true);
    });
    
    let todo_service = new todoservice();

    test("if service instance is created", () => {
        expect(todo_service instanceof todoservice).toBe(true);
    });

    
    // Initial length of the todo list is 3 // 3 default tasks
    test("get_todos", () => {
        expect(todo_service.get_todos().todo.length).toEqual(3);
    });

    test("Add-todo",()=>{
        todo_service.add_todo({"title":"hari",
            "description": "psd",
            "done": true
    })
      expect(todo_service.get_todos().todo.length).toEqual(4);

    });


    test("Delete",()=>{
        todo_service.delete_todo("T3")
      expect(todo_service.get_todos().todo.length).toEqual(3);

    });

    test("Update",()=>{
        todo_service.update_todo("T1",
        {
        "title":"hari",
        "description": "psd",
        "done": true
        }
)
      expect(todo_service.get_todos().todo.length).toEqual(3);

    });


});