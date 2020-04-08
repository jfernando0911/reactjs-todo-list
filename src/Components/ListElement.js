import React from 'react';
import styles from './listElementContainer.module.css';
import i from '../Images/trash_icon.png';

const ListElement = (props) => {
    
    console.log(props);

    
    return (
        <div className={styles.listElementWrapper}      onClick={props.delete}  >
            <li>
                <div>{props.name}</div>
                <img src={i} alt={"It's a trash icon"}/>
            </li>


        </div>
    );
}

export default ListElement;
