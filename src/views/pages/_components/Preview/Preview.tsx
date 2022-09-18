import React from "react";

function Preview({children}:any) {
    return (
        <div className="flex-1 relative bg-gray-50 border-b border-gray-200 h-[500px]" id="example">
            {children}
        </div>
    )
}

export default Preview;