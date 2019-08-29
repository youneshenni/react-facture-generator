import React from "react";
import { View, Text, StyleSheet } from "@react-pdf/renderer";

export default function Table(props) {
  const styles = StyleSheet.create({
    factureTable: {
      marginLeft: "6.9mm",
      marginTop: "10mm",
      width: props.width || "197.36mm",
      justifyContent: "space-between",
      borderBottomWidth: "0.25mm",
      borderBottomColor: "#e0e0e0",
      borderTopWidth: "0.25mm",
      borderTopColor: "#e0e0e0",
      flexDirection: "row",
      alignItems: "stretch",
      borderRightWidth: "0.25mm",
      borderRightColor: "#e0e0e0",
      fontSize: "10pt"
    },
    tableHead: {
      backgroundColor: "#dcdcdc",
      alignItems: "center",
      width: "44mm"
    },
    tableContent: {
      flexGrow: 1,
      flexDirection: "column",
      borderRightWidth: "0.25mm",
      borderRightColor: "#e0e0e0"
    },
    tableContentElement: {
      alignItems: "flex-end"
    },
    ifLast: {
      borderTopWidth: "0.25mm",
      borderTopColor: "#e0e0e0",
      fontSize: "12pt"
    }
  });
  const maxColumns = Object.values(props.data).reduce(
    (prev, curr) => (curr.length > prev ? curr.length : prev),
    Object.values(props.data)[0].length
  );
  return (
    <View style={styles.factureTable}>
      <View style={styles.tableHead}>
        {Object.keys(props.data).map((key, index) => (
          <View
            style={
              index === Object.values(props.data).length - 1 && styles.ifLast
            }
            key={index}
          >
            <Text>{key}</Text>
          </View>
        ))}
      </View>
      <View>
        {Array.from(Array(maxColumns), (x, index) => (
          <View style={styles.tableContent} key={index}>
            {Object.values(props.data).map((array, id) => (
              <View
                key={id}
                style={
                  id === Object.values(props.data).length - 1 && styles.ifLast
                }
              >
                <Text style={styles.tableContentElement}>{array[index]}</Text>
              </View>
            ))}
          </View>
        ))}
      </View>
    </View>
  );
}
