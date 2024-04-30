importScripts('https://www.gstatic.com/firebasejs/9.1.3/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.1.3/firebase-messaging-compat.js');


/*firebase.initializeApp({
  apiKey: "AIzaSyCytNeMKRFnIa5tcTwC6ebe7Q6IbHJCfvQ",
  authDomain: "notification-40071.firebaseapp.com",
  projectId: "notification-40071",
  storageBucket: "notification-40071.appspot.com",
  messagingSenderId: "737631106887",
  appId: "1:737631106887:web:e8f5466bb2173eef723e62",
  measurementId: "G-V1E0Q3J4BY"
});
*/
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
firebase.initializeApp =( {
  apiKey: "AIzaSyB-Z7TjtYw3N1Ks2vgx-um5nno9HSug2u0",
  authDomain: "store-notify.firebaseapp.com",
  projectId: "store-notify",
  storageBucket: "store-notify.appspot.com",
  messagingSenderId: "396732087280",
  appId: "1:396732087280:web:08481e982ba04e72043b35",
  measurementId: "G-FFGVK38GZK",
  vapidKey: "BGNeJguSobiuNsximwvJBI_pUtTzOMj1scCMBpV3B4M7ag63YvQmyrf-IXrYJeTwyNoEoybrklL9cDSWI3xWbOo"
});



const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
    const promiseChain = clients
        .matchAll({
            type: "window",
            includeUncontrolled: true
        })
        .then(windowClients => {
            for (let i = 0; i < windowClients.length; i++) {
                const windowClient = windowClients[i];
                windowClient.postMessage(payload);
            }
        })
        .then(() => {
            return registration.showNotification("New Message");
        });
    return promiseChain;
});
self.addEventListener('notificationclick', function (event) {
    console.log('notification received: ', event)
});