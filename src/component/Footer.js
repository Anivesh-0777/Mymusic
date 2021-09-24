import React from 'react'
import {BsFillPlusCircleFill} from "react-icons/bs"
import "./footer.css"


function Footer() {
    function create_action(){
        // <input type='text' />
        // <input type='text'/> 
        // <input type='text'/>

    }
    return (
        <div className="footer">
           
            <button onClick="create_action()"><BsFillPlusCircleFill/>
                


            </button>
                    
            
        </div>
    )
}

export default Footer
