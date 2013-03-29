/* Because I am lazy this should fix the depreciation of $.browser in jQuery 1.8+ */
/* Real fix would be to update Flot to latest version */
/*Browser detection patch*/
jQuery.browser = {};
jQuery.browser.mozilla = /mozilla/.test(navigator.userAgent.toLowerCase()) && !/webkit/.test(navigator.userAgent.toLowerCase());
jQuery.browser.webkit = /webkit/.test(navigator.userAgent.toLowerCase());
jQuery.browser.opera = /opera/.test(navigator.userAgent.toLowerCase());
jQuery.browser.msie = /msie/.test(navigator.userAgent.toLowerCase());


(function(){jQuery.color={};jQuery.color.make=function(G,H,J,I){var A={};A.r=G||0;A.g=H||0;A.b=J||0;A.a=I!=null?I:1;A.add=function(C,D){for(var E=0;E<C.length;++E){A[C.charAt(E)]+=D}return A.normalize()};A.scale=function(C,D){for(var E=0;E<C.length;++E){A[C.charAt(E)]*=D}return A.normalize()};A.toString=function(){if(A.a>=1){return"rgb("+[A.r,A.g,A.b].join(",")+")"}else{return"rgba("+[A.r,A.g,A.b,A.a].join(",")+")"}};A.normalize=function(){function C(E,D,F){return D<E?E:(D>F?F:D)}A.r=C(0,parseInt(A.r),255);A.g=C(0,parseInt(A.g),255);A.b=C(0,parseInt(A.b),255);A.a=C(0,A.a,1);return A};A.clone=function(){return jQuery.color.make(A.r,A.b,A.g,A.a)};return A.normalize()};jQuery.color.extract=function(E,F){var A;do{A=E.css(F).toLowerCase();if(A!=""&&A!="transparent"){break}E=E.parent()}while(!jQuery.nodeName(E.get(0),"body"));if(A=="rgba(0, 0, 0, 0)"){A="transparent"}return jQuery.color.parse(A)};jQuery.color.parse=function(A){var F,H=jQuery.color.make;if(F=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(A)){return H(parseInt(F[1],10),parseInt(F[2],10),parseInt(F[3],10))}if(F=/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(A)){return H(parseInt(F[1],10),parseInt(F[2],10),parseInt(F[3],10),parseFloat(F[4]))}if(F=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(A)){return H(parseFloat(F[1])*2.55,parseFloat(F[2])*2.55,parseFloat(F[3])*2.55)}if(F=/rgba\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(A)){return H(parseFloat(F[1])*2.55,parseFloat(F[2])*2.55,parseFloat(F[3])*2.55,parseFloat(F[4]))}if(F=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(A)){return H(parseInt(F[1],16),parseInt(F[2],16),parseInt(F[3],16))}if(F=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(A)){return H(parseInt(F[1]+F[1],16),parseInt(F[2]+F[2],16),parseInt(F[3]+F[3],16))}var G=jQuery.trim(A).toLowerCase();if(G=="transparent"){return H(255,255,255,0)}else{F=B[G];return H(F[0],F[1],F[2])}};var B={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0]}})();(function(C){function B(l,W,X,E){var O=[],g={colors:["#3f68ee","#f29f46","#000","#000","#000"],legend:{show:true,noColumns:1,labelFormatter:null,labelBoxBorderColor:"#ccc",container:null,position:"ne",margin:5,backgroundColor:null,backgroundOpacity:0.85},xaxis:{mode:null,transform:null,inverseTransform:null,min:null,max:null,autoscaleMargin:null,ticks:null,tickFormatter:null,labelWidth:null,labelHeight:null,tickDecimals:null,tickSize:null,minTickSize:null,monthNames:null,timeformat:null,twelveHourClock:false},yaxis:{autoscaleMargin:0.02},x2axis:{autoscaleMargin:null},y2axis:{autoscaleMargin:0.02},series:{points:{show:false,radius:3,lineWidth:2,fill:true,fillColor:"#ffffff"},lines:{lineWidth:2,fill:false,fillColor:null,steps:false},bars:{show:false,lineWidth:2,barWidth:1,fill:true,fillColor:null,align:"left",horizontal:false},shadowSize:3},grid:{show:true,aboveData:false,color:"#545454",backgroundColor:null,tickColor:"rgba(0,0,0,0.15)",labelMargin:5,borderWidth:2,borderColor:null,markings:null,markingsColor:"#f4f4f4",markingsLineWidth:2,clickable:false,hoverable:false,autoHighlight:true,mouseActiveRadius:10},hooks:{}},P=null,AC=null,AD=null,Y=null,AJ=null,s={xaxis:{},yaxis:{},x2axis:{},y2axis:{}},e={left:0,right:0,top:0,bottom:0},y=0,Q=0,I=0,t=0,L={processOptions:[],processRawData:[],processDatapoints:[],draw:[],bindEvents:[],drawOverlay:[]},G=this;G.setData=f;G.setupGrid=k;G.draw=AH;G.getPlaceholder=function(){return l};G.getCanvas=function(){return P};G.getPlotOffset=function(){return e};G.width=function(){return I};G.height=function(){return t};G.offset=function(){var AK=AD.offset();AK.left+=e.left;AK.top+=e.top;return AK};G.getData=function(){return O};G.getAxes=function(){return s};G.getOptions=function(){return g};G.highlight=AE;G.unhighlight=x;G.triggerRedrawOverlay=q;G.pointOffset=function(AK){return{left:parseInt(T(AK,"xaxis").p2c(+AK.x)+e.left),top:parseInt(T(AK,"yaxis").p2c(+AK.y)+e.top)}};G.hooks=L;b(G);r(X);c();f(W);k();AH();AG();function Z(AM,AK){AK=[G].concat(AK);for(var AL=0;AL<AM.length;++AL){AM[AL].apply(this,AK)}}function b(){for(var AK=0;AK<E.length;++AK){var AL=E[AK];AL.init(G);if(AL.options){C.extend(true,g,AL.options)}}}function r(AK){C.extend(true,g,AK);if(g.grid.borderColor==null){g.grid.borderColor=g.grid.color}if(g.xaxis.noTicks&&g.xaxis.ticks==null){g.xaxis.ticks=g.xaxis.noTicks}if(g.yaxis.noTicks&&g.yaxis.ticks==null){g.yaxis.ticks=g.yaxis.noTicks}if(g.grid.coloredAreas){g.grid.markings=g.grid.coloredAreas}if(g.grid.coloredAreasColor){g.grid.markingsColor=g.grid.coloredAreasColor}if(g.lines){C.extend(true,g.series.lines,g.lines)}if(g.points){C.extend(true,g.series.points,g.points)}if(g.bars){C.extend(true,g.series.bars,g.bars)}if(g.shadowSize){g.series.shadowSize=g.shadowSize}for(var AL in L){if(g.hooks[AL]&&g.hooks[AL].length){L[AL]=L[AL].concat(g.hooks[AL])}}Z(L.processOptions,[g])}function f(AK){O=M(AK);U();m()}function M(AN){var AL=[];for(var AK=0;AK<AN.length;++AK){var AM=C.extend(true,{},g.series);if(AN[AK].data){AM.data=AN[AK].data;delete AN[AK].data;C.extend(true,AM,AN[AK]);AN[AK].data=AM.data}else{AM.data=AN[AK]}AL.push(AM)}return AL}function T(AM,AK){var AL=AM[AK];if(!AL||AL==1){return s[AK]}if(typeof AL=="number"){return s[AK.charAt(0)+AL+AK.slice(1)]}return AL}function U(){var AP;var AV=O.length,AK=[],AN=[];for(AP=0;AP<O.length;++AP){var AS=O[AP].color;if(AS!=null){--AV;if(typeof AS=="number"){AN.push(AS)}else{AK.push(C.color.parse(O[AP].color))}}}for(AP=0;AP<AN.length;++AP){AV=Math.max(AV,AN[AP]+1)}var AL=[],AO=0;AP=0;while(AL.length<AV){var AR;if(g.colors.length==AP){AR=C.color.make(100,100,100)}else{AR=C.color.parse(g.colors[AP])}var AM=AO%2==1?-1:1;AR.scale("rgb",1+AM*Math.ceil(AO/2)*0.2);AL.push(AR);++AP;if(AP>=g.colors.length){AP=0;++AO}}var AQ=0,AW;for(AP=0;AP<O.length;++AP){AW=O[AP];if(AW.color==null){AW.color=AL[AQ].toString();++AQ}else{if(typeof AW.color=="number"){AW.color=AL[AW.color].toString()}}if(AW.lines.show==null){var AU,AT=true;for(AU in AW){if(AW[AU].show){AT=false;break}}if(AT){AW.lines.show=true}}AW.xaxis=T(AW,"xaxis");AW.yaxis=T(AW,"yaxis")}}function m(){var AW=Number.POSITIVE_INFINITY,AQ=Number.NEGATIVE_INFINITY,Ac,Aa,AZ,AV,AL,AR,Ab,AX,AP,AO,AK,Ai,Af,AT;for(AK in s){s[AK].datamin=AW;s[AK].datamax=AQ;s[AK].used=false}function AN(Al,Ak,Aj){if(Ak<Al.datamin){Al.datamin=Ak}if(Aj>Al.datamax){Al.datamax=Aj}}for(Ac=0;Ac<O.length;++Ac){AR=O[Ac];AR.datapoints={points:[]};Z(L.processRawData,[AR,AR.data,AR.datapoints])}for(Ac=0;Ac<O.length;++Ac){AR=O[Ac];var Ah=AR.data,Ae=AR.datapoints.format;if(!Ae){Ae=[];Ae.push({x:true,number:true,required:true});Ae.push({y:true,number:true,required:true});if(AR.bars.show){Ae.push({y:true,number:true,required:false,defaultValue:0})}AR.datapoints.format=Ae}if(AR.datapoints.pointsize!=null){continue}if(AR.datapoints.pointsize==null){AR.datapoints.pointsize=Ae.length}AX=AR.datapoints.pointsize;Ab=AR.datapoints.points;insertSteps=AR.lines.show&&AR.lines.steps;AR.xaxis.used=AR.yaxis.used=true;for(Aa=AZ=0;Aa<Ah.length;++Aa,AZ+=AX){AT=Ah[Aa];var AM=AT==null;if(!AM){for(AV=0;AV<AX;++AV){Ai=AT[AV];Af=Ae[AV];if(Af){if(Af.number&&Ai!=null){Ai=+Ai;if(isNaN(Ai)){Ai=null}}if(Ai==null){if(Af.required){AM=true}if(Af.defaultValue!=null){Ai=Af.defaultValue}}}Ab[AZ+AV]=Ai}}if(AM){for(AV=0;AV<AX;++AV){Ai=Ab[AZ+AV];if(Ai!=null){Af=Ae[AV];if(Af.x){AN(AR.xaxis,Ai,Ai)}if(Af.y){AN(AR.yaxis,Ai,Ai)}}Ab[AZ+AV]=null}}else{if(insertSteps&&AZ>0&&Ab[AZ-AX]!=null&&Ab[AZ-AX]!=Ab[AZ]&&Ab[AZ-AX+1]!=Ab[AZ+1]){for(AV=0;AV<AX;++AV){Ab[AZ+AX+AV]=Ab[AZ+AV]}Ab[AZ+1]=Ab[AZ-AX+1];AZ+=AX}}}}for(Ac=0;Ac<O.length;++Ac){AR=O[Ac];Z(L.processDatapoints,[AR,AR.datapoints])}for(Ac=0;Ac<O.length;++Ac){AR=O[Ac];Ab=AR.datapoints.points,AX=AR.datapoints.pointsize;var AS=AW,AY=AW,AU=AQ,Ad=AQ;for(Aa=0;Aa<Ab.length;Aa+=AX){if(Ab[Aa]==null){continue}for(AV=0;AV<AX;++AV){Ai=Ab[Aa+AV];Af=Ae[AV];if(!Af){continue}if(Af.x){if(Ai<AS){AS=Ai}if(Ai>AU){AU=Ai}}if(Af.y){if(Ai<AY){AY=Ai}if(Ai>Ad){Ad=Ai}}}}if(AR.bars.show){var Ag=AR.bars.align=="left"?0:-AR.bars.barWidth/2;if(AR.bars.horizontal){AY+=Ag;Ad+=Ag+AR.bars.barWidth}else{AS+=Ag;AU+=Ag+AR.bars.barWidth}}AN(AR.xaxis,AS,AU);AN(AR.yaxis,AY,Ad)}for(AK in s){if(s[AK].datamin==AW){s[AK].datamin=null}if(s[AK].datamax==AQ){s[AK].datamax=null}}}function c(){function AK(AM,AL){var AN=document.createElement("canvas");AN.width=AM;AN.height=AL;if(C.browser.msie){AN=window.G_vmlCanvasManager.initElement(AN)}return AN}y=l.width();Q=l.height();l.html("");if(l.css("position")=="static"){l.css("position","relative")}if(y<=0||Q<=0){throw"Invalid dimensions for plot, width = "+y+", height = "+Q}if(C.browser.msie){window.G_vmlCanvasManager.init_(document)}P=C(AK(y,Q)).appendTo(l).get(0);Y=P.getContext("2d");AC=C(AK(y,Q)).css({position:"absolute",left:0,top:0}).appendTo(l).get(0);AJ=AC.getContext("2d");AJ.stroke()}function AG(){AD=C([AC,P]);if(g.grid.hoverable){AD.mousemove(D)}if(g.grid.clickable){AD.click(d)}Z(L.bindEvents,[AD])}function k(){function AL(AT,AU){function AP(AV){return AV}var AS,AO,AQ=AU.transform||AP,AR=AU.inverseTransform;if(AT==s.xaxis||AT==s.x2axis){AS=AT.scale=I/(AQ(AT.max)-AQ(AT.min));AO=AQ(AT.min);if(AQ==AP){AT.p2c=function(AV){return(AV-AO)*AS}}else{AT.p2c=function(AV){return(AQ(AV)-AO)*AS}}if(!AR){AT.c2p=function(AV){return AO+AV/AS}}else{AT.c2p=function(AV){return AR(AO+AV/AS)}}}else{AS=AT.scale=t/(AQ(AT.max)-AQ(AT.min));AO=AQ(AT.max);if(AQ==AP){AT.p2c=function(AV){return(AO-AV)*AS}}else{AT.p2c=function(AV){return(AO-AQ(AV))*AS}}if(!AR){AT.c2p=function(AV){return AO-AV/AS}}else{AT.c2p=function(AV){return AR(AO-AV/AS)}}}}function AN(AR,AT){var AQ,AS=[],AP;AR.labelWidth=AT.labelWidth;AR.labelHeight=AT.labelHeight;if(AR==s.xaxis||AR==s.x2axis){if(AR.labelWidth==null){AR.labelWidth=y/(AR.ticks.length>0?AR.ticks.length:1)}if(AR.labelHeight==null){AS=[];for(AQ=0;AQ<AR.ticks.length;++AQ){AP=AR.ticks[AQ].label;if(AP){AS.push('<div class="tickLabel" style="float:left;width:'+AR.labelWidth+'px">'+AP+"</div>")}}if(AS.length>0){var AO=C('<div style="position:absolute;top:-10000px;width:10000px;font-size:smaller">'+AS.join("")+'<div style="clear:left"></div></div>').appendTo(l);AR.labelHeight=AO.height();AO.remove()}}}else{if(AR.labelWidth==null||AR.labelHeight==null){for(AQ=0;AQ<AR.ticks.length;++AQ){AP=AR.ticks[AQ].label;if(AP){AS.push('<div class="tickLabel">'+AP+"</div>")}}if(AS.length>0){var AO=C('<div style="position:absolute;top:-10000px;font-size:smaller">'+AS.join("")+"</div>").appendTo(l);if(AR.labelWidth==null){AR.labelWidth=AO.width()}if(AR.labelHeight==null){AR.labelHeight=AO.find("div").height()}AO.remove()}}}if(AR.labelWidth==null){AR.labelWidth=0}if(AR.labelHeight==null){AR.labelHeight=0}}function AM(){var AP=g.grid.borderWidth;for(i=0;i<O.length;++i){AP=Math.max(AP,2*(O[i].points.radius+O[i].points.lineWidth/2))}e.left=e.right=e.top=e.bottom=AP;var AO=g.grid.labelMargin+g.grid.borderWidth;if(s.xaxis.labelHeight>0){e.bottom=Math.max(AP,s.xaxis.labelHeight+AO)}if(s.yaxis.labelWidth>0){e.left=Math.max(AP,s.yaxis.labelWidth+AO)}if(s.x2axis.labelHeight>0){e.top=Math.max(AP,s.x2axis.labelHeight+AO)}if(s.y2axis.labelWidth>0){e.right=Math.max(AP,s.y2axis.labelWidth+AO)}I=y-e.left-e.right;t=Q-e.bottom-e.top}var AK;for(AK in s){K(s[AK],g[AK])}if(g.grid.show){for(AK in s){F(s[AK],g[AK]);p(s[AK],g[AK]);AN(s[AK],g[AK])}AM()}else{e.left=e.right=e.top=e.bottom=0;I=y;t=Q}for(AK in s){AL(s[AK],g[AK])}if(g.grid.show){h()}AI()}function K(AN,AQ){var AM=+(AQ.min!=null?AQ.min:AN.datamin),AK=+(AQ.max!=null?AQ.max:AN.datamax),AP=AK-AM;if(AP==0){var AL=AK==0?1:0.01;if(AQ.min==null){AM-=AL}if(AQ.max==null||AQ.min!=null){AK+=AL}}else{var AO=AQ.autoscaleMargin;if(AO!=null){if(AQ.min==null){AM-=AP*AO;if(AM<0&&AN.datamin!=null&&AN.datamin>=0){AM=0}}if(AQ.max==null){AK+=AP*AO;if(AK>0&&AN.datamax!=null&&AN.datamax<=0){AK=0}}}}AN.min=AM;AN.max=AK}function F(AP,AS){var AO;if(typeof AS.ticks=="number"&&AS.ticks>0){AO=AS.ticks}else{if(AP==s.xaxis||AP==s.x2axis){AO=0.3*Math.sqrt(y)}else{AO=0.3*Math.sqrt(Q)}}var AX=(AP.max-AP.min)/AO,AZ,AT,AV,AW,AR,AM,AL;if(AS.mode=="time"){var AU={second:1000,minute:60*1000,hour:60*60*1000,day:24*60*60*1000,month:30*24*60*60*1000,year:365.2425*24*60*60*1000};var AY=[[1,"second"],[2,"second"],[5,"second"],[10,"second"],[30,"second"],[1,"minute"],[2,"minute"],[5,"minute"],[10,"minute"],[30,"minute"],[1,"hour"],[2,"hour"],[4,"hour"],[8,"hour"],[12,"hour"],[1,"day"],[2,"day"],[3,"day"],[0.25,"month"],[0.5,"month"],[1,"month"],[2,"month"],[3,"month"],[6,"month"],[1,"year"]];var AN=0;if(AS.minTickSize!=null){if(typeof AS.tickSize=="number"){AN=AS.tickSize}else{AN=AS.minTickSize[0]*AU[AS.minTickSize[1]]}}for(AR=0;AR<AY.length-1;++AR){if(AX<(AY[AR][0]*AU[AY[AR][1]]+AY[AR+1][0]*AU[AY[AR+1][1]])/2&&AY[AR][0]*AU[AY[AR][1]]>=AN){break}}AZ=AY[AR][0];AV=AY[AR][1];if(AV=="year"){AM=Math.pow(10,Math.floor(Math.log(AX/AU.year)/Math.LN10));AL=(AX/AU.year)/AM;if(AL<1.5){AZ=1}else{if(AL<3){AZ=2}else{if(AL<7.5){AZ=5}else{AZ=10}}}AZ*=AM}if(AS.tickSize){AZ=AS.tickSize[0];AV=AS.tickSize[1]}AT=function(Ac){var Ah=[],Af=Ac.tickSize[0],Ai=Ac.tickSize[1],Ag=new Date(Ac.min);var Ab=Af*AU[Ai];if(Ai=="second"){Ag.setUTCSeconds(A(Ag.getUTCSeconds(),Af))}if(Ai=="minute"){Ag.setUTCMinutes(A(Ag.getUTCMinutes(),Af))}if(Ai=="hour"){Ag.setUTCHours(A(Ag.getUTCHours(),Af))}if(Ai=="month"){Ag.setUTCMonth(A(Ag.getUTCMonth(),Af))}if(Ai=="year"){Ag.setUTCFullYear(A(Ag.getUTCFullYear(),Af))}Ag.setUTCMilliseconds(0);if(Ab>=AU.minute){Ag.setUTCSeconds(0)}if(Ab>=AU.hour){Ag.setUTCMinutes(0)}if(Ab>=AU.day){Ag.setUTCHours(0)}if(Ab>=AU.day*4){Ag.setUTCDate(1)}if(Ab>=AU.year){Ag.setUTCMonth(0)}var Ak=0,Aj=Number.NaN,Ad;do{Ad=Aj;Aj=Ag.getTime();Ah.push({v:Aj,label:Ac.tickFormatter(Aj,Ac)});if(Ai=="month"){if(Af<1){Ag.setUTCDate(1);var Aa=Ag.getTime();Ag.setUTCMonth(Ag.getUTCMonth()+1);var Ae=Ag.getTime();Ag.setTime(Aj+Ak*AU.hour+(Ae-Aa)*Af);Ak=Ag.getUTCHours();Ag.setUTCHours(0)}else{Ag.setUTCMonth(Ag.getUTCMonth()+Af)}}else{if(Ai=="year"){Ag.setUTCFullYear(Ag.getUTCFullYear()+Af)}else{Ag.setTime(Aj+Ab)}}}while(Aj<Ac.max&&Aj!=Ad);return Ah};AW=function(Aa,Ad){var Af=new Date(Aa);if(AS.timeformat!=null){return C.plot.formatDate(Af,AS.timeformat,AS.monthNames)}var Ab=Ad.tickSize[0]*AU[Ad.tickSize[1]];var Ac=Ad.max-Ad.min;var Ae=(AS.twelveHourClock)?" %p":"";if(Ab<AU.minute){fmt="%h:%M:%S"+Ae}else{if(Ab<AU.day){if(Ac<2*AU.day){fmt="%h:%M"+Ae}else{fmt="%b %d %h:%M"+Ae}}else{if(Ab<AU.month){fmt="%b %d"}else{if(Ab<AU.year){if(Ac<AU.year){fmt="%b"}else{fmt="%b %y"}}else{fmt="%y"}}}}return C.plot.formatDate(Af,fmt,AS.monthNames)}}else{var AK=AS.tickDecimals;var AQ=-Math.floor(Math.log(AX)/Math.LN10);if(AK!=null&&AQ>AK){AQ=AK}AM=Math.pow(10,-AQ);AL=AX/AM;if(AL<1.5){AZ=1}else{if(AL<3){AZ=2;if(AL>2.25&&(AK==null||AQ+1<=AK)){AZ=2.5;++AQ}}else{if(AL<7.5){AZ=5}else{AZ=10}}}AZ*=AM;if(AS.minTickSize!=null&&AZ<AS.minTickSize){AZ=AS.minTickSize}if(AS.tickSize!=null){AZ=AS.tickSize}AP.tickDecimals=Math.max(0,(AK!=null)?AK:AQ);AT=function(Ac){var Ae=[];var Af=A(Ac.min,Ac.tickSize),Ab=0,Aa=Number.NaN,Ad;do{Ad=Aa;Aa=Af+Ab*Ac.tickSize;Ae.push({v:Aa,label:Ac.tickFormatter(Aa,Ac)});++Ab}while(Aa<Ac.max&&Aa!=Ad);return Ae};AW=function(Aa,Ab){return Aa.toFixed(Ab.tickDecimals)}}AP.tickSize=AV?[AZ,AV]:AZ;AP.tickGenerator=AT;if(C.isFunction(AS.tickFormatter)){AP.tickFormatter=function(Aa,Ab){return""+AS.tickFormatter(Aa,Ab)}}else{AP.tickFormatter=AW}}function p(AO,AQ){AO.ticks=[];if(!AO.used){return }if(AQ.ticks==null){AO.ticks=AO.tickGenerator(AO)}else{if(typeof AQ.ticks=="number"){if(AQ.ticks>0){AO.ticks=AO.tickGenerator(AO)}}else{if(AQ.ticks){var AP=AQ.ticks;if(C.isFunction(AP)){AP=AP({min:AO.min,max:AO.max})}var AN,AK;for(AN=0;AN<AP.length;++AN){var AL=null;var AM=AP[AN];if(typeof AM=="object"){AK=AM[0];if(AM.length>1){AL=AM[1]}}else{AK=AM}if(AL==null){AL=AO.tickFormatter(AK,AO)}AO.ticks[AN]={v:AK,label:AL}}}}}if(AQ.autoscaleMargin!=null&&AO.ticks.length>0){if(AQ.min==null){AO.min=Math.min(AO.min,AO.ticks[0].v)}if(AQ.max==null&&AO.ticks.length>1){AO.max=Math.max(AO.max,AO.ticks[AO.ticks.length-1].v)}}}function AH(){Y.clearRect(0,0,y,Q);var AL=g.grid;if(AL.show&&!AL.aboveData){S()}for(var AK=0;AK<O.length;++AK){AA(O[AK])}Z(L.draw,[Y]);if(AL.show&&AL.aboveData){S()}}function N(AL,AR){var AO=AR+"axis",AK=AR+"2axis",AN,AQ,AP,AM;if(AL[AO]){AN=s[AO];AQ=AL[AO].from;AP=AL[AO].to}else{if(AL[AK]){AN=s[AK];AQ=AL[AK].from;AP=AL[AK].to}else{AN=s[AO];AQ=AL[AR+"1"];AP=AL[AR+"2"]}}if(AQ!=null&&AP!=null&&AQ>AP){return{from:AP,to:AQ,axis:AN}}return{from:AQ,to:AP,axis:AN}}function S(){var AO;Y.save();Y.translate(e.left,e.top);if(g.grid.backgroundColor){Y.fillStyle=R(g.grid.backgroundColor,t,0,"rgba(255, 255, 255, 0)");Y.fillRect(0,0,I,t)}var AL=g.grid.markings;if(AL){if(C.isFunction(AL)){AL=AL({xmin:s.xaxis.min,xmax:s.xaxis.max,ymin:s.yaxis.min,ymax:s.yaxis.max,xaxis:s.xaxis,yaxis:s.yaxis,x2axis:s.x2axis,y2axis:s.y2axis})}for(AO=0;AO<AL.length;++AO){var AK=AL[AO],AQ=N(AK,"x"),AN=N(AK,"y");if(AQ.from==null){AQ.from=AQ.axis.min}if(AQ.to==null){AQ.to=AQ.axis.max}if(AN.from==null){AN.from=AN.axis.min}if(AN.to==null){AN.to=AN.axis.max}if(AQ.to<AQ.axis.min||AQ.from>AQ.axis.max||AN.to<AN.axis.min||AN.from>AN.axis.max){continue}AQ.from=Math.max(AQ.from,AQ.axis.min);AQ.to=Math.min(AQ.to,AQ.axis.max);AN.from=Math.max(AN.from,AN.axis.min);AN.to=Math.min(AN.to,AN.axis.max);if(AQ.from==AQ.to&&AN.from==AN.to){continue}AQ.from=AQ.axis.p2c(AQ.from);AQ.to=AQ.axis.p2c(AQ.to);AN.from=AN.axis.p2c(AN.from);AN.to=AN.axis.p2c(AN.to);if(AQ.from==AQ.to||AN.from==AN.to){Y.beginPath();Y.strokeStyle=AK.color||g.grid.markingsColor;Y.lineWidth=AK.lineWidth||g.grid.markingsLineWidth;Y.moveTo(AQ.from,AN.from);Y.lineTo(AQ.to,AN.to);Y.stroke()}else{Y.fillStyle=AK.color||g.grid.markingsColor;Y.fillRect(AQ.from,AN.to,AQ.to-AQ.from,AN.from-AN.to)}}}Y.lineWidth=1;Y.strokeStyle=g.grid.tickColor;Y.beginPath();var AM,AP=s.xaxis;for(AO=0;AO<AP.ticks.length;++AO){AM=AP.ticks[AO].v;if(AM<=AP.min||AM>=s.xaxis.max){continue}Y.moveTo(Math.floor(AP.p2c(AM))+Y.lineWidth/2,0);Y.lineTo(Math.floor(AP.p2c(AM))+Y.lineWidth/2,t)}AP=s.yaxis;for(AO=0;AO<AP.ticks.length;++AO){AM=AP.ticks[AO].v;if(AM<=AP.min||AM>=AP.max){continue}Y.moveTo(0,Math.floor(AP.p2c(AM))+Y.lineWidth/2);Y.lineTo(I,Math.floor(AP.p2c(AM))+Y.lineWidth/2)}AP=s.x2axis;for(AO=0;AO<AP.ticks.length;++AO){AM=AP.ticks[AO].v;if(AM<=AP.min||AM>=AP.max){continue}Y.moveTo(Math.floor(AP.p2c(AM))+Y.lineWidth/2,-5);Y.lineTo(Math.floor(AP.p2c(AM))+Y.lineWidth/2,5)}AP=s.y2axis;for(AO=0;AO<AP.ticks.length;++AO){AM=AP.ticks[AO].v;if(AM<=AP.min||AM>=AP.max){continue}Y.moveTo(I-5,Math.floor(AP.p2c(AM))+Y.lineWidth/2);Y.lineTo(I+5,Math.floor(AP.p2c(AM))+Y.lineWidth/2)}Y.stroke();if(g.grid.borderWidth){var AR=g.grid.borderWidth;Y.lineWidth=AR;Y.strokeStyle=g.grid.borderColor;Y.strokeRect(-AR/2,-AR/2,I+AR,t+AR)}Y.restore()}function h(){l.find(".tickLabels").remove();var AK=['<div class="tickLabels" style="font-size:smaller;color:'+g.grid.color+'">'];function AM(AP,AQ){for(var AO=0;AO<AP.ticks.length;++AO){var AN=AP.ticks[AO];if(!AN.label||AN.v<AP.min||AN.v>AP.max){continue}AK.push(AQ(AN,AP))}}var AL=g.grid.labelMargin+g.grid.borderWidth;AM(s.xaxis,function(AN,AO){return'<div style="position:absolute;top:'+(e.top+t+AL)+"px;left:"+Math.round(e.left+AO.p2c(AN.v)-AO.labelWidth/2)+"px;width:"+AO.labelWidth+'px;text-align:center" class="tickLabel">'+AN.label+"</div>"});AM(s.yaxis,function(AN,AO){return'<div style="position:absolute;top:'+Math.round(e.top+AO.p2c(AN.v)-AO.labelHeight/2)+"px;right:"+(e.right+I+AL)+"px;width:"+AO.labelWidth+'px;text-align:right" class="tickLabel">'+AN.label+"</div>"});AM(s.x2axis,function(AN,AO){return'<div style="position:absolute;bottom:'+(e.bottom+t+AL)+"px;left:"+Math.round(e.left+AO.p2c(AN.v)-AO.labelWidth/2)+"px;width:"+AO.labelWidth+'px;text-align:center" class="tickLabel">'+AN.label+"</div>"});AM(s.y2axis,function(AN,AO){return'<div style="position:absolute;top:'+Math.round(e.top+AO.p2c(AN.v)-AO.labelHeight/2)+"px;left:"+(e.left+I+AL)+"px;width:"+AO.labelWidth+'px;text-align:left" class="tickLabel">'+AN.label+"</div>"});AK.push("</div>");l.append(AK.join(""))}function AA(AK){if(AK.lines.show){a(AK)}if(AK.bars.show){n(AK)}if(AK.points.show){o(AK)}}function a(AN){function AM(AY,AZ,AR,Ad,Ac){var Ae=AY.points,AS=AY.pointsize,AW=null,AV=null;Y.beginPath();for(var AX=AS;AX<Ae.length;AX+=AS){var AU=Ae[AX-AS],Ab=Ae[AX-AS+1],AT=Ae[AX],Aa=Ae[AX+1];if(AU==null||AT==null){continue}if(Ab<=Aa&&Ab<Ac.min){if(Aa<Ac.min){continue}AU=(Ac.min-Ab)/(Aa-Ab)*(AT-AU)+AU;Ab=Ac.min}else{if(Aa<=Ab&&Aa<Ac.min){if(Ab<Ac.min){continue}AT=(Ac.min-Ab)/(Aa-Ab)*(AT-AU)+AU;Aa=Ac.min}}if(Ab>=Aa&&Ab>Ac.max){if(Aa>Ac.max){continue}AU=(Ac.max-Ab)/(Aa-Ab)*(AT-AU)+AU;Ab=Ac.max}else{if(Aa>=Ab&&Aa>Ac.max){if(Ab>Ac.max){continue}AT=(Ac.max-Ab)/(Aa-Ab)*(AT-AU)+AU;Aa=Ac.max}}if(AU<=AT&&AU<Ad.min){if(AT<Ad.min){continue}Ab=(Ad.min-AU)/(AT-AU)*(Aa-Ab)+Ab;AU=Ad.min}else{if(AT<=AU&&AT<Ad.min){if(AU<Ad.min){continue}Aa=(Ad.min-AU)/(AT-AU)*(Aa-Ab)+Ab;AT=Ad.min}}if(AU>=AT&&AU>Ad.max){if(AT>Ad.max){continue}Ab=(Ad.max-AU)/(AT-AU)*(Aa-Ab)+Ab;AU=Ad.max}else{if(AT>=AU&&AT>Ad.max){if(AU>Ad.max){continue}Aa=(Ad.max-AU)/(AT-AU)*(Aa-Ab)+Ab;AT=Ad.max}}if(AU!=AW||Ab!=AV){Y.moveTo(Ad.p2c(AU)+AZ,Ac.p2c(Ab)+AR)}AW=AT;AV=Aa;Y.lineTo(Ad.p2c(AT)+AZ,Ac.p2c(Aa)+AR)}Y.stroke()}function AO(AX,Ae,Ac){var Af=AX.points,AR=AX.pointsize,AS=Math.min(Math.max(0,Ac.min),Ac.max),Aa,AV=0,Ad=false;for(var AW=AR;AW<Af.length;AW+=AR){var AU=Af[AW-AR],Ab=Af[AW-AR+1],AT=Af[AW],AZ=Af[AW+1];if(Ad&&AU!=null&&AT==null){Y.lineTo(Ae.p2c(AV),Ac.p2c(AS));Y.fill();Ad=false;continue}if(AU==null||AT==null){continue}if(AU<=AT&&AU<Ae.min){if(AT<Ae.min){continue}Ab=(Ae.min-AU)/(AT-AU)*(AZ-Ab)+Ab;AU=Ae.min}else{if(AT<=AU&&AT<Ae.min){if(AU<Ae.min){continue}AZ=(Ae.min-AU)/(AT-AU)*(AZ-Ab)+Ab;AT=Ae.min}}if(AU>=AT&&AU>Ae.max){if(AT>Ae.max){continue}Ab=(Ae.max-AU)/(AT-AU)*(AZ-Ab)+Ab;AU=Ae.max}else{if(AT>=AU&&AT>Ae.max){if(AU>Ae.max){continue}AZ=(Ae.max-AU)/(AT-AU)*(AZ-Ab)+Ab;AT=Ae.max}}if(!Ad){Y.beginPath();Y.moveTo(Ae.p2c(AU),Ac.p2c(AS));Ad=true}if(Ab>=Ac.max&&AZ>=Ac.max){Y.lineTo(Ae.p2c(AU),Ac.p2c(Ac.max));Y.lineTo(Ae.p2c(AT),Ac.p2c(Ac.max));AV=AT;continue}else{if(Ab<=Ac.min&&AZ<=Ac.min){Y.lineTo(Ae.p2c(AU),Ac.p2c(Ac.min));Y.lineTo(Ae.p2c(AT),Ac.p2c(Ac.min));AV=AT;continue}}var Ag=AU,AY=AT;if(Ab<=AZ&&Ab<Ac.min&&AZ>=Ac.min){AU=(Ac.min-Ab)/(AZ-Ab)*(AT-AU)+AU;Ab=Ac.min}else{if(AZ<=Ab&&AZ<Ac.min&&Ab>=Ac.min){AT=(Ac.min-Ab)/(AZ-Ab)*(AT-AU)+AU;AZ=Ac.min}}if(Ab>=AZ&&Ab>Ac.max&&AZ<=Ac.max){AU=(Ac.max-Ab)/(AZ-Ab)*(AT-AU)+AU;Ab=Ac.max}else{if(AZ>=Ab&&AZ>Ac.max&&Ab<=Ac.max){AT=(Ac.max-Ab)/(AZ-Ab)*(AT-AU)+AU;AZ=Ac.max}}if(AU!=Ag){if(Ab<=Ac.min){Aa=Ac.min}else{Aa=Ac.max}Y.lineTo(Ae.p2c(Ag),Ac.p2c(Aa));Y.lineTo(Ae.p2c(AU),Ac.p2c(Aa))}Y.lineTo(Ae.p2c(AU),Ac.p2c(Ab));Y.lineTo(Ae.p2c(AT),Ac.p2c(AZ));if(AT!=AY){if(AZ<=Ac.min){Aa=Ac.min}else{Aa=Ac.max}Y.lineTo(Ae.p2c(AT),Ac.p2c(Aa));Y.lineTo(Ae.p2c(AY),Ac.p2c(Aa))}AV=Math.max(AT,AY)}if(Ad){Y.lineTo(Ae.p2c(AV),Ac.p2c(AS));Y.fill()}}Y.save();Y.translate(e.left,e.top);Y.lineJoin="round";var AP=AN.lines.lineWidth,AK=AN.shadowSize;if(AP>0&&AK>0){Y.lineWidth=AK;Y.strokeStyle="rgba(0,0,0,0.1)";var AQ=Math.PI/18;AM(AN.datapoints,Math.sin(AQ)*(AP/2+AK/2),Math.cos(AQ)*(AP/2+AK/2),AN.xaxis,AN.yaxis);Y.lineWidth=AK/2;AM(AN.datapoints,Math.sin(AQ)*(AP/2+AK/4),Math.cos(AQ)*(AP/2+AK/4),AN.xaxis,AN.yaxis)}Y.lineWidth=AP;Y.strokeStyle=AN.color;var AL=V(AN.lines,AN.color,0,t);if(AL){Y.fillStyle=AL;AO(AN.datapoints,AN.xaxis,AN.yaxis)}if(AP>0){AM(AN.datapoints,0,0,AN.xaxis,AN.yaxis)}Y.restore()}function o(AN){function AP(AU,AT,Ab,AR,AV,AZ,AY){var Aa=AU.points,AQ=AU.pointsize;for(var AS=0;AS<Aa.length;AS+=AQ){var AX=Aa[AS],AW=Aa[AS+1];if(AX==null||AX<AZ.min||AX>AZ.max||AW<AY.min||AW>AY.max){continue}Y.beginPath();Y.arc(AZ.p2c(AX),AY.p2c(AW)+AR,AT,0,AV,false);if(Ab){Y.fillStyle=Ab;Y.fill()}Y.stroke()}}Y.save();Y.translate(e.left,e.top);var AO=AN.lines.lineWidth,AL=AN.shadowSize,AK=AN.points.radius;if(AO>0&&AL>0){var AM=AL/2;Y.lineWidth=AM;Y.strokeStyle="rgba(0,0,0,0.1)";AP(AN.datapoints,AK,null,AM+AM/2,Math.PI,AN.xaxis,AN.yaxis);Y.strokeStyle="rgba(0,0,0,0.2)";AP(AN.datapoints,AK,null,AM/2,Math.PI,AN.xaxis,AN.yaxis)}Y.lineWidth=AO;Y.strokeStyle=AN.color;AP(AN.datapoints,AK,V(AN.points,AN.color),0,2*Math.PI,AN.xaxis,AN.yaxis);Y.restore()}function AB(AV,AU,Ad,AQ,AY,AN,AL,AT,AS,Ac,AZ){var AM,Ab,AR,AX,AO,AK,AW,AP,Aa;if(AZ){AP=AK=AW=true;AO=false;AM=Ad;Ab=AV;AX=AU+AQ;AR=AU+AY;if(Ab<AM){Aa=Ab;Ab=AM;AM=Aa;AO=true;AK=false}}else{AO=AK=AW=true;AP=false;AM=AV+AQ;Ab=AV+AY;AR=Ad;AX=AU;if(AX<AR){Aa=AX;AX=AR;AR=Aa;AP=true;AW=false}}if(Ab<AT.min||AM>AT.max||AX<AS.min||AR>AS.max){return }if(AM<AT.min){AM=AT.min;AO=false}if(Ab>AT.max){Ab=AT.max;AK=false}if(AR<AS.min){AR=AS.min;AP=false}if(AX>AS.max){AX=AS.max;AW=false}AM=AT.p2c(AM);AR=AS.p2c(AR);Ab=AT.p2c(Ab);AX=AS.p2c(AX);if(AL){Ac.beginPath();Ac.moveTo(AM,AR);Ac.lineTo(AM,AX);Ac.lineTo(Ab,AX);Ac.lineTo(Ab,AR);Ac.fillStyle=AL(AR,AX);Ac.fill()}if(AO||AK||AW||AP){Ac.beginPath();Ac.moveTo(AM,AR+AN);if(AO){Ac.lineTo(AM,AX+AN)}else{Ac.moveTo(AM,AX+AN)}if(AW){Ac.lineTo(Ab,AX+AN)}else{Ac.moveTo(Ab,AX+AN)}if(AK){Ac.lineTo(Ab,AR+AN)}else{Ac.moveTo(Ab,AR+AN)}if(AP){Ac.lineTo(AM,AR+AN)}else{Ac.moveTo(AM,AR+AN)}Ac.stroke()}}function n(AM){function AL(AS,AR,AU,AP,AT,AW,AV){var AX=AS.points,AO=AS.pointsize;for(var AQ=0;AQ<AX.length;AQ+=AO){if(AX[AQ]==null){continue}AB(AX[AQ],AX[AQ+1],AX[AQ+2],AR,AU,AP,AT,AW,AV,Y,AM.bars.horizontal)}}Y.save();Y.translate(e.left,e.top);Y.lineWidth=AM.bars.lineWidth;Y.strokeStyle=AM.color;var AK=AM.bars.align=="left"?0:-AM.bars.barWidth/2;var AN=AM.bars.fill?function(AO,AP){return V(AM.bars,AM.color,AO,AP)}:null;AL(AM.datapoints,AK,AK+AM.bars.barWidth,0,AN,AM.xaxis,AM.yaxis);Y.restore()}function V(AM,AK,AL,AO){var AN=AM.fill;if(!AN){return null}if(AM.fillColor){return R(AM.fillColor,AL,AO,AK)}var AP=C.color.parse(AK);AP.a=typeof AN=="number"?AN:0.4;AP.normalize();return AP.toString()}function AI(){l.find(".legend").remove();if(!g.legend.show){return }var AP=[],AN=false,AV=g.legend.labelFormatter,AU,AR;for(i=0;i<O.length;++i){AU=O[i];AR=AU.label;if(!AR){continue}if(i%g.legend.noColumns==0){if(AN){AP.push("</tr>")}AP.push("<tr>");AN=true}if(AV){AR=AV(AR,AU)}AP.push('<td class="legendColorBox"><div style="border:1px solid '+g.legend.labelBoxBorderColor+';padding:1px"><div style="width:4px;height:0;border:5px solid '+AU.color+';overflow:hidden"></div></div></td><td class="legendLabel">'+AR+"</td>")}if(AN){AP.push("</tr>")}if(AP.length==0){return }var AT='<table style="font-size:smaller;color:'+g.grid.color+'">'+AP.join("")+"</table>";if(g.legend.container!=null){C(g.legend.container).html(AT)}else{var AQ="",AL=g.legend.position,AM=g.legend.margin;if(AM[0]==null){AM=[AM,AM]}if(AL.charAt(0)=="n"){AQ+="top:"+(AM[1]+e.top)+"px;"}else{if(AL.charAt(0)=="s"){AQ+="bottom:"+(AM[1]+e.bottom)+"px;"}}if(AL.charAt(1)=="e"){AQ+="right:"+(AM[0]+e.right)+"px;"}else{if(AL.charAt(1)=="w"){AQ+="left:"+(AM[0]+e.left)+"px;"}}var AS=C('<div class="legend">'+AT.replace('style="','style="position:absolute;'+AQ+";")+"</div>").appendTo(l);if(g.legend.backgroundOpacity!=0){var AO=g.legend.backgroundColor;if(AO==null){AO=g.grid.backgroundColor;if(AO&&typeof AO=="string"){AO=C.color.parse(AO)}else{AO=C.color.extract(AS,"background-color")}AO.a=1;AO=AO.toString()}var AK=AS.children();C('<div style="position:absolute;width:'+AK.width()+"px;height:"+AK.height()+"px;"+AQ+"background-color:"+AO+';"> </div>').prependTo(AS).css("opacity",g.legend.backgroundOpacity)}}}var w=[],J=null;function AF(AR,AP,AM){var AX=g.grid.mouseActiveRadius,Aj=AX*AX+1,Ah=null,Aa=false,Af,Ad;for(Af=0;Af<O.length;++Af){if(!AM(O[Af])){continue}var AY=O[Af],AQ=AY.xaxis,AO=AY.yaxis,Ae=AY.datapoints.points,Ac=AY.datapoints.pointsize,AZ=AQ.c2p(AR),AW=AO.c2p(AP),AL=AX/AQ.scale,AK=AX/AO.scale;if(AY.lines.show||AY.points.show){for(Ad=0;Ad<Ae.length;Ad+=Ac){var AT=Ae[Ad],AS=Ae[Ad+1];if(AT==null){continue}if(AT-AZ>AL||AT-AZ<-AL||AS-AW>AK||AS-AW<-AK){continue}var AV=Math.abs(AQ.p2c(AT)-AR),AU=Math.abs(AO.p2c(AS)-AP),Ab=AV*AV+AU*AU;if(Ab<=Aj){Aj=Ab;Ah=[Af,Ad/Ac]}}}if(AY.bars.show&&!Ah){var AN=AY.bars.align=="left"?0:-AY.bars.barWidth/2,Ag=AN+AY.bars.barWidth;for(Ad=0;Ad<Ae.length;Ad+=Ac){var AT=Ae[Ad],AS=Ae[Ad+1],Ai=Ae[Ad+2];if(AT==null){continue}if(O[Af].bars.horizontal?(AZ<=Math.max(Ai,AT)&&AZ>=Math.min(Ai,AT)&&AW>=AS+AN&&AW<=AS+Ag):(AZ>=AT+AN&&AZ<=AT+Ag&&AW>=Math.min(Ai,AS)&&AW<=Math.max(Ai,AS))){Ah=[Af,Ad/Ac]}}}}if(Ah){Af=Ah[0];Ad=Ah[1];Ac=O[Af].datapoints.pointsize;return{datapoint:O[Af].datapoints.points.slice(Ad*Ac,(Ad+1)*Ac),dataIndex:Ad,series:O[Af],seriesIndex:Af}}return null}function D(AK){if(g.grid.hoverable){H("plothover",AK,function(AL){return AL.hoverable!=false})}}function d(AK){H("plotclick",AK,function(AL){return AL.clickable!=false})}function H(AL,AK,AM){var AN=AD.offset(),AS={pageX:AK.pageX,pageY:AK.pageY},AQ=AK.pageX-AN.left-e.left,AO=AK.pageY-AN.top-e.top;if(s.xaxis.used){AS.x=s.xaxis.c2p(AQ)}if(s.yaxis.used){AS.y=s.yaxis.c2p(AO)}if(s.x2axis.used){AS.x2=s.x2axis.c2p(AQ)}if(s.y2axis.used){AS.y2=s.y2axis.c2p(AO)}var AT=AF(AQ,AO,AM);if(AT){AT.pageX=parseInt(AT.series.xaxis.p2c(AT.datapoint[0])+AN.left+e.left);AT.pageY=parseInt(AT.series.yaxis.p2c(AT.datapoint[1])+AN.top+e.top)}if(g.grid.autoHighlight){for(var AP=0;AP<w.length;++AP){var AR=w[AP];if(AR.auto==AL&&!(AT&&AR.series==AT.series&&AR.point==AT.datapoint)){x(AR.series,AR.point)}}if(AT){AE(AT.series,AT.datapoint,AL)}}l.trigger(AL,[AS,AT])}function q(){if(!J){J=setTimeout(v,30)}}function v(){J=null;AJ.save();AJ.clearRect(0,0,y,Q);AJ.translate(e.left,e.top);var AL,AK;for(AL=0;AL<w.length;++AL){AK=w[AL];if(AK.series.bars.show){z(AK.series,AK.point)}else{u(AK.series,AK.point)}}AJ.restore();Z(L.drawOverlay,[AJ])}function AE(AM,AK,AN){if(typeof AM=="number"){AM=O[AM]}if(typeof AK=="number"){AK=AM.data[AK]}var AL=j(AM,AK);if(AL==-1){w.push({series:AM,point:AK,auto:AN});q()}else{if(!AN){w[AL].auto=false}}}function x(AM,AK){if(AM==null&&AK==null){w=[];q()}if(typeof AM=="number"){AM=O[AM]}if(typeof AK=="number"){AK=AM.data[AK]}var AL=j(AM,AK);if(AL!=-1){w.splice(AL,1);q()}}function j(AM,AN){for(var AK=0;AK<w.length;++AK){var AL=w[AK];if(AL.series==AM&&AL.point[0]==AN[0]&&AL.point[1]==AN[1]){return AK}}return -1}function u(AN,AM){var AL=AM[0],AR=AM[1],AQ=AN.xaxis,AP=AN.yaxis;if(AL<AQ.min||AL>AQ.max||AR<AP.min||AR>AP.max){return }var AO=AN.points.radius+AN.points.lineWidth/2;AJ.lineWidth=AO;AJ.strokeStyle=C.color.parse(AN.color).scale("a",0.5).toString();var AK=1.5*AO;AJ.beginPath();AJ.arc(AQ.p2c(AL),AP.p2c(AR),AK,0,2*Math.PI,false);AJ.stroke()}function z(AN,AK){AJ.lineWidth=AN.bars.lineWidth;AJ.strokeStyle=C.color.parse(AN.color).scale("a",0.5).toString();var AM=C.color.parse(AN.color).scale("a",0.5).toString();var AL=AN.bars.align=="left"?0:-AN.bars.barWidth/2;AB(AK[0],AK[1],AK[2]||0,AL,AL+AN.bars.barWidth,0,function(){return AM},AN.xaxis,AN.yaxis,AJ,AN.bars.horizontal)}function R(AM,AL,AQ,AO){if(typeof AM=="string"){return AM}else{var AP=Y.createLinearGradient(0,AQ,0,AL);for(var AN=0,AK=AM.colors.length;AN<AK;++AN){var AR=AM.colors[AN];if(typeof AR!="string"){AR=C.color.parse(AO).scale("rgb",AR.brightness);AR.a*=AR.opacity;AR=AR.toString()}AP.addColorStop(AN/(AK-1),AR)}return AP}}}C.plot=function(G,E,D){var F=new B(C(G),E,D,C.plot.plugins);return F};C.plot.plugins=[];C.plot.formatDate=function(H,E,G){var L=function(N){N=""+N;return N.length==1?"0"+N:N};var D=[];var M=false;var K=H.getUTCHours();var I=K<12;if(G==null){G=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}if(E.search(/%p|%P/)!=-1){if(K>12){K=K-12}else{if(K==0){K=12}}}for(var F=0;F<E.length;++F){var J=E.charAt(F);if(M){switch(J){case"h":J=""+K;break;case"H":J=L(K);break;case"M":J=L(H.getUTCMinutes());break;case"S":J=L(H.getUTCSeconds());break;case"d":J=""+H.getUTCDate();break;case"m":J=""+(H.getUTCMonth()+1);break;case"y":J=""+H.getUTCFullYear();break;case"b":J=""+G[H.getUTCMonth()];break;case"p":J=(I)?("am"):("pm");break;case"P":J=(I)?("AM"):("PM");break}D.push(J);M=false}else{if(J=="%"){M=true}else{D.push(J)}}}return D.join("")};function A(E,D){return D*Math.floor(E/D)}})(jQuery);