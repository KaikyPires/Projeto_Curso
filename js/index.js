const form = document.querySelector('#to-do-form')
const taskTitleForm = document.querySelector('#task-title-input')

const toDoListUl = document.querySelector('#to-do-list')

let tasks = []


form.addEventListener('submit', (evento) =>{
    evento.preventDefault()// Evita comportamento de recarregar a pagina quando submeter
    
    const taskTitle = taskTitleForm.value

   if(taskTitle.length < 3){
    alert('Sua tarefa prescisa ter pelo menos 3 caracteres')
    return
   }
   tasks.push(taskTitle)

   //Adcionando nova tarefa
    const li = document.createElement('li')
    li.textContent = taskTitle
   toDoListUl.appendChild(li)
})