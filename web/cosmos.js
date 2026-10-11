var wl=0,fo=1,Cl=2;var vs=1,Rl=2,Gi=3,Nn=0,Wt=1,yn=2,Mn=0,di=1,ys=2,po=3,mo=4,Il=5;var Yn=100,Pl=101,Ll=102,Dl=103,Nl=104,Ul=200,Fl=201,Ol=202,Bl=203,sr=204,rr=205,zl=206,kl=207,Vl=208,Gl=209,Hl=210,Wl=211,Xl=212,ql=213,Yl=214,ar=0,or=1,lr=2,fi=3,cr=4,hr=5,ur=6,dr=7,go=0,$l=1,Zl=2,un=0,_o=1,xo=2,vo=3,yo=4,Mo=5,bo=6,So=7;var Ao=300,ei=301,xi=302,zr=303,kr=304,Ms=306,fr=1e3,gn=1001,pr=1002,Nt=1003,Jl=1004;var bs=1005;var Ft=1006,Vr=1007;var ti=1008;var tn=1009,To=1010,Eo=1011,Hi=1012,Gr=1013,dn=1014,fn=1015,bn=1016,Hr=1017,Wr=1018,Wi=1020,wo=35902,Co=35899,Ro=1021,Io=1022,rn=1023,_n=1026,ni=1027,Po=1028,Xr=1029,ii=1030,qr=1031;var Yr=1033,Ss=33776,As=33777,Ts=33778,Es=33779,$r=35840,Zr=35841,Jr=35842,Kr=35843,Qr=36196,jr=37492,ea=37496,ta=37488,na=37489,ws=37490,ia=37491,sa=37808,ra=37809,aa=37810,oa=37811,la=37812,ca=37813,ha=37814,ua=37815,da=37816,fa=37817,pa=37818,ma=37819,ga=37820,_a=37821,xa=36492,va=36494,ya=36495,Ma=36283,ba=36284,Cs=36285,Sa=36286;var ns=2300,mr=2301,ir=2302,io=2303,so=2400,ro=2401,ao=2402;var Kl=3200;var Lo=0,Ql=1,Fn="",Zt="srgb",is="srgb-linear",ss="linear",mt="srgb";var ci=7680;var oo=519,jl=512,ec=513,tc=514,Aa=515,nc=516,ic=517,Ta=518,sc=519,lo=35044;var Do="300 es",hn=2e3,rs=2001;function Hc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Wc(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function as(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function rc(){let i=as("canvas");return i.style.display="block",i}var ol={},Bi=null;function No(...i){let e="THREE."+i.shift();Bi?Bi("log",e,...i):console.log(e,...i)}function ac(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function ke(...i){i=ac(i);let e="THREE."+i.shift();if(Bi)Bi("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ge(...i){i=ac(i);let e="THREE."+i.shift();if(Bi)Bi("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function ui(...i){let e=i.join(" ");e in ol||(ol[e]=!0,ke(...i))}function oc(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var lc={[ar]:or,[lr]:ur,[cr]:dr,[fi]:hr,[or]:ar,[ur]:lr,[dr]:cr,[hr]:fi},xn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Na=Math.PI/180,gr=180/Math.PI;function Rs(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(zt[i&255]+zt[i>>8&255]+zt[i>>16&255]+zt[i>>24&255]+"-"+zt[e&255]+zt[e>>8&255]+"-"+zt[e>>16&15|64]+zt[e>>24&255]+"-"+zt[t&63|128]+zt[t>>8&255]+"-"+zt[t>>16&255]+zt[t>>24&255]+zt[n&255]+zt[n>>8&255]+zt[n>>16&255]+zt[n>>24&255]).toLowerCase()}function at(i,e,t){return Math.max(e,Math.min(t,i))}function Xc(i,e){return(i%e+e)%e}function Ua(i,e,t){return(1-t)*i+t*e}function Ki(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Xt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var zo=class zo{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};zo.prototype.isVector2=!0;var nt=zo,vn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],d=n[s+2],f=n[s+3],h=r[a+0],g=r[a+1],x=r[a+2],S=r[a+3];if(f!==S||c!==h||l!==g||d!==x){let m=c*h+l*g+d*x+f*S;m<0&&(h=-h,g=-g,x=-x,S=-S,m=-m);let u=1-o;if(m<.9995){let w=Math.acos(m),R=Math.sin(w);u=Math.sin(u*w)/R,o=Math.sin(o*w)/R,c=c*u+h*o,l=l*u+g*o,d=d*u+x*o,f=f*u+S*o}else{c=c*u+h*o,l=l*u+g*o,d=d*u+x*o,f=f*u+S*o;let w=1/Math.sqrt(c*c+l*l+d*d+f*f);c*=w,l*=w,d*=w,f*=w}}e[t]=c,e[t+1]=l,e[t+2]=d,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],d=n[s+3],f=r[a],h=r[a+1],g=r[a+2],x=r[a+3];return e[t]=o*x+d*f+c*g-l*h,e[t+1]=c*x+d*h+l*f-o*g,e[t+2]=l*x+d*g+o*h-c*f,e[t+3]=d*x-o*f-c*h-l*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),d=o(s/2),f=o(r/2),h=c(n/2),g=c(s/2),x=c(r/2);switch(a){case"XYZ":this._x=h*d*f+l*g*x,this._y=l*g*f-h*d*x,this._z=l*d*x+h*g*f,this._w=l*d*f-h*g*x;break;case"YXZ":this._x=h*d*f+l*g*x,this._y=l*g*f-h*d*x,this._z=l*d*x-h*g*f,this._w=l*d*f+h*g*x;break;case"ZXY":this._x=h*d*f-l*g*x,this._y=l*g*f+h*d*x,this._z=l*d*x+h*g*f,this._w=l*d*f-h*g*x;break;case"ZYX":this._x=h*d*f-l*g*x,this._y=l*g*f+h*d*x,this._z=l*d*x-h*g*f,this._w=l*d*f+h*g*x;break;case"YZX":this._x=h*d*f+l*g*x,this._y=l*g*f+h*d*x,this._z=l*d*x-h*g*f,this._w=l*d*f-h*g*x;break;case"XZY":this._x=h*d*f-l*g*x,this._y=l*g*f-h*d*x,this._z=l*d*x+h*g*f,this._w=l*d*f+h*g*x;break;default:ke("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],d=t[6],f=t[10],h=n+o+f;if(h>0){let g=.5/Math.sqrt(h+1);this._w=.25/g,this._x=(d-c)*g,this._y=(r-l)*g,this._z=(a-s)*g}else if(n>o&&n>f){let g=2*Math.sqrt(1+n-o-f);this._w=(d-c)/g,this._x=.25*g,this._y=(s+a)/g,this._z=(r+l)/g}else if(o>f){let g=2*Math.sqrt(1+o-n-f);this._w=(r-l)/g,this._x=(s+a)/g,this._y=.25*g,this._z=(c+d)/g}else{let g=2*Math.sqrt(1+f-n-o);this._w=(a-s)/g,this._x=(r+l)/g,this._y=(c+d)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(at(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,d=t._w;return this._x=n*d+a*o+s*l-r*c,this._y=s*d+a*c+r*o-n*l,this._z=r*d+a*l+n*c-s*o,this._w=a*d-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){let l=Math.acos(o),d=Math.sin(l);c=Math.sin(c*l)/d,t=Math.sin(t*l)/d,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},ko=class ko{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ll.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ll.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),d=2*(o*t-r*s),f=2*(r*n-a*t);return this.x=t+c*l+a*f-o*d,this.y=n+c*d+o*l-r*f,this.z=s+c*f+r*d-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Fa.copy(this).projectOnVector(e),this.sub(Fa)}reflect(e){return this.sub(Fa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ko.prototype.isVector3=!0;var X=ko,Fa=new X,ll=new vn,Vo=class Vo{constructor(e,t,n,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){let d=this.elements;return d[0]=e,d[1]=s,d[2]=o,d[3]=t,d[4]=r,d[5]=c,d[6]=n,d[7]=a,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],d=n[4],f=n[7],h=n[2],g=n[5],x=n[8],S=s[0],m=s[3],u=s[6],w=s[1],R=s[4],y=s[7],E=s[2],M=s[5],I=s[8];return r[0]=a*S+o*w+c*E,r[3]=a*m+o*R+c*M,r[6]=a*u+o*y+c*I,r[1]=l*S+d*w+f*E,r[4]=l*m+d*R+f*M,r[7]=l*u+d*y+f*I,r[2]=h*S+g*w+x*E,r[5]=h*m+g*R+x*M,r[8]=h*u+g*y+x*I,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],d=e[8];return t*a*d-t*o*l-n*r*d+n*o*c+s*r*l-s*a*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],d=e[8],f=d*a-o*l,h=o*c-d*r,g=l*r-a*c,x=t*f+n*h+s*g;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let S=1/x;return e[0]=f*S,e[1]=(s*l-d*n)*S,e[2]=(o*n-s*a)*S,e[3]=h*S,e[4]=(d*t-s*c)*S,e[5]=(s*r-o*t)*S,e[6]=g*S,e[7]=(n*c-l*t)*S,e[8]=(a*t-n*r)*S,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return ui("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Oa.makeScale(e,t)),this}rotate(e){return ui("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Oa.makeRotation(-e)),this}translate(e,t){return ui("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Oa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Vo.prototype.isMatrix3=!0;var qe=Vo,Oa=new qe,cl=new qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hl=new qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function qc(){let i={enabled:!0,workingColorSpace:is,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===mt&&(s.r=Dn(s.r),s.g=Dn(s.g),s.b=Dn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===mt&&(s.r=Oi(s.r),s.g=Oi(s.g),s.b=Oi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Fn?ss:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ui("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ui("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[is]:{primaries:e,whitePoint:n,transfer:ss,toXYZ:cl,fromXYZ:hl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Zt},outputColorSpaceConfig:{drawingBufferColorSpace:Zt}},[Zt]:{primaries:e,whitePoint:n,transfer:mt,toXYZ:cl,fromXYZ:hl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Zt}}}),i}var rt=qc();function Dn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Oi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ti,_r=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ti===void 0&&(Ti=as("canvas")),Ti.width=e.width,Ti.height=e.height;let s=Ti.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Ti}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=as("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Dn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Dn(t[n]/255)*255):t[n]=Dn(t[n]);return{data:t,width:e.width,height:e.height}}else return ke("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Yc=0,zi=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Yc++}),this.uuid=Rs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ba(s[a].image)):r.push(Ba(s[a]))}else r=Ba(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Ba(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?_r.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(ke("Texture: Unable to serialize Texture."),{})}var $c=0,za=new X,Gt=class i extends xn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=gn,s=gn,r=Ft,a=ti,o=rn,c=tn,l=i.DEFAULT_ANISOTROPY,d=Fn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$c++}),this.uuid=Rs(),this.name="",this.source=new zi(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(za).x}get height(){return this.source.getSize(za).y}get depth(){return this.source.getSize(za).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){ke(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){ke(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ao)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case fr:e.x=e.x-Math.floor(e.x);break;case gn:e.x=e.x<0?0:1;break;case pr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case fr:e.y=e.y-Math.floor(e.y);break;case gn:e.y=e.y<0?0:1;break;case pr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Gt.DEFAULT_IMAGE=null;Gt.DEFAULT_MAPPING=Ao;Gt.DEFAULT_ANISOTROPY=1;var Go=class Go{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],d=c[4],f=c[8],h=c[1],g=c[5],x=c[9],S=c[2],m=c[6],u=c[10];if(Math.abs(d-h)<.01&&Math.abs(f-S)<.01&&Math.abs(x-m)<.01){if(Math.abs(d+h)<.1&&Math.abs(f+S)<.1&&Math.abs(x+m)<.1&&Math.abs(l+g+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let R=(l+1)/2,y=(g+1)/2,E=(u+1)/2,M=(d+h)/4,I=(f+S)/4,_=(x+m)/4;return R>y&&R>E?R<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(R),s=M/n,r=I/n):y>E?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=M/s,r=_/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=I/r,s=_/r),this.set(n,s,r,t),this}let w=Math.sqrt((m-x)*(m-x)+(f-S)*(f-S)+(h-d)*(h-d));return Math.abs(w)<.001&&(w=1),this.x=(m-x)/w,this.y=(f-S)/w,this.z=(h-d)/w,this.w=Math.acos((l+g+u-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this.w=at(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this.w=at(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Go.prototype.isVector4=!0;var bt=Go,xr=class extends xn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ft,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new bt(0,0,e,t),this.scissorTest=!1,this.viewport=new bt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new Gt(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Ft,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new zi(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Kt=class extends xr{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},os=class extends Gt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var vr=class extends Gt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Br=class Br{constructor(e,t,n,s,r,a,o,c,l,d,f,h,g,x,S,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,d,f,h,g,x,S,m)}set(e,t,n,s,r,a,o,c,l,d,f,h,g,x,S,m){let u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=s,u[1]=r,u[5]=a,u[9]=o,u[13]=c,u[2]=l,u[6]=d,u[10]=f,u[14]=h,u[3]=g,u[7]=x,u[11]=S,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Br().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Ei.setFromMatrixColumn(e,0).length(),r=1/Ei.setFromMatrixColumn(e,1).length(),a=1/Ei.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),d=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let h=a*d,g=a*f,x=o*d,S=o*f;t[0]=c*d,t[4]=-c*f,t[8]=l,t[1]=g+x*l,t[5]=h-S*l,t[9]=-o*c,t[2]=S-h*l,t[6]=x+g*l,t[10]=a*c}else if(e.order==="YXZ"){let h=c*d,g=c*f,x=l*d,S=l*f;t[0]=h+S*o,t[4]=x*o-g,t[8]=a*l,t[1]=a*f,t[5]=a*d,t[9]=-o,t[2]=g*o-x,t[6]=S+h*o,t[10]=a*c}else if(e.order==="ZXY"){let h=c*d,g=c*f,x=l*d,S=l*f;t[0]=h-S*o,t[4]=-a*f,t[8]=x+g*o,t[1]=g+x*o,t[5]=a*d,t[9]=S-h*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let h=a*d,g=a*f,x=o*d,S=o*f;t[0]=c*d,t[4]=x*l-g,t[8]=h*l+S,t[1]=c*f,t[5]=S*l+h,t[9]=g*l-x,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let h=a*c,g=a*l,x=o*c,S=o*l;t[0]=c*d,t[4]=S-h*f,t[8]=x*f+g,t[1]=f,t[5]=a*d,t[9]=-o*d,t[2]=-l*d,t[6]=g*f+x,t[10]=h-S*f}else if(e.order==="XZY"){let h=a*c,g=a*l,x=o*c,S=o*l;t[0]=c*d,t[4]=-f,t[8]=l*d,t[1]=h*f+S,t[5]=a*d,t[9]=g*f-x,t[2]=x*f-g,t[6]=o*d,t[10]=S*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Zc,e,Jc)}lookAt(e,t,n){let s=this.elements;return Yt.subVectors(e,t),Yt.lengthSq()===0&&(Yt.z=1),Yt.normalize(),kn.crossVectors(n,Yt),kn.lengthSq()===0&&(Math.abs(n.z)===1?Yt.x+=1e-4:Yt.z+=1e-4,Yt.normalize(),kn.crossVectors(n,Yt)),kn.normalize(),Us.crossVectors(Yt,kn),s[0]=kn.x,s[4]=Us.x,s[8]=Yt.x,s[1]=kn.y,s[5]=Us.y,s[9]=Yt.y,s[2]=kn.z,s[6]=Us.z,s[10]=Yt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],d=n[1],f=n[5],h=n[9],g=n[13],x=n[2],S=n[6],m=n[10],u=n[14],w=n[3],R=n[7],y=n[11],E=n[15],M=s[0],I=s[4],_=s[8],b=s[12],L=s[1],P=s[5],z=s[9],j=s[13],K=s[2],k=s[6],O=s[10],H=s[14],Z=s[3],ce=s[7],de=s[11],me=s[15];return r[0]=a*M+o*L+c*K+l*Z,r[4]=a*I+o*P+c*k+l*ce,r[8]=a*_+o*z+c*O+l*de,r[12]=a*b+o*j+c*H+l*me,r[1]=d*M+f*L+h*K+g*Z,r[5]=d*I+f*P+h*k+g*ce,r[9]=d*_+f*z+h*O+g*de,r[13]=d*b+f*j+h*H+g*me,r[2]=x*M+S*L+m*K+u*Z,r[6]=x*I+S*P+m*k+u*ce,r[10]=x*_+S*z+m*O+u*de,r[14]=x*b+S*j+m*H+u*me,r[3]=w*M+R*L+y*K+E*Z,r[7]=w*I+R*P+y*k+E*ce,r[11]=w*_+R*z+y*O+E*de,r[15]=w*b+R*j+y*H+E*me,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],d=e[2],f=e[6],h=e[10],g=e[14],x=e[3],S=e[7],m=e[11],u=e[15],w=c*g-l*h,R=o*g-l*f,y=o*h-c*f,E=a*g-l*d,M=a*h-c*d,I=a*f-o*d;return t*(S*w-m*R+u*y)-n*(x*w-m*E+u*M)+s*(x*R-S*E+u*I)-r*(x*y-S*M+m*I)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],c=e[2],l=e[6],d=e[10];return t*(a*d-o*l)-n*(r*d-o*c)+s*(r*l-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],d=e[8],f=e[9],h=e[10],g=e[11],x=e[12],S=e[13],m=e[14],u=e[15],w=t*o-n*a,R=t*c-s*a,y=t*l-r*a,E=n*c-s*o,M=n*l-r*o,I=s*l-r*c,_=d*S-f*x,b=d*m-h*x,L=d*u-g*x,P=f*m-h*S,z=f*u-g*S,j=h*u-g*m,K=w*j-R*z+y*P+E*L-M*b+I*_;if(K===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/K;return e[0]=(o*j-c*z+l*P)*k,e[1]=(s*z-n*j-r*P)*k,e[2]=(S*I-m*M+u*E)*k,e[3]=(h*M-f*I-g*E)*k,e[4]=(c*L-a*j-l*b)*k,e[5]=(t*j-s*L+r*b)*k,e[6]=(m*y-x*I-u*R)*k,e[7]=(d*I-h*y+g*R)*k,e[8]=(a*z-o*L+l*_)*k,e[9]=(n*L-t*z-r*_)*k,e[10]=(x*M-S*y+u*w)*k,e[11]=(f*y-d*M-g*w)*k,e[12]=(o*b-a*P-c*_)*k,e[13]=(t*P-n*b+s*_)*k,e[14]=(S*R-x*E-m*w)*k,e[15]=(d*E-f*R+h*w)*k,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,d=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,d*o+n,d*c-s*a,0,l*c-s*o,d*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,d=a+a,f=o+o,h=r*l,g=r*d,x=r*f,S=a*d,m=a*f,u=o*f,w=c*l,R=c*d,y=c*f,E=n.x,M=n.y,I=n.z;return s[0]=(1-(S+u))*E,s[1]=(g+y)*E,s[2]=(x-R)*E,s[3]=0,s[4]=(g-y)*M,s[5]=(1-(h+u))*M,s[6]=(m+w)*M,s[7]=0,s[8]=(x+R)*I,s[9]=(m-w)*I,s[10]=(1-(h+S))*I,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Ei.set(s[0],s[1],s[2]).length(),o=Ei.set(s[4],s[5],s[6]).length(),c=Ei.set(s[8],s[9],s[10]).length();r<0&&(a=-a),on.copy(this);let l=1/a,d=1/o,f=1/c;return on.elements[0]*=l,on.elements[1]*=l,on.elements[2]*=l,on.elements[4]*=d,on.elements[5]*=d,on.elements[6]*=d,on.elements[8]*=f,on.elements[9]*=f,on.elements[10]*=f,t.setFromRotationMatrix(on),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,s,r,a,o=hn,c=!1){let l=this.elements,d=2*r/(t-e),f=2*r/(n-s),h=(t+e)/(t-e),g=(n+s)/(n-s),x,S;if(c)x=r/(a-r),S=a*r/(a-r);else if(o===hn)x=-(a+r)/(a-r),S=-2*a*r/(a-r);else if(o===rs)x=-a/(a-r),S=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=d,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=f,l[9]=g,l[13]=0,l[2]=0,l[6]=0,l[10]=x,l[14]=S,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=hn,c=!1){let l=this.elements,d=2/(t-e),f=2/(n-s),h=-(t+e)/(t-e),g=-(n+s)/(n-s),x,S;if(c)x=1/(a-r),S=a/(a-r);else if(o===hn)x=-2/(a-r),S=-(a+r)/(a-r);else if(o===rs)x=-1/(a-r),S=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=d,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=f,l[9]=0,l[13]=g,l[2]=0,l[6]=0,l[10]=x,l[14]=S,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Br.prototype.isMatrix4=!0;var St=Br,Ei=new X,on=new St,Zc=new X(0,0,0),Jc=new X(1,1,1),kn=new X,Us=new X,Yt=new X,ul=new St,dl=new vn,$n=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],d=s[9],f=s[2],h=s[6],g=s[10];switch(t){case"XYZ":this._y=Math.asin(at(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,g),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-at(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(at(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-at(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,g),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(at(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-at(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,g),this._y=0);break;default:ke("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ul.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ul,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return dl.setFromEuler(this),this.setFromQuaternion(dl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};$n.DEFAULT_ORDER="XYZ";var ls=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Kc=0,fl=new X,wi=new vn,Cn=new St,Fs=new X,Qi=new X,Qc=new X,jc=new vn,pl=new X(1,0,0),ml=new X(0,1,0),gl=new X(0,0,1),_l={type:"added"},eh={type:"removed"},Ci={type:"childadded",child:null},ka={type:"childremoved",child:null},Qt=class i extends xn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Kc++}),this.uuid=Rs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new X,t=new $n,n=new vn,s=new X(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new St},normalMatrix:{value:new qe}}),this.matrix=new St,this.matrixWorld=new St,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ls,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return wi.setFromAxisAngle(e,t),this.quaternion.multiply(wi),this}rotateOnWorldAxis(e,t){return wi.setFromAxisAngle(e,t),this.quaternion.premultiply(wi),this}rotateX(e){return this.rotateOnAxis(pl,e)}rotateY(e){return this.rotateOnAxis(ml,e)}rotateZ(e){return this.rotateOnAxis(gl,e)}translateOnAxis(e,t){return fl.copy(e).applyQuaternion(this.quaternion),this.position.add(fl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(pl,e)}translateY(e){return this.translateOnAxis(ml,e)}translateZ(e){return this.translateOnAxis(gl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Cn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Fs.copy(e):Fs.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Qi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Cn.lookAt(Qi,Fs,this.up):Cn.lookAt(Fs,Qi,this.up),this.quaternion.setFromRotationMatrix(Cn),s&&(Cn.extractRotation(s.matrixWorld),wi.setFromRotationMatrix(Cn),this.quaternion.premultiply(wi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ge("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(_l),Ci.child=e,this.dispatchEvent(Ci),Ci.child=null):Ge("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(eh),ka.child=e,this.dispatchEvent(ka),ka.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Cn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Cn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Cn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(_l),Ci.child=e,this.dispatchEvent(Ci),Ci.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qi,e,Qc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qi,jc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,d=c.length;l<d;l++){let f=c[l];r(e.shapes,f)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),d=a(e.images),f=a(e.shapes),h=a(e.skeletons),g=a(e.animations),x=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),d.length>0&&(n.images=d),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),g.length>0&&(n.animations=g),x.length>0&&(n.nodes=x)}return n.object=s,n;function a(o){let c=[];for(let l in o){let d=o[l];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Qt.DEFAULT_UP=new X(0,1,0);Qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var hi=class extends Qt{constructor(){super(),this.isGroup=!0,this.type="Group"}},th={type:"move"},ki=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let S of e.hand.values()){let m=t.getJointPose(S,n),u=this._getHandJoint(l,S);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}let d=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],h=d.position.distanceTo(f.position),g=.02,x=.005;l.inputState.pinching&&h>g+x?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=g-x&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(th)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new hi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},cc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vn={h:0,s:0,l:0},Os={h:0,s:0,l:0};function Va(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var lt=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=rt.workingColorSpace){return this.r=e,this.g=t,this.b=n,rt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=rt.workingColorSpace){if(e=Xc(e,1),t=at(t,0,1),n=at(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Va(a,r,e+1/3),this.g=Va(a,r,e),this.b=Va(a,r,e-1/3)}return rt.colorSpaceToWorking(this,s),this}setStyle(e,t=Zt){function n(r){r!==void 0&&parseFloat(r)<1&&ke("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:ke("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);ke("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Zt){let n=cc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):ke("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Dn(e.r),this.g=Dn(e.g),this.b=Dn(e.b),this}copyLinearToSRGB(e){return this.r=Oi(e.r),this.g=Oi(e.g),this.b=Oi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Zt){return rt.workingToColorSpace(kt.copy(this),e),Math.round(at(kt.r*255,0,255))*65536+Math.round(at(kt.g*255,0,255))*256+Math.round(at(kt.b*255,0,255))}getHexString(e=Zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rt.workingColorSpace){rt.workingToColorSpace(kt.copy(this),t);let n=kt.r,s=kt.g,r=kt.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,d=(o+a)/2;if(o===a)c=0,l=0;else{let f=a-o;switch(l=d<=.5?f/(a+o):f/(2-a-o),a){case n:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-n)/f+2;break;case r:c=(n-s)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=d,e}getRGB(e,t=rt.workingColorSpace){return rt.workingToColorSpace(kt.copy(this),t),e.r=kt.r,e.g=kt.g,e.b=kt.b,e}getStyle(e=Zt){rt.workingToColorSpace(kt.copy(this),e);let t=kt.r,n=kt.g,s=kt.b;return e!==Zt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Vn),this.setHSL(Vn.h+e,Vn.s+t,Vn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Vn),e.getHSL(Os);let n=Ua(Vn.h,Os.h,t),s=Ua(Vn.s,Os.s,t),r=Ua(Vn.l,Os.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},kt=new lt;lt.NAMES=cc;var pi=class extends Qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $n,this.environmentIntensity=1,this.environmentRotation=new $n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},ln=new X,Rn=new X,Ga=new X,In=new X,Ri=new X,Ii=new X,xl=new X,Ha=new X,Wa=new X,Xa=new X,qa=new bt,Ya=new bt,$a=new bt,qn=class i{constructor(e=new X,t=new X,n=new X){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),ln.subVectors(e,t),s.cross(ln);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){ln.subVectors(s,t),Rn.subVectors(n,t),Ga.subVectors(e,t);let a=ln.dot(ln),o=ln.dot(Rn),c=ln.dot(Ga),l=Rn.dot(Rn),d=Rn.dot(Ga),f=a*l-o*o;if(f===0)return r.set(0,0,0),null;let h=1/f,g=(l*c-o*d)*h,x=(a*d-o*c)*h;return r.set(1-g-x,x,g)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,In)===null?!1:In.x>=0&&In.y>=0&&In.x+In.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,In)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,In.x),c.addScaledVector(a,In.y),c.addScaledVector(o,In.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return qa.setScalar(0),Ya.setScalar(0),$a.setScalar(0),qa.fromBufferAttribute(e,t),Ya.fromBufferAttribute(e,n),$a.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(qa,r.x),a.addScaledVector(Ya,r.y),a.addScaledVector($a,r.z),a}static isFrontFacing(e,t,n,s){return ln.subVectors(n,t),Rn.subVectors(e,t),ln.cross(Rn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ln.subVectors(this.c,this.b),Rn.subVectors(this.a,this.b),ln.cross(Rn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Ri.subVectors(s,n),Ii.subVectors(r,n),Ha.subVectors(e,n);let c=Ri.dot(Ha),l=Ii.dot(Ha);if(c<=0&&l<=0)return t.copy(n);Wa.subVectors(e,s);let d=Ri.dot(Wa),f=Ii.dot(Wa);if(d>=0&&f<=d)return t.copy(s);let h=c*f-d*l;if(h<=0&&c>=0&&d<=0)return a=c/(c-d),t.copy(n).addScaledVector(Ri,a);Xa.subVectors(e,r);let g=Ri.dot(Xa),x=Ii.dot(Xa);if(x>=0&&g<=x)return t.copy(r);let S=g*l-c*x;if(S<=0&&l>=0&&x<=0)return o=l/(l-x),t.copy(n).addScaledVector(Ii,o);let m=d*x-g*f;if(m<=0&&f-d>=0&&g-x>=0)return xl.subVectors(r,s),o=(f-d)/(f-d+(g-x)),t.copy(s).addScaledVector(xl,o);let u=1/(m+S+h);return a=S*u,o=h*u,t.copy(n).addScaledVector(Ri,a).addScaledVector(Ii,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Zn=class{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(cn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(cn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=cn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,cn):cn.fromBufferAttribute(r,a),cn.applyMatrix4(e.matrixWorld),this.expandByPoint(cn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Bs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Bs.copy(n.boundingBox)),Bs.applyMatrix4(e.matrixWorld),this.union(Bs)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,cn),cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ji),zs.subVectors(this.max,ji),Pi.subVectors(e.a,ji),Li.subVectors(e.b,ji),Di.subVectors(e.c,ji),Gn.subVectors(Li,Pi),Hn.subVectors(Di,Li),ri.subVectors(Pi,Di);let t=[0,-Gn.z,Gn.y,0,-Hn.z,Hn.y,0,-ri.z,ri.y,Gn.z,0,-Gn.x,Hn.z,0,-Hn.x,ri.z,0,-ri.x,-Gn.y,Gn.x,0,-Hn.y,Hn.x,0,-ri.y,ri.x,0];return!Za(t,Pi,Li,Di,zs)||(t=[1,0,0,0,1,0,0,0,1],!Za(t,Pi,Li,Di,zs))?!1:(ks.crossVectors(Gn,Hn),t=[ks.x,ks.y,ks.z],Za(t,Pi,Li,Di,zs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(cn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Pn=[new X,new X,new X,new X,new X,new X,new X,new X],cn=new X,Bs=new Zn,Pi=new X,Li=new X,Di=new X,Gn=new X,Hn=new X,ri=new X,ji=new X,zs=new X,ks=new X,ai=new X;function Za(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ai.fromArray(i,r);let o=s.x*Math.abs(ai.x)+s.y*Math.abs(ai.y)+s.z*Math.abs(ai.z),c=e.dot(ai),l=t.dot(ai),d=n.dot(ai);if(Math.max(-Math.max(c,l,d),Math.min(c,l,d))>o)return!1}return!0}var Et=new X,Vs=new nt,nh=0,Jt=class extends xn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:nh++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=lo,this.updateRanges=[],this.gpuType=fn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Vs.fromBufferAttribute(this,t),Vs.applyMatrix3(e),this.setXY(t,Vs.x,Vs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix3(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix4(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyNormalMatrix(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.transformDirection(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ki(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Xt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ki(t,this.array)),t}setX(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ki(t,this.array)),t}setY(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ki(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ki(t,this.array)),t}setW(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),n=Xt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),n=Xt(n,this.array),s=Xt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),n=Xt(n,this.array),s=Xt(s,this.array),r=Xt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==lo&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}};var cs=class extends Jt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var hs=class extends Jt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var wt=class extends Jt{constructor(e,t,n){super(new Float32Array(e),t,n)}},ih=new Zn,es=new X,Ja=new X,mi=class{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):ih.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;es.subVectors(e,this.center);let t=es.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(es,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ja.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(es.copy(e.center).add(Ja)),this.expandByPoint(es.copy(e.center).sub(Ja))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},sh=0,sn=new St,Ka=new Qt,Ni=new X,$t=new Zn,ts=new Zn,Dt=new X,jt=class i extends xn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sh++}),this.uuid=Rs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Hc(e)?hs:cs)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new qe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return sn.makeRotationFromQuaternion(e),this.applyMatrix4(sn),this}rotateX(e){return sn.makeRotationX(e),this.applyMatrix4(sn),this}rotateY(e){return sn.makeRotationY(e),this.applyMatrix4(sn),this}rotateZ(e){return sn.makeRotationZ(e),this.applyMatrix4(sn),this}translate(e,t,n){return sn.makeTranslation(e,t,n),this.applyMatrix4(sn),this}scale(e,t,n){return sn.makeScale(e,t,n),this.applyMatrix4(sn),this}lookAt(e){return Ka.lookAt(e),Ka.updateMatrix(),this.applyMatrix4(Ka.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ni).negate(),this.translate(Ni.x,Ni.y,Ni.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new wt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&ke("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ge("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];$t.setFromBufferAttribute(r),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,$t.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,$t.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint($t.min),this.boundingBox.expandByPoint($t.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ge('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ge("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){let n=this.boundingSphere.center;if($t.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];ts.setFromBufferAttribute(o),this.morphTargetsRelative?(Dt.addVectors($t.min,ts.min),$t.expandByPoint(Dt),Dt.addVectors($t.max,ts.max),$t.expandByPoint(Dt)):($t.expandByPoint(ts.min),$t.expandByPoint(ts.max))}$t.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Dt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Dt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,d=o.count;l<d;l++)Dt.fromBufferAttribute(o,l),c&&(Ni.fromBufferAttribute(e,l),Dt.add(Ni)),s=Math.max(s,n.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ge('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ge("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Jt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[];for(let _=0;_<n.count;_++)o[_]=new X,c[_]=new X;let l=new X,d=new X,f=new X,h=new nt,g=new nt,x=new nt,S=new X,m=new X;function u(_,b,L){l.fromBufferAttribute(n,_),d.fromBufferAttribute(n,b),f.fromBufferAttribute(n,L),h.fromBufferAttribute(r,_),g.fromBufferAttribute(r,b),x.fromBufferAttribute(r,L),d.sub(l),f.sub(l),g.sub(h),x.sub(h);let P=1/(g.x*x.y-x.x*g.y);isFinite(P)&&(S.copy(d).multiplyScalar(x.y).addScaledVector(f,-g.y).multiplyScalar(P),m.copy(f).multiplyScalar(g.x).addScaledVector(d,-x.x).multiplyScalar(P),o[_].add(S),o[b].add(S),o[L].add(S),c[_].add(m),c[b].add(m),c[L].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let _=0,b=w.length;_<b;++_){let L=w[_],P=L.start,z=L.count;for(let j=P,K=P+z;j<K;j+=3)u(e.getX(j+0),e.getX(j+1),e.getX(j+2))}let R=new X,y=new X,E=new X,M=new X;function I(_){E.fromBufferAttribute(s,_),M.copy(E);let b=o[_];R.copy(b),R.sub(E.multiplyScalar(E.dot(b))).normalize(),y.crossVectors(M,b);let P=y.dot(c[_])<0?-1:1;a.setXYZW(_,R.x,R.y,R.z,P)}for(let _=0,b=w.length;_<b;++_){let L=w[_],P=L.start,z=L.count;for(let j=P,K=P+z;j<K;j+=3)I(e.getX(j+0)),I(e.getX(j+1)),I(e.getX(j+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Jt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,g=n.count;h<g;h++)n.setXYZ(h,0,0,0);let s=new X,r=new X,a=new X,o=new X,c=new X,l=new X,d=new X,f=new X;if(e)for(let h=0,g=e.count;h<g;h+=3){let x=e.getX(h+0),S=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,S),a.fromBufferAttribute(t,m),d.subVectors(a,r),f.subVectors(s,r),d.cross(f),o.fromBufferAttribute(n,x),c.fromBufferAttribute(n,S),l.fromBufferAttribute(n,m),o.add(d),c.add(d),l.add(d),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(S,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,g=t.count;h<g;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),d.subVectors(a,r),f.subVectors(s,r),d.cross(f),n.setXYZ(h+0,d.x,d.y,d.z),n.setXYZ(h+1,d.x,d.y,d.z),n.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Dt.fromBufferAttribute(e,t),Dt.normalize(),e.setXYZ(t,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(o,c){let l=o.array,d=o.itemSize,f=o.normalized,h=new l.constructor(c.length*d),g=0,x=0;for(let S=0,m=c.length;S<m;S++){o.isInterleavedBufferAttribute?g=c[S]*o.data.stride+o.offset:g=c[S]*d;for(let u=0;u<d;u++)h[x++]=l[g++]}return new Jt(h,d,f)}if(this.index===null)return ke("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=e(c,n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let d=0,f=l.length;d<f;d++){let h=l[d],g=e(h,n);c.push(g)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],d=[];for(let f=0,h=l.length;f<h;f++){let g=l[f];d.push(g.toJSON(e.data))}d.length>0&&(s[c]=d,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let d=s[l];this.setAttribute(l,d.clone(t))}let r=e.morphAttributes;for(let l in r){let d=[],f=r[l];for(let h=0,g=f.length;h<g;h++)d.push(f[h].clone(t));this.morphAttributes[l]=d}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,d=a.length;l<d;l++){let f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var rh=0,Jn=class extends xn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rh++}),this.uuid=Rs(),this.name="",this.type="Material",this.blending=di,this.side=Nn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sr,this.blendDst=rr,this.blendEquation=Yn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new lt(0,0,0),this.blendAlpha=0,this.depthFunc=fi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=oo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ci,this.stencilZFail=ci,this.stencilZPass=ci,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){ke(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){ke(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==di&&(n.blending=this.blending),this.side!==Nn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==sr&&(n.blendSrc=this.blendSrc),this.blendDst!==rr&&(n.blendDst=this.blendDst),this.blendEquation!==Yn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==fi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==oo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ci&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ci&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ci&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new lt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new nt().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new nt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Ln=new X,Qa=new X,Gs=new X,Wn=new X,ja=new X,Hs=new X,eo=new X,us=class{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ln)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ln.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ln.copy(this.origin).addScaledVector(this.direction,t),Ln.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Qa.copy(e).add(t).multiplyScalar(.5),Gs.copy(t).sub(e).normalize(),Wn.copy(this.origin).sub(Qa);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Gs),o=Wn.dot(this.direction),c=-Wn.dot(Gs),l=Wn.lengthSq(),d=Math.abs(1-a*a),f,h,g,x;if(d>0)if(f=a*c-o,h=a*o-c,x=r*d,f>=0)if(h>=-x)if(h<=x){let S=1/d;f*=S,h*=S,g=f*(f+a*h+2*o)+h*(a*f+h+2*c)+l}else h=r,f=Math.max(0,-(a*h+o)),g=-f*f+h*(h+2*c)+l;else h=-r,f=Math.max(0,-(a*h+o)),g=-f*f+h*(h+2*c)+l;else h<=-x?(f=Math.max(0,-(-a*r+o)),h=f>0?-r:Math.min(Math.max(-r,-c),r),g=-f*f+h*(h+2*c)+l):h<=x?(f=0,h=Math.min(Math.max(-r,-c),r),g=h*(h+2*c)+l):(f=Math.max(0,-(a*r+o)),h=f>0?r:Math.min(Math.max(-r,-c),r),g=-f*f+h*(h+2*c)+l);else h=a>0?-r:r,f=Math.max(0,-(a*h+o)),g=-f*f+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Qa).addScaledVector(Gs,h),g}intersectSphere(e,t){Ln.subVectors(e.center,this.origin);let n=Ln.dot(this.direction),s=Ln.dot(Ln)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c,l=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,h=this.origin;return l>=0?(n=(e.min.x-h.x)*l,s=(e.max.x-h.x)*l):(n=(e.max.x-h.x)*l,s=(e.min.x-h.x)*l),d>=0?(r=(e.min.y-h.y)*d,a=(e.max.y-h.y)*d):(r=(e.max.y-h.y)*d,a=(e.min.y-h.y)*d),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-h.z)*f,c=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,c=(e.min.z-h.z)*f),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Ln)!==null}intersectTriangle(e,t,n,s,r){ja.subVectors(t,e),Hs.subVectors(n,e),eo.crossVectors(ja,Hs);let a=this.direction.dot(eo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Wn.subVectors(this.origin,e);let c=o*this.direction.dot(Hs.crossVectors(Wn,Hs));if(c<0)return null;let l=o*this.direction.dot(ja.cross(Wn));if(l<0||c+l>a)return null;let d=-o*Wn.dot(eo);return d<0?null:this.at(d/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ds=class extends Jn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.combine=go,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},vl=new St,oi=new us,Ws=new mi,yl=new X,Xs=new X,qs=new X,Ys=new X,to=new X,$s=new X,Ml=new X,Zs=new X,qt=class extends Qt{constructor(e=new jt,t=new ds){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){$s.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let d=o[c],f=r[c];d!==0&&(to.fromBufferAttribute(f,e),a?$s.addScaledVector(to,d):$s.addScaledVector(to.sub(t),d))}t.add($s)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ws.copy(n.boundingSphere),Ws.applyMatrix4(r),oi.copy(e.ray).recast(e.near),!(Ws.containsPoint(oi.origin)===!1&&(oi.intersectSphere(Ws,yl)===null||oi.origin.distanceToSquared(yl)>(e.far-e.near)**2))&&(vl.copy(r).invert(),oi.copy(e.ray).applyMatrix4(vl),!(n.boundingBox!==null&&oi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,oi)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,d=r.attributes.uv1,f=r.attributes.normal,h=r.groups,g=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,S=h.length;x<S;x++){let m=h[x],u=a[m.materialIndex],w=Math.max(m.start,g.start),R=Math.min(o.count,Math.min(m.start+m.count,g.start+g.count));for(let y=w,E=R;y<E;y+=3){let M=o.getX(y),I=o.getX(y+1),_=o.getX(y+2);s=Js(this,u,e,n,l,d,f,M,I,_),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let x=Math.max(0,g.start),S=Math.min(o.count,g.start+g.count);for(let m=x,u=S;m<u;m+=3){let w=o.getX(m),R=o.getX(m+1),y=o.getX(m+2);s=Js(this,a,e,n,l,d,f,w,R,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let x=0,S=h.length;x<S;x++){let m=h[x],u=a[m.materialIndex],w=Math.max(m.start,g.start),R=Math.min(c.count,Math.min(m.start+m.count,g.start+g.count));for(let y=w,E=R;y<E;y+=3){let M=y,I=y+1,_=y+2;s=Js(this,u,e,n,l,d,f,M,I,_),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let x=Math.max(0,g.start),S=Math.min(c.count,g.start+g.count);for(let m=x,u=S;m<u;m+=3){let w=m,R=m+1,y=m+2;s=Js(this,a,e,n,l,d,f,w,R,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function ah(i,e,t,n,s,r,a,o){let c;if(e.side===Wt?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===Nn,o),c===null)return null;Zs.copy(o),Zs.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Zs);return l<t.near||l>t.far?null:{distance:l,point:Zs.clone(),object:i}}function Js(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,Xs),i.getVertexPosition(c,qs),i.getVertexPosition(l,Ys);let d=ah(i,e,t,n,Xs,qs,Ys,Ml);if(d){let f=new X;qn.getBarycoord(Ml,Xs,qs,Ys,f),s&&(d.uv=qn.getInterpolatedAttribute(s,o,c,l,f,new nt)),r&&(d.uv1=qn.getInterpolatedAttribute(r,o,c,l,f,new nt)),a&&(d.normal=qn.getInterpolatedAttribute(a,o,c,l,f,new X),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));let h={a:o,b:c,c:l,normal:new X,materialIndex:0};qn.getNormal(Xs,qs,Ys,h.normal),d.face=h,d.barycoord=f}return d}var yr=class extends Gt{constructor(e=null,t=1,n=1,s,r,a,o,c,l=Nt,d=Nt,f,h){super(null,a,o,c,l,d,s,r,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var no=new X,oh=new X,lh=new qe,mn=class{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=no.subVectors(n,t).cross(oh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(no),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||lh.getNormalMatrix(e),s=this.coplanarPoint(no).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},li=new mi,ch=new nt(.5,.5),Ks=new X,fs=class{constructor(e=new mn,t=new mn,n=new mn,s=new mn,r=new mn,a=new mn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=hn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],d=r[4],f=r[5],h=r[6],g=r[7],x=r[8],S=r[9],m=r[10],u=r[11],w=r[12],R=r[13],y=r[14],E=r[15];if(s[0].setComponents(l-a,g-d,u-x,E-w).normalize(),s[1].setComponents(l+a,g+d,u+x,E+w).normalize(),s[2].setComponents(l+o,g+f,u+S,E+R).normalize(),s[3].setComponents(l-o,g-f,u-S,E-R).normalize(),n)s[4].setComponents(c,h,m,y).normalize(),s[5].setComponents(l-c,g-h,u-m,E-y).normalize();else if(s[4].setComponents(l-c,g-h,u-m,E-y).normalize(),t===hn)s[5].setComponents(l+c,g+h,u+m,E+y).normalize();else if(t===rs)s[5].setComponents(c,h,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),li.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),li.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(li)}intersectsSprite(e){li.center.set(0,0,0);let t=ch.distanceTo(e.center);return li.radius=.7071067811865476+t,li.applyMatrix4(e.matrixWorld),this.intersectsSphere(li)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Ks.x=s.normal.x>0?e.max.x:e.min.x,Ks.y=s.normal.y>0?e.max.y:e.min.y,Ks.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ks)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Mr=class extends Jn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new lt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},bl=new St,co=new us,Qs=new mi,js=new X,ps=class extends Qt{constructor(e=new jt,t=new Mr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Qs.copy(n.boundingSphere),Qs.applyMatrix4(s),Qs.radius+=r,e.ray.intersectsSphere(Qs)===!1)return;bl.copy(s).invert(),co.copy(e.ray).applyMatrix4(bl);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,f=n.attributes.position;if(l!==null){let h=Math.max(0,a.start),g=Math.min(l.count,a.start+a.count);for(let x=h,S=g;x<S;x++){let m=l.getX(x);js.fromBufferAttribute(f,m),Sl(js,m,c,s,e,t,this)}}else{let h=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let x=h,S=g;x<S;x++)js.fromBufferAttribute(f,x),Sl(js,x,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Sl(i,e,t,n,s,r,a){let o=co.distanceSqToPoint(i);if(o<t){let c=new X;co.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var ms=class extends Gt{constructor(e=[],t=ei,n,s,r,a,o,c,l,d){super(e,t,n,s,r,a,o,c,l,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var Un=class extends Gt{constructor(e,t,n=dn,s,r,a,o=Nt,c=Nt,l,d=_n,f=1){if(d!==_n&&d!==ni)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:t,depth:f};super(h,s,r,a,o,c,d,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new zi(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},br=class extends Un{constructor(e,t=dn,n=ei,s,r,a=Nt,o=Nt,c,l=_n){let d={width:e,height:e,depth:1},f=[d,d,d,d,d,d];super(e,e,t,n,s,r,a,o,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},gs=class extends Gt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Vi=class i extends jt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],d=[],f=[],h=0,g=0;x("z","y","x",-1,-1,n,t,e,a,r,0),x("z","y","x",1,-1,n,t,-e,a,r,1),x("x","z","y",1,1,e,n,t,s,a,2),x("x","z","y",1,-1,e,n,-t,s,a,3),x("x","y","z",1,-1,e,t,n,s,r,4),x("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new wt(l,3)),this.setAttribute("normal",new wt(d,3)),this.setAttribute("uv",new wt(f,2));function x(S,m,u,w,R,y,E,M,I,_,b){let L=y/I,P=E/_,z=y/2,j=E/2,K=M/2,k=I+1,O=_+1,H=0,Z=0,ce=new X;for(let de=0;de<O;de++){let me=de*P-j;for(let Se=0;Se<k;Se++){let Ke=Se*L-z;ce[S]=Ke*w,ce[m]=me*R,ce[u]=K,l.push(ce.x,ce.y,ce.z),ce[S]=0,ce[m]=0,ce[u]=M>0?1:-1,d.push(ce.x,ce.y,ce.z),f.push(Se/I),f.push(1-de/_),H+=1}}for(let de=0;de<_;de++)for(let me=0;me<I;me++){let Se=h+me+k*de,Ke=h+me+k*(de+1),Qe=h+(me+1)+k*(de+1),Ze=h+(me+1)+k*de;c.push(Se,Ke,Ze),c.push(Ke,Qe,Ze),Z+=6}o.addGroup(g,Z,b),g+=Z,h+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var gi=class i extends jt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,d=c+1,f=e/o,h=t/c,g=[],x=[],S=[],m=[];for(let u=0;u<d;u++){let w=u*h-a;for(let R=0;R<l;R++){let y=R*f-r;x.push(y,-w,0),S.push(0,0,1),m.push(R/o),m.push(1-u/c)}}for(let u=0;u<c;u++)for(let w=0;w<o;w++){let R=w+l*u,y=w+l*(u+1),E=w+1+l*(u+1),M=w+1+l*u;g.push(R,y,M),g.push(y,E,M)}this.setIndex(g),this.setAttribute("position",new wt(x,3)),this.setAttribute("normal",new wt(S,3)),this.setAttribute("uv",new wt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};function vi(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Al(s))s.isRenderTargetTexture?(ke("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Al(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Ht(i){let e={};for(let t=0;t<i.length;t++){let n=vi(i[t]);for(let s in n)e[s]=n[s]}return e}function Al(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function hh(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Uo(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:rt.workingColorSpace}var hc={clone:vi,merge:Ht},uh=`void main() {
gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dh=`void main() {
gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ot=class extends Jn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=uh,this.fragmentShader=dh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=vi(e.uniforms),this.uniformsGroups=hh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new lt().setHex(s.value);break;case"v2":this.uniforms[n].value=new nt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new X().fromArray(s.value);break;case"v4":this.uniforms[n].value=new bt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new qe().fromArray(s.value);break;case"m4":this.uniforms[n].value=new St().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Sr=class extends Ot{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Ar=class extends Jn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Kl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Tr=class extends Jn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function er(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}var Kn=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Er=class extends Kn{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:so,endingEnd:so}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case ro:r=e,o=2*t-n;break;case ao:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case ro:a=e,c=2*n-t;break;case ao:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}let l=(n-t)*.5,d=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*d,this._offsetNext=a*d}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,d=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,g=this._weightNext,x=(n-t)/(s-t),S=x*x,m=S*x,u=-h*m+2*h*S-h*x,w=(1+h)*m+(-1.5-2*h)*S+(-.5+h)*x+1,R=(-1-g)*m+(1.5+g)*S+.5*x,y=g*m-g*S;for(let E=0;E!==o;++E)r[E]=u*a[d+E]+w*a[l+E]+R*a[c+E]+y*a[f+E];return r}},wr=class extends Kn{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,d=(n-t)/(s-t),f=1-d;for(let h=0;h!==o;++h)r[h]=a[l+h]*f+a[c+h]*d;return r}},Cr=class extends Kn{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Rr=class extends Kn{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,d=this.inTangents,f=this.outTangents;if(!d||!f){let x=(n-t)/(s-t),S=1-x;for(let m=0;m!==o;++m)r[m]=a[l+m]*S+a[c+m]*x;return r}let h=o*2,g=e-1;for(let x=0;x!==o;++x){let S=a[l+x],m=a[c+x],u=g*h+x*2,w=f[u],R=f[u+1],y=e*h+x*2,E=d[y],M=d[y+1],I=(n-t)/(s-t),_,b,L,P,z;for(let j=0;j<8;j++){_=I*I,b=_*I,L=1-I,P=L*L,z=P*L;let k=z*t+3*P*I*w+3*L*_*E+b*s-n;if(Math.abs(k)<1e-10)break;let O=3*P*(w-t)+6*L*I*(E-w)+3*_*(s-E);if(Math.abs(O)<1e-10)break;I=I-k/O,I=Math.max(0,Math.min(1,I))}r[x]=z*S+3*P*I*R+3*L*_*M+b*m}return r}},en=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=er(t,this.TimeBufferType),this.values=er(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:er(e.times,Array),values:er(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Cr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new wr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Er(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Rr(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case ns:t=this.InterpolantFactoryMethodDiscrete;break;case mr:t=this.InterpolantFactoryMethodLinear;break;case ir:t=this.InterpolantFactoryMethodSmooth;break;case io:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ke("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ns;case this.InterpolantFactoryMethodLinear:return mr;case this.InterpolantFactoryMethodSmooth:return ir;case this.InterpolantFactoryMethodBezier:return io}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ge("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ge("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){Ge("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){Ge("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&Wc(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){Ge("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ir,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],d=e[o+1];if(l!==d&&(o!==1||l!==e[0]))if(s)c=!0;else{let f=o*n,h=f-n,g=f+n;for(let x=0;x!==n;++x){let S=t[f+x];if(S!==t[h+x]||S!==t[g+x]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let f=o*n,h=a*n;for(let g=0;g!==n;++g)t[h+g]=t[f+g]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};en.prototype.ValueTypeName="";en.prototype.TimeBufferType=Float32Array;en.prototype.ValueBufferType=Float32Array;en.prototype.DefaultInterpolation=mr;var Qn=class extends en{constructor(e,t,n){super(e,t,n)}};Qn.prototype.ValueTypeName="bool";Qn.prototype.ValueBufferType=Array;Qn.prototype.DefaultInterpolation=ns;Qn.prototype.InterpolantFactoryMethodLinear=void 0;Qn.prototype.InterpolantFactoryMethodSmooth=void 0;var Ir=class extends en{constructor(e,t,n,s){super(e,t,n,s)}};Ir.prototype.ValueTypeName="color";var Pr=class extends en{constructor(e,t,n,s){super(e,t,n,s)}};Pr.prototype.ValueTypeName="number";var Lr=class extends Kn{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t),l=e*o;for(let d=l+o;l!==d;l+=4)vn.slerpFlat(r,0,a,l-o,a,l,c);return r}},_s=class extends en{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Lr(this.times,this.values,this.getValueSize(),e)}};_s.prototype.ValueTypeName="quaternion";_s.prototype.InterpolantFactoryMethodSmooth=void 0;var jn=class extends en{constructor(e,t,n){super(e,t,n)}};jn.prototype.ValueTypeName="string";jn.prototype.ValueBufferType=Array;jn.prototype.DefaultInterpolation=ns;jn.prototype.InterpolantFactoryMethodLinear=void 0;jn.prototype.InterpolantFactoryMethodSmooth=void 0;var Dr=class extends en{constructor(e,t,n,s){super(e,t,n,s)}};Dr.prototype.ValueTypeName="vector";var Nr=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(d){o++,r===!1&&s.onStart!==void 0&&s.onStart(d,a,o),r=!0},this.itemEnd=function(d){a++,s.onProgress!==void 0&&s.onProgress(d,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return d=d.normalize("NFC"),c?c(d):d},this.setURLModifier=function(d){return c=d,this},this.addHandler=function(d,f){return l.push(d,f),this},this.removeHandler=function(d){let f=l.indexOf(d);return f!==-1&&l.splice(f,2),this},this.getHandler=function(d){for(let f=0,h=l.length;f<h;f+=2){let g=l[f],x=l[f+1];if(g.global&&(g.lastIndex=0),g.test(d))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},uc=new Nr,Ur=class{constructor(e){this.manager=e!==void 0?e:uc,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Ur.DEFAULT_MATERIAL_NAME="__DEFAULT";var tr=new X,nr=new vn,pn=new X,_i=class extends Qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new St,this.projectionMatrix=new St,this.projectionMatrixInverse=new St,this.coordinateSystem=hn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(tr,nr,pn),pn.x===1&&pn.y===1&&pn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(tr,nr,pn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(tr,nr,pn),pn.x===1&&pn.y===1&&pn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(tr,nr,pn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Xn=new X,Tl=new nt,El=new nt,Vt=class extends _i{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=gr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Na*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return gr*2*Math.atan(Math.tan(Na*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Xn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Xn.x,Xn.y).multiplyScalar(-e/Xn.z),Xn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Xn.x,Xn.y).multiplyScalar(-e/Xn.z)}getViewSize(e,t){return this.getViewBounds(e,Tl,El),t.subVectors(El,Tl)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Na*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var xs=class extends _i{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=d*this.view.offsetY,c=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var Ui=-90,Fi=1,Fr=class extends Qt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Vt(Ui,Fi,e,t);s.layers=this.layers,this.add(s);let r=new Vt(Ui,Fi,e,t);r.layers=this.layers,this.add(r);let a=new Vt(Ui,Fi,e,t);a.layers=this.layers,this.add(a);let o=new Vt(Ui,Fi,e,t);o.layers=this.layers,this.add(o);let c=new Vt(Ui,Fi,e,t);c.layers=this.layers,this.add(c);let l=new Vt(Ui,Fi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===hn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===rs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,d]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=S,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(f,h,g),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},Or=class extends Vt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Fo="\\[\\]\\.:\\/",fh=new RegExp("["+Fo+"]","g"),Oo="[^"+Fo+"]",ph="[^"+Fo.replace("\\.","")+"]",mh=/((?:WC+[\/:])*)/.source.replace("WC",Oo),gh=/(WCOD+)?/.source.replace("WCOD",ph),_h=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Oo),xh=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Oo),vh=new RegExp("^"+mh+gh+_h+xh+"$"),yh=["material","materials","bones","map"],ho=class{constructor(e,t,n){let s=n||vt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},vt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(fh,"")}static parseTrackName(e){let t=vh.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);yh.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){ke("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){Ge("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ge("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ge("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===l){l=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ge("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ge("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ge("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){Ge("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[s];if(a===void 0){let l=t.nodeName;Ge("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ge("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ge("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};vt.Composite=ho;vt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};vt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};vt.prototype.GetterByBindingType=[vt.prototype._getValue_direct,vt.prototype._getValue_array,vt.prototype._getValue_arrayElement,vt.prototype._getValue_toArray];vt.prototype.SetterByBindingTypeAndVersioning=[[vt.prototype._setValue_direct,vt.prototype._setValue_direct_setNeedsUpdate,vt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_array,vt.prototype._setValue_array_setNeedsUpdate,vt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_arrayElement,vt.prototype._setValue_arrayElement_setNeedsUpdate,vt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_fromArray,vt.prototype._setValue_fromArray_setNeedsUpdate,vt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var fm=new Float32Array(1);var Ho=class Ho{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};Ho.prototype.isMatrix2=!0;var uo=Ho;function Bo(i,e,t,n){let s=Mh(n);switch(t){case Ro:return i*e;case Po:return i*e/s.components*s.byteLength;case Xr:return i*e/s.components*s.byteLength;case ii:return i*e*2/s.components*s.byteLength;case qr:return i*e*2/s.components*s.byteLength;case Io:return i*e*3/s.components*s.byteLength;case rn:return i*e*4/s.components*s.byteLength;case Yr:return i*e*4/s.components*s.byteLength;case Ss:case As:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ts:case Es:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Zr:case Kr:return Math.max(i,16)*Math.max(e,8)/4;case $r:case Jr:return Math.max(i,8)*Math.max(e,8)/2;case Qr:case jr:case ta:case na:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ea:case ws:case ia:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case sa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ra:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case aa:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case oa:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case la:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case ca:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ha:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ua:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case da:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case fa:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case pa:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ma:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ga:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case _a:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case xa:case va:case ya:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Ma:case ba:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Cs:case Sa:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Mh(i){switch(i){case tn:case To:return{byteLength:1,components:1};case Hi:case Eo:case bn:return{byteLength:2,components:1};case Hr:case Wr:return{byteLength:2,components:4};case dn:case Gr:case fn:return{byteLength:4,components:1};case wo:case Co:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));typeof window<"u"&&(window.__THREE__?ke("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="185");function Nc(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Sh(i){let e=new WeakMap;function t(o,c){let l=o.array,d=o.usage,f=l.byteLength,h=i.createBuffer();i.bindBuffer(c,h),i.bufferData(c,l,d),o.onUploadCallback();let g;if(l instanceof Float32Array)g=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)g=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?g=i.HALF_FLOAT:g=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)g=i.SHORT;else if(l instanceof Uint32Array)g=i.UNSIGNED_INT;else if(l instanceof Int32Array)g=i.INT;else if(l instanceof Int8Array)g=i.BYTE;else if(l instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:g,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,c,l){let d=c.array,f=c.updateRanges;if(i.bindBuffer(l,o),f.length===0)i.bufferSubData(l,0,d);else{f.sort((g,x)=>g.start-x.start);let h=0;for(let g=1;g<f.length;g++){let x=f[h],S=f[g];S.start<=x.start+x.count+1?x.count=Math.max(x.count,S.start+S.count-x.start):(++h,f[h]=S)}f.length=h+1;for(let g=0,x=f.length;g<x;g++){let S=f[g];i.bufferSubData(l,S.start*d.BYTES_PER_ELEMENT,d,S.start,S.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var Ah=`#ifdef USE_ALPHAHASH
if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Th=`#ifdef USE_ALPHAHASH
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
#endif`,Eh=`#ifdef USE_ALPHAMAP
diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wh=`#ifdef USE_ALPHAMAP
uniform sampler2D alphaMap;
#endif`,Ch=`#ifdef USE_ALPHATEST
#ifdef ALPHA_TO_COVERAGE
diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
if ( diffuseColor.a == 0.0 ) discard;
#else
if ( diffuseColor.a < alphaTest ) discard;
#endif
#endif`,Rh=`#ifdef USE_ALPHATEST
uniform float alphaTest;
#endif`,Ih=`#ifdef USE_AOMAP
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
#endif`,Ph=`#ifdef USE_AOMAP
uniform sampler2D aoMap;
uniform float aoMapIntensity;
#endif`,Lh=`#ifdef USE_BATCHING
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
#endif`,Dh=`#ifdef USE_BATCHING
mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Nh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
vPosition = vec3( position );
#endif`,Uh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
vec3 objectTangent = vec3( tangent.xyz );
#endif`,Fh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Oh=`#ifdef USE_IRIDESCENCE
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
#endif`,Bh=`#ifdef USE_BUMPMAP
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
#endif`,zh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,kh=`#if NUM_CLIPPING_PLANES > 0
varying vec3 vClipPosition;
uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Vh=`#if NUM_CLIPPING_PLANES > 0
varying vec3 vClipPosition;
#endif`,Gh=`#if NUM_CLIPPING_PLANES > 0
vClipPosition = - mvPosition.xyz;
#endif`,Hh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
diffuseColor *= vColor;
#endif`,Wh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
varying vec4 vColor;
#endif`,Xh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
varying vec4 vColor;
#endif`,qh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Yh=`#define PI 3.141592653589793
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
} // validated`,$h=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Zh=`vec3 transformedNormal = objectNormal;
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
#endif`,Jh=`#ifdef USE_DISPLACEMENTMAP
uniform sampler2D displacementMap;
uniform float displacementScale;
uniform float displacementBias;
#endif`,Kh=`#ifdef USE_DISPLACEMENTMAP
transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Qh=`#ifdef USE_EMISSIVEMAP
vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
emissiveColor = sRGBTransferEOTF( emissiveColor );
#endif
totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jh=`#ifdef USE_EMISSIVEMAP
uniform sampler2D emissiveMap;
#endif`,eu="gl_FragColor = linearToOutputTexel( gl_FragColor );",tu=`vec4 LinearTransferOETF( in vec4 value ) {
return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,nu=`#ifdef USE_ENVMAP
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
#endif`,iu=`#ifdef USE_ENVMAP
uniform float envMapIntensity;
uniform mat3 envMapRotation;
#ifdef ENVMAP_TYPE_CUBE
uniform samplerCube envMap;
#else
uniform sampler2D envMap;
#endif
#endif`,su=`#ifdef USE_ENVMAP
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
#endif`,ru=`#ifdef USE_ENVMAP
#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
#define ENV_WORLDPOS
#endif
#ifdef ENV_WORLDPOS

varying vec3 vWorldPosition;
#else
varying vec3 vReflect;
uniform float refractionRatio;
#endif
#endif`,au=`#ifdef USE_ENVMAP
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
#endif`,ou=`#ifdef USE_FOG
vFogDepth = - mvPosition.z;
#endif`,lu=`#ifdef USE_FOG
varying float vFogDepth;
#endif`,cu=`#ifdef USE_FOG
#ifdef FOG_EXP2
float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
#else
float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
#endif
gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hu=`#ifdef USE_FOG
uniform vec3 fogColor;
varying float vFogDepth;
#ifdef FOG_EXP2
uniform float fogDensity;
#else
uniform float fogNear;
uniform float fogFar;
#endif
#endif`,uu=`#ifdef USE_GRADIENTMAP
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
}`,du=`#ifdef USE_LIGHTMAP
uniform sampler2D lightMap;
uniform float lightMapIntensity;
#endif`,fu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mu=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,gu=`#ifdef USE_ENVMAP
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
#endif`,_u=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Mu=`PhysicalMaterial material;
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
#endif`,bu=`uniform sampler2D dfgLUT;
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
}`,Su=`
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
#endif`,Au=`#if defined( RE_IndirectDiffuse )
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
#endif`,Tu=`#if defined( RE_IndirectDiffuse )
#if defined( LAMBERT ) || defined( PHONG )
irradiance += iblIrradiance;
#endif
RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Eu=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,wu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Cu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
uniform float logDepthBufFC;
varying float vFragDepth;
varying float vIsPerspective;
#endif`,Ru=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
varying float vFragDepth;
varying float vIsPerspective;
#endif`,Iu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
vFragDepth = 1.0 + gl_Position.w;
vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Pu=`#ifdef USE_MAP
vec4 sampledDiffuseColor = texture2D( map, vMapUv );
#ifdef DECODE_VIDEO_TEXTURE
sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
#endif
diffuseColor *= sampledDiffuseColor;
#endif`,Lu=`#ifdef USE_MAP
uniform sampler2D map;
#endif`,Du=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Nu=`#if defined( USE_POINTS_UV )
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
#endif`,Uu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
metalnessFactor *= texelMetalness.b;
#endif`,Fu=`#ifdef USE_METALNESSMAP
uniform sampler2D metalnessMap;
#endif`,Ou=`#ifdef USE_INSTANCING_MORPH
float morphTargetInfluences[ MORPHTARGETS_COUNT ];
float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
}
#endif`,Bu=`#if defined( USE_MORPHCOLORS )
vColor *= morphTargetBaseInfluence;
for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
#if defined( USE_COLOR_ALPHA )
if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
#elif defined( USE_COLOR )
if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
#endif
}
#endif`,zu=`#ifdef USE_MORPHNORMALS
objectNormal *= morphTargetBaseInfluence;
for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
}
#endif`,ku=`#ifdef USE_MORPHTARGETS
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
#endif`,Vu=`#ifdef USE_MORPHTARGETS
transformed *= morphTargetBaseInfluence;
for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
}
#endif`,Gu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Hu=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Wu=`#ifndef FLAT_SHADED
varying vec3 vNormal;
#ifdef USE_TANGENT
varying vec3 vTangent;
varying vec3 vBitangent;
#endif
#endif`,Xu=`#ifndef FLAT_SHADED
varying vec3 vNormal;
#ifdef USE_TANGENT
varying vec3 vTangent;
varying vec3 vBitangent;
#endif
#endif`,qu=`#ifndef FLAT_SHADED
vNormal = normalize( transformedNormal );
#ifdef USE_TANGENT
vTangent = normalize( transformedTangent );
vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
#ifdef FLIP_SIDED
vBitangent = - vBitangent;
#endif
#endif
#endif`,Yu=`#ifdef USE_NORMALMAP
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
#endif`,$u=`#ifdef USE_CLEARCOAT
vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Zu=`#ifdef USE_CLEARCOAT_NORMALMAP
vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
clearcoatMapN.xy *= clearcoatNormalScale;
clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ju=`#ifdef USE_CLEARCOATMAP
uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
uniform sampler2D clearcoatNormalMap;
uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
uniform sampler2D clearcoatRoughnessMap;
#endif`,Ku=`#ifdef USE_IRIDESCENCEMAP
uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
uniform sampler2D iridescenceThicknessMap;
#endif`,Qu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ju=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ed=`#ifdef PREMULTIPLIED_ALPHA
gl_FragColor.rgb *= gl_FragColor.a;
#endif`,td=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,nd=`#ifdef DITHERING
gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,id=`#ifdef DITHERING
vec3 dithering( vec3 color ) {
float grid_position = rand( gl_FragCoord.xy );
vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
return color + dither_shift_RGB;
}
#endif`,sd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
roughnessFactor *= texelRoughness.g;
#endif`,rd=`#ifdef USE_ROUGHNESSMAP
uniform sampler2D roughnessMap;
#endif`,ad=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,od=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ld=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,cd=`float getShadowMask() {
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
}`,hd=`#ifdef USE_SKINNING
mat4 boneMatX = getBoneMatrix( skinIndex.x );
mat4 boneMatY = getBoneMatrix( skinIndex.y );
mat4 boneMatZ = getBoneMatrix( skinIndex.z );
mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ud=`#ifdef USE_SKINNING
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
#endif`,dd=`#ifdef USE_SKINNING
vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
vec4 skinned = vec4( 0.0 );
skinned += boneMatX * skinVertex * skinWeight.x;
skinned += boneMatY * skinVertex * skinWeight.y;
skinned += boneMatZ * skinVertex * skinWeight.z;
skinned += boneMatW * skinVertex * skinWeight.w;
transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fd=`#ifdef USE_SKINNING
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
#endif`,pd=`float specularStrength;
#ifdef USE_SPECULARMAP
vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
specularStrength = texelSpecular.r;
#else
specularStrength = 1.0;
#endif`,md=`#ifdef USE_SPECULARMAP
uniform sampler2D specularMap;
#endif`,gd=`#if defined( TONE_MAPPING )
gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_d=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,xd=`#ifdef USE_TRANSMISSION
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
#endif`,vd=`#ifdef USE_TRANSMISSION
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
#endif`,yd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Md=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
vec4 worldPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
worldPosition = batchingMatrix * worldPosition;
#endif
#ifdef USE_INSTANCING
worldPosition = instanceMatrix * worldPosition;
#endif
worldPosition = modelMatrix * worldPosition;
#endif`,Ad=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Td=`uniform sampler2D t2D;
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
}`,Ed=`varying vec3 vWorldDirection;
#include <common>
void main() {
vWorldDirection = transformDirection( position, modelMatrix );
#include <begin_vertex>
#include <project_vertex>
gl_Position.z = gl_Position.w;
}`,wd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Cd=`varying vec3 vWorldDirection;
#include <common>
void main() {
vWorldDirection = transformDirection( position, modelMatrix );
#include <begin_vertex>
#include <project_vertex>
gl_Position.z = gl_Position.w;
}`,Rd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
gl_FragColor = texColor;
gl_FragColor.a *= opacity;
#include <tonemapping_fragment>
#include <colorspace_fragment>
}`,Id=`#include <common>
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
}`,Pd=`#if DEPTH_PACKING == 3200
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
}`,Ld=`#define DISTANCE
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
}`,Dd=`#define DISTANCE
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
}`,Nd=`varying vec3 vWorldDirection;
#include <common>
void main() {
vWorldDirection = transformDirection( position, modelMatrix );
#include <begin_vertex>
#include <project_vertex>
}`,Ud=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
vec3 direction = normalize( vWorldDirection );
vec2 sampleUV = equirectUv( direction );
gl_FragColor = texture2D( tEquirect, sampleUV );
#include <tonemapping_fragment>
#include <colorspace_fragment>
}`,Fd=`uniform float scale;
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
}`,Od=`uniform vec3 diffuse;
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
}`,Bd=`#include <common>
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
}`,zd=`uniform vec3 diffuse;
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
}`,kd=`#define LAMBERT
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
}`,Vd=`#define LAMBERT
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
}`,Gd=`#define MATCAP
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
}`,Hd=`#define MATCAP
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
}`,Wd=`#define NORMAL
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
}`,Xd=`#define NORMAL
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
}`,qd=`#define PHONG
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
}`,Yd=`#define PHONG
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
}`,$d=`#define STANDARD
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
}`,Zd=`#define STANDARD
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
}`,Jd=`#define TOON
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
}`,Kd=`#define TOON
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
}`,Qd=`uniform float size;
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
}`,jd=`uniform vec3 diffuse;
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
}`,ef=`#include <common>
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
}`,tf=`uniform vec3 color;
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
}`,nf=`uniform float rotation;
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
}`,sf=`uniform vec3 diffuse;
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
}`,et={alphahash_fragment:Ah,alphahash_pars_fragment:Th,alphamap_fragment:Eh,alphamap_pars_fragment:wh,alphatest_fragment:Ch,alphatest_pars_fragment:Rh,aomap_fragment:Ih,aomap_pars_fragment:Ph,batching_pars_vertex:Lh,batching_vertex:Dh,begin_vertex:Nh,beginnormal_vertex:Uh,bsdfs:Fh,iridescence_fragment:Oh,bumpmap_pars_fragment:Bh,clipping_planes_fragment:zh,clipping_planes_pars_fragment:kh,clipping_planes_pars_vertex:Vh,clipping_planes_vertex:Gh,color_fragment:Hh,color_pars_fragment:Wh,color_pars_vertex:Xh,color_vertex:qh,common:Yh,cube_uv_reflection_fragment:$h,defaultnormal_vertex:Zh,displacementmap_pars_vertex:Jh,displacementmap_vertex:Kh,emissivemap_fragment:Qh,emissivemap_pars_fragment:jh,colorspace_fragment:eu,colorspace_pars_fragment:tu,envmap_fragment:nu,envmap_common_pars_fragment:iu,envmap_pars_fragment:su,envmap_pars_vertex:ru,envmap_physical_pars_fragment:gu,envmap_vertex:au,fog_vertex:ou,fog_pars_vertex:lu,fog_fragment:cu,fog_pars_fragment:hu,gradientmap_pars_fragment:uu,lightmap_pars_fragment:du,lights_lambert_fragment:fu,lights_lambert_pars_fragment:pu,lights_pars_begin:mu,lights_toon_fragment:_u,lights_toon_pars_fragment:xu,lights_phong_fragment:vu,lights_phong_pars_fragment:yu,lights_physical_fragment:Mu,lights_physical_pars_fragment:bu,lights_fragment_begin:Su,lights_fragment_maps:Au,lights_fragment_end:Tu,lightprobes_pars_fragment:Eu,logdepthbuf_fragment:wu,logdepthbuf_pars_fragment:Cu,logdepthbuf_pars_vertex:Ru,logdepthbuf_vertex:Iu,map_fragment:Pu,map_pars_fragment:Lu,map_particle_fragment:Du,map_particle_pars_fragment:Nu,metalnessmap_fragment:Uu,metalnessmap_pars_fragment:Fu,morphinstance_vertex:Ou,morphcolor_vertex:Bu,morphnormal_vertex:zu,morphtarget_pars_vertex:ku,morphtarget_vertex:Vu,normal_fragment_begin:Gu,normal_fragment_maps:Hu,normal_pars_fragment:Wu,normal_pars_vertex:Xu,normal_vertex:qu,normalmap_pars_fragment:Yu,clearcoat_normal_fragment_begin:$u,clearcoat_normal_fragment_maps:Zu,clearcoat_pars_fragment:Ju,iridescence_pars_fragment:Ku,opaque_fragment:Qu,packing:ju,premultiplied_alpha_fragment:ed,project_vertex:td,dithering_fragment:nd,dithering_pars_fragment:id,roughnessmap_fragment:sd,roughnessmap_pars_fragment:rd,shadowmap_pars_fragment:ad,shadowmap_pars_vertex:od,shadowmap_vertex:ld,shadowmask_pars_fragment:cd,skinbase_vertex:hd,skinning_pars_vertex:ud,skinning_vertex:dd,skinnormal_vertex:fd,specularmap_fragment:pd,specularmap_pars_fragment:md,tonemapping_fragment:gd,tonemapping_pars_fragment:_d,transmission_fragment:xd,transmission_pars_fragment:vd,uv_pars_fragment:yd,uv_pars_vertex:Md,uv_vertex:bd,worldpos_vertex:Sd,background_vert:Ad,background_frag:Td,backgroundCube_vert:Ed,backgroundCube_frag:wd,cube_vert:Cd,cube_frag:Rd,depth_vert:Id,depth_frag:Pd,distance_vert:Ld,distance_frag:Dd,equirect_vert:Nd,equirect_frag:Ud,linedashed_vert:Fd,linedashed_frag:Od,meshbasic_vert:Bd,meshbasic_frag:zd,meshlambert_vert:kd,meshlambert_frag:Vd,meshmatcap_vert:Gd,meshmatcap_frag:Hd,meshnormal_vert:Wd,meshnormal_frag:Xd,meshphong_vert:qd,meshphong_frag:Yd,meshphysical_vert:$d,meshphysical_frag:Zd,meshtoon_vert:Jd,meshtoon_frag:Kd,points_vert:Qd,points_frag:jd,shadow_vert:ef,shadow_frag:tf,sprite_vert:nf,sprite_frag:sf},be={common:{diffuse:{value:new lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new X},probesMax:{value:new X},probesResolution:{value:new X}},points:{diffuse:{value:new lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new lt(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},An={basic:{uniforms:Ht([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:Ht([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new lt(0)},envMapIntensity:{value:1}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:Ht([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new lt(0)},specular:{value:new lt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:Ht([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:Ht([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new lt(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:Ht([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:Ht([be.points,be.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:Ht([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:Ht([be.common,be.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:Ht([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:Ht([be.sprite,be.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distance:{uniforms:Ht([be.common,be.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distance_vert,fragmentShader:et.distance_frag},shadow:{uniforms:Ht([be.lights,be.fog,{color:{value:new lt(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};An.physical={uniforms:Ht([An.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new lt(0)},specularColor:{value:new lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};var Ea={r:0,b:0,g:0},rf=new St,Uc=new qe;Uc.set(-1,0,0,0,1,0,0,0,1);function af(i,e,t,n,s,r){let a=new lt(0),o=s===!0?0:1,c,l,d=null,f=0,h=null;function g(w){let R=w.isScene===!0?w.background:null;if(R&&R.isTexture){let y=w.backgroundBlurriness>0;R=e.get(R,y)}return R}function x(w){let R=!1,y=g(w);y===null?m(a,o):y&&y.isColor&&(m(y,1),R=!0);let E=i.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||R)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function S(w,R){let y=g(R);y&&(y.isCubeTexture||y.mapping===Ms)?(l===void 0&&(l=new qt(new Vi(1,1,1),new Ot({name:"BackgroundCubeMaterial",uniforms:vi(An.backgroundCube.uniforms),vertexShader:An.backgroundCube.vertexShader,fragmentShader:An.backgroundCube.fragmentShader,side:Wt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(E,M,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=y,l.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(rf.makeRotationFromEuler(R.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Uc),l.material.toneMapped=rt.getTransfer(y.colorSpace)!==mt,(d!==y||f!==y.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,d=y,f=y.version,h=i.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new qt(new gi(2,2),new Ot({name:"BackgroundMaterial",uniforms:vi(An.background.uniforms),vertexShader:An.background.vertexShader,fragmentShader:An.background.fragmentShader,side:Nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.toneMapped=rt.getTransfer(y.colorSpace)!==mt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||f!==y.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,d=y,f=y.version,h=i.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function m(w,R){w.getRGB(Ea,Uo(i)),t.buffers.color.setClear(Ea.r,Ea.g,Ea.b,R,r)}function u(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(w,R=1){a.set(w),o=R,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(w){o=w,m(a,o)},render:x,addToRenderList:S,dispose:u}}function of(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null),r=s,a=!1;function o(P,z,j,K,k){let O=!1,H=f(P,K,j,z);r!==H&&(r=H,l(r.object)),O=g(P,K,j,k),O&&x(P,K,j,k),k!==null&&e.update(k,i.ELEMENT_ARRAY_BUFFER),(O||a)&&(a=!1,y(P,z,j,K),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function c(){return i.createVertexArray()}function l(P){return i.bindVertexArray(P)}function d(P){return i.deleteVertexArray(P)}function f(P,z,j,K){let k=K.wireframe===!0,O=n[z.id];O===void 0&&(O={},n[z.id]=O);let H=P.isInstancedMesh===!0?P.id:0,Z=O[H];Z===void 0&&(Z={},O[H]=Z);let ce=Z[j.id];ce===void 0&&(ce={},Z[j.id]=ce);let de=ce[k];return de===void 0&&(de=h(c()),ce[k]=de),de}function h(P){let z=[],j=[],K=[];for(let k=0;k<t;k++)z[k]=0,j[k]=0,K[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:j,attributeDivisors:K,object:P,attributes:{},index:null}}function g(P,z,j,K){let k=r.attributes,O=z.attributes,H=0,Z=j.getAttributes();for(let ce in Z)if(Z[ce].location>=0){let me=k[ce],Se=O[ce];if(Se===void 0&&(ce==="instanceMatrix"&&P.instanceMatrix&&(Se=P.instanceMatrix),ce==="instanceColor"&&P.instanceColor&&(Se=P.instanceColor)),me===void 0||me.attribute!==Se||Se&&me.data!==Se.data)return!0;H++}return r.attributesNum!==H||r.index!==K}function x(P,z,j,K){let k={},O=z.attributes,H=0,Z=j.getAttributes();for(let ce in Z)if(Z[ce].location>=0){let me=O[ce];me===void 0&&(ce==="instanceMatrix"&&P.instanceMatrix&&(me=P.instanceMatrix),ce==="instanceColor"&&P.instanceColor&&(me=P.instanceColor));let Se={};Se.attribute=me,me&&me.data&&(Se.data=me.data),k[ce]=Se,H++}r.attributes=k,r.attributesNum=H,r.index=K}function S(){let P=r.newAttributes;for(let z=0,j=P.length;z<j;z++)P[z]=0}function m(P){u(P,0)}function u(P,z){let j=r.newAttributes,K=r.enabledAttributes,k=r.attributeDivisors;j[P]=1,K[P]===0&&(i.enableVertexAttribArray(P),K[P]=1),k[P]!==z&&(i.vertexAttribDivisor(P,z),k[P]=z)}function w(){let P=r.newAttributes,z=r.enabledAttributes;for(let j=0,K=z.length;j<K;j++)z[j]!==P[j]&&(i.disableVertexAttribArray(j),z[j]=0)}function R(P,z,j,K,k,O,H){H===!0?i.vertexAttribIPointer(P,z,j,k,O):i.vertexAttribPointer(P,z,j,K,k,O)}function y(P,z,j,K){S();let k=K.attributes,O=j.getAttributes(),H=z.defaultAttributeValues;for(let Z in O){let ce=O[Z];if(ce.location>=0){let de=k[Z];if(de===void 0&&(Z==="instanceMatrix"&&P.instanceMatrix&&(de=P.instanceMatrix),Z==="instanceColor"&&P.instanceColor&&(de=P.instanceColor)),de!==void 0){let me=de.normalized,Se=de.itemSize,Ke=e.get(de);if(Ke===void 0)continue;let Qe=Ke.buffer,Ze=Ke.type,ee=Ke.bytesPerElement,te=Ze===i.INT||Ze===i.UNSIGNED_INT||de.gpuType===Gr;if(de.isInterleavedBufferAttribute){let ae=de.data,Pe=ae.stride,Ue=de.offset;if(ae.isInstancedInterleavedBuffer){for(let Ee=0;Ee<ce.locationSize;Ee++)u(ce.location+Ee,ae.meshPerAttribute);P.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Ee=0;Ee<ce.locationSize;Ee++)m(ce.location+Ee);i.bindBuffer(i.ARRAY_BUFFER,Qe);for(let Ee=0;Ee<ce.locationSize;Ee++)R(ce.location+Ee,Se/ce.locationSize,Ze,me,Pe*ee,(Ue+Se/ce.locationSize*Ee)*ee,te)}else{if(de.isInstancedBufferAttribute){for(let ae=0;ae<ce.locationSize;ae++)u(ce.location+ae,de.meshPerAttribute);P.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let ae=0;ae<ce.locationSize;ae++)m(ce.location+ae);i.bindBuffer(i.ARRAY_BUFFER,Qe);for(let ae=0;ae<ce.locationSize;ae++)R(ce.location+ae,Se/ce.locationSize,Ze,me,Se*ee,Se/ce.locationSize*ae*ee,te)}}else if(H!==void 0){let me=H[Z];if(me!==void 0)switch(me.length){case 2:i.vertexAttrib2fv(ce.location,me);break;case 3:i.vertexAttrib3fv(ce.location,me);break;case 4:i.vertexAttrib4fv(ce.location,me);break;default:i.vertexAttrib1fv(ce.location,me)}}}}w()}function E(){b();for(let P in n){let z=n[P];for(let j in z){let K=z[j];for(let k in K){let O=K[k];for(let H in O)d(O[H].object),delete O[H];delete K[k]}}delete n[P]}}function M(P){if(n[P.id]===void 0)return;let z=n[P.id];for(let j in z){let K=z[j];for(let k in K){let O=K[k];for(let H in O)d(O[H].object),delete O[H];delete K[k]}}delete n[P.id]}function I(P){for(let z in n){let j=n[z];for(let K in j){let k=j[K];if(k[P.id]===void 0)continue;let O=k[P.id];for(let H in O)d(O[H].object),delete O[H];delete k[P.id]}}}function _(P){for(let z in n){let j=n[z],K=P.isInstancedMesh===!0?P.id:0,k=j[K];if(k!==void 0){for(let O in k){let H=k[O];for(let Z in H)d(H[Z].object),delete H[Z];delete k[O]}delete j[K],Object.keys(j).length===0&&delete n[z]}}}function b(){L(),a=!0,r!==s&&(r=s,l(r.object))}function L(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:b,resetDefaultState:L,dispose:E,releaseStatesOfGeometry:M,releaseStatesOfObject:_,releaseStatesOfProgram:I,initAttributes:S,enableAttribute:m,disableUnusedAttributes:w}}function lf(i,e,t){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function a(c,l,d){d!==0&&(i.drawArraysInstanced(n,c,l,d),t.update(l,n,d))}function o(c,l,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,d);let h=0;for(let g=0;g<d;g++)h+=l[g];t.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function cf(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let I=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(I){return!(I!==rn&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(I){let _=I===bn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==tn&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==fn&&!_)}function c(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",d=c(l);d!==l&&(ke("WebGLRenderer:",l,"not supported, using",d,"instead."),l=d);let f=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&ke("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let g=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),R=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=i.getParameter(i.MAX_SAMPLES),M=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:g,maxVertexTextures:x,maxTextureSize:S,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:w,maxVaryings:R,maxFragmentUniforms:y,maxSamples:E,samples:M}}function hf(i){let e=this,t=null,n=0,s=!1,r=!1,a=new mn,o=new qe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){let g=f.length!==0||h||n!==0||s;return s=h,n=f.length,g},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){t=d(f,h,0)},this.setState=function(f,h,g){let x=f.clippingPlanes,S=f.clipIntersection,m=f.clipShadows,u=i.get(f);if(!s||x===null||x.length===0||r&&!m)r?d(null):l();else{let w=r?0:n,R=w*4,y=u.clippingState||null;c.value=y,y=d(x,h,R,g);for(let E=0;E!==R;++E)y[E]=t[E];u.clippingState=y,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(f,h,g,x){let S=f!==null?f.length:0,m=null;if(S!==0){if(m=c.value,x!==!0||m===null){let u=g+S*4,w=h.matrixWorldInverse;o.getNormalMatrix(w),(m===null||m.length<u)&&(m=new Float32Array(u));for(let R=0,y=g;R!==S;++R,y+=4)a.copy(f[R]).applyMatrix4(w,o),a.normal.toArray(m,y),m[y+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,m}}var si=4,dc=[.125,.215,.35,.446,.526,.582],yi=20,uf=256,Is=new xs,fc=new lt,Wo=null,Xo=0,qo=0,Yo=!1,df=new X,Ca=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=df}=r;Wo=this._renderer.getRenderTarget(),Xo=this._renderer.getActiveCubeFace(),qo=this._renderer.getActiveMipmapLevel(),Yo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Wo,Xo,qo),this._renderer.xr.enabled=Yo,e.scissorTest=!1,Xi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ei||e.mapping===xi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wo=this._renderer.getRenderTarget(),Xo=this._renderer.getActiveCubeFace(),qo=this._renderer.getActiveMipmapLevel(),Yo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ft,minFilter:Ft,generateMipmaps:!1,type:bn,format:rn,colorSpace:is,depthBuffer:!1},s=pc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=pc(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=ff(r)),this._blurMaterial=mf(r,e,t),this._ggxMaterial=pf(r,e,t)}return s}_compileMaterial(e){let t=new qt(new jt,e);this._renderer.compile(t,Is)}_sceneToCubeUV(e,t,n,s,r){let c=new Vt(90,1,t,n),l=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,g=f.toneMapping;f.getClearColor(fc),f.toneMapping=un,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new qt(new Vi,new ds({name:"PMREM.Background",side:Wt,depthWrite:!1,depthTest:!1})));let S=this._backgroundBox,m=S.material,u=!1,w=e.background;w?w.isColor&&(m.color.copy(w),e.background=null,u=!0):(m.color.copy(fc),u=!0);for(let R=0;R<6;R++){let y=R%3;y===0?(c.up.set(0,l[R],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+d[R],r.y,r.z)):y===1?(c.up.set(0,0,l[R]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+d[R],r.z)):(c.up.set(0,l[R],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+d[R]));let E=this._cubeSize;Xi(s,y*E,R>2?E:0,E,E),f.setRenderTarget(s),u&&f.render(S,c),f.render(e,c)}f.toneMapping=g,f.autoClear=h,e.background=w}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===ei||e.mapping===xi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=gc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mc());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let c=this._cubeSize;Xi(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Is)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let c=a.uniforms,l=n/(this._lodMeshes.length-1),d=t/(this._lodMeshes.length-1),f=Math.sqrt(l*l-d*d),h=0+l*1.25,g=f*h,{_lodMax:x}=this,S=this._sizeLods[n],m=3*S*(n>x-si?n-x+si:0),u=4*(this._cubeSize-S);c.envMap.value=e.texture,c.roughness.value=g,c.mipInt.value=x-t,Xi(r,m,u,3*S,2*S),s.setRenderTarget(r),s.render(o,Is),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=x-n,Xi(e,m,u,3*S,2*S),s.setRenderTarget(e),s.render(o,Is)}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Ge("blur direction must be either latitudinal or longitudinal!");let d=3,f=this._lodMeshes[s];f.material=l;let h=l.uniforms,g=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*g):2*Math.PI/(2*yi-1),S=r/x,m=isFinite(r)?1+Math.floor(d*S):yi;m>yi&&ke(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${yi}`);let u=[],w=0;for(let I=0;I<yi;++I){let _=I/S,b=Math.exp(-_*_/2);u.push(b),I===0?w+=b:I<m&&(w+=2*b)}for(let I=0;I<u.length;I++)u[I]=u[I]/w;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=u,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);let{_lodMax:R}=this;h.dTheta.value=x,h.mipInt.value=R-n;let y=this._sizeLods[s],E=3*y*(s>R-si?s-R+si:0),M=4*(this._cubeSize-y);Xi(t,E,M,3*y,2*y),c.setRenderTarget(t),c.render(f,Is)}};function ff(i){let e=[],t=[],n=[],s=i,r=i-si+1+dc.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let c=1/o;a>i-si?c=dc[a-i+si-1]:a===0&&(c=0),t.push(c);let l=1/(o-2),d=-l,f=1+l,h=[d,d,f,d,f,f,d,d,f,f,d,f],g=6,x=6,S=3,m=2,u=1,w=new Float32Array(S*x*g),R=new Float32Array(m*x*g),y=new Float32Array(u*x*g);for(let M=0;M<g;M++){let I=M%3*2/3-1,_=M>2?0:-1,b=[I,_,0,I+2/3,_,0,I+2/3,_+1,0,I,_,0,I+2/3,_+1,0,I,_+1,0];w.set(b,S*x*M),R.set(h,m*x*M);let L=[M,M,M,M,M,M];y.set(L,u*x*M)}let E=new jt;E.setAttribute("position",new Jt(w,S)),E.setAttribute("uv",new Jt(R,m)),E.setAttribute("faceIndex",new Jt(y,u)),n.push(new qt(E,null)),s>si&&s--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function pc(i,e,t){let n=new Kt(i,e,t);return n.texture.mapping=Ms,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Xi(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function pf(i,e,t){return new Ot({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:uf,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ia(),fragmentShader:`

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
`,blending:Mn,depthTest:!1,depthWrite:!1})}function mf(i,e,t){let n=new Float32Array(yi),s=new X(0,1,0);return new Ot({name:"SphericalGaussianBlur",defines:{n:yi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ia(),fragmentShader:`

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
`,blending:Mn,depthTest:!1,depthWrite:!1})}function mc(){return new Ot({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ia(),fragmentShader:`

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
`,blending:Mn,depthTest:!1,depthWrite:!1})}function gc(){return new Ot({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ia(),fragmentShader:`

precision mediump float;
precision mediump int;

uniform float flipEnvMap;

varying vec3 vOutputDirection;

uniform samplerCube envMap;

void main() {

gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

}
`,blending:Mn,depthTest:!1,depthWrite:!1})}function Ia(){return`

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
`}var Ra=class extends Kt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new ms(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
`},s=new Vi(5,5,5),r=new Ot({name:"CubemapFromEquirect",uniforms:vi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Wt,blending:Mn});r.uniforms.tEquirect.value=t;let a=new qt(s,r),o=t.minFilter;return t.minFilter===ti&&(t.minFilter=Ft),new Fr(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}};function gf(i){let e=new WeakMap,t=new WeakMap,n=null;function s(h,g=!1){return h==null?null:g?a(h):r(h)}function r(h){if(h&&h.isTexture){let g=h.mapping;if(g===zr||g===kr)if(e.has(h)){let x=e.get(h).texture;return o(x,h.mapping)}else{let x=h.image;if(x&&x.height>0){let S=new Ra(x.height);return S.fromEquirectangularTexture(i,h),e.set(h,S),h.addEventListener("dispose",l),o(S.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){let g=h.mapping,x=g===zr||g===kr,S=g===ei||g===xi;if(x||S){let m=t.get(h),u=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==u)return n===null&&(n=new Ca(i)),m=x?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{let w=h.image;return x&&w&&w.height>0||S&&w&&c(w)?(n===null&&(n=new Ca(i)),m=x?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",d),m.texture):null}}}return h}function o(h,g){return g===zr?h.mapping=ei:g===kr&&(h.mapping=xi),h}function c(h){let g=0,x=6;for(let S=0;S<x;S++)h[S]!==void 0&&g++;return g===x}function l(h){let g=h.target;g.removeEventListener("dispose",l);let x=e.get(g);x!==void 0&&(e.delete(g),x.dispose())}function d(h){let g=h.target;g.removeEventListener("dispose",d);let x=t.get(g);x!==void 0&&(t.delete(g),x.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function _f(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&ui("WebGLRenderer: "+n+" extension not supported."),s}}}function xf(i,e,t,n){let s={},r=new WeakMap;function a(f){let h=f.target;h.index!==null&&e.remove(h.index);for(let x in h.attributes)e.remove(h.attributes[x]);h.removeEventListener("dispose",a),delete s[h.id];let g=r.get(h);g&&(e.remove(g),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,t.memory.geometries++),h}function c(f){let h=f.attributes;for(let g in h)e.update(h[g],i.ARRAY_BUFFER)}function l(f){let h=[],g=f.index,x=f.attributes.position,S=0;if(x===void 0)return;if(g!==null){let w=g.array;S=g.version;for(let R=0,y=w.length;R<y;R+=3){let E=w[R+0],M=w[R+1],I=w[R+2];h.push(E,M,M,I,I,E)}}else{let w=x.array;S=x.version;for(let R=0,y=w.length/3-1;R<y;R+=3){let E=R+0,M=R+1,I=R+2;h.push(E,M,M,I,I,E)}}let m=new(x.count>=65535?hs:cs)(h,1);m.version=S;let u=r.get(f);u&&e.remove(u),r.set(f,m)}function d(f){let h=r.get(f);if(h){let g=f.index;g!==null&&h.version<g.version&&l(f)}else l(f);return r.get(f)}return{get:o,update:c,getWireframeAttribute:d}}function vf(i,e,t){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function c(f,h){i.drawElements(n,h,r,f*a),t.update(h,n,1)}function l(f,h,g){g!==0&&(i.drawElementsInstanced(n,h,r,f*a,g),t.update(h,n,g))}function d(f,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,f,0,g);let S=0;for(let m=0;m<g;m++)S+=h[m];t.update(S,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=d}function yf(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Ge("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Mf(i,e,t){let n=new WeakMap,s=new bt;function r(a,o,c){let l=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=d!==void 0?d.length:0,h=n.get(o);if(h===void 0||h.count!==f){let b=function(){I.dispose(),n.delete(o),o.removeEventListener("dispose",b)};h!==void 0&&h.texture.dispose();let g=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,S=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],u=o.morphAttributes.normal||[],w=o.morphAttributes.color||[],R=0;g===!0&&(R=1),x===!0&&(R=2),S===!0&&(R=3);let y=o.attributes.position.count*R,E=1;y>e.maxTextureSize&&(E=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let M=new Float32Array(y*E*4*f),I=new os(M,y,E,f);I.type=fn,I.needsUpdate=!0;let _=R*4;for(let L=0;L<f;L++){let P=m[L],z=u[L],j=w[L],K=y*E*4*L;for(let k=0;k<P.count;k++){let O=k*_;g===!0&&(s.fromBufferAttribute(P,k),M[K+O+0]=s.x,M[K+O+1]=s.y,M[K+O+2]=s.z,M[K+O+3]=0),x===!0&&(s.fromBufferAttribute(z,k),M[K+O+4]=s.x,M[K+O+5]=s.y,M[K+O+6]=s.z,M[K+O+7]=0),S===!0&&(s.fromBufferAttribute(j,k),M[K+O+8]=s.x,M[K+O+9]=s.y,M[K+O+10]=s.z,M[K+O+11]=j.itemSize===4?s.w:1)}}h={count:f,texture:I,size:new nt(y,E)},n.set(o,h),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let g=0;for(let S=0;S<l.length;S++)g+=l[S];let x=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",x),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function bf(i,e,t,n,s){let r=new WeakMap;function a(l){let d=s.render.frame,f=l.geometry,h=e.get(l,f);if(r.get(h)!==d&&(e.update(h),r.set(h,d)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==d&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,d))),l.isSkinnedMesh){let g=l.skeleton;r.get(g)!==d&&(g.update(),r.set(g,d))}return h}function o(){r=new WeakMap}function c(l){let d=l.target;d.removeEventListener("dispose",c),n.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:a,dispose:o}}var Sf={[_o]:"LINEAR_TONE_MAPPING",[xo]:"REINHARD_TONE_MAPPING",[vo]:"CINEON_TONE_MAPPING",[yo]:"ACES_FILMIC_TONE_MAPPING",[bo]:"AGX_TONE_MAPPING",[So]:"NEUTRAL_TONE_MAPPING",[Mo]:"CUSTOM_TONE_MAPPING"};function Af(i,e,t,n,s,r){let a=new Kt(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,depthTexture:s?new Un(e,t):void 0}),o=new Kt(e,t,{type:bn,depthBuffer:!1,stencilBuffer:!1}),c=new jt;c.setAttribute("position",new wt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new wt([0,2,0,0,2,0],2));let l=new Sr({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
}`,depthTest:!1,depthWrite:!1}),d=new qt(c,l),f=new xs(-1,1,1,-1,0,1),h=null,g=null,x=!1,S,m=null,u=[],w=!1;this.setSize=function(R,y){a.setSize(R,y),o.setSize(R,y);for(let E=0;E<u.length;E++){let M=u[E];M.setSize&&M.setSize(R,y)}},this.setEffects=function(R){u=R,w=u.length>0&&u[0].isRenderPass===!0;let y=a.width,E=a.height;for(let M=0;M<u.length;M++){let I=u[M];I.setSize&&I.setSize(y,E)}},this.begin=function(R,y){if(x||R.toneMapping===un&&u.length===0)return!1;if(m=y,y!==null){let E=y.width,M=y.height;(a.width!==E||a.height!==M)&&this.setSize(E,M)}return w===!1&&R.setRenderTarget(a),S=R.toneMapping,R.toneMapping=un,!0},this.hasRenderPass=function(){return w},this.end=function(R,y){R.toneMapping=S,x=!0;let E=a,M=o;for(let I=0;I<u.length;I++){let _=u[I];if(_.enabled!==!1&&(_.render(R,M,E,y),_.needsSwap!==!1)){let b=E;E=M,M=b}}if(h!==R.outputColorSpace||g!==R.toneMapping){h=R.outputColorSpace,g=R.toneMapping,l.defines={},rt.getTransfer(h)===mt&&(l.defines.SRGB_TRANSFER="");let I=Sf[g];I&&(l.defines[I]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=E.texture,R.setRenderTarget(m),R.render(d,f),m=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),c.dispose(),l.dispose()}}var Fc=new Gt,Jo=new Un(1,1),Oc=new os,Bc=new vr,zc=new ms,_c=[],xc=[],vc=new Float32Array(16),yc=new Float32Array(9),Mc=new Float32Array(4);function $i(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=_c[s];if(r===void 0&&(r=new Float32Array(s),_c[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Pt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Lt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Pa(i,e){let t=xc[e];t===void 0&&(t=new Int32Array(e),xc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Tf(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Ef(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;i.uniform2fv(this.addr,e),Lt(t,e)}}function wf(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Pt(t,e))return;i.uniform3fv(this.addr,e),Lt(t,e)}}function Cf(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;i.uniform4fv(this.addr,e),Lt(t,e)}}function Rf(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,n))return;Mc.set(n),i.uniformMatrix2fv(this.addr,!1,Mc),Lt(t,n)}}function If(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,n))return;yc.set(n),i.uniformMatrix3fv(this.addr,!1,yc),Lt(t,n)}}function Pf(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,n))return;vc.set(n),i.uniformMatrix4fv(this.addr,!1,vc),Lt(t,n)}}function Lf(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Df(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;i.uniform2iv(this.addr,e),Lt(t,e)}}function Nf(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;i.uniform3iv(this.addr,e),Lt(t,e)}}function Uf(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;i.uniform4iv(this.addr,e),Lt(t,e)}}function Ff(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Of(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;i.uniform2uiv(this.addr,e),Lt(t,e)}}function Bf(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;i.uniform3uiv(this.addr,e),Lt(t,e)}}function zf(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;i.uniform4uiv(this.addr,e),Lt(t,e)}}function kf(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Jo.compareFunction=t.isReversedDepthBuffer()?Ta:Aa,r=Jo):r=Fc,t.setTexture2D(e||r,s)}function Vf(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Bc,s)}function Gf(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||zc,s)}function Hf(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Oc,s)}function Wf(i){switch(i){case 5126:return Tf;case 35664:return Ef;case 35665:return wf;case 35666:return Cf;case 35674:return Rf;case 35675:return If;case 35676:return Pf;case 5124:case 35670:return Lf;case 35667:case 35671:return Df;case 35668:case 35672:return Nf;case 35669:case 35673:return Uf;case 5125:return Ff;case 36294:return Of;case 36295:return Bf;case 36296:return zf;case 35678:case 36198:case 36298:case 36306:case 35682:return kf;case 35679:case 36299:case 36307:return Vf;case 35680:case 36300:case 36308:case 36293:return Gf;case 36289:case 36303:case 36311:case 36292:return Hf}}function Xf(i,e){i.uniform1fv(this.addr,e)}function qf(i,e){let t=$i(e,this.size,2);i.uniform2fv(this.addr,t)}function Yf(i,e){let t=$i(e,this.size,3);i.uniform3fv(this.addr,t)}function $f(i,e){let t=$i(e,this.size,4);i.uniform4fv(this.addr,t)}function Zf(i,e){let t=$i(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Jf(i,e){let t=$i(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Kf(i,e){let t=$i(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Qf(i,e){i.uniform1iv(this.addr,e)}function jf(i,e){i.uniform2iv(this.addr,e)}function ep(i,e){i.uniform3iv(this.addr,e)}function tp(i,e){i.uniform4iv(this.addr,e)}function np(i,e){i.uniform1uiv(this.addr,e)}function ip(i,e){i.uniform2uiv(this.addr,e)}function sp(i,e){i.uniform3uiv(this.addr,e)}function rp(i,e){i.uniform4uiv(this.addr,e)}function ap(i,e,t){let n=this.cache,s=e.length,r=Pa(t,s);Pt(n,r)||(i.uniform1iv(this.addr,r),Lt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Jo:a=Fc;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function op(i,e,t){let n=this.cache,s=e.length,r=Pa(t,s);Pt(n,r)||(i.uniform1iv(this.addr,r),Lt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Bc,r[a])}function lp(i,e,t){let n=this.cache,s=e.length,r=Pa(t,s);Pt(n,r)||(i.uniform1iv(this.addr,r),Lt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||zc,r[a])}function cp(i,e,t){let n=this.cache,s=e.length,r=Pa(t,s);Pt(n,r)||(i.uniform1iv(this.addr,r),Lt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Oc,r[a])}function hp(i){switch(i){case 5126:return Xf;case 35664:return qf;case 35665:return Yf;case 35666:return $f;case 35674:return Zf;case 35675:return Jf;case 35676:return Kf;case 5124:case 35670:return Qf;case 35667:case 35671:return jf;case 35668:case 35672:return ep;case 35669:case 35673:return tp;case 5125:return np;case 36294:return ip;case 36295:return sp;case 36296:return rp;case 35678:case 36198:case 36298:case 36306:case 35682:return ap;case 35679:case 36299:case 36307:return op;case 35680:case 36300:case 36308:case 36293:return lp;case 36289:case 36303:case 36311:case 36292:return cp}}var Ko=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Wf(t.type)}},Qo=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=hp(t.type)}},jo=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},$o=/(\w+)(\])?(\[|\.)?/g;function bc(i,e){i.seq.push(e),i.map[e.id]=e}function up(i,e,t){let n=i.name,s=n.length;for($o.lastIndex=0;;){let r=$o.exec(n),a=$o.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){bc(t,l===void 0?new Ko(o,i,e):new Qo(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new jo(o),bc(t,f)),t=f}}}var qi=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);up(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Sc(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var dp=37297,fp=0;function pp(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Ac=new qe;function mp(i){rt._getMatrix(Ac,rt.workingColorSpace,i);let e=`mat3( ${Ac.elements.map(t=>t.toFixed(4))} )`;switch(rt.getTransfer(i)){case ss:return[e,"LinearTransferOETF"];case mt:return[e,"sRGBTransferOETF"];default:return ke("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Tc(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+pp(i.getShaderSource(e),o)}else return r}function gp(i,e){let t=mp(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var _p={[_o]:"Linear",[xo]:"Reinhard",[vo]:"Cineon",[yo]:"ACESFilmic",[bo]:"AgX",[So]:"Neutral",[Mo]:"Custom"};function xp(i,e){let t=_p[e];return t===void 0?(ke("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var wa=new X;function vp(){rt.getLuminanceCoefficients(wa);let i=wa.x.toFixed(4),e=wa.y.toFixed(4),t=wa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function yp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ls).join(`
`)}function Mp(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function bp(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Ls(i){return i!==""}function Ec(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function wc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Sp=/^[ \t]*#include +<([\w\d./]+)>/gm;function el(i){return i.replace(Sp,Tp)}var Ap=new Map;function Tp(i,e){let t=et[e];if(t===void 0){let n=Ap.get(e);if(n!==void 0)t=et[n],ke('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return el(t)}var Ep=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cc(i){return i.replace(Ep,wp)}function wp(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Rc(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var Cp={[vs]:"SHADOWMAP_TYPE_PCF",[Gi]:"SHADOWMAP_TYPE_VSM"};function Rp(i){return Cp[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Ip={[ei]:"ENVMAP_TYPE_CUBE",[xi]:"ENVMAP_TYPE_CUBE",[Ms]:"ENVMAP_TYPE_CUBE_UV"};function Pp(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Ip[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Lp={[xi]:"ENVMAP_MODE_REFRACTION"};function Dp(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Lp[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Np={[go]:"ENVMAP_BLENDING_MULTIPLY",[$l]:"ENVMAP_BLENDING_MIX",[Zl]:"ENVMAP_BLENDING_ADD"};function Up(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Np[i.combine]||"ENVMAP_BLENDING_NONE"}function Fp(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Op(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=Rp(t),l=Pp(t),d=Dp(t),f=Up(t),h=Fp(t),g=yp(t),x=Mp(r),S=s.createProgram(),m,u,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Ls).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Ls).join(`
`),u.length>0&&(u+=`
`)):(m=[Rc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ls).join(`
`),u=[Rc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+d:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==un?"#define TONE_MAPPING":"",t.toneMapping!==un?et.tonemapping_pars_fragment:"",t.toneMapping!==un?xp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,gp("linearToOutputTexel",t.outputColorSpace),vp(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ls).join(`
`)),a=el(a),a=Ec(a,t),a=wc(a,t),o=el(o),o=Ec(o,t),o=wc(o,t),a=Cc(a),o=Cc(o),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",t.glslVersion===Do?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Do?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);let R=w+m+a,y=w+u+o,E=Sc(s,s.VERTEX_SHADER,R),M=Sc(s,s.FRAGMENT_SHADER,y);s.attachShader(S,E),s.attachShader(S,M),t.index0AttributeName!==void 0?s.bindAttribLocation(S,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(S,0,"position"),s.linkProgram(S);function I(P){if(i.debug.checkShaderErrors){let z=s.getProgramInfoLog(S)||"",j=s.getShaderInfoLog(E)||"",K=s.getShaderInfoLog(M)||"",k=z.trim(),O=j.trim(),H=K.trim(),Z=!0,ce=!0;if(s.getProgramParameter(S,s.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,S,E,M);else{let de=Tc(s,E,"vertex"),me=Tc(s,M,"fragment");Ge("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(S,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+k+`
`+de+`
`+me)}else k!==""?ke("WebGLProgram: Program Info Log:",k):(O===""||H==="")&&(ce=!1);ce&&(P.diagnostics={runnable:Z,programLog:k,vertexShader:{log:O,prefix:m},fragmentShader:{log:H,prefix:u}})}s.deleteShader(E),s.deleteShader(M),_=new qi(s,S),b=bp(s,S)}let _;this.getUniforms=function(){return _===void 0&&I(this),_};let b;this.getAttributes=function(){return b===void 0&&I(this),b};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=s.getProgramParameter(S,dp)),L},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=fp++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=E,this.fragmentShader=M,this}var Bp=0,tl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new nl(e),t.set(e,n)),n}},nl=class{constructor(e){this.id=Bp++,this.code=e,this.usedTimes=0}};function zp(i){return i===ii||i===ws||i===Cs}function kp(i,e,t,n,s,r){let a=new ls,o=new tl,c=new Set,l=[],d=new Map,f=n.logarithmicDepthBuffer,h=n.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(_){return c.add(_),_===0?"uv":`uv${_}`}function S(_,b,L,P,z,j){let K=P.fog,k=z.geometry,O=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?P.environment:null,H=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,Z=e.get(_.envMap||O,H),ce=Z&&Z.mapping===Ms?Z.image.height:null,de=g[_.type];_.precision!==null&&(h=n.getMaxPrecision(_.precision),h!==_.precision&&ke("WebGLProgram.getParameters:",_.precision,"not supported, using",h,"instead."));let me=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Se=me!==void 0?me.length:0,Ke=0;k.morphAttributes.position!==void 0&&(Ke=1),k.morphAttributes.normal!==void 0&&(Ke=2),k.morphAttributes.color!==void 0&&(Ke=3);let Qe,Ze,ee,te;if(de){let Me=An[de];Qe=Me.vertexShader,Ze=Me.fragmentShader}else{Qe=_.vertexShader,Ze=_.fragmentShader;let Me=o.getVertexShaderStage(_),dt=o.getFragmentShaderStage(_);o.update(_,Me,dt),ee=Me.id,te=dt.id}let ae=i.getRenderTarget(),Pe=i.state.buffers.depth.getReversed(),Ue=z.isInstancedMesh===!0,Ee=z.isBatchedMesh===!0,je=!!_.map,Fe=!!_.matcap,Ye=!!Z,He=!!_.aoMap,Oe=!!_.lightMap,ot=!!_.bumpMap&&_.wireframe===!1,ft=!!_.normalMap,pt=!!_.displacementMap,tt=!!_.emissiveMap,$e=!!_.metalnessMap,gt=!!_.roughnessMap,N=_.anisotropy>0,At=_.clearcoat>0,We=_.dispersion>0,T=_.iridescence>0,p=_.sheen>0,B=_.transmission>0,W=N&&!!_.anisotropyMap,Q=At&&!!_.clearcoatMap,oe=At&&!!_.clearcoatNormalMap,re=At&&!!_.clearcoatRoughnessMap,Y=T&&!!_.iridescenceMap,ne=T&&!!_.iridescenceThicknessMap,ge=p&&!!_.sheenColorMap,Re=p&&!!_.sheenRoughnessMap,ve=!!_.specularMap,_e=!!_.specularColorMap,Le=!!_.specularIntensityMap,Ne=B&&!!_.transmissionMap,C=B&&!!_.thicknessMap,A=!!_.gradientMap,q=!!_.alphaMap,V=_.alphaTest>0,se=!!_.alphaHash,he=!!_.extensions,J=un;_.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(J=i.toneMapping);let pe={shaderID:de,shaderType:_.type,shaderName:_.name,vertexShader:Qe,fragmentShader:Ze,defines:_.defines,customVertexShaderID:ee,customFragmentShaderID:te,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:h,batching:Ee,batchingColor:Ee&&z._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&z.instanceColor!==null,instancingMorph:Ue&&z.morphTexture!==null,outputColorSpace:ae===null?i.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:rt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:je,matcap:Fe,envMap:Ye,envMapMode:Ye&&Z.mapping,envMapCubeUVHeight:ce,aoMap:He,lightMap:Oe,bumpMap:ot,normalMap:ft,displacementMap:pt,emissiveMap:tt,normalMapObjectSpace:ft&&_.normalMapType===Ql,normalMapTangentSpace:ft&&_.normalMapType===Lo,packedNormalMap:ft&&_.normalMapType===Lo&&zp(_.normalMap.format),metalnessMap:$e,roughnessMap:gt,anisotropy:N,anisotropyMap:W,clearcoat:At,clearcoatMap:Q,clearcoatNormalMap:oe,clearcoatRoughnessMap:re,dispersion:We,iridescence:T,iridescenceMap:Y,iridescenceThicknessMap:ne,sheen:p,sheenColorMap:ge,sheenRoughnessMap:Re,specularMap:ve,specularColorMap:_e,specularIntensityMap:Le,transmission:B,transmissionMap:Ne,thicknessMap:C,gradientMap:A,opaque:_.transparent===!1&&_.blending===di&&_.alphaToCoverage===!1,alphaMap:q,alphaTest:V,alphaHash:se,combine:_.combine,mapUv:je&&x(_.map.channel),aoMapUv:He&&x(_.aoMap.channel),lightMapUv:Oe&&x(_.lightMap.channel),bumpMapUv:ot&&x(_.bumpMap.channel),normalMapUv:ft&&x(_.normalMap.channel),displacementMapUv:pt&&x(_.displacementMap.channel),emissiveMapUv:tt&&x(_.emissiveMap.channel),metalnessMapUv:$e&&x(_.metalnessMap.channel),roughnessMapUv:gt&&x(_.roughnessMap.channel),anisotropyMapUv:W&&x(_.anisotropyMap.channel),clearcoatMapUv:Q&&x(_.clearcoatMap.channel),clearcoatNormalMapUv:oe&&x(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&x(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Y&&x(_.iridescenceMap.channel),iridescenceThicknessMapUv:ne&&x(_.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&x(_.sheenColorMap.channel),sheenRoughnessMapUv:Re&&x(_.sheenRoughnessMap.channel),specularMapUv:ve&&x(_.specularMap.channel),specularColorMapUv:_e&&x(_.specularColorMap.channel),specularIntensityMapUv:Le&&x(_.specularIntensityMap.channel),transmissionMapUv:Ne&&x(_.transmissionMap.channel),thicknessMapUv:C&&x(_.thicknessMap.channel),alphaMapUv:q&&x(_.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(ft||N),vertexNormals:!!k.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!k.attributes.uv&&(je||q),fog:!!K,useFog:_.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||k.attributes.normal===void 0&&ft===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Pe,skinning:z.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:Ke,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:j.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:J,decodeVideoTexture:je&&_.map.isVideoTexture===!0&&rt.getTransfer(_.map.colorSpace)===mt,decodeVideoTextureEmissive:tt&&_.emissiveMap.isVideoTexture===!0&&rt.getTransfer(_.emissiveMap.colorSpace)===mt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===yn,flipSided:_.side===Wt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:he&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(he&&_.extensions.multiDraw===!0||Ee)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return pe.vertexUv1s=c.has(1),pe.vertexUv2s=c.has(2),pe.vertexUv3s=c.has(3),c.clear(),pe}function m(_){let b=[];if(_.shaderID?b.push(_.shaderID):(b.push(_.customVertexShaderID),b.push(_.customFragmentShaderID)),_.defines!==void 0)for(let L in _.defines)b.push(L),b.push(_.defines[L]);return _.isRawShaderMaterial===!1&&(u(b,_),w(b,_),b.push(i.outputColorSpace)),b.push(_.customProgramCacheKey),b.join()}function u(_,b){_.push(b.precision),_.push(b.outputColorSpace),_.push(b.envMapMode),_.push(b.envMapCubeUVHeight),_.push(b.mapUv),_.push(b.alphaMapUv),_.push(b.lightMapUv),_.push(b.aoMapUv),_.push(b.bumpMapUv),_.push(b.normalMapUv),_.push(b.displacementMapUv),_.push(b.emissiveMapUv),_.push(b.metalnessMapUv),_.push(b.roughnessMapUv),_.push(b.anisotropyMapUv),_.push(b.clearcoatMapUv),_.push(b.clearcoatNormalMapUv),_.push(b.clearcoatRoughnessMapUv),_.push(b.iridescenceMapUv),_.push(b.iridescenceThicknessMapUv),_.push(b.sheenColorMapUv),_.push(b.sheenRoughnessMapUv),_.push(b.specularMapUv),_.push(b.specularColorMapUv),_.push(b.specularIntensityMapUv),_.push(b.transmissionMapUv),_.push(b.thicknessMapUv),_.push(b.combine),_.push(b.fogExp2),_.push(b.sizeAttenuation),_.push(b.morphTargetsCount),_.push(b.morphAttributeCount),_.push(b.numDirLights),_.push(b.numPointLights),_.push(b.numSpotLights),_.push(b.numSpotLightMaps),_.push(b.numHemiLights),_.push(b.numRectAreaLights),_.push(b.numDirLightShadows),_.push(b.numPointLightShadows),_.push(b.numSpotLightShadows),_.push(b.numSpotLightShadowsWithMaps),_.push(b.numLightProbes),_.push(b.shadowMapType),_.push(b.toneMapping),_.push(b.numClippingPlanes),_.push(b.numClipIntersection),_.push(b.depthPacking)}function w(_,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function R(_){let b=g[_.type],L;if(b){let P=An[b];L=hc.clone(P.uniforms)}else L=_.uniforms;return L}function y(_,b){let L=d.get(b);return L!==void 0?++L.usedTimes:(L=new Op(i,b,_,s),l.push(L),d.set(b,L)),L}function E(_){if(--_.usedTimes===0){let b=l.indexOf(_);l[b]=l[l.length-1],l.pop(),d.delete(_.cacheKey),_.destroy()}}function M(_){o.remove(_)}function I(){o.dispose()}return{getParameters:S,getProgramCacheKey:m,getUniforms:R,acquireProgram:y,releaseProgram:E,releaseShaderCache:M,programs:l,dispose:I}}function Vp(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Gp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Ic(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Pc(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(h){let g=0;return h.isInstancedMesh&&(g+=2),h.isSkinnedMesh&&(g+=1),g}function o(h,g,x,S,m,u){let w=i[e];return w===void 0?(w={id:h.id,object:h,geometry:g,material:x,materialVariant:a(h),groupOrder:S,renderOrder:h.renderOrder,z:m,group:u},i[e]=w):(w.id=h.id,w.object=h,w.geometry=g,w.material=x,w.materialVariant=a(h),w.groupOrder=S,w.renderOrder=h.renderOrder,w.z=m,w.group=u),e++,w}function c(h,g,x,S,m,u){let w=o(h,g,x,S,m,u);x.transmission>0?n.push(w):x.transparent===!0?s.push(w):t.push(w)}function l(h,g,x,S,m,u){let w=o(h,g,x,S,m,u);x.transmission>0?n.unshift(w):x.transparent===!0?s.unshift(w):t.unshift(w)}function d(h,g,x){t.length>1&&t.sort(h||Gp),n.length>1&&n.sort(g||Ic),s.length>1&&s.sort(g||Ic),x&&(t.reverse(),n.reverse(),s.reverse())}function f(){for(let h=e,g=i.length;h<g;h++){let x=i[h];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:f,sort:d}}function Hp(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Pc,i.set(n,[a])):s>=r.length?(a=new Pc,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Wp(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new X,color:new lt};break;case"SpotLight":t={position:new X,direction:new X,color:new lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new lt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new lt,groundColor:new lt};break;case"RectAreaLight":t={color:new lt,position:new X,halfWidth:new X,halfHeight:new X};break}return i[e.id]=t,t}}}function Xp(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var qp=0;function Yp(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function $p(i){let e=new Wp,t=Xp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new X);let s=new X,r=new St,a=new St;function o(l){let d=0,f=0,h=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let g=0,x=0,S=0,m=0,u=0,w=0,R=0,y=0,E=0,M=0,I=0;l.sort(Yp);for(let b=0,L=l.length;b<L;b++){let P=l[b],z=P.color,j=P.intensity,K=P.distance,k=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===ii?k=P.shadow.map.texture:k=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)d+=z.r*j,f+=z.g*j,h+=z.b*j;else if(P.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(P.sh.coefficients[O],j);I++}else if(P.isDirectionalLight){let O=e.get(P);if(O.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let H=P.shadow,Z=t.get(P);Z.shadowIntensity=H.intensity,Z.shadowBias=H.bias,Z.shadowNormalBias=H.normalBias,Z.shadowRadius=H.radius,Z.shadowMapSize=H.mapSize,n.directionalShadow[g]=Z,n.directionalShadowMap[g]=k,n.directionalShadowMatrix[g]=P.shadow.matrix,w++}n.directional[g]=O,g++}else if(P.isSpotLight){let O=e.get(P);O.position.setFromMatrixPosition(P.matrixWorld),O.color.copy(z).multiplyScalar(j),O.distance=K,O.coneCos=Math.cos(P.angle),O.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),O.decay=P.decay,n.spot[S]=O;let H=P.shadow;if(P.map&&(n.spotLightMap[E]=P.map,E++,H.updateMatrices(P),P.castShadow&&M++),n.spotLightMatrix[S]=H.matrix,P.castShadow){let Z=t.get(P);Z.shadowIntensity=H.intensity,Z.shadowBias=H.bias,Z.shadowNormalBias=H.normalBias,Z.shadowRadius=H.radius,Z.shadowMapSize=H.mapSize,n.spotShadow[S]=Z,n.spotShadowMap[S]=k,y++}S++}else if(P.isRectAreaLight){let O=e.get(P);O.color.copy(z).multiplyScalar(j),O.halfWidth.set(P.width*.5,0,0),O.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=O,m++}else if(P.isPointLight){let O=e.get(P);if(O.color.copy(P.color).multiplyScalar(P.intensity),O.distance=P.distance,O.decay=P.decay,P.castShadow){let H=P.shadow,Z=t.get(P);Z.shadowIntensity=H.intensity,Z.shadowBias=H.bias,Z.shadowNormalBias=H.normalBias,Z.shadowRadius=H.radius,Z.shadowMapSize=H.mapSize,Z.shadowCameraNear=H.camera.near,Z.shadowCameraFar=H.camera.far,n.pointShadow[x]=Z,n.pointShadowMap[x]=k,n.pointShadowMatrix[x]=P.shadow.matrix,R++}n.point[x]=O,x++}else if(P.isHemisphereLight){let O=e.get(P);O.skyColor.copy(P.color).multiplyScalar(j),O.groundColor.copy(P.groundColor).multiplyScalar(j),n.hemi[u]=O,u++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=be.LTC_FLOAT_1,n.rectAreaLTC2=be.LTC_FLOAT_2):(n.rectAreaLTC1=be.LTC_HALF_1,n.rectAreaLTC2=be.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=f,n.ambient[2]=h;let _=n.hash;(_.directionalLength!==g||_.pointLength!==x||_.spotLength!==S||_.rectAreaLength!==m||_.hemiLength!==u||_.numDirectionalShadows!==w||_.numPointShadows!==R||_.numSpotShadows!==y||_.numSpotMaps!==E||_.numLightProbes!==I)&&(n.directional.length=g,n.spot.length=S,n.rectArea.length=m,n.point.length=x,n.hemi.length=u,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=R,n.pointShadowMap.length=R,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=R,n.spotLightMatrix.length=y+E-M,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=M,n.numLightProbes=I,_.directionalLength=g,_.pointLength=x,_.spotLength=S,_.rectAreaLength=m,_.hemiLength=u,_.numDirectionalShadows=w,_.numPointShadows=R,_.numSpotShadows=y,_.numSpotMaps=E,_.numLightProbes=I,n.version=qp++)}function c(l,d){let f=0,h=0,g=0,x=0,S=0,m=d.matrixWorldInverse;for(let u=0,w=l.length;u<w;u++){let R=l[u];if(R.isDirectionalLight){let y=n.directional[f];y.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),f++}else if(R.isSpotLight){let y=n.spot[g];y.position.setFromMatrixPosition(R.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),g++}else if(R.isRectAreaLight){let y=n.rectArea[x];y.position.setFromMatrixPosition(R.matrixWorld),y.position.applyMatrix4(m),a.identity(),r.copy(R.matrixWorld),r.premultiply(m),a.extractRotation(r),y.halfWidth.set(R.width*.5,0,0),y.halfHeight.set(0,R.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),x++}else if(R.isPointLight){let y=n.point[h];y.position.setFromMatrixPosition(R.matrixWorld),y.position.applyMatrix4(m),h++}else if(R.isHemisphereLight){let y=n.hemi[S];y.direction.setFromMatrixPosition(R.matrixWorld),y.direction.transformDirection(m),S++}}}return{setup:o,setupView:c,state:n}}function Lc(i){let e=new $p(i),t=[],n=[],s=[];function r(h){f.camera=h,t.length=0,n.length=0,s.length=0}function a(h){t.push(h)}function o(h){n.push(h)}function c(h){s.push(h)}function l(){e.setup(t)}function d(h){e.setupView(t,h)}let f={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:l,setupLightsView:d,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function Zp(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Lc(i),e.set(s,[o])):r>=a.length?(o=new Lc(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var Jp=`void main() {
gl_Position = vec4( position, 1.0 );
}`,Kp=`uniform sampler2D shadow_pass;
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
}`,Qp=[new X(1,0,0),new X(-1,0,0),new X(0,1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1)],jp=[new X(0,-1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1),new X(0,-1,0),new X(0,-1,0)],Dc=new St,Ps=new X,Zo=new X;function em(i,e,t){let n=new fs,s=new nt,r=new nt,a=new bt,o=new Ar,c=new Tr,l={},d=t.maxTextureSize,f={[Nn]:Wt,[Wt]:Nn,[yn]:yn},h=new Ot({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:Jp,fragmentShader:Kp}),g=h.clone();g.defines.HORIZONTAL_PASS=1;let x=new jt;x.setAttribute("position",new Jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let S=new qt(x,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vs;let u=this.type;this.render=function(M,I,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;this.type===Rl&&(ke("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=vs);let b=i.getRenderTarget(),L=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),z=i.state;z.setBlending(Mn),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let j=u!==this.type;j&&I.traverse(function(K){K.material&&(Array.isArray(K.material)?K.material.forEach(k=>k.needsUpdate=!0):K.material.needsUpdate=!0)});for(let K=0,k=M.length;K<k;K++){let O=M[K],H=O.shadow;if(H===void 0){ke("WebGLShadowMap:",O,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let Z=H.getFrameExtents();s.multiply(Z),r.copy(H.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/Z.x),s.x=r.x*Z.x,H.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/Z.y),s.y=r.y*Z.y,H.mapSize.y=r.y));let ce=i.state.buffers.depth.getReversed();if(H.camera._reversedDepth=ce,H.map===null||j===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Gi){if(O.isPointLight){ke("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Kt(s.x,s.y,{format:ii,type:bn,minFilter:Ft,magFilter:Ft,generateMipmaps:!1}),H.map.texture.name=O.name+".shadowMap",H.map.depthTexture=new Un(s.x,s.y,fn),H.map.depthTexture.name=O.name+".shadowMapDepth",H.map.depthTexture.format=_n,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Nt,H.map.depthTexture.magFilter=Nt}else O.isPointLight?(H.map=new Ra(s.x),H.map.depthTexture=new br(s.x,dn)):(H.map=new Kt(s.x,s.y),H.map.depthTexture=new Un(s.x,s.y,dn)),H.map.depthTexture.name=O.name+".shadowMap",H.map.depthTexture.format=_n,this.type===vs?(H.map.depthTexture.compareFunction=ce?Ta:Aa,H.map.depthTexture.minFilter=Ft,H.map.depthTexture.magFilter=Ft):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Nt,H.map.depthTexture.magFilter=Nt);H.camera.updateProjectionMatrix()}let de=H.map.isWebGLCubeRenderTarget?6:1;for(let me=0;me<de;me++){if(H.map.isWebGLCubeRenderTarget)i.setRenderTarget(H.map,me),i.clear();else{me===0&&(i.setRenderTarget(H.map),i.clear());let Se=H.getViewport(me);a.set(r.x*Se.x,r.y*Se.y,r.x*Se.z,r.y*Se.w),z.viewport(a)}if(O.isPointLight){let Se=H.camera,Ke=H.matrix,Qe=O.distance||Se.far;Qe!==Se.far&&(Se.far=Qe,Se.updateProjectionMatrix()),Ps.setFromMatrixPosition(O.matrixWorld),Se.position.copy(Ps),Zo.copy(Se.position),Zo.add(Qp[me]),Se.up.copy(jp[me]),Se.lookAt(Zo),Se.updateMatrixWorld(),Ke.makeTranslation(-Ps.x,-Ps.y,-Ps.z),Dc.multiplyMatrices(Se.projectionMatrix,Se.matrixWorldInverse),H._frustum.setFromProjectionMatrix(Dc,Se.coordinateSystem,Se.reversedDepth)}else H.updateMatrices(O);n=H.getFrustum(),y(I,_,H.camera,O,this.type)}H.isPointLightShadow!==!0&&this.type===Gi&&w(H,_),H.needsUpdate=!1}u=this.type,m.needsUpdate=!1,i.setRenderTarget(b,L,P)};function w(M,I){let _=e.update(S);h.defines.VSM_SAMPLES!==M.blurSamples&&(h.defines.VSM_SAMPLES=M.blurSamples,g.defines.VSM_SAMPLES=M.blurSamples,h.needsUpdate=!0,g.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new Kt(s.x,s.y,{format:ii,type:bn})),h.uniforms.shadow_pass.value=M.map.depthTexture,h.uniforms.resolution.value=M.mapSize,h.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(I,null,_,h,S,null),g.uniforms.shadow_pass.value=M.mapPass.texture,g.uniforms.resolution.value=M.mapSize,g.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(I,null,_,g,S,null)}function R(M,I,_,b){let L=null,P=_.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(P!==void 0)L=P;else if(L=_.isPointLight===!0?c:o,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){let z=L.uuid,j=I.uuid,K=l[z];K===void 0&&(K={},l[z]=K);let k=K[j];k===void 0&&(k=L.clone(),K[j]=k,I.addEventListener("dispose",E)),L=k}if(L.visible=I.visible,L.wireframe=I.wireframe,b===Gi?L.side=I.shadowSide!==null?I.shadowSide:I.side:L.side=I.shadowSide!==null?I.shadowSide:f[I.side],L.alphaMap=I.alphaMap,L.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,L.map=I.map,L.clipShadows=I.clipShadows,L.clippingPlanes=I.clippingPlanes,L.clipIntersection=I.clipIntersection,L.displacementMap=I.displacementMap,L.displacementScale=I.displacementScale,L.displacementBias=I.displacementBias,L.wireframeLinewidth=I.wireframeLinewidth,L.linewidth=I.linewidth,_.isPointLight===!0&&L.isMeshDistanceMaterial===!0){let z=i.properties.get(L);z.light=_}return L}function y(M,I,_,b,L){if(M.visible===!1)return;if(M.layers.test(I.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&L===Gi)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,M.matrixWorld);let j=e.update(M),K=M.material;if(Array.isArray(K)){let k=j.groups;for(let O=0,H=k.length;O<H;O++){let Z=k[O],ce=K[Z.materialIndex];if(ce&&ce.visible){let de=R(M,ce,b,L);M.onBeforeShadow(i,M,I,_,j,de,Z),i.renderBufferDirect(_,null,j,de,M,Z),M.onAfterShadow(i,M,I,_,j,de,Z)}}}else if(K.visible){let k=R(M,K,b,L);M.onBeforeShadow(i,M,I,_,j,k,null),i.renderBufferDirect(_,null,j,k,M,null),M.onAfterShadow(i,M,I,_,j,k,null)}}let z=M.children;for(let j=0,K=z.length;j<K;j++)y(z[j],I,_,b,L)}function E(M){M.target.removeEventListener("dispose",E);for(let _ in l){let b=l[_],L=M.target.uuid;L in b&&(b[L].dispose(),delete b[L])}}}function tm(i,e){function t(){let A=!1,q=new bt,V=null,se=new bt(0,0,0,0);return{setMask:function(he){V!==he&&!A&&(i.colorMask(he,he,he,he),V=he)},setLocked:function(he){A=he},setClear:function(he,J,pe,Me,dt){dt===!0&&(he*=Me,J*=Me,pe*=Me),q.set(he,J,pe,Me),se.equals(q)===!1&&(i.clearColor(he,J,pe,Me),se.copy(q))},reset:function(){A=!1,V=null,se.set(-1,0,0,0)}}}function n(){let A=!1,q=!1,V=null,se=null,he=null;return{setReversed:function(J){if(q!==J){let pe=e.get("EXT_clip_control");J?pe.clipControlEXT(pe.LOWER_LEFT_EXT,pe.ZERO_TO_ONE_EXT):pe.clipControlEXT(pe.LOWER_LEFT_EXT,pe.NEGATIVE_ONE_TO_ONE_EXT),q=J;let Me=he;he=null,this.setClear(Me)}},getReversed:function(){return q},setTest:function(J){J?ae(i.DEPTH_TEST):Pe(i.DEPTH_TEST)},setMask:function(J){V!==J&&!A&&(i.depthMask(J),V=J)},setFunc:function(J){if(q&&(J=lc[J]),se!==J){switch(J){case ar:i.depthFunc(i.NEVER);break;case or:i.depthFunc(i.ALWAYS);break;case lr:i.depthFunc(i.LESS);break;case fi:i.depthFunc(i.LEQUAL);break;case cr:i.depthFunc(i.EQUAL);break;case hr:i.depthFunc(i.GEQUAL);break;case ur:i.depthFunc(i.GREATER);break;case dr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}se=J}},setLocked:function(J){A=J},setClear:function(J){he!==J&&(he=J,q&&(J=1-J),i.clearDepth(J))},reset:function(){A=!1,V=null,se=null,he=null,q=!1}}}function s(){let A=!1,q=null,V=null,se=null,he=null,J=null,pe=null,Me=null,dt=null;return{setTest:function(it){A||(it?ae(i.STENCIL_TEST):Pe(i.STENCIL_TEST))},setMask:function(it){q!==it&&!A&&(i.stencilMask(it),q=it)},setFunc:function(it,Ut,Ct){(V!==it||se!==Ut||he!==Ct)&&(i.stencilFunc(it,Ut,Ct),V=it,se=Ut,he=Ct)},setOp:function(it,Ut,Ct){(J!==it||pe!==Ut||Me!==Ct)&&(i.stencilOp(it,Ut,Ct),J=it,pe=Ut,Me=Ct)},setLocked:function(it){A=it},setClear:function(it){dt!==it&&(i.clearStencil(it),dt=it)},reset:function(){A=!1,q=null,V=null,se=null,he=null,J=null,pe=null,Me=null,dt=null}}}let r=new t,a=new n,o=new s,c=new WeakMap,l=new WeakMap,d={},f={},h={},g=new WeakMap,x=[],S=null,m=!1,u=null,w=null,R=null,y=null,E=null,M=null,I=null,_=new lt(0,0,0),b=0,L=!1,P=null,z=null,j=null,K=null,k=null,O=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,Z=0,ce=i.getParameter(i.VERSION);ce.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(ce)[1]),H=Z>=1):ce.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(ce)[1]),H=Z>=2);let de=null,me={},Se=i.getParameter(i.SCISSOR_BOX),Ke=i.getParameter(i.VIEWPORT),Qe=new bt().fromArray(Se),Ze=new bt().fromArray(Ke);function ee(A,q,V,se){let he=new Uint8Array(4),J=i.createTexture();i.bindTexture(A,J),i.texParameteri(A,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(A,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let pe=0;pe<V;pe++)A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY?i.texImage3D(q,0,i.RGBA,1,1,se,0,i.RGBA,i.UNSIGNED_BYTE,he):i.texImage2D(q+pe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,he);return J}let te={};te[i.TEXTURE_2D]=ee(i.TEXTURE_2D,i.TEXTURE_2D,1),te[i.TEXTURE_CUBE_MAP]=ee(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[i.TEXTURE_2D_ARRAY]=ee(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),te[i.TEXTURE_3D]=ee(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ae(i.DEPTH_TEST),a.setFunc(fi),ot(!1),ft(fo),ae(i.CULL_FACE),He(Mn);function ae(A){d[A]!==!0&&(i.enable(A),d[A]=!0)}function Pe(A){d[A]!==!1&&(i.disable(A),d[A]=!1)}function Ue(A,q){return h[A]!==q?(i.bindFramebuffer(A,q),h[A]=q,A===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=q),A===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=q),!0):!1}function Ee(A,q){let V=x,se=!1;if(A){V=g.get(q),V===void 0&&(V=[],g.set(q,V));let he=A.textures;if(V.length!==he.length||V[0]!==i.COLOR_ATTACHMENT0){for(let J=0,pe=he.length;J<pe;J++)V[J]=i.COLOR_ATTACHMENT0+J;V.length=he.length,se=!0}}else V[0]!==i.BACK&&(V[0]=i.BACK,se=!0);se&&i.drawBuffers(V)}function je(A){return S!==A?(i.useProgram(A),S=A,!0):!1}let Fe={[Yn]:i.FUNC_ADD,[Pl]:i.FUNC_SUBTRACT,[Ll]:i.FUNC_REVERSE_SUBTRACT};Fe[Dl]=i.MIN,Fe[Nl]=i.MAX;let Ye={[Ul]:i.ZERO,[Fl]:i.ONE,[Ol]:i.SRC_COLOR,[sr]:i.SRC_ALPHA,[Hl]:i.SRC_ALPHA_SATURATE,[Vl]:i.DST_COLOR,[zl]:i.DST_ALPHA,[Bl]:i.ONE_MINUS_SRC_COLOR,[rr]:i.ONE_MINUS_SRC_ALPHA,[Gl]:i.ONE_MINUS_DST_COLOR,[kl]:i.ONE_MINUS_DST_ALPHA,[Wl]:i.CONSTANT_COLOR,[Xl]:i.ONE_MINUS_CONSTANT_COLOR,[ql]:i.CONSTANT_ALPHA,[Yl]:i.ONE_MINUS_CONSTANT_ALPHA};function He(A,q,V,se,he,J,pe,Me,dt,it){if(A===Mn){m===!0&&(Pe(i.BLEND),m=!1);return}if(m===!1&&(ae(i.BLEND),m=!0),A!==Il){if(A!==u||it!==L){if((w!==Yn||E!==Yn)&&(i.blendEquation(i.FUNC_ADD),w=Yn,E=Yn),it)switch(A){case di:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ys:i.blendFunc(i.ONE,i.ONE);break;case po:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case mo:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ge("WebGLState: Invalid blending: ",A);break}else switch(A){case di:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ys:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case po:Ge("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case mo:Ge("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ge("WebGLState: Invalid blending: ",A);break}R=null,y=null,M=null,I=null,_.set(0,0,0),b=0,u=A,L=it}return}he=he||q,J=J||V,pe=pe||se,(q!==w||he!==E)&&(i.blendEquationSeparate(Fe[q],Fe[he]),w=q,E=he),(V!==R||se!==y||J!==M||pe!==I)&&(i.blendFuncSeparate(Ye[V],Ye[se],Ye[J],Ye[pe]),R=V,y=se,M=J,I=pe),(Me.equals(_)===!1||dt!==b)&&(i.blendColor(Me.r,Me.g,Me.b,dt),_.copy(Me),b=dt),u=A,L=!1}function Oe(A,q){A.side===yn?Pe(i.CULL_FACE):ae(i.CULL_FACE);let V=A.side===Wt;q&&(V=!V),ot(V),A.blending===di&&A.transparent===!1?He(Mn):He(A.blending,A.blendEquation,A.blendSrc,A.blendDst,A.blendEquationAlpha,A.blendSrcAlpha,A.blendDstAlpha,A.blendColor,A.blendAlpha,A.premultipliedAlpha),a.setFunc(A.depthFunc),a.setTest(A.depthTest),a.setMask(A.depthWrite),r.setMask(A.colorWrite);let se=A.stencilWrite;o.setTest(se),se&&(o.setMask(A.stencilWriteMask),o.setFunc(A.stencilFunc,A.stencilRef,A.stencilFuncMask),o.setOp(A.stencilFail,A.stencilZFail,A.stencilZPass)),tt(A.polygonOffset,A.polygonOffsetFactor,A.polygonOffsetUnits),A.alphaToCoverage===!0?ae(i.SAMPLE_ALPHA_TO_COVERAGE):Pe(i.SAMPLE_ALPHA_TO_COVERAGE)}function ot(A){P!==A&&(A?i.frontFace(i.CW):i.frontFace(i.CCW),P=A)}function ft(A){A!==wl?(ae(i.CULL_FACE),A!==z&&(A===fo?i.cullFace(i.BACK):A===Cl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Pe(i.CULL_FACE),z=A}function pt(A){A!==j&&(H&&i.lineWidth(A),j=A)}function tt(A,q,V){A?(ae(i.POLYGON_OFFSET_FILL),(K!==q||k!==V)&&(K=q,k=V,a.getReversed()&&(q=-q),i.polygonOffset(q,V))):Pe(i.POLYGON_OFFSET_FILL)}function $e(A){A?ae(i.SCISSOR_TEST):Pe(i.SCISSOR_TEST)}function gt(A){A===void 0&&(A=i.TEXTURE0+O-1),de!==A&&(i.activeTexture(A),de=A)}function N(A,q,V){V===void 0&&(de===null?V=i.TEXTURE0+O-1:V=de);let se=me[V];se===void 0&&(se={type:void 0,texture:void 0},me[V]=se),(se.type!==A||se.texture!==q)&&(de!==V&&(i.activeTexture(V),de=V),i.bindTexture(A,q||te[A]),se.type=A,se.texture=q)}function At(){let A=me[de];A!==void 0&&A.type!==void 0&&(i.bindTexture(A.type,null),A.type=void 0,A.texture=void 0)}function We(){try{i.compressedTexImage2D(...arguments)}catch(A){Ge("WebGLState:",A)}}function T(){try{i.compressedTexImage3D(...arguments)}catch(A){Ge("WebGLState:",A)}}function p(){try{i.texSubImage2D(...arguments)}catch(A){Ge("WebGLState:",A)}}function B(){try{i.texSubImage3D(...arguments)}catch(A){Ge("WebGLState:",A)}}function W(){try{i.compressedTexSubImage2D(...arguments)}catch(A){Ge("WebGLState:",A)}}function Q(){try{i.compressedTexSubImage3D(...arguments)}catch(A){Ge("WebGLState:",A)}}function oe(){try{i.texStorage2D(...arguments)}catch(A){Ge("WebGLState:",A)}}function re(){try{i.texStorage3D(...arguments)}catch(A){Ge("WebGLState:",A)}}function Y(){try{i.texImage2D(...arguments)}catch(A){Ge("WebGLState:",A)}}function ne(){try{i.texImage3D(...arguments)}catch(A){Ge("WebGLState:",A)}}function ge(A){return f[A]!==void 0?f[A]:i.getParameter(A)}function Re(A,q){f[A]!==q&&(i.pixelStorei(A,q),f[A]=q)}function ve(A){Qe.equals(A)===!1&&(i.scissor(A.x,A.y,A.z,A.w),Qe.copy(A))}function _e(A){Ze.equals(A)===!1&&(i.viewport(A.x,A.y,A.z,A.w),Ze.copy(A))}function Le(A,q){let V=l.get(q);V===void 0&&(V=new WeakMap,l.set(q,V));let se=V.get(A);se===void 0&&(se=i.getUniformBlockIndex(q,A.name),V.set(A,se))}function Ne(A,q){let se=l.get(q).get(A);c.get(q)!==se&&(i.uniformBlockBinding(q,se,A.__bindingPointIndex),c.set(q,se))}function C(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),d={},f={},de=null,me={},h={},g=new WeakMap,x=[],S=null,m=!1,u=null,w=null,R=null,y=null,E=null,M=null,I=null,_=new lt(0,0,0),b=0,L=!1,P=null,z=null,j=null,K=null,k=null,Qe.set(0,0,i.canvas.width,i.canvas.height),Ze.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ae,disable:Pe,bindFramebuffer:Ue,drawBuffers:Ee,useProgram:je,setBlending:He,setMaterial:Oe,setFlipSided:ot,setCullFace:ft,setLineWidth:pt,setPolygonOffset:tt,setScissorTest:$e,activeTexture:gt,bindTexture:N,unbindTexture:At,compressedTexImage2D:We,compressedTexImage3D:T,texImage2D:Y,texImage3D:ne,pixelStorei:Re,getParameter:ge,updateUBOMapping:Le,uniformBlockBinding:Ne,texStorage2D:oe,texStorage3D:re,texSubImage2D:p,texSubImage3D:B,compressedTexSubImage2D:W,compressedTexSubImage3D:Q,scissor:ve,viewport:_e,reset:C}}function nm(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new nt,d=new WeakMap,f=new Set,h,g=new WeakMap,x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(T,p){return x?new OffscreenCanvas(T,p):as("canvas")}function m(T,p,B){let W=1,Q=We(T);if((Q.width>B||Q.height>B)&&(W=B/Math.max(Q.width,Q.height)),W<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let oe=Math.floor(W*Q.width),re=Math.floor(W*Q.height);h===void 0&&(h=S(oe,re));let Y=p?S(oe,re):h;return Y.width=oe,Y.height=re,Y.getContext("2d").drawImage(T,0,0,oe,re),ke("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+oe+"x"+re+")."),Y}else return"data"in T&&ke("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),T;return T}function u(T){return T.generateMipmaps}function w(T){i.generateMipmap(T)}function R(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(T,p,B,W,Q,oe=!1){if(T!==null){if(i[T]!==void 0)return i[T];ke("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let re;W&&(re=e.get("EXT_texture_norm16"),re||ke("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=p;if(p===i.RED&&(B===i.FLOAT&&(Y=i.R32F),B===i.HALF_FLOAT&&(Y=i.R16F),B===i.UNSIGNED_BYTE&&(Y=i.R8),B===i.UNSIGNED_SHORT&&re&&(Y=re.R16_EXT),B===i.SHORT&&re&&(Y=re.R16_SNORM_EXT)),p===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(Y=i.R8UI),B===i.UNSIGNED_SHORT&&(Y=i.R16UI),B===i.UNSIGNED_INT&&(Y=i.R32UI),B===i.BYTE&&(Y=i.R8I),B===i.SHORT&&(Y=i.R16I),B===i.INT&&(Y=i.R32I)),p===i.RG&&(B===i.FLOAT&&(Y=i.RG32F),B===i.HALF_FLOAT&&(Y=i.RG16F),B===i.UNSIGNED_BYTE&&(Y=i.RG8),B===i.UNSIGNED_SHORT&&re&&(Y=re.RG16_EXT),B===i.SHORT&&re&&(Y=re.RG16_SNORM_EXT)),p===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(Y=i.RG8UI),B===i.UNSIGNED_SHORT&&(Y=i.RG16UI),B===i.UNSIGNED_INT&&(Y=i.RG32UI),B===i.BYTE&&(Y=i.RG8I),B===i.SHORT&&(Y=i.RG16I),B===i.INT&&(Y=i.RG32I)),p===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),B===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),B===i.UNSIGNED_INT&&(Y=i.RGB32UI),B===i.BYTE&&(Y=i.RGB8I),B===i.SHORT&&(Y=i.RGB16I),B===i.INT&&(Y=i.RGB32I)),p===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),B===i.UNSIGNED_INT&&(Y=i.RGBA32UI),B===i.BYTE&&(Y=i.RGBA8I),B===i.SHORT&&(Y=i.RGBA16I),B===i.INT&&(Y=i.RGBA32I)),p===i.RGB&&(B===i.UNSIGNED_SHORT&&re&&(Y=re.RGB16_EXT),B===i.SHORT&&re&&(Y=re.RGB16_SNORM_EXT),B===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),B===i.UNSIGNED_INT_10F_11F_11F_REV&&(Y=i.R11F_G11F_B10F)),p===i.RGBA){let ne=oe?ss:rt.getTransfer(Q);B===i.FLOAT&&(Y=i.RGBA32F),B===i.HALF_FLOAT&&(Y=i.RGBA16F),B===i.UNSIGNED_BYTE&&(Y=ne===mt?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT&&re&&(Y=re.RGBA16_EXT),B===i.SHORT&&re&&(Y=re.RGBA16_SNORM_EXT),B===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function E(T,p){let B;return T?p===null||p===dn||p===Wi?B=i.DEPTH24_STENCIL8:p===fn?B=i.DEPTH32F_STENCIL8:p===Hi&&(B=i.DEPTH24_STENCIL8,ke("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):p===null||p===dn||p===Wi?B=i.DEPTH_COMPONENT24:p===fn?B=i.DEPTH_COMPONENT32F:p===Hi&&(B=i.DEPTH_COMPONENT16),B}function M(T,p){return u(T)===!0||T.isFramebufferTexture&&T.minFilter!==Nt&&T.minFilter!==Ft?Math.log2(Math.max(p.width,p.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?p.mipmaps.length:1}function I(T){let p=T.target;p.removeEventListener("dispose",I),b(p),p.isVideoTexture&&d.delete(p),p.isHTMLTexture&&f.delete(p)}function _(T){let p=T.target;p.removeEventListener("dispose",_),P(p)}function b(T){let p=n.get(T);if(p.__webglInit===void 0)return;let B=T.source,W=g.get(B);if(W){let Q=W[p.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&L(T),Object.keys(W).length===0&&g.delete(B)}n.remove(T)}function L(T){let p=n.get(T);i.deleteTexture(p.__webglTexture);let B=T.source,W=g.get(B);delete W[p.__cacheKey],a.memory.textures--}function P(T){let p=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(p.__webglFramebuffer[W]))for(let Q=0;Q<p.__webglFramebuffer[W].length;Q++)i.deleteFramebuffer(p.__webglFramebuffer[W][Q]);else i.deleteFramebuffer(p.__webglFramebuffer[W]);p.__webglDepthbuffer&&i.deleteRenderbuffer(p.__webglDepthbuffer[W])}else{if(Array.isArray(p.__webglFramebuffer))for(let W=0;W<p.__webglFramebuffer.length;W++)i.deleteFramebuffer(p.__webglFramebuffer[W]);else i.deleteFramebuffer(p.__webglFramebuffer);if(p.__webglDepthbuffer&&i.deleteRenderbuffer(p.__webglDepthbuffer),p.__webglMultisampledFramebuffer&&i.deleteFramebuffer(p.__webglMultisampledFramebuffer),p.__webglColorRenderbuffer)for(let W=0;W<p.__webglColorRenderbuffer.length;W++)p.__webglColorRenderbuffer[W]&&i.deleteRenderbuffer(p.__webglColorRenderbuffer[W]);p.__webglDepthRenderbuffer&&i.deleteRenderbuffer(p.__webglDepthRenderbuffer)}let B=T.textures;for(let W=0,Q=B.length;W<Q;W++){let oe=n.get(B[W]);oe.__webglTexture&&(i.deleteTexture(oe.__webglTexture),a.memory.textures--),n.remove(B[W])}n.remove(T)}let z=0;function j(){z=0}function K(){return z}function k(T){z=T}function O(){let T=z;return T>=s.maxTextures&&ke("WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),z+=1,T}function H(T){let p=[];return p.push(T.wrapS),p.push(T.wrapT),p.push(T.wrapR||0),p.push(T.magFilter),p.push(T.minFilter),p.push(T.anisotropy),p.push(T.internalFormat),p.push(T.format),p.push(T.type),p.push(T.generateMipmaps),p.push(T.premultiplyAlpha),p.push(T.flipY),p.push(T.unpackAlignment),p.push(T.colorSpace),p.join()}function Z(T,p){let B=n.get(T);if(T.isVideoTexture&&N(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&B.__version!==T.version){let W=T.image;if(W===null)ke("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)ke("WebGLRenderer: Texture marked for update but image is incomplete");else{Pe(B,T,p);return}}else T.isExternalTexture&&(B.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+p)}function ce(T,p){let B=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){Pe(B,T,p);return}else T.isExternalTexture&&(B.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+p)}function de(T,p){let B=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){Pe(B,T,p);return}t.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+p)}function me(T,p){let B=n.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&B.__version!==T.version){Ue(B,T,p);return}t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+p)}let Se={[fr]:i.REPEAT,[gn]:i.CLAMP_TO_EDGE,[pr]:i.MIRRORED_REPEAT},Ke={[Nt]:i.NEAREST,[Jl]:i.NEAREST_MIPMAP_NEAREST,[bs]:i.NEAREST_MIPMAP_LINEAR,[Ft]:i.LINEAR,[Vr]:i.LINEAR_MIPMAP_NEAREST,[ti]:i.LINEAR_MIPMAP_LINEAR},Qe={[jl]:i.NEVER,[sc]:i.ALWAYS,[ec]:i.LESS,[Aa]:i.LEQUAL,[tc]:i.EQUAL,[Ta]:i.GEQUAL,[nc]:i.GREATER,[ic]:i.NOTEQUAL};function Ze(T,p){if(p.type===fn&&e.has("OES_texture_float_linear")===!1&&(p.magFilter===Ft||p.magFilter===Vr||p.magFilter===bs||p.magFilter===ti||p.minFilter===Ft||p.minFilter===Vr||p.minFilter===bs||p.minFilter===ti)&&ke("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,Se[p.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,Se[p.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,Se[p.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,Ke[p.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,Ke[p.minFilter]),p.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,Qe[p.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(p.magFilter===Nt||p.minFilter!==bs&&p.minFilter!==ti||p.type===fn&&e.has("OES_texture_float_linear")===!1)return;if(p.anisotropy>1||n.get(p).__currentAnisotropy){let B=e.get("EXT_texture_filter_anisotropic");i.texParameterf(T,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(p.anisotropy,s.getMaxAnisotropy())),n.get(p).__currentAnisotropy=p.anisotropy}}}function ee(T,p){let B=!1;T.__webglInit===void 0&&(T.__webglInit=!0,p.addEventListener("dispose",I));let W=p.source,Q=g.get(W);Q===void 0&&(Q={},g.set(W,Q));let oe=H(p);if(oe!==T.__cacheKey){Q[oe]===void 0&&(Q[oe]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),Q[oe].usedTimes++;let re=Q[T.__cacheKey];re!==void 0&&(Q[T.__cacheKey].usedTimes--,re.usedTimes===0&&L(p)),T.__cacheKey=oe,T.__webglTexture=Q[oe].texture}return B}function te(T,p,B){return Math.floor(Math.floor(T/B)/p)}function ae(T,p,B,W){let oe=T.updateRanges;if(oe.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,p.width,p.height,B,W,p.data);else{oe.sort((Re,ve)=>Re.start-ve.start);let re=0;for(let Re=1;Re<oe.length;Re++){let ve=oe[re],_e=oe[Re],Le=ve.start+ve.count,Ne=te(_e.start,p.width,4),C=te(ve.start,p.width,4);_e.start<=Le+1&&Ne===C&&te(_e.start+_e.count-1,p.width,4)===Ne?ve.count=Math.max(ve.count,_e.start+_e.count-ve.start):(++re,oe[re]=_e)}oe.length=re+1;let Y=t.getParameter(i.UNPACK_ROW_LENGTH),ne=t.getParameter(i.UNPACK_SKIP_PIXELS),ge=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,p.width);for(let Re=0,ve=oe.length;Re<ve;Re++){let _e=oe[Re],Le=Math.floor(_e.start/4),Ne=Math.ceil(_e.count/4),C=Le%p.width,A=Math.floor(Le/p.width),q=Ne,V=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,C),t.pixelStorei(i.UNPACK_SKIP_ROWS,A),t.texSubImage2D(i.TEXTURE_2D,0,C,A,q,V,B,W,p.data)}T.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,Y),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ne),t.pixelStorei(i.UNPACK_SKIP_ROWS,ge)}}function Pe(T,p,B){let W=i.TEXTURE_2D;(p.isDataArrayTexture||p.isCompressedArrayTexture)&&(W=i.TEXTURE_2D_ARRAY),p.isData3DTexture&&(W=i.TEXTURE_3D);let Q=ee(T,p),oe=p.source;t.bindTexture(W,T.__webglTexture,i.TEXTURE0+B);let re=n.get(oe);if(oe.version!==re.__version||Q===!0){if(t.activeTexture(i.TEXTURE0+B),(typeof ImageBitmap<"u"&&p.image instanceof ImageBitmap)===!1){let V=rt.getPrimaries(rt.workingColorSpace),se=p.colorSpace===Fn?null:rt.getPrimaries(p.colorSpace),he=p.colorSpace===Fn||V===se?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,p.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,p.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,he)}t.pixelStorei(i.UNPACK_ALIGNMENT,p.unpackAlignment);let ne=m(p.image,!1,s.maxTextureSize);ne=At(p,ne);let ge=r.convert(p.format,p.colorSpace),Re=r.convert(p.type),ve=y(p.internalFormat,ge,Re,p.normalized,p.colorSpace,p.isVideoTexture);Ze(W,p);let _e,Le=p.mipmaps,Ne=p.isVideoTexture!==!0,C=re.__version===void 0||Q===!0,A=oe.dataReady,q=M(p,ne);if(p.isDepthTexture)ve=E(p.format===ni,p.type),C&&(Ne?t.texStorage2D(i.TEXTURE_2D,1,ve,ne.width,ne.height):t.texImage2D(i.TEXTURE_2D,0,ve,ne.width,ne.height,0,ge,Re,null));else if(p.isDataTexture)if(Le.length>0){Ne&&C&&t.texStorage2D(i.TEXTURE_2D,q,ve,Le[0].width,Le[0].height);for(let V=0,se=Le.length;V<se;V++)_e=Le[V],Ne?A&&t.texSubImage2D(i.TEXTURE_2D,V,0,0,_e.width,_e.height,ge,Re,_e.data):t.texImage2D(i.TEXTURE_2D,V,ve,_e.width,_e.height,0,ge,Re,_e.data);p.generateMipmaps=!1}else Ne?(C&&t.texStorage2D(i.TEXTURE_2D,q,ve,ne.width,ne.height),A&&ae(p,ne,ge,Re)):t.texImage2D(i.TEXTURE_2D,0,ve,ne.width,ne.height,0,ge,Re,ne.data);else if(p.isCompressedTexture)if(p.isCompressedArrayTexture){Ne&&C&&t.texStorage3D(i.TEXTURE_2D_ARRAY,q,ve,Le[0].width,Le[0].height,ne.depth);for(let V=0,se=Le.length;V<se;V++)if(_e=Le[V],p.format!==rn)if(ge!==null)if(Ne){if(A)if(p.layerUpdates.size>0){let he=Bo(_e.width,_e.height,p.format,p.type);for(let J of p.layerUpdates){let pe=_e.data.subarray(J*he/_e.data.BYTES_PER_ELEMENT,(J+1)*he/_e.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,J,_e.width,_e.height,1,ge,pe)}p.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,_e.width,_e.height,ne.depth,ge,_e.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,V,ve,_e.width,_e.height,ne.depth,0,_e.data,0,0);else ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ne?A&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,_e.width,_e.height,ne.depth,ge,Re,_e.data):t.texImage3D(i.TEXTURE_2D_ARRAY,V,ve,_e.width,_e.height,ne.depth,0,ge,Re,_e.data)}else{Ne&&C&&t.texStorage2D(i.TEXTURE_2D,q,ve,Le[0].width,Le[0].height);for(let V=0,se=Le.length;V<se;V++)_e=Le[V],p.format!==rn?ge!==null?Ne?A&&t.compressedTexSubImage2D(i.TEXTURE_2D,V,0,0,_e.width,_e.height,ge,_e.data):t.compressedTexImage2D(i.TEXTURE_2D,V,ve,_e.width,_e.height,0,_e.data):ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?A&&t.texSubImage2D(i.TEXTURE_2D,V,0,0,_e.width,_e.height,ge,Re,_e.data):t.texImage2D(i.TEXTURE_2D,V,ve,_e.width,_e.height,0,ge,Re,_e.data)}else if(p.isDataArrayTexture)if(Ne){if(C&&t.texStorage3D(i.TEXTURE_2D_ARRAY,q,ve,ne.width,ne.height,ne.depth),A)if(p.layerUpdates.size>0){let V=Bo(ne.width,ne.height,p.format,p.type);for(let se of p.layerUpdates){let he=ne.data.subarray(se*V/ne.data.BYTES_PER_ELEMENT,(se+1)*V/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,se,ne.width,ne.height,1,ge,Re,he)}p.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,ge,Re,ne.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ve,ne.width,ne.height,ne.depth,0,ge,Re,ne.data);else if(p.isData3DTexture)Ne?(C&&t.texStorage3D(i.TEXTURE_3D,q,ve,ne.width,ne.height,ne.depth),A&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,ge,Re,ne.data)):t.texImage3D(i.TEXTURE_3D,0,ve,ne.width,ne.height,ne.depth,0,ge,Re,ne.data);else if(p.isFramebufferTexture){if(C)if(Ne)t.texStorage2D(i.TEXTURE_2D,q,ve,ne.width,ne.height);else{let V=ne.width,se=ne.height;for(let he=0;he<q;he++)t.texImage2D(i.TEXTURE_2D,he,ve,V,se,0,ge,Re,null),V>>=1,se>>=1}}else if(p.isHTMLTexture){if("texElementImage2D"in i){let V=i.canvas;if(V.hasAttribute("layoutsubtree")||V.setAttribute("layoutsubtree","true"),ne.parentNode!==V){V.appendChild(ne),f.add(p),V.onpaint=se=>{let he=se.changedElements;for(let J of f)he.includes(J.image)&&(J.needsUpdate=!0)},V.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ne);else{let he=i.RGBA,J=i.RGBA,pe=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,he,J,pe,ne)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Le.length>0){if(Ne&&C){let V=We(Le[0]);t.texStorage2D(i.TEXTURE_2D,q,ve,V.width,V.height)}for(let V=0,se=Le.length;V<se;V++)_e=Le[V],Ne?A&&t.texSubImage2D(i.TEXTURE_2D,V,0,0,ge,Re,_e):t.texImage2D(i.TEXTURE_2D,V,ve,ge,Re,_e);p.generateMipmaps=!1}else if(Ne){if(C){let V=We(ne);t.texStorage2D(i.TEXTURE_2D,q,ve,V.width,V.height)}A&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ge,Re,ne)}else t.texImage2D(i.TEXTURE_2D,0,ve,ge,Re,ne);u(p)&&w(W),re.__version=oe.version,p.onUpdate&&p.onUpdate(p)}T.__version=p.version}function Ue(T,p,B){if(p.image.length!==6)return;let W=ee(T,p),Q=p.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+B);let oe=n.get(Q);if(Q.version!==oe.__version||W===!0){t.activeTexture(i.TEXTURE0+B);let re=rt.getPrimaries(rt.workingColorSpace),Y=p.colorSpace===Fn?null:rt.getPrimaries(p.colorSpace),ne=p.colorSpace===Fn||re===Y?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,p.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,p.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,p.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);let ge=p.isCompressedTexture||p.image[0].isCompressedTexture,Re=p.image[0]&&p.image[0].isDataTexture,ve=[];for(let J=0;J<6;J++)!ge&&!Re?ve[J]=m(p.image[J],!0,s.maxCubemapSize):ve[J]=Re?p.image[J].image:p.image[J],ve[J]=At(p,ve[J]);let _e=ve[0],Le=r.convert(p.format,p.colorSpace),Ne=r.convert(p.type),C=y(p.internalFormat,Le,Ne,p.normalized,p.colorSpace),A=p.isVideoTexture!==!0,q=oe.__version===void 0||W===!0,V=Q.dataReady,se=M(p,_e);Ze(i.TEXTURE_CUBE_MAP,p);let he;if(ge){A&&q&&t.texStorage2D(i.TEXTURE_CUBE_MAP,se,C,_e.width,_e.height);for(let J=0;J<6;J++){he=ve[J].mipmaps;for(let pe=0;pe<he.length;pe++){let Me=he[pe];p.format!==rn?Le!==null?A?V&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,pe,0,0,Me.width,Me.height,Le,Me.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,pe,C,Me.width,Me.height,0,Me.data):ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):A?V&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,pe,0,0,Me.width,Me.height,Le,Ne,Me.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,pe,C,Me.width,Me.height,0,Le,Ne,Me.data)}}}else{if(he=p.mipmaps,A&&q){he.length>0&&se++;let J=We(ve[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,se,C,J.width,J.height)}for(let J=0;J<6;J++)if(Re){A?V&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,ve[J].width,ve[J].height,Le,Ne,ve[J].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,C,ve[J].width,ve[J].height,0,Le,Ne,ve[J].data);for(let pe=0;pe<he.length;pe++){let dt=he[pe].image[J].image;A?V&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,pe+1,0,0,dt.width,dt.height,Le,Ne,dt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,pe+1,C,dt.width,dt.height,0,Le,Ne,dt.data)}}else{A?V&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Le,Ne,ve[J]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,C,Le,Ne,ve[J]);for(let pe=0;pe<he.length;pe++){let Me=he[pe];A?V&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,pe+1,0,0,Le,Ne,Me.image[J]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,pe+1,C,Le,Ne,Me.image[J])}}}u(p)&&w(i.TEXTURE_CUBE_MAP),oe.__version=Q.version,p.onUpdate&&p.onUpdate(p)}T.__version=p.version}function Ee(T,p,B,W,Q,oe){let re=r.convert(B.format,B.colorSpace),Y=r.convert(B.type),ne=y(B.internalFormat,re,Y,B.normalized,B.colorSpace),ge=n.get(p),Re=n.get(B);if(Re.__renderTarget=p,!ge.__hasExternalTextures){let ve=Math.max(1,p.width>>oe),_e=Math.max(1,p.height>>oe);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?t.texImage3D(Q,oe,ne,ve,_e,p.depth,0,re,Y,null):t.texImage2D(Q,oe,ne,ve,_e,0,re,Y,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),gt(p)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,W,Q,Re.__webglTexture,0,$e(p)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,W,Q,Re.__webglTexture,oe),t.bindFramebuffer(i.FRAMEBUFFER,null)}function je(T,p,B){if(i.bindRenderbuffer(i.RENDERBUFFER,T),p.depthBuffer){let W=p.depthTexture,Q=W&&W.isDepthTexture?W.type:null,oe=E(p.stencilBuffer,Q),re=p.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;gt(p)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,$e(p),oe,p.width,p.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,$e(p),oe,p.width,p.height):i.renderbufferStorage(i.RENDERBUFFER,oe,p.width,p.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,T)}else{let W=p.textures;for(let Q=0;Q<W.length;Q++){let oe=W[Q],re=r.convert(oe.format,oe.colorSpace),Y=r.convert(oe.type),ne=y(oe.internalFormat,re,Y,oe.normalized,oe.colorSpace);gt(p)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,$e(p),ne,p.width,p.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,$e(p),ne,p.width,p.height):i.renderbufferStorage(i.RENDERBUFFER,ne,p.width,p.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Fe(T,p,B){let W=p.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(p.depthTexture&&p.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Q=n.get(p.depthTexture);if(Q.__renderTarget=p,(!Q.__webglTexture||p.depthTexture.image.width!==p.width||p.depthTexture.image.height!==p.height)&&(p.depthTexture.image.width=p.width,p.depthTexture.image.height=p.height,p.depthTexture.needsUpdate=!0),W){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,p.depthTexture.addEventListener("dispose",I)),Q.__webglTexture===void 0){Q.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),Ze(i.TEXTURE_CUBE_MAP,p.depthTexture);let ge=r.convert(p.depthTexture.format),Re=r.convert(p.depthTexture.type),ve;p.depthTexture.format===_n?ve=i.DEPTH_COMPONENT24:p.depthTexture.format===ni&&(ve=i.DEPTH24_STENCIL8);for(let _e=0;_e<6;_e++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,ve,p.width,p.height,0,ge,Re,null)}}else Z(p.depthTexture,0);let oe=Q.__webglTexture,re=$e(p),Y=W?i.TEXTURE_CUBE_MAP_POSITIVE_X+B:i.TEXTURE_2D,ne=p.depthTexture.format===ni?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(p.depthTexture.format===_n)gt(p)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,Y,oe,0,re):i.framebufferTexture2D(i.FRAMEBUFFER,ne,Y,oe,0);else if(p.depthTexture.format===ni)gt(p)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,Y,oe,0,re):i.framebufferTexture2D(i.FRAMEBUFFER,ne,Y,oe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ye(T){let p=n.get(T),B=T.isWebGLCubeRenderTarget===!0;if(p.__boundDepthTexture!==T.depthTexture){let W=T.depthTexture;if(p.__depthDisposeCallback&&p.__depthDisposeCallback(),W){let Q=()=>{delete p.__boundDepthTexture,delete p.__depthDisposeCallback,W.removeEventListener("dispose",Q)};W.addEventListener("dispose",Q),p.__depthDisposeCallback=Q}p.__boundDepthTexture=W}if(T.depthTexture&&!p.__autoAllocateDepthBuffer)if(B)for(let W=0;W<6;W++)Fe(p.__webglFramebuffer[W],T,W);else{let W=T.texture.mipmaps;W&&W.length>0?Fe(p.__webglFramebuffer[0],T,0):Fe(p.__webglFramebuffer,T,0)}else if(B){p.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(i.FRAMEBUFFER,p.__webglFramebuffer[W]),p.__webglDepthbuffer[W]===void 0)p.__webglDepthbuffer[W]=i.createRenderbuffer(),je(p.__webglDepthbuffer[W],T,!1);else{let Q=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=p.__webglDepthbuffer[W];i.bindRenderbuffer(i.RENDERBUFFER,oe),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,oe)}}else{let W=T.texture.mipmaps;if(W&&W.length>0?t.bindFramebuffer(i.FRAMEBUFFER,p.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,p.__webglFramebuffer),p.__webglDepthbuffer===void 0)p.__webglDepthbuffer=i.createRenderbuffer(),je(p.__webglDepthbuffer,T,!1);else{let Q=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=p.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,oe),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,oe)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function He(T,p,B){let W=n.get(T);p!==void 0&&Ee(W.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&Ye(T)}function Oe(T){let p=T.texture,B=n.get(T),W=n.get(p);T.addEventListener("dispose",_);let Q=T.textures,oe=T.isWebGLCubeRenderTarget===!0,re=Q.length>1;if(re||(W.__webglTexture===void 0&&(W.__webglTexture=i.createTexture()),W.__version=p.version,a.memory.textures++),oe){B.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(p.mipmaps&&p.mipmaps.length>0){B.__webglFramebuffer[Y]=[];for(let ne=0;ne<p.mipmaps.length;ne++)B.__webglFramebuffer[Y][ne]=i.createFramebuffer()}else B.__webglFramebuffer[Y]=i.createFramebuffer()}else{if(p.mipmaps&&p.mipmaps.length>0){B.__webglFramebuffer=[];for(let Y=0;Y<p.mipmaps.length;Y++)B.__webglFramebuffer[Y]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(re)for(let Y=0,ne=Q.length;Y<ne;Y++){let ge=n.get(Q[Y]);ge.__webglTexture===void 0&&(ge.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&gt(T)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let Y=0;Y<Q.length;Y++){let ne=Q[Y];B.__webglColorRenderbuffer[Y]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[Y]);let ge=r.convert(ne.format,ne.colorSpace),Re=r.convert(ne.type),ve=y(ne.internalFormat,ge,Re,ne.normalized,ne.colorSpace,T.isXRRenderTarget===!0),_e=$e(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,_e,ve,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Y,i.RENDERBUFFER,B.__webglColorRenderbuffer[Y])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),je(B.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(oe){t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture),Ze(i.TEXTURE_CUBE_MAP,p);for(let Y=0;Y<6;Y++)if(p.mipmaps&&p.mipmaps.length>0)for(let ne=0;ne<p.mipmaps.length;ne++)Ee(B.__webglFramebuffer[Y][ne],T,p,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ne);else Ee(B.__webglFramebuffer[Y],T,p,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);u(p)&&w(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(re){for(let Y=0,ne=Q.length;Y<ne;Y++){let ge=Q[Y],Re=n.get(ge),ve=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ve=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ve,Re.__webglTexture),Ze(ve,ge),Ee(B.__webglFramebuffer,T,ge,i.COLOR_ATTACHMENT0+Y,ve,0),u(ge)&&w(ve)}t.unbindTexture()}else{let Y=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(Y=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Y,W.__webglTexture),Ze(Y,p),p.mipmaps&&p.mipmaps.length>0)for(let ne=0;ne<p.mipmaps.length;ne++)Ee(B.__webglFramebuffer[ne],T,p,i.COLOR_ATTACHMENT0,Y,ne);else Ee(B.__webglFramebuffer,T,p,i.COLOR_ATTACHMENT0,Y,0);u(p)&&w(Y),t.unbindTexture()}T.depthBuffer&&Ye(T)}function ot(T){let p=T.textures;for(let B=0,W=p.length;B<W;B++){let Q=p[B];if(u(Q)){let oe=R(T),re=n.get(Q).__webglTexture;t.bindTexture(oe,re),w(oe),t.unbindTexture()}}}let ft=[],pt=[];function tt(T){if(T.samples>0){if(gt(T)===!1){let p=T.textures,B=T.width,W=T.height,Q=i.COLOR_BUFFER_BIT,oe=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=n.get(T),Y=p.length>1;if(Y)for(let ge=0;ge<p.length;ge++)t.bindFramebuffer(i.FRAMEBUFFER,re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,re.__webglMultisampledFramebuffer);let ne=T.texture.mipmaps;ne&&ne.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,re.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,re.__webglFramebuffer);for(let ge=0;ge<p.length;ge++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),Y){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,re.__webglColorRenderbuffer[ge]);let Re=n.get(p[ge]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Re,0)}i.blitFramebuffer(0,0,B,W,0,0,B,W,Q,i.NEAREST),c===!0&&(ft.length=0,pt.length=0,ft.push(i.COLOR_ATTACHMENT0+ge),T.depthBuffer&&T.resolveDepthBuffer===!1&&(ft.push(oe),pt.push(oe),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,pt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ft))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Y)for(let ge=0;ge<p.length;ge++){t.bindFramebuffer(i.FRAMEBUFFER,re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,re.__webglColorRenderbuffer[ge]);let Re=n.get(p[ge]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.TEXTURE_2D,Re,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,re.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){let p=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[p])}}}function $e(T){return Math.min(s.maxSamples,T.samples)}function gt(T){let p=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&p.__useRenderToTexture!==!1}function N(T){let p=a.render.frame;d.get(T)!==p&&(d.set(T,p),T.update())}function At(T,p){let B=T.colorSpace,W=T.format,Q=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||B!==is&&B!==Fn&&(rt.getTransfer(B)===mt?(W!==rn||Q!==tn)&&ke("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ge("WebGLTextures: Unsupported texture color space:",B)),p}function We(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=O,this.resetTextureUnits=j,this.getTextureUnits=K,this.setTextureUnits=k,this.setTexture2D=Z,this.setTexture2DArray=ce,this.setTexture3D=de,this.setTextureCube=me,this.rebindTextures=He,this.setupRenderTarget=Oe,this.updateRenderTargetMipmap=ot,this.updateMultisampleRenderTarget=tt,this.setupDepthRenderbuffer=Ye,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=gt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function im(i,e){function t(n,s=Fn){let r,a=rt.getTransfer(s);if(n===tn)return i.UNSIGNED_BYTE;if(n===Hr)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Wr)return i.UNSIGNED_SHORT_5_5_5_1;if(n===wo)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Co)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===To)return i.BYTE;if(n===Eo)return i.SHORT;if(n===Hi)return i.UNSIGNED_SHORT;if(n===Gr)return i.INT;if(n===dn)return i.UNSIGNED_INT;if(n===fn)return i.FLOAT;if(n===bn)return i.HALF_FLOAT;if(n===Ro)return i.ALPHA;if(n===Io)return i.RGB;if(n===rn)return i.RGBA;if(n===_n)return i.DEPTH_COMPONENT;if(n===ni)return i.DEPTH_STENCIL;if(n===Po)return i.RED;if(n===Xr)return i.RED_INTEGER;if(n===ii)return i.RG;if(n===qr)return i.RG_INTEGER;if(n===Yr)return i.RGBA_INTEGER;if(n===Ss||n===As||n===Ts||n===Es)if(a===mt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ss)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===As)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ts)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Es)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ss)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===As)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ts)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Es)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===$r||n===Zr||n===Jr||n===Kr)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===$r)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Zr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Jr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Kr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Qr||n===jr||n===ea||n===ta||n===na||n===ws||n===ia)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Qr||n===jr)return a===mt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ea)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===ta)return r.COMPRESSED_R11_EAC;if(n===na)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ws)return r.COMPRESSED_RG11_EAC;if(n===ia)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===sa||n===ra||n===aa||n===oa||n===la||n===ca||n===ha||n===ua||n===da||n===fa||n===pa||n===ma||n===ga||n===_a)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===sa)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ra)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===aa)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===oa)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===la)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ca)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ha)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ua)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===da)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===fa)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===pa)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ma)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ga)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===_a)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===xa||n===va||n===ya)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===xa)return a===mt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===va)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ya)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ma||n===ba||n===Cs||n===Sa)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ma)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ba)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Cs)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Sa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Wi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var sm=`
void main() {

gl_Position = vec4( position, 1.0 );

}`,rm=`
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

}`,il=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new gs(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Ot({vertexShader:sm,fragmentShader:rm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new qt(new gi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},sl=class extends xn{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,d=null,f=null,h=null,g=null,x=null,S=typeof XRWebGLBinding<"u",m=new il,u={},w=t.getContextAttributes(),R=null,y=null,E=[],M=[],I=new nt,_=null,b=new Vt;b.viewport=new bt;let L=new Vt;L.viewport=new bt;let P=[b,L],z=new Or,j=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let te=E[ee];return te===void 0&&(te=new ki,E[ee]=te),te.getTargetRaySpace()},this.getControllerGrip=function(ee){let te=E[ee];return te===void 0&&(te=new ki,E[ee]=te),te.getGripSpace()},this.getHand=function(ee){let te=E[ee];return te===void 0&&(te=new ki,E[ee]=te),te.getHandSpace()};function k(ee){let te=M.indexOf(ee.inputSource);if(te===-1)return;let ae=E[te];ae!==void 0&&(ae.update(ee.inputSource,ee.frame,l||a),ae.dispatchEvent({type:ee.type,data:ee.inputSource}))}function O(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",H);for(let ee=0;ee<E.length;ee++){let te=M[ee];te!==null&&(M[ee]=null,E[ee].disconnect(te))}j=null,K=null,m.reset();for(let ee in u)delete u[ee];e.setRenderTarget(R),g=null,h=null,f=null,s=null,y=null,Ze.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){r=ee,n.isPresenting===!0&&ke("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){o=ee,n.isPresenting===!0&&ke("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(ee){l=ee},this.getBaseLayer=function(){return h!==null?h:g},this.getBinding=function(){return f===null&&S&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(ee){if(s=ee,s!==null){if(R=e.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",O),s.addEventListener("inputsourceschange",H),w.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(I),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let ae=null,Pe=null,Ue=null;w.depth&&(Ue=w.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=w.stencil?ni:_n,Pe=w.stencil?Wi:dn);let Ee={colorFormat:t.RGBA8,depthFormat:Ue,scaleFactor:r};f=this.getBinding(),h=f.createProjectionLayer(Ee),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),y=new Kt(h.textureWidth,h.textureHeight,{format:rn,type:tn,depthTexture:new Un(h.textureWidth,h.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{let ae={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:r};g=new XRWebGLLayer(s,t,ae),s.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),y=new Kt(g.framebufferWidth,g.framebufferHeight,{format:rn,type:tn,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Ze.setContext(s),Ze.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function H(ee){for(let te=0;te<ee.removed.length;te++){let ae=ee.removed[te],Pe=M.indexOf(ae);Pe>=0&&(M[Pe]=null,E[Pe].disconnect(ae))}for(let te=0;te<ee.added.length;te++){let ae=ee.added[te],Pe=M.indexOf(ae);if(Pe===-1){for(let Ee=0;Ee<E.length;Ee++)if(Ee>=M.length){M.push(ae),Pe=Ee;break}else if(M[Ee]===null){M[Ee]=ae,Pe=Ee;break}if(Pe===-1)break}let Ue=E[Pe];Ue&&Ue.connect(ae)}}let Z=new X,ce=new X;function de(ee,te,ae){Z.setFromMatrixPosition(te.matrixWorld),ce.setFromMatrixPosition(ae.matrixWorld);let Pe=Z.distanceTo(ce),Ue=te.projectionMatrix.elements,Ee=ae.projectionMatrix.elements,je=Ue[14]/(Ue[10]-1),Fe=Ue[14]/(Ue[10]+1),Ye=(Ue[9]+1)/Ue[5],He=(Ue[9]-1)/Ue[5],Oe=(Ue[8]-1)/Ue[0],ot=(Ee[8]+1)/Ee[0],ft=je*Oe,pt=je*ot,tt=Pe/(-Oe+ot),$e=tt*-Oe;if(te.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX($e),ee.translateZ(tt),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),Ue[10]===-1)ee.projectionMatrix.copy(te.projectionMatrix),ee.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{let gt=je+tt,N=Fe+tt,At=ft-$e,We=pt+(Pe-$e),T=Ye*Fe/N*gt,p=He*Fe/N*gt;ee.projectionMatrix.makePerspective(At,We,T,p,gt,N),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function me(ee,te){te===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(te.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(s===null)return;let te=ee.near,ae=ee.far;m.texture!==null&&(m.depthNear>0&&(te=m.depthNear),m.depthFar>0&&(ae=m.depthFar)),z.near=L.near=b.near=te,z.far=L.far=b.far=ae,(j!==z.near||K!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),j=z.near,K=z.far),z.layers.mask=ee.layers.mask|6,b.layers.mask=z.layers.mask&-5,L.layers.mask=z.layers.mask&-3;let Pe=ee.parent,Ue=z.cameras;me(z,Pe);for(let Ee=0;Ee<Ue.length;Ee++)me(Ue[Ee],Pe);Ue.length===2?de(z,b,L):z.projectionMatrix.copy(b.projectionMatrix),Se(ee,z,Pe)};function Se(ee,te,ae){ae===null?ee.matrix.copy(te.matrixWorld):(ee.matrix.copy(ae.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(te.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(te.projectionMatrix),ee.projectionMatrixInverse.copy(te.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=gr*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(h===null&&g===null))return c},this.setFoveation=function(ee){c=ee,h!==null&&(h.fixedFoveation=ee),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=ee)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(z)},this.getCameraTexture=function(ee){return u[ee]};let Ke=null;function Qe(ee,te){if(d=te.getViewerPose(l||a),x=te,d!==null){let ae=d.views;g!==null&&(e.setRenderTargetFramebuffer(y,g.framebuffer),e.setRenderTarget(y));let Pe=!1;ae.length!==z.cameras.length&&(z.cameras.length=0,Pe=!0);for(let Fe=0;Fe<ae.length;Fe++){let Ye=ae[Fe],He=null;if(g!==null)He=g.getViewport(Ye);else{let ot=f.getViewSubImage(h,Ye);He=ot.viewport,Fe===0&&(e.setRenderTargetTextures(y,ot.colorTexture,ot.depthStencilTexture),e.setRenderTarget(y))}let Oe=P[Fe];Oe===void 0&&(Oe=new Vt,Oe.layers.enable(Fe),Oe.viewport=new bt,P[Fe]=Oe),Oe.matrix.fromArray(Ye.transform.matrix),Oe.matrix.decompose(Oe.position,Oe.quaternion,Oe.scale),Oe.projectionMatrix.fromArray(Ye.projectionMatrix),Oe.projectionMatrixInverse.copy(Oe.projectionMatrix).invert(),Oe.viewport.set(He.x,He.y,He.width,He.height),Fe===0&&(z.matrix.copy(Oe.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Pe===!0&&z.cameras.push(Oe)}let Ue=s.enabledFeatures;if(Ue&&Ue.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&S){f=n.getBinding();let Fe=f.getDepthInformation(ae[0]);Fe&&Fe.isValid&&Fe.texture&&m.init(Fe,s.renderState)}if(Ue&&Ue.includes("camera-access")&&S){e.state.unbindTexture(),f=n.getBinding();for(let Fe=0;Fe<ae.length;Fe++){let Ye=ae[Fe].camera;if(Ye){let He=u[Ye];He||(He=new gs,u[Ye]=He);let Oe=f.getCameraImage(Ye);He.sourceTexture=Oe}}}}for(let ae=0;ae<E.length;ae++){let Pe=M[ae],Ue=E[ae];Pe!==null&&Ue!==void 0&&Ue.update(Pe,te,l||a)}Ke&&Ke(ee,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),x=null}let Ze=new Nc;Ze.setAnimationLoop(Qe),this.setAnimationLoop=function(ee){Ke=ee},this.dispose=function(){}}},am=new St,kc=new qe;kc.set(-1,0,0,0,1,0,0,0,1);function om(i,e){function t(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function n(m,u){u.color.getRGB(m.fogColor.value,Uo(i)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function s(m,u,w,R,y){u.isNodeMaterial?u.uniformsNeedUpdate=!1:u.isMeshBasicMaterial?r(m,u):u.isMeshLambertMaterial?(r(m,u),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)):u.isMeshToonMaterial?(r(m,u),f(m,u)):u.isMeshPhongMaterial?(r(m,u),d(m,u),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)):u.isMeshStandardMaterial?(r(m,u),h(m,u),u.isMeshPhysicalMaterial&&g(m,u,y)):u.isMeshMatcapMaterial?(r(m,u),x(m,u)):u.isMeshDepthMaterial?r(m,u):u.isMeshDistanceMaterial?(r(m,u),S(m,u)):u.isMeshNormalMaterial?r(m,u):u.isLineBasicMaterial?(a(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?c(m,u,w,R):u.isSpriteMaterial?l(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,t(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===Wt&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,t(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===Wt&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,t(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,t(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);let w=e.get(u),R=w.envMap,y=w.envMapRotation;R&&(m.envMap.value=R,m.envMapRotation.value.setFromMatrix4(am.makeRotationFromEuler(y)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(kc),m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,m.aoMapTransform))}function a(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function c(m,u,w,R){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*w,m.scale.value=R*.5,u.map&&(m.map.value=u.map,t(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function l(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function d(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function f(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function h(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function g(m,u,w){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Wt&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,u){u.matcap&&(m.matcap.value=u.matcap)}function S(m,u){let w=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function lm(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,E){let M=E.program;n.uniformBlockBinding(y,M)}function l(y,E){let M=s[y.id];M===void 0&&(m(y),M=d(y),s[y.id]=M,y.addEventListener("dispose",w));let I=E.program;n.updateUBOMapping(y,I);let _=e.render.frame;r[y.id]!==_&&(h(y),r[y.id]=_)}function d(y){let E=f();y.__bindingPointIndex=E;let M=i.createBuffer(),I=y.__size,_=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,I,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,M),M}function f(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return Ge("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){let E=s[y.id],M=y.uniforms,I=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let _=0,b=M.length;_<b;_++){let L=M[_];if(Array.isArray(L))for(let P=0,z=L.length;P<z;P++)g(L[P],_,P,I);else g(L,_,0,I)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function g(y,E,M,I){if(S(y,E,M,I)===!0){let _=y.__offset,b=y.value;if(Array.isArray(b)){let L=0;for(let P=0;P<b.length;P++){let z=b[P],j=u(z);x(z,y.__data,L),typeof z!="number"&&typeof z!="boolean"&&!z.isMatrix3&&!ArrayBuffer.isView(z)&&(L+=j.storage/Float32Array.BYTES_PER_ELEMENT)}}else x(b,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,y.__data)}}function x(y,E,M){typeof y=="number"||typeof y=="boolean"?E[0]=y:y.isMatrix3?(E[0]=y.elements[0],E[1]=y.elements[1],E[2]=y.elements[2],E[3]=0,E[4]=y.elements[3],E[5]=y.elements[4],E[6]=y.elements[5],E[7]=0,E[8]=y.elements[6],E[9]=y.elements[7],E[10]=y.elements[8],E[11]=0):ArrayBuffer.isView(y)?E.set(new y.constructor(y.buffer,y.byteOffset,E.length)):y.toArray(E,M)}function S(y,E,M,I){let _=y.value,b=E+"_"+M;if(I[b]===void 0)return typeof _=="number"||typeof _=="boolean"?I[b]=_:ArrayBuffer.isView(_)?I[b]=_.slice():I[b]=_.clone(),!0;{let L=I[b];if(typeof _=="number"||typeof _=="boolean"){if(L!==_)return I[b]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(L.equals(_)===!1)return L.copy(_),!0}}return!1}function m(y){let E=y.uniforms,M=0,I=16;for(let b=0,L=E.length;b<L;b++){let P=Array.isArray(E[b])?E[b]:[E[b]];for(let z=0,j=P.length;z<j;z++){let K=P[z],k=Array.isArray(K.value)?K.value:[K.value];for(let O=0,H=k.length;O<H;O++){let Z=k[O],ce=u(Z),de=M%I,me=de%ce.boundary,Se=de+me;M+=me,Se!==0&&I-Se<ce.storage&&(M+=I-Se),K.__data=new Float32Array(ce.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=M,M+=ce.storage}}}let _=M%I;return _>0&&(M+=I-_),y.__size=M,y.__cache={},this}function u(y){let E={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(E.boundary=4,E.storage=4):y.isVector2?(E.boundary=8,E.storage=8):y.isVector3||y.isColor?(E.boundary=16,E.storage=12):y.isVector4?(E.boundary=16,E.storage=16):y.isMatrix3?(E.boundary=48,E.storage=48):y.isMatrix4?(E.boundary=64,E.storage=64):y.isTexture?ke("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(E.boundary=16,E.storage=y.byteLength):ke("WebGLRenderer: Unsupported uniform value type.",y),E}function w(y){let E=y.target;E.removeEventListener("dispose",w);let M=a.indexOf(E.__bindingPointIndex);a.splice(M,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function R(){for(let y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:c,update:l,dispose:R}}var cm=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Sn=null;function hm(){return Sn===null&&(Sn=new yr(cm,16,16,ii,bn),Sn.name="DFG_LUT",Sn.minFilter=Ft,Sn.magFilter=Ft,Sn.wrapS=gn,Sn.wrapT=gn,Sn.generateMipmaps=!1,Sn.needsUpdate=!0),Sn}var Yi=class{constructor(e={}){let{canvas:t=rc(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:g=tn}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=a;let S=g,m=new Set([Yr,qr,Xr]),u=new Set([tn,dn,Hi,Wi,Hr,Wr]),w=new Uint32Array(4),R=new Int32Array(4),y=new X,E=null,M=null,I=[],_=[],b=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=un,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let L=this,P=!1,z=null,j=null,K=null,k=null;this._outputColorSpace=Zt;let O=0,H=0,Z=null,ce=-1,de=null,me=new bt,Se=new bt,Ke=null,Qe=new lt(0),Ze=0,ee=t.width,te=t.height,ae=1,Pe=null,Ue=null,Ee=new bt(0,0,ee,te),je=new bt(0,0,ee,te),Fe=!1,Ye=new fs,He=!1,Oe=!1,ot=new St,ft=new X,pt=new bt,tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},$e=!1;function gt(){return Z===null?ae:1}let N=n;function At(v,U){return t.getContext(v,U)}try{let v={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"185"}`),t.addEventListener("webglcontextlost",dt,!1),t.addEventListener("webglcontextrestored",it,!1),t.addEventListener("webglcontextcreationerror",Ut,!1),N===null){let U="webgl2";if(N=At(U,v),N===null)throw At(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(v){throw Ge("WebGLRenderer: "+v.message),v}let We,T,p,B,W,Q,oe,re,Y,ne,ge,Re,ve,_e,Le,Ne,C,A,q,V,se,he,J;function pe(){We=new _f(N),We.init(),se=new im(N,We),T=new cf(N,We,e,se),p=new tm(N,We),T.reversedDepthBuffer&&h&&p.buffers.depth.setReversed(!0),j=N.createFramebuffer(),K=N.createFramebuffer(),k=N.createFramebuffer(),B=new yf(N),W=new Vp,Q=new nm(N,We,p,W,T,se,B),oe=new gf(L),re=new Sh(N),he=new of(N,re),Y=new xf(N,re,B,he),ne=new bf(N,Y,re,he,B),A=new Mf(N,T,Q),Le=new hf(W),ge=new kp(L,oe,We,T,he,Le),Re=new om(L,W),ve=new Hp,_e=new Zp(We),C=new af(L,oe,p,ne,x,c),Ne=new em(L,ne,T),J=new lm(N,B,T,p),q=new lf(N,We,B),V=new vf(N,We,B),B.programs=ge.programs,L.capabilities=T,L.extensions=We,L.properties=W,L.renderLists=ve,L.shadowMap=Ne,L.state=p,L.info=B}pe(),S!==tn&&(b=new Af(S,t.width,t.height,o,s,r));let Me=new sl(L,N);this.xr=Me,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let v=We.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=We.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return ae},this.setPixelRatio=function(v){v!==void 0&&(ae=v,this.setSize(ee,te,!1))},this.getSize=function(v){return v.set(ee,te)},this.setSize=function(v,U,F=!0){if(Me.isPresenting){ke("WebGLRenderer: Can't change size while VR device is presenting.");return}ee=v,te=U,t.width=Math.floor(v*ae),t.height=Math.floor(U*ae),F===!0&&(t.style.width=v+"px",t.style.height=U+"px"),b!==null&&b.setSize(t.width,t.height),this.setViewport(0,0,v,U)},this.getDrawingBufferSize=function(v){return v.set(ee*ae,te*ae).floor()},this.setDrawingBufferSize=function(v,U,F){ee=v,te=U,ae=F,t.width=Math.floor(v*F),t.height=Math.floor(U*F),this.setViewport(0,0,v,U)},this.setEffects=function(v){if(S===tn){Ge("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let U=0;U<v.length;U++)if(v[U].isOutputPass===!0){ke("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(me)},this.getViewport=function(v){return v.copy(Ee)},this.setViewport=function(v,U,F,G){v.isVector4?Ee.set(v.x,v.y,v.z,v.w):Ee.set(v,U,F,G),p.viewport(me.copy(Ee).multiplyScalar(ae).round())},this.getScissor=function(v){return v.copy(je)},this.setScissor=function(v,U,F,G){v.isVector4?je.set(v.x,v.y,v.z,v.w):je.set(v,U,F,G),p.scissor(Se.copy(je).multiplyScalar(ae).round())},this.getScissorTest=function(){return Fe},this.setScissorTest=function(v){p.setScissorTest(Fe=v)},this.setOpaqueSort=function(v){Pe=v},this.setTransparentSort=function(v){Ue=v},this.getClearColor=function(v){return v.copy(C.getClearColor())},this.setClearColor=function(){C.setClearColor(...arguments)},this.getClearAlpha=function(){return C.getClearAlpha()},this.setClearAlpha=function(){C.setClearAlpha(...arguments)},this.clear=function(v=!0,U=!0,F=!0){let G=0;if(v){let D=!1;if(Z!==null){let ie=Z.texture.format;D=m.has(ie)}if(D){let ie=Z.texture.type,le=u.has(ie),fe=C.getClearColor(),xe=C.getClearAlpha(),Ie=fe.r,ze=fe.g,Xe=fe.b;le?(w[0]=Ie,w[1]=ze,w[2]=Xe,w[3]=xe,N.clearBufferuiv(N.COLOR,0,w)):(R[0]=Ie,R[1]=ze,R[2]=Xe,R[3]=xe,N.clearBufferiv(N.COLOR,0,R))}else G|=N.COLOR_BUFFER_BIT}U&&(G|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),F&&(G|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&N.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),z=v},this.dispose=function(){t.removeEventListener("webglcontextlost",dt,!1),t.removeEventListener("webglcontextrestored",it,!1),t.removeEventListener("webglcontextcreationerror",Ut,!1),C.dispose(),ve.dispose(),_e.dispose(),W.dispose(),oe.dispose(),ne.dispose(),he.dispose(),J.dispose(),ge.dispose(),Me.dispose(),Me.removeEventListener("sessionstart",Ds),Me.removeEventListener("sessionend",Ns),wn.stop()};function dt(v){v.preventDefault(),No("WebGLRenderer: Context Lost."),P=!0}function it(){No("WebGLRenderer: Context Restored."),P=!1;let v=B.autoReset,U=Ne.enabled,F=Ne.autoUpdate,G=Ne.needsUpdate,D=Ne.type;pe(),B.autoReset=v,Ne.enabled=U,Ne.autoUpdate=F,Ne.needsUpdate=G,Ne.type=D}function Ut(v){Ge("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Ct(v){let U=v.target;U.removeEventListener("dispose",Ct),Tn(U)}function Tn(v){Mi(v),W.remove(v)}function Mi(v){let U=W.get(v).programs;U!==void 0&&(U.forEach(function(F){ge.releaseProgram(F)}),v.isShaderMaterial&&ge.releaseShaderCache(v))}this.renderBufferDirect=function(v,U,F,G,D,ie){U===null&&(U=tt);let le=D.isMesh&&D.matrixWorld.determinantAffine()<0,fe=Ce(v,U,F,G,D);p.setMaterial(G,le);let xe=F.index,Ie=1;if(G.wireframe===!0){if(xe=Y.getWireframeAttribute(F),xe===void 0)return;Ie=2}let ze=F.drawRange,Xe=F.attributes.position,Ae=ze.start*Ie,st=(ze.start+ze.count)*Ie;ie!==null&&(Ae=Math.max(Ae,ie.start*Ie),st=Math.min(st,(ie.start+ie.count)*Ie)),xe!==null?(Ae=Math.max(Ae,0),st=Math.min(st,xe.count)):Xe!=null&&(Ae=Math.max(Ae,0),st=Math.min(st,Xe.count));let Mt=st-Ae;if(Mt<0||Mt===1/0)return;he.setup(D,G,fe,F,xe);let ct,ht=q;if(xe!==null&&(ct=re.get(xe),ht=V,ht.setIndex(ct)),D.isMesh)G.wireframe===!0?(p.setLineWidth(G.wireframeLinewidth*gt()),ht.setMode(N.LINES)):ht.setMode(N.TRIANGLES);else if(D.isLine){let Rt=G.linewidth;Rt===void 0&&(Rt=1),p.setLineWidth(Rt*gt()),D.isLineSegments?ht.setMode(N.LINES):D.isLineLoop?ht.setMode(N.LINE_LOOP):ht.setMode(N.LINE_STRIP)}else D.isPoints?ht.setMode(N.POINTS):D.isSprite&&ht.setMode(N.TRIANGLES);if(D.isBatchedMesh)if(We.get("WEBGL_multi_draw"))ht.renderMultiDraw(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount);else{let Rt=D._multiDrawStarts,Te=D._multiDrawCounts,ut=D._multiDrawCount,Ve=xe?re.get(xe).bytesPerElement:1,It=W.get(G).currentProgram.getUniforms();for(let nn=0;nn<ut;nn++)It.setValue(N,"_gl_DrawID",nn),ht.render(Rt[nn]/Ve,Te[nn])}else if(D.isInstancedMesh)ht.renderInstances(Ae,Mt,D.count);else if(F.isInstancedBufferGeometry){let Rt=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,Te=Math.min(F.instanceCount,Rt);ht.renderInstances(Ae,Mt,Te)}else ht.render(Ae,Mt)};function On(v,U,F){v.transparent===!0&&v.side===yn&&v.forceSinglePass===!1?(v.side=Wt,v.needsUpdate=!0,we(v,U,F),v.side=Nn,v.needsUpdate=!0,we(v,U,F),v.side=yn):we(v,U,F)}this.compile=function(v,U,F=null){F===null&&(F=v),M=_e.get(F),M.init(U),_.push(M),F.traverseVisible(function(D){D.isLight&&D.layers.test(U.layers)&&(M.pushLight(D),D.castShadow&&M.pushShadow(D))}),v!==F&&v.traverseVisible(function(D){D.isLight&&D.layers.test(U.layers)&&(M.pushLight(D),D.castShadow&&M.pushShadow(D))}),M.setupLights();let G=new Set;return v.traverse(function(D){if(!(D.isMesh||D.isPoints||D.isLine||D.isSprite))return;let ie=D.material;if(ie)if(Array.isArray(ie))for(let le=0;le<ie.length;le++){let fe=ie[le];On(fe,F,D),G.add(fe)}else On(ie,F,D),G.add(ie)}),M=_.pop(),G},this.compileAsync=function(v,U,F=null){let G=this.compile(v,U,F);return new Promise(D=>{function ie(){if(G.forEach(function(le){W.get(le).currentProgram.isReady()&&G.delete(le)}),G.size===0){D(v);return}setTimeout(ie,10)}We.get("KHR_parallel_shader_compile")!==null?ie():setTimeout(ie,10)})};let En=null;function bi(v){En&&En(v)}function Ds(){wn.stop()}function Ns(){wn.start()}let wn=new Nc;wn.setAnimationLoop(bi),typeof self<"u"&&wn.setContext(self),this.setAnimationLoop=function(v){En=v,Me.setAnimationLoop(v),v===null?wn.stop():wn.start()},Me.addEventListener("sessionstart",Ds),Me.addEventListener("sessionend",Ns),this.render=function(v,U){if(U!==void 0&&U.isCamera!==!0){Ge("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;z!==null&&z.renderStart(v,U);let F=Me.enabled===!0&&Me.isPresenting===!0,G=b!==null&&(Z===null||F)&&b.begin(L,Z);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Me.enabled===!0&&Me.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(Me.cameraAutoUpdate===!0&&Me.updateCamera(U),U=Me.getCamera()),v.isScene===!0&&v.onBeforeRender(L,v,U,Z),M=_e.get(v,_.length),M.init(U),M.state.textureUnits=Q.getTextureUnits(),_.push(M),ot.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Ye.setFromProjectionMatrix(ot,hn,U.reversedDepth),Oe=this.localClippingEnabled,He=Le.init(this.clippingPlanes,Oe),E=ve.get(v,I.length),E.init(),I.push(E),Me.enabled===!0&&Me.isPresenting===!0){let le=L.xr.getDepthSensingMesh();le!==null&&an(le,U,-1/0,L.sortObjects)}an(v,U,0,L.sortObjects),E.finish(),L.sortObjects===!0&&E.sort(Pe,Ue,U.reversedDepth),$e=Me.enabled===!1||Me.isPresenting===!1||Me.hasDepthSensing()===!1,$e&&C.addToRenderList(E,v),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),He===!0&&Le.beginShadows();let D=M.state.shadowsArray;if(Ne.render(D,v,U),He===!0&&Le.endShadows(),(G&&b.hasRenderPass())===!1){let le=E.opaque,fe=E.transmissive;if(M.setupLights(),U.isArrayCamera){let xe=U.cameras;if(fe.length>0)for(let Ie=0,ze=xe.length;Ie<ze;Ie++){let Xe=xe[Ie];Ji(le,fe,v,Xe)}$e&&C.render(v);for(let Ie=0,ze=xe.length;Ie<ze;Ie++){let Xe=xe[Ie];Zi(E,v,Xe,Xe.viewport)}}else fe.length>0&&Ji(le,fe,v,U),$e&&C.render(v),Zi(E,v,U)}Z!==null&&H===0&&(Q.updateMultisampleRenderTarget(Z),Q.updateRenderTargetMipmap(Z)),G&&b.end(L),v.isScene===!0&&v.onAfterRender(L,v,U),he.resetDefaultState(),ce=-1,de=null,_.pop(),_.length>0?(M=_[_.length-1],Q.setTextureUnits(M.state.textureUnits),He===!0&&Le.setGlobalState(L.clippingPlanes,M.state.camera)):M=null,I.pop(),I.length>0?E=I[I.length-1]:E=null,z!==null&&z.renderEnd()};function an(v,U,F,G){if(v.visible===!1)return;if(v.layers.test(U.layers)){if(v.isGroup)F=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(U);else if(v.isLightProbeGrid)M.pushLightProbeGrid(v);else if(v.isLight)M.pushLight(v),v.castShadow&&M.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||Ye.intersectsSprite(v)){G&&pt.setFromMatrixPosition(v.matrixWorld).applyMatrix4(ot);let le=ne.update(v),fe=v.material;fe.visible&&E.push(v,le,fe,F,pt.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||Ye.intersectsObject(v))){let le=ne.update(v),fe=v.material;if(G&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),pt.copy(v.boundingSphere.center)):(le.boundingSphere===null&&le.computeBoundingSphere(),pt.copy(le.boundingSphere.center)),pt.applyMatrix4(v.matrixWorld).applyMatrix4(ot)),Array.isArray(fe)){let xe=le.groups;for(let Ie=0,ze=xe.length;Ie<ze;Ie++){let Xe=xe[Ie],Ae=fe[Xe.materialIndex];Ae&&Ae.visible&&E.push(v,le,Ae,F,pt.z,Xe)}}else fe.visible&&E.push(v,le,fe,F,pt.z,null)}}let ie=v.children;for(let le=0,fe=ie.length;le<fe;le++)an(ie[le],U,F,G)}function Zi(v,U,F,G){let{opaque:D,transmissive:ie,transparent:le}=v;M.setupLightsView(F),He===!0&&Le.setGlobalState(L.clippingPlanes,F),G&&p.viewport(me.copy(G)),D.length>0&&$(D,U,F),ie.length>0&&$(ie,U,F),le.length>0&&$(le,U,F),p.buffers.depth.setTest(!0),p.buffers.depth.setMask(!0),p.buffers.color.setMask(!0),p.setPolygonOffset(!1)}function Ji(v,U,F,G){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[G.id]===void 0){let Ae=We.has("EXT_color_buffer_half_float")||We.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[G.id]=new Kt(1,1,{generateMipmaps:!0,type:Ae?bn:tn,minFilter:ti,samples:Math.max(4,T.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:rt.workingColorSpace})}let ie=M.state.transmissionRenderTarget[G.id],le=G.viewport||me;ie.setSize(le.z*L.transmissionResolutionScale,le.w*L.transmissionResolutionScale);let fe=L.getRenderTarget(),xe=L.getActiveCubeFace(),Ie=L.getActiveMipmapLevel();L.setRenderTarget(ie),L.getClearColor(Qe),Ze=L.getClearAlpha(),Ze<1&&L.setClearColor(16777215,.5),L.clear(),$e&&C.render(F);let ze=L.toneMapping;L.toneMapping=un;let Xe=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),M.setupLightsView(G),He===!0&&Le.setGlobalState(L.clippingPlanes,G),$(v,F,G),Q.updateMultisampleRenderTarget(ie),Q.updateRenderTargetMipmap(ie),We.has("WEBGL_multisampled_render_to_texture")===!1){let Ae=!1;for(let st=0,Mt=U.length;st<Mt;st++){let ct=U[st],{object:ht,geometry:Rt,material:Te,group:ut}=ct;if(Te.side===yn&&ht.layers.test(G.layers)){let Ve=Te.side;Te.side=Wt,Te.needsUpdate=!0,ue(ht,F,G,Rt,Te,ut),Te.side=Ve,Te.needsUpdate=!0,Ae=!0}}Ae===!0&&(Q.updateMultisampleRenderTarget(ie),Q.updateRenderTargetMipmap(ie))}L.setRenderTarget(fe,xe,Ie),L.setClearColor(Qe,Ze),Xe!==void 0&&(G.viewport=Xe),L.toneMapping=ze}function $(v,U,F){let G=U.isScene===!0?U.overrideMaterial:null;for(let D=0,ie=v.length;D<ie;D++){let le=v[D],{object:fe,geometry:xe,group:Ie}=le,ze=le.material;ze.allowOverride===!0&&G!==null&&(ze=G),fe.layers.test(F.layers)&&ue(fe,U,F,xe,ze,Ie)}}function ue(v,U,F,G,D,ie){v.onBeforeRender(L,U,F,G,D,ie),v.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),D.onBeforeRender(L,U,F,G,v,ie),D.transparent===!0&&D.side===yn&&D.forceSinglePass===!1?(D.side=Wt,D.needsUpdate=!0,L.renderBufferDirect(F,U,G,D,v,ie),D.side=Nn,D.needsUpdate=!0,L.renderBufferDirect(F,U,G,D,v,ie),D.side=yn):L.renderBufferDirect(F,U,G,D,v,ie),v.onAfterRender(L,U,F,G,D,ie)}function we(v,U,F){U.isScene!==!0&&(U=tt);let G=W.get(v),D=M.state.lights,ie=M.state.shadowsArray,le=D.state.version,fe=ge.getParameters(v,D.state,ie,U,F,M.state.lightProbeGridArray),xe=ge.getProgramCacheKey(fe),Ie=G.programs;G.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?U.environment:null,G.fog=U.fog;let ze=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;G.envMap=oe.get(v.envMap||G.environment,ze),G.envMapRotation=G.environment!==null&&v.envMap===null?U.environmentRotation:v.envMapRotation,Ie===void 0&&(v.addEventListener("dispose",Ct),Ie=new Map,G.programs=Ie);let Xe=Ie.get(xe);if(Xe!==void 0){if(G.currentProgram===Xe&&G.lightsStateVersion===le)return De(v,fe),Xe}else fe.uniforms=ge.getUniforms(v),z!==null&&v.isNodeMaterial&&z.build(v,F,fe),v.onBeforeCompile(fe,L),Xe=ge.acquireProgram(fe,xe),Ie.set(xe,Xe),G.uniforms=fe.uniforms;let Ae=G.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Ae.clippingPlanes=Le.uniform),De(v,fe),G.needsLights=yt(v),G.lightsStateVersion=le,G.needsLights&&(Ae.ambientLightColor.value=D.state.ambient,Ae.lightProbe.value=D.state.probe,Ae.directionalLights.value=D.state.directional,Ae.directionalLightShadows.value=D.state.directionalShadow,Ae.spotLights.value=D.state.spot,Ae.spotLightShadows.value=D.state.spotShadow,Ae.rectAreaLights.value=D.state.rectArea,Ae.ltc_1.value=D.state.rectAreaLTC1,Ae.ltc_2.value=D.state.rectAreaLTC2,Ae.pointLights.value=D.state.point,Ae.pointLightShadows.value=D.state.pointShadow,Ae.hemisphereLights.value=D.state.hemi,Ae.directionalShadowMatrix.value=D.state.directionalShadowMatrix,Ae.spotLightMatrix.value=D.state.spotLightMatrix,Ae.spotLightMap.value=D.state.spotLightMap,Ae.pointShadowMatrix.value=D.state.pointShadowMatrix),G.lightProbeGrid=M.state.lightProbeGridArray.length>0,G.currentProgram=Xe,G.uniformsList=null,Xe}function Be(v){if(v.uniformsList===null){let U=v.currentProgram.getUniforms();v.uniformsList=qi.seqWithValue(U.seq,v.uniforms)}return v.uniformsList}function De(v,U){let F=W.get(v);F.outputColorSpace=U.outputColorSpace,F.batching=U.batching,F.batchingColor=U.batchingColor,F.instancing=U.instancing,F.instancingColor=U.instancingColor,F.instancingMorph=U.instancingMorph,F.skinning=U.skinning,F.morphTargets=U.morphTargets,F.morphNormals=U.morphNormals,F.morphColors=U.morphColors,F.morphTargetsCount=U.morphTargetsCount,F.numClippingPlanes=U.numClippingPlanes,F.numIntersection=U.numClipIntersection,F.vertexAlphas=U.vertexAlphas,F.vertexTangents=U.vertexTangents,F.toneMapping=U.toneMapping}function ye(v,U){if(v.length===0)return null;if(v.length===1)return v[0].texture!==null?v[0]:null;y.setFromMatrixPosition(U.matrixWorld);for(let F=0,G=v.length;F<G;F++){let D=v[F];if(D.texture!==null&&D.boundingBox.containsPoint(y))return D}return null}function Ce(v,U,F,G,D){U.isScene!==!0&&(U=tt),Q.resetTextureUnits();let ie=U.fog,le=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?U.environment:null,fe=Z===null?L.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:rt.workingColorSpace,xe=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Ie=oe.get(G.envMap||le,xe),ze=G.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,Xe=!!F.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ae=!!F.morphAttributes.position,st=!!F.morphAttributes.normal,Mt=!!F.morphAttributes.color,ct=un;G.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(ct=L.toneMapping);let ht=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Rt=ht!==void 0?ht.length:0,Te=W.get(G),ut=M.state.lights;if(He===!0&&(Oe===!0||v!==de)){let xt=v===de&&G.id===ce;Le.setState(G,v,xt)}let Ve=!1;G.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==ut.state.version||Te.outputColorSpace!==fe||D.isBatchedMesh&&Te.batching===!1||!D.isBatchedMesh&&Te.batching===!0||D.isBatchedMesh&&Te.batchingColor===!0&&D.colorTexture===null||D.isBatchedMesh&&Te.batchingColor===!1&&D.colorTexture!==null||D.isInstancedMesh&&Te.instancing===!1||!D.isInstancedMesh&&Te.instancing===!0||D.isSkinnedMesh&&Te.skinning===!1||!D.isSkinnedMesh&&Te.skinning===!0||D.isInstancedMesh&&Te.instancingColor===!0&&D.instanceColor===null||D.isInstancedMesh&&Te.instancingColor===!1&&D.instanceColor!==null||D.isInstancedMesh&&Te.instancingMorph===!0&&D.morphTexture===null||D.isInstancedMesh&&Te.instancingMorph===!1&&D.morphTexture!==null||Te.envMap!==Ie||G.fog===!0&&Te.fog!==ie||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==Le.numPlanes||Te.numIntersection!==Le.numIntersection)||Te.vertexAlphas!==ze||Te.vertexTangents!==Xe||Te.morphTargets!==Ae||Te.morphNormals!==st||Te.morphColors!==Mt||Te.toneMapping!==ct||Te.morphTargetsCount!==Rt||!!Te.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(Ve=!0):(Ve=!0,Te.__version=G.version);let It=Te.currentProgram;Ve===!0&&(It=we(G,U,D),z&&G.isNodeMaterial&&z.onUpdateProgram(G,It,Te));let nn=!1,Bt=!1,Si=!1,_t=It.getUniforms(),Tt=Te.uniforms;if(p.useProgram(It.program)&&(nn=!0,Bt=!0,Si=!0),G.id!==ce&&(ce=G.id,Bt=!0),Te.needsLights){let xt=ye(M.state.lightProbeGridArray,D);Te.lightProbeGrid!==xt&&(Te.lightProbeGrid=xt,Bt=!0)}if(nn||de!==v){p.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),_t.setValue(N,"projectionMatrix",v.projectionMatrix),_t.setValue(N,"viewMatrix",v.matrixWorldInverse);let zn=_t.map.cameraPosition;zn!==void 0&&zn.setValue(N,ft.setFromMatrixPosition(v.matrixWorld)),T.logarithmicDepthBuffer&&_t.setValue(N,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&_t.setValue(N,"isOrthographic",v.isOrthographicCamera===!0),de!==v&&(de=v,Bt=!0,Si=!0)}if(Te.needsLights&&(ut.state.directionalShadowMap.length>0&&_t.setValue(N,"directionalShadowMap",ut.state.directionalShadowMap,Q),ut.state.spotShadowMap.length>0&&_t.setValue(N,"spotShadowMap",ut.state.spotShadowMap,Q),ut.state.pointShadowMap.length>0&&_t.setValue(N,"pointShadowMap",ut.state.pointShadowMap,Q)),D.isSkinnedMesh){_t.setOptional(N,D,"bindMatrix"),_t.setOptional(N,D,"bindMatrixInverse");let xt=D.skeleton;xt&&(xt.boneTexture===null&&xt.computeBoneTexture(),_t.setValue(N,"boneTexture",xt.boneTexture,Q))}D.isBatchedMesh&&(_t.setOptional(N,D,"batchingTexture"),_t.setValue(N,"batchingTexture",D._matricesTexture,Q),_t.setOptional(N,D,"batchingIdTexture"),_t.setValue(N,"batchingIdTexture",D._indirectTexture,Q),_t.setOptional(N,D,"batchingColorTexture"),D._colorsTexture!==null&&_t.setValue(N,"batchingColorTexture",D._colorsTexture,Q));let Bn=F.morphAttributes;if((Bn.position!==void 0||Bn.normal!==void 0||Bn.color!==void 0)&&A.update(D,F,It),(Bt||Te.receiveShadow!==D.receiveShadow)&&(Te.receiveShadow=D.receiveShadow,_t.setValue(N,"receiveShadow",D.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&U.environment!==null&&(Tt.envMapIntensity.value=U.environmentIntensity),Tt.dfgLUT!==void 0&&(Tt.dfgLUT.value=hm()),Bt){if(_t.setValue(N,"toneMappingExposure",L.toneMappingExposure),Te.needsLights&&Je(Tt,Si),ie&&G.fog===!0&&Re.refreshFogUniforms(Tt,ie),Re.refreshMaterialUniforms(Tt,G,ae,te,M.state.transmissionRenderTarget[v.id]),Te.needsLights&&Te.lightProbeGrid){let xt=Te.lightProbeGrid;Tt.probesSH.value=xt.texture,Tt.probesMin.value.copy(xt.boundingBox.min),Tt.probesMax.value.copy(xt.boundingBox.max),Tt.probesResolution.value.copy(xt.resolution)}qi.upload(N,Be(Te),Tt,Q)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(qi.upload(N,Be(Te),Tt,Q),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&_t.setValue(N,"center",D.center),_t.setValue(N,"modelViewMatrix",D.modelViewMatrix),_t.setValue(N,"normalMatrix",D.normalMatrix),_t.setValue(N,"modelMatrix",D.matrixWorld),G.uniformsGroups!==void 0){let xt=G.uniformsGroups;for(let zn=0,Ai=xt.length;zn<Ai;zn++){let al=xt[zn];J.update(al,It),J.bind(al,It)}}return It}function Je(v,U){v.ambientLightColor.needsUpdate=U,v.lightProbe.needsUpdate=U,v.directionalLights.needsUpdate=U,v.directionalLightShadows.needsUpdate=U,v.pointLights.needsUpdate=U,v.pointLightShadows.needsUpdate=U,v.spotLights.needsUpdate=U,v.spotLightShadows.needsUpdate=U,v.rectAreaLights.needsUpdate=U,v.hemisphereLights.needsUpdate=U}function yt(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(v,U,F){let G=W.get(v);G.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),W.get(v.texture).__webglTexture=U,W.get(v.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:F,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,U){let F=W.get(v);F.__webglFramebuffer=U,F.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(v,U=0,F=0){Z=v,O=U,H=F;let G=null,D=!1,ie=!1;if(v){let fe=W.get(v);if(fe.__useDefaultFramebuffer!==void 0){p.bindFramebuffer(N.FRAMEBUFFER,fe.__webglFramebuffer),me.copy(v.viewport),Se.copy(v.scissor),Ke=v.scissorTest,p.viewport(me),p.scissor(Se),p.setScissorTest(Ke),ce=-1;return}else if(fe.__webglFramebuffer===void 0)Q.setupRenderTarget(v);else if(fe.__hasExternalTextures)Q.rebindTextures(v,W.get(v.texture).__webglTexture,W.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let ze=v.depthTexture;if(fe.__boundDepthTexture!==ze){if(ze!==null&&W.has(ze)&&(v.width!==ze.image.width||v.height!==ze.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(v)}}let xe=v.texture;(xe.isData3DTexture||xe.isDataArrayTexture||xe.isCompressedArrayTexture)&&(ie=!0);let Ie=W.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Ie[U])?G=Ie[U][F]:G=Ie[U],D=!0):v.samples>0&&Q.useMultisampledRTT(v)===!1?G=W.get(v).__webglMultisampledFramebuffer:Array.isArray(Ie)?G=Ie[F]:G=Ie,me.copy(v.viewport),Se.copy(v.scissor),Ke=v.scissorTest}else me.copy(Ee).multiplyScalar(ae).floor(),Se.copy(je).multiplyScalar(ae).floor(),Ke=Fe;if(F!==0&&(G=j),p.bindFramebuffer(N.FRAMEBUFFER,G)&&p.drawBuffers(v,G),p.viewport(me),p.scissor(Se),p.setScissorTest(Ke),D){let fe=W.get(v.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+U,fe.__webglTexture,F)}else if(ie){let fe=U;for(let xe=0;xe<v.textures.length;xe++){let Ie=W.get(v.textures[xe]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+xe,Ie.__webglTexture,F,fe)}}else if(v!==null&&F!==0){let fe=W.get(v.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,fe.__webglTexture,F)}ce=-1},this.readRenderTargetPixels=function(v,U,F,G,D,ie,le,fe=0){if(!(v&&v.isWebGLRenderTarget)){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=W.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&le!==void 0&&(xe=xe[le]),xe){p.bindFramebuffer(N.FRAMEBUFFER,xe);try{let Ie=v.textures[fe],ze=Ie.format,Xe=Ie.type;if(v.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+fe),!T.textureFormatReadable(ze)){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!T.textureTypeReadable(Xe)){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=v.width-G&&F>=0&&F<=v.height-D&&N.readPixels(U,F,G,D,se.convert(ze),se.convert(Xe),ie)}finally{let Ie=Z!==null?W.get(Z).__webglFramebuffer:null;p.bindFramebuffer(N.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=async function(v,U,F,G,D,ie,le,fe=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=W.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&le!==void 0&&(xe=xe[le]),xe)if(U>=0&&U<=v.width-G&&F>=0&&F<=v.height-D){p.bindFramebuffer(N.FRAMEBUFFER,xe);let Ie=v.textures[fe],ze=Ie.format,Xe=Ie.type;if(v.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+fe),!T.textureFormatReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!T.textureTypeReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ae=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Ae),N.bufferData(N.PIXEL_PACK_BUFFER,ie.byteLength,N.STREAM_READ),N.readPixels(U,F,G,D,se.convert(ze),se.convert(Xe),0);let st=Z!==null?W.get(Z).__webglFramebuffer:null;p.bindFramebuffer(N.FRAMEBUFFER,st);let Mt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await oc(N,Mt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Ae),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,ie),N.deleteBuffer(Ae),N.deleteSync(Mt),ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,U=null,F=0){let G=Math.pow(2,-F),D=Math.floor(v.image.width*G),ie=Math.floor(v.image.height*G),le=U!==null?U.x:0,fe=U!==null?U.y:0;Q.setTexture2D(v,0),N.copyTexSubImage2D(N.TEXTURE_2D,F,0,0,le,fe,D,ie),p.unbindTexture()},this.copyTextureToTexture=function(v,U,F=null,G=null,D=0,ie=0){let le,fe,xe,Ie,ze,Xe,Ae,st,Mt,ct=v.isCompressedTexture?v.mipmaps[ie]:v.image;if(F!==null)le=F.max.x-F.min.x,fe=F.max.y-F.min.y,xe=F.isBox3?F.max.z-F.min.z:1,Ie=F.min.x,ze=F.min.y,Xe=F.isBox3?F.min.z:0;else{let Tt=Math.pow(2,-D);le=Math.floor(ct.width*Tt),fe=Math.floor(ct.height*Tt),v.isDataArrayTexture?xe=ct.depth:v.isData3DTexture?xe=Math.floor(ct.depth*Tt):xe=1,Ie=0,ze=0,Xe=0}G!==null?(Ae=G.x,st=G.y,Mt=G.z):(Ae=0,st=0,Mt=0);let ht=se.convert(U.format),Rt=se.convert(U.type),Te;U.isData3DTexture?(Q.setTexture3D(U,0),Te=N.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Q.setTexture2DArray(U,0),Te=N.TEXTURE_2D_ARRAY):(Q.setTexture2D(U,0),Te=N.TEXTURE_2D),p.activeTexture(N.TEXTURE0),p.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,U.flipY),p.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),p.pixelStorei(N.UNPACK_ALIGNMENT,U.unpackAlignment);let ut=p.getParameter(N.UNPACK_ROW_LENGTH),Ve=p.getParameter(N.UNPACK_IMAGE_HEIGHT),It=p.getParameter(N.UNPACK_SKIP_PIXELS),nn=p.getParameter(N.UNPACK_SKIP_ROWS),Bt=p.getParameter(N.UNPACK_SKIP_IMAGES);p.pixelStorei(N.UNPACK_ROW_LENGTH,ct.width),p.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ct.height),p.pixelStorei(N.UNPACK_SKIP_PIXELS,Ie),p.pixelStorei(N.UNPACK_SKIP_ROWS,ze),p.pixelStorei(N.UNPACK_SKIP_IMAGES,Xe);let Si=v.isDataArrayTexture||v.isData3DTexture,_t=U.isDataArrayTexture||U.isData3DTexture;if(v.isDepthTexture){let Tt=W.get(v),Bn=W.get(U),xt=W.get(Tt.__renderTarget),zn=W.get(Bn.__renderTarget);p.bindFramebuffer(N.READ_FRAMEBUFFER,xt.__webglFramebuffer),p.bindFramebuffer(N.DRAW_FRAMEBUFFER,zn.__webglFramebuffer);for(let Ai=0;Ai<xe;Ai++)Si&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,W.get(v).__webglTexture,D,Xe+Ai),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,W.get(U).__webglTexture,ie,Mt+Ai)),N.blitFramebuffer(Ie,ze,le,fe,Ae,st,le,fe,N.DEPTH_BUFFER_BIT,N.NEAREST);p.bindFramebuffer(N.READ_FRAMEBUFFER,null),p.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(D!==0||v.isRenderTargetTexture||W.has(v)){let Tt=W.get(v),Bn=W.get(U);p.bindFramebuffer(N.READ_FRAMEBUFFER,K),p.bindFramebuffer(N.DRAW_FRAMEBUFFER,k);for(let xt=0;xt<xe;xt++)Si?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Tt.__webglTexture,D,Xe+xt):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Tt.__webglTexture,D),_t?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Bn.__webglTexture,ie,Mt+xt):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Bn.__webglTexture,ie),D!==0?N.blitFramebuffer(Ie,ze,le,fe,Ae,st,le,fe,N.COLOR_BUFFER_BIT,N.NEAREST):_t?N.copyTexSubImage3D(Te,ie,Ae,st,Mt+xt,Ie,ze,le,fe):N.copyTexSubImage2D(Te,ie,Ae,st,Ie,ze,le,fe);p.bindFramebuffer(N.READ_FRAMEBUFFER,null),p.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else _t?v.isDataTexture||v.isData3DTexture?N.texSubImage3D(Te,ie,Ae,st,Mt,le,fe,xe,ht,Rt,ct.data):U.isCompressedArrayTexture?N.compressedTexSubImage3D(Te,ie,Ae,st,Mt,le,fe,xe,ht,ct.data):N.texSubImage3D(Te,ie,Ae,st,Mt,le,fe,xe,ht,Rt,ct):v.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,ie,Ae,st,le,fe,ht,Rt,ct.data):v.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,ie,Ae,st,ct.width,ct.height,ht,ct.data):N.texSubImage2D(N.TEXTURE_2D,ie,Ae,st,le,fe,ht,Rt,ct);p.pixelStorei(N.UNPACK_ROW_LENGTH,ut),p.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Ve),p.pixelStorei(N.UNPACK_SKIP_PIXELS,It),p.pixelStorei(N.UNPACK_SKIP_ROWS,nn),p.pixelStorei(N.UNPACK_SKIP_IMAGES,Bt),ie===0&&U.generateMipmaps&&N.generateMipmap(Te),p.unbindTexture()},this.initRenderTarget=function(v){W.get(v).__webglFramebuffer===void 0&&Q.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?Q.setTextureCube(v,0):v.isData3DTexture?Q.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?Q.setTexture2DArray(v,0):Q.setTexture2D(v,0),p.unbindTexture()},this.resetState=function(){O=0,H=0,Z=null,p.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=rt._getUnpackColorSpace()}};var um=`
precision highp float;
varying vec2 vUv;
uniform vec2 uSize;
uniform vec2 uLook;
uniform float uTime;
uniform float uGallery;
uniform sampler2D uArtwork;
uniform vec2 uArtSize;
uniform float uArtReady;
uniform float uPaletteHue;
uniform float uPaletteStrength;
uniform float uPaletteBrightness;
vec3 recolor(vec3 source) {
if(uPaletteStrength<.001 && uPaletteBrightness<.001)return source;
float l=dot(source,vec3(.2126,.7152,.0722));
float lift=uPaletteBrightness*.68;
float floorLight=.055+lift;
float light=floorLight+(1.-floorLight)*pow(max(0.,l),.72);
float hue=uPaletteHue+(1.-l)*5./360.;
vec3 primary=clamp(abs(mod(hue*6.+vec3(0.,4.,2.),6.)-3.)-1.,0.,1.);
float chroma=(1.-abs(2.*light-1.))*.58*(1.-l*l);
return mix(source*(1.-lift)+lift,(primary-.5)*chroma+light,uPaletteStrength);
}
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
if(uArtReady>.5){
// Cover the screen and advect the existing texture gently, without stretching photos.
float artAspect=uArtSize.x/uArtSize.y;
vec2 cover=aspect>artAspect?vec2(1.,artAspect/aspect):vec2(aspect/artAspect,1.);
vec2 uv=(vUv-.5)*cover*.96+.5;
float t=uTime*.11;
vec2 flow=vec2(sin(uv.y*7.+t)+sin(uv.x*4.-t*.63)*.42,cos(uv.x*6.+t*.73)+sin(uv.y*5.-t*.48)*.42);
uv+=flow*.0055+uLook*.004;
vec3 image=texture2D(uArtwork,uv).rgb;
gl_FragColor=vec4(recolor(image)*mix(1.,.76,uGallery),1.);
return;
}
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
gl_FragColor=vec4(recolor(color),1.);
}`;function Vc(i){let e,t,n=document.createElement("picture");n.className="nebula-art",n.setAttribute("aria-hidden","true");let s=document.createElement("source");s.media="(max-width: 700px)",s.srcset="./assets/nebula-mobile-v1.jpg";let r=document.createElement("img");r.src="./assets/nebula-4k-v1.jpg",r.alt="",r.width=3840,r.height=2160,r.decoding="async",r.addEventListener("load",()=>{i.classList.add("has-nebula-art"),i.dataset.artReady="true",e&&a&&(t.needsUpdate=!0,e.uArtSize.value.set(r.naturalWidth,r.naturalHeight),e.uArtReady.value=1,i.classList.add("has-live-nebula"),i.dataset.nebulaFlow="webgl",m(d,!0))}),r.addEventListener("error",()=>{n.hidden=!0}),n.append(s,r),i.prepend(n);let a,o,c,l=!1,d=0,f=new nt,h=new nt,g=0;try{o=document.createElement("canvas"),o.className="galaxy-sky",a=new Yi({canvas:o,antialias:!1,powerPreference:"low-power"});let u=new pi,w=new _i;t=new Gt(r),e={uSize:{value:new nt},uLook:{value:f},uTime:{value:0},uGallery:{value:0},uArtwork:{value:t},uArtSize:{value:new nt(3840,2160)},uArtReady:{value:0},uPaletteHue:{value:Number(document.body.dataset.paletteHue||338)/360},uPaletteStrength:{value:Number(document.body.dataset.paletteStrength||0)/100},uPaletteBrightness:{value:Number(document.body.dataset.paletteBrightness||0)/100}};let R=new Ot({uniforms:e,depthTest:!1,depthWrite:!1,vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:um}),y=new qt(new gi(2,2),R);y.frustumCulled=!1,u.add(y),c=M=>{e.uTime.value=M/1e3,e.uGallery.value=g,a.render(u,w),e.uArtReady.value&&(i.dataset.nebulaFlowTime=(M/1e3).toFixed(3))},i.prepend(o),i.dataset.renderer="webgl",o.addEventListener("webglcontextlost",M=>{M.preventDefault(),a.dispose(),o.remove(),x(),S(),m(d,!0)});let E=a.setSize.bind(a);a.resizeSky=()=>{let M=Math.min(devicePixelRatio||1,innerWidth<=700?.9:1.15);a.setPixelRatio(M),E(innerWidth,innerHeight,!1),e.uSize.value.set(innerWidth,innerHeight)}}catch{o?.remove(),x()}function x(){i.classList.remove("has-live-nebula"),i.dataset.nebulaFlow="drift",l=!0,a=null,o=document.createElement("canvas"),o.className="galaxy-sky",i.prepend(o);let u=o.getContext("2d"),w=7259,R=()=>(w=w*1664525+1013904223>>>0,w/4294967296),y=Array.from({length:6e3},()=>{let E=R()<.82,M=R(),I=E?.5+(M-.5)*.48+(R()+R()+R()-1.5)*.095:R();return{x:M,y:I,r:.18+R()*.8,a:.12+R()*.62}});c=()=>{if(!u)return;let E=o.width,M=o.height;u.clearRect(0,0,E,M),u.fillStyle="#040810",u.fillRect(0,0,E,M),u.save(),u.translate(E*.54,M*.49),u.rotate(.34),u.scale(1,.22);let I=u.createRadialGradient(0,0,0,0,0,E*.65);I.addColorStop(0,"#53606b"),I.addColorStop(.25,"#283b51"),I.addColorStop(.7,"#101a30"),I.addColorStop(1,"#040810"),u.fillStyle=I,u.fillRect(-E,-M,E*2,M*2),u.restore();for(let _ of y)u.fillStyle=`rgba(209,220,236,${_.a*(g?.6:1)})`,u.beginPath(),u.arc(_.x*E+f.x*12,_.y*M+f.y*6,_.r,0,Math.PI*2),u.fill()},i.dataset.renderer="canvas"}function S(){a?a.resizeSky():(o.width=innerWidth,o.height=innerHeight),m(d,!0)}function m(u,w=!1){if(!w&&l&&Math.abs(f.x-h.x)+Math.abs(f.y-h.y)<.001)return;let R=Math.min(100,Math.max(0,u-d));d=u;let y=w?1:1-Math.exp(-R/230);f.lerp(h,y),(a||!i.classList.contains("has-nebula-art")||w)&&c(u),n.style.transform=`translate3d(${f.x*9}px,${f.y*6}px,0) scale(1.025)`}return S(),window.addEventListener("nebula-palette-change",()=>{a&&(e.uPaletteHue.value=Number(document.body.dataset.paletteHue||338)/360,e.uPaletteStrength.value=Number(document.body.dataset.paletteStrength||0)/100,e.uPaletteBrightness.value=Number(document.body.dataset.paletteBrightness||0)/100,m(d,!0))}),{draw:m,resize:S,look(u,w){h.set(Math.max(-1,Math.min(1,u)),Math.max(-1,Math.min(1,w)))},setGallery(u){g=u?1:0,m(d,!0)},get fallback(){return l}}}function Gc({viewport:i,world:e,host:t,makePhoto:n,enqueue:s,onChapter:r,onGesture:a,sky:o,onLetters:c}){let l=$=>document.querySelector($),d=matchMedia("(prefers-reduced-motion: reduce)"),f=()=>innerWidth<=700,h=($,ue,we)=>Math.max(ue,Math.min(we,$)),g=($=0,ue=0,we=0)=>new X($,ue,we),x=new Vt(48,1,1,3e4),S=new pi,m=null,u=null,w,R=null,y=null,E=null,M=g(1,1,1),I=0;function _(){M.fromArray((document.body.dataset.paletteTint||"1,1,1").split(",").map(Number)),I=Number(document.body.dataset.paletteStrength||0)/100,y&&(y.uniforms.uPaletteTint.value.copy(M),y.uniforms.uPaletteStrength.value=I),N=!0}let b="place",L=[],P=[],z=[],j=[],K=[],k=[],O="universe",H=null,Z=null,ce=!1,de=!1,me=600,Se=0,Ke=[],Qe=null,Ze=1400,ee=1,te=1,ae=4200,Pe=1500,Ue=900,Ee=.16,je=.48,Fe=Ee,Ye=je,He=4200,Oe=He,ot=1,ft=0,pt=0,tt=0,$e=0,gt=0,N=!0,At=0,We=g(),T=g(),p=g(),B=g(),W=g(),Q=g(),oe=new Map,re=null,Y=0,ne=l("#space-breadcrumb"),ge=l("#space-level"),Re=`attribute float pointSize;attribute float dustKind;varying float vDust;attribute float opacity;attribute vec3 tint;attribute float parentIndex;attribute float childIndex;uniform float uParent;uniform float uChild;uniform float uFocus;uniform float uDepth;varying vec3 vTint;varying float vOpacity;uniform float uRatio;uniform float uHeight;uniform float uTime;uniform vec3 uPaletteTint;uniform float uPaletteStrength;
void main(){vec4 p=modelViewMatrix*vec4(position,1.);gl_Position=projectionMatrix*p;vDust=dustKind;gl_PointSize=clamp(pointSize*uHeight*uRatio/max(1.,-p.z),1.,100.);float light=dot(tint,vec3(.2126,.7152,.0722));vTint=mix(tint,min(vec3(1.),uPaletteTint*light),uPaletteStrength*(dustKind>.5?1.:.65));float parentFade=abs(parentIndex-uParent)<.1?1.:.035;float childFade=abs(childIndex-uChild)<.1?1.:.12;vOpacity=opacity*mix(1.,parentFade,uFocus)*mix(1.,childFade,uDepth)*(.92+.08*sin(uTime*.6+position.x));}`,ve="precision highp float;varying float vDust;varying vec3 vTint;varying float vOpacity;void main(){vec2 p=gl_PointCoord-.5;float r=dot(p,p);if(r>.25)discard;float texture=.70+.30*sin(p.x*24.+sin(p.y*19.)*2.)*sin(p.y*27.+p.x*9.);float glow=vDust>.5?exp(-r*18.)*texture:clamp(1.-smoothstep(.005,.035,r)+exp(-r*34.)*.14,0.,1.);gl_FragColor=vec4(vTint,glow*vOpacity);}";function _e(){w=document.createElement("canvas"),w.className="nebula-particles",w.setAttribute("aria-hidden","true"),i.prepend(w);try{m=new Yi({canvas:w,alpha:!0,antialias:!1,powerPreference:"high-performance"}),m.setClearColor(0,0),y=new Ot({vertexShader:Re,fragmentShader:ve,uniforms:{uRatio:{value:1},uHeight:{value:1},uTime:{value:0},uParent:{value:-1},uChild:{value:-1},uFocus:{value:0},uDepth:{value:0},uPaletteTint:{value:M.clone()},uPaletteStrength:{value:I}},transparent:!0,depthWrite:!1,depthTest:!1,blending:ys}),t.dataset.nebulaRenderer="webgl",w.addEventListener("webglcontextlost",$=>{$.preventDefault(),m.dispose(),m=null,w.remove(),Le(),En()})}catch{w.remove(),Le()}}function Le(){w=document.createElement("canvas"),w.className="nebula-particles",w.setAttribute("aria-hidden","true"),i.prepend(w),u=w.getContext("2d"),t.dataset.nebulaRenderer="canvas"}function Ne($){let ue=$;return()=>(ue=ue*1664525+1013904223>>>0,ue/4294967296)}function C($,ue,we,Be,De=0,ye=-1,Ce=-1){let Je=Ne(Be);for(let yt=0;yt<we;yt++){let v=Math.pow(Je(),.67)*ue,U=yt%3,F=U*Math.PI*2/3+v/ue*4.8+(Je()-.5)*.85,G=(Je()+Je()-1)*ue*.12,D=g($.x+Math.cos(F)*v+G,$.y+(Je()+Je()-1)*ue*.12,$.z+Math.sin(F)*v*.72+G),ie=yt%5===0,le=Je();k.push({p:D,size:ie?ue*(.6+Je()*.75):8+Je()*12,alpha:ie?.027:.35+Je()*.4,color:De&&le>.5?[.72,.58,.42]:[.4+le*.3,.58+le*.2,.8+le*.16],dust:ie,parent:ye,child:Ce})}}function A(){if(E&&(S.remove(E),R.dispose(),E=null),!k.length||!m)return;let $=[],ue=[],we=[],Be=[],De=[],ye=[],Ce=[];for(let Je of k)$.push(Je.p.x,Je.p.y,Je.p.z),ue.push(Je.size),we.push(Je.alpha),Be.push(...Je.color),De.push(Je.parent),ye.push(Je.child),Ce.push(Je.dust?1:0);R=new jt,R.setAttribute("position",new wt($,3)),R.setAttribute("pointSize",new wt(ue,1)),R.setAttribute("dustKind",new wt(Ce,1)),R.setAttribute("opacity",new wt(we,1)),R.setAttribute("tint",new wt(Be,3)),R.setAttribute("parentIndex",new wt(De,1)),R.setAttribute("childIndex",new wt(ye,1)),E=new ps(R,y),E.frustumCulled=!1,S.add(E)}function q($,ue,we,Be,De,ye){let Ce=document.createElement("button");Ce.type="button",Ce.className=`nebula-label nebula-${De}`;let Je=document.createElement("strong"),yt=document.createElement("span");return Je.textContent=$,yt.textContent=ue,Ce.append(Je,yt),Ce.setAttribute("aria-label",`${$}\uFF0C${ue}\uFF0C\u70B9\u51FB\u8FDB\u5165`),Ce.addEventListener("click",()=>{performance.now()-gt<180||re?.moved||Be()}),Ce.addEventListener("pointerenter",()=>{de=!0,tt=$e=0,clearTimeout(Y)}),Ce.addEventListener("pointerleave",()=>{clearTimeout(Y),Y=setTimeout(()=>de=!1,180)}),e.append(Ce),z.push({node:Ce,p:we,type:De,owner:ye}),Ce}function V($,ue="place"){Ji(),b=ue,P=$;let we=new Map;for(let[ye,Ce]of P.entries()){Ce.orbitIndex=ye;let Je=Ce.rootId||Ce.placeId||Ce.label;we.has(Je)||we.set(Je,{id:Je,label:Ce.rootLabel||Ce.label,sortTime:Ce.sortTime,chapters:[],items:[],p:g(),radius:0});let yt=we.get(Je);yt.chapters.push(Ce),yt.items.push(...Ce.items),Ce.parent=yt}L=[...we.values()].sort((ye,Ce)=>b==="time"?Ce.sortTime-ye.sortTime:Ce.items.length-ye.items.length);let Be=Math.max(1800,...L.map(ye=>{let Ce=Math.max(...ye.chapters.map(Je=>135+Math.sqrt(Je.items.length)*40));return((ye.chapters.length>1?260+Math.sqrt(ye.chapters.length)*(Ce+100)*.75:0)+Ce+70)*3})),De=600;L.forEach((ye,Ce)=>{ye.orbitId=Ce;let Je=Ce*2.39996323-.6,yt=L.length===1?0:450+Math.sqrt(Ce)*620;if(b==="time"&&L.length>1){let F=-Math.PI/2+Ce*Math.PI*2/L.length,G=Be;ye.p.set(Math.cos(F)*G,Math.sin(F)*G*.7,Math.sin(F)*G*.28)}else ye.p.set(Math.cos(Je)*yt,Math.sin(Ce*1.7)*110,Math.sin(Je)*yt*.74);let v=Math.max(...ye.chapters.map(F=>135+Math.sqrt(F.items.length)*40)),U=ye.chapters.length>1?260+Math.sqrt(ye.chapters.length)*(v+100)*.75:0;ye.radius=U?U*.92+v*.35:v*1.3,De=Math.max(De,ye.p.length()+ye.radius+180),C(ye.p,ye.radius*1.08,f()?420:680,100+Ce*7,Ce%3===0,Ce,-1),q(ye.label,`${ye.chapters.length} ${b==="time"?"\u4E2A\u65E5\u671F\u5B50\u661F\u4E91":"\u4E2A\u6708\u4EFD\u5B50\u661F\u4E91"} \xB7 \u5171 ${ye.items.length} \u5F20`,ye.p.clone(),()=>Ct(ye),"place",ye),ye.chapters.forEach((F,G)=>{let D=ye.chapters.length===2?G*Math.PI:-Math.PI/2+G*Math.PI*2/ye.chapters.length,ie=U;F.p=ye.p.clone().add(g(Math.cos(D)*ie,Math.sin(D)*ie*.8,Math.sin(D)*ie*.15)),F.radius=135+Math.sqrt(F.items.length)*40,C(F.p,F.radius,f()?110:180,700+F.orbitIndex*17,F.orbitIndex%4===0,Ce,F.orbitIndex);let le=new Set(Array.from({length:Math.min(8,F.items.length)},(fe,xe)=>Math.round(xe*(F.items.length-1)/Math.max(1,Math.min(8,F.items.length)-1))));F.sampleCount=le.size,q(F.mapLabel||F.date,`\u9884\u89C8 ${F.sampleCount} / \u5171 ${F.items.length} \u5F20${F.captured?"":" \xB7 \u6587\u4EF6\u65E5\u671F"}`,F.p.clone(),()=>Tn(F.orbitIndex),"chapter",F),F.items.forEach((fe,xe)=>{let Ie=xe*2.39996323+.5,ze=F.items.length===1?0:65+Math.sqrt((xe+.5)/F.items.length)*F.radius*1.1,Xe=F.p.clone().add(g(Math.cos(Ie)*ze,Math.sin(xe*1.91)*F.radius*.4,Math.sin(Ie)*ze*.8)),Ae=n(fe,"atlas-shot nebula-photo","thumb",F.items);Ae.dataset.sample=String(le.has(xe)),Ae.dataset.chapter=String(F.orbitIndex),Ae.dataset.depthVisible="false";let st=document.createElement("span");st.className="nebula-photo-caption",st.textContent=fe.name,Ae.append(st),Ae.addEventListener("pointerenter",()=>{de=!0,tt=$e=0,clearTimeout(Y)}),Ae.addEventListener("pointerleave",()=>{clearTimeout(Y),Y=setTimeout(()=>de=!1,180)}),Ae.addEventListener("focus",()=>de=!0),Ae.addEventListener("blur",()=>de=!1),e.append(Ae),j.push({node:Ae,p:Xe,type:"photo",owner:F,sample:le.has(xe)})})})}),L.forEach(ye=>{ye.viewRadius=Math.max(ye.radius,...ye.chapters.map(Ce=>Ce.p.distanceTo(ye.p)+Ce.radius+70)),ye.viewDistance=Math.max(ye.viewRadius*2.5,...ye.chapters.map(Ce=>(Ce.radius+70)*2.5*1.6)),De=Math.max(De,ye.p.length()+ye.viewRadius)}),me=Math.max(De*1.55,...L.map(ye=>ye.viewDistance*1.8)),ae=me*Math.max(1,1/Math.max(.45,x.aspect)),He=Oe=ae,We.set(0,0,0),T.copy(We),Ee=Fe=.16,je=Ye=.48,se(),A(),it(!1),d.matches||e.animate([{opacity:0},{opacity:1}],{duration:360,easing:"ease-out"}),t.dataset.placeCount=String(b==="place"?L.length:0),t.dataset.parentCount=String(L.length),t.dataset.grouping=b,t.dataset.orbitPhotoCount=String(j.length),En()}function se(){if(!Se||!L.length)return;let $=g(-me*.2,-me*.08,me*.04),ue=me*.1;Qe={p:$,radius:ue},Ze=ue*3.6*Math.max(1,1/Math.max(.45,x.aspect)),C($,ue,f()?420:680,88127,1,-2,-1);let we=q("\u4E66\u4FE1\u661F\u4E91",`${Se} \u5C01\u4FE1 \xB7 \u653E\u5927\u8FDB\u5165`,$,()=>Ut(),"writing",Qe);we.id="nebula-letters";let Be=Math.max(8,Math.min(f()?140:240,Math.floor(8e3/Ke.length)));Ke.forEach((De,ye)=>{let Ce=Ke.length===2?ye*Math.PI:-Math.PI/2+ye*Math.PI*2/Ke.length,Je=$.clone().add(g(Math.cos(Ce)*ue*.5,Math.cos(Ce)*ue*.55,Math.sin(Ce)*ue*.1));C(Je,ue*.3,Be,88700+ye*17,1,-2,-10-ye);let yt=q(De.title,`${De.dateLabel} \xB7 \u70B9\u51FB\u8BFB\u4FE1`,Je,()=>c?.(De.id),"letter",De);yt.dataset.letterId=De.id})}function he($){Ke=Array.isArray($)?$.slice(0,1e3):[],Se=Ke.length,t.dataset.letterCount=String(Se);for(let ue of z.filter(we=>["writing","letter"].includes(we.type)))ue.node.remove();z=z.filter(ue=>!["writing","letter"].includes(ue.type)),k=k.filter(ue=>ue.parent!==-2),Qe=null,L.length&&(se(),A(),En(),J())}function J(){de=!1,clearTimeout(Y);for(let $ of K)$.node.style.visibility="hidden",$.node.dataset.depthVisible="false",$.node.tabIndex=-1,$.node.setAttribute("aria-hidden","true");K=[],O==="universe"?(K.push(...z.filter($=>$.type==="writing")),K.push(...z.filter($=>$.type==="place")),K.push(...L.map($=>j.find(ue=>ue.owner===$.chapters[0]&&ue.sample)).filter(Boolean))):O==="writing"?K.push(...z.filter($=>$.type==="letter")):O==="place"?(K.push(...z.filter($=>$.type==="chapter"&&$.owner.parent===H)),K.push(...j.filter($=>$.owner.parent===H&&$.sample))):Z&&K.push(...j.filter($=>$.owner===Z)),t.dataset.nebulaLevel=O,t.dataset.nebulaPlace=H?.label||"",t.dataset.nebulaChapter=Z?.date||"",Me(),N=!0}function pe($,ue,we=!1){let Be=document.createElement("button");Be.type="button",Be.textContent=$,we?(Be.setAttribute("aria-current","page"),Be.disabled=!0):Be.addEventListener("click",ue),ne.append(Be)}function Me(){if(ne.replaceChildren(),pe("\u5168\u90E8\u661F\u4E91",()=>it(),O==="universe"),O==="writing"){pe("\u4E66\u4FE1\u661F\u4E91",()=>Ut(),!0),l("#space-title").textContent="\u5199\u7ED9\u4F60\u7684\u8BDD\u3002",l("#space-subtitle").textContent=`${Se} \u5C01\u4FE1\uFF0C\u70B9\u51FB\u5B50\u661F\u4E91\uFF0C\u5728\u8FD9\u91CC\u6162\u6162\u8BFB\u3002`,l("#space-status").textContent=`${Se} \u4E2A\u4E66\u4FE1\u5B50\u661F\u4E91`,ge.textContent="\u4E66\u4FE1\u5B50\u661F\u4E91",l("#space-reset").textContent="\u5168\u90E8\u661F\u4E91",l("#space-reset").setAttribute("aria-label","\u8FD4\u56DE\u5168\u90E8\u661F\u4E91"),l("#space-share").hidden=!1,l("#space-letter-list").hidden=!1,l("#space-letters").setAttribute("aria-pressed","true"),l("#space-map").setAttribute("aria-pressed","false"),l("#space-gallery").setAttribute("aria-pressed","false");return}H&&pe(H.label,()=>Ct(H),O==="place"),Z&&O==="chapter"&&pe(Z.mapLabel||Z.date,()=>Tn(Z.orbitIndex),!0),l("#space-status").textContent=O==="universe"?`${L.length} ${b==="time"?"\u4E2A\u6708\u4EFD\u661F\u4E91":"\u4E2A\u5730\u70B9\u661F\u4E91"} \xB7 \u5171 ${j.length} \u5F20`:O==="place"?`${H.chapters.length} ${b==="time"?"\u4E2A\u65E5\u671F\u5B50\u661F\u4E91":"\u4E2A\u6708\u4EFD\u5B50\u661F\u4E91"} \xB7 \u5171 ${H.items.length} \u5F20`:`${Z.items.length} \u5F20\u7167\u7247 \xB7 ${Z.label}`,ge.textContent=O==="universe"?b==="time"?"\u5E74\u6708\u661F\u4E91":"\u5730\u70B9\u661F\u4E91":O==="place"?b==="time"?"\u65E5\u671F\u5B50\u661F\u4E91":"\u6708\u4EFD\u5B50\u661F\u4E91":"\u7167\u7247\u661F\u7FA4",l("#space-title").textContent=O==="universe"?b==="time"?"\u6CBF\u7740\u65F6\u95F4\uFF0C\u56DE\u770B\u8BB0\u5FC6\u3002":"\u8BB0\u5FC6\uFF0C\u5728\u661F\u4E91\u4E2D\u76F8\u9047\u3002":O==="place"?H.label:Z.mapLabel||Z.date,l("#space-subtitle").textContent=O==="universe"?b==="time"?"\u6309\u5E74\u6708\u4E0E\u65E5\u671F\u6D4F\u89C8\uFF0C\u672A\u8BB0\u5F55\u62CD\u6444\u65F6\u95F4\u65F6\u4F7F\u7528\u6587\u4EF6\u65E5\u671F\u3002":"\u6309\u5730\u70B9\u9009\u62E9\u661F\u4E91\uFF0C\u518D\u8FDB\u5165\u6708\u4EFD\u3002":O==="place"?`\u5171 ${H.items.length} \u5F20\u7167\u7247\u3002\u6BCF\u4E2A\u5B50\u661F\u4E91\u5148\u9884\u89C8\u6700\u591A 8 \u5F20\uFF0C\u70B9\u51FB${b==="time"?"\u65E5\u671F":"\u6708\u4EFD"}\u67E5\u770B\u5168\u90E8\u3002`:`${b==="time"?Z.rootLabel:Z.label} \xB7 \u5171 ${Z.items.length} \u5F20\uFF0C\u70B9\u51FB\u7167\u7247\u653E\u5927\u3002`,l("#space-reset").textContent="\u5168\u90E8\u661F\u4E91",l("#space-reset").setAttribute("aria-label","\u8FD4\u56DE\u5168\u90E8\u661F\u4E91"),l("#space-share").hidden=O==="universe",l("#space-letter-list").hidden=!0,l("#space-letters").setAttribute("aria-pressed",String(O==="writing")),l("#space-map").setAttribute("aria-pressed",String(O!=="writing")),l("#space-gallery").setAttribute("aria-pressed","false")}function dt($,ue,we=!1){T.copy($),Oe=ue,tt=$e=0,(we||d.matches)&&(We.copy($),He=ue),N=!0}function it($=!1){O="universe",H=null,Z=null,J(),dt(g(),ae,$)}function Ut(){return Qe?(O="writing",H=Z=null,J(),dt(Qe.p,Ze),!0):!1}function Ct($,ue=!1){$&&(O="place",H=$,Z=null,Pe=$.viewDistance*Math.max(1,1/Math.max(.45,x.aspect)),J(),dt($.p,Pe,ue))}function Tn($,ue=!1){let we=P[h($,0,P.length-1)];we&&(O="chapter",Z=we,H=we.parent,Ue=(we.radius+70)*2.5*Math.max(1,1/Math.max(.45,x.aspect)),J(),dt(we.p,Ue,ue),r(we.orbitIndex))}function Mi($){x.updateMatrixWorld();let ue=null,we=1/0;for(let Be of $){p.copy(Be.p).project(x);let De=p.x*p.x+p.y*p.y+(p.z>1?100:0);De<we&&(we=De,ue=Be)}return ue}function On($){if(L.length){if(tt=$e=0,Oe=h(Oe*$,90,ae*1.45),O==="universe"&&Oe<ae*.48){let ue=Mi(Qe?[...L,Qe]:L);ue===Qe?Ut():Ct(ue)}else O==="writing"&&Oe>Ze*1.85?it():O==="place"&&Oe<Pe*.5?Tn(Mi(H.chapters)?.orbitIndex??0):O==="place"&&Oe>Pe*1.85?it():O==="chapter"&&Oe>Ue*1.85&&Ct(H);d.matches&&(He=Oe),N=!0}}function En(){let $=i.getBoundingClientRect();if($.width<1||$.height<1)return;let ue=Math.max(1,1/Math.max(.45,x.aspect));ee=$.width,te=$.height,x.aspect=ee/te,x.updateProjectionMatrix();let we=Math.max(1,1/Math.max(.45,x.aspect)),Be=we/ue;ae=me*we,Pe*=Be,Ue*=Be,Ze*=Be,He*=Be,Oe*=Be;let De=Math.min(devicePixelRatio||1,Math.min(1.65,Math.sqrt(26e5/(ee*te))));m?(m.setPixelRatio(De),m.setSize(ee,te,!1),y.uniforms.uRatio.value=De,y.uniforms.uHeight.value=te):w&&(w.width=ee*De,w.height=te*De,u?.setTransform(De,0,0,De,0,0));for(let ye of z)ye.labelWidth=ye.node.offsetWidth,ye.labelHeight=ye.node.offsetHeight;N=!0}function bi($){return B.copy($.p).applyMatrix4(x.matrixWorldInverse),p.copy($.p).project(x),{x:(p.x*.5+.5)*ee,y:(-.5*p.y+.5)*te,depth:-B.z,visible:p.z>-1&&p.z<1&&Math.abs(p.x)<1.18&&Math.abs(p.y)<1.3}}function Ds($){let ue=te/(2*Math.tan(x.fov*Math.PI/360)),we=$-At>110,Be=[],De=[],ye=new Set,Ce=new Set,Je=new Map,yt=new Map,v=[],U=(D,ie)=>D.l<ie.r+8&&D.r>ie.l-8&&D.t<ie.b+8&&D.b>ie.t-8;for(let D of K){if(D.type!=="photo")continue;let ie=bi(D);if(ot>1.01){let le=yt.get(D.owner);le||(le=bi({p:D.owner.p}),yt.set(D.owner,le)),ie.x=le.x+(ie.x-le.x)*ot,ie.y=le.y+(ie.y-le.y)*ot}ie.size=h(ue/ie.depth*1.1,O==="universe"?.42:O==="place"?.52:.32,2.8),Je.set(D,ie),ie.visible&&ie.depth>10&&v.push({owner:D.owner,x:ie.x,y:ie.y,l:ie.x-70*ie.size,r:ie.x+70*ie.size,t:ie.y-53*ie.size,b:ie.y+53*ie.size})}let F=[...K].sort((D,ie)=>(D.type==="photo")-(ie.type==="photo")),G=0;for(let D of F){let ie=D.type==="photo",le=ie?Je.get(D):bi(D),fe=D.node,xe=le.visible&&le.depth>10;if(!ie&&xe){let ze=D.labelWidth||Math.min(f()?220:260,Math.max(fe.querySelector("strong").textContent.length*(f()?7:8),fe.querySelector("span").textContent.length*(f()?4.7:5.3))+38),Xe=D.labelHeight||(f()?54:66),Ae=(ct,ht)=>({l:ct-ze/2,r:ct+ze/2,t:ht-Xe/2,b:ht+Xe/2}),st=[{x:le.x,y:le.y+(O==="place"?42:32)}];if(O==="place"){let ct=v.filter(ut=>ut.owner===D.owner);if(ct.length){let ut=Math.min(...ct.map(Bt=>Bt.l)),Ve=Math.max(...ct.map(Bt=>Bt.r)),It=Math.min(...ct.map(Bt=>Bt.t)),nn=Math.max(...ct.map(Bt=>Bt.b));st=[{x:le.x,y:nn+Xe/2+14},{x:le.x,y:It-Xe/2-14},{x:ut-ze/2-14,y:le.y},{x:Ve+ze/2+14,y:le.y}]}let ht=ut=>{let Ve=Ae(ut.x,ut.y);return Ve.l>=12&&Ve.r<=ee-12&&Ve.t>=12&&Ve.b<=te-12},Rt=ut=>!De.some(Ve=>U(Ae(ut.x,ut.y),Ve)),Te=st.find(ut=>ht(ut)&&Rt(ut)&&!v.some(Ve=>U(Ae(ut.x,ut.y),Ve)));Te||(Te=st.find(ut=>ht(ut)&&Rt(ut)&&!v.some(Ve=>{let It=Ae(ut.x,ut.y);return Ve.x>It.l-8&&Ve.x<It.r+8&&Ve.y>It.t-8&&Ve.y<It.b+8}))),Te?(le.x=Te.x,le.y=Te.y):xe=!1}else le.y+=32;let Mt=Ae(le.x,le.y);xe=xe&&G<(f()?5:10)&&!De.some(ct=>U(Mt,ct)),xe&&(De.push(Mt),G++,D.type==="place"?ye.add(D.owner):Ce.add(D.owner))}if(ie&&O==="universe"&&!ye.has(D.owner.parent)&&(xe=!1),ie&&O==="place"&&!Ce.has(D.owner)&&(xe=!1),fe.style.visibility=xe?"visible":"hidden",fe.dataset.depthVisible=String(xe),fe.tabIndex=xe?0:-1,fe.setAttribute("aria-hidden",String(!xe)),!xe)continue;let Ie=ie?le.size:1;fe.style.transform=`translate3d(${le.x}px,${le.y}px,0) translate(-50%,-50%) scale(${Ie})`,fe.style.zIndex=String(ie?Math.round(1e3-h(le.depth/ae,0,1)*800):1200),fe.style.opacity=String(ie?h(1.5-le.depth/(Oe*3),.7,1):1),ie&&we&&Be.push({node:fe,score:Math.hypot(le.x-ee*.5,le.y-te*.5)})}we&&(At=$,Be.filter(D=>D.node.dataset.ready!=="true"&&!D.node.dataset.loading).sort((D,ie)=>D.score-ie.score).slice(0,f()?18:32).forEach(D=>s(D.node))),t.dataset.orbitCamera=[Ee.toFixed(4),je.toFixed(4),He.toFixed(1)].join(","),t.dataset.orbitSpeed=Math.hypot(tt,$e).toFixed(5),t.dataset.orbitVisiblePhotos=String(K.filter(D=>D.type==="photo"&&D.node.dataset.depthVisible==="true").length)}function Ns(){if(!u)return;u.clearRect(0,0,ee,te);let $=te/(2*Math.tan(x.fov*Math.PI/360)),ue=Math.max(1,Math.floor(k.length/2600)),we=M.toArray();for(let Be=0;Be<k.length;Be+=ue){let De=k[Be],ye=bi({p:De.p});if(!ye.visible||ye.depth<5)continue;let Ce=h(De.size*$/ye.depth*.45,.45,De.dust?48:5),Je=De.color[0]*.2126+De.color[1]*.7152+De.color[2]*.0722,yt=I*(De.dust?1:.65),v=De.color.map((G,D)=>Math.round((G*(1-yt)+Math.min(1,Je*we[D])*yt)*255)),U=O==="universe"||De.parent===(O==="writing"?-2:H?.orbitId)?1:.04,F=O!=="chapter"||De.child===Z?.orbitIndex?1:.12;u.fillStyle=`rgba(${v.join(",")},${(De.dust?.075:De.alpha)*U*F})`,u.beginPath(),u.arc(ye.x,ye.y,Ce,0,Math.PI*2),u.fill()}}function wn($,ue,we=!0){if(!ce)return;ft||(ft=ue),pt++,ue-ft>1e3&&(t.dataset.orbitFps=String(Math.round(pt*1e3/(ue-ft))),ft=ue,pt=0);let Be=d.matches?1:1-Math.exp(-$/135);ot+=((O==="place"?f()?1.55:2.25:1)-ot)*Be;let De=!re&&!de&&!d.matches;if(De){Fe+=tt*$,Ye=h(Ye+$e*$,-1.12,1.12);let ye=Math.exp(-$/430);tt*=ye,$e*=ye,Math.abs(tt)<8e-6&&(tt=0),Math.abs($e)<8e-6&&($e=0)}if(we&&!d.matches&&!re&&!de&&!tt&&!$e&&O==="universe"&&(Fe+=$*15e-6),Ee+=(Fe-Ee)*Be,je+=(Ye-je)*Be,He+=(Oe-He)*Be,We.lerp(T,Be),x.position.set(We.x+Math.sin(Ee)*Math.cos(je)*He,We.y+Math.sin(je)*He,We.z+Math.cos(Ee)*Math.cos(je)*He),x.lookAt(We),x.updateMatrixWorld(),m){y.uniforms.uParent.value=O==="writing"?-2:H?.orbitId??-1,y.uniforms.uChild.value=Z?.orbitIndex??-1;let ye=d.matches?1:1-Math.exp(-$/220);y.uniforms.uFocus.value+=((O==="universe"?0:1)-y.uniforms.uFocus.value)*ye,y.uniforms.uDepth.value+=((O==="chapter"?1:0)-y.uniforms.uDepth.value)*ye,y.uniforms.uTime.value=we&&!d.matches?ue/1e3:0,m.render(S,x)}else(N||De||we)&&Ns();Ds(ue),o.look(Math.sin(Ee)*.8,Math.sin(je)*.4),N=!1}function an(){a(),gt=performance.now(),N=!0}i.addEventListener("pointerdown",$=>{if(!ce||$.button!==0)return;let ue=performance.now();oe.set($.pointerId,{x:$.clientX,y:$.clientY}),tt=$e=0;let we=[...oe.values()];we.length===1?re={x:$.clientX,y:$.clientY,firstX:$.clientX,firstY:$.clientY,time:ue,moved:!1,pan:$.shiftKey}:(re={distance:Math.hypot(we[0].x-we[1].x,we[0].y-we[1].y),moved:!0},an())}),window.addEventListener("pointermove",$=>{if(!ce||!oe.has($.pointerId)||!re)return;let ue=performance.now();oe.set($.pointerId,{x:$.clientX,y:$.clientY});let we=[...oe.values()];if(we.length===2){let Ce=Math.hypot(we[0].x-we[1].x,we[0].y-we[1].y);re.distance&&On(re.distance/Math.max(1,Ce)),re.distance=Ce,re.moved=!0,an();return}let Be=$.clientX-re.x,De=$.clientY-re.y,ye=Math.max(8,ue-re.time);if(Math.hypot($.clientX-re.firstX,$.clientY-re.firstY)>5&&(re.moved=!0),re.moved){if(i.classList.add("is-dragging"),re.pan)W.set(1,0,0).applyQuaternion(x.quaternion),Q.set(0,1,0).applyQuaternion(x.quaternion),T.addScaledVector(W,-Be*He/te*.7).addScaledVector(Q,De*He/te*.7);else{let Ce=f()?.007:.0055;Fe-=Be*Ce,Ye=h(Ye+De*Ce,-1.12,1.12),tt=h(-Be*Ce/ye,-.006,.006),$e=h(De*Ce/ye,-.004,.004),d.matches&&(Ee=Fe,je=Ye,tt=$e=0)}an()}re.x=$.clientX,re.y=$.clientY,re.time=ue},{passive:!0});function Zi($){if(oe.has($.pointerId))if(oe.delete($.pointerId),re?.moved&&an(),$.type==="pointercancel"&&(tt=$e=0),!oe.size)re=null,i.classList.remove("is-dragging");else{let ue=[...oe.values()][0];re={x:ue.x,y:ue.y,firstX:ue.x,firstY:ue.y,time:performance.now(),moved:!0},tt=$e=0}}window.addEventListener("pointerup",Zi),window.addEventListener("pointercancel",Zi),window.addEventListener("blur",()=>{oe.clear(),re=null,tt=$e=0,i.classList.remove("is-dragging")}),i.addEventListener("wheel",$=>{if(!ce)return;$.preventDefault();let ue=$.deltaMode===1?16:$.deltaMode===2?te:1,we=h($.deltaX*ue,-180,180),Be=h($.deltaY*ue,-180,180);!$.ctrlKey&&Math.abs(we)>Math.abs(Be)*.7?(Fe-=we*.003,Ye=h(Ye+Be*.001,-1.12,1.12),tt=d.matches?0:-we*3e-5,an()):(On(Math.exp(Be*($.ctrlKey?.004:.002))),an())},{passive:!1}),i.addEventListener("keydown",$=>{if(!ce||$.target!==i)return;let ue={ArrowLeft:[-.22,0],ArrowRight:[.22,0],ArrowUp:[0,-.16],ArrowDown:[0,.16]};ue[$.key]?($.preventDefault(),Fe+=ue[$.key][0],Ye=h(Ye+ue[$.key][1],-1.12,1.12),an()):$.key==="+"||$.key==="="?($.preventDefault(),On(.75)):$.key==="-"?($.preventDefault(),On(1.33)):$.key==="Home"?($.preventDefault(),it()):$.key==="Escape"&&($.preventDefault(),O==="chapter"?Ct(H):it())}),i.setAttribute("aria-label","\u661F\u4E91\u7A7A\u95F4\u3002\u62D6\u52A8\u65CB\u8F6C\uFF0C\u6EDA\u52A8\u6216\u53CC\u6307\u7F29\u653E\uFF0C\u70B9\u51FB\u5730\u70B9\u8FDB\u5165\u65F6\u95F4\u5B50\u661F\u4E91\uFF0C\u70B9\u51FB\u7167\u7247\u653E\u5927\u3002\u65B9\u5411\u952E\u65CB\u8F6C\uFF0C\u52A0\u51CF\u952E\u7F29\u653E\uFF0CHome \u8FD4\u56DE\u5168\u90E8\u3002");function Ji(){oe.clear(),re=null,tt=$e=0,de=!1,clearTimeout(Y),L=[],P=[],z=[],j=[],K=[],k=[],e.replaceChildren(),ne.replaceChildren(),E&&(S.remove(E),R.dispose(),E=null),u?.clearRect(0,0,ee,te),O="universe",H=Z=null,t.dataset.orbitPhotoCount="0",t.dataset.orbitVisiblePhotos="0",t.dataset.placeCount="0",t.dataset.parentCount="0",delete t.dataset.nebulaPlace,delete t.dataset.nebulaChapter,delete t.dataset.orbitCamera,t.dataset.nebulaLevel="universe",N=!0}return _(),_e(),En(),window.addEventListener("nebula-palette-change",_),{mount:V,resize:En,update:wn,zoom:On,overview:it,focusChapter:Tn,refresh:Me,clear:Ji,setLetters:he,focusRoot($){Ct(L.find(ue=>ue.id===$))},focusWriting:Ut,get selection(){return O==="writing"?{grouping:"writing",level:"root",id:"letters",label:"\u4E66\u4FE1\u661F\u4E91"}:O==="place"&&H?{level:"root",id:H.id,label:H.label}:O==="chapter"&&Z?{level:"chapter",id:Z.key,label:`${Z.label} \xB7 ${Z.mapLabel||Z.date}`}:null},setEnabled($){ce=$,ft=0,pt=0,tt=$e=0,re=null,oe.clear(),N=!0},focusPhoto($){let ue=j.find(we=>we.node.entry===$);ue&&Z!==ue.owner&&Tn(ue.owner.orbitIndex)},get level(){return O}}}function rl(i,e="place",t=null){let n=new Map,s=t?new Intl.DateTimeFormat("en",{timeZone:t,year:"numeric",month:"2-digit",day:"2-digit"}):null;for(let a of i){let o=a.taken??a.mtime,c=new Date(o*1e3),l=Number.isFinite(c.getTime()),d=l&&s?Object.fromEntries(s.formatToParts(c).map(E=>[E.type,E.value])):null,f=d?Number(d.year):c.getFullYear(),h=d?Number(d.month):c.getMonth()+1,g=d?Number(d.day):c.getDate(),x=l?`${f}-${String(h).padStart(2,"0")}`:"undated",S=l?`${f} \u5E74 ${h} \u6708`:"\u65E5\u671F\u672A\u77E5",m=a.location?.id||"unknown",u=m!=="unknown"&&a.location?.label||"\u672A\u8BB0\u5F55\u4F4D\u7F6E",w=e==="time",R=w?`${x}-${l?String(g).padStart(2,"0"):"unknown"}`:`${x}:${m}`;n.has(R)||n.set(R,{key:R,placeId:m,rootId:w?x:m,rootLabel:w?S:u,label:w?l?`${h} \u6708 ${g} \u65E5`:"\u65E5\u671F\u672A\u77E5":u,date:S,mapLabel:w?l?`${h} \u6708 ${g} \u65E5`:"\u65E5\u671F\u672A\u77E5":S,sortTime:l?o:-1/0,items:[],captured:!1});let y=n.get(R);y.items.push(a),a.dateSource==="capture"&&(y.captured=!0),l&&(y.sortTime=Math.max(y.sortTime,o))}let r=[...n.values()].sort((a,o)=>o.sortTime-a.sortTime);return r.forEach(a=>a.items.sort((o,c)=>(o.taken??o.mtime??0)-(c.taken??c.mtime??0))),r}var dm=new TextEncoder;async function La(i,e){return[...new Uint8Array(await crypto.subtle.digest("SHA-256",dm.encode(`ww/share/v1/${i}/${e}`)))].map(n=>n.toString(16).padStart(2,"0")).join("").slice(0,24)}function Da(i,e,t){return JSON.stringify([i,e,t])}function hx({host:i,tray:e,status:t,onOpen:n,loadThumb:s,loadPreview:r,onLetters:a}){let o=C=>document.querySelector(C),c=matchMedia("(prefers-reduced-motion: reduce)"),l=()=>innerWidth<=700,d=C=>C.taken??C.mtime,f=(C,A,q)=>{let V=document.createElement(C);return A&&(V.className=A),q!==void 0&&(V.textContent=q),V},h=(C,A)=>{let q=f("button",C,A);return q.type="button",q},g=Vc(i),x=f("div","atlas-viewport");x.tabIndex=0,x.setAttribute("aria-label","\u8BB0\u5FC6\u661F\u56FE\u3002\u62D6\u52A8\u63A2\u7D22\uFF0C\u65B9\u5411\u952E\u79FB\u52A8\uFF0C\u52A0\u51CF\u952E\u7F29\u653E\u3002");let S=f("div","atlas-world");x.append(S),i.append(x);let m=o("#chapter-gallery"),u=o("#gallery-track"),w="place",R=null,y=!1,E="gate",M="map",I=[],_=[],b=0,L=0,P=!c.matches,z=!1;function j(){i.dataset.motion=P?"on":"off",o("#space-motion").textContent=P?"\u6682\u505C\u661F\u5149":"\u5F00\u542F\u661F\u5149",o("#space-motion").setAttribute("aria-pressed",String(!P)),o("#palette-motion").setAttribute("aria-pressed",String(P)),o("#palette-motion").disabled=c.matches,o("#palette-motion-state").textContent=c.matches?"\u5DF2\u9075\u5FAA\u7CFB\u7EDF\u8BBE\u7F6E":P?"\u5F00":"\u5173"}j();let K=0,k=null,O=[],H=0,Z=0,ce=0,de=0,me=0,Se=innerWidth,Ke=innerHeight,Qe=new Map,Ze=new Map,ee=0,te=Gc({viewport:x,world:S,host:i,makePhoto:N,enqueue:pt,sky:g,onLetters:a,onGesture:()=>{K=performance.now()},onChapter:C=>{b=C,We()}}),ae=null,Pe=null,Ue=500,Ee=0,je=0,Fe=new IntersectionObserver(C=>{for(let A of C)A.isIntersecting&&pt(A.target)},{rootMargin:"180px"});function Ye(C=performance.now()){g.draw(me,!0)}function He(C){ce=requestAnimationFrame(He);let A=Math.min(50,Math.max(1,C-de));de=C,!(document.hidden||E==="library"||z)&&(E==="space"&&M==="map"&&!y&&te.update(A,C,P),!(!P||c.matches||C-ee<(l()?50:40))&&(me+=Math.min(100,C-ee),ee=C,g.draw(me)))}function Oe(){if(Se=innerWidth,Ke=innerHeight,g.resize(),Ye(),te.resize(),M==="gallery"){let C=Ze.get(_[b]?.key)||0;W(),Y(C,!1),re()}}function ot(C){return`${C.quality}:${C.entry.path}`}function ft(C,A,q=C.quality){if(!C.isConnected)return;let V=C.querySelector("img");V.src=A,V.onload=()=>{if(C.isConnected){if(C.dataset.loadedQuality=q,C.quality!==q){delete C.dataset.ready,C.dataset.placeholder="true",pt(C);return}C.dataset.ready!=="true"&&(C.dataset.ready="true",delete C.dataset.placeholder,delete C.dataset.failed,Z++,i.dataset.loadedPhotos=String(Z))}},V.onerror=()=>{C.isConnected&&(C.dataset.failed="true")},V.complete&&V.naturalWidth&&V.onload()}function pt(C){if(E!=="space"||!C.entry||C.dataset.ready==="true"||C.dataset.loading||C.dataset.depthVisible==="false")return;let A=ot(C),q=Qe.get(A);if(q){q.used=performance.now(),ft(C,q.url);return}C.dataset.loading="true";let V={target:C,key:A,quality:C.quality,token:L};tt(C)?O.unshift(V):O.push(V),gt()}function tt(C){return C.quality==="preview"&&C.closest(".is-current")}function $e(){for(let C of["thumb","preview"]){let A=C==="thumb"?70:l()?3:5,q=[...Qe].filter(([V])=>V.startsWith(C+":")).sort((V,se)=>V[1].used-se[1].used);for(let V=0;V<q.length-A;V++){let[se,he]=q[V];if(![...S.querySelectorAll("[data-ready=true]"),...u.querySelectorAll("[data-ready=true]"),...e.querySelectorAll("[data-ready=true]")].some(pe=>{if(!pe.entry||ot(pe)!==se||pe.closest("[hidden]")||pe.dataset.depthVisible==="false")return!1;let Me=pe.getBoundingClientRect();return Me.right>0&&Me.left<Se&&Me.bottom>0&&Me.top<Ke})){for(let pe of[...S.querySelectorAll("button"),...u.querySelectorAll("button"),...e.querySelectorAll("button")])pe.entry&&ot(pe)===se&&(pe.querySelector("img").removeAttribute("src"),delete pe.dataset.ready);URL.revokeObjectURL(he.url),Qe.delete(se)}}}}function gt(){for(;H<3&&O.length;){let C=O.shift();if(C.token!==L||E!=="space"||!C.target.isConnected||C.target.closest("[hidden]")||C.target.dataset.depthVisible==="false"){delete C.target.dataset.loading;continue}if(ot(C.target)!==C.key){delete C.target.dataset.loading,pt(C.target);continue}let A=Qe.get(C.key);if(A){ft(C.target,A.url),delete C.target.dataset.loading;continue}H++,(C.quality==="preview"?r(C.target.entry):s(C.target.entry)).then(q=>{if(C.token!==L||E!=="space"){q.fill(0);return}let V=Qe.get(C.key);if(V){q.fill(0),ot(C.target)===C.key&&ft(C.target,V.url,C.quality);return}let se=URL.createObjectURL(new Blob([q],{type:"image/jpeg"}));q.fill(0),Qe.set(C.key,{url:se,used:performance.now()}),ot(C.target)===C.key&&ft(C.target,se,C.quality),$e()}).catch(()=>{C.token===L&&C.target.isConnected&&(C.target.dataset.failed="true",C.target.setAttribute("aria-label",`${C.target.entry.name}\uFF0C\u52A0\u8F7D\u5931\u8D25\uFF0C\u70B9\u51FB\u91CD\u65B0\u8BFB\u53D6`))}).finally(()=>{delete C.target.dataset.loading,H--,C.token===L&&ot(C.target)!==C.key&&pt(C.target),gt()})}}function N(C,A,q="thumb",V=null){let se=h(A);se.entry=C,se.quality=q,se.setAttribute("aria-label",`\u67E5\u770B ${C.name}`),se.title=C.name;let he=f("img");he.alt="",he.decoding="async",he.draggable=!1,se.append(he);let J=q==="preview"&&Qe.get(`thumb:${C.path}`);return J&&(he.src=J.url,se.dataset.placeholder="true"),se.addEventListener("click",()=>{if(!(performance.now()-K<180)){if(V){let pe=_.findIndex(Me=>Me.items===V);pe>=0&&(b=pe,We())}n(C,se,V||I)}}),se}function At(C){return rl(C,w,R)}function We(){let C=_[b];i.dataset.photoCount=String(I.length),i.dataset.chapterCount=String(_.length),i.dataset.groupIndex=String(b),o("#space-previous").disabled=b<=0,o("#space-next").disabled=b>=_.length-1,o("#space-gallery").disabled=!_.length,t.textContent=C?`${b+1} / ${_.length} \u4E2A\u7AE0\u8282 \xB7 \u5171 ${I.length} \u5F20`:"\u6682\u65E0\u53EF\u5C55\u793A\u7684\u7167\u7247";for(let[q,V]of[...S.querySelectorAll(".atlas-node")].entries())V.classList.toggle("is-selected",q===b);for(let[q,V]of[...e.children].entries())V.setAttribute("aria-current",String(q===b));let A=e.children[b];A&&e.scrollTo({left:A.offsetLeft-e.clientWidth/2+A.clientWidth/2,behavior:c.matches?"instant":"smooth"}),M==="gallery"&&C?(o("#space-title").textContent=C.label,o("#space-subtitle").textContent=`${C.date} \xB7 ${C.items.length} \u5F20${C.captured?"":" \xB7 \u6309\u6587\u4EF6\u65E5\u671F\u5206\u7EC4"} \xB7 \u6EDA\u52A8\u6216\u4E0A\u4E0B\u6ED1\u52A8\uFF0C\u70B9\u51FB\u653E\u5927`):te.refresh()}function T(C,A=!0){_.length&&(b=Math.max(0,Math.min(_.length-1,C)),M==="map"&&te.focusChapter(b,!A),We(),M==="gallery"&&ne())}function p(){Fe.disconnect(),e.replaceChildren(),te.mount(_,w);for(let C=0;C<_.length;C++){let A=_[C],q=h("space-photo");q.entry=A.items[0],q.quality="thumb",q.setAttribute("aria-label",`${A.date}\uFF0C${A.label}\uFF0C${A.items.length}\u5F20`);let V=f("img");V.alt="",V.draggable=!1,q.append(V);let se=f("span","chapter-label");se.append(f("strong","",A.label),f("small","",`${A.date} \xB7 ${A.items.length} \u5F20`)),q.append(se),q.addEventListener("click",()=>T(C)),e.append(q),Fe.observe(q)}We()}function B(){return Math.max(0,Math.min((_[b]?.items.length||1)-1,Math.round(u.scrollTop/Ue)))}function W(){Ue=Math.max(340,u.clientHeight*.92),Pe&&(Pe.style.height=`${Math.max(0,(_[b]?.items.length-1||0)*Ue)}px`)}function Q(C,A){if(C.quality!==A&&(C.quality=A,C.dataset.loadedQuality!==A)){delete C.dataset.ready;let q=C.querySelector("img"),V=Qe.get(`thumb:${C.entry.path}`);!q.src&&V&&(q.src=V.url),q.src&&(C.dataset.placeholder="true")}}function oe(){if(Ee=0,E!=="space"||M!=="gallery"||!ae)return;let C=Math.max(0,Math.min(_[b].items.length-1,u.scrollTop/Ue)),A=B(),q=c.matches;for(let[se,he]of[...ae.children].entries()){let J=se-C,pe=he.querySelector(".gallery-shot"),Me=q?se===A:J>-.86&&J<(l()?2.8:4.1),dt=se===A;if(he.classList.toggle("is-current",dt),he.style.visibility=Me?"visible":"hidden",pe.dataset.depthVisible=String(Me),pe.tabIndex=dt?0:-1,pe.disabled=!dt,he.setAttribute("aria-hidden",String(!dt)),!Me)continue;let it=Math.max(0,Math.min(1,(J+.86)/.55));he.style.opacity=String(q?1:it*Math.exp(-Math.max(0,J)*.31)),he.style.zIndex=String(1e3-Math.round(J*100));let Ut=q?0:Math.sin(se*1.65)*Math.min(Math.abs(J),1)*(l()?125:340),Ct=q?0:Math.cos(se*1.13)*Math.min(Math.abs(J),1)*105,Tn=q?0:-J*(l()?630:730),Mi=q?0:Math.sin(se*1.4)*Math.min(Math.abs(J),1)*-14;he.style.transform=`translate(-50%,-50%) translate3d(${Ut}px,${Ct}px,${Tn}px) rotateY(${Mi}deg)`,he.style.filter=J>2?`brightness(${Math.max(.6,1-J*.07)})`:"",Q(pe,Math.abs(J)<.85?"preview":"thumb"),pt(pe)}let V=(_[b]?.items.length||1)>1?C/(_[b].items.length-1):0;o("#gallery-progress").style.setProperty("--gallery-progress",`${Math.max(0,Math.min(1,V))*100}%`),i.dataset.galleryIndex=String(A)}function re(){if(E!=="space"||M!=="gallery"||!_[b])return;let C=B(),A=_[b];Ze.set(A.key,C),o("#gallery-position").textContent=`${C+1} / ${A.items.length}`,o("#gallery-previous").disabled=C===0,o("#gallery-next").disabled=C===A.items.length-1,Ee||(Ee=requestAnimationFrame(oe))}function Y(C,A=!0){if(!_[b])return;let q=Math.max(0,Math.min(_[b].items.length-1,C));u.scrollTo({top:q*Ue,behavior:A&&!c.matches?"smooth":"instant"}),(!A||c.matches)&&(re(),oe())}function ne(){clearTimeout(je),cancelAnimationFrame(Ee),Ee=0,u.replaceChildren();let C=_[b];if(!C)return;ae=f("div","depth-stage"),Pe=f("div","gallery-runway"),Pe.setAttribute("aria-hidden","true"),u.append(ae,Pe);for(let q of C.items){let V=f("figure","gallery-item"),se=N(q,"gallery-shot","thumb",C.items);V.append(se);let he=f("figcaption","gallery-caption");he.append(f("span","",new Date(d(q)*1e3).toLocaleDateString("zh-CN",{month:"long",day:"numeric"})),f("span","",q.name)),V.append(he),ae.append(V)}let A=L;requestAnimationFrame(()=>{A!==L||M!=="gallery"||(W(),Y(Ze.get(C.key)||0,!1),re(),oe())})}function ge(C=b){if(_.length){Fe.disconnect();for(let A of e.children)Fe.observe(A);O=O.filter(A=>A.target.closest(".atlas-world")?(delete A.target.dataset.loading,!1):!0),te.setEnabled(!1),M="gallery",b=Math.max(0,Math.min(_.length-1,C)),o("#space-share").hidden=!1,o("#space-letter-list").hidden=!0,o("#space-letters").setAttribute("aria-pressed","false"),o("#space").dataset.view=M,x.hidden=!0,m.hidden=!1,o("#space-map").setAttribute("aria-pressed","false"),o("#space-gallery").setAttribute("aria-pressed","true"),We(),ne(),g.setGallery(!0),u.focus({preventScroll:!0})}}function Re(){te.level==="writing"&&te.overview(),M="map",o("#space").dataset.view=M,x.hidden=!1,m.hidden=!0,te.resize(),o("#space-map").setAttribute("aria-pressed","true"),o("#space-gallery").setAttribute("aria-pressed","false"),clearTimeout(je),cancelAnimationFrame(Ee),Ee=0,u.replaceChildren(),ae=null,Pe=null,g.setGallery(!1),te.setEnabled(E==="space"&&!y),te.refresh(),We(),$e()}function ve(C){te.zoom(C)}u.addEventListener("wheel",C=>{Math.abs(C.deltaX)>Math.abs(C.deltaY)&&(C.preventDefault(),u.scrollTop+=C.deltaX)},{passive:!1}),u.addEventListener("scroll",()=>{re(),clearTimeout(je),!k&&!z&&(je=setTimeout(()=>{M==="gallery"&&!k&&!z&&Y(B())},190))},{passive:!0}),u.addEventListener("keydown",C=>{if(z)return;let A={ArrowRight:1,ArrowDown:1,PageDown:1,ArrowLeft:-1,ArrowUp:-1,PageUp:-1}[C.key];A?(C.preventDefault(),Y(B()+A)):(C.key==="Home"||C.key==="End")&&(C.preventDefault(),Y(C.key==="Home"?0:_[b].items.length-1))}),u.addEventListener("pointerdown",C=>{C.pointerType!=="mouse"||C.button!==0||(clearTimeout(je),k={id:C.pointerId,start:C.clientY,top:u.scrollTop,moved:!1})}),window.addEventListener("pointermove",C=>{if(!k||C.pointerId!==k.id)return;let A=C.clientY-k.start;Math.abs(A)>6&&(k.moved=!0),k.moved&&(u.classList.add("is-dragging"),u.scrollTop=k.top-A,K=performance.now())});function _e(C){if(!k||k.id!==C.pointerId)return;let A=k.moved;k=null,u.classList.remove("is-dragging"),A&&(K=performance.now(),Y(B()))}window.addEventListener("pointerup",_e),window.addEventListener("pointercancel",_e),o("#space-map").addEventListener("click",Re),o("#space-gallery").addEventListener("click",()=>ge()),o("#gallery-previous").addEventListener("click",()=>Y(B()-1)),o("#gallery-next").addEventListener("click",()=>Y(B()+1)),c.addEventListener("change",()=>{c.matches&&(P=!1),j(),Ye(),oe()}),window.addEventListener("pointermove",C=>{document.hidden||E==="library"||z||!P||c.matches||E==="space"&&M==="map"||g.look((C.clientX/Se-.5)*.6,(C.clientY/Ke-.5)*.35)},{passive:!0}),window.addEventListener("resize",Oe),document.addEventListener("visibilitychange",()=>{de=performance.now()}),Oe(),He(performance.now());function Le(C){if(!["place","time"].includes(C)||C===w||!I.length||z)return;w=C;let A=_[b]?.items[0];O.forEach(q=>delete q.target.dataset.loading),O=[],Ze.clear(),M!=="map"&&Re(),_=At(I),b=Math.max(0,_.findIndex(q=>q.items.includes(A))),p(),te.resize(),te.setEnabled(E==="space"),o("#group-place").setAttribute("aria-pressed",String(w==="place")),o("#group-time").setAttribute("aria-pressed",String(w==="time")),i.dataset.grouping=w}o("#group-place").addEventListener("click",()=>Le("place")),o("#group-time").addEventListener("click",()=>Le("time")),i.dataset.loadedPhotos="0",i.getPhotoTargets=()=>[...S.querySelectorAll(".atlas-shot[data-ready=true]")].map(C=>{let A=C.getBoundingClientRect();return{x:A.x+A.width/2,y:A.y+A.height/2}}),i.getCameraPosition=()=>i.dataset.orbitCamera;function Ne(){R=null,y=!1,x.inert=!1,m.inert=!1,L++,Fe.disconnect(),O=[],te.clear(),te.setLetters([]),te.setEnabled(!1),k=null,clearTimeout(je),cancelAnimationFrame(Ee),Ee=0,ae=null,Pe=null,g.setGallery(!1);for(let C of Qe.values())URL.revokeObjectURL(C.url);Qe.clear(),Ze.clear(),I=[],_=[],b=0,Z=0,S.replaceChildren(),e.replaceChildren(),u.replaceChildren(),m.hidden=!0,i.dataset.loadedPhotos="0",i.dataset.chapterCount="0",i.dataset.photoCount="0",t.textContent="",o("#gallery-position").textContent="",o("#space-title").textContent="\u8BB0\u5FC6\uFF0C\u6709\u8FF9\u53EF\u5FAA\u3002",o("#space-subtitle").textContent="\u6CBF\u7740\u65F6\u95F4\u4E0E\u5730\u70B9\uFF0C\u91CD\u65B0\u9760\u8FD1\u90A3\u4E9B\u77AC\u95F4\u3002",M="map",o("#space").dataset.view=M,x.hidden=!0,o("#space-map").setAttribute("aria-pressed","true"),o("#space-gallery").setAttribute("aria-pressed","false")}return{setLetters(C){te.setLetters(C)},enterLetters(){return M!=="map"&&Re(),te.focusWriting()},setReadingOpen(C){y=C,x.inert=C,m.inert=C,te.setEnabled(!C&&!z&&E==="space"&&M==="map")},getShareTarget(){let C=_[b],A=M==="gallery"&&C?{level:"chapter",id:C.key,label:`${C.label} \xB7 ${C.date}`}:te.selection;return A?{kind:"star",grouping:w,...A,zone:R||Intl.DateTimeFormat().resolvedOptions().timeZone}:null},async openSharedStar(C,A){if(await La("star",Da("writing","root","letters"))===C)return M!=="map"&&Re(),te.focusWriting();let q=null;for(let V of["place","time"]){let se=rl(I,V,A),he=new Map(se.map(J=>[J.rootId,J]));for(let[J,pe]of he)if(await La("star",Da(V,"root",J))===C){q={type:V,level:"root",id:J};break}if(!q){for(let J of se)if(await La("star",Da(V,"chapter",J.key))===C){q={type:V,level:"chapter",id:J.key};break}}if(q)break}return q?(M!=="map"&&Re(),R=A,w=q.type,_=At(I),b=0,p(),te.resize(),te.setEnabled(E==="space"&&!y),o("#group-place").setAttribute("aria-pressed",String(w==="place")),o("#group-time").setAttribute("aria-pressed",String(w==="time")),q.level==="root"?te.focusRoot(q.id):te.focusChapter(_.findIndex(V=>V.key===q.id)),!0):!1},get motionEnabled(){return P},setPhotos(C){C!==I&&(Ne(),I=C,_=At(C),b=Math.max(0,_.findIndex(A=>A.label!=="\u672A\u8BB0\u5F55\u4F4D\u7F6E"&&A.items.length>=3)),x.hidden=E!=="space",p(),te.resize(),te.setEnabled(E==="space"))},setMode(C){if(E=C,te.setEnabled(C==="space"&&M==="map"&&!z),i.dataset.mode=C,x.hidden=C!=="space"||M!=="map",m.hidden=C!=="space"||M!=="gallery",C==="space"){te.resize(),We();for(let A of[...e.children])Fe.observe(A);M==="gallery"&&(W(),Y(Ze.get(_[b]?.key)||0,!1),oe()),gt()}else Fe.disconnect(),clearTimeout(je),O.forEach(A=>delete A.target.dataset.loading),O=[];Ye()},setViewerOpen(C){z=C,te.setEnabled(!C&&E==="space"&&M==="map"),C?clearTimeout(je):M==="gallery"&&oe()},changeGroup(C){T(b+C)},focusPhoto(C){if(M==="map"){te.focusPhoto(C);return}if(M!=="gallery"||!_[b])return;let A=_[b].items.indexOf(C);A>=0&&(Y(A,!1),re())},zoom:ve,reset(){te.overview()},toggleMotion(){return P=!P&&!c.matches,j(),Ye(),P},clear:Ne}}export{hx as createCosmos};
