import Link from 'next/link'

const Page = () => {
  return (
    <>
      <nav className='container py-10'>
        <ul className='mt-6 flex gap-12'>
          <li>
            <Link
              href='/addTodo'
              className='font-medium underline text-emerald-800'
            >
              Add Todos
            </Link>
          </li>
        </ul>
      </nav>
      <section className='py-10'>
        <div className='container'>
          <h1 className='text-3xl font-bold'>Home page</h1>
        </div>
      </section>
    </>
  )
}

export default Page