"use strict";$(".rein").hover(function(){$("body").css("background-color","#AF1105")},function(){$("body").css("background-color","black")}),$(".triss").hover(function(){$("body").css("background-color","#D8D8D8")},function(){$("body").css("background-color","black")}),$(".sodastream").hover(function(){$("body").css("background-color","#9C6AB2")},function(){$("body").css("background-color","black")}),$(".smycka").hover(function(){$("body").css("background-color","#C8A973")},function(){$("body").css("background-color","black")});var TxtType=function(t,e,i){this.toRotate=e,this.el=t,this.loopNum=0,this.period=parseInt(i,10)||2e3,this.txt="",this.tick(),this.isDeleting=!1};TxtType.prototype.tick=function(){var t=this.loopNum%this.toRotate.length,e=this.toRotate[t];this.isDeleting?this.txt=e.substring(0,this.txt.length-1):this.txt=e.substring(0,this.txt.length+1),this.el.innerHTML='<span class="wrap">'+this.txt+"</span>";var i=this,s=200-100*Math.random();this.isDeleting&&(s/=2),this.isDeleting||this.txt!==e?this.isDeleting&&""===this.txt&&(this.isDeleting=!1,this.loopNum++,s=500):(s=this.period,this.isDeleting=!0),setTimeout(function(){i.tick()},s)},window.onload=function(){for(var t=document.getElementsByClassName("typewrite"),e=0;e<t.length;e++){var i=t[e].getAttribute("data-type"),s=t[e].getAttribute("data-period");i&&new TxtType(t[e],JSON.parse(i),s)}};var w=window.matchMedia("(max-width: 425px)"),vid=document.getElementById("vid"),source=document.createElement("source");source.id="hvid",source.setAttribute("type","video/mp4"),vid.appendChild(source),w.matches?(vid.pause(),source.removeAttribute("src"),source.setAttribute("src","images/bomb-high.mp4")):(vid.pause(),source.removeAttribute("src"),source.setAttribute("src","images/bomb-wide.mp4")),vid.load(),vid.play(),window.addEventListener("resize",function(){var t=window.matchMedia("(max-width: 425px)"),e=document.getElementById("vid"),i=document.getElementById("hvid");t.matches?(e.pause(),i.src="images/bomb-high.mp4"):(e.pause(),i.src="images/bomb-wide.mp4"),e.load(),e.play()});