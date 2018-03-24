
import React, { Component } from 'react'
import { StyleSheet, View, Image, ImageBackground, Text, KeyboardAvoidingView } from 'react-native'
import { NavigationActions } from 'react-navigation'

import LoginForm from './Form.js'

export default class Login extends Component {

	constructor(props) {
		super()

		this.state = {
			welcomeTxt: 'WORKMAN'
		}

	}

	render() {
		return (
			<KeyboardAvoidingView behavior="padding" style={styles.container}>
				<ImageBackground style={styles.bgImg} source={require('./img/grass.png')} >
					<View style={styles.logoBox}>
						<Image style={styles.logo} source={require('./img/logo.png')} />
						<Text 
							style={styles.text}
						>{this.state.welcomeTxt}</Text>
					</View>

					<View style={styles.formContainer}>
						<LoginForm 
							navigation={this.props.navigation}
							// 获取子组件返回信息
							callbackWelTxt={(msg) => this.setState({welcomeTxt: msg})}
						/>
					</View>
				</ImageBackground>
			</KeyboardAvoidingView>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	bgImg: {
		flex: 1,
	},
	logoBox: {
		flexGrow: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	logo: {
		width: 100,
		height: 80
	},
	text: {
		color: '#fff',
		marginTop: 10,
		width: 280,
		textAlign: 'center',
		backgroundColor: 'transparent'
	}
})