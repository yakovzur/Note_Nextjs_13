import { NextResponse } from 'next/server';
import { deleteTodo, updateTodo } from '@/lib/mongo/todos';

export async function DELETE(request, { params }) {
    try {     
      const { id } = await params
      await deleteTodo(id)
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
  }

  export async function PUT(request, {params}) {
   
    try {     
      const {title } = await request.json()
      const { id } = await params
      const isCompleted = false
      await updateTodo(id, title);

    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
  }



  // export default async function handler(req, res) {
  //   const { id } = req.query;
  
  //   if (req.method === 'PUT') {
  //     const { title, isCompleted } = req.body;
  
  //     const { db } = await connectToDatabase();
  
  //     await db.collection('todos').updateOne(
  //       { _id: id },
  //       { $set: { title, isCompleted } }
  //     );
  
  //     res.status(200).json({ message: 'Todo updated successfully' });
  //   }
  // }
  