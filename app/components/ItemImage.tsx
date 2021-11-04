import { DdragonImageType, spriteUrl } from '../ddragon/image'

export const SpriteImage = ({ image }: { image: DdragonImageType }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${spriteUrl(image)})`,
        backgroundPosition: `-${image.x}px -${image.y}px`,
        backgroundRepeat: `no-repeat`,
        height: image.h,
        width: image.w,
      }}
    />
  )
}
