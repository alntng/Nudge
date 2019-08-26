import React from 'react'
import {Text, View, Image, StyleSheet, Button} from 'react-native'
import {TouchableHighlight, ScrollView} from 'react-native-gesture-handler'
import {createStackNavigator, createAppContainer} from 'react-navigation'

export function SingleGroup(props) {
  return (
    <View style={styles.postContainer}>
      {/* <View style={styles.container}>
        <Text style={styles.groupname}>{props.name}</Text>
      </View>
      <ScrollView style = {styles.container}>
      <Text style={styles.groupinfo}>{props.goal}</Text>
      </ScrollView> */}
      <Text>Test</Text>
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
