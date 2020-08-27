import React from "react";
import "./style.css";

const Section = ({title, sectionBody, extraHeaderContent}) => (
    <section className="section">
        <div className="section__container">
            <h2 className="section__header">{title}</h2>
            {extraHeaderContent}
        </div>
        <div className="section__body">
            {sectionBody}
        </div>
    </section>
);

    
export default Section;

