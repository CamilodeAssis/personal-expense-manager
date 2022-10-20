import { Item } from '../types/item'
import { formatDate } from '../helpers/dateFilter'
import { categories } from '../data/categories'


type Props = {
    item: Item;
}

export const TableItems = ({item}: Props) => {
    return (
        <tr>
            <td className='py-[10px]'>{formatDate(item.date)}</td>
            <td className='py-[10px]'>{categories[item.category].title}</td>
            <td className='py-[10px]'>{item.title}</td>
            <td className='py-[10px]'>R$ {item.value}</td>
        </tr>
    );
}