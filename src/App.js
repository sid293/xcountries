// import logo from './logo.svg';
import {useState} from 'react';
import './App.css';
import CountryCard from './CountryCard';

function App() {
    let [cards, setCards] = useState([]);

    let url = "https://restcountries.com/v3.1/all";
    fetch(url).then(response => response.json()).then((data)=>{setCards(data)}).catch(err => {console.log("error occured while fetching")});
    // try{
    // }catch(err){
    //     // console.log(err);
    //     console.log("error occured while fethcing")
    // }

  return (
    <div className="App">
      {/* <h2>Home</h2> */}
      <CountryCard c={"cards"}/>
    </div>
  );
}

export default App;
