(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(t,i,e){t.exports=e.p+"static/media/pause_button.72414a74.png"},function(t,i,e){t.exports=e.p+"static/media/play_button.e291b709.png"},function(t,i,e){t.exports=e(26)},,,,,,function(t,i,e){},,function(t,i,e){},,function(t,i,e){},,function(t,i,e){},,function(t,i,e){},,function(t,i,e){"use strict";e.r(i);var s=e(0),n=e.n(s),a=e(7),o=e.n(a),h=(e(16),e(1)),r=e(2),c=e(4),l=e(3),u=e(5),d=(e(18),function(){function t(i,e,s,n,a){Object(h.a)(this,t),this.mass=i,this.velocity_x=n,this.velocity_y=a,this.position_x=e,this.position_y=s}return Object(r.a)(t,[{key:"draw",value:function(t){t.beginPath(),t.arc(this.position_x,this.position_y,this.radius,0,2*Math.PI,!1),t.fillStyle=this.color,t.fill(),t.lineWidth=0,t.strokeStyle="rgba(0, 0, 0, 0)",t.stroke()}},{key:"color",get:function(){return t.getColor(this.mass)}},{key:"radius",get:function(){return 0===this.mass||this.mass<=1e-6?2:.75*Math.log2(this.mass)+2}}],[{key:"getColor",value:function(t){return 0===t||t<=1e-6?"#FFFFFF":"hsl("+(10*Math.log2(t)|0)+", 100%, 50%)"}},{key:"drawExample",value:function(i,e,s,n){new t(e,s,n,0,0).draw(i)}}]),t}()),f=function(){function t(){Object(h.a)(this,t),this.Entities=[]}return Object(r.a)(t,[{key:"addEntity",value:function(t,i,e,s,n){this.Entities.push(new d(t,i,e,s,n))}},{key:"update",value:function(){for(var t=0;t<100;t++){for(var i=new Array(this.Entities.length),e=new Array(this.Entities.length),s=0;s<i.length;s++)i[s]=e[s]=0;for(var n=0;n<this.Entities.length;n++)for(var a=n+1;a<this.Entities.length;a++){var o=1*this.Entities[n].position_x-this.Entities[a].position_x,h=1*this.Entities[n].position_y-this.Entities[a].position_y,r=o*o+h*h,c=this.Entities[a].mass/r;i[n]+=c*(this.Entities[a].position_x-this.Entities[n].position_x)/Math.sqrt(r),e[n]+=c*(this.Entities[a].position_y-this.Entities[n].position_y)/Math.sqrt(r),c=this.Entities[n].mass/r,i[a]+=c*(this.Entities[n].position_x-this.Entities[a].position_x)/Math.sqrt(r),e[a]+=c*(this.Entities[n].position_y-this.Entities[a].position_y)/Math.sqrt(r)}for(var l=0;l<this.Entities.length;l++)i[l]*=1,e[l]*=1,this.Entities[l].velocity_x+=i[l]*(1/30)/100,this.Entities[l].velocity_y+=e[l]*(1/30)/100,this.Entities[l].position_x+=this.Entities[l].velocity_x*(1/30)/100,this.Entities[l].position_y+=this.Entities[l].velocity_y*(1/30)/100;for(var u=0;u<this.Entities.length;u++)for(var d=u+1;d<this.Entities.length;d++){var f=Math.pow(this.Entities[u].position_x-this.Entities[d].position_x,2)+Math.pow(this.Entities[u].position_y-this.Entities[d].position_y,2);Math.sqrt(f)<=this.Entities[u].radius+this.Entities[d].radius&&(this.Entities[u].position_x=(this.Entities[u].position_x*this.Entities[u].mass+this.Entities[d].position_x*this.Entities[d].mass)/(this.Entities[u].mass+this.Entities[d].mass),this.Entities[u].position_y=(this.Entities[u].position_y*this.Entities[u].mass+this.Entities[d].position_y*this.Entities[d].mass)/(this.Entities[u].mass+this.Entities[d].mass),this.Entities[u].velocity_x=(this.Entities[u].velocity_x*this.Entities[u].mass+this.Entities[d].velocity_x*this.Entities[d].mass)/(this.Entities[u].mass+this.Entities[d].mass),this.Entities[u].velocity_y=(this.Entities[u].velocity_y*this.Entities[u].mass+this.Entities[d].velocity_y*this.Entities[d].mass)/(this.Entities[u].mass+this.Entities[d].mass),this.Entities[u].mass+=this.Entities[d].mass,this.Entities.splice(d,1),d--)}}}},{key:"draw",value:function(t,i){this.Entities.forEach(function(i){return i.draw(t)}),i&&this.update()}},{key:"draw_path",value:function(t){this.Entities.forEach(function(i){t.beginPath(),t.arc(i.position_x,i.position_y,1,0,2*Math.PI,!1),t.fillStyle=i.color,t.fill(),t.lineWidth=0,t.strokeStyle="rgba(0, 0, 0, 0)",t.stroke()})}},{key:"clear",value:function(){this.Entities=[]}}]),t}(),p=e(8),m=e.n(p),y=e(9),w=e.n(y),E=(e(20),function(t){function i(t){var e;return Object(h.a)(this,i),(e=Object(c.a)(this,Object(l.a)(i).call(this,t))).state={playing:!0},e}return Object(u.a)(i,t),Object(r.a)(i,[{key:"render",value:function(){return n.a.createElement("input",{type:"image",src:this.state.playing?m.a:w.a,alt:this.state.playing?"Pause":"Play",ref:"button",className:"button",onClick:this.onClick.bind(this),height:.08*Math.min(window.innerHeight,window.innerWidth),width:.08*Math.min(window.innerHeight,window.innerWidth),style:{paddingLeft:.01*Math.min(window.innerHeight,window.innerWidth)}})}},{key:"componentDidMount",value:function(){var t=this;this.button=this.refs.button,window.addEventListener("resize",function(){return t.setState({})})}},{key:"onClick",value:function(){return this.props.onClick(!this.state.playing),this.setState({playing:!this.state.playing}),this.refs.button.blur(),!1}}]),i}(s.Component)),v=(e(22),function(t){function i(t){var e;return Object(h.a)(this,i),(e=Object(c.a)(this,Object(l.a)(i).call(this,t))).selectedMass=1,e}return Object(u.a)(i,t),Object(r.a)(i,[{key:"render",value:function(){return n.a.createElement("div",{style:{height:"10vh",width:"40vw",display:"flex",flexDirection:"column",justifyContent:"center"}},n.a.createElement("style",{ref:"style"}),n.a.createElement("input",{type:"range",min:"-1",max:"10",defaultValue:"0",step:"any",className:"slider",ref:"slider",onChange:this.changeMass.bind(this)}),n.a.createElement("label",null,"Mass: ",this.selectedMass.toPrecision(3)))}},{key:"toMass",value:function(t){return t<-.4?(this.refs.slider.value=-1,0):t<0?(this.refs.slider.value=0,1):Math.pow(10,t)}},{key:"componentDidMount",value:function(){this.selectedMass=this.toMass(this.refs.slider.value),this.refs.style.sheet.insertRule(".slider::-webkit-slider-thumb {background: "+d.getColor(this.selectedMass)+";}",0)}},{key:"changeMass",value:function(){this.selectedMass=this.toMass(this.refs.slider.value),this.refs.style.sheet.deleteRule(0),this.refs.style.sheet.insertRule(".slider::-webkit-slider-thumb {background: "+d.getColor(this.selectedMass)+";}",0),this.setState({}),this.props.changeMass(this.selectedMass)}}]),i}(n.a.Component)),g=(e(24),function(t){function i(t){var e;return Object(h.a)(this,i),(e=Object(c.a)(this,Object(l.a)(i).call(this,t))).pathDrawing=!1,e}return Object(u.a)(i,t),Object(r.a)(i,[{key:"render",value:function(){var t=this;return n.a.createElement("div",{className:"controller"},n.a.createElement(E,{onClick:this.changePlayState.bind(this),style:{height:"10vh",width:"10vh",padding:5}}),n.a.createElement(v,{changeMass:this.changeMass.bind(this)}),n.a.createElement("button",{className:"togglePath",ref:"pathCheckBox",onClick:this.changePathDrawing.bind(this)},n.a.createElement("strong",null,"Path")),n.a.createElement("div",{className:"div2"},n.a.createElement("label",null,"Entities: ",this.numEntities+"  "),n.a.createElement("button",{className:"clear",onClick:function(i){t.props.stage.clear(),i.target.blur()}},n.a.createElement("strong",null,"CLEAR"))))}},{key:"componentDidMount",value:function(){this.setState({})}},{key:"changePlayState",value:function(t){this.props.stage.isPlaying=t}},{key:"changePathDrawing",value:function(){this.pathDrawing=!this.pathDrawing,this.pathDrawing?this.refs.pathCheckBox.className="togglePath active":this.refs.pathCheckBox.className="togglePath",this.props.stage.drawingPath(this.pathDrawing),this.setState({}),this.refs.pathCheckBox.blur()}},{key:"changeMass",value:function(t){this.props.stage.selectedMass=t}},{key:"updateEntity",value:function(t){this.numEntities=t,this.setState({})}}]),i}(s.Component)),x=function(t){function i(t){var e;return Object(h.a)(this,i),(e=Object(c.a)(this,Object(l.a)(i).call(this,t))).ctx=null,e.path_ctx=null,e.field=new f,e.isPathDrawing=!1,e.isPlaying=!0,e.selectedMass=1,e.mouseDown=!1,e}return Object(u.a)(i,t),Object(r.a)(i,[{key:"render",value:function(){return n.a.createElement("div",{style:{height:"100vh",width:"100vw",flex:1}},n.a.createElement("div",{style:{height:"90vh",width:"100vw",position:"relative"}},n.a.createElement("canvas",{ref:"path_canvas",width:window.innerWidth,height:.9*window.innerHeight,style:{position:"absolute",left:0,top:0,zIndex:0,backgroundColor:"black"}}),n.a.createElement("canvas",{ref:"canvas",width:window.innerWidth,height:.9*window.innerHeight,style:{position:"absolute",left:0,top:0,zIndex:1,backgroundColor:"transparent"}})),n.a.createElement(g,{ref:"controller",stage:this,style:{height:"10vh",width:"100vw"}}))}},{key:"componentDidMount",value:function(){var t=this,i=this.refs.canvas;this.ctx=i.getContext("2d"),this.field.addEntity(Math.pow(10,5),200,200,0,0),this.field.addEntity(1e3,200,300,30,0),this.field.addEntity(1e3,200,100,-30,0),this.field.addEntity(1e3,100,200,0,30),this.field.addEntity(1e3,300,200,0,-30),window.requestAnimationFrame(this.draw.bind(this));var e=this.refs.path_canvas;this.path_ctx=e.getContext("2d"),window.addEventListener("resize",function(){return t.setState({})}),this.refs.canvas.onmousedown=function(i){t.mouseDown=!0,t.currentMX=t.mouseDownX=i.offsetX,t.currentMY=t.mouseDownY=i.offsetY},this.refs.canvas.onmousemove=function(i){t.currentMX=i.offsetX,t.currentMY=i.offsetY},this.refs.canvas.onmouseout=function(){t.mouseDown=!1},this.refs.canvas.onmouseup=function(i){!0===t.mouseDown&&t.field.addEntity(t.selectedMass,t.mouseDownX,t.mouseDownY,(i.offsetX-t.mouseDownX)/2,(i.offsetY-t.mouseDownY)/2),t.mouseDown=!1}}},{key:"draw",value:function(){this.ctx.clearRect(0,0,this.ctx.canvas.width,this.ctx.canvas.height),this.field.draw(this.ctx,this.isPlaying),this.mouseDown&&(d.drawExample(this.ctx,this.selectedMass,this.mouseDownX,this.mouseDownY),this.currentMX===this.mouseDownX&&this.currentMY===this.mouseDownY||this.drawVelocity()),this.isPlaying&&this.isPathDrawing&&this.field.draw_path(this.path_ctx),window.requestAnimationFrame(this.draw.bind(this)),this.refs.controller.updateEntity(this.field.Entities.length)}},{key:"drawingPath",value:function(t){this.isPathDrawing=t,t||this.path_ctx.clearRect(0,0,this.path_ctx.canvas.width,this.path_ctx.canvas.height)}},{key:"drawVelocity",value:function(){this.ctx.beginPath(),this.ctx.strokeStyle="white",this.ctx.moveTo(this.mouseDownX,this.mouseDownY),this.ctx.lineTo(this.currentMX,this.currentMY),this.ctx.stroke(),this.ctx.font="12px Arial";var t=(this.currentMX-this.mouseDownX)/2,i=(this.mouseDownY-this.currentMY)/2,e="Vx: "+t.toPrecision(3),s="Vy: "+i.toPrecision(3),n="Vy: "+Math.sqrt(t*t+i*i).toPrecision(3),a=0;this.currentMX<this.mouseDownX&&(a-=this.ctx.measureText(e+" ").width),this.ctx.strokeText(e,this.currentMX+a,this.currentMY-6),this.ctx.strokeText(s,this.currentMX+a,this.currentMY+6),this.ctx.strokeText(n,this.currentMX+a,this.currentMY+18)}},{key:"clear",value:function(){this.field.clear(),null!==this.path_ctx&&this.path_ctx.clearRect(0,0,this.path_ctx.canvas.width,this.path_ctx.canvas.height)}}]),i}(s.Component),b=function(t){function i(){return Object(h.a)(this,i),Object(c.a)(this,Object(l.a)(i).apply(this,arguments))}return Object(u.a)(i,t),Object(r.a)(i,[{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement(x,null))}}]),i}(s.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}],[[10,2,1]]]);
//# sourceMappingURL=main.7d773465.chunk.js.map