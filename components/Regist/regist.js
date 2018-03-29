/**
 * Description: Regist
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
  TextInput
} from 'react-native';

class Regist extends React.Component {
  constructor () {
    super();
    this.state = {
      uname: '',
      pwd: '',
      confirmPwd: ''
    };
  }

  static navigationOptions = {
    title: '注册'
  }

  componentDidMount () {
    // 获取路由参数对象：this.props.navigation.state.params
    alert(this.props.navigation.state.params.a);
  }

  regist () {
    const pwd = this.state.pwd;
    const confirmPwd = this.state.confirmPwd;

    if (
      this.state.uname === '' || 
      pwd === '' || 
      confirmPwd === ''
    ) {
      alert('请检查用户名和密码是否有漏填！');
      return false;
    }

    if (pwd !== confirmPwd) {
      alert('请检查两次输入的密码是否相同！！！');
      return false;
    }

    alert('注册成功');
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.formItem}>
          <Text style={styles.textForm}>用户名：</Text>
          <TextInput 
            style={styles.inputForm}
            placeholder="请输入用户名"
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

        <View style={styles.formItem}>
          <Text style={styles.textForm}>确认密码：</Text>
          <TextInput 
            style={styles.inputForm}
            placeholder="请确认密码"
            value={this.state.confirmPwd}
            onChangeText={confirmPwd => this.setState({confirmPwd})}>
          </TextInput>
        </View>

        <TouchableOpacity style={styles.toRegist} onPress={this.regist.bind(this)}>
          <Text style={styles.registText}>注册</Text>
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

  toRegist: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },

  registText: {
    width: 100,
    height: 30,
    lineHeight: 30,
    textAlign: 'center',
    backgroundColor: 'red',
    fontSize: 16,
    color: 'white'
  }
});

export default Regist;