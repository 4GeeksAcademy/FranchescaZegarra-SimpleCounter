import React from "react";
function Number({number, position}) { 
    let arr=[];
    
    for (let i=6; i>0; i--){
        arr.push(number%10);
        number = Math.floor(number/10);
    };
    
    let place = arr[position-1];
    
    return(
        <>
            <p className="text-white m-auto fontSize">{place}</p>
        </>
    );
};
export default Number;