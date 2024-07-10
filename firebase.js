// firebase.js
const admin = require('firebase-admin');
const serviceAccount = require('./firebase-key.json')
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();
// to check whether the firebase is connectd or not 
async function testFirestoreConnection() {
  try {
    const testDoc = db.collection('test').doc('connectionTest');
    await testDoc.set({ connected: true });
    const doc = await testDoc.get();
    if (doc.exists && doc.data().connected) {
      console.log('Firestore connected successfully!');
    } else {
      console.log('Failed to verify Firestore connection.');
    }
  } catch (error) {
    console.error('Error testing Firestore connection:', error);
  }
}

testFirestoreConnection();

module.exports = db;
