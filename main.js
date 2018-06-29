function loadJson(file,callback)
{
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange=function(){
    if(xhr.readyState===4 && xhr.status=="200"){
      callback(xhr.responseText);

    }
  }
  xhr.send(null);
}
loadJson("data.json",function(text){
let data=JSON.parse(text);
console.log(data);
fun_breakfast(data.items);
fun_lunch(data.items1);
fun_snack(data.items2);
fun_dinner(data.items3);
});

var div1=document.getElementById("child1");
function fun_breakfast(edu){
  var h2=document.createElement("h2");
  h2.textContent="BREAKFAST ITEMS";
  div1.appendChild(h2);
  var hr=document.createElement("hr");
  div1.appendChild(hr);
  var p=document.createElement("p");
  p.textContent="A meal eaten in the morning, the first of the day."
  div1.appendChild(p);
  var ul=document.createElement("ul");
  for(var i=0;i<edu.length;i++){
    var list=document.createElement("li");
    list.textContent=edu[i].name;
    ul.appendChild(list);
    div1.appendChild(ul);
  }
}

var div2=document.getElementById("child2");
function fun_lunch(edu1){
  var h2=document.createElement("h2");
  h2.textContent="LUNCH ITEMS";
  div2.appendChild(h2);
  var hr=document.createElement("hr");
  div2.appendChild(hr);
  var p=document.createElement("p");
  p.textContent="a meal eaten in the middle of the day, typically one that is lighter or less formal than an evening meal."
  div2.appendChild(p);
  var ul=document.createElement("ul");
  for(var i=0;i<edu1.length;i++){
    var list=document.createElement("li");
    list.textContent=edu1[i].name;
    ul.appendChild(list);
    div2.appendChild(ul);
  }
}

var div3=document.getElementById("child3");
function fun_snack(edu2){
  var h2=document.createElement("h2");
  h2.textContent="SNACK ITEMS";
  div3.appendChild(h2);
  var hr=document.createElement("hr");
  div3.appendChild(hr);
  var p=document.createElement("p");
  p.textContent="a small amount of food eaten between meals."
  div3.appendChild(p);
  var ul=document.createElement("ul");
  for(var i=0;i<edu2.length;i++){
    var list=document.createElement("li");
    list.textContent=edu2[i].name;
    ul.appendChild(list);
    div3.appendChild(ul);
  }
}

var div4=document.getElementById("child4");
function fun_dinner(edu3){
  var h2=document.createElement("h2");
  h2.textContent="DINNER ITEMS";
  div4.appendChild(h2);
  var hr=document.createElement("hr");
  div4.appendChild(hr);
  var p=document.createElement("p");
  p.textContent="the main meal of the day, taken either around midday or in the evening."
  div4.appendChild(p);
  var ul=document.createElement("ul");
  for(var i=0;i<edu3.length;i++){
    var list=document.createElement("li");
    list.textContent=edu3[i].name;
    ul.appendChild(list);
    div4.appendChild(ul);
  }
}
