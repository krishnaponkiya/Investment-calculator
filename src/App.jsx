import Header from "./Component/Header";
import UserInput from "./Component/UserInput";
import Result from "./Component/Result";
import { useState } from "react";
const INITIAL_VALUE = {
  initialInvestment: 15000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
};
function App() {
  const [userInput, setUserInput] = useState(INITIAL_VALUE);

  function handleNewValue(inputIdentifier, newValue) {
    setUserInput((prevalue) => {
      return {
        ...prevalue,
        [inputIdentifier]: +newValue,
      };
    });
  }

  const inputIsValid = userInput.duration >= 1;
  return (
    <>
      <Header />
      <UserInput userInputs={userInput} onChangeValue={handleNewValue} />
      {!inputIsValid && <p>Please Enter valid Data or enter duration grater than 1</p>}
      {inputIsValid && <Result input={userInput} />}
    </>
  );
}

export default App;
