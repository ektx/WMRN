import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text,
    Image,
    Button,
    FlatList
} from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import RNList from 'rnlist'

class EventTypes extends Component {
    constructor (props) {
        super(props)

        this.state = {
            types: []
        }
    }

    static navigationOptions ({ navigation }) {
        let _title = '事件'

        return {
            title: _title,
            headerBackTitle: '返回',
            tabBarIcon: ({tintColor, focused}) => {
                return (
                    <Image
                        source={require('./img/events.png')}
                        style={[{tintColor}]}
                    />
                )
            },
            headerRight: (
                <Button
                    onPress={() => alert(1)}
                    title="添加"
                />
            )
        }
    }

    componentDidMount () {
        this._getWorkType()
    }

    _getWorkType () {
        axios.post('/api', {
            query: `{workTypes(account: "MY_ACCOUNT") {id,name}}`,
            token: this.props.userInfo.token
        }).then(res => {
            let _types = res.workTypes.map(val => {
                return {
                    title: val.name,
                    id: val.id,
                    separator: 'right'
                }
            })

            this.setState({types: _types})
        }).catch(err => {
            console.warn(err)
        })
    }

    render () {
        return (
            <FlatList
                data={this.state.types}
                renderItem={({item, index}) => 
                    <RNList
                        data={item}
                        index={index}
                        style={myStyle}
                        callback={() => {
                            this.props.navigation.navigate('Events',item)
                        }}
                    />
                }
                keyExtractor={(item, index) => index.toString()}
            />
        )
    }
}

function mapStateToProps (state, props) {
    return { userInfo: state.Main.userInfo }
}

export default connect(mapStateToProps)(EventTypes)

const myStyle = StyleSheet.create({
    list: {
        height: 50
    }
})