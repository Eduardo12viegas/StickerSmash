import { useState } from "react";
import { View, StyleSheet } from "react-native";
import ImageViewer from "@/components/ImageViewer";
import Button from "@/components/Button";
import * as ImagePicker from "expo-image-picker";

const PlaceholderImage = require("@/assets/images/background-image.png");

export default function Index() {
  const [selectedImage, setSelectImage] = useState<string | undefined>(
    undefined
  );

const [showAppOptions, setshowAppOptions,] = useState<boolean>(false);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      quality: 1,
    });

  if (!result.canceled) {
    setSelectImage(result.assets[0].uri);
    console.log(result);
  } else {
    alert("Você não selecionou nenhuma imagem!");
  }
};


  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedImage}/>
      </View>
      {showAppOptions ? (
        <view />
      ) : (
      <View style={styles.footerContainer}>
        <Button theme="primary"
         label="Escolher uma foto"
          onPress={pickImageAsync} 
        />
        <Button label="Usar esta foto" onPress={() => setShowAppOptions(true)}
         />
      </View>
      )}
    </View>
  );
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
  },
  imageContainer: {
    flex: 1,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
});
