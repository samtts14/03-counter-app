/*import React, {Fragment} from 'react';
import { PropTypes } from 'prop-types';
//import React, {Fragment} from 'react';

const PrimeraApp = ({saludo, subtitulo='el sub'}) => {

    

   // const saludo = " Hola otra vez!";
   // console.log(props);

    return (//fragment sin importar
        <> 
            <h1>{saludo}</h1>;
            <h2>{subtitulo}</h2>
        </>


       /* <Fragment>
            <h1>Hola amiguitos</h1>;
            <h2>como estan?</h2>
        </Fragment>*/
   // );
//}
/*
PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired,
    otra: PropTypes.number
}

PrimeraApp.defaultProps ={
    subtitulo: 'el sub 2'
}

export default PrimeraApp;*/

import React, {useState} from "react";
import PropTypes from "prop-types";

const CounterApp = ({value =10}) =>{

    const[counter, setCounter] = useState (0);
    
    const handleAdd = ()=>{
        //setCounter(counter + 1);
        setCounter((c)=> c+1);
        //console.log(counter);
    }

    const reset = ()=>{
        setCounter(()=> value);
    }
    const menos = ()=>{
        setCounter((a)=> a-1);
    }

    return(
        <>
            <h1>CounterApp</h1>
            <h2>{counter}</h2>

            <button onClick= {handleAdd} >+1</button>
            <button onClick={reset} >Reset</button>
            <button onClick= {menos} >-1</button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp;