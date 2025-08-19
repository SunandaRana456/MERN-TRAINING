function validationForm()
{
    let x=document.forms["myForm"] ["fname"].value;
    if(x==0)
    {
        alert("Name must be filled out");
        return false;
    }
}
