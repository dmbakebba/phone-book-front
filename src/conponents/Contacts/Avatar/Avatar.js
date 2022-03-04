import react from "react"


const Avatar=({avatar})=>{
    return(
        <div className="ava">
           <span>
           {avatar.firstName.substring(0,1)+ " "+ avatar.lastName.substring(0,1)}
           
           </span>
        </div>
    )
}
export default Avatar