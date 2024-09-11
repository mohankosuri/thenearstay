import React from "react";

import { View,Text,StyleSheet } from "react-native";



function CustomMarker({price}:any) {
    return (
      <View style={styles.marker}>
        <Text style={styles.text}>{price}</Text>
      </View>
    );
  }
  //styles for our custom marker.
  const styles = StyleSheet.create({
    marker: {
      paddingVertical: 10,
      paddingHorizontal: 10,
      backgroundColor: "#007bff",
      borderColor: "#eee",
      borderRadius: 50,
      elevation: 10,
    },
    text: {
    color: "#fff",   
    },
  });

  export default CustomMarker