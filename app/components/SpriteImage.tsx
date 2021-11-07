import { forwardRef } from 'react'
import { DdragonImageType, spriteUrl } from '../ddragon/image'

interface Props {
  className?: string
  image: DdragonImageType
}

export const SpriteImage = forwardRef<HTMLDivElement, Props>(
  ({ className, image }, ref) => {
    return (
      <div
        className={className}
        ref={ref}
        style={{
          backgroundImage: `url(${spriteUrl(image)})`,
          backgroundPosition: `-${image.x}px -${image.y}px`,
          backgroundRepeat: `no-repeat`,
          height: image.h,
          width: image.w,
        }}
      />
    )
  },
)
