class todoClass{
    add(todo){
        todos.push(todo);
    }   
    remove(i){
        // todos.splice(i,i);
        todos = todos.filter((_,index) => index+1!=i)
    }
    update(i,updatedTodo){
        todos[i] = updatedTodo;
    }
    getAll(){
        
        for(let i = 0;i<todos.length;i++){
            console.log(todos[i]);
        }
    }
    get(i){
        console.log(todos[i])
    }
    clear(){
        todos= [];
    }
}

var todos = []

const todo = new todoClass();
todo.add("YOu are pagla1");
todo.add("YOu are pagla2");

todo.add("YOu are pagla3");
todo.update(1,"You are gandu not pagal")
todo.remove();
todo.getAll();


