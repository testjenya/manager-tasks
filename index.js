const taskArray = []
let completedTaskCount = 0
let IdCount = 1

function addTask(title, description) {
  const task = {
    id: IdCount++,
    title,
    description,
    isCompleted: false,
    createdDate: new Date(),
    completedDate: null
  }
  taskArray.push(task)
}

addTask('Купить продукты', 'Купить хлеб')
addTask('Купить продукты1', 'Купить хлеб1')
addTask('Купить продукты2', 'Купить хлеб2')



function completeTask(id) {
  const task = taskArray.find(item => item.id === id)

  if (task) {
    task.isCompleted = true
    task.completedDate = new Date(new Date().getTime() + 3 * 60 * 60 * 1000)
    completedTaskCount++
  }
}
completeTask(2)

console.log('Выполнено задач:', completedTaskCount)



function deleteTask(id) {
  const index = taskArray.findIndex(task => task.id === id)

  if (index != -1) {
    taskArray.splice(index, 1)
    console.log('Задача удалена')
  } else {
    console.log('Задача не найдена')
  }
}
deleteTask(2)



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

clearTasks(taskArray)

console.log(taskArray)