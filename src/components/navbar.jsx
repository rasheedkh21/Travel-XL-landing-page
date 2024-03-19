import React from "react";
import { Elements, Navcont } from "./homeStyle";

const Navbar = () => {
  return (
    <div>
      <Navcont>
        
          <h1>trxvl.</h1>
        
        <Elements>
          <p>Home</p>
          <p>Stays</p>
          <p>Flights</p>
          <p>Packages</p>
          <p>Sign Up</p>
        </Elements>
      </Navcont>
    </div>
  );
};

export default Navbar;
