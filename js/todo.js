const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input"); // === document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];



function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}


function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(toDo => toDo.id!== parseInt(li.id));
    saveToDos();


}

function paintTodo(newTodo){
    const li = document.createElement("li");  //엘리멘트 생성
    li.id = newTodo.id;
    const span = document.createElement("span"); //엘리멘트 생성
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click",deleteToDo);
    li.appendChild(span); //li는 span이란 자식을 가짐
    li.appendChild(button);
    toDoList.appendChild(li); //최종 리스트에 넣음
    
}

function handleToDoSubmit(event){
    event.preventDefault();
 
    const newTodo = toDoInput.value;
    toDoInput.value= "";
    const newTodoObj = {
        text : newTodo,
        id : Date.now(),
    };

    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit",handleToDoSubmit);


// const sayHello=(item)=>(console.log("반환해준당",item));
function sayHello(item){
    console.log("반환해준닷 : ",item);

}


const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintTodo);
}




