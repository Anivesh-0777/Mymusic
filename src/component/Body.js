import React ,{useState} from 'react'
import "./body.css"
import {AiFillLike} from "react-icons/ai"
import {AiFillPauseCircle} from "react-icons/ai"
import Music from "./Music"

import {BsFillPlayFill} from "react-icons/bs"
// import  Classs from "./Classs"

// import {FiSearch} from 



const Hello = (props) => {
    
    // const del_row =(props) =>{
    //     pr
    // }



    return (     
        

        // <div className="from_hello">
        //     <div className="main">
                

                <div className="body">
                    <div className="element_1">
                        <button onClick={props.like_but } id="likeit"> <AiFillLike/>{props.text}</button>
                        <div id="lyrics">
                            <h4>{props.title}
                                <h6>{props.subtitle}</h6>
                            
                            </h4>


                        </div>
                        <Music song={props.song}/>
                        


                        
                        
                        {/* <button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button> */}
                        <button onClick={props.remove}>"Delete" </button>
                    
                    </div>
                    
                </div> 
                 

            

    //         </div>
    //     </div>
    )
}

export default Hello
