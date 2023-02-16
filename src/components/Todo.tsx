import { CheckSquare } from "phosphor-react";
import { FormEvent, useState,  } from "react";
import { Task } from "./Task";

interface TasksProps {
  id: number;
  title: string;
  isCompleted: boolean;
}

export function Todo() {
  const [data, setData] = useState('')
  const [tasks, setTasks] = useState<TasksProps[]>([]);
  const [taskTitle, setTaskTitle] = useState<string>("");

  function onDelete(idTask: number) {
    setTasks(tasks.filter(task =>  task.id !== idTask))
  }

  function handleCreateTask(event: FormEvent) {
    event.preventDefault()
    if(!taskTitle) return taskTitle

    const newTask = {
      id: Math.random(),
      title: taskTitle,
      isCompleted: false,
    }
    
    setTasks(prevState => [...prevState, newTask])

    console.log(tasks)
    setTaskTitle("");
  }
  return (
    <div className="bg-slate-400 w-[60%] h-full justify-center m-auto relative top-32 rounded-2xl">
      <div className="flex justify-between items-center flex-row p-14 text-zinc-800">
        <span className="font-bold text-3xl">Minhas tarefas</span>

        <div className="flex items-center justify-center">
          <form onSubmit={handleCreateTask}>
            <input
              type="text"
              className="w-80 p-4 h-10 border border-slate-500 rounded bg-slate-100 outline-none"
              placeholder="Adicionar nova tarefa"
              onChange={(event) => setTaskTitle(event.target.value)}
              value={taskTitle}
            />

            <button type="submit" className="p-3 bg-green-600 ml-1 rounded-md hover:brightness-125 transition-all duration-200 ">
              <CheckSquare size={16} color="white" />
            </button>
          </form>
        </div>
      </div>
      <div className="pb-5">
        {
          tasks.map(task => (
              <Task 
                key={task.id} 
                name={task.title}  
                taskId={task.id}
                onDelete={onDelete}             
              />
          ))
        }
      </div>
    </div>
  );
}
