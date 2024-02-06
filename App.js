import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, Button, Image, Keyboard, Modal, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
export default function App() {
  const [count, setCount] = useState(0)
  const [mod,setMod] = useState(false)

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
      <AntDesign name="stepbackward" size={24} color="black" style={{zIndex:23}}/>
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
      {/* flexbox  burda bir verirsen tamamni kaplar ama hepsine bir verrisen arainda esit bolusulur*/}
     {/* <View style={{width:350,height:500,backgroundColor:"#3960EB"}}>
      <View style={{backgroundColor:"#C8ADC0",flex:2}}></View>
      <View style={{backgroundColor:"##080708",flex:1}}></View>
      <View style={{backgroundColor:"#EDD3C4",flex:1}}></View>
     </View> */}
     {/* inputMode:"decimal" bu sayi cikartir */}
     
     <TextInput placeholder='deneme' multiline inputMode='text' value='' onChangeText={()=>{}}   style={{width:200,height:20, borderWidth:2}}/>
     {/* burada mod degidkeni ile modal kintrol ettik */}
     <Button title='Modal' onPress={()=>setMod(prev=>!prev)}></Button>
     <Modal visible={mod}>
      <Text>derkepeme</Text>
      <Button title='kapat' onPress={()=>setMod(prev=>!prev)}></Button>
      
     </Modal> 
  {/* burda tiklandifinad birefej vermiyor burda bir inout lavyre acyik ama bosta bir yerde ytiklayinca kapatacagiy kapsayisina vermek gerekir*/}
  <TouchableWithoutFeedback onPress={()=>{
      Keyboard.dismiss()
     }}>
      <TextInput placeholder='enter'/>

     </TouchableWithoutFeedback>


     <TouchableOpacity 
     onPress={()=>console.log("dokundukca saydamlik katara")}
     onPressOut={()=>{}}
    
     >
      <View style={{width:10,height:25,backgroundColor:"black"}}>
        

      </View>
     </TouchableOpacity>
   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
 
    backgroundColor: '#CBCBD4',
 
  },
  bold:{
    color:"blue"
  }
});
