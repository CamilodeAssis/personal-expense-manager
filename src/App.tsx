import { useEffect, useState } from "react"
import { api } from "./data/api";
import { Item } from "./types/item"
import { Category } from "./types/category"
import { categories } from "./data/categories"
import { TableArea } from './components/TableArea';

import { getCurrentMonth, filterListByMonth } from './helpers/dateFilter'

function App() {

  const [listItems, setListItems] = useState<Item[] | any>();
  const [filteredList, setFilteredList] = useState<Item[] | any>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

  const loadApi = async () => {
    let data = await api.getItems();
    if (data) {
      setListItems(data);
    }
  }

  useEffect(() => {
    loadApi();
    setFilteredList(filterListByMonth(listItems, currentMonth));
  }, [listItems, currentMonth]);

 

  return (
    <div>
      <header className="h-[150px] text-center border-b border-[#161e30] bg-gradient-to-br from-[#161e30]  via-[#414d69] to-[#92d2f0]">
        <h1 className="text-white text-3xl font-extrabold pt-8 ">
          Sistema finançeiro
        </h1>
      </header>
      <div className="m-auto max-w-[980px] mb-12">


        {/*Information area*/}

        {/*insert content area*/}

    
        <TableArea list={filteredList}  />
        

      </div>
    </div>
  )
}

export default App
