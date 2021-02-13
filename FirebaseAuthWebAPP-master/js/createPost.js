
// xxxxxxxxxx Submitting and Creating new user in firebase authentication xxxxxxxxxx
function createPost()
{
    var protestTitle = document.getElementById("protestTitle").value;
    var protestDescription = document.getElementById("description").value;
    var protestDate = document.getElementById("date").value;
    var protestTime = document.getElementById("time").value;
    var uid
    var user = firebase.auth().currentUser;
    var db = firebase.firestore();

    var uid;
    if (user != null)
    {
        uid = user.uid;
    }

    db.collection("protestPosts").add({
        protestTitle: protestTitle,
        protestDescription: protestDescription,
        protestDate: protestDate,
        protestTime: protestTime
    })
        .then((docRef) =>
        {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) =>
        {
            console.error("Error adding document: ", error);
        });

    swal('Your Post Was Created', 'Your post was created successfully.',
    ).then((value) =>
    {
        setTimeout(function ()
        {
            window.location.replace("../index.html");
        }, 1000)
    });
}
        
   

