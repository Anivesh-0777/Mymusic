import React,{Component} from 'react'

// import {setState} from "react"
import Body from "./component/Body"
import Header from "./component/Header"
import Data from "./component/Data"
import Footer from "./component/Footer"
import SearchBar from './component/SearchBar'
import Music from './component/Music'
import "./component/app.css"


const App = () => {
  

  
  

  
  
  // const [Data, setData] = useState(Data); 
  
  const  handleremove =(temp_index) =>{

    const temp_data=Data
    // console.log(temp_data)
    console.log(Data)
    Data.splice(temp_index,1)
    // setData({Data : temp_data})
    // setData({Data:temp_data})
    console.log(Data)


  }

  const handlelike =(temp) =>{
    
    // console.log(Data[temp]["like"])
    let d=Data[temp]["like"]++
    console.log(d)
    // props.text=d
    // setState({Data[temp]["like"] : Data[temp]["like"]+1})
    // setState({d: d+1})
    // STILLL TRYING TO FIGURE OUT ......THANKYOU YOU FOR KIND BEHAVIOUR  


  }
  return (  
    <div className="App_id">

      <div className="main_class">

        <Header/>
        <SearchBar placeholder={"search here"} data={Data}/>

        {Data.map((val,index)=>
        {
          return(
          <>
            <Body
                  text= {val.like} 
                  title={val.title} 
                  subtitle= {val.subtite}
                  song={val.media}
                  remove={() =>handleremove(index)}
                  like_but={() => handlelike(index)}
                  />
            </>
                
                )
                // <Music song={"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"}/>

            
            

        }
        )
      }
      <Footer/>
      </div>
        
      
    
    </div>
  )
}

export default App
