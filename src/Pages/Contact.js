/** @format */

import React from 'react';

function Contact() {
  return (
    <div className='Main'>
      {/* TOP  */}

      {/* MIDDLE  */}

      <div className='Text'>
        <div className='Content'>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            <br />
            majority have suffered alteration in some form, by injected humour,
            or <br />
            randomised words which don't look even slightly believable.
          </p>
        </div>
      </div>

      <div className='contactForm'>
        <div className='nameForm'>
          <input
            type='text'
            placeholder='First Name'
            className='inputName wd'
          />
          <input type='text' placeholder='Last Name' className='inputName wd' />
        </div>
        <input
          type='email'
          placeholder='example@gmail.com'
          className='inputName'
        />
        <div className='commentCont'>
          <input type='text' placeholder='Comments' className='inComment' />
        </div>
        <button>onSend</button>
      </div>

      {/* BOTTOM  */}

      <div>
        <div className='PRO-FOOTER'>
          <div className='Left'>
            <div className='Image'></div>
            <div className='Info'>
              <h4>Amin Mustafa</h4>
              <p>Design | Code | Building</p>
            </div>
          </div>

          <div className='Right'>
            <p>onSend</p>
            <p>Online / Offline</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
