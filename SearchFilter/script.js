const input = document.getElementById("search")

input.addEventListener("keyup", search)

function search(){
    const inputeVal= input.value;
    const li = document.getElementsByTagName("li");

    for(i = 0 ; i < li.length;i++){
        if(li[i].innerHTML.toLowerCase().includes(inputeVal)){
            console.log(li[i])
            li[i].style.display ="";
        }else{
            li[i].style.display ="none";
        }
    }
}


