// 拦截路由  当点击图片访问/photo/[id]时，会拦截到这个路由
import { photos } from '../../../data'

export default async function PhotoModalPage({ params }) {
  const { id } = await params
  const photo = photos.find((photo) => photo.id === String(id))

  return (
    <div className="flex h-60 justify-center items-center fixed bottom-0 bg-slate-300 w-full">
      <img className="w-52" src={photo.src} />
    </div>
  )
}