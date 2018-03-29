/**
 * Description: react-navigation，官方文档：https://reactnavigation.org/
 * Author: zhaoyiming
 * Date: 2018/03/29
 */

 /**
  * 从0.44版本开始，Navigator被从react native的核心组件库中剥离到了一个名为react-native-deprecated-custom-components的单独模块中。
  * 如果你需要继续使用Navigator，则需要先npm i facebookarchive/react-native-custom-components安装，
  * 然后从这个模块中import，即import { Navigator } from 'react-native-deprecated-custom-components'
  */

import React from 'react';
import {
  StackNavigator
} from 'react-navigation';

import Login from './components/Login/login';
import Regist from './components/Regist/regist';
import App from './components/App/app';

const Routes = StackNavigator({
  Login: {screen: Login},
  Regist: {screen: Regist},
  App: {screen: App}
});

class Navigation extends React.Component {
  render () {
    return (
      <Routes></Routes>
    );
  }
}

export default Navigation;