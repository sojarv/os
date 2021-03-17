import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

const Authencication = () => {
  const input_e = useRef(null);
  const input_p = useRef(null);

  const email = 'borgoth@mordos.com';
  const password = '12bindthem';

  const checkIfSame = (e) => {
    console.log(input_e.current.value, input_p.current.value);
    if (input_e.current.value !== email || input_p.current.value === password) {
      alert('Credentials are not right');
    }
  };
  return (
    <div id="auth">
      <input ref={input_e} placeholder="Email"></input>
      <input ref={input_p} placeholder="Password"></input>
      <Link to="/home">
        <button onClick={checkIfSame}>Submit</button>
      </Link>
    </div>
  );
};

export default Authencication;
