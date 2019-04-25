import React from 'react';

function Header() {
  return(
    <>
      <h1 style={headerStyle}>Coding Challenges</h1>
    </>
  );
}

let headerStyle = {
  background: '#111',
  color: '#fff',
  textAlign: 'center',
  padding: '10px',
  margin: '0px'
}

export default Header;