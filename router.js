/**
 * Description: router，官方文档：https://reactnative.cn/docs/0.51/navigation.html#content
 * Author: zhaoyiming
 * Date: 2018/03/29
 */

 /**
  * 导航器通过路由对象（route）来分辨不同的场景，每个路由对象都对应一个页面组件，开发者设置什么，导航器就显示什么，所以route是导航器中重要的一个对象。
  * 三步操作实现导航功能：
  * 第一步：设置路由对象，告诉导航器我要显示哪个页面，创建路由对象，对象内容自定义，但是必须包含该场景需要展示的页面组件。
  * 第二步：场景渲染配置，告诉导航器我要什么样的页面跳转效果。
  * 第三步：渲染场景，告诉导航器如何渲染页面，利用第一步设置的路由对象进行场景的渲染。
  */

import React from 'react';
import {
  Navigator
} from 'react-native-deprecated-custom-components';

import Login from './components/Login/login';
import Regist from './components/Regist/regist';

class Navigation extends React.Component {
  render () {
    const rootRoute = {
      Component: Login
    };

    return (
      <Navigator 
        /**
         * 第一步：
         * initialRoute 对象指定了APP启动之后的第一个页面
         * initialRoute 对象的值是自定义的，必须包含的属性component。表示要渲染的组件
         */
        initialRoute={rootRoute}

        /**
         * 第二步：
         * configureScene 场景渲染的配置
         */
        configureScene={(route) => Navigator.SceneConfigs.PushFromRight}

        /**
         * 第三步：
         * renderScene 渲染场景
         * 函数参数： route（第一步创建并设置给导航器的路由对象）、navigator（导航器对象）
         * 实现：给需要显示的组件设置属性
         */
        renderScene={(route, navigator) => {
          const Component = route.Component;
          return (
            <Component 
              navigator={navigator}
              route={route}>
            </Component>
          );
        }}>
      </Navigator>
    );
  }
}

export default Navigation;