
import React, { Component } from 'react'
import { 
    StyleSheet, 
    View, 
    Image, 
    FlatList, 
    Text,
    Button
} from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import RNList from 'rnlist'

import Calendar from '../../contents/js/calendar'
import LoginOut from '../../contents/js/LoginOut'

class EventScreen extends Component {
    constructor (props) {
        super(props)

        this.state = {
            events: []
        }
    }

    static navigationOptions ({ navigation }) {
        const params = navigation.state.params
        return {
            title: params.title,
            headerRight: (
                <Button
                    onPress={() => alert('a')}
                    title="添加"
                />
            ),
            tabBarIcon: ({tintColor, focused}) => {
                return (
                    <Image
                        source={require('./img/events.png')}
                        style={[myStyle.icon, {tintColor}]}
                    />
                )
            },
            tabBarOnPress: ({previousScence, scene, jumpToIndex}) => {
                jumpToIndex(scene.index)
            }
        }
    }

    componentDidMount () {
        this._getEventList()
    }
    
    _getEventList () {
        axios.post('/api', {
            query: `{todolistEvetns(
                account: "MY_ACCOUNT", 
                types: "${this.props.navigation.state.params.id}"
            ){id, eventTypeID, title, complete, ctime, mtime, ttime, stime, etime, inner}}`,
            token: this.props.userInfo.token
        }).then(res => {
            let events = res.todolistEvetns.map(val => {
                return {
                    title: val.title,
                    subTitle: `${Calendar.format('YYYY年M月D日', val.stime)}  ${Calendar.format('YYYY年M月D日', val.etime)}`,
                    preview: { line: 1, inner: val.inner }
                }
            })
            this.setState({ events })
        }).catch(err => {
            // LoginOut(this.props.navigation)
            console.warn(err)
        })
    }

    render () {
        return (
            <View>
                <FlatList
                    data={this.state.events}
                    renderItem={({item, index}) =>
                        <RNList
                            data={item}
                            index={index}
                            style={itemStyle}
                        />
                    }
                    keyExtractor={(item, index) => index.toString()}
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

})

const itemStyle = StyleSheet.create({
    list: {
        justifyContent: 'center'
    },
    subTitle: {
        color: '#777'
    }
})
