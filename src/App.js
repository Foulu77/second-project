import { useState } from "react";

export default function App() {
  return (
    <div>
      <Steps />
    </div>
  );
}

function Steps() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const myDate = new Date();
  const formattedDAte = new Date(
    myDate.setDate(myDate.getDate() + count)
  ).toDateString();

  function deductSteps() {
    if (step > 1) setStep((stepper) => stepper - 1);
  }

  function sumSteps() {
    setStep((stepper) => stepper + 1);
  }

  function countMinus() {
    setCount((counter) => counter - 1 * step);
  }

  function countPlus() {
    setCount((counter) => counter + 1 * step);
  }

  return (
    <>
      <div className="container">
        <div className="group-1">
          <button className="item" onClick={deductSteps}>
            -
          </button>
          <p className="item">Steps: {step}</p>
          <button className="item" onClick={sumSteps}>
            +
          </button>
        </div>
        <div className="group-2">
          <button className="item" onClick={countMinus}>
            -
          </button>
          <p className="item">count: {count}</p>
          <button className="item" onClick={countPlus}>
            +
          </button>
        </div>
        <div className="group-3">
          {count === 0 && <p className="item">{`Today is ${formattedDAte}`}</p>}
          {count > 0 && (
            <p className="item">{`${count} days from today is ${formattedDAte}`}</p>
          )}
          {count < 0 && (
            <p className="item">{`${count} days ago was ${formattedDAte}`}</p>
          )}
        </div>
      </div>
    </>
  );
}
