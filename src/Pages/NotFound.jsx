import React from 'react'
import  { Link } from 'react-router-dom'

const NorFound = () => {
    return (
        <React.Fragment>
            <h1>Pagina no encontrada</h1>
            <Link to="/" >Ir al Home</Link>
        </React.Fragment>
        
    );
}

export default NorFound;