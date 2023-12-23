import './SliderDynamic.css';
import { useState } from 'react';

function roundNumber(number: number | string) {
  const roundedNumber = Math.round(Number(number));
  console.log(roundedNumber);
  return roundedNumber;
}

function generateSlides(numberOfSlides: number) {
  const slidesArray = [];
  for (let i = 0; i < numberOfSlides; i++) {
    slidesArray.push(
      <div
        key={`id-${i + 1}`}
        className="content-container bg-red-300 h-full w-full"
      >
        <div className="flex w-full h-full justify-center items-center">
          <h3>Slide-{i + 1}</h3>
        </div>
      </div>,
    );
  }
  return slidesArray;
}

function generateLinkPairs(numberOfLinkPairs: number) {
  const pairArray = [];
  const leftPair = [];
  const rightPair = [];

  // Generate arrays based on input number

  for (let i = 0; i < numberOfLinkPairs; i++) {
    leftPair.push(i + 1);
    rightPair.push(i + 1);
  }

  // Modify arrays, so that later the last slide can jump to the first, etc..

  const lastLeftValue = leftPair.pop();
  leftPair.unshift(lastLeftValue);
  const firstRightValue = rightPair.shift();
  rightPair.push(firstRightValue);
  console.log(rightPair);
  console.log(leftPair);

  // Generate JSX arrays

  for (let i = 0; i < numberOfLinkPairs; i++) {
    pairArray.push(
      <div key={`id-${i + 1}`}>
        <a href={`#rs${rightPair[i]}`}>{`<`}</a>
        <a href={`#rs${leftPair[i]}`}>{`>`}</a>
      </div>,
    );
  }
  return pairArray;
}

function changeTransform(
  range: number,
  currentValue: number,
  operator: string,
) {
  const upperEnd = range * 100 * -1;
  console.log(range);
  console.log(upperEnd);
  let newTransformValue;
  if (operator === '+') {
    newTransformValue = currentValue - 100;
    if (upperEnd === newTransformValue) {
      newTransformValue = 0;
    }
  } else {
    newTransformValue = currentValue + 100;
    if (newTransformValue > 0) {
      newTransformValue = upperEnd + 100;
    }
  }
  console.log('transform ' + newTransformValue);
  return newTransformValue;
}

export default function SliderDynamic() {
  // States
  const [transformState, setTransformState] = useState(0);
  const [count, setCount] = useState(2);
  // State dependent functions

  return (
    <>
      <h2 className="sub-title-font">React Slider Dynamic</h2>
      <section>
        <div className="p-2">
          {/* Input */}
          <div className="flex flex-col pb-5">
            <label htmlFor="slider-select">Number of Slides:</label>
            <input
              id="slider-select"
              defaultValue={count}
              type="number"
              className="mt-1 block w-full p-2 border-2 border-slate-400 text-slate-300 rounded-md focus:outline-none focus:border-blue-500 bg-transparent"
              onChange={(e) => setCount(roundNumber(e.currentTarget.value))}
              min={2}
            />
          </div>
          {/* Slider */}
          <div className="h-56">
            <div className="react-slider-gallery">
              {/* Single Slides */}

              <div
                style={{ transform: `translateX(${transformState}%)` }}
                className="react-slider text-slate-800"
              >
                {generateSlides(count)}
              </div>

              {/* Slider Controls */}

              <div className="flex">
                <div className="react-slider-switch">
                  <button
                    onClick={() =>
                      setTransformState(
                        changeTransform(count, transformState, '-'),
                      )
                    }
                  >
                    -
                  </button>
                  <button
                    onClick={() =>
                      setTransformState(
                        changeTransform(count, transformState, '+'),
                      )
                    }
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
