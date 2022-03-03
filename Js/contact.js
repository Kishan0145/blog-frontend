
var arr=document.querySelectorAll('.input');
arr.forEach(function(item){
        item.addEventListener("focus",function(){
                var id=item.getAttribute("id");
                if(id=="Name")
                {
                        document.getElementById("namehr").style.borderTop="1.5px solid #007bff";
                }
                else if(id=="Email")
                {
                        document.getElementById("emailhr").style.borderTop="1.5px solid #007bff";
                }
                else if(id=="phone")
                {
                        document.getElementById("phonehr").style.borderTop="1.5px solid #007bff";
                }
                else if (id=="message")
                {
                        document.getElementById("messagehr").style.borderTop="1.5px solid #007bff";
                }
        })
})
var arr=document.querySelectorAll('.input');
arr.forEach(function(item){
        item.addEventListener("blur",function(){
                var id=item.getAttribute("id");
                if(id=="Name")
                {
                        document.getElementById("namehr").style.borderTop="1px solid gray";
                }
                else if(id=="Email")
                {
                        document.getElementById("emailhr").style.borderTop="1px solid gray";
                }
                else if(id=="phone")
                {
                        document.getElementById("phonehr").style.borderTop="1px solid gray";
                }
                else if(id=="message")
                {
                        document.getElementById("messagehr").style.borderTop="1px solid gray";
                }
        })
})

text="Have Question? I Have Answer. "
char=0;
function sleep(miliseconds){
        let date=new Date();
        let cur=date.getTime();
        while(cur+miliseconds>=new Date().getTime())
        {
        }     
}

function type(){
        if(char<text.length)
        {
                var ele=document.querySelector('#typing');
                ele.innerHTML+=text.charAt(char);
                char++;
        }
        if(char==text.length)
        {
                char=0;
                ele.innerHTML="";
                sleep(2000);
        }
        setTimeout(type,50);
}

addEventListener("load",function(){
        type();
})