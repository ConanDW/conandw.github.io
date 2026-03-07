import React, { useState } from 'react';
import { Jumbotron, Button } from 'reactstrap';
//import Resume from '../data/camdayresume.pdf';


const Info = () => {
  return (
    <Jumbotron id="main-jumbo" className="text-white">
      <div style={{ padding: '5px' }}>
        <h1 className="display-5">Software Craftsman and IT Professional</h1>
        <br />
        <p className="lead">
          <i>
            An integrations, automation, and software developer that prides themselves on writing functional and semantic code. 
            I create solutions to automate workflows and processes, increasing efficiency and productivity. 
            I have a strong background in system administration, network management, IT support, and cloud computing. 
            With a passion for learning and problem solving, I am committed to delivering high quality results and continuously improving my skills.
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

