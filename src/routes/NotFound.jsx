import React from "react";

const NotFound = () => {
    return (
        <div 
            className="bg flexbox" 
            style={{
                justifyContent: 'center', 
                alignItems: 'center'
            }}
        >
            <h1 
                style={{ 
                    fontSize: '80px',
                    letterSpacing: '0.1em',
                    textShadow: '1px 1px 10px rgba(255, 255, 255, 0.8)',
                    textAlign: 'center'
                }}
            >This Page Doesn't Exist</h1>
        </div>
    )
}

export default NotFound;