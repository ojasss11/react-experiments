let heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc", className: "headingss" },
  "Hello World from REACT"
);
// "h1", {}, "Hello World from REACT" -->Object is a place where we give attributes to the tag
let heading2 = React.createElement(
  "h2",
  {
    id: "heading2",
    className: "headingss",
    xyz: "abc2",
  },
  "hello this is the second important heading "
);
let container = React.createElement("div", {}, heading, heading2);
let root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(container);
console.log(heading);
// heading-->Returns an object
// props are childrens+attributes that we pass in-->these are the props (id: "heading", xyz: "abc", className: "headingss" )
// WHAT is React.createElement -->? what is it giving to us?
// Whatever you pass in as an object goes as an attributes

/* <div id="parent">
            <div id="child">
                      <h1></h1>
            </div>
</div>*/
// how to create this type of structure inside react
let parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", { id: "hone" }, "I am h1 tag")
  )
);
let root2 = ReactDOM.createRoot(document.querySelector("#root2"));
root2.render(parent);
console.log(parent);
/* <div id="parent">
            <div id="child">
                      <h1>I'm an h1 tag</h1>
                      <h1>I'm an h1 tag</h1>
            </div>
</div>*/
// suppose the third React.create element we have to create 2 h1(2children) then we can use an array
// The third argument we can pass one children or we can pass an array
let parent2 = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement(
      "h1",
      { className: "childrens" },
      "I AM AN H1 TAG DIV-DIV"
    ),
    React.createElement(
      "h1",
      { className: "childrens" },
      "I AM AN H1 TAG DIV-DIV"
    ),
  ])
);
let root3 = ReactDOM.createRoot(document.querySelector("#root3"));
root3.render(parent2);
let parent3 = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement(
      "h1",
      {},
      "I am a h1 tag",
      React.createElement("h2", {}, "I am a h2 tag")
    ),
  ]),
]);
// This is so complex,untidy so hence we have JSX
// React is only written using JSX,JSX will make our life easy when we have to create tags
// root.render(parent)
// suppose we have <div><h1>THIS IS AKSHAY</h1></div> and we render some h1 inside the div ...then the THIS IS AKSHAY will be replaced by that parent
let root4 = ReactDOM.createRoot(document.querySelector("#root4"));
let parent4 = React.createElement("h1", {}, "new home");
root4.render(parent4);
// IN THIS scenario the hello peter is replaced by new home
// For some milliseconds hello peter is seen
// Everything inside root4 is replaced by whatever we are passing in render method
// REACT is only working inside the div id root
// WE CALL react as a library because react can be applied to the small portion of the page itself
