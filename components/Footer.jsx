import React from 'react';
import { AiOutlineWhatsApp, AiOutlineMail } from 'react-icons/ai';

const Footer = () => {
  const direction = () => {
    window.open('mailto:israrahmedpk1999@gmail.com?subject=Subject&body=Body%20goes%20here')
  }
  return (
    <div className="footer-container">
      <p>&copy;2022 Electro store All rights reserverd</p>
      <p className="icons">
        <AiOutlineWhatsApp style={{ cursor: "pointer" }} />
        <AiOutlineMail onClick={direction} style={{ cursor: "pointer" }} />
      </p>
    </div>
  )
}

export default Footer