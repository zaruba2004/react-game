import { React, useState } from "react";
import './modal.css';

export default function Modal(props){
    const [state, setState] = useState (
        {isOpen: false}
    )
    return (
        <div>
            <button onClick={()=>setState({isOpen: true})}>Ответ</button>
            {state.isOpen && (<div className='modal'>
                <div className='modal-body'>
                    <h1>Это ваша карта?</h1>
                    <img className='ansverCard' src={props.imageURL} alt={props.altImage} />
                    <button onClick={()=>setState({isOpen: false})}>Играть заново</button>
                </div>            
            </div>)}
        </div>
    )
            
}