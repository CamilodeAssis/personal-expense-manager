import { TableItems } from "./TableItems";

import { Item } from "../types/item";

type Props = {
    list: Item[];
}

export const TableArea = ({ list }: Props) => {
    return (

        <table className="w-full bg-white shadow shadow-slate-600 rounded-lg mt-5 border-separate p-5 ">
            <thead>
                <tr >
                    <th className="w-[130px]  text-left">Date</th>
                    <th className="w-[130px]  text-left ">Category</th>
                    <th className="w-auto  text-left">Title</th>
                    <th className="w-[150px]  text-left">Value</th>
                </tr>
            </thead>
            <tbody>
                {list  && list.map((item, index) => (
                    <TableItems key={index} item={item} />
                ))}
            </tbody>
        </table>
    );

}