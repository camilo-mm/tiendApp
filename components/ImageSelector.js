import { Camera, CameraType } from 'expo-camera';
import { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { AntDesign } from '@expo/vector-icons'; 
import { insertImage } from '../db';


const ImageSelector = props => {
  const [pickedUri, setPickedUri] = useState()

  const verifyPersmissions = async ()=>{
    const {status} = await ImagePicker.requestCameraPermissionsAsync()

    if (status !== 'granted'){
      Alert.alert(
        'Permisos insuficientes',
        'Necesitas dar persmisos para usar la App',
        [{text: 'OK'}]
      )
      return false
    }
    return true
  }

  const HandlerTakeImage = async ()=>{
    const isCameraOk = await verifyPersmissions();
    if (!isCameraOk) return;

    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [16,9],
      quality: 0.8
    })

    setPickedUri(image.uri)
    props.onImage(image.uri)

  }

  return (
    <View style={styles.containerperfil}>
      <View style={styles.preview}>
        {!pickedUri ? (<Text>Perfil</Text>)
        : (
          <Image
            style={styles.image}
            source={{uri: pickedUri}}
          />)
        }
      </View>
      <Button
        title="Tomar foto"
        color="black"
        onPress={HandlerTakeImage}
      />
    </View>
  )}

  export default ImageSelector

  const styles = StyleSheet.create({
    containerperfil: {
      marginBottom: 10,
      width: '100%',
      alignItems: 'flex-end',
      paddingEnd: 20
    },
    preview: {
      justifyContent: 'flex-end',
      alignItems: 'right'
    },
    image: {
      width: 100,
      height: 100,
      borderRadius: 100
    },
    botoncito: {
      fontSize: 100
    }

  })