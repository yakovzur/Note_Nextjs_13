'use client'

import { useRouter } from 'next/navigation'
import { useState, useTransition } from 'react'


const UpdateTodoForm = ({id}) => {
 
  const router = useRouter();

  const [title, setTitle] = useState('')

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault()

    await fetch(`http://localhost:3000/api/todos/${id}`, {
      method: 'PUT',
      body: JSON.stringify({title})
      
    })
  
    setTitle('');
    router.push('/addTodo')
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className='font-medium mb-2'>Update Todo</h2>
      <input
        type='text'
        name='title'
        className='border border-emerald-400 px-2 py-0.5 rounded'
        onChange={handleTitleChange}
      />
      <button
        type='submit'
        className='ml-2 text-sm px-2 py-1 border border-emerald-400 rounded bg-emerald-400 text-white disabled:bg-opacity-50'
      >
        Update Todo
      </button>
    </form>
  )
}

export default UpdateTodoForm