// function useState(initialState) {
//   let state = initialState;
//   function setState(newValue) {
//     state = newValue;
//   }
//   return [state, setState];
// }

function useStateWrapper() {
  let state;
  return function useState(initialState) {
    if (state === undefined) {
      state = initialState;
    }
    function setState(newValue) {
      state = newValue;
      //   Render();
    }
    return [state, setState];
  };
}

const useState = useStateWrapper();
const [myState, setMyState] = useState("abc");
console.log(myState);
setMyState("def");
console.log(myState);
