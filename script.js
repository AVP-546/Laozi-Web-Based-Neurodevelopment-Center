var b;
var b1;
var mark=0;
var array=[];
var array1=[];
var t;
for(i=0;i<64;i++)
{
      var ran=Math.ceil(Math.random()*9);
      array.push(ran)
      document.getElementById("outline").innerHTML+="<button class='box' onclick='clickcheck("+i+")' id='box"+i+"'>"+array[i]+"</button>";
      array1.push(0);
      document.getElementById("box"+i).setAttribute("disabled",true);
}
var color={1:"DeepPink",2:"ForestGreen",3:"Red",4:"Yellow",5:"RoyalBlue",6:"Chocolate",7:"DarkViolet",8:"MediumAquaMarine"};
for(i=0;i<64;i++)
  {
    var x=document.getElementById("box"+i).innerHTML;
    y=color[x];
    document.getElementById("box"+i).style.background=y;
  }
document.getElementById("total").style.visibility="hidden";
document.getElementById("lose").style.visibility="hidden";
var gamestart=function()
{
  for(i=0;i<64;i++)
  {
    document.getElementById("box"+i).disabled=false;
  }
  t=setInterval(time, 1000);
  start()
}
var start=function()
{  
  if(array+""==array1+"" && s<=90)
  { 
    mark+=4;
    document.getElementById("score").innerText="Score: "+mark;
    alert("Your Score is :"+mark+" Well try")
    document.getElementById("total").style.visibility="hidden";
    document.location.reload(true);
  }
  else
 {
   check0()
  }
}
var check0=function()
{
  multi()
     if(b===0 || b1===0 || b1===b)
    {
      check0()
    }
    else
   {
       total=b*b1;
       document.getElementById("total").innerText=total;
   }
}
var multi=function()
{
  document.getElementById("start").setAttribute("disabled",true);
  document.getElementById("total").style.visibility="visible";
  a=Math.floor(Math.random()*array.length)
  b=array[a];
  a1=Math.floor(Math.random()*array.length)
  b1=array[a1];
}
var mul=[];
var check1=[];
var ids=[];
var clickcheck=function(i)
  {
    var c=document.getElementById("box"+i).innerText;
    document.getElementById("box"+i).setAttribute("disabled",true);
    check1.push("box"+i);
    ids.push(i);
    mul.push(c);
    if(mul.length==2)
      {
        document.getElementById(check1[1]).disabled=false;
        document.getElementById(check1[0]).disabled=false;
        total1=mul[0]*mul[1]
        mul=[];
        equalcheck()
      }
  }
var equalcheck=function()
{
  if(total===total1)
  {
     array[ids[1]]=0
     array[ids[0]]=0;
     document.getElementById(check1[0]).style.visibility="hidden";
     document.getElementById(check1[1]).style.visibility="hidden";
     mark+=3;
     document.getElementById("score").innerText="Score: "+mark;
     start()
  }
  else
  {
     alert("wrong");
     mark-=3;
     document.getElementById("score").innerText="Score: "+mark;
  }
  check1=[];
  ids=[];
}
var s=0;
var time=function()
{
  s+=1;
  if(s<10)
  {
     document.getElementById("timer").innerText="Time: 0"+s+" sec";
  }
  else if(s>90)
  {
    alert("You lose..!");
    document.location.reload(true);
  }
  else
  {
    document.getElementById("timer").innerHTML="Time: "+s+" sec";
  }
}