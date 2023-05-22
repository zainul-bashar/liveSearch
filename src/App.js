import React,{useState,useEffect} from 'react';
import './App.css';

let arr = ['Ye','Gill','The','Mamla','Hai','Rkaesh','Sureh','Laddabn','Hauchpaoch','Shubhu','Ratan','Karan','Ekam','Ricky','Muki']
function App() {
const[search,setSearch] = useState('');
const[filteredArr,setFilteredArr] = useState(arr);

useEffect(
  
    () => {
      setFilteredArr(arr.filter((value) => value.includes(search)))
    }
  ,[search]
)
  return (
    <div>
         <input type='text' placeholder='Live Search' onChange={(e) => setSearch(e.target.value)}></input>
        
          {
            filteredArr.map((value) =>
            <h3>{value}</h3>)
          }
    </div>
   
  );
}

export default App;
