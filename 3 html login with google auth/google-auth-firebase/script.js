// Firebase config
firebase.initializeApp({
  // add your firebase config here
 apiKey: "<API_KEY>",
   authDomain: "<AUTH_DOMAIN>",
  projectId: "<PROJECT_ID>",
   storageBucket: "<STORAGE_BUCKET>",
  messagingSenderId: "<MESSAGING_SENDER_ID>",
  appId: "<APP_ID>"
});

// Button click
document.getElementById("googleLoginBtn").onclick = function () {
  var provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup(provider)
    .then(function (result) {
      console.log("Logged in:", result.user.email);
    })
    .catch(function (error) {
      console.log(error.message);
    });
};


