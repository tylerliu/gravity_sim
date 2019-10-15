(this.webpackJsonpgravity_sim=this.webpackJsonpgravity_sim||[]).push([[0],{209:function(t,i,e){t.exports=e(226)},214:function(t,i,e){},215:function(t,i,e){},218:function(t,i,e){},226:function(t,i,e){"use strict";e.r(i);var s=e(0),n=e.n(s),a=e(15),o=e.n(a),h=(e(214),e(5)),r=e(6),c=e(8),l=e(7),u=e(9),d=(e(215),function(){function t(i,e,s,n,a){Object(h.a)(this,t),this.mass=i,this.velocity_x=n,this.velocity_y=a,this.position_x=e,this.position_y=s}return Object(r.a)(t,[{key:"draw",value:function(t){t.beginPath(),t.arc(this.position_x,this.position_y,this.radius,0,2*Math.PI,!1),t.fillStyle=this.color,t.fill(),t.lineWidth=0,t.strokeStyle="rgba(0, 0, 0, 0)",t.stroke()}},{key:"color",get:function(){return t.getColor(this.mass)}},{key:"radius",get:function(){return 0===this.mass||this.mass<=1e-6?2:.75*Math.log2(this.mass)+2}}],[{key:"getColor",value:function(t){return 0===t||t<=1e-6?"#FFFFFF":"hsl("+(10*Math.log2(t)|0)+", 100%, 50%)"}},{key:"drawExample",value:function(i,e,s,n){new t(e,s,n,0,0).draw(i)}}]),t}()),f=function(){function t(){Object(h.a)(this,t),this.Entities=[]}return Object(r.a)(t,[{key:"addEntity",value:function(t,i,e,s,n){this.Entities.push(new d(t,i,e,s,n))}},{key:"update",value:function(){for(var t=0;t<100;t++){for(var i=new Array(this.Entities.length),e=new Array(this.Entities.length),s=0;s<i.length;s++)i[s]=e[s]=0;for(var n=0;n<this.Entities.length;n++)for(var a=n+1;a<this.Entities.length;a++){var o=1*this.Entities[n].position_x-this.Entities[a].position_x,h=1*this.Entities[n].position_y-this.Entities[a].position_y,r=o*o+h*h,c=this.Entities[a].mass/r;i[n]+=c*(this.Entities[a].position_x-this.Entities[n].position_x)/Math.sqrt(r),e[n]+=c*(this.Entities[a].position_y-this.Entities[n].position_y)/Math.sqrt(r),c=this.Entities[n].mass/r,i[a]+=c*(this.Entities[n].position_x-this.Entities[a].position_x)/Math.sqrt(r),e[a]+=c*(this.Entities[n].position_y-this.Entities[a].position_y)/Math.sqrt(r)}for(var l=0;l<this.Entities.length;l++)i[l]*=1,e[l]*=1,this.Entities[l].velocity_x+=i[l]*(1/30)/100,this.Entities[l].velocity_y+=e[l]*(1/30)/100,this.Entities[l].position_x+=this.Entities[l].velocity_x*(1/30)/100,this.Entities[l].position_y+=this.Entities[l].velocity_y*(1/30)/100;for(var u=0;u<this.Entities.length;u++)for(var d=u+1;d<this.Entities.length;d++){var f=Math.pow(this.Entities[u].position_x-this.Entities[d].position_x,2)+Math.pow(this.Entities[u].position_y-this.Entities[d].position_y,2);Math.sqrt(f)<=this.Entities[u].radius+this.Entities[d].radius&&(this.Entities[u].mass<1e-6&&this.Entities[d].mass<1e-6?(this.Entities[u].position_x=(this.Entities[u].position_x+this.Entities[d].position_x)/2,this.Entities[u].position_y=(this.Entities[u].position_y+this.Entities[d].position_y)/2,this.Entities[u].velocity_x=(this.Entities[u].velocity_x+this.Entities[d].velocity_x)/2,this.Entities[u].velocity_y=(this.Entities[u].velocity_y+this.Entities[d].velocity_y)/2):(this.Entities[u].position_x=(this.Entities[u].position_x*this.Entities[u].mass+this.Entities[d].position_x*this.Entities[d].mass)/(this.Entities[u].mass+this.Entities[d].mass),this.Entities[u].position_y=(this.Entities[u].position_y*this.Entities[u].mass+this.Entities[d].position_y*this.Entities[d].mass)/(this.Entities[u].mass+this.Entities[d].mass),this.Entities[u].velocity_x=(this.Entities[u].velocity_x*this.Entities[u].mass+this.Entities[d].velocity_x*this.Entities[d].mass)/(this.Entities[u].mass+this.Entities[d].mass),this.Entities[u].velocity_y=(this.Entities[u].velocity_y*this.Entities[u].mass+this.Entities[d].velocity_y*this.Entities[d].mass)/(this.Entities[u].mass+this.Entities[d].mass),this.Entities[u].mass+=this.Entities[d].mass),this.Entities.splice(d,1),d--)}}}},{key:"draw",value:function(t,i){this.Entities.forEach((function(i){return i.draw(t)})),i&&this.update()}},{key:"draw_path",value:function(t){this.Entities.forEach((function(i){t.beginPath(),t.arc(i.position_x,i.position_y,1,0,2*Math.PI,!1),t.fillStyle=i.color,t.fill(),t.lineWidth=0,t.strokeStyle="rgba(0, 0, 0, 0)",t.stroke()}))}},{key:"clear",value:function(){this.Entities=[]}}]),t}(),p=e(13),y=e(14),E=function(t){function i(t){var e;return Object(h.a)(this,i),(e=Object(c.a)(this,Object(l.a)(i).call(this,t))).state={playing:!0},e}return Object(u.a)(i,t),Object(r.a)(i,[{key:"render",value:function(){return this.state.playing?n.a.createElement(p.a,{variant:"outline-dark",ref:"ppButton",onClick:this.onClick.bind(this)},n.a.createElement(y.a,{icon:y.b})," Stop"):n.a.createElement(p.a,{variant:"outline-dark",ref:"ppButton",onClick:this.onClick.bind(this)},n.a.createElement(y.a,{icon:y.c})," Play")}},{key:"componentDidMount",value:function(){var t=this;this.button=this.refs.button,window.addEventListener("resize",(function(){return t.setState({})}))}},{key:"onClick",value:function(){return this.props.onClick(!this.state.playing),this.setState({playing:!this.state.playing}),this.refs.ppButton.blur(),!1}}]),i}(s.Component),m=(e(218),e(23)),v=function(t){function i(t){var e;return Object(h.a)(this,i),(e=Object(c.a)(this,Object(l.a)(i).call(this,t))).selectedMass=1,e}return Object(u.a)(i,t),Object(r.a)(i,[{key:"render",value:function(){return n.a.createElement(m.a,{sm:5,style:{display:"flex",flexDirection:"column",justifyContent:"center"}},n.a.createElement("style",{ref:"style"}),n.a.createElement("input",{type:"range",min:"-1",max:"10",defaultValue:"0",step:"any",className:"slider",ref:"slider",onChange:this.changeMass.bind(this)}),n.a.createElement("label",null,"Mass: ",this.selectedMass.toPrecision(3)))}},{key:"toMass",value:function(t){return t<-.4?(this.refs.slider.value=-1,0):t<0?(this.refs.slider.value=0,1):Math.pow(10,t)}},{key:"componentDidMount",value:function(){this.selectedMass=this.toMass(this.refs.slider.value),this.refs.style.sheet.insertRule(".slider::-webkit-slider-thumb {background: "+d.getColor(this.selectedMass)+";}",0)}},{key:"changeMass",value:function(){this.selectedMass=this.toMass(this.refs.slider.value),this.refs.style.sheet.deleteRule(0),this.refs.style.sheet.insertRule(".slider::-webkit-slider-thumb {background: "+d.getColor(this.selectedMass)+";}",0),this.setState({}),this.props.changeMass(this.selectedMass)}}]),i}(n.a.Component),w=e(26),g=function(t){function i(t){var e;return Object(h.a)(this,i),(e=Object(c.a)(this,Object(l.a)(i).call(this,t))).pathDrawing=!1,e}return Object(u.a)(i,t),Object(r.a)(i,[{key:"render",value:function(){var t=this;return n.a.createElement(w.a,{bg:"light",fixed:"bottom",className:"d-flex justify-content-around"},n.a.createElement(E,{class:"btn",onClick:this.changePlayState.bind(this),style:{height:"10vh",width:"10vh",padding:5}}),n.a.createElement(v,{changeMass:this.changeMass.bind(this)}),n.a.createElement(p.a,{variant:"outline-info",ref:"pathCheckBox",onClick:this.changePathDrawing.bind(this)},"Path"),n.a.createElement("span",null,"Entities: ",this.numEntities+"  "),n.a.createElement(p.a,{variant:"outline-danger",onClick:function(i){t.props.stage.clear(),i.target.blur()}},"Clear"))}},{key:"componentDidMount",value:function(){this.setState({})}},{key:"changePlayState",value:function(t){this.props.stage.isPlaying=t}},{key:"changePathDrawing",value:function(){this.pathDrawing=!this.pathDrawing,this.pathDrawing?(this.refs.pathCheckBox.variant="info",this.refs.pathCheckBox.className="btn btn-info"):(this.refs.pathCheckBox.variant="outline-info",this.refs.pathCheckBox.className="btn btn-outline-info"),this.props.stage.drawingPath(this.pathDrawing),this.setState({}),this.refs.pathCheckBox.blur()}},{key:"changeMass",value:function(t){this.props.stage.selectedMass=t}},{key:"updateEntity",value:function(t){this.numEntities=t,this.setState({})}}]),i}(s.Component),x=function(t){function i(t){var e;return Object(h.a)(this,i),(e=Object(c.a)(this,Object(l.a)(i).call(this,t))).ctx=null,e.path_ctx=null,e.field=new f,e.isPathDrawing=!1,e.isPlaying=!0,e.selectedMass=1,e.mouseDown=!1,e}return Object(u.a)(i,t),Object(r.a)(i,[{key:"render",value:function(){return n.a.createElement("div",{style:{position:"absolute",left:0,top:0}},n.a.createElement("div",{style:{height:window.innerHeight,width:window.innerWidth,position:"relative"}},n.a.createElement("canvas",{ref:"path_canvas",width:window.innerWidth,height:window.innerHeight,style:{position:"absolute",left:0,top:0,zIndex:0,backgroundColor:"black"}}),n.a.createElement("canvas",{ref:"canvas",width:window.innerWidth,height:window.innerHeight,style:{position:"absolute",left:0,top:0,zIndex:1,backgroundColor:"transparent"}})),n.a.createElement(g,{ref:"controller",stage:this}))}},{key:"componentDidMount",value:function(){var t=this,i=this.refs.canvas;this.ctx=i.getContext("2d"),this.field.addEntity(Math.pow(10,5),200,200,0,0),this.field.addEntity(1e3,200,300,30,0),this.field.addEntity(1e3,200,100,-30,0),this.field.addEntity(1e3,100,200,0,30),this.field.addEntity(1e3,300,200,0,-30),window.requestAnimationFrame(this.draw.bind(this));var e=this.refs.path_canvas;this.path_ctx=e.getContext("2d"),window.addEventListener("resize",(function(){return t.setState({})})),this.refs.canvas.onmousedown=function(i){t.mouseDown=!0,t.currentMX=t.mouseDownX=i.offsetX,t.currentMY=t.mouseDownY=i.offsetY},this.refs.canvas.ontouchstart=function(i){t.mouseDown=!0,t.currentMX=t.mouseDownX=i.touches[0].clientX,t.currentMY=t.mouseDownY=i.touches[0].clientY},this.refs.canvas.onmousemove=function(i){t.currentMX=i.clientX,t.currentMY=i.clientY},this.refs.canvas.ontouchmove=function(i){t.currentMX=i.touches[0].clientX,t.currentMY=i.touches[0].clientY},this.refs.canvas.ontouchcancel=this.refs.canvas.onmouseout=function(){t.mouseDown=!1},this.refs.canvas.onmouseup=function(i){!0===t.mouseDown&&t.field.addEntity(t.selectedMass,t.mouseDownX,t.mouseDownY,(i.offsetX-t.mouseDownX)/2,(i.offsetY-t.mouseDownY)/2),t.mouseDown=!1},this.refs.canvas.ontouchend=function(i){!0===t.mouseDown&&t.field.addEntity(t.selectedMass,t.mouseDownX,t.mouseDownY,(i.changedTouches[0].clientX-t.mouseDownX)/2,(i.changedTouches[0].clientY-t.mouseDownY)/2),t.mouseDown=!1}}},{key:"draw",value:function(){this.ctx.clearRect(0,0,this.ctx.canvas.width,this.ctx.canvas.height),this.field.draw(this.ctx,this.isPlaying),this.mouseDown&&(d.drawExample(this.ctx,this.selectedMass,this.mouseDownX,this.mouseDownY),this.currentMX===this.mouseDownX&&this.currentMY===this.mouseDownY||this.drawVelocity()),this.isPlaying&&this.isPathDrawing&&this.field.draw_path(this.path_ctx),window.requestAnimationFrame(this.draw.bind(this)),this.refs.controller.updateEntity(this.field.Entities.length)}},{key:"drawingPath",value:function(t){this.isPathDrawing=t,t||this.path_ctx.clearRect(0,0,this.path_ctx.canvas.width,this.path_ctx.canvas.height)}},{key:"drawVelocity",value:function(){this.ctx.beginPath(),this.ctx.strokeStyle="white",this.ctx.moveTo(this.mouseDownX,this.mouseDownY),this.ctx.lineTo(this.currentMX,this.currentMY),this.ctx.stroke(),this.ctx.font="12px Arial";var t=(this.currentMX-this.mouseDownX)/2,i=(this.mouseDownY-this.currentMY)/2,e="Vx: "+t.toPrecision(3),s="Vy: "+i.toPrecision(3),n="Vy: "+Math.sqrt(t*t+i*i).toPrecision(3),a=0;this.currentMX<this.mouseDownX&&(a-=this.ctx.measureText(e+" ").width),this.ctx.strokeText(e,this.currentMX+a,this.currentMY-6),this.ctx.strokeText(s,this.currentMX+a,this.currentMY+6),this.ctx.strokeText(n,this.currentMX+a,this.currentMY+18)}},{key:"clear",value:function(){this.field.clear(),null!==this.path_ctx&&this.path_ctx.clearRect(0,0,this.path_ctx.canvas.width,this.path_ctx.canvas.height)}}]),i}(s.Component),b=(e(225),e(25)),_=function(t){function i(){return Object(h.a)(this,i),Object(c.a)(this,Object(l.a)(i).apply(this,arguments))}return Object(u.a)(i,t),Object(r.a)(i,[{key:"render",value:function(){return n.a.createElement(b.a,{className:"App"},n.a.createElement(x,null))}}]),i}(s.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[209,1,2]]]);
//# sourceMappingURL=main.936416d9.chunk.js.map