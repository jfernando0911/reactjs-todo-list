import React, { useState } from 'react';


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


        if (e.type === "mouseenter") {
            console.log("We enter")
            e.target.style.backgroundColor = "red";
        } else if (e.type === "mouseleave") {
            console.log("salimos")
            e.target.style.backgroundColor = "";
        }
        else if (e.type === "click") {

            let getArray = [...element];
            let index = getArray.indexOf(e.target.textContent);
            console.log(index);
            if(index !== -1){
                updateDoneTasks([...doneTask,getArray[index]]);
                getArray.splice(index,1);
                console.log(getArray);
                // setElements([...element,getArray]);
                setElements(getArray);
                
            }

        }
    }

    return (
        <div>
            <input type="text" onKeyDown={pressedEnterKey} onChange={Changing} placeholder="Type the task" />
            <ul>
                <h2>Task to do</h2>
                {element.map((e, i) => <li key={i} onMouseEnter={DeleteListItem} onClick={DeleteListItem} onMouseLeave={DeleteListItem}>{e}</li>)}
            </ul>
            <ul>
                <h2>TaskDone</h2>
                {doneTask.map((e, i) => <li key={i}>{e}</li>)}
            </ul>

        </div>
    );
}

export default TodoInput;
