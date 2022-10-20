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
  

    // if (Array.isArray(list)){
    //     console.log("é array");
    //     let [year, month] = date.split('-');

    //     console.log("aqui o list" ,list);


    //     const filtroComMap = list.map((item, index) => {
    //       item.date
    //     })

    //     console.log(filtroComMap);

    //     const filtro = list.filter((item) => { new Date (item.date).getFullYear() === parseInt(year) && new Date (item.date).getMonth() + 1  === parseInt(month) })

    //     console.log(filtro);
    //     return filtro;  
    // } else {
    //     console.log("não é array");
    // }
  
}