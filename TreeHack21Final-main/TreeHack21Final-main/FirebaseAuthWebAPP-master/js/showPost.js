
// xxxxxxxxxx Submitting and Creating new user in firebase authentication xxxxxxxxxx
function showPost()
{
  
    

    var db = firebase.firestore();

    db.collection("protestPosts").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            $("#title").html(doc.title)
            $("#description").html(doc.description)
            $("#date").html(doc.date)
            $("#time").html(doc.time)
        });
    });


    
   }
        
   

