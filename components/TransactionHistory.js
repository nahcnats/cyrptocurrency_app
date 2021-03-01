import React from 'react';
import { Text, View, FlatList, TouchableOpacity, Image } from 'react-native';

// import constant
import { COLORS, SIZES, FONTS, icons } from '../constants';

import { Card } from '../components';

const TransactionHistory = ({ history }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: SIZES.base
      }}
      onPress={() => console.log(item)}
    >
      <Image
        source={icons.transaction}
        style={{
          width: 30,
          height: 30,
          tintColor: COLORS.primary
        }}
      />
      <View
        style={{
          flex: 1,
          marginLeft: SIZES.radius
        }}
      >
        <Text style={{ ...FONTS.h3 }}>{ item.description }</Text>
        <Text style={{ color: COLORS.gray, ...FONTS.body4}}>{ item.date }</Text>
      </View>
      <View style={{ flexDirection: 'row', height: '100%', alignItems: 'center'}}>
        <Text style={{ color: item.type == 'B' ? COLORS.green : COLORS.black, ...FONTS.h3 }}>
          {item.amount} {item.currency}
        </Text>
        <Image
          source={icons.right_arrow}
          style={{
            width: 20,
            height: 20,
            tintColor: COLORS.gray
          }}
        />
      </View>
    </TouchableOpacity>
  );

  return (
    <Card
      style={{
        marginTop: SIZES.padding,
        padding: 20,
        backgroundColor: COLORS.white,
      }}
    >
      <Text style={{ ...FONTS.h2 }}>Transaction History</Text>    
      <FlatList
        contentContainerStyle={{ marginTop: SIZES.radius }}
        scrollEnabled={false}
        data={history}
        keyExtractor={item => `${item.id}`}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => {
          return (
            <View
              style={{
                width: '100%',
                height: 1,
                backgroundColor: COLORS.lightGray
              }}
            >

            </View>
          )
        }}
      />
    </Card>
  );
}

export default TransactionHistory;
