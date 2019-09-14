import React, {Component} from 'react'
import {Text, View, Image, StyleSheet, Button} from 'react-native'
import {TouchableHighlight, ScrollView} from 'react-native-gesture-handler'
import {createStackNavigator, createAppContainer} from 'react-navigation'
import {firestore, firebaseApp} from '../firebase/firebase'
import {collectAll} from '../firebase/functions'
import {Header} from '../components/Header'

export default class JoinedGroupsPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      groups: []
    }
  }

  async componentDidMount() {
    firestore.collection('Groups').onSnapshot(querySnapshot => {
      const container = []

      querySnapshot.forEach(doc => {
        container.push(doc.data())
      })
      this.setState({groups: container})
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Header text="Add New Group" />
        <ScrollView style={styles.scrollContainer}>
          {this.state.groups &&
            this.state.groups.map(group => (
              <View style={styles.postContainer} key={group.name}>
                <View style={styles.container}>
                  <Text style={styles.groupname}>{group.name}</Text>
                </View>
                <Text style={styles.groupinfo}>{group.goal}</Text>

                <Button
                  title="Group Members"
                  members={group.menbers}
                  name={group.name}
                  onPress={() =>
                    this.props.navigation.navigate('SingleGroup', {
                      name: group.name,
                      goal: group.goal,
                      members: group.members
                    })
                  }
                />
                <Text>Check out your groups plan</Text>
              </View>
            ))}
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  postContainer: {
    flex: 1,
    padding: 10,
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
    fontWeight: 'bold',
    alignItems: 'center'
  },
  dateUserContainer: {
    marginLeft: 3
  },
  groupinfo: {
    padding: 5,
    fontSize: 15,
    alignItems: 'center'
  }
})
