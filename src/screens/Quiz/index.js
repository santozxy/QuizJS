import { SafeAreaView, View, Text, StyleSheet, Platform } from 'react-native';
import QuestionsList from './Components/ListQuestions'
import { primary, secundary } from '../../Theme/theme'

export default function Quiz() {

  return (
    <SafeAreaView style={style.container}>
      <QuestionsList />
    </SafeAreaView>
  );
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: primary,
    alignItems: 'center',
  },
})