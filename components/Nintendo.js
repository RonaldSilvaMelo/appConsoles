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

export default function Nintendo() {
  let [fontsLoaded] = useFonts({
    Oswald_400Regular,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.title}>Nintendo</Text>

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
    backgroundColor: '#FF3143',
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
    nome: 'Nintendo Entertainment System',
    data: '15 de julho de 1983',
    modelo: 'Famicom, NES, NES Control Deck (Top-loader), NES Classic',
    imagem: require('../assets/nintendinho.jpg'),
  },
  {
    nome: 'Game Boy',
    data: '15 de julho de 1983',
    modelo: 'Game Boy, Game Boy Pocket, Game Boy Light, Game Boy Color',
    imagem: require('../assets/gameboy.jpg'),
  },
  {
    nome: 'Super Nintendo',
    data: '21 de novembro de 1990',
    modelo:
      'Super Famicom, Super Nintendo, SNS 101 (SNES Baby/Super Famicom Jr.), SNES Classic Edition',
    imagem: require('../assets/supernintendo.jpg'),
  },
  {
    nome: 'Virtual Boy',
    data: '16 de agosto de 1995',
    modelo: 'Apenas o modelo original',
    imagem: require('../assets/virtualboy.jpg'),
  },
  {
    nome: 'Nintendo 64',
    data: '23 de junho de 1996',
    modelo:
      'Nintendo 64, iQue, Variações de cores (Funtastic Color Series) e case (Pikachu Edition, por exemplo)',
    imagem: require('../assets/nintendo64.jpg'),
  },
  {
    nome: 'Game Boy Advance',
    data: '21 de março de 2001',
    modelo: 'GBA, GBA SP, GBA SP (AGS-101), Game Boy Micro',
    imagem: require('../assets/gameboyadvance.jpg'),
  },
  {
    nome: 'Nintendo GameCube',
    data: '21 de novembro de 2004',
    modelo: 'GCN, Panasonic Q',
    imagem: require('../assets/gamecube.jpg'),
  },
  {
    nome: 'Nintendo DS',
    data: '21 de novembro de 2004',
    modelo: 'Nintendo DS, DS Lite, DSi, DSi XL',
    imagem: require('../assets/ds.jpg'),
  },
  {
    nome: 'Wii',
    data: '19 de novembro de 2006',
    modelo: 'Wii, Wii (RVL-101), Wii Mini',
    imagem: require('../assets/wii.jpg'),
  },
  {
    nome: 'Nintendo 3DS',
    data: '26 de fevereiro de 2011',
    modelo: 'Nintendo 3DS, 2DS, 3DS XL, New 3DS, New 2DS XL, New 3DS XL',
    imagem: require('../assets/3ds.jpg'),
  },
  {
    nome: 'Wii U',
    data: '18 de novembro de 2012',
    modelo: 'Modelo de 32 GB, Modelo de 8GB (Basic Set)',
    imagem: require('../assets/wiiu.jpg'),
  },
  {
    nome: 'Nintendo Switch',
    data: '3 de março de 2017',
    modelo: 'Nintendo Switch, Switch Lite, Switch OLED',
    imagem: require('../assets/nintendoswitch.jpg'),
  },
];
