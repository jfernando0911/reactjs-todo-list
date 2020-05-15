import React, { useState, useEffect } from 'react';
import styles from './todo.module.css';
import ListElement from './ListElement';
import DoneTaskList from './DoneTaskList';

const TodoInput = () => {
    
    

    let initialElements = localStorage.getItem('todos');
    let [inputValue, inputValues] = useState("");
    const [element, setElements] = useState(JSON.parse(initialElements) || [])
    const [doneTask, updateDoneTasks] = useState([]);
    const [element2, setElements2]=useState("");

    useEffect(() => {
        localStorage.setItem('todos', [JSON.stringify(element)]);
        console.log(element);
        // localStorage.setItem('todos2', [JSON.stringify({task:"number", done:true})])    
    },[element]);
    
    
    useEffect(()=>{
        
        localStorage.setItem('todos2', [JSON.stringify(element2)]);
        // console.log("UseEffect: -> ", element);
        console.log(element2);
      }, [element2])


   const getCheckBox = (value) =>{
        console.log("We are getting value from children", value);
        if(value === true){
            console.log(value);
        }   
  }   
    
  const Changing = (e) => {
        if (e) {
            inputValues(e.target.value);
        }


    }

    const pressedEnterKey = (e) => {

        if (e.keyCode === 13) {
            // setElements([...element, inputValue]);
            setElements([...element, inputValue]);
            setElements2([...element2, {task:inputValue, done: false}]);
            inputValues("");
            e.target.value = ""
        }



    }

    const DeleteListItem = (e) => {
        // console.log(element);
        if (e.type === "click") {

            let getArray = [...element];
            let index = getArray.indexOf(e.target.textContent);
            // console.log(index);
            if (index !== -1) {
                updateDoneTasks([...doneTask, getArray[index]]);
                getArray.splice(index, 1);
                // console.log(getArray);
                setElements(getArray);

            }

        }
    }

    return (
        <div className={styles.mainContainer}>
            <input type="text" onKeyDown={pressedEnterKey} onChange={Changing} placeholder="Type a task" className={styles.todoListInput} />
           
            <h2>Task to do</h2>

            <div className={styles.todoListContainer}>
                <ul className={styles.listContainer}>
                    {element.map((e, i) => (
                        <ListElement key={i} name={e} delete={DeleteListItem} getCheckBox={getCheckBox} />
                    ))}

                </ul>

            </div>
            <h2>Done tasks</h2>
            <DoneTaskList dt={doneTask}/>

            {/* <ul>
                
                {element2.map(({task, done}) => (
                     <li>{task}{done}</li> //Investigar como iterar un array de objectos para mostrar solo el task 
                ))}
            </ul> */}
        </div>
    );
}

export default TodoInput;
