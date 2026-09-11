import React from "react";


const h1 = React.createElement("div",{},React.createElement("h1",{},"hello bhaiyu"))
const div = document.querySelector("#root")
const root = ReactDOM.createRoot(div)

root.render(h1)
