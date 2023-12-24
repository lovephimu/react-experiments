import './TransitionObject.css';
import { useEffect, useRef, useState } from 'react';
import experimentsLogo from '../react-experiments-logo.png';

export default function TransitionObject() {
  const [targetPosition, setTargetPosition] = useState(false);

  // Create a ref with an initial value of null
  const logoRef = useRef<HTMLImageElement | null>(null);

  // Function to update element position
  const updateElementPosition = () => {
    const logo = logoRef.current;
    if (logo) {
      const rect = logo.getBoundingClientRect();
      if (rect.top < 200) {
        setTargetPosition(true);
      } else {
        setTargetPosition(false);
      }
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
      <h2 className="sub-title-font">
        Transition Object on Position Threshold
      </h2>
      <section className="text-slate-300 p-2">
        <div className="flex effect h-32">
          <img
            className={`effect-item ${
              targetPosition ? 'effect-item-change' : ''
            }`}
            height={64}
            width={64}
            ref={logoRef}
            alt="react experiments logo"
            src={experimentsLogo}
          />
        </div>
      </section>
    </>
  );
}
