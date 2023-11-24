'use client'

import Image from "next/image";
import { useState } from "react";

export default function Home() {

const [todos,setTodos] = useState('');
const [todoList, setTodoList] = useState([]);


const addTodo = () => {

  if (todos === '') {
    alert('Please enter a todo');

  }
  if(todos!== ''){
    setTodoList([...todoList,todos]);
    setTodos('');
  }
  else{
    return null;
  }

}

// delete todo function
const deleteTodo = (index) => { 
  const newTodoList = [...todoList];
  newTodoList.splice(index,1);
  setTodoList(newTodoList);
}


// Update the todo function

const editTodo = (index) => {
  
  
}




  return (
    <main className="m-3">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold text-center">Next.js Todos</h1>
        <p className="text-center">Todo app built with Next.js</p>
      </div>

      {/* input files for the todos to entered */}
      <div className="flex justify-center">
        <input
          className="w-1/2 p-2 m-3 border-2 text-black border-gray-200 rounded-lg"
          type="text"
          placeholder="Add your todos here"
          onChange={(e) => setTodos(e.target.value)}
        />
        <button className="w-1/12 p-2 m-3 text-white bg-blue-500 rounded-lg" onClick={addTodo}>
          Add Todo
        </button>
      </div>

      {/* list of todos show*/}

      <div className="flex flex-col items-center justify-center">
        <ul>
          {todoList.map((todo) => (
            <li className="flex justify-start">
              <p className="p-2 m-3 w-full text-black bg-white rounded-lg">{todo}</p>
              {/* delete Button  */}
              <button className="p-2 m-3 text-white bg-red-500 rounded-lg" onClick={deleteTodo}>Delete</button>
              {/* edit button  */}
              <button className="p-2 m-3 text-white bg-green-500 rounded-lg">Edit</button>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
