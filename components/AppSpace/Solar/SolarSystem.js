import React, { Component } from "react";

class SolarSystem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bodyClass: "opening hide-UI view-2D zoom-large data-close controls-close",
      universeClass: "scale-stretched",
      solarsysClass: "earth",
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        bodyClass: "view-3D set-speed",
      });
    }, 2000);
  }

  setView = (view) => {
    this.setState({
      universeClass: view,
    });
  };

  toggleData = () => {
    this.setState((prevState) => ({
      bodyClass: prevState.bodyClass.includes("data-open")
        ? prevState.bodyClass.replace("data-open", "data-close")
        : prevState.bodyClass.replace("data-close", "data-open"),
    }));
  };

  toggleControls = () => {
    this.setState((prevState) => ({
      bodyClass: prevState.bodyClass.includes("controls-open")
        ? prevState.bodyClass.replace("controls-open", "controls-close")
        : prevState.bodyClass.replace("controls-close", "controls-open"),
    }));
  };

  handleDataClick = (ref) => {
    this.setState({
      solarsysClass: ref,
    });
  };

  render() {
    const { bodyClass, universeClass, solarsysClass } = this.state;

    return (
      <div className={bodyClass}>
        <div id="navbar">
          <a id="toggle-data" href="#data" onClick={this.toggleData}>
            <i className="icon-data"></i>Data
          </a>
          <h1>
            3D Solar System
            <br />
            <span>
              by{" "}
              <a href="https://twitter.com/JulianGarnier" target="_blank">
                @JulianGarnier
              </a>
            </span>
          </h1>
          <a
            id="toggle-controls"
            href="#controls"
            onClick={this.toggleControls}
          >
            <i className="icon-controls"></i>Controls
          </a>
        </div>
        <div id="data">
          <a
            className="sun"
            title="sun"
            href="#sunspeed"
            onClick={() => this.handleDataClick("sun")}
          >
            Sun
          </a>
          <a
            className="mercury"
            title="mercury"
            href="#mercuryspeed"
            onClick={() => this.handleDataClick("mercury")}
          >
            Mercury
          </a>
          <a
            className="venus"
            title="venus"
            href="#venusspeed"
            onClick={() => this.handleDataClick("venus")}
          >
            Venus
          </a>
          <a
            className="earth active"
            title="earth"
            href="#earthspeed"
            onClick={() => this.handleDataClick("earth")}
          >
            Earth
          </a>
          <a
            className="mars"
            title="mars"
            href="#marsspeed"
            onClick={() => this.handleDataClick("mars")}
          >
            Mars
          </a>
          <a
            className="jupiter"
            title="jupiter"
            href="#jupiterspeed"
            onClick={() => this.handleDataClick("jupiter")}
          >
            Jupiter
          </a>
          <a
            className="saturn"
            title="saturn"
            href="#saturnspeed"
            onClick={() => this.handleDataClick("saturn")}
          >
            Saturn
          </a>
          <a
            className="uranus"
            title="uranus"
            href="#uranusspeed"
            onClick={() => this.handleDataClick("uranus")}
          >
            Uranus
          </a>
          <a
            className="neptune"
            title="neptune"
            href="#neptunespeed"
            onClick={() => this.handleDataClick("neptune")}
          >
            Neptune
          </a>
        </div>
        {/* Render other HTML elements */}
        {/* ... */}
        <div id="universe" className={universeClass}>
          <div id="galaxy">
            <div id="solar-system" className={solarsysClass}>
              {/* Render planets and other celestial bodies */}
              {/* ... */}
              <div id="sun">
                <dl className="infos">
                  <dt>Sun</dt>
                  <dd>
                    <span></span>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SolarSystem;
