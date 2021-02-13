
// xxxxxxxxxx Submitting and Creating new user in firebase authentication xxxxxxxxxx
function showPost()
{
    var db = firebase.firestore();
    const list_div =    document.querySelector("#list_div")
    
    db.collection("protestPosts").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
         list_div.innerHTML += "<div class = 'list-item'><br><h3>" + doc.data().protestTitle  + " </h3><p>"+doc.data().protestDescription+ "</p><p>"+doc.data().protestDate+ "</p><p>"+doc.data().protestTime+ "</p><p></p></div>"
        });
    });
   

}

function home(){
    window.location.replace("../index.html");
}
        
   

