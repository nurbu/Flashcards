import React from "react";

const Checker = ({check}) =>{
    return (
        <div>
            {check ? "Correct 😊":"Worng 👎"}
        </div>
    )
}
export default Checker;