// Initialize Firebase (ADD YOUR OWN DATA)
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

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var subject = getInputVal('subject');
  var email = getInputVal('email');

  var message = getInputVal('message');

  // Save message
  saveMessage(name, subject, email,  message);

  // Show alert
  // document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, subject, email,  message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    subject:subject,
    email:email,
    message:message
  })
  .then(()=> {
    alert("your responses has been sent ")
  })
  .catch((error) => {
    alert(error.message);
  });
}