export const Keypad= ({updateDisplay, calculate}) =>{
    return (
        <div className="md:m-auto sm: m-auto grid grid-cols-4 bg-gray-50">
            <button 
                onClick={() => updateDisplay("AC")}
                className=" flex items-center justify-center border-[1px] bg-[#686868] py-4 text-white text-2xl"
            >
                AC
            </button>
            <button 
                onClick={() => updateDisplay("DEL")}
                className=" flex items-center justify-center border-[1px] bg-[#686868] py-4 text-white text-2xl"
            >
                DEL
            </button>
            <button 
                //onClick={calculate}
                onClick={() => updateDisplay("%")}
                className=" flex items-center justify-center border-[1px] bg-[#686868] text-white text-2xl"
            >
                %
            </button>
            <button 
                onClick={() => updateDisplay("÷")}
                className=" flex items-center justify-center border-[1px] bg-[#FFA500] text-white text-2xl"
            >
                ÷
            </button>
            <button 
                onClick={() => updateDisplay("7")}
                className=" flex items-center justify-center border-[1px] bg-[#949494] py-4 text-white text-2xl"
            >
                7
            </button>
            <button 
                onClick={() => updateDisplay("8")}
                className=" flex items-center justify-center border-[1px] bg-[#949494] py-4 text-white text-2xl"
            >
                8
            </button>
            <button 
                onClick={() => updateDisplay("9")}
                className=" flex items-center justify-center border-[1px] bg-[#949494] text-white text-2xl"
            >
                9
            </button>
            <button 
                onClick={() => updateDisplay("x")}
                className=" flex items-center justify-center border-[1px] bg-[#FFA500] text-white text-2xl"
            >
                x
            </button>
            <button 
                onClick={() => updateDisplay("4")}
                className=" flex items-center justify-center border-[1px] bg-[#949494] py-4 text-white text-2xl"
            >
                4
            </button>
            <button 
                onClick={() => updateDisplay("5")}
                className=" flex items-center justify-center border-[1px] bg-[#949494] py-4 text-white text-2xl"
            >
                5
            </button>
            <button 
                onClick={() => updateDisplay("6")}
                className=" flex items-center justify-center border-[1px] bg-[#949494] text-white text-2xl"
            >
                6
            </button>
            <button 
                onClick={() => updateDisplay("-")}
                className=" flex items-center justify-center border-[1px] bg-[#FFA500] text-white text-2xl"
            >
                -
            </button>
            <button 
                onClick={() => updateDisplay("1")}
                className=" flex items-center justify-center border-[1px] bg-[#949494] py-4 text-white text-2xl"
            >
                1
            </button>
            <button 
                onClick={() => updateDisplay("2")}
                className=" flex items-center justify-center border-[1px] bg-[#949494] py-4 text-white text-2xl"
            >
                2
            </button>
            <button 
                onClick={() => updateDisplay("3")}
                className=" flex items-center justify-center border-[1px] bg-[#949494] text-white text-2xl"
            >
                3
            </button>
            <button 
                onClick={() => updateDisplay("+")}
                className=" flex items-center justify-center border-[1px] bg-[#FFA500] text-white text-2xl">
                +
            </button>
            <button 
                onClick={() => updateDisplay("0")}
                className="col-span-2 flex items-center justify-center border-[1px] bg-[#949494] py-4 text-white text-2xl"
            >
                0
            </button>
            <button 
                onClick={() => updateDisplay(".")}
                className=" flex items-center justify-center border-[1px] bg-[#949494] text-white text-2xl"
            >
                .
            </button>
            <button 
                onClick={calculate}
                className=" flex items-center justify-center border-[1px] bg-[#FFA500] text-white text-2xl">
                =
            </button>
        </div>
    );
}

/*
<table className="border-separate border border-slate-500">
            <tbody>
                <tr>
                    <th className="border border-slate-600 px-6 py-4">
                        <button>
                            AC
                        </button>
                    </th>
                    <th className="border border-slate-600 px-6 py-4">
                        <button>
                            del
                        </button>
                    </th>
                    <th className="border border-slate-600 px-6 py-4">
                        <button>
                            %
                        </button>
                    </th>
                    <th className="border border-slate-600 px-6 py-4">
                        <button>
                            /
                        </button>
                    </th>
                </tr>
                <tr>
                    <td className="border border-slate-600 px-6 py-4">
                        <button>
                            7
                        </button>
                    </td>
                    <td className="border border-slate-600 px-6 py-4">
                        <button>
                            8
                        </button>
                    </td>
                    <td className="border border-slate-600 px-6 py-4">
                        <button>
                            9
                        </button>
                    </td>
                    <td className="border border-slate-600 px-6 py-4">
                        <button>
                            x
                        </button>
                    </td>
                </tr>
                <tr>
                    <td className="border border-slate-600 px-6 py-4">
                        <button>
                            4
                        </button>
                    </td>
                    <td className="border border-slate-600 px-6 py-4">
                        <button>
                            5
                        </button>
                    </td>
                    <td className="border border-slate-600 px-6 py-4">
                        <button>
                            6
                        </button>
                    </td>
                    <td className="border border-slate-600 px-6 py-4">
                        <button>
                            -
                        </button>
                    </td>
                </tr>
                <tr>
                    <td className="border border-slate-600 px-6 py-4">
                        <button>
                            1
                        </button>
                    </td>
                    <td className="border border-slate-600 px-6 py-4">
                        <button>
                            2
                        </button>
                    </td>
                    <td className="border border-slate-600 px-6 py-4">
                        <button>
                            3
                        </button>
                    </td>
                    <td className="border border-slate-600 px-6 py-4">
                        <button>
                            +
                        </button>
                    </td>
                </tr>
                <tr>
                    <td className="border border-slate-600 px-6 py-4">
                        <button>
                            0
                        </button>
                    </td>
                    <td className="border border-slate-600 px-6 py-4">
                        <button>
                            .
                        </button>
                    </td>
                    <td className=" border border-slate-600 px-6 py-4">
                        <button>
                            =
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
        */