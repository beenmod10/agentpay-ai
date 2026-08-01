function sendPayment(){

const wallet=document.getElementById("wallet").value;
const amount=document.getElementById("amount").value;

if(wallet==""||amount==""){
document.getElementById("message").innerHTML="❌ Fill all fields";
return;
}

document.getElementById("message").innerHTML="⏳ AI Agent Processing...";

setTimeout(function(){

document.getElementById("message").innerHTML="✅ "+amount+" USDC Sent Successfully!";

const history=document.getElementById("history");

let item=document.createElement("li");

item.innerHTML="✅ "+amount+" USDC → "+wallet.substring(0,6)+"...";

history.prepend(item);

},2000);

}
