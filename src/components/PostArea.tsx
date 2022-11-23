import axios from "axios";
import { useState } from "react";
import { api } from "../data/api";


export const PostArea = () => {
    const [date, setDateInfo] = useState('');
    const [category, setCategoryInfo] = useState('');
    const [title, setTitleInfo] = useState('');
    const [value, setValueInfo] = useState(0);



    const handlePostBtn = async () => {
        
        let post = await api.postItems(
            {
                date: date,
                title: title,
                category: category,
                value: value
            }
        );
            setDateInfo('');
            setCategoryInfo('');
            setTitleInfo('');
            setValueInfo(0);
        
    }

    return (
        <div className="w-full bg-white shadow shadow-slate-600 rounded-lg mt-5 border-separate p-5 ">

            <div className="flex justify-between items-center">
                <div >
                    <span className="font-bold">Date</span>
                    <input
                        className="border border-black ml-1 w-[146px] rounded focus:outline-none"
                        type="date"
                        name="data"
                        onChange={(e) => setDateInfo(e.target.value)}
                    />
                </div>
                <div className="flex ">
                    <span className="font-bold">Category</span>
                    <input className="border border-black ml-1 w-[146px] rounded focus:outline-none"
                        list="ctg"
                        name="category"
                        placeholder="Select an option"
                        onChange={(e) => setCategoryInfo(e.target.value)}
                    />
                    <datalist id="ctg" aria-required>
                        <option value="Food">Food</option>
                        <option value="Rent">Rent</option>
                        <option value="Bill">Bill</option>
                        <option value="Salary">Salary</option>
                        <option value="Leisure">Leisure</option>
                    </datalist>
                </div>
                <div className="flex ">
                    <span className="font-bold">Title</span>
                    <input
                        className="border border-black ml-1 w-[146px] rounded focus:outline-none"
                        type="text"
                        placeholder="Type a title"
                        onChange={(e) => setTitleInfo(e.target.value)}
                    />
                </div>
                <div className="flex ">
                    <span className="font-bold">Value</span>
                    <input
                        className="border border-black ml-1 w-[146px] rounded focus:outline-none"
                        type="number"
                        placeholder="Type a value"
                        onChange={(e) => setValueInfo(parseInt(e.target.value))}
                    />
                </div>

                <div className="font-bold">
                    <button className="border border-black rounded w-[75px]" onClick={handlePostBtn}>Register</button>
                </div>
            </div>

        </div>
    );
}