import './Slider.css';

export default function Slider() {
  return (
    <>
      <h2 className="sub-title-font">Pure CSS Slider Static</h2>
      <section>
        <div className="h-56 p-2">
          <div className="slider-gallery">
            {/* targets start */}
            <span id="s1" />
            <span id="s2" />
            <span id="s3" />
            <span id="s4" />
            {/* targets end */}
            {/* These targets are necessary for the css class to find a reference point and apply the right transform amount to the slider class */}
            <div className="slider text-slate-800">
              <div className="bg-red-300 ">
                <h3>Slide 1</h3>
              </div>
              <div className="bg-green-300">
                <h3>Slide 1</h3>
              </div>
              <div className="bg-yellow-300">
                <h3>Slide 1</h3>
              </div>
              <div className="bg-blue-300">
                <h3>Slide 1</h3>
              </div>
            </div>
            <div className="slider-switch">
              <div>
                <a href="#s4">{`<`}</a>
                <a href="#s2">{`>`}</a>
              </div>
              <div>
                <a href="#s1">{`<`}</a>
                <a href="#s3">{`>`}</a>
              </div>
              <div>
                <a href="#s2">{`<`}</a>
                <a href="#s4">{`>`}</a>
              </div>
              <div>
                <a href="#s3">{`<`}</a>
                <a href="#s1">{`>`}</a>
              </div>
            </div>
            <div className="slider-bullets">
              <a href="#s1">1</a>
              <a href="#s2">2</a>
              <a href="#s3">3</a>
              <a href="#s4">4</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
