import react from "react";
import Avatar from "../Avatar/Avatar";
const Contact=({contact})=>{
   
    
    return(
        <div className ='contact-list' >
            
             
                 <div className="primary-div">
                 <Avatar className ="ava" avatar= {contact}/>
                     <div>
                     <h3>
                         {contact.firstName+ " "+ contact.lastName}
                    </h3>
                    
                       
                       <span>
                        {contact.primaryPhone + "/"+ contact.secondaryPhone}
                        </span>
                     </div>
                      
 
                 </div>
                 

                 <div className="secondary-div">
                 <span>
                 <a href="#">{contact.email}</a>  
                </span>
                    
                 </div>

 </div>
      

            
        
    )

    
}
export default Contact