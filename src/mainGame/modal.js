import { React, useState } from "react";
import './modal.css';

export default function Modal(props){
    const [state, setState] = useState (
        {isOpenModal: false, isOpenButton: true}
    )
    
    return (
        <div>
            {state.isOpenButton && <button onClick={()=>setState({isOpenModal: true})}>Ответ</button>}
            {state.isOpenModal && (<div className='modal'>
                <div className='modal-body'>
                    <h1>Это ваша карта?</h1>
                    <img className='ansverCard' src={props.imageURL} alt={props.altImage} />
                    <button onClick={()=>setState({isOpenModal: false, isOpenButton: true})}>Играть заново</button>
                </div>            
            </div>)}
        </div>
    )
            
}