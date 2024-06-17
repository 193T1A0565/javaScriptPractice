const todoList = [];

renderTodoList(); 
function renderTodoList(){
    let todoListHTML = '';

    todoList.forEach((todoObject, index)=>{
        const {name, dueDate} = todoObject;
        const html = `
        <div>${name}</div>
        <div>${dueDate}</div>
        <button onclick="
            todoList.splice(${index}, 1);
            renderTodoList();
        " class="delete-todo-button"> 
        Delete</button>
        
        `;
        todoListHTML += html;
    })
    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function addTodo(){
    const inputElement = document.querySelector('.js-name-input');
    const inputElement1 = document.querySelector('.js-due-date-input');
    const name = inputElement.value;
    const dueDate = inputElement1.value;
    todoList.push({
        //name: name,
        //dueDate: dueDate,
        name,
        dueDate
    });
    console.log(todoList);
    inputElement.value = '';
    inputElement1.value = '';
    renderTodoList(); 

}