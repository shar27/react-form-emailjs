
import { initializeApp } from "firebase/app";
import {getAuth, 
    signOut,
     signInWithPopup,
GoogleAuthProvider
} from "firebase/auth"
import { useState } from "react";


const firebaseConfig = {
        apiKey: "AIzaSyDmHjcKPKmefHinJdCF0IVgeIk8CsS365o",
        authDomain: "ey-gds-test.firebaseapp.com",
        projectId: "ey-gds-test",
        storageBucket: "ey-gds-test.appspot.com",
        messagingSenderId: "780605056081",
        appId: "1:780605056081:web:2b9be86b035d90bbbd4470",
        measurementId: "G-2E4EXXYQ6Q"
      };
    
    const app = initializeApp(firebaseConfig);
    // Initialize Firebase Authentication and get a reference to the service
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    export {auth, provider}


   
   // const analytics = getAnalytics(app);

// signInWithPopup(auth, provider)
//       .then((result) => {
//         // This gives you a Google Access Token. You can use it to access the Google API.
//         const credential = GoogleAuthProvider.credentialFromResult(result);
//         const token = credential.accessToken;
//         // The signed-in user info.
//         const user = result.user;
//         // IdP data available using getAdditionalUserInfo(result)
//         // ...
//       }).catch((error) => {
//         // Handle Errors here.
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         // The email of the user's account used.
//         const email = error.customData.email;
//         // The AuthCredential type that was used.
//         const credential = GoogleAuthProvider.credentialFromError(error);
//         // ...
//       });





