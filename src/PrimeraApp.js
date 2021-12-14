import React, {Fragment} from 'react';
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
    );
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired,
    otra: PropTypes.number
}

PrimeraApp.defaultProps ={
    subtitulo: 'el sub 2'
}

export default PrimeraApp;