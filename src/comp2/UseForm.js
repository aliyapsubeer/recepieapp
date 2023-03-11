import { useState } from 'react'
const UseForm2 = (book) => {
    var [val, setval]= useState(book);
    return[val,(event)=>{
        setval(
            {...val,[event.target.name]:event.target.value
            }
        )
    }]
}

export default UseForm2
