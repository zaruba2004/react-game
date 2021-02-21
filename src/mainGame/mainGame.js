import React from 'react';
import './mainGame.css';

export default function MainGame() {
    const cards = [
        {id: 1, imageURL: './images/QH.png', title: "QH"},
        {id: 2, imageURL: './images/QS.png', title: "QS"},
        {id: 3, imageURL: './images/QC.png', title: "QC"},
        {id: 4, imageURL: './images/10H.png', title: "10H"},
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
      ]



    return (
        <div className="playingField">
            <div className="cardsField">  
                <ul>
                    {cards.map(card => {
                        return <li key={card.id}><img src={card.imageURL} alt={card.title} /></li>
                    })}
                </ul> 
            </div>
            <div className="buttonsField">
                <button onClick={()=>alert('Придумать функцию')}>Карта в этой коллоде</button>
                <button onClick={()=>alert('Придумать функцию')}>Карта в этой коллоде</button>
                <button onClick={()=>alert('Придумать функцию')}>Карта в этой коллоде</button>
            </div>  
        </div>       
    )
}