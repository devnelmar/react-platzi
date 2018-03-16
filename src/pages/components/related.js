import React from 'react';
import Logo from '../../../images/logo.png';
import './related.css'

function Related(props) {
    return (
        <div className='related'>
            <img src={Logo} width={250}/>
        </div>
    )
}

export default Related;