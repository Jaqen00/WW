var yl=0,ao=1,Ml=2;var _s=1,Sl=2,Gi=3,Fn=0,Ht=1,An=2,En=0,pi=1,xs=2,oo=3,lo=4,bl=5;var $n=100,Tl=101,Al=102,El=103,wl=104,Cl=200,Rl=201,Il=202,Pl=203,er=204,tr=205,Ll=206,Dl=207,Nl=208,Ul=209,Fl=210,Ol=211,Bl=212,zl=213,Vl=214,nr=0,ir=1,sr=2,mi=3,rr=4,ar=5,or=6,lr=7,co=0,kl=1,Gl=2,mn=0,ho=1,uo=2,fo=3,po=4,mo=5,go=6,_o=7;var xo=300,ni=301,yi=302,Ur=303,Fr=304,vs=306,cr=1e3,Mn=1001,hr=1002,Dt=1003,Hl=1004;var ys=1005;var Ut=1006,Or=1007;var ii=1008;var sn=1009,vo=1010,yo=1011,Hi=1012,Br=1013,gn=1014,_n=1015,wn=1016,zr=1017,Vr=1018,Wi=1020,Mo=35902,So=35899,bo=1021,To=1022,ln=1023,Sn=1026,si=1027,Ao=1028,kr=1029,ri=1030,Gr=1031;var Hr=1033,Ms=33776,Ss=33777,bs=33778,Ts=33779,Wr=35840,Xr=35841,qr=35842,Yr=35843,Zr=36196,$r=37492,Jr=37496,Kr=37488,Qr=37489,As=37490,jr=37491,ea=37808,ta=37809,na=37810,ia=37811,sa=37812,ra=37813,aa=37814,oa=37815,la=37816,ca=37817,ha=37818,ua=37819,da=37820,fa=37821,pa=36492,ma=36494,ga=36495,_a=36283,xa=36284,Es=36285,va=36286;var es=2300,ur=2301,js=2302,Ka=2303,Qa=2400,ja=2401,eo=2402;var Wl=3200;var Eo=0,Xl=1,Bn="",Kt="srgb",ts="srgb-linear",ns="linear",ct="srgb";var ui=7680;var to=519,ql=512,Yl=513,Zl=514,ya=515,$l=516,Jl=517,Ma=518,Kl=519,no=35044;var wo="300 es",pn=2e3,is=2001;function Vc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function kc(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function ss(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ql(){let i=ss("canvas");return i.style.display="block",i}var el={},Bi=null;function Co(...i){let e="THREE."+i.shift();Bi?Bi("log",e,...i):console.log(e,...i)}function jl(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Be(...i){i=jl(i);let e="THREE."+i.shift();if(Bi)Bi("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ve(...i){i=jl(i);let e="THREE."+i.shift();if(Bi)Bi("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function fi(...i){let e=i.join(" ");e in el||(el[e]=!0,Be(...i))}function ec(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var tc={[nr]:ir,[sr]:or,[rr]:lr,[mi]:ar,[ir]:nr,[or]:sr,[lr]:rr,[ar]:mi},bn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ca=Math.PI/180,dr=180/Math.PI;function ws(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Bt[i&255]+Bt[i>>8&255]+Bt[i>>16&255]+Bt[i>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[t&63|128]+Bt[t>>8&255]+"-"+Bt[t>>16&255]+Bt[t>>24&255]+Bt[n&255]+Bt[n>>8&255]+Bt[n>>16&255]+Bt[n>>24&255]).toLowerCase()}function it(i,e,t){return Math.max(e,Math.min(t,i))}function Gc(i,e){return(i%e+e)%e}function Ra(i,e,t){return(1-t)*i+t*e}function $i(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Xt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Do=class Do{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(it(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(it(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Do.prototype.isVector2=!0;var tt=Do,Tn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],d=n[s+2],m=n[s+3],h=r[a+0],p=r[a+1],_=r[a+2],M=r[a+3];if(m!==M||c!==h||l!==p||d!==_){let f=c*h+l*p+d*_+m*M;f<0&&(h=-h,p=-p,_=-_,M=-M,f=-f);let u=1-o;if(f<.9995){let A=Math.acos(f),R=Math.sin(A);u=Math.sin(u*A)/R,o=Math.sin(o*A)/R,c=c*u+h*o,l=l*u+p*o,d=d*u+_*o,m=m*u+M*o}else{c=c*u+h*o,l=l*u+p*o,d=d*u+_*o,m=m*u+M*o;let A=1/Math.sqrt(c*c+l*l+d*d+m*m);c*=A,l*=A,d*=A,m*=A}}e[t]=c,e[t+1]=l,e[t+2]=d,e[t+3]=m}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],d=n[s+3],m=r[a],h=r[a+1],p=r[a+2],_=r[a+3];return e[t]=o*_+d*m+c*p-l*h,e[t+1]=c*_+d*h+l*m-o*p,e[t+2]=l*_+d*p+o*h-c*m,e[t+3]=d*_-o*m-c*h-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),d=o(s/2),m=o(r/2),h=c(n/2),p=c(s/2),_=c(r/2);switch(a){case"XYZ":this._x=h*d*m+l*p*_,this._y=l*p*m-h*d*_,this._z=l*d*_+h*p*m,this._w=l*d*m-h*p*_;break;case"YXZ":this._x=h*d*m+l*p*_,this._y=l*p*m-h*d*_,this._z=l*d*_-h*p*m,this._w=l*d*m+h*p*_;break;case"ZXY":this._x=h*d*m-l*p*_,this._y=l*p*m+h*d*_,this._z=l*d*_+h*p*m,this._w=l*d*m-h*p*_;break;case"ZYX":this._x=h*d*m-l*p*_,this._y=l*p*m+h*d*_,this._z=l*d*_-h*p*m,this._w=l*d*m+h*p*_;break;case"YZX":this._x=h*d*m+l*p*_,this._y=l*p*m+h*d*_,this._z=l*d*_-h*p*m,this._w=l*d*m-h*p*_;break;case"XZY":this._x=h*d*m-l*p*_,this._y=l*p*m-h*d*_,this._z=l*d*_+h*p*m,this._w=l*d*m+h*p*_;break;default:Be("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],d=t[6],m=t[10],h=n+o+m;if(h>0){let p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(d-c)*p,this._y=(r-l)*p,this._z=(a-s)*p}else if(n>o&&n>m){let p=2*Math.sqrt(1+n-o-m);this._w=(d-c)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+l)/p}else if(o>m){let p=2*Math.sqrt(1+o-n-m);this._w=(r-l)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(c+d)/p}else{let p=2*Math.sqrt(1+m-n-o);this._w=(a-s)/p,this._x=(r+l)/p,this._y=(c+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(it(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,d=t._w;return this._x=n*d+a*o+s*l-r*c,this._y=s*d+a*c+r*o-n*l,this._z=r*d+a*l+n*c-s*o,this._w=a*d-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){let l=Math.acos(o),d=Math.sin(l);c=Math.sin(c*l)/d,t=Math.sin(t*l)/d,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},No=class No{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(tl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(tl.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),d=2*(o*t-r*s),m=2*(r*n-a*t);return this.x=t+c*l+a*m-o*d,this.y=n+c*d+o*l-r*m,this.z=s+c*m+r*d-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(it(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ia.copy(this).projectOnVector(e),this.sub(Ia)}reflect(e){return this.sub(Ia.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(it(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};No.prototype.isVector3=!0;var V=No,Ia=new V,tl=new Tn,Uo=class Uo{constructor(e,t,n,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){let d=this.elements;return d[0]=e,d[1]=s,d[2]=o,d[3]=t,d[4]=r,d[5]=c,d[6]=n,d[7]=a,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],d=n[4],m=n[7],h=n[2],p=n[5],_=n[8],M=s[0],f=s[3],u=s[6],A=s[1],R=s[4],y=s[7],T=s[2],E=s[5],I=s[8];return r[0]=a*M+o*A+c*T,r[3]=a*f+o*R+c*E,r[6]=a*u+o*y+c*I,r[1]=l*M+d*A+m*T,r[4]=l*f+d*R+m*E,r[7]=l*u+d*y+m*I,r[2]=h*M+p*A+_*T,r[5]=h*f+p*R+_*E,r[8]=h*u+p*y+_*I,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],d=e[8];return t*a*d-t*o*l-n*r*d+n*o*c+s*r*l-s*a*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],d=e[8],m=d*a-o*l,h=o*c-d*r,p=l*r-a*c,_=t*m+n*h+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/_;return e[0]=m*M,e[1]=(s*l-d*n)*M,e[2]=(o*n-s*a)*M,e[3]=h*M,e[4]=(d*t-s*c)*M,e[5]=(s*r-o*t)*M,e[6]=p*M,e[7]=(n*c-l*t)*M,e[8]=(a*t-n*r)*M,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return fi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Pa.makeScale(e,t)),this}rotate(e){return fi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Pa.makeRotation(-e)),this}translate(e,t){return fi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Pa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Uo.prototype.isMatrix3=!0;var Ge=Uo,Pa=new Ge,nl=new Ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),il=new Ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Hc(){let i={enabled:!0,workingColorSpace:ts,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ct&&(s.r=Un(s.r),s.g=Un(s.g),s.b=Un(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ct&&(s.r=Oi(s.r),s.g=Oi(s.g),s.b=Oi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Bn?ns:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return fi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return fi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ts]:{primaries:e,whitePoint:n,transfer:ns,toXYZ:nl,fromXYZ:il,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Kt},outputColorSpaceConfig:{drawingBufferColorSpace:Kt}},[Kt]:{primaries:e,whitePoint:n,transfer:ct,toXYZ:nl,fromXYZ:il,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Kt}}}),i}var et=Hc();function Un(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Oi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ai,fr=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ai===void 0&&(Ai=ss("canvas")),Ai.width=e.width,Ai.height=e.height;let s=Ai.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Ai}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ss("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Un(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Un(t[n]/255)*255):t[n]=Un(t[n]);return{data:t,width:e.width,height:e.height}}else return Be("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Wc=0,zi=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Wc++}),this.uuid=ws(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(La(s[a].image)):r.push(La(s[a]))}else r=La(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function La(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?fr.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Be("Texture: Unable to serialize Texture."),{})}var Xc=0,Da=new V,qt=class i extends bn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Mn,s=Mn,r=Ut,a=ii,o=ln,c=sn,l=i.DEFAULT_ANISOTROPY,d=Bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Xc++}),this.uuid=ws(),this.name="",this.source=new zi(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new tt(0,0),this.repeat=new tt(1,1),this.center=new tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Da).x}get height(){return this.source.getSize(Da).y}get depth(){return this.source.getSize(Da).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Be(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Be(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==xo)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case cr:e.x=e.x-Math.floor(e.x);break;case Mn:e.x=e.x<0?0:1;break;case hr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case cr:e.y=e.y-Math.floor(e.y);break;case Mn:e.y=e.y<0?0:1;break;case hr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};qt.DEFAULT_IMAGE=null;qt.DEFAULT_MAPPING=xo;qt.DEFAULT_ANISOTROPY=1;var Fo=class Fo{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],d=c[4],m=c[8],h=c[1],p=c[5],_=c[9],M=c[2],f=c[6],u=c[10];if(Math.abs(d-h)<.01&&Math.abs(m-M)<.01&&Math.abs(_-f)<.01){if(Math.abs(d+h)<.1&&Math.abs(m+M)<.1&&Math.abs(_+f)<.1&&Math.abs(l+p+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let R=(l+1)/2,y=(p+1)/2,T=(u+1)/2,E=(d+h)/4,I=(m+M)/4,x=(_+f)/4;return R>y&&R>T?R<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(R),s=E/n,r=I/n):y>T?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=E/s,r=x/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=I/r,s=x/r),this.set(n,s,r,t),this}let A=Math.sqrt((f-_)*(f-_)+(m-M)*(m-M)+(h-d)*(h-d));return Math.abs(A)<.001&&(A=1),this.x=(f-_)/A,this.y=(m-M)/A,this.z=(h-d)/A,this.w=Math.acos((l+p+u-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this.w=it(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this.w=it(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(it(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Fo.prototype.isVector4=!0;var yt=Fo,pr=class extends bn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ut,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new yt(0,0,e,t),this.scissorTest=!1,this.viewport=new yt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new qt(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Ut,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new zi(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},jt=class extends pr{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},rs=class extends qt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=Mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var mr=class extends qt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=Mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Nr=class Nr{constructor(e,t,n,s,r,a,o,c,l,d,m,h,p,_,M,f){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,d,m,h,p,_,M,f)}set(e,t,n,s,r,a,o,c,l,d,m,h,p,_,M,f){let u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=s,u[1]=r,u[5]=a,u[9]=o,u[13]=c,u[2]=l,u[6]=d,u[10]=m,u[14]=h,u[3]=p,u[7]=_,u[11]=M,u[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Nr().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Ei.setFromMatrixColumn(e,0).length(),r=1/Ei.setFromMatrixColumn(e,1).length(),a=1/Ei.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),d=Math.cos(r),m=Math.sin(r);if(e.order==="XYZ"){let h=a*d,p=a*m,_=o*d,M=o*m;t[0]=c*d,t[4]=-c*m,t[8]=l,t[1]=p+_*l,t[5]=h-M*l,t[9]=-o*c,t[2]=M-h*l,t[6]=_+p*l,t[10]=a*c}else if(e.order==="YXZ"){let h=c*d,p=c*m,_=l*d,M=l*m;t[0]=h+M*o,t[4]=_*o-p,t[8]=a*l,t[1]=a*m,t[5]=a*d,t[9]=-o,t[2]=p*o-_,t[6]=M+h*o,t[10]=a*c}else if(e.order==="ZXY"){let h=c*d,p=c*m,_=l*d,M=l*m;t[0]=h-M*o,t[4]=-a*m,t[8]=_+p*o,t[1]=p+_*o,t[5]=a*d,t[9]=M-h*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let h=a*d,p=a*m,_=o*d,M=o*m;t[0]=c*d,t[4]=_*l-p,t[8]=h*l+M,t[1]=c*m,t[5]=M*l+h,t[9]=p*l-_,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let h=a*c,p=a*l,_=o*c,M=o*l;t[0]=c*d,t[4]=M-h*m,t[8]=_*m+p,t[1]=m,t[5]=a*d,t[9]=-o*d,t[2]=-l*d,t[6]=p*m+_,t[10]=h-M*m}else if(e.order==="XZY"){let h=a*c,p=a*l,_=o*c,M=o*l;t[0]=c*d,t[4]=-m,t[8]=l*d,t[1]=h*m+M,t[5]=a*d,t[9]=p*m-_,t[2]=_*m-p,t[6]=o*d,t[10]=M*m+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(qc,e,Yc)}lookAt(e,t,n){let s=this.elements;return $t.subVectors(e,t),$t.lengthSq()===0&&($t.z=1),$t.normalize(),Gn.crossVectors(n,$t),Gn.lengthSq()===0&&(Math.abs(n.z)===1?$t.x+=1e-4:$t.z+=1e-4,$t.normalize(),Gn.crossVectors(n,$t)),Gn.normalize(),Ps.crossVectors($t,Gn),s[0]=Gn.x,s[4]=Ps.x,s[8]=$t.x,s[1]=Gn.y,s[5]=Ps.y,s[9]=$t.y,s[2]=Gn.z,s[6]=Ps.z,s[10]=$t.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],d=n[1],m=n[5],h=n[9],p=n[13],_=n[2],M=n[6],f=n[10],u=n[14],A=n[3],R=n[7],y=n[11],T=n[15],E=s[0],I=s[4],x=s[8],w=s[12],L=s[1],C=s[5],U=s[9],X=s[13],te=s[2],O=s[6],J=s[10],H=s[14],ee=s[3],ie=s[7],ue=s[11],_e=s[15];return r[0]=a*E+o*L+c*te+l*ee,r[4]=a*I+o*C+c*O+l*ie,r[8]=a*x+o*U+c*J+l*ue,r[12]=a*w+o*X+c*H+l*_e,r[1]=d*E+m*L+h*te+p*ee,r[5]=d*I+m*C+h*O+p*ie,r[9]=d*x+m*U+h*J+p*ue,r[13]=d*w+m*X+h*H+p*_e,r[2]=_*E+M*L+f*te+u*ee,r[6]=_*I+M*C+f*O+u*ie,r[10]=_*x+M*U+f*J+u*ue,r[14]=_*w+M*X+f*H+u*_e,r[3]=A*E+R*L+y*te+T*ee,r[7]=A*I+R*C+y*O+T*ie,r[11]=A*x+R*U+y*J+T*ue,r[15]=A*w+R*X+y*H+T*_e,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],d=e[2],m=e[6],h=e[10],p=e[14],_=e[3],M=e[7],f=e[11],u=e[15],A=c*p-l*h,R=o*p-l*m,y=o*h-c*m,T=a*p-l*d,E=a*h-c*d,I=a*m-o*d;return t*(M*A-f*R+u*y)-n*(_*A-f*T+u*E)+s*(_*R-M*T+u*I)-r*(_*y-M*E+f*I)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],c=e[2],l=e[6],d=e[10];return t*(a*d-o*l)-n*(r*d-o*c)+s*(r*l-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],d=e[8],m=e[9],h=e[10],p=e[11],_=e[12],M=e[13],f=e[14],u=e[15],A=t*o-n*a,R=t*c-s*a,y=t*l-r*a,T=n*c-s*o,E=n*l-r*o,I=s*l-r*c,x=d*M-m*_,w=d*f-h*_,L=d*u-p*_,C=m*f-h*M,U=m*u-p*M,X=h*u-p*f,te=A*X-R*U+y*C+T*L-E*w+I*x;if(te===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/te;return e[0]=(o*X-c*U+l*C)*O,e[1]=(s*U-n*X-r*C)*O,e[2]=(M*I-f*E+u*T)*O,e[3]=(h*E-m*I-p*T)*O,e[4]=(c*L-a*X-l*w)*O,e[5]=(t*X-s*L+r*w)*O,e[6]=(f*y-_*I-u*R)*O,e[7]=(d*I-h*y+p*R)*O,e[8]=(a*U-o*L+l*x)*O,e[9]=(n*L-t*U-r*x)*O,e[10]=(_*E-M*y+u*A)*O,e[11]=(m*y-d*E-p*A)*O,e[12]=(o*w-a*C-c*x)*O,e[13]=(t*C-n*w+s*x)*O,e[14]=(M*R-_*T-f*A)*O,e[15]=(d*T-m*R+h*A)*O,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,d=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,d*o+n,d*c-s*a,0,l*c-s*o,d*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,d=a+a,m=o+o,h=r*l,p=r*d,_=r*m,M=a*d,f=a*m,u=o*m,A=c*l,R=c*d,y=c*m,T=n.x,E=n.y,I=n.z;return s[0]=(1-(M+u))*T,s[1]=(p+y)*T,s[2]=(_-R)*T,s[3]=0,s[4]=(p-y)*E,s[5]=(1-(h+u))*E,s[6]=(f+A)*E,s[7]=0,s[8]=(_+R)*I,s[9]=(f-A)*I,s[10]=(1-(h+M))*I,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Ei.set(s[0],s[1],s[2]).length(),o=Ei.set(s[4],s[5],s[6]).length(),c=Ei.set(s[8],s[9],s[10]).length();r<0&&(a=-a),un.copy(this);let l=1/a,d=1/o,m=1/c;return un.elements[0]*=l,un.elements[1]*=l,un.elements[2]*=l,un.elements[4]*=d,un.elements[5]*=d,un.elements[6]*=d,un.elements[8]*=m,un.elements[9]*=m,un.elements[10]*=m,t.setFromRotationMatrix(un),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,s,r,a,o=pn,c=!1){let l=this.elements,d=2*r/(t-e),m=2*r/(n-s),h=(t+e)/(t-e),p=(n+s)/(n-s),_,M;if(c)_=r/(a-r),M=a*r/(a-r);else if(o===pn)_=-(a+r)/(a-r),M=-2*a*r/(a-r);else if(o===is)_=-a/(a-r),M=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=d,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=m,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=M,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=pn,c=!1){let l=this.elements,d=2/(t-e),m=2/(n-s),h=-(t+e)/(t-e),p=-(n+s)/(n-s),_,M;if(c)_=1/(a-r),M=a/(a-r);else if(o===pn)_=-2/(a-r),M=-(a+r)/(a-r);else if(o===is)_=-1/(a-r),M=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=d,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=m,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=_,l[14]=M,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Nr.prototype.isMatrix4=!0;var bt=Nr,Ei=new V,un=new bt,qc=new V(0,0,0),Yc=new V(1,1,1),Gn=new V,Ps=new V,$t=new V,sl=new bt,rl=new Tn,Jn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],d=s[9],m=s[2],h=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(it(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-it(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-m,r),this._z=0);break;case"ZXY":this._x=Math.asin(it(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-m,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-it(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(it(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,l),this._y=Math.atan2(-m,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-it(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,p),this._y=0);break;default:Be("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return sl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(sl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return rl.setFromEuler(this),this.setFromQuaternion(rl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Jn.DEFAULT_ORDER="XYZ";var as=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Zc=0,al=new V,wi=new Tn,In=new bt,Ls=new V,Ji=new V,$c=new V,Jc=new Tn,ol=new V(1,0,0),ll=new V(0,1,0),cl=new V(0,0,1),hl={type:"added"},Kc={type:"removed"},Ci={type:"childadded",child:null},Na={type:"childremoved",child:null},en=class i extends bn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zc++}),this.uuid=ws(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new V,t=new Jn,n=new Tn,s=new V(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new bt},normalMatrix:{value:new Ge}}),this.matrix=new bt,this.matrixWorld=new bt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new as,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return wi.setFromAxisAngle(e,t),this.quaternion.multiply(wi),this}rotateOnWorldAxis(e,t){return wi.setFromAxisAngle(e,t),this.quaternion.premultiply(wi),this}rotateX(e){return this.rotateOnAxis(ol,e)}rotateY(e){return this.rotateOnAxis(ll,e)}rotateZ(e){return this.rotateOnAxis(cl,e)}translateOnAxis(e,t){return al.copy(e).applyQuaternion(this.quaternion),this.position.add(al.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ol,e)}translateY(e){return this.translateOnAxis(ll,e)}translateZ(e){return this.translateOnAxis(cl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(In.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ls.copy(e):Ls.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ji.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?In.lookAt(Ji,Ls,this.up):In.lookAt(Ls,Ji,this.up),this.quaternion.setFromRotationMatrix(In),s&&(In.extractRotation(s.matrixWorld),wi.setFromRotationMatrix(In),this.quaternion.premultiply(wi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ve("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(hl),Ci.child=e,this.dispatchEvent(Ci),Ci.child=null):Ve("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Kc),Na.child=e,this.dispatchEvent(Na),Na.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),In.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),In.multiply(e.parent.matrixWorld)),e.applyMatrix4(In),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(hl),Ci.child=e,this.dispatchEvent(Ci),Ci.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ji,e,$c),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ji,Jc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,d=c.length;l<d;l++){let m=c[l];r(e.shapes,m)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),d=a(e.images),m=a(e.shapes),h=a(e.skeletons),p=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),d.length>0&&(n.images=d),m.length>0&&(n.shapes=m),h.length>0&&(n.skeletons=h),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){let c=[];for(let l in o){let d=o[l];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};en.DEFAULT_UP=new V(0,1,0);en.DEFAULT_MATRIX_AUTO_UPDATE=!0;en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var di=class extends en{constructor(){super(),this.isGroup=!0,this.type="Group"}},Qc={type:"move"},Vi=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new di,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new di,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new di,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let M of e.hand.values()){let f=t.getJointPose(M,n),u=this._getHandJoint(l,M);f!==null&&(u.matrix.fromArray(f.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=f.radius),u.visible=f!==null}let d=l.joints["index-finger-tip"],m=l.joints["thumb-tip"],h=d.position.distanceTo(m.position),p=.02,_=.005;l.inputState.pinching&&h>p+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=p-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Qc)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new di;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},nc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hn={h:0,s:0,l:0},Ds={h:0,s:0,l:0};function Ua(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var st=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=et.workingColorSpace){return this.r=e,this.g=t,this.b=n,et.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=et.workingColorSpace){if(e=Gc(e,1),t=it(t,0,1),n=it(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Ua(a,r,e+1/3),this.g=Ua(a,r,e),this.b=Ua(a,r,e-1/3)}return et.colorSpaceToWorking(this,s),this}setStyle(e,t=Kt){function n(r){r!==void 0&&parseFloat(r)<1&&Be("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Be("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Be("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Kt){let n=nc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Be("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Un(e.r),this.g=Un(e.g),this.b=Un(e.b),this}copyLinearToSRGB(e){return this.r=Oi(e.r),this.g=Oi(e.g),this.b=Oi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kt){return et.workingToColorSpace(zt.copy(this),e),Math.round(it(zt.r*255,0,255))*65536+Math.round(it(zt.g*255,0,255))*256+Math.round(it(zt.b*255,0,255))}getHexString(e=Kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.workingToColorSpace(zt.copy(this),t);let n=zt.r,s=zt.g,r=zt.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,d=(o+a)/2;if(o===a)c=0,l=0;else{let m=a-o;switch(l=d<=.5?m/(a+o):m/(2-a-o),a){case n:c=(s-r)/m+(s<r?6:0);break;case s:c=(r-n)/m+2;break;case r:c=(n-s)/m+4;break}c/=6}return e.h=c,e.s=l,e.l=d,e}getRGB(e,t=et.workingColorSpace){return et.workingToColorSpace(zt.copy(this),t),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=Kt){et.workingToColorSpace(zt.copy(this),e);let t=zt.r,n=zt.g,s=zt.b;return e!==Kt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Hn),this.setHSL(Hn.h+e,Hn.s+t,Hn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Hn),e.getHSL(Ds);let n=Ra(Hn.h,Ds.h,t),s=Ra(Hn.s,Ds.s,t),r=Ra(Hn.l,Ds.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},zt=new st;st.NAMES=nc;var gi=class extends en{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Jn,this.environmentIntensity=1,this.environmentRotation=new Jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},dn=new V,Pn=new V,Fa=new V,Ln=new V,Ri=new V,Ii=new V,ul=new V,Oa=new V,Ba=new V,za=new V,Va=new yt,ka=new yt,Ga=new yt,Zn=class i{constructor(e=new V,t=new V,n=new V){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),dn.subVectors(e,t),s.cross(dn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){dn.subVectors(s,t),Pn.subVectors(n,t),Fa.subVectors(e,t);let a=dn.dot(dn),o=dn.dot(Pn),c=dn.dot(Fa),l=Pn.dot(Pn),d=Pn.dot(Fa),m=a*l-o*o;if(m===0)return r.set(0,0,0),null;let h=1/m,p=(l*c-o*d)*h,_=(a*d-o*c)*h;return r.set(1-p-_,_,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Ln)===null?!1:Ln.x>=0&&Ln.y>=0&&Ln.x+Ln.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,Ln)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Ln.x),c.addScaledVector(a,Ln.y),c.addScaledVector(o,Ln.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return Va.setScalar(0),ka.setScalar(0),Ga.setScalar(0),Va.fromBufferAttribute(e,t),ka.fromBufferAttribute(e,n),Ga.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Va,r.x),a.addScaledVector(ka,r.y),a.addScaledVector(Ga,r.z),a}static isFrontFacing(e,t,n,s){return dn.subVectors(n,t),Pn.subVectors(e,t),dn.cross(Pn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return dn.subVectors(this.c,this.b),Pn.subVectors(this.a,this.b),dn.cross(Pn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Ri.subVectors(s,n),Ii.subVectors(r,n),Oa.subVectors(e,n);let c=Ri.dot(Oa),l=Ii.dot(Oa);if(c<=0&&l<=0)return t.copy(n);Ba.subVectors(e,s);let d=Ri.dot(Ba),m=Ii.dot(Ba);if(d>=0&&m<=d)return t.copy(s);let h=c*m-d*l;if(h<=0&&c>=0&&d<=0)return a=c/(c-d),t.copy(n).addScaledVector(Ri,a);za.subVectors(e,r);let p=Ri.dot(za),_=Ii.dot(za);if(_>=0&&p<=_)return t.copy(r);let M=p*l-c*_;if(M<=0&&l>=0&&_<=0)return o=l/(l-_),t.copy(n).addScaledVector(Ii,o);let f=d*_-p*m;if(f<=0&&m-d>=0&&p-_>=0)return ul.subVectors(r,s),o=(m-d)/(m-d+(p-_)),t.copy(s).addScaledVector(ul,o);let u=1/(f+M+h);return a=M*u,o=h*u,t.copy(n).addScaledVector(Ri,a).addScaledVector(Ii,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Kn=class{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(fn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(fn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=fn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,fn):fn.fromBufferAttribute(r,a),fn.applyMatrix4(e.matrixWorld),this.expandByPoint(fn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ns.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ns.copy(n.boundingBox)),Ns.applyMatrix4(e.matrixWorld),this.union(Ns)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,fn),fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ki),Us.subVectors(this.max,Ki),Pi.subVectors(e.a,Ki),Li.subVectors(e.b,Ki),Di.subVectors(e.c,Ki),Wn.subVectors(Li,Pi),Xn.subVectors(Di,Li),oi.subVectors(Pi,Di);let t=[0,-Wn.z,Wn.y,0,-Xn.z,Xn.y,0,-oi.z,oi.y,Wn.z,0,-Wn.x,Xn.z,0,-Xn.x,oi.z,0,-oi.x,-Wn.y,Wn.x,0,-Xn.y,Xn.x,0,-oi.y,oi.x,0];return!Ha(t,Pi,Li,Di,Us)||(t=[1,0,0,0,1,0,0,0,1],!Ha(t,Pi,Li,Di,Us))?!1:(Fs.crossVectors(Wn,Xn),t=[Fs.x,Fs.y,Fs.z],Ha(t,Pi,Li,Di,Us))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Dn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Dn=[new V,new V,new V,new V,new V,new V,new V,new V],fn=new V,Ns=new Kn,Pi=new V,Li=new V,Di=new V,Wn=new V,Xn=new V,oi=new V,Ki=new V,Us=new V,Fs=new V,li=new V;function Ha(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){li.fromArray(i,r);let o=s.x*Math.abs(li.x)+s.y*Math.abs(li.y)+s.z*Math.abs(li.z),c=e.dot(li),l=t.dot(li),d=n.dot(li);if(Math.max(-Math.max(c,l,d),Math.min(c,l,d))>o)return!1}return!0}var wt=new V,Os=new tt,jc=0,Qt=class extends bn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:jc++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=no,this.updateRanges=[],this.gpuType=_n,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Os.fromBufferAttribute(this,t),Os.applyMatrix3(e),this.setXY(t,Os.x,Os.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix3(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=$i(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Xt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=$i(t,this.array)),t}setX(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=$i(t,this.array)),t}setY(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=$i(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=$i(t,this.array)),t}setW(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),n=Xt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),n=Xt(n,this.array),s=Xt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),n=Xt(n,this.array),s=Xt(s,this.array),r=Xt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==no&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}};var os=class extends Qt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var ls=class extends Qt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ct=class extends Qt{constructor(e,t,n){super(new Float32Array(e),t,n)}},eh=new Kn,Qi=new V,Wa=new V,_i=class{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):eh.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qi.subVectors(e,this.center);let t=Qi.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Qi,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Wa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qi.copy(e.center).add(Wa)),this.expandByPoint(Qi.copy(e.center).sub(Wa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},th=0,on=new bt,Xa=new en,Ni=new V,Jt=new Kn,ji=new Kn,Lt=new V,tn=class i extends bn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:th++}),this.uuid=ws(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Vc(e)?ls:os)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ge().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return on.makeRotationFromQuaternion(e),this.applyMatrix4(on),this}rotateX(e){return on.makeRotationX(e),this.applyMatrix4(on),this}rotateY(e){return on.makeRotationY(e),this.applyMatrix4(on),this}rotateZ(e){return on.makeRotationZ(e),this.applyMatrix4(on),this}translate(e,t,n){return on.makeTranslation(e,t,n),this.applyMatrix4(on),this}scale(e,t,n){return on.makeScale(e,t,n),this.applyMatrix4(on),this}lookAt(e){return Xa.lookAt(e),Xa.updateMatrix(),this.applyMatrix4(Xa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ni).negate(),this.translate(Ni.x,Ni.y,Ni.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ct(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Be("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Kn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ve("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Jt.setFromBufferAttribute(r),this.morphTargetsRelative?(Lt.addVectors(this.boundingBox.min,Jt.min),this.boundingBox.expandByPoint(Lt),Lt.addVectors(this.boundingBox.max,Jt.max),this.boundingBox.expandByPoint(Lt)):(this.boundingBox.expandByPoint(Jt.min),this.boundingBox.expandByPoint(Jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ve('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _i);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ve("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){let n=this.boundingSphere.center;if(Jt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];ji.setFromBufferAttribute(o),this.morphTargetsRelative?(Lt.addVectors(Jt.min,ji.min),Jt.expandByPoint(Lt),Lt.addVectors(Jt.max,ji.max),Jt.expandByPoint(Lt)):(Jt.expandByPoint(ji.min),Jt.expandByPoint(ji.max))}Jt.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Lt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Lt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,d=o.count;l<d;l++)Lt.fromBufferAttribute(o,l),c&&(Ni.fromBufferAttribute(e,l),Lt.add(Ni)),s=Math.max(s,n.distanceToSquared(Lt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ve('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ve("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Qt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[];for(let x=0;x<n.count;x++)o[x]=new V,c[x]=new V;let l=new V,d=new V,m=new V,h=new tt,p=new tt,_=new tt,M=new V,f=new V;function u(x,w,L){l.fromBufferAttribute(n,x),d.fromBufferAttribute(n,w),m.fromBufferAttribute(n,L),h.fromBufferAttribute(r,x),p.fromBufferAttribute(r,w),_.fromBufferAttribute(r,L),d.sub(l),m.sub(l),p.sub(h),_.sub(h);let C=1/(p.x*_.y-_.x*p.y);isFinite(C)&&(M.copy(d).multiplyScalar(_.y).addScaledVector(m,-p.y).multiplyScalar(C),f.copy(m).multiplyScalar(p.x).addScaledVector(d,-_.x).multiplyScalar(C),o[x].add(M),o[w].add(M),o[L].add(M),c[x].add(f),c[w].add(f),c[L].add(f))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let x=0,w=A.length;x<w;++x){let L=A[x],C=L.start,U=L.count;for(let X=C,te=C+U;X<te;X+=3)u(e.getX(X+0),e.getX(X+1),e.getX(X+2))}let R=new V,y=new V,T=new V,E=new V;function I(x){T.fromBufferAttribute(s,x),E.copy(T);let w=o[x];R.copy(w),R.sub(T.multiplyScalar(T.dot(w))).normalize(),y.crossVectors(E,w);let C=y.dot(c[x])<0?-1:1;a.setXYZW(x,R.x,R.y,R.z,C)}for(let x=0,w=A.length;x<w;++x){let L=A[x],C=L.start,U=L.count;for(let X=C,te=C+U;X<te;X+=3)I(e.getX(X+0)),I(e.getX(X+1)),I(e.getX(X+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Qt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,p=n.count;h<p;h++)n.setXYZ(h,0,0,0);let s=new V,r=new V,a=new V,o=new V,c=new V,l=new V,d=new V,m=new V;if(e)for(let h=0,p=e.count;h<p;h+=3){let _=e.getX(h+0),M=e.getX(h+1),f=e.getX(h+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,M),a.fromBufferAttribute(t,f),d.subVectors(a,r),m.subVectors(s,r),d.cross(m),o.fromBufferAttribute(n,_),c.fromBufferAttribute(n,M),l.fromBufferAttribute(n,f),o.add(d),c.add(d),l.add(d),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(M,c.x,c.y,c.z),n.setXYZ(f,l.x,l.y,l.z)}else for(let h=0,p=t.count;h<p;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),d.subVectors(a,r),m.subVectors(s,r),d.cross(m),n.setXYZ(h+0,d.x,d.y,d.z),n.setXYZ(h+1,d.x,d.y,d.z),n.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Lt.fromBufferAttribute(e,t),Lt.normalize(),e.setXYZ(t,Lt.x,Lt.y,Lt.z)}toNonIndexed(){function e(o,c){let l=o.array,d=o.itemSize,m=o.normalized,h=new l.constructor(c.length*d),p=0,_=0;for(let M=0,f=c.length;M<f;M++){o.isInterleavedBufferAttribute?p=c[M]*o.data.stride+o.offset:p=c[M]*d;for(let u=0;u<d;u++)h[_++]=l[p++]}return new Qt(h,d,m)}if(this.index===null)return Be("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=e(c,n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let d=0,m=l.length;d<m;d++){let h=l[d],p=e(h,n);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],d=[];for(let m=0,h=l.length;m<h;m++){let p=l[m];d.push(p.toJSON(e.data))}d.length>0&&(s[c]=d,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let d=s[l];this.setAttribute(l,d.clone(t))}let r=e.morphAttributes;for(let l in r){let d=[],m=r[l];for(let h=0,p=m.length;h<p;h++)d.push(m[h].clone(t));this.morphAttributes[l]=d}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,d=a.length;l<d;l++){let m=a[l];this.addGroup(m.start,m.count,m.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var nh=0,Qn=class extends bn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nh++}),this.uuid=ws(),this.name="",this.type="Material",this.blending=pi,this.side=Fn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=er,this.blendDst=tr,this.blendEquation=$n,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new st(0,0,0),this.blendAlpha=0,this.depthFunc=mi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=to,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ui,this.stencilZFail=ui,this.stencilZPass=ui,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Be(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Be(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==pi&&(n.blending=this.blending),this.side!==Fn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==er&&(n.blendSrc=this.blendSrc),this.blendDst!==tr&&(n.blendDst=this.blendDst),this.blendEquation!==$n&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==mi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==to&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ui&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ui&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ui&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new st().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new tt().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new tt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Nn=new V,qa=new V,Bs=new V,qn=new V,Ya=new V,zs=new V,Za=new V,cs=class{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Nn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Nn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Nn.copy(this.origin).addScaledVector(this.direction,t),Nn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){qa.copy(e).add(t).multiplyScalar(.5),Bs.copy(t).sub(e).normalize(),qn.copy(this.origin).sub(qa);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Bs),o=qn.dot(this.direction),c=-qn.dot(Bs),l=qn.lengthSq(),d=Math.abs(1-a*a),m,h,p,_;if(d>0)if(m=a*c-o,h=a*o-c,_=r*d,m>=0)if(h>=-_)if(h<=_){let M=1/d;m*=M,h*=M,p=m*(m+a*h+2*o)+h*(a*m+h+2*c)+l}else h=r,m=Math.max(0,-(a*h+o)),p=-m*m+h*(h+2*c)+l;else h=-r,m=Math.max(0,-(a*h+o)),p=-m*m+h*(h+2*c)+l;else h<=-_?(m=Math.max(0,-(-a*r+o)),h=m>0?-r:Math.min(Math.max(-r,-c),r),p=-m*m+h*(h+2*c)+l):h<=_?(m=0,h=Math.min(Math.max(-r,-c),r),p=h*(h+2*c)+l):(m=Math.max(0,-(a*r+o)),h=m>0?r:Math.min(Math.max(-r,-c),r),p=-m*m+h*(h+2*c)+l);else h=a>0?-r:r,m=Math.max(0,-(a*h+o)),p=-m*m+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,m),s&&s.copy(qa).addScaledVector(Bs,h),p}intersectSphere(e,t){Nn.subVectors(e.center,this.origin);let n=Nn.dot(this.direction),s=Nn.dot(Nn)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c,l=1/this.direction.x,d=1/this.direction.y,m=1/this.direction.z,h=this.origin;return l>=0?(n=(e.min.x-h.x)*l,s=(e.max.x-h.x)*l):(n=(e.max.x-h.x)*l,s=(e.min.x-h.x)*l),d>=0?(r=(e.min.y-h.y)*d,a=(e.max.y-h.y)*d):(r=(e.max.y-h.y)*d,a=(e.min.y-h.y)*d),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),m>=0?(o=(e.min.z-h.z)*m,c=(e.max.z-h.z)*m):(o=(e.max.z-h.z)*m,c=(e.min.z-h.z)*m),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Nn)!==null}intersectTriangle(e,t,n,s,r){Ya.subVectors(t,e),zs.subVectors(n,e),Za.crossVectors(Ya,zs);let a=this.direction.dot(Za),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;qn.subVectors(this.origin,e);let c=o*this.direction.dot(zs.crossVectors(qn,zs));if(c<0)return null;let l=o*this.direction.dot(Ya.cross(qn));if(l<0||c+l>a)return null;let d=-o*qn.dot(Za);return d<0?null:this.at(d/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},hs=class extends Qn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new st(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.combine=co,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},dl=new bt,ci=new cs,Vs=new _i,fl=new V,ks=new V,Gs=new V,Hs=new V,$a=new V,Ws=new V,pl=new V,Xs=new V,Yt=class extends en{constructor(e=new tn,t=new hs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Ws.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let d=o[c],m=r[c];d!==0&&($a.fromBufferAttribute(m,e),a?Ws.addScaledVector($a,d):Ws.addScaledVector($a.sub(t),d))}t.add(Ws)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Vs.copy(n.boundingSphere),Vs.applyMatrix4(r),ci.copy(e.ray).recast(e.near),!(Vs.containsPoint(ci.origin)===!1&&(ci.intersectSphere(Vs,fl)===null||ci.origin.distanceToSquared(fl)>(e.far-e.near)**2))&&(dl.copy(r).invert(),ci.copy(e.ray).applyMatrix4(dl),!(n.boundingBox!==null&&ci.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ci)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,d=r.attributes.uv1,m=r.attributes.normal,h=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,M=h.length;_<M;_++){let f=h[_],u=a[f.materialIndex],A=Math.max(f.start,p.start),R=Math.min(o.count,Math.min(f.start+f.count,p.start+p.count));for(let y=A,T=R;y<T;y+=3){let E=o.getX(y),I=o.getX(y+1),x=o.getX(y+2);s=qs(this,u,e,n,l,d,m,E,I,x),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{let _=Math.max(0,p.start),M=Math.min(o.count,p.start+p.count);for(let f=_,u=M;f<u;f+=3){let A=o.getX(f),R=o.getX(f+1),y=o.getX(f+2);s=qs(this,a,e,n,l,d,m,A,R,y),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let _=0,M=h.length;_<M;_++){let f=h[_],u=a[f.materialIndex],A=Math.max(f.start,p.start),R=Math.min(c.count,Math.min(f.start+f.count,p.start+p.count));for(let y=A,T=R;y<T;y+=3){let E=y,I=y+1,x=y+2;s=qs(this,u,e,n,l,d,m,E,I,x),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{let _=Math.max(0,p.start),M=Math.min(c.count,p.start+p.count);for(let f=_,u=M;f<u;f+=3){let A=f,R=f+1,y=f+2;s=qs(this,a,e,n,l,d,m,A,R,y),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}}};function ih(i,e,t,n,s,r,a,o){let c;if(e.side===Ht?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===Fn,o),c===null)return null;Xs.copy(o),Xs.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Xs);return l<t.near||l>t.far?null:{distance:l,point:Xs.clone(),object:i}}function qs(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,ks),i.getVertexPosition(c,Gs),i.getVertexPosition(l,Hs);let d=ih(i,e,t,n,ks,Gs,Hs,pl);if(d){let m=new V;Zn.getBarycoord(pl,ks,Gs,Hs,m),s&&(d.uv=Zn.getInterpolatedAttribute(s,o,c,l,m,new tt)),r&&(d.uv1=Zn.getInterpolatedAttribute(r,o,c,l,m,new tt)),a&&(d.normal=Zn.getInterpolatedAttribute(a,o,c,l,m,new V),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));let h={a:o,b:c,c:l,normal:new V,materialIndex:0};Zn.getNormal(ks,Gs,Hs,h.normal),d.face=h,d.barycoord=m}return d}var gr=class extends qt{constructor(e=null,t=1,n=1,s,r,a,o,c,l=Dt,d=Dt,m,h){super(null,a,o,c,l,d,s,r,m,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ja=new V,sh=new V,rh=new Ge,yn=class{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Ja.subVectors(n,t).cross(sh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Ja),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||rh.getNormalMatrix(e),s=this.coplanarPoint(Ja).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},hi=new _i,ah=new tt(.5,.5),Ys=new V,us=class{constructor(e=new yn,t=new yn,n=new yn,s=new yn,r=new yn,a=new yn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=pn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],d=r[4],m=r[5],h=r[6],p=r[7],_=r[8],M=r[9],f=r[10],u=r[11],A=r[12],R=r[13],y=r[14],T=r[15];if(s[0].setComponents(l-a,p-d,u-_,T-A).normalize(),s[1].setComponents(l+a,p+d,u+_,T+A).normalize(),s[2].setComponents(l+o,p+m,u+M,T+R).normalize(),s[3].setComponents(l-o,p-m,u-M,T-R).normalize(),n)s[4].setComponents(c,h,f,y).normalize(),s[5].setComponents(l-c,p-h,u-f,T-y).normalize();else if(s[4].setComponents(l-c,p-h,u-f,T-y).normalize(),t===pn)s[5].setComponents(l+c,p+h,u+f,T+y).normalize();else if(t===is)s[5].setComponents(c,h,f,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),hi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),hi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(hi)}intersectsSprite(e){hi.center.set(0,0,0);let t=ah.distanceTo(e.center);return hi.radius=.7071067811865476+t,hi.applyMatrix4(e.matrixWorld),this.intersectsSphere(hi)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Ys.x=s.normal.x>0?e.max.x:e.min.x,Ys.y=s.normal.y>0?e.max.y:e.min.y,Ys.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ys)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var _r=class extends Qn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new st(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ml=new bt,io=new cs,Zs=new _i,$s=new V,ds=class extends en{constructor(e=new tn,t=new _r){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Zs.copy(n.boundingSphere),Zs.applyMatrix4(s),Zs.radius+=r,e.ray.intersectsSphere(Zs)===!1)return;ml.copy(s).invert(),io.copy(e.ray).applyMatrix4(ml);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,m=n.attributes.position;if(l!==null){let h=Math.max(0,a.start),p=Math.min(l.count,a.start+a.count);for(let _=h,M=p;_<M;_++){let f=l.getX(_);$s.fromBufferAttribute(m,f),gl($s,f,c,s,e,t,this)}}else{let h=Math.max(0,a.start),p=Math.min(m.count,a.start+a.count);for(let _=h,M=p;_<M;_++)$s.fromBufferAttribute(m,_),gl($s,_,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function gl(i,e,t,n,s,r,a){let o=io.distanceSqToPoint(i);if(o<t){let c=new V;io.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var fs=class extends qt{constructor(e=[],t=ni,n,s,r,a,o,c,l,d){super(e,t,n,s,r,a,o,c,l,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var On=class extends qt{constructor(e,t,n=gn,s,r,a,o=Dt,c=Dt,l,d=Sn,m=1){if(d!==Sn&&d!==si)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:t,depth:m};super(h,s,r,a,o,c,d,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new zi(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},xr=class extends On{constructor(e,t=gn,n=ni,s,r,a=Dt,o=Dt,c,l=Sn){let d={width:e,height:e,depth:1},m=[d,d,d,d,d,d];super(e,e,t,n,s,r,a,o,c,l),this.image=m,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ps=class extends qt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ki=class i extends tn{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],d=[],m=[],h=0,p=0;_("z","y","x",-1,-1,n,t,e,a,r,0),_("z","y","x",1,-1,n,t,-e,a,r,1),_("x","z","y",1,1,e,n,t,s,a,2),_("x","z","y",1,-1,e,n,-t,s,a,3),_("x","y","z",1,-1,e,t,n,s,r,4),_("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Ct(l,3)),this.setAttribute("normal",new Ct(d,3)),this.setAttribute("uv",new Ct(m,2));function _(M,f,u,A,R,y,T,E,I,x,w){let L=y/I,C=T/x,U=y/2,X=T/2,te=E/2,O=I+1,J=x+1,H=0,ee=0,ie=new V;for(let ue=0;ue<J;ue++){let _e=ue*C-X;for(let ce=0;ce<O;ce++){let Fe=ce*L-U;ie[M]=Fe*A,ie[f]=_e*R,ie[u]=te,l.push(ie.x,ie.y,ie.z),ie[M]=0,ie[f]=0,ie[u]=E>0?1:-1,d.push(ie.x,ie.y,ie.z),m.push(ce/I),m.push(1-ue/x),H+=1}}for(let ue=0;ue<x;ue++)for(let _e=0;_e<I;_e++){let ce=h+_e+O*ue,Fe=h+_e+O*(ue+1),Ze=h+(_e+1)+O*(ue+1),ze=h+(_e+1)+O*ue;c.push(ce,Fe,ze),c.push(Fe,Ze,ze),ee+=6}o.addGroup(p,ee,w),p+=ee,h+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var xi=class i extends tn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,d=c+1,m=e/o,h=t/c,p=[],_=[],M=[],f=[];for(let u=0;u<d;u++){let A=u*h-a;for(let R=0;R<l;R++){let y=R*m-r;_.push(y,-A,0),M.push(0,0,1),f.push(R/o),f.push(1-u/c)}}for(let u=0;u<c;u++)for(let A=0;A<o;A++){let R=A+l*u,y=A+l*(u+1),T=A+1+l*(u+1),E=A+1+l*u;p.push(R,y,E),p.push(y,T,E)}this.setIndex(p),this.setAttribute("position",new Ct(_,3)),this.setAttribute("normal",new Ct(M,3)),this.setAttribute("uv",new Ct(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};function Mi(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(_l(s))s.isRenderTargetTexture?(Be("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(_l(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function kt(i){let e={};for(let t=0;t<i.length;t++){let n=Mi(i[t]);for(let s in n)e[s]=n[s]}return e}function _l(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function oh(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Ro(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}var ic={clone:Mi,merge:kt},lh=`void main() {
gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ch=`void main() {
gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ft=class extends Qn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=lh,this.fragmentShader=ch,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Mi(e.uniforms),this.uniformsGroups=oh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new st().setHex(s.value);break;case"v2":this.uniforms[n].value=new tt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new V().fromArray(s.value);break;case"v4":this.uniforms[n].value=new yt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ge().fromArray(s.value);break;case"m4":this.uniforms[n].value=new bt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},vr=class extends Ft{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var yr=class extends Qn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Wl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Mr=class extends Qn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Js(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}var jn=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Sr=class extends jn{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Qa,endingEnd:Qa}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case ja:r=e,o=2*t-n;break;case eo:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case ja:a=e,c=2*n-t;break;case eo:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}let l=(n-t)*.5,d=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*d,this._offsetNext=a*d}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,d=this._offsetPrev,m=this._offsetNext,h=this._weightPrev,p=this._weightNext,_=(n-t)/(s-t),M=_*_,f=M*_,u=-h*f+2*h*M-h*_,A=(1+h)*f+(-1.5-2*h)*M+(-.5+h)*_+1,R=(-1-p)*f+(1.5+p)*M+.5*_,y=p*f-p*M;for(let T=0;T!==o;++T)r[T]=u*a[d+T]+A*a[l+T]+R*a[c+T]+y*a[m+T];return r}},br=class extends jn{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,d=(n-t)/(s-t),m=1-d;for(let h=0;h!==o;++h)r[h]=a[l+h]*m+a[c+h]*d;return r}},Tr=class extends jn{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Ar=class extends jn{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,d=this.inTangents,m=this.outTangents;if(!d||!m){let _=(n-t)/(s-t),M=1-_;for(let f=0;f!==o;++f)r[f]=a[l+f]*M+a[c+f]*_;return r}let h=o*2,p=e-1;for(let _=0;_!==o;++_){let M=a[l+_],f=a[c+_],u=p*h+_*2,A=m[u],R=m[u+1],y=e*h+_*2,T=d[y],E=d[y+1],I=(n-t)/(s-t),x,w,L,C,U;for(let X=0;X<8;X++){x=I*I,w=x*I,L=1-I,C=L*L,U=C*L;let O=U*t+3*C*I*A+3*L*x*T+w*s-n;if(Math.abs(O)<1e-10)break;let J=3*C*(A-t)+6*L*I*(T-A)+3*x*(s-T);if(Math.abs(J)<1e-10)break;I=I-O/J,I=Math.max(0,Math.min(1,I))}r[_]=U*M+3*C*I*R+3*L*x*E+w*f}return r}},nn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Js(t,this.TimeBufferType),this.values=Js(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Js(e.times,Array),values:Js(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Tr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new br(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Sr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ar(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case es:t=this.InterpolantFactoryMethodDiscrete;break;case ur:t=this.InterpolantFactoryMethodLinear;break;case js:t=this.InterpolantFactoryMethodSmooth;break;case Ka:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Be("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return es;case this.InterpolantFactoryMethodLinear:return ur;case this.InterpolantFactoryMethodSmooth:return js;case this.InterpolantFactoryMethodBezier:return Ka}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ve("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ve("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){Ve("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){Ve("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&kc(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){Ve("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===js,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],d=e[o+1];if(l!==d&&(o!==1||l!==e[0]))if(s)c=!0;else{let m=o*n,h=m-n,p=m+n;for(let _=0;_!==n;++_){let M=t[m+_];if(M!==t[h+_]||M!==t[p+_]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let m=o*n,h=a*n;for(let p=0;p!==n;++p)t[h+p]=t[m+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};nn.prototype.ValueTypeName="";nn.prototype.TimeBufferType=Float32Array;nn.prototype.ValueBufferType=Float32Array;nn.prototype.DefaultInterpolation=ur;var ei=class extends nn{constructor(e,t,n){super(e,t,n)}};ei.prototype.ValueTypeName="bool";ei.prototype.ValueBufferType=Array;ei.prototype.DefaultInterpolation=es;ei.prototype.InterpolantFactoryMethodLinear=void 0;ei.prototype.InterpolantFactoryMethodSmooth=void 0;var Er=class extends nn{constructor(e,t,n,s){super(e,t,n,s)}};Er.prototype.ValueTypeName="color";var wr=class extends nn{constructor(e,t,n,s){super(e,t,n,s)}};wr.prototype.ValueTypeName="number";var Cr=class extends jn{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t),l=e*o;for(let d=l+o;l!==d;l+=4)Tn.slerpFlat(r,0,a,l-o,a,l,c);return r}},ms=class extends nn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Cr(this.times,this.values,this.getValueSize(),e)}};ms.prototype.ValueTypeName="quaternion";ms.prototype.InterpolantFactoryMethodSmooth=void 0;var ti=class extends nn{constructor(e,t,n){super(e,t,n)}};ti.prototype.ValueTypeName="string";ti.prototype.ValueBufferType=Array;ti.prototype.DefaultInterpolation=es;ti.prototype.InterpolantFactoryMethodLinear=void 0;ti.prototype.InterpolantFactoryMethodSmooth=void 0;var Rr=class extends nn{constructor(e,t,n,s){super(e,t,n,s)}};Rr.prototype.ValueTypeName="vector";var Ir=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(d){o++,r===!1&&s.onStart!==void 0&&s.onStart(d,a,o),r=!0},this.itemEnd=function(d){a++,s.onProgress!==void 0&&s.onProgress(d,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return d=d.normalize("NFC"),c?c(d):d},this.setURLModifier=function(d){return c=d,this},this.addHandler=function(d,m){return l.push(d,m),this},this.removeHandler=function(d){let m=l.indexOf(d);return m!==-1&&l.splice(m,2),this},this.getHandler=function(d){for(let m=0,h=l.length;m<h;m+=2){let p=l[m],_=l[m+1];if(p.global&&(p.lastIndex=0),p.test(d))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},sc=new Ir,Pr=class{constructor(e){this.manager=e!==void 0?e:sc,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Pr.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ks=new V,Qs=new Tn,vn=new V,vi=class extends en{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new bt,this.projectionMatrix=new bt,this.projectionMatrixInverse=new bt,this.coordinateSystem=pn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ks,Qs,vn),vn.x===1&&vn.y===1&&vn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ks,Qs,vn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Ks,Qs,vn),vn.x===1&&vn.y===1&&vn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ks,Qs,vn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Yn=new V,xl=new tt,vl=new tt,Vt=class extends vi{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=dr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ca*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return dr*2*Math.atan(Math.tan(Ca*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Yn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Yn.x,Yn.y).multiplyScalar(-e/Yn.z),Yn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Yn.x,Yn.y).multiplyScalar(-e/Yn.z)}getViewSize(e,t){return this.getViewBounds(e,xl,vl),t.subVectors(vl,xl)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ca*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var gs=class extends vi{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=d*this.view.offsetY,c=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var Ui=-90,Fi=1,Lr=class extends en{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Vt(Ui,Fi,e,t);s.layers=this.layers,this.add(s);let r=new Vt(Ui,Fi,e,t);r.layers=this.layers,this.add(r);let a=new Vt(Ui,Fi,e,t);a.layers=this.layers,this.add(a);let o=new Vt(Ui,Fi,e,t);o.layers=this.layers,this.add(o);let c=new Vt(Ui,Fi,e,t);c.layers=this.layers,this.add(c);let l=new Vt(Ui,Fi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===pn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===is)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,d]=this.children,m=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;let M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let f=!1;e.isWebGLRenderer===!0?f=e.state.buffers.depth.getReversed():f=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=M,e.setRenderTarget(n,5,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(m,h,p),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},Dr=class extends Vt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Io="\\[\\]\\.:\\/",hh=new RegExp("["+Io+"]","g"),Po="[^"+Io+"]",uh="[^"+Io.replace("\\.","")+"]",dh=/((?:WC+[\/:])*)/.source.replace("WC",Po),fh=/(WCOD+)?/.source.replace("WCOD",uh),ph=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Po),mh=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Po),gh=new RegExp("^"+dh+fh+ph+mh+"$"),_h=["material","materials","bones","map"],so=class{constructor(e,t,n){let s=n||xt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},xt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(hh,"")}static parseTrackName(e){let t=gh.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);_h.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Be("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){Ve("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ve("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ve("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===l){l=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ve("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ve("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ve("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){Ve("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[s];if(a===void 0){let l=t.nodeName;Ve("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ve("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ve("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};xt.Composite=so;xt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};xt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};xt.prototype.GetterByBindingType=[xt.prototype._getValue_direct,xt.prototype._getValue_array,xt.prototype._getValue_arrayElement,xt.prototype._getValue_toArray];xt.prototype.SetterByBindingTypeAndVersioning=[[xt.prototype._setValue_direct,xt.prototype._setValue_direct_setNeedsUpdate,xt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_array,xt.prototype._setValue_array_setNeedsUpdate,xt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_arrayElement,xt.prototype._setValue_arrayElement_setNeedsUpdate,xt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_fromArray,xt.prototype._setValue_fromArray_setNeedsUpdate,xt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var cm=new Float32Array(1);var Oo=class Oo{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};Oo.prototype.isMatrix2=!0;var ro=Oo;function Lo(i,e,t,n){let s=xh(n);switch(t){case bo:return i*e;case Ao:return i*e/s.components*s.byteLength;case kr:return i*e/s.components*s.byteLength;case ri:return i*e*2/s.components*s.byteLength;case Gr:return i*e*2/s.components*s.byteLength;case To:return i*e*3/s.components*s.byteLength;case ln:return i*e*4/s.components*s.byteLength;case Hr:return i*e*4/s.components*s.byteLength;case Ms:case Ss:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case bs:case Ts:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Xr:case Yr:return Math.max(i,16)*Math.max(e,8)/4;case Wr:case qr:return Math.max(i,8)*Math.max(e,8)/2;case Zr:case $r:case Kr:case Qr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Jr:case As:case jr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ea:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ta:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case na:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case ia:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case sa:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case ra:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case aa:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case oa:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case la:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ca:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ha:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ua:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case da:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case fa:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case pa:case ma:case ga:return Math.ceil(i/4)*Math.ceil(e/4)*16;case _a:case xa:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Es:case va:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function xh(i){switch(i){case sn:case vo:return{byteLength:1,components:1};case Hi:case yo:case wn:return{byteLength:2,components:1};case zr:case Vr:return{byteLength:2,components:4};case gn:case Br:case _n:return{byteLength:4,components:1};case Mo:case So:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));typeof window<"u"&&(window.__THREE__?Be("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="185");function wc(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function yh(i){let e=new WeakMap;function t(o,c){let l=o.array,d=o.usage,m=l.byteLength,h=i.createBuffer();i.bindBuffer(c,h),i.bufferData(c,l,d),o.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:m}}function n(o,c,l){let d=c.array,m=c.updateRanges;if(i.bindBuffer(l,o),m.length===0)i.bufferSubData(l,0,d);else{m.sort((p,_)=>p.start-_.start);let h=0;for(let p=1;p<m.length;p++){let _=m[h],M=m[p];M.start<=_.start+_.count+1?_.count=Math.max(_.count,M.start+M.count-_.start):(++h,m[h]=M)}m.length=h+1;for(let p=0,_=m.length;p<_;p++){let M=m[p];i.bufferSubData(l,M.start*d.BYTES_PER_ELEMENT,d,M.start,M.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var Mh=`#ifdef USE_ALPHAHASH
if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Sh=`#ifdef USE_ALPHAHASH
const float ALPHA_HASH_SCALE = 0.05;
float hash2D( vec2 value ) {
return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
}
float hash3D( vec3 value ) {
return hash2D( vec2( hash2D( value.xy ), value.z ) );
}
float getAlphaHashThreshold( vec3 position ) {
float maxDeriv = max(
length( dFdx( position.xyz ) ),
length( dFdy( position.xyz ) )
);
float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
vec2 pixScales = vec2(
exp2( floor( log2( pixScale ) ) ),
exp2( ceil( log2( pixScale ) ) )
);
vec2 alpha = vec2(
hash3D( floor( pixScales.x * position.xyz ) ),
hash3D( floor( pixScales.y * position.xyz ) )
);
float lerpFactor = fract( log2( pixScale ) );
float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
float a = min( lerpFactor, 1.0 - lerpFactor );
vec3 cases = vec3(
x * x / ( 2.0 * a * ( 1.0 - a ) ),
( x - 0.5 * a ) / ( 1.0 - a ),
1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
);
float threshold = ( x < ( 1.0 - a ) )
? ( ( x < a ) ? cases.x : cases.y )
: cases.z;
return clamp( threshold , 1.0e-6, 1.0 );
}
#endif`,bh=`#ifdef USE_ALPHAMAP
diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Th=`#ifdef USE_ALPHAMAP
uniform sampler2D alphaMap;
#endif`,Ah=`#ifdef USE_ALPHATEST
#ifdef ALPHA_TO_COVERAGE
diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
if ( diffuseColor.a == 0.0 ) discard;
#else
if ( diffuseColor.a < alphaTest ) discard;
#endif
#endif`,Eh=`#ifdef USE_ALPHATEST
uniform float alphaTest;
#endif`,wh=`#ifdef USE_AOMAP
float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
reflectedLight.indirectDiffuse *= ambientOcclusion;
#if defined( USE_CLEARCOAT )
clearcoatSpecularIndirect *= ambientOcclusion;
#endif
#if defined( USE_SHEEN )
sheenSpecularIndirect *= ambientOcclusion;
#endif
#if defined( USE_ENVMAP ) && defined( STANDARD )
float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
#endif
#endif`,Ch=`#ifdef USE_AOMAP
uniform sampler2D aoMap;
uniform float aoMapIntensity;
#endif`,Rh=`#ifdef USE_BATCHING
#if ! defined( GL_ANGLE_multi_draw )
#define gl_DrawID _gl_DrawID
uniform int _gl_DrawID;
#endif
uniform highp sampler2D batchingTexture;
uniform highp usampler2D batchingIdTexture;
mat4 getBatchingMatrix( const in float i ) {
int size = textureSize( batchingTexture, 0 ).x;
int j = int( i ) * 4;
int x = j % size;
int y = j / size;
vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
return mat4( v1, v2, v3, v4 );
}
float getIndirectIndex( const in int i ) {
int size = textureSize( batchingIdTexture, 0 ).x;
int x = i % size;
int y = i / size;
return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
}
#endif
#ifdef USE_BATCHING_COLOR
uniform sampler2D batchingColorTexture;
vec4 getBatchingColor( const in float i ) {
int size = textureSize( batchingColorTexture, 0 ).x;
int j = int( i );
int x = j % size;
int y = j / size;
return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
}
#endif`,Ih=`#ifdef USE_BATCHING
mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ph=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
vPosition = vec3( position );
#endif`,Lh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
vec3 objectTangent = vec3( tangent.xyz );
#endif`,Dh=`float G_BlinnPhong_Implicit( ) {
return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
vec3 halfDir = normalize( lightDir + viewDir );
float dotNH = saturate( dot( normal, halfDir ) );
float dotVH = saturate( dot( viewDir, halfDir ) );
vec3 F = F_Schlick( specularColor, 1.0, dotVH );
float G = G_BlinnPhong_Implicit( );
float D = D_BlinnPhong( shininess, dotNH );
return F * ( G * D );
} // validated`,Nh=`#ifdef USE_IRIDESCENCE
const mat3 XYZ_TO_REC709 = mat3(
3.2404542, -0.9692660,  0.0556434,
-1.5371385,  1.8760108, -0.2040259,
-0.4985314,  0.0415560,  1.0572252
);
vec3 Fresnel0ToIor( vec3 fresnel0 ) {
vec3 sqrtF0 = sqrt( fresnel0 );
return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
}
vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
}
float IorToFresnel0( float transmittedIor, float incidentIor ) {
return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
}
vec3 evalSensitivity( float OPD, vec3 shift ) {
float phase = 2.0 * PI * OPD * 1.0e-9;
vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
xyz /= 1.0685e-7;
vec3 rgb = XYZ_TO_REC709 * xyz;
return rgb;
}
vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
vec3 I;
float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
float cosTheta2Sq = 1.0 - sinTheta2Sq;
if ( cosTheta2Sq < 0.0 ) {
return vec3( 1.0 );
}
float cosTheta2 = sqrt( cosTheta2Sq );
float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
float R12 = F_Schlick( R0, 1.0, cosTheta1 );
float T121 = 1.0 - R12;
float phi12 = 0.0;
if ( iridescenceIOR < outsideIOR ) phi12 = PI;
float phi21 = PI - phi12;
vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
vec3 phi23 = vec3( 0.0 );
if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
vec3 phi = vec3( phi21 ) + phi23;
vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
vec3 r123 = sqrt( R123 );
vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
vec3 C0 = R12 + Rs;
I = C0;
vec3 Cm = Rs - T121;
for ( int m = 1; m <= 2; ++ m ) {
Cm *= r123;
vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
I += Cm * Sm;
}
return max( I, vec3( 0.0 ) );
}
#endif`,Uh=`#ifdef USE_BUMPMAP
uniform sampler2D bumpMap;
uniform float bumpScale;
vec2 dHdxy_fwd() {
vec2 dSTdx = dFdx( vBumpMapUv );
vec2 dSTdy = dFdy( vBumpMapUv );
float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
return vec2( dBx, dBy );
}
vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
vec3 vN = surf_norm;
vec3 R1 = cross( vSigmaY, vN );
vec3 R2 = cross( vN, vSigmaX );
float fDet = dot( vSigmaX, R1 ) * faceDirection;
vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
return normalize( abs( fDet ) * surf_norm - vGrad );
}
#endif`,Fh=`#if NUM_CLIPPING_PLANES > 0
vec4 plane;
#ifdef ALPHA_TO_COVERAGE
float distanceToPlane, distanceGradient;
float clipOpacity = 1.0;
#pragma unroll_loop_start
for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
plane = clippingPlanes[ i ];
distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
distanceGradient = fwidth( distanceToPlane ) / 2.0;
clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
if ( clipOpacity == 0.0 ) discard;
}
#pragma unroll_loop_end
#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
float unionClipOpacity = 1.0;
#pragma unroll_loop_start
for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
plane = clippingPlanes[ i ];
distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
distanceGradient = fwidth( distanceToPlane ) / 2.0;
unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
}
#pragma unroll_loop_end
clipOpacity *= 1.0 - unionClipOpacity;
#endif
diffuseColor.a *= clipOpacity;
if ( diffuseColor.a == 0.0 ) discard;
#else
#pragma unroll_loop_start
for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
plane = clippingPlanes[ i ];
if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
}
#pragma unroll_loop_end
#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
bool clipped = true;
#pragma unroll_loop_start
for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
plane = clippingPlanes[ i ];
clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
}
#pragma unroll_loop_end
if ( clipped ) discard;
#endif
#endif
#endif`,Oh=`#if NUM_CLIPPING_PLANES > 0
varying vec3 vClipPosition;
uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Bh=`#if NUM_CLIPPING_PLANES > 0
varying vec3 vClipPosition;
#endif`,zh=`#if NUM_CLIPPING_PLANES > 0
vClipPosition = - mvPosition.xyz;
#endif`,Vh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
diffuseColor *= vColor;
#endif`,kh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
varying vec4 vColor;
#endif`,Gh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
varying vec4 vColor;
#endif`,Hh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
vColor *= color;
#elif defined( USE_COLOR )
vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Wh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
const highp float a = 12.9898, b = 78.233, c = 43758.5453;
highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
float precisionSafeLength( vec3 v ) { return length( v ); }
#else
float precisionSafeLength( vec3 v ) {
float maxComponent = max3( abs( v ) );
return length( v / maxComponent ) * maxComponent;
}
#endif
struct IncidentLight {
vec3 color;
vec3 direction;
bool visible;
};
struct ReflectedLight {
vec3 directDiffuse;
vec3 directSpecular;
vec3 indirectDiffuse;
vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Xh=`#ifdef ENVMAP_TYPE_CUBE_UV
#define cubeUV_minMipLevel 4.0
#define cubeUV_minTileSize 16.0
float getFace( vec3 direction ) {
vec3 absDirection = abs( direction );
float face = - 1.0;
if ( absDirection.x > absDirection.z ) {
if ( absDirection.x > absDirection.y )
face = direction.x > 0.0 ? 0.0 : 3.0;
else
face = direction.y > 0.0 ? 1.0 : 4.0;
} else {
if ( absDirection.z > absDirection.y )
face = direction.z > 0.0 ? 2.0 : 5.0;
else
face = direction.y > 0.0 ? 1.0 : 4.0;
}
return face;
}
vec2 getUV( vec3 direction, float face ) {
vec2 uv;
if ( face == 0.0 ) {
uv = vec2( direction.z, direction.y ) / abs( direction.x );
} else if ( face == 1.0 ) {
uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
} else if ( face == 2.0 ) {
uv = vec2( - direction.x, direction.y ) / abs( direction.z );
} else if ( face == 3.0 ) {
uv = vec2( - direction.z, direction.y ) / abs( direction.x );
} else if ( face == 4.0 ) {
uv = vec2( - direction.x, direction.z ) / abs( direction.y );
} else {
uv = vec2( direction.x, direction.y ) / abs( direction.z );
}
return 0.5 * ( uv + 1.0 );
}
vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
float face = getFace( direction );
float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
mipInt = max( mipInt, cubeUV_minMipLevel );
float faceSize = exp2( mipInt );
highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
if ( face > 2.0 ) {
uv.y += faceSize;
face -= 3.0;
}
uv.x += face * faceSize;
uv.x += filterInt * 3.0 * cubeUV_minTileSize;
uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
uv.x *= CUBEUV_TEXEL_WIDTH;
uv.y *= CUBEUV_TEXEL_HEIGHT;
#ifdef texture2DGradEXT
return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
#else
return texture2D( envMap, uv ).rgb;
#endif
}
#define cubeUV_r0 1.0
#define cubeUV_m0 - 2.0
#define cubeUV_r1 0.8
#define cubeUV_m1 - 1.0
#define cubeUV_r4 0.4
#define cubeUV_m4 2.0
#define cubeUV_r5 0.305
#define cubeUV_m5 3.0
#define cubeUV_r6 0.21
#define cubeUV_m6 4.0
float roughnessToMip( float roughness ) {
float mip = 0.0;
if ( roughness >= cubeUV_r1 ) {
mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
} else if ( roughness >= cubeUV_r4 ) {
mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
} else if ( roughness >= cubeUV_r5 ) {
mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
} else if ( roughness >= cubeUV_r6 ) {
mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
} else {
mip = - 2.0 * log2( 1.16 * roughness );		}
return mip;
}
vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
float mipF = fract( mip );
float mipInt = floor( mip );
vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
if ( mipF == 0.0 ) {
return vec4( color0, 1.0 );
} else {
vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
return vec4( mix( color0, color1, mipF ), 1.0 );
}
}
#endif`,qh=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
mat3 bm = mat3( batchingMatrix );
transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
transformedNormal = bm * transformedNormal;
#ifdef USE_TANGENT
transformedTangent = bm * transformedTangent;
#endif
#endif
#ifdef USE_INSTANCING
mat3 im = mat3( instanceMatrix );
transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
transformedNormal = im * transformedNormal;
#ifdef USE_TANGENT
transformedTangent = im * transformedTangent;
#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Yh=`#ifdef USE_DISPLACEMENTMAP
uniform sampler2D displacementMap;
uniform float displacementScale;
uniform float displacementBias;
#endif`,Zh=`#ifdef USE_DISPLACEMENTMAP
transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$h=`#ifdef USE_EMISSIVEMAP
vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
emissiveColor = sRGBTransferEOTF( emissiveColor );
#endif
totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Jh=`#ifdef USE_EMISSIVEMAP
uniform sampler2D emissiveMap;
#endif`,Kh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Qh=`vec4 LinearTransferOETF( in vec4 value ) {
return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,jh=`#ifdef USE_ENVMAP
#ifdef ENV_WORLDPOS
vec3 cameraToFrag;
if ( isOrthographic ) {
cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
} else {
cameraToFrag = normalize( vWorldPosition - cameraPosition );
}
vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
#ifdef ENVMAP_MODE_REFLECTION
vec3 reflectVec = reflect( cameraToFrag, worldNormal );
#else
vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
#endif
#else
vec3 reflectVec = vReflect;
#endif
#ifdef ENVMAP_TYPE_CUBE
vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
#ifdef ENVMAP_BLENDING_MULTIPLY
outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
#elif defined( ENVMAP_BLENDING_MIX )
outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
#elif defined( ENVMAP_BLENDING_ADD )
outgoingLight += envColor.xyz * specularStrength * reflectivity;
#endif
#endif
#endif`,eu=`#ifdef USE_ENVMAP
uniform float envMapIntensity;
uniform mat3 envMapRotation;
#ifdef ENVMAP_TYPE_CUBE
uniform samplerCube envMap;
#else
uniform sampler2D envMap;
#endif
#endif`,tu=`#ifdef USE_ENVMAP
uniform float reflectivity;
#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
#define ENV_WORLDPOS
#endif
#ifdef ENV_WORLDPOS
varying vec3 vWorldPosition;
uniform float refractionRatio;
#else
varying vec3 vReflect;
#endif
#endif`,nu=`#ifdef USE_ENVMAP
#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
#define ENV_WORLDPOS
#endif
#ifdef ENV_WORLDPOS

varying vec3 vWorldPosition;
#else
varying vec3 vReflect;
uniform float refractionRatio;
#endif
#endif`,iu=`#ifdef USE_ENVMAP
#ifdef ENV_WORLDPOS
vWorldPosition = worldPosition.xyz;
#else
vec3 cameraToVertex;
if ( isOrthographic ) {
cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
} else {
cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
}
vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
#ifdef ENVMAP_MODE_REFLECTION
vReflect = reflect( cameraToVertex, worldNormal );
#else
vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
#endif
#endif
#endif`,su=`#ifdef USE_FOG
vFogDepth = - mvPosition.z;
#endif`,ru=`#ifdef USE_FOG
varying float vFogDepth;
#endif`,au=`#ifdef USE_FOG
#ifdef FOG_EXP2
float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
#else
float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
#endif
gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ou=`#ifdef USE_FOG
uniform vec3 fogColor;
varying float vFogDepth;
#ifdef FOG_EXP2
uniform float fogDensity;
#else
uniform float fogNear;
uniform float fogFar;
#endif
#endif`,lu=`#ifdef USE_GRADIENTMAP
uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
float dotNL = dot( normal, lightDirection );
vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
#ifdef USE_GRADIENTMAP
return vec3( texture2D( gradientMap, coord ).r );
#else
vec2 fw = fwidth( coord ) * 0.5;
return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
#endif
}`,cu=`#ifdef USE_LIGHTMAP
uniform sampler2D lightMap;
uniform float lightMapIntensity;
#endif`,hu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,uu=`varying vec3 vViewPosition;
struct LambertMaterial {
vec3 diffuseColor;
float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
vec3 irradiance = dotNL * directLight.color;
reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,du=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
float x = normal.x, y = normal.y, z = normal.z;
vec3 result = shCoefficients[ 0 ] * 0.886227;
result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
vec3 irradiance = ambientLightColor;
return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
if ( cutoffDistance > 0.0 ) {
distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
}
return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
struct DirectionalLight {
vec3 direction;
vec3 color;
};
uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
light.color = directionalLight.color;
light.direction = directionalLight.direction;
light.visible = true;
}
#endif
#if NUM_POINT_LIGHTS > 0
struct PointLight {
vec3 position;
vec3 color;
float distance;
float decay;
};
uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
vec3 lVector = pointLight.position - geometryPosition;
light.direction = normalize( lVector );
float lightDistance = length( lVector );
light.color = pointLight.color;
light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
light.visible = ( light.color != vec3( 0.0 ) );
}
#endif
#if NUM_SPOT_LIGHTS > 0
struct SpotLight {
vec3 position;
vec3 direction;
vec3 color;
float distance;
float decay;
float coneCos;
float penumbraCos;
};
uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
vec3 lVector = spotLight.position - geometryPosition;
light.direction = normalize( lVector );
float angleCos = dot( light.direction, spotLight.direction );
float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
if ( spotAttenuation > 0.0 ) {
float lightDistance = length( lVector );
light.color = spotLight.color * spotAttenuation;
light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
light.visible = ( light.color != vec3( 0.0 ) );
} else {
light.color = vec3( 0.0 );
light.visible = false;
}
}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
struct RectAreaLight {
vec3 color;
vec3 position;
vec3 halfWidth;
vec3 halfHeight;
};
uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
struct HemisphereLight {
vec3 direction;
vec3 skyColor;
vec3 groundColor;
};
uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
float dotNL = dot( normal, hemiLight.direction );
float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
return irradiance;
}
#endif
#include <lightprobes_pars_fragment>`,fu=`#ifdef USE_ENVMAP
vec3 getIBLIrradiance( const in vec3 normal ) {
#ifdef ENVMAP_TYPE_CUBE_UV
vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
return PI * envMapColor.rgb * envMapIntensity;
#else
return vec3( 0.0 );
#endif
}
vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
#ifdef ENVMAP_TYPE_CUBE_UV
vec3 reflectVec = reflect( - viewDir, normal );
reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
return envMapColor.rgb * envMapIntensity;
#else
return vec3( 0.0 );
#endif
}
#ifdef USE_ANISOTROPY
vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
#ifdef ENVMAP_TYPE_CUBE_UV
vec3 bentNormal = cross( bitangent, viewDir );
bentNormal = normalize( cross( bentNormal, bitangent ) );
bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
return getIBLRadiance( viewDir, bentNormal, roughness );
#else
return vec3( 0.0 );
#endif
}
#endif
#endif`,pu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mu=`varying vec3 vViewPosition;
struct ToonMaterial {
vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_u=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
vec3 diffuseColor;
vec3 specularColor;
float specularShininess;
float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
vec3 irradiance = dotNL * directLight.color;
reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
material.ior = ior;
#ifdef USE_SPECULAR
float specularIntensityFactor = specularIntensity;
vec3 specularColorFactor = specularColor;
#ifdef USE_SPECULAR_COLORMAP
specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
#endif
material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
#else
float specularIntensityFactor = 1.0;
vec3 specularColorFactor = vec3( 1.0 );
material.specularF90 = 1.0;
#endif
material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
material.specularColor = vec3( 0.04 );
material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
material.clearcoat = clearcoat;
material.clearcoatRoughness = clearcoatRoughness;
material.clearcoatF0 = vec3( 0.04 );
material.clearcoatF90 = 1.0;
#ifdef USE_CLEARCOATMAP
material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
#endif
material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
material.clearcoatRoughness += geometryRoughness;
material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
material.iridescence = iridescence;
material.iridescenceIOR = iridescenceIOR;
#ifdef USE_IRIDESCENCEMAP
material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
#else
material.iridescenceThickness = iridescenceThicknessMaximum;
#endif
#endif
#ifdef USE_SHEEN
material.sheenColor = sheenColor;
#ifdef USE_SHEEN_COLORMAP
material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
#endif
material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
#ifdef USE_SHEEN_ROUGHNESSMAP
material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
#endif
#endif
#ifdef USE_ANISOTROPY
#ifdef USE_ANISOTROPYMAP
mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
#else
vec2 anisotropyV = anisotropyVector;
#endif
material.anisotropy = length( anisotropyV );
if( material.anisotropy == 0.0 ) {
anisotropyV = vec2( 1.0, 0.0 );
} else {
anisotropyV /= material.anisotropy;
material.anisotropy = saturate( material.anisotropy );
}
material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,vu=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
vec3 diffuseColor;
vec3 diffuseContribution;
vec3 specularColor;
vec3 specularColorBlended;
float roughness;
float metalness;
float specularF90;
float dispersion;
#ifdef USE_CLEARCOAT
float clearcoat;
float clearcoatRoughness;
vec3 clearcoatF0;
float clearcoatF90;
#endif
#ifdef USE_IRIDESCENCE
float iridescence;
float iridescenceIOR;
float iridescenceThickness;
vec3 iridescenceFresnel;
vec3 iridescenceF0;
vec3 iridescenceFresnelDielectric;
vec3 iridescenceFresnelMetallic;
#endif
#ifdef USE_SHEEN
vec3 sheenColor;
float sheenRoughness;
#endif
#ifdef IOR
float ior;
#endif
#ifdef USE_TRANSMISSION
float transmission;
float transmissionAlpha;
float thickness;
float attenuationDistance;
vec3 attenuationColor;
#endif
#ifdef USE_ANISOTROPY
float anisotropy;
float alphaT;
vec3 anisotropyT;
vec3 anisotropyB;
#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
float x2 = x * x;
float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
float a2 = pow2( alpha );
float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
float a2 = pow2( alpha );
float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
float a2 = alphaT * alphaB;
highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
highp float v2 = dot( v, v );
float w2 = a2 / v2;
return RECIPROCAL_PI * a2 * pow2 ( w2 );
}
#endif
#ifdef USE_CLEARCOAT
vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
vec3 f0 = material.clearcoatF0;
float f90 = material.clearcoatF90;
float roughness = material.clearcoatRoughness;
float alpha = pow2( roughness );
vec3 halfDir = normalize( lightDir + viewDir );
float dotNL = saturate( dot( normal, lightDir ) );
float dotNV = saturate( dot( normal, viewDir ) );
float dotNH = saturate( dot( normal, halfDir ) );
float dotVH = saturate( dot( viewDir, halfDir ) );
vec3 F = F_Schlick( f0, f90, dotVH );
float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
float D = D_GGX( alpha, dotNH );
return F * ( V * D );
}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
vec3 f0 = material.specularColorBlended;
float f90 = material.specularF90;
float roughness = material.roughness;
float alpha = pow2( roughness );
vec3 halfDir = normalize( lightDir + viewDir );
float dotNL = saturate( dot( normal, lightDir ) );
float dotNV = saturate( dot( normal, viewDir ) );
float dotNH = saturate( dot( normal, halfDir ) );
float dotVH = saturate( dot( viewDir, halfDir ) );
vec3 F = F_Schlick( f0, f90, dotVH );
#ifdef USE_IRIDESCENCE
F = mix( F, material.iridescenceFresnel, material.iridescence );
#endif
#ifdef USE_ANISOTROPY
float dotTL = dot( material.anisotropyT, lightDir );
float dotTV = dot( material.anisotropyT, viewDir );
float dotTH = dot( material.anisotropyT, halfDir );
float dotBL = dot( material.anisotropyB, lightDir );
float dotBV = dot( material.anisotropyB, viewDir );
float dotBH = dot( material.anisotropyB, halfDir );
float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
#else
float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
float D = D_GGX( alpha, dotNH );
#endif
return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
const float LUT_SIZE = 64.0;
const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
const float LUT_BIAS = 0.5 / LUT_SIZE;
float dotNV = saturate( dot( N, V ) );
vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
uv = uv * LUT_SCALE + LUT_BIAS;
return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
float l = length( f );
return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
float x = dot( v1, v2 );
float y = abs( x );
float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
float b = 3.4175940 + ( 4.1616724 + y ) * y;
float v = a / b;
float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
vec3 lightNormal = cross( v1, v2 );
if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
vec3 T1, T2;
T1 = normalize( V - N * dot( V, N ) );
T2 = - cross( N, T1 );
mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
vec3 coords[ 4 ];
coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
coords[ 0 ] = normalize( coords[ 0 ] );
coords[ 1 ] = normalize( coords[ 1 ] );
coords[ 2 ] = normalize( coords[ 2 ] );
coords[ 3 ] = normalize( coords[ 3 ] );
vec3 vectorFormFactor = vec3( 0.0 );
vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
float alpha = pow2( roughness );
float invAlpha = 1.0 / alpha;
float cos2h = dotNH * dotNH;
float sin2h = max( 1.0 - cos2h, 0.0078125 );
return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
vec3 halfDir = normalize( lightDir + viewDir );
float dotNL = saturate( dot( normal, lightDir ) );
float dotNV = saturate( dot( normal, viewDir ) );
float dotNH = saturate( dot( normal, halfDir ) );
float D = D_Charlie( sheenRoughness, dotNH );
float V = V_Neubelt( dotNV, dotNL );
return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
float dotNV = saturate( dot( normal, viewDir ) );
float r2 = roughness * roughness;
float rInv = 1.0 / ( roughness + 0.1 );
float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
float DG = exp( a * dotNV + b );
return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
float dotNV = saturate( dot( normal, viewDir ) );
vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
float dotNV = saturate( dot( normal, viewDir ) );
vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
#ifdef USE_IRIDESCENCE
vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
#else
vec3 Fr = specularColor;
#endif
vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
float Ess = fab.x + fab.y;
float Ems = 1.0 - Ess;
vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
singleScatter += FssEss;
multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
float dotNL = saturate( dot( normal, lightDir ) );
float dotNV = saturate( dot( normal, viewDir ) );
vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
float Ess_V = dfgV.x + dfgV.y;
float Ess_L = dfgL.x + dfgL.y;
float Ems_V = 1.0 - Ess_V;
float Ems_L = 1.0 - Ess_L;
vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
float compensationFactor = Ems_V * Ems_L;
vec3 multiScatter = Fms * compensationFactor;
return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
vec3 normal = geometryNormal;
vec3 viewDir = geometryViewDir;
vec3 position = geometryPosition;
vec3 lightPos = rectAreaLight.position;
vec3 halfWidth = rectAreaLight.halfWidth;
vec3 halfHeight = rectAreaLight.halfHeight;
vec3 lightColor = rectAreaLight.color;
float roughness = material.roughness;
vec3 rectCoords[ 4 ];
rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
vec2 uv = LTC_Uv( normal, viewDir, roughness );
vec4 t1 = texture2D( ltc_1, uv );
vec4 t2 = texture2D( ltc_2, uv );
mat3 mInv = mat3(
vec3( t1.x, 0, t1.y ),
vec3(    0, 1,    0 ),
vec3( t1.z, 0, t1.w )
);
vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
#ifdef USE_CLEARCOAT
vec3 Ncc = geometryClearcoatNormal;
vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
mat3 mInvClearcoat = mat3(
vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
vec3(             0, 1,             0 ),
vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
);
vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
#endif
}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
vec3 irradiance = dotNL * directLight.color;
#ifdef USE_CLEARCOAT
float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
vec3 ccIrradiance = dotNLcc * directLight.color;
clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
#endif
#ifdef USE_SHEEN

sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );

float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );

float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );

irradiance *= sheenEnergyComp;

#endif
reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
#ifdef USE_SHEEN
float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
diffuse *= sheenEnergyComp;
#endif
reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
#ifdef USE_CLEARCOAT
clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
#endif
#ifdef USE_SHEEN
sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
#endif
vec3 singleScatteringDielectric = vec3( 0.0 );
vec3 multiScatteringDielectric = vec3( 0.0 );
vec3 singleScatteringMetallic = vec3( 0.0 );
vec3 multiScatteringMetallic = vec3( 0.0 );
#ifdef USE_IRIDESCENCE
computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
#else
computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
#endif
vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
vec3 indirectSpecular = radiance * singleScattering;
indirectSpecular += multiScattering * cosineWeightedIrradiance;
vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
#ifdef USE_SHEEN
float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
indirectSpecular *= sheenEnergyComp;
indirectDiffuse *= sheenEnergyComp;
#endif
reflectedLight.indirectSpecular += indirectSpecular;
reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,yu=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
float dotNVi = saturate( dot( normal, geometryViewDir ) );
if ( material.iridescenceThickness == 0.0 ) {
material.iridescence = 0.0;
} else {
material.iridescence = saturate( material.iridescence );
}
if ( material.iridescence > 0.0 ) {
material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
PointLight pointLight;
#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
PointLightShadow pointLightShadow;
#endif
#pragma unroll_loop_start
for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
pointLight = pointLights[ i ];
getPointLightInfo( pointLight, geometryPosition, directLight );
#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
pointLightShadow = pointLightShadows[ i ];
directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
#endif
RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
}
#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
SpotLight spotLight;
vec4 spotColor;
vec3 spotLightCoord;
bool inSpotLightMap;
#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
SpotLightShadow spotLightShadow;
#endif
#pragma unroll_loop_start
for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
spotLight = spotLights[ i ];
getSpotLightInfo( spotLight, geometryPosition, directLight );
#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
#else
#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
#endif
#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
#endif
#undef SPOT_LIGHT_MAP_INDEX
#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
spotLightShadow = spotLightShadows[ i ];
directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
#endif
RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
}
#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
DirectionalLight directionalLight;
#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
DirectionalLightShadow directionalLightShadow;
#endif
#pragma unroll_loop_start
for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
directionalLight = directionalLights[ i ];
getDirectionalLightInfo( directionalLight, directLight );
#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
directionalLightShadow = directionalLightShadows[ i ];
directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
#endif
RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
}
#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
RectAreaLight rectAreaLight;
#pragma unroll_loop_start
for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
rectAreaLight = rectAreaLights[ i ];
RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
}
#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
vec3 iblIrradiance = vec3( 0.0 );
vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
#if defined( USE_LIGHT_PROBES )
irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
#endif
#if ( NUM_HEMI_LIGHTS > 0 )
#pragma unroll_loop_start
for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
}
#pragma unroll_loop_end
#endif
#ifdef USE_LIGHT_PROBES_GRID
vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
#endif
#endif
#if defined( RE_IndirectSpecular )
vec3 radiance = vec3( 0.0 );
vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Mu=`#if defined( RE_IndirectDiffuse )
#ifdef USE_LIGHTMAP
vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
irradiance += lightMapIrradiance;
#endif
#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
iblIrradiance += getIBLIrradiance( geometryNormal );
#endif
#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
#ifdef USE_ANISOTROPY
radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
#else
radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
#endif
#ifdef USE_CLEARCOAT
clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
#endif
#endif`,Su=`#if defined( RE_IndirectDiffuse )
#if defined( LAMBERT ) || defined( PHONG )
irradiance += iblIrradiance;
#endif
RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bu=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
vec3 res = probesResolution;
vec3 gridRange = probesMax - probesMin;
vec3 resMinusOne = res - 1.0;
vec3 probeSpacing = gridRange / resMinusOne;
vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
uvw = uvw * resMinusOne / res + 0.5 / res;
float nz          = res.z;
float paddedSlices = nz + 2.0;
float atlasDepth  = 7.0 * paddedSlices;
float uvZBase     = uvw.z * nz + 1.0;
vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
vec3 c0 = s0.xyz;
vec3 c1 = vec3( s0.w, s1.xy );
vec3 c2 = vec3( s1.zw, s2.x );
vec3 c3 = s2.yzw;
vec3 c4 = s3.xyz;
vec3 c5 = vec3( s3.w, s4.xy );
vec3 c6 = vec3( s4.zw, s5.x );
vec3 c7 = s5.yzw;
vec3 c8 = s6.xyz;
float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
vec3 result = c0 * 0.886227;
result += c1 * 2.0 * 0.511664 * y;
result += c2 * 2.0 * 0.511664 * z;
result += c3 * 2.0 * 0.511664 * x;
result += c4 * 2.0 * 0.429043 * x * y;
result += c5 * 2.0 * 0.429043 * y * z;
result += c6 * ( 0.743125 * z * z - 0.247708 );
result += c7 * 2.0 * 0.429043 * x * z;
result += c8 * 0.429043 * ( x * x - y * y );
return max( result, vec3( 0.0 ) );
}
#endif`,Tu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Au=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
uniform float logDepthBufFC;
varying float vFragDepth;
varying float vIsPerspective;
#endif`,Eu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
varying float vFragDepth;
varying float vIsPerspective;
#endif`,wu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
vFragDepth = 1.0 + gl_Position.w;
vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Cu=`#ifdef USE_MAP
vec4 sampledDiffuseColor = texture2D( map, vMapUv );
#ifdef DECODE_VIDEO_TEXTURE
sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
#endif
diffuseColor *= sampledDiffuseColor;
#endif`,Ru=`#ifdef USE_MAP
uniform sampler2D map;
#endif`,Iu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
#if defined( USE_POINTS_UV )
vec2 uv = vUv;
#else
vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#endif
#ifdef USE_MAP
diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Pu=`#if defined( USE_POINTS_UV )
varying vec2 vUv;
#else
#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
uniform mat3 uvTransform;
#endif
#endif
#ifdef USE_MAP
uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
uniform sampler2D alphaMap;
#endif`,Lu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
metalnessFactor *= texelMetalness.b;
#endif`,Du=`#ifdef USE_METALNESSMAP
uniform sampler2D metalnessMap;
#endif`,Nu=`#ifdef USE_INSTANCING_MORPH
float morphTargetInfluences[ MORPHTARGETS_COUNT ];
float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
}
#endif`,Uu=`#if defined( USE_MORPHCOLORS )
vColor *= morphTargetBaseInfluence;
for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
#if defined( USE_COLOR_ALPHA )
if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
#elif defined( USE_COLOR )
if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
#endif
}
#endif`,Fu=`#ifdef USE_MORPHNORMALS
objectNormal *= morphTargetBaseInfluence;
for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
}
#endif`,Ou=`#ifdef USE_MORPHTARGETS
#ifndef USE_INSTANCING_MORPH
uniform float morphTargetBaseInfluence;
uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
#endif
uniform sampler2DArray morphTargetsTexture;
uniform ivec2 morphTargetsTextureSize;
vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
int y = texelIndex / morphTargetsTextureSize.x;
int x = texelIndex - y * morphTargetsTextureSize.x;
ivec3 morphUV = ivec3( x, y, morphTargetIndex );
return texelFetch( morphTargetsTexture, morphUV, 0 );
}
#endif`,Bu=`#ifdef USE_MORPHTARGETS
transformed *= morphTargetBaseInfluence;
for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
}
#endif`,zu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
vec3 fdx = dFdx( vViewPosition );
vec3 fdy = dFdy( vViewPosition );
vec3 normal = normalize( cross( fdx, fdy ) );
#else
vec3 normal = normalize( vNormal );
#ifdef DOUBLE_SIDED
normal *= faceDirection;
#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
#ifdef USE_TANGENT
mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
#else
mat3 tbn = getTangentFrame( - vViewPosition, normal,
#if defined( USE_NORMALMAP )
vNormalMapUv
#elif defined( USE_CLEARCOAT_NORMALMAP )
vClearcoatNormalMapUv
#else
vUv
#endif
);
#endif
#ifdef DOUBLE_SIDED
tbn[0] *= faceDirection;
tbn[1] *= faceDirection;
#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
#ifdef USE_TANGENT
mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
#else
mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
#endif
#ifdef DOUBLE_SIDED
tbn2[0] *= faceDirection;
tbn2[1] *= faceDirection;
#endif
#endif
vec3 nonPerturbedNormal = normal;`,Vu=`#ifdef USE_NORMALMAP_OBJECTSPACE
normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
#ifdef FLIP_SIDED
normal = - normal;
#endif
#ifdef DOUBLE_SIDED
normal = normal * faceDirection;
#endif
normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
#if defined( USE_PACKED_NORMALMAP )
mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
#endif
mapN.xy *= normalScale;
normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ku=`#ifndef FLAT_SHADED
varying vec3 vNormal;
#ifdef USE_TANGENT
varying vec3 vTangent;
varying vec3 vBitangent;
#endif
#endif`,Gu=`#ifndef FLAT_SHADED
varying vec3 vNormal;
#ifdef USE_TANGENT
varying vec3 vTangent;
varying vec3 vBitangent;
#endif
#endif`,Hu=`#ifndef FLAT_SHADED
vNormal = normalize( transformedNormal );
#ifdef USE_TANGENT
vTangent = normalize( transformedTangent );
vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
#ifdef FLIP_SIDED
vBitangent = - vBitangent;
#endif
#endif
#endif`,Wu=`#ifdef USE_NORMALMAP
uniform sampler2D normalMap;
uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
vec3 q0 = dFdx( eye_pos.xyz );
vec3 q1 = dFdy( eye_pos.xyz );
vec2 st0 = dFdx( uv.st );
vec2 st1 = dFdy( uv.st );
vec3 N = surf_norm;
vec3 q1perp = cross( q1, N );
vec3 q0perp = cross( N, q0 );
vec3 T = q1perp * st0.x + q0perp * st1.x;
vec3 B = q1perp * st0.y + q0perp * st1.y;
float det = max( dot( T, T ), dot( B, B ) );
float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
return mat3( T * scale, B * scale, N );
}
#endif`,Xu=`#ifdef USE_CLEARCOAT
vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qu=`#ifdef USE_CLEARCOAT_NORMALMAP
vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
clearcoatMapN.xy *= clearcoatNormalScale;
clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Yu=`#ifdef USE_CLEARCOATMAP
uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
uniform sampler2D clearcoatNormalMap;
uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
uniform sampler2D clearcoatRoughnessMap;
#endif`,Zu=`#ifdef USE_IRIDESCENCEMAP
uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
uniform sampler2D iridescenceThicknessMap;
#endif`,$u=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ju=`vec3 packNormalToRGB( const in vec3 normal ) {
return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
if( v <= 0.0 )
return vec4( 0., 0., 0., 0. );
if( v >= 1.0 )
return vec4( 1., 1., 1., 1. );
float vuf;
float af = modf( v * PackFactors.a, vuf );
float bf = modf( vuf * ShiftRight8, vuf );
float gf = modf( vuf * ShiftRight8, vuf );
return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
if( v <= 0.0 )
return vec3( 0., 0., 0. );
if( v >= 1.0 )
return vec3( 1., 1., 1. );
float vuf;
float bf = modf( v * PackFactors.b, vuf );
float gf = modf( vuf * ShiftRight8, vuf );
return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
if( v <= 0.0 )
return vec2( 0., 0. );
if( v >= 1.0 )
return vec2( 1., 1. );
float vuf;
float gf = modf( v * 256., vuf );
return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
#ifdef USE_REVERSED_DEPTH_BUFFER

return depth * ( far - near ) - far;
#else
return depth * ( near - far ) - near;
#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {

#ifdef USE_REVERSED_DEPTH_BUFFER
return ( near * far ) / ( ( near - far ) * depth - near );
#else
return ( near * far ) / ( ( far - near ) * depth - far );
#endif
}`,Ku=`#ifdef PREMULTIPLIED_ALPHA
gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Qu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ju=`#ifdef DITHERING
gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ed=`#ifdef DITHERING
vec3 dithering( vec3 color ) {
float grid_position = rand( gl_FragCoord.xy );
vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
return color + dither_shift_RGB;
}
#endif`,td=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
roughnessFactor *= texelRoughness.g;
#endif`,nd=`#ifdef USE_ROUGHNESSMAP
uniform sampler2D roughnessMap;
#endif`,id=`#if NUM_SPOT_LIGHT_COORDS > 0
varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
#if NUM_DIR_LIGHT_SHADOWS > 0
#if defined( SHADOWMAP_TYPE_PCF )
uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
#else
uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
#endif
varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
struct DirectionalLightShadow {
float shadowIntensity;
float shadowBias;
float shadowNormalBias;
float shadowRadius;
vec2 shadowMapSize;
};
uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
#endif
#if NUM_SPOT_LIGHT_SHADOWS > 0
#if defined( SHADOWMAP_TYPE_PCF )
uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
#else
uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
#endif
struct SpotLightShadow {
float shadowIntensity;
float shadowBias;
float shadowNormalBias;
float shadowRadius;
vec2 shadowMapSize;
};
uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
#endif
#if NUM_POINT_LIGHT_SHADOWS > 0
#if defined( SHADOWMAP_TYPE_PCF )
uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
#elif defined( SHADOWMAP_TYPE_BASIC )
uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
#endif
varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
struct PointLightShadow {
float shadowIntensity;
float shadowBias;
float shadowNormalBias;
float shadowRadius;
vec2 shadowMapSize;
float shadowCameraNear;
float shadowCameraFar;
};
uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
#endif
#if defined( SHADOWMAP_TYPE_PCF )
float interleavedGradientNoise( vec2 position ) {
return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
}
vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
const float goldenAngle = 2.399963229728653;
float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
float theta = float( sampleIndex ) * goldenAngle + phi;
return vec2( cos( theta ), sin( theta ) ) * r;
}
#endif
#if defined( SHADOWMAP_TYPE_PCF )
float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
float shadow = 1.0;
shadowCoord.xyz /= shadowCoord.w;
shadowCoord.z += shadowBias;
bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
if ( frustumTest ) {
vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
float radius = shadowRadius * texelSize.x;
float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
shadow = (
texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
) * 0.2;
}
return mix( 1.0, shadow, shadowIntensity );
}
#elif defined( SHADOWMAP_TYPE_VSM )
float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
float shadow = 1.0;
shadowCoord.xyz /= shadowCoord.w;
#ifdef USE_REVERSED_DEPTH_BUFFER
shadowCoord.z -= shadowBias;
#else
shadowCoord.z += shadowBias;
#endif
bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
if ( frustumTest ) {
vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
float mean = distribution.x;
float variance = distribution.y * distribution.y;
#ifdef USE_REVERSED_DEPTH_BUFFER
float hard_shadow = step( mean, shadowCoord.z );
#else
float hard_shadow = step( shadowCoord.z, mean );
#endif

if ( hard_shadow == 1.0 ) {
shadow = 1.0;
} else {
variance = max( variance, 0.0000001 );
float d = shadowCoord.z - mean;
float p_max = variance / ( variance + d * d );
p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
shadow = max( hard_shadow, p_max );
}
}
return mix( 1.0, shadow, shadowIntensity );
}
#else
float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
float shadow = 1.0;
shadowCoord.xyz /= shadowCoord.w;
#ifdef USE_REVERSED_DEPTH_BUFFER
shadowCoord.z -= shadowBias;
#else
shadowCoord.z += shadowBias;
#endif
bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
if ( frustumTest ) {
float depth = texture2D( shadowMap, shadowCoord.xy ).r;
#ifdef USE_REVERSED_DEPTH_BUFFER
shadow = step( depth, shadowCoord.z );
#else
shadow = step( shadowCoord.z, depth );
#endif
}
return mix( 1.0, shadow, shadowIntensity );
}
#endif
#if NUM_POINT_LIGHT_SHADOWS > 0
#if defined( SHADOWMAP_TYPE_PCF )
float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
float shadow = 1.0;
vec3 lightToPosition = shadowCoord.xyz;
vec3 bd3D = normalize( lightToPosition );
vec3 absVec = abs( lightToPosition );
float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
#ifdef USE_REVERSED_DEPTH_BUFFER
float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
dp -= shadowBias;
#else
float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
dp += shadowBias;
#endif
float texelSize = shadowRadius / shadowMapSize.x;
vec3 absDir = abs( bd3D );
vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
tangent = normalize( cross( bd3D, tangent ) );
vec3 bitangent = cross( bd3D, tangent );
float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
vec2 sample0 = vogelDiskSample( 0, 5, phi );
vec2 sample1 = vogelDiskSample( 1, 5, phi );
vec2 sample2 = vogelDiskSample( 2, 5, phi );
vec2 sample3 = vogelDiskSample( 3, 5, phi );
vec2 sample4 = vogelDiskSample( 4, 5, phi );
shadow = (
texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
) * 0.2;
}
return mix( 1.0, shadow, shadowIntensity );
}
#elif defined( SHADOWMAP_TYPE_BASIC )
float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
float shadow = 1.0;
vec3 lightToPosition = shadowCoord.xyz;
vec3 absVec = abs( lightToPosition );
float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
dp += shadowBias;
vec3 bd3D = normalize( lightToPosition );
float depth = textureCube( shadowMap, bd3D ).r;
#ifdef USE_REVERSED_DEPTH_BUFFER
depth = 1.0 - depth;
#endif
shadow = step( dp, depth );
}
return mix( 1.0, shadow, shadowIntensity );
}
#endif
#endif
#endif`,sd=`#if NUM_SPOT_LIGHT_COORDS > 0
uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
#if NUM_DIR_LIGHT_SHADOWS > 0
uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
struct DirectionalLightShadow {
float shadowIntensity;
float shadowBias;
float shadowNormalBias;
float shadowRadius;
vec2 shadowMapSize;
};
uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
#endif
#if NUM_SPOT_LIGHT_SHADOWS > 0
struct SpotLightShadow {
float shadowIntensity;
float shadowBias;
float shadowNormalBias;
float shadowRadius;
vec2 shadowMapSize;
};
uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
#endif
#if NUM_POINT_LIGHT_SHADOWS > 0
uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
struct PointLightShadow {
float shadowIntensity;
float shadowBias;
float shadowNormalBias;
float shadowRadius;
vec2 shadowMapSize;
float shadowCameraNear;
float shadowCameraFar;
};
uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
#endif
#endif`,rd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
#ifdef HAS_NORMAL
vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
#else
vec3 shadowWorldNormal = vec3( 0.0 );
#endif
vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
#if NUM_DIR_LIGHT_SHADOWS > 0
#pragma unroll_loop_start
for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
}
#pragma unroll_loop_end
#endif
#if NUM_POINT_LIGHT_SHADOWS > 0
#pragma unroll_loop_start
for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
}
#pragma unroll_loop_end
#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
#pragma unroll_loop_start
for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
shadowWorldPosition = worldPosition;
#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
#endif
vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
}
#pragma unroll_loop_end
#endif`,ad=`float getShadowMask() {
float shadow = 1.0;
#ifdef USE_SHADOWMAP
#if NUM_DIR_LIGHT_SHADOWS > 0
DirectionalLightShadow directionalLight;
#pragma unroll_loop_start
for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
directionalLight = directionalLightShadows[ i ];
shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
}
#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHT_SHADOWS > 0
SpotLightShadow spotLight;
#pragma unroll_loop_start
for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
spotLight = spotLightShadows[ i ];
shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
}
#pragma unroll_loop_end
#endif
#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
PointLightShadow pointLight;
#pragma unroll_loop_start
for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
pointLight = pointLightShadows[ i ];
shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
}
#pragma unroll_loop_end
#endif
#endif
return shadow;
}`,od=`#ifdef USE_SKINNING
mat4 boneMatX = getBoneMatrix( skinIndex.x );
mat4 boneMatY = getBoneMatrix( skinIndex.y );
mat4 boneMatZ = getBoneMatrix( skinIndex.z );
mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ld=`#ifdef USE_SKINNING
uniform mat4 bindMatrix;
uniform mat4 bindMatrixInverse;
uniform highp sampler2D boneTexture;
mat4 getBoneMatrix( const in float i ) {
int size = textureSize( boneTexture, 0 ).x;
int j = int( i ) * 4;
int x = j % size;
int y = j / size;
vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
return mat4( v1, v2, v3, v4 );
}
#endif`,cd=`#ifdef USE_SKINNING
vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
vec4 skinned = vec4( 0.0 );
skinned += boneMatX * skinVertex * skinWeight.x;
skinned += boneMatY * skinVertex * skinWeight.y;
skinned += boneMatZ * skinVertex * skinWeight.z;
skinned += boneMatW * skinVertex * skinWeight.w;
transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hd=`#ifdef USE_SKINNING
mat4 skinMatrix = mat4( 0.0 );
skinMatrix += skinWeight.x * boneMatX;
skinMatrix += skinWeight.y * boneMatY;
skinMatrix += skinWeight.z * boneMatZ;
skinMatrix += skinWeight.w * boneMatW;
skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
#ifdef USE_TANGENT
objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
#endif
#endif`,ud=`float specularStrength;
#ifdef USE_SPECULARMAP
vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
specularStrength = texelSpecular.r;
#else
specularStrength = 1.0;
#endif`,dd=`#ifdef USE_SPECULARMAP
uniform sampler2D specularMap;
#endif`,fd=`#if defined( TONE_MAPPING )
gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
color *= toneMappingExposure;
return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
color *= toneMappingExposure;
color = max( vec3( 0.0 ), color - 0.004 );
return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
const mat3 ACESInputMat = mat3(
vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
vec3( 0.04823, 0.01566, 0.83777 )
);
const mat3 ACESOutputMat = mat3(
vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
vec3( -0.07367, -0.00605,  1.07602 )
);
color *= toneMappingExposure / 0.6;
color = ACESInputMat * color;
color = RRTAndODTFit( color );
color = ACESOutputMat * color;
return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
vec3( 1.6605, - 0.1246, - 0.0182 ),
vec3( - 0.5876, 1.1329, - 0.1006 ),
vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
vec3( 0.6274, 0.0691, 0.0164 ),
vec3( 0.3293, 0.9195, 0.0880 ),
vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
vec3 x2 = x * x;
vec3 x4 = x2 * x2;
return + 15.5 * x4 * x2
- 40.14 * x4 * x
+ 31.96 * x4
- 6.868 * x2 * x
+ 0.4298 * x2
+ 0.1191 * x
- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
const mat3 AgXInsetMatrix = mat3(
vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
);
const mat3 AgXOutsetMatrix = mat3(
vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
);
const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
color *= toneMappingExposure;
color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
color = AgXInsetMatrix * color;
color = max( color, 1e-10 );	color = log2( color );
color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
color = clamp( color, 0.0, 1.0 );
color = agxDefaultContrastApprox( color );
color = AgXOutsetMatrix * color;
color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
color = clamp( color, 0.0, 1.0 );
return color;
}
vec3 NeutralToneMapping( vec3 color ) {
const float StartCompression = 0.8 - 0.04;
const float Desaturation = 0.15;
color *= toneMappingExposure;
float x = min( color.r, min( color.g, color.b ) );
float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
color -= offset;
float peak = max( color.r, max( color.g, color.b ) );
if ( peak < StartCompression ) return color;
float d = 1. - StartCompression;
float newPeak = 1. - d * d / ( peak + d - StartCompression );
color *= newPeak / peak;
float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,md=`#ifdef USE_TRANSMISSION
material.transmission = transmission;
material.transmissionAlpha = 1.0;
material.thickness = thickness;
material.attenuationDistance = attenuationDistance;
material.attenuationColor = attenuationColor;
#ifdef USE_TRANSMISSIONMAP
material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
#endif
#ifdef USE_THICKNESSMAP
material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
#endif
vec3 pos = vWorldPosition;
vec3 v = normalize( cameraPosition - pos );
vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
vec4 transmitted = getIBLVolumeRefraction(
n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
material.attenuationColor, material.attenuationDistance );
material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,gd=`#ifdef USE_TRANSMISSION
uniform float transmission;
uniform float thickness;
uniform float attenuationDistance;
uniform vec3 attenuationColor;
#ifdef USE_TRANSMISSIONMAP
uniform sampler2D transmissionMap;
#endif
#ifdef USE_THICKNESSMAP
uniform sampler2D thicknessMap;
#endif
uniform vec2 transmissionSamplerSize;
uniform sampler2D transmissionSamplerMap;
uniform mat4 modelMatrix;
uniform mat4 projectionMatrix;
varying vec3 vWorldPosition;
float w0( float a ) {
return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
}
float w1( float a ) {
return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
}
float w2( float a ){
return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
}
float w3( float a ) {
return ( 1.0 / 6.0 ) * ( a * a * a );
}
float g0( float a ) {
return w0( a ) + w1( a );
}
float g1( float a ) {
return w2( a ) + w3( a );
}
float h0( float a ) {
return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
}
float h1( float a ) {
return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
}
vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
uv = uv * texelSize.zw + 0.5;
vec2 iuv = floor( uv );
vec2 fuv = fract( uv );
float g0x = g0( fuv.x );
float g1x = g1( fuv.x );
float h0x = h0( fuv.x );
float h1x = h1( fuv.x );
float h0y = h0( fuv.y );
float h1y = h1( fuv.y );
vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
}
vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
vec2 fLodSizeInv = 1.0 / fLodSize;
vec2 cLodSizeInv = 1.0 / cLodSize;
vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
return mix( fSample, cSample, fract( lod ) );
}
vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
vec3 modelScale;
modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
return normalize( refractionVector ) * thickness * modelScale;
}
float applyIorToRoughness( const in float roughness, const in float ior ) {
return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
}
vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
}
vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
if ( isinf( attenuationDistance ) ) {
return vec3( 1.0 );
} else {
vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
}
}
vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
const in vec3 attenuationColor, const in float attenuationDistance ) {
vec4 transmittedLight;
vec3 transmittance;
#ifdef USE_DISPERSION
float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
for ( int i = 0; i < 3; i ++ ) {
vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
vec3 refractedRayExit = position + transmissionRay;
vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
vec2 refractionCoords = ndcPos.xy / ndcPos.w;
refractionCoords += 1.0;
refractionCoords /= 2.0;
vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
transmittedLight[ i ] = transmissionSample[ i ];
transmittedLight.a += transmissionSample.a;
transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
}
transmittedLight.a /= 3.0;
#else
vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
vec3 refractedRayExit = position + transmissionRay;
vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
vec2 refractionCoords = ndcPos.xy / ndcPos.w;
refractionCoords += 1.0;
refractionCoords /= 2.0;
transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
#endif
vec3 attenuatedColor = transmittance * transmittedLight.rgb;
vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
}
#endif`,_d=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
varying vec2 vUv;
#endif
#ifdef USE_MAP
varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
uniform mat3 transmissionMapTransform;
varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
uniform mat3 thicknessMapTransform;
varying vec2 vThicknessMapUv;
#endif`,xd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
varying vec2 vUv;
#endif
#ifdef USE_MAP
uniform mat3 mapTransform;
varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
uniform mat3 alphaMapTransform;
varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
uniform mat3 lightMapTransform;
varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
uniform mat3 aoMapTransform;
varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
uniform mat3 bumpMapTransform;
varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
uniform mat3 normalMapTransform;
varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
uniform mat3 displacementMapTransform;
varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
uniform mat3 emissiveMapTransform;
varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
uniform mat3 metalnessMapTransform;
varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
uniform mat3 roughnessMapTransform;
varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
uniform mat3 anisotropyMapTransform;
varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
uniform mat3 clearcoatMapTransform;
varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
uniform mat3 clearcoatNormalMapTransform;
varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
uniform mat3 clearcoatRoughnessMapTransform;
varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
uniform mat3 sheenColorMapTransform;
varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
uniform mat3 sheenRoughnessMapTransform;
varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
uniform mat3 iridescenceMapTransform;
varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
uniform mat3 iridescenceThicknessMapTransform;
varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
uniform mat3 specularMapTransform;
varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
uniform mat3 specularColorMapTransform;
varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
uniform mat3 specularIntensityMapTransform;
varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
uniform mat3 transmissionMapTransform;
varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
uniform mat3 thicknessMapTransform;
varying vec2 vThicknessMapUv;
#endif`,vd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,yd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
vec4 worldPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
worldPosition = batchingMatrix * worldPosition;
#endif
#ifdef USE_INSTANCING
worldPosition = instanceMatrix * worldPosition;
#endif
worldPosition = modelMatrix * worldPosition;
#endif`,Md=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Sd=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
vec4 texColor = texture2D( t2D, vUv );
#ifdef DECODE_VIDEO_TEXTURE
texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
#endif
texColor.rgb *= backgroundIntensity;
gl_FragColor = texColor;
#include <tonemapping_fragment>
#include <colorspace_fragment>
}`,bd=`varying vec3 vWorldDirection;
#include <common>
void main() {
vWorldDirection = transformDirection( position, modelMatrix );
#include <begin_vertex>
#include <project_vertex>
gl_Position.z = gl_Position.w;
}`,Td=`#ifdef ENVMAP_TYPE_CUBE
uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
#ifdef ENVMAP_TYPE_CUBE
vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
#elif defined( ENVMAP_TYPE_CUBE_UV )
vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
#else
vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
#endif
texColor.rgb *= backgroundIntensity;
gl_FragColor = texColor;
#include <tonemapping_fragment>
#include <colorspace_fragment>
}`,Ad=`varying vec3 vWorldDirection;
#include <common>
void main() {
vWorldDirection = transformDirection( position, modelMatrix );
#include <begin_vertex>
#include <project_vertex>
gl_Position.z = gl_Position.w;
}`,Ed=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
gl_FragColor = texColor;
gl_FragColor.a *= opacity;
#include <tonemapping_fragment>
#include <colorspace_fragment>
}`,wd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
#include <uv_vertex>
#include <batching_vertex>
#include <skinbase_vertex>
#include <morphinstance_vertex>
#ifdef USE_DISPLACEMENTMAP
#include <beginnormal_vertex>
#include <morphnormal_vertex>
#include <skinnormal_vertex>
#endif
#include <begin_vertex>
#include <morphtarget_vertex>
#include <skinning_vertex>
#include <displacementmap_vertex>
#include <project_vertex>
#include <logdepthbuf_vertex>
#include <clipping_planes_vertex>
vHighPrecisionZW = gl_Position.zw;
}`,Cd=`#if DEPTH_PACKING == 3200
uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
vec4 diffuseColor = vec4( 1.0 );
#include <clipping_planes_fragment>
#if DEPTH_PACKING == 3200
diffuseColor.a = opacity;
#endif
#include <map_fragment>
#include <alphamap_fragment>
#include <alphatest_fragment>
#include <alphahash_fragment>
#include <logdepthbuf_fragment>
#ifdef USE_REVERSED_DEPTH_BUFFER
float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
#else
float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
#endif
#if DEPTH_PACKING == 3200
gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
#elif DEPTH_PACKING == 3201
gl_FragColor = packDepthToRGBA( fragCoordZ );
#elif DEPTH_PACKING == 3202
gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
#elif DEPTH_PACKING == 3203
gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
#endif
}`,Rd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
#include <uv_vertex>
#include <batching_vertex>
#include <skinbase_vertex>
#include <morphinstance_vertex>
#ifdef USE_DISPLACEMENTMAP
#include <beginnormal_vertex>
#include <morphnormal_vertex>
#include <skinnormal_vertex>
#endif
#include <begin_vertex>
#include <morphtarget_vertex>
#include <skinning_vertex>
#include <displacementmap_vertex>
#include <project_vertex>
#include <worldpos_vertex>
#include <clipping_planes_vertex>
vWorldPosition = worldPosition.xyz;
}`,Id=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
vec4 diffuseColor = vec4( 1.0 );
#include <clipping_planes_fragment>
#include <map_fragment>
#include <alphamap_fragment>
#include <alphatest_fragment>
#include <alphahash_fragment>
float dist = length( vWorldPosition - referencePosition );
dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
dist = saturate( dist );
gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Pd=`varying vec3 vWorldDirection;
#include <common>
void main() {
vWorldDirection = transformDirection( position, modelMatrix );
#include <begin_vertex>
#include <project_vertex>
}`,Ld=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
vec3 direction = normalize( vWorldDirection );
vec2 sampleUV = equirectUv( direction );
gl_FragColor = texture2D( tEquirect, sampleUV );
#include <tonemapping_fragment>
#include <colorspace_fragment>
}`,Dd=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
vLineDistance = scale * lineDistance;
#include <uv_vertex>
#include <color_vertex>
#include <morphinstance_vertex>
#include <morphcolor_vertex>
#include <begin_vertex>
#include <morphtarget_vertex>
#include <project_vertex>
#include <logdepthbuf_vertex>
#include <clipping_planes_vertex>
#include <fog_vertex>
}`,Nd=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
vec4 diffuseColor = vec4( diffuse, opacity );
#include <clipping_planes_fragment>
if ( mod( vLineDistance, totalSize ) > dashSize ) {
discard;
}
vec3 outgoingLight = vec3( 0.0 );
#include <logdepthbuf_fragment>
#include <map_fragment>
#include <color_fragment>
outgoingLight = diffuseColor.rgb;
#include <opaque_fragment>
#include <tonemapping_fragment>
#include <colorspace_fragment>
#include <fog_fragment>
#include <premultiplied_alpha_fragment>
}`,Ud=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
#include <uv_vertex>
#include <color_vertex>
#include <morphinstance_vertex>
#include <morphcolor_vertex>
#include <batching_vertex>
#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
#include <beginnormal_vertex>
#include <morphnormal_vertex>
#include <skinbase_vertex>
#include <skinnormal_vertex>
#include <defaultnormal_vertex>
#endif
#include <begin_vertex>
#include <morphtarget_vertex>
#include <skinning_vertex>
#include <project_vertex>
#include <logdepthbuf_vertex>
#include <clipping_planes_vertex>
#include <worldpos_vertex>
#include <envmap_vertex>
#include <fog_vertex>
}`,Fd=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
vec4 diffuseColor = vec4( diffuse, opacity );
#include <clipping_planes_fragment>
#include <logdepthbuf_fragment>
#include <map_fragment>
#include <color_fragment>
#include <alphamap_fragment>
#include <alphatest_fragment>
#include <alphahash_fragment>
#include <specularmap_fragment>
ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
#ifdef USE_LIGHTMAP
vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
#else
reflectedLight.indirectDiffuse += vec3( 1.0 );
#endif
#include <aomap_fragment>
reflectedLight.indirectDiffuse *= diffuseColor.rgb;
vec3 outgoingLight = reflectedLight.indirectDiffuse;
#include <envmap_fragment>
#include <opaque_fragment>
#include <tonemapping_fragment>
#include <colorspace_fragment>
#include <fog_fragment>
#include <premultiplied_alpha_fragment>
#include <dithering_fragment>
}`,Od=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
#include <uv_vertex>
#include <color_vertex>
#include <morphinstance_vertex>
#include <morphcolor_vertex>
#include <batching_vertex>
#include <beginnormal_vertex>
#include <morphnormal_vertex>
#include <skinbase_vertex>
#include <skinnormal_vertex>
#include <defaultnormal_vertex>
#include <normal_vertex>
#include <begin_vertex>
#include <morphtarget_vertex>
#include <skinning_vertex>
#include <displacementmap_vertex>
#include <project_vertex>
#include <logdepthbuf_vertex>
#include <clipping_planes_vertex>
vViewPosition = - mvPosition.xyz;
#include <worldpos_vertex>
#include <envmap_vertex>
#include <shadowmap_vertex>
#include <fog_vertex>
}`,Bd=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
vec4 diffuseColor = vec4( diffuse, opacity );
#include <clipping_planes_fragment>
ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
vec3 totalEmissiveRadiance = emissive;
#include <logdepthbuf_fragment>
#include <map_fragment>
#include <color_fragment>
#include <alphamap_fragment>
#include <alphatest_fragment>
#include <alphahash_fragment>
#include <specularmap_fragment>
#include <normal_fragment_begin>
#include <normal_fragment_maps>
#include <emissivemap_fragment>
#include <lights_lambert_fragment>
#include <lights_fragment_begin>
#include <lights_fragment_maps>
#include <lights_fragment_end>
#include <aomap_fragment>
vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
#include <envmap_fragment>
#include <opaque_fragment>
#include <tonemapping_fragment>
#include <colorspace_fragment>
#include <fog_fragment>
#include <premultiplied_alpha_fragment>
#include <dithering_fragment>
}`,zd=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
#include <uv_vertex>
#include <color_vertex>
#include <morphinstance_vertex>
#include <morphcolor_vertex>
#include <batching_vertex>
#include <beginnormal_vertex>
#include <morphnormal_vertex>
#include <skinbase_vertex>
#include <skinnormal_vertex>
#include <defaultnormal_vertex>
#include <normal_vertex>
#include <begin_vertex>
#include <morphtarget_vertex>
#include <skinning_vertex>
#include <displacementmap_vertex>
#include <project_vertex>
#include <logdepthbuf_vertex>
#include <clipping_planes_vertex>
#include <fog_vertex>
vViewPosition = - mvPosition.xyz;
}`,Vd=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
vec4 diffuseColor = vec4( diffuse, opacity );
#include <clipping_planes_fragment>
#include <logdepthbuf_fragment>
#include <map_fragment>
#include <color_fragment>
#include <alphamap_fragment>
#include <alphatest_fragment>
#include <alphahash_fragment>
#include <normal_fragment_begin>
#include <normal_fragment_maps>
vec3 viewDir = normalize( vViewPosition );
vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
vec3 y = cross( viewDir, x );
vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
#ifdef USE_MATCAP
vec4 matcapColor = texture2D( matcap, uv );
#else
vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
#endif
vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
#include <opaque_fragment>
#include <tonemapping_fragment>
#include <colorspace_fragment>
#include <fog_fragment>
#include <premultiplied_alpha_fragment>
#include <dithering_fragment>
}`,kd=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
#include <uv_vertex>
#include <batching_vertex>
#include <beginnormal_vertex>
#include <morphinstance_vertex>
#include <morphnormal_vertex>
#include <skinbase_vertex>
#include <skinnormal_vertex>
#include <defaultnormal_vertex>
#include <normal_vertex>
#include <begin_vertex>
#include <morphtarget_vertex>
#include <skinning_vertex>
#include <displacementmap_vertex>
#include <project_vertex>
#include <logdepthbuf_vertex>
#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
vViewPosition = - mvPosition.xyz;
#endif
}`,Gd=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
#include <clipping_planes_fragment>
#include <logdepthbuf_fragment>
#include <normal_fragment_begin>
#include <normal_fragment_maps>
gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
#ifdef OPAQUE
gl_FragColor.a = 1.0;
#endif
}`,Hd=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
#include <uv_vertex>
#include <color_vertex>
#include <morphcolor_vertex>
#include <batching_vertex>
#include <beginnormal_vertex>
#include <morphinstance_vertex>
#include <morphnormal_vertex>
#include <skinbase_vertex>
#include <skinnormal_vertex>
#include <defaultnormal_vertex>
#include <normal_vertex>
#include <begin_vertex>
#include <morphtarget_vertex>
#include <skinning_vertex>
#include <displacementmap_vertex>
#include <project_vertex>
#include <logdepthbuf_vertex>
#include <clipping_planes_vertex>
vViewPosition = - mvPosition.xyz;
#include <worldpos_vertex>
#include <envmap_vertex>
#include <shadowmap_vertex>
#include <fog_vertex>
}`,Wd=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
vec4 diffuseColor = vec4( diffuse, opacity );
#include <clipping_planes_fragment>
ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
vec3 totalEmissiveRadiance = emissive;
#include <logdepthbuf_fragment>
#include <map_fragment>
#include <color_fragment>
#include <alphamap_fragment>
#include <alphatest_fragment>
#include <alphahash_fragment>
#include <specularmap_fragment>
#include <normal_fragment_begin>
#include <normal_fragment_maps>
#include <emissivemap_fragment>
#include <lights_phong_fragment>
#include <lights_fragment_begin>
#include <lights_fragment_maps>
#include <lights_fragment_end>
#include <aomap_fragment>
vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
#include <envmap_fragment>
#include <opaque_fragment>
#include <tonemapping_fragment>
#include <colorspace_fragment>
#include <fog_fragment>
#include <premultiplied_alpha_fragment>
#include <dithering_fragment>
}`,Xd=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
#include <uv_vertex>
#include <color_vertex>
#include <morphinstance_vertex>
#include <morphcolor_vertex>
#include <batching_vertex>
#include <beginnormal_vertex>
#include <morphnormal_vertex>
#include <skinbase_vertex>
#include <skinnormal_vertex>
#include <defaultnormal_vertex>
#include <normal_vertex>
#include <begin_vertex>
#include <morphtarget_vertex>
#include <skinning_vertex>
#include <displacementmap_vertex>
#include <project_vertex>
#include <logdepthbuf_vertex>
#include <clipping_planes_vertex>
vViewPosition = - mvPosition.xyz;
#include <worldpos_vertex>
#include <shadowmap_vertex>
#include <fog_vertex>
#ifdef USE_TRANSMISSION
vWorldPosition = worldPosition.xyz;
#endif
}`,qd=`#define STANDARD
#ifdef PHYSICAL
#define IOR
#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
uniform float ior;
#endif
#ifdef USE_SPECULAR
uniform float specularIntensity;
uniform vec3 specularColor;
#ifdef USE_SPECULAR_COLORMAP
uniform sampler2D specularColorMap;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
uniform sampler2D specularIntensityMap;
#endif
#endif
#ifdef USE_CLEARCOAT
uniform float clearcoat;
uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
uniform float iridescence;
uniform float iridescenceIOR;
uniform float iridescenceThicknessMinimum;
uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
uniform vec3 sheenColor;
uniform float sheenRoughness;
#ifdef USE_SHEEN_COLORMAP
uniform sampler2D sheenColorMap;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
uniform sampler2D sheenRoughnessMap;
#endif
#endif
#ifdef USE_ANISOTROPY
uniform vec2 anisotropyVector;
#ifdef USE_ANISOTROPYMAP
uniform sampler2D anisotropyMap;
#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
vec4 diffuseColor = vec4( diffuse, opacity );
#include <clipping_planes_fragment>
ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
vec3 totalEmissiveRadiance = emissive;
#include <logdepthbuf_fragment>
#include <map_fragment>
#include <color_fragment>
#include <alphamap_fragment>
#include <alphatest_fragment>
#include <alphahash_fragment>
#include <roughnessmap_fragment>
#include <metalnessmap_fragment>
#include <normal_fragment_begin>
#include <normal_fragment_maps>
#include <clearcoat_normal_fragment_begin>
#include <clearcoat_normal_fragment_maps>
#include <emissivemap_fragment>
#include <lights_physical_fragment>
#include <lights_fragment_begin>
#include <lights_fragment_maps>
#include <lights_fragment_end>
#include <aomap_fragment>
vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
#include <transmission_fragment>
vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
#ifdef USE_SHEEN

outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;

#endif
#ifdef USE_CLEARCOAT
float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
#endif
#include <opaque_fragment>
#include <tonemapping_fragment>
#include <colorspace_fragment>
#include <fog_fragment>
#include <premultiplied_alpha_fragment>
#include <dithering_fragment>
}`,Yd=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
#include <uv_vertex>
#include <color_vertex>
#include <morphinstance_vertex>
#include <morphcolor_vertex>
#include <batching_vertex>
#include <beginnormal_vertex>
#include <morphnormal_vertex>
#include <skinbase_vertex>
#include <skinnormal_vertex>
#include <defaultnormal_vertex>
#include <normal_vertex>
#include <begin_vertex>
#include <morphtarget_vertex>
#include <skinning_vertex>
#include <displacementmap_vertex>
#include <project_vertex>
#include <logdepthbuf_vertex>
#include <clipping_planes_vertex>
vViewPosition = - mvPosition.xyz;
#include <worldpos_vertex>
#include <shadowmap_vertex>
#include <fog_vertex>
}`,Zd=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
vec4 diffuseColor = vec4( diffuse, opacity );
#include <clipping_planes_fragment>
ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
vec3 totalEmissiveRadiance = emissive;
#include <logdepthbuf_fragment>
#include <map_fragment>
#include <color_fragment>
#include <alphamap_fragment>
#include <alphatest_fragment>
#include <alphahash_fragment>
#include <normal_fragment_begin>
#include <normal_fragment_maps>
#include <emissivemap_fragment>
#include <lights_toon_fragment>
#include <lights_fragment_begin>
#include <lights_fragment_maps>
#include <lights_fragment_end>
#include <aomap_fragment>
vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
#include <opaque_fragment>
#include <tonemapping_fragment>
#include <colorspace_fragment>
#include <fog_fragment>
#include <premultiplied_alpha_fragment>
#include <dithering_fragment>
}`,$d=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
varying vec2 vUv;
uniform mat3 uvTransform;
#endif
void main() {
#ifdef USE_POINTS_UV
vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif
#include <color_vertex>
#include <morphinstance_vertex>
#include <morphcolor_vertex>
#include <begin_vertex>
#include <morphtarget_vertex>
#include <project_vertex>
gl_PointSize = size;
#ifdef USE_SIZEATTENUATION
bool isPerspective = isPerspectiveMatrix( projectionMatrix );
if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
#endif
#include <logdepthbuf_vertex>
#include <clipping_planes_vertex>
#include <worldpos_vertex>
#include <fog_vertex>
}`,Jd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
vec4 diffuseColor = vec4( diffuse, opacity );
#include <clipping_planes_fragment>
vec3 outgoingLight = vec3( 0.0 );
#include <logdepthbuf_fragment>
#include <map_particle_fragment>
#include <color_fragment>
#include <alphatest_fragment>
#include <alphahash_fragment>
outgoingLight = diffuseColor.rgb;
#include <opaque_fragment>
#include <tonemapping_fragment>
#include <colorspace_fragment>
#include <fog_fragment>
#include <premultiplied_alpha_fragment>
}`,Kd=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
#include <batching_vertex>
#include <beginnormal_vertex>
#include <morphinstance_vertex>
#include <morphnormal_vertex>
#include <skinbase_vertex>
#include <skinnormal_vertex>
#include <defaultnormal_vertex>
#include <begin_vertex>
#include <morphtarget_vertex>
#include <skinning_vertex>
#include <project_vertex>
#include <logdepthbuf_vertex>
#include <worldpos_vertex>
#include <shadowmap_vertex>
#include <fog_vertex>
}`,Qd=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
#include <logdepthbuf_fragment>
gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
#include <tonemapping_fragment>
#include <colorspace_fragment>
#include <fog_fragment>
#include <premultiplied_alpha_fragment>
}`,jd=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
#include <uv_vertex>
vec4 mvPosition = modelViewMatrix[ 3 ];
vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
#ifndef USE_SIZEATTENUATION
bool isPerspective = isPerspectiveMatrix( projectionMatrix );
if ( isPerspective ) scale *= - mvPosition.z;
#endif
vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
vec2 rotatedPosition;
rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
mvPosition.xy += rotatedPosition;
gl_Position = projectionMatrix * mvPosition;
#include <logdepthbuf_vertex>
#include <clipping_planes_vertex>
#include <fog_vertex>
}`,ef=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
vec4 diffuseColor = vec4( diffuse, opacity );
#include <clipping_planes_fragment>
vec3 outgoingLight = vec3( 0.0 );
#include <logdepthbuf_fragment>
#include <map_fragment>
#include <alphamap_fragment>
#include <alphatest_fragment>
#include <alphahash_fragment>
outgoingLight = diffuseColor.rgb;
#include <opaque_fragment>
#include <tonemapping_fragment>
#include <colorspace_fragment>
#include <fog_fragment>
}`,Ye={alphahash_fragment:Mh,alphahash_pars_fragment:Sh,alphamap_fragment:bh,alphamap_pars_fragment:Th,alphatest_fragment:Ah,alphatest_pars_fragment:Eh,aomap_fragment:wh,aomap_pars_fragment:Ch,batching_pars_vertex:Rh,batching_vertex:Ih,begin_vertex:Ph,beginnormal_vertex:Lh,bsdfs:Dh,iridescence_fragment:Nh,bumpmap_pars_fragment:Uh,clipping_planes_fragment:Fh,clipping_planes_pars_fragment:Oh,clipping_planes_pars_vertex:Bh,clipping_planes_vertex:zh,color_fragment:Vh,color_pars_fragment:kh,color_pars_vertex:Gh,color_vertex:Hh,common:Wh,cube_uv_reflection_fragment:Xh,defaultnormal_vertex:qh,displacementmap_pars_vertex:Yh,displacementmap_vertex:Zh,emissivemap_fragment:$h,emissivemap_pars_fragment:Jh,colorspace_fragment:Kh,colorspace_pars_fragment:Qh,envmap_fragment:jh,envmap_common_pars_fragment:eu,envmap_pars_fragment:tu,envmap_pars_vertex:nu,envmap_physical_pars_fragment:fu,envmap_vertex:iu,fog_vertex:su,fog_pars_vertex:ru,fog_fragment:au,fog_pars_fragment:ou,gradientmap_pars_fragment:lu,lightmap_pars_fragment:cu,lights_lambert_fragment:hu,lights_lambert_pars_fragment:uu,lights_pars_begin:du,lights_toon_fragment:pu,lights_toon_pars_fragment:mu,lights_phong_fragment:gu,lights_phong_pars_fragment:_u,lights_physical_fragment:xu,lights_physical_pars_fragment:vu,lights_fragment_begin:yu,lights_fragment_maps:Mu,lights_fragment_end:Su,lightprobes_pars_fragment:bu,logdepthbuf_fragment:Tu,logdepthbuf_pars_fragment:Au,logdepthbuf_pars_vertex:Eu,logdepthbuf_vertex:wu,map_fragment:Cu,map_pars_fragment:Ru,map_particle_fragment:Iu,map_particle_pars_fragment:Pu,metalnessmap_fragment:Lu,metalnessmap_pars_fragment:Du,morphinstance_vertex:Nu,morphcolor_vertex:Uu,morphnormal_vertex:Fu,morphtarget_pars_vertex:Ou,morphtarget_vertex:Bu,normal_fragment_begin:zu,normal_fragment_maps:Vu,normal_pars_fragment:ku,normal_pars_vertex:Gu,normal_vertex:Hu,normalmap_pars_fragment:Wu,clearcoat_normal_fragment_begin:Xu,clearcoat_normal_fragment_maps:qu,clearcoat_pars_fragment:Yu,iridescence_pars_fragment:Zu,opaque_fragment:$u,packing:Ju,premultiplied_alpha_fragment:Ku,project_vertex:Qu,dithering_fragment:ju,dithering_pars_fragment:ed,roughnessmap_fragment:td,roughnessmap_pars_fragment:nd,shadowmap_pars_fragment:id,shadowmap_pars_vertex:sd,shadowmap_vertex:rd,shadowmask_pars_fragment:ad,skinbase_vertex:od,skinning_pars_vertex:ld,skinning_vertex:cd,skinnormal_vertex:hd,specularmap_fragment:ud,specularmap_pars_fragment:dd,tonemapping_fragment:fd,tonemapping_pars_fragment:pd,transmission_fragment:md,transmission_pars_fragment:gd,uv_pars_fragment:_d,uv_pars_vertex:xd,uv_vertex:vd,worldpos_vertex:yd,background_vert:Md,background_frag:Sd,backgroundCube_vert:bd,backgroundCube_frag:Td,cube_vert:Ad,cube_frag:Ed,depth_vert:wd,depth_frag:Cd,distance_vert:Rd,distance_frag:Id,equirect_vert:Pd,equirect_frag:Ld,linedashed_vert:Dd,linedashed_frag:Nd,meshbasic_vert:Ud,meshbasic_frag:Fd,meshlambert_vert:Od,meshlambert_frag:Bd,meshmatcap_vert:zd,meshmatcap_frag:Vd,meshnormal_vert:kd,meshnormal_frag:Gd,meshphong_vert:Hd,meshphong_frag:Wd,meshphysical_vert:Xd,meshphysical_frag:qd,meshtoon_vert:Yd,meshtoon_frag:Zd,points_vert:$d,points_frag:Jd,shadow_vert:Kd,shadow_frag:Qd,sprite_vert:jd,sprite_frag:ef},ve={common:{diffuse:{value:new st(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new st(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new V},probesMax:{value:new V},probesResolution:{value:new V}},points:{diffuse:{value:new st(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new st(16777215)},opacity:{value:1},center:{value:new tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},Rn={basic:{uniforms:kt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:kt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new st(0)},envMapIntensity:{value:1}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:kt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new st(0)},specular:{value:new st(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:kt([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new st(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:kt([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new st(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:kt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:kt([ve.points,ve.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:kt([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:kt([ve.common,ve.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:kt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:kt([ve.sprite,ve.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distance:{uniforms:kt([ve.common,ve.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distance_vert,fragmentShader:Ye.distance_frag},shadow:{uniforms:kt([ve.lights,ve.fog,{color:{value:new st(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};Rn.physical={uniforms:kt([Rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new st(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new st(0)},specularColor:{value:new st(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};var Sa={r:0,b:0,g:0},tf=new bt,Cc=new Ge;Cc.set(-1,0,0,0,1,0,0,0,1);function nf(i,e,t,n,s,r){let a=new st(0),o=s===!0?0:1,c,l,d=null,m=0,h=null;function p(A){let R=A.isScene===!0?A.background:null;if(R&&R.isTexture){let y=A.backgroundBlurriness>0;R=e.get(R,y)}return R}function _(A){let R=!1,y=p(A);y===null?f(a,o):y&&y.isColor&&(f(y,1),R=!0);let T=i.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||R)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function M(A,R){let y=p(R);y&&(y.isCubeTexture||y.mapping===vs)?(l===void 0&&(l=new Yt(new ki(1,1,1),new Ft({name:"BackgroundCubeMaterial",uniforms:Mi(Rn.backgroundCube.uniforms),vertexShader:Rn.backgroundCube.vertexShader,fragmentShader:Rn.backgroundCube.fragmentShader,side:Ht,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(T,E,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=y,l.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(tf.makeRotationFromEuler(R.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Cc),l.material.toneMapped=et.getTransfer(y.colorSpace)!==ct,(d!==y||m!==y.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,d=y,m=y.version,h=i.toneMapping),l.layers.enableAll(),A.unshift(l,l.geometry,l.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Yt(new xi(2,2),new Ft({name:"BackgroundMaterial",uniforms:Mi(Rn.background.uniforms),vertexShader:Rn.background.vertexShader,fragmentShader:Rn.background.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.toneMapped=et.getTransfer(y.colorSpace)!==ct,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||m!==y.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,d=y,m=y.version,h=i.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null))}function f(A,R){A.getRGB(Sa,Ro(i)),t.buffers.color.setClear(Sa.r,Sa.g,Sa.b,R,r)}function u(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(A,R=1){a.set(A),o=R,f(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(A){o=A,f(a,o)},render:_,addToRenderList:M,dispose:u}}function sf(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null),r=s,a=!1;function o(C,U,X,te,O){let J=!1,H=m(C,te,X,U);r!==H&&(r=H,l(r.object)),J=p(C,te,X,O),J&&_(C,te,X,O),O!==null&&e.update(O,i.ELEMENT_ARRAY_BUFFER),(J||a)&&(a=!1,y(C,U,X,te),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function c(){return i.createVertexArray()}function l(C){return i.bindVertexArray(C)}function d(C){return i.deleteVertexArray(C)}function m(C,U,X,te){let O=te.wireframe===!0,J=n[U.id];J===void 0&&(J={},n[U.id]=J);let H=C.isInstancedMesh===!0?C.id:0,ee=J[H];ee===void 0&&(ee={},J[H]=ee);let ie=ee[X.id];ie===void 0&&(ie={},ee[X.id]=ie);let ue=ie[O];return ue===void 0&&(ue=h(c()),ie[O]=ue),ue}function h(C){let U=[],X=[],te=[];for(let O=0;O<t;O++)U[O]=0,X[O]=0,te[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:X,attributeDivisors:te,object:C,attributes:{},index:null}}function p(C,U,X,te){let O=r.attributes,J=U.attributes,H=0,ee=X.getAttributes();for(let ie in ee)if(ee[ie].location>=0){let _e=O[ie],ce=J[ie];if(ce===void 0&&(ie==="instanceMatrix"&&C.instanceMatrix&&(ce=C.instanceMatrix),ie==="instanceColor"&&C.instanceColor&&(ce=C.instanceColor)),_e===void 0||_e.attribute!==ce||ce&&_e.data!==ce.data)return!0;H++}return r.attributesNum!==H||r.index!==te}function _(C,U,X,te){let O={},J=U.attributes,H=0,ee=X.getAttributes();for(let ie in ee)if(ee[ie].location>=0){let _e=J[ie];_e===void 0&&(ie==="instanceMatrix"&&C.instanceMatrix&&(_e=C.instanceMatrix),ie==="instanceColor"&&C.instanceColor&&(_e=C.instanceColor));let ce={};ce.attribute=_e,_e&&_e.data&&(ce.data=_e.data),O[ie]=ce,H++}r.attributes=O,r.attributesNum=H,r.index=te}function M(){let C=r.newAttributes;for(let U=0,X=C.length;U<X;U++)C[U]=0}function f(C){u(C,0)}function u(C,U){let X=r.newAttributes,te=r.enabledAttributes,O=r.attributeDivisors;X[C]=1,te[C]===0&&(i.enableVertexAttribArray(C),te[C]=1),O[C]!==U&&(i.vertexAttribDivisor(C,U),O[C]=U)}function A(){let C=r.newAttributes,U=r.enabledAttributes;for(let X=0,te=U.length;X<te;X++)U[X]!==C[X]&&(i.disableVertexAttribArray(X),U[X]=0)}function R(C,U,X,te,O,J,H){H===!0?i.vertexAttribIPointer(C,U,X,O,J):i.vertexAttribPointer(C,U,X,te,O,J)}function y(C,U,X,te){M();let O=te.attributes,J=X.getAttributes(),H=U.defaultAttributeValues;for(let ee in J){let ie=J[ee];if(ie.location>=0){let ue=O[ee];if(ue===void 0&&(ee==="instanceMatrix"&&C.instanceMatrix&&(ue=C.instanceMatrix),ee==="instanceColor"&&C.instanceColor&&(ue=C.instanceColor)),ue!==void 0){let _e=ue.normalized,ce=ue.itemSize,Fe=e.get(ue);if(Fe===void 0)continue;let Ze=Fe.buffer,ze=Fe.type,q=Fe.bytesPerElement,oe=ze===i.INT||ze===i.UNSIGNED_INT||ue.gpuType===Br;if(ue.isInterleavedBufferAttribute){let re=ue.data,De=re.stride,we=ue.offset;if(re.isInstancedInterleavedBuffer){for(let Se=0;Se<ie.locationSize;Se++)u(ie.location+Se,re.meshPerAttribute);C.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Se=0;Se<ie.locationSize;Se++)f(ie.location+Se);i.bindBuffer(i.ARRAY_BUFFER,Ze);for(let Se=0;Se<ie.locationSize;Se++)R(ie.location+Se,ce/ie.locationSize,ze,_e,De*q,(we+ce/ie.locationSize*Se)*q,oe)}else{if(ue.isInstancedBufferAttribute){for(let re=0;re<ie.locationSize;re++)u(ie.location+re,ue.meshPerAttribute);C.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let re=0;re<ie.locationSize;re++)f(ie.location+re);i.bindBuffer(i.ARRAY_BUFFER,Ze);for(let re=0;re<ie.locationSize;re++)R(ie.location+re,ce/ie.locationSize,ze,_e,ce*q,ce/ie.locationSize*re*q,oe)}}else if(H!==void 0){let _e=H[ee];if(_e!==void 0)switch(_e.length){case 2:i.vertexAttrib2fv(ie.location,_e);break;case 3:i.vertexAttrib3fv(ie.location,_e);break;case 4:i.vertexAttrib4fv(ie.location,_e);break;default:i.vertexAttrib1fv(ie.location,_e)}}}}A()}function T(){w();for(let C in n){let U=n[C];for(let X in U){let te=U[X];for(let O in te){let J=te[O];for(let H in J)d(J[H].object),delete J[H];delete te[O]}}delete n[C]}}function E(C){if(n[C.id]===void 0)return;let U=n[C.id];for(let X in U){let te=U[X];for(let O in te){let J=te[O];for(let H in J)d(J[H].object),delete J[H];delete te[O]}}delete n[C.id]}function I(C){for(let U in n){let X=n[U];for(let te in X){let O=X[te];if(O[C.id]===void 0)continue;let J=O[C.id];for(let H in J)d(J[H].object),delete J[H];delete O[C.id]}}}function x(C){for(let U in n){let X=n[U],te=C.isInstancedMesh===!0?C.id:0,O=X[te];if(O!==void 0){for(let J in O){let H=O[J];for(let ee in H)d(H[ee].object),delete H[ee];delete O[J]}delete X[te],Object.keys(X).length===0&&delete n[U]}}}function w(){L(),a=!0,r!==s&&(r=s,l(r.object))}function L(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:w,resetDefaultState:L,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfObject:x,releaseStatesOfProgram:I,initAttributes:M,enableAttribute:f,disableUnusedAttributes:A}}function rf(i,e,t){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function a(c,l,d){d!==0&&(i.drawArraysInstanced(n,c,l,d),t.update(l,n,d))}function o(c,l,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,d);let h=0;for(let p=0;p<d;p++)h+=l[p];t.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function af(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let I=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(I){return!(I!==ln&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(I){let x=I===wn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==sn&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==_n&&!x)}function c(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",d=c(l);d!==l&&(Be("WebGLRenderer:",l,"not supported, using",d,"instead."),l=d);let m=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&Be("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),f=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),A=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),R=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:m,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:_,maxTextureSize:M,maxCubemapSize:f,maxAttributes:u,maxVertexUniforms:A,maxVaryings:R,maxFragmentUniforms:y,maxSamples:T,samples:E}}function of(i){let e=this,t=null,n=0,s=!1,r=!1,a=new yn,o=new Ge,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(m,h){let p=m.length!==0||h||n!==0||s;return s=h,n=m.length,p},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(m,h){t=d(m,h,0)},this.setState=function(m,h,p){let _=m.clippingPlanes,M=m.clipIntersection,f=m.clipShadows,u=i.get(m);if(!s||_===null||_.length===0||r&&!f)r?d(null):l();else{let A=r?0:n,R=A*4,y=u.clippingState||null;c.value=y,y=d(_,h,R,p);for(let T=0;T!==R;++T)y[T]=t[T];u.clippingState=y,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=A}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(m,h,p,_){let M=m!==null?m.length:0,f=null;if(M!==0){if(f=c.value,_!==!0||f===null){let u=p+M*4,A=h.matrixWorldInverse;o.getNormalMatrix(A),(f===null||f.length<u)&&(f=new Float32Array(u));for(let R=0,y=p;R!==M;++R,y+=4)a.copy(m[R]).applyMatrix4(A,o),a.normal.toArray(f,y),f[y+3]=a.constant}c.value=f,c.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,f}}var ai=4,rc=[.125,.215,.35,.446,.526,.582],Si=20,lf=256,Cs=new gs,ac=new st,Bo=null,zo=0,Vo=0,ko=!1,cf=new V,Ta=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=cf}=r;Bo=this._renderer.getRenderTarget(),zo=this._renderer.getActiveCubeFace(),Vo=this._renderer.getActiveMipmapLevel(),ko=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=lc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Bo,zo,Vo),this._renderer.xr.enabled=ko,e.scissorTest=!1,Xi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ni||e.mapping===yi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Bo=this._renderer.getRenderTarget(),zo=this._renderer.getActiveCubeFace(),Vo=this._renderer.getActiveMipmapLevel(),ko=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ut,minFilter:Ut,generateMipmaps:!1,type:wn,format:ln,colorSpace:ts,depthBuffer:!1},s=oc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=oc(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=hf(r)),this._blurMaterial=df(r,e,t),this._ggxMaterial=uf(r,e,t)}return s}_compileMaterial(e){let t=new Yt(new tn,e);this._renderer.compile(t,Cs)}_sceneToCubeUV(e,t,n,s,r){let c=new Vt(90,1,t,n),l=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],m=this._renderer,h=m.autoClear,p=m.toneMapping;m.getClearColor(ac),m.toneMapping=mn,m.autoClear=!1,m.state.buffers.depth.getReversed()&&(m.setRenderTarget(s),m.clearDepth(),m.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Yt(new ki,new hs({name:"PMREM.Background",side:Ht,depthWrite:!1,depthTest:!1})));let M=this._backgroundBox,f=M.material,u=!1,A=e.background;A?A.isColor&&(f.color.copy(A),e.background=null,u=!0):(f.color.copy(ac),u=!0);for(let R=0;R<6;R++){let y=R%3;y===0?(c.up.set(0,l[R],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+d[R],r.y,r.z)):y===1?(c.up.set(0,0,l[R]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+d[R],r.z)):(c.up.set(0,l[R],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+d[R]));let T=this._cubeSize;Xi(s,y*T,R>2?T:0,T,T),m.setRenderTarget(s),u&&m.render(M,c),m.render(e,c)}m.toneMapping=p,m.autoClear=h,e.background=A}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===ni||e.mapping===yi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=cc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=lc());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let c=this._cubeSize;Xi(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Cs)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let c=a.uniforms,l=n/(this._lodMeshes.length-1),d=t/(this._lodMeshes.length-1),m=Math.sqrt(l*l-d*d),h=0+l*1.25,p=m*h,{_lodMax:_}=this,M=this._sizeLods[n],f=3*M*(n>_-ai?n-_+ai:0),u=4*(this._cubeSize-M);c.envMap.value=e.texture,c.roughness.value=p,c.mipInt.value=_-t,Xi(r,f,u,3*M,2*M),s.setRenderTarget(r),s.render(o,Cs),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=_-n,Xi(e,f,u,3*M,2*M),s.setRenderTarget(e),s.render(o,Cs)}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Ve("blur direction must be either latitudinal or longitudinal!");let d=3,m=this._lodMeshes[s];m.material=l;let h=l.uniforms,p=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Si-1),M=r/_,f=isFinite(r)?1+Math.floor(d*M):Si;f>Si&&Be(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Si}`);let u=[],A=0;for(let I=0;I<Si;++I){let x=I/M,w=Math.exp(-x*x/2);u.push(w),I===0?A+=w:I<f&&(A+=2*w)}for(let I=0;I<u.length;I++)u[I]=u[I]/A;h.envMap.value=e.texture,h.samples.value=f,h.weights.value=u,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);let{_lodMax:R}=this;h.dTheta.value=_,h.mipInt.value=R-n;let y=this._sizeLods[s],T=3*y*(s>R-ai?s-R+ai:0),E=4*(this._cubeSize-y);Xi(t,T,E,3*y,2*y),c.setRenderTarget(t),c.render(m,Cs)}};function hf(i){let e=[],t=[],n=[],s=i,r=i-ai+1+rc.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let c=1/o;a>i-ai?c=rc[a-i+ai-1]:a===0&&(c=0),t.push(c);let l=1/(o-2),d=-l,m=1+l,h=[d,d,m,d,m,m,d,d,m,m,d,m],p=6,_=6,M=3,f=2,u=1,A=new Float32Array(M*_*p),R=new Float32Array(f*_*p),y=new Float32Array(u*_*p);for(let E=0;E<p;E++){let I=E%3*2/3-1,x=E>2?0:-1,w=[I,x,0,I+2/3,x,0,I+2/3,x+1,0,I,x,0,I+2/3,x+1,0,I,x+1,0];A.set(w,M*_*E),R.set(h,f*_*E);let L=[E,E,E,E,E,E];y.set(L,u*_*E)}let T=new tn;T.setAttribute("position",new Qt(A,M)),T.setAttribute("uv",new Qt(R,f)),T.setAttribute("faceIndex",new Qt(y,u)),n.push(new Yt(T,null)),s>ai&&s--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function oc(i,e,t){let n=new jt(i,e,t);return n.texture.mapping=vs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Xi(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function uf(i,e,t){return new Ft({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:lf,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ea(),fragmentShader:`

precision highp float;
precision highp int;

varying vec3 vOutputDirection;

uniform sampler2D envMap;
uniform float roughness;
uniform float mipInt;

#define ENVMAP_TYPE_CUBE_UV
#include <cube_uv_reflection_fragment>

#define PI 3.14159265359

// Van der Corput radical inverse
float radicalInverse_VdC(uint bits) {
bits = (bits << 16u) | (bits >> 16u);
bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
return float(bits) * 2.3283064365386963e-10; // / 0x100000000
}

// Hammersley sequence
vec2 hammersley(uint i, uint N) {
return vec2(float(i) / float(N), radicalInverse_VdC(i));
}

// GGX VNDF importance sampling (Eric Heitz 2018)
// "Sampling the GGX Distribution of Visible Normals"
// https://jcgt.org/published/0007/04/01/
vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
float alpha = roughness * roughness;

// Section 4.1: Orthonormal basis
vec3 T1 = vec3(1.0, 0.0, 0.0);
vec3 T2 = cross(V, T1);

// Section 4.2: Parameterization of projected area
float r = sqrt(Xi.x);
float phi = 2.0 * PI * Xi.y;
float t1 = r * cos(phi);
float t2 = r * sin(phi);
float s = 0.5 * (1.0 + V.z);
t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

// Section 4.3: Reprojection onto hemisphere
vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

// Section 3.4: Transform back to ellipsoid configuration
return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
}

void main() {
vec3 N = normalize(vOutputDirection);
vec3 V = N; // Assume view direction equals normal for pre-filtering

vec3 prefilteredColor = vec3(0.0);
float totalWeight = 0.0;

// For very low roughness, just sample the environment directly
if (roughness < 0.001) {
gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
return;
}

// Tangent space basis for VNDF sampling
vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
vec3 tangent = normalize(cross(up, N));
vec3 bitangent = cross(N, tangent);

for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

// Transform H back to world space
vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
vec3 L = normalize(2.0 * dot(V, H) * H - V);

float NdotL = max(dot(N, L), 0.0);

if(NdotL > 0.0) {
// Sample environment at fixed mip level
// VNDF importance sampling handles the distribution filtering
vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

// Weight by NdotL for the split-sum approximation
// VNDF PDF naturally accounts for the visible microfacet distribution
prefilteredColor += sampleColor * NdotL;
totalWeight += NdotL;
}
}

if (totalWeight > 0.0) {
prefilteredColor = prefilteredColor / totalWeight;
}

gl_FragColor = vec4(prefilteredColor, 1.0);
}
`,blending:En,depthTest:!1,depthWrite:!1})}function df(i,e,t){let n=new Float32Array(Si),s=new V(0,1,0);return new Ft({name:"SphericalGaussianBlur",defines:{n:Si,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ea(),fragmentShader:`

precision mediump float;
precision mediump int;

varying vec3 vOutputDirection;

uniform sampler2D envMap;
uniform int samples;
uniform float weights[ n ];
uniform bool latitudinal;
uniform float dTheta;
uniform float mipInt;
uniform vec3 poleAxis;

#define ENVMAP_TYPE_CUBE_UV
#include <cube_uv_reflection_fragment>

vec3 getSample( float theta, vec3 axis ) {

float cosTheta = cos( theta );
// Rodrigues' axis-angle rotation
vec3 sampleDirection = vOutputDirection * cosTheta
+ cross( axis, vOutputDirection ) * sin( theta )
+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

return bilinearCubeUV( envMap, sampleDirection, mipInt );

}

void main() {

vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

}

axis = normalize( axis );

gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

for ( int i = 1; i < n; i++ ) {

if ( i >= samples ) {

break;

}

float theta = dTheta * float( i );
gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

}

}
`,blending:En,depthTest:!1,depthWrite:!1})}function lc(){return new Ft({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ea(),fragmentShader:`

precision mediump float;
precision mediump int;

varying vec3 vOutputDirection;

uniform sampler2D envMap;

#include <common>

void main() {

vec3 outputDirection = normalize( vOutputDirection );
vec2 uv = equirectUv( outputDirection );

gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

}
`,blending:En,depthTest:!1,depthWrite:!1})}function cc(){return new Ft({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ea(),fragmentShader:`

precision mediump float;
precision mediump int;

uniform float flipEnvMap;

varying vec3 vOutputDirection;

uniform samplerCube envMap;

void main() {

gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

}
`,blending:En,depthTest:!1,depthWrite:!1})}function Ea(){return`

precision mediump float;
precision mediump int;

attribute float faceIndex;

varying vec3 vOutputDirection;

// RH coordinate system; PMREM face-indexing convention
vec3 getDirection( vec2 uv, float face ) {

uv = 2.0 * uv - 1.0;

vec3 direction = vec3( uv, 1.0 );

if ( face == 0.0 ) {

direction = direction.zyx; // ( 1, v, u ) pos x

} else if ( face == 1.0 ) {

direction = direction.xzy;
direction.xz *= -1.0; // ( -u, 1, -v ) pos y

} else if ( face == 2.0 ) {

direction.x *= -1.0; // ( -u, v, 1 ) pos z

} else if ( face == 3.0 ) {

direction = direction.zyx;
direction.xz *= -1.0; // ( -1, v, -u ) neg x

} else if ( face == 4.0 ) {

direction = direction.xzy;
direction.xy *= -1.0; // ( -u, -1, v ) neg y

} else if ( face == 5.0 ) {

direction.z *= -1.0; // ( u, v, -1 ) neg z

}

return direction;

}

void main() {

vOutputDirection = getDirection( uv, faceIndex );
gl_Position = vec4( position, 1.0 );

}
`}var Aa=class extends jt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new fs(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

varying vec3 vWorldDirection;

vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

}

void main() {

vWorldDirection = transformDirection( position, modelMatrix );

#include <begin_vertex>
#include <project_vertex>

}
`,fragmentShader:`

uniform sampler2D tEquirect;

varying vec3 vWorldDirection;

#include <common>

void main() {

vec3 direction = normalize( vWorldDirection );

vec2 sampleUV = equirectUv( direction );

gl_FragColor = texture2D( tEquirect, sampleUV );

}
`},s=new ki(5,5,5),r=new Ft({name:"CubemapFromEquirect",uniforms:Mi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ht,blending:En});r.uniforms.tEquirect.value=t;let a=new Yt(s,r),o=t.minFilter;return t.minFilter===ii&&(t.minFilter=Ut),new Lr(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}};function ff(i){let e=new WeakMap,t=new WeakMap,n=null;function s(h,p=!1){return h==null?null:p?a(h):r(h)}function r(h){if(h&&h.isTexture){let p=h.mapping;if(p===Ur||p===Fr)if(e.has(h)){let _=e.get(h).texture;return o(_,h.mapping)}else{let _=h.image;if(_&&_.height>0){let M=new Aa(_.height);return M.fromEquirectangularTexture(i,h),e.set(h,M),h.addEventListener("dispose",l),o(M.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){let p=h.mapping,_=p===Ur||p===Fr,M=p===ni||p===yi;if(_||M){let f=t.get(h),u=f!==void 0?f.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==u)return n===null&&(n=new Ta(i)),f=_?n.fromEquirectangular(h,f):n.fromCubemap(h,f),f.texture.pmremVersion=h.pmremVersion,t.set(h,f),f.texture;if(f!==void 0)return f.texture;{let A=h.image;return _&&A&&A.height>0||M&&A&&c(A)?(n===null&&(n=new Ta(i)),f=_?n.fromEquirectangular(h):n.fromCubemap(h),f.texture.pmremVersion=h.pmremVersion,t.set(h,f),h.addEventListener("dispose",d),f.texture):null}}}return h}function o(h,p){return p===Ur?h.mapping=ni:p===Fr&&(h.mapping=yi),h}function c(h){let p=0,_=6;for(let M=0;M<_;M++)h[M]!==void 0&&p++;return p===_}function l(h){let p=h.target;p.removeEventListener("dispose",l);let _=e.get(p);_!==void 0&&(e.delete(p),_.dispose())}function d(h){let p=h.target;p.removeEventListener("dispose",d);let _=t.get(p);_!==void 0&&(t.delete(p),_.dispose())}function m(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:m}}function pf(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&fi("WebGLRenderer: "+n+" extension not supported."),s}}}function mf(i,e,t,n){let s={},r=new WeakMap;function a(m){let h=m.target;h.index!==null&&e.remove(h.index);for(let _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",a),delete s[h.id];let p=r.get(h);p&&(e.remove(p),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(m,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,t.memory.geometries++),h}function c(m){let h=m.attributes;for(let p in h)e.update(h[p],i.ARRAY_BUFFER)}function l(m){let h=[],p=m.index,_=m.attributes.position,M=0;if(_===void 0)return;if(p!==null){let A=p.array;M=p.version;for(let R=0,y=A.length;R<y;R+=3){let T=A[R+0],E=A[R+1],I=A[R+2];h.push(T,E,E,I,I,T)}}else{let A=_.array;M=_.version;for(let R=0,y=A.length/3-1;R<y;R+=3){let T=R+0,E=R+1,I=R+2;h.push(T,E,E,I,I,T)}}let f=new(_.count>=65535?ls:os)(h,1);f.version=M;let u=r.get(m);u&&e.remove(u),r.set(m,f)}function d(m){let h=r.get(m);if(h){let p=m.index;p!==null&&h.version<p.version&&l(m)}else l(m);return r.get(m)}return{get:o,update:c,getWireframeAttribute:d}}function gf(i,e,t){let n;function s(m){n=m}let r,a;function o(m){r=m.type,a=m.bytesPerElement}function c(m,h){i.drawElements(n,h,r,m*a),t.update(h,n,1)}function l(m,h,p){p!==0&&(i.drawElementsInstanced(n,h,r,m*a,p),t.update(h,n,p))}function d(m,h,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,m,0,p);let M=0;for(let f=0;f<p;f++)M+=h[f];t.update(M,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=d}function _f(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Ve("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function xf(i,e,t){let n=new WeakMap,s=new yt;function r(a,o,c){let l=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,m=d!==void 0?d.length:0,h=n.get(o);if(h===void 0||h.count!==m){let w=function(){I.dispose(),n.delete(o),o.removeEventListener("dispose",w)};h!==void 0&&h.texture.dispose();let p=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],u=o.morphAttributes.normal||[],A=o.morphAttributes.color||[],R=0;p===!0&&(R=1),_===!0&&(R=2),M===!0&&(R=3);let y=o.attributes.position.count*R,T=1;y>e.maxTextureSize&&(T=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let E=new Float32Array(y*T*4*m),I=new rs(E,y,T,m);I.type=_n,I.needsUpdate=!0;let x=R*4;for(let L=0;L<m;L++){let C=f[L],U=u[L],X=A[L],te=y*T*4*L;for(let O=0;O<C.count;O++){let J=O*x;p===!0&&(s.fromBufferAttribute(C,O),E[te+J+0]=s.x,E[te+J+1]=s.y,E[te+J+2]=s.z,E[te+J+3]=0),_===!0&&(s.fromBufferAttribute(U,O),E[te+J+4]=s.x,E[te+J+5]=s.y,E[te+J+6]=s.z,E[te+J+7]=0),M===!0&&(s.fromBufferAttribute(X,O),E[te+J+8]=s.x,E[te+J+9]=s.y,E[te+J+10]=s.z,E[te+J+11]=X.itemSize===4?s.w:1)}}h={count:m,texture:I,size:new tt(y,T)},n.set(o,h),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let p=0;for(let M=0;M<l.length;M++)p+=l[M];let _=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function vf(i,e,t,n,s){let r=new WeakMap;function a(l){let d=s.render.frame,m=l.geometry,h=e.get(l,m);if(r.get(h)!==d&&(e.update(h),r.set(h,d)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==d&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,d))),l.isSkinnedMesh){let p=l.skeleton;r.get(p)!==d&&(p.update(),r.set(p,d))}return h}function o(){r=new WeakMap}function c(l){let d=l.target;d.removeEventListener("dispose",c),n.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:a,dispose:o}}var yf={[ho]:"LINEAR_TONE_MAPPING",[uo]:"REINHARD_TONE_MAPPING",[fo]:"CINEON_TONE_MAPPING",[po]:"ACES_FILMIC_TONE_MAPPING",[go]:"AGX_TONE_MAPPING",[_o]:"NEUTRAL_TONE_MAPPING",[mo]:"CUSTOM_TONE_MAPPING"};function Mf(i,e,t,n,s,r){let a=new jt(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,depthTexture:s?new On(e,t):void 0}),o=new jt(e,t,{type:wn,depthBuffer:!1,stencilBuffer:!1}),c=new tn;c.setAttribute("position",new Ct([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Ct([0,2,0,0,2,0],2));let l=new vr({uniforms:{tDiffuse:{value:null}},vertexShader:`
precision highp float;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;

attribute vec3 position;
attribute vec2 uv;

varying vec2 vUv;

void main() {
vUv = uv;
gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fragmentShader:`
precision highp float;

uniform sampler2D tDiffuse;

varying vec2 vUv;

#include <tonemapping_pars_fragment>
#include <colorspace_pars_fragment>

void main() {
gl_FragColor = texture2D( tDiffuse, vUv );

#ifdef LINEAR_TONE_MAPPING
gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
#elif defined( REINHARD_TONE_MAPPING )
gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
#elif defined( CINEON_TONE_MAPPING )
gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
#elif defined( ACES_FILMIC_TONE_MAPPING )
gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
#elif defined( AGX_TONE_MAPPING )
gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
#elif defined( NEUTRAL_TONE_MAPPING )
gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
#elif defined( CUSTOM_TONE_MAPPING )
gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
#endif

#ifdef SRGB_TRANSFER
gl_FragColor = sRGBTransferOETF( gl_FragColor );
#endif
}`,depthTest:!1,depthWrite:!1}),d=new Yt(c,l),m=new gs(-1,1,1,-1,0,1),h=null,p=null,_=!1,M,f=null,u=[],A=!1;this.setSize=function(R,y){a.setSize(R,y),o.setSize(R,y);for(let T=0;T<u.length;T++){let E=u[T];E.setSize&&E.setSize(R,y)}},this.setEffects=function(R){u=R,A=u.length>0&&u[0].isRenderPass===!0;let y=a.width,T=a.height;for(let E=0;E<u.length;E++){let I=u[E];I.setSize&&I.setSize(y,T)}},this.begin=function(R,y){if(_||R.toneMapping===mn&&u.length===0)return!1;if(f=y,y!==null){let T=y.width,E=y.height;(a.width!==T||a.height!==E)&&this.setSize(T,E)}return A===!1&&R.setRenderTarget(a),M=R.toneMapping,R.toneMapping=mn,!0},this.hasRenderPass=function(){return A},this.end=function(R,y){R.toneMapping=M,_=!0;let T=a,E=o;for(let I=0;I<u.length;I++){let x=u[I];if(x.enabled!==!1&&(x.render(R,E,T,y),x.needsSwap!==!1)){let w=T;T=E,E=w}}if(h!==R.outputColorSpace||p!==R.toneMapping){h=R.outputColorSpace,p=R.toneMapping,l.defines={},et.getTransfer(h)===ct&&(l.defines.SRGB_TRANSFER="");let I=yf[p];I&&(l.defines[I]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=T.texture,R.setRenderTarget(f),R.render(d,m),f=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),c.dispose(),l.dispose()}}var Rc=new qt,Wo=new On(1,1),Ic=new rs,Pc=new mr,Lc=new fs,hc=[],uc=[],dc=new Float32Array(16),fc=new Float32Array(9),pc=new Float32Array(4);function Zi(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=hc[s];if(r===void 0&&(r=new Float32Array(s),hc[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Rt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function It(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function wa(i,e){let t=uc[e];t===void 0&&(t=new Int32Array(e),uc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Sf(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function bf(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;i.uniform2fv(this.addr,e),It(t,e)}}function Tf(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Rt(t,e))return;i.uniform3fv(this.addr,e),It(t,e)}}function Af(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;i.uniform4fv(this.addr,e),It(t,e)}}function Ef(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),It(t,e)}else{if(Rt(t,n))return;pc.set(n),i.uniformMatrix2fv(this.addr,!1,pc),It(t,n)}}function wf(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),It(t,e)}else{if(Rt(t,n))return;fc.set(n),i.uniformMatrix3fv(this.addr,!1,fc),It(t,n)}}function Cf(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),It(t,e)}else{if(Rt(t,n))return;dc.set(n),i.uniformMatrix4fv(this.addr,!1,dc),It(t,n)}}function Rf(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function If(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;i.uniform2iv(this.addr,e),It(t,e)}}function Pf(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;i.uniform3iv(this.addr,e),It(t,e)}}function Lf(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;i.uniform4iv(this.addr,e),It(t,e)}}function Df(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Nf(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;i.uniform2uiv(this.addr,e),It(t,e)}}function Uf(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;i.uniform3uiv(this.addr,e),It(t,e)}}function Ff(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;i.uniform4uiv(this.addr,e),It(t,e)}}function Of(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Wo.compareFunction=t.isReversedDepthBuffer()?Ma:ya,r=Wo):r=Rc,t.setTexture2D(e||r,s)}function Bf(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Pc,s)}function zf(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Lc,s)}function Vf(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Ic,s)}function kf(i){switch(i){case 5126:return Sf;case 35664:return bf;case 35665:return Tf;case 35666:return Af;case 35674:return Ef;case 35675:return wf;case 35676:return Cf;case 5124:case 35670:return Rf;case 35667:case 35671:return If;case 35668:case 35672:return Pf;case 35669:case 35673:return Lf;case 5125:return Df;case 36294:return Nf;case 36295:return Uf;case 36296:return Ff;case 35678:case 36198:case 36298:case 36306:case 35682:return Of;case 35679:case 36299:case 36307:return Bf;case 35680:case 36300:case 36308:case 36293:return zf;case 36289:case 36303:case 36311:case 36292:return Vf}}function Gf(i,e){i.uniform1fv(this.addr,e)}function Hf(i,e){let t=Zi(e,this.size,2);i.uniform2fv(this.addr,t)}function Wf(i,e){let t=Zi(e,this.size,3);i.uniform3fv(this.addr,t)}function Xf(i,e){let t=Zi(e,this.size,4);i.uniform4fv(this.addr,t)}function qf(i,e){let t=Zi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Yf(i,e){let t=Zi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Zf(i,e){let t=Zi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function $f(i,e){i.uniform1iv(this.addr,e)}function Jf(i,e){i.uniform2iv(this.addr,e)}function Kf(i,e){i.uniform3iv(this.addr,e)}function Qf(i,e){i.uniform4iv(this.addr,e)}function jf(i,e){i.uniform1uiv(this.addr,e)}function ep(i,e){i.uniform2uiv(this.addr,e)}function tp(i,e){i.uniform3uiv(this.addr,e)}function np(i,e){i.uniform4uiv(this.addr,e)}function ip(i,e,t){let n=this.cache,s=e.length,r=wa(t,s);Rt(n,r)||(i.uniform1iv(this.addr,r),It(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Wo:a=Rc;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function sp(i,e,t){let n=this.cache,s=e.length,r=wa(t,s);Rt(n,r)||(i.uniform1iv(this.addr,r),It(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Pc,r[a])}function rp(i,e,t){let n=this.cache,s=e.length,r=wa(t,s);Rt(n,r)||(i.uniform1iv(this.addr,r),It(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Lc,r[a])}function ap(i,e,t){let n=this.cache,s=e.length,r=wa(t,s);Rt(n,r)||(i.uniform1iv(this.addr,r),It(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Ic,r[a])}function op(i){switch(i){case 5126:return Gf;case 35664:return Hf;case 35665:return Wf;case 35666:return Xf;case 35674:return qf;case 35675:return Yf;case 35676:return Zf;case 5124:case 35670:return $f;case 35667:case 35671:return Jf;case 35668:case 35672:return Kf;case 35669:case 35673:return Qf;case 5125:return jf;case 36294:return ep;case 36295:return tp;case 36296:return np;case 35678:case 36198:case 36298:case 36306:case 35682:return ip;case 35679:case 36299:case 36307:return sp;case 35680:case 36300:case 36308:case 36293:return rp;case 36289:case 36303:case 36311:case 36292:return ap}}var Xo=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=kf(t.type)}},qo=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=op(t.type)}},Yo=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Go=/(\w+)(\])?(\[|\.)?/g;function mc(i,e){i.seq.push(e),i.map[e.id]=e}function lp(i,e,t){let n=i.name,s=n.length;for(Go.lastIndex=0;;){let r=Go.exec(n),a=Go.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){mc(t,l===void 0?new Xo(o,i,e):new qo(o,i,e));break}else{let m=t.map[o];m===void 0&&(m=new Yo(o),mc(t,m)),t=m}}}var qi=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);lp(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function gc(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var cp=37297,hp=0;function up(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var _c=new Ge;function dp(i){et._getMatrix(_c,et.workingColorSpace,i);let e=`mat3( ${_c.elements.map(t=>t.toFixed(4))} )`;switch(et.getTransfer(i)){case ns:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return Be("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function xc(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+up(i.getShaderSource(e),o)}else return r}function fp(i,e){let t=dp(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var pp={[ho]:"Linear",[uo]:"Reinhard",[fo]:"Cineon",[po]:"ACESFilmic",[go]:"AgX",[_o]:"Neutral",[mo]:"Custom"};function mp(i,e){let t=pp[e];return t===void 0?(Be("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var ba=new V;function gp(){et.getLuminanceCoefficients(ba);let i=ba.x.toFixed(4),e=ba.y.toFixed(4),t=ba.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function _p(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Is).join(`
`)}function xp(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function vp(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Is(i){return i!==""}function vc(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function yc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var yp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zo(i){return i.replace(yp,Sp)}var Mp=new Map;function Sp(i,e){let t=Ye[e];if(t===void 0){let n=Mp.get(e);if(n!==void 0)t=Ye[n],Be('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Zo(t)}var bp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Mc(i){return i.replace(bp,Tp)}function Tp(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Sc(i){let e=`precision ${i.precision} float;
precision ${i.precision} int;
precision ${i.precision} sampler2D;
precision ${i.precision} samplerCube;
precision ${i.precision} sampler3D;
precision ${i.precision} sampler2DArray;
precision ${i.precision} sampler2DShadow;
precision ${i.precision} samplerCubeShadow;
precision ${i.precision} sampler2DArrayShadow;
precision ${i.precision} isampler2D;
precision ${i.precision} isampler3D;
precision ${i.precision} isamplerCube;
precision ${i.precision} isampler2DArray;
precision ${i.precision} usampler2D;
precision ${i.precision} usampler3D;
precision ${i.precision} usamplerCube;
precision ${i.precision} usampler2DArray;
`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var Ap={[_s]:"SHADOWMAP_TYPE_PCF",[Gi]:"SHADOWMAP_TYPE_VSM"};function Ep(i){return Ap[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var wp={[ni]:"ENVMAP_TYPE_CUBE",[yi]:"ENVMAP_TYPE_CUBE",[vs]:"ENVMAP_TYPE_CUBE_UV"};function Cp(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":wp[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Rp={[yi]:"ENVMAP_MODE_REFRACTION"};function Ip(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Rp[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Pp={[co]:"ENVMAP_BLENDING_MULTIPLY",[kl]:"ENVMAP_BLENDING_MIX",[Gl]:"ENVMAP_BLENDING_ADD"};function Lp(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Pp[i.combine]||"ENVMAP_BLENDING_NONE"}function Dp(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Np(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=Ep(t),l=Cp(t),d=Ip(t),m=Lp(t),h=Dp(t),p=_p(t),_=xp(r),M=s.createProgram(),f,u,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Is).join(`
`),f.length>0&&(f+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Is).join(`
`),u.length>0&&(u+=`
`)):(f=[Sc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Is).join(`
`),u=[Sc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+d:"",t.envMap?"#define "+m:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==mn?"#define TONE_MAPPING":"",t.toneMapping!==mn?Ye.tonemapping_pars_fragment:"",t.toneMapping!==mn?mp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,fp("linearToOutputTexel",t.outputColorSpace),gp(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Is).join(`
`)),a=Zo(a),a=vc(a,t),a=yc(a,t),o=Zo(o),o=vc(o,t),o=yc(o,t),a=Mc(a),o=Mc(o),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,f=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,u=["#define varying in",t.glslVersion===wo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===wo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);let R=A+f+a,y=A+u+o,T=gc(s,s.VERTEX_SHADER,R),E=gc(s,s.FRAGMENT_SHADER,y);s.attachShader(M,T),s.attachShader(M,E),t.index0AttributeName!==void 0?s.bindAttribLocation(M,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function I(C){if(i.debug.checkShaderErrors){let U=s.getProgramInfoLog(M)||"",X=s.getShaderInfoLog(T)||"",te=s.getShaderInfoLog(E)||"",O=U.trim(),J=X.trim(),H=te.trim(),ee=!0,ie=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(ee=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,M,T,E);else{let ue=xc(s,T,"vertex"),_e=xc(s,E,"fragment");Ve("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+O+`
`+ue+`
`+_e)}else O!==""?Be("WebGLProgram: Program Info Log:",O):(J===""||H==="")&&(ie=!1);ie&&(C.diagnostics={runnable:ee,programLog:O,vertexShader:{log:J,prefix:f},fragmentShader:{log:H,prefix:u}})}s.deleteShader(T),s.deleteShader(E),x=new qi(s,M),w=vp(s,M)}let x;this.getUniforms=function(){return x===void 0&&I(this),x};let w;this.getAttributes=function(){return w===void 0&&I(this),w};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=s.getProgramParameter(M,cp)),L},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=hp++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=T,this.fragmentShader=E,this}var Up=0,$o=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Jo(e),t.set(e,n)),n}},Jo=class{constructor(e){this.id=Up++,this.code=e,this.usedTimes=0}};function Fp(i){return i===ri||i===As||i===Es}function Op(i,e,t,n,s,r){let a=new as,o=new $o,c=new Set,l=[],d=new Map,m=n.logarithmicDepthBuffer,h=n.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return c.add(x),x===0?"uv":`uv${x}`}function M(x,w,L,C,U,X){let te=C.fog,O=U.geometry,J=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?C.environment:null,H=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,ee=e.get(x.envMap||J,H),ie=ee&&ee.mapping===vs?ee.image.height:null,ue=p[x.type];x.precision!==null&&(h=n.getMaxPrecision(x.precision),h!==x.precision&&Be("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));let _e=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,ce=_e!==void 0?_e.length:0,Fe=0;O.morphAttributes.position!==void 0&&(Fe=1),O.morphAttributes.normal!==void 0&&(Fe=2),O.morphAttributes.color!==void 0&&(Fe=3);let Ze,ze,q,oe;if(ue){let be=Rn[ue];Ze=be.vertexShader,ze=be.fragmentShader}else{Ze=x.vertexShader,ze=x.fragmentShader;let be=o.getVertexShaderStage(x),_t=o.getFragmentShaderStage(x);o.update(x,be,_t),q=be.id,oe=_t.id}let re=i.getRenderTarget(),De=i.state.buffers.depth.getReversed(),we=U.isInstancedMesh===!0,Se=U.isBatchedMesh===!0,ot=!!x.map,Ue=!!x.matcap,Qe=!!ee,He=!!x.aoMap,qe=!!x.lightMap,Je=!!x.bumpMap&&x.wireframe===!1,gt=!!x.normalMap,vt=!!x.displacementMap,ut=!!x.emissiveMap,Ke=!!x.metalnessMap,Oe=!!x.roughnessMap,D=x.anisotropy>0,Mt=x.clearcoat>0,rt=x.dispersion>0,S=x.iridescence>0,g=x.sheen>0,N=x.transmission>0,B=D&&!!x.anisotropyMap,K=Mt&&!!x.clearcoatMap,he=Mt&&!!x.clearcoatNormalMap,pe=Mt&&!!x.clearcoatRoughnessMap,Q=S&&!!x.iridescenceMap,ne=S&&!!x.iridescenceThicknessMap,b=g&&!!x.sheenColorMap,G=g&&!!x.sheenRoughnessMap,Z=!!x.specularMap,$=!!x.specularColorMap,le=!!x.specularIntensityMap,de=N&&!!x.transmissionMap,Te=N&&!!x.thicknessMap,P=!!x.gradientMap,ae=!!x.alphaMap,j=x.alphaTest>0,me=!!x.alphaHash,xe=!!x.extensions,se=mn;x.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(se=i.toneMapping);let Re={shaderID:ue,shaderType:x.type,shaderName:x.name,vertexShader:Ze,fragmentShader:ze,defines:x.defines,customVertexShaderID:q,customFragmentShaderID:oe,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:Se,batchingColor:Se&&U._colorsTexture!==null,instancing:we,instancingColor:we&&U.instanceColor!==null,instancingMorph:we&&U.morphTexture!==null,outputColorSpace:re===null?i.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:et.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:ot,matcap:Ue,envMap:Qe,envMapMode:Qe&&ee.mapping,envMapCubeUVHeight:ie,aoMap:He,lightMap:qe,bumpMap:Je,normalMap:gt,displacementMap:vt,emissiveMap:ut,normalMapObjectSpace:gt&&x.normalMapType===Xl,normalMapTangentSpace:gt&&x.normalMapType===Eo,packedNormalMap:gt&&x.normalMapType===Eo&&Fp(x.normalMap.format),metalnessMap:Ke,roughnessMap:Oe,anisotropy:D,anisotropyMap:B,clearcoat:Mt,clearcoatMap:K,clearcoatNormalMap:he,clearcoatRoughnessMap:pe,dispersion:rt,iridescence:S,iridescenceMap:Q,iridescenceThicknessMap:ne,sheen:g,sheenColorMap:b,sheenRoughnessMap:G,specularMap:Z,specularColorMap:$,specularIntensityMap:le,transmission:N,transmissionMap:de,thicknessMap:Te,gradientMap:P,opaque:x.transparent===!1&&x.blending===pi&&x.alphaToCoverage===!1,alphaMap:ae,alphaTest:j,alphaHash:me,combine:x.combine,mapUv:ot&&_(x.map.channel),aoMapUv:He&&_(x.aoMap.channel),lightMapUv:qe&&_(x.lightMap.channel),bumpMapUv:Je&&_(x.bumpMap.channel),normalMapUv:gt&&_(x.normalMap.channel),displacementMapUv:vt&&_(x.displacementMap.channel),emissiveMapUv:ut&&_(x.emissiveMap.channel),metalnessMapUv:Ke&&_(x.metalnessMap.channel),roughnessMapUv:Oe&&_(x.roughnessMap.channel),anisotropyMapUv:B&&_(x.anisotropyMap.channel),clearcoatMapUv:K&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:he&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:ne&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:b&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:G&&_(x.sheenRoughnessMap.channel),specularMapUv:Z&&_(x.specularMap.channel),specularColorMapUv:$&&_(x.specularColorMap.channel),specularIntensityMapUv:le&&_(x.specularIntensityMap.channel),transmissionMapUv:de&&_(x.transmissionMap.channel),thicknessMapUv:Te&&_(x.thicknessMap.channel),alphaMapUv:ae&&_(x.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(gt||D),vertexNormals:!!O.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!O.attributes.uv&&(ot||ae),fog:!!te,useFog:x.fog===!0,fogExp2:!!te&&te.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||O.attributes.normal===void 0&&gt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:De,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:ce,morphTextureStride:Fe,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:X.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:se,decodeVideoTexture:ot&&x.map.isVideoTexture===!0&&et.getTransfer(x.map.colorSpace)===ct,decodeVideoTextureEmissive:ut&&x.emissiveMap.isVideoTexture===!0&&et.getTransfer(x.emissiveMap.colorSpace)===ct,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===An,flipSided:x.side===Ht,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:xe&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xe&&x.extensions.multiDraw===!0||Se)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Re.vertexUv1s=c.has(1),Re.vertexUv2s=c.has(2),Re.vertexUv3s=c.has(3),c.clear(),Re}function f(x){let w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(let L in x.defines)w.push(L),w.push(x.defines[L]);return x.isRawShaderMaterial===!1&&(u(w,x),A(w,x),w.push(i.outputColorSpace)),w.push(x.customProgramCacheKey),w.join()}function u(x,w){x.push(w.precision),x.push(w.outputColorSpace),x.push(w.envMapMode),x.push(w.envMapCubeUVHeight),x.push(w.mapUv),x.push(w.alphaMapUv),x.push(w.lightMapUv),x.push(w.aoMapUv),x.push(w.bumpMapUv),x.push(w.normalMapUv),x.push(w.displacementMapUv),x.push(w.emissiveMapUv),x.push(w.metalnessMapUv),x.push(w.roughnessMapUv),x.push(w.anisotropyMapUv),x.push(w.clearcoatMapUv),x.push(w.clearcoatNormalMapUv),x.push(w.clearcoatRoughnessMapUv),x.push(w.iridescenceMapUv),x.push(w.iridescenceThicknessMapUv),x.push(w.sheenColorMapUv),x.push(w.sheenRoughnessMapUv),x.push(w.specularMapUv),x.push(w.specularColorMapUv),x.push(w.specularIntensityMapUv),x.push(w.transmissionMapUv),x.push(w.thicknessMapUv),x.push(w.combine),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.morphAttributeCount),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.numLightProbes),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function A(x,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),w.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function R(x){let w=p[x.type],L;if(w){let C=Rn[w];L=ic.clone(C.uniforms)}else L=x.uniforms;return L}function y(x,w){let L=d.get(w);return L!==void 0?++L.usedTimes:(L=new Np(i,w,x,s),l.push(L),d.set(w,L)),L}function T(x){if(--x.usedTimes===0){let w=l.indexOf(x);l[w]=l[l.length-1],l.pop(),d.delete(x.cacheKey),x.destroy()}}function E(x){o.remove(x)}function I(){o.dispose()}return{getParameters:M,getProgramCacheKey:f,getUniforms:R,acquireProgram:y,releaseProgram:T,releaseShaderCache:E,programs:l,dispose:I}}function Bp(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function zp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function bc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Tc(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(h){let p=0;return h.isInstancedMesh&&(p+=2),h.isSkinnedMesh&&(p+=1),p}function o(h,p,_,M,f,u){let A=i[e];return A===void 0?(A={id:h.id,object:h,geometry:p,material:_,materialVariant:a(h),groupOrder:M,renderOrder:h.renderOrder,z:f,group:u},i[e]=A):(A.id=h.id,A.object=h,A.geometry=p,A.material=_,A.materialVariant=a(h),A.groupOrder=M,A.renderOrder=h.renderOrder,A.z=f,A.group=u),e++,A}function c(h,p,_,M,f,u){let A=o(h,p,_,M,f,u);_.transmission>0?n.push(A):_.transparent===!0?s.push(A):t.push(A)}function l(h,p,_,M,f,u){let A=o(h,p,_,M,f,u);_.transmission>0?n.unshift(A):_.transparent===!0?s.unshift(A):t.unshift(A)}function d(h,p,_){t.length>1&&t.sort(h||zp),n.length>1&&n.sort(p||bc),s.length>1&&s.sort(p||bc),_&&(t.reverse(),n.reverse(),s.reverse())}function m(){for(let h=e,p=i.length;h<p;h++){let _=i[h];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:m,sort:d}}function Vp(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Tc,i.set(n,[a])):s>=r.length?(a=new Tc,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function kp(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new V,color:new st};break;case"SpotLight":t={position:new V,direction:new V,color:new st,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new st,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new st,groundColor:new st};break;case"RectAreaLight":t={color:new st,position:new V,halfWidth:new V,halfHeight:new V};break}return i[e.id]=t,t}}}function Gp(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Hp=0;function Wp(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Xp(i){let e=new kp,t=Gp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new V);let s=new V,r=new bt,a=new bt;function o(l){let d=0,m=0,h=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let p=0,_=0,M=0,f=0,u=0,A=0,R=0,y=0,T=0,E=0,I=0;l.sort(Wp);for(let w=0,L=l.length;w<L;w++){let C=l[w],U=C.color,X=C.intensity,te=C.distance,O=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===ri?O=C.shadow.map.texture:O=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)d+=U.r*X,m+=U.g*X,h+=U.b*X;else if(C.isLightProbe){for(let J=0;J<9;J++)n.probe[J].addScaledVector(C.sh.coefficients[J],X);I++}else if(C.isDirectionalLight){let J=e.get(C);if(J.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let H=C.shadow,ee=t.get(C);ee.shadowIntensity=H.intensity,ee.shadowBias=H.bias,ee.shadowNormalBias=H.normalBias,ee.shadowRadius=H.radius,ee.shadowMapSize=H.mapSize,n.directionalShadow[p]=ee,n.directionalShadowMap[p]=O,n.directionalShadowMatrix[p]=C.shadow.matrix,A++}n.directional[p]=J,p++}else if(C.isSpotLight){let J=e.get(C);J.position.setFromMatrixPosition(C.matrixWorld),J.color.copy(U).multiplyScalar(X),J.distance=te,J.coneCos=Math.cos(C.angle),J.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),J.decay=C.decay,n.spot[M]=J;let H=C.shadow;if(C.map&&(n.spotLightMap[T]=C.map,T++,H.updateMatrices(C),C.castShadow&&E++),n.spotLightMatrix[M]=H.matrix,C.castShadow){let ee=t.get(C);ee.shadowIntensity=H.intensity,ee.shadowBias=H.bias,ee.shadowNormalBias=H.normalBias,ee.shadowRadius=H.radius,ee.shadowMapSize=H.mapSize,n.spotShadow[M]=ee,n.spotShadowMap[M]=O,y++}M++}else if(C.isRectAreaLight){let J=e.get(C);J.color.copy(U).multiplyScalar(X),J.halfWidth.set(C.width*.5,0,0),J.halfHeight.set(0,C.height*.5,0),n.rectArea[f]=J,f++}else if(C.isPointLight){let J=e.get(C);if(J.color.copy(C.color).multiplyScalar(C.intensity),J.distance=C.distance,J.decay=C.decay,C.castShadow){let H=C.shadow,ee=t.get(C);ee.shadowIntensity=H.intensity,ee.shadowBias=H.bias,ee.shadowNormalBias=H.normalBias,ee.shadowRadius=H.radius,ee.shadowMapSize=H.mapSize,ee.shadowCameraNear=H.camera.near,ee.shadowCameraFar=H.camera.far,n.pointShadow[_]=ee,n.pointShadowMap[_]=O,n.pointShadowMatrix[_]=C.shadow.matrix,R++}n.point[_]=J,_++}else if(C.isHemisphereLight){let J=e.get(C);J.skyColor.copy(C.color).multiplyScalar(X),J.groundColor.copy(C.groundColor).multiplyScalar(X),n.hemi[u]=J,u++}}f>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ve.LTC_FLOAT_1,n.rectAreaLTC2=ve.LTC_FLOAT_2):(n.rectAreaLTC1=ve.LTC_HALF_1,n.rectAreaLTC2=ve.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=m,n.ambient[2]=h;let x=n.hash;(x.directionalLength!==p||x.pointLength!==_||x.spotLength!==M||x.rectAreaLength!==f||x.hemiLength!==u||x.numDirectionalShadows!==A||x.numPointShadows!==R||x.numSpotShadows!==y||x.numSpotMaps!==T||x.numLightProbes!==I)&&(n.directional.length=p,n.spot.length=M,n.rectArea.length=f,n.point.length=_,n.hemi.length=u,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.pointShadow.length=R,n.pointShadowMap.length=R,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=A,n.pointShadowMatrix.length=R,n.spotLightMatrix.length=y+T-E,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=I,x.directionalLength=p,x.pointLength=_,x.spotLength=M,x.rectAreaLength=f,x.hemiLength=u,x.numDirectionalShadows=A,x.numPointShadows=R,x.numSpotShadows=y,x.numSpotMaps=T,x.numLightProbes=I,n.version=Hp++)}function c(l,d){let m=0,h=0,p=0,_=0,M=0,f=d.matrixWorldInverse;for(let u=0,A=l.length;u<A;u++){let R=l[u];if(R.isDirectionalLight){let y=n.directional[m];y.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(f),m++}else if(R.isSpotLight){let y=n.spot[p];y.position.setFromMatrixPosition(R.matrixWorld),y.position.applyMatrix4(f),y.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(f),p++}else if(R.isRectAreaLight){let y=n.rectArea[_];y.position.setFromMatrixPosition(R.matrixWorld),y.position.applyMatrix4(f),a.identity(),r.copy(R.matrixWorld),r.premultiply(f),a.extractRotation(r),y.halfWidth.set(R.width*.5,0,0),y.halfHeight.set(0,R.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),_++}else if(R.isPointLight){let y=n.point[h];y.position.setFromMatrixPosition(R.matrixWorld),y.position.applyMatrix4(f),h++}else if(R.isHemisphereLight){let y=n.hemi[M];y.direction.setFromMatrixPosition(R.matrixWorld),y.direction.transformDirection(f),M++}}}return{setup:o,setupView:c,state:n}}function Ac(i){let e=new Xp(i),t=[],n=[],s=[];function r(h){m.camera=h,t.length=0,n.length=0,s.length=0}function a(h){t.push(h)}function o(h){n.push(h)}function c(h){s.push(h)}function l(){e.setup(t)}function d(h){e.setupView(t,h)}let m={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:m,setupLights:l,setupLightsView:d,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function qp(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Ac(i),e.set(s,[o])):r>=a.length?(o=new Ac(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var Yp=`void main() {
gl_Position = vec4( position, 1.0 );
}`,Zp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
const float samples = float( VSM_SAMPLES );
float mean = 0.0;
float squared_mean = 0.0;
float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
for ( float i = 0.0; i < samples; i ++ ) {
float uvOffset = uvStart + i * uvStride;
#ifdef HORIZONTAL_PASS
vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
mean += distribution.x;
squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
#else
float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
mean += depth;
squared_mean += depth * depth;
#endif
}
mean = mean / samples;
squared_mean = squared_mean / samples;
float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,$p=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],Jp=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],Ec=new bt,Rs=new V,Ho=new V;function Kp(i,e,t){let n=new us,s=new tt,r=new tt,a=new yt,o=new yr,c=new Mr,l={},d=t.maxTextureSize,m={[Fn]:Ht,[Ht]:Fn,[An]:An},h=new Ft({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new tt},radius:{value:4}},vertexShader:Yp,fragmentShader:Zp}),p=h.clone();p.defines.HORIZONTAL_PASS=1;let _=new tn;_.setAttribute("position",new Qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new Yt(_,h),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_s;let u=this.type;this.render=function(E,I,x){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||E.length===0)return;this.type===Sl&&(Be("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=_s);let w=i.getRenderTarget(),L=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),U=i.state;U.setBlending(En),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let X=u!==this.type;X&&I.traverse(function(te){te.material&&(Array.isArray(te.material)?te.material.forEach(O=>O.needsUpdate=!0):te.material.needsUpdate=!0)});for(let te=0,O=E.length;te<O;te++){let J=E[te],H=J.shadow;if(H===void 0){Be("WebGLShadowMap:",J,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let ee=H.getFrameExtents();s.multiply(ee),r.copy(H.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/ee.x),s.x=r.x*ee.x,H.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/ee.y),s.y=r.y*ee.y,H.mapSize.y=r.y));let ie=i.state.buffers.depth.getReversed();if(H.camera._reversedDepth=ie,H.map===null||X===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Gi){if(J.isPointLight){Be("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new jt(s.x,s.y,{format:ri,type:wn,minFilter:Ut,magFilter:Ut,generateMipmaps:!1}),H.map.texture.name=J.name+".shadowMap",H.map.depthTexture=new On(s.x,s.y,_n),H.map.depthTexture.name=J.name+".shadowMapDepth",H.map.depthTexture.format=Sn,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Dt,H.map.depthTexture.magFilter=Dt}else J.isPointLight?(H.map=new Aa(s.x),H.map.depthTexture=new xr(s.x,gn)):(H.map=new jt(s.x,s.y),H.map.depthTexture=new On(s.x,s.y,gn)),H.map.depthTexture.name=J.name+".shadowMap",H.map.depthTexture.format=Sn,this.type===_s?(H.map.depthTexture.compareFunction=ie?Ma:ya,H.map.depthTexture.minFilter=Ut,H.map.depthTexture.magFilter=Ut):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Dt,H.map.depthTexture.magFilter=Dt);H.camera.updateProjectionMatrix()}let ue=H.map.isWebGLCubeRenderTarget?6:1;for(let _e=0;_e<ue;_e++){if(H.map.isWebGLCubeRenderTarget)i.setRenderTarget(H.map,_e),i.clear();else{_e===0&&(i.setRenderTarget(H.map),i.clear());let ce=H.getViewport(_e);a.set(r.x*ce.x,r.y*ce.y,r.x*ce.z,r.y*ce.w),U.viewport(a)}if(J.isPointLight){let ce=H.camera,Fe=H.matrix,Ze=J.distance||ce.far;Ze!==ce.far&&(ce.far=Ze,ce.updateProjectionMatrix()),Rs.setFromMatrixPosition(J.matrixWorld),ce.position.copy(Rs),Ho.copy(ce.position),Ho.add($p[_e]),ce.up.copy(Jp[_e]),ce.lookAt(Ho),ce.updateMatrixWorld(),Fe.makeTranslation(-Rs.x,-Rs.y,-Rs.z),Ec.multiplyMatrices(ce.projectionMatrix,ce.matrixWorldInverse),H._frustum.setFromProjectionMatrix(Ec,ce.coordinateSystem,ce.reversedDepth)}else H.updateMatrices(J);n=H.getFrustum(),y(I,x,H.camera,J,this.type)}H.isPointLightShadow!==!0&&this.type===Gi&&A(H,x),H.needsUpdate=!1}u=this.type,f.needsUpdate=!1,i.setRenderTarget(w,L,C)};function A(E,I){let x=e.update(M);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new jt(s.x,s.y,{format:ri,type:wn})),h.uniforms.shadow_pass.value=E.map.depthTexture,h.uniforms.resolution.value=E.mapSize,h.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(I,null,x,h,M,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(I,null,x,p,M,null)}function R(E,I,x,w){let L=null,C=x.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(C!==void 0)L=C;else if(L=x.isPointLight===!0?c:o,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){let U=L.uuid,X=I.uuid,te=l[U];te===void 0&&(te={},l[U]=te);let O=te[X];O===void 0&&(O=L.clone(),te[X]=O,I.addEventListener("dispose",T)),L=O}if(L.visible=I.visible,L.wireframe=I.wireframe,w===Gi?L.side=I.shadowSide!==null?I.shadowSide:I.side:L.side=I.shadowSide!==null?I.shadowSide:m[I.side],L.alphaMap=I.alphaMap,L.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,L.map=I.map,L.clipShadows=I.clipShadows,L.clippingPlanes=I.clippingPlanes,L.clipIntersection=I.clipIntersection,L.displacementMap=I.displacementMap,L.displacementScale=I.displacementScale,L.displacementBias=I.displacementBias,L.wireframeLinewidth=I.wireframeLinewidth,L.linewidth=I.linewidth,x.isPointLight===!0&&L.isMeshDistanceMaterial===!0){let U=i.properties.get(L);U.light=x}return L}function y(E,I,x,w,L){if(E.visible===!1)return;if(E.layers.test(I.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&L===Gi)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,E.matrixWorld);let X=e.update(E),te=E.material;if(Array.isArray(te)){let O=X.groups;for(let J=0,H=O.length;J<H;J++){let ee=O[J],ie=te[ee.materialIndex];if(ie&&ie.visible){let ue=R(E,ie,w,L);E.onBeforeShadow(i,E,I,x,X,ue,ee),i.renderBufferDirect(x,null,X,ue,E,ee),E.onAfterShadow(i,E,I,x,X,ue,ee)}}}else if(te.visible){let O=R(E,te,w,L);E.onBeforeShadow(i,E,I,x,X,O,null),i.renderBufferDirect(x,null,X,O,E,null),E.onAfterShadow(i,E,I,x,X,O,null)}}let U=E.children;for(let X=0,te=U.length;X<te;X++)y(U[X],I,x,w,L)}function T(E){E.target.removeEventListener("dispose",T);for(let x in l){let w=l[x],L=E.target.uuid;L in w&&(w[L].dispose(),delete w[L])}}}function Qp(i,e){function t(){let P=!1,ae=new yt,j=null,me=new yt(0,0,0,0);return{setMask:function(xe){j!==xe&&!P&&(i.colorMask(xe,xe,xe,xe),j=xe)},setLocked:function(xe){P=xe},setClear:function(xe,se,Re,be,_t){_t===!0&&(xe*=be,se*=be,Re*=be),ae.set(xe,se,Re,be),me.equals(ae)===!1&&(i.clearColor(xe,se,Re,be),me.copy(ae))},reset:function(){P=!1,j=null,me.set(-1,0,0,0)}}}function n(){let P=!1,ae=!1,j=null,me=null,xe=null;return{setReversed:function(se){if(ae!==se){let Re=e.get("EXT_clip_control");se?Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.ZERO_TO_ONE_EXT):Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.NEGATIVE_ONE_TO_ONE_EXT),ae=se;let be=xe;xe=null,this.setClear(be)}},getReversed:function(){return ae},setTest:function(se){se?re(i.DEPTH_TEST):De(i.DEPTH_TEST)},setMask:function(se){j!==se&&!P&&(i.depthMask(se),j=se)},setFunc:function(se){if(ae&&(se=tc[se]),me!==se){switch(se){case nr:i.depthFunc(i.NEVER);break;case ir:i.depthFunc(i.ALWAYS);break;case sr:i.depthFunc(i.LESS);break;case mi:i.depthFunc(i.LEQUAL);break;case rr:i.depthFunc(i.EQUAL);break;case ar:i.depthFunc(i.GEQUAL);break;case or:i.depthFunc(i.GREATER);break;case lr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}me=se}},setLocked:function(se){P=se},setClear:function(se){xe!==se&&(xe=se,ae&&(se=1-se),i.clearDepth(se))},reset:function(){P=!1,j=null,me=null,xe=null,ae=!1}}}function s(){let P=!1,ae=null,j=null,me=null,xe=null,se=null,Re=null,be=null,_t=null;return{setTest:function(ht){P||(ht?re(i.STENCIL_TEST):De(i.STENCIL_TEST))},setMask:function(ht){ae!==ht&&!P&&(i.stencilMask(ht),ae=ht)},setFunc:function(ht,Y,fe){(j!==ht||me!==Y||xe!==fe)&&(i.stencilFunc(ht,Y,fe),j=ht,me=Y,xe=fe)},setOp:function(ht,Y,fe){(se!==ht||Re!==Y||be!==fe)&&(i.stencilOp(ht,Y,fe),se=ht,Re=Y,be=fe)},setLocked:function(ht){P=ht},setClear:function(ht){_t!==ht&&(i.clearStencil(ht),_t=ht)},reset:function(){P=!1,ae=null,j=null,me=null,xe=null,se=null,Re=null,be=null,_t=null}}}let r=new t,a=new n,o=new s,c=new WeakMap,l=new WeakMap,d={},m={},h={},p=new WeakMap,_=[],M=null,f=!1,u=null,A=null,R=null,y=null,T=null,E=null,I=null,x=new st(0,0,0),w=0,L=!1,C=null,U=null,X=null,te=null,O=null,J=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,ee=0,ie=i.getParameter(i.VERSION);ie.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(ie)[1]),H=ee>=1):ie.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),H=ee>=2);let ue=null,_e={},ce=i.getParameter(i.SCISSOR_BOX),Fe=i.getParameter(i.VIEWPORT),Ze=new yt().fromArray(ce),ze=new yt().fromArray(Fe);function q(P,ae,j,me){let xe=new Uint8Array(4),se=i.createTexture();i.bindTexture(P,se),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Re=0;Re<j;Re++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D(ae,0,i.RGBA,1,1,me,0,i.RGBA,i.UNSIGNED_BYTE,xe):i.texImage2D(ae+Re,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,xe);return se}let oe={};oe[i.TEXTURE_2D]=q(i.TEXTURE_2D,i.TEXTURE_2D,1),oe[i.TEXTURE_CUBE_MAP]=q(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[i.TEXTURE_2D_ARRAY]=q(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),oe[i.TEXTURE_3D]=q(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),re(i.DEPTH_TEST),a.setFunc(mi),Je(!1),gt(ao),re(i.CULL_FACE),He(En);function re(P){d[P]!==!0&&(i.enable(P),d[P]=!0)}function De(P){d[P]!==!1&&(i.disable(P),d[P]=!1)}function we(P,ae){return h[P]!==ae?(i.bindFramebuffer(P,ae),h[P]=ae,P===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ae),P===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ae),!0):!1}function Se(P,ae){let j=_,me=!1;if(P){j=p.get(ae),j===void 0&&(j=[],p.set(ae,j));let xe=P.textures;if(j.length!==xe.length||j[0]!==i.COLOR_ATTACHMENT0){for(let se=0,Re=xe.length;se<Re;se++)j[se]=i.COLOR_ATTACHMENT0+se;j.length=xe.length,me=!0}}else j[0]!==i.BACK&&(j[0]=i.BACK,me=!0);me&&i.drawBuffers(j)}function ot(P){return M!==P?(i.useProgram(P),M=P,!0):!1}let Ue={[$n]:i.FUNC_ADD,[Tl]:i.FUNC_SUBTRACT,[Al]:i.FUNC_REVERSE_SUBTRACT};Ue[El]=i.MIN,Ue[wl]=i.MAX;let Qe={[Cl]:i.ZERO,[Rl]:i.ONE,[Il]:i.SRC_COLOR,[er]:i.SRC_ALPHA,[Fl]:i.SRC_ALPHA_SATURATE,[Nl]:i.DST_COLOR,[Ll]:i.DST_ALPHA,[Pl]:i.ONE_MINUS_SRC_COLOR,[tr]:i.ONE_MINUS_SRC_ALPHA,[Ul]:i.ONE_MINUS_DST_COLOR,[Dl]:i.ONE_MINUS_DST_ALPHA,[Ol]:i.CONSTANT_COLOR,[Bl]:i.ONE_MINUS_CONSTANT_COLOR,[zl]:i.CONSTANT_ALPHA,[Vl]:i.ONE_MINUS_CONSTANT_ALPHA};function He(P,ae,j,me,xe,se,Re,be,_t,ht){if(P===En){f===!0&&(De(i.BLEND),f=!1);return}if(f===!1&&(re(i.BLEND),f=!0),P!==bl){if(P!==u||ht!==L){if((A!==$n||T!==$n)&&(i.blendEquation(i.FUNC_ADD),A=$n,T=$n),ht)switch(P){case pi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case xs:i.blendFunc(i.ONE,i.ONE);break;case oo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case lo:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ve("WebGLState: Invalid blending: ",P);break}else switch(P){case pi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case xs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case oo:Ve("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case lo:Ve("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ve("WebGLState: Invalid blending: ",P);break}R=null,y=null,E=null,I=null,x.set(0,0,0),w=0,u=P,L=ht}return}xe=xe||ae,se=se||j,Re=Re||me,(ae!==A||xe!==T)&&(i.blendEquationSeparate(Ue[ae],Ue[xe]),A=ae,T=xe),(j!==R||me!==y||se!==E||Re!==I)&&(i.blendFuncSeparate(Qe[j],Qe[me],Qe[se],Qe[Re]),R=j,y=me,E=se,I=Re),(be.equals(x)===!1||_t!==w)&&(i.blendColor(be.r,be.g,be.b,_t),x.copy(be),w=_t),u=P,L=!1}function qe(P,ae){P.side===An?De(i.CULL_FACE):re(i.CULL_FACE);let j=P.side===Ht;ae&&(j=!j),Je(j),P.blending===pi&&P.transparent===!1?He(En):He(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),r.setMask(P.colorWrite);let me=P.stencilWrite;o.setTest(me),me&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),ut(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?re(i.SAMPLE_ALPHA_TO_COVERAGE):De(i.SAMPLE_ALPHA_TO_COVERAGE)}function Je(P){C!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),C=P)}function gt(P){P!==yl?(re(i.CULL_FACE),P!==U&&(P===ao?i.cullFace(i.BACK):P===Ml?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):De(i.CULL_FACE),U=P}function vt(P){P!==X&&(H&&i.lineWidth(P),X=P)}function ut(P,ae,j){P?(re(i.POLYGON_OFFSET_FILL),(te!==ae||O!==j)&&(te=ae,O=j,a.getReversed()&&(ae=-ae),i.polygonOffset(ae,j))):De(i.POLYGON_OFFSET_FILL)}function Ke(P){P?re(i.SCISSOR_TEST):De(i.SCISSOR_TEST)}function Oe(P){P===void 0&&(P=i.TEXTURE0+J-1),ue!==P&&(i.activeTexture(P),ue=P)}function D(P,ae,j){j===void 0&&(ue===null?j=i.TEXTURE0+J-1:j=ue);let me=_e[j];me===void 0&&(me={type:void 0,texture:void 0},_e[j]=me),(me.type!==P||me.texture!==ae)&&(ue!==j&&(i.activeTexture(j),ue=j),i.bindTexture(P,ae||oe[P]),me.type=P,me.texture=ae)}function Mt(){let P=_e[ue];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function rt(){try{i.compressedTexImage2D(...arguments)}catch(P){Ve("WebGLState:",P)}}function S(){try{i.compressedTexImage3D(...arguments)}catch(P){Ve("WebGLState:",P)}}function g(){try{i.texSubImage2D(...arguments)}catch(P){Ve("WebGLState:",P)}}function N(){try{i.texSubImage3D(...arguments)}catch(P){Ve("WebGLState:",P)}}function B(){try{i.compressedTexSubImage2D(...arguments)}catch(P){Ve("WebGLState:",P)}}function K(){try{i.compressedTexSubImage3D(...arguments)}catch(P){Ve("WebGLState:",P)}}function he(){try{i.texStorage2D(...arguments)}catch(P){Ve("WebGLState:",P)}}function pe(){try{i.texStorage3D(...arguments)}catch(P){Ve("WebGLState:",P)}}function Q(){try{i.texImage2D(...arguments)}catch(P){Ve("WebGLState:",P)}}function ne(){try{i.texImage3D(...arguments)}catch(P){Ve("WebGLState:",P)}}function b(P){return m[P]!==void 0?m[P]:i.getParameter(P)}function G(P,ae){m[P]!==ae&&(i.pixelStorei(P,ae),m[P]=ae)}function Z(P){Ze.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),Ze.copy(P))}function $(P){ze.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),ze.copy(P))}function le(P,ae){let j=l.get(ae);j===void 0&&(j=new WeakMap,l.set(ae,j));let me=j.get(P);me===void 0&&(me=i.getUniformBlockIndex(ae,P.name),j.set(P,me))}function de(P,ae){let me=l.get(ae).get(P);c.get(ae)!==me&&(i.uniformBlockBinding(ae,me,P.__bindingPointIndex),c.set(ae,me))}function Te(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),d={},m={},ue=null,_e={},h={},p=new WeakMap,_=[],M=null,f=!1,u=null,A=null,R=null,y=null,T=null,E=null,I=null,x=new st(0,0,0),w=0,L=!1,C=null,U=null,X=null,te=null,O=null,Ze.set(0,0,i.canvas.width,i.canvas.height),ze.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:re,disable:De,bindFramebuffer:we,drawBuffers:Se,useProgram:ot,setBlending:He,setMaterial:qe,setFlipSided:Je,setCullFace:gt,setLineWidth:vt,setPolygonOffset:ut,setScissorTest:Ke,activeTexture:Oe,bindTexture:D,unbindTexture:Mt,compressedTexImage2D:rt,compressedTexImage3D:S,texImage2D:Q,texImage3D:ne,pixelStorei:G,getParameter:b,updateUBOMapping:le,uniformBlockBinding:de,texStorage2D:he,texStorage3D:pe,texSubImage2D:g,texSubImage3D:N,compressedTexSubImage2D:B,compressedTexSubImage3D:K,scissor:Z,viewport:$,reset:Te}}function jp(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new tt,d=new WeakMap,m=new Set,h,p=new WeakMap,_=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(S,g){return _?new OffscreenCanvas(S,g):ss("canvas")}function f(S,g,N){let B=1,K=rt(S);if((K.width>N||K.height>N)&&(B=N/Math.max(K.width,K.height)),B<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){let he=Math.floor(B*K.width),pe=Math.floor(B*K.height);h===void 0&&(h=M(he,pe));let Q=g?M(he,pe):h;return Q.width=he,Q.height=pe,Q.getContext("2d").drawImage(S,0,0,he,pe),Be("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+he+"x"+pe+")."),Q}else return"data"in S&&Be("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),S;return S}function u(S){return S.generateMipmaps}function A(S){i.generateMipmap(S)}function R(S){return S.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?i.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(S,g,N,B,K,he=!1){if(S!==null){if(i[S]!==void 0)return i[S];Be("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let pe;B&&(pe=e.get("EXT_texture_norm16"),pe||Be("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=g;if(g===i.RED&&(N===i.FLOAT&&(Q=i.R32F),N===i.HALF_FLOAT&&(Q=i.R16F),N===i.UNSIGNED_BYTE&&(Q=i.R8),N===i.UNSIGNED_SHORT&&pe&&(Q=pe.R16_EXT),N===i.SHORT&&pe&&(Q=pe.R16_SNORM_EXT)),g===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(Q=i.R8UI),N===i.UNSIGNED_SHORT&&(Q=i.R16UI),N===i.UNSIGNED_INT&&(Q=i.R32UI),N===i.BYTE&&(Q=i.R8I),N===i.SHORT&&(Q=i.R16I),N===i.INT&&(Q=i.R32I)),g===i.RG&&(N===i.FLOAT&&(Q=i.RG32F),N===i.HALF_FLOAT&&(Q=i.RG16F),N===i.UNSIGNED_BYTE&&(Q=i.RG8),N===i.UNSIGNED_SHORT&&pe&&(Q=pe.RG16_EXT),N===i.SHORT&&pe&&(Q=pe.RG16_SNORM_EXT)),g===i.RG_INTEGER&&(N===i.UNSIGNED_BYTE&&(Q=i.RG8UI),N===i.UNSIGNED_SHORT&&(Q=i.RG16UI),N===i.UNSIGNED_INT&&(Q=i.RG32UI),N===i.BYTE&&(Q=i.RG8I),N===i.SHORT&&(Q=i.RG16I),N===i.INT&&(Q=i.RG32I)),g===i.RGB_INTEGER&&(N===i.UNSIGNED_BYTE&&(Q=i.RGB8UI),N===i.UNSIGNED_SHORT&&(Q=i.RGB16UI),N===i.UNSIGNED_INT&&(Q=i.RGB32UI),N===i.BYTE&&(Q=i.RGB8I),N===i.SHORT&&(Q=i.RGB16I),N===i.INT&&(Q=i.RGB32I)),g===i.RGBA_INTEGER&&(N===i.UNSIGNED_BYTE&&(Q=i.RGBA8UI),N===i.UNSIGNED_SHORT&&(Q=i.RGBA16UI),N===i.UNSIGNED_INT&&(Q=i.RGBA32UI),N===i.BYTE&&(Q=i.RGBA8I),N===i.SHORT&&(Q=i.RGBA16I),N===i.INT&&(Q=i.RGBA32I)),g===i.RGB&&(N===i.UNSIGNED_SHORT&&pe&&(Q=pe.RGB16_EXT),N===i.SHORT&&pe&&(Q=pe.RGB16_SNORM_EXT),N===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),N===i.UNSIGNED_INT_10F_11F_11F_REV&&(Q=i.R11F_G11F_B10F)),g===i.RGBA){let ne=he?ns:et.getTransfer(K);N===i.FLOAT&&(Q=i.RGBA32F),N===i.HALF_FLOAT&&(Q=i.RGBA16F),N===i.UNSIGNED_BYTE&&(Q=ne===ct?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT&&pe&&(Q=pe.RGBA16_EXT),N===i.SHORT&&pe&&(Q=pe.RGBA16_SNORM_EXT),N===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function T(S,g){let N;return S?g===null||g===gn||g===Wi?N=i.DEPTH24_STENCIL8:g===_n?N=i.DEPTH32F_STENCIL8:g===Hi&&(N=i.DEPTH24_STENCIL8,Be("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===gn||g===Wi?N=i.DEPTH_COMPONENT24:g===_n?N=i.DEPTH_COMPONENT32F:g===Hi&&(N=i.DEPTH_COMPONENT16),N}function E(S,g){return u(S)===!0||S.isFramebufferTexture&&S.minFilter!==Dt&&S.minFilter!==Ut?Math.log2(Math.max(g.width,g.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?g.mipmaps.length:1}function I(S){let g=S.target;g.removeEventListener("dispose",I),w(g),g.isVideoTexture&&d.delete(g),g.isHTMLTexture&&m.delete(g)}function x(S){let g=S.target;g.removeEventListener("dispose",x),C(g)}function w(S){let g=n.get(S);if(g.__webglInit===void 0)return;let N=S.source,B=p.get(N);if(B){let K=B[g.__cacheKey];K.usedTimes--,K.usedTimes===0&&L(S),Object.keys(B).length===0&&p.delete(N)}n.remove(S)}function L(S){let g=n.get(S);i.deleteTexture(g.__webglTexture);let N=S.source,B=p.get(N);delete B[g.__cacheKey],a.memory.textures--}function C(S){let g=n.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),n.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let B=0;B<6;B++){if(Array.isArray(g.__webglFramebuffer[B]))for(let K=0;K<g.__webglFramebuffer[B].length;K++)i.deleteFramebuffer(g.__webglFramebuffer[B][K]);else i.deleteFramebuffer(g.__webglFramebuffer[B]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[B])}else{if(Array.isArray(g.__webglFramebuffer))for(let B=0;B<g.__webglFramebuffer.length;B++)i.deleteFramebuffer(g.__webglFramebuffer[B]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let B=0;B<g.__webglColorRenderbuffer.length;B++)g.__webglColorRenderbuffer[B]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[B]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}let N=S.textures;for(let B=0,K=N.length;B<K;B++){let he=n.get(N[B]);he.__webglTexture&&(i.deleteTexture(he.__webglTexture),a.memory.textures--),n.remove(N[B])}n.remove(S)}let U=0;function X(){U=0}function te(){return U}function O(S){U=S}function J(){let S=U;return S>=s.maxTextures&&Be("WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+s.maxTextures),U+=1,S}function H(S){let g=[];return g.push(S.wrapS),g.push(S.wrapT),g.push(S.wrapR||0),g.push(S.magFilter),g.push(S.minFilter),g.push(S.anisotropy),g.push(S.internalFormat),g.push(S.format),g.push(S.type),g.push(S.generateMipmaps),g.push(S.premultiplyAlpha),g.push(S.flipY),g.push(S.unpackAlignment),g.push(S.colorSpace),g.join()}function ee(S,g){let N=n.get(S);if(S.isVideoTexture&&D(S),S.isRenderTargetTexture===!1&&S.isExternalTexture!==!0&&S.version>0&&N.__version!==S.version){let B=S.image;if(B===null)Be("WebGLRenderer: Texture marked for update but no image data found.");else if(B.complete===!1)Be("WebGLRenderer: Texture marked for update but image is incomplete");else{De(N,S,g);return}}else S.isExternalTexture&&(N.__webglTexture=S.sourceTexture?S.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+g)}function ie(S,g){let N=n.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&N.__version!==S.version){De(N,S,g);return}else S.isExternalTexture&&(N.__webglTexture=S.sourceTexture?S.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+g)}function ue(S,g){let N=n.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&N.__version!==S.version){De(N,S,g);return}t.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+g)}function _e(S,g){let N=n.get(S);if(S.isCubeDepthTexture!==!0&&S.version>0&&N.__version!==S.version){we(N,S,g);return}t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+g)}let ce={[cr]:i.REPEAT,[Mn]:i.CLAMP_TO_EDGE,[hr]:i.MIRRORED_REPEAT},Fe={[Dt]:i.NEAREST,[Hl]:i.NEAREST_MIPMAP_NEAREST,[ys]:i.NEAREST_MIPMAP_LINEAR,[Ut]:i.LINEAR,[Or]:i.LINEAR_MIPMAP_NEAREST,[ii]:i.LINEAR_MIPMAP_LINEAR},Ze={[ql]:i.NEVER,[Kl]:i.ALWAYS,[Yl]:i.LESS,[ya]:i.LEQUAL,[Zl]:i.EQUAL,[Ma]:i.GEQUAL,[$l]:i.GREATER,[Jl]:i.NOTEQUAL};function ze(S,g){if(g.type===_n&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Ut||g.magFilter===Or||g.magFilter===ys||g.magFilter===ii||g.minFilter===Ut||g.minFilter===Or||g.minFilter===ys||g.minFilter===ii)&&Be("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(S,i.TEXTURE_WRAP_S,ce[g.wrapS]),i.texParameteri(S,i.TEXTURE_WRAP_T,ce[g.wrapT]),(S===i.TEXTURE_3D||S===i.TEXTURE_2D_ARRAY)&&i.texParameteri(S,i.TEXTURE_WRAP_R,ce[g.wrapR]),i.texParameteri(S,i.TEXTURE_MAG_FILTER,Fe[g.magFilter]),i.texParameteri(S,i.TEXTURE_MIN_FILTER,Fe[g.minFilter]),g.compareFunction&&(i.texParameteri(S,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(S,i.TEXTURE_COMPARE_FUNC,Ze[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Dt||g.minFilter!==ys&&g.minFilter!==ii||g.type===_n&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){let N=e.get("EXT_texture_filter_anisotropic");i.texParameterf(S,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function q(S,g){let N=!1;S.__webglInit===void 0&&(S.__webglInit=!0,g.addEventListener("dispose",I));let B=g.source,K=p.get(B);K===void 0&&(K={},p.set(B,K));let he=H(g);if(he!==S.__cacheKey){K[he]===void 0&&(K[he]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,N=!0),K[he].usedTimes++;let pe=K[S.__cacheKey];pe!==void 0&&(K[S.__cacheKey].usedTimes--,pe.usedTimes===0&&L(g)),S.__cacheKey=he,S.__webglTexture=K[he].texture}return N}function oe(S,g,N){return Math.floor(Math.floor(S/N)/g)}function re(S,g,N,B){let he=S.updateRanges;if(he.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,g.width,g.height,N,B,g.data);else{he.sort((G,Z)=>G.start-Z.start);let pe=0;for(let G=1;G<he.length;G++){let Z=he[pe],$=he[G],le=Z.start+Z.count,de=oe($.start,g.width,4),Te=oe(Z.start,g.width,4);$.start<=le+1&&de===Te&&oe($.start+$.count-1,g.width,4)===de?Z.count=Math.max(Z.count,$.start+$.count-Z.start):(++pe,he[pe]=$)}he.length=pe+1;let Q=t.getParameter(i.UNPACK_ROW_LENGTH),ne=t.getParameter(i.UNPACK_SKIP_PIXELS),b=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,g.width);for(let G=0,Z=he.length;G<Z;G++){let $=he[G],le=Math.floor($.start/4),de=Math.ceil($.count/4),Te=le%g.width,P=Math.floor(le/g.width),ae=de,j=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Te),t.pixelStorei(i.UNPACK_SKIP_ROWS,P),t.texSubImage2D(i.TEXTURE_2D,0,Te,P,ae,j,N,B,g.data)}S.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,Q),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ne),t.pixelStorei(i.UNPACK_SKIP_ROWS,b)}}function De(S,g,N){let B=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(B=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(B=i.TEXTURE_3D);let K=q(S,g),he=g.source;t.bindTexture(B,S.__webglTexture,i.TEXTURE0+N);let pe=n.get(he);if(he.version!==pe.__version||K===!0){if(t.activeTexture(i.TEXTURE0+N),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){let j=et.getPrimaries(et.workingColorSpace),me=g.colorSpace===Bn?null:et.getPrimaries(g.colorSpace),xe=g.colorSpace===Bn||j===me?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe)}t.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment);let ne=f(g.image,!1,s.maxTextureSize);ne=Mt(g,ne);let b=r.convert(g.format,g.colorSpace),G=r.convert(g.type),Z=y(g.internalFormat,b,G,g.normalized,g.colorSpace,g.isVideoTexture);ze(B,g);let $,le=g.mipmaps,de=g.isVideoTexture!==!0,Te=pe.__version===void 0||K===!0,P=he.dataReady,ae=E(g,ne);if(g.isDepthTexture)Z=T(g.format===si,g.type),Te&&(de?t.texStorage2D(i.TEXTURE_2D,1,Z,ne.width,ne.height):t.texImage2D(i.TEXTURE_2D,0,Z,ne.width,ne.height,0,b,G,null));else if(g.isDataTexture)if(le.length>0){de&&Te&&t.texStorage2D(i.TEXTURE_2D,ae,Z,le[0].width,le[0].height);for(let j=0,me=le.length;j<me;j++)$=le[j],de?P&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,$.width,$.height,b,G,$.data):t.texImage2D(i.TEXTURE_2D,j,Z,$.width,$.height,0,b,G,$.data);g.generateMipmaps=!1}else de?(Te&&t.texStorage2D(i.TEXTURE_2D,ae,Z,ne.width,ne.height),P&&re(g,ne,b,G)):t.texImage2D(i.TEXTURE_2D,0,Z,ne.width,ne.height,0,b,G,ne.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){de&&Te&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ae,Z,le[0].width,le[0].height,ne.depth);for(let j=0,me=le.length;j<me;j++)if($=le[j],g.format!==ln)if(b!==null)if(de){if(P)if(g.layerUpdates.size>0){let xe=Lo($.width,$.height,g.format,g.type);for(let se of g.layerUpdates){let Re=$.data.subarray(se*xe/$.data.BYTES_PER_ELEMENT,(se+1)*xe/$.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,se,$.width,$.height,1,b,Re)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,$.width,$.height,ne.depth,b,$.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,j,Z,$.width,$.height,ne.depth,0,$.data,0,0);else Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else de?P&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,$.width,$.height,ne.depth,b,G,$.data):t.texImage3D(i.TEXTURE_2D_ARRAY,j,Z,$.width,$.height,ne.depth,0,b,G,$.data)}else{de&&Te&&t.texStorage2D(i.TEXTURE_2D,ae,Z,le[0].width,le[0].height);for(let j=0,me=le.length;j<me;j++)$=le[j],g.format!==ln?b!==null?de?P&&t.compressedTexSubImage2D(i.TEXTURE_2D,j,0,0,$.width,$.height,b,$.data):t.compressedTexImage2D(i.TEXTURE_2D,j,Z,$.width,$.height,0,$.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):de?P&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,$.width,$.height,b,G,$.data):t.texImage2D(i.TEXTURE_2D,j,Z,$.width,$.height,0,b,G,$.data)}else if(g.isDataArrayTexture)if(de){if(Te&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ae,Z,ne.width,ne.height,ne.depth),P)if(g.layerUpdates.size>0){let j=Lo(ne.width,ne.height,g.format,g.type);for(let me of g.layerUpdates){let xe=ne.data.subarray(me*j/ne.data.BYTES_PER_ELEMENT,(me+1)*j/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,me,ne.width,ne.height,1,b,G,xe)}g.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,b,G,ne.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Z,ne.width,ne.height,ne.depth,0,b,G,ne.data);else if(g.isData3DTexture)de?(Te&&t.texStorage3D(i.TEXTURE_3D,ae,Z,ne.width,ne.height,ne.depth),P&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,b,G,ne.data)):t.texImage3D(i.TEXTURE_3D,0,Z,ne.width,ne.height,ne.depth,0,b,G,ne.data);else if(g.isFramebufferTexture){if(Te)if(de)t.texStorage2D(i.TEXTURE_2D,ae,Z,ne.width,ne.height);else{let j=ne.width,me=ne.height;for(let xe=0;xe<ae;xe++)t.texImage2D(i.TEXTURE_2D,xe,Z,j,me,0,b,G,null),j>>=1,me>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in i){let j=i.canvas;if(j.hasAttribute("layoutsubtree")||j.setAttribute("layoutsubtree","true"),ne.parentNode!==j){j.appendChild(ne),m.add(g),j.onpaint=me=>{let xe=me.changedElements;for(let se of m)xe.includes(se.image)&&(se.needsUpdate=!0)},j.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ne);else{let xe=i.RGBA,se=i.RGBA,Re=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,xe,se,Re,ne)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(le.length>0){if(de&&Te){let j=rt(le[0]);t.texStorage2D(i.TEXTURE_2D,ae,Z,j.width,j.height)}for(let j=0,me=le.length;j<me;j++)$=le[j],de?P&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,b,G,$):t.texImage2D(i.TEXTURE_2D,j,Z,b,G,$);g.generateMipmaps=!1}else if(de){if(Te){let j=rt(ne);t.texStorage2D(i.TEXTURE_2D,ae,Z,j.width,j.height)}P&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,b,G,ne)}else t.texImage2D(i.TEXTURE_2D,0,Z,b,G,ne);u(g)&&A(B),pe.__version=he.version,g.onUpdate&&g.onUpdate(g)}S.__version=g.version}function we(S,g,N){if(g.image.length!==6)return;let B=q(S,g),K=g.source;t.bindTexture(i.TEXTURE_CUBE_MAP,S.__webglTexture,i.TEXTURE0+N);let he=n.get(K);if(K.version!==he.__version||B===!0){t.activeTexture(i.TEXTURE0+N);let pe=et.getPrimaries(et.workingColorSpace),Q=g.colorSpace===Bn?null:et.getPrimaries(g.colorSpace),ne=g.colorSpace===Bn||pe===Q?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);let b=g.isCompressedTexture||g.image[0].isCompressedTexture,G=g.image[0]&&g.image[0].isDataTexture,Z=[];for(let se=0;se<6;se++)!b&&!G?Z[se]=f(g.image[se],!0,s.maxCubemapSize):Z[se]=G?g.image[se].image:g.image[se],Z[se]=Mt(g,Z[se]);let $=Z[0],le=r.convert(g.format,g.colorSpace),de=r.convert(g.type),Te=y(g.internalFormat,le,de,g.normalized,g.colorSpace),P=g.isVideoTexture!==!0,ae=he.__version===void 0||B===!0,j=K.dataReady,me=E(g,$);ze(i.TEXTURE_CUBE_MAP,g);let xe;if(b){P&&ae&&t.texStorage2D(i.TEXTURE_CUBE_MAP,me,Te,$.width,$.height);for(let se=0;se<6;se++){xe=Z[se].mipmaps;for(let Re=0;Re<xe.length;Re++){let be=xe[Re];g.format!==ln?le!==null?P?j&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Re,0,0,be.width,be.height,le,be.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Re,Te,be.width,be.height,0,be.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Re,0,0,be.width,be.height,le,de,be.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Re,Te,be.width,be.height,0,le,de,be.data)}}}else{if(xe=g.mipmaps,P&&ae){xe.length>0&&me++;let se=rt(Z[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,me,Te,se.width,se.height)}for(let se=0;se<6;se++)if(G){P?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Z[se].width,Z[se].height,le,de,Z[se].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Te,Z[se].width,Z[se].height,0,le,de,Z[se].data);for(let Re=0;Re<xe.length;Re++){let _t=xe[Re].image[se].image;P?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Re+1,0,0,_t.width,_t.height,le,de,_t.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Re+1,Te,_t.width,_t.height,0,le,de,_t.data)}}else{P?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,le,de,Z[se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Te,le,de,Z[se]);for(let Re=0;Re<xe.length;Re++){let be=xe[Re];P?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Re+1,0,0,le,de,be.image[se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Re+1,Te,le,de,be.image[se])}}}u(g)&&A(i.TEXTURE_CUBE_MAP),he.__version=K.version,g.onUpdate&&g.onUpdate(g)}S.__version=g.version}function Se(S,g,N,B,K,he){let pe=r.convert(N.format,N.colorSpace),Q=r.convert(N.type),ne=y(N.internalFormat,pe,Q,N.normalized,N.colorSpace),b=n.get(g),G=n.get(N);if(G.__renderTarget=g,!b.__hasExternalTextures){let Z=Math.max(1,g.width>>he),$=Math.max(1,g.height>>he);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?t.texImage3D(K,he,ne,Z,$,g.depth,0,pe,Q,null):t.texImage2D(K,he,ne,Z,$,0,pe,Q,null)}t.bindFramebuffer(i.FRAMEBUFFER,S),Oe(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,B,K,G.__webglTexture,0,Ke(g)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,B,K,G.__webglTexture,he),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ot(S,g,N){if(i.bindRenderbuffer(i.RENDERBUFFER,S),g.depthBuffer){let B=g.depthTexture,K=B&&B.isDepthTexture?B.type:null,he=T(g.stencilBuffer,K),pe=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Oe(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ke(g),he,g.width,g.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ke(g),he,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,he,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,pe,i.RENDERBUFFER,S)}else{let B=g.textures;for(let K=0;K<B.length;K++){let he=B[K],pe=r.convert(he.format,he.colorSpace),Q=r.convert(he.type),ne=y(he.internalFormat,pe,Q,he.normalized,he.colorSpace);Oe(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ke(g),ne,g.width,g.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ke(g),ne,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,ne,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ue(S,g,N){let B=g.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,S),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let K=n.get(g.depthTexture);if(K.__renderTarget=g,(!K.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),B){if(K.__webglInit===void 0&&(K.__webglInit=!0,g.depthTexture.addEventListener("dispose",I)),K.__webglTexture===void 0){K.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),ze(i.TEXTURE_CUBE_MAP,g.depthTexture);let b=r.convert(g.depthTexture.format),G=r.convert(g.depthTexture.type),Z;g.depthTexture.format===Sn?Z=i.DEPTH_COMPONENT24:g.depthTexture.format===si&&(Z=i.DEPTH24_STENCIL8);for(let $=0;$<6;$++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Z,g.width,g.height,0,b,G,null)}}else ee(g.depthTexture,0);let he=K.__webglTexture,pe=Ke(g),Q=B?i.TEXTURE_CUBE_MAP_POSITIVE_X+N:i.TEXTURE_2D,ne=g.depthTexture.format===si?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(g.depthTexture.format===Sn)Oe(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,Q,he,0,pe):i.framebufferTexture2D(i.FRAMEBUFFER,ne,Q,he,0);else if(g.depthTexture.format===si)Oe(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,Q,he,0,pe):i.framebufferTexture2D(i.FRAMEBUFFER,ne,Q,he,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Qe(S){let g=n.get(S),N=S.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==S.depthTexture){let B=S.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),B){let K=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,B.removeEventListener("dispose",K)};B.addEventListener("dispose",K),g.__depthDisposeCallback=K}g.__boundDepthTexture=B}if(S.depthTexture&&!g.__autoAllocateDepthBuffer)if(N)for(let B=0;B<6;B++)Ue(g.__webglFramebuffer[B],S,B);else{let B=S.texture.mipmaps;B&&B.length>0?Ue(g.__webglFramebuffer[0],S,0):Ue(g.__webglFramebuffer,S,0)}else if(N){g.__webglDepthbuffer=[];for(let B=0;B<6;B++)if(t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[B]),g.__webglDepthbuffer[B]===void 0)g.__webglDepthbuffer[B]=i.createRenderbuffer(),ot(g.__webglDepthbuffer[B],S,!1);else{let K=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=g.__webglDepthbuffer[B];i.bindRenderbuffer(i.RENDERBUFFER,he),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,he)}}else{let B=S.texture.mipmaps;if(B&&B.length>0?t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),ot(g.__webglDepthbuffer,S,!1);else{let K=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,he),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,he)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function He(S,g,N){let B=n.get(S);g!==void 0&&Se(B.__webglFramebuffer,S,S.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&Qe(S)}function qe(S){let g=S.texture,N=n.get(S),B=n.get(g);S.addEventListener("dispose",x);let K=S.textures,he=S.isWebGLCubeRenderTarget===!0,pe=K.length>1;if(pe||(B.__webglTexture===void 0&&(B.__webglTexture=i.createTexture()),B.__version=g.version,a.memory.textures++),he){N.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(g.mipmaps&&g.mipmaps.length>0){N.__webglFramebuffer[Q]=[];for(let ne=0;ne<g.mipmaps.length;ne++)N.__webglFramebuffer[Q][ne]=i.createFramebuffer()}else N.__webglFramebuffer[Q]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){N.__webglFramebuffer=[];for(let Q=0;Q<g.mipmaps.length;Q++)N.__webglFramebuffer[Q]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(pe)for(let Q=0,ne=K.length;Q<ne;Q++){let b=n.get(K[Q]);b.__webglTexture===void 0&&(b.__webglTexture=i.createTexture(),a.memory.textures++)}if(S.samples>0&&Oe(S)===!1){N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let Q=0;Q<K.length;Q++){let ne=K[Q];N.__webglColorRenderbuffer[Q]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[Q]);let b=r.convert(ne.format,ne.colorSpace),G=r.convert(ne.type),Z=y(ne.internalFormat,b,G,ne.normalized,ne.colorSpace,S.isXRRenderTarget===!0),$=Ke(S);i.renderbufferStorageMultisample(i.RENDERBUFFER,$,Z,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Q,i.RENDERBUFFER,N.__webglColorRenderbuffer[Q])}i.bindRenderbuffer(i.RENDERBUFFER,null),S.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),ot(N.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(he){t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture),ze(i.TEXTURE_CUBE_MAP,g);for(let Q=0;Q<6;Q++)if(g.mipmaps&&g.mipmaps.length>0)for(let ne=0;ne<g.mipmaps.length;ne++)Se(N.__webglFramebuffer[Q][ne],S,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ne);else Se(N.__webglFramebuffer[Q],S,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);u(g)&&A(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(pe){for(let Q=0,ne=K.length;Q<ne;Q++){let b=K[Q],G=n.get(b),Z=i.TEXTURE_2D;(S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(Z=S.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Z,G.__webglTexture),ze(Z,b),Se(N.__webglFramebuffer,S,b,i.COLOR_ATTACHMENT0+Q,Z,0),u(b)&&A(Z)}t.unbindTexture()}else{let Q=i.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(Q=S.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Q,B.__webglTexture),ze(Q,g),g.mipmaps&&g.mipmaps.length>0)for(let ne=0;ne<g.mipmaps.length;ne++)Se(N.__webglFramebuffer[ne],S,g,i.COLOR_ATTACHMENT0,Q,ne);else Se(N.__webglFramebuffer,S,g,i.COLOR_ATTACHMENT0,Q,0);u(g)&&A(Q),t.unbindTexture()}S.depthBuffer&&Qe(S)}function Je(S){let g=S.textures;for(let N=0,B=g.length;N<B;N++){let K=g[N];if(u(K)){let he=R(S),pe=n.get(K).__webglTexture;t.bindTexture(he,pe),A(he),t.unbindTexture()}}}let gt=[],vt=[];function ut(S){if(S.samples>0){if(Oe(S)===!1){let g=S.textures,N=S.width,B=S.height,K=i.COLOR_BUFFER_BIT,he=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pe=n.get(S),Q=g.length>1;if(Q)for(let b=0;b<g.length;b++)t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+b,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+b,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer);let ne=S.texture.mipmaps;ne&&ne.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let b=0;b<g.length;b++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),Q){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,pe.__webglColorRenderbuffer[b]);let G=n.get(g[b]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,G,0)}i.blitFramebuffer(0,0,N,B,0,0,N,B,K,i.NEAREST),c===!0&&(gt.length=0,vt.length=0,gt.push(i.COLOR_ATTACHMENT0+b),S.depthBuffer&&S.resolveDepthBuffer===!1&&(gt.push(he),vt.push(he),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,vt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,gt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Q)for(let b=0;b<g.length;b++){t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+b,i.RENDERBUFFER,pe.__webglColorRenderbuffer[b]);let G=n.get(g[b]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+b,i.TEXTURE_2D,G,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&c){let g=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function Ke(S){return Math.min(s.maxSamples,S.samples)}function Oe(S){let g=n.get(S);return S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function D(S){let g=a.render.frame;d.get(S)!==g&&(d.set(S,g),S.update())}function Mt(S,g){let N=S.colorSpace,B=S.format,K=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||N!==ts&&N!==Bn&&(et.getTransfer(N)===ct?(B!==ln||K!==sn)&&Be("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ve("WebGLTextures: Unsupported texture color space:",N)),g}function rt(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(l.width=S.naturalWidth||S.width,l.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(l.width=S.displayWidth,l.height=S.displayHeight):(l.width=S.width,l.height=S.height),l}this.allocateTextureUnit=J,this.resetTextureUnits=X,this.getTextureUnits=te,this.setTextureUnits=O,this.setTexture2D=ee,this.setTexture2DArray=ie,this.setTexture3D=ue,this.setTextureCube=_e,this.rebindTextures=He,this.setupRenderTarget=qe,this.updateRenderTargetMipmap=Je,this.updateMultisampleRenderTarget=ut,this.setupDepthRenderbuffer=Qe,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=Oe,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function em(i,e){function t(n,s=Bn){let r,a=et.getTransfer(s);if(n===sn)return i.UNSIGNED_BYTE;if(n===zr)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Vr)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Mo)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===So)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===vo)return i.BYTE;if(n===yo)return i.SHORT;if(n===Hi)return i.UNSIGNED_SHORT;if(n===Br)return i.INT;if(n===gn)return i.UNSIGNED_INT;if(n===_n)return i.FLOAT;if(n===wn)return i.HALF_FLOAT;if(n===bo)return i.ALPHA;if(n===To)return i.RGB;if(n===ln)return i.RGBA;if(n===Sn)return i.DEPTH_COMPONENT;if(n===si)return i.DEPTH_STENCIL;if(n===Ao)return i.RED;if(n===kr)return i.RED_INTEGER;if(n===ri)return i.RG;if(n===Gr)return i.RG_INTEGER;if(n===Hr)return i.RGBA_INTEGER;if(n===Ms||n===Ss||n===bs||n===Ts)if(a===ct)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ms)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ss)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===bs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ts)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ms)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ss)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===bs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ts)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Wr||n===Xr||n===qr||n===Yr)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Wr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Xr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===qr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Yr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Zr||n===$r||n===Jr||n===Kr||n===Qr||n===As||n===jr)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Zr||n===$r)return a===ct?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Jr)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Kr)return r.COMPRESSED_R11_EAC;if(n===Qr)return r.COMPRESSED_SIGNED_R11_EAC;if(n===As)return r.COMPRESSED_RG11_EAC;if(n===jr)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ea||n===ta||n===na||n===ia||n===sa||n===ra||n===aa||n===oa||n===la||n===ca||n===ha||n===ua||n===da||n===fa)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ea)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ta)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===na)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ia)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===sa)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ra)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===aa)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===oa)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===la)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ca)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ha)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ua)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===da)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===fa)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===pa||n===ma||n===ga)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===pa)return a===ct?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ma)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ga)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===_a||n===xa||n===Es||n===va)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===_a)return r.COMPRESSED_RED_RGTC1_EXT;if(n===xa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Es)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===va)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Wi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var tm=`
void main() {

gl_Position = vec4( position, 1.0 );

}`,nm=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

if ( coord.x >= 1.0 ) {

gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

} else {

gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

}

}`,Ko=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ps(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Ft({vertexShader:tm,fragmentShader:nm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Yt(new xi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Qo=class extends bn{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,d=null,m=null,h=null,p=null,_=null,M=typeof XRWebGLBinding<"u",f=new Ko,u={},A=t.getContextAttributes(),R=null,y=null,T=[],E=[],I=new tt,x=null,w=new Vt;w.viewport=new yt;let L=new Vt;L.viewport=new yt;let C=[w,L],U=new Dr,X=null,te=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let oe=T[q];return oe===void 0&&(oe=new Vi,T[q]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(q){let oe=T[q];return oe===void 0&&(oe=new Vi,T[q]=oe),oe.getGripSpace()},this.getHand=function(q){let oe=T[q];return oe===void 0&&(oe=new Vi,T[q]=oe),oe.getHandSpace()};function O(q){let oe=E.indexOf(q.inputSource);if(oe===-1)return;let re=T[oe];re!==void 0&&(re.update(q.inputSource,q.frame,l||a),re.dispatchEvent({type:q.type,data:q.inputSource}))}function J(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",J),s.removeEventListener("inputsourceschange",H);for(let q=0;q<T.length;q++){let oe=E[q];oe!==null&&(E[q]=null,T[q].disconnect(oe))}X=null,te=null,f.reset();for(let q in u)delete u[q];e.setRenderTarget(R),p=null,h=null,m=null,s=null,y=null,ze.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&Be("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&Be("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return m===null&&M&&(m=new XRWebGLBinding(s,t)),m},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(R=e.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",J),s.addEventListener("inputsourceschange",H),A.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(I),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let re=null,De=null,we=null;A.depth&&(we=A.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,re=A.stencil?si:Sn,De=A.stencil?Wi:gn);let Se={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:r};m=this.getBinding(),h=m.createProjectionLayer(Se),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),y=new jt(h.textureWidth,h.textureHeight,{format:ln,type:sn,depthTexture:new On(h.textureWidth,h.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:A.stencil,colorSpace:e.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{let re={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,re),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new jt(p.framebufferWidth,p.framebufferHeight,{format:ln,type:sn,colorSpace:e.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),ze.setContext(s),ze.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return f.getDepthTexture()};function H(q){for(let oe=0;oe<q.removed.length;oe++){let re=q.removed[oe],De=E.indexOf(re);De>=0&&(E[De]=null,T[De].disconnect(re))}for(let oe=0;oe<q.added.length;oe++){let re=q.added[oe],De=E.indexOf(re);if(De===-1){for(let Se=0;Se<T.length;Se++)if(Se>=E.length){E.push(re),De=Se;break}else if(E[Se]===null){E[Se]=re,De=Se;break}if(De===-1)break}let we=T[De];we&&we.connect(re)}}let ee=new V,ie=new V;function ue(q,oe,re){ee.setFromMatrixPosition(oe.matrixWorld),ie.setFromMatrixPosition(re.matrixWorld);let De=ee.distanceTo(ie),we=oe.projectionMatrix.elements,Se=re.projectionMatrix.elements,ot=we[14]/(we[10]-1),Ue=we[14]/(we[10]+1),Qe=(we[9]+1)/we[5],He=(we[9]-1)/we[5],qe=(we[8]-1)/we[0],Je=(Se[8]+1)/Se[0],gt=ot*qe,vt=ot*Je,ut=De/(-qe+Je),Ke=ut*-qe;if(oe.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Ke),q.translateZ(ut),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),we[10]===-1)q.projectionMatrix.copy(oe.projectionMatrix),q.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{let Oe=ot+ut,D=Ue+ut,Mt=gt-Ke,rt=vt+(De-Ke),S=Qe*Ue/D*Oe,g=He*Ue/D*Oe;q.projectionMatrix.makePerspective(Mt,rt,S,g,Oe,D),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function _e(q,oe){oe===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(oe.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let oe=q.near,re=q.far;f.texture!==null&&(f.depthNear>0&&(oe=f.depthNear),f.depthFar>0&&(re=f.depthFar)),U.near=L.near=w.near=oe,U.far=L.far=w.far=re,(X!==U.near||te!==U.far)&&(s.updateRenderState({depthNear:U.near,depthFar:U.far}),X=U.near,te=U.far),U.layers.mask=q.layers.mask|6,w.layers.mask=U.layers.mask&-5,L.layers.mask=U.layers.mask&-3;let De=q.parent,we=U.cameras;_e(U,De);for(let Se=0;Se<we.length;Se++)_e(we[Se],De);we.length===2?ue(U,w,L):U.projectionMatrix.copy(w.projectionMatrix),ce(q,U,De)};function ce(q,oe,re){re===null?q.matrix.copy(oe.matrixWorld):(q.matrix.copy(re.matrixWorld),q.matrix.invert(),q.matrix.multiply(oe.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(oe.projectionMatrix),q.projectionMatrixInverse.copy(oe.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=dr*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(h===null&&p===null))return c},this.setFoveation=function(q){c=q,h!==null&&(h.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return f.texture!==null},this.getDepthSensingMesh=function(){return f.getMesh(U)},this.getCameraTexture=function(q){return u[q]};let Fe=null;function Ze(q,oe){if(d=oe.getViewerPose(l||a),_=oe,d!==null){let re=d.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let De=!1;re.length!==U.cameras.length&&(U.cameras.length=0,De=!0);for(let Ue=0;Ue<re.length;Ue++){let Qe=re[Ue],He=null;if(p!==null)He=p.getViewport(Qe);else{let Je=m.getViewSubImage(h,Qe);He=Je.viewport,Ue===0&&(e.setRenderTargetTextures(y,Je.colorTexture,Je.depthStencilTexture),e.setRenderTarget(y))}let qe=C[Ue];qe===void 0&&(qe=new Vt,qe.layers.enable(Ue),qe.viewport=new yt,C[Ue]=qe),qe.matrix.fromArray(Qe.transform.matrix),qe.matrix.decompose(qe.position,qe.quaternion,qe.scale),qe.projectionMatrix.fromArray(Qe.projectionMatrix),qe.projectionMatrixInverse.copy(qe.projectionMatrix).invert(),qe.viewport.set(He.x,He.y,He.width,He.height),Ue===0&&(U.matrix.copy(qe.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),De===!0&&U.cameras.push(qe)}let we=s.enabledFeatures;if(we&&we.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){m=n.getBinding();let Ue=m.getDepthInformation(re[0]);Ue&&Ue.isValid&&Ue.texture&&f.init(Ue,s.renderState)}if(we&&we.includes("camera-access")&&M){e.state.unbindTexture(),m=n.getBinding();for(let Ue=0;Ue<re.length;Ue++){let Qe=re[Ue].camera;if(Qe){let He=u[Qe];He||(He=new ps,u[Qe]=He);let qe=m.getCameraImage(Qe);He.sourceTexture=qe}}}}for(let re=0;re<T.length;re++){let De=E[re],we=T[re];De!==null&&we!==void 0&&we.update(De,oe,l||a)}Fe&&Fe(q,oe),oe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:oe}),_=null}let ze=new wc;ze.setAnimationLoop(Ze),this.setAnimationLoop=function(q){Fe=q},this.dispose=function(){}}},im=new bt,Dc=new Ge;Dc.set(-1,0,0,0,1,0,0,0,1);function sm(i,e){function t(f,u){f.matrixAutoUpdate===!0&&f.updateMatrix(),u.value.copy(f.matrix)}function n(f,u){u.color.getRGB(f.fogColor.value,Ro(i)),u.isFog?(f.fogNear.value=u.near,f.fogFar.value=u.far):u.isFogExp2&&(f.fogDensity.value=u.density)}function s(f,u,A,R,y){u.isNodeMaterial?u.uniformsNeedUpdate=!1:u.isMeshBasicMaterial?r(f,u):u.isMeshLambertMaterial?(r(f,u),u.envMap&&(f.envMapIntensity.value=u.envMapIntensity)):u.isMeshToonMaterial?(r(f,u),m(f,u)):u.isMeshPhongMaterial?(r(f,u),d(f,u),u.envMap&&(f.envMapIntensity.value=u.envMapIntensity)):u.isMeshStandardMaterial?(r(f,u),h(f,u),u.isMeshPhysicalMaterial&&p(f,u,y)):u.isMeshMatcapMaterial?(r(f,u),_(f,u)):u.isMeshDepthMaterial?r(f,u):u.isMeshDistanceMaterial?(r(f,u),M(f,u)):u.isMeshNormalMaterial?r(f,u):u.isLineBasicMaterial?(a(f,u),u.isLineDashedMaterial&&o(f,u)):u.isPointsMaterial?c(f,u,A,R):u.isSpriteMaterial?l(f,u):u.isShadowMaterial?(f.color.value.copy(u.color),f.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(f,u){f.opacity.value=u.opacity,u.color&&f.diffuse.value.copy(u.color),u.emissive&&f.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(f.map.value=u.map,t(u.map,f.mapTransform)),u.alphaMap&&(f.alphaMap.value=u.alphaMap,t(u.alphaMap,f.alphaMapTransform)),u.bumpMap&&(f.bumpMap.value=u.bumpMap,t(u.bumpMap,f.bumpMapTransform),f.bumpScale.value=u.bumpScale,u.side===Ht&&(f.bumpScale.value*=-1)),u.normalMap&&(f.normalMap.value=u.normalMap,t(u.normalMap,f.normalMapTransform),f.normalScale.value.copy(u.normalScale),u.side===Ht&&f.normalScale.value.negate()),u.displacementMap&&(f.displacementMap.value=u.displacementMap,t(u.displacementMap,f.displacementMapTransform),f.displacementScale.value=u.displacementScale,f.displacementBias.value=u.displacementBias),u.emissiveMap&&(f.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,f.emissiveMapTransform)),u.specularMap&&(f.specularMap.value=u.specularMap,t(u.specularMap,f.specularMapTransform)),u.alphaTest>0&&(f.alphaTest.value=u.alphaTest);let A=e.get(u),R=A.envMap,y=A.envMapRotation;R&&(f.envMap.value=R,f.envMapRotation.value.setFromMatrix4(im.makeRotationFromEuler(y)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&f.envMapRotation.value.premultiply(Dc),f.reflectivity.value=u.reflectivity,f.ior.value=u.ior,f.refractionRatio.value=u.refractionRatio),u.lightMap&&(f.lightMap.value=u.lightMap,f.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,f.lightMapTransform)),u.aoMap&&(f.aoMap.value=u.aoMap,f.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,f.aoMapTransform))}function a(f,u){f.diffuse.value.copy(u.color),f.opacity.value=u.opacity,u.map&&(f.map.value=u.map,t(u.map,f.mapTransform))}function o(f,u){f.dashSize.value=u.dashSize,f.totalSize.value=u.dashSize+u.gapSize,f.scale.value=u.scale}function c(f,u,A,R){f.diffuse.value.copy(u.color),f.opacity.value=u.opacity,f.size.value=u.size*A,f.scale.value=R*.5,u.map&&(f.map.value=u.map,t(u.map,f.uvTransform)),u.alphaMap&&(f.alphaMap.value=u.alphaMap,t(u.alphaMap,f.alphaMapTransform)),u.alphaTest>0&&(f.alphaTest.value=u.alphaTest)}function l(f,u){f.diffuse.value.copy(u.color),f.opacity.value=u.opacity,f.rotation.value=u.rotation,u.map&&(f.map.value=u.map,t(u.map,f.mapTransform)),u.alphaMap&&(f.alphaMap.value=u.alphaMap,t(u.alphaMap,f.alphaMapTransform)),u.alphaTest>0&&(f.alphaTest.value=u.alphaTest)}function d(f,u){f.specular.value.copy(u.specular),f.shininess.value=Math.max(u.shininess,1e-4)}function m(f,u){u.gradientMap&&(f.gradientMap.value=u.gradientMap)}function h(f,u){f.metalness.value=u.metalness,u.metalnessMap&&(f.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,f.metalnessMapTransform)),f.roughness.value=u.roughness,u.roughnessMap&&(f.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,f.roughnessMapTransform)),u.envMap&&(f.envMapIntensity.value=u.envMapIntensity)}function p(f,u,A){f.ior.value=u.ior,u.sheen>0&&(f.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),f.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(f.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,f.sheenColorMapTransform)),u.sheenRoughnessMap&&(f.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,f.sheenRoughnessMapTransform))),u.clearcoat>0&&(f.clearcoat.value=u.clearcoat,f.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(f.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,f.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(f.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Ht&&f.clearcoatNormalScale.value.negate())),u.dispersion>0&&(f.dispersion.value=u.dispersion),u.iridescence>0&&(f.iridescence.value=u.iridescence,f.iridescenceIOR.value=u.iridescenceIOR,f.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(f.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,f.iridescenceMapTransform)),u.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),u.transmission>0&&(f.transmission.value=u.transmission,f.transmissionSamplerMap.value=A.texture,f.transmissionSamplerSize.value.set(A.width,A.height),u.transmissionMap&&(f.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,f.transmissionMapTransform)),f.thickness.value=u.thickness,u.thicknessMap&&(f.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=u.attenuationDistance,f.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(f.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(f.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=u.specularIntensity,f.specularColor.value.copy(u.specularColor),u.specularColorMap&&(f.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,f.specularColorMapTransform)),u.specularIntensityMap&&(f.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,f.specularIntensityMapTransform))}function _(f,u){u.matcap&&(f.matcap.value=u.matcap)}function M(f,u){let A=e.get(u).light;f.referencePosition.value.setFromMatrixPosition(A.matrixWorld),f.nearDistance.value=A.shadow.camera.near,f.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function rm(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,T){let E=T.program;n.uniformBlockBinding(y,E)}function l(y,T){let E=s[y.id];E===void 0&&(f(y),E=d(y),s[y.id]=E,y.addEventListener("dispose",A));let I=T.program;n.updateUBOMapping(y,I);let x=e.render.frame;r[y.id]!==x&&(h(y),r[y.id]=x)}function d(y){let T=m();y.__bindingPointIndex=T;let E=i.createBuffer(),I=y.__size,x=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,I,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,E),E}function m(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return Ve("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){let T=s[y.id],E=y.uniforms,I=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let x=0,w=E.length;x<w;x++){let L=E[x];if(Array.isArray(L))for(let C=0,U=L.length;C<U;C++)p(L[C],x,C,I);else p(L,x,0,I)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(y,T,E,I){if(M(y,T,E,I)===!0){let x=y.__offset,w=y.value;if(Array.isArray(w)){let L=0;for(let C=0;C<w.length;C++){let U=w[C],X=u(U);_(U,y.__data,L),typeof U!="number"&&typeof U!="boolean"&&!U.isMatrix3&&!ArrayBuffer.isView(U)&&(L+=X.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(w,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,y.__data)}}function _(y,T,E){typeof y=="number"||typeof y=="boolean"?T[0]=y:y.isMatrix3?(T[0]=y.elements[0],T[1]=y.elements[1],T[2]=y.elements[2],T[3]=0,T[4]=y.elements[3],T[5]=y.elements[4],T[6]=y.elements[5],T[7]=0,T[8]=y.elements[6],T[9]=y.elements[7],T[10]=y.elements[8],T[11]=0):ArrayBuffer.isView(y)?T.set(new y.constructor(y.buffer,y.byteOffset,T.length)):y.toArray(T,E)}function M(y,T,E,I){let x=y.value,w=T+"_"+E;if(I[w]===void 0)return typeof x=="number"||typeof x=="boolean"?I[w]=x:ArrayBuffer.isView(x)?I[w]=x.slice():I[w]=x.clone(),!0;{let L=I[w];if(typeof x=="number"||typeof x=="boolean"){if(L!==x)return I[w]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(L.equals(x)===!1)return L.copy(x),!0}}return!1}function f(y){let T=y.uniforms,E=0,I=16;for(let w=0,L=T.length;w<L;w++){let C=Array.isArray(T[w])?T[w]:[T[w]];for(let U=0,X=C.length;U<X;U++){let te=C[U],O=Array.isArray(te.value)?te.value:[te.value];for(let J=0,H=O.length;J<H;J++){let ee=O[J],ie=u(ee),ue=E%I,_e=ue%ie.boundary,ce=ue+_e;E+=_e,ce!==0&&I-ce<ie.storage&&(E+=I-ce),te.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),te.__offset=E,E+=ie.storage}}}let x=E%I;return x>0&&(E+=I-x),y.__size=E,y.__cache={},this}function u(y){let T={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(T.boundary=4,T.storage=4):y.isVector2?(T.boundary=8,T.storage=8):y.isVector3||y.isColor?(T.boundary=16,T.storage=12):y.isVector4?(T.boundary=16,T.storage=16):y.isMatrix3?(T.boundary=48,T.storage=48):y.isMatrix4?(T.boundary=64,T.storage=64):y.isTexture?Be("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(T.boundary=16,T.storage=y.byteLength):Be("WebGLRenderer: Unsupported uniform value type.",y),T}function A(y){let T=y.target;T.removeEventListener("dispose",A);let E=a.indexOf(T.__bindingPointIndex);a.splice(E,1),i.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function R(){for(let y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:c,update:l,dispose:R}}var am=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Cn=null;function om(){return Cn===null&&(Cn=new gr(am,16,16,ri,wn),Cn.name="DFG_LUT",Cn.minFilter=Ut,Cn.magFilter=Ut,Cn.wrapS=Mn,Cn.wrapT=Mn,Cn.generateMipmaps=!1,Cn.needsUpdate=!0),Cn}var Yi=class{constructor(e={}){let{canvas:t=Ql(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:h=!1,outputBufferType:p=sn}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=a;let M=p,f=new Set([Hr,Gr,kr]),u=new Set([sn,gn,Hi,Wi,zr,Vr]),A=new Uint32Array(4),R=new Int32Array(4),y=new V,T=null,E=null,I=[],x=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=mn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let L=this,C=!1,U=null,X=null,te=null,O=null;this._outputColorSpace=Kt;let J=0,H=0,ee=null,ie=-1,ue=null,_e=new yt,ce=new yt,Fe=null,Ze=new st(0),ze=0,q=t.width,oe=t.height,re=1,De=null,we=null,Se=new yt(0,0,q,oe),ot=new yt(0,0,q,oe),Ue=!1,Qe=new us,He=!1,qe=!1,Je=new bt,gt=new V,vt=new yt,ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ke=!1;function Oe(){return ee===null?re:1}let D=n;function Mt(v,F){return t.getContext(v,F)}try{let v={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:d,failIfMajorPerformanceCaveat:m};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"185"}`),t.addEventListener("webglcontextlost",_t,!1),t.addEventListener("webglcontextrestored",ht,!1),t.addEventListener("webglcontextcreationerror",Y,!1),D===null){let F="webgl2";if(D=Mt(F,v),D===null)throw Mt(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(v){throw Ve("WebGLRenderer: "+v.message),v}let rt,S,g,N,B,K,he,pe,Q,ne,b,G,Z,$,le,de,Te,P,ae,j,me,xe,se;function Re(){rt=new pf(D),rt.init(),me=new em(D,rt),S=new af(D,rt,e,me),g=new Qp(D,rt),S.reversedDepthBuffer&&h&&g.buffers.depth.setReversed(!0),X=D.createFramebuffer(),te=D.createFramebuffer(),O=D.createFramebuffer(),N=new _f(D),B=new Bp,K=new jp(D,rt,g,B,S,me,N),he=new ff(L),pe=new yh(D),xe=new sf(D,pe),Q=new mf(D,pe,N,xe),ne=new vf(D,Q,pe,xe,N),P=new xf(D,S,K),le=new of(B),b=new Op(L,he,rt,S,xe,le),G=new sm(L,B),Z=new Vp,$=new qp(rt),Te=new nf(L,he,g,ne,_,c),de=new Kp(L,ne,S),se=new rm(D,N,S,g),ae=new rf(D,rt,N),j=new gf(D,rt,N),N.programs=b.programs,L.capabilities=S,L.extensions=rt,L.properties=B,L.renderLists=Z,L.shadowMap=de,L.state=g,L.info=N}Re(),M!==sn&&(w=new Mf(M,t.width,t.height,o,s,r));let be=new Qo(L,D);this.xr=be,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let v=rt.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=rt.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return re},this.setPixelRatio=function(v){v!==void 0&&(re=v,this.setSize(q,oe,!1))},this.getSize=function(v){return v.set(q,oe)},this.setSize=function(v,F,W=!0){if(be.isPresenting){Be("WebGLRenderer: Can't change size while VR device is presenting.");return}q=v,oe=F,t.width=Math.floor(v*re),t.height=Math.floor(F*re),W===!0&&(t.style.width=v+"px",t.style.height=F+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,v,F)},this.getDrawingBufferSize=function(v){return v.set(q*re,oe*re).floor()},this.setDrawingBufferSize=function(v,F,W){q=v,oe=F,re=W,t.width=Math.floor(v*W),t.height=Math.floor(F*W),this.setViewport(0,0,v,F)},this.setEffects=function(v){if(M===sn){Ve("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let F=0;F<v.length;F++)if(v[F].isOutputPass===!0){Be("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(_e)},this.getViewport=function(v){return v.copy(Se)},this.setViewport=function(v,F,W,z){v.isVector4?Se.set(v.x,v.y,v.z,v.w):Se.set(v,F,W,z),g.viewport(_e.copy(Se).multiplyScalar(re).round())},this.getScissor=function(v){return v.copy(ot)},this.setScissor=function(v,F,W,z){v.isVector4?ot.set(v.x,v.y,v.z,v.w):ot.set(v,F,W,z),g.scissor(ce.copy(ot).multiplyScalar(re).round())},this.getScissorTest=function(){return Ue},this.setScissorTest=function(v){g.setScissorTest(Ue=v)},this.setOpaqueSort=function(v){De=v},this.setTransparentSort=function(v){we=v},this.getClearColor=function(v){return v.copy(Te.getClearColor())},this.setClearColor=function(){Te.setClearColor(...arguments)},this.getClearAlpha=function(){return Te.getClearAlpha()},this.setClearAlpha=function(){Te.setClearAlpha(...arguments)},this.clear=function(v=!0,F=!0,W=!0){let z=0;if(v){let k=!1;if(ee!==null){let Me=ee.texture.format;k=f.has(Me)}if(k){let Me=ee.texture.type,Ee=u.has(Me),ye=Te.getClearColor(),Pe=Te.getClearAlpha(),Le=ye.r,Xe=ye.g,$e=ye.b;Ee?(A[0]=Le,A[1]=Xe,A[2]=$e,A[3]=Pe,D.clearBufferuiv(D.COLOR,0,A)):(R[0]=Le,R[1]=Xe,R[2]=$e,R[3]=Pe,D.clearBufferiv(D.COLOR,0,R))}else z|=D.COLOR_BUFFER_BIT}F&&(z|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(z|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&D.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),U=v},this.dispose=function(){t.removeEventListener("webglcontextlost",_t,!1),t.removeEventListener("webglcontextrestored",ht,!1),t.removeEventListener("webglcontextcreationerror",Y,!1),Te.dispose(),Z.dispose(),$.dispose(),B.dispose(),he.dispose(),ne.dispose(),xe.dispose(),se.dispose(),b.dispose(),be.dispose(),be.removeEventListener("sessionstart",ke),be.removeEventListener("sessionend",je),nt.stop()};function _t(v){v.preventDefault(),Co("WebGLRenderer: Context Lost."),C=!0}function ht(){Co("WebGLRenderer: Context Restored."),C=!1;let v=N.autoReset,F=de.enabled,W=de.autoUpdate,z=de.needsUpdate,k=de.type;Re(),N.autoReset=v,de.enabled=F,de.autoUpdate=W,de.needsUpdate=z,de.type=k}function Y(v){Ve("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function fe(v){let F=v.target;F.removeEventListener("dispose",fe),Ce(F)}function Ce(v){ge(v),B.remove(v)}function ge(v){let F=B.get(v).programs;F!==void 0&&(F.forEach(function(W){b.releaseProgram(W)}),v.isShaderMaterial&&b.releaseShaderCache(v))}this.renderBufferDirect=function(v,F,W,z,k,Me){F===null&&(F=ut);let Ee=k.isMesh&&k.matrixWorld.determinantAffine()<0,ye=Oc(v,F,W,z,k);g.setMaterial(z,Ee);let Pe=W.index,Le=1;if(z.wireframe===!0){if(Pe=Q.getWireframeAttribute(W),Pe===void 0)return;Le=2}let Xe=W.drawRange,$e=W.attributes.position,Ne=Xe.start*Le,dt=(Xe.start+Xe.count)*Le;Me!==null&&(Ne=Math.max(Ne,Me.start*Le),dt=Math.min(dt,(Me.start+Me.count)*Le)),Pe!==null?(Ne=Math.max(Ne,0),dt=Math.min(dt,Pe.count)):$e!=null&&(Ne=Math.max(Ne,0),dt=Math.min(dt,$e.count));let At=dt-Ne;if(At<0||At===1/0)return;xe.setup(k,z,ye,W,Pe);let St,ft=ae;if(Pe!==null&&(St=pe.get(Pe),ft=j,ft.setIndex(St)),k.isMesh)z.wireframe===!0?(g.setLineWidth(z.wireframeLinewidth*Oe()),ft.setMode(D.LINES)):ft.setMode(D.TRIANGLES);else if(k.isLine){let Ot=z.linewidth;Ot===void 0&&(Ot=1),g.setLineWidth(Ot*Oe()),k.isLineSegments?ft.setMode(D.LINES):k.isLineLoop?ft.setMode(D.LINE_LOOP):ft.setMode(D.LINE_STRIP)}else k.isPoints?ft.setMode(D.POINTS):k.isSprite&&ft.setMode(D.TRIANGLES);if(k.isBatchedMesh)if(rt.get("WEBGL_multi_draw"))ft.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let Ot=k._multiDrawStarts,Ae=k._multiDrawCounts,Zt=k._multiDrawCount,at=Pe?pe.get(Pe).bytesPerElement:1,an=B.get(z).currentProgram.getUniforms();for(let xn=0;xn<Zt;xn++)an.setValue(D,"_gl_DrawID",xn),ft.render(Ot[xn]/at,Ae[xn])}else if(k.isInstancedMesh)ft.renderInstances(Ne,At,k.count);else if(W.isInstancedBufferGeometry){let Ot=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Ae=Math.min(W.instanceCount,Ot);ft.renderInstances(Ne,At,Ae)}else ft.render(Ne,At)};function Ie(v,F,W){v.transparent===!0&&v.side===An&&v.forceSinglePass===!1?(v.side=Ht,v.needsUpdate=!0,Wt(v,F,W),v.side=Fn,v.needsUpdate=!0,Wt(v,F,W),v.side=An):Wt(v,F,W)}this.compile=function(v,F,W=null){W===null&&(W=v),E=$.get(W),E.init(F),x.push(E),W.traverseVisible(function(k){k.isLight&&k.layers.test(F.layers)&&(E.pushLight(k),k.castShadow&&E.pushShadow(k))}),v!==W&&v.traverseVisible(function(k){k.isLight&&k.layers.test(F.layers)&&(E.pushLight(k),k.castShadow&&E.pushShadow(k))}),E.setupLights();let z=new Set;return v.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let Me=k.material;if(Me)if(Array.isArray(Me))for(let Ee=0;Ee<Me.length;Ee++){let ye=Me[Ee];Ie(ye,W,k),z.add(ye)}else Ie(Me,W,k),z.add(Me)}),E=x.pop(),z},this.compileAsync=function(v,F,W=null){let z=this.compile(v,F,W);return new Promise(k=>{function Me(){if(z.forEach(function(Ee){B.get(Ee).currentProgram.isReady()&&z.delete(Ee)}),z.size===0){k(v);return}setTimeout(Me,10)}rt.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let lt=null;function We(v){lt&&lt(v)}function ke(){nt.stop()}function je(){nt.start()}let nt=new wc;nt.setAnimationLoop(We),typeof self<"u"&&nt.setContext(self),this.setAnimationLoop=function(v){lt=v,be.setAnimationLoop(v),v===null?nt.stop():nt.start()},be.addEventListener("sessionstart",ke),be.addEventListener("sessionend",je),this.render=function(v,F){if(F!==void 0&&F.isCamera!==!0){Ve("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;U!==null&&U.renderStart(v,F);let W=be.enabled===!0&&be.isPresenting===!0,z=w!==null&&(ee===null||W)&&w.begin(L,ee);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),be.enabled===!0&&be.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(be.cameraAutoUpdate===!0&&be.updateCamera(F),F=be.getCamera()),v.isScene===!0&&v.onBeforeRender(L,v,F,ee),E=$.get(v,x.length),E.init(F),E.state.textureUnits=K.getTextureUnits(),x.push(E),Je.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Qe.setFromProjectionMatrix(Je,pn,F.reversedDepth),qe=this.localClippingEnabled,He=le.init(this.clippingPlanes,qe),T=Z.get(v,I.length),T.init(),I.push(T),be.enabled===!0&&be.isPresenting===!0){let Ee=L.xr.getDepthSensingMesh();Ee!==null&&Nt(Ee,F,-1/0,L.sortObjects)}Nt(v,F,0,L.sortObjects),T.finish(),L.sortObjects===!0&&T.sort(De,we,F.reversedDepth),Ke=be.enabled===!1||be.isPresenting===!1||be.hasDepthSensing()===!1,Ke&&Te.addToRenderList(T,v),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),He===!0&&le.beginShadows();let k=E.state.shadowsArray;if(de.render(k,v,F),He===!0&&le.endShadows(),(z&&w.hasRenderPass())===!1){let Ee=T.opaque,ye=T.transmissive;if(E.setupLights(),F.isArrayCamera){let Pe=F.cameras;if(ye.length>0)for(let Le=0,Xe=Pe.length;Le<Xe;Le++){let $e=Pe[Le];Tt(Ee,ye,v,$e)}Ke&&Te.render(v);for(let Le=0,Xe=Pe.length;Le<Xe;Le++){let $e=Pe[Le];Gt(T,v,$e,$e.viewport)}}else ye.length>0&&Tt(Ee,ye,v,F),Ke&&Te.render(v),Gt(T,v,F)}ee!==null&&H===0&&(K.updateMultisampleRenderTarget(ee),K.updateRenderTargetMipmap(ee)),z&&w.end(L),v.isScene===!0&&v.onAfterRender(L,v,F),xe.resetDefaultState(),ie=-1,ue=null,x.pop(),x.length>0?(E=x[x.length-1],K.setTextureUnits(E.state.textureUnits),He===!0&&le.setGlobalState(L.clippingPlanes,E.state.camera)):E=null,I.pop(),I.length>0?T=I[I.length-1]:T=null,U!==null&&U.renderEnd()};function Nt(v,F,W,z){if(v.visible===!1)return;if(v.layers.test(F.layers)){if(v.isGroup)W=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(F);else if(v.isLightProbeGrid)E.pushLightProbeGrid(v);else if(v.isLight)E.pushLight(v),v.castShadow&&E.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||Qe.intersectsSprite(v)){z&&vt.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Je);let Ee=ne.update(v),ye=v.material;ye.visible&&T.push(v,Ee,ye,W,vt.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||Qe.intersectsObject(v))){let Ee=ne.update(v),ye=v.material;if(z&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),vt.copy(v.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),vt.copy(Ee.boundingSphere.center)),vt.applyMatrix4(v.matrixWorld).applyMatrix4(Je)),Array.isArray(ye)){let Pe=Ee.groups;for(let Le=0,Xe=Pe.length;Le<Xe;Le++){let $e=Pe[Le],Ne=ye[$e.materialIndex];Ne&&Ne.visible&&T.push(v,Ee,Ne,W,vt.z,$e)}}else ye.visible&&T.push(v,Ee,ye,W,vt.z,null)}}let Me=v.children;for(let Ee=0,ye=Me.length;Ee<ye;Ee++)Nt(Me[Ee],F,W,z)}function Gt(v,F,W,z){let{opaque:k,transmissive:Me,transparent:Ee}=v;E.setupLightsView(W),He===!0&&le.setGlobalState(L.clippingPlanes,W),z&&g.viewport(_e.copy(z)),k.length>0&&cn(k,F,W),Me.length>0&&cn(Me,F,W),Ee.length>0&&cn(Ee,F,W),g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),g.setPolygonOffset(!1)}function Tt(v,F,W,z){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[z.id]===void 0){let Ne=rt.has("EXT_color_buffer_half_float")||rt.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[z.id]=new jt(1,1,{generateMipmaps:!0,type:Ne?wn:sn,minFilter:ii,samples:Math.max(4,S.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace})}let Me=E.state.transmissionRenderTarget[z.id],Ee=z.viewport||_e;Me.setSize(Ee.z*L.transmissionResolutionScale,Ee.w*L.transmissionResolutionScale);let ye=L.getRenderTarget(),Pe=L.getActiveCubeFace(),Le=L.getActiveMipmapLevel();L.setRenderTarget(Me),L.getClearColor(Ze),ze=L.getClearAlpha(),ze<1&&L.setClearColor(16777215,.5),L.clear(),Ke&&Te.render(W);let Xe=L.toneMapping;L.toneMapping=mn;let $e=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),E.setupLightsView(z),He===!0&&le.setGlobalState(L.clippingPlanes,z),cn(v,W,z),K.updateMultisampleRenderTarget(Me),K.updateRenderTargetMipmap(Me),rt.has("WEBGL_multisampled_render_to_texture")===!1){let Ne=!1;for(let dt=0,At=F.length;dt<At;dt++){let St=F[dt],{object:ft,geometry:Ot,material:Ae,group:Zt}=St;if(Ae.side===An&&ft.layers.test(z.layers)){let at=Ae.side;Ae.side=Ht,Ae.needsUpdate=!0,rn(ft,W,z,Ot,Ae,Zt),Ae.side=at,Ae.needsUpdate=!0,Ne=!0}}Ne===!0&&(K.updateMultisampleRenderTarget(Me),K.updateRenderTargetMipmap(Me))}L.setRenderTarget(ye,Pe,Le),L.setClearColor(Ze,ze),$e!==void 0&&(z.viewport=$e),L.toneMapping=Xe}function cn(v,F,W){let z=F.isScene===!0?F.overrideMaterial:null;for(let k=0,Me=v.length;k<Me;k++){let Ee=v[k],{object:ye,geometry:Pe,group:Le}=Ee,Xe=Ee.material;Xe.allowOverride===!0&&z!==null&&(Xe=z),ye.layers.test(W.layers)&&rn(ye,F,W,Pe,Xe,Le)}}function rn(v,F,W,z,k,Me){v.onBeforeRender(L,F,W,z,k,Me),v.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),k.onBeforeRender(L,F,W,z,v,Me),k.transparent===!0&&k.side===An&&k.forceSinglePass===!1?(k.side=Ht,k.needsUpdate=!0,L.renderBufferDirect(W,F,z,k,v,Me),k.side=Fn,k.needsUpdate=!0,L.renderBufferDirect(W,F,z,k,v,Me),k.side=An):L.renderBufferDirect(W,F,z,k,v,Me),v.onAfterRender(L,F,W,z,k,Me)}function Wt(v,F,W){F.isScene!==!0&&(F=ut);let z=B.get(v),k=E.state.lights,Me=E.state.shadowsArray,Ee=k.state.version,ye=b.getParameters(v,k.state,Me,F,W,E.state.lightProbeGridArray),Pe=b.getProgramCacheKey(ye),Le=z.programs;z.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?F.environment:null,z.fog=F.fog;let Xe=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;z.envMap=he.get(v.envMap||z.environment,Xe),z.envMapRotation=z.environment!==null&&v.envMap===null?F.environmentRotation:v.envMapRotation,Le===void 0&&(v.addEventListener("dispose",fe),Le=new Map,z.programs=Le);let $e=Le.get(Pe);if($e!==void 0){if(z.currentProgram===$e&&z.lightsStateVersion===Ee)return hn(v,ye),$e}else ye.uniforms=b.getUniforms(v),U!==null&&v.isNodeMaterial&&U.build(v,W,ye),v.onBeforeCompile(ye,L),$e=b.acquireProgram(ye,Pe),Le.set(Pe,$e),z.uniforms=ye.uniforms;let Ne=z.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Ne.clippingPlanes=le.uniform),hn(v,ye),z.needsLights=zc(v),z.lightsStateVersion=Ee,z.needsLights&&(Ne.ambientLightColor.value=k.state.ambient,Ne.lightProbe.value=k.state.probe,Ne.directionalLights.value=k.state.directional,Ne.directionalLightShadows.value=k.state.directionalShadow,Ne.spotLights.value=k.state.spot,Ne.spotLightShadows.value=k.state.spotShadow,Ne.rectAreaLights.value=k.state.rectArea,Ne.ltc_1.value=k.state.rectAreaLTC1,Ne.ltc_2.value=k.state.rectAreaLTC2,Ne.pointLights.value=k.state.point,Ne.pointLightShadows.value=k.state.pointShadow,Ne.hemisphereLights.value=k.state.hemi,Ne.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Ne.spotLightMatrix.value=k.state.spotLightMatrix,Ne.spotLightMap.value=k.state.spotLightMap,Ne.pointShadowMatrix.value=k.state.pointShadowMatrix),z.lightProbeGrid=E.state.lightProbeGridArray.length>0,z.currentProgram=$e,z.uniformsList=null,$e}function Pt(v){if(v.uniformsList===null){let F=v.currentProgram.getUniforms();v.uniformsList=qi.seqWithValue(F.seq,v.uniforms)}return v.uniformsList}function hn(v,F){let W=B.get(v);W.outputColorSpace=F.outputColorSpace,W.batching=F.batching,W.batchingColor=F.batchingColor,W.instancing=F.instancing,W.instancingColor=F.instancingColor,W.instancingMorph=F.instancingMorph,W.skinning=F.skinning,W.morphTargets=F.morphTargets,W.morphNormals=F.morphNormals,W.morphColors=F.morphColors,W.morphTargetsCount=F.morphTargetsCount,W.numClippingPlanes=F.numClippingPlanes,W.numIntersection=F.numClipIntersection,W.vertexAlphas=F.vertexAlphas,W.vertexTangents=F.vertexTangents,W.toneMapping=F.toneMapping}function Fc(v,F){if(v.length===0)return null;if(v.length===1)return v[0].texture!==null?v[0]:null;y.setFromMatrixPosition(F.matrixWorld);for(let W=0,z=v.length;W<z;W++){let k=v[W];if(k.texture!==null&&k.boundingBox.containsPoint(y))return k}return null}function Oc(v,F,W,z,k){F.isScene!==!0&&(F=ut),K.resetTextureUnits();let Me=F.fog,Ee=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?F.environment:null,ye=ee===null?L.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:et.workingColorSpace,Pe=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,Le=he.get(z.envMap||Ee,Pe),Xe=z.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,$e=!!W.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Ne=!!W.morphAttributes.position,dt=!!W.morphAttributes.normal,At=!!W.morphAttributes.color,St=mn;z.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(St=L.toneMapping);let ft=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Ot=ft!==void 0?ft.length:0,Ae=B.get(z),Zt=E.state.lights;if(He===!0&&(qe===!0||v!==ue)){let mt=v===ue&&z.id===ie;le.setState(z,v,mt)}let at=!1;z.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==Zt.state.version||Ae.outputColorSpace!==ye||k.isBatchedMesh&&Ae.batching===!1||!k.isBatchedMesh&&Ae.batching===!0||k.isBatchedMesh&&Ae.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Ae.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Ae.instancing===!1||!k.isInstancedMesh&&Ae.instancing===!0||k.isSkinnedMesh&&Ae.skinning===!1||!k.isSkinnedMesh&&Ae.skinning===!0||k.isInstancedMesh&&Ae.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Ae.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Ae.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Ae.instancingMorph===!1&&k.morphTexture!==null||Ae.envMap!==Le||z.fog===!0&&Ae.fog!==Me||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==le.numPlanes||Ae.numIntersection!==le.numIntersection)||Ae.vertexAlphas!==Xe||Ae.vertexTangents!==$e||Ae.morphTargets!==Ne||Ae.morphNormals!==dt||Ae.morphColors!==At||Ae.toneMapping!==St||Ae.morphTargetsCount!==Ot||!!Ae.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(at=!0):(at=!0,Ae.__version=z.version);let an=Ae.currentProgram;at===!0&&(an=Wt(z,F,k),U&&z.isNodeMaterial&&U.onUpdateProgram(z,an,Ae));let xn=!1,zn=!1,bi=!1,pt=an.getUniforms(),Et=Ae.uniforms;if(g.useProgram(an.program)&&(xn=!0,zn=!0,bi=!0),z.id!==ie&&(ie=z.id,zn=!0),Ae.needsLights){let mt=Fc(E.state.lightProbeGridArray,k);Ae.lightProbeGrid!==mt&&(Ae.lightProbeGrid=mt,zn=!0)}if(xn||ue!==v){g.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),pt.setValue(D,"projectionMatrix",v.projectionMatrix),pt.setValue(D,"viewMatrix",v.matrixWorldInverse);let kn=pt.map.cameraPosition;kn!==void 0&&kn.setValue(D,gt.setFromMatrixPosition(v.matrixWorld)),S.logarithmicDepthBuffer&&pt.setValue(D,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&pt.setValue(D,"isOrthographic",v.isOrthographicCamera===!0),ue!==v&&(ue=v,zn=!0,bi=!0)}if(Ae.needsLights&&(Zt.state.directionalShadowMap.length>0&&pt.setValue(D,"directionalShadowMap",Zt.state.directionalShadowMap,K),Zt.state.spotShadowMap.length>0&&pt.setValue(D,"spotShadowMap",Zt.state.spotShadowMap,K),Zt.state.pointShadowMap.length>0&&pt.setValue(D,"pointShadowMap",Zt.state.pointShadowMap,K)),k.isSkinnedMesh){pt.setOptional(D,k,"bindMatrix"),pt.setOptional(D,k,"bindMatrixInverse");let mt=k.skeleton;mt&&(mt.boneTexture===null&&mt.computeBoneTexture(),pt.setValue(D,"boneTexture",mt.boneTexture,K))}k.isBatchedMesh&&(pt.setOptional(D,k,"batchingTexture"),pt.setValue(D,"batchingTexture",k._matricesTexture,K),pt.setOptional(D,k,"batchingIdTexture"),pt.setValue(D,"batchingIdTexture",k._indirectTexture,K),pt.setOptional(D,k,"batchingColorTexture"),k._colorsTexture!==null&&pt.setValue(D,"batchingColorTexture",k._colorsTexture,K));let Vn=W.morphAttributes;if((Vn.position!==void 0||Vn.normal!==void 0||Vn.color!==void 0)&&P.update(k,W,an),(zn||Ae.receiveShadow!==k.receiveShadow)&&(Ae.receiveShadow=k.receiveShadow,pt.setValue(D,"receiveShadow",k.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&F.environment!==null&&(Et.envMapIntensity.value=F.environmentIntensity),Et.dfgLUT!==void 0&&(Et.dfgLUT.value=om()),zn){if(pt.setValue(D,"toneMappingExposure",L.toneMappingExposure),Ae.needsLights&&Bc(Et,bi),Me&&z.fog===!0&&G.refreshFogUniforms(Et,Me),G.refreshMaterialUniforms(Et,z,re,oe,E.state.transmissionRenderTarget[v.id]),Ae.needsLights&&Ae.lightProbeGrid){let mt=Ae.lightProbeGrid;Et.probesSH.value=mt.texture,Et.probesMin.value.copy(mt.boundingBox.min),Et.probesMax.value.copy(mt.boundingBox.max),Et.probesResolution.value.copy(mt.resolution)}qi.upload(D,Pt(Ae),Et,K)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(qi.upload(D,Pt(Ae),Et,K),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&pt.setValue(D,"center",k.center),pt.setValue(D,"modelViewMatrix",k.modelViewMatrix),pt.setValue(D,"normalMatrix",k.normalMatrix),pt.setValue(D,"modelMatrix",k.matrixWorld),z.uniformsGroups!==void 0){let mt=z.uniformsGroups;for(let kn=0,Ti=mt.length;kn<Ti;kn++){let jo=mt[kn];se.update(jo,an),se.bind(jo,an)}}return an}function Bc(v,F){v.ambientLightColor.needsUpdate=F,v.lightProbe.needsUpdate=F,v.directionalLights.needsUpdate=F,v.directionalLightShadows.needsUpdate=F,v.pointLights.needsUpdate=F,v.pointLightShadows.needsUpdate=F,v.spotLights.needsUpdate=F,v.spotLightShadows.needsUpdate=F,v.rectAreaLights.needsUpdate=F,v.hemisphereLights.needsUpdate=F}function zc(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return J},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return ee},this.setRenderTargetTextures=function(v,F,W){let z=B.get(v);z.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),B.get(v.texture).__webglTexture=F,B.get(v.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:W,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,F){let W=B.get(v);W.__webglFramebuffer=F,W.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(v,F=0,W=0){ee=v,J=F,H=W;let z=null,k=!1,Me=!1;if(v){let ye=B.get(v);if(ye.__useDefaultFramebuffer!==void 0){g.bindFramebuffer(D.FRAMEBUFFER,ye.__webglFramebuffer),_e.copy(v.viewport),ce.copy(v.scissor),Fe=v.scissorTest,g.viewport(_e),g.scissor(ce),g.setScissorTest(Fe),ie=-1;return}else if(ye.__webglFramebuffer===void 0)K.setupRenderTarget(v);else if(ye.__hasExternalTextures)K.rebindTextures(v,B.get(v.texture).__webglTexture,B.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let Xe=v.depthTexture;if(ye.__boundDepthTexture!==Xe){if(Xe!==null&&B.has(Xe)&&(v.width!==Xe.image.width||v.height!==Xe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(v)}}let Pe=v.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(Me=!0);let Le=B.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Le[F])?z=Le[F][W]:z=Le[F],k=!0):v.samples>0&&K.useMultisampledRTT(v)===!1?z=B.get(v).__webglMultisampledFramebuffer:Array.isArray(Le)?z=Le[W]:z=Le,_e.copy(v.viewport),ce.copy(v.scissor),Fe=v.scissorTest}else _e.copy(Se).multiplyScalar(re).floor(),ce.copy(ot).multiplyScalar(re).floor(),Fe=Ue;if(W!==0&&(z=X),g.bindFramebuffer(D.FRAMEBUFFER,z)&&g.drawBuffers(v,z),g.viewport(_e),g.scissor(ce),g.setScissorTest(Fe),k){let ye=B.get(v.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+F,ye.__webglTexture,W)}else if(Me){let ye=F;for(let Pe=0;Pe<v.textures.length;Pe++){let Le=B.get(v.textures[Pe]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Pe,Le.__webglTexture,W,ye)}}else if(v!==null&&W!==0){let ye=B.get(v.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ye.__webglTexture,W)}ie=-1},this.readRenderTargetPixels=function(v,F,W,z,k,Me,Ee,ye=0){if(!(v&&v.isWebGLRenderTarget)){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=B.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Ee!==void 0&&(Pe=Pe[Ee]),Pe){g.bindFramebuffer(D.FRAMEBUFFER,Pe);try{let Le=v.textures[ye],Xe=Le.format,$e=Le.type;if(v.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ye),!S.textureFormatReadable(Xe)){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!S.textureTypeReadable($e)){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=v.width-z&&W>=0&&W<=v.height-k&&D.readPixels(F,W,z,k,me.convert(Xe),me.convert($e),Me)}finally{let Le=ee!==null?B.get(ee).__webglFramebuffer:null;g.bindFramebuffer(D.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(v,F,W,z,k,Me,Ee,ye=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=B.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Ee!==void 0&&(Pe=Pe[Ee]),Pe)if(F>=0&&F<=v.width-z&&W>=0&&W<=v.height-k){g.bindFramebuffer(D.FRAMEBUFFER,Pe);let Le=v.textures[ye],Xe=Le.format,$e=Le.type;if(v.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ye),!S.textureFormatReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!S.textureTypeReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ne=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Ne),D.bufferData(D.PIXEL_PACK_BUFFER,Me.byteLength,D.STREAM_READ),D.readPixels(F,W,z,k,me.convert(Xe),me.convert($e),0);let dt=ee!==null?B.get(ee).__webglFramebuffer:null;g.bindFramebuffer(D.FRAMEBUFFER,dt);let At=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await ec(D,At,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Ne),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,Me),D.deleteBuffer(Ne),D.deleteSync(At),Me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,F=null,W=0){let z=Math.pow(2,-W),k=Math.floor(v.image.width*z),Me=Math.floor(v.image.height*z),Ee=F!==null?F.x:0,ye=F!==null?F.y:0;K.setTexture2D(v,0),D.copyTexSubImage2D(D.TEXTURE_2D,W,0,0,Ee,ye,k,Me),g.unbindTexture()},this.copyTextureToTexture=function(v,F,W=null,z=null,k=0,Me=0){let Ee,ye,Pe,Le,Xe,$e,Ne,dt,At,St=v.isCompressedTexture?v.mipmaps[Me]:v.image;if(W!==null)Ee=W.max.x-W.min.x,ye=W.max.y-W.min.y,Pe=W.isBox3?W.max.z-W.min.z:1,Le=W.min.x,Xe=W.min.y,$e=W.isBox3?W.min.z:0;else{let Et=Math.pow(2,-k);Ee=Math.floor(St.width*Et),ye=Math.floor(St.height*Et),v.isDataArrayTexture?Pe=St.depth:v.isData3DTexture?Pe=Math.floor(St.depth*Et):Pe=1,Le=0,Xe=0,$e=0}z!==null?(Ne=z.x,dt=z.y,At=z.z):(Ne=0,dt=0,At=0);let ft=me.convert(F.format),Ot=me.convert(F.type),Ae;F.isData3DTexture?(K.setTexture3D(F,0),Ae=D.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(K.setTexture2DArray(F,0),Ae=D.TEXTURE_2D_ARRAY):(K.setTexture2D(F,0),Ae=D.TEXTURE_2D),g.activeTexture(D.TEXTURE0),g.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,F.flipY),g.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),g.pixelStorei(D.UNPACK_ALIGNMENT,F.unpackAlignment);let Zt=g.getParameter(D.UNPACK_ROW_LENGTH),at=g.getParameter(D.UNPACK_IMAGE_HEIGHT),an=g.getParameter(D.UNPACK_SKIP_PIXELS),xn=g.getParameter(D.UNPACK_SKIP_ROWS),zn=g.getParameter(D.UNPACK_SKIP_IMAGES);g.pixelStorei(D.UNPACK_ROW_LENGTH,St.width),g.pixelStorei(D.UNPACK_IMAGE_HEIGHT,St.height),g.pixelStorei(D.UNPACK_SKIP_PIXELS,Le),g.pixelStorei(D.UNPACK_SKIP_ROWS,Xe),g.pixelStorei(D.UNPACK_SKIP_IMAGES,$e);let bi=v.isDataArrayTexture||v.isData3DTexture,pt=F.isDataArrayTexture||F.isData3DTexture;if(v.isDepthTexture){let Et=B.get(v),Vn=B.get(F),mt=B.get(Et.__renderTarget),kn=B.get(Vn.__renderTarget);g.bindFramebuffer(D.READ_FRAMEBUFFER,mt.__webglFramebuffer),g.bindFramebuffer(D.DRAW_FRAMEBUFFER,kn.__webglFramebuffer);for(let Ti=0;Ti<Pe;Ti++)bi&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,B.get(v).__webglTexture,k,$e+Ti),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,B.get(F).__webglTexture,Me,At+Ti)),D.blitFramebuffer(Le,Xe,Ee,ye,Ne,dt,Ee,ye,D.DEPTH_BUFFER_BIT,D.NEAREST);g.bindFramebuffer(D.READ_FRAMEBUFFER,null),g.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(k!==0||v.isRenderTargetTexture||B.has(v)){let Et=B.get(v),Vn=B.get(F);g.bindFramebuffer(D.READ_FRAMEBUFFER,te),g.bindFramebuffer(D.DRAW_FRAMEBUFFER,O);for(let mt=0;mt<Pe;mt++)bi?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Et.__webglTexture,k,$e+mt):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Et.__webglTexture,k),pt?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Vn.__webglTexture,Me,At+mt):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Vn.__webglTexture,Me),k!==0?D.blitFramebuffer(Le,Xe,Ee,ye,Ne,dt,Ee,ye,D.COLOR_BUFFER_BIT,D.NEAREST):pt?D.copyTexSubImage3D(Ae,Me,Ne,dt,At+mt,Le,Xe,Ee,ye):D.copyTexSubImage2D(Ae,Me,Ne,dt,Le,Xe,Ee,ye);g.bindFramebuffer(D.READ_FRAMEBUFFER,null),g.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else pt?v.isDataTexture||v.isData3DTexture?D.texSubImage3D(Ae,Me,Ne,dt,At,Ee,ye,Pe,ft,Ot,St.data):F.isCompressedArrayTexture?D.compressedTexSubImage3D(Ae,Me,Ne,dt,At,Ee,ye,Pe,ft,St.data):D.texSubImage3D(Ae,Me,Ne,dt,At,Ee,ye,Pe,ft,Ot,St):v.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,Me,Ne,dt,Ee,ye,ft,Ot,St.data):v.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,Me,Ne,dt,St.width,St.height,ft,St.data):D.texSubImage2D(D.TEXTURE_2D,Me,Ne,dt,Ee,ye,ft,Ot,St);g.pixelStorei(D.UNPACK_ROW_LENGTH,Zt),g.pixelStorei(D.UNPACK_IMAGE_HEIGHT,at),g.pixelStorei(D.UNPACK_SKIP_PIXELS,an),g.pixelStorei(D.UNPACK_SKIP_ROWS,xn),g.pixelStorei(D.UNPACK_SKIP_IMAGES,zn),Me===0&&F.generateMipmaps&&D.generateMipmap(Ae),g.unbindTexture()},this.initRenderTarget=function(v){B.get(v).__webglFramebuffer===void 0&&K.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?K.setTextureCube(v,0):v.isData3DTexture?K.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?K.setTexture2DArray(v,0):K.setTexture2D(v,0),g.unbindTexture()},this.resetState=function(){J=0,H=0,ee=null,g.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=et._getDrawingBufferColorSpace(e),t.unpackColorSpace=et._getUnpackColorSpace()}};var lm=`
precision highp float;
varying vec2 vUv;
uniform vec2 uSize;
uniform vec2 uLook;
uniform float uTime;
uniform float uGallery;
float hash(vec2 p) { return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453123); }
float noise(vec2 p) {
vec2 i=floor(p), f=fract(p); f=f*f*(3.-2.*f);
return mix(mix(hash(i),hash(i+vec2(1.,0.)),f.x),mix(hash(i+vec2(0.,1.)),hash(i+1.),f.x),f.y);
}
float fbm(vec2 p) {
float v=0., a=.5; mat2 m=mat2(.8,-.6,.6,.8);
for(int i=0;i<5;i++){ v+=a*noise(p); p=m*p*2.03+vec2(17.1,9.2); a*=.49; } return v;
}
float band(vec2 p) { return exp(-pow((p.y-.04*sin(p.x*2.4))/.19,2.)); }
vec3 starLayer(vec2 p, float grid, float depth, float t) {
vec2 q=(p+uLook*depth)*grid;
vec2 id=floor(q), f=fract(q)-.5; vec3 result=vec3(0.);
for(int y=-1;y<=1;y++)for(int x=-1;x<=1;x++) {
vec2 offset=vec2(float(x),float(y)), cell=id+offset;
float h=hash(cell+grid), choose=hash(cell+grid+42.);
vec2 point=vec2(hash(cell+91.),hash(cell+13.))-.5;
vec2 d=f-offset-point; float dist=length(d);
float ribbon=band((cell+.5)/grid-uLook*depth);
float visible=step(choose,.1+.47*ribbon);
float size=mix(.009,.033,pow(h,6.));
float light=exp(-dist*dist/(size*size));
float halo=exp(-dist*dist/(size*size*28.))*.065;
float bright=step(.987,h)*visible;
float ray=exp(-abs(d.x)*190.)*exp(-abs(d.y)*18.)+exp(-abs(d.y)*190.)*exp(-abs(d.x)*18.);
vec3 tint=mix(vec3(.55,.71,.91),vec3(1.,.84,.62),hash(cell+24.));
float twinkle=.87+.13*sin(t*.45+h*60.);
result+=tint*(light+halo+ray*bright*.22)*visible*twinkle*mix(.35,1.1,h);
} return result;
}
void main() {
float aspect=uSize.x/uSize.y;
vec2 screen=(vUv-.5)*vec2(aspect,1.);
// A diagonal galactic plane also stays recognizable on a portrait display.
float angle=-.34; mat2 rotation=mat2(cos(angle),-sin(angle),sin(angle),cos(angle));
vec2 p=rotation*(screen-vec2(.12,.02)+uLook*.12);
float cloud=fbm(p*3.5+vec2(4.7,9.1)+uTime*.0012);
float filament=fbm(p*14.+vec2(21.,3.)+cloud*2.);
float ribbon=band(p+vec2(0.,(cloud-.5)*.1));
float broad=exp(-pow(p.y/.36,2.));
float dust=fbm(p*8.+vec2(30.,16.)+vec2(cloud*2.,0.));
float fissure=smoothstep(.43,.67,dust)*smoothstep(.25,.65,filament);
float structure=mix(.22,1.35,smoothstep(.22,.76,cloud))*(1.-fissure*.86);
float heart=exp(-length((p-vec2(.24,0.))*vec2(.9,2.2))*3.);
vec3 cool=vec3(.095,.19,.27), warm=vec3(.43,.30,.19);
vec3 tint=mix(cool,warm,heart*.78);
vec3 color=vec3(.009,.014,.026);
color+=tint*structure*(ribbon*.88+broad*.23);
color+=vec3(.12,.16,.24)*pow(filament,2.)*broad*.35;
color+=vec3(.53,.44,.31)*heart*ribbon*structure*.17;
// Low-contrast unresolved stars make the ribbon continuous between bright stars.
float grain=pow(hash(floor((p+uLook*.12)*1500.)),19.);
color+=vec3(.46,.50,.58)*grain*ribbon*structure*.11;
color+=starLayer(p,290.,.045,uTime)*.62;
color+=starLayer(p,150.,.10,uTime)*.76;
color+=starLayer(p,73.,.22,uTime)*.9;
color+=starLayer(p,34.,.43,uTime)*.8;
float vignette=1.-smoothstep(.2,1.05,length(screen*vec2(.62,1.)))*.42;
color*=vignette*mix(1.,.64,uGallery);
color=1.-exp(-color*1.8);
gl_FragColor=vec4(color,1.);
}`;function Nc(i){let e,t,n,s=!1,r=0,a=new tt,o=new tt,c=0;try{t=document.createElement("canvas"),t.className="galaxy-sky",e=new Yi({canvas:t,antialias:!1,powerPreference:"low-power"});let h=new gi,p=new vi,_={uSize:{value:new tt},uLook:{value:a},uTime:{value:0},uGallery:{value:0}},M=new Ft({uniforms:_,depthTest:!1,depthWrite:!1,vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:lm}),f=new Yt(new xi(2,2),M);f.frustumCulled=!1,h.add(f),n=A=>{_.uTime.value=A/1e3,_.uGallery.value=c,e.render(h,p)},i.prepend(t),i.dataset.renderer="webgl",t.addEventListener("webglcontextlost",A=>{A.preventDefault(),e.dispose(),t.remove(),l(),d(),m(r,!0)});let u=e.setSize.bind(e);e.resizeSky=()=>{let A=Math.min(devicePixelRatio||1,innerWidth<=700?.9:1.15);e.setPixelRatio(A),u(innerWidth,innerHeight,!1),_.uSize.value.set(innerWidth,innerHeight)}}catch{t?.remove(),l()}function l(){s=!0,e=null,t=document.createElement("canvas"),t.className="galaxy-sky",i.prepend(t);let h=t.getContext("2d"),p=7259,_=()=>(p=p*1664525+1013904223>>>0,p/4294967296),M=Array.from({length:6e3},()=>{let f=_()<.82,u=_(),A=f?.5+(u-.5)*.48+(_()+_()+_()-1.5)*.095:_();return{x:u,y:A,r:.18+_()*.8,a:.12+_()*.62}});n=()=>{if(!h)return;let f=t.width,u=t.height;h.clearRect(0,0,f,u),h.fillStyle="#040810",h.fillRect(0,0,f,u),h.save(),h.translate(f*.54,u*.49),h.rotate(.34),h.scale(1,.22);let A=h.createRadialGradient(0,0,0,0,0,f*.65);A.addColorStop(0,"#53606b"),A.addColorStop(.25,"#283b51"),A.addColorStop(.7,"#101a30"),A.addColorStop(1,"#040810"),h.fillStyle=A,h.fillRect(-f,-u,f*2,u*2),h.restore();for(let R of M)h.fillStyle=`rgba(209,220,236,${R.a*(c?.6:1)})`,h.beginPath(),h.arc(R.x*f+a.x*12,R.y*u+a.y*6,R.r,0,Math.PI*2),h.fill()},i.dataset.renderer="canvas"}function d(){e?e.resizeSky():(t.width=innerWidth,t.height=innerHeight),m(r,!0)}function m(h,p=!1){if(!p&&s&&Math.abs(a.x-o.x)+Math.abs(a.y-o.y)<.001)return;let _=Math.min(100,Math.max(0,h-r));r=h;let M=p?1:1-Math.exp(-_/230);a.lerp(o,M),n(h)}return d(),{draw:m,resize:d,look(h,p){o.set(Math.max(-1,Math.min(1,h)),Math.max(-1,Math.min(1,p)))},setGallery(h){c=h?1:0,m(r,!0)},get fallback(){return s}}}function Uc({viewport:i,world:e,host:t,makePhoto:n,enqueue:s,onChapter:r,onGesture:a,sky:o}){let c=Y=>document.querySelector(Y),l=matchMedia("(prefers-reduced-motion: reduce)"),d=()=>innerWidth<=700,m=(Y,fe,Ce)=>Math.max(fe,Math.min(Ce,Y)),h=(Y=0,fe=0,Ce=0)=>new V(Y,fe,Ce),p=new Vt(48,1,1,3e4),_=new gi,M=null,f=null,u,A=null,R=null,y=null,T=[],E=[],I=[],x=[],w=[],L=[],C="universe",U=null,X=null,te=!1,O=!1,J=600,H=1,ee=1,ie=4200,ue=1500,_e=900,ce=.16,Fe=.48,Ze=ce,ze=Fe,q=4200,oe=q,re=0,De=0,we=0,Se=0,ot=0,Ue=!0,Qe=0,He=h(),qe=h(),Je=h(),gt=h(),vt=h(),ut=h(),Ke=new Map,Oe=null,D=0,Mt=c("#space-breadcrumb"),rt=c("#space-level"),S=`attribute float pointSize;attribute float opacity;attribute vec3 tint;attribute float parentIndex;attribute float childIndex;uniform float uParent;uniform float uChild;uniform float uFocus;uniform float uDepth;varying vec3 vTint;varying float vOpacity;uniform float uRatio;uniform float uHeight;uniform float uTime;
void main(){vec4 p=modelViewMatrix*vec4(position,1.);gl_Position=projectionMatrix*p;gl_PointSize=clamp(pointSize*uHeight*uRatio/max(1.,-p.z),1.,100.);vTint=tint;float parentFade=abs(parentIndex-uParent)<.1?1.:.035;float childFade=abs(childIndex-uChild)<.1?1.:.12;vOpacity=opacity*mix(1.,parentFade,uFocus)*mix(1.,childFade,uDepth)*(.92+.08*sin(uTime*.6+position.x));}`,g="precision highp float;varying vec3 vTint;varying float vOpacity;void main(){vec2 p=gl_PointCoord-.5;float r=dot(p,p);if(r>.25)discard;float texture=.70+.30*sin(p.x*24.+sin(p.y*19.)*2.)*sin(p.y*27.+p.x*9.);float glow=exp(-r*18.)*texture;gl_FragColor=vec4(vTint,glow*vOpacity);}";function N(){u=document.createElement("canvas"),u.className="nebula-particles",u.setAttribute("aria-hidden","true"),i.prepend(u);try{M=new Yi({canvas:u,alpha:!0,antialias:!1,powerPreference:"high-performance"}),M.setClearColor(0,0),R=new Ft({vertexShader:S,fragmentShader:g,uniforms:{uRatio:{value:1},uHeight:{value:1},uTime:{value:0},uParent:{value:-1},uChild:{value:-1},uFocus:{value:0},uDepth:{value:0}},transparent:!0,depthWrite:!1,depthTest:!1,blending:xs}),t.dataset.nebulaRenderer="webgl",u.addEventListener("webglcontextlost",Y=>{Y.preventDefault(),M.dispose(),M=null,u.remove(),B(),j()})}catch{u.remove(),B()}}function B(){u=document.createElement("canvas"),u.className="nebula-particles",u.setAttribute("aria-hidden","true"),i.prepend(u),f=u.getContext("2d"),t.dataset.nebulaRenderer="canvas"}function K(Y){let fe=Y;return()=>(fe=fe*1664525+1013904223>>>0,fe/4294967296)}function he(Y,fe,Ce,ge,Ie=0,lt=-1,We=-1){let ke=K(ge);for(let je=0;je<Ce;je++){let nt=Math.pow(ke(),.67)*fe,Nt=je%3,Gt=Nt*Math.PI*2/3+nt/fe*4.8+(ke()-.5)*.85,Tt=(ke()+ke()-1)*fe*.12,cn=h(Y.x+Math.cos(Gt)*nt+Tt,Y.y+(ke()+ke()-1)*fe*.12,Y.z+Math.sin(Gt)*nt*.72+Tt),rn=je%5===0,Wt=ke();L.push({p:cn,size:rn?fe*(.6+ke()*.75):8+ke()*12,alpha:rn?.045:.48+ke()*.5,color:Ie&&Wt>.5?[.72,.58,.42]:[.4+Wt*.3,.58+Wt*.2,.8+Wt*.16],dust:rn,parent:lt,child:We})}}function pe(){if(y&&(_.remove(y),A.dispose(),y=null),!L.length||!M)return;let Y=[],fe=[],Ce=[],ge=[],Ie=[],lt=[];for(let We of L)Y.push(We.p.x,We.p.y,We.p.z),fe.push(We.size),Ce.push(We.alpha),ge.push(...We.color),Ie.push(We.parent),lt.push(We.child);A=new tn,A.setAttribute("position",new Ct(Y,3)),A.setAttribute("pointSize",new Ct(fe,1)),A.setAttribute("opacity",new Ct(Ce,1)),A.setAttribute("tint",new Ct(ge,3)),A.setAttribute("parentIndex",new Ct(Ie,1)),A.setAttribute("childIndex",new Ct(lt,1)),y=new ds(A,R),y.frustumCulled=!1,_.add(y)}function Q(Y,fe,Ce,ge,Ie,lt){let We=document.createElement("button");We.type="button",We.className=`nebula-label nebula-${Ie}`;let ke=document.createElement("strong"),je=document.createElement("span");return ke.textContent=Y,je.textContent=fe,We.append(ke,je),We.setAttribute("aria-label",`${Y}\uFF0C${fe}\uFF0C\u70B9\u51FB\u8FDB\u5165`),We.addEventListener("click",()=>{performance.now()-ot<180||Oe?.moved||ge()}),We.addEventListener("pointerenter",()=>{O=!0,we=Se=0,clearTimeout(D)}),We.addEventListener("pointerleave",()=>{clearTimeout(D),D=setTimeout(()=>O=!1,180)}),e.append(We),I.push({node:We,p:Ce,type:Ie,owner:lt}),We}function ne(Y){ht(),E=Y;let fe=new Map;for(let[ge,Ie]of E.entries()){Ie.orbitIndex=ge;let lt=Ie.placeId||Ie.label;fe.has(lt)||fe.set(lt,{id:lt,label:Ie.label,chapters:[],items:[],p:h(),radius:0});let We=fe.get(lt);We.chapters.push(Ie),We.items.push(...Ie.items),Ie.parent=We}T=[...fe.values()].sort((ge,Ie)=>Ie.items.length-ge.items.length);let Ce=600;T.forEach((ge,Ie)=>{ge.orbitId=Ie;let lt=Ie*2.39996323-.6,We=T.length===1?0:450+Math.sqrt(Ie)*620;ge.p.set(Math.cos(lt)*We,Math.sin(Ie*1.7)*110,Math.sin(lt)*We*.74),ge.radius=220+Math.sqrt(ge.chapters.length)*105,Ce=Math.max(Ce,ge.p.length()+ge.radius+180),he(ge.p,ge.radius*1.08,d()?420:680,100+Ie*7,Ie%3===0,Ie,-1),Q(ge.label,`${ge.chapters.length} \u4E2A\u65F6\u95F4\u661F\u4E91 \xB7 ${ge.items.length} \u5F20`,ge.p.clone(),()=>de(ge),"place",ge),ge.chapters.forEach((ke,je)=>{let nt=je*2.39996323+.4,Nt=ge.chapters.length===1?0:95+Math.sqrt(je)*115;ke.p=ge.p.clone().add(h(Math.cos(nt)*Nt,Math.sin(je*2.1)*65,Math.sin(nt)*Nt*.75)),ke.radius=135+Math.sqrt(ke.items.length)*40,he(ke.p,ke.radius,d()?110:180,700+ke.orbitIndex*17,ke.orbitIndex%4===0,Ie,ke.orbitIndex),Q(ke.date,`${ke.items.length} \u5F20${ke.captured?"":" \xB7 \u6587\u4EF6\u65E5\u671F"}`,ke.p.clone(),()=>Te(ke.orbitIndex),"chapter",ke),ke.items.forEach((Gt,Tt)=>{let cn=Tt*2.39996323+.5,rn=ke.items.length===1?0:65+Math.sqrt((Tt+.5)/ke.items.length)*ke.radius*1.1,Wt=ke.p.clone().add(h(Math.cos(cn)*rn,Math.sin(Tt*1.91)*ke.radius*.4,Math.sin(cn)*rn*.8)),Pt=n(Gt,"atlas-shot nebula-photo","thumb",ke.items);Pt.dataset.chapter=String(ke.orbitIndex),Pt.dataset.depthVisible="false";let hn=document.createElement("span");hn.className="nebula-photo-caption",hn.textContent=Gt.name,Pt.append(hn),Pt.addEventListener("pointerenter",()=>{O=!0,we=Se=0,clearTimeout(D)}),Pt.addEventListener("pointerleave",()=>{clearTimeout(D),D=setTimeout(()=>O=!1,180)}),Pt.addEventListener("focus",()=>O=!0),Pt.addEventListener("blur",()=>O=!1),e.append(Pt),x.push({node:Pt,p:Wt,type:"photo",owner:ke,sample:Tt===0||Tt===Math.floor(ke.items.length/2)})})})}),T.forEach(ge=>{ge.viewRadius=Math.max(ge.radius,...ge.chapters.map(Ie=>Ie.p.distanceTo(ge.p)+Ie.radius+70)),ge.viewDistance=Math.max(ge.viewRadius*2.5,...ge.chapters.map(Ie=>(Ie.radius+70)*2.5*1.6)),Ce=Math.max(Ce,ge.p.length()+ge.viewRadius)}),J=Math.max(Ce*1.55,...T.map(ge=>ge.viewDistance*1.8)),ie=J*Math.max(1,1/Math.max(.45,p.aspect)),q=oe=ie,He.set(0,0,0),qe.copy(He),ce=Ze=.16,Fe=ze=.48,pe(),le(!1),t.dataset.placeCount=String(T.length),t.dataset.orbitPhotoCount=String(x.length),j()}function b(){O=!1,clearTimeout(D);for(let Y of w)Y.node.style.visibility="hidden",Y.node.dataset.depthVisible="false",Y.node.tabIndex=-1,Y.node.setAttribute("aria-hidden","true");w=[],C==="universe"?(w.push(...I.filter(Y=>Y.type==="place")),w.push(...T.map(Y=>x.find(fe=>fe.owner===Y.chapters[0]&&fe.sample)).filter(Boolean))):C==="place"?(w.push(...I.filter(Y=>Y.type==="chapter"&&Y.owner.parent===U)),w.push(...x.filter(Y=>Y.owner.parent===U&&Y.sample))):X&&w.push(...x.filter(Y=>Y.owner===X)),t.dataset.nebulaLevel=C,t.dataset.nebulaPlace=U?.label||"",t.dataset.nebulaChapter=X?.date||"",Z(),Ue=!0}function G(Y,fe,Ce=!1){let ge=document.createElement("button");ge.type="button",ge.textContent=Y,Ce?(ge.setAttribute("aria-current","page"),ge.disabled=!0):ge.addEventListener("click",fe),Mt.append(ge)}function Z(){Mt.replaceChildren(),G("\u5168\u90E8\u661F\u4E91",()=>le(),C==="universe"),U&&G(U.label,()=>de(U),C==="place"),X&&C==="chapter"&&G(X.date,()=>Te(X.orbitIndex),!0),c("#space-status").textContent=C==="universe"?`${T.length} \u4E2A\u5730\u70B9\u661F\u4E91 \xB7 ${x.length} \u5F20`:C==="place"?`${U.chapters.length} \u4E2A\u65F6\u95F4\u5B50\u661F\u4E91 \xB7 ${U.items.length} \u5F20`:`${X.items.length} \u5F20\u7167\u7247 \xB7 ${X.label}`,rt.textContent=C==="universe"?"\u5730\u70B9\u661F\u4E91":C==="place"?"\u65F6\u95F4\u5B50\u661F\u4E91":"\u7167\u7247\u661F\u7FA4",c("#space-title").textContent=C==="universe"?"\u8BB0\u5FC6\uFF0C\u5728\u661F\u4E91\u4E2D\u76F8\u9047\u3002":C==="place"?U.label:X.date,c("#space-subtitle").textContent=C==="universe"?"\u65CB\u8F6C\u63A2\u7D22\uFF0C\u653E\u5927\u8FDB\u5165\u4E00\u7247\u661F\u4E91\u3002":C==="place"?`${U.items.length} \u5F20\u7167\u7247\uFF0C\u56F4\u7ED5 ${U.chapters.length} \u4E2A\u65F6\u95F4\u5B50\u661F\u4E91\u3002`:`${X.label} \xB7 ${X.items.length} \u5F20\uFF0C\u70B9\u51FB\u7167\u7247\u653E\u5927\u3002`,c("#space-reset").textContent="\u5168\u90E8\u661F\u4E91",c("#space-reset").setAttribute("aria-label","\u8FD4\u56DE\u5168\u90E8\u661F\u4E91")}function $(Y,fe,Ce=!1){qe.copy(Y),oe=fe,we=Se=0,(Ce||l.matches)&&(He.copy(Y),q=fe),Ue=!0}function le(Y=!1){C="universe",U=null,X=null,b(),$(h(),ie,Y)}function de(Y,fe=!1){Y&&(C="place",U=Y,X=null,ue=Y.viewDistance*Math.max(1,1/Math.max(.45,p.aspect)),b(),$(Y.p,ue,fe))}function Te(Y,fe=!1){let Ce=E[m(Y,0,E.length-1)];Ce&&(C="chapter",X=Ce,U=Ce.parent,_e=(Ce.radius+70)*2.5*Math.max(1,1/Math.max(.45,p.aspect)),b(),$(Ce.p,_e,fe),r(Ce.orbitIndex))}function P(Y){p.updateMatrixWorld();let fe=null,Ce=1/0;for(let ge of Y){Je.copy(ge.p).project(p);let Ie=Je.x*Je.x+Je.y*Je.y+(Je.z>1?100:0);Ie<Ce&&(Ce=Ie,fe=ge)}return fe}function ae(Y){T.length&&(we=Se=0,oe=m(oe*Y,90,ie*1.45),C==="universe"&&oe<ie*.48?de(P(T)):C==="place"&&oe<ue*.5?Te(P(U.chapters)?.orbitIndex??0):C==="place"&&oe>ue*1.85?le():C==="chapter"&&oe>_e*1.85&&de(U),l.matches&&(q=oe),Ue=!0)}function j(){let Y=i.getBoundingClientRect();if(Y.width<1||Y.height<1)return;let fe=Math.max(1,1/Math.max(.45,p.aspect));H=Y.width,ee=Y.height,p.aspect=H/ee,p.updateProjectionMatrix();let Ce=Math.max(1,1/Math.max(.45,p.aspect)),ge=Ce/fe;ie=J*Ce,ue*=ge,_e*=ge,q*=ge,oe*=ge;let Ie=Math.min(devicePixelRatio||1,d()?1:1.25);M?(M.setPixelRatio(Ie),M.setSize(H,ee,!1),R.uniforms.uRatio.value=Ie,R.uniforms.uHeight.value=ee):u&&(u.width=H*Ie,u.height=ee*Ie,f?.setTransform(Ie,0,0,Ie,0,0)),Ue=!0}function me(Y){return gt.copy(Y.p).applyMatrix4(p.matrixWorldInverse),Je.copy(Y.p).project(p),{x:(Je.x*.5+.5)*H,y:(-.5*Je.y+.5)*ee,depth:-gt.z,visible:Je.z>-1&&Je.z<1&&Math.abs(Je.x)<1.18&&Math.abs(Je.y)<1.3}}function xe(Y){let fe=ee/(2*Math.tan(p.fov*Math.PI/360)),Ce=Y-Qe>110,ge=[],Ie=[],lt=new Set,We=[...w].sort((je,nt)=>(je.type==="photo")-(nt.type==="photo")),ke=0;for(let je of We){let nt=me(je),Nt=je.node,Gt=je.type==="photo",Tt=nt.visible&&nt.depth>10;if(!Gt&&Tt){nt.y+=C==="place"?42:32;let rn=Math.min(d()?190:230,je.node.querySelector("strong").textContent.length*(d()?7:8)+38),Wt=d()?51:61,Pt={l:nt.x-rn/2,r:nt.x+rn/2,t:nt.y-Wt/2,b:nt.y+Wt/2};Tt=ke<(d()?5:10)&&!Ie.some(hn=>Pt.l<hn.r+10&&Pt.r>hn.l-10&&Pt.t<hn.b+8&&Pt.b>hn.t-8),Tt&&(Ie.push(Pt),ke++,je.type==="place"&&lt.add(je.owner))}if(Gt&&C==="universe"&&!lt.has(je.owner.parent)&&(Tt=!1),Nt.style.visibility=Tt?"visible":"hidden",Nt.dataset.depthVisible=String(Tt),Nt.tabIndex=Tt?0:-1,Nt.setAttribute("aria-hidden",String(!Tt)),!Tt)continue;let cn=Gt?m(fe/nt.depth*1.1,C==="universe"?.42:.32,2.8):1;Nt.style.transform=`translate3d(${nt.x}px,${nt.y}px,0) translate(-50%,-50%) scale(${cn})`,Nt.style.zIndex=String(Gt?Math.round(1e3-m(nt.depth/ie,0,1)*800):1200),Nt.style.opacity=String(Gt?m(1.5-nt.depth/(oe*3),.7,1):1),Gt&&Ce&&ge.push({node:Nt,score:Math.hypot(nt.x-H*.5,nt.y-ee*.5)})}Ce&&(Qe=Y,ge.filter(je=>je.node.dataset.ready!=="true"&&!je.node.dataset.loading).sort((je,nt)=>je.score-nt.score).slice(0,d()?18:32).forEach(je=>s(je.node))),t.dataset.orbitCamera=[ce.toFixed(4),Fe.toFixed(4),q.toFixed(1)].join(","),t.dataset.orbitSpeed=Math.hypot(we,Se).toFixed(5),t.dataset.orbitVisiblePhotos=String(w.filter(je=>je.type==="photo"&&je.node.dataset.depthVisible==="true").length)}function se(){if(!f)return;f.clearRect(0,0,H,ee);let Y=ee/(2*Math.tan(p.fov*Math.PI/360)),fe=Math.max(1,Math.floor(L.length/2600));for(let Ce=0;Ce<L.length;Ce+=fe){let ge=L[Ce],Ie=me({p:ge.p});if(!Ie.visible||Ie.depth<5)continue;let lt=m(ge.size*Y/Ie.depth*.45,.45,ge.dust?48:5),We=ge.color.map(nt=>Math.round(nt*255)),ke=C==="universe"||ge.parent===U?.orbitId?1:.04,je=C!=="chapter"||ge.child===X?.orbitIndex?1:.12;f.fillStyle=`rgba(${We.join(",")},${(ge.dust?.075:ge.alpha)*ke*je})`,f.beginPath(),f.arc(Ie.x,Ie.y,lt,0,Math.PI*2),f.fill()}}function Re(Y,fe,Ce=!0){if(!te)return;re||(re=fe),De++,fe-re>1e3&&(t.dataset.orbitFps=String(Math.round(De*1e3/(fe-re))),re=fe,De=0);let ge=l.matches?1:1-Math.exp(-Y/135),Ie=!Oe&&!O&&!l.matches;if(Ie){Ze+=we*Y,ze=m(ze+Se*Y,-1.12,1.12);let lt=Math.exp(-Y/430);we*=lt,Se*=lt,Math.abs(we)<8e-6&&(we=0),Math.abs(Se)<8e-6&&(Se=0)}if(Ce&&!l.matches&&!Oe&&!O&&!we&&!Se&&C==="universe"&&(Ze+=Y*15e-6),ce+=(Ze-ce)*ge,Fe+=(ze-Fe)*ge,q+=(oe-q)*ge,He.lerp(qe,ge),p.position.set(He.x+Math.sin(ce)*Math.cos(Fe)*q,He.y+Math.sin(Fe)*q,He.z+Math.cos(ce)*Math.cos(Fe)*q),p.lookAt(He),p.updateMatrixWorld(),M){R.uniforms.uParent.value=U?.orbitId??-1,R.uniforms.uChild.value=X?.orbitIndex??-1;let lt=l.matches?1:1-Math.exp(-Y/220);R.uniforms.uFocus.value+=((C==="universe"?0:1)-R.uniforms.uFocus.value)*lt,R.uniforms.uDepth.value+=((C==="chapter"?1:0)-R.uniforms.uDepth.value)*lt,R.uniforms.uTime.value=Ce&&!l.matches?fe/1e3:0,M.render(_,p)}else(Ue||Ie||Ce)&&se();xe(fe),o.look(Math.sin(ce)*.8,Math.sin(Fe)*.4),Ue=!1}function be(){a(),ot=performance.now(),Ue=!0}i.addEventListener("pointerdown",Y=>{if(!te||Y.button!==0)return;let fe=performance.now();Ke.set(Y.pointerId,{x:Y.clientX,y:Y.clientY}),we=Se=0;let Ce=[...Ke.values()];Ce.length===1?Oe={x:Y.clientX,y:Y.clientY,firstX:Y.clientX,firstY:Y.clientY,time:fe,moved:!1,pan:Y.shiftKey}:(Oe={distance:Math.hypot(Ce[0].x-Ce[1].x,Ce[0].y-Ce[1].y),moved:!0},be())}),window.addEventListener("pointermove",Y=>{if(!te||!Ke.has(Y.pointerId)||!Oe)return;let fe=performance.now();Ke.set(Y.pointerId,{x:Y.clientX,y:Y.clientY});let Ce=[...Ke.values()];if(Ce.length===2){let We=Math.hypot(Ce[0].x-Ce[1].x,Ce[0].y-Ce[1].y);Oe.distance&&ae(Oe.distance/Math.max(1,We)),Oe.distance=We,Oe.moved=!0,be();return}let ge=Y.clientX-Oe.x,Ie=Y.clientY-Oe.y,lt=Math.max(8,fe-Oe.time);if(Math.hypot(Y.clientX-Oe.firstX,Y.clientY-Oe.firstY)>5&&(Oe.moved=!0),Oe.moved){if(i.classList.add("is-dragging"),Oe.pan)vt.set(1,0,0).applyQuaternion(p.quaternion),ut.set(0,1,0).applyQuaternion(p.quaternion),qe.addScaledVector(vt,-ge*q/ee*.7).addScaledVector(ut,Ie*q/ee*.7);else{let We=d()?.007:.0055;Ze-=ge*We,ze=m(ze+Ie*We,-1.12,1.12),we=m(-ge*We/lt,-.006,.006),Se=m(Ie*We/lt,-.004,.004),l.matches&&(ce=Ze,Fe=ze,we=Se=0)}be()}Oe.x=Y.clientX,Oe.y=Y.clientY,Oe.time=fe},{passive:!0});function _t(Y){if(Ke.has(Y.pointerId))if(Ke.delete(Y.pointerId),Oe?.moved&&be(),Y.type==="pointercancel"&&(we=Se=0),!Ke.size)Oe=null,i.classList.remove("is-dragging");else{let fe=[...Ke.values()][0];Oe={x:fe.x,y:fe.y,firstX:fe.x,firstY:fe.y,time:performance.now(),moved:!0},we=Se=0}}window.addEventListener("pointerup",_t),window.addEventListener("pointercancel",_t),window.addEventListener("blur",()=>{Ke.clear(),Oe=null,we=Se=0,i.classList.remove("is-dragging")}),i.addEventListener("wheel",Y=>{if(!te)return;Y.preventDefault();let fe=Y.deltaMode===1?16:Y.deltaMode===2?ee:1,Ce=m(Y.deltaX*fe,-180,180),ge=m(Y.deltaY*fe,-180,180);!Y.ctrlKey&&Math.abs(Ce)>Math.abs(ge)*.7?(Ze-=Ce*.003,ze=m(ze+ge*.001,-1.12,1.12),we=l.matches?0:-Ce*3e-5,be()):(ae(Math.exp(ge*(Y.ctrlKey?.004:.002))),be())},{passive:!1}),i.addEventListener("keydown",Y=>{if(!te||Y.target!==i)return;let fe={ArrowLeft:[-.22,0],ArrowRight:[.22,0],ArrowUp:[0,-.16],ArrowDown:[0,.16]};fe[Y.key]?(Y.preventDefault(),Ze+=fe[Y.key][0],ze=m(ze+fe[Y.key][1],-1.12,1.12),be()):Y.key==="+"||Y.key==="="?(Y.preventDefault(),ae(.75)):Y.key==="-"?(Y.preventDefault(),ae(1.33)):Y.key==="Home"?(Y.preventDefault(),le()):Y.key==="Escape"&&(Y.preventDefault(),C==="chapter"?de(U):le())}),i.setAttribute("aria-label","\u661F\u4E91\u7A7A\u95F4\u3002\u62D6\u52A8\u65CB\u8F6C\uFF0C\u6EDA\u52A8\u6216\u53CC\u6307\u7F29\u653E\uFF0C\u70B9\u51FB\u5730\u70B9\u8FDB\u5165\u65F6\u95F4\u5B50\u661F\u4E91\uFF0C\u70B9\u51FB\u7167\u7247\u653E\u5927\u3002\u65B9\u5411\u952E\u65CB\u8F6C\uFF0C\u52A0\u51CF\u952E\u7F29\u653E\uFF0CHome \u8FD4\u56DE\u5168\u90E8\u3002");function ht(){Ke.clear(),Oe=null,we=Se=0,O=!1,clearTimeout(D),T=[],E=[],I=[],x=[],w=[],L=[],e.replaceChildren(),Mt.replaceChildren(),y&&(_.remove(y),A.dispose(),y=null),f?.clearRect(0,0,H,ee),C="universe",U=X=null,t.dataset.orbitPhotoCount="0",t.dataset.orbitVisiblePhotos="0",t.dataset.placeCount="0",delete t.dataset.nebulaPlace,delete t.dataset.nebulaChapter,delete t.dataset.orbitCamera,t.dataset.nebulaLevel="universe",Ue=!0}return N(),j(),{mount:ne,resize:j,update:Re,zoom:ae,overview:le,focusChapter:Te,refresh:Z,clear:ht,setEnabled(Y){te=Y,re=0,De=0,we=Se=0,Oe=null,Ke.clear(),Ue=!0},focusPhoto(Y){let fe=x.find(Ce=>Ce.node.entry===Y);fe&&X!==fe.owner&&Te(fe.owner.orbitIndex)},get level(){return C}}}function nx({host:i,tray:e,status:t,onOpen:n,loadThumb:s,loadPreview:r}){let a=b=>document.querySelector(b),o=matchMedia("(prefers-reduced-motion: reduce)"),c=()=>innerWidth<=700,l=b=>b.taken??b.mtime,d=(b,G,Z)=>{let $=document.createElement(b);return G&&($.className=G),Z!==void 0&&($.textContent=Z),$},m=(b,G)=>{let Z=d("button",b,G);return Z.type="button",Z},h=Nc(i),p=d("div","atlas-viewport");p.tabIndex=0,p.setAttribute("aria-label","\u8BB0\u5FC6\u661F\u56FE\u3002\u62D6\u52A8\u63A2\u7D22\uFF0C\u65B9\u5411\u952E\u79FB\u52A8\uFF0C\u52A0\u51CF\u952E\u7F29\u653E\u3002");let _=d("div","atlas-world");p.append(_),i.append(p);let M=a("#chapter-gallery"),f=a("#gallery-track"),u="gate",A="map",R=[],y=[],T=0,E=0,I=!o.matches,x=!1,w=0,L=null,C=[],U=0,X=0,te=0,O=0,J=0,H=innerWidth,ee=innerHeight,ie=new Map,ue=new Map,_e=0,ce=Uc({viewport:p,world:_,host:i,makePhoto:gt,enqueue:Qe,sky:h,onGesture:()=>{w=performance.now()},onChapter:b=>{T=b,ut()}}),Fe=null,Ze=null,ze=500,q=0,oe=0,re=new IntersectionObserver(b=>{for(let G of b)G.isIntersecting&&Qe(G.target)},{rootMargin:"180px"});function De(b=performance.now()){h.draw(J,!0)}function we(b){te=requestAnimationFrame(we);let G=Math.min(50,Math.max(1,b-O));O=b,!(document.hidden||u==="library"||x)&&(u==="space"&&A==="map"&&ce.update(G,b,I),!(!I||o.matches||b-_e<(c()?80:66))&&(J+=Math.min(100,b-_e),_e=b,h.draw(J)))}function Se(){if(H=innerWidth,ee=innerHeight,h.resize(),De(),ce.resize(),A==="gallery"){let b=ue.get(y[T]?.key)||0;Mt(),N(b,!1),g()}}function ot(b){return`${b.quality}:${b.entry.path}`}function Ue(b,G,Z=b.quality){if(!b.isConnected)return;let $=b.querySelector("img");$.src=G,$.onload=()=>{if(b.isConnected){if(b.dataset.loadedQuality=Z,b.quality!==Z){delete b.dataset.ready,b.dataset.placeholder="true",Qe(b);return}b.dataset.ready!=="true"&&(b.dataset.ready="true",delete b.dataset.placeholder,delete b.dataset.failed,X++,i.dataset.loadedPhotos=String(X))}},$.onerror=()=>{b.isConnected&&(b.dataset.failed="true")},$.complete&&$.naturalWidth&&$.onload()}function Qe(b){if(u!=="space"||!b.entry||b.dataset.ready==="true"||b.dataset.loading||b.dataset.depthVisible==="false")return;let G=ot(b),Z=ie.get(G);if(Z){Z.used=performance.now(),Ue(b,Z.url);return}b.dataset.loading="true";let $={target:b,key:G,quality:b.quality,token:E};He(b)?C.unshift($):C.push($),Je()}function He(b){return b.quality==="preview"&&b.closest(".is-current")}function qe(){for(let b of["thumb","preview"]){let G=b==="thumb"?70:c()?3:5,Z=[...ie].filter(([$])=>$.startsWith(b+":")).sort(($,le)=>$[1].used-le[1].used);for(let $=0;$<Z.length-G;$++){let[le,de]=Z[$];if(![..._.querySelectorAll("[data-ready=true]"),...f.querySelectorAll("[data-ready=true]"),...e.querySelectorAll("[data-ready=true]")].some(P=>{if(!P.entry||ot(P)!==le||P.closest("[hidden]")||P.dataset.depthVisible==="false")return!1;let ae=P.getBoundingClientRect();return ae.right>0&&ae.left<H&&ae.bottom>0&&ae.top<ee})){for(let P of[..._.querySelectorAll("button"),...f.querySelectorAll("button"),...e.querySelectorAll("button")])P.entry&&ot(P)===le&&(P.querySelector("img").removeAttribute("src"),delete P.dataset.ready);URL.revokeObjectURL(de.url),ie.delete(le)}}}}function Je(){for(;U<3&&C.length;){let b=C.shift();if(b.token!==E||u!=="space"||!b.target.isConnected||b.target.closest("[hidden]")||b.target.dataset.depthVisible==="false"){delete b.target.dataset.loading;continue}if(ot(b.target)!==b.key){delete b.target.dataset.loading,Qe(b.target);continue}let G=ie.get(b.key);if(G){Ue(b.target,G.url),delete b.target.dataset.loading;continue}U++,(b.quality==="preview"?r(b.target.entry):s(b.target.entry)).then(Z=>{if(b.token!==E||u!=="space"){Z.fill(0);return}let $=ie.get(b.key);if($){Z.fill(0),ot(b.target)===b.key&&Ue(b.target,$.url,b.quality);return}let le=URL.createObjectURL(new Blob([Z],{type:"image/jpeg"}));Z.fill(0),ie.set(b.key,{url:le,used:performance.now()}),ot(b.target)===b.key&&Ue(b.target,le,b.quality),qe()}).catch(()=>{b.token===E&&b.target.isConnected&&(b.target.dataset.failed="true",b.target.setAttribute("aria-label",`${b.target.entry.name}\uFF0C\u52A0\u8F7D\u5931\u8D25\uFF0C\u70B9\u51FB\u91CD\u65B0\u8BFB\u53D6`))}).finally(()=>{delete b.target.dataset.loading,U--,b.token===E&&ot(b.target)!==b.key&&Qe(b.target),Je()})}}function gt(b,G,Z="thumb",$=null){let le=m(G);le.entry=b,le.quality=Z,le.setAttribute("aria-label",`\u67E5\u770B ${b.name}`),le.title=b.name;let de=d("img");de.alt="",de.decoding="async",de.draggable=!1,le.append(de);let Te=Z==="preview"&&ie.get(`thumb:${b.path}`);return Te&&(de.src=Te.url,le.dataset.placeholder="true"),le.addEventListener("click",()=>{if(!(performance.now()-w<180)){if($){let P=y.findIndex(ae=>ae.items===$);P>=0&&(T=P,ut())}n(b,le,$||R)}}),le}function vt(b){let G=new Map;for(let $ of b){let le=new Date(l($)*1e3),de=$.location,Te=Number.isFinite(le.getTime()),ae=`${Te?`${le.getFullYear()}-${le.getMonth()+1}`:"undated"}:${de?.id||"unknown"}`;G.has(ae)||G.set(ae,{key:ae,placeId:de?.id||"unknown",label:de?.id&&de.id!=="unknown"?de.label:"\u672A\u8BB0\u5F55\u4F4D\u7F6E",date:Te?`${le.getFullYear()} \u5E74 ${le.getMonth()+1} \u6708`:"\u65E5\u671F\u672A\u77E5",items:[],captured:!1});let j=G.get(ae);j.items.push($),$.dateSource==="capture"&&(j.captured=!0)}let Z=[...G.values()];return Z.forEach($=>$.items.sort((le,de)=>l(le)-l(de))),Z}function ut(){let b=y[T];i.dataset.photoCount=String(R.length),i.dataset.chapterCount=String(y.length),i.dataset.groupIndex=String(T),a("#space-previous").disabled=T<=0,a("#space-next").disabled=T>=y.length-1,a("#space-gallery").disabled=!y.length,t.textContent=b?`${T+1} / ${y.length} \u4E2A\u7AE0\u8282 \xB7 \u5171 ${R.length} \u5F20`:"\u6682\u65E0\u53EF\u5C55\u793A\u7684\u7167\u7247";for(let[Z,$]of[..._.querySelectorAll(".atlas-node")].entries())$.classList.toggle("is-selected",Z===T);for(let[Z,$]of[...e.children].entries())$.setAttribute("aria-current",String(Z===T));let G=e.children[T];G&&e.scrollTo({left:G.offsetLeft-e.clientWidth/2+G.clientWidth/2,behavior:o.matches?"instant":"smooth"}),A==="gallery"&&b?(a("#space-title").textContent=b.label,a("#space-subtitle").textContent=`${b.date} \xB7 ${b.items.length} \u5F20${b.captured?"":" \xB7 \u6309\u6587\u4EF6\u65E5\u671F\u5206\u7EC4"} \xB7 \u6EDA\u52A8\u6216\u4E0A\u4E0B\u6ED1\u52A8\uFF0C\u70B9\u51FB\u653E\u5927`):ce.refresh()}function Ke(b,G=!0){y.length&&(T=Math.max(0,Math.min(y.length-1,b)),A==="map"&&ce.focusChapter(T,!G),ut(),A==="gallery"&&B())}function Oe(){re.disconnect(),e.replaceChildren(),ce.mount(y);for(let b=0;b<y.length;b++){let G=y[b],Z=m("space-photo");Z.entry=G.items[0],Z.quality="thumb",Z.setAttribute("aria-label",`${G.date}\uFF0C${G.label}\uFF0C${G.items.length}\u5F20`);let $=d("img");$.alt="",$.draggable=!1,Z.append($);let le=d("span","chapter-label");le.append(d("strong","",G.label),d("small","",`${G.date} \xB7 ${G.items.length} \u5F20`)),Z.append(le),Z.addEventListener("click",()=>Ke(b)),e.append(Z),re.observe(Z)}ut()}function D(){return Math.max(0,Math.min((y[T]?.items.length||1)-1,Math.round(f.scrollTop/ze)))}function Mt(){ze=Math.max(340,f.clientHeight*.92),Ze&&(Ze.style.height=`${Math.max(0,(y[T]?.items.length-1||0)*ze)}px`)}function rt(b,G){if(b.quality!==G&&(b.quality=G,b.dataset.loadedQuality!==G)){delete b.dataset.ready;let Z=b.querySelector("img"),$=ie.get(`thumb:${b.entry.path}`);!Z.src&&$&&(Z.src=$.url),Z.src&&(b.dataset.placeholder="true")}}function S(){if(q=0,u!=="space"||A!=="gallery"||!Fe)return;let b=Math.max(0,Math.min(y[T].items.length-1,f.scrollTop/ze)),G=D(),Z=o.matches;for(let[le,de]of[...Fe.children].entries()){let Te=le-b,P=de.querySelector(".gallery-shot"),ae=Z?le===G:Te>-.86&&Te<(c()?2.8:4.1),j=le===G;if(de.classList.toggle("is-current",j),de.style.visibility=ae?"visible":"hidden",P.dataset.depthVisible=String(ae),P.tabIndex=j?0:-1,P.disabled=!j,de.setAttribute("aria-hidden",String(!j)),!ae)continue;let me=Math.max(0,Math.min(1,(Te+.86)/.55));de.style.opacity=String(Z?1:me*Math.exp(-Math.max(0,Te)*.31)),de.style.zIndex=String(1e3-Math.round(Te*100));let xe=Z?0:Math.sin(le*1.65)*Math.min(Math.abs(Te),1)*(c()?125:340),se=Z?0:Math.cos(le*1.13)*Math.min(Math.abs(Te),1)*105,Re=Z?0:-Te*(c()?630:730),be=Z?0:Math.sin(le*1.4)*Math.min(Math.abs(Te),1)*-14;de.style.transform=`translate(-50%,-50%) translate3d(${xe}px,${se}px,${Re}px) rotateY(${be}deg)`,de.style.filter=Te>2?`brightness(${Math.max(.6,1-Te*.07)})`:"",rt(P,Math.abs(Te)<.85?"preview":"thumb"),Qe(P)}let $=(y[T]?.items.length||1)>1?b/(y[T].items.length-1):0;a("#gallery-progress").style.setProperty("--gallery-progress",`${Math.max(0,Math.min(1,$))*100}%`),i.dataset.galleryIndex=String(G)}function g(){if(u!=="space"||A!=="gallery"||!y[T])return;let b=D(),G=y[T];ue.set(G.key,b),a("#gallery-position").textContent=`${b+1} / ${G.items.length}`,a("#gallery-previous").disabled=b===0,a("#gallery-next").disabled=b===G.items.length-1,q||(q=requestAnimationFrame(S))}function N(b,G=!0){if(!y[T])return;let Z=Math.max(0,Math.min(y[T].items.length-1,b));f.scrollTo({top:Z*ze,behavior:G&&!o.matches?"smooth":"instant"}),(!G||o.matches)&&(g(),S())}function B(){clearTimeout(oe),cancelAnimationFrame(q),q=0,f.replaceChildren();let b=y[T];if(!b)return;Fe=d("div","depth-stage"),Ze=d("div","gallery-runway"),Ze.setAttribute("aria-hidden","true"),f.append(Fe,Ze);for(let Z of b.items){let $=d("figure","gallery-item"),le=gt(Z,"gallery-shot","thumb",b.items);$.append(le);let de=d("figcaption","gallery-caption");de.append(d("span","",new Date(l(Z)*1e3).toLocaleDateString("zh-CN",{month:"long",day:"numeric"})),d("span","",Z.name)),$.append(de),Fe.append($)}let G=E;requestAnimationFrame(()=>{G!==E||A!=="gallery"||(Mt(),N(ue.get(b.key)||0,!1),g(),S())})}function K(b=T){if(y.length){re.disconnect();for(let G of e.children)re.observe(G);C=C.filter(G=>G.target.closest(".atlas-world")?(delete G.target.dataset.loading,!1):!0),ce.setEnabled(!1),A="gallery",T=Math.max(0,Math.min(y.length-1,b)),a("#space").dataset.view=A,p.hidden=!0,M.hidden=!1,a("#space-map").setAttribute("aria-pressed","false"),a("#space-gallery").setAttribute("aria-pressed","true"),ut(),B(),h.setGallery(!0),f.focus({preventScroll:!0})}}function he(){A="map",a("#space").dataset.view=A,p.hidden=!1,M.hidden=!0,ce.resize(),a("#space-map").setAttribute("aria-pressed","true"),a("#space-gallery").setAttribute("aria-pressed","false"),clearTimeout(oe),cancelAnimationFrame(q),q=0,f.replaceChildren(),Fe=null,Ze=null,h.setGallery(!1),ce.setEnabled(u==="space"),ut(),qe()}function pe(b){ce.zoom(b)}f.addEventListener("wheel",b=>{Math.abs(b.deltaX)>Math.abs(b.deltaY)&&(b.preventDefault(),f.scrollTop+=b.deltaX)},{passive:!1}),f.addEventListener("scroll",()=>{g(),clearTimeout(oe),!L&&!x&&(oe=setTimeout(()=>{A==="gallery"&&!L&&!x&&N(D())},190))},{passive:!0}),f.addEventListener("keydown",b=>{if(x)return;let G={ArrowRight:1,ArrowDown:1,PageDown:1,ArrowLeft:-1,ArrowUp:-1,PageUp:-1}[b.key];G?(b.preventDefault(),N(D()+G)):(b.key==="Home"||b.key==="End")&&(b.preventDefault(),N(b.key==="Home"?0:y[T].items.length-1))}),f.addEventListener("pointerdown",b=>{b.pointerType!=="mouse"||b.button!==0||(clearTimeout(oe),L={id:b.pointerId,start:b.clientY,top:f.scrollTop,moved:!1})}),window.addEventListener("pointermove",b=>{if(!L||b.pointerId!==L.id)return;let G=b.clientY-L.start;Math.abs(G)>6&&(L.moved=!0),L.moved&&(f.classList.add("is-dragging"),f.scrollTop=L.top-G,w=performance.now())});function Q(b){if(!L||L.id!==b.pointerId)return;let G=L.moved;L=null,f.classList.remove("is-dragging"),G&&(w=performance.now(),N(D()))}window.addEventListener("pointerup",Q),window.addEventListener("pointercancel",Q),a("#space-map").addEventListener("click",he),a("#space-gallery").addEventListener("click",()=>K()),a("#gallery-previous").addEventListener("click",()=>N(D()-1)),a("#gallery-next").addEventListener("click",()=>N(D()+1)),o.addEventListener("change",()=>{o.matches&&(I=!1),De(),S(),a("#space-motion").textContent=I?"\u6682\u505C\u661F\u5149":"\u5F00\u542F\u661F\u5149",a("#space-motion").setAttribute("aria-pressed",String(!I))}),window.addEventListener("pointermove",b=>{document.hidden||u==="library"||x||!I||o.matches||u==="space"&&A==="map"||h.look((b.clientX/H-.5)*.6,(b.clientY/ee-.5)*.35)},{passive:!0}),window.addEventListener("resize",Se),document.addEventListener("visibilitychange",()=>{O=performance.now()}),Se(),we(performance.now()),i.dataset.loadedPhotos="0",i.getPhotoTargets=()=>[..._.querySelectorAll(".atlas-shot[data-ready=true]")].map(b=>{let G=b.getBoundingClientRect();return{x:G.x+G.width/2,y:G.y+G.height/2}}),i.getCameraPosition=()=>i.dataset.orbitCamera;function ne(){E++,re.disconnect(),C=[],ce.clear(),ce.setEnabled(!1),L=null,clearTimeout(oe),cancelAnimationFrame(q),q=0,Fe=null,Ze=null,h.setGallery(!1);for(let b of ie.values())URL.revokeObjectURL(b.url);ie.clear(),ue.clear(),R=[],y=[],T=0,X=0,_.replaceChildren(),e.replaceChildren(),f.replaceChildren(),M.hidden=!0,i.dataset.loadedPhotos="0",i.dataset.chapterCount="0",i.dataset.photoCount="0",t.textContent="",a("#gallery-position").textContent="",a("#space-title").textContent="\u8BB0\u5FC6\uFF0C\u6709\u8FF9\u53EF\u5FAA\u3002",a("#space-subtitle").textContent="\u6CBF\u7740\u65F6\u95F4\u4E0E\u5730\u70B9\uFF0C\u91CD\u65B0\u9760\u8FD1\u90A3\u4E9B\u77AC\u95F4\u3002",A="map",a("#space").dataset.view=A,p.hidden=!0,a("#space-map").setAttribute("aria-pressed","true"),a("#space-gallery").setAttribute("aria-pressed","false")}return{get motionEnabled(){return I},setPhotos(b){b!==R&&(ne(),R=b,y=vt(b),T=Math.max(0,y.findIndex(G=>G.label!=="\u672A\u8BB0\u5F55\u4F4D\u7F6E"&&G.items.length>=3)),p.hidden=u!=="space",Oe(),ce.resize(),ce.setEnabled(u==="space"))},setMode(b){if(u=b,ce.setEnabled(b==="space"&&A==="map"&&!x),i.dataset.mode=b,p.hidden=b!=="space"||A!=="map",M.hidden=b!=="space"||A!=="gallery",b==="space"){ce.resize(),ut();for(let G of[...e.children])re.observe(G);A==="gallery"&&(Mt(),N(ue.get(y[T]?.key)||0,!1),S()),Je()}else re.disconnect(),clearTimeout(oe),C.forEach(G=>delete G.target.dataset.loading),C=[];De()},setViewerOpen(b){x=b,ce.setEnabled(!b&&u==="space"&&A==="map"),b?clearTimeout(oe):A==="gallery"&&S()},changeGroup(b){Ke(T+b)},focusPhoto(b){if(A==="map"){ce.focusPhoto(b);return}if(A!=="gallery"||!y[T])return;let G=y[T].items.indexOf(b);G>=0&&(N(G,!1),g())},zoom:pe,reset(){ce.overview()},toggleMotion(){return I=!I,De(),I},clear:ne}}export{nx as createCosmos};
