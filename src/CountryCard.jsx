import {useState, useEffect} from 'react';
import React from 'react';

// let getCardsArray = ()=>{
//     let url = "https://restcountries.com/v3.1/all";
//     let ans;
//     try{
//         return fetch(url).then(response => response.json())
//     }catch(err){
//         console.log(err);
//     }
//     return ans;

// }

export default function CountryCard(){
    let [cards, setCards] = useState([]);
    // let [cards2, setCards2] = useState([]);
    // let res = getCardsArray();
    useEffect(()=>{
        let url = "https://restcountries.com/v3.1/all";
        console.log("runnning useeffect");
        fetch(url).then(response => response.json()).then((data)=>{setCards(data)}).catch(err => {console.log("error occured while fetching")});
        // console.log(cards);
    },[])

    // getCardsArray().then((data)=>{
    //     setCards(data);
    // })

    // try{
    //     fetch(url).then(response => response.json()).then((data)=>{setCards(data)})
    // }catch(err){
    //     console.log(err);
    // }
    // console.log(c);

    return(
        <div style={{
            display:"flex",
            justifyContent:"center",
            flexWrap:"wrap"
        }}>
            {/* <h3>cards</h3> */}
        {            
            cards.map((card)=>(
                    <div key={card.name.common} style={{
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