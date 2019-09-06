import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import PackageItem from './PackageItem';
import {styles} from '../styles/main.style';

const PackageList = ({data, iconBgColor, onPress}) => {
  return (
    <ScrollView style={[{flex: 1}, styles.ml5, styles.mt3]}>
      {data.map((item, ind) => (
        <PackageItem
          onPress={onPress}
          key={ind}
          iconColor="#FFFFFF"
          iconBg={iconBgColor}
          itemText={item.packageNumber}
        />
      ))}
    </ScrollView>
  );
};

export default PackageList;
