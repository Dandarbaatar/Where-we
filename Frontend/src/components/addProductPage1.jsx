import React ,{useState}from 'react'
import "../css/addProduct.css"
import {Header} from "../components/header.jsx"
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import {faCheck} from '@fortawesome/free-solid-svg-icons'
function AddProductPage1() {
    const [checkedItems, setCheckedItems] = useState([])

    const handlechange = (event) => {
        const { value, checked } = event.target;
        if(checked === true ) {
            setCheckedItems([
                ...checkedItems, // Keep the existing checked items
                value // Update the checkbox's value
            ])  
        }
        if (!checked) {
            setCheckedItems(checkedItems.filter((e)=>(e !== value)))
            // delete checkedItems[value]; // Remove the unchecked item from the object
            }
    }
    const handleSubmit = () => {
        if(checkedItems){
            // window.location = "hostpage"
            localStorage.setItem("checkedItems",checkedItems);
            console.log(checkedItems);
            window.location = "addProducts2"
        }
    }
  

    return (
        <div>
            <Header/>
    <div className='host_add_container ' style={{display:"flex",flexDirection:"column"}}>
        <div className='host_add_container_l'>  
            <div className='host_add_question'>What kind of place will you host?</div>
            <div className='host_add_checkbox_father'>
                <div style={{display:"flex",flexDirection:"row"}}>
                <input className='host_checkbox' type="checkbox" value="apartment" onChange={handlechange}  />
                <div className='host_add_answer'>apartment</div>
                </div>
                <div style={{display:"flex",flexDirection:"row"}}>
                <input  type="checkbox" value="villa"  onChange={handlechange} />
                <div className='host_add_answer'>villa</div>
                </div>
                <div style={{display:"flex",flexDirection:"row"}}>
                <input type="checkbox" value="house"  onChange={handlechange} />
                <div className='host_add_answer'>house</div>
                </div>
                <div style={{display:"flex",flexDirection:"row"}}>
                <input type="checkbox" value="Ger"  onChange={handlechange} />
                <div className='host_add_answer'>Ger</div>
                </div>
            </div>
            <button className='host_button_s' onClick={handleSubmit}>Next</button>
        </div>
        
    </div>
    </div>
    
   
    )
}


export default AddProductPage1