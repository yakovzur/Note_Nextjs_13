'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'


const IsCompletedButton = ({pram}) => {
 
  const router = useRouter();

  const [isCompleted, setIsCompleted] = useState(pram)

  const handleChange = async () => {
    setIsCompleted(!isCompleted);
  
    await fetch(`http://localhost:3000/api/todos/${id}`, {
      method: 'PUT',
      body: JSON.stringify({isCompleted})
      
    })
  
    router.push('/addTodo')
    router.refresh();
  }

  return (
    <button onClick={() => handleChange}
        type='submit'
        className='ml-2 text-sm px-2 py-1 border border-emerald-400 rounded bg-emerald-400 text-white disabled:bg-opacity-50'
    >
    </button>
  )
}

export default IsCompletedButton