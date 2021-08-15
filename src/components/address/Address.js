import Geo from "../geo/Geo";

export default function Address({street, suite, city, zipcode, geo}) {
  return (
      <div>
          <h4>street : {street}</h4>
          <h4>suite : {suite}</h4>
          <h4>city : {city}</h4>
          <h4>zipcode : {zipcode}</h4>
          <Geo
              lat={geo.lat}
              lng={geo.lng}
          />
      </div>
  );
}