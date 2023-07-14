import { useState } from "react";

export default function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const myDate = new Date();
  myDate.setDate(myDate.getDate() + count);

  const stepChanger = (event) => {
    setStep(Number(event.target.value));
  };

  function countMinus() {
    setCount((counter) => counter - step);
  }

  function countPlus() {
    setCount((counter) => counter + step);
  }

  const countChanger = (event) => {
    setCount(Number(event.target.value));
  };

  function handleReset() {
    setStep(1);
    setCount(0);
  }

  return (
    <>
      <div className="container">
        <div className="sliderContainer">
          <input
            className="slider"
            type="range"
            min="1"
            max="10"
            value={step}
            onChange={stepChanger}
          />
          <p>Step: {step}</p>
        </div>
        <div className="group-2">
          <button className="item1" onClick={countMinus}>
            -
          </button>
          <input
            type="text"
            className="boxCount"
            value={count}
            onChange={countChanger}
          />
          <button className="item2" onClick={countPlus}>
            +
          </button>
        </div>
        <div className="group-3">
          <p className="item">
            {count > 0
              ? `${count} days from today is `
              : count < 0
              ? `${Math.abs(count)} days ago was `
              : "Today is "}
          </p>
          <p className="item">{myDate.toDateString()}</p>
          {count !== 0 || step !== 1 ? (
            <button className="item" onClick={handleReset}>
              Reset
            </button>
          ) : null}
        </div>
      </div>
    </>
  );
}
