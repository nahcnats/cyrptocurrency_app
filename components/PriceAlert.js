import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';

// import constants
import { COLORS, SIZES, FONTS, icons } from '../constants';

import {TouchableCard} from '../components'

const PriceAlert = ({ customContainerStyle }) => {
  return (
    <TouchableCard
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: SIZES.padding * 4.5,
        backgroundColor: COLORS.white,
        ...customContainerStyle,
      }}
    >
      <Image
        source={icons.notification_color}
        style={{
          width: 30,
          height: 30
        }}
      />
      <View style={{ flex: 1, marginLeft: SIZES.radius }}>
        <Text style={{ ...FONTS.h3 }}>Set Price Alert</Text>
        <Text style={{ ...FONTS.body4 }}>Get notified when your coins are moving</Text>
      </View>
      <Image
        source={icons.right_arrow}
        style={{
          width: 25,
          height: 25,
          tintColor: COLORS.gray
        }}
      />
    </TouchableCard>
  );
}

export default PriceAlert;
