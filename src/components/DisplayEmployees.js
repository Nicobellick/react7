import React from 'react';
  
function DisplayEmployee({ guy }) {
  return (
    <div className="DisplayEmployee">
      <p>{guy.character}</p>
      <h2>{guy.quote}</h2>
      <img src={guy.image} alt={guy.character}></img>
      
    </div>
  );
};
  
export default DisplayEmployee;