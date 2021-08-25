var firebaseConfig = {
    apiKey: "AIzaSyAoi1AHQp7qCiXpT46UazwSpacJQyYq_Tk",
    authDomain: "trashgo-dc606.firebaseapp.com",
    projectId: "trashgo-dc606",
    storageBucket: "trashgo-dc606.appspot.com",
    messagingSenderId: "639978093996",
    appId: "1:639978093996:web:178d3f6f27d7164ab08e09",
    measurementId: "G-QB80ZW88WH"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var db = firebase.database();
  var table = document.getElementById("table");
  var coordsRef = db.ref("/coords");

  coordsForm.addEventListener("submit", e => {
    var latitude = document.getElementById("latitude");
    var longitude = document.getElementById("longitude");
    var address = document.getElementById("address");
    var difficulty = document.getElementById("difficulty");
    var id = Date.now();
    
    db.ref("coords/"+ id).set({
        latitude: latitude.value,
        longitude: longitude.value,
        address: address.value,
        difficulty: difficulty.value,
        createdAt: firebase.database.ServerValue.TIMESTAMP
    })
  
  })

  coordsRef.on("child_added", data => {
    var tr = document.createElement("tr");
    tr.id = data.key; 
    tr.innerHTML = `
      <td> ${ data.key} </td>
      <td> ${ data.val().latitude} </td>
      <td> ${ data.val().longitude} </td>
      <td> ${ data.val().address} </td>
      <td> ${ data.val().difficulty} </td>
      
    `
    table.appendChild(tr);
  })