
type Props = {
    title: string;
    value: number;
}



export const ResumeItem = ({title, value}: Props) => {
    return (
        <div className="flex-1">
            <div className="text-center font-bold mb-1 text-gray-500">{title}</div>
            <div className="text-center font-bold ">R$ {value.toFixed(2)}</div>
        </div>
    );
}