const firebaseConfig = {
    apiKey: "AIzaSyDwl4g5ZbQZNYFzHODEYUv6quBD0WjqAO0",
    authDomain: "contactform-161ac.firebaseapp.com",
    databaseURL: "https://contactform-161ac-default-rtdb.firebaseio.com",
    projectId: "contactform-161ac",
    storageBucket: "contactform-161ac.appspot.com",
    messagingSenderId: "308550095648",
    appId: "1:308550095648:web:00720a08244163a35f7d45"
};

firebase.initializeApp(firebaseConfig);

// reference
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm)

function submitForm(e) {
    e.preventDefault();

    var name = getElementVal("name");
    var email = getElementVal("email");
    var phone = getElementVal("phone");
    var msg = getElementVal("msg");

    saveMsg(name, email, phone, msg);
    console.log(name, email, phone, msg);
    window.alert("Message Sent!");
}

const saveMsg = (name, email, phone, msg) => {
    var newContactForm = contactFormDB.push();

    newContactForm.set({
        name: name,
        email: email,
        phone: phone,
        msg: msg,
    });
}
const getElementVal = (id) => {
    return document.getElementById(id).value;
};
