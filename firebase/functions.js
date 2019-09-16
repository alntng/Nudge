import * as firebase from 'firebase'
import 'firebase/firestore'

import {firestore} from './firebase'

const createGroup = async (name, goal) => {
  await firestore
    .collection('Groups')
    .doc()
    .set({name: name, goal: goal})

  await firestore
    .collection('GroupUsers')
    .doc()
    .set({name: name, members: {}})
}

// const addMember = async (name, teamName) => {
//   firestore
//   .collection('GroupUsers')
//   .where('name','==',teamName)
//   .update()

// }

const collectAll = async (collectionPath, callback) => {
  try {
    console.log('Calling Firestore')
    await firestore.collection(collectionPath).onSnapshot(query => {
      let container = []

      query.forEach(doc => {
        container.push(doc.data())
      })
      return callback(container)
    })
  } catch (error) {
    console.log('Error connecting to DB')
  }
}

const collectGroupMembers = async groupName => {
  console.log('Getting Group members')
  await firestore.collection('GroupUsers').where('name', '==', groupName)
}

// const getAllGroups = async callback => {
//   try {
//     console.log('Calling Firestore')
//     await firestore
//       .collection('Groups')
//       // .orderBy('createdAt', 'desc')
//       .onSnapshot(query => {
//         let container = []

//         query.forEach(doc => {
//           container.push(doc.data())
//         })
//         return callback(container)
//       })
//   } catch (error) {
//     console.log('Did not post', error)
//   }
// }

export {createGroup, collectAll}
