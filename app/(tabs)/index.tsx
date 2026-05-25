import { Link, useNavigation } from "expo-router";
import * as ImagePicker from 'expo-image-picker'
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../theme";
import ImageViewer from '@/components/ImageViewer'
import Button from "@/components/Button";
import { useState } from 'react';

const PlaceholderImage = require('@/assets/images/background-image.png')

export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined)
  const pickImageAsync = onPickImageClicked()

  return (
    ImageDisplay({
      selectedImage: selectedImage, 
      onChoosePhotoClicked: pickImageAsync
    })
  );
}

type ImageDisplayProps = {
  selectedImage: string | undefined;
  onChoosePhotoClicked: () => void;
};

function ImageDisplay({
  selectedImage,
  onChoosePhotoClicked
}: ImageDisplayProps) {
  return <View
    style={styles.container}
  >
    <View style={styles.imageContainer}>
      <ImageViewer imgSource={PlaceholderImage} />
    </View>
    <View style={styles.footerContainer}>
      <Button label="Choose a photo" theme='primary' onPress={onChoosePhotoClicked} />
      <Button label="Use this photo" />
    </View>
  </View>;
}

function onPickImageClicked() {
  return async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      console.log(result);
    } else {
      alert('You did not select any image.');
    }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: Colors.onBackground
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: Colors.onBackground,
  },
  imageContainer: {
    flex: 1,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
})
