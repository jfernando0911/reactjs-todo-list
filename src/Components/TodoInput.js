import React, { useState } from 'react';
import styles from './todo.module.css';
import ListElement from './ListElement';
import DoneTaskList from './DoneTaskList';


const TodoInput = () => {
    let [inputValue, inputValues] = useState("");
    const [element, setElements] = useState([]);
    const [doneTask, updateDoneTasks] = useState([]);

    const Changing = (e) => {
        if (e) {
            inputValues(e.target.value);
        }


    }

    const pressedEnterKey = (e) => {

        if (e.keyCode === 13) {
            setElements([...element, inputValue]);
            inputValues("");
            e.target.value = ""
        }



    }

    const DeleteListItem = (e) => {
        console.log(element);
        if (e.type === "click") {

            let getArray = [...element];
            let index = getArray.indexOf(e.target.textContent);
            console.log(index);
            if (index !== -1) {
                updateDoneTasks([...doneTask, getArray[index]]);
                getArray.splice(index, 1);
                console.log(getArray);
                setElements(getArray);

            }

        }
    }

    return (
        <div className={styles.mainContainer}>
            <input type="text" onKeyDown={pressedEnterKey} onChange={Changing} placeholder="Type the task" className={styles.todoListInput} />
           
            <h2>Task to do</h2>

            <div className={styles.todoListContainer}>
                <ul className={styles.listContainer}>
                    {element.map((e, i) => (
                        <ListElement key={i} name={e} delete={DeleteListItem} />
                    ))}

                </ul>

            </div>
            <h2>Done tasks</h2>
            <DoneTaskList dt={doneTask}/>
        </div>
    );
}

export default TodoInput;
