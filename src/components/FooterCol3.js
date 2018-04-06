import React from 'react';

const FooterCol3 = () => {
    return(
        <div className="hiring-links">
            <h3><a href="/hiring">Hiring at Dribbble</a></h3>
            <ul>
                <li><a href="/jobs/info">Post a job</a></li>
                <li><a href="/scout/info">Scout designers</a></li>
                <li><a href="/teams/info">Add your team</a></li>
                <li><a className="external" href="https://crew.co/?utm_source=dribbble&amp;utm_content=dribbble-scout-nav">Crew: Hire freelancers</a></li>
            </ul>
        </div>
    )
}

export default FooterCol3;