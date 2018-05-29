import { createStackNavigator } from "react-navigation";
import AboutContainer from "../screens/About";
// import FavouritesContainer from "../screens/Favourites";
import MapContainer from "../screens/Map";

export default createStackNavigator({
  About: AboutContainer,
  Map: MapContainer
});
