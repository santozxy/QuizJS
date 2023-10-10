import { View} from 'react-native';
import LottieView from 'lottie-react-native';

/*Animação do Resultado Final*/

export default function AnimationBadResult(){

  return(
    <View>
      <LottieView 
        autoPlay
        loop = {true}
        style={{
          width: 400,
          height: 320,
        }}
        source={require('../../../../assets/robo-triste.json')}
      />
    </View>
  )
}

