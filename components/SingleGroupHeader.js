import React, {Component} from 'react'
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native'
import {AddMember} from './AddMember'

export class SingleGroupHeader extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isModalVisible: false
    }
  }

  closeModal() {
    this.setState({isModalVisible: !this.state.isModalVisible})
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => this.setState({isModalVisible: true})}
          style={styles.buttonContainer}
        >
          <Text>Add someone to {this.props.name}</Text>

          <AddMember
            name={this.props.name}
            isModalVisible={this.state.isModalVisible}
            closeModal={() => this.closeModal()}
          />
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#dadada'
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1
  },
  button: {
    width: 30,
    height: 30,
    resizeMode: 'contain'
  },
  buttonContainer: {
    paddingRight: 5
  }
})
