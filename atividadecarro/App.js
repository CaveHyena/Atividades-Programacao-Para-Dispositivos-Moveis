import React from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import { useFonts } from 'expo-font';
import image1 from './assets/VWFusca.png';
import image2 from './assets/VWGol.png';

export default function App() {
  const [fontsLoaded] = useFonts({
    'BigShouldersInline_24pt-Regular': require('./assets/BigShouldersInline_24pt-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null; 
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Carros</Text>
      <View style={styles.card}>
        <Image source={image1} style={styles.image} />
        <Text style={styles.text}>Nome do Carro: VW Fusca</Text>
        <Text style={styles.text}>Ano: 1978</Text>
        <Text style={styles.text}>Cor: Preto</Text>
      </View>
      <View style={styles.card}>
        <Image source={image2} style={styles.image} />
        <Text style={styles.text}>Nome do Carro: VW Gol</Text>
        <Text style={styles.text}>Ano: 2010</Text>
        <Text style={styles.text}>Cor: Vermelho</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
    paddingTop: 20,
    alignItems: 'center',
  },
  card: {
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    width: '90%',
    maxWidth: 300,
    backgroundColor: '#edebed',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    fontFamily: 'BigShouldersInline_24pt-Regular',
    alignSelf: 'flex-start', 
    marginLeft: 20, 
  },
  text: {
    fontSize: 16,
    fontFamily: 'BigShouldersInline_24pt-Regular',
    marginBottom: 5,
  },
});