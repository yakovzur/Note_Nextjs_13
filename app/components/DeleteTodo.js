'use client'
import { useRouter } from "next/navigation";

const DeleteTodo = ({id}) => {

    const router = useRouter();

  const handleDelete = async ({id}) => {
    await fetch(`http://localhost:3000/api/todos/${id}`, {
      method: 'DELETE',
    })
    router.push('/addTodo')
    router.refresh();
  }

  return (
    <button
        className='mt-4 text-sm px-2 py-1 border border-red-400 rounded bg-red-400 text-white disabled:bg-opacity-50'
        type='button'
        onClick={() => handleDelete({id})}
    >
        Delete
    </button>
  )
}

export default DeleteTodo