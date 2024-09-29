
document.getElementById("book-form").addEventListener("submit",function(event) {
    const nme=document.getElementById("name").value.trim();
    const email=document.getElementById("email").value.trim();
    const phone=document.getElementById("phone").value.trim();
    const model=document.getElementById("model").value;
    const addr=document.getElementById("addr").value.trim();
    if(!nme || !email || !phone || !model || !addr){
        event.preventDefault();
        alert("Please fill out all details before placing an order!")
    }
    else{
        console.log("Success")
        window.location.href="success.html";
    }

});

