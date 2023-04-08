import React from 'react'
import { useNavigate } from "react-router-dom";

const Footer = () => {

  const navigate = useNavigate();

  return (
    <footer className='footer'>
      <div>
        <button className="button-footer" onClick={() => navigate(-1)}>« Volver
        </button>
      </div>

      <div>
        <p>Powered by</p>
        <img className = 'logoFooter' src="./images/DH.png" alt='DH-logo' />
      </div>
      
        <img src= './images/ico-facebook.png' alt='Facebook-logo' width={50}/>
        <img src='./images/ico-instagram.png' alt='Instagram-logo' />
        <img src='./images/ico-tiktok.png' alt='Tiktok-logo' />
        <img src='./images/ico-whatsapp.png' alt='whatsapp-logo' />
    </footer>
  )
};

export default Footer
