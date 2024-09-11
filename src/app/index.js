import React from 'react';
import { View, Text, Image, Dimensions, StyleSheet } from 'react-native';
import { StyleContainer } from '../components/styles';
import { ButtonText, StyledButton } from '../components/button.styles';
import Rectangle from '../assets/images/Rectangle.svg';
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
      <View style={styles.container}>
        {/* <Logo width={153} height={13} /> */}
        <Logo width={153} height={50} style={styles.logo} />
        <Text style={styles.title}>
          Juntos nos momentos, {'\n'} juntos nas contas!
        </Text>
        <StyledButton onPress={handleLogin} style={styles.button}>
          <ButtonText>Entrar com o Google</ButtonText>
          <Image
            source={require('../assets/images/devicon_google.png')}
            style={styles.googleIcon}
          />
        </StyledButton>
      </View>

      {/* Onda SVG na parte inferior */}
      <View style={styles.waveContainer}>
        <Svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="xMinYMin slice">
          <Rectangle width="100%" height="100%" />
        </Svg>
      </View>
    </StyleContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    marginBottom: 87,
  },
  title: {
    color: '#FFF',
    fontFamily: 'Lato-Bold',
    fontSize: 24,
    marginVertical: 20,
    marginBottom: 87,
    textAlign: 'center',
    textShadowColor: '#000',  // Cor da sombra (preto)
    textShadowOffset: { width: 2, height: 2 },  // Deslocamento da sombra
    textShadowRadius: 3,  // Suavização da sombra
  },
  googleIcon: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },
  button: {
    flexDirection: 'row',  // Para alinhar o texto e a imagem horizontalmente
    alignItems: 'center',  // Centralizar verticalmente
    justifyContent: 'center',  // Centralizar horizontalmente
  },
  waveContainer: {
    position: 'absolute',
    bottom: -25,
    width: '100%',
    height: height * 0.3,
  },
});

export default Login;
