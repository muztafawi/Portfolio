/** @format */

import React from 'react';

function Sidebar() {
  return (
    <div className='Sidebar'>
      {/* TOP  */}
      <div className='Date'>
        <p className='Day'>28</p>
        <div className='Line'></div>
        <p className='Year'>July, 2022</p>
      </div>

      {/* BOTTOM  */}
      <div className='Icons'>
        <i class='bx bxl-github Ico' i />
        <i class='bx bxl-dribbble Ico' i />
        <i class='bx bxl-linkedin-square Ico' i />
        <i class='bx bxl-behance Ico' i />
        <i class='bx bxl-telegram Ico' i />
      </div>
    </div>
  );
}

export default Sidebar;
