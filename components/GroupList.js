import React from 'react'
import {Text, View, Image, StyleSheet, Button} from 'react-native'
import {TouchableHighlight, ScrollView} from 'react-native-gesture-handler'
import {createStackNavigator, createAppContainer} from 'react-navigation'

import SingleGroup from './SingleGroups'

export const GroupList = props => {
  return (
    <View style={styles.postContainer}>
      <View style={styles.container}>
        <Text style={styles.groupname}>{props.name}</Text>
      </View>
      <Text style={styles.groupinfo}>{props.goal}</Text>
      <Button
        title="Group Members"
        // members={props.menbers}
        // name={props.name}
        onPress={() => props.navigation.navigate('SingleGroup')}
      />
      <Text>Check out your groups plan</Text>
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
