import Top from 'app/assets/positions/Top.svg'
import Jungle from 'app/assets/positions/Jungle.svg'
import Mid from 'app/assets/positions/Mid.svg'
import Bottom from 'app/assets/positions/Bottom.svg'
import Support from 'app/assets/positions/Support.svg'

export const PositionRow = () => {
  return (
    <div className="flex h-12 gap-3 p-2 bg-coolGray-900">
      <Top />
      <Jungle />
      <Mid />
      <Bottom />
      <Support />
    </div>
  )
}
