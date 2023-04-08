import React from 'react'

const Footer = () => {

  return (
    <footer className='footer'>
       <p>Powered by</p>
        <img className = 'logoFooter' src="./images/DH.png" alt='DH-logo' />
        <img src= './images/ico-facebook.png' alt='Facebook-logo' width={50}/>
        <img src='./images/ico-instagram.png' alt='Instagram-logo' />
        <img src='./images/ico-tiktok.png' alt='Tiktok-logo' />
        <img src='./images/ico-whatsapp.png' alt='whatsapp-logo' />
    </footer>
  )
}

export default Footer
