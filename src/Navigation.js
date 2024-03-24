import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Navigation = () => {
    return (
        <View style={styles.headerStyle}>
            <Text style={styles.textStyle}>
                hi
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    headerStyle: {
        backgroundColor: "#F8F8F8",
        justifyContent: "center",
        alignItems: "center",
        height: 60,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 4
    },
    textStyle:{
        fontSize: 20
    },
});

export default Navigation;