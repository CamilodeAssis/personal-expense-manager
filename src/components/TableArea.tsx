
import { Item } from "../types/item";

type Props = {
    list: Item[];
}

export const TableArea = ({ list }: Props) => {
    return (

        <table className="w-full bg-white p-5 shadow shadow-slate-600 rounded-lg mt-5 ">
            <thead>
                <tr >
                    <th className="w-[100px] px-2 text-left">Date</th>
                    <th className="w-[130px] px-2 text-left ">Category</th>
                    <th className="w-auto px-2 text-left">Title</th>
                    <th className="w-[150px] px-2 text-left">Value</th>
                </tr>
            </thead> 
            <tbody>
                {list && list.map((item, index)=>(
                    <tr key={index} >
                        
                        <td ><>{item.date}</></td>
                        <td >{item.category}</td> 
                        <td >{item.title}</td>
                        <td>{item.value} R$</td>
                        
                    </tr>
                ))}
            </tbody>
        </table>
    );

}