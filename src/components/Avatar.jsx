import React from 'react';

function Avatar() {
    return (
        <img 
            className="personal-image"
            src={require("../images/orcuncv.png")} 
            alt="Orcun Gurer"
            width={128}
            height={128}
        ></img>
    );
}

export default Avatar;