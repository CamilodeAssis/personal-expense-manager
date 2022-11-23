import { Item } from '../types/item'
import { formatDate } from '../helpers/dateFilter'
import { categories } from '../data/categories'


type Props = {
    item: Item;
}

export const TableItems = ({ item }: Props) => {
    return (
        <tr>
            <td className='py-[10px]'>{formatDate(item.date)}</td>
            
            <td className='py-[10px] w-18'>
                <div style={{ background: categories[item.category].color }} className='inline-block rounded py-1 px-2 text-white'>{categories[item.category].title}</div>
            </td>
            <td className='py-[10px]'>{item.title}</td>
            <td className='py-[10px]'>
                <div style={{ color: categories[item.category].expense ? 'red' : '#66ba85' }} >R${item.value.toFixed(2)}</div>
            </td>
        </tr>
    );
}