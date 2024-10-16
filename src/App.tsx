import {
  YMap,
  YMapDefaultSchemeLayer,
  YMapDefaultFeaturesLayer,
  YMapMarker,
  reactify,
} from "./lib/ymaps";
import type { YMapLocationRequest } from "ymaps3";
import "./App.css";
const LOCATION: YMapLocationRequest = {
  center: [37.588144, 55.733842],
  zoom: 9,
};
function App() {
  return (
    <>
      <div id="map">
        <YMap location={reactify.useDefault(LOCATION)}>
          <YMapDefaultSchemeLayer />
          <YMapDefaultFeaturesLayer />

          <YMapMarker
            coordinates={reactify.useDefault([37.588144, 55.733842])}
            draggable={true}
          >
            <section>
              <h1>You can drag this header</h1>
            </section>
          </YMapMarker>
        </YMap>
      </div>
    </>
  );
}

export default App;
