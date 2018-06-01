// import React from "react";
// import {
//   Platform,
//   StyleSheet,
//   Text,
//   View,
//   ScrollView,
//   Button,
//   Image,
//   TouchableOpacity
// } from "react-native";
// import { connect } from "react-redux";
// import moment from "moment";

// const Session = props => (
//   <ScrollView style={styles.container}>
//     <Session />
//     <Text style={styles.textLocation}>{props.location}</Text>
//     <Text style={styles.textTitle}>{props.title}</Text>
//     <Text style={styles.textTime}>
//       {moment(props.time)
//         .format("h:mm a")
//         .toUpperCase()}
//     </Text>
//     <Text style={styles.textDescription}>{props.description}</Text>
//     <TouchableOpacity
//       onPress={() =>
//         navigation.push("Speaker", {
//           speaker: speaker
//         })
//       }
//     >
//       <View>
//         <View>
//           <Text>Presented by:</Text>
//         </View>
//         <View>
//           <Text>{props.speaker && props.speaker.name}</Text>
//           <Image
//             style={{ width: 75, height: 75, borderRadius: 75 / 2 }}
//             source={{ uri: props.speaker && props.speaker.image }}
//           />
//         </View>
//         <View>
//           {/* {allFaves.map((fave, index) => {
//             fave.id === faveid
//               ? console.log("true")
//               : // <Button
//                 //   key={index}
//                 //   onPress={() => {
//                 //     dispatch(deleteTheFave(faveid));
//                 //   }}
//                 //   title="Delete To Favs"
//                 //   color="#841584"
//                 // />
//                 console.log("false");
//             // <Button
//             //   key={index}
//             //   onPress={() => {
//             //     dispatch(createTheFave(faveid));
//             //   }}
//             //   title="Add to Favs"
//             //   color="#841584"
//             // />
//           })} */}
//         </View>
//       </View>
//     </TouchableOpacity>
//   </ScrollView>
// );

// const styles = StyleSheet.create({
//   container: {
//     width: "80%",
//     marginLeft: 20,
//     marginTop: 20
//   },
//   textLocation: {
//     fontSize: 18,
//     color: "grey"
//   },
//   textTitle: {
//     fontSize: 28,
//     fontWeight: "bold",
//     marginTop: 10,
//     marginBottom: 10
//   },
//   textTime: {
//     color: "red",
//     marginBottom: 10,
//     fontSize: 18
//   },
//   textDescription: {
//     fontSize: 18,
//     marginBottom: 10
//   }
//   // speakerContainer: {
//   //   flex: 1,
//   //   flexDirection: "row"
//   // }
// });

// export default connect()(Session);
