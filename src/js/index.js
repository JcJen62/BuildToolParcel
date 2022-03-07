let todos = [
    {
        "title": "Eat",
        "id": 1,
        "complete": false,
      },
      {
        "title": "Sleep",
        "id": 2,
        "complete": false,
      },
      {
        "title": "Code",
        "id": 3,
        "complete": false
      }
]

const deleteTodos = document.querySelector('#deleteBtn')
deleteTodos.addEventListener('click', () => {
    for (let i = todos.length - 1; i >= 0; i--) {
        let todo = todos[i]
          if(todo.complete === true){
            todos.splice(i, 1)
          }
      }

      let containerDiv = document.querySelector('#todoContainer')
      containerDiv.innerHTML = ""
      displayTodos(todos)
})

const addItemBtn = document.querySelector("#addBtn");
addItemBtn.addEventListener("click", () => {
  let newTask = {
    title: document.querySelector("#addText").value,
    id: todos.length + 1,
    complete: false
  }

  todos.push(newTask)

  let containerDiv = document.querySelector('#todoContainer')
  containerDiv.innerHTML = ""
  displayTodos(todos)
})

let containerDiv = document.querySelector('#todoContainer')
const displayTodos = (arr) => {
    arr.forEach(element => {
        const editInput = document.createElement('input')
        editInput.setAttribute('id', 'newTitle')
        editInput.setAttribute('type', 'text')
        editInput.setAttribute('placeholder', element.title)

        const saveNewTitle = document.createElement('a')
        saveNewTitle.setAttribute('href', '#')
        saveNewTitle.classList.add('card-link')
        saveNewTitle.setAttribute('id', `${element.id}`)
        saveNewTitle.innerHTML = 'Save Note'

        const cardDiv = document.createElement("div")
        cardDiv.classList.add('card')

        const cardBody = document.createElement('div')
        cardBody.classList.add('card-body')

        const cardTitle = document.createElement('h5')
        cardTitle.classList.add('card-title')
        cardTitle.innerHTML = element.title
        cardBody.appendChild(cardTitle)

        const cardDone = document.createElement('p')
        cardDone.classList.add('card-text')
        cardDone.innerHTML = ''
        cardBody.appendChild(cardDone)
        
        const editBtn = document.createElement('a')
        editBtn.classList.add('card-link')
        editBtn.setAttribute('id', element.id)
        editBtn.innerHTML = 'Edit ToDo'
        cardBody.appendChild(editBtn)

        editBtn.addEventListener('click', () => {
            cardTitle.replaceWith(editInput)
            editBtn.replaceWith(saveNewTitle)
        })

        saveNewTitle.addEventListener('click', (event) => {
            elemIndex = todos.findIndex((obj) => obj.id === element.id)
            todos[elemIndex].title = editInput.value;
            
            containerDiv.innerHTML = ''
            displayTodos(todos)
        })

        const completeBtn = document.createElement('a')
        completeBtn.classList.add('card-link')
        completeBtn.classList.add('complete')
        completeBtn.setAttribute('id', element.id)
        completeBtn.innerHTML = 'Complete ToDo'
        cardBody.appendChild(completeBtn)

        completeBtn.addEventListener('click', (event) => {
            cardDone.innerHTML = 'Completed! &#x2713'
            elemIndex = todos.findIndex((obj) => obj.id === element.id)
            todos[elemIndex].complete = true
        })

        cardDiv.appendChild(cardBody)
        containerDiv.appendChild(cardDiv)
    });

}

displayTodos(todos)