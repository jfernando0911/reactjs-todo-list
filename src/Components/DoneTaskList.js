import React from 'react';
import styles from './listContainer.module.css';

const DoneTaskList = ({dt}) => {
    // console.log("We are in the doneTaSKlIST", dt);
    // let listEl = props.doneTask;

    //ya podemos agregar items al doneTask Ul
    return (
        <div className={styles.doneListContainer}>
            <ul className={styles.doneUlContainer}>
                <li>Lorem ipsus</li>
        
                <li>Lorem ipsus</li>
                {dt.map((e, i) => <li key={i}>{e}</li>)} 
            </ul>
        </div>
    );
}

export default DoneTaskList;
