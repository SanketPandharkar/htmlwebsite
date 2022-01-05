let userbtn=document.getElementById("adduserbtn")
userbtn.addEventListener('click',()=>
{
    let btn=confirm("Do you want to save details?")
    if(btn==true)
    {
        alert("User added successfully!")
    }
    
}
)

let pbtn=document.getElementById("profilebtn")
pbtn.addEventListener('click',()=>
{
confirm("Image should be in jpg and png format.Maximum size of 1KB ")
}
)

let cancel=document.getElementById("Cancelbtn")
cancel.addEventListener('click',()=>
{
    let cbtn=confirm("Do you want to cancel")
    if(cbtn==true)
    {
        alert("Cancelled")
    }
}
)

let pro=document.getElementById("profile")
pro.addEventListener('click',()=>
{
confirm("Image should be in jpg and png format.Maximum size of 1KB ")
}
)