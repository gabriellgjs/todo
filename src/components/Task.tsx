import { TrashSimple } from "phosphor-react";
import { useState } from "react";
import clsx from 'clsx';

interface TaskProps {
  taskId: number;
  name: string
  onDelete: (taskId: number) => void | undefined;
}
export function Task({name, taskId, onDelete}: TaskProps) {
  const [checked, setChecked] = useState(false)

  return (
    <div className="flex justify-between items-center pl-14 pr-14 mb-5"
    >
      <input  
        className="h-4 w-4" 
        type={"checkbox"}
        checked={checked}
        onChange={() => setChecked(prevState => !prevState)}
      />

      <span className={ clsx ("ml-3 flex-1 text-lg font-normal", {
          'line-through': checked === true 
      })}
      >
        {name}
      </span>

      <button
        onClick={() => onDelete(taskId)}
      >
        <TrashSimple
          color= 'red'
          size={20} 
        />
      </button>
    </div>
  )
}