import React, { useState } from 'react';
import { Jumbotron, Button } from 'reactstrap';
//import Resume from '../data/camdayresume.pdf';


const Info = () => {
  return (
    <Jumbotron id="mainJumbo" className="text-white">
      <div style={{ padding: '5px' }}>
        <h1 className="display-5">Software Craftsman and IT Professional</h1>
        <br />
        <p className="lead">
          <i>
            An integrations, automation, and software developer that prides themselves on writing functional and semantic code. I created solutions to automate workflows and processes, increasing efficiency and productivity. Adept in IT Support and troubleshooting.
          </i>
        </p>
      </div>
      {/*
      <Button color="secondary" href={Resume} download>
        Download Resume
      </Button>
    */}
    </Jumbotron>
  );
};

export default Info;
// WEBPACK FOOTER //
// ./src/components/info.js
