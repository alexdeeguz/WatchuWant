import React from 'react';
import './loading.css';
import './spinner.css';

const Loading = () => {
  return (
    <div className='loading-screen'>
      <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  );
};

export default Loading;