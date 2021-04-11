import { Card } from '../../../components'

export const GridList = ({ list = [] }) => {
  return (
    <div className="grid__list">
      {list.map(item => (
        <Card key={item.id} {...item} />
      ))}
    </div>
  )
}
