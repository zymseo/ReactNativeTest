/**
 * Description: 小试牛刀：Header，flex布局：http://www.runoob.com/w3cnote/flex-grammar.html
 * Author: zhaoyiming
 * Date: 2018/03/28
 */

import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

class Test extends React.Component {
  constructor () {
    super();
    this.state = {
      author: 'zhaoyiming',
      github: 'https://github.com/zymseo'
    };
  }

  static defaultProps = {
    
  };

  componentWillMount () {

  }

  componentDidMount () {

  }

  componentWillUpdate () {

  }

  componentDidUpdate () {

  }

  componentWillUnmount () {

  }

  shouldComponentUpdate () {
    return true;
  }

  componentWillReceiveProps (prop) {

  }

  render () {
    return (
      <View style={styles.headerContainer}>
        <Text style={[styles.pl, styles.title, styles.whiteColor,]}>Project: ReactNativeTest</Text>
        <Text style={[styles.pl, styles.author, styles.whiteColor]}>Author: {this.state.author} </Text>
        <Text style={[styles.pl, styles.github, styles.whiteColor]}>Github: {this.state.github} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    display: 'flex',
    marginBottom: 15,
    height: 120,
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: 'red'
  },

  whiteColor: {
    color: 'white'
  },

  pl: {
    paddingLeft: 10
  },

  title: {
    lineHeight: 30,
    backgroundColor: 'orange'
  },

  author: {
    lineHeight: 30,
    backgroundColor: 'blue'
  },

  github: {
    lineHeight: 30,
    backgroundColor: 'green'
  }
});

export default Test;