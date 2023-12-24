import { useEffect, useState } from 'react';

// Mock data for testing - can also be dynamic

const checkBoxData = [
  { id: 'checkbox1', label: 'Checkbox 1' },
  { id: 'checkbox2', label: 'Checkbox 2' },
  { id: 'checkbox3', label: 'Checkbox 3' },
  // Test data
];

// Define session storage name

const sessionStorageName: string = 'storedCheckboxes';

export default function SaveSelection() {
  // Define State that saves checkboxes

  const [checkStates, setCheckStates] = useState<{ [key: string]: boolean }>(
    {},
  );

  // On page render load the saved states or if no states then load empty string

  useEffect(() => {
    console.log('useEffect sessionstorage');
    if (sessionStorage.getItem(sessionStorageName) !== null) {
      const storedCheckboxStates = JSON.parse(
        sessionStorage.getItem(sessionStorageName) || '""',
      );
      console.log('useeffect' + storedCheckboxStates);
      setCheckStates(storedCheckboxStates);
    }
  }, []);

  // Handle the onClick event on the button by saving its checked state

  function changeCheckStatus(checkboxId: string) {
    setCheckStates((prevCheckStates) => {
      const newCheckStates = { ...prevCheckStates };

      if (!newCheckStates[checkboxId]) {
        newCheckStates[checkboxId] = true;
      } else {
        newCheckStates[checkboxId] = false;
      }

      console.log(newCheckStates); // Log the updated state

      sessionStorage.setItem(
        sessionStorageName,
        JSON.stringify(newCheckStates),
      );

      return newCheckStates;
    });
  }

  return (
    <>
      <h2 className="sub-title-font">
        Save Selection for Refresh / Back / Forward
      </h2>
      <section className="p-2">
        {checkBoxData.map((checkbox) => {
          return (
            <div key={`key-${checkbox.id}`}>
              <input
                type="checkbox"
                id={checkbox.id}
                checked={checkStates[checkbox.id] || false}
                onChange={() => changeCheckStatus(checkbox.id)}
              />
              <label className="ml-3" htmlFor={checkbox.id}>
                {checkbox.label}
              </label>
            </div>
          );
        })}
      </section>
    </>
  );
}
