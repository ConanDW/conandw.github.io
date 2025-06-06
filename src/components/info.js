import React, { useState } from 'react';
import { Jumbotron, Button} from 'reactstrap';
import Resume from '../data/camdayresume.pdf';


const Info = () => {
  return (
    <Jumbotron id="mainJumbo" className="text-white">
      <div style={{ padding: '5px' }}>
        <h1 className="display-5">Software Craftsman</h1>
        <br />
        <p className="lead">
          <i>
            I am an independent developer striving to build relationships with industry experts. My purpose is to create software and automation that empowers workflows and processes. I pride myself on writing functional and semantic code tailored to exact specifications.
          </i>
        </p>
      </div>
      <Button color="secondary" href={Resume} download>
        Download Resume
      </Button>
    </Jumbotron>
  );
};

export default Info;
// WEBPACK FOOTER //
// ./src/components/info.js
