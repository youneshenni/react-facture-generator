import React from "react";
import { View, Text, StyleSheet } from "@react-pdf/renderer";

export default function Table(props) {
  const styles = StyleSheet.create({
    factureTable: {
      marginLeft: "6.9mm",
      marginTop: "10mm",
      width: props.width || "197.36mm",
      height: props.height || undefined,
      justifyContent: "space-evenly",
      borderBottomWidth: "0.25mm",
      borderBottomColor: "#e0e0e0",
      flexDirection: "row",
      alignItems: "stretch",
      borderRightWidth: "0.25mm",
      borderRightColor: "#e0e0e0"
    },
    factureTableElement: {
      maxWidth: "95.25mm",
      flexGrow: 1,
      borderLeftWidth: "0.25mm",
      borderLeftColor: "#e0e0e0"
    },
    factureTableElementHead: {
      backgroundColor: "#dcdcdc",
      fontSize: "10pt",
      height: "8.4mm"
    },
    headElement: {
      margin: "auto"
    },
    element: {
      flexWrap: "wrap",
      fontSize: "10pt"
    },
    elementText: {
      margin: "auto"
    }
  });
  return (
    <View style={styles.factureTable}>
      {Object.keys(props.data).map((key, index) => (
        <View key={index} style={styles.factureTableElement}>
          <View style={styles.factureTableElementHead}>
            <Text style={styles.headElement}>{key}</Text>
          </View>
          <View style={styles.factureTableElementContents}>
            {props.data[key].map((element, index) => (
              <View style={styles.element} key={index}>
                <Text style={styles.elementText}>{element}</Text>
              </View>
            ))}
          </View>
        </View>
      ))}
    </View>
  );
}
