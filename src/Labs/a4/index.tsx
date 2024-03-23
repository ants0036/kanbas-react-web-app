import PassingFunctions from "./PassingFunctions";
function Assignment4() {
    function sayHello() {
      alert("Hello");
    }
    return (
      <div>
        <h1>Assignment 4</h1>
        <PassingFunctions theFunction={sayHello} />
        ...
      </div>
    );
  }
  export default Assignment4;
  