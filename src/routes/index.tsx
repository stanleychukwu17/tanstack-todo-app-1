import { Button } from '#/components/ui/button'
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from '#/components/ui/empty'
import { db } from '#/db'
import { createFileRoute, Link } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
import { ListTodo, Plus } from 'lucide-react'

const todoFromServer = createServerFn({ "method": "GET" }).handler(() => {
  return db.query.todos.findMany()
})

export const Route = createFileRoute('/')({
  loader: () => {
    return todoFromServer()
  },
  component: App
})

function App() {
  const todos = Route.useLoaderData()
  console.log(todos)

  return (
    <main className="page-wrap px-4 py-4">
      {
        (todos.length === 0) ? (
          <EmptyTodos />
        ) : (
          <ul>
            {todos.map((todo) => (
              <li key={todo.id}>{todo.title}</li>
            ))}
          </ul>
        )
      }
    </main>
  )
}

function EmptyTodos() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <ListTodo />
        </EmptyMedia>
      </EmptyHeader>
      <EmptyTitle>
        No todos found
      </EmptyTitle>
      <EmptyDescription>
        Get started by creating a new todo.
      </EmptyDescription>
      <EmptyContent>
        <Button size="lg" className='px-4' asChild>
          <Link to="/todo/new">
            <Plus /> Add Todo
          </Link>
        </Button>
      </EmptyContent>
    </Empty>
  )
}

function TodoList() {
  return (
    <>Hi</>
  )
}