/**
 * Description: Floor层，ReactNativeTest初始化成功之后开发的第一个公用组件
 * Author: zhaoyiming
 * Date: 2018/03/28
 */

import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

class Floor extends React.Component {
  render () {
    return (
      <View style={[styles.container, {backgroundColor: this.props.data.backgroundColor}]}>
        <View style={[styles.item, styles.singleText]}>
          <Text style={[styles.text]}>{this.props.data.data[0]}</Text>
        </View>

        <View style={[styles.item, styles.centerItem]}>
          {
            this.props.data.data[1].map((v, k) => {
              return <Text key={k} style={[styles.text, k === 1 && styles.columnCenterItem]}>{v}</Text>;
            })
          }
        </View>

        <View style={[styles.item]}>
          {
            this.props.data.data[2].map((v, k) => {
              return <Text key={k} style={[styles.text, k === 1 && styles.columnCenterItem]}>{v}</Text>;
            })
          }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 15
  },

  item: {
    display: 'flex',
    flex: 1,
    height: 90,

  },

  text: {
    width: '100%',
    height: 30,
    lineHeight: 30,
    textAlign: 'center',
    fontSize: 14,
    color: 'white'
  },

  singleText: {
    justifyContent: 'center',
  },

  centerItem: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderLeftColor: 'white',
    borderRightColor: 'white'
  },

  columnCenterItem: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: 'white',
    borderBottomColor: 'white'
  }
});

export default Floor;
