import React, { Component } from "react";

const [viewport, setViewport] = useState({
  width: 400,
  height: 400,
  latitude: 37.7577,
  longitude: -122.4376,
  zoom: 8
});
export default class Maps extends Component {
  render() {
    return (
      <div>
        <ReactMapGL {...viewport} onViewportChange={setViewport} />
      </div>
    );
  }
}
