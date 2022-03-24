var counter = localStorage.getItem("count") || 0;
var a = document.createElement("div");
a.setAttribute('id','bidy');
var h11 = document.createElement("h1");
h11.innerText= counter;
var divin1 = document.createElement("div");
divin1.setAttribute("id","in");
var btn1 = document.createElement("button");
btn1.innerText = "increment";
btn1.addEventListener("click",increment);
var btn2 = document.createElement("button");
btn2.addEventListener("click",decrement);
btn2.innerText ="decrement";
divin1.append(btn1,btn2);
a.append(h11,divin1);
document.querySelector("body").append(a);

function increment(){
    counter++;
    document.querySelector("h1").innerText = counter;
    localStorage.setItem("count",counter);
}
function decrement(){
    counter--;
    document.querySelector("h1").innerText= counter;
    localStorage.setItem("count",counter);
}