import React from 'react';
import {View,StyleSheet,StatusBar} from 'react-native';

// local
import CarList from "./components/CarList";
import Header from './components/Header';

const App =()=> {
  return (
    <View style={styles.container}>
      <Header />
      <CarList />

      <StatusBar style="auto"/>
    </View>
  );
};

const styles = StyleSheet.create({
  container :{
    flex : 1,
    backgroundColor : "#FFF",
    alignItems : "center",
    justifyContent : "center",
  },
});

export default App;
