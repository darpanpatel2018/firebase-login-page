
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          uid = user.uid;
        }else{
            uid = null;
            window.location.replace("index.html");
        }
      });
      function logOut(){
          firebase.auth().signOut().then(function() {
            console.log("sign-out successfully!");
            window.location = "index.html";
            // Sign-out successful.
        }).catch(function(error) {
            // An error happened.
            console.log("sign-out error!!!!!!!!!!");
        });
      }
 