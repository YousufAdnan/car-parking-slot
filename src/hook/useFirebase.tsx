// import {
//   getAuth,
//   signInWithPhoneNumber,
//   RecaptchaVerifier,
// } from "firebase/auth"
// import initializeFirebase from "src/firebase/firebase.init"
// initializeFirebase()

// const useFirebase = () => {
//   const auth = getAuth()

//   function setUpRecaptha(number) {
//     const recaptchaVerifier = new RecaptchaVerifier(
//       "recaptcha-container",
//       {},
//       auth
//     )
//     recaptchaVerifier.render()
//     return signInWithPhoneNumber(auth, number, recaptchaVerifier)
//   }
// }
// //
