import { View} from 'react-native';
import LottieView from 'lottie-react-native';

/*Animação do Resultado Final*/

export default function AnimationGoodResult(){

  return(
    <View>
      <LottieView 
        autoPlay
        loop = {true}
        style={{
          width: 400,
          height: 320,
        }}
        source={require('../../../../assets/robo-feliz.json')}
      />

    </View>
  )
}

