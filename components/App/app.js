/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

/**
 * 导入ReactNative包，导入ReactNative组件
 * appRegistry：JS运行所有ReactNative应用的入口
 * StyleSheet：ReactNative中使用的样式表，类似CSS样式表
 */
import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

// react-navigator router
// import Header from './components/Header/header';
// import Floor from './components/Floor/floor';

// react-navigation
import Header from '../Header/header';
import Floor from '../Floor/floor';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      fe: {
        backgroundColor: 'red',
        data: [
          '前端开发',
          ['HTML5', 'CSS3', 'JavaScript'],
          ['AngularJs', 'VueJs', 'ReactJs']
        ]
      },

      travel: {
        backgroundColor: 'pink',
        data: [
          '旅游',
          ['目的地旅游', '周边游', '国内游'],
          ['邮轮旅行', '定制旅行', '骑单车']
        ]
      },
      
      traffic: {
        backgroundColor: 'blue',
        data: [
          '交通工具',
          ['火车票', '机票', '汽车票'],
          ['专车', '租车', '步行']
        ]
      }
    };
  }

  static navigationOptions = {
    title: '首页'
  }

  render() {
    return (
      <View style={styles.container}>
        <Header></Header>
        <Floor data={this.state.fe}></Floor>
        <Floor data={this.state.travel}></Floor>
        <Floor data={this.state.traffic}></Floor>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%'
  }
});

export default App;
