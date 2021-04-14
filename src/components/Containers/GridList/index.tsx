import { FunctionComponent } from 'react'
import { Product } from '../../../types'
import { Card } from '../../../components'

interface GridListProps {
  list: Product[]
}

export const GridList: FunctionComponent<GridListProps> = ({ list = [] }) => {
  console.log('list :>> ', list);
  return (
    <div className="grid__list">
      {list.map(item => (
        <Card key={item.id} {...item} />
      ))}
    </div>
  )
}
