import { FcPrevious, FcNext } from "react-icons/fc";
import { formatMonth } from '../helpers/dateFilter'
import { ResumeItem } from "./ResumeItem";

type Props = {
    currentMonth: string;
    onMonthChange: (newMonth: string) => void;
    income: number;
    expense: number;
}

export const InfoArea = ({ currentMonth, onMonthChange, income, expense}: Props) => {

    if(!income || !expense){
        return <p>carregando</p>
    }



    const handlePrevMonth = () => {
        let [year, month] = currentMonth.split('-')
        let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1)
        currentDate.setMonth(currentDate.getMonth() - 1);

        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`)
    }

    const handleNextMonth = () => {
        let [year, month] = currentMonth.split('-')
        let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1)
        currentDate.setMonth(currentDate.getMonth() + 1);

        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`)

    }

    return (
        <div className="w-full bg-white shadow shadow-slate-600 rounded-lg -mt-10 border-separate p-5 flex items-center">
            <div className="flex items-center flex-1">
                <FcPrevious className="text-4xl cursor-pointer w-10" onClick={handlePrevMonth} />
                <div className="flex-1 text-center font-bold text-lg"> {formatMonth(currentMonth)}</div>
                <FcNext className="text-4xl cursor-pointer w-10" onClick={handleNextMonth} />
            </div>
            <div className="flex-[2] flex items-center">
                <ResumeItem title="Revenue" value={income}/>
                <ResumeItem title="Expenses" value={expense}/>
                <ResumeItem title="Balance"value={income - expense} />
            </div>
        </div>
    );
}