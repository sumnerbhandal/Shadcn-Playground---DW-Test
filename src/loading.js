import React from 'react';
    
function Loading(props) {
  return (
    <div className="app-container flex items-center gap-4 justify-center p-8 w-full h-full">
      <div className="loading"></div>
      <p className="mt-16">{props.text}</p>
    </div>
  );
}

export default Loading;