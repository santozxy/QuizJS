import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home/index';
import Quiz from './screens/Quiz/index';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, gestureEnabled: false }}>
      <Stack.Screen name="Home" component={Home} />

      <Stack.Screen name="Quiz" component={Quiz} />
    </Stack.Navigator>
  );
}
