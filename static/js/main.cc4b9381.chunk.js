(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){e.exports=n(25)},20:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(11),i=n.n(o),c=(n(20),n(28)),u=n(29),s=n(27),f=n(6),l=Object(r.forwardRef)(function(e,t){var n=function(){t.current.setAttribute("style","z-index: -1; position: absolute; height: 100%; width: 100%;")};return Object(r.useEffect)(function(){return window.addEventListener("resize",n),function(){window.removeEventListener("resize",n)}},[]),a.a.createElement("canvas",{ref:t,style:{zIndex:-1,position:"absolute",height:"100%",width:"100%"}})}),d=function(e){var t=Object(r.useRef)(e);Object(r.useMutationEffect)(function(){t.current=e},[e]);var n=function e(n){a.current=requestAnimationFrame(e),(0,t.current)(n)},a=Object(r.useRef)();Object(r.useLayoutEffect)(function(){return a.current=requestAnimationFrame(n),function(){return cancelAnimationFrame(a.current)}},[])},m=Object(r.createContext)(),p=function(e){var t=e.children,n=e.getCamera,o=e.getRenderer,i=e.getScene,c=Object(r.useState)(!1),u=Object(f.a)(c,2),s=u[0],p=u[1],v=Object(r.useState)(0),h=Object(f.a)(v,2),b=h[0],w=h[1],E=Object(r.useRef)({}),x=Object(r.useRef)(),y=Object(r.useRef)(),g=Object(r.useRef)(),O=E.current,j=O.offsetWidth,M=O.offsetHeight,R={scene:x.current,camera:y.current,canvas:E.current,timer:b};return Object(r.useEffect)(function(){var e=E.current;x.current=i(),y.current=n(e),g.current=o(e),p(!0)},[]),Object(r.useEffect)(function(){y.current.aspect=j/M,y.current.updateProjectionMatrix(),g.current.setSize(j,M)},[j,M]),d(function(e){w(e),g.current.render(x.current,y.current)}),a.a.createElement(a.a.Fragment,null,a.a.createElement(l,{ref:E}),s&&a.a.createElement(m.Provider,{value:R},t))},v=n(7),h=function(){},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0,n=Object(r.useRef)(),a=Object(r.useContext)(m),o=function(){return n.current};return Object(r.useEffect)(function(){return n.current=e(a),function(){if(t)return t(a,o());a.scene.remove(o())}},[]),Object(v.a)({getEntity:o},a)},w=p,E=n(1),x=function(e){var t=e.h,n=void 0===t?50:t,a=e.w,o=void 0===a?50:a,i=e.d,c=void 0===i?50:i,u=e.color,s=void 0===u?65280:u,f=b(function(e){var t=e.scene,r=new E.BoxGeometry(n,o,c),a=new E.MeshPhongMaterial({color:s}),i=new E.Mesh(r,a);return i.castShadow=!0,i.position.y=50,t.add(i),i}),l=f.getEntity,d=f.timer;return Object(r.useEffect)(function(){l().material.color.setHex(e.color)},[e.color]),Object(r.useEffect)(function(){var e=l(),t=Math.sin(d/1e3)*Math.PI-Math.PI;e.rotation.y=t,e.rotation.z=-t},[d]),null},y=function(){return b(function(e){var t=e.scene,n=new E.GridHelper(1e4,1e3);return t.add(n),n}),null},g=n(12),O=n.n(g)()(E),j=function(){return b(function(e){var t=e.camera,n=e.canvas,r=new O(t,n);r.enableDamping=!0,r.dampingFactor=.12,r.rotateSpeed=.08,r.autoRotate=!0,r.autoRotateSpeed=.08,r.maxPolarAngle=Math.PI/2,r.enableKeys=!1,r.update()}),null},M=function(e){var t=e.offsetWidth,n=e.offsetHeight,r=new E.PerspectiveCamera(75,t/n,.1,1e3);return r.position.set(50,150,0),r},R=function(e){var t=e.getContext("webgl"),n=new E.WebGLRenderer({canvas:e,context:t});return n.setSize(e.offsetWidth,e.offsetHeight),n.setPixelRatio(window.devicePixelRatio),n},S=function(){var e=new E.Scene;e.background=new E.Color(13421772),e.fog=new E.FogExp2(13421772,.002);var t=new E.SpotLight(16777215,1,750,1);t.position.set(50,200,0),t.rotation.z=90*Math.PI/180,e.add(t);var n=new E.PlaneBufferGeometry(1e4,1e4,32,32),r=new E.MeshPhongMaterial({color:13421772}),a=new E.Mesh(n,r);return a.rotation.x=-90*Math.PI/180,a.receiveShadow=!0,e.add(a),e},C=function(){var e=Object(r.useState)("0000ff"),t=Object(f.a)(e,2),n=t[0],o=t[1],i=Object(r.useState)(!0),c=Object(f.a)(i,2),u=c[0],s=c[1],l=Object(r.useState)(!0),d=Object(f.a)(l,2),m=d[0],p=d[1];return a.a.createElement(w,{getCamera:M,getRenderer:R,getScene:S},a.a.createElement(j,null),u&&a.a.createElement(y,null),m&&a.a.createElement(x,{color:Number("0x".concat(n))}),a.a.createElement("div",{style:{width:"100px",padding:"10px"}},a.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},a.a.createElement("input",{type:"text",placeholder:"enter a hex color",onChange:function(e){return o(e.target.value)}}),a.a.createElement("label",null,a.a.createElement("input",{type:"checkbox",checked:u,onChange:function(){return s(!u)}}),"show grid"),a.a.createElement("label",null,a.a.createElement("input",{type:"checkbox",checked:m,onChange:function(){return p(!m)}}),"show cube"))))},L=function(e){var t=e.turnSpeed,n=Object(r.useRef)(0),a=function(e){var r=function(e){switch(e.keyCode){case 37:return 1;case 39:return-1}}(e);if(r){var a=t*r*Math.PI/180;n.current+=a}};return Object(r.useEffect)(function(){return window.addEventListener("keydown",a),function(){window.removeEventListener("keydown",a)}},[]),n.current},P=function(e){var t=e.shootLaser,n=b(function(e){var t=e.scene,n=new E.LineBasicMaterial({color:16777215}),r=new E.Geometry,a=new E.Group;r.vertices.push(new E.Vector3(0,10,0),new E.Vector3(-5,0,0),new E.Vector3(0,2.5,0),new E.Vector3(5,0,0),new E.Vector3(0,10,0));var o=new E.Line(r,n);return(new E.Box3).setFromObject(o).getCenter(o.position),o.position.multiplyScalar(-1),a.position.y=-50,a.add(o),t.add(a),{spaceshipGroup:a,spaceship:o}},function(e,t){var n=e.scene,r=t.spaceshipGroup;return n.remove(r)}).getEntity,a=function(e){if(32===e.keyCode){var r=n().spaceship,a=r.geometry,o=r.matrixWorld,i=a.vertices[0],c=a.vertices[2],u=(new E.Vector3).copy(i).applyMatrix4(o),s=(new E.Vector3).copy(c).applyMatrix4(o),f=new E.Vector3(u.x-s.x,u.y-s.y,0).normalize();t(u,f)}};Object(r.useEffect)(function(){return window.addEventListener("keydown",a),function(){window.removeEventListener("keydown",a)}},[]);var o=L({turnSpeed:6});return Object(r.useEffect)(function(){n().spaceshipGroup.rotation.z=o},[o]),null},A=function(e){var t=e.position,n=e.rotation,a=e.radius,o=e.uuid,i=b(function(e){for(var t=e.scene,n=new E.LineBasicMaterial({color:16777215}),r=new E.Geometry,i=0;i<=16;i++){var c=new E.Vector3,u=Math.random()*(a/2)-a/2,s=Math.random()*(a/2)-a/2;c.set(a*Math.sin(2*i*Math.PI/16)+u,a*Math.cos(2*i*Math.PI/16)+s,0),16===i?r.vertices.push(r.vertices[0]):r.vertices.push(c)}var f=new E.Line(r,n);return f.userData.gameUuid=o,f.userData.isAsteroid=!0,t.add(f),f}).getEntity;return Object(r.useEffect)(function(){var e=i();e.position.x=t.x,e.position.y=t.y,e.rotation.z=n.z},[t.x,t.y,n.z]),null},V=function(e){var t=e.position,n=e.direction,a=b(function(e){var r=e.scene,a=new E.LineBasicMaterial({color:16777215}),o=new E.Geometry;o.vertices.push(new E.Vector3(0,0,0),new E.Vector3(1,0,0));var i=new E.Line(o,a);return i.position.x=t.x,i.position.y=t.y,i.rotation.z=Math.atan2(n.y,n.x),r.add(i),i}).getEntity;return Object(r.useEffect)(function(){var e=a();e.position.x=t.x,e.position.y=t.y},[t.x,t.y]),null},k=n(9),z=new E.Raycaster;z.far=.1;var G=function(e,t){var n=e.position,r=e.radius;return Array(4).fill().map(function(){return Object(v.a)({},I({radius:r/2,box:t}),{position:n.clone()})})},I=function(e){var t=e.box,n=e.radius,r=void 0===n?12:n,a=t.max.x-t.min.x,o=t.max.y-t.min.y,i=new E.Vector3(Math.random()-.5,Math.random()-.5,0);return{position:new E.Vector3(Math.random()*a-a/2,Math.random()*o-o/2,0),rotation:new E.Vector3,radius:r,direction:i,uuid:E.Math.generateUUID()}},B=function(e,t){return t.map(function(t){return t.rotation.z+=1*t.radius/10*Math.PI/180,t.position.add(t.direction),e.containsPoint(t.position)||(t.position.x>e.max.x&&(t.position.x=e.min.x),t.position.x<e.min.x&&(t.position.x=e.max.x),t.position.y>e.max.y&&(t.position.y=e.min.y),t.position.y<e.min.y&&(t.position.y=e.max.y)),t})},D=function(e){var t,n,a=e.asteroidCount,o=b(),i=o.scene,c=o.timer,u=o.camera,s=Object(r.useRef)(function(e){var t=e.top,n=e.left,r=e.bottom,a=e.right;return new E.Box3(new E.Vector3(n,r,0),new E.Vector3(a,t,0))}(u)),l=Object(r.useReducer)(function(e,t){switch(t.type){case"SHOOT_LASER":return Object(v.a)({},e,{laserbeams:Object(k.a)(e.laserbeams).concat([function(e){var t=e.position;return{direction:e.direction,position:t,uuid:E.Math.generateUUID()}}(t)])});case"ADVANCE_GAME":var n=function(e){var t=e.laserbeams,n=e.asteroids,r=e.scene,a=e.boundingBox,o=[],i=[],c=n.reduce(function(e,t){return e[t.uuid]=t,e},{});t.forEach(function(e){var t=!1;z.set(e.position,e.direction);var n=z.intersectObjects(r.children);if(n.length){var u=n.find(function(e){return e.object.userData.isAsteroid}),s=u&&c[u.object.userData.gameUuid];s&&(delete c[s.uuid],t=!0,s.radius>1&&o.push.apply(o,Object(k.a)(G(s,a))))}e.position.add(e.direction),!t&&a.containsPoint(e.position)&&i.push(e)});var u=B(a,Object.values(c));return{asteroids:o.concat(u),laserbeams:i}}(e),r=n.laserbeams,a=n.asteroids;return Object(v.a)({},e,{laserbeams:r,asteroids:a});default:return e}},{asteroids:(t=a,n=s.current,Array(t).fill().map(function(){return I({box:n})})),laserbeams:[],scene:i,boundingBox:s.current}),d=Object(f.a)(l,2),m=d[0],p=m.laserbeams,h=m.asteroids,w=d[1];return Object(r.useEffect)(function(){return w({type:"ADVANCE_GAME"})},[c]),{laserbeams:p,asteroids:h,shootLaser:function(e,t){return w({type:"SHOOT_LASER",position:e,direction:t})}}},F=function(e){var t=e.offsetWidth/e.offsetHeight;return new E.OrthographicCamera(150*-t/2,150*t/2,75,-75,0,1)},H=function(e){var t=e.getContext("webgl"),n=new E.WebGLRenderer({canvas:e,context:t});return n.setSize(e.offsetWidth,e.offsetHeight),n.setPixelRatio(window.devicePixelRatio),n},W=function(){var e=new E.Scene;return e.background=new E.Color(0),e},U=function(e){var t=e.asteroidCount,n=D({asteroidCount:void 0===t?3:t}),r=n.laserbeams,o=n.asteroids,i=n.shootLaser;return a.a.createElement(a.a.Fragment,null,a.a.createElement(P,{shootLaser:i}),o.map(function(e){return a.a.createElement(A,Object.assign({key:e.uuid},e))}),r.map(function(e){return a.a.createElement(V,Object.assign({key:e.uuid},e))}))},N=function(){return a.a.createElement(w,{getCamera:F,getRenderer:H,getScene:W},a.a.createElement(U,null))},_=function(){return a.a.createElement(c.a,null,a.a.createElement(a.a.Fragment,null,a.a.createElement(u.a,{exact:!0,path:"/",render:function(){return a.a.createElement("div",{className:"foo"},a.a.createElement("h2",null,"Examples:"),a.a.createElement("div",null,a.a.createElement(s.a,{to:"/cube"},"Cube")),a.a.createElement("div",null,a.a.createElement(s.a,{to:"/asteroids"},"Asteroids")))}}),a.a.createElement(u.a,{path:"/cube",component:C}),a.a.createElement(u.a,{path:"/asteroids",component:N})))};i.a.render(a.a.createElement(_,null),document.getElementById("root"))}},[[14,2,1]]]);
//# sourceMappingURL=main.cc4b9381.chunk.js.map