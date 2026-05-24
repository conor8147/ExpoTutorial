import { Link, useNavigation } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const navigation = useNavigation();

  return (
    <View
      style={styles.container}
    >
      <Text style={styles.text}>
        Edit app/index.tsx to edit this screen.
      </Text>

      <Link href="/about" style={styles.button}>
        Go to about screen
      </Link>
      
      <Button 
      title="Go to about screen"
      onPress={() => navigation.navigate('about')} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff'
  },
    button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
})