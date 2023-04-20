
import { getTodoById } from '@/lib/mongo/todos';
import { notFound } from 'next/navigation';
import UpdateTodoForm from '@/app/components/UpdateTodoForm';

const Page = async ({ params }) => {
  const { todo } = await getTodoById(params.id)

  if (!todo) {
    notFound()
  }

  return (
    <section className='py-20'>
      <div className='container'>
        <UpdateTodoForm id={params.id} />
      </div>
    </section>
  )
}

export default Page