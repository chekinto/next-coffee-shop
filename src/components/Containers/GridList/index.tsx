import { FunctionComponent } from 'react'
import { Card } from '../../../components'
import { ProductProps } from '../../../types'

interface GridListProps {
  list: ProductProps[];
}

export const GridList: FunctionComponent<GridListProps> = ({ list = [] }) => {
  return (
    <div className="grid__list">
      {list.map(item => (
        <Card key={item.id} {...item} />
      ))}
    </div>
  )
}
