import React from "react";
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import Navigation from "./src/Navigation";
import BookList from "./src/BookList";

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar />
      <Navigation />
      <BookList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default App;