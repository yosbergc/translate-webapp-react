import React from "react";
let context = React.createContext();
function TranslateContext({children}) {

    return (<context.Provider value={{}}>
        {children}
    </context.Provider>)
}
export {TranslateContext, context};