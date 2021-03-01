import React from 'react';
import {
  TouchableOpacity,
  View,
  StyleSheet
} from 'react-native';

import { SIZES } from '../constants';

const TouchableCard = props => {
  return (
    <TouchableOpacity style={{...styles.card, ...props.style}} onPress={props.onPress}>
        {props.children}
    </TouchableOpacity>
  );
}

const Card = props => {
  return (
    <View style={{...styles.card, ...props.style}}>
        {props.children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: SIZES.padding,
    paddingVertical: SIZES.padding,
    paddingHorizontal: SIZES.radius,
    borderRadius: SIZES.radius,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,
  }
});

export {TouchableCard, Card};
