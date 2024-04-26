import React, { useEffect, useState } from 'react';

function Dummy() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const res = await fetch('https://dummyjson.com/todos');
      const data = await res.json();
      setTodos(data.todos);
    } catch (error) {
      console.error('Error fetching todos:', error);
      setTodos([]); 
    }
  };

  return (
    <div className='flex justify-center items-center h-screen overflow-hidden'>
      <div className='text-center' style={{ maxHeight: '700px', overflowY: 'auto' }}>
        <h1 className='font-extrabold text-4xl p-6'>Todos</h1>
        <ul>
          {todos.map((gorev) => (
            <li key={gorev.id} className='m-6 p-1' style={{ textDecoration: gorev.completed ? 'line-through' : 'none' }}>
              {gorev.todo}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Dummy;
