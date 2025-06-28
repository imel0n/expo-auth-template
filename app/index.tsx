import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  Alert,
  ActivityIndicator,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import app from '../firebaseConfig';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

export default function LoginScreen() {
  const [loading, setLoading] = useState(false); // loading state

  // states for email and password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function signUp() {
    setLoading(true);
    try {
      const auth = getAuth(app);
      await createUserWithEmailAndPassword(auth, email, password);
      await signInWithEmailAndPassword(auth, email, password);
      setLoading(false);
      return;

    } catch (error) {
      setLoading(false);
      Alert.alert('Something went wrong, please try again');
    }
  }

  async function signIn() {
    setLoading(true);
    try {
      const auth = getAuth(app);
      await signInWithEmailAndPassword(auth, email, password);
      setLoading(false);
      return;

    } catch (error) {
      setLoading(false);
      Alert.alert('Something went wrong, please try again');
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar style='auto'/>
      <TextInput 
        style={styles.input}
        placeholder='Email'
        onChangeText={setEmail}
      />
      <TextInput 
        style={styles.input}
        placeholder='Password'
        onChangeText={setPassword}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={signUp}
      >
        { loading ? (
          <ActivityIndicator
            size={'small'}
            color={'white'}
            animating={loading}
          />
        ) : (
          <Text style={styles.bodyText}>
            Sign in
          </Text>
        )}
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={signUp}
      >
        { loading ? (
          <ActivityIndicator
            size={'small'}
            color={'white'}
            animating={loading}
          />
        ) : (
          <Text style={styles.bodyText}>
            Sign Up
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e1e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bodyText: {
    color: '#fff',
  },
  input: {
    width: '90%',
    height: 45,
    borderRadius: 6,
    paddingHorizontal: 10,
    backgroundColor: '#484848',
    alignSelf: 'center',
    marginTop: 15,
    color: "#fff",
  },
  button: {
    width: '90%',
    height: 45,
    backgroundColor: 'green',
    borderRadius: 6,
    marginTop: 15,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
