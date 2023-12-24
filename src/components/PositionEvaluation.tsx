import { useEffect, useRef, useState } from 'react';

export default function PositionEvaluation() {
  const [targetPosition, setTargetPosition] = useState(0);

  // Create a ref with an initial value of null
  const testDivRef = useRef<HTMLDivElement | null>(null);

  // Function to update element position
  const updateElementPosition = () => {
    const testDiv = testDivRef.current;
    if (testDiv) {
      const rect = testDiv.getBoundingClientRect();
      setTargetPosition(rect.top);
    }
  };

  // Use useEffect to update the element position on mount and scroll
  useEffect(() => {
    // Initial position update
    updateElementPosition();

    // Update element position on scroll
    const handleScroll = () => {
      updateElementPosition();
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <h2 className="sub-title-font">Position Evaluation</h2>
      <section>
        <div className="m-5 h-56 flex justify-center">
          <div
            ref={testDivRef}
            id="testDiv"
            className="h-52 w-52 bg-sky-500 flex justify-center items-center"
          >
            <h2>Top: {targetPosition}</h2>
          </div>
        </div>
      </section>
    </>
  );
}
