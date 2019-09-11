import React, {Component} from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  FlatList
} from 'react-native'
import {createStackNavigator, createAppContainer} from 'react-navigation'
import {List, ListItem} from 'react-native-elements'
import {NavigationBar} from '@shoutem/ui'

import {Header} from './components/Header'
import {GroupList} from './components/GroupList'
import {collectAll} from './firebase/functions'
import {firestore, firebaseApp} from './firebase/firebase'
import {SingleGroup} from './components/SingleGroups'

const HomePage = props => {
  return (
    <View style={styles.container}>
      <Button
        title="View Groups"
        onPress={() => props.navigation.navigate('JoinedGroupsPage')}
      />
      <Text>Welcome to Nudge</Text>
    </View>
  )
}

class JoinedGroupsPage extends Component {
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

// class SingleGroup extends Component {
//   render() {
//     const {params} = this.props.navigation.state
//     const name = params ? params.name : null
//     const members = params ? params.members : null
//     console.log(members)
//     return (
//       <View>
//         <Text styles={styles.groupname}>{name}</Text>
//         {members.map(member => (
//           <Text styles={styles.groupname} key={member}>
//             {member}
//           </Text>
//         ))}
//       </View>
//     )
//   }
// }

const App = createAppContainer(
  createStackNavigator({
    HomePage: {screen: HomePage},
    JoinedGroupsPage: {screen: JoinedGroupsPage},
    SingleGroup: {screen: SingleGroup}
  })
)

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: '#fef'
    // alignItems: 'center'
    // justifyContent: 'center'
  },
  groupinfo: {
    padding: 5,
    fontSize: 15,
    alignItems: 'center'
  },
  groupname: {
    fontSize: 18,
    fontWeight: 'bold',
    alignItems: 'center'
  }
})
