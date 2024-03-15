
import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Todo {
    id: number;
    title: string;
    // Add other properties as needed
  }
  

const home = () => {

    const [todos, setTodos] = useState<Todo[]>([]);
    
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/todo');
        setTodos(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


  return (
    <div>
      {todos.map((todo) => (
        <li>{todo.title}</li>
      ))}
    </div>
  )
}

export default home
