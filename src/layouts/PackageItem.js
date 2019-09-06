import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import DashedLink from '../assets/dashedlink.png';
import {styles} from '../styles/main.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const PackageItem = ({iconColor, iconBg, itemText, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.ListContainer]}>
        <View>
          <View style={[styles.ListCheck, {backgroundColor: iconBg}]}>
            <Icon active name="check" size={20} color={iconColor} />
          </View>
          <View style={[styles.DashedSeparator]}>
            <Image source={DashedLink} />
          </View>
        </View>
        <View style={[styles.ListTextContainer]}>
          <Text style={[styles.fontLg, styles.gray, styles.ml3]}>
            {itemText}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PackageItem;
