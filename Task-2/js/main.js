var item = document.getElementById("menu-btn");
var check=true;
item.onclick=function(){
    var item2=document.getElementById("leftbar");
    if(check){
        item2.style.left=0;
        item2.style.position="relative";
        check=false;
    }
    else{
        item2.style.left="-104px";
        item2.style.position="absolute"; 
        check=true;
    }
    
}

