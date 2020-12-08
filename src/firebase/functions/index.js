const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp();

const pictures = admin.firestore().collection('pictures');
const sounds = admin.firestore().collection('sounds');
const increment = { prankCount: admin.firestore.FieldValue.increment(1) };

const runtimeOpts = {
  timeoutSeconds: 15,
  memory: '128MB',
};

exports.pranked = functions
  .region('europe-west3')
  .runWith(runtimeOpts)
  .https.onRequest((request, response) => {
    Promise.all([
      pictures.doc(request.query.picture).update(increment),
      sounds.doc(request.query.sound).update(increment),
    ])
      .then(() => response.send('OK'))
      .catch(err => response.send(err));
  });
