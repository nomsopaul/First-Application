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
  var messagesRef = firebase.database().ref('order');
  
  // Listen for form submit
  document.getElementById('orderForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var Name = getInputVal('Name');
    var Date = getInputVal('Date');
    var Time = getInputVal('Time');
    var Email = getInputVal('Email');
    var Phone = getInputVal('Phone');
    var Address = getInputVal('Address');
    var LaundryOrder = getInputVal('LaundryOrder');


  
  
    // Save message
    saveMessage(Name, Date, Time, Email, Phone, LaundryOrder, Address );
  
    // Show alert
    // document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      // document.querySelector('.alert').style.display = 'none';
    },3000);
  
    // Clear form
    document.getElementById('orderForm').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(Name, Date, Time, Email, Phone, LaundryOrder, Address){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      Name: Name,
      Date:Date,
      Time:Time,
      Email:Email,
      Phone:Phone,
      LaundryOrder:LaundryOrder,
      Address:Address,
    })
    .then(()=> {
      alert("your responses has been sent ")
    })
    .catch((error) => {
      alert(error.message);
    });
  }