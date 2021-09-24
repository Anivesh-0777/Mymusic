import React from 'react'
import "./Header.css"

import {GoSignOut} from "react-icons/go"
import {BiFace} from "react-icons/bi"
import {MdRadio} from "react-icons/md"
import {FiSearch} from "react-icons/fi"
import {ImCross} from "react-icons/im"


export const Classs = () => {
    return (
        <div>
            <div className="header">
                    
                    <div className="React_logo">
                     <span> Track <MdRadio/></span>   
                    
                    </div>
                    <div className="React_music">
                       <span>Music <BiFace/></span>
                        
                        
                    </div>
                    <div className="React_signout">
                        <span>SignOut
                        <GoSignOut/>
                        </span>
                        
                    </div>
                </div>
               
            
        </div>
    )
}

export default Classs;










// import React ,{Component} from "react"


// class Classs extends Component{
//     render() {
//         return (
//             <div>hello from component</div>
//     )
//     }
// }
// export default Classs;