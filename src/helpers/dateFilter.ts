import { TableItems } from "../components/TableItems";
import { Item } from "../types/item";

export const getCurrentMonth = () => {
    let now = new Date();
    return `${now.getFullYear()}-${now.getMonth() + 1}`;
}

export const filterListByMonth = (list:Item [] , date: string) => {
   
    let newList: Item[] = [];
    let [year, month] = date.split('-');

    for(let i in list) {
        if(
            new Date (list[i].date).getFullYear() === parseInt(year) &&
            (new Date (list[i].date).getMonth() + 1) === parseInt(month)
        ) {
            newList.push(list[i]);
        }
    }

    return newList;

}

export const formatDate = (date: Date): string => {
    let newDate = new Date(date);

    let year = newDate.getFullYear();
    let month = newDate.getMonth() +1;
    let day = newDate.getDate() +1;

    
    return `${addZero(day)}/${addZero(month)}/${year}`
}
const addZero = (n: number): string => n < 10 ? `0${n}` : `${n}`;


export const formatMonth = (getCurrentMonth: string): string => {
    let [year, month] = getCurrentMonth.split('-');
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    

    return `${months[parseInt(month)-1]} ${year}`
}



