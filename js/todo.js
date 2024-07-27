const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = toDoForm.querySelector("input");

const TODOS_KEY = "toDos";

let toDos = [];

function paintToDo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");

    li.id = newTodo.id;
    li.appendChild(span);
    span.innerText = newTodo.text + "\u00a0";

    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteTodo);
    li.appendChild(button);

    toDoList.appendChild(li);

    //store newTodo in localStorage
    addNewTodo(newTodo);
}

function saveTodos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function addNewTodo(newTodo) {
    toDos.push(newTodo);
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();

    toDos = toDos.filter((item) => {
        return item.id !== parseInt(li.id);
    });
    saveTodos();
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = {
        text: toDoInput.value,
        id: Date.now()
    }
    toDoInput.value = "";
    paintToDo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);

//recover Todos
const toDosOfLocalStorage = localStorage.getItem(TODOS_KEY);
if (toDosOfLocalStorage) {
    const parsedTodos = JSON.parse(toDosOfLocalStorage);
    parsedTodos.forEach(paintToDo);
}

const arr = [1, 2, 3, 4, 5];
const filteredArr = arr.filter(item => {
    return item % 2 == 0;
});