import styled from 'styled-components/native';
import { colors } from './styles';
const { botaoCor, botaoTextoCor } = colors;

// Estilização do botão utilizando styled-components
export const StyledButton = styled.TouchableOpacity`
  background-color: ${colors.white};
  margin-bottom: 16px;
  margin-top: 16px;
  padding: 16px;
  border-radius: 16px;

`;

// Estilização do texto dentro do botão
export const ButtonText = styled.Text`
  color: ${colors.violet900};
  text-align: center;
  font-family: 'Lato-Light';
`;

