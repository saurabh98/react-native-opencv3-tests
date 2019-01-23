/**
 * Sample React Native App
 * https://github.com/adamgf/react-native-opencv3-tests/CvImageManipulations
 * @author Adam G. Freeman, adamgf@gmail.com 01/19/2019
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Dimensions, TouchableOpacity, ScrollView, Image, Platform, StyleSheet, Text, View} from 'react-native';
import {RNCv, CvCamera, CvInvoke, ColorConv, CvTypeClass, CvMat} from 'react-native-opencv3';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<Props> {

  constructor(props) {
    super(props)
    let {height, width} = Dimensions.get('window')
    this.scrollView = React.createRef();
    this.state = { scrollleft : width - 64, windowwidth : width, windowheight : height }
    this.CvType = new CvTypeClass()
    RNCv.MatWithParams(150, 150, this.CvType.CV_8UC(4))
    .then((res) => {
      this.setState({ scrollleft : width - 64, windowwidth : width, windowheight : height, intermediatemat : res })
    })
  }

  componentDidMount = () => {
    setTimeout(() => {
      if (this.scrollView && this.scrollView.current) {
        this.scrollView.current.scrollTo({ x : 0, y : this.state.windowheight, animated : false })
      }
    }, 500);
  }

  onHistogram1 = (e) => {
    const mHistSizeNum = 25
    let hist
    RNCv.Mat().then((res) => {
      hist.matIndex = res.matIndex
      hist.rows = res.rows
      hist.cols = res.cols
      hist.CvType = res.CvType
    })
    alert('hist is: ' + JSON.stringify(hist))
    let thickness = (this.state.windowheight / (mHistSizeNum + 10) / 5)
    if (thickness > 5) {
      thickness = 5
    }
    const offset = ((this.state.windowheight - (5*mHistSizeNum + 4*10)*thickness)/2)
    alert('Inside onHistogram1')
  }

  press1 = (e) => {
    alert('pressed 1')
  }

  press2 = (e) => {
    alert('pressed 2')
  }

  press3 = (e) => {
    alert('pressed 3')
  }

  press4 = (e) => {
    alert('pressed 4')
  }

  press5 = (e) => {
    alert('pressed 5')
  }

  press6 = (e) => {
    alert('pressed 6')
  }

  press7 = (e) => {
    alert('pressed 7')
  }

  press8 = (e) => {
    alert('pressed 8')
  }

  render() {
    const rgba='CvCameraFrame'
    let intermat
    if (this.state && this.state.intermediatemat) {
      intermat = this.state.intermediatemat

    alert('intermat is: ' + JSON.stringify(intermat))
  }

    return (
      <View style={styles.container}>
        <CvInvoke func='hist.get' params={{"p1":0,"p2":0,"p3":"mBuff"}} callback='onHistogram1'>
          <CvInvoke func='RNCv.cvtColor' params={{"p1":rgba,"p2":intermat,"p3":ColorConv.COLOR_RGB2HSV_FULL}}>
            <CvCamera style={{ width: '100%', height: '100%', position: 'absolute' }}/>
          </CvInvoke>
        </CvInvoke>
        <ScrollView ref={this.scrollView} style={{ 'left' : this.state.scrollleft, ...styles.scrollview }}>
          <TouchableOpacity  onPress={this.press1} style={styles.to}>
            <Image source={require('./images/react-native-icon.png')} style={styles.scrollimg}/>
          </TouchableOpacity>
          <TouchableOpacity  onPress={this.press2} style={styles.to}>
            <Image source={require('./images/react-native-icon.png')} style={styles.scrollimg}/>
          </TouchableOpacity>
          <TouchableOpacity  onPress={this.press3} style={styles.to}>
            <Image source={require('./images/react-native-icon.png')} style={styles.scrollimg}/>
          </TouchableOpacity>
          <TouchableOpacity  onPress={this.press4} style={styles.to}>
            <Image source={require('./images/react-native-icon.png')} style={styles.scrollimg}/>
          </TouchableOpacity>
          <TouchableOpacity  onPress={this.press5} style={styles.to}>
            <Image source={require('./images/react-native-icon.png')} style={styles.scrollimg}/>
          </TouchableOpacity>
          <TouchableOpacity  onPress={this.press6} style={styles.to}>
            <Image source={require('./images/react-native-icon.png')} style={styles.scrollimg}/>
          </TouchableOpacity>
          <TouchableOpacity  onPress={this.press7} style={styles.to}>
            <Image source={require('./images/react-native-icon.png')} style={styles.scrollimg}/>
          </TouchableOpacity>
          <TouchableOpacity  onPress={this.press8} style={styles.to}>
            <Image source={require('./images/react-native-icon.png')} style={styles.scrollimg}/>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'transparent',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  to: {
    width: 64,
    height: 64,
    backgroundColor: 'transparent',
  },
  scrollimg: {
    width: 56,
    height: 56,
    margin: 4,
  },
  scrollview: {
    top: 0,
    bottom: 0,
    right: 0,
    height: 512,
    width: 64,
    backgroundColor: '#FFF',
    opacity: 0.5,
  },
});
