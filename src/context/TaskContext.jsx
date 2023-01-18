import {createContext, useState, useEffect} from 'react'
import {tasks as data} from '../data/tasks'

export const TaskContext = createContext()

export function TaskContextProvider(props) {
    const [tasks, setTasks] = useState([]);

    function createTask(task) {
        if (task.title === '') {
            return alert('Por favor llenar los campos requeridos')
        } else {
            setTasks([...tasks,  {
                title: task.title,
                id: tasks.length,
                description: task.description
              },
          ]);
        }   
    }

    function deleteTask(taskId) {
        setTasks(tasks.filter(task => task.id !== taskId))
    }

    useEffect (() => {
        setTasks(data)
      }, []);

  return (
   <TaskContext.Provider value={{
    tasks,
    deleteTask,
    createTask
   }}>
    {props.children}
   </TaskContext.Provider>
  )
}
