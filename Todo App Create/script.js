function loadTodos (){
    // This function will load Todos from the broswer
    const todos = JSON.parse(localStorage.getItem("todos")) || {"todolist": []};
    console.log(todos);
    return todos;
}

function addTodoToLocalStorage(todoText) {
    const todos = loadTodos();
    todos.todolist.push(todoText);
    localStorage.setItem("todos", JSON.stringify(todos));

}

document.addEventListener("DOMContentLoaded",() => {
   const todoinput = document.getElementById("todoinput");
   const submitButton = document.getElementById("addTodo");
   submitButton.addEventListener("click",(event)=>{
    const todoText = todoinput.value;
    if(todoText == ``){
        alert("please write something for todo");
    }else{
        addTodoToLocalStorage(todoText);
    }
   })
   todoinput.addEventListener("change",(event)=>{
    //This is call back methode is first everytime there is a change in the input tag
    const todoText = event.target.value;
    event.target.value = todoText.trim();
    console.log(event.target.value);
    
    
   })
    

   loadTodos();
})
