import Link from 'next/link'
import React from 'react'
import prisma from '../db'
import { redirect } from 'next/navigation'

async function createTodo(data:FormData) {
    "use server"
    const title = data.get("title")?.valueOf()
    if (typeof title !== "string" || title.length === 0) {
        throw new Error("invalid title")
    }
    await prisma.todo.create({data: {title, complete: false}})
    redirect("/")
}

const page = () => {
  return (
    <>
    <header className="flex justify-between items-center mb-4">
    <h1 className="text-2xl">New</h1>
  </header>
  <form action={createTodo} className='flex gap-2 flex-col'>
    <input type="text"
    name='title'
    className='border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100' />
  <div className='flex gap-1 justify-end'>
    <Link className="border border-slate-300 text-slate-200 px-2 py-1 rounded
      hover:bg-slate-500 outline-none bg-slate-700" href="../">Cancel</Link>
    <button type='submit'
    className="border border-slate-300 text-slate-200 px-2 py-1 rounded
    hover:bg-slate-500 outline-none bg-slate-700">
        Create
    </button>
  </div>
  </form>
  </>
  )
}

export default page
