import React, { useState, useEffect } from 'react';
import './mainGame.css';
import './modal.css';
import CardAnswerSound from '../sounds/answer.mp3';
import CardClickSound from '../sounds/clickCard.mp3';
import {Howl, Howler} from 'howler';

export default function MainGame(props) {
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

      const [soundsVolume, setSoundsVolume] = useState(1);
      const [counter, setCounter] = useState(0);
      const [state, setState] = useState (    
        {isOpenModal: false, isOpenButton: false, isOpenButtons: true}
    )

    function onChnageVolumeHandler() {
        setSoundsVolume(prev => (prev ? 0 : 1));
      };

      function soundPlay(src){
        const sound = new Howl({
            src,
            volume: `${soundsVolume}`,
          });
          sound.play() ;
      };
      
      function allButtonClick() {
        soundPlay(CardClickSound); 
        setCounter(counter + 1);
        props.counters(counter+1);
      }
          
      function clickOneButton(arr){ 
        allButtonClick();
        let a = [];
        let b = [];
        let c = [];
        for (let i = 0; i < arr.length; i+=3) {
            a.push(arr[i])
            b.push(arr[i+1])
            c.push(arr[i+2])
        }
        setCards(arr = []);
        arr.push(...b);
        arr.push(...a);
        arr.push(...c);
        return arr;
      }

      function clickTwoButton(arr){
        allButtonClick();
        let a = [];
        let b = [];
        let c = [];
        for (let i = 0; i < arr.length; i+=3) {
            a.push(arr[i])
            b.push(arr[i+1])
            c.push(arr[i+2])
        }
        setCards(arr = []);
        arr.push(...a);
        arr.push(...b);
        arr.push(...c);
        return arr;
      }

      function clickTreeButton(arr){ 
        allButtonClick();
        let a = [];
        let b = [];
        let c = [];
        for (let i = 0; i < arr.length; i+=3) {
            a.push(arr[i])
            b.push(arr[i+1])
            c.push(arr[i+2])
        }        
        setCards(arr = []);
        arr.push(...a);
        arr.push(...c);
        arr.push(...b);
        return arr;
      } 

      if(counter==3){
        setCounter(0);
        setState({isOpenModal: false, isOpenButton: true, isOpenButtons: false, });        
      }

      function answeButton(){        
        setState({isOpenModal: true});
        props.callbackState({isOpenModal: true});
        props.counters(counter);
        soundPlay(CardAnswerSound);
      }

      function replayGame() {
        setState({isOpenModal: false, isOpenButton: false, isOpenButtons: true});
        props.callbackState({isOpenModal: false});
      }
     
      // useEffect(() => {
      //   const onKeypress = e => console.log(e);      
      //   document.addEventListener('keypress', onKeypress);      
      //   return () => {
      //     document.removeEventListener('keypress', onKeypress);
      //   };
      // }, []);

    return (
        <div className="playingField">
          <button className='soundButton' onClick={onChnageVolumeHandler}>
					  {soundsVolume ? '\u{1F509}' : '\u{1F507}'}
				  </button>
            <div className="cardsField">  
                <ul>
                    {cards.map(card => {   
                        return <li key={card.id}><img src={card.imageURL} alt={card.title} /></li>
                    })}
                </ul> 
            </div>
            <div className="buttonsField">
                {state.isOpenButtons && (<div className="startButtonsField">
                    <button onClick={()=>setCards(clickOneButton(cards))}>Карта в этой колоде</button>
                    <button onClick={()=>setCards(clickTwoButton(cards))}>Карта в этой колоде</button>
                    <button onClick={()=>setCards(clickTreeButton(cards))}>Карта в этой колоде</button>                    
                </div>)}
                <div>
                    {state.isOpenButton && <button className='buttonAnswer' onClick={()=>answeButton()}>Ответ</button>}
                    {state.isOpenModal && (<div className='modal'>
                        <div className='modal-body'>
                            <h1>Это ваша карта?</h1>
                            <img className='ansverCard' src={cards[7].imageURL} alt={cards[7].title} />
                            <button className='restartButton' onClick={()=>replayGame()}>Да, попробовать заново</button>
                        </div>            
                    </div>)}
                </div>
            </div>  
        </div>       
    )
}
