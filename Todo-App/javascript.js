const taskEntered = document.querySelector('.task-input')
const addedTasks = document.querySelector('.added-tasks-container')
const submit = document.querySelector('.task-form')
const options = document.querySelector('.options')
const itemsLeftText = document.querySelector('.items-left')
const sun = document.querySelector('.sun')
const moon = document.querySelector('.moon')
// let eachTask = document.querySelectorAll('.added-tasks')

let itemsLeft = 0

submit.addEventListener('submit', (e) => {
    e.preventDefault()
    
    if (!taskEntered.value) {
        alert('you must enter a task');
        return;
    }


// add checkbox button to the left of the text
    const addTaskDiv = document.createElement('div')
    const checkboxContainer = document.createElement('div')
    const checkboxLabel = document.createElement('label')
    const checkboxInput = document.createElement('input')
    const revisedCheckbox = document.createElement('div')
    const innerCheckbox = document.createElement('div')
    const taskText = document.createElement('div')

// add text of task
    addedTasks.appendChild(addTaskDiv)
    addTaskDiv.setAttribute('draggable', 'true')
    addTaskDiv.classList.add('added-tasks')
    addTaskDiv.classList.add('active-filter')
    addTaskDiv.appendChild(checkboxContainer)
    checkboxContainer.appendChild(checkboxLabel)
    checkboxContainer.classList.add('checkbox-container')
    checkboxLabel.appendChild(checkboxInput)
    checkboxLabel.appendChild(revisedCheckbox)
    checkboxLabel.appendChild(taskText)
    taskText.innerText = taskEntered.value
    checkboxInput.classList.add('task-checkbox')
    checkboxInput.setAttribute('type', 'checkbox')
    revisedCheckbox.appendChild(innerCheckbox)
    revisedCheckbox.classList.add('revised-checkbox')
    innerCheckbox.classList.add('inner-checkbox')
    itemsLeft ++
    if(itemsLeft==1) {
        itemsLeftText.innerText = itemsLeft + ' item left'
    } else {itemsLeftText.innerText = itemsLeft + ' items left'}

// when text is added, determine bg color based on light or dark theme
    if (moon.style.opacity === '0'){
        addTaskDiv.style.backgroundColor = 'hsl(235, 24%, 19%)'
        innerCheckbox.style.backgroundColor = 'hsl(235, 24%, 19%)'
        checkboxContainer.style.color = 'hsl(234, 39%, 85%)'
    }


// add effects of checkbox being checked
    checkboxInput.addEventListener('change', e => {
        if (e.target.checked) {
            taskText.classList.add('line-out')
            addTaskDiv.classList.remove('active-filter')
            addTaskDiv.classList.add('completed-filter')
            itemsLeft--
        } else {taskText.classList.remove('line-out')
                addTaskDiv.classList.add('active-filter')
                addTaskDiv.classList.remove('completed-filter')
                itemsLeft++
            }
        if(itemsLeft==1) {
            itemsLeftText.innerText = itemsLeft + ' item left'
        } else {itemsLeftText.innerText = itemsLeft + ' items left'}
    })

// add 'X' image to right of task and activate close function    
    const addCloseX = document.createElement('img')
    addCloseX.src = "images/icon-cross.svg"
    addCloseX.className = ('x')
    addTaskDiv.appendChild(addCloseX)
    addCloseX.addEventListener('click', () => {
        if (checkboxInput.checked==false) {  //check to see if box is checked to avoid double decrement
            itemsLeft--    
        }
        addTaskDiv.remove()
        if(itemsLeft==1) { //update items left text
            itemsLeftText.innerText = itemsLeft + ' item left'
        } else {itemsLeftText.innerText = itemsLeft + ' items left'}
    })

// clear task entry box
    taskEntered.value = ''
    
// adjust top border radius of bottom filter menu
    options.classList.add('options-adjust-border')


})



// Add functions for filtering tasks via 'All'/'Active'/'Completed'
const all = document.querySelector('.all')
const active = document.querySelector('.active')
const completed = document.querySelector('.completed')

all.addEventListener('click', () => {
    all.classList.add('used-filter')
    all.classList.remove('unused-filter')
    completed.classList.remove('used-filter')
    completed.classList.add('unused-filter')
    active.classList.remove('used-filter')
    active.classList.add('unused-filter')

    const activeFilter = document.querySelectorAll('.active-filter')
    const completedFilter = document.querySelectorAll('.completed-filter')
    completedFilter.forEach((x) => {
        x.classList.remove('display-none')
    })
    activeFilter.forEach((y) => {
        y.classList.remove('display-none')
    })

})

active.addEventListener('click', () => {
    active.classList.add('used-filter')
    active.classList.remove('unused-filter')
    all.classList.remove('used-filter')
    all.classList.add('unused-filter')
    completed.classList.remove('used-filter')
    completed.classList.add('unused-filter')

    const activeFilter = document.querySelectorAll('.active-filter')
    const completedFilter = document.querySelectorAll('.completed-filter')
    completedFilter.forEach((x) => {
        x.classList.add('display-none')
    })
    activeFilter.forEach((y) => {
        y.classList.remove('display-none')
    })
})

completed.addEventListener('click', () => {
    completed.classList.add('used-filter')
    completed.classList.remove('unused-filter')
    all.classList.remove('used-filter')
    all.classList.add('unused-filter')
    active.classList.remove('used-filter')
    active.classList.add('unused-filter')

    const activeFilter = document.querySelectorAll('.active-filter')
    const completedFilter = document.querySelectorAll('.completed-filter')
    completedFilter.forEach((x) => {
        x.classList.remove('display-none')
    })
    activeFilter.forEach((y) => {
        y.classList.add('display-none')
    })
})

// Clear all completed tasks
const clearCompleted = document.querySelector('.clear')
    clearCompleted.addEventListener('click', () => {
        const deleteThese=document.querySelectorAll('.completed-filter')
        deleteThese.forEach((x) => {
            x.parentNode.removeChild(x)
        })
    })

// Light/dark theme toggle
const body = document.getElementById('body')
const taskForm = document.querySelector('.task-input')
const taskForm2 = document.querySelector('.task-form')
const checkboxContainer = document.querySelector('.checkbox-container')
const itemStatus = document.querySelector('.item-status')

sun.addEventListener('click', () => {
    const addTaskDiv = document.querySelectorAll('.added-tasks')
    const innerCheckbox = document.querySelectorAll('.inner-checkbox') 
    sun.style.opacity = 0
    sun.style.zIndex = -3
    moon.style.opacity = 1
    moon.style.zIndex = 3
    body.style.backgroundImage = `url('images/bg-desktop-light.jpg')`
    body.style.backgroundColor = 'hsl(0, 0%, 98%)'
    itemStatus.style.backgroundColor = 'white'
    options.style.backgroundColor = 'white'
    taskForm.style.backgroundColor = 'white'
    taskForm.style.color = 'black'
    addTaskDiv.forEach((bg) => {
        bg.style.backgroundColor=''
        bg.style.color = ''
    })
    innerCheckbox.forEach((color) => {
        color.style.backgroundColor = 'white'
    })
})

moon.addEventListener('click', () => {
    const addTaskDiv = document.querySelectorAll('.added-tasks') 
    const innerCheckbox = document.querySelectorAll('.inner-checkbox')
    moon.style.opacity = 0
    moon.style.zIndex = -3
    sun.style.opacity = 1
    sun.style.zIndex = 3
    body.style.backgroundImage = `url('images/bg-desktop-dark.jpg')`
    body.style.backgroundColor = 'hsl(235, 21%, 11%)'
    itemStatus.style.backgroundColor = 'hsl(235, 24%, 19%)'
    options.style.backgroundColor = 'hsl(235, 24%, 19%)'
    taskForm.style.backgroundColor = 'hsl(235, 24%, 19%)'
    taskForm.style.color = 'hsl(234, 39%, 85%)'
    addedTasks.style.backgroundColor = 'hsl(235, 24%, 19%)'
    addTaskDiv.forEach((color) => {
        color.style.backgroundColor='hsl(235, 24%, 19%)'
        color.style.color = 'hsl(236, 33%, 92%)'
    })
    innerCheckbox.forEach((color) => {
        color.style.backgroundColor = 'hsl(235, 24%, 19%)'
    })
})

// Make tasks draggable

const addedTasksContainer = document.querySelector('.added-tasks-container')

addedTasksContainer.addEventListener('mousedown', () => {
    let eachTask = document.querySelectorAll('.added-tasks')
    const lastChild = addedTasksContainer.lastElementChild
    const allButLast = document.querySelectorAll('.added-tasks:not(.added-tasks:last-child)')

    eachTask.forEach(draggable => {
        draggable.addEventListener('dragstart', () => {
            draggable.classList.add('draggable')
        })
        draggable.addEventListener('dragend', () => {
            draggable.classList.remove('draggable')
        })
    })

    eachTask.forEach(insert => {
        insert.addEventListener('dragover', (d) => {
            const draggedItem = document.querySelector('.draggable')
            insert.parentNode.insertBefore(draggedItem, insert)
        })
    })
    
    const options = document.querySelector('.options')
    options.addEventListener('dragover', () => {
        const draggedItem = document.querySelector('.draggable')
        addedTasksContainer.append(draggedItem)
    })

})









