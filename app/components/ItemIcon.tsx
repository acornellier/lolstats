import { usePopperTooltip } from 'react-popper-tooltip'
import { SpriteImage } from './SpriteImage'
import { useItemDefinition } from 'app/ddragon/items'

export const ItemIcon = ({ id }: { id: number }) => {
  const itemDefinition = useItemDefinition(id)

  const {
    getArrowProps,
    getTooltipProps,
    setTooltipRef,
    setTriggerRef,
    visible,
  } = usePopperTooltip({ placement: 'top' })

  if (!itemDefinition) return null

  return (
    <>
      <SpriteImage
        className="border border-cyan-700"
        image={itemDefinition.image}
        ref={setTriggerRef}
      />
      {visible && (
        <div
          ref={setTooltipRef}
          {...getTooltipProps({
            className: 'tooltip-container border bg-blueGray-800 p-4 w-96',
          })}
        >
          <div {...getArrowProps({ className: 'tooltip-arrow' })} />
          <span className="text-lg">{itemDefinition.name}</span>
          <span>{itemDefinition.gold.total}</span>
          <div
            dangerouslySetInnerHTML={{ __html: itemDefinition.description }}
          />
        </div>
      )}
    </>
  )
}
