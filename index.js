// Этап 2: Работа с одной задачей

// Шаг 1. Создание переменных

// - Создать переменную task и присвоить ей строковое значение — описание задачи.
// - Создать переменную completedTaskCount и присвоить ей начальное значение.

// Шаг 2. Функция для отображения задачи

// - Создать функцию showTask(), которая будет выводить задачу в консоль.
// - Если task пустая строка, выводить сообщение "Задача отсутствует".
// - Если задача есть, выводить её описание.

// Шаг 3. Функция для добавления задачи

// - Создать функцию setTask(taskDescription), которая принимает описание задачи и записывает его в переменную task.
// - Если уже есть невыполненная задача, вывести сообщение "Не могу добавить задачу, завершите или удалите предыдущую" и не перезаписывать задачу.




// Шаг 4. Функция для завершения задачи

// - Создать функцию completeTask(), которая:
//   - Удаляет текущее описание задачи
//   - Увеличивает счётчик completedTaskCount на 1
//   - Если задачи нет, вывести соответствующее сообщение.

// Шаг 5. Функция для удаления задачи

// - Создать функцию deleteTask(), которая удаляет текущее описание задачи.
// - Если задачи нет, вывести соответствующее сообщение.

// Дополнительные условия

// - Все функции должны корректно обрабатывать пустые значения задачи.
// - При необходимости использовать логические операторы и условные конструкции.
// - Все переменные и функции должны быть объявлены с использованием подходящего способа объявления(let, const, function).





// Этап 2. Работа с одной задачей

// Шаг 1. Создание переменных
// let task = 'Рандомная задача'
const taskArray = []
let completedTaskCount = 0

// Шаг 2. Функция для отображения задачи
// const showTask = () => task === '' ? 'Задача отсутствует' : task

// function showTask(taskArray) {
//   taskArray.forEach(element => {
//     console.log(Object.keys(element))
//   })
// }




// Шаг 3. Функция для добавления задачи
// function setTask(taskDescription) {
//   if (task !== '') {
//     console.log('Не могу добавить задачу, завершите или удалите предыдущую')
//     return
//   }

//   task = taskDescription

//   console.log(task)
// }

// function setTask(task, task1, task2) {
//   taskArray.push(task, task1, task2)
// }

// setTask(task, task1, task2)

let IdCount = 1

function setTask(title, description) {
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

setTask('Купить продукты', 'Купить хлеб')
setTask('Купить продукты1', 'Купить хлеб1')
setTask('Купить продукты2', 'Купить хлеб2')



function showTasks(tasks) {
  tasks.forEach(task => {
    // console.log(task.id, task.title, task.description)
  })
}
console.log(showTasks(taskArray))




// Шаг 4. Функция для завершения задачи
// function completeTask() {
//   if (task === '') {
//     console.log('Задачи нет, нечего завершать')
//     return
//   }

//   task = ''
//   completedTaskCount += 1
// }


// function completeTask(taskArray) {
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



// Шаг 5. Функция для удаления задачи
// function deleteTask() {
//   if (task === '') {
//     console.log('Задачи нет, удалять нечего')
//     return
//   }

//   task = ''
// }

function deleteTask(taskArray) {
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
deleteTask(taskArray)
// console.log(showTask())



function clearTasks(taskArray) {
  taskArray.length = 0
}
// clearTasks(taskArray)

console.log(taskArray)