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
addTask('Купить продукты', 'Купить хлеб', new Date('2026-03-20T09:00:00Z'))
addTask('Купить продукты1', 'Купить хлеб1', new Date('2026-03-17T09:05:00Z'))
addTask('Купить продукты2', 'Купить хлеб2', new Date('2026-03-10T09:10:00Z'))


function completeTask(id) {
  const task = taskArray.find(item => item.id === id)

  if (!task) return

  task.isCompleted = true
  task.completedDate = new Date().toISOString()
  completedTaskCount++

}
completeTask(2)
// console.log(taskArray)
// console.log('Выполнено задач:', completedTaskCount)



function deleteTask(id) {
  const index = taskArray.findIndex(task => task.id === id)
  if (index === -1) return console.log('Задача не найдена')

  const task = taskArray[index]

  if (!task.isCompleted) {
    const answer = confirm('Задача ещё не выполнена. Удалить?')
    if (!answer) return console.log('Задача оставлена')
  }

  taskArray.splice(index, 1)
  console.log('Задача удалена')
}
// deleteTask(1)



function clearTasks() {
  taskArray.length = 0;
  console.log('Все задачи удалены');
}
// clearTasks(taskArray)
console.log(taskArray)






// ================== Менеджер задач 3 ========================
// 1
function getTaskDescriptions() {
  return taskArray.map(task => task.description)
}
// console.log('массив description задач:', getTaskDescriptions())
// console.log(taskArray)


// 2
function getLongTasks() {
  return taskArray.filter(task => task.title.length > 10 || task.description.length > 10)
}
// console.log('длина title более 10 символов:', getLongTasks())
// console.log(taskArray)


// 3
function getTasksByDateRange(startDate, endDate, isCompleted = false) {
  return taskArray.filter(function (task) {
    const createdDate = task.createdDate
    const completedDate = task.completedDate

    const isCreatedInRange = (createdDate >= startDate && createdDate <= endDate)

    const isCompletedInRange = (completedDate !== null && completedDate >= startDate && completedDate <= endDate)

    if (!isCreatedInRange && !isCompletedInRange) return false
    if (task.isCompleted !== isCompleted) return false
    return true
  })

}
console.log(getTasksByDateRange(
  new Date('2026-03-10T00:00:00Z'),
  new Date('2026-03-25T23:59:59Z'),
  // true
))



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

