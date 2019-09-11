import React from 'react'
import {Text, View, Image, StyleSheet, Button} from 'react-native'
import {TouchableHighlight, ScrollView} from 'react-native-gesture-handler'
import {createStackNavigator, createAppContainer} from 'react-navigation'

export function SingleGroup(props) {
  console.log(props.navigation)
  const {navigation} = props
  const name = navigation.getParam('name', 'No Group Name')
  const goal = navigation.getParam('goal', 'This group has no ambition')
  const members = navigation.getParam('members', 'No Group Members')

  return (
    <View style={styles.postContainer}>
      <View style={styles.container}>
        <Text style={styles.groupname}>{name}</Text>
        <Text style={styles.groupinfo}>{goal}</Text>
      </View>
      <ScrollView contentContainerStyle={styles.container}>
        <Text>Members go in here</Text>
      </ScrollView>
      <Text />
    </View>
  )
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
