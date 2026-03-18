import { db } from '#/db'
import { createFileRoute } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'

const todoFromServer = createServerFn({ "method": "GET" }).handler(() => {
  return db.query.todos.findMany()
})

export const Route = createFileRoute('/')({
  loader: () => {
    console.log(todoFromServer(), 'hi boy!')
    return todoFromServer()
  },
  component: App
})

function App() {
  const todos = Route.useLoaderData()
  console.log(todos.length)

  return (
    <main className="page-wrap px-4 pb-8 pt-14">
      <h1>Todo</h1>

    </main>
  )
}
