/**
 * Description: Login
 * Author: zhaoyiming
 * Date: 2018/03/29
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  TextInput,
  ToastAndroid,
  BackHandler
} from 'react-native';

import Regist from '../Regist/regist';

class Login extends React.Component {
  constructor () {
    super();
    this.state = {
      uname: '',
      pwd: ''
    };
  }

  static navigationOptions = {
    title: '登录'
  }

  login () {
    if (
      this.state.uname === '' || 
      this.state.pwd === ''
    ) {
      alert('请检查用户名和密码是否有漏填！');
      return false;
    }

    alert('登录成功');
  }

  link (location) {
   // this.props.navigator.push({Component: Regist});
    const { navigate } = this.props.navigation;
    navigate(location, {a: 1, b: 2}); // 第一个参数是要跳转的路由对应的组件，第二个参数是对象，表示在路由中传递的参数
  }

  componentDidMount () {
    ToastAndroid.show('2s后进入主页', ToastAndroid.SHORT);
    // let timer = setTimeout(() => {
    //   const { navigate } = this.props.navigation;
    //   navigate('App');
    // }, 2000);

    // 
    BackHandler.addEventListener('hardwareBackPress', () => {
      return false; // 双击返回键，退出应用，返回false，则
      // BackHandler.exitApp(); // 单击返回键，直接退出应用
    });
    
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.formItem}>
          <Text style={styles.textForm}>用户名：</Text>
          <TextInput 
            style={styles.inputForm}
            placeholder="请输入用户名..."
            value={this.state.uname}
            onChangeText={uname => this.setState({uname})}>
          </TextInput>
        </View>
        
        <View style={styles.formItem}>
          <Text style={styles.textForm}>密码：</Text>
          <TextInput 
            style={styles.inputForm}
            placeholder="请输入密码"
            value={this.state.pwd}
            onChangeText={pwd => this.setState({pwd})}>
          </TextInput>
        </View>

        <TouchableOpacity style={styles.toLogin} onPress={this.login.bind(this)}>
          <Text style={styles.loginText}>登录</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.link.bind(this, 'Regist')}>
          <Text>去注册</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.link.bind(this, 'App')}>
          <Text>去首页</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    
  },

  formItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  textForm: {
    flex: 1,
    paddingRight: 10,
    textAlign: 'right',
    fontSize: 14
  },

  inputForm: {
    flex: 4
  },

  toLogin: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },

  loginText: {
    width: 100,
    height: 30,
    lineHeight: 30,
    textAlign: 'center',
    backgroundColor: 'red',
    fontSize: 16,
    color: 'white'
  }
});

export default Login;