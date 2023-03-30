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

export default function Xbox() {
  let [fontsLoaded] = useFonts({
    Oswald_400Regular,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.title}>Xbox</Text>

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
    backgroundColor: '#41AC42',
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
    nome: 'Xbox',
    data: '15 de novembro de 2001',
    modelo:
      'Xbox, Xbox Crystal, Xbox Limited Editions, Xbox Mountain Dew Limited Edition',
    imagem: require('../assets/xbox1.jpg'),
  },
  {
    nome: 'Xbox 360',
    data: '22 de novembro de 2005',
    modelo:
      'Xbox 360, Xbox 360 S, Xbox 360 E, Xbox 360 Elite, Xbox 360 Arcade, Xbox 360 Core, Xbox 360 Pro',
    imagem: require('../assets/xbox360.jpg'),
  },
  {
    nome: 'Xbox One',
    data: '22 de novembro de 2013',
    modelo: 'Xbox One, Xbox One S, Xbox One X',
    imagem: require('../assets/xboxone.jpg'),
  },
  {
    nome: 'Xbox Series X',
    data: '10 de novembro de 2020',
    modelo: 'Apenas o modelo original',
    imagem: require('../assets/xboxX.png'),
  },
  {
    nome: 'Xbox Series S',
    data: '10 de novembro de 2020',
    modelo: 'Apenas o modelo original',
    imagem: require('../assets/xboxS.png'),
  },
];
