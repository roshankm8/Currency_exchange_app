
//         .then((response)=>response.json()) //response jo aa rha h url m usko json m convert kr rhe h ab fetch use kiye h to chaning m then ko use kr skte h 
         
         
//          .then((response)=> setdata(response[currency])); //ab yha jo response aa rha h usko hold krna h uske liye set data ka use kr rhe 
//         // console.log("response",response);
//         console.log({"responseee" :data}); //upar kya value aa rha h wo dikhega
//     },[currency])

//     return data
// };
//  export default useCurrency; //pura method return ho rha h es se jis se data set v ho sake 

import { useEffect,useState } from "react";
function useCurrency(currency) {
    const [data,setData] = useState({})
    useEffect(() =>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`)
        .then((response)=>response.json()) //response jo aa rha h url m usko json m convert kr rhe h ab fetch use kiye h to chaning m then ko use kr skte h
        .then((response)=> setData(response[currency])); //ab yha jo response aa rha h usko hold krna h uske liye set data ka use kr rhe
        // console.log({"response" :data}); //upar kya value aa rha h wo dikhega
        
        
    },[currency]) // when currency changes then this function will run again
    console.log("data currency info",data);
    return data //The hook returns the data, so any component using useCurrency() will receive the currency data.
    
}
export default useCurrency;