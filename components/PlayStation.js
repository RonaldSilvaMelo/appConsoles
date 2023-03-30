import * as React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  FlatList,
} from 'react-native';

import AppLoading from 'expo-app-loading';

import { useFonts, Oswald_400Regular } from '@expo-google-fonts/dev';

export default function PlayStation() {
  let [fontsLoaded] = useFonts({
    Oswald_400Regular,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.title}>PlayStation</Text>

          <FlatList
            data={arrayConsole}
            renderItem={({ item }) => (
              <View style={styles.container}>
                <Image
                  style={styles.image}
                  source={item.imagem}
                  resizeMode="contain"
                />

                <Text style={styles.left}>
                  <Text style={styles.subtitle}>Nome: </Text>
                  <Text style={styles.text}>{item.nome}</Text>
                  {'\n'}
                  <Text style={styles.subtitle}>Data de lançamento: </Text>
                  <Text style={styles.text}>{item.data}</Text>
                  {'\n'}
                  <Text style={styles.subtitle}>Modelos: </Text>
                  <Text style={styles.text}>{item.modelo}</Text>
                  {'\n'}
                </Text>
              </View>
            )}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3273CD',
    padding: 5,
  },
  title: {
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
    margin: 10,
    fontFamily: 'Oswald',
    fontWeight: 'bold',
  },
  image: {
    width: 300,
    height: 150,
    alignSelf: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 10,
    fontFamily: 'Oswald',
  },
  text: {
    color: 'white',
    fontSize: 15,
    fontFamily: 'Oswald',
  },
});

const arrayConsole = [
  {
    nome: 'PlayStation (PSOne)',
    data: '3 de dezembro de 1994',
    modelo: 'PlayStation (original), PSOne',
    imagem: require('../assets/ps1.jpg'),
  },
  {
    nome: 'PlayStation 2 (PS2)',
    data: '4 de março de 2000',
    modelo:
      'PlayStation 2 (original), PlayStation 2 Slimline, PlayStation 2 "Super Slim"',
    imagem: require('../assets/ps2.jpg'),
  },
  {
    nome: 'PSP',
    data: '12 de dezembro de 2004',
    modelo: 'PSP-1000, PSP-2000 (Slim & Lite), PSP-3000, PSP Go',
    imagem: require('../assets/psp.jpg'),
  },
  {
    nome: 'PlayStation 3 (PS3)',
    data: '11 de novembro de 2006',
    modelo:
      'PlayStation 3 (original), PlayStation 3 Slim, PlayStation 3 Super Slim',
    imagem: require('../assets/ps3.png'),
  },
  {
    nome: 'PS Vita',
    data: '17 de dezembro de 2011',
    modelo: 'PS Vita (original), PS Vita Slim',
    imagem: require('../assets/psvita.jpg'),
  },
  {
    nome: 'PlayStation 4 (PS4)',
    data: '15 de novembro de 2013',
    modelo: 'PlayStation 4 (original), PlayStation 4 Slim, PlayStation 4 Pro',
    imagem: require('../assets/ps4.jpg'),
  },
  {
    nome: 'PlayStation 5 (PS5)',
    data: '12 de novembro de 2020',
    modelo: 'PlayStation 5 (original), PlayStation 5 Digital Edition',
    imagem: require('../assets/ps5.png'),
  },
];
