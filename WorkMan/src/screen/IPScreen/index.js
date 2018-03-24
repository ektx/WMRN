import React, { Component } from 'react'
import { StyleSheet, StatusBar, View, Text } from 'react-native'

export default class IP extends Component {
	state = {}

	setStateAsync(state) {
		return new Promise((resolve) => {
			this.setState(state, resolve)
		})
	}

	async componentDidMount() {
		// 让状态条出现加载中
		StatusBar.setNetworkActivityIndicatorVisible(true)

		const res = await fetch('https://api.ipify.org?format=json')
		const {ip} = await res.json()

		await this.setStateAsync({ipAddress: ip})
		
		// 取消状态条出现加载中状态
		StatusBar.setNetworkActivityIndicatorVisible(false)
	}

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>
					My IP is {this.state.ipAddress || 'Unknown'}
				</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'blue'
	},
	welcome: {
		color: '#fff'
	}
})