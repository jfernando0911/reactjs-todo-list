import React, { useState } from 'react';

const TodoInput = () => {
    const [inputValue, inputValues]=useState("");
    const [element, setElements]=useState([]);

    const Changing = (e) =>{
        if(e){
            inputValues(e.target.value);
            
        }

        
    }
    
    const printValues = ()=>{
        console.log("Funciona este botón");
        console.log(inputValue);
    }

    const pressedEnterKey= (e)=>{
        // console.log(e.keyCode == 13);
        
        if(e.keyCode == 13){
            setElements([...element, inputValue]); 
            console.log(element);
        }

        
        // if ekeyCode === 13 console.log("Hello world");
    }

    return (
        <div>
            <input type="text" onKeyDown={pressedEnterKey} onChange={Changing}placeholder="Type the task"/>
            <button onClick={printValues}>Presionar</button>
        </div>
    );
}

export default TodoInput;
