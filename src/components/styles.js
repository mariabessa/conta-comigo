import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import Constants from 'expo-constants';
import {View, Image, Text, ImageBackground} from 'react-native';

const statusBarHeight = Constants.statusBarHeight;


export const colors = {
    violet600: '#610F7F',
    violet900: '#310840',
    offWhite: '#FFFFDF',
    white: '#FFFFFF'
};


export default StyleSheet.create({
    body: {
    //   fontFamily: fonts.fontFamily,
      fontSize: 16,
      fontWeight: '700',
      backgroundColor: colors.violet600,
    },
  });
  
  export const StyleContainer = styled.View`
    flex: 1;
    padding: 25px;
    padding-top: ${statusBarHeight + 10}px;
    background-color: ${colors.violet600};
`;