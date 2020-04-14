import React from 'react';
import {createRef} from 'react';
import styles from './listElementContainer.module.css';
import i from '../Images/trash_icon.png';

const ListElement = (props) => {
    const inputEl = createRef();
    console.log(props);

    const updateTextDecoration = (e) =>{
        console.log("Checkbox value: ", e.target.checked);
        console.log("This is my ref: ", inputEl.current);
        if(e.target.checked === true){
            inputEl.current.style.textDecoration = "line-through";
        }else{
            inputEl.current.style.textDecoration = "none";
            
        }
    }
    //Nos quedamoe en la linea 20, checked tenemos que mandar el valor para marcar la tarea
    return (
        <li className={styles.listElementContainer}  onClick={props.delete} ref={inputEl}  >
            <div className={styles.nameContainer} >
                <div>{props.name}</div>
            </div>
            <div className={styles.deleteContainer}>
                <img src={i} alt={"It's a trash icon"} />
            </div>
            <div className={styles.doneContainer}>
                <input type="checkbox" onChange={updateTextDecoration} />
            </div>
        </li>
    );
}

export default ListElement;
