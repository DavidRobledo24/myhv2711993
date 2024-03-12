import React from 'react'
import "./header.css"
import fotopersonal from "./Sukuna.jpg";
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';



export default function Header() {
  return (
    <div className='header'>
        <div className="headerPhoto">
          <img src={fotopersonal} alt="foto-personal" className={"headerPhotoImg"}/>
        </div>
        <div className="headerNombres">
          <h1>DAVID ALEJANDRO ROBLEDO ACEVEDO</h1>
          <p>Tecnologo en analisis y desarrolo de software</p>
          <p>Desarrollador Web FullStack</p>
        </div>
        <div className="headerContacto">
          <ul className='contactList'>
              <li className='contactListItem'><p><SmartphoneIcon/></p>    <p>(+57) 3217254256</p></li>           
              <li className='contactListItem'><p><LocationOnIcon/></p>    <p>Pereira / Risaralda - Colombia</p></li>
              <li className='contactListItem'><p><EmailIcon/></p> <p>darobledo98@misena.edu.co</p></li>  
              <li className='contactListItem'><p><AlternateEmailIcon/></p> <p>davidrobledo24@gmail.com</p></li>            
          </ul>
        </div>       
    </div>
  )
}
