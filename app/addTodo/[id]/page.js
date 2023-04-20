import DeleteTodo from '@/app/components/DeleteTodo';
import { getTodoById } from '@/lib/mongo/todos';
import { notFound } from 'next/navigation';
import Link  from 'next/link'

const Page = async ({ params }) => {
  const { todo } = await getTodoById(params.id)

  if (!todo) {
    notFound()
  }

  return (
    <section className='py-20'>
      <div className='container'>
        <p className='text-lg font-medium mt-6 border p-4'>{todo?.title}</p>
        <div className='flex items-center justify-between'>
            <DeleteTodo id={params.id} />
            <button
              className='mt-4 text-sm px-2 py-1 border border-green-400 rounded bg-green-400 text-white disabled:bg-opacity-50'
              type='button'        
            >
              <Link href={`/updateTodo/${todo._id}`}>Edit</Link>
            </button>
        </div>
      </div>
    </section>
  )
}

export default Page