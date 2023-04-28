import React from 'react'
import "../css/loginsignup.css"
import Xbutt from "../assets/Vector (2).svg"
function loginPopUp({hey,onClose}) {
    if (!hey) return null
  return (
    <div className='overlay'>
            <div className='signup_container'>
                    <div className='signup_container_small'>
                        <div className="signup_container_small_1">
                            <div className='signup_header'>
                                <div className='signup_login'>Login</div>
                                <button className='signup_butt' onClick={onClose}><img src={Xbutt} alt="" /></button>
                            </div>
                            <div className='signup_line'></div>
                            <div>
                                <div className='signup_sicz'>
                                    <div className='signup_pr'>Phone number</div>
                                    <input className='signup_inp' type="text" placeholder='      Enter your Phone Number' />
                                </div>  
                                <div className='signup_sicz'>
                                    <div className='signup_pr'>Password</div>
                                    <input className='signup_inp' type="text" placeholder='      Enter your Password'/>
                                </div>
                            </div>
                            <div>
                                <button className='signup_butt1'>Login</button>
                                <button className='signup_butt2'>or Register</button>
                            </div>
                        </div>
                    </div>
                    
                </div>
        </div>
    )
}

export default loginPopUp