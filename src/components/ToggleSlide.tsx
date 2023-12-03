import './ToggleSlide.css';

export default function ToggleSlide() {
  return (
    <>
      <h2>Pure CSS Toggle-Slide</h2>
      <section className="text-slate-300">
        <label
          htmlFor="list-to-toggle"
          className="toggle-button border-2 border-solid border-slate-400 rounded-lg p-2 m-2 block"
        >
          A list of things
        </label>
        <input id="list-to-toggle" className="toggle-input" type="checkbox" />
        <div
          id="list-to-toggle"
          className="toggle-list mx-2 bg-slate-400 rounded-lg"
        >
          <ul className="p-2 text-slate-800">
            <li>Fun things</li>
            <li>Sad things</li>
            <li>Hot things</li>
          </ul>
        </div>
      </section>
    </>
  );
}
