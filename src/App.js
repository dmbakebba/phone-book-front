import react from "react";
import Header from './conponents/Header/Header';
import Search from "./conponents/Search/Search";
import Contacts from "./conponents/Contacts/Contacts"





const App=()=>{
  

    

   const list= [
      {
        id:1,
      'firstName': 'Ousman',
    'minit':'',
    'lastName':'Dibbasey',
    'primaryPhone':'5338348',
    'secondaryPhone':'9546087',
    'email':'ousmandibbasey@gmail.com',
    'address':'latrikunda'
      },
      {
        id:2,
    'firstName': 'Lamin',
    'minit':'M',
    'lastName':'Ceesay',
    'primaryPhone':'3404808',
    'secondaryPhone':'',
    'email':'lamin@gmail.com',
    'address':'Bakau'
    },
    
      {
        id:3,
      'firstName': 'Assan',
    'minit':'',
    'lastName':'Jallow',
    'primaryPhone':'3991499',
    'secondaryPhone':'5947771',
    'email':'jallowhassan08@.com',
    'address':'Brikama'
      },
    
    
      {
        id:4,
      'firstName': 'Habibou',
    'minit':'',
    'lastName':'Njie',
    'primaryPhone':'2401167',
    'secondaryPhone':'',
    'email':'habibounjie192@gmail.com',
    'address':'Basse'
      },
    
    
      {
        id:5,
      'firstName': 'Muhammed',
    'minit':'B',
    'lastName':'Njie',
    'primaryPhone':'3677770',
    'secondaryPhone':'2741052',
    'email':'njiem@gmail.com',
    'address':'Abuko'
      },
      {
        id:6,
        'firstName': 'Omar',
      'minit':'',
      'lastName':'Njie',
      'primaryPhone':'2760982',
      'secondaryPhone':'3459086',
      'email':'njiem@gmail.com',
      'address':'josuwang'
      },
      {
        id:7,
        'firstName': 'Omar',
      'minit':'',
      'lastName':'Njie',
      'primaryPhone':'2760982',
      'secondaryPhone':'3459086',
      'email':'njiem@gmail.com',
      'address':'josuwang'
      },
    {

      id:8,
      'firstName': 'salim',
    'minit':'',
    'lastName':'Jallow',
    'primaryPhone':'3991499',
    'secondaryPhone':'5947771',
    'email':'jallowhassan08@.com',
    'address':'Brikama',
      },
{
      id:9,
      'firstName': 'Assan',
    'minit':'',
    'lastName':'Jallow',
    'primaryPhone':'3991499',
    'secondaryPhone':'5947771',
    'email':'jallowhassan08@.com',
    'address':'Brikama'
      }
    


    

    ]

    

  return(
    
   <div>
     <nav className="nav-bar">
      <Header />
      <Search />
     </nav>
     
     <div>
      <Contacts contacts={list}/>
     </div>
   </div>
    
  )
  
 
}
export default App