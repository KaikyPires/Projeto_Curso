const form = document.querySelector("#to-do-form");
const taskTitleForm = document.querySelector("#task-title-input");

const toDoListUl = document.querySelector("#to-do-list");

let tasks = [];

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

  const input = document.createElement("input"); // <input
  input.setAttribute("type", "checkbox"); // <input type="checkbox">

  const span = document.createElement("span");
  span.textContent = taskTitle;

  const button = document.createElement("button");
  button.textContent = "Remover";

  button.addEventListener("click", (event) => {
    const liToRemove = event.target.parentElement;
    const titleToRemove = liToRemove.querySelector("span");
    tasks.filter((tarefa) => tarefa.title !== titleToRemove);
    toDoListUl.removeChild(liToRemove);
  });

  //Adcionando nova tarefa
  const li = document.createElement("li");
  li.appendChild(input);
  li.appendChild(span);
  li.appendChild(button);

  toDoListUl.appendChild(li);

  taskTitleForm.value = "";
});
