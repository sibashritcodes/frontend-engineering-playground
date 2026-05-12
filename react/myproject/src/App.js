import logo from "./logo.svg";
import "./App.css";
import React from "react";

const abc = <div></div>;

function MyComponent({ name }) {
  return <div>{name}</div>;
}

const memoizedComponent = React.memo(MyComponent);

function App() {
  const [abc, setAbc] = React.useState("a");
  React.useEffect(async () => {
    setTimeout(() => {
      setAbc("aaa");
    }, 5000);
  }, []);
  console.log(memoizedComponent);
  const isValid = React.isValidElement({
    $$typeof: Symbol.for("react.transitional.element"),
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <memoizedComponent name={abc} />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
