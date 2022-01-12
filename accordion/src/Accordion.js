import React from "react";
const Accordion=({title , active , setActive})=>{
    return(
        <div className="accordion">
            <div className="accordionHeading">
                <div className="container">
                    <p>{title}</p>
                    <span onClick={() => setActive(title)}>
                        {active === title ? "-" : "+"}
                    </span>
                </div>
            </div>
        <div className={(active===title ? "show" : "") + "accordionContent"}>
            <div className="container">
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. 
                </p>
            </div>
        </div>
        </div>
    );
};
export default Accordion;