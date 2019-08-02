import React from 'react'
import mainData from '../data/main.json'
import { Jumbotron } from 'reactstrap';

const Info = () => (
    <Jumbotron>
        {mainData.map((mainInfo, index) => {
            return (
                <div style={{ padding: "5px" }}>
                    <h1 className="display-5">{ mainInfo.name }</h1>
                    <br />
                    <p className="lead"><i>{ mainInfo.description }</i></p>
                </div>
            )
        })}
    </Jumbotron>
)

export default Info