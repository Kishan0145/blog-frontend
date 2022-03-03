text="This Is What I Do.  "
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