function makeButton(label) {
  let count = 0;
  return {
    handleClick: () => 
      console.log(`The ${label} button is clicked ${++count} times`),
  };
}

const saveButton = makeButton("save");
const cancelButton = makeButton("cancel");

saveButton.handleClick();
cancelButton.handleClick();
saveButton.handleClick();
