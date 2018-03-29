/**
 * 注册入口组件
 * AppRegistry：负责注册运行ReactNative应用程序的JavaScript入口
 * registerComponent注册应用程序的入口组件，告知ReactNative哪一个组件被注册为应用的根容器
 */
import { AppRegistry } from 'react-native';
// import Navigation from './router';
import Navigation from './router.1';

AppRegistry.registerComponent('ReactNativeTest', () => Navigation);
