import { photos } from '../../data'
import { notFound } from 'next/navigation'

export default async function PhotoPage({ params }) {
  // 在Next.js 15+版本中，params现在是一个Promise，需要使用await或React.use()来解包
  const { id } = await params
  const photo = photos.find((photo) => photo.id === String(id))

  if (!photo) {
    notFound()
  }

  return (
    <div>
      <img className='block w-1/4 mx-auto mt-10' src={photo.src} alt={photo.id} />
    </div>
  )
}