import { useEffect, useState } from "react"
import { api } from "./data/api";
import { Item } from "./types/item"
import { Category } from "./types/category"
import { categories } from "./data/categories"
import { TableArea } from './components/TableArea';
import { InfoArea } from './components/InfoArea';
import { PostArea } from './components/PostArea';

import { getCurrentMonth, filterListByMonth } from './helpers/dateFilter'


function App() {
  const [list, setList] = useState<Item[] | any>();
  const [filteredList, setFilteredList] = useState<Item[] | any>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  
  const loadApi = async () => {
    let data = await api.getItems();
    if (!data){
      return <p>Carregando</p>
    }else {
      setFilteredList(filterListByMonth(data, currentMonth));
    }
    
   
  }


  const math = async () => {
    let incomeCount = 0;
    let expenseCount = 0;
    for (let i in filteredList) {
      if (categories[filteredList[i].category].expense) {
        expenseCount +=  filteredList[i].value;
      } else {
        incomeCount +=  filteredList[i].value;
      }
    }
    setIncome(incomeCount);
    setExpense(expenseCount);
  }



  useEffect(() => {
    loadApi();
    math();
    
   
  }, [currentMonth]);




  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  }

  return (
    <div>
      <header className="h-[150px] text-center bg-gradient-to-br from-[#161e30]  via-[#414d69] to-[#92d2f0]">
        <h1 className="text-white text-4xl font-extrabold pt-8 ">
          PERSONAL EXPENSE MANAGER
        </h1>
      </header>
      <div className="m-auto max-w-[980px] mb-12">


        {/*Information area*/}

        {/*insert content area*/}

        <InfoArea
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
          income={income}
          expense={expense}
        />


        <PostArea />

        <TableArea list={filteredList && filteredList} />


      </div>
    </div>
  )
}

export default App
