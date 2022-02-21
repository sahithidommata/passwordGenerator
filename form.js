// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDkNBLKFsTimzJSvZyPKILI69RgMcMAFp4",
    authDomain: "fir-e52b3.firebaseapp.com",
    databaseURL:"https://fir-e52b3-default-rtdb.firebaseio.com/",
    projectId: "fir-e52b3",
    storageBucket: "fir-e52b3.appspot.com",
    messagingSenderId: "298651624128",
    appId: "1:298651624128:web:5c3c2aa50ac29425f44325",
    measurementId: "G-DR8B1B18SP"
  };
  
 
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  const auth =  firebase.auth();
  let database = firebase.database()
  //signup function
  function signUp(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    
    const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
    //
    promise.catch(e=>alert(e.message));
    
    alert("SignUp Successfully");
  }

  //signIN function
  function  signIn(){
    var email = document.getElementById("email");
    var password  = document.getElementById("password");
    const promise = auth.signInWithEmailAndPassword(email.value,password.value);
    
    promise.catch(e=>alert(e.message));
    
  }


  //signOut

  function signOut(){
    auth.signOut();
    alert("SignOut Successfully from System");
    
  }

  //active user to homepage
  firebase.auth().onAuthStateChanged((user)=>{
    if(user){
      var email = user.email;
      alert("Active user "+email);

    }else{
      alert("No Active user Found")
    }
  })
 