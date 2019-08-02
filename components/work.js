import React from "react"
import mainData from "../data/main.json"

const Work = () => (
    <div style={{ padding: "5px" }}>
        <h4>Work Experiance</h4>
        <hr />
        {mainData.map((mainInfo, index) => {
            return (
                <div style={{ padding: "5px" }}> 
                    <a href="https://camerondaycustomwebsite.net"><h5>{ mainInfo.job }</h5></a>
                    <small className="text-muted">{ mainInfo.datesActive }</small>
                    <h6><i>{ mainInfo.title }</i></h6>
                    <h6>{ mainInfo.duties }</h6>
                    <div style={{margin: "15px"}}><span></span></div>
                    <a href="https://bitcoin1776.org"><h5>{ mainInfo.job2 }</h5></a>
                    <small className="text-muted">{ mainInfo.datesActive2 }</small>
                    <h6><i>{ mainInfo.title2 }</i></h6>
                    <h6>{ mainInfo.duties2 }</h6>
                </div>
            )
        })}
    </div>
)

export default Work