import React, {Component} from 'react'
import {
  Modal,
  TextInput,
  View,
  TouchableHighlight,
  Image,
  StyleSheet,
  Button
} from 'react-native'

import {firestore} from '../firebase/firebase'
import {createGroup} from '../firebase/functions'

export class CreatePost extends Component {
  constructor(props) {
    super(props)
    this.state = {
      teamName: '',
      goal: ''
    }
  }

  async createPost() {
    try {
      // make call to Firebase
      await createGroup(this.state.teamName, this.state.goal)
      this.props.closeModal()
    } catch (error) {
      console.log('Something went wrong', error)
    }
  }

  render() {
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={this.props.isModalVisible}
      >
        <View style={{marginTop: 25}}>
          <TouchableHighlight
            onPress={() => {
              this.props.closeModal()
            }}
          >
            <Image
              source={{
                uri:
                  'https://cdn4.iconfinder.com/data/icons/media-controls-4/100/close-512.png'
              }}
              style={styles.close}
            />
          </TouchableHighlight>

          <TextInput
            multiline={true}
            numberOfLines={4}
            onChangeText={teamName => this.setState({teamName})}
            placeholder="What's the name of your group?"
            value={this.state.teamName}
            style={styles.input}
          />
          <TextInput
            multiline={true}
            numberOfLines={4}
            onChangeText={goal => this.setState({goal})}
            placeholder="What's your group's goal?"
            value={this.state.goal}
            style={styles.input}
          />
        </View>

        <Button title="Create Group" onPress={() => this.createPost()} />
      </Modal>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    height: 80
  },
  close: {
    width: 40,
    height: 40,
    alignSelf: 'flex-end',
    marginRight: 10,
    marginBottom: 10
  }
})
