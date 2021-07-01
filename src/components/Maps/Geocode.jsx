import Geocode from "react-geocode";
import geoKey from "../../Keys/MapsKey";

const Geocoder = (param) => {
    Geocode.setApiKey(geoKey);

    Geocode.fromAddress(param).then(
        (response) => {
            console.log(response.results[0].geometry.location);
            return response.results[0].geometry.location;
        },
        (error) => {
            console.log(error);
            return "something error";
        }
    );
    return "didn't convert";
}

export default Geocoder;