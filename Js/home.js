
const text=["Welcome to CodingSolution. ","A website for programming solutions. ","It is developed and managed by Kishan Sharma. ","For any query please contact! "]
var char=0;
var word=0;
var temp;
function sleep(miliseconds) {
    var currentTime = new Date().getTime();
 
    while (currentTime + miliseconds >= new Date().getTime()) {
    }
 }
function type(){

    if(word==text.length)
    {
        word=0;
    }
    if(char<text[word].length)
    {
        var ele=document.querySelector("#typing");
        temp=text[word];
        ele.innerHTML+=temp.charAt(char);
        char++;
    }
    if(char==text[word].length)
    {
        char=0;
        word++;
        ele.innerHTML="";
        sleep(2000);
    }
    setTimeout(type,50);
}
 addEventListener('load',function(){
    type();
 })
