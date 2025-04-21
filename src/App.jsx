import { useState } from "react";
import Header from "./components/Header"
import Result from "./components/Result";
import UserInput from "./components/UserInput"
useState
function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
});

function handleChange(name, value) {
    setUserInput((prevInput) => ({
        ...prevInput,
        [name]: +value
    }));

}
  return (
    <>
      <Header />
      <UserInput onChange={handleChange} userInput={userInput}/>
      <Result userInput={userInput}/>
    </>
  )
}

export default App
