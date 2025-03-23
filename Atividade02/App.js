import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Primeiro painel */}
      <View style={styles.panel}>
        <View style={styles.imagePlaceholder}>
          <Text>Imagem</Text>
        </View>
        <Text style={styles.descriptionText}>Descrição</Text>
      </View>

      {/* Segundo painel */}
      <View style={styles.panel}>
        <Text style={styles.panelText}>Outro texto</Text>
      </View>

      {/* Espaço para "Atores" */}
      <Text style={styles.actorsTitle}>Atores</Text>

      {/* Lista de 5 retângulos com imagem circular e texto */}
      {Array.from({ length: 5 }).map((_, index) => (
        <View key={index} style={styles.actorItem}>
          <View style={styles.actorImagePlaceholder}>
            <Text>Img</Text>
          </View>
          <Text style={styles.actorText}>Ator {index + 1}</Text>
        </View>
      ))}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
  },
  panel: {
    width: '100%',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    alignItems: 'center',
  },
  imagePlaceholder: {
    width: 100,
    height: 100,
    backgroundColor: '#d9d9d9',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 16,
    color: '#333',
  },
  panelText: {
    fontSize: 16,
    color: '#333',
  },
  actorsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
  actorItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    width: '100%',
  },
  actorImagePlaceholder: {
    width: 40,
    height: 40,
    backgroundColor: '#d9d9d9',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  actorText: {
    fontSize: 16,
    color: '#333',
  },
});