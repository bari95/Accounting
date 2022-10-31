


var checkerArray=[];
var titles=[];
var w=70;
var childNo=0;
var saverArray=[];
var tagsArray=[];


var colors=["white","teal"];
var colors2=["black","white"];
var border=["black","gold"];
var widt=["120%","100%"];
var margin=["-10%","0"];
var n=0;
var m=0;
var b=0;
var w=0;
var mar=0;


//HELPER FUNCTIONS;

function getString(fullstring,startPoint){
  let tester=/\w{1,30}/;
  let i=startPoint;
  let string="";
  while(i<fullstring.length){
    if(tester.test(String(fullstring[i]))){
      string +=fullstring[i];
      i++;
    }
    else{
      break;
  }}
  return string;
}

function getRandom(str){
  let string="";
  let n=3;
    
   while(n!=0){
     var choice=Math.floor(Math.random() * str.length);
     string +=String(str[choice]);
     --n;
   }
   return string;
  }
  
function createIds(){
  let string="abcdefghijklmnopqrstuvwxwz0123456789";

   let string1=getRandom(string);
   if(checkerArray.length==0){
     checkerArray.push(string1);
     return string1;}
   
   else{
  if(checkerArray.indexOf(string1)==-1){
    checkerArray.push(string1);
      return string1
       }
     }
   }
   
//UTILITY FUNCTIONS

function showNumberOfClicks(id){
  var el=document.getElementById(String(id));
}

function add(id){
  var el=document.getElementById(String(id));
  var test=document.getElementById("test");
  
  
  var parent=el.parentElement;
  var thisNumber=el;
  var total=parent.children[parent.children.length-1];
 total.innerHTML=Number(thisNumber.innerHTML)+Number(total.innerHTML);
 
 test.innerHTML=Number(test.innerHTML)+Number(thisNumber.innerHTML);
  
}

function saver(id){
  var el=document.getElementById(String(id));
  var value=el.innerHTML;
  var arr=new Array(id);
  arr.push(value);
  saverArray.push(arr);
}

function undo(){
  var total1=document.getElementById("test");
if(saverArray.length==0){
  total1.innerHTML=0;
  return;
}
  var lastArray=saverArray.pop();
  var id=lastArray[0];
  var value=lastArray[1];
  
  var lastEl=document.getElementById(String(id));
  
  var parent=lastEl.parentElement;
  var total=parent.children[parent.children.length-1];
 
 total1.innerHTML=Number(total1.innerHTML)-Number(value);
  total.innerHTML=Number(total.innerHTML)-Number(value);
}
  // console.log(total1)
//STYLING FUNCTIONS;

function defect(id){
  var el=document.getElementById(String(id));
 
//  el.style.hover="background:green;"
}

function defect2(id){
  var el=document.getElementById(String(id));
 setTimeout(defect,250,id);
 if(n==colors.length){
   n=0;
 }
 
 if(m==colors2.length){
   m=0;
 }
 
 if(b==border.length){
   b=0;
 }
 
if(w==widt.length){
   w=0;
 }
 
 if(mar==margin.length){
   mar=0;
 }
 
 const styleTag=document.head.appendChild(document.createElement("style"));
styleTag.textContent=`.data{
  background:rgba(39,69,69,0.7);
  font-family:Sans-Serif;
  min-height:80px;
  min-width:70px;
  background:;
  color:gold;
  transition: background 0.25s;
} 
.data:hover{
 width:${widt[w++]};
 margin-left:${margin[mar++]};
 border:2px dotted ${border[b++]};
 background:${colors[n++]};
 font-size:120%;
 color:${colors2[m++]};}`;
}

function navBar(){
  var g=document.getElementById("navB");
  var ctx=g.getContext("2d");
  ctx.fillStyle="white";
 /* ctx.linewidth="3";*/
  ctx.fillRect(5,10,30,3);
  ctx.fillRect(5,18,30,3);
  ctx.fillRect(5,26,30,3)
  ctx.fill();
}
navBar();

function deleteBar(){
  var g=document.getElementById("navC");
  var ctx=g.getContext("2d");
  ctx.fillStyle="white";
 /* ctx.linewidth="3";*/
  ctx.moveTo(3,3);
  ctx.lineTo(23,23);
  ctx.lineTo(25,20);
  ctx.lineTo(2,8);
  
  ctx.fill();
  ctx.moveTo(24,3);
  ctx.lineTo(3,23);
  ctx.lineTo(5,25);
  ctx.lineTo(5,26);
  ctx.fill();
}
deleteBar()
function showSideBar(){
  var sideBar=document.getElementById("sideBar");
  sideBar.style.display="flex";
}

function hideSideBar(){
  var sideBar=document.getElementById("sideBar");
  sideBar.style.display="none";
}

//MAIN FUNCTIONS

//individual data processing;
function row(title){
this.title=title;
  this.tag;
 this.total="<p style='border-top:1px solid gold; width:70px;margin-top:0'>0</p>";
  this.dataStore=[];
  this.closeTag="</div>";
  this.addData=addData;
  this.connectTag=connectTag;
  this.print=print;
  this.print2=print2;
 this.dataStore.push(this.total);
  
}

function addData(value){

  var str=`<button id=\"${createIds()}\" class="data" onclick=" defect2(this.id);add(this.id);saver(this.id);" style="margin-bottom:0;">${value}</button>`;
  
  this.dataStore.unshift(str);
}

function connectTag(){
 for(let i=0; i<this.dataStore.length; i++){
   if(this.dataStore[i]==this.closeTag){
     this.dataStore.splice(i,1);
   }
 }
 
this.tag=`<div id=\"${this.title}\" class="row" width=\"${70}\"   style="border-bottom:1px solid gold;><span class='title2' onclick='addButton(this.id)' id=\"${createIds()}\">${this.title}</span><input type="number" id=\"${createIds()}\" onchange="collectInfo2(this.value,this.id);" placeholder="add value.." style='display:none;max-height:50px;'>`;
 
  this.tag +=String(this.dataStore.join(""));

 return this.tag;
}

function print2(){
  var el=document.getElementById("table");
  el.innerHTML +=this.connectTag()+this.closeTag;
  
}

function print(item){
var id="table"
  var el=document.getElementById(id);
 
 //check if parent does have a child?
  if(el.children.length !=0){
  
    var specific=document.getElementById(String(item));
    if(specific !=null){
    specific.innerHTML=this.connectTag()+this.closeTag;
    }
    else{
      this.print2()
    }
    
  }
  else{
  el.innerHTML +=this.connectTag()+this.closeTag;}
}

function addButton(id){
  var el=document.getElementById(String(id));
 el.nextElementSibling.style.display="block";
}

//grouped data processing;
function container(){
  this.rows=[];
  this.itemsCollector={};
  this.index=0;
  this.addRows=addRows;
  this.find=find;
  this.addValues=addValues;
}

function addRows(value){
 var optimalValue=value.split("");
 optimalValue[0]=optimalValue[0].toUpperCase();
 optimalValue=optimalValue.join("");
  this.rows.push(new row(optimalValue));
  this.itemsCollector[optimalValue]=this.index++;
}

function find(value){
 var optimalValue=value.split("");
 optimalValue[0]=optimalValue[0].toUpperCase();
 optimalValue=optimalValue.join("");
  for(let i=0; i<this.rows.length; i++){
    if(String(optimalValue)==this.rows[i].title){
      return i
    }
  }
}

function addValues(item,value){
  
  var index=this.find(item);
  if(index==undefined){
    alert(`Account \"${item}\" is not yet created.\nSo,to add value in it, create it.`)
  }
  else{counter.rows[index].addData(value);

  counter.rows[index].print(counter.rows[index].title)}
}



var counter=new container();
counter.addRows("Umeme");

counter.addRows("Maji");
counter.addRows("Maharage");
//counter.addValues("Maji",500);



counter.addRows("Unga");


counter.addRows("Mchele");


console.log(counter)

counter.addValues("Umeme",700)
counter.addValues("Maji",600);
counter.addValues("Maji",700);
counter.addValues("Mchele",1700);
counter.addValues("Mchele",1800);
counter.addValues("Unga",500);
counter.addValues("Unga",600)
counter.addValues("Maji",900);


function addItems(){
  var el=document.getElementById("newItems");
  el.style.display="inline";
}

function insertItem(value,id){
  var el=document.getElementById(String(id));
  
 var newRow=new row(value);
  counter.addRows(value);
  newRow.print(String(value));
  
  el.innerHTML="";
}

function collectInfo(value,id){
  var item=String(document.f.item.value);
  var value=Number(document.f.value.value);
  counter.addValues(item,value);
  return false;
}

function collectInfo2(value,id){
  var item=document.getElementById(String(id));
  item=item.previousElementSibling.innerHTML;
  counter.addValues(item,value);
}


