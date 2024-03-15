"use client"
import Link from "next/link";
import tijaaabo from "./components/tijaabo";


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';



export default function Home() {

  // const [todos, setTodos] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get('http://localhost:3000/api/todo');
  //       setTodos(response.data);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
   <>
    <header className="flex justify-between items-center mb-4">
      <h1 className="text-2xl">Todo</h1>
      <Link className="border border-slate-300 px-2 py-1
      rounded hover:bg-slate-700 focus-within:slate-700"
      href="/add">Add</Link>
    </header>
    <ul className="pl-4">
   
    </ul>
    
   </>
  );
}
