import React from "react";
function Container({children}){
    return (
        <div className="container text-center bg-black px-5 py-5 pb-2 pt-2 rounded">
            <div className="row">
                {children}
            </div>
        </div>
    )
}
export default Container;