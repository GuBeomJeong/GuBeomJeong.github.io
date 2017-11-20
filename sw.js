import firebase from 'firebase';

firebase.initializeApp({
    messagingSenderId: "733295943818"
});

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler((payload) => {
    return self.registration.showNotification("Firebase notification", {body: 'Zync has received a firebase notification'})
});
