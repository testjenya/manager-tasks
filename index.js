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
const completedTasks = []
let completedTaskCount = 0


const task = {
  title: "Купить продукты",
  description: "Молоко, хлеб, яйца",
  isCompleted: false,
  createdDate: new Date(),
  completedDate: null
}

const task1 = {
  title: "Купить продукты1",
  description: "Молоко, хлеб, яйца",
  isCompleted: false,
  createdDate: new Date(),
  completedDate: null
}

const task2 = {
  title: "Купить продукты2",
  description: "Молоко, хлеб, яйца",
  isCompleted: false,
  createdDate: new Date(),
  completedDate: null
}




// Шаг 2. Функция для отображения задачи
// const showTask = () => task === '' ? 'Задача отсутствует' : task

function showTask(taskArray) {
  taskArray.forEach(element => {
    console.log(Object.keys(element))
  })
}






// Шаг 3. Функция для добавления задачи
// function setTask(taskDescription) {
//   if (task !== '') {
//     console.log('Не могу добавить задачу, завершите или удалите предыдущую')
//     return
//   }

//   task = taskDescription

//   console.log(task)
// }

function setTask(task, task1, task2) {
  taskArray.push(task, task1, task2)
}

setTask(task, task1, task2)
// console.log(showTask())


// console.log(showTask(taskArray))





// Шаг 4. Функция для завершения задачи
// function completeTask() {
//   if (task === '') {
//     console.log('Задачи нет, нечего завершать')
//     return
//   }

//   task = ''
//   completedTaskCount += 1
// }


function completeTask(taskArray) {
  taskArray[1].isCompleted = true
  taskArray[1].completedDate = new Date(new Date().getTime() + 3 * 60 * 60 * 1000)

  completedTasks.push(taskArray[1])

  completedTaskCount++
}


completeTask(taskArray)
// console.log('Выполнено задач:', completedTaskCount)
// console.log(showTask())





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

  // console.log(taskArray)

}


deleteTask(taskArray)
// console.log(showTask())




function clearTasks(taskArray) {
  taskArray.length = 0
}
clearTasks(taskArray)

// console.log(taskArray)