let taskArray = []
let completedTaskCount = 0
let IdCount = 1

function addTask(title, description, createdDate) {
  const task = {
    id: IdCount++,
    title,
    description,
    isCompleted: false,
    createdDate,
    completedDate: null
  }
  taskArray.push(task)
}

addTask('Купить продукты', 'Купить хлеб', new Date('2026-03-20T09:00:00'))
addTask('Купить продукты1', 'Купить хлеб1', new Date('2026-03-17T09:05:00'))
addTask('Купить продукты2', 'Купить хлеб2', new Date('2026-03-10T09:10:00'))


function completeTask(id) {
  const task = taskArray.find(item => item.id === id)

  if (task) {
    task.isCompleted = true
    task.completedDate = new Date(new Date().getTime() + 3 * 60 * 60 * 1000)
    completedTaskCount++
  }
}
completeTask(2)
console.log(taskArray)
// console.log('Выполнено задач:', completedTaskCount)



function deleteTask(id) {
  const index = taskArray.findIndex(task => task.id === id)

  if (index != -1) {
    taskArray.splice(index, 1)
    console.log('Задача удалена')
  } else {
    console.log('Задача не найдена')
  }
}
// deleteTask(2)



function clearTasks() {
  for (let i = taskArray.length - 1; i >= 0; i--) {
    if (taskArray[i].isCompleted === false) {
      const answer = confirm('Таска ещё не выполнена, удалить?');

      if (answer) {
        taskArray.splice(i, 1)
        console.log('Задача удалена');
      } else {
        console.log('Задача оставлена');
      }
    } else {
      taskArray.splice(i, 1)
      console.log('Задача удалена');
    }
  }
}

// clearTasks(taskArray)

// console.log(taskArray)







// ================== Менеджер задач 3 ========================
// 1
function getTaskDescriptions() {
  return taskArray.map(task => task.description)
}
// console.log('массив description задач:', getTaskDescriptions())
// console.log(taskArray)


// 2
function getLongTasks() {
  return taskArray.filter(task => task.title.length > 10)
}
// console.log('длина title более 10 символов:', getLongTasks())
// console.log(taskArray)


// 3
function getTasksByDateRange(startDate, endDate, isCompleted = false) {
  return taskArray.filter(function (task) {
    // console.log(task.createdDate)

    if (task.isCompleted === true) {
      return task
    }
  })
}
// console.log(getTasksByDateRange())
// console.log(taskArray)


// 4
function clearShortTasks(arr) {
  return arr.filter(task => task.title.length >= 5)
}
taskArray = clearShortTasks(taskArray)

// console.log('удалить задачи длиной менее 5 символов', clearShortTasks())
// console.log(taskArray)


// 5
function changeTaskTitle(index, newTitle) {
  return taskArray[index].title = newTitle
}
// console.log('изменить title задачи:', changeTaskTitle(0, 'Новое Имя'))
// console.log(taskArray)


// 6 completeTask. уже реализовали в строке 22


// 7
function showTasks() {
  taskArray.forEach(task => console.log(task))
}
// console.log('свойства задач:');
// showTasks();

