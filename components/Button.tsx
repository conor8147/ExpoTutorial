import { Colors } from '@/app/theme';
import { StyleSheet, View, Pressable, Text } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';


type Props = {
  label: string,
  theme?: 'primary' | 'secondary',
  onPress?: () => void;
};

export default function Button({ label, theme = 'secondary', onPress }: Props) {
  if (theme === 'primary') {
    return (
      <View
        style={[
          styles.primaryButtonContainer,
        ]}>
        <Pressable
          style={[styles.primaryButton]}
          onPress={onPress}>
          <FontAwesome name="picture-o" size={18} color={Colors.background} style={styles.buttonIcon} />
          <Text style={[styles.buttonLabel, { color: Colors.background }]}>{label}</Text>
        </Pressable>
      </View>
    )
  } else {
    return (
      <View style={styles.secondaryButtonContainer}>
        <Pressable style={styles.secondaryButton} onPress={() => alert('You pressed a button.')}>
          <Text style={styles.buttonLabel}>{label}</Text>
        </Pressable>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  primaryButtonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
    borderWidth: 4, 
    borderColor: Colors.primary, 
    borderRadius: 18 
  },
  secondaryButtonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  primaryButton: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  secondaryButton: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonLabel: {
    color: Colors.onBackground,
    fontSize: 16,
  },
  buttonIcon: {
    paddingRight: 8,
  },
});