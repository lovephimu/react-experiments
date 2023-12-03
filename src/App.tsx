import './App.css';
import ToggleSlide from './components/ToggleSlide';
import experimentsLogo from './react-experiments-logo.png';

export default function App() {
  return (
    <section>
      <header className="h-10">
        <div className="flex justify-end w-full p-5">
          <p>Menu</p>
        </div>
      </header>
      <body className="m-5">
        <section className="w-full flex flex-col justify-center items-center my-5">
          <img
            className="logo-shadow"
            height={250}
            width={250}
            alt="react experiments logo"
            src={experimentsLogo}
          />
          <div className="flex flex-wrap py-5 w-full">
            <div className="w-full text-center">
              <h1 className="title-font text-5xl py-5">React Experiments</h1>
            </div>
            <div className="w-full text-center">
              <p>by</p>
            </div>
            <div className="w-full text-center">
              <p>lovephimu</p>
            </div>
          </div>
        </section>

        {/* Pure CSS Toggle-Slide */}
        <ToggleSlide />
      </body>
    </section>
  );
}
