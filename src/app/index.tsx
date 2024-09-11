import React from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import {StyleContainer} from '../components/styles'
import{
  ButtonText,
  StyledButton
} from '../components/button.styles'
import Rectangle from '../assets/images/Rectangle.svg'
import Svg from 'react-native-svg';

import Logo from './../assets/images/logo.svg'; // Certifique-se de usar o caminho correto
import { useRouter } from 'expo-router';

const { height } = Dimensions.get('window');

const Login = () => {
  const router = useRouter();

  const handleLogin = async () => {
    router.replace('/Home'); 
  };

  return (
    <StyleContainer>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {/* <Logo width={153} height={13} /> */}
      <Logo width={153} height={50} />
      <Text style={{
        color: '#FFF',
        fontSize: 18,
        marginVertical: 20,
        textAlign: 'center',
        textShadowColor: '#000',  // Cor da sombra (preto)
        textShadowOffset: { width: 2, height: 2 },  // Deslocamento da sombra
        textShadowRadius: 3,  // Suavização da sombra
      }}>
          Juntos nos momentos, {'\n'} juntos nas contas!
        </Text>
        <StyledButton onPress={handleLogin}>
          <ButtonText>Entrar com o Google</ButtonText>
          <Image 
            source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png' }} 
            style={{ width: 20, height: 20, marginLeft: 10 }} 
          />
        </StyledButton>
      </View>

      {/* Onda SVG na parte inferior */}
      <View style={{ position: 'absolute', bottom: 0, width: '100%', height: height * 0.3  }}>
        <Svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="xMinYMin slice">
          <Rectangle width="100%" height="100%" />
        </Svg>
      </View>
    </StyleContainer>
  );
};

export default Login;
