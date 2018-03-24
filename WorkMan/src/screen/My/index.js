
import React, { Component } from 'react'
import { 
	StyleSheet, 
	View, 
	Text, 
	Image,
	TouchableOpacity
} from 'react-native'
import { connect } from 'react-redux'
import RNBtn from 'rn-btn'
import RNList from 'rnlist'

import LoginOut from '../../contents/js/LoginOut'

class EventScreen extends Component {
	constructor(props) {
		super(props)
	}

	static navigationOptions = ({ navigation }) => {
		let title = '我'
		return {
			title,
			tabBarLabel: title,
			tabBarIcon: ({ tintColor, focused}) => {
				const icon = require('./img/user.png')
				return (
					<Image
						source={icon}
						style={[myStyle.icon, {tintColor}]}
					/>
				)
			},
			tabBarOnPress: ({previousScence, scene, jumpToIndex}) => {
				jumpToIndex(scene.index)
			}
		}
	}

	render () {

		let rnlistData = {
			title: this.props.userInfo.user,
			subTitle: '好好学习，天天向上',
			separator: 'right'
		}

		return (
			<View>
				<RNList data={rnlistData} />
				<RNBtn
                    text="退出"
                    style={myStyle.loginOutBtn}
					theme={'error'}
					callback={() => {
						LoginOut(this.props.navigation)
					}}
                />
			</View>
		)
	}
}

function mapStateToProps(state, props) {
	return { userInfo: state.Main.userInfo }
}

export default connect(mapStateToProps)(EventScreen)

const myStyle = StyleSheet.create({
    loginOutBtn: {
		margin: 5,
		borderRadius: 3
    }
})