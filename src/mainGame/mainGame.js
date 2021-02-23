import React, { useState } from 'react';
import './mainGame.css';
import Modal from "./modal";

export default function MainGame() {
    const [cards, setCards] = React.useState([
        {id: 1, imageURL: './images/QH.png', title: "QH"},
        {id: 2, imageURL: './images/QS.png', title: "QS"},
        {id: 4, imageURL: './images/QC.png', title: "QC"},
        {id: 3, imageURL: './images/10H.png', title: "10H"},
        {id: 5, imageURL: './images/10D.png', title: "10D"},
        {id: 6, imageURL: './images/10S.png', title: "10S"},
        {id: 7, imageURL: './images/AD.png', title: "AD"},
        {id: 8, imageURL: './images/AH.png', title: "AH"},
        {id: 9, imageURL: './images/AS.png', title: "AS"},
        {id: 10, imageURL: './images/JH.png', title: "JH"},
        {id: 11, imageURL: './images/JC.png', title: "JC"},
        {id: 12, imageURL: './images/JS.png', title: "JS"},
        {id: 13, imageURL: './images/KC.png', title: "KC"},
        {id: 14, imageURL: './images/KH.png', title: "KH"},
        {id: 15, imageURL: './images/KS.png', title: "KS"}
      ])
      
      function clickOneButton(arr){  
        let a = [];
        let b = [];
        let c = [];
        for (let i = 0; i < arr.length; i=i+3) {
            a.push(arr[i])            
        }
        for (let i = 1; i < arr.length; i=i+3) {            
            b.push(arr[i])           
        }
        for (let i = 2; i < arr.length; i=i+3) {
            c.push(arr[i])            
        }
        setCards(arr = []);
        arr.push(...b);
        arr.push(...a);
        arr.push(...c);
        return arr;
      }

      function clickTwoButton(arr){  
        let a = [];
        let b = [];
        let c = [];
        for (let i = 0; i < arr.length; i=i+3) {
            a.push(arr[i])            
        }
        for (let i = 1; i < arr.length; i=i+3) {            
            b.push(arr[i])           
        }
        for (let i = 2; i < arr.length; i=i+3) {
            c.push(arr[i])            
        }
        setCards(arr = []);
        arr.push(...a);
        arr.push(...b);
        arr.push(...c);
        return arr;
      }

      function clickTreeButton(arr){  
        let a = [];
        let b = [];
        let c = [];
        for (let i = 0; i < arr.length; i=i+3) {
            a.push(arr[i])            
        }
        for (let i = 1; i < arr.length; i=i+3) {            
            b.push(arr[i])           
        }
        for (let i = 2; i < arr.length; i=i+3) {
            c.push(arr[i])            
        }
        setCards(arr = []);
        arr.push(...a);
        arr.push(...c);
        arr.push(...b);
        return arr;
      }

    return (
        <div className="playingField">
            <div className="cardsField">  
                <ul>
                    {cards.map(card => {    /*.sort((prev,next)=>prev.id - next.id)*/
                        return <li key={card.id}><img src={card.imageURL} alt={card.title} /></li>
                    })}
                </ul> 
            </div>
            <div className="buttonsField">
                <div className="startButtonsField">
                <button onClick={()=>setCards(clickOneButton(cards))}>Карта в этой коллоде</button>
                <button onClick={()=>setCards(clickTwoButton(cards))}>Карта в этой коллоде</button>
                <button onClick={()=>setCards(clickTreeButton(cards))}>Карта в этой коллоде</button>
                </div>
                <Modal imageURL={cards[7].imageURL} altImage={cards[7].title}/>
            </div>  
        </div>       
    )
}