/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
import "./static/styles/tailwind.css"

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/sw.js")
    .then(function (registration) {
      // registration worked
      console.log("Registration succeeded.")
      registration.unregister().then(function (boolean) {
        // if boolean = true, unregister is successful
      })
    })
    .catch(function (error) {
      // registration failed
      console.log("Registration failed with " + error)
    })
}
