const mlgl = document.getElementById("MLG");
const inputvalue = document.getElementById("inputletter");
const manblock = document.getElementById("mancontainer");
const Gw = document.getElementById("gassingword");



const Gword =['k','a','r','m','a'];

const arr = Array.from(manblock.children);


let length = Gword.length;
var spanid = 1;

for(let i =0;i<length;i++){
    const newspan = document.createElement("span");
    newspan.innerHTML = `-`;
    newspan.id = `span${spanid}`;
    Gw.appendChild(newspan);
    spanid++;
}
spanid =1;
var ugw = [];
var k =0;
var failattempt = 0;
var failflag = 1;
var count = 0;

console.log(Gword);

document.getElementById("submitbtn").addEventListener("click",()=>
{   

    mlgl.innerHTML=`<b>${inputvalue.value}<b>`;
    var inputval = inputvalue.value;
    for(let i =0;i<length;i++){
        if(Gword[i] == inputval){
            ugw[i] = inputval;
            console.log(ugw[i]);
            failflag = 0;
            document.getElementById(`span${i+1}`).innerHTML = `<b>${inputval}</b>`;
            spanid++;
        }
    }

    if(Gword.join() == ugw.join()){
        console.log("won");
        document.getElementsByClassName("overlay")[0].style.display = "block";
        document.getElementById("submitbtn").disabled = true;
        return;
    }

    if(failflag == 1){
        if (failattempt >= 10){
            console.log("loss");
            document.getElementsByClassName("overlay")[0].style.display = "block";
            document.getElementById("result").innerText = "YOU LOST";
            document.getElementById("submitbtn").disabled = true;
            return;
        }
        id=arr[failattempt++].id;
        document.getElementById(id).style.display = "block";
        count++;
    }
    failflag = 1;
    inputvalue.value = "";
});
