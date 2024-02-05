import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, Button, Image, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0)

  const alertMe = () => {
    // alert("dert") burda sade ama icini duyenlemek icin altaki kofyu yapariy
    //  Alert.alert("baslik","Mesaj",[
    //   {
    //     text:"Button1",
    //     onPress:()=>console.log("biyton1")
    //   },
    //   {
    //     text:"Button2",
    //     onPress:()=>console.log("buton2")
    //   },
    //  ])
    Alert.alert("Dikat", "Mesaj silinecek", [
      {
        text: "evet",
        onPress: () => alert("mesaj silndi")
      },
      {
        text: "Hayir",
        onPress: () => alert("iptal edildi")
      },
    ])
  }
  return (
    <View style={styles.container}>
      <Text>Odwemeke</Text>
      <StatusBar style="auto" />
      <View style={{ width: 40, height: 150 }}>
        <Image style={{ width: 100, height: 100 }} source={require("./assets/indir.jpg")} />{/* biurda assets resmi  */}
        {/* burda isw url adresini */}
        <Image style={{ width: 100, height: 100 }} source={{ uri: "https://i1.imgiz.com/listeler/8CJBE78MWFZAJXEXPH2CSGU32B6GJ7DD_1481720543.jpeg" }} />


      </View>
      <Button title='art' color={"red"} onPress={() => setCount(prev => prev + 1)} touchSoundDisabled></Button>
      <Text> {count}</Text>
      <Button title='azal' color={"red"} onPress={() => setCount(prev => prev - 1)} touchSoundDisabled></Button>
      <Button title='alert' onPress={alertMe} />
      <Text style={styles.bold}>adamsin</Text>
      {/* burda ikinci bir style varsa arqay icinde yaopatiy */}
      <Text style={[styles.bold,{fontSize:24}]}>kimsin</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CBCBD4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bold:{
    color:"blue"
  }
});
