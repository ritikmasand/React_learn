import logo from "./logo.svg";
import "./App.css";
import MyComponent from "./components/MyComponents";
import Myarray from "./components/Myarray";
function App() {
  const arr = [1, 2, 3, 4, 5, 6, "whatever"];
  const styling = {
    backgroundColor: "green",
    color: "orange",
  };
  return (
    <>
      <h2>Hello World</h2>
      <MyComponent caption="button 1" />
      <MyComponent caption="button 2" />
      <MyComponent caption="button 3" />
      <br />
      <Myarray abcd={arr} />
      <p style={styling}>This is an inline style</p>
    </>
  );
}

export default App;
