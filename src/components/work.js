import React from "react"
const Work = () => (
    <div style={{ padding: "5px" }}>
        <h4>Work Experience</h4>
        <hr />
        <div style={{ padding: "5px" }}> 
            <a href="https://thecalendarpros.com"><h5>The Calendar Pros</h5></a>
            <div style={{margin: "15px"}}><span></span></div>
            <a href="https://camerondaycustomwebsites.net"><h5>Cameron Day Custom Websites</h5></a>
            <small className="text-muted">March 2019 - Present</small>
            <h6><i>Owner</i></h6>
            <h6>Ran day-to-day business operations, developed all websites, configured firebase, made sales calls, hired employees. 
                Made large and small websites for a variety of customers in a variety of industries</h6>
            <div style={{margin: "15px"}}><span></span></div>
            <h5>Conan Developer of Webs</h5>
            <small className="text-muted">August 2018 - March 2019</small>
            <h6><i>Freelance Developer</i></h6>
            <h6>Developed websites, managed linux and windows servers, setup Node.js applications.</h6>
            <h6>Clients: <a href="https://bitcoin1776.org">Bitcoin1776</a> <a href="https://barnettecpa.com/">Barnette CPA</a></h6>
        </div>
    </div>
)
export default Work
// WEBPACK FOOTER //
// ./src/components/work.js