const form = document.querySelector("#to-do-form");
const taskTitleForm = document.querySelector("#task-title-input");

const toDoListUl = document.querySelector("#to-do-list");

let tasks = [];
function renderTasksOnHtml(taskTitle, done ='false'){
    const input = document.createElement("input"); // <input
  input.setAttribute("type", "checkbox"); // <input type="checkbox">

  input.addEventListener('change', (event) =>{
    const liToToggle = event.target.parentElement;

    const done = event.target.checked

    const spanToToggle = liToToggle.querySelector('span')
    if(done){
        spanToToggle.style.textDecoration = 'line-through'
    }else{
        spanToToggle.style.textDecoration = 'none'
    }
    tasks = tasks.map(tarefa => {
        if(tarefa.title === spanToToggle.textContent){
            return{
                title:tarefa.title,
                done:!tarefa.done
            }
        }

        return tarefa
    })
    localStorage.setItem('tasks', JSON.stringify(tasks))
  })

  const span = document.createElement("span");
  span.textContent = taskTitle;

  const button = document.createElement("button");
  button.textContent = "Remover";

  button.addEventListener("click", (event) => {
    const liToRemove = event.target.parentElement;
    const titleToRemove = liToRemove.querySelector("span");
    tasks = tasks.filter((tarefa) => tarefa.title !== titleToRemove.textContent);
    toDoListUl.removeChild(liToRemove);

    localStorage.setItem('tasks', JSON.stringify(tasks))
  });

  //Adcionando nova tarefa
  const li = document.createElement("li");
  li.appendChild(input);
  li.appendChild(span);
  li.appendChild(button);

  toDoListUl.appendChild(li);

  taskTitleForm.value = "";

 input.checked = done

 span.textContent = taskTitle

 if(done){
     spanToToggle.style.textDecoration = 'line-through'
 }
}
window.onload = () => {
    const taskLocalStorage = localStorage.getItem('tasks')

    if(!taskLocalStorage) return

    tasks = JSON.parse(taskLocalStorage)

    tasks.forEach(tarefa => {
        renderTasksOnHtml(tarefa.title, tarefa.done)
    });
  }
form.addEventListener("submit", (evento) => {
  evento.preventDefault(); // Evita comportamento de recarregar a pagina quando submeter


  const taskTitle = taskTitleForm.value;

  if (taskTitle.length < 3) {
    alert("Sua tarefa prescisa ter pelo menos 3 caracteres");
    return;
  }
  tasks.push({
    title: taskTitle,
    done: false,
    
  });
  localStorage.setItem('tasks', JSON.stringify(tasks))
  
});
