import React from 'react'
import "../css/addProduct.css"
import {Header} from "../components/header.jsx"

function AddProductPage5(props) {
    
    return (
        <div>
            <Header/>
            <div className='host_add_container'>
        <div className='host_add_container_l'>  
            <div className='host_add_question'>Information can be added in similar way.</div>
            <div className='host_add_checkbox_father'>
            The other required information can be added in a similar presentation for listing the property fluently...
            </div>
            <div><button className='host_button_s3'>Post My Property</button></div> 
        </div>
    </div>
        </div>
    
    )
}


export default AddProductPage5