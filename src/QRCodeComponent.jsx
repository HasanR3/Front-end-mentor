import React from 'react';

import img from './assets/image-qr-code.png';

const QRCodeComponent = () => {
  return (
    <>
      <div className="container">
        <img src={img} alt="QR Code" />
        <h1>Improve your front-end skills by building projects</h1>
        <p>
          Scan the QR code to visit Frontend Mentor and take your coding skills to
          the next level
        </p>
      </div>
      <div className="attribution">
        <a>
          Challenge by Frontend Mentor. Coded by Hasan Rizk.
        </a>
      </div>
    </>
  );
}
export default QRCodeComponent;