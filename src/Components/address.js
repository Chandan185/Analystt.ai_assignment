import { Fragment } from "react";
import Geocode from "react-geocode";

const Address = () => {
  Geocode.setLanguage("en");
  let city, state, country;
  Geocode.fromLatLng("48.8583701", "2.2922926").then(
    (response) => {
      const address = response.results[0].formatted_address;
      for (let i = 0; i < response.results[0].address_components.length; i++) {
        for (
          let j = 0;
          j < response.results[0].address_components[i].types.length;
          j++
        ) {
          switch (response.results[0].address_components[i].types[j]) {
            case "locality":
              city = response.results[0].address_components[i].long_name;
              break;
            case "administrative_area_level_1":
              state = response.results[0].address_components[i].long_name;
              break;
            case "country":
              country = response.results[0].address_components[i].long_name;
              break;
            default:
              country = "Not Found";
          }
        }
      }
      console.log(city, state, country);
      console.log(address);
    },
    (error) => {
      console.error(error);
    }
  );
  return (
    <Fragment>
      <p>{city}</p>
      <p>{state}</p>
      <p>{country}</p>
    </Fragment>
  );
};

export default Address;
