import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [expandedActor, setExpandedActor] = useState(null);

  const handleActorPress = (index) => {
    setExpandedActor(expandedActor === index ? null : index);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        {/* Primeiro painel */}
        <View style={styles.panel}>
          <Image
            source={require('./assets/No life Signal.png')}
            style={styles.image}
          />
          <Text style={styles.descriptionText}>
            Você é descendente de uma linhagem de xamãs e… vendedores de imóveis. Os tempos mudaram. Falsos exorcistas lucram com truques baratos, 
            enquanto os verdadeiros caem no esquecimento. Seus avós do ramo imobiliário lhe entregam um prédio
            amaldiçoado que ninguém consegue purificar. Sua missão? Enfrentar entidades reais, restaurar o equilíbrio espiritual do local e transformá-lo 
            em um negócio próspero.
          </Text>
        </View>

        {/* Segundo painel */}
        <View style={styles.panel}>
          <Text style={styles.panelText}>Inicio do projeto: ??/??/2025</Text>
        </View>

        {/* Espaço para "NPC" */}
        <Text style={styles.actorsTitle}>NPC</Text>

        {Array.from({ length: 5 }).map((_, index) => {
  const actorImages = [
    require('./assets/Caipora.png'),
    require('./assets/Gato.png'),
    require('./assets/Jumenta.png'),
    require('./assets/Maldição.png'),
    require('./assets/Verme.png'),
  ];

  const actorNames = [
    'Caipora',
    'Gatuna',
    'Jumenta Voadora',
    'Maldição',
    'Verme',
  ];

  const actorDetails = [
    'Caipora é um espírito protetor das florestas, conhecido por sua astúcia e habilidade em enganar caçadores. Ele protege os animais e pune aqueles que desrespeitam a natureza.',
    'Gatuna é uma criatura misteriosa que aparece apenas à noite, movendo-se silenciosamente pelas sombras. Dizem que ela guarda segredos antigos e protege os vulneráveis.',
    'Jumenta Voadora é uma lenda local que desafia as leis da gravidade, voando pelos céus em noites de lua cheia. Sua aparição é considerada um presságio de mudanças.',
    'Maldição é uma entidade sombria que assombra o prédio há décadas, espalhando medo e desespero. Sua presença é sentida por aqueles que ousam entrar no local.',
    'Verme é uma criatura subterrânea que guarda segredos antigos e se alimenta de energia espiritual. Ele é temido por sua força e habilidade de se mover sem ser detectado.',
  ];
  return (
    <TouchableOpacity
      key={index}
      style={styles.actorItem}
      onPress={() => handleActorPress(index)}
    >
      {expandedActor === index ? (
        // Exibe a imagem maior e o texto quando expandido
        <View style={styles.expandedContent}>
          <Image
            source={actorImages[index]}
            style={styles.expandedImagePlaceholder}
          />
          <Text style={styles.expandedText}>
            {actorDetails[index]}
          </Text>
        </View>
      ) : (
        // Exibe a imagem menor e o nome quando não expandido
        <>
          <Image
            source={actorImages[index]}
            style={styles.actorImagePlaceholder}
          />
          <Text style={styles.actorText}>{actorNames[index]}</Text>
        </>
      )}
    </TouchableOpacity>
  );
})}
        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    padding: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  panel: {
    width: '100%',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    alignItems: 'center',
  },
  image: {
    width: 300, // Aumentado de 100 para 300
    height: 250, // Aumentado de 100 para 250
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
  expandedContent: {
    marginTop: 10,
    alignItems: 'center',
    width: '100%',
  },
  expandedImagePlaceholder: {
    width: 200, // Aumentado para exibir uma imagem maior
    height: 200,
    backgroundColor: '#d9d9d9',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  expandedText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
});