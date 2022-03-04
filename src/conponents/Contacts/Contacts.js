import react from "react"
import Avatar from "./Avatar/Avatar"
import Catagories from "./Catagories/Catagories"
import Contact from "./Contact/Contact"


const Contacts=({contacts})=>{
  
    return(
        
      
     
      
        <div className='contact_list'>
     
          
            
          {  contacts.map(contact => (
            <Contact contact= {contact}/>
             
            ))}
                    
        </div>
    
        
      
        
        
        
  
      
            
    )
        }
        
    

    
    
        
    

export default Contacts
