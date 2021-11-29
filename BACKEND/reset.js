var config = {
    apiKey: "AIzaSyDJo458FYOjjVJsrp3Ix9YrpZg2nWZfn6Q",
    authDomain: "laundry-515c6.firebaseapp.com",
    databaseURL: "https://laundry-515c6-default-rtdb.firebaseio.com",
    projectId: "laundry-515c6",
    storageBucket: "laundry-515c6.appspot.com",
    messagingSenderId: "466700400996",
    appId: "1:466700400996:web:c778fc53ced8764e93e271"
  };
  firebase.initializeApp(config);



const mailField = document.getElementById('mail');
const labels = document.getElementsByTagName('label');
const resetPassword = document.getElementById('resetPassword');
const successModal = document.querySelector('.success');
const failureModal = document.querySelector('.failure');

const auth = firebase.auth();

//auth.languageCode = 'DE_de';

auth.useDeviceLanguage();

const resetPasswordFunction = () => {
    const email = mailField.value;

    auth.sendPasswordResetEmail(email)
    .then(() => {
        console.log('Password Reset Email Sent Successfully!');
    })
    .catch(error => {
        console.error(error);
    })
}


resetPassword.addEventListener('click', resetPasswordFunction);


mailField.addEventListener('focus', () => {
    labels.item(0).className = "focused-field";
});

mailField.addEventListener('blur', () => {
    if(!mailField.value)
        labels.item(0).className = "unfocused-field";
});