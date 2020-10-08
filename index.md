<!DOCTYPE HTML>
<html><head>
<script>
window.onload = function () {

var options = {
	animationEnabled: true,
	theme: "light2",
	title:{
		text: "Actual vs Projected"
	},
	axisX:{
		valueFormatString: "DD MMM YYYY"
	},
	axisY: {
		title: "total",
		suffix: "K",
		minimum: 30
	},
	toolTip:{
		shared:true
	},  
	legend:{
		cursor:"pointer",
		verticalAlign: "bottom",
		horizontalAlign: "left",
		dockInsidePlotArea: true,
		itemclick: toogleDataSeries
	},
	data: [{
		type: "line",
		showInLegend: true,
		name: "Projected",
		markerType: "square",
		xValueFormatString: "DD MMM, YYYY",
		color: "#F08080",
		yValueFormatString: "#,##0K",
		dataPoints: [
			{ x: new Date(2020, 9, 1), y: 63 },
			{ x: new Date(2020, 9, 2), y: 69 },
			{ x: new Date(2020, 9, 3), y: 65 },
			{ x: new Date(2020, 9, 4), y: 70 },
			{ x: new Date(2020, 9, 5), y: 71 },
			{ x: new Date(2020, 9, 6), y: 65 },
			{ x: new Date(2020, 9, 7), y: 73 },
			{ x: new Date(2020, 9, 8), y: 96 },
			{ x: new Date(2020, 9, 9), y: 84 },
			{ x: new Date(2020, 9, 10), y: 85 },
			{ x: new Date(2020, 9, 11), y: 86 },
			{ x: new Date(2020, 9, 12), y: 94 },
			{ x: new Date(2020, 9, 13), y: 97 },
			{ x: new Date(2020, 9, 14), y: 86 },
			{ x: new Date(2020, 9, 15), y: 89 }
		]
	},
	{
		type: "line",
		showInLegend: true,
		name: "Actual",
		lineDashType: "dash",
		yValueFormatString: "#,##0K",
		dataPoints: [
			{ x: new Date(2020, 9, 1), y: 60 },
			{ x: new Date(2020, 9, 2), y: 58 },
			{ x: new Date(2020, 9, 3), y: 71 },
			{ x: new Date(2020, 9, 4), y: 65 },
			{ x: new Date(2020, 9, 5), y: 54 },
			{ x: new Date(2020, 9, 6), y: 74 },
			{ x: new Date(2020, 9, 7), y: 82 },
			{ x: new Date(2020, 9, 8), y: 72 },
			{ x: new Date(2020, 9, 9), y: 95 },
			{ x: new Date(2020, 9, 10), y: 74 },
			{ x: new Date(2020, 9, 11), y: 64 },
			{ x: new Date(2020, 9, 12), y: 84 },
			{ x: new Date(2020, 9, 13), y: 68 },
			{ x: new Date(2020, 9, 14), y: 59 },
			{ x: new Date(2020, 9, 15), y: 94 }
		]
	}]
};
$("#chartContainer").CanvasJSChart(options);

function toogleDataSeries(e){
	if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
		e.dataSeries.visible = false;
	} else{
		e.dataSeries.visible = true;
	}
	e.chart.render();
}

}
</script>
<link href="main.css" rel="stylesheet">
</head>


<body>
 <div>
  <label for="ini_invest">Initial Invest Amount</label>

  <input type="number" id="ini_invest" name="ini_invest"  size="10">
  <label for="intrestRate">Daily Intrest Rate</label>

  <input type="number" id="intrestRate" name="intrestRate"  size="10">
  <label for="noOfDays">No of Days</label>

  <input type="number" id="noOfDays" name="noOfDays"  size="10">
      <div id=dataA>
        
         
      </div>
      <div>
 <table id=dataB style="width:100%;text-align:left;">
        
         </table>      
</div>
 </div>

<div id="chartContainer" style="height: 300px; width: 100%;"></div>
<script src="https://canvasjs.com/assets/script/jquery-1.11.1.min.js"></script>
<script src="https://canvasjs.com/assets/script/jquery.canvasjs.min.js"></script>
<script type="text/javascript">
var noOfDays=prompt("No of Days?","F");
var iniInvst=prompt("Initial Investment");
var intrst=prompt("DAily intrest rate","5");
var finalValue=prompt("Final target Value","F")
var i;
var text1;
var text2;

if(iniInvst=="F"){
iniInvst= finalValue/Math.pow((1 + intrst/100),noOfDays);

}


var totalValue=iniInvst;
text1="Initial INVESTMENT-"+iniInvst;
if(noOfDays=="F"){
var j= finalValue/iniInvst;
noOfDays=Math.log(j)/Math.log(1+intrst/100);
text1 +="Requried no of days= "+noOfDays;
}

if(intrst=="F"){
var j=finalValue/iniInvst;
intrst=Math.pow(j,1/noOfDays)*100-100;
text1 +="Requried intrest rate= "+intrst;
}
if(finalValue=="F"){
finalValue=iniInvst*Math.pow((1 + intrst/100),noOfDays);

}

var cr=finalValue/10000000;
var lac=(finalValue%10000000)/100000;
var ths=(finalValue%10000000)%100000;
cr=Math.floor(cr);
lac=Math.floor(lac);
noOfDays=Math.floor(noOfDays)+1;
text1 +=" Final Returns= " + cr + "cr " +lac +"lac "+ ths;
text2= "<tr><th>.</th><th>.</th><th>.</th></tr><tr><th>@DAY</th><th>Total</th><th>Interest Amt</th></tr>";
document.getElementById("dataA").innerHTML= text1;
for( i=1;i<=noOfDays;i++){
intrstValue=totalValue*(intrst/100);
totalValue=totalValue*(1 + intrst/100);

text2+= "<tr><td>" +i+ "</td><td>"+totalValue+"</td><td>"+intrstValue +"</td></tr> ";
 
 }
document.getElementById("dataB").innerHTML=text2;


</script>
</body>
</html>
