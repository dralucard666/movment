(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{45301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(60751)}])},60751:function(e,t,n){"use strict";n.r(t),n.d(t,{Viewer:function(){return Le},default:function(){return Oe}});var r=n(85893),i=n(53359),o=n(712),s=n(26135),a=n(69613),l=n(55050),u=n(26173),c=n(77340),d=n(27032),m=n(16195);const p=Object.assign(Object.assign({},d.w),{createOb:{execute:(0,m.QV)((function(e,t,n,r,i){return(0,c.of)([e.createPrimitive(t,n,i,r)])})),includeThis:!0,defaultParameters:[()=>({type:"operation",identifier:"point3",children:[{type:"raw",value:0},{type:"raw",value:0},{type:"raw",value:0}]}),()=>({type:"raw",value:0}),()=>({type:"raw",value:0}),()=>({type:"operation",identifier:"point3",children:[{type:"raw",value:1},{type:"raw",value:0},{type:"raw",value:0}]})]},point3:{execute:(0,m.QV)((function(e,t,n){return(0,c.of)([new u.Vector3(e,t,n)])})),includeThis:!1,defaultParameters:[()=>({type:"raw",value:0}),()=>({type:"raw",value:0}),()=>({type:"raw",value:0})]},moveRight:{execute:(0,m.QV)((function(e,t){return(0,c.of)([e.moveRight(t)])})),includeThis:!0,defaultParameters:[()=>({type:"raw",value:10})]},moveLeft:{execute:(0,m.QV)((function(e,t){return(0,c.of)([e.moveLeft(t)])})),includeThis:!0,defaultParameters:[()=>({type:"raw",value:10})]},moveUp:{execute:(0,m.QV)((function(e,t){return(0,c.of)([e.moveUp(t)])})),includeThis:!0,defaultParameters:[()=>({type:"raw",value:10})]},moveDown:{execute:(0,m.QV)((function(e,t){return(0,c.of)([e.moveDown(t)])})),includeThis:!0,defaultParameters:[()=>({type:"raw",value:10})]},moveRotate:{execute:(0,m.QV)((function(e,t,n){return(0,c.of)([e.moveRotate(t,n)])})),includeThis:!0,defaultParameters:[()=>({type:"raw",value:0}),()=>({type:"raw",value:100})]},standStill:{execute:(0,m.QV)((function(e){return(0,c.of)([e.standStill()])})),includeThis:!0,defaultParameters:[]},distanceToStatic:{execute:(0,m.QV)((function(e){return(0,c.of)([e.staticObjectAhead()])})),includeThis:!0,defaultParameters:[]}});var f=n(9008),h=n(67294),g=n(40812),y=n(96976),v=function(){var e=(0,a.w)(),t=e.camera,n=e.gl;return(0,h.useEffect)((function(){var e=new y.z(t,n.domElement);return t.rotateX(-Math.PI/10),t.position.set(3,100,222.5),t.rotateX(-Math.PI/10),e.update(),e.minDistance=3,e.maxDistance=1e3,function(){e.dispose()}}),[t,n]),null},x=n(85769),j=n(18626),b=n(61385);function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function _(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o=[],s=!0,a=!1;try{for(n=n.call(e);!(s=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);s=!0);}catch(l){a=!0,i=l}finally{try{s||null==n.return||n.return()}finally{if(a)throw i}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return w(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return w(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function S(e){var t=_((0,x.m)(["./textures/dirt/normal.jpg"]),1)[0],n=_((0,x.m)(["./textures/dirt/hotelreference.png"]),1)[0];n.rotation=Math.PI,n.encoding=u.sRGBEncoding,n.wrapS=u.RepeatWrapping,n.wrapT=u.RepeatWrapping,t.wrapS=u.RepeatWrapping,t.wrapT=u.RepeatWrapping;var i=e.world,o=(0,j.L)(i.image),s=(0,h.useRef)(null);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(b.o,{ref:s,rotation:[0,0,0],object:o.scene,scale:i.scale,position:i.position}),(0,r.jsx)("ambientLight",{intensity:1})]})}j.L.preload("./models/bookstore.glb"),j.L.preload("./models/eth.glb"),j.L.preload("./models/zara.glb"),j.L.preload("./models/students.glb"),j.L.preload("./models/hotel.glb"),j.L.preload("./models/little.glb");var P,T=n(94371),O=n(73506),M=n(32108),I=n(21010),L=n(82513),R=n(66974),A=n(29426);!function(e){e[e.Pedestrian=0]="Pedestrian",e[e.Cyclist=1]="Cyclist",e[e.Car=2]="Car"}(P||(P={}));const k=20;class E{constructor(e){this.staticObjects=e}createPrimitive(e,t,n,r){return new C([{position:e,time:t,direction:n}],r,this.staticObjects)}}class C extends E{constructor(e,t,n){super(n),this.position=e,this.type=t,this.staticObjects=n}moveRight(e){const t=this.position[this.position.length-1],n={position:t.position.clone().setX(t.position.x+e),time:t.time+k},r=this.returnNewTimeSteps(t,n,new u.Vector3(1,0,0)),i=structuredClone(this.position);return i.push(...r),new C(i,this.type,this.staticObjects)}moveLeft(e){const t=this.position[this.position.length-1],n={position:t.position.clone().setX(t.position.x-e),time:t.time+k},r=this.returnNewTimeSteps(t,n,new u.Vector3(-1,0,0)),i=structuredClone(this.position);return i.push(...r),new C(i,this.type,this.staticObjects)}moveUp(e){const t=this.position[this.position.length-1],n={position:t.position.clone().setZ(t.position.z+e),time:t.time+k},r=this.returnNewTimeSteps(t,n,new u.Vector3(0,0,1)),i=structuredClone(this.position);return i.push(...r),new C(i,this.type,this.staticObjects)}moveDown(e){const t=this.position[this.position.length-1],n={position:t.position.clone().setZ(t.position.z-e),time:t.time+k},r=this.returnNewTimeSteps(t,n,new u.Vector3(0,0,-1)),i=structuredClone(this.position);return i.push(...r),new C(i,this.type,this.staticObjects)}moveRotate(e,t){const n=this.position[this.position.length-1],r=this.position[this.position.length-1].direction.applyAxisAngle(new u.Vector3(0,1,0),-e/180*Math.PI),i={position:n.position.clone().add(r.multiplyScalar(t)),time:n.time+k},o=this.returnNewTimeSteps2(n,i,r.normalize()),s=structuredClone(this.position);return s.push(...o),new C(s,this.type,this.staticObjects)}standStill(){const e=this.position[this.position.length-1],t=e.time,n=structuredClone(this.position);for(let r=t+1;r<t+1+k;r++){const t=Object.assign(Object.assign({},e),{time:r});n.push(t)}return new C(n,this.type,this.staticObjects)}returnNewTimeSteps(e,t,n){const r=[],i=e.position,o=t.position.sub(i),s=e.time,a=t.time-s;for(let l=1;l<a+1;l++){const e=o.clone().multiplyScalar(l/a);r.push({time:s+l,position:i.clone().add(e),direction:n.clone()})}return r}returnNewTimeSteps2(e,t,n){const r=[],i=e.position,o=t.position.sub(i),s=e.time,a=t.time-s;for(let l=1;l<a+1;l++){const e=o.clone().multiplyScalar(l/a);r.push({time:s+l,position:i.clone().add(e),direction:n.clone()})}return r}staticObjectAhead(){const e=new u.Vector3(12,-5,0),t=(new u.Vector3(12,5,0),this.position[this.position.length-1].position),n=this.position[this.position.length-1].direction.multiplyScalar(10);new u.Vector3(0,0,0).addVectors(t,n);return new u.Vector3(0,0,0).subVectors(t,e)}}var D=n(14671),B=JSON.parse('[["agent_137",952,244,0,10,0,[1,0,0],"Pedestrian",[["135",20],["315",18],["45",14],["45",14],["315",14],["0",10],["0",14],["0",10],["0",14],["0",10]]],["agent_144",487,900,0,10,0,[1,0,0],"Biker",[["0",20],["0",20],["0",20],["0",20],["0",20],["0",20],["0",20],["0",20],["0",20],["0",20]]],["agent_145",720,894,0,10,0,[1,0,0],"Biker",[["0",20],["0",20],["0",20],["0",20],["315",20],["0",20],["0",20],["0",20],["0",20],["0",20]]],["agent_146",1079,849,0,10,0,[1,0,0],"Pedestrian",[["315",10],["0",6],["0",10],["0",6],["0",8],["0",10],["0",10],["0",12],["0",10],["45",10]]],["agent_147",1059,844,0,10,0,[1,0,0],"Pedestrian",[["315",10],["0",10],["0",8],["0",10],["315",8],["45",12],["0",8],["0",8],["45",10],["315",10]]],["agent_148",1037,827,0,10,0,[1,0,0],"Pedestrian",[["315",14],["315",12],["90",6],["315",10],["0",10],["0",14],["315",12],["45",12],["0",8],["45",12]]],["agent_149",1039,810,0,10,0,[1,0,0],"Pedestrian",[["315",10],["315",14],["0",6],["45",10],["0",12],["0",14],["0",12],["0",10],["45",12],["0",8]]],["agent_150",782,859,0,10,0,[1,0,0],"Biker",[["315",20],["45",20],["315",20],["0",20],["0",20],["0",20],["45",20],["315",20],["45",20],["0",20]]],["agent_152",423,1029,0,10,0,[1,0,0],"Pedestrian",[["still"],["still"],["still"],["still"],["still"],["still"],["still"],["still"],["still"],["still"]]],["agent_218",1198,594,0,10,0,[1,0,0],"Pedestrian",[["180",14],["0",20],["0",18],["0",16],["0",20],["45",20],["315",20],["45",18],["315",20],["0",20]]],["agent_219",1049,829,0,10,0,[1,0,0],"Pedestrian",[["315",8],["0",10],["0",8],["0",10],["0",10],["0",6],["0",8],["0",8],["0",6],["0",20]]],["agent_27",756,925,0,10,0,[1,0,0],"Pedestrian",[["0",8],["0",8],["0",8],["0",8],["0",8],["0",8],["0",6],["0",8],["45",4],["315",2],["still"]]],["agent_34",897,190,0,10,0,[1,0,0],"Pedestrian",[["135",10],["0",10],["45",10],["0",10],["0",8],["0",12],["0",6],["0",6],["315",8],["45",12]]],["agent_37",408,1018,0,10,0,[1,0,0],"Pedestrian",[["still"],["still"],["90",2],["still"],["still"],["0",2],["still"],["still"],["0",2],["still"]]],["agent_62",427,1055,0,10,0,[1,0,0],"Pedestrian",[["still"],["0",2],["0",2],["still"],["0",2],["still"],["0",2],["still"],["0",2],["315",2]]],["agent_71",599,1007,0,10,0,[1,0,0],"Pedestrian",[["270",2],["45",4],["0",4],["90",2],["315",2],["still"],["0",2],["180",2],["315",6],["0",4]]]]'),N=[{image:"./models/bookstore.glb",width:1424,height:1088,scale:[260,280,310],position:[-20,0,-20],name:"BookStore Empty",staticObjects:["bookstore"]},{image:"./models/bookstore.glb",width:1424,height:1088,scale:[260,280,310],position:[-20,0,-20],name:"Simon Bookstore",data:B,staticObjects:["simonTest"]},{image:"./models/eth.glb",width:640,height:480,scale:[280,280,280],position:[0,-192,-20],name:"Simon ETH",data:B,staticObjects:["simonTest"]},{image:"./models/hotel.glb",width:720,height:576,scale:[280,280,280],position:[0,4,-20],name:"Simon HOTEL",data:B,staticObjects:["simonTest"]},{image:"./models/little.glb",width:1417,height:2019,scale:[280,280,280],position:[0,-9,-20],name:"Simon LITTLE",data:B,staticObjects:["simonTest"]},{image:"./models/students.glb",width:720,height:576,scale:[280,280,280],position:[0,4,-20],name:"Simon STUDENTS",data:B,staticObjects:["simonTest"]},{image:"./models/zara.glb",width:720,height:576,scale:[280,280,280],position:[0,4,-20],name:"Simon ZARA",data:B,staticObjects:["simonTest"]}],F=(0,D.Z)((function(e,t){return{time:0,minTime:1e6,maxTime:0,data:null,world:N[0],setWorld:function(t){return e((function(e){return{world:t}}))},setData:function(t){return e((function(e){return{data:t}}))},incrementTime:function(t){return e((function(e){return{time:e.time+t}}))},setTime:function(t){return e((function(e){return{time:t}}))},action:function(){return t().time},playActive:!1,setPlayActive:function(t){return e((function(e){return{playActive:t}}))},setMaxTime:function(t){return e((function(e){return{maxTime:t}}))},setMinTime:function(t){return e((function(e){return{minTime:t,time:t}}))},getPlayActive:function(){return t().playActive},resetState:function(){e((function(e){return{time:0,maxTime:0,minTime:1e6,data:null}}))}}}));function V(e,t,n,r,i){return e.subscribe({next:function(e){var n,r,i=e.raw;if(n=i,null!=(r=C)&&"undefined"!==typeof Symbol&&r[Symbol.hasInstance]?r[Symbol.hasInstance](n):n instanceof r){var o=i.position[0].time,s=i.position[i.position.length-1].time,a=t,l=function(e,t,n){for(var r=[],i=t;i<=n;i++)r.push({time:i,position:null,direction:null});return e.map((function(e){var n=e.time,i=e.position,o=e.direction;r[n-t].position=[i.x,i.y,i.z],r[n-t].direction=[o.x,o.y,o.z]})),r}(i.position,o,s),u={id:a,size:30,type:i.type,framePos:l,startT:o,endT:s,direction:[i.position[0].direction.x,i.position[0].direction.y,i.position[0].direction.z]},c=F.getState().data,d=F.getState().setData;if(d(null),c){var m=c.findIndex((function(e){return e.id===a}));-1!==m?(c[m]=u,d(c)):(c.push(u),d(c))}else d([u]);F.getState().maxTime<s&&F.getState().setMaxTime(s),F.getState().minTime>o&&F.getState().setMinTime(o)}},error:function(e){i(e)}})}function X(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function U(e,t){return null!=t&&"undefined"!==typeof Symbol&&t[Symbol.hasInstance]?!!t[Symbol.hasInstance](e):e instanceof t}function H(e){return function(e){if(Array.isArray(e))return X(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return X(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return X(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var Y=new E([]);function z(){var e=(0,I.g4)((function(e){return e.descriptions}),L.wU);return(0,r.jsx)(r.Fragment,{children:e.map((function(e,t){var n=e.seed,i=e.name;return(0,r.jsx)(G,{seed:n,name:i,index:t},i)}))})}function G(e){var t=e.seed,n=e.name,i=(e.index,(0,I.EB)()),o=i((function(e){return e.selectedDescriptions.includes(n)})),s=i((function(e){var t;return null===(t=e.grammar.find((function(e){var t=e.name;return(0,L.Lr)(n,t)})))||void 0===t?void 0:t.name}));return null==s?null:o?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(K,{seed:t,name:n}),(0,r.jsx)(Z,{description:n})]}):(0,r.jsx)(J,{seed:t,name:n})}var W=new u.SphereBufferGeometry;function Q(e){var t=new u.Mesh(W);return U(e,C)&&t.position.copy(e.position[e.position.length-1].position),t}function Z(e){var t=e.description,n=(0,I.EB)(),i=F((function(e){return e.setTime})),o=n((function(e){if("gui"===e.type)return Array.from(new Set((null!=e.hovered?e.selectionsList.concat(e.hovered):e.selectionsList).filter((function(e){var n=e.steps;return(0,L.Lr)(t,(0,L.Il)(n)[0])})).reduce((function(e,t){var n,r,o=null===(n=t.values[0])||void 0===n?void 0:n.before.raw,s=null===(r=t.values[0])||void 0===r?void 0:r.after.raw;if("string"!=typeof t.steps&&"operation"==t.steps.type)if(t.steps.identifier.includes("move")&&o&&s){var a=s.position.slice(o.position.length)[0].time;i(a)}else if(null===o||void 0===o?void 0:o.position){var l=null===o||void 0===o?void 0:o.position[(null===o||void 0===o?void 0:o.position.length)-1].time;l&&i(l)}return e.concat(t.values.filter((function(e){return null!=e.object})).map((function(e){return e.object})))}),[])))}),L.wU);return null==o?null:(0,r.jsx)(r.Fragment,{children:o.map((function(e){return(0,r.jsx)(q,{object:e,colorAdd:.25},e.uuid)}))})}function q(e){var t=e.object,n=e.colorAdd;return(0,h.useEffect)((function(){return t.traverse((function(e){"material"in e&&e.material.color.addScalar(n)})),function(){t.traverse((function(e){"material"in e&&e.material.color.addScalar(-n)}))}}),[t]),null}function $(e,t){return e((function(e){return"gui"===e.type?(0,L.Bc)(e.grammar,e.dependencyMap,t):void 0}),L.wU)}function J(e){var t=e.name,n=e.seed,i=(0,h.useRef)(null),o=(0,I.EB)();return function(e,t,n){var r=(0,I.EB)(),i=e&&e[0].name?e[0].name:"",o=Y,s=F((function(e){return e.world}));o.staticObjects=s.staticObjects,(0,h.useEffect)((function(){if(null!=n.current&&null!=e){var s=V((0,c.of)(o).pipe((0,L.Tn)(),(0,L.Ii)(e,p,{delay:r.getState().interpretationDelay,seed:t})),i,n.current,0,(function(e){console.error(e),O.D1.getState().setError(e.message)}));return function(){var e,t;null===(t=n.current)||void 0===t||(e=t).remove.apply(e,H(n.current.children)),s.unsubscribe()}}}),[r,e,t,s])}($(o,t),n,i),(0,r.jsx)("group",{onClick:function(e){var n;null==e.intersections[0].object.userData.steps&&(e.stopPropagation(),o.getState().selectDescription(t,null!==(n=o.getState().shift)&&void 0!==n&&n))},ref:i})}function K(e){var t=e.name,n=e.seed,i=(0,I.EB)(),o=$(i,t),s=(0,h.useRef)(null);return function(e,t,n,r){var i=(0,I.EB)(),o=F((function(e){return e.world}));(0,h.useEffect)((function(){if(null!=r.current&&null!=e){var s,a=new Map,l=new Map,u=new R.x,d=u.pipe((0,L.br)(300)).subscribe((function(e){return i.getState().editIndices(e,!0)})),m=e&&e[0].name?e[0].name:"",f=Y;f.staticObjects=o.staticObjects;try{s=V((0,c.of)(f).pipe((0,L.Tn)(),(0,L.Ii)(e,p,{delay:i.getState().interpretationDelay,seed:n,listeners:{onAfterStep:function(e,t){var n=a.get(e),r=null===n||void 0===n?void 0:n.find((function(e){var n=(0,L.Up)(t.index,e.index);return n===L.J.Predecessor||n===L.J.Equal}));null!=r&&u.next({steps:e,value:{after:t,before:r,object:U(t.raw,E)?Q(t.raw):void 0}});var i=t.index.join(","),o=l.get(i);null!=o&&(o.path[0]!==e.path[0]||function(e,t){if(e===t)return!0;if(e.length<t.length)return!1;for(var n=0;n<t.length;n++)if(e[n]!=t[n])return!1;return!0}(o.path,e.path)&&(0,A.I)({},e))||l.set(i,e)},onBeforeStep:function(e,t){var n=a.get(e);if(null==n&&(n=[],a.set(e,n)),n.push(t),"symbol"===e.type){var r=t.index.join(",");l.delete(r)}}}})),m,r.current,0,(function(e){console.error(e),O.D1.getState().setError(e.message)}))}catch(h){O.D1.getState().setError(h.message)}return function(){var e,n;i.getState().clearValueMap(t),null===(n=r.current)||void 0===n||(e=n).remove.apply(e,H(r.current.children)),null===s||void 0===s||s.unsubscribe(),null===d||void 0===d||d.unsubscribe()}}}),[i,e,n,o])}(o,t,n,s),null==o?null:(0,r.jsx)("object3D",{onPointerMove:function(e){if(0!==e.intersections.length){var t=e.intersections[0].object,n=t.userData.steps,r=t.userData.value;null!=n&&null!=r&&(e.stopPropagation(),i.getState().onStartHover(n,[r]))}},onPointerOut:function(e){var t=e.object,n=t.userData.steps,r=t.userData.value;null!=n&&null!=r&&(e.stopPropagation(),i.getState().onEndHover(n))},onClick:function(e){var t=e.intersections[0].object,n=t.userData.steps,r=t.userData.value;if(null!=n&&null!=r){e.stopPropagation();var o=i.getState();"gui"==o.type&&null==o.requested&&i.getState().selectResult(n,r)}},ref:s})}var ee=n(82409),te=n(82359),ne=(0,h.forwardRef)((function(e,t){var n=(0,h.useRef)(),i=(0,j.L)("./models/remyplace.glb"),o=i.scene,s=i.materials,l=i.animations,c=(0,h.useMemo)((function(){return te.b.clone(o)}),[o]),d=(0,a.y)(c).nodes,m=(0,h.useMemo)((function(){return new u.AnimationMixer(c)}),[o]);return l.forEach((function(e){m.clipAction(e).play()})),(0,h.useImperativeHandle)(t,(function(){return{updatePosition:function(e,t,r,i,o){n.current.rotation.y=i,n.current.position.y=t+2,n.current.position.z=r,n.current.position.x=e,m.update(o)}}})),(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("group",{ref:n,dispose:null,children:(0,r.jsxs)("group",{name:"Armature",rotation:[Math.PI/2,0,0],scale:.095,children:[(0,r.jsx)("primitive",{object:d.mixamorigHips}),(0,r.jsx)("skinnedMesh",{geometry:d.Body.geometry,material:s.Bodymat,skeleton:d.Body.skeleton}),(0,r.jsx)("skinnedMesh",{geometry:d.Bottoms.geometry,material:s.Bottommat,skeleton:d.Bottoms.skeleton}),(0,r.jsx)("skinnedMesh",{geometry:d.Eyelashes.geometry,material:s.Eyelashmat,skeleton:d.Eyelashes.skeleton}),(0,r.jsx)("skinnedMesh",{geometry:d.Eyes.geometry,material:s.Bodymat,skeleton:d.Eyes.skeleton}),(0,r.jsx)("skinnedMesh",{geometry:d.Hair.geometry,material:s.Hairmat,skeleton:d.Hair.skeleton}),(0,r.jsx)("skinnedMesh",{geometry:d.Shoes.geometry,material:s.Shoesmat,skeleton:d.Shoes.skeleton}),(0,r.jsx)("skinnedMesh",{geometry:d.Tops.geometry,material:s.Topmat,skeleton:d.Tops.skeleton})]})})})}));function re(e){var t=(0,h.useRef)(),n=e.data;return(0,h.useEffect)((function(){if(n){var e=n.position,r=n.direction;t.current.updatePosition(e[0],e[1],e[2],-Math.atan2(r[2],r[0])+Math.PI/2,Math.round(500*Math.random()))}}),[t,e]),(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(ne,{id:e.id,ref:t})})}j.L.preload("./models/remyplace.glb");var ie=function(){var e=(0,a.w)(),t=e.camera,n=e.gl;return(0,h.useEffect)((function(){t.rotateX(-Math.PI/10),t.position.set(3,200,400),t.rotateX(-Math.PI/10)}),[t,n]),null};function oe(e){var t=F((function(e){return e.data})),n=F((function(e){return e.time})),i=F((function(e){return e.world})),o=F((function(e){return e.setTime})),a=F((function(e){return e.minTime})),l=F((function(e){return e.maxTime})),u=!!t,c=(0,h.useState)(!1),d=c[0],m=c[1],p=(0,h.useState)(0),f=p[0],g=p[1];return(0,r.jsx)(r.Fragment,{children:u?(0,r.jsxs)("div",{style:{position:"absolute",top:"80%",zIndex:"10000",marginLeft:"10%",marginRight:"10%",width:"80%",height:"5%",color:"white"},children:["Time : ",n,d?(0,r.jsxs)(s.Xz,{style:{position:"absolute",bottom:"75%",zIndex:"10000",marginLeft:d-220+"px",width:"500px",height:"350px",border:"4px solid mediumgray"},children:[(0,r.jsx)("axesHelper",{}),(0,r.jsx)(S,{world:i}),"(",(0,r.jsx)(r.Fragment,{children:t?t.map((function(e){var t;return(0,r.jsx)(re,{id:e.id,data:null!==(t=e.framePos[f])&&void 0!==t?t:null},e.id)})):null}),") ",(0,r.jsx)(ie,{})]}):null,(0,r.jsxs)("div",{children:[(0,r.jsx)(ee.ZP,{step:1,min:a,max:l,value:n,onChangeCommitted:function(e,t){F.getState().setPlayActive(!0),o(t),F.getState().setPlayActive(!1),m(!1)},onChange:function(e,t){"mousemove"==e.type?(m(e.clientX),g(t)):(m(!1),g(0))},valueLabelDisplay:"auto"}),(0,r.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,r.jsx)("button",{onClick:function(){F.getState().setPlayActive(!0)},children:"Play"}),(0,r.jsx)("button",{onClick:function(){F.getState().setPlayActive(!1)},children:"Pause"}),(0,r.jsx)("button",{onClick:function(){F.getState().setPlayActive(!1),o(0)},children:"Reset"})]})]})]}):null})}var se=(0,h.forwardRef)((function(e,t){var n,i=(0,h.useRef)(),o=(0,j.L)("./models/cyclist.glb"),s=o.nodes,a=o.materials;return(0,h.useImperativeHandle)(t,(function(){return{updatePosition:function(e,t,n,r,o){i.current.rotation.y=r,i.current.position.z=n,i.current.position.x=e}}})),(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("group",{ref:null!==(n=i)&&void 0!==n?n:null,dispose:null,scale:8,position:[0,14,0],children:(0,r.jsxs)("group",{rotation:[Math.PI/2,0,Math.PI/2],children:[(0,r.jsx)("mesh",{geometry:s.Chain_Chain_0.geometry,material:a.Chain_COLOR_0}),(0,r.jsx)("mesh",{geometry:s.eyeball1_eyeball1_0.geometry,material:a.eyeball1}),(0,r.jsx)("mesh",{geometry:s.Frame_Frame_0.geometry,material:a.Frame_COLOR_0}),(0,r.jsx)("mesh",{geometry:s.Handlebars_Handlebars_0.geometry,material:a.Handlebars_COLOR_0}),(0,r.jsx)("mesh",{geometry:s.Rims_Rims_0.geometry,material:a.Rims_COLOR_0}),(0,r.jsx)("mesh",{geometry:s.Saddle_Saddle_0.geometry,material:a.Saddle_COLOR_0}),(0,r.jsx)("mesh",{geometry:s.Spokes_Spokes_0.geometry,material:a.Spokes_COLOR_0}),(0,r.jsx)("mesh",{geometry:s.Tyres_Tyres_0.geometry,material:a.Tyres_COLOR_0}),(0,r.jsx)("mesh",{geometry:s.UMesh_Figure_1_UMesh_Figure_1_0.geometry,material:a.UMesh_Figure_1}),(0,r.jsx)("mesh",{geometry:s.UMesh_Figure_1_UMesh_Figure_1_0001.geometry,material:a.UMesh_Figure_1}),(0,r.jsx)("mesh",{geometry:s.UMesh_Figure_1_UMesh_Figure_1_0002.geometry,material:a.UMesh_Figure_1})]})})})}));j.L.preload("./models/cyclist.glb");var ae,le=n(39240),ue=(0,h.forwardRef)((function(e,t){var n=(0,h.useState)((function(){return new u.Scene}))[0],i=(0,h.useRef)();return(0,h.useImperativeHandle)(t,(function(){return{updatePosition:function(e,t,n){i.current.position.x=e,i.current.position.y=t,i.current.position.z=n}}})),(0,h.useLayoutEffect)((function(){var t=new le.xv;return n.add(t),t.text=e.text,t.fontSize=5,t.color=0,function(){}}),[]),(0,r.jsx)("primitive",{object:n,ref:i})})),ce=(0,h.forwardRef)((function(e,t){var n=(0,h.useRef)(),i=(0,j.L)("./models/truck.glb"),o=i.nodes,s=i.materials;return(0,h.useImperativeHandle)(t,(function(){return{updatePosition:function(e,t,r,i,o){n.current.rotation.y=i,n.current.position.y=t+2,n.current.position.z=r,n.current.position.x=e}}})),(0,r.jsx)("group",{ref:n,dispose:null,scale:.4,children:(0,r.jsx)("group",{rotation:[-Math.PI/2,0,0],children:(0,r.jsxs)("group",{rotation:[Math.PI/2,0,0],children:[(0,r.jsx)("group",{position:[3.78,64.77,.21],rotation:[0,-Math.PI/2,0],scale:[.91,.85,.85],children:(0,r.jsx)("group",{position:[10.19,-20.82,144.24],children:(0,r.jsx)("mesh",{geometry:o.BODY_BODY_0.geometry,material:s.BODY})})}),(0,r.jsx)("group",{position:[-86.39,57.34,.45],rotation:[0,-Math.PI/2,0],scale:.85,children:(0,r.jsx)("group",{position:[-1.3,-28.61,42.95],children:(0,r.jsx)("mesh",{geometry:o.interior_VOID_0.geometry,material:s.VOID})})}),(0,r.jsx)("group",{position:[8.64,20.85,.44],rotation:[Math.PI/2,0,-Math.PI],scale:1.31,children:(0,r.jsxs)("group",{position:[71.49,-.58,15.66],children:[(0,r.jsx)("mesh",{geometry:o.bottom_BOTTOM_0.geometry,material:s.BOTTOM}),(0,r.jsx)("mesh",{geometry:o["bottom_07_-_Default_0"].geometry,material:s["07_-_Default"]})]})}),(0,r.jsx)("group",{position:[-.79,30.87,.21],rotation:[0,-Math.PI/2,0],scale:[.91,.85,.85],children:(0,r.jsxs)("group",{position:[10.19,19.01,138.87],children:[(0,r.jsx)("mesh",{geometry:o.LIGHTS_LIGHT_0.geometry,material:s.LIGHT}),(0,r.jsx)("mesh",{geometry:o.LIGHTS_LIGHTS_GLASS_0.geometry,material:s.LIGHTS_GLASS})]})}),(0,r.jsx)("group",{position:[-91.96,64.56,.21],rotation:[0,-Math.PI/2,0],scale:[.91,.85,.85],children:(0,r.jsx)("group",{position:[10.19,-20.58,29.64],children:(0,r.jsx)("mesh",{geometry:o.GLASS_GLASS_0.geometry,material:s.GLASS})})}),(0,r.jsx)("group",{position:[-89.58,62.39,.21],children:(0,r.jsxs)("group",{position:[23.2,-13.96,42.09],children:[(0,r.jsx)("mesh",{geometry:o.CABIN_PLASTIC_PLASTIC_0.geometry,material:s.PLASTIC}),(0,r.jsx)("mesh",{geometry:o.CABIN_PLASTIC_METALL_0.geometry,material:s.METALL})]})}),(0,r.jsx)("group",{position:[37.58,72.49,.21],children:(0,r.jsx)("group",{position:[1.78,0,46.74],children:(0,r.jsx)("mesh",{geometry:o.BOX_METAL_METALL_0.geometry,material:s.METALL})})}),(0,r.jsx)("group",{position:[-80.35,14.59,38.22],rotation:[-Math.PI/2,0,0],scale:1.11,children:(0,r.jsxs)("group",{position:[0,-.89,0],children:[(0,r.jsx)("mesh",{geometry:o.wheel_01_RIM_0.geometry,material:s.material}),(0,r.jsx)("mesh",{geometry:o.wheel_01_TIRE_0.geometry,material:s.TIRE})]})}),(0,r.jsx)("group",{position:[65.15,14.59,34.8],rotation:[-Math.PI/2,0,0],scale:1.11,children:(0,r.jsxs)("group",{position:[0,-3.96,0],children:[(0,r.jsx)("mesh",{geometry:o.wheel_02_TIRE_0.geometry,material:s.TIRE}),(0,r.jsx)("mesh",{geometry:o.wheel_02_RIM_0.geometry,material:s.material})]})}),(0,r.jsx)("group",{position:[65.15,14.59,-34.49],rotation:[Math.PI/2,0,0],scale:1.11,children:(0,r.jsxs)("group",{position:[0,-3.96,0],children:[(0,r.jsx)("mesh",{geometry:o.wheel_003_TIRE_0.geometry,material:s.TIRE}),(0,r.jsx)("mesh",{geometry:o.wheel_003_RIM_0.geometry,material:s.material})]})}),(0,r.jsx)("group",{position:[-80.35,14.59,-37.92],rotation:[Math.PI/2,0,0],scale:1.11,children:(0,r.jsxs)("group",{position:[0,-.89,0],children:[(0,r.jsx)("mesh",{geometry:o.wheel_004_RIM_0.geometry,material:s.material}),(0,r.jsx)("mesh",{geometry:o.wheel_004_TIRE_0.geometry,material:s.TIRE})]})}),(0,r.jsx)("group",{position:[-111.5,16.83,.21],scale:[.85,.85,.91],children:(0,r.jsx)("group",{position:[9.52,-2.51,48.36],children:(0,r.jsx)("mesh",{geometry:o.BUMPER_FRONT_INNER_BOTTOM_0.geometry,material:s.BOTTOM})})}),(0,r.jsx)("group",{position:[-111.5,16.83,.21],scale:[.85,.85,.91],children:(0,r.jsx)("group",{position:[9.52,-2.51,48.36],children:(0,r.jsx)("mesh",{geometry:o.BUMPER_FRONT_PLASTIC_0.geometry,material:s.PLASTIC})})})]})})})}));function de(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}j.L.preload("./models/truck.glb");var me=(de(ae={},P.Pedestrian,{cone:{position:[0,55,0],args:[6,10,8]},torus:{position:[0,4,0],args:[23,.4,8,50]}}),de(ae,P.Cyclist,{cone:{position:[0,70,0],args:[6,10,8]},torus:{position:[0,4,0],args:[30,.4,8,50]}}),de(ae,P.Car,{cone:{position:[0,70,0],args:[6,10,8]},torus:{position:[0,4,0],args:[60,.4,8,50]}}),ae),pe=(0,h.forwardRef)((function(e,t){var n=(0,h.useRef)(),i=me[e.type].cone,o=me[e.type].torus;return(0,h.useImperativeHandle)(t,(function(){return{updatePosition:function(e,t,r){n.current.position.y=t,n.current.position.z=r,n.current.position.x=e}}})),(0,r.jsxs)("group",{ref:n,children:[(0,r.jsxs)("mesh",{position:i.position,rotation:[Math.PI,0,0],children:[(0,r.jsx)("coneBufferGeometry",{args:i.args}),(0,r.jsx)("meshBasicMaterial",{color:"red",side:u.DoubleSide})]}),(0,r.jsxs)("mesh",{position:o.position,rotation:[Math.PI/2,0,0],children:[(0,r.jsx)("torusBufferGeometry",{args:o.args}),(0,r.jsx)("meshBasicMaterial",{color:"red",side:u.DoubleSide})]})]})}));function fe(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function he(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function ge(e,t,n){return ge=he()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var i=new(Function.bind.apply(e,r));return n&&ye(i,n.prototype),i},ge.apply(null,arguments)}function ye(e,t){return ye=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},ye(e,t)}function ve(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o=[],s=!0,a=!1;try{for(n=n.call(e);!(s=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);s=!0);}catch(l){a=!0,i=l}finally{try{s||null==n.return||n.return()}finally{if(a)throw i}}return o}}(e,t)||je(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function xe(e){return function(e){if(Array.isArray(e))return fe(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||je(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function je(e,t){if(e){if("string"===typeof e)return fe(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?fe(e,t):void 0}}var be={pedestrian:{lineOffsetX:0,lineOffsetY:15,lineLength:50,textMarginX:-10,textMarginY:45,rotationY:Math.PI/2},cyclist:{lineOffsetX:0,lineOffsetY:15,lineLength:50,textMarginX:-10,textMarginY:60,rotationY:Math.PI/2},truck:{lineOffsetX:50,lineOffsetY:20,lineLength:120,textMarginX:-10,textMarginY:60,rotationY:Math.PI}};function we(e){var t=(0,h.useRef)(),n=(0,h.useRef)(),i=(0,h.useRef)(),o=(e.data.type,P.Pedestrian),s=ve(function(e){switch(e){case P.Cyclist:return[be.cyclist.lineOffsetX,be.cyclist.lineOffsetY,be.cyclist.lineLength,be.cyclist.textMarginX,be.cyclist.textMarginY,be.cyclist.rotationY];case P.Pedestrian:return[be.pedestrian.lineOffsetX,be.pedestrian.lineOffsetY,be.pedestrian.lineLength,be.pedestrian.textMarginX,be.pedestrian.textMarginY,be.pedestrian.rotationY];case P.Car:return[be.truck.lineOffsetX,be.truck.lineOffsetY,be.truck.lineLength,be.truck.textMarginX,be.truck.textMarginY,be.truck.rotationY];default:return[be.pedestrian.lineOffsetX,be.pedestrian.lineOffsetY,be.pedestrian.lineLength,be.pedestrian.textMarginX,be.pedestrian.textMarginY,be.pedestrian.rotationY]}}(o),6),l=(s[0],s[1]),c=s[2],d=s[3],m=s[4],p=s[5],f=(0,h.useMemo)((function(){switch(o){case P.Cyclist:return(0,r.jsx)(se,{id:e.id,ref:t},e.id);case P.Pedestrian:return(0,r.jsx)(ne,{id:e.id,ref:t},e.id);case P.Car:return(0,r.jsx)(ce,{id:e.id,ref:t},e.id);default:return(0,r.jsx)(ne,{id:e.id,ref:t},e.id)}}),[e]),g=(0,h.useRef)(),y=e.data;return(0,h.useEffect)((function(){if(t.current&&y.framePos.length>0){var e=y.framePos[0];if(e.position){var r=e.position[0],i=e.position[1],o=e.position[2];t.current.updatePosition(r,i,o,p,0),n.current.updatePosition(r+d,i+m,o)}}}),[t,e]),(0,a.x)((function(e,r){var o=F.getState().time;if(y.startT<=o&&o<=y.endT&&y.framePos){var s=o-y.startT,a=y.framePos[s],f=a.direction;if(a.position&&t.current&&g.current&&f){var h=a.position[0],v=a.position[1],x=a.position[2],j=-Math.atan2(f[2],f[0])+p;t.current.updatePosition(h,v,x,j,r),n.current.updatePosition(h+d,v+m,x),i.current.updatePosition(h,v,x);var b=[h,l,x],w=[h+f[0]*c,l+2,x+f[2]*c];g.current.geometry.setFromPoints([b,w].map((function(e){return ge(u.Vector3,xe(e))})))}}})),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(ue,{text:e.id,ref:n}),(0,r.jsx)(pe,{type:o,ref:i}),(0,r.jsx)(h.Suspense,{fallback:null,children:f}),(0,r.jsxs)("line",{ref:g,children:[(0,r.jsx)("bufferGeometry",{}),(0,r.jsx)("lineBasicMaterial",{attach:"material",color:"#9c88ff",linewidth:100})]})]})}var _e=n(11163);function Se(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Pe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){Se(e,t,n[t])}))}return e}function Te(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}(0,l.FP)(0,18);function Oe(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(f.default,{children:[(0,r.jsx)("title",{children:"CGV | Shape Editorrrrrrrrrrrrrrrrr"}),(0,r.jsx)("meta",{name:"description",content:""}),(0,r.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})]}),(0,r.jsx)(I.gb,{store:(0,g.i)(p,[L.Ao,L.Ug,L.TO,L.au,L.W9,L.z$]),Viewer:Le,operationGuiMap:{},operations:p,children:(0,r.jsx)(M.M,{})})]})}var Me=function(){var e=F((function(e){return e.data}));return(0,r.jsx)(r.Fragment,{children:e?e.map((function(e){return(0,r.jsx)(we,{id:e.id,data:e},e.id)})):null})},Ie=function(e,t,n,r,i){var o=N[t];if(e.getState().deleteAllDescription(),n(),o.data){var s=[],a=!0,l=!1,u=void 0;try{for(var c,d=o.data[Symbol.iterator]();!(a=(c=d.next()).done);a=!0){var m=c.value,p="ID"+m[0],f=m[1],h=m[2],g=m[3],y=(m[4],m[5]),v=m[6],x=ke(m[7]),j=m[8],b=o.width,w=o.height,_=Ae(p,f,h,g,y,x,v,j,null!==b&&void 0!==b?b:0,null!==w&&void 0!==w?w:0);s.push(_)}}catch(S){l=!0,u=S}finally{try{a||null==d.return||d.return()}finally{if(l)throw u}}e.getState().addDescriptions(s)}r(t),i(o)};function Le(e){var t=e.className,a=e.children,l=Te(e,["className","children"]),u=(0,i.j)(I.op),c=(0,I.EB)(),d=F((function(e){return e.world})),m=F((function(e){return e.setWorld})),p=F((function(e){return e.resetState})),f=(0,h.useState)(),g=f[0],y=f[1],x=(0,_e.useRouter)();return(0,h.useEffect)((function(){var e=x.query.data;if(e)switch(e){case"bookstore":Ie(c,1,p,y,m);break;case"eth":Ie(c,2,p,y,m);break;case"hotel":Ie(c,3,p,y,m);break;case"little":Ie(c,4,p,y,m);break;case"students":Ie(c,5,p,y,m);break;case"zara":Ie(c,6,p,y,m)}}),[x]),(0,r.jsx)(h.Suspense,{fallback:null,children:(0,r.jsxs)("div",Pe({onDragOver:function(e){return e.preventDefault()},onDrop:T.zf.bind(null,c)},l,{className:"".concat(t," position-relative"),children:[(0,r.jsxs)(s.Xz,{style:{touchAction:"none",userSelect:"none",WebkitUserSelect:"none"},events:function(e){return Pe({},(0,s.U3)(e),{priority:1,filter:function(e){return O.D1.getState().controlling?[]:e.sort((function(e,t){return e.distance-t.distance}))}})},dpr:null==n.g.window?1:window.devicePixelRatio,children:[(0,r.jsxs)(u,{children:[(0,r.jsx)("axesHelper",{}),(0,r.jsx)(z,{}),(0,r.jsx)(h.Suspense,{fallback:null,children:(0,r.jsx)(S,{world:d})}),(0,r.jsx)(Re,{}),(0,r.jsx)(o.c,{makeDefault:!0,far:1e4}),(0,r.jsx)(v,{})]}),(0,r.jsx)(Me,{})]}),(0,r.jsx)(oe,{}),(0,r.jsxs)("div",{className:"d-flex flex-row justify-content-between position-absolute",style:{pointerEvents:"none",inset:0,left:0,right:0,top:0,bottom:0},children:[(0,r.jsxs)("div",{className:"d-flex flex-column my-3 ms-3",style:{maxWidth:200},children:[(0,r.jsxs)("div",{style:{pointerEvents:"all"},className:"bg-light rounded shadow w-100 overflow-hidden border d-flex flex-column",children:[(0,r.jsx)("div",{className:"w-100 mt-2",children:"Select Data"}),(0,r.jsx)("div",{className:"px-3 py-2 border-bottom d-flex flex-row align-items-center",children:(0,r.jsx)("select",{value:g,onChange:function(e){Ie(c,e.target.value,p,y,m)},className:"form-select",children:N.map((function(e,t){return(0,r.jsx)("option",{value:t,children:e.name},e.name)}))})})]}),(0,r.jsx)("div",{className:"flex-grow-1"}),(0,r.jsx)("div",{style:{pointerEvents:"all"},className:"d-flex flex-row"})]}),(0,r.jsxs)("div",{className:"d-flex flex-column align-items-end m-3",children:[(0,r.jsx)(A.X,{className:"bg-light border rounded shadow w-100 mb-3 overflow-hidden",style:{maxWidth:"16rem",pointerEvents:"all"}}),(0,r.jsx)("div",{className:"flex-grow-1"})]})]}),a]}))})}var Re=function(){F((function(e){return e.data}));var e=F((function(e){return e.maxTime}));return(0,a.x)((function(t){t.clock;F.getState().getPlayActive()&&F.getState().time<e&&F.getState().incrementTime(1)})),null};function Ae(e,t,n,r,i,o,s,a,l,u){var c={name:e,step:{type:"sequential",children:[{type:"this"},{type:"operation",children:[{type:"operation",identifier:"point3",children:[{type:"raw",value:t-l/2},{type:"raw",value:r},{type:"raw",value:n-u/2}]},{type:"raw",value:i},{type:"raw",value:o},{type:"operation",identifier:"point3",children:[{type:"raw",value:s[0]},{type:"raw",value:s[1]},{type:"raw",value:s[2]}]}],identifier:"createOb"}]}},d=!0,m=!1,p=void 0;try{for(var f,h=a[Symbol.iterator]();!(d=(f=h.next()).done);d=!0){var g=f.value;if(1==g.length){c.step.children.push({type:"operation",children:[],identifier:"standStill"})}else{var y={type:"operation",children:[{type:"raw",value:parseInt(g[0])},{type:"raw",value:g[1]}],identifier:"moveRotate"};c.step.children.push(y)}}}catch(v){m=!0,p=v}finally{try{d||null==h.return||h.return()}finally{if(m)throw p}}return c}function ke(e){switch(e){case"Pedestrian":default:return 0;case"Biker":return 1}}}},function(e){e.O(0,[429,770,972,761,433,774,888,179],(function(){return t=45301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);