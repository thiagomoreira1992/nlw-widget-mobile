
import React, { useRef } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { ChatTeardropDots } from 'phosphor-react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler'

import { styles } from './styles';
import { theme } from '../../theme';
import { Options } from '../Options';

function Widget() {

  const bottomSheetRef = useRef<BottomSheet>(null);

  function handleOpen() {
    bottomSheetRef.current?.expand();
  }

  return (
    <>
      <TouchableOpacity
        style={styles.button}
        onPress={handleOpen}>
        <ChatTeardropDots
          size={24}
          weight="bold"
          color={theme.colors.text_on_brand_color} />
      </TouchableOpacity>

      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={[0.01, 280]}
        backgroundStyle={styles.modal}
        handleIndicatorStyle={styles.indicator}>
        <Options/>

      </BottomSheet>
    </>
  );
}

export default gestureHandlerRootHOC(Widget);