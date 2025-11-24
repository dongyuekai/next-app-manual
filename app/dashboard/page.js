// async function getData() {
//   await new Promise(resolve => setTimeout(resolve, 3000))
//   return {
//     message: 'Hello, Dashboard!'
//   }
// }
// export default async function DashboardPage(props) {
//   const { message } = await getData()
//   return (
//     <div>
//       <h1>{message}</h1>
//     </div>
//   )
// }

'use client'
import React from 'react'

export default function Page() {
  const [error, setError] = React.useState(false)
  const handleGetError = () => {
    setError(true)
  }
  return (
    <>
      {
        error ? Error() : <button onClick={handleGetError}>Get Error</button>
      }
    </>
  )
}