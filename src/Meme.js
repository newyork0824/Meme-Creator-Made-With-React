import React from 'react'

export default function Meme(){
    
    React.useEffect(() => {
     fetch("https://api.imgflip.com/get_memes")  
     .then(Response => Response.json()) 
     .then(data => setAllMemes(data.data.memes))  
      },"")
    
   const[meme,setMeme] = React.useState({
       topText: "",
       bottomText:"",
       image:""
   })
   
   const [allMemes, setAllMemes] = React.useState("")
   
   function getAllMemes() {
       console.log(allMemes)
       const memesArray = allMemes
       const randomNumber = Math.floor(Math.random() * memesArray.length) +1 
       const url = memesArray[randomNumber].url
       setMeme(prevMeme => {
        return {
            ...prevMeme,
            image:url
        }
       })
   }
   
   function handleChange(event) {
       const {name,value} = event.target
       setMeme(prevMeme => ({
        
        ...prevMeme,
        [name]:value
           
       }))
       console.log(meme)
   }
    
    
    return (
        <main>
        <div className="form">
        <div className="text-container">
        <input 
        type="text"
        placeholder="top Text"
        className="form-input"
        name="topText"
        value = {meme.topText}
        onChange={handleChange}
        
        
        
        />
        
        
        <input
        type="text"
        plaveholder="bottom Text"
        className="form-input"
         name= "bottomText" 
          value={meme.bottomText}
         onChange={handleChange}
       
       
        
        />
         
         
        </div>
        <div>
    
        </div>
        </div>
        <div className="meme-container">
        <button onClick={getAllMemes} className="newMeme-btn">Get a New Meme </button>
        <img alt="a meme" src={meme.image} className="meme-img" />
        <h2 className="top-text">{meme.topText} </h2>
        <h2 className="bottom-text">{meme.bottomText} </h2>
        </div>
        
        
        
        
        
        
      </main>  
    )
}