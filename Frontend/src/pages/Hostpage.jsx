import React from 'react'
import "../css/hostpage.css"
import {Header} from "../components/header.jsx"
import Footer from "../components/footer.jsx"
import { toast } from 'react-toastify'


function Hostpage() {
  const user = localStorage.getItem("username")
  const handlesubs = () => {
    if (user) {
        window.location = "addProducts1"
    }else {
      toast("nevterne uu")
    }
  }

  return (
 <div>
       <Header />
      <div className="host_container">
     
        <div className='host_banner'>
                 <div className='host_banner_inside'>
                    <div className='Try_host'>Try Hosting With Us</div>
                    <div className='host_paragh'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias.</div>
                    <div className='host_butt'><button onClick={handlesubs} className='host_button'>Lets Get Started</button></div> 
                 </div>
        </div>
        <div className='host_middle'>
            <div className='host_middle_inside'>
                <div className='host_row'>
                    <div className='host_card'></div>
                  <div className='host_paraghs'>
                    <div className='Try_host'>Some Title Here</div>
                    <div className='host_paragh'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias.At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias.</div>
                    <div className='host_paragh'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias.At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias.</div>
                    <div className='host_paragh'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias.At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias.</div>
                  </div>
                </div>
            </div>
            <div className='host_middle_footer_container'>
                <div className='Try_host'>
                Hosting Tips & Guides
                </div>
                <div className='host_card_container'>
                  <div className='host_card_father'>
                    <div className='host_card_small'></div>
                    <div className='host_card_p'>Choose the right property!</div>
                    <div className='host_card_variants'>Economy</div>
                  </div>
                  <div className='host_card_father'>
                    <div className='host_card_small'></div>
                    <div className='host_card_p'>Best environment for rental</div>
                    <div className='host_card_variants'>Lifestyle</div>
                  </div>
                  <div className='host_card_father'>
                    <div className='host_card_small'></div>
                    <div className='host_card_p'>Boys Hostel Apartment</div>
                    <div className='host_card_variants'>Property</div>
                  </div>
                </div>
            </div>
        </div>
    </div>
    <Footer/>
    </div>
  
   
    
  )
}

export default Hostpage