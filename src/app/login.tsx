import React from 'react';
import { View, Text } from 'react-native';
import {StyleContainer} from '../components/styles'
import{
  ButtonText,
  StyledButton
} from '../components/button.styles'
// import Logo from './../assets/images/logo.svg'; // Certifique-se de usar o caminho correto

const Login = () => {
  return (
    <StyleContainer>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {/* <Logo width={153} height={13} /> */}
      <Text>Conta Comigo</Text>
      <StyledButton>
        <ButtonText>Entrar com o Google</ButtonText>
      </StyledButton>
    </View>

    </StyleContainer>
  );
};

export default Login;
