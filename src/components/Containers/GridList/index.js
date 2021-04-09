import { Card } from '../../../components'

export const GridList = ({ list = [] }) => {
  return (
    <div className="grid grid-cols-3 gap-8">
      {list.map(item => (
        <Card key={item.id} {...item} />
      ))}
    </div>
  )
}
