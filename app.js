const addForm = document.querySelector('.add')
const list = document.querySelector('.todos')


//template for task added
const taskTemplate = task => {

  const html = `
        <li class="text-light list-group-item d-flex justify-content-between align-items-center">
					<span>${task}</span>
					<i class="fa-solid fa-trash-can delete"></i>
				</li>`
  list.innerHTML += html
}

//add task
addForm.addEventListener('submit', e => {

  e.preventDefault()
  const task = addForm.add.value.trim()
  
  if (task.length) {
    taskTemplate(task)
    addForm.reset()
  }
})

//Delete tasks
list.addEventListener('click', e => {

  if (e.target.classList.contains('delete')) {
    e.target.parentElement.remove()
  }
})