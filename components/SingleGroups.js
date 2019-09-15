import React, {Component} from 'react'
import {Text, View, Image, StyleSheet, Button} from 'react-native'
import {TouchableHighlight, ScrollView} from 'react-native-gesture-handler'
import {createStackNavigator, createAppContainer} from 'react-navigation'
import {firestore, firebaseApp} from '../firebase/firebase'

export default class SingleGroup extends Component {
  constructor(props) {
    super(props)

    this.state = {
      members: {}
    }
  }

  async componentDidMount() {
    firestore
      .collection('GroupUsers')
      .where(
        'name',
        '==',
        this.props.navigation.getParam('name', 'No Group Name')
      )
      .onSnapshot(snapshot => {
        snapshot.forEach(snap => this.setState({members: snap.data().members}))
      })
  }

  render() {
    const {navigation} = this.props
    const name = navigation.getParam('name', 'No Group Name')
    const goal = navigation.getParam('goal', 'This group has no ambition')
    const membersArr = Object.keys(this.state.members)
    console.log(membersArr)
    // const members = navigation.getParam('members', 'No Group Members')

    return (
      <View style={styles.postContainer}>
        <View style={styles.container}>
          <Text style={styles.groupname}>{name}</Text>
          <Text style={styles.groupinfo}>{goal}</Text>
        </View>
        <ScrollView contentContainerStyle={styles.container}>
          {this.state.members &&
            membersArr.map(member => (
              <View key={member} style={styles.container}>
                <Text key={member}>{member}</Text>
              </View>
            ))}
        </ScrollView>
        <Text />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  postContainer: {
    flex: 1,
    padding: 5,
    borderBottomColor: '#dadada',
    borderBottomWidth: 1
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  groupname: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  dateUserContainer: {
    marginLeft: 3
  },
  groupinfo: {
    padding: 5,
    fontSize: 15
  }
})
