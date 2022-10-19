import { Item } from "../types/item";

export const getCurrentMonth = () => {
    let now = new Date();
    return `${now.getFullYear()}-${now.getMonth() + 1}`;
}

export const filterListByMonth = (list:Item [], date: string) => {

    if (Array.isArray(list)){
        console.log("é array");
        let [year, month] = date.split('-');

        const filtro = list?.filter((item) => { item.date.getFullYear() === parseInt(year) && (item.date.getMonth() + 1) === parseInt(month) })
    
        return filtro;  
    } else {
        console.log("não é array");
    }

    
}