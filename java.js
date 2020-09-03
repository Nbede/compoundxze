
var noOfDays=prompt("No of Days?","5");
var iniInvst=prompt("Initial Investment","16500");
var intrst=prompt("DAily intrest rate","5");

var i;
var totalValue=iniInvst;
text="Initial INVESTMENT-"+iniInvst;
for( i=1;i<=noOfDays;i++){
intrstValue=totalValue*(intrst/100);
totalValue=totalValue*(1 + intrst/100);
text +="<br /> Day "+ i+": " +"tot- "+totalValue+ " interest-"+intrstValue ;
} 
document.getElementById("dataA").innerHTML= text;