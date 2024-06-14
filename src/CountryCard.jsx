import {useState, useEffect} from 'react';
import './countryCard.module.css';
import React from 'react';


export default function CountryCard(){
    let [cards, setCards] = useState([]);
    let [Input,setInput] = useState("");
    let [filteredCards, setFilteredCards] = useState([]);

    let fetchData = ()=>{
        let url = "https://restcountries.com/v3.1/all";
        fetch(url).then(response => response.json()).then((data)=>{
            setCards(data);
            setFilteredCards(data)}).catch(err => {console.log("error occured while fetching")});
    }

    useEffect(()=>{
        console.log("useeffect");
        fetchData();
    },[])

    useEffect(()=>{
        console.log("inputs useeffect");
        let newCards = cards.filter((card)=>{
            return card.name.common.includes(Input)});
        setFilteredCards(newCards);
        // fetchData();
    },[Input])


    return(
        <div style={{
            display:"flex",
            justifyContent:"center",
            flexWrap:"wrap"
        }}>
        <div className='header' style={{width:"100vw",height:"55px",boxShadow:"0px 5px 5px gray"}}>
            <input value={Input} onChange={(e)=>{setInput(e.target.value)}}  type="text" />
        </div>
        {            
            filteredCards.map((card)=>(
                    <div key={card.name.common} className='countryCard' style={{
                        height:"fit-content",
                        width:"150px",
                        margin:"20px",
                        padding:"10px",
                        border:"1px solid black",
                        borderRadius:"8px"}}>
                        <img src={card.flags.png} alt={card.flags.alt} style={{height:"80%",width:"80%",objectFit:"contain"}} />
                        <div style={{display:"flex",flexDirection:"column",height:"100%",gap:"5px"}}>
                            <h3 style={{padding:"0px",margin:"0px",}}>{card.name.common}</h3>
                        </div>
                    </div>
                )
            )}
        </div>
    )
}