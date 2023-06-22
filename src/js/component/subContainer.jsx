import React from "react";

function SubContainer({children}){
    return (
        <div className="col px-1 py-1">
            <div className="bg-dark bg-gradient rounded pt-3 pb-3">
                {children}
            </div>
        </div>
    );
};
export default SubContainer;