document.getElementById("build-form").addEventListener("submit",function(event) {
    const nme=document.getElementById("name").value.trim();
    const email=document.getElementById("email").value.trim();
    const phone=document.getElementById("phone").value.trim();
    const pclink=document.getElementById("pclink").value.trim();
    const partlist=document.getElementById("partlist").value.trim();
    const addr=document.getElementById("addr").value.trim();
    if(!nme || !email || !phone || (!pclink && !partlist) || !addr){
        event.preventDefault();
        alert("Please fill out all details before placing an order!")
    }
    else{
        console.log("Success")
        window.location.href="success.html";
    }

});
