import styled from 'styled-components/native';
import { colors } from './styles';
const { botaoCor, botaoTextoCor } = colors;

export const StyledButton = styled.TouchableOpacity`
  background-color: ${colors.white};
  margin-bottom: 16px;
  margin-top: 16px;
  padding: 16px;
  width: 336px;
  height: 50px;
  border-radius: 16px;


`;

export const ButtonText = styled.Text`
  color: ${colors.violet900};
  text-align: center;
  margin-right: 16px;
  font-family: 'Lato-Medium';
`;

