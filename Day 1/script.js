// const imp = document.querySelector(".imp");

// const h1 = React.createElement("div",{className:"valid"},React.createElement("span",{},"helloooooooooo"));

// const h2 = React.createElement("main",{className:"main"},React.createElement("h1",{},"helloooooooooo"));
// let root = ReactDOM.createRoot(imp);
// root.render(h1);
// import {a,sum} from './main.js'

// console.log(a)
// console.log(sum(122,233));




let task = React.createElement('div',{},
    [    React.createElement("h1",{},React.createElement("span",{},"I am span")),
        React.createElement("h2",{},React.createElement("span",{},"I am span"))
    ]
)

let imp = document.querySelector(".imp")
let root = ReactDOM.createRoot(imp)
root.render(task)