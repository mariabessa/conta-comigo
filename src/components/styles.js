import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import * as Font from 'expo-font';

import Constants from 'expo-constants';
import {View, Image, Text, ImageBackground} from 'react-native';

const statusBarHeight = Constants.statusBarHeight;


export const colors = {
    violet300: '#847689',
    violet600: '#610F7F',
    violet900: '#310840',
    offWhite: '#FFFFDF',
    white: '#F4F4F4',
    pink: '#CC4162',
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
    background-color: ${colors.violet600};
    justify-content: 'center';
`;