import React from "react";
import {bio} from "../data"

const Cardtext = ({ qnum, qora}) => {
    // Prevent accessing an invalid index
    return (
         
        <div className="card-text">
            {qora ? bio[qnum].question : bio[qnum].answer}
        </div>
    );
};

export default Cardtext;