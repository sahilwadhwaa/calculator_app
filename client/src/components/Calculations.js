import { useSelector, useDispatch } from "react-redux"
import { deleteCalc } from "../features/counter/calcSlice"

export const Calculations= ({resetDisplay}) =>{

    const dispatch= useDispatch();
    const details= useSelector((state) => state.calculations.history);
    /*const onDelete = () => {
        const filteredArr = details.filter((el) => el.calculation !== calc)
        dispatch(addCalc(filteredArr))
    }*/
    
    return (
        <div>
            <div className="text-3xl font-bold py-5">Your Calculations</div>
            <div class="relative overflow-x-auto">
                    <table class="w-full text-sm text-left">
                        <thead class="text-xs text-left text-gray-700 uppercase bg-white">
                            <tr>
                                <th scope="col" class="px-4 py-2">
                                    SNo.
                                </th>
                                <th scope="col" class="px-4 py-2">
                                    Name
                                </th>
                                <th scope="col" class="px-4 py-2">
                                    Calculation
                                </th>
                                <th scope="col" class="px-4 py-2">
                                    Result
                                </th>
                            </tr>
                        </thead>
            {details.map((data, key) => {
            return (
                
                        <tbody key={key}>
                            <tr class="bg-white border-b">
                                <td class="px-4 py-3">
                                    {key+1}.
                                </td>
                                <td class="px-4 py-3">
                                    {data.name}
                                </td>
                                <td class="px-4 py-3">
                                    {data.calculation}
                                </td>
                                <td class="px-4 py-3">
                                    {data.result}
                                </td>
                                <td class="px-4 py-3">
                                    <button onClick={() => resetDisplay(data.calculation)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                                        </svg>
                                    </button>
                                </td>
                                <td class="px-4 py-3">
                                    <button onClick={() => dispatch(deleteCalc(data.id))}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    

            )
        })}
        </table>
                </div>
        </div>
    )
}
/*
{
                    dummyData.map((data, key) =>{
                        return (
                            <div key={key}>
                        {key+1 + "." + data.Name +
                            " , " +
                            data.Calculation +
                            " ," +
                            data.Result}
                        </div>
                        )
                    })
                }
                */