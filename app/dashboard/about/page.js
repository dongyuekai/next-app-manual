import { use } from 'react'
async function getData() {
  await new Promise(resolve => setTimeout(resolve, 3000))
  return {
    message: 'Hello, About!'
  }
}
export default function Page() {
  const { message } = use(getData())
  return (
    <div>
      <h1>Hello,About</h1>
    </div>
  )
}