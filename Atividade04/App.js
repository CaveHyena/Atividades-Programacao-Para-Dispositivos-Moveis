import React, { useState } from 'react';
import {
  View, Text, TextInput, Button, Image,
  Switch, StyleSheet, ScrollView, Alert
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider'; // <- Correção aqui

const CustomInput = ({ label, value, onChangeText }) => (
  <>
    <Text style={styles.label}>{label}</Text>
    <TextInput
      style={styles.input}
      placeholder={label}
      value={value}
      onChangeText={onChangeText}
    />
  </>
);

export default function App() {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [text3, setText3] = useState('');
  const [text4, setText4] = useState('');
  const [picker1, setPicker1] = useState('opcao1');
  const [picker2, setPicker2] = useState('opcaoA');
  const [slider1, setSlider1] = useState(0);
  const [slider2, setSlider2] = useState(0);
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);

  const handleButton1 = () => {
    if (text1.trim() === '') {
      Alert.alert('Atenção', 'Por favor, preencha o campo 1.');
    } else {
      Alert.alert('Botão 1', `Valor digitado: ${text1}`);
    }
  };

  const handleButton2 = () => {
    Alert.alert('Botão 2', `Picker selecionado: ${picker1}`);
  };

  const resetAll = () => {
    setText1('');
    setText2('');
    setText3('');
    setText4('');
    setPicker1('opcao1');
    setPicker2('opcaoA');
    setSlider1(0);
    setSlider2(0);
    setSwitch1(false);
    setSwitch2(false);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Casa das Boas Vindas e Idas</Text>

      {/* Entradas */}
      <Text style={styles.sectionTitle}>Inputs de Texto</Text>
      <CustomInput label="Digite algo 1" value={text1} onChangeText={setText1} />
      <CustomInput label="Digite algo 2" value={text2} onChangeText={setText2} />
      <CustomInput label="Digite algo 3" value={text3} onChangeText={setText3} />
      <CustomInput label="Digite algo 4" value={text4} onChangeText={setText4} />

      {/* Pickers */}
      <Text style={styles.sectionTitle}>Seleções (Picker)</Text>
      <Text>Escolha uma opção:</Text>
      <Picker selectedValue={picker1} onValueChange={setPicker1} style={styles.picker}>
        <Picker.Item label="Opção 1" value="opcao1" />
        <Picker.Item label="Opção 2" value="opcao2" />
      </Picker>

      <Text>Escolha outra opção:</Text>
      <Picker selectedValue={picker2} onValueChange={setPicker2} style={styles.picker}>
        <Picker.Item label="Opção A" value="opcaoA" />
        <Picker.Item label="Opção B" value="opcaoB" />
      </Picker>

      {/* Sliders */}
      <Text style={styles.sectionTitle}>Sliders</Text>
      <Text>Slider 1: {slider1.toFixed(2)}</Text>
      <Slider
        minimumValue={0}
        maximumValue={100}
        value={slider1}
        onValueChange={setSlider1}
        style={styles.slider}
        minimumTrackTintColor="#1fb28a"
        maximumTrackTintColor="#d3d3d3"
        thumbTintColor="#1a9274"
      />

      <Text>Slider 2: {slider2.toFixed(2)}</Text>
      <Slider
        minimumValue={0}
        maximumValue={50}
        value={slider2}
        onValueChange={setSlider2}
        style={styles.slider}
        minimumTrackTintColor="#f194ff"
        maximumTrackTintColor="#d3d3d3"
        thumbTintColor="#b000b5"
      />

      {/* Switches */}
      <Text style={styles.sectionTitle}>Interruptores (Switch)</Text>
      <View style={styles.switchRow}>
        <Text>Ativar opção 1: {switch1 ? 'Ativado' : 'Desativado'}</Text>
        <Switch value={switch1} onValueChange={setSwitch1} />
      </View>
      <View style={styles.switchRow}>
        <Text>Ativar opção 2: {switch2 ? 'Ativado' : 'Desativado'}</Text>
        <Switch value={switch2} onValueChange={setSwitch2} />
      </View>

      {/* Botões */}
      <Text style={styles.sectionTitle}>Ações (interação)</Text>
      <Button title="Clique aqui (1)" onPress={handleButton1} />
      <View style={styles.spacer} />
      <Button title="Clique aqui (2)" onPress={handleButton2} />
      <View style={styles.spacer} />
      <Button title="Resetar Tudo" onPress={resetAll} color="red" />

{/* Imagens */}
<Text style={styles.sectionTitle}>Imagens</Text>
<Image style={styles.image} source={require('./assets/1.jpg')} />
<Image style={[styles.image, { borderRadius: 100 }]} source={require('./assets/2.jpg')} />
<Image style={[styles.image, { borderTopLeftRadius: 50 }]} source={require('./assets/3.jpg')} />
<Image style={[styles.image, { transform: [{ rotate: '10deg' }] }]} source={require('./assets/4.jpg')} />
<Image style={[styles.image, { opacity: 0.6 }]} source={require('./assets/5.jpg')} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 100,
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 20,
    marginVertical: 10,
    fontWeight: '600',
    alignSelf: 'flex-start',
  },
  label: {
    alignSelf: 'flex-start',
    marginBottom: 5,
    fontWeight: '500',
  },
  input: {
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  picker: {
    width: '100%',
    marginBottom: 10,
  },
  slider: {
    width: '100%',
    height: 40,
    marginBottom: 10,
  },
  switchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 10,
  },
  spacer: {
    height: 10,
  },
  image: {
    width: 150,
    height: 150,
    marginVertical: 10,
  },
});
