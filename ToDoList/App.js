import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ToDoList from './components/ToDoList';

export default function App() {
  return (
    <View style={styles.container}>
      <h1>ToDoList</h1>
      <ToDoList initTasks={['Never gonna give you up', 
                            'Never gonna let you down', 
                            'Never gonna run around and desert you',
                            'fight God']} />
      <StatusBar style="auto" />
    </View>
  ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
