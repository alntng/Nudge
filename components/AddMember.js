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

export class AddMember extends Component {
  constructor(props) {
    super(props)
    this.state = {
      member: '',
      teamName: ''
    }
    this.logGroup = this.logGroup.bind(this)
  }

  async componentDidMount() {
    this.setState({teamName: this.props.name})
  }

  logGroup(newMember, teamName) {
    const groupId = ''
    firestore
      .collection('GroupUsers')
      .where('name', '==', teamName)
      .onSnapshot(snapshot => {
        snapshot
          .docChanges()
          .forEach(change => console.log(change.doc.data().members))
      })
    //   .update({members: {newMember: true}})

    // console.log(members, '*********')
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
            onChangeText={member => this.setState({member})}
            placeholder={'Who do you want to add to this group?'}
            value={this.state.member}
            style={styles.input}
          />
        </View>

        <Button
          title="Add new member"
          onPress={() => this.logGroup(this.state.member, this.state.teamName)}
        />
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
