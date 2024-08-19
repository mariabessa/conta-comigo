import React from 'react';
import { View, Text } from 'react-native';
import {StyleContainer} from '../components/styles'
import{
  ButtonText,
  StyledButton
} from '../components/button.styles'
import Rectangle from '../assets/images/Rectangle.svg'
import Logo from './../assets/images/logo.svg'; // Certifique-se de usar o caminho correto

const Login = () => {
  return (
    <StyleContainer>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {/* <Logo width={153} height={13} /> */}
      <Logo></Logo>
      <StyledButton>
        <ButtonText>Entrar com o Google</ButtonText>
      </StyledButton>
      <Rectangle></Rectangle>
    </View>

    </StyleContainer>
  );
};

export default Login;
