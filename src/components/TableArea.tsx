
import { Item } from "../types/item";

type Props = {
    list: Item[];
}

export const TableArea = ({ list }: Props) => {
    return (

        <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Category</th>
                    <th>Title</th>
                    <th>Value</th>
                </tr>
            </thead>
            <tbody>
                {list && list.map((item, index)=>(
                    <tr key={index}>
                        <td>{item.title}</td>
                        <td>{item.category}</td>
                        <td></td>
                    </tr>
                ))}
            </tbody>
        </table>
    );

}