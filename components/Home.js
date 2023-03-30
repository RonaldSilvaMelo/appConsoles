import * as React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

import AppLoading from 'expo-app-loading';

import { useFonts, Oswald_400Regular } from '@expo-google-fonts/dev';

export default function Home(props) {
  let [fontsLoaded] = useFonts({
    Oswald_400Regular,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>A trindade dos consoles</Text>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={require('../assets/switch-playstation-xbox.png')}
        />

        <View style={styles.grid}>
          <TouchableOpacity
            style={styles.buttonN}
            onPress={() => {
              props.navigation.navigate('Nintendo');
            }}>
            <Text style={styles.btnText}> Nintendo </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonP}
            onPress={() => {
              props.navigation.navigate('Playstation');
            }}>
            <Text style={styles.btnText}> Playstation </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonX}
            onPress={() => {
              props.navigation.navigate('Xbox');
            }}>
            <Text style={styles.btnText}> Xbox </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202020',
    textAlign: 'center',
  },

  title: {
    fontSize: 25,
    textAlign: 'center',
    marginTop: 10,
    color: '#ffffff',
    fontWeight: 'bold',
    fontFamily: 'Oswald',
  },

  image: {
    width: 300,
    height: 200,
    margin: 10,
    alignSelf: 'center',
  },

  grid: {
    alignItems: 'center',
  },

  buttonN: {
    margin: 10,
    backgroundColor: '#E70012',
    borderRadius: 20,
    padding: 5,
    width: 180,
  },

  buttonP: {
    margin: 10,
    backgroundColor: '#01429C',
    borderRadius: 20,
    padding: 5,
    width: 180,
  },

  buttonX: {
    margin: 10,
    backgroundColor: '#107B11',
    borderRadius: 20,
    padding: 5,
    width: 180,
  },

  btnText: {
    fontSize: 20,
    color: '#ffffff',
    textAlign: 'center',
    fontFamily: 'Oswald',
  },
});
