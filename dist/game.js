(()=>{var vd=0,ch=1,Md=2;var Ss=1,bd=2,xr=3,ss=0,mn=1,Pn=2,xi=0,_r=1,yr=2,hh=3,uh=4,Sd=5;var Es=100,Ed=101,Td=102,wd=103,Ad=104,Rd=200,Cd=201,Pd=202,Id=203,dh=204,fh=205,Ld=206,Dd=207,Nd=208,Ud=209,Fd=210,Od=211,Bd=212,zd=213,kd=214,_o=0,yo=1,vo=2,ar=3,Mo=4,bo=5,So=6,Eo=7,ph=0,Hd=1,Vd=2,Zn=0,mh=1,gh=2,xh=3,_h=4,yh=5,vh=6,Mh=7;var bh=300,rs=301,Ts=302,Ko=303,jo=304,va=306,bs=1e3,ai=1001,To=1002,en=1003,Gd=1004;var Ma=1005;var rn=1006,Qo=1007;var as=1008;var Sn=1009,Sh=1010,Eh=1011,vr=1012,el=1013,Jn=1014,Fn=1015,Kn=1016,tl=1017,nl=1018,Mr=1020,Th=35902,wh=35899,Ah=1021,Rh=1022,On=1023,oi=1026,os=1027,il=1028,sl=1029,ls=1030,rl=1031;var al=1033,ba=33776,Sa=33777,Ea=33778,Ta=33779,ol=35840,ll=35841,cl=35842,hl=35843,ul=36196,dl=37492,fl=37496,pl=37488,ml=37489,wa=37490,gl=37491,xl=37808,_l=37809,yl=37810,vl=37811,Ml=37812,bl=37813,Sl=37814,El=37815,Tl=37816,wl=37817,Al=37818,Rl=37819,Cl=37820,Pl=37821,Il=36492,Ll=36494,Dl=36495,Nl=36283,Ul=36284,Aa=36285,Fl=36286;var Jr=2300,wo=2301,go=2302,nh=2303,ih=2400,sh=2401,rh=2402;var Wd=3200;var Ol=0,Xd=1,Ui="",Qt="srgb",Kr="srgb-linear",jr="linear",dt="srgb";var xo=7680;var qd=519,Yd=512,$d=513,Zd=514,Bl=515,Jd=516,Kd=517,zl=518,jd=519,Ch=35044;var Ph="300 es",Yn=2e3,or=2001;function dm(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function fm(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Qr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Qd(){let n=Qr("canvas");return n.style.display="block",n}var Yu={},lr=null;function ea(...n){let e="THREE."+n.shift();lr?lr("log",e,...n):console.log(e,...n)}function ef(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Oe(...n){n=ef(n);let e="THREE."+n.shift();if(lr)lr("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Be(...n){n=ef(n);let e="THREE."+n.shift();if(lr)lr("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Ms(...n){let e=n.join(" ");e in Yu||(Yu[e]=!0,Oe(...n))}function tf(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var nf={[_o]:yo,[vo]:So,[Mo]:Eo,[ar]:bo,[yo]:_o,[So]:vo,[Eo]:Mo,[bo]:ar},li=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ic=Math.PI/180,Ao=180/Math.PI;function Qi(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ln[n&255]+ln[n>>8&255]+ln[n>>16&255]+ln[n>>24&255]+"-"+ln[e&255]+ln[e>>8&255]+"-"+ln[e>>16&15|64]+ln[e>>24&255]+"-"+ln[t&63|128]+ln[t>>8&255]+"-"+ln[t>>16&255]+ln[t>>24&255]+ln[i&255]+ln[i>>8&255]+ln[i>>16&255]+ln[i>>24&255]).toLowerCase()}function it(n,e,t){return Math.max(e,Math.min(t,n))}function pm(n,e){return(n%e+e)%e}function Lc(n,e,t){return(1-t)*n+t*e}function ri(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function gt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Ge=class n{static{n.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(it(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ci=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3],u=r[a+0],f=r[a+1],g=r[a+2],_=r[a+3];if(d!==_||l!==u||c!==f||h!==g){let m=l*u+c*f+h*g+d*_;m<0&&(u=-u,f=-f,g=-g,_=-_,m=-m);let p=1-o;if(m<.9995){let b=Math.acos(m),R=Math.sin(b);p=Math.sin(p*b)/R,o=Math.sin(o*b)/R,l=l*p+u*o,c=c*p+f*o,h=h*p+g*o,d=d*p+_*o}else{l=l*p+u*o,c=c*p+f*o,h=h*p+g*o,d=d*p+_*o;let b=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=b,c*=b,h*=b,d*=b}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=r[a],u=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+h*d+l*f-c*u,e[t+1]=l*g+h*u+c*d-o*f,e[t+2]=c*g+h*f+o*u-l*d,e[t+3]=h*g-o*d-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),d=o(r/2),u=l(i/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:Oe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=i+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(i>o&&i>d){let f=2*Math.sqrt(1+i-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-i-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-i-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(it(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},O=class n{static{n.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion($u.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion($u.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),h=2*(o*t-r*s),d=2*(r*i-a*t);return this.x=t+l*c+a*d-o*h,this.y=i+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Dc.copy(this).projectOnVector(e),this.sub(Dc)}reflect(e){return this.sub(Dc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(it(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Dc=new O,$u=new ci,ke=class n{static{n.prototype.isMatrix3=!0}constructor(e,t,i,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],f=i[5],g=i[8],_=s[0],m=s[3],p=s[6],b=s[1],R=s[4],M=s[7],S=s[2],T=s[5],C=s[8];return r[0]=a*_+o*b+l*S,r[3]=a*m+o*R+l*T,r[6]=a*p+o*M+l*C,r[1]=c*_+h*b+d*S,r[4]=c*m+h*R+d*T,r[7]=c*p+h*M+d*C,r[2]=u*_+f*b+g*S,r[5]=u*m+f*R+g*T,r[8]=u*p+f*M+g*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,u=o*l-h*r,f=c*r-a*l,g=t*d+i*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=d*_,e[1]=(s*c-h*i)*_,e[2]=(o*i-s*a)*_,e[3]=u*_,e[4]=(h*t-s*l)*_,e[5]=(s*r-o*t)*_,e[6]=f*_,e[7]=(i*l-c*t)*_,e[8]=(a*t-i*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Ms("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Nc.makeScale(e,t)),this}rotate(e){return Ms("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Nc.makeRotation(-e)),this}translate(e,t){return Ms("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Nc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Nc=new ke,Zu=new ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ju=new ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function mm(){let n={enabled:!0,workingColorSpace:Kr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===dt&&(s.r=Li(s.r),s.g=Li(s.g),s.b=Li(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===dt&&(s.r=rr(s.r),s.g=rr(s.g),s.b=rr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ui?jr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ms("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ms("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Kr]:{primaries:e,whitePoint:i,transfer:jr,toXYZ:Zu,fromXYZ:Ju,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Qt},outputColorSpaceConfig:{drawingBufferColorSpace:Qt}},[Qt]:{primaries:e,whitePoint:i,transfer:dt,toXYZ:Zu,fromXYZ:Ju,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Qt}}}),n}var nt=mm();function Li(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function rr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Hs,Ro=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Hs===void 0&&(Hs=Qr("canvas")),Hs.width=e.width,Hs.height=e.height;let s=Hs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Hs}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Qr("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Li(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Li(t[i]/255)*255):t[i]=Li(t[i]);return{data:t,width:e.width,height:e.height}}else return Oe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},gm=0,cr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:gm++}),this.uuid=Qi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Uc(s[a].image)):r.push(Uc(s[a]))}else r=Uc(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function Uc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ro.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Oe("Texture: Unable to serialize Texture."),{})}var xm=0,Fc=new O,pn=class n extends li{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=ai,s=ai,r=rn,a=as,o=On,l=Sn,c=n.DEFAULT_ANISOTROPY,h=Ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xm++}),this.uuid=Qi(),this.name="",this.source=new cr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ge(0,0),this.repeat=new Ge(1,1),this.center=new Ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Fc).x}get height(){return this.source.getSize(Fc).y}get depth(){return this.source.getSize(Fc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Oe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Oe(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==bh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case bs:e.x=e.x-Math.floor(e.x);break;case ai:e.x=e.x<0?0:1;break;case To:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case bs:e.y=e.y-Math.floor(e.y);break;case ai:e.y=e.y<0?0:1;break;case To:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};pn.DEFAULT_IMAGE=null;pn.DEFAULT_MAPPING=bh;pn.DEFAULT_ANISOTROPY=1;var Lt=class n{static{n.prototype.isVector4=!0}constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let R=(c+1)/2,M=(f+1)/2,S=(p+1)/2,T=(h+u)/4,C=(d+_)/4,y=(g+m)/4;return R>M&&R>S?R<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(R),s=T/i,r=C/i):M>S?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=T/s,r=y/s):S<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),i=C/r,s=y/r),this.set(i,s,r,t),this}let b=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(d-_)/b,this.z=(u-h)/b,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this.w=it(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this.w=it(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Co=class extends li{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Lt(0,0,e,t),this.scissorTest=!1,this.viewport=new Lt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:i.depth},r=new pn(s),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:rn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new cr(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},bn=class extends Co{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},ta=class extends pn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Po=class extends pn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var xt=class n{static{n.prototype.isMatrix4=!0}constructor(e,t,i,s,r,a,o,l,c,h,d,u,f,g,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,h,d,u,f,g,_,m)}set(e,t,i,s,r,a,o,l,c,h,d,u,f,g,_,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/Vs.setFromMatrixColumn(e,0).length(),r=1/Vs.setFromMatrixColumn(e,1).length(),a=1/Vs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=a*h,f=a*d,g=o*h,_=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=f+g*c,t[5]=u-_*c,t[9]=-o*l,t[2]=_-u*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){let u=l*h,f=l*d,g=c*h,_=c*d;t[0]=u+_*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=_+u*o,t[10]=a*l}else if(e.order==="ZXY"){let u=l*h,f=l*d,g=c*h,_=c*d;t[0]=u-_*o,t[4]=-a*d,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=_-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let u=a*h,f=a*d,g=o*h,_=o*d;t[0]=l*h,t[4]=g*c-f,t[8]=u*c+_,t[1]=l*d,t[5]=_*c+u,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let u=a*l,f=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=_-u*d,t[8]=g*d+f,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*d+g,t[10]=u-_*d}else if(e.order==="XZY"){let u=a*l,f=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+_,t[5]=a*h,t[9]=f*d-g,t[2]=g*d-f,t[6]=o*h,t[10]=_*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_m,e,ym)}lookAt(e,t,i){let s=this.elements;return wn.subVectors(e,t),wn.lengthSq()===0&&(wn.z=1),wn.normalize(),$i.crossVectors(i,wn),$i.lengthSq()===0&&(Math.abs(i.z)===1?wn.x+=1e-4:wn.z+=1e-4,wn.normalize(),$i.crossVectors(i,wn)),$i.normalize(),Wa.crossVectors(wn,$i),s[0]=$i.x,s[4]=Wa.x,s[8]=wn.x,s[1]=$i.y,s[5]=Wa.y,s[9]=wn.y,s[2]=$i.z,s[6]=Wa.z,s[10]=wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],f=i[13],g=i[2],_=i[6],m=i[10],p=i[14],b=i[3],R=i[7],M=i[11],S=i[15],T=s[0],C=s[4],y=s[8],w=s[12],P=s[1],F=s[5],B=s[9],k=s[13],D=s[2],W=s[6],Z=s[10],G=s[14],ne=s[3],Y=s[7],Q=s[11],se=s[15];return r[0]=a*T+o*P+l*D+c*ne,r[4]=a*C+o*F+l*W+c*Y,r[8]=a*y+o*B+l*Z+c*Q,r[12]=a*w+o*k+l*G+c*se,r[1]=h*T+d*P+u*D+f*ne,r[5]=h*C+d*F+u*W+f*Y,r[9]=h*y+d*B+u*Z+f*Q,r[13]=h*w+d*k+u*G+f*se,r[2]=g*T+_*P+m*D+p*ne,r[6]=g*C+_*F+m*W+p*Y,r[10]=g*y+_*B+m*Z+p*Q,r[14]=g*w+_*k+m*G+p*se,r[3]=b*T+R*P+M*D+S*ne,r[7]=b*C+R*F+M*W+S*Y,r[11]=b*y+R*B+M*Z+S*Q,r[15]=b*w+R*k+M*G+S*se,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15],b=l*f-c*u,R=o*f-c*d,M=o*u-l*d,S=a*f-c*h,T=a*u-l*h,C=a*d-o*h;return t*(_*b-m*R+p*M)-i*(g*b-m*S+p*T)+s*(g*R-_*S+p*C)-r*(g*M-_*T+m*C)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-i*(r*h-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],b=t*o-i*a,R=t*l-s*a,M=t*c-r*a,S=i*l-s*o,T=i*c-r*o,C=s*c-r*l,y=h*_-d*g,w=h*m-u*g,P=h*p-f*g,F=d*m-u*_,B=d*p-f*_,k=u*p-f*m,D=b*k-R*B+M*F+S*P-T*w+C*y;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let W=1/D;return e[0]=(o*k-l*B+c*F)*W,e[1]=(s*B-i*k-r*F)*W,e[2]=(_*C-m*T+p*S)*W,e[3]=(u*T-d*C-f*S)*W,e[4]=(l*P-a*k-c*w)*W,e[5]=(t*k-s*P+r*w)*W,e[6]=(m*M-g*C-p*R)*W,e[7]=(h*C-u*M+f*R)*W,e[8]=(a*B-o*P+c*y)*W,e[9]=(i*P-t*B-r*y)*W,e[10]=(g*T-_*M+p*b)*W,e[11]=(d*M-h*T-f*b)*W,e[12]=(o*w-a*F-l*y)*W,e[13]=(t*F-i*w+s*y)*W,e[14]=(_*R-g*S-m*b)*W,e[15]=(h*S-d*R+u*b)*W,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,d=o+o,u=r*c,f=r*h,g=r*d,_=a*h,m=a*d,p=o*d,b=l*c,R=l*h,M=l*d,S=i.x,T=i.y,C=i.z;return s[0]=(1-(_+p))*S,s[1]=(f+M)*S,s[2]=(g-R)*S,s[3]=0,s[4]=(f-M)*T,s[5]=(1-(u+p))*T,s[6]=(m+b)*T,s[7]=0,s[8]=(g+R)*C,s[9]=(m-b)*C,s[10]=(1-(u+_))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let a=Vs.set(s[0],s[1],s[2]).length(),o=Vs.set(s[4],s[5],s[6]).length(),l=Vs.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Gn.copy(this);let c=1/a,h=1/o,d=1/l;return Gn.elements[0]*=c,Gn.elements[1]*=c,Gn.elements[2]*=c,Gn.elements[4]*=h,Gn.elements[5]*=h,Gn.elements[6]*=h,Gn.elements[8]*=d,Gn.elements[9]*=d,Gn.elements[10]*=d,t.setFromRotationMatrix(Gn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,s,r,a,o=Yn,l=!1){let c=this.elements,h=2*r/(t-e),d=2*r/(i-s),u=(t+e)/(t-e),f=(i+s)/(i-s),g,_;if(l)g=r/(a-r),_=a*r/(a-r);else if(o===Yn)g=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===or)g=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=Yn,l=!1){let c=this.elements,h=2/(t-e),d=2/(i-s),u=-(t+e)/(t-e),f=-(i+s)/(i-s),g,_;if(l)g=1/(a-r),_=a/(a-r);else if(o===Yn)g=-2/(a-r),_=-(a+r)/(a-r);else if(o===or)g=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Vs=new O,Gn=new xt,_m=new O(0,0,0),ym=new O(1,1,1),$i=new O,Wa=new O,wn=new O,Ku=new xt,ju=new ci,Di=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(it(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-it(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(it(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-it(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(it(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-it(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Oe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ku.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ku,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ju.setFromEuler(this),this.setFromQuaternion(ju,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Di.DEFAULT_ORDER="XYZ";var na=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},vm=0,Qu=new O,Gs=new ci,wi=new xt,Xa=new O,kr=new O,Mm=new O,bm=new ci,ed=new O(1,0,0),td=new O(0,1,0),nd=new O(0,0,1),id={type:"added"},Sm={type:"removed"},Ws={type:"childadded",child:null},Oc={type:"childremoved",child:null},Ht=class n extends li{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vm++}),this.uuid=Qi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new O,t=new Di,i=new ci,s=new O(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new xt},normalMatrix:{value:new ke}}),this.matrix=new xt,this.matrixWorld=new xt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new na,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Gs.setFromAxisAngle(e,t),this.quaternion.multiply(Gs),this}rotateOnWorldAxis(e,t){return Gs.setFromAxisAngle(e,t),this.quaternion.premultiply(Gs),this}rotateX(e){return this.rotateOnAxis(ed,e)}rotateY(e){return this.rotateOnAxis(td,e)}rotateZ(e){return this.rotateOnAxis(nd,e)}translateOnAxis(e,t){return Qu.copy(e).applyQuaternion(this.quaternion),this.position.add(Qu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ed,e)}translateY(e){return this.translateOnAxis(td,e)}translateZ(e){return this.translateOnAxis(nd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(wi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Xa.copy(e):Xa.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),kr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wi.lookAt(kr,Xa,this.up):wi.lookAt(Xa,kr,this.up),this.quaternion.setFromRotationMatrix(wi),s&&(wi.extractRotation(s.matrixWorld),Gs.setFromRotationMatrix(wi),this.quaternion.premultiply(Gs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Be("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(id),Ws.child=e,this.dispatchEvent(Ws),Ws.child=null):Be("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Sm),Oc.child=e,this.dispatchEvent(Oc),Oc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),wi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),wi.multiply(e.parent.matrixWorld)),e.applyMatrix4(wi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(id),Ws.child=e,this.dispatchEvent(Ws),Ws.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(kr,e,Mm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(kr,bm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ht.DEFAULT_UP=new O(0,1,0);Ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ft=class extends Ht{constructor(){super(),this.isGroup=!0,this.type="Group"}},Em={type:"move"},hr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ft,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ft,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ft,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,i),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Em)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Ft;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},sf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zi={h:0,s:0,l:0},qa={h:0,s:0,l:0};function Bc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var qe=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=nt.workingColorSpace){return this.r=e,this.g=t,this.b=i,nt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=nt.workingColorSpace){if(e=pm(e,1),t=it(t,0,1),i=it(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Bc(a,r,e+1/3),this.g=Bc(a,r,e),this.b=Bc(a,r,e-1/3)}return nt.colorSpaceToWorking(this,s),this}setStyle(e,t=Qt){function i(r){r!==void 0&&parseFloat(r)<1&&Oe("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Oe("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Oe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Qt){let i=sf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Oe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Li(e.r),this.g=Li(e.g),this.b=Li(e.b),this}copyLinearToSRGB(e){return this.r=rr(e.r),this.g=rr(e.g),this.b=rr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qt){return nt.workingToColorSpace(cn.copy(this),e),Math.round(it(cn.r*255,0,255))*65536+Math.round(it(cn.g*255,0,255))*256+Math.round(it(cn.b*255,0,255))}getHexString(e=Qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.workingToColorSpace(cn.copy(this),t);let i=cn.r,s=cn.g,r=cn.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=nt.workingColorSpace){return nt.workingToColorSpace(cn.copy(this),t),e.r=cn.r,e.g=cn.g,e.b=cn.b,e}getStyle(e=Qt){nt.workingToColorSpace(cn.copy(this),e);let t=cn.r,i=cn.g,s=cn.b;return e!==Qt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Zi),this.setHSL(Zi.h+e,Zi.s+t,Zi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Zi),e.getHSL(qa);let i=Lc(Zi.h,qa.h,t),s=Lc(Zi.s,qa.s,t),r=Lc(Zi.l,qa.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},cn=new qe;qe.NAMES=sf;var ia=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new qe(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},sa=class extends Ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Di,this.environmentIntensity=1,this.environmentRotation=new Di,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Wn=new O,Ai=new O,zc=new O,Ri=new O,Xs=new O,qs=new O,sd=new O,kc=new O,Hc=new O,Vc=new O,Gc=new Lt,Wc=new Lt,Xc=new Lt,Ii=class n{constructor(e=new O,t=new O,i=new O){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Wn.subVectors(e,t),s.cross(Wn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Wn.subVectors(s,t),Ai.subVectors(i,t),zc.subVectors(e,t);let a=Wn.dot(Wn),o=Wn.dot(Ai),l=Wn.dot(zc),c=Ai.dot(Ai),h=Ai.dot(zc),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-f-g,g,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Ri)===null?!1:Ri.x>=0&&Ri.y>=0&&Ri.x+Ri.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,Ri)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ri.x),l.addScaledVector(a,Ri.y),l.addScaledVector(o,Ri.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return Gc.setScalar(0),Wc.setScalar(0),Xc.setScalar(0),Gc.fromBufferAttribute(e,t),Wc.fromBufferAttribute(e,i),Xc.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Gc,r.x),a.addScaledVector(Wc,r.y),a.addScaledVector(Xc,r.z),a}static isFrontFacing(e,t,i,s){return Wn.subVectors(i,t),Ai.subVectors(e,t),Wn.cross(Ai).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wn.subVectors(this.c,this.b),Ai.subVectors(this.a,this.b),Wn.cross(Ai).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,a,o;Xs.subVectors(s,i),qs.subVectors(r,i),kc.subVectors(e,i);let l=Xs.dot(kc),c=qs.dot(kc);if(l<=0&&c<=0)return t.copy(i);Hc.subVectors(e,s);let h=Xs.dot(Hc),d=qs.dot(Hc);if(h>=0&&d<=h)return t.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(Xs,a);Vc.subVectors(e,r);let f=Xs.dot(Vc),g=qs.dot(Vc);if(g>=0&&f<=g)return t.copy(r);let _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(qs,o);let m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return sd.subVectors(r,s),o=(d-h)/(d-h+(f-g)),t.copy(s).addScaledVector(sd,o);let p=1/(m+_+u);return a=_*p,o=u*p,t.copy(i).addScaledVector(Xs,a).addScaledVector(qs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},hi=class{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Xn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Xn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Xn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Xn):Xn.fromBufferAttribute(r,a),Xn.applyMatrix4(e.matrixWorld),this.expandByPoint(Xn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ya.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ya.copy(i.boundingBox)),Ya.applyMatrix4(e.matrixWorld),this.union(Ya)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Xn),Xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Hr),$a.subVectors(this.max,Hr),Ys.subVectors(e.a,Hr),$s.subVectors(e.b,Hr),Zs.subVectors(e.c,Hr),Ji.subVectors($s,Ys),Ki.subVectors(Zs,$s),xs.subVectors(Ys,Zs);let t=[0,-Ji.z,Ji.y,0,-Ki.z,Ki.y,0,-xs.z,xs.y,Ji.z,0,-Ji.x,Ki.z,0,-Ki.x,xs.z,0,-xs.x,-Ji.y,Ji.x,0,-Ki.y,Ki.x,0,-xs.y,xs.x,0];return!qc(t,Ys,$s,Zs,$a)||(t=[1,0,0,0,1,0,0,0,1],!qc(t,Ys,$s,Zs,$a))?!1:(Za.crossVectors(Ji,Ki),t=[Za.x,Za.y,Za.z],qc(t,Ys,$s,Zs,$a))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ci),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ci=[new O,new O,new O,new O,new O,new O,new O,new O],Xn=new O,Ya=new hi,Ys=new O,$s=new O,Zs=new O,Ji=new O,Ki=new O,xs=new O,Hr=new O,$a=new O,Za=new O,_s=new O;function qc(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){_s.fromArray(n,r);let o=s.x*Math.abs(_s.x)+s.y*Math.abs(_s.y)+s.z*Math.abs(_s.z),l=e.dot(_s),c=t.dot(_s),h=i.dot(_s);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var kt=new O,Ja=new Ge,Tm=0,Mn=class extends li{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Tm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ch,this.updateRanges=[],this.gpuType=Fn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ja.fromBufferAttribute(this,t),Ja.applyMatrix3(e),this.setXY(t,Ja.x,Ja.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix3(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix4(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.applyNormalMatrix(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.transformDirection(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ri(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=gt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ri(t,this.array)),t}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ri(t,this.array)),t}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ri(t,this.array)),t}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ri(t,this.array)),t}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),i=gt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),i=gt(i,this.array),s=gt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),i=gt(i,this.array),s=gt(s,this.array),r=gt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var ra=class extends Mn{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var aa=class extends Mn{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var ft=class extends Mn{constructor(e,t,i){super(new Float32Array(e),t,i)}},wm=new hi,Vr=new O,Yc=new O,Ni=class{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):wm.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Vr.subVectors(e,this.center);let t=Vr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Vr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Yc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Vr.copy(e.center).add(Yc)),this.expandByPoint(Vr.copy(e.center).sub(Yc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Am=0,Nn=new xt,$c=new Ht,Js=new O,An=new hi,Gr=new hi,jt=new O,Vt=class n extends li{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Am++}),this.uuid=Qi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(dm(e)?aa:ra)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new ke().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Nn.makeRotationFromQuaternion(e),this.applyMatrix4(Nn),this}rotateX(e){return Nn.makeRotationX(e),this.applyMatrix4(Nn),this}rotateY(e){return Nn.makeRotationY(e),this.applyMatrix4(Nn),this}rotateZ(e){return Nn.makeRotationZ(e),this.applyMatrix4(Nn),this}translate(e,t,i){return Nn.makeTranslation(e,t,i),this.applyMatrix4(Nn),this}scale(e,t,i){return Nn.makeScale(e,t,i),this.applyMatrix4(Nn),this}lookAt(e){return $c.lookAt(e),$c.updateMatrix(),this.applyMatrix4($c.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Js).negate(),this.translate(Js.x,Js.y,Js.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ft(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Oe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Be("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];An.setFromBufferAttribute(r),this.morphTargetsRelative?(jt.addVectors(this.boundingBox.min,An.min),this.boundingBox.expandByPoint(jt),jt.addVectors(this.boundingBox.max,An.max),this.boundingBox.expandByPoint(jt)):(this.boundingBox.expandByPoint(An.min),this.boundingBox.expandByPoint(An.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Be('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ni);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Be("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){let i=this.boundingSphere.center;if(An.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Gr.setFromBufferAttribute(o),this.morphTargetsRelative?(jt.addVectors(An.min,Gr.min),An.expandByPoint(jt),jt.addVectors(An.max,Gr.max),An.expandByPoint(jt)):(An.expandByPoint(Gr.min),An.expandByPoint(Gr.max))}An.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)jt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(jt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)jt.fromBufferAttribute(o,c),l&&(Js.fromBufferAttribute(e,c),jt.add(Js)),s=Math.max(s,i.distanceToSquared(jt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Be('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Be("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Mn(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let y=0;y<i.count;y++)o[y]=new O,l[y]=new O;let c=new O,h=new O,d=new O,u=new Ge,f=new Ge,g=new Ge,_=new O,m=new O;function p(y,w,P){c.fromBufferAttribute(i,y),h.fromBufferAttribute(i,w),d.fromBufferAttribute(i,P),u.fromBufferAttribute(r,y),f.fromBufferAttribute(r,w),g.fromBufferAttribute(r,P),h.sub(c),d.sub(c),f.sub(u),g.sub(u);let F=1/(f.x*g.y-g.x*f.y);isFinite(F)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(F),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(F),o[y].add(_),o[w].add(_),o[P].add(_),l[y].add(m),l[w].add(m),l[P].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let y=0,w=b.length;y<w;++y){let P=b[y],F=P.start,B=P.count;for(let k=F,D=F+B;k<D;k+=3)p(e.getX(k+0),e.getX(k+1),e.getX(k+2))}let R=new O,M=new O,S=new O,T=new O;function C(y){S.fromBufferAttribute(s,y),T.copy(S);let w=o[y];R.copy(w),R.sub(S.multiplyScalar(S.dot(w))).normalize(),M.crossVectors(T,w);let F=M.dot(l[y])<0?-1:1;a.setXYZW(y,R.x,R.y,R.z,F)}for(let y=0,w=b.length;y<w;++y){let P=b[y],F=P.start,B=P.count;for(let k=F,D=F+B;k<D;k+=3)C(e.getX(k+0)),C(e.getX(k+1)),C(e.getX(k+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Mn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);let s=new O,r=new O,a=new O,o=new O,l=new O,c=new O,h=new O,d=new O;if(e)for(let u=0,f=e.count;u<f;u+=3){let g=e.getX(u+0),_=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)jt.fromBufferAttribute(e,t),jt.normalize(),e.setXYZ(t,jt.x,jt.y,jt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),f=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*h;for(let p=0;p<h;p++)u[g++]=c[f++]}return new Mn(u,h,d)}if(this.index===null)return Oe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,i);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=e(u,i);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Io=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ch,this.updateRanges=[],this.version=0,this.uuid=Qi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},fn=new O,oa=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)fn.fromBufferAttribute(this,t),fn.applyMatrix4(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)fn.fromBufferAttribute(this,t),fn.applyNormalMatrix(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)fn.fromBufferAttribute(this,t),fn.transformDirection(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=ri(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=gt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ri(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ri(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ri(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ri(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),i=gt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),i=gt(i,this.array),s=gt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),i=gt(i,this.array),s=gt(s,this.array),r=gt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){ea("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Mn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){ea("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Zc=new O,Rm=new O,Cm=new ke,qn=class{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Zc.subVectors(i,t).cross(Rm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(Zc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Cm.getNormalMatrix(e),s=this.coplanarPoint(Zc).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Pm=0,ui=class extends li{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Pm++}),this.uuid=Qi(),this.name="",this.type="Material",this.blending=_r,this.side=ss,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=dh,this.blendDst=fh,this.blendEquation=Es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=ar,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xo,this.stencilZFail=xo,this.stencilZPass=xo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Oe(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Oe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new qe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new qn().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Ge().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ge().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},$n=class extends ui{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new qe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ks,Wr=new O,js=new O,Qs=new O,er=new Ge,Xr=new Ge,rf=new xt,Ka=new O,qr=new O,ja=new O,rd=new Ge,Jc=new Ge,ad=new Ge,di=class extends Ht{constructor(e=new $n){if(super(),this.isSprite=!0,this.type="Sprite",Ks===void 0){Ks=new Vt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Io(t,5);Ks.setIndex([0,1,2,0,2,3]),Ks.setAttribute("position",new oa(i,3,0,!1)),Ks.setAttribute("uv",new oa(i,2,3,!1))}this.geometry=Ks,this.material=e,this.center=new Ge(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Be('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),js.setFromMatrixScale(this.matrixWorld),rf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Qs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&js.multiplyScalar(-Qs.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let a=this.center;Qa(Ka.set(-.5,-.5,0),Qs,a,js,s,r),Qa(qr.set(.5,-.5,0),Qs,a,js,s,r),Qa(ja.set(.5,.5,0),Qs,a,js,s,r),rd.set(0,0),Jc.set(1,0),ad.set(1,1);let o=e.ray.intersectTriangle(Ka,qr,ja,!1,Wr);if(o===null&&(Qa(qr.set(-.5,.5,0),Qs,a,js,s,r),Jc.set(0,1),o=e.ray.intersectTriangle(Ka,ja,qr,!1,Wr),o===null))return;let l=e.ray.origin.distanceTo(Wr);l<e.near||l>e.far||t.push({distance:l,point:Wr.clone(),uv:Ii.getInterpolation(Wr,Ka,qr,ja,rd,Jc,ad,new Ge),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Qa(n,e,t,i,s,r){er.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(Xr.x=r*er.x-s*er.y,Xr.y=s*er.x+r*er.y):Xr.copy(er),n.copy(e),n.x+=Xr.x,n.y+=Xr.y,n.applyMatrix4(rf)}var Pi=new O,Kc=new O,eo=new O,to=new O,la=class{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Pi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Pi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Pi.copy(this.origin).addScaledVector(this.direction,t),Pi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Kc.copy(e).add(t).multiplyScalar(.5),eo.copy(t).sub(e).normalize(),to.copy(this.origin).sub(Kc);let r=e.distanceTo(t)*.5,a=-this.direction.dot(eo),o=to.dot(this.direction),l=-to.dot(eo),c=to.lengthSq(),h=Math.abs(1-a*a),d,u,f,g;if(h>0)if(d=a*l-o,u=a*o-l,g=r*h,d>=0)if(u>=-g)if(u<=g){let _=1/h;d*=_,u*=_,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Kc).addScaledVector(eo,u),f}intersectSphere(e,t){if(e.radius<0)return null;Pi.subVectors(e.center,this.origin);let i=Pi.dot(this.direction),s=Pi.dot(Pi)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Pi)!==null}intersectTriangle(e,t,i,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=e.x-a.x,u=e.y-a.y,f=e.z-a.z,g=t.x-a.x,_=t.y-a.y,m=t.z-a.z,p=i.x-a.x,b=i.y-a.y,R=i.z-a.z,M=Math.abs(l),S=Math.abs(c),T=Math.abs(h),C,y,w,P,F,B,k,D,W,Z,G,ne;if(M>=S&&M>=T?(w=l,B=d,W=g,ne=p,l>=0?(C=c,y=h,P=u,F=f,k=_,D=m,Z=b,G=R):(C=h,y=c,P=f,F=u,k=m,D=_,Z=R,G=b)):S>=T?(w=c,B=u,W=_,ne=b,c>=0?(C=h,y=l,P=f,F=d,k=m,D=g,Z=R,G=p):(C=l,y=h,P=d,F=f,k=g,D=m,Z=p,G=R)):(w=h,B=f,W=m,ne=R,h>=0?(C=l,y=c,P=d,F=u,k=g,D=_,Z=p,G=b):(C=c,y=l,P=u,F=d,k=_,D=g,Z=b,G=p)),w===0)return null;let Y=C/w,Q=y/w,se=1/w,Ne=P-Y*B,Ce=F-Q*B,ct=k-Y*W,st=D-Q*W,lt=Z-Y*ne,J=G-Q*ne,te=lt*st-J*ct,Se=Ne*J-Ce*lt,Ve=ct*Ce-st*Ne;if(s){if(te<0||Se<0||Ve<0)return null}else if((te<0||Se<0||Ve<0)&&(te>0||Se>0||Ve>0))return null;let ve=te+Se+Ve;if(ve===0)return null;let Ze=se*(te*B+Se*W+Ve*ne);return(ve>0?Ze<0:Ze>0)?null:this.at(Ze/ve,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ot=class extends ui{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Di,this.combine=ph,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},od=new xt,ys=new la,no=new Ni,ld=new O,io=new O,so=new O,ro=new O,jc=new O,ao=new O,cd=new O,oo=new O,Le=class extends Ht{constructor(e=new Vt,t=new Ot){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){ao.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&(jc.fromBufferAttribute(d,e),a?ao.addScaledVector(jc,h):ao.addScaledVector(jc.sub(t),h))}t.add(ao)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),no.copy(i.boundingSphere),no.applyMatrix4(r),ys.copy(e.ray).recast(e.near),!(no.containsPoint(ys.origin)===!1&&(ys.intersectSphere(no,ld)===null||ys.origin.distanceToSquared(ld)>(e.far-e.near)**2))&&(od.copy(r).invert(),ys.copy(e.ray).applyMatrix4(od),!(i.boundingBox!==null&&ys.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ys)))}_computeIntersections(e,t,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){let m=u[g],p=a[m.materialIndex],b=Math.max(m.start,f.start),R=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let M=b,S=R;M<S;M+=3){let T=o.getX(M),C=o.getX(M+1),y=o.getX(M+2);s=lo(this,p,e,i,c,h,d,T,C,y),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){let b=o.getX(m),R=o.getX(m+1),M=o.getX(m+2);s=lo(this,a,e,i,c,h,d,b,R,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){let m=u[g],p=a[m.materialIndex],b=Math.max(m.start,f.start),R=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let M=b,S=R;M<S;M+=3){let T=M,C=M+1,y=M+2;s=lo(this,p,e,i,c,h,d,T,C,y),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){let b=m,R=m+1,M=m+2;s=lo(this,a,e,i,c,h,d,b,R,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Im(n,e,t,i,s,r,a,o){let l;if(e.side===mn?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===ss,o),l===null)return null;oo.copy(o),oo.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(oo);return c<t.near||c>t.far?null:{distance:c,point:oo.clone(),object:n}}function lo(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,io),n.getVertexPosition(l,so),n.getVertexPosition(c,ro);let h=Im(n,e,t,i,io,so,ro,cd);if(h){let d=new O;Ii.getBarycoord(cd,io,so,ro,d),s&&(h.uv=Ii.getInterpolatedAttribute(s,o,l,c,d,new Ge)),r&&(h.uv1=Ii.getInterpolatedAttribute(r,o,l,c,d,new Ge)),a&&(h.normal=Ii.getInterpolatedAttribute(a,o,l,c,d,new O),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new O,materialIndex:0};Ii.getNormal(io,so,ro,u.normal),h.face=u,h.barycoord=d}return h}var ca=class extends pn{constructor(e=null,t=1,i=1,s,r,a,o,l,c=en,h=en,d,u){super(null,a,o,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ha=class extends Mn{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},tr=new xt,hd=new xt,co=[],ud=new hi,Lm=new xt,Yr=new Le,$r=new Ni,fi=class extends Le{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ha(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Lm)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new hi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,tr),ud.copy(e.boundingBox).applyMatrix4(tr),this.boundingBox.union(ud)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ni),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,tr),$r.copy(e.boundingSphere).applyMatrix4(tr),this.boundingSphere.union($r)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=e*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(Yr.geometry=this.geometry,Yr.material=this.material,Yr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),$r.copy(this.boundingSphere),$r.applyMatrix4(i),e.ray.intersectsSphere($r)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,tr),hd.multiplyMatrices(i,tr),Yr.matrixWorld=hd,Yr.raycast(e,co);for(let a=0,o=co.length;a<o;a++){let l=co[a];l.instanceId=r,l.object=this,t.push(l)}co.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ha(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new ca(new Float32Array(s*this.count),s,this.count,il,Fn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<i.length;c++)a+=i[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},vs=new Ni,Dm=new Ge(.5,.5),ho=new O,ur=class{constructor(e=new qn,t=new qn,i=new qn,s=new qn,r=new qn,a=new qn){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Yn,i=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],g=r[8],_=r[9],m=r[10],p=r[11],b=r[12],R=r[13],M=r[14],S=r[15];if(s[0].setComponents(c-a,f-h,p-g,S-b).normalize(),s[1].setComponents(c+a,f+h,p+g,S+b).normalize(),s[2].setComponents(c+o,f+d,p+_,S+R).normalize(),s[3].setComponents(c-o,f-d,p-_,S-R).normalize(),i)s[4].setComponents(l,u,m,M).normalize(),s[5].setComponents(c-l,f-u,p-m,S-M).normalize();else if(s[4].setComponents(c-l,f-u,p-m,S-M).normalize(),t===Yn)s[5].setComponents(c+l,f+u,p+m,S+M).normalize();else if(t===or)s[5].setComponents(l,u,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),vs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),vs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(vs)}intersectsSprite(e){vs.center.set(0,0,0);let t=Dm.distanceTo(e.center);return vs.radius=.7071067811865476+t,vs.applyMatrix4(e.matrixWorld),this.intersectsSphere(vs)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(ho.x=s.normal.x>0?e.max.x:e.min.x,ho.y=s.normal.y>0?e.max.y:e.min.y,ho.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ho)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var dr=class extends ui{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Lo=new O,Do=new O,dd=new xt,Zr=new la,uo=new Ni,Qc=new O,fd=new O,ua=class extends Ht{constructor(e=new Vt,t=new dr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Lo.fromBufferAttribute(t,s-1),Do.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Lo.distanceTo(Do);e.setAttribute("lineDistance",new ft(i,1))}else Oe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),uo.copy(i.boundingSphere),uo.applyMatrix4(s),uo.radius+=r,e.ray.intersectsSphere(uo)===!1)return;dd.copy(s).invert(),Zr.copy(e.ray).applyMatrix4(dd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){let f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=c){let p=h.getX(_),b=h.getX(_+1),R=fo(this,e,Zr,l,p,b,_);R&&t.push(R)}if(this.isLineLoop){let _=h.getX(g-1),m=h.getX(f),p=fo(this,e,Zr,l,_,m,g-1);p&&t.push(p)}}else{let f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=c){let p=fo(this,e,Zr,l,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){let _=fo(this,e,Zr,l,g-1,f,g-1);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function fo(n,e,t,i,s,r,a){let o=n.geometry.attributes.position;if(Lo.fromBufferAttribute(o,s),Do.fromBufferAttribute(o,r),t.distanceSqToSegment(Lo,Do,Qc,fd)>i)return;Qc.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(Qc);if(!(c<e.near||c>e.far))return{distance:c,point:fd.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}var da=class extends pn{constructor(e=[],t=rs,i,s,r,a,o,l,c,h){super(e,t,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Un=class extends pn{constructor(e,t,i,s,r,a,o,l,c){super(e,t,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var es=class extends pn{constructor(e,t,i=Jn,s,r,a,o=en,l=en,c,h=oi,d=1){if(h!==oi&&h!==os)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:d};super(u,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new cr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},No=class extends es{constructor(e,t=Jn,i=rs,s,r,a=en,o=en,l,c=oi){let h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,i,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},fa=class extends pn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ot=class n extends Vt{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,f=0;g("z","y","x",-1,-1,i,t,e,a,r,0),g("z","y","x",1,-1,i,t,-e,a,r,1),g("x","z","y",1,1,e,i,t,s,a,2),g("x","z","y",1,-1,e,i,-t,s,a,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ft(c,3)),this.setAttribute("normal",new ft(h,3)),this.setAttribute("uv",new ft(d,2));function g(_,m,p,b,R,M,S,T,C,y,w){let P=M/C,F=S/y,B=M/2,k=S/2,D=T/2,W=C+1,Z=y+1,G=0,ne=0,Y=new O;for(let Q=0;Q<Z;Q++){let se=Q*F-k;for(let Ne=0;Ne<W;Ne++){let Ce=Ne*P-B;Y[_]=Ce*b,Y[m]=se*R,Y[p]=D,c.push(Y.x,Y.y,Y.z),Y[_]=0,Y[m]=0,Y[p]=T>0?1:-1,h.push(Y.x,Y.y,Y.z),d.push(Ne/C),d.push(1-Q/y),G+=1}}for(let Q=0;Q<y;Q++)for(let se=0;se<C;se++){let Ne=u+se+W*Q,Ce=u+se+W*(Q+1),ct=u+(se+1)+W*(Q+1),st=u+(se+1)+W*Q;l.push(Ne,Ce,st),l.push(Ce,ct,st),ne+=6}o.addGroup(f,ne,w),f+=ne,u+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},fr=class n extends Vt{constructor(e=1,t=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:s,heightSegments:r},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],h=t/2,d=Math.PI/2*e,u=t,f=2*d+u,g=i*2+r,_=s+1,m=new O,p=new O;for(let b=0;b<=g;b++){let R=0,M=0,S=0,T=0;if(b<=i){let w=b/i,P=w*Math.PI/2;M=-h-e*Math.cos(P),S=e*Math.sin(P),T=-e*Math.cos(P),R=w*d}else if(b<=i+r){let w=(b-i)/r;M=-h+w*t,S=e,T=0,R=d+w*u}else{let w=(b-i-r)/i,P=w*Math.PI/2;M=h+e*Math.sin(P),S=e*Math.cos(P),T=e*Math.sin(P),R=d+u+w*d}let C=Math.max(0,Math.min(1,R/f)),y=0;b===0?y=.5/s:b===g&&(y=-.5/s);for(let w=0;w<=s;w++){let P=w/s,F=P*Math.PI*2,B=Math.sin(F),k=Math.cos(F);p.x=-S*k,p.y=M,p.z=S*B,o.push(p.x,p.y,p.z),m.set(-S*k,T,S*B),m.normalize(),l.push(m.x,m.y,m.z),c.push(P+y,C)}if(b>0){let w=(b-1)*_;for(let P=0;P<s;P++){let F=w+P,B=w+P+1,k=b*_+P,D=b*_+P+1;a.push(F,B,k),a.push(B,D,k)}}}this.setIndex(a),this.setAttribute("position",new ft(o,3)),this.setAttribute("normal",new ft(l,3)),this.setAttribute("uv",new ft(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},pr=class n extends Vt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new O,h=new Ge;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){let f=i+d/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/e+1)/2,h.y=(a[u+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new ft(a,3)),this.setAttribute("normal",new ft(o,3)),this.setAttribute("uv",new ft(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},pi=class n extends Vt{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],g=0,_=[],m=i/2,p=0;b(),a===!1&&(e>0&&R(!0),t>0&&R(!1)),this.setIndex(h),this.setAttribute("position",new ft(d,3)),this.setAttribute("normal",new ft(u,3)),this.setAttribute("uv",new ft(f,2));function b(){let M=new O,S=new O,T=0,C=(t-e)/i;for(let y=0;y<=r;y++){let w=[],P=y/r,F=P*(t-e)+e;for(let B=0;B<=s;B++){let k=B/s,D=k*l+o,W=Math.sin(D),Z=Math.cos(D);S.x=F*W,S.y=-P*i+m,S.z=F*Z,d.push(S.x,S.y,S.z),M.set(W,C,Z).normalize(),u.push(M.x,M.y,M.z),f.push(k,1-P),w.push(g++)}_.push(w)}for(let y=0;y<s;y++)for(let w=0;w<r;w++){let P=_[w][y],F=_[w+1][y],B=_[w+1][y+1],k=_[w][y+1];(e>0||w!==0)&&(h.push(P,F,k),T+=3),(t>0||w!==r-1)&&(h.push(F,B,k),T+=3)}c.addGroup(p,T,0),p+=T}function R(M){let S=g,T=new Ge,C=new O,y=0,w=M===!0?e:t,P=M===!0?1:-1;for(let B=1;B<=s;B++)d.push(0,m*P,0),u.push(0,P,0),f.push(.5,.5),g++;let F=g;for(let B=0;B<=s;B++){let D=B/s*l+o,W=Math.cos(D),Z=Math.sin(D);C.x=w*Z,C.y=m*P,C.z=w*W,d.push(C.x,C.y,C.z),u.push(0,P,0),T.x=W*.5+.5,T.y=Z*.5*P+.5,f.push(T.x,T.y),g++}for(let B=0;B<s;B++){let k=S+B,D=F+B;M===!0?h.push(D,D+1,k):h.push(D+1,D,k),y+=3}c.addGroup(p,y,M===!0?1:2),p+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},mr=class n extends pi{constructor(e=1,t=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var mi=class n extends Vt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,d=e/o,u=t/l,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){let b=p*u-a;for(let R=0;R<c;R++){let M=R*d-r;g.push(M,-b,0),_.push(0,0,1),m.push(R/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<o;b++){let R=b+c*p,M=b+c*(p+1),S=b+1+c*(p+1),T=b+1+c*p;f.push(R,M,T),f.push(M,S,T)}this.setIndex(f),this.setAttribute("position",new ft(g,3)),this.setAttribute("normal",new ft(_,3)),this.setAttribute("uv",new ft(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};var gi=class n extends Vt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],d=new O,u=new O,f=[],g=[],_=[],m=[];for(let p=0;p<=i;p++){let b=[],R=p/i,M=a+R*o,S=e*Math.cos(M),T=Math.sqrt(e*e-S*S),C=0;p===0&&a===0?C=.5/t:p===i&&l===Math.PI&&(C=-.5/t);for(let y=0;y<=t;y++){let w=y/t,P=s+w*r;d.x=-T*Math.cos(P),d.y=S,d.z=T*Math.sin(P),g.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),m.push(w+C,1-R),b.push(c++)}h.push(b)}for(let p=0;p<i;p++)for(let b=0;b<t;b++){let R=h[p][b+1],M=h[p][b],S=h[p+1][b],T=h[p+1][b+1];(p!==0||a>0)&&f.push(R,M,T),(p!==i-1||l<Math.PI)&&f.push(M,S,T)}this.setIndex(f),this.setAttribute("position",new ft(g,3)),this.setAttribute("normal",new ft(_,3)),this.setAttribute("uv",new ft(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var pa=class n extends Vt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},i=Math.floor(i),s=Math.floor(s);let l=[],c=[],h=[],d=[],u=new O,f=new O,g=new O;for(let _=0;_<=i;_++){let m=a+_/i*o;for(let p=0;p<=s;p++){let b=p/s*r;f.x=(e+t*Math.cos(m))*Math.cos(b),f.y=(e+t*Math.cos(m))*Math.sin(b),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),u.x=e*Math.cos(b),u.y=e*Math.sin(b),g.subVectors(f,u).normalize(),h.push(g.x,g.y,g.z),d.push(p/s),d.push(_/i)}}for(let _=1;_<=i;_++)for(let m=1;m<=s;m++){let p=(s+1)*_+m-1,b=(s+1)*(_-1)+m-1,R=(s+1)*(_-1)+m,M=(s+1)*_+m;l.push(p,b,M),l.push(b,R,M)}this.setIndex(l),this.setAttribute("position",new ft(c,3)),this.setAttribute("normal",new ft(h,3)),this.setAttribute("uv",new ft(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function ws(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(pd(s))s.isRenderTargetTexture?(Oe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(pd(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function un(n){let e={};for(let t=0;t<n.length;t++){let i=ws(n[t]);for(let s in i)e[s]=i[s]}return e}function pd(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Nm(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Ih(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}var af={clone:ws,merge:un},Um=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Fm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Rn=class extends ui{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Um,this.fragmentShader=Fm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ws(e.uniforms),this.uniformsGroups=Nm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new qe().setHex(s.value);break;case"v2":this.uniforms[i].value=new Ge().fromArray(s.value);break;case"v3":this.uniforms[i].value=new O().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Lt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new ke().fromArray(s.value);break;case"m4":this.uniforms[i].value=new xt().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Uo=class extends Rn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Xt=class extends ui{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ol,this.normalScale=new Ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Di,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Fo=class extends ui{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Wd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Oo=class extends ui{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function nr(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function eh(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var ts=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=t[++i],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}a=i,i=0;break t}break n}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Bo=class extends ts{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ih,endingEnd:ih}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case sh:r=e,o=2*t-i;break;case rh:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case sh:a=e,l=2*i-t;break;case rh:a=1,l=i+s[1]-s[0];break;default:a=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(i-t)/(s-t),_=g*g,m=_*g,p=-u*m+2*u*_-u*g,b=(1+u)*m+(-1.5-2*u)*_+(-.5+u)*g+1,R=(-1-f)*m+(1.5+f)*_+.5*g,M=f*m-f*_;for(let S=0;S!==o;++S)r[S]=p*a[h+S]+b*a[c+S]+R*a[l+S]+M*a[d+S];return r}},zo=class extends ts{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(s-t),d=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*d+a[l+u]*h;return r}},ko=class extends ts{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Ho=class extends ts{interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let g=(i-t)/(s-t),_=1-g;for(let m=0;m!==o;++m)r[m]=a[c+m]*_+a[l+m]*g;return r}let u=o*2,f=e-1;for(let g=0;g!==o;++g){let _=a[c+g],m=a[l+g],p=f*u+g*2,b=d[p],R=d[p+1],M=e*u+g*2,S=h[M],T=h[M+1],C=Bm(i,t,b,S,s);r[g]=of(C,_,R,T,m)}return r}};function of(n,e,t,i,s){let r=1-n;return r*r*r*e+3*r*r*n*t+3*r*n*n*i+n*n*n*s}function Om(n,e,t,i,s){let r=1-n;return 3*r*r*(t-e)+6*r*n*(i-t)+3*n*n*(s-i)}function Bm(n,e,t,i,s){let r=(n-e)/(s-e);for(let a=0;a<8;a++){let o=of(r,e,t,i,s)-n;if(Math.abs(o)<1e-10)break;let l=Om(r,e,t,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Cn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=nr(t,this.TimeBufferType),this.values=nr(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:nr(e.times,Array),values:nr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),eh(e.settings)&&(i.settings={inTangents:nr(e.settings.inTangents,Array),outTangents:nr(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new ko(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new zo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Bo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ho(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Jr:t=this.InterpolantFactoryMethodDiscrete;break;case wo:t=this.InterpolantFactoryMethodLinear;break;case go:t=this.InterpolantFactoryMethodSmooth;break;case nh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Oe("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Jr;case this.InterpolantFactoryMethodLinear:return wo;case this.InterpolantFactoryMethodSmooth:return go;case this.InterpolantFactoryMethodBezier:return nh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;eh(this.settings)&&(md(this.settings.inTangents,e),md(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Be("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Be("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Be("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Be("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&fm(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Be("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===go,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let d=o*i,u=d-i,f=d+i;for(let g=0;g!==i;++g){let _=t[d+g];if(_!==t[u+g]||_!==t[f+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let d=o*i,u=a*i;for(let f=0;f!==i;++f)t[u+f]=t[d+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,eh(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function md(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}Cn.prototype.ValueTypeName="";Cn.prototype.TimeBufferType=Float32Array;Cn.prototype.ValueBufferType=Float32Array;Cn.prototype.DefaultInterpolation=wo;var ns=class extends Cn{constructor(e,t,i){super(e,t,i)}};ns.prototype.ValueTypeName="bool";ns.prototype.ValueBufferType=Array;ns.prototype.DefaultInterpolation=Jr;ns.prototype.InterpolantFactoryMethodLinear=void 0;ns.prototype.InterpolantFactoryMethodSmooth=void 0;var Vo=class extends Cn{constructor(e,t,i,s){super(e,t,i,s)}};Vo.prototype.ValueTypeName="color";var Go=class extends Cn{constructor(e,t,i,s){super(e,t,i,s)}};Go.prototype.ValueTypeName="number";var Wo=class extends ts{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)ci.slerpFlat(r,0,a,c-o,a,c,l);return r}},ma=class extends Cn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new Wo(this.times,this.values,this.getValueSize(),e)}};ma.prototype.ValueTypeName="quaternion";ma.prototype.InterpolantFactoryMethodSmooth=void 0;var is=class extends Cn{constructor(e,t,i){super(e,t,i)}};is.prototype.ValueTypeName="string";is.prototype.ValueBufferType=Array;is.prototype.DefaultInterpolation=Jr;is.prototype.InterpolantFactoryMethodLinear=void 0;is.prototype.InterpolantFactoryMethodSmooth=void 0;var Xo=class extends Cn{constructor(e,t,i,s){super(e,t,i,s)}};Xo.prototype.ValueTypeName="vector";var qo=class{constructor(e,t,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},lf=new qo,Yo=class{constructor(e){this.manager=e!==void 0?e:lf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Yo.DEFAULT_MATERIAL_NAME="__DEFAULT";var ga=class extends Ht{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},xa=class extends ga{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.groundColor=new qe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},th=new xt,gd=new O,xd=new O,$o=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ge(512,512),this.mapType=Sn,this.map=null,this.mapPass=null,this.matrix=new xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ur,this._frameExtents=new Ge(1,1),this._viewportCount=1,this._viewports=[new Lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;gd.setFromMatrixPosition(e.matrixWorld),t.position.copy(gd),xd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(xd),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){th.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(th,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===or||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(th)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},po=new O,mo=new ci,si=new O,_a=class extends Ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xt,this.projectionMatrix=new xt,this.projectionMatrixInverse=new xt,this.coordinateSystem=Yn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(po,mo,si),si.x===1&&si.y===1&&si.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(po,mo,si.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(po,mo,si),si.x===1&&si.y===1&&si.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(po,mo,si.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ji=new O,_d=new Ge,yd=new Ge,hn=class extends _a{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ao*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ic*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ao*2*Math.atan(Math.tan(Ic*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ji.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ji.x,ji.y).multiplyScalar(-e/ji.z),ji.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ji.x,ji.y).multiplyScalar(-e/ji.z)}getViewSize(e,t){return this.getViewBounds(e,_d,yd),t.subVectors(yd,_d)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ic*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var gr=class extends _a{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ah=class extends $o{constructor(){super(new gr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ya=class extends ga{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.target=new Ht,this.shadow=new ah}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var ir=-90,sr=1,Zo=class extends Ht{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new hn(ir,sr,e,t);s.layers=this.layers,this.add(s);let r=new hn(ir,sr,e,t);r.layers=this.layers,this.add(r);let a=new hn(ir,sr,e,t);a.layers=this.layers,this.add(a);let o=new hn(ir,sr,e,t);o.layers=this.layers,this.add(o);let l=new hn(ir,sr,e,t);l.layers=this.layers,this.add(l);let c=new hn(ir,sr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Yn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===or)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Jo=class extends hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Lh="\\[\\]\\.:\\/",zm=new RegExp("["+Lh+"]","g"),Dh="[^"+Lh+"]",km="[^"+Lh.replace("\\.","")+"]",Hm=/((?:WC+[\/:])*)/.source.replace("WC",Dh),Vm=/(WCOD+)?/.source.replace("WCOD",km),Gm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Dh),Wm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Dh),Xm=new RegExp("^"+Hm+Vm+Gm+Wm+"$"),qm=["material","materials","bones","map"],oh=class{constructor(e,t,i){let s=i||Ct.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Ct=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(zm,"")}static parseTrackName(e){let t=Xm.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);qm.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Oe("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){Be("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Be("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Be("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Be("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Be("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Be("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){Be("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;Be("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Be("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Be("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ct.Composite=oh;Ct.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ct.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ct.prototype.GetterByBindingType=[Ct.prototype._getValue_direct,Ct.prototype._getValue_array,Ct.prototype._getValue_arrayElement,Ct.prototype._getValue_toArray];Ct.prototype.SetterByBindingTypeAndVersioning=[[Ct.prototype._setValue_direct,Ct.prototype._setValue_direct_setNeedsUpdate,Ct.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_array,Ct.prototype._setValue_array_setNeedsUpdate,Ct.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_arrayElement,Ct.prototype._setValue_arrayElement_setNeedsUpdate,Ct.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_fromArray,Ct.prototype._setValue_fromArray_setNeedsUpdate,Ct.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var _M=new Float32Array(1);var lh=class n{static{n.prototype.isMatrix2=!0}constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};function Nh(n,e,t,i){let s=Ym(i);switch(t){case Ah:return n*e;case il:return n*e/s.components*s.byteLength;case sl:return n*e/s.components*s.byteLength;case ls:return n*e*2/s.components*s.byteLength;case rl:return n*e*2/s.components*s.byteLength;case Rh:return n*e*3/s.components*s.byteLength;case On:return n*e*4/s.components*s.byteLength;case al:return n*e*4/s.components*s.byteLength;case ba:case Sa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ea:case Ta:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ll:case hl:return Math.max(n,16)*Math.max(e,8)/4;case ol:case cl:return Math.max(n,8)*Math.max(e,8)/2;case ul:case dl:case pl:case ml:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case fl:case wa:case gl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case xl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case _l:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case yl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case vl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Ml:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case bl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Sl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case El:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Tl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case wl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Al:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Rl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Cl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Pl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Il:case Ll:case Dl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Nl:case Ul:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Aa:case Fl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ym(n){switch(n){case Sn:case Sh:return{byteLength:1,components:1};case vr:case Eh:case Kn:return{byteLength:2,components:1};case tl:case nl:return{byteLength:2,components:4};case Jn:case el:case Fn:return{byteLength:4,components:1};case Th:case wh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Oe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Pf(){let n=null,e=!1,t=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Zm(n){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,d=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){let h=l.array,d=l.updateRanges;if(n.bindBuffer(c,o),d.length===0)n.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){let g=d[u],_=d[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++u,d[u]=_)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){let _=d[f];n.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Jm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Km=`#ifdef USE_ALPHAHASH
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
#endif`,jm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Qm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,e0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,t0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,n0=`#ifdef USE_AOMAP
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
#endif`,i0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,s0=`#ifdef USE_BATCHING
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
#endif`,r0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,a0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,o0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,l0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,c0=`#ifdef USE_IRIDESCENCE
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
#endif`,h0=`#ifdef USE_BUMPMAP
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
#endif`,u0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,d0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,f0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,p0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,m0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,g0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,x0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,_0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,y0=`#define PI 3.141592653589793
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
} // validated`,v0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,M0=`vec3 transformedNormal = objectNormal;
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
#endif`,b0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,S0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,E0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,T0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,w0="gl_FragColor = linearToOutputTexel( gl_FragColor );",A0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,R0=`#ifdef USE_ENVMAP
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
#endif`,C0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,P0=`#ifdef USE_ENVMAP
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
#endif`,I0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,L0=`#ifdef USE_ENVMAP
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
#endif`,D0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,N0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,U0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,F0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,O0=`#ifdef USE_GRADIENTMAP
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
}`,B0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,z0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,k0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,H0=`uniform bool receiveShadow;
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#include <lightprobes_pars_fragment>`,V0=`#ifdef USE_ENVMAP
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
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
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
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,G0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,W0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,X0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,q0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Y0=`PhysicalMaterial material;
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
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
#endif`,$0=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
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
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
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
}`,Z0=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
#endif`,J0=`#if defined( RE_IndirectDiffuse )
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
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,K0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,j0=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Q0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,eg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ng=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ig=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ag=`#if defined( USE_POINTS_UV )
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
#endif`,og=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ug=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dg=`#ifdef USE_MORPHTARGETS
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
#endif`,fg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,mg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,gg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_g=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,yg=`#ifdef USE_NORMALMAP
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
#endif`,vg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Mg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Sg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Eg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Tg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,wg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ag=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Rg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Cg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Pg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ig=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Lg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
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
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
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
#endif`,Dg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,Ng=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,Ug=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
}`,Fg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Og=`#ifdef USE_SKINNING
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
#endif`,Bg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zg=`#ifdef USE_SKINNING
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
#endif`,kg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Vg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Gg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wg=`#ifdef USE_TRANSMISSION
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
#endif`,Xg=`#ifdef USE_TRANSMISSION
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
#endif`,qg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$g=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Jg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Kg=`uniform sampler2D t2D;
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
}`,jg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ex=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nx=`#include <common>
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
}`,ix=`#if DEPTH_PACKING == 3200
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
}`,sx=`#define DISTANCE
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
}`,rx=`#define DISTANCE
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
}`,ax=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ox=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lx=`uniform float scale;
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
}`,cx=`uniform vec3 diffuse;
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
}`,hx=`#include <common>
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
}`,ux=`uniform vec3 diffuse;
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
}`,dx=`#define LAMBERT
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
}`,fx=`#define LAMBERT
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
}`,px=`#define MATCAP
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
}`,mx=`#define MATCAP
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
}`,gx=`#define NORMAL
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
}`,xx=`#define NORMAL
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
}`,_x=`#define PHONG
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
}`,yx=`#define PHONG
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
}`,vx=`#define STANDARD
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
}`,Mx=`#define STANDARD
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
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
}`,bx=`#define TOON
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
}`,Sx=`#define TOON
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
}`,Ex=`uniform float size;
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
}`,Tx=`uniform vec3 diffuse;
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
}`,wx=`#include <common>
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
}`,Ax=`uniform vec3 color;
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
}`,Rx=`uniform float rotation;
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
}`,Cx=`uniform vec3 diffuse;
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
}`,Ye={alphahash_fragment:Jm,alphahash_pars_fragment:Km,alphamap_fragment:jm,alphamap_pars_fragment:Qm,alphatest_fragment:e0,alphatest_pars_fragment:t0,aomap_fragment:n0,aomap_pars_fragment:i0,batching_pars_vertex:s0,batching_vertex:r0,begin_vertex:a0,beginnormal_vertex:o0,bsdfs:l0,iridescence_fragment:c0,bumpmap_pars_fragment:h0,clipping_planes_fragment:u0,clipping_planes_pars_fragment:d0,clipping_planes_pars_vertex:f0,clipping_planes_vertex:p0,color_fragment:m0,color_pars_fragment:g0,color_pars_vertex:x0,color_vertex:_0,common:y0,cube_uv_reflection_fragment:v0,defaultnormal_vertex:M0,displacementmap_pars_vertex:b0,displacementmap_vertex:S0,emissivemap_fragment:E0,emissivemap_pars_fragment:T0,colorspace_fragment:w0,colorspace_pars_fragment:A0,envmap_fragment:R0,envmap_common_pars_fragment:C0,envmap_pars_fragment:P0,envmap_pars_vertex:I0,envmap_physical_pars_fragment:V0,envmap_vertex:L0,fog_vertex:D0,fog_pars_vertex:N0,fog_fragment:U0,fog_pars_fragment:F0,gradientmap_pars_fragment:O0,lightmap_pars_fragment:B0,lights_lambert_fragment:z0,lights_lambert_pars_fragment:k0,lights_pars_begin:H0,lights_toon_fragment:G0,lights_toon_pars_fragment:W0,lights_phong_fragment:X0,lights_phong_pars_fragment:q0,lights_physical_fragment:Y0,lights_physical_pars_fragment:$0,lights_fragment_begin:Z0,lights_fragment_maps:J0,lights_fragment_end:K0,lightprobes_pars_fragment:j0,logdepthbuf_fragment:Q0,logdepthbuf_pars_fragment:eg,logdepthbuf_pars_vertex:tg,logdepthbuf_vertex:ng,map_fragment:ig,map_pars_fragment:sg,map_particle_fragment:rg,map_particle_pars_fragment:ag,metalnessmap_fragment:og,metalnessmap_pars_fragment:lg,morphinstance_vertex:cg,morphcolor_vertex:hg,morphnormal_vertex:ug,morphtarget_pars_vertex:dg,morphtarget_vertex:fg,normal_fragment_begin:pg,normal_fragment_maps:mg,normal_pars_fragment:gg,normal_pars_vertex:xg,normal_vertex:_g,normalmap_pars_fragment:yg,clearcoat_normal_fragment_begin:vg,clearcoat_normal_fragment_maps:Mg,clearcoat_pars_fragment:bg,iridescence_pars_fragment:Sg,opaque_fragment:Eg,packing:Tg,premultiplied_alpha_fragment:wg,project_vertex:Ag,dithering_fragment:Rg,dithering_pars_fragment:Cg,roughnessmap_fragment:Pg,roughnessmap_pars_fragment:Ig,shadowmap_pars_fragment:Lg,shadowmap_pars_vertex:Dg,shadowmap_vertex:Ng,shadowmask_pars_fragment:Ug,skinbase_vertex:Fg,skinning_pars_vertex:Og,skinning_vertex:Bg,skinnormal_vertex:zg,specularmap_fragment:kg,specularmap_pars_fragment:Hg,tonemapping_fragment:Vg,tonemapping_pars_fragment:Gg,transmission_fragment:Wg,transmission_pars_fragment:Xg,uv_pars_fragment:qg,uv_pars_vertex:Yg,uv_vertex:$g,worldpos_vertex:Zg,background_vert:Jg,background_frag:Kg,backgroundCube_vert:jg,backgroundCube_frag:Qg,cube_vert:ex,cube_frag:tx,depth_vert:nx,depth_frag:ix,distance_vert:sx,distance_frag:rx,equirect_vert:ax,equirect_frag:ox,linedashed_vert:lx,linedashed_frag:cx,meshbasic_vert:hx,meshbasic_frag:ux,meshlambert_vert:dx,meshlambert_frag:fx,meshmatcap_vert:px,meshmatcap_frag:mx,meshnormal_vert:gx,meshnormal_frag:xx,meshphong_vert:_x,meshphong_frag:yx,meshphysical_vert:vx,meshphysical_frag:Mx,meshtoon_vert:bx,meshtoon_frag:Sx,points_vert:Ex,points_frag:Tx,shadow_vert:wx,shadow_frag:Ax,sprite_vert:Rx,sprite_frag:Cx},pe={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new Ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new O},probesMax:{value:new O},probesResolution:{value:new O}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new Ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},yi={basic:{uniforms:un([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:un([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new qe(0)},envMapIntensity:{value:1}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:un([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:un([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:un([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new qe(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:un([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:un([pe.points,pe.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:un([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:un([pe.common,pe.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:un([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:un([pe.sprite,pe.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distance:{uniforms:un([pe.common,pe.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distance_vert,fragmentShader:Ye.distance_frag},shadow:{uniforms:un([pe.lights,pe.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};yi.physical={uniforms:un([yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new Ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new Ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new Ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};var kl={r:0,b:0,g:0},Px=new xt,If=new ke;If.set(-1,0,0,0,1,0,0,0,1);function Ix(n,e,t,i,s,r){let a=new qe(0),o=s===!0?0:1,l,c,h=null,d=0,u=null;function f(b){let R=b.isScene===!0?b.background:null;if(R&&R.isTexture){let M=b.backgroundBlurriness>0;R=e.get(R,M)}return R}function g(b){let R=!1,M=f(b);M===null?m(a,o):M&&M.isColor&&(m(M,1),R=!0);let S=n.xr.getEnvironmentBlendMode();S==="additive"?t.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||R)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function _(b,R){let M=f(R);M&&(M.isCubeTexture||M.mapping===va)?(c===void 0&&(c=new Le(new ot(1,1,1),new Rn({name:"BackgroundCubeMaterial",uniforms:ws(yi.backgroundCube.uniforms),vertexShader:yi.backgroundCube.vertexShader,fragmentShader:yi.backgroundCube.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Px.makeRotationFromEuler(R.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(If),c.material.toneMapped=nt.getTransfer(M.colorSpace)!==dt,(h!==M||d!==M.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,h=M,d=M.version,u=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Le(new mi(2,2),new Rn({name:"BackgroundMaterial",uniforms:ws(yi.background.uniforms),vertexShader:yi.background.vertexShader,fragmentShader:yi.background.fragmentShader,side:ss,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,l.material.toneMapped=nt.getTransfer(M.colorSpace)!==dt,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||d!==M.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,h=M,d=M.version,u=n.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function m(b,R){b.getRGB(kl,Ih(n)),t.buffers.color.setClear(kl.r,kl.g,kl.b,R,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,R=1){a.set(b),o=R,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,m(a,o)},render:g,addToRenderList:_,dispose:p}}function Lx(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,a=!1;function o(F,B,k,D,W){let Z=!1,G=d(F,D,k,B);r!==G&&(r=G,c(r.object)),Z=f(F,D,k,W),Z&&g(F,D,k,W),W!==null&&e.update(W,n.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,M(F,B,k,D),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return n.createVertexArray()}function c(F){return n.bindVertexArray(F)}function h(F){return n.deleteVertexArray(F)}function d(F,B,k,D){let W=D.wireframe===!0,Z=i[B.id];Z===void 0&&(Z={},i[B.id]=Z);let G=F.isInstancedMesh===!0?F.id:0,ne=Z[G];ne===void 0&&(ne={},Z[G]=ne);let Y=ne[k.id];Y===void 0&&(Y={},ne[k.id]=Y);let Q=Y[W];return Q===void 0&&(Q=u(l()),Y[W]=Q),Q}function u(F){let B=[],k=[],D=[];for(let W=0;W<t;W++)B[W]=0,k[W]=0,D[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:k,attributeDivisors:D,object:F,attributes:{},index:null}}function f(F,B,k,D){let W=r.attributes,Z=B.attributes,G=0,ne=k.getAttributes();for(let Y in ne)if(ne[Y].location>=0){let se=W[Y],Ne=Z[Y];if(Ne===void 0&&(Y==="instanceMatrix"&&F.instanceMatrix&&(Ne=F.instanceMatrix),Y==="instanceColor"&&F.instanceColor&&(Ne=F.instanceColor)),se===void 0||se.attribute!==Ne||Ne&&se.data!==Ne.data)return!0;G++}return r.attributesNum!==G||r.index!==D}function g(F,B,k,D){let W={},Z=B.attributes,G=0,ne=k.getAttributes();for(let Y in ne)if(ne[Y].location>=0){let se=Z[Y];se===void 0&&(Y==="instanceMatrix"&&F.instanceMatrix&&(se=F.instanceMatrix),Y==="instanceColor"&&F.instanceColor&&(se=F.instanceColor));let Ne={};Ne.attribute=se,se&&se.data&&(Ne.data=se.data),W[Y]=Ne,G++}r.attributes=W,r.attributesNum=G,r.index=D}function _(){let F=r.newAttributes;for(let B=0,k=F.length;B<k;B++)F[B]=0}function m(F){p(F,0)}function p(F,B){let k=r.newAttributes,D=r.enabledAttributes,W=r.attributeDivisors;k[F]=1,D[F]===0&&(n.enableVertexAttribArray(F),D[F]=1),W[F]!==B&&(n.vertexAttribDivisor(F,B),W[F]=B)}function b(){let F=r.newAttributes,B=r.enabledAttributes;for(let k=0,D=B.length;k<D;k++)B[k]!==F[k]&&(n.disableVertexAttribArray(k),B[k]=0)}function R(F,B,k,D,W,Z,G){G===!0?n.vertexAttribIPointer(F,B,k,W,Z):n.vertexAttribPointer(F,B,k,D,W,Z)}function M(F,B,k,D){_();let W=D.attributes,Z=k.getAttributes(),G=B.defaultAttributeValues;for(let ne in Z){let Y=Z[ne];if(Y.location>=0){let Q=W[ne];if(Q===void 0&&(ne==="instanceMatrix"&&F.instanceMatrix&&(Q=F.instanceMatrix),ne==="instanceColor"&&F.instanceColor&&(Q=F.instanceColor)),Q!==void 0){let se=Q.normalized,Ne=Q.itemSize,Ce=e.get(Q);if(Ce===void 0)continue;let ct=Ce.buffer,st=Ce.type,lt=Ce.bytesPerElement,J=st===n.INT||st===n.UNSIGNED_INT||Q.gpuType===el;if(Q.isInterleavedBufferAttribute){let te=Q.data,Se=te.stride,Ve=Q.offset;if(te.isInstancedInterleavedBuffer){for(let ve=0;ve<Y.locationSize;ve++)p(Y.location+ve,te.meshPerAttribute);F.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let ve=0;ve<Y.locationSize;ve++)m(Y.location+ve);n.bindBuffer(n.ARRAY_BUFFER,ct);for(let ve=0;ve<Y.locationSize;ve++)R(Y.location+ve,Ne/Y.locationSize,st,se,Se*lt,(Ve+Ne/Y.locationSize*ve)*lt,J)}else{if(Q.isInstancedBufferAttribute){for(let te=0;te<Y.locationSize;te++)p(Y.location+te,Q.meshPerAttribute);F.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let te=0;te<Y.locationSize;te++)m(Y.location+te);n.bindBuffer(n.ARRAY_BUFFER,ct);for(let te=0;te<Y.locationSize;te++)R(Y.location+te,Ne/Y.locationSize,st,se,Ne*lt,Ne/Y.locationSize*te*lt,J)}}else if(G!==void 0){let se=G[ne];if(se!==void 0)switch(se.length){case 2:n.vertexAttrib2fv(Y.location,se);break;case 3:n.vertexAttrib3fv(Y.location,se);break;case 4:n.vertexAttrib4fv(Y.location,se);break;default:n.vertexAttrib1fv(Y.location,se)}}}}b()}function S(){w();for(let F in i){let B=i[F];for(let k in B){let D=B[k];for(let W in D){let Z=D[W];for(let G in Z)h(Z[G].object),delete Z[G];delete D[W]}}delete i[F]}}function T(F){if(i[F.id]===void 0)return;let B=i[F.id];for(let k in B){let D=B[k];for(let W in D){let Z=D[W];for(let G in Z)h(Z[G].object),delete Z[G];delete D[W]}}delete i[F.id]}function C(F){for(let B in i){let k=i[B];for(let D in k){let W=k[D];if(W[F.id]===void 0)continue;let Z=W[F.id];for(let G in Z)h(Z[G].object),delete Z[G];delete W[F.id]}}}function y(F){for(let B in i){let k=i[B],D=F.isInstancedMesh===!0?F.id:0,W=k[D];if(W!==void 0){for(let Z in W){let G=W[Z];for(let ne in G)h(G[ne].object),delete G[ne];delete W[Z]}delete k[D],Object.keys(k).length===0&&delete i[B]}}}function w(){P(),a=!0,r!==s&&(r=s,c(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:w,resetDefaultState:P,dispose:S,releaseStatesOfGeometry:T,releaseStatesOfObject:y,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:m,disableUnusedAttributes:b}}function Dx(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function a(l,c,h){h!==0&&(n.drawArraysInstanced(i,l,c,h),t.update(c,i,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];t.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Nx(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==On&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){let y=C===Kn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Sn&&C!==Fn&&!y&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Oe("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&Oe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),R=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),S=n.getParameter(n.MAX_SAMPLES),T=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:R,maxFragmentUniforms:M,maxSamples:S,samples:T}}function Ux(n){let e=this,t=null,i=0,s=!1,r=!1,a=new qn,o=new ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||i!==0||s;return s=u,i=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){let g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,p=n.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let b=r?0:i,R=b*4,M=p.clippingState||null;l.value=M,M=h(g,u,R,f);for(let S=0;S!==R;++S)M[S]=t[S];p.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,u,f,g){let _=d!==null?d.length:0,m=null;if(_!==0){if(m=l.value,g!==!0||m===null){let p=f+_*4,b=u.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let R=0,M=f;R!==_;++R,M+=4)a.copy(d[R]).applyMatrix4(b,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}var Sr=4,Fx=6,Ox=20,Bx=256,Ra=new gr,cf=new qe,Uh=null,Fh=0,Oh=0,Bh=!1,zx=new O,As=new O,Vl=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:a=256,position:o=zx}=r;Uh=this._renderer.getRenderTarget(),Fh=this._renderer.getActiveCubeFace(),Oh=this._renderer.getActiveMipmapLevel(),Bh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=df(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=uf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Uh,Fh,Oh),this._renderer.xr.enabled=Bh,e.scissorTest=!1,br(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===rs||e.mapping===Ts?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Uh=this._renderer.getRenderTarget(),Fh=this._renderer.getActiveCubeFace(),Oh=this._renderer.getActiveMipmapLevel(),Bh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:rn,minFilter:rn,generateMipmaps:!1,type:Kn,format:On,colorSpace:Kr,depthBuffer:!1},s=hf(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hf(e,t,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=kx(r)),this._blurMaterial=Vx(r,e,t),this._ggxMaterial=Hx(r,e,t)}return s}_compileMaterial(e){let t=new Le(new Vt,e);this._renderer.compile(t,Ra)}_sceneToCubeUV(e,t,i,s,r){let l=new hn(90,1,t,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(cf),d.toneMapping=Zn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Le(new ot,new Ot({name:"PMREM.Background",side:mn,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,m=_.material,p=!1,b=e.background;b?b.isColor&&(m.color.copy(b),e.background=null,p=!0):(m.color.copy(cf),p=!0);for(let R=0;R<6;R++){let M=R%3;M===0?(l.up.set(0,c[R],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[R],r.y,r.z)):M===1?(l.up.set(0,0,c[R]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[R],r.z)):(l.up.set(0,c[R],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[R]));let S=this._cubeSize;br(s,M*S,R>2?S:0,S,S),d.setRenderTarget(s),p&&d.render(_,l),d.render(e,l)}d.toneMapping=f,d.autoClear=u,e.background=b}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===rs||e.mapping===Ts;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=df()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=uf());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;br(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Ra)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;let l=a.uniforms,c=i/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,f=d*u,{_lodMax:g}=this,_=this._sizeLods[i],m=3*_*(i>g-Sr?i-g+Sr:0),p=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=g-t,br(r,m,p,3*_,2*_),s.setRenderTarget(r),s.render(o,Ra),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-i,br(e,m,p,3*_,2*_),s.setRenderTarget(e),s.render(o,Ra)}_blur(e,t,i,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,i,a),this._blurPass(r,e,i,i,a)}_blurPass(e,t,i,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-i;let h=this._sizeLods[s],d=3*h*(s>this._lodMax-Sr?s-this._lodMax+Sr:0),u=4*(this._cubeSize-h);br(t,d,u,3*h,2*h),a.setRenderTarget(t),a.render(l,Ra)}};function kx(n){let e=[],t=[],i=n,s=n-Sr+1+Fx;for(let r=0;r<s;r++){let a=Math.pow(2,i);e.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,f=3,g=new Float32Array(f*u*d),_=new Float32Array(f*u*d);for(let p=0;p<d;p++){let b=p%3*2/3-1,R=p>2?0:-1,M=[b,R,0,b+2/3,R,0,b+2/3,R+1,0,b,R,0,b+2/3,R+1,0,b,R+1,0];g.set(M,f*u*p);for(let S=0;S<u;S++){let T=h[S*2]*2-1,C=h[S*2+1]*2-1;p===0?As.set(1,C,T):p===1?As.set(-T,1,-C):p===2?As.set(-T,C,1):p===3?As.set(-1,C,-T):p===4?As.set(-T,-1,C):As.set(T,C,-1),As.toArray(_,(p*u+S)*f)}}let m=new Vt;m.setAttribute("position",new Mn(g,f)),m.setAttribute("outputDirection",new Mn(_,f)),t.push(new Le(m,null)),i>Sr&&i--}return{lodMeshes:t,sizeLods:e}}function hf(n,e,t){let i=new bn(n,e,t);return i.texture.mapping=va,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function br(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Hx(n,e,t){return new Rn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Bx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Xl(),fragmentShader:`

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
		`,blending:xi,depthTest:!1,depthWrite:!1})}function Vx(n,e,t){return new Rn({name:"SphericalGaussianBlur",defines:{SAMPLES:Ox,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Xl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:xi,depthTest:!1,depthWrite:!1})}function uf(){return new Rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xl(),fragmentShader:`

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
		`,blending:xi,depthTest:!1,depthWrite:!1})}function df(){return new Rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xi,depthTest:!1,depthWrite:!1})}function Xl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Gl=class extends bn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new da(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ot(5,5,5),r=new Rn({name:"CubemapFromEquirect",uniforms:ws(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:mn,blending:xi});r.uniforms.tEquirect.value=t;let a=new Le(s,r),o=t.minFilter;return t.minFilter===as&&(t.minFilter=rn),new Zo(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}};function Gx(n){let e=new WeakMap,t=new WeakMap,i=null;function s(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===Ko||f===jo)if(e.has(u)){let g=e.get(u).texture;return o(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let _=new Gl(g.height);return _.fromEquirectangularTexture(n,u),e.set(u,_),u.addEventListener("dispose",c),o(_.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let f=u.mapping,g=f===Ko||f===jo,_=f===rs||f===Ts;if(g||_){let m=t.get(u),p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return i===null&&(i=new Vl(n)),m=g?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{let b=u.image;return g&&b&&b.height>0||_&&b&&l(b)?(i===null&&(i=new Vl(n)),m=g?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,f){return f===Ko?u.mapping=rs:f===jo&&(u.mapping=Ts),u}function l(u){let f=0,g=6;for(let _=0;_<g;_++)u[_]!==void 0&&f++;return f===g}function c(u){let f=u.target;f.removeEventListener("dispose",c);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function Wx(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&Ms("WebGLRenderer: "+i+" extension not supported."),s}}}function Xx(n,e,t,i){let s={},r=new WeakMap;function a(d){let u=d.target;u.index!==null&&e.remove(u.index);for(let g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete s[u.id];let f=r.get(u);f&&(e.remove(f),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,t.memory.geometries++),u}function l(d){let u=d.attributes;for(let f in u)e.update(u[f],n.ARRAY_BUFFER)}function c(d){let u=[],f=d.index,g=d.attributes.position,_=0;if(g===void 0)return;if(f!==null){let b=f.array;_=f.version;for(let R=0,M=b.length;R<M;R+=3){let S=b[R+0],T=b[R+1],C=b[R+2];u.push(S,T,T,C,C,S)}}else{let b=g.array;_=g.version;for(let R=0,M=b.length/3-1;R<M;R+=3){let S=R+0,T=R+1,C=R+2;u.push(S,T,T,C,C,S)}}let m=new(g.count>=65535?aa:ra)(u,1);m.version=_;let p=r.get(d);p&&e.remove(p),r.set(d,m)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function qx(n,e,t){let i;function s(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,u){n.drawElements(i,u,r,d*a),t.update(u,i,1)}function c(d,u,f){f!==0&&(n.drawElementsInstanced(i,u,r,d*a,f),t.update(u,i,f))}function h(d,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,d,0,f);let _=0;for(let m=0;m<f;m++)_+=u[m];t.update(_,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Yx(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:Be("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function $x(n,e,t){let i=new WeakMap,s=new Lt;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=i.get(o);if(u===void 0||u.count!==d){let w=function(){C.dispose(),i.delete(o),o.removeEventListener("dispose",w)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],R=0;f===!0&&(R=1),g===!0&&(R=2),_===!0&&(R=3);let M=o.attributes.position.count*R,S=1;M>e.maxTextureSize&&(S=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let T=new Float32Array(M*S*4*d),C=new ta(T,M,S,d);C.type=Fn,C.needsUpdate=!0;let y=R*4;for(let P=0;P<d;P++){let F=m[P],B=p[P],k=b[P],D=M*S*4*P;for(let W=0;W<F.count;W++){let Z=W*y;f===!0&&(s.fromBufferAttribute(F,W),T[D+Z+0]=s.x,T[D+Z+1]=s.y,T[D+Z+2]=s.z,T[D+Z+3]=0),g===!0&&(s.fromBufferAttribute(B,W),T[D+Z+4]=s.x,T[D+Z+5]=s.y,T[D+Z+6]=s.z,T[D+Z+7]=0),_===!0&&(s.fromBufferAttribute(k,W),T[D+Z+8]=s.x,T[D+Z+9]=s.y,T[D+Z+10]=s.z,T[D+Z+11]=k.itemSize===4?s.w:1)}}u={count:d,texture:C,size:new Ge(M,S)},i.set(o,u),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function Zx(n,e,t,i,s){let r=new WeakMap;function a(c){let h=s.render.frame,d=c.geometry,u=e.get(c,d);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var Jx={[mh]:"LINEAR_TONE_MAPPING",[gh]:"REINHARD_TONE_MAPPING",[xh]:"CINEON_TONE_MAPPING",[_h]:"ACES_FILMIC_TONE_MAPPING",[vh]:"AGX_TONE_MAPPING",[Mh]:"NEUTRAL_TONE_MAPPING",[yh]:"CUSTOM_TONE_MAPPING"};function Kx(n,e,t,i,s,r){let a=new bn(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new Vt;c.setAttribute("position",new ft([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new ft([0,2,0,0,2,0],2));let h=new Uo({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Le(c,h),u=new gr(-1,1,1,-1,0,1),f=null,g=null,_=!1,m,p=null,b=[],R=!1;this.setSize=function(M,S){a.setSize(M,S),o!==null&&o.setSize(M,S),l!==null&&l.setSize(M,S);for(let T=0;T<b.length;T++){let C=b[T];C.setSize&&C.setSize(M,S)}},this.setEffects=function(M){b=M,R=b.length>0&&b[0].isRenderPass===!0;let S=a.width,T=a.height;b.length>0&&o===null&&(o=new bn(S,T,{type:Kn,depthBuffer:!1,stencilBuffer:!1}),l=new bn(S,T,{type:Kn,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<b.length;C++){let y=b[C];y.setSize&&y.setSize(S,T)}},this.begin=function(M,S){if(_||M.toneMapping===Zn&&b.length===0)return!1;if(p=S,S!==null){let T=S.width,C=S.height;(a.width!==T||a.height!==C)&&this.setSize(T,C)}return R===!1&&M.setRenderTarget(a),m=M.toneMapping,M.toneMapping=Zn,!0},this.hasRenderPass=function(){return R},this.end=function(M,S){M.toneMapping=m,_=!0;let T=a,C=o;for(let y=0;y<b.length;y++){let w=b[y];w.enabled!==!1&&(w.render(M,C,T,S),w.needsSwap!==!1&&(T=C,C=C===o?l:o))}if(f!==M.outputColorSpace||g!==M.toneMapping){f=M.outputColorSpace,g=M.toneMapping,h.defines={},nt.getTransfer(f)===dt&&(h.defines.SRGB_TRANSFER="");let y=Jx[g];y&&(h.defines[y]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=T.texture,M.setRenderTarget(p),M.render(d,u),p=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Lf=new pn,Hh=new es(1,1),Df=new ta,Nf=new Po,Uf=new da,ff=[],pf=[],mf=new Float32Array(16),gf=new Float32Array(9),xf=new Float32Array(4);function Tr(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=ff[s];if(r===void 0&&(r=new Float32Array(s),ff[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function qt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Yt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ql(n,e){let t=pf[e];t===void 0&&(t=new Int32Array(e),pf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function jx(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Qx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;n.uniform2fv(this.addr,e),Yt(t,e)}}function e_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(qt(t,e))return;n.uniform3fv(this.addr,e),Yt(t,e)}}function t_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;n.uniform4fv(this.addr,e),Yt(t,e)}}function n_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(qt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Yt(t,e)}else{if(qt(t,i))return;xf.set(i),n.uniformMatrix2fv(this.addr,!1,xf),Yt(t,i)}}function i_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(qt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Yt(t,e)}else{if(qt(t,i))return;gf.set(i),n.uniformMatrix3fv(this.addr,!1,gf),Yt(t,i)}}function s_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(qt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Yt(t,e)}else{if(qt(t,i))return;mf.set(i),n.uniformMatrix4fv(this.addr,!1,mf),Yt(t,i)}}function r_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function a_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;n.uniform2iv(this.addr,e),Yt(t,e)}}function o_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;n.uniform3iv(this.addr,e),Yt(t,e)}}function l_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;n.uniform4iv(this.addr,e),Yt(t,e)}}function c_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function h_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;n.uniform2uiv(this.addr,e),Yt(t,e)}}function u_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;n.uniform3uiv(this.addr,e),Yt(t,e)}}function d_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;n.uniform4uiv(this.addr,e),Yt(t,e)}}function f_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Hh.compareFunction=t.isReversedDepthBuffer()?zl:Bl,r=Hh):r=Lf,t.setTexture2D(e||r,s)}function p_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Nf,s)}function m_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Uf,s)}function g_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Df,s)}function x_(n){switch(n){case 5126:return jx;case 35664:return Qx;case 35665:return e_;case 35666:return t_;case 35674:return n_;case 35675:return i_;case 35676:return s_;case 5124:case 35670:return r_;case 35667:case 35671:return a_;case 35668:case 35672:return o_;case 35669:case 35673:return l_;case 5125:return c_;case 36294:return h_;case 36295:return u_;case 36296:return d_;case 35678:case 36198:case 36298:case 36306:case 35682:return f_;case 35679:case 36299:case 36307:return p_;case 35680:case 36300:case 36308:case 36293:return m_;case 36289:case 36303:case 36311:case 36292:return g_}}function __(n,e){n.uniform1fv(this.addr,e)}function y_(n,e){let t=Tr(e,this.size,2);n.uniform2fv(this.addr,t)}function v_(n,e){let t=Tr(e,this.size,3);n.uniform3fv(this.addr,t)}function M_(n,e){let t=Tr(e,this.size,4);n.uniform4fv(this.addr,t)}function b_(n,e){let t=Tr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function S_(n,e){let t=Tr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function E_(n,e){let t=Tr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function T_(n,e){n.uniform1iv(this.addr,e)}function w_(n,e){n.uniform2iv(this.addr,e)}function A_(n,e){n.uniform3iv(this.addr,e)}function R_(n,e){n.uniform4iv(this.addr,e)}function C_(n,e){n.uniform1uiv(this.addr,e)}function P_(n,e){n.uniform2uiv(this.addr,e)}function I_(n,e){n.uniform3uiv(this.addr,e)}function L_(n,e){n.uniform4uiv(this.addr,e)}function D_(n,e,t){let i=this.cache,s=e.length,r=ql(t,s);qt(i,r)||(n.uniform1iv(this.addr,r),Yt(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=Hh:a=Lf;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function N_(n,e,t){let i=this.cache,s=e.length,r=ql(t,s);qt(i,r)||(n.uniform1iv(this.addr,r),Yt(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Nf,r[a])}function U_(n,e,t){let i=this.cache,s=e.length,r=ql(t,s);qt(i,r)||(n.uniform1iv(this.addr,r),Yt(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Uf,r[a])}function F_(n,e,t){let i=this.cache,s=e.length,r=ql(t,s);qt(i,r)||(n.uniform1iv(this.addr,r),Yt(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Df,r[a])}function O_(n){switch(n){case 5126:return __;case 35664:return y_;case 35665:return v_;case 35666:return M_;case 35674:return b_;case 35675:return S_;case 35676:return E_;case 5124:case 35670:return T_;case 35667:case 35671:return w_;case 35668:case 35672:return A_;case 35669:case 35673:return R_;case 5125:return C_;case 36294:return P_;case 36295:return I_;case 36296:return L_;case 35678:case 36198:case 36298:case 36306:case 35682:return D_;case 35679:case 36299:case 36307:return N_;case 35680:case 36300:case 36308:case 36293:return U_;case 36289:case 36303:case 36311:case 36292:return F_}}var Vh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=x_(t.type)}},Gh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=O_(t.type)}},Wh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],i)}}},zh=/(\w+)(\])?(\[|\.)?/g;function _f(n,e){n.seq.push(e),n.map[e.id]=e}function B_(n,e,t){let i=n.name,s=i.length;for(zh.lastIndex=0;;){let r=zh.exec(i),a=zh.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){_f(t,c===void 0?new Vh(o,n,e):new Gh(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new Wh(o),_f(t,d)),t=d}}}var Er=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);B_(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&i.push(a)}return i}};function yf(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var z_=37297,k_=0;function H_(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}var vf=new ke;function V_(n){nt._getMatrix(vf,nt.workingColorSpace,n);let e=`mat3( ${vf.elements.map(t=>t.toFixed(4))} )`;switch(nt.getTransfer(n)){case jr:return[e,"LinearTransferOETF"];case dt:return[e,"sRGBTransferOETF"];default:return Oe("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Mf(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+H_(n.getShaderSource(e),o)}else return r}function G_(n,e){let t=V_(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var W_={[mh]:"Linear",[gh]:"Reinhard",[xh]:"Cineon",[_h]:"ACESFilmic",[vh]:"AgX",[Mh]:"Neutral",[yh]:"Custom"};function X_(n,e){let t=W_[e];return t===void 0?(Oe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Hl=new O;function q_(){nt.getLuminanceCoefficients(Hl);let n=Hl.x.toFixed(4),e=Hl.y.toFixed(4),t=Hl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Y_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Pa).join(`
`)}function $_(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Z_(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Pa(n){return n!==""}function bf(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Sf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var J_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xh(n){return n.replace(J_,j_)}var K_=new Map;function j_(n,e){let t=Ye[e];if(t===void 0){let i=K_.get(e);if(i!==void 0)t=Ye[i],Oe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Xh(t)}var Q_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ef(n){return n.replace(Q_,ey)}function ey(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Tf(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var ty={[Ss]:"SHADOWMAP_TYPE_PCF",[xr]:"SHADOWMAP_TYPE_VSM"};function ny(n){return ty[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var iy={[rs]:"ENVMAP_TYPE_CUBE",[Ts]:"ENVMAP_TYPE_CUBE",[va]:"ENVMAP_TYPE_CUBE_UV"};function sy(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":iy[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var ry={[Ts]:"ENVMAP_MODE_REFRACTION"};function ay(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":ry[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var oy={[ph]:"ENVMAP_BLENDING_MULTIPLY",[Hd]:"ENVMAP_BLENDING_MIX",[Vd]:"ENVMAP_BLENDING_ADD"};function ly(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":oy[n.combine]||"ENVMAP_BLENDING_NONE"}function cy(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function hy(n,e,t,i){let s=n.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=ny(t),c=sy(t),h=ay(t),d=ly(t),u=cy(t),f=Y_(t),g=$_(r),_=s.createProgram(),m,p,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Pa).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Pa).join(`
`),p.length>0&&(p+=`
`)):(m=[Tf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Pa).join(`
`),p=[Tf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Zn?"#define TONE_MAPPING":"",t.toneMapping!==Zn?Ye.tonemapping_pars_fragment:"",t.toneMapping!==Zn?X_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,G_("linearToOutputTexel",t.outputColorSpace),q_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Pa).join(`
`)),a=Xh(a),a=bf(a,t),a=Sf(a,t),o=Xh(o),o=bf(o,t),o=Sf(o,t),a=Ef(a),o=Ef(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Ph?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ph?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let R=b+m+a,M=b+p+o,S=yf(s,s.VERTEX_SHADER,R),T=yf(s,s.FRAGMENT_SHADER,M);s.attachShader(_,S),s.attachShader(_,T),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function C(F){if(n.debug.checkShaderErrors){let B=s.getProgramInfoLog(_)||"",k=s.getShaderInfoLog(S)||"",D=s.getShaderInfoLog(T)||"",W=B.trim(),Z=k.trim(),G=D.trim(),ne=!0,Y=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(ne=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,S,T);else{let Q=Mf(s,S,"vertex"),se=Mf(s,T,"fragment");Be("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+W+`
`+Q+`
`+se)}else W!==""?Oe("WebGLProgram: Program Info Log:",W):(Z===""||G==="")&&(Y=!1);Y&&(F.diagnostics={runnable:ne,programLog:W,vertexShader:{log:Z,prefix:m},fragmentShader:{log:G,prefix:p}})}s.deleteShader(S),s.deleteShader(T),y=new Er(s,_),w=Z_(s,_)}let y;this.getUniforms=function(){return y===void 0&&C(this),y};let w;this.getAttributes=function(){return w===void 0&&C(this),w};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(_,z_)),P},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=k_++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=S,this.fragmentShader=T,this}var uy=0,qh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Yh(e),t.set(e,i)),i}},Yh=class{constructor(e){this.id=uy++,this.code=e,this.usedTimes=0}};function dy(n){return n===ls||n===wa||n===Aa}function fy(n,e,t,i,s,r){let a=new na,o=new qh,l=new Set,c=[],h=new Map,d=i.logarithmicDepthBuffer,u=i.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return l.add(y),y===0?"uv":`uv${y}`}function _(y,w,P,F,B,k){let D=F.fog,W=B.geometry,Z=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?F.environment:null,G=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,ne=e.get(y.envMap||Z,G),Y=ne&&ne.mapping===va?ne.image.height:null,Q=f[y.type];y.precision!==null&&(u=i.getMaxPrecision(y.precision),u!==y.precision&&Oe("WebGLProgram.getParameters:",y.precision,"not supported, using",u,"instead."));let se=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Ne=se!==void 0?se.length:0,Ce=0;W.morphAttributes.position!==void 0&&(Ce=1),W.morphAttributes.normal!==void 0&&(Ce=2),W.morphAttributes.color!==void 0&&(Ce=3);let ct,st,lt,J;if(Q){let St=yi[Q];ct=St.vertexShader,st=St.fragmentShader}else{ct=y.vertexShader,st=y.fragmentShader;let St=o.getVertexShaderStage(y),ht=o.getFragmentShaderStage(y);o.update(y,St,ht),lt=St.id,J=ht.id}let te=n.getRenderTarget(),Se=n.state.buffers.depth.getReversed(),Ve=B.isInstancedMesh===!0,ve=B.isBatchedMesh===!0,Ze=!!y.map,Wt=!!y.matcap,je=!!ne,at=!!y.aoMap,bt=!!y.lightMap,tt=!!y.bumpMap&&y.wireframe===!1,It=!!y.normalMap,Kt=!!y.displacementMap,vn=!!y.emissiveMap,Nt=!!y.metalnessMap,Bt=!!y.roughnessMap,U=y.anisotropy>0,an=y.clearcoat>0,pt=y.dispersion>0,A=y.retroreflectivity>0,x=y.iridescence>0,z=y.sheen>0,X=y.transmission>0,$=U&&!!y.anisotropyMap,oe=an&&!!y.clearcoatMap,le=an&&!!y.clearcoatNormalMap,K=an&&!!y.clearcoatRoughnessMap,ee=x&&!!y.iridescenceMap,ce=x&&!!y.iridescenceThicknessMap,Pe=z&&!!y.sheenColorMap,fe=z&&!!y.sheenRoughnessMap,he=!!y.specularMap,Ie=!!y.specularColorMap,Fe=!!y.specularIntensityMap,We=X&&!!y.transmissionMap,N=X&&!!y.thicknessMap,ue=!!y.gradientMap,j=!!y.alphaMap,de=y.alphaTest>0,xe=!!y.alphaHash,re=!!y.extensions,De=Zn;y.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(De=n.toneMapping);let Ae={shaderID:Q,shaderType:y.type,shaderName:y.name,vertexShader:ct,fragmentShader:st,defines:y.defines,customVertexShaderID:lt,customFragmentShaderID:J,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:u,batching:ve,batchingColor:ve&&B._colorsTexture!==null,instancing:Ve,instancingColor:Ve&&B.instanceColor!==null,instancingMorph:Ve&&B.morphTexture!==null,outputColorSpace:te===null?n.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:nt.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Ze,matcap:Wt,envMap:je,envMapMode:je&&ne.mapping,envMapCubeUVHeight:Y,aoMap:at,lightMap:bt,bumpMap:tt,normalMap:It,displacementMap:Kt,emissiveMap:vn,normalMapObjectSpace:It&&y.normalMapType===Xd,normalMapTangentSpace:It&&y.normalMapType===Ol,packedNormalMap:It&&y.normalMapType===Ol&&dy(y.normalMap.format),metalnessMap:Nt,roughnessMap:Bt,anisotropy:U,anisotropyMap:$,clearcoat:an,clearcoatMap:oe,clearcoatNormalMap:le,clearcoatRoughnessMap:K,dispersion:pt,retroreflection:A,iridescence:x,iridescenceMap:ee,iridescenceThicknessMap:ce,sheen:z,sheenColorMap:Pe,sheenRoughnessMap:fe,specularMap:he,specularColorMap:Ie,specularIntensityMap:Fe,transmission:X,transmissionMap:We,thicknessMap:N,gradientMap:ue,opaque:y.transparent===!1&&y.blending===_r&&y.alphaToCoverage===!1,alphaMap:j,alphaTest:de,alphaHash:xe,combine:y.combine,mapUv:Ze&&g(y.map.channel),aoMapUv:at&&g(y.aoMap.channel),lightMapUv:bt&&g(y.lightMap.channel),bumpMapUv:tt&&g(y.bumpMap.channel),normalMapUv:It&&g(y.normalMap.channel),displacementMapUv:Kt&&g(y.displacementMap.channel),emissiveMapUv:vn&&g(y.emissiveMap.channel),metalnessMapUv:Nt&&g(y.metalnessMap.channel),roughnessMapUv:Bt&&g(y.roughnessMap.channel),anisotropyMapUv:$&&g(y.anisotropyMap.channel),clearcoatMapUv:oe&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:le&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:fe&&g(y.sheenRoughnessMap.channel),specularMapUv:he&&g(y.specularMap.channel),specularColorMapUv:Ie&&g(y.specularColorMap.channel),specularIntensityMapUv:Fe&&g(y.specularIntensityMap.channel),transmissionMapUv:We&&g(y.transmissionMap.channel),thicknessMapUv:N&&g(y.thicknessMap.channel),alphaMapUv:j&&g(y.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(It||U),vertexNormals:!!W.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!W.attributes.uv&&(Ze||j),fog:!!D,useFog:y.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||W.attributes.normal===void 0&&It===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Se,skinning:B.isSkinnedMesh===!0,hasPositionAttribute:W.attributes.position!==void 0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:Ne,morphTextureStride:Ce,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:k.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:De,decodeVideoTexture:Ze&&y.map.isVideoTexture===!0&&nt.getTransfer(y.map.colorSpace)===dt,decodeVideoTextureEmissive:vn&&y.emissiveMap.isVideoTexture===!0&&nt.getTransfer(y.emissiveMap.colorSpace)===dt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Pn,flipSided:y.side===mn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:re&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(re&&y.extensions.multiDraw===!0||ve)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ae.vertexUv1s=l.has(1),Ae.vertexUv2s=l.has(2),Ae.vertexUv3s=l.has(3),l.clear(),Ae}function m(y){let w=[];if(y.shaderID?w.push(y.shaderID):(w.push(y.customVertexShaderID),w.push(y.customFragmentShaderID)),y.defines!==void 0)for(let P in y.defines)w.push(P),w.push(y.defines[P]);return y.isRawShaderMaterial===!1&&(p(w,y),b(w,y),w.push(n.outputColorSpace)),w.push(y.customProgramCacheKey),w.join()}function p(y,w){y.push(w.precision),y.push(w.outputColorSpace),y.push(w.envMapMode),y.push(w.envMapCubeUVHeight),y.push(w.mapUv),y.push(w.alphaMapUv),y.push(w.lightMapUv),y.push(w.aoMapUv),y.push(w.bumpMapUv),y.push(w.normalMapUv),y.push(w.displacementMapUv),y.push(w.emissiveMapUv),y.push(w.metalnessMapUv),y.push(w.roughnessMapUv),y.push(w.anisotropyMapUv),y.push(w.clearcoatMapUv),y.push(w.clearcoatNormalMapUv),y.push(w.clearcoatRoughnessMapUv),y.push(w.iridescenceMapUv),y.push(w.iridescenceThicknessMapUv),y.push(w.sheenColorMapUv),y.push(w.sheenRoughnessMapUv),y.push(w.specularMapUv),y.push(w.specularColorMapUv),y.push(w.specularIntensityMapUv),y.push(w.transmissionMapUv),y.push(w.thicknessMapUv),y.push(w.combine),y.push(w.fogExp2),y.push(w.sizeAttenuation),y.push(w.morphTargetsCount),y.push(w.morphAttributeCount),y.push(w.numSunLights),y.push(w.numDirLights),y.push(w.numPointLights),y.push(w.numSpotLights),y.push(w.numSpotLightMaps),y.push(w.numHemiLights),y.push(w.numRectAreaLights),y.push(w.numSunLightShadows),y.push(w.numDirLightShadows),y.push(w.numPointLightShadows),y.push(w.numSpotLightShadows),y.push(w.numSpotLightShadowsWithMaps),y.push(w.numLightProbes),y.push(w.shadowMapType),y.push(w.toneMapping),y.push(w.numClippingPlanes),y.push(w.numClipIntersection),y.push(w.depthPacking)}function b(y,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.retroreflection&&a.enable(24),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),y.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),w.hasPositionAttribute&&a.enable(23),y.push(a.mask)}function R(y){let w=f[y.type],P;if(w){let F=yi[w];P=af.clone(F.uniforms)}else P=y.uniforms;return P}function M(y,w){let P=h.get(w);return P!==void 0?++P.usedTimes:(P=new hy(n,w,y,s),c.push(P),h.set(w,P)),P}function S(y){if(--y.usedTimes===0){let w=c.indexOf(y);c[w]=c[c.length-1],c.pop(),h.delete(y.cacheKey),y.destroy()}}function T(y){o.remove(y)}function C(){o.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:R,acquireProgram:M,releaseProgram:S,releaseShaderCache:T,programs:c,dispose:C}}function py(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function my(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function wf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Af(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,g,_,m,p){let b=n[e];return b===void 0?(b={id:u.id,object:u,geometry:f,material:g,materialVariant:a(u),groupOrder:_,renderOrder:u.renderOrder,z:m,group:p},n[e]=b):(b.id=u.id,b.object=u,b.geometry=f,b.material=g,b.materialVariant=a(u),b.groupOrder=_,b.renderOrder=u.renderOrder,b.z=m,b.group=p),e++,b}function l(u,f,g,_,m,p,b){b.reversedDepth===!0&&(m=-m);let R=o(u,f,g,_,m,p);g.transmission>0?i.push(R):g.transparent===!0?s.push(R):t.push(R)}function c(u,f,g,_,m,p){let b=o(u,f,g,_,m,p);g.transmission>0?i.unshift(b):g.transparent===!0?s.unshift(b):t.unshift(b)}function h(u,f){t.length>1&&t.sort(u||my),i.length>1&&i.sort(f||wf),s.length>1&&s.sort(f||wf)}function d(){for(let u=e,f=n.length;u<f;u++){let g=n[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function gy(){let n=new WeakMap;function e(i,s){let r=n.get(i),a;return r===void 0?(a=new Af,n.set(i,[a])):s>=r.length?(a=new Af,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function xy(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new O,color:new qe};break;case"SpotLight":t={position:new O,direction:new O,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":t={color:new qe,position:new O,halfWidth:new O,halfHeight:new O};break}return n[e.id]=t,t}}}function _y(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var yy=0;function vy(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function My(n){let e=new xy,t=_y(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new O);let s=new O,r=new xt,a=new xt;function o(c){let h=0,d=0,u=0;for(let B=0;B<9;B++)i.probe[B].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,b=0,R=0,M=0,S=0,T=0,C=0,y=0,w=0,P=0;c.sort(vy);for(let B=0,k=c.length;B<k;B++){let D=c[B],W=D.color,Z=D.intensity,G=D.distance,ne=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===ls?ne=D.shadow.map.texture:ne=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=W.r*Z,d+=W.g*Z,u+=W.b*Z;else if(D.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(D.sh.coefficients[Y],Z);P++}else if(D.isSunLight){let Y=e.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let Q=D.shadow,se=t.get(D);se.shadowIntensity=Q.intensity,se.shadowBias=Q.bias,se.shadowNormalBias=Q.normalBias,se.shadowRadius=Q.radius,se.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),i.sunShadow[g]=se,i.sunShadowMap[g]=ne;let Ne=Q.getViewportCount();for(let Ce=0;Ce<Ne;Ce++)i.sunShadowMatrix[_+Ce]=Q.getMatrix(Ce),i.sunShadowCascade[_+Ce]=Q._cascadeData[Ce];_+=Ne,g++}i.sun[f]=Y,f++}else if(D.isDirectionalLight){let Y=e.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let Q=D.shadow,se=t.get(D);se.shadowIntensity=Q.intensity,se.shadowBias=Q.bias,se.shadowNormalBias=Q.normalBias,se.shadowRadius=Q.radius,se.shadowMapSize=Q.mapSize,i.directionalShadow[m]=se,i.directionalShadowMap[m]=ne,i.directionalShadowMatrix[m]=D.shadow.matrix,S++}i.directional[m]=Y,m++}else if(D.isSpotLight){let Y=e.get(D);Y.position.setFromMatrixPosition(D.matrixWorld),Y.color.copy(W).multiplyScalar(Z),Y.distance=G,Y.coneCos=Math.cos(D.angle),Y.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Y.decay=D.decay,i.spot[b]=Y;let Q=D.shadow;if(D.map&&(i.spotLightMap[y]=D.map,y++,Q.updateMatrices(D),D.castShadow&&w++),i.spotLightMatrix[b]=Q.matrix,D.castShadow){let se=t.get(D);se.shadowIntensity=Q.intensity,se.shadowBias=Q.bias,se.shadowNormalBias=Q.normalBias,se.shadowRadius=Q.radius,se.shadowMapSize=Q.mapSize,i.spotShadow[b]=se,i.spotShadowMap[b]=ne,C++}b++}else if(D.isRectAreaLight){let Y=e.get(D);Y.color.copy(W).multiplyScalar(Z),Y.halfWidth.set(D.width*.5,0,0),Y.halfHeight.set(0,D.height*.5,0),i.rectArea[R]=Y,R++}else if(D.isPointLight){let Y=e.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity),Y.distance=D.distance,Y.decay=D.decay,D.castShadow){let Q=D.shadow,se=t.get(D);se.shadowIntensity=Q.intensity,se.shadowBias=Q.bias,se.shadowNormalBias=Q.normalBias,se.shadowRadius=Q.radius,se.shadowMapSize=Q.mapSize,se.shadowCameraNear=Q.camera.near,se.shadowCameraFar=Q.camera.far,i.pointShadow[p]=se,i.pointShadowMap[p]=ne,i.pointShadowMatrix[p]=D.shadow.matrix,T++}i.point[p]=Y,p++}else if(D.isHemisphereLight){let Y=e.get(D);Y.skyColor.copy(D.color).multiplyScalar(Z),Y.groundColor.copy(D.groundColor).multiplyScalar(Z),i.hemi[M]=Y,M++}}R>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pe.LTC_FLOAT_1,i.rectAreaLTC2=pe.LTC_FLOAT_2):(i.rectAreaLTC1=pe.LTC_HALF_1,i.rectAreaLTC2=pe.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;let F=i.hash;(F.sunLength!==f||F.directionalLength!==m||F.pointLength!==p||F.spotLength!==b||F.rectAreaLength!==R||F.hemiLength!==M||F.numSunShadows!==g||F.numDirectionalShadows!==S||F.numPointShadows!==T||F.numSpotShadows!==C||F.numSpotMaps!==y||F.numLightProbes!==P)&&(i.sun.length=f,i.directional.length=m,i.spot.length=b,i.rectArea.length=R,i.point.length=p,i.hemi.length=M,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=_,i.sunShadowCascade.length=_,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.directionalShadowMatrix.length=S,i.pointShadow.length=T,i.pointShadowMap.length=T,i.pointShadowMatrix.length=T,i.spotShadow.length=C,i.spotShadowMap.length=C,i.spotLightMatrix.length=C+y-w,i.spotLightMap.length=y,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=P,F.sunLength=f,F.directionalLength=m,F.pointLength=p,F.spotLength=b,F.rectAreaLength=R,F.hemiLength=M,F.numSunShadows=g,F.numDirectionalShadows=S,F.numPointShadows=T,F.numSpotShadows=C,F.numSpotMaps=y,F.numLightProbes=P,i.version=yy++)}function l(c,h){let d=0,u=0,f=0,g=0,_=0,m=0,p=h.matrixWorldInverse;for(let b=0,R=c.length;b<R;b++){let M=c[b];if(M.isSunLight){let S=i.sun[d];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(p),d++}else if(M.isDirectionalLight){let S=i.directional[u];S.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),u++}else if(M.isSpotLight){let S=i.spot[g];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),g++}else if(M.isRectAreaLight){let S=i.rectArea[_];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(p),a.identity(),r.copy(M.matrixWorld),r.premultiply(p),a.extractRotation(r),S.halfWidth.set(M.width*.5,0,0),S.halfHeight.set(0,M.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),_++}else if(M.isPointLight){let S=i.point[f];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(p),f++}else if(M.isHemisphereLight){let S=i.hemi[m];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:i}}function Rf(n){let e=new My(n),t=[],i=[],s=[];function r(u){d.camera=u,t.length=0,i.length=0,s.length=0}function a(u){t.push(u)}function o(u){i.push(u)}function l(u){s.push(u)}function c(){e.setup(t)}function h(u){e.setupView(t,u)}let d={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function by(n){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Rf(n),e.set(s,[o])):r>=a.length?(o=new Rf(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}var Sy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ey=`uniform sampler2D shadow_pass;
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
}`,Ty=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],wy=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],Cf=new xt,Ca=new O,kh=new O;function Ay(n,e,t){let i=new ur,s=new Ge,r=new Ge,a=new Lt,o=new Fo,l=new Oo,c={},h=t.maxTextureSize,d={[ss]:mn,[mn]:ss,[Pn]:Pn},u=new Rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ge},radius:{value:4}},vertexShader:Sy,fragmentShader:Ey}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new Vt;g.setAttribute("position",new Mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Le(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ss;let p=this.type;this.render=function(T,C,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===bd&&(Oe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ss);let w=n.getRenderTarget(),P=n.getActiveCubeFace(),F=n.getActiveMipmapLevel(),B=n.state;B.setBlending(xi),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let k=p!==this.type;k&&C.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(W=>W.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,W=T.length;D<W;D++){let Z=T[D],G=Z.shadow;if(G===void 0){Oe("WebGLShadowMap:",Z,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let ne=G.getFrameExtents();s.multiply(ne),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ne.x),s.x=r.x*ne.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ne.y),s.y=r.y*ne.y,G.mapSize.y=r.y));let Y=n.state.buffers.depth.getReversed();if(G.camera._reversedDepth=Y,G.map===null||k===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===xr){if(Z.isPointLight){Oe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new bn(s.x,s.y,{format:ls,type:Kn,minFilter:rn,magFilter:rn,generateMipmaps:!1}),G.map.texture.name=Z.name+".shadowMap",G.map.depthTexture=new es(s.x,s.y,Fn),G.map.depthTexture.name=Z.name+".shadowMapDepth",G.map.depthTexture.format=oi,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=en,G.map.depthTexture.magFilter=en}else Z.isPointLight?(G.map=new Gl(s.x),G.map.depthTexture=new No(s.x,Jn)):(G.map=new bn(s.x,s.y),G.map.depthTexture=new es(s.x,s.y,Jn)),G.map.depthTexture.name=Z.name+".shadowMap",G.map.depthTexture.format=oi,this.type===Ss?(G.map.depthTexture.compareFunction=Y?zl:Bl,G.map.depthTexture.minFilter=rn,G.map.depthTexture.magFilter=rn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=en,G.map.depthTexture.magFilter=en);G.camera.updateProjectionMatrix()}G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==s.x||G.map.height!==s.y)&&G.map.setSize(s.x,s.y);let Q=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();Z.isPointLight!==!0&&G.updateMatrices(Z,y);for(let se=0;se<Q;se++){let Ne=G.getCamera(se);if(Z.isPointLight){let Ce=G.camera,ct=G.matrix,st=Z.distance||Ce.far;st!==Ce.far&&(Ce.far=st,Ce.updateProjectionMatrix()),Ca.setFromMatrixPosition(Z.matrixWorld),Ce.position.copy(Ca),kh.copy(Ce.position),kh.add(Ty[se]),Ce.up.copy(wy[se]),Ce.lookAt(kh),Ce.updateMatrixWorld(),ct.makeTranslation(-Ca.x,-Ca.y,-Ca.z),Cf.multiplyMatrices(Ce.projectionMatrix,Ce.matrixWorldInverse),G._frustum.setFromProjectionMatrix(Cf,Ce.coordinateSystem,Ce.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)n.setRenderTarget(G.map,se),n.clear();else{se===0&&(n.setRenderTarget(G.map),n.clear());let Ce=G.getViewport(se);a.set(r.x*Ce.x,r.y*Ce.y,r.x*Ce.z,r.y*Ce.w),B.viewport(a)}i=G.getFrustum(se),M(C,y,Ne,Z,this.type)}G.isPointLightShadow!==!0&&this.type===xr&&b(G,y),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(w,P,F)};function b(T,C){let y=e.update(_);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null?T.mapPass=new bn(s.x,s.y,{format:ls,type:Kn}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(C,null,y,u,_,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(C,null,y,f,_,null)}function R(T,C,y,w){let P=null,F=y.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(F!==void 0)P=F;else if(P=y.isPointLight===!0?l:o,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let B=P.uuid,k=C.uuid,D=c[B];D===void 0&&(D={},c[B]=D);let W=D[k];W===void 0&&(W=P.clone(),D[k]=W,C.addEventListener("dispose",S)),P=W}if(P.visible=C.visible,P.wireframe=C.wireframe,w===xr?P.side=C.shadowSide!==null?C.shadowSide:C.side:P.side=C.shadowSide!==null?C.shadowSide:d[C.side],P.alphaMap=C.alphaMap,P.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,P.map=C.map,P.clipShadows=C.clipShadows,P.clippingPlanes=C.clippingPlanes,P.clipIntersection=C.clipIntersection,P.displacementMap=C.displacementMap,P.displacementScale=C.displacementScale,P.displacementBias=C.displacementBias,P.wireframeLinewidth=C.wireframeLinewidth,P.linewidth=C.linewidth,y.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let B=n.properties.get(P);B.light=y}return P}function M(T,C,y,w,P){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&P===xr)&&(!T.frustumCulled||T.intersectsFrustum(i))){T.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,T.matrixWorld);let k=e.update(T),D=T.material;if(Array.isArray(D)){let W=k.groups;for(let Z=0,G=W.length;Z<G;Z++){let ne=W[Z],Y=D[ne.materialIndex];if(Y&&Y.visible){let Q=R(T,Y,w,P);T.onBeforeShadow(n,T,C,y,k,Q,ne),n.renderBufferDirect(y,null,k,Q,T,ne),T.onAfterShadow(n,T,C,y,k,Q,ne)}}}else if(D.visible){let W=R(T,D,w,P);T.onBeforeShadow(n,T,C,y,k,W,null),n.renderBufferDirect(y,null,k,W,T,null),T.onAfterShadow(n,T,C,y,k,W,null)}}let B=T.children;for(let k=0,D=B.length;k<D;k++)M(B[k],C,y,w,P)}function S(T){T.target.removeEventListener("dispose",S);for(let y in c){let w=c[y],P=T.target.uuid;P in w&&(w[P].dispose(),delete w[P])}}}function Ry(n,e){function t(){let N=!1,ue=new Lt,j=null,de=new Lt(0,0,0,0);return{setMask:function(xe){j!==xe&&!N&&(n.colorMask(xe,xe,xe,xe),j=xe)},setLocked:function(xe){N=xe},setClear:function(xe,re,De,Ae,St){St===!0&&(xe*=Ae,re*=Ae,De*=Ae),ue.set(xe,re,De,Ae),de.equals(ue)===!1&&(n.clearColor(xe,re,De,Ae),de.copy(ue))},reset:function(){N=!1,j=null,de.set(-1,0,0,0)}}}function i(){let N=!1,ue=!1,j=null,de=null,xe=null;return{setReversed:function(re){if(ue!==re){let De=e.get("EXT_clip_control");re?De.clipControlEXT(De.LOWER_LEFT_EXT,De.ZERO_TO_ONE_EXT):De.clipControlEXT(De.LOWER_LEFT_EXT,De.NEGATIVE_ONE_TO_ONE_EXT),ue=re;let Ae=xe;xe=null,this.setClear(Ae)}},getReversed:function(){return ue},setTest:function(re){re?te(n.DEPTH_TEST):Se(n.DEPTH_TEST)},setMask:function(re){j!==re&&!N&&(n.depthMask(re),j=re)},setFunc:function(re){if(ue&&(re=nf[re]),de!==re){switch(re){case _o:n.depthFunc(n.NEVER);break;case yo:n.depthFunc(n.ALWAYS);break;case vo:n.depthFunc(n.LESS);break;case ar:n.depthFunc(n.LEQUAL);break;case Mo:n.depthFunc(n.EQUAL);break;case bo:n.depthFunc(n.GEQUAL);break;case So:n.depthFunc(n.GREATER);break;case Eo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}de=re}},setLocked:function(re){N=re},setClear:function(re){xe!==re&&(xe=re,ue&&(re=1-re),n.clearDepth(re))},reset:function(){N=!1,j=null,de=null,xe=null,ue=!1}}}function s(){let N=!1,ue=null,j=null,de=null,xe=null,re=null,De=null,Ae=null,St=null;return{setTest:function(ht){N||(ht?te(n.STENCIL_TEST):Se(n.STENCIL_TEST))},setMask:function(ht){ue!==ht&&!N&&(n.stencilMask(ht),ue=ht)},setFunc:function(ht,Vn,ni){(j!==ht||de!==Vn||xe!==ni)&&(n.stencilFunc(ht,Vn,ni),j=ht,de=Vn,xe=ni)},setOp:function(ht,Vn,ni){(re!==ht||De!==Vn||Ae!==ni)&&(n.stencilOp(ht,Vn,ni),re=ht,De=Vn,Ae=ni)},setLocked:function(ht){N=ht},setClear:function(ht){St!==ht&&(n.clearStencil(ht),St=ht)},reset:function(){N=!1,ue=null,j=null,de=null,xe=null,re=null,De=null,Ae=null,St=null}}}let r=new t,a=new i,o=new s,l=new WeakMap,c=new WeakMap,h={},d={},u={},f=new WeakMap,g=[],_=null,m=!1,p=null,b=null,R=null,M=null,S=null,T=null,C=null,y=new qe(0,0,0),w=0,P=!1,F=null,B=null,k=null,D=null,W=null,Z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,ne=0,Y=n.getParameter(n.VERSION);Y.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(Y)[1]),G=ne>=1):Y.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),G=ne>=2);let Q=null,se={},Ne=n.getParameter(n.SCISSOR_BOX),Ce=n.getParameter(n.VIEWPORT),ct=new Lt().fromArray(Ne),st=new Lt().fromArray(Ce);function lt(N,ue,j,de){let xe=new Uint8Array(4),re=n.createTexture();n.bindTexture(N,re),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let De=0;De<j;De++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(ue,0,n.RGBA,1,1,de,0,n.RGBA,n.UNSIGNED_BYTE,xe):n.texImage2D(ue+De,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,xe);return re}let J={};J[n.TEXTURE_2D]=lt(n.TEXTURE_2D,n.TEXTURE_2D,1),J[n.TEXTURE_CUBE_MAP]=lt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[n.TEXTURE_2D_ARRAY]=lt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),J[n.TEXTURE_3D]=lt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),te(n.DEPTH_TEST),a.setFunc(ar),tt(!1),It(ch),te(n.CULL_FACE),at(xi);function te(N){h[N]!==!0&&(n.enable(N),h[N]=!0)}function Se(N){h[N]!==!1&&(n.disable(N),h[N]=!1)}function Ve(N,ue){return u[N]!==ue?(n.bindFramebuffer(N,ue),u[N]=ue,N===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ue),N===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ue),!0):!1}function ve(N,ue){let j=g,de=!1;if(N){j=f.get(ue),j===void 0&&(j=[],f.set(ue,j));let xe=N.textures;if(j.length!==xe.length||j[0]!==n.COLOR_ATTACHMENT0){for(let re=0,De=xe.length;re<De;re++)j[re]=n.COLOR_ATTACHMENT0+re;j.length=xe.length,de=!0}}else j[0]!==n.BACK&&(j[0]=n.BACK,de=!0);de&&n.drawBuffers(j)}function Ze(N){return _!==N?(n.useProgram(N),_=N,!0):!1}let Wt={[Es]:n.FUNC_ADD,[Ed]:n.FUNC_SUBTRACT,[Td]:n.FUNC_REVERSE_SUBTRACT};Wt[wd]=n.MIN,Wt[Ad]=n.MAX;let je={[Rd]:n.ZERO,[Cd]:n.ONE,[Pd]:n.SRC_COLOR,[dh]:n.SRC_ALPHA,[Fd]:n.SRC_ALPHA_SATURATE,[Nd]:n.DST_COLOR,[Ld]:n.DST_ALPHA,[Id]:n.ONE_MINUS_SRC_COLOR,[fh]:n.ONE_MINUS_SRC_ALPHA,[Ud]:n.ONE_MINUS_DST_COLOR,[Dd]:n.ONE_MINUS_DST_ALPHA,[Od]:n.CONSTANT_COLOR,[Bd]:n.ONE_MINUS_CONSTANT_COLOR,[zd]:n.CONSTANT_ALPHA,[kd]:n.ONE_MINUS_CONSTANT_ALPHA};function at(N,ue,j,de,xe,re,De,Ae,St,ht){if(N===xi){m===!0&&(Se(n.BLEND),m=!1);return}if(m===!1&&(te(n.BLEND),m=!0),N!==Sd){if(N!==p||ht!==P){if((b!==Es||S!==Es)&&(n.blendEquation(n.FUNC_ADD),b=Es,S=Es),ht)switch(N){case _r:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case yr:n.blendFunc(n.ONE,n.ONE);break;case hh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case uh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Be("WebGLState: Invalid blending: ",N);break}else switch(N){case _r:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case yr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case hh:Be("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case uh:Be("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Be("WebGLState: Invalid blending: ",N);break}R=null,M=null,T=null,C=null,y.set(0,0,0),w=0,p=N,P=ht}return}xe=xe||ue,re=re||j,De=De||de,(ue!==b||xe!==S)&&(n.blendEquationSeparate(Wt[ue],Wt[xe]),b=ue,S=xe),(j!==R||de!==M||re!==T||De!==C)&&(n.blendFuncSeparate(je[j],je[de],je[re],je[De]),R=j,M=de,T=re,C=De),(Ae.equals(y)===!1||St!==w)&&(n.blendColor(Ae.r,Ae.g,Ae.b,St),y.copy(Ae),w=St),p=N,P=!1}function bt(N,ue){N.side===Pn?Se(n.CULL_FACE):te(n.CULL_FACE);let j=N.side===mn;ue&&(j=!j),tt(j),N.blending===_r&&N.transparent===!1?at(xi):at(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);let de=N.stencilWrite;o.setTest(de),de&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),vn(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?te(n.SAMPLE_ALPHA_TO_COVERAGE):Se(n.SAMPLE_ALPHA_TO_COVERAGE)}function tt(N){F!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),F=N)}function It(N){N!==vd?(te(n.CULL_FACE),N!==B&&(N===ch?n.cullFace(n.BACK):N===Md?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Se(n.CULL_FACE),B=N}function Kt(N){N!==k&&(G&&n.lineWidth(N),k=N)}function vn(N,ue,j){N?(te(n.POLYGON_OFFSET_FILL),(D!==ue||W!==j)&&(D=ue,W=j,a.getReversed()&&(ue=-ue),n.polygonOffset(ue,j))):Se(n.POLYGON_OFFSET_FILL)}function Nt(N){N?te(n.SCISSOR_TEST):Se(n.SCISSOR_TEST)}function Bt(N){N===void 0&&(N=n.TEXTURE0+Z-1),Q!==N&&(n.activeTexture(N),Q=N)}function U(N,ue,j){j===void 0&&(Q===null?j=n.TEXTURE0+Z-1:j=Q);let de=se[j];de===void 0&&(de={type:void 0,texture:void 0},se[j]=de),(de.type!==N||de.texture!==ue)&&(Q!==j&&(n.activeTexture(j),Q=j),n.bindTexture(N,ue||J[N]),de.type=N,de.texture=ue)}function an(){let N=se[Q];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function pt(){try{n.compressedTexImage2D(...arguments)}catch(N){Be("WebGLState:",N)}}function A(){try{n.compressedTexImage3D(...arguments)}catch(N){Be("WebGLState:",N)}}function x(){try{n.texSubImage2D(...arguments)}catch(N){Be("WebGLState:",N)}}function z(){try{n.texSubImage3D(...arguments)}catch(N){Be("WebGLState:",N)}}function X(){try{n.compressedTexSubImage2D(...arguments)}catch(N){Be("WebGLState:",N)}}function $(){try{n.compressedTexSubImage3D(...arguments)}catch(N){Be("WebGLState:",N)}}function oe(){try{n.texStorage2D(...arguments)}catch(N){Be("WebGLState:",N)}}function le(){try{n.texStorage3D(...arguments)}catch(N){Be("WebGLState:",N)}}function K(){try{n.texImage2D(...arguments)}catch(N){Be("WebGLState:",N)}}function ee(){try{n.texImage3D(...arguments)}catch(N){Be("WebGLState:",N)}}function ce(N){return d[N]!==void 0?d[N]:n.getParameter(N)}function Pe(N,ue){d[N]!==ue&&(n.pixelStorei(N,ue),d[N]=ue)}function fe(N){ct.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),ct.copy(N))}function he(N){st.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),st.copy(N))}function Ie(N,ue){let j=c.get(ue);j===void 0&&(j=new WeakMap,c.set(ue,j));let de=j.get(N);de===void 0&&(de=n.getUniformBlockIndex(ue,N.name),j.set(N,de))}function Fe(N,ue){let de=c.get(ue).get(N);l.get(ue)!==de&&(n.uniformBlockBinding(ue,de,N.__bindingPointIndex),l.set(ue,de))}function We(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},d={},Q=null,se={},u={},f=new WeakMap,g=[],_=null,m=!1,p=null,b=null,R=null,M=null,S=null,T=null,C=null,y=new qe(0,0,0),w=0,P=!1,F=null,B=null,k=null,D=null,W=null,ct.set(0,0,n.canvas.width,n.canvas.height),st.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:te,disable:Se,bindFramebuffer:Ve,drawBuffers:ve,useProgram:Ze,setBlending:at,setMaterial:bt,setFlipSided:tt,setCullFace:It,setLineWidth:Kt,setPolygonOffset:vn,setScissorTest:Nt,activeTexture:Bt,bindTexture:U,unbindTexture:an,compressedTexImage2D:pt,compressedTexImage3D:A,texImage2D:K,texImage3D:ee,pixelStorei:Pe,getParameter:ce,updateUBOMapping:Ie,uniformBlockBinding:Fe,texStorage2D:oe,texStorage3D:le,texSubImage2D:x,texSubImage3D:z,compressedTexSubImage2D:X,compressedTexSubImage3D:$,scissor:fe,viewport:he,reset:We}}function Cy(n,e,t,i,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ge,h=new WeakMap,d=new Set,u,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,x){return g?new OffscreenCanvas(A,x):Qr("canvas")}function m(A,x,z){let X=1,$=pt(A);if(($.width>z||$.height>z)&&(X=z/Math.max($.width,$.height)),X<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let oe=Math.floor(X*$.width),le=Math.floor(X*$.height);u===void 0&&(u=_(oe,le));let K=x?_(oe,le):u;return K.width=oe,K.height=le,K.getContext("2d").drawImage(A,0,0,oe,le),Oe("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+oe+"x"+le+")."),K}else return"data"in A&&Oe("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),A;return A}function p(A){return A.generateMipmaps}function b(A){n.generateMipmap(A)}function R(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(A,x,z,X,$,oe=!1){if(A!==null){if(n[A]!==void 0)return n[A];Oe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let le;X&&(le=e.get("EXT_texture_norm16"),le||Oe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=x;if(x===n.RED&&(z===n.FLOAT&&(K=n.R32F),z===n.HALF_FLOAT&&(K=n.R16F),z===n.UNSIGNED_BYTE&&(K=n.R8),z===n.UNSIGNED_SHORT&&le&&(K=le.R16_EXT),z===n.SHORT&&le&&(K=le.R16_SNORM_EXT)),x===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&(K=n.R8UI),z===n.UNSIGNED_SHORT&&(K=n.R16UI),z===n.UNSIGNED_INT&&(K=n.R32UI),z===n.BYTE&&(K=n.R8I),z===n.SHORT&&(K=n.R16I),z===n.INT&&(K=n.R32I)),x===n.RG&&(z===n.FLOAT&&(K=n.RG32F),z===n.HALF_FLOAT&&(K=n.RG16F),z===n.UNSIGNED_BYTE&&(K=n.RG8),z===n.UNSIGNED_SHORT&&le&&(K=le.RG16_EXT),z===n.SHORT&&le&&(K=le.RG16_SNORM_EXT)),x===n.RG_INTEGER&&(z===n.UNSIGNED_BYTE&&(K=n.RG8UI),z===n.UNSIGNED_SHORT&&(K=n.RG16UI),z===n.UNSIGNED_INT&&(K=n.RG32UI),z===n.BYTE&&(K=n.RG8I),z===n.SHORT&&(K=n.RG16I),z===n.INT&&(K=n.RG32I)),x===n.RGB_INTEGER&&(z===n.UNSIGNED_BYTE&&(K=n.RGB8UI),z===n.UNSIGNED_SHORT&&(K=n.RGB16UI),z===n.UNSIGNED_INT&&(K=n.RGB32UI),z===n.BYTE&&(K=n.RGB8I),z===n.SHORT&&(K=n.RGB16I),z===n.INT&&(K=n.RGB32I)),x===n.RGBA_INTEGER&&(z===n.UNSIGNED_BYTE&&(K=n.RGBA8UI),z===n.UNSIGNED_SHORT&&(K=n.RGBA16UI),z===n.UNSIGNED_INT&&(K=n.RGBA32UI),z===n.BYTE&&(K=n.RGBA8I),z===n.SHORT&&(K=n.RGBA16I),z===n.INT&&(K=n.RGBA32I)),x===n.RGB&&(z===n.UNSIGNED_SHORT&&le&&(K=le.RGB16_EXT),z===n.SHORT&&le&&(K=le.RGB16_SNORM_EXT),z===n.UNSIGNED_INT_5_9_9_9_REV&&(K=n.RGB9_E5),z===n.UNSIGNED_INT_10F_11F_11F_REV&&(K=n.R11F_G11F_B10F)),x===n.RGBA){let ee=oe?jr:nt.getTransfer($);z===n.FLOAT&&(K=n.RGBA32F),z===n.HALF_FLOAT&&(K=n.RGBA16F),z===n.UNSIGNED_BYTE&&(K=ee===dt?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT&&le&&(K=le.RGBA16_EXT),z===n.SHORT&&le&&(K=le.RGBA16_SNORM_EXT),z===n.UNSIGNED_SHORT_4_4_4_4&&(K=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&(K=n.RGB5_A1)}return(K===n.R16F||K===n.R32F||K===n.RG16F||K===n.RG32F||K===n.RGBA16F||K===n.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function S(A,x){let z;return A?x===null||x===Jn||x===Mr?z=n.DEPTH24_STENCIL8:x===Fn?z=n.DEPTH32F_STENCIL8:x===vr&&(z=n.DEPTH24_STENCIL8,Oe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Jn||x===Mr?z=n.DEPTH_COMPONENT24:x===Fn?z=n.DEPTH_COMPONENT32F:x===vr&&(z=n.DEPTH_COMPONENT16),z}function T(A,x){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==en&&A.minFilter!==rn?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function C(A){let x=A.target;x.removeEventListener("dispose",C),w(x),x.isVideoTexture&&h.delete(x),x.isHTMLTexture&&d.delete(x)}function y(A){let x=A.target;x.removeEventListener("dispose",y),F(x)}function w(A){let x=i.get(A);if(x.__webglInit===void 0)return;let z=A.source,X=f.get(z);if(X){let $=X[x.__cacheKey];$.usedTimes--,$.usedTimes===0&&P(A),Object.keys(X).length===0&&f.delete(z)}i.remove(A)}function P(A){let x=i.get(A);n.deleteTexture(x.__webglTexture);let z=A.source,X=f.get(z);delete X[x.__cacheKey],a.memory.textures--}function F(A){let x=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(x.__webglFramebuffer[X]))for(let $=0;$<x.__webglFramebuffer[X].length;$++)n.deleteFramebuffer(x.__webglFramebuffer[X][$]);else n.deleteFramebuffer(x.__webglFramebuffer[X]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[X])}else{if(Array.isArray(x.__webglFramebuffer))for(let X=0;X<x.__webglFramebuffer.length;X++)n.deleteFramebuffer(x.__webglFramebuffer[X]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let X=0;X<x.__webglColorRenderbuffer.length;X++)x.__webglColorRenderbuffer[X]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[X]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let z=A.textures;for(let X=0,$=z.length;X<$;X++){let oe=i.get(z[X]);oe.__webglTexture&&(n.deleteTexture(oe.__webglTexture),a.memory.textures--),i.remove(z[X])}i.remove(A)}let B=0;function k(){B=0}function D(){return B}function W(A){B=A}function Z(){let A=B;return A>=s.maxTextures&&Oe("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),B+=1,A}function G(A){let x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function ne(A,x){let z=i.get(A);if(A.isVideoTexture&&U(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&z.__version!==A.version){let X=A.image;if(X===null)Oe("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)Oe("WebGLRenderer: Texture marked for update but image is incomplete");else{Se(z,A,x);return}}else A.isExternalTexture&&(z.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+x)}function Y(A,x){let z=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){Se(z,A,x);return}else A.isExternalTexture&&(z.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+x)}function Q(A,x){let z=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){Se(z,A,x);return}t.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+x)}function se(A,x){let z=i.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&z.__version!==A.version){Ve(z,A,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+x)}let Ne={[bs]:n.REPEAT,[ai]:n.CLAMP_TO_EDGE,[To]:n.MIRRORED_REPEAT},Ce={[en]:n.NEAREST,[Gd]:n.NEAREST_MIPMAP_NEAREST,[Ma]:n.NEAREST_MIPMAP_LINEAR,[rn]:n.LINEAR,[Qo]:n.LINEAR_MIPMAP_NEAREST,[as]:n.LINEAR_MIPMAP_LINEAR},ct={[Yd]:n.NEVER,[jd]:n.ALWAYS,[$d]:n.LESS,[Bl]:n.LEQUAL,[Zd]:n.EQUAL,[zl]:n.GEQUAL,[Jd]:n.GREATER,[Kd]:n.NOTEQUAL};function st(A,x){if(x.type===Fn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===rn||x.magFilter===Qo||x.magFilter===Ma||x.magFilter===as||x.minFilter===rn||x.minFilter===Qo||x.minFilter===Ma||x.minFilter===as)&&Oe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,Ne[x.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,Ne[x.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,Ne[x.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,Ce[x.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,Ce[x.minFilter]),x.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,ct[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===en||x.minFilter!==Ma&&x.minFilter!==as||x.type===Fn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){let z=e.get("EXT_texture_filter_anisotropic");n.texParameterf(A,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function lt(A,x){let z=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",C));let X=x.source,$=f.get(X);$===void 0&&($={},f.set(X,$));let oe=G(x);if(oe!==A.__cacheKey){$[oe]===void 0&&($[oe]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,z=!0),$[oe].usedTimes++;let le=$[A.__cacheKey];le!==void 0&&($[A.__cacheKey].usedTimes--,le.usedTimes===0&&P(x)),A.__cacheKey=oe,A.__webglTexture=$[oe].texture}return z}function J(A,x,z){return Math.floor(Math.floor(A/z)/x)}function te(A,x,z,X){let oe=A.updateRanges;if(oe.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,z,X,x.data);else{oe.sort((Pe,fe)=>Pe.start-fe.start);let le=0;for(let Pe=1;Pe<oe.length;Pe++){let fe=oe[le],he=oe[Pe],Ie=fe.start+fe.count,Fe=J(he.start,x.width,4),We=J(fe.start,x.width,4);he.start<=Ie+1&&Fe===We&&J(he.start+he.count-1,x.width,4)===Fe?fe.count=Math.max(fe.count,he.start+he.count-fe.start):(++le,oe[le]=he)}oe.length=le+1;let K=t.getParameter(n.UNPACK_ROW_LENGTH),ee=t.getParameter(n.UNPACK_SKIP_PIXELS),ce=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let Pe=0,fe=oe.length;Pe<fe;Pe++){let he=oe[Pe],Ie=Math.floor(he.start/4),Fe=Math.ceil(he.count/4),We=Ie%x.width,N=Math.floor(Ie/x.width),ue=Fe,j=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,We),t.pixelStorei(n.UNPACK_SKIP_ROWS,N),t.texSubImage2D(n.TEXTURE_2D,0,We,N,ue,j,z,X,x.data)}A.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,K),t.pixelStorei(n.UNPACK_SKIP_PIXELS,ee),t.pixelStorei(n.UNPACK_SKIP_ROWS,ce)}}function Se(A,x,z){let X=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(X=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(X=n.TEXTURE_3D);let $=lt(A,x),oe=x.source;t.bindTexture(X,A.__webglTexture,n.TEXTURE0+z);let le=i.get(oe);if(oe.version!==le.__version||$===!0){if(t.activeTexture(n.TEXTURE0+z),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let j=nt.getPrimaries(nt.workingColorSpace),de=x.colorSpace===Ui?null:nt.getPrimaries(x.colorSpace),xe=x.colorSpace===Ui||j===de?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe)}t.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment);let ee=m(x.image,!1,s.maxTextureSize);ee=an(x,ee);let ce=r.convert(x.format,x.colorSpace),Pe=r.convert(x.type),fe=M(x.internalFormat,ce,Pe,x.normalized,x.colorSpace,x.isVideoTexture);st(X,x);let he,Ie=x.mipmaps,Fe=x.isVideoTexture!==!0,We=le.__version===void 0||$===!0,N=oe.dataReady,ue=T(x,ee);if(x.isDepthTexture)fe=S(x.format===os,x.type),We&&(Fe?t.texStorage2D(n.TEXTURE_2D,1,fe,ee.width,ee.height):t.texImage2D(n.TEXTURE_2D,0,fe,ee.width,ee.height,0,ce,Pe,null));else if(x.isDataTexture)if(Ie.length>0){Fe&&We&&t.texStorage2D(n.TEXTURE_2D,ue,fe,Ie[0].width,Ie[0].height);for(let j=0,de=Ie.length;j<de;j++)he=Ie[j],Fe?N&&t.texSubImage2D(n.TEXTURE_2D,j,0,0,he.width,he.height,ce,Pe,he.data):t.texImage2D(n.TEXTURE_2D,j,fe,he.width,he.height,0,ce,Pe,he.data);x.generateMipmaps=!1}else Fe?(We&&t.texStorage2D(n.TEXTURE_2D,ue,fe,ee.width,ee.height),N&&te(x,ee,ce,Pe)):t.texImage2D(n.TEXTURE_2D,0,fe,ee.width,ee.height,0,ce,Pe,ee.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Fe&&We&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ue,fe,Ie[0].width,Ie[0].height,ee.depth);for(let j=0,de=Ie.length;j<de;j++)if(he=Ie[j],x.format!==On)if(ce!==null)if(Fe){if(N)if(x.layerUpdates.size>0){let xe=Nh(he.width,he.height,x.format,x.type);for(let re of x.layerUpdates){let De=he.data.subarray(re*xe/he.data.BYTES_PER_ELEMENT,(re+1)*xe/he.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,re,he.width,he.height,1,ce,De)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,he.width,he.height,ee.depth,ce,he.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,j,fe,he.width,he.height,ee.depth,0,he.data,0,0);else Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Fe?N&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,he.width,he.height,ee.depth,ce,Pe,he.data):t.texImage3D(n.TEXTURE_2D_ARRAY,j,fe,he.width,he.height,ee.depth,0,ce,Pe,he.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{Fe&&We&&t.texStorage2D(n.TEXTURE_2D,ue,fe,Ie[0].width,Ie[0].height);for(let j=0,de=Ie.length;j<de;j++)he=Ie[j],x.format!==On?ce!==null?Fe?N&&t.compressedTexSubImage2D(n.TEXTURE_2D,j,0,0,he.width,he.height,ce,he.data):t.compressedTexImage2D(n.TEXTURE_2D,j,fe,he.width,he.height,0,he.data):Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?N&&t.texSubImage2D(n.TEXTURE_2D,j,0,0,he.width,he.height,ce,Pe,he.data):t.texImage2D(n.TEXTURE_2D,j,fe,he.width,he.height,0,ce,Pe,he.data)}else if(x.isDataArrayTexture)if(Fe){if(We&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ue,fe,ee.width,ee.height,ee.depth),N)if(x.layerUpdates.size>0){let j=Nh(ee.width,ee.height,x.format,x.type);for(let de of x.layerUpdates){let xe=ee.data.subarray(de*j/ee.data.BYTES_PER_ELEMENT,(de+1)*j/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,de,ee.width,ee.height,1,ce,Pe,xe)}x.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,ce,Pe,ee.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,fe,ee.width,ee.height,ee.depth,0,ce,Pe,ee.data);else if(x.isData3DTexture)Fe?(We&&t.texStorage3D(n.TEXTURE_3D,ue,fe,ee.width,ee.height,ee.depth),N&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,ce,Pe,ee.data)):t.texImage3D(n.TEXTURE_3D,0,fe,ee.width,ee.height,ee.depth,0,ce,Pe,ee.data);else if(x.isFramebufferTexture){if(We)if(Fe)t.texStorage2D(n.TEXTURE_2D,ue,fe,ee.width,ee.height);else{let j=ee.width,de=ee.height;for(let xe=0;xe<ue;xe++)t.texImage2D(n.TEXTURE_2D,xe,fe,j,de,0,ce,Pe,null),j>>=1,de>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in n){let j=n.canvas;if(j.hasAttribute("layoutsubtree")||j.setAttribute("layoutsubtree","true"),ee.parentNode!==j){j.appendChild(ee),d.add(x),j.onpaint=de=>{let xe=de.changedElements;for(let re of d)xe.includes(re.image)&&(re.needsUpdate=!0)},j.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,ee);else{let xe=n.RGBA,re=n.RGBA,De=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,xe,re,De,ee)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Ie.length>0){if(Fe&&We){let j=pt(Ie[0]);t.texStorage2D(n.TEXTURE_2D,ue,fe,j.width,j.height)}for(let j=0,de=Ie.length;j<de;j++)he=Ie[j],Fe?N&&t.texSubImage2D(n.TEXTURE_2D,j,0,0,ce,Pe,he):t.texImage2D(n.TEXTURE_2D,j,fe,ce,Pe,he);x.generateMipmaps=!1}else if(Fe){if(We){let j=pt(ee);t.texStorage2D(n.TEXTURE_2D,ue,fe,j.width,j.height)}N&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ce,Pe,ee)}else t.texImage2D(n.TEXTURE_2D,0,fe,ce,Pe,ee);p(x)&&b(X),le.__version=oe.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function Ve(A,x,z){if(x.image.length!==6)return;let X=lt(A,x),$=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+z);let oe=i.get($);if($.version!==oe.__version||X===!0){t.activeTexture(n.TEXTURE0+z);let le=nt.getPrimaries(nt.workingColorSpace),K=x.colorSpace===Ui?null:nt.getPrimaries(x.colorSpace),ee=x.colorSpace===Ui||le===K?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let ce=x.isCompressedTexture||x.image[0].isCompressedTexture,Pe=x.image[0]&&x.image[0].isDataTexture,fe=[];for(let re=0;re<6;re++)!ce&&!Pe?fe[re]=m(x.image[re],!0,s.maxCubemapSize):fe[re]=Pe?x.image[re].image:x.image[re],fe[re]=an(x,fe[re]);let he=fe[0],Ie=r.convert(x.format,x.colorSpace),Fe=r.convert(x.type),We=M(x.internalFormat,Ie,Fe,x.normalized,x.colorSpace),N=x.isVideoTexture!==!0,ue=oe.__version===void 0||X===!0,j=$.dataReady,de=T(x,he);st(n.TEXTURE_CUBE_MAP,x);let xe;if(ce){N&&ue&&t.texStorage2D(n.TEXTURE_CUBE_MAP,de,We,he.width,he.height);for(let re=0;re<6;re++){xe=fe[re].mipmaps;for(let De=0;De<xe.length;De++){let Ae=xe[De];x.format!==On?Ie!==null?N?j&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,De,0,0,Ae.width,Ae.height,Ie,Ae.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,De,We,Ae.width,Ae.height,0,Ae.data):Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?j&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,De,0,0,Ae.width,Ae.height,Ie,Fe,Ae.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,De,We,Ae.width,Ae.height,0,Ie,Fe,Ae.data)}}}else{if(xe=x.mipmaps,N&&ue){xe.length>0&&de++;let re=pt(fe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,de,We,re.width,re.height)}for(let re=0;re<6;re++)if(Pe){N?j&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,fe[re].width,fe[re].height,Ie,Fe,fe[re].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,We,fe[re].width,fe[re].height,0,Ie,Fe,fe[re].data);for(let De=0;De<xe.length;De++){let St=xe[De].image[re].image;N?j&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,De+1,0,0,St.width,St.height,Ie,Fe,St.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,De+1,We,St.width,St.height,0,Ie,Fe,St.data)}}else{N?j&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Ie,Fe,fe[re]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,We,Ie,Fe,fe[re]);for(let De=0;De<xe.length;De++){let Ae=xe[De];N?j&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,De+1,0,0,Ie,Fe,Ae.image[re]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,De+1,We,Ie,Fe,Ae.image[re])}}}p(x)&&b(n.TEXTURE_CUBE_MAP),oe.__version=$.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function ve(A,x,z,X,$,oe){let le=r.convert(z.format,z.colorSpace),K=r.convert(z.type),ee=M(z.internalFormat,le,K,z.normalized,z.colorSpace),ce=i.get(x),Pe=i.get(z);if(Pe.__renderTarget=x,!ce.__hasExternalTextures){let fe=Math.max(1,x.width>>oe),he=Math.max(1,x.height>>oe);$===n.TEXTURE_3D||$===n.TEXTURE_2D_ARRAY?t.texImage3D($,oe,ee,fe,he,x.depth,0,le,K,null):t.texImage2D($,oe,ee,fe,he,0,le,K,null)}t.bindFramebuffer(n.FRAMEBUFFER,A),Bt(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,X,$,Pe.__webglTexture,0,Nt(x)):($===n.TEXTURE_2D||$>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,X,$,Pe.__webglTexture,oe),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ze(A,x,z){if(n.bindRenderbuffer(n.RENDERBUFFER,A),x.depthBuffer){let X=x.depthTexture,$=X&&X.isDepthTexture?X.type:null,oe=S(x.stencilBuffer,$),le=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Bt(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Nt(x),oe,x.width,x.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,Nt(x),oe,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,oe,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,le,n.RENDERBUFFER,A)}else{let X=x.textures;for(let $=0;$<X.length;$++){let oe=X[$],le=r.convert(oe.format,oe.colorSpace),K=r.convert(oe.type),ee=M(oe.internalFormat,le,K,oe.normalized,oe.colorSpace);Bt(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Nt(x),ee,x.width,x.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,Nt(x),ee,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,ee,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Wt(A,x,z){let X=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let $=i.get(x.depthTexture);if($.__renderTarget=x,(!$.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),X){if($.__webglInit===void 0&&($.__webglInit=!0,x.depthTexture.addEventListener("dispose",C)),$.__webglTexture===void 0){$.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture),st(n.TEXTURE_CUBE_MAP,x.depthTexture);let ce=r.convert(x.depthTexture.format),Pe=r.convert(x.depthTexture.type),fe;x.depthTexture.format===oi?fe=n.DEPTH_COMPONENT24:x.depthTexture.format===os&&(fe=n.DEPTH24_STENCIL8);for(let he=0;he<6;he++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,fe,x.width,x.height,0,ce,Pe,null)}}else ne(x.depthTexture,0);let oe=$.__webglTexture,le=Nt(x),K=X?n.TEXTURE_CUBE_MAP_POSITIVE_X+z:n.TEXTURE_2D,ee=x.depthTexture.format===os?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(x.depthTexture.format===oi)Bt(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ee,K,oe,0,le):n.framebufferTexture2D(n.FRAMEBUFFER,ee,K,oe,0);else if(x.depthTexture.format===os)Bt(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ee,K,oe,0,le):n.framebufferTexture2D(n.FRAMEBUFFER,ee,K,oe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function je(A){let x=i.get(A),z=A.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==A.depthTexture){let X=A.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),X){let $=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,X.removeEventListener("dispose",$)};X.addEventListener("dispose",$),x.__depthDisposeCallback=$}x.__boundDepthTexture=X}if(A.depthTexture&&!x.__autoAllocateDepthBuffer)if(z)for(let X=0;X<6;X++)Wt(x.__webglFramebuffer[X],A,X);else{let X=A.texture.mipmaps;X&&X.length>0?Wt(x.__webglFramebuffer[0],A,0):Wt(x.__webglFramebuffer,A,0)}else if(z){x.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[X]),x.__webglDepthbuffer[X]===void 0)x.__webglDepthbuffer[X]=n.createRenderbuffer(),Ze(x.__webglDepthbuffer[X],A,!1);else{let $=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=x.__webglDepthbuffer[X];n.bindRenderbuffer(n.RENDERBUFFER,oe),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,oe)}}else{let X=A.texture.mipmaps;if(X&&X.length>0?t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),Ze(x.__webglDepthbuffer,A,!1);else{let $=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,oe),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,oe)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function at(A,x,z){let X=i.get(A);x!==void 0&&ve(X.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&je(A)}function bt(A){let x=A.texture,z=i.get(A),X=i.get(x);A.addEventListener("dispose",y);let $=A.textures,oe=A.isWebGLCubeRenderTarget===!0,le=$.length>1;if(le||(X.__webglTexture===void 0&&(X.__webglTexture=n.createTexture()),X.__version=x.version,a.memory.textures++),oe){z.__webglFramebuffer=[];for(let K=0;K<6;K++)if(x.mipmaps&&x.mipmaps.length>0){z.__webglFramebuffer[K]=[];for(let ee=0;ee<x.mipmaps.length;ee++)z.__webglFramebuffer[K][ee]=n.createFramebuffer()}else z.__webglFramebuffer[K]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){z.__webglFramebuffer=[];for(let K=0;K<x.mipmaps.length;K++)z.__webglFramebuffer[K]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(le)for(let K=0,ee=$.length;K<ee;K++){let ce=i.get($[K]);ce.__webglTexture===void 0&&(ce.__webglTexture=n.createTexture(),a.memory.textures++)}if(A.samples>0&&Bt(A)===!1){z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let K=0;K<$.length;K++){let ee=$[K];z.__webglColorRenderbuffer[K]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[K]);let ce=r.convert(ee.format,ee.colorSpace),Pe=r.convert(ee.type),fe=M(ee.internalFormat,ce,Pe,ee.normalized,ee.colorSpace,A.isXRRenderTarget===!0),he=Nt(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,he,fe,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+K,n.RENDERBUFFER,z.__webglColorRenderbuffer[K])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),Ze(z.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(oe){t.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture),st(n.TEXTURE_CUBE_MAP,x);for(let K=0;K<6;K++)if(x.mipmaps&&x.mipmaps.length>0)for(let ee=0;ee<x.mipmaps.length;ee++)ve(z.__webglFramebuffer[K][ee],A,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ee);else ve(z.__webglFramebuffer[K],A,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);p(x)&&b(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(le){for(let K=0,ee=$.length;K<ee;K++){let ce=$[K],Pe=i.get(ce),fe=n.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(fe=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(fe,Pe.__webglTexture),st(fe,ce),ve(z.__webglFramebuffer,A,ce,n.COLOR_ATTACHMENT0+K,fe,0),p(ce)&&b(fe)}t.unbindTexture()}else{let K=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(K=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(K,X.__webglTexture),st(K,x),x.mipmaps&&x.mipmaps.length>0)for(let ee=0;ee<x.mipmaps.length;ee++)ve(z.__webglFramebuffer[ee],A,x,n.COLOR_ATTACHMENT0,K,ee);else ve(z.__webglFramebuffer,A,x,n.COLOR_ATTACHMENT0,K,0);p(x)&&b(K),t.unbindTexture()}A.depthBuffer&&je(A)}function tt(A){let x=A.textures;for(let z=0,X=x.length;z<X;z++){let $=x[z];if(p($)){let oe=R(A),le=i.get($).__webglTexture;t.bindTexture(oe,le),b(oe),t.unbindTexture()}}}let It=[],Kt=[];function vn(A){if(A.samples>0){if(Bt(A)===!1){let x=A.textures,z=A.width,X=A.height,$=n.COLOR_BUFFER_BIT,oe=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,le=i.get(A),K=x.length>1;if(K)for(let ce=0;ce<x.length;ce++)t.bindFramebuffer(n.FRAMEBUFFER,le.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,le.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer);let ee=A.texture.mipmaps;ee&&ee.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,le.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let ce=0;ce<x.length;ce++){if(A.resolveDepthBuffer&&(A.depthBuffer&&($|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&($|=n.STENCIL_BUFFER_BIT)),K){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,le.__webglColorRenderbuffer[ce]);let Pe=i.get(x[ce]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Pe,0)}n.blitFramebuffer(0,0,z,X,0,0,z,X,$,n.NEAREST),l===!0&&(It.length=0,Kt.length=0,It.push(n.COLOR_ATTACHMENT0+ce),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&(It.push(oe),Kt.push(oe),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Kt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,It))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),K)for(let ce=0;ce<x.length;ce++){t.bindFramebuffer(n.FRAMEBUFFER,le.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,le.__webglColorRenderbuffer[ce]);let Pe=i.get(x[ce]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,le.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.TEXTURE_2D,Pe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){let x=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function Nt(A){return Math.min(s.maxSamples,A.samples)}function Bt(A){let x=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function U(A){let x=a.render.frame;h.get(A)!==x&&(h.set(A,x),A.update())}function an(A,x){let z=A.colorSpace,X=A.format,$=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||z!==Kr&&z!==Ui&&(nt.getTransfer(z)===dt?(X!==On||$!==Sn)&&Oe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Be("WebGLTextures: Unsupported texture color space:",z)),x}function pt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=Z,this.resetTextureUnits=k,this.getTextureUnits=D,this.setTextureUnits=W,this.setTexture2D=ne,this.setTexture2DArray=Y,this.setTexture3D=Q,this.setTextureCube=se,this.rebindTextures=at,this.setupRenderTarget=bt,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=vn,this.setupDepthRenderbuffer=je,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=Bt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Py(n,e){function t(i,s=Ui){let r,a=nt.getTransfer(s);if(i===Sn)return n.UNSIGNED_BYTE;if(i===tl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===nl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Th)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===wh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Sh)return n.BYTE;if(i===Eh)return n.SHORT;if(i===vr)return n.UNSIGNED_SHORT;if(i===el)return n.INT;if(i===Jn)return n.UNSIGNED_INT;if(i===Fn)return n.FLOAT;if(i===Kn)return n.HALF_FLOAT;if(i===Ah)return n.ALPHA;if(i===Rh)return n.RGB;if(i===On)return n.RGBA;if(i===oi)return n.DEPTH_COMPONENT;if(i===os)return n.DEPTH_STENCIL;if(i===il)return n.RED;if(i===sl)return n.RED_INTEGER;if(i===ls)return n.RG;if(i===rl)return n.RG_INTEGER;if(i===al)return n.RGBA_INTEGER;if(i===ba||i===Sa||i===Ea||i===Ta)if(a===dt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ba)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ba)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Sa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ea)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ta)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ol||i===ll||i===cl||i===hl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===ol)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ll)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===cl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===hl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ul||i===dl||i===fl||i===pl||i===ml||i===wa||i===gl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===ul||i===dl)return a===dt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===fl)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===pl)return r.COMPRESSED_R11_EAC;if(i===ml)return r.COMPRESSED_SIGNED_R11_EAC;if(i===wa)return r.COMPRESSED_RG11_EAC;if(i===gl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===xl||i===_l||i===yl||i===vl||i===Ml||i===bl||i===Sl||i===El||i===Tl||i===wl||i===Al||i===Rl||i===Cl||i===Pl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===xl)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===_l)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===yl)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===vl)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ml)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===bl)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Sl)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===El)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Tl)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===wl)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Al)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Rl)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Cl)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Pl)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Il||i===Ll||i===Dl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Il)return a===dt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ll)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Dl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Nl||i===Ul||i===Aa||i===Fl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Nl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Ul)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Aa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Fl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Mr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var Iy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ly=`
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

}`,$h=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new fa(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Rn({vertexShader:Iy,fragmentShader:Ly,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Le(new mi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Zh=class extends li{constructor(e,t){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null,_=typeof XRWebGLBinding<"u",m=new $h,p={},b=t.getContextAttributes(),R=null,M=null,S=[],T=[],C=new Ge,y=null,w=null,P=new hn;P.viewport=new Lt;let F=new hn;F.viewport=new Lt;let B=[P,F],k=new Jo,D=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let te=S[J];return te===void 0&&(te=new hr,S[J]=te),te.getTargetRaySpace()},this.getControllerGrip=function(J){let te=S[J];return te===void 0&&(te=new hr,S[J]=te),te.getGripSpace()},this.getHand=function(J){let te=S[J];return te===void 0&&(te=new hr,S[J]=te),te.getHandSpace()};function Z(J){let te=T.indexOf(J.inputSource);if(te===-1)return;let Se=S[te];Se!==void 0&&(Se.update(J.inputSource,J.frame,c||a),Se.dispatchEvent({type:J.type,data:J.inputSource}))}function G(){s.removeEventListener("select",Z),s.removeEventListener("selectstart",Z),s.removeEventListener("selectend",Z),s.removeEventListener("squeeze",Z),s.removeEventListener("squeezestart",Z),s.removeEventListener("squeezeend",Z),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",ne);for(let J=0;J<S.length;J++){let te=T[J];te!==null&&(T[J]=null,S[J].disconnect(te))}D=null,W=null,m.reset();for(let J in p)delete p[J];if(e.setRenderTarget(R),f=null,u=null,d=null,s=null,M=null,lt.stop(),i.isPresenting=!1,e.setPixelRatio(y),e.setSize(C.width,C.height,!1),w!==null){let J=w.camera;J.fov=w.fov,J.zoom=w.zoom,J.updateProjectionMatrix(),w=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,i.isPresenting===!0&&Oe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,i.isPresenting===!0&&Oe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(R=e.getRenderTarget(),s.addEventListener("select",Z),s.addEventListener("selectstart",Z),s.addEventListener("selectend",Z),s.addEventListener("squeeze",Z),s.addEventListener("squeezestart",Z),s.addEventListener("squeezeend",Z),s.addEventListener("end",G),s.addEventListener("inputsourceschange",ne),b.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(C),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let Se=null,Ve=null,ve=null;b.depth&&(ve=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Se=b.stencil?os:oi,Ve=b.stencil?Mr:Jn);let Ze={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Ze),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),M=new bn(u.textureWidth,u.textureHeight,{format:On,type:Sn,depthTexture:new es(u.textureWidth,u.textureHeight,Ve,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let Se={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,Se),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new bn(f.framebufferWidth,f.framebufferHeight,{format:On,type:Sn,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),lt.setContext(s),lt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ne(J){for(let te=0;te<J.removed.length;te++){let Se=J.removed[te],Ve=T.indexOf(Se);Ve>=0&&(T[Ve]=null,S[Ve].disconnect(Se))}for(let te=0;te<J.added.length;te++){let Se=J.added[te],Ve=T.indexOf(Se);if(Ve===-1){for(let Ze=0;Ze<S.length;Ze++)if(Ze>=T.length){T.push(Se),Ve=Ze;break}else if(T[Ze]===null){T[Ze]=Se,Ve=Ze;break}if(Ve===-1)break}let ve=S[Ve];ve&&ve.connect(Se)}}let Y=new O,Q=new O;function se(J,te,Se){Y.setFromMatrixPosition(te.matrixWorld),Q.setFromMatrixPosition(Se.matrixWorld);let Ve=Y.distanceTo(Q),ve=te.projectionMatrix.elements,Ze=Se.projectionMatrix.elements,Wt=ve[14]/(ve[10]-1),je=ve[14]/(ve[10]+1),at=(ve[9]+1)/ve[5],bt=(ve[9]-1)/ve[5],tt=(ve[8]-1)/ve[0],It=(Ze[8]+1)/Ze[0],Kt=Wt*tt,vn=Wt*It,Nt=Ve/(-tt+It),Bt=Nt*-tt;if(te.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Bt),J.translateZ(Nt),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),ve[10]===-1)J.projectionMatrix.copy(te.projectionMatrix),J.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{let U=Wt+Nt,an=je+Nt,pt=Kt-Bt,A=vn+(Ve-Bt),x=at*je/an*U,z=bt*je/an*U;J.projectionMatrix.makePerspective(pt,A,x,z,U,an),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function Ne(J,te){te===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(te.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let te=J.near,Se=J.far;m.texture!==null&&(m.depthNear>0&&(te=m.depthNear),m.depthFar>0&&(Se=m.depthFar)),k.near=F.near=P.near=te,k.far=F.far=P.far=Se,(D!==k.near||W!==k.far)&&(s.updateRenderState({depthNear:k.near,depthFar:k.far}),D=k.near,W=k.far),k.layers.mask=J.layers.mask|6,P.layers.mask=k.layers.mask&-5,F.layers.mask=k.layers.mask&-3;let Ve=J.parent,ve=k.cameras;Ne(k,Ve);for(let Ze=0;Ze<ve.length;Ze++)Ne(ve[Ze],Ve);ve.length===2?se(k,P,F):k.projectionMatrix.copy(P.projectionMatrix),w===null&&J.isPerspectiveCamera&&(w={camera:J,fov:J.fov,zoom:J.zoom}),Ce(J,k,Ve)};function Ce(J,te,Se){Se===null?J.matrix.copy(te.matrixWorld):(J.matrix.copy(Se.matrixWorld),J.matrix.invert(),J.matrix.multiply(te.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(te.projectionMatrix),J.projectionMatrixInverse.copy(te.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Ao*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(J){l=J,u!==null&&(u.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(k)},this.getCameraTexture=function(J){return p[J]};let ct=null;function st(J,te){if(h=te.getViewerPose(c||a),g=te,h!==null){let Se=h.views;f!==null&&(e.setRenderTargetFramebuffer(M,f.framebuffer),e.setRenderTarget(M));let Ve=!1;Se.length!==k.cameras.length&&(k.cameras.length=0,Ve=!0);for(let je=0;je<Se.length;je++){let at=Se[je],bt=null;if(f!==null)bt=f.getViewport(at);else{let It=d.getViewSubImage(u,at);bt=It.viewport,je===0&&(e.setRenderTargetTextures(M,It.colorTexture,It.depthStencilTexture),e.setRenderTarget(M))}let tt=B[je];tt===void 0&&(tt=new hn,tt.layers.enable(je),tt.viewport=new Lt,B[je]=tt),tt.matrix.fromArray(at.transform.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.projectionMatrix.fromArray(at.projectionMatrix),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert(),tt.viewport.set(bt.x,bt.y,bt.width,bt.height),je===0&&(k.matrix.copy(tt.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Ve===!0&&k.cameras.push(tt)}let ve=s.enabledFeatures;if(ve&&ve.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){d=i.getBinding();let je=d.getDepthInformation(Se[0]);je&&je.isValid&&je.texture&&m.init(je,s.renderState)}if(ve&&ve.includes("camera-access")&&_){e.state.unbindTexture(),d=i.getBinding();for(let je=0;je<Se.length;je++){let at=Se[je].camera;if(at){let bt=p[at];bt||(bt=new fa,p[at]=bt);let tt=d.getCameraImage(at);bt.sourceTexture=tt}}}}for(let Se=0;Se<S.length;Se++){let Ve=T[Se],ve=S[Se];Ve!==null&&ve!==void 0&&ve.update(Ve,te,c||a)}ct&&ct(J,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),g=null}let lt=new Pf;lt.setAnimationLoop(st),this.setAnimationLoop=function(J){ct=J},this.dispose=function(){}}},Dy=new xt,Ff=new ke;Ff.set(-1,0,0,0,1,0,0,0,1);function Ny(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Ih(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,b,R,M){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,b,R):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===mn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===mn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let b=e.get(p),R=b.envMap,M=b.envMapRotation;R&&(m.envMap.value=R,m.envMapRotation.value.setFromMatrix4(Dy.makeRotationFromEuler(M)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Ff),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,b,R){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=R*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===mn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){let b=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Uy(n,e,t,i){let s={},r={},a=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,S){let T=S.program;i.uniformBlockBinding(M,T)}function c(M,S){let T=s[M.id];T===void 0&&(m(M),T=h(M),s[M.id]=T,M.addEventListener("dispose",b));let C=S.program;i.updateUBOMapping(M,C);let y=e.render.frame;r[M.id]!==y&&(u(M),r[M.id]=y)}function h(M){let S=d();M.__bindingPointIndex=S;let T=n.createBuffer(),C=M.__size,y=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,T),n.bufferData(n.UNIFORM_BUFFER,C,y),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,T),T}function d(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return Be("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(M){let S=s[M.id],T=M.uniforms,C=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let y=0,w=T.length;y<w;y++){let P=T[y];if(Array.isArray(P))for(let F=0,B=P.length;F<B;F++)f(P[F],y,F,C);else f(P,y,0,C)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(M,S,T,C){if(_(M,S,T,C)===!0){let y=M.__offset,w=M.value;if(Array.isArray(w)){let P=0;for(let F=0;F<w.length;F++){let B=w[F],k=p(B);g(B,M.__data,P),typeof B!="number"&&typeof B!="boolean"&&!B.isMatrix3&&!ArrayBuffer.isView(B)&&(P+=k.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(w,M.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,y,M.__data)}}function g(M,S,T){typeof M=="number"||typeof M=="boolean"?S[0]=M:M.isMatrix3?(S[0]=M.elements[0],S[1]=M.elements[1],S[2]=M.elements[2],S[3]=0,S[4]=M.elements[3],S[5]=M.elements[4],S[6]=M.elements[5],S[7]=0,S[8]=M.elements[6],S[9]=M.elements[7],S[10]=M.elements[8],S[11]=0):ArrayBuffer.isView(M)?S.set(new M.constructor(M.buffer,M.byteOffset,S.length)):M.toArray(S,T)}function _(M,S,T,C){let y=M.value,w=S+"_"+T;if(C[w]===void 0)return typeof y=="number"||typeof y=="boolean"?C[w]=y:ArrayBuffer.isView(y)?C[w]=y.slice():C[w]=y.clone(),!0;{let P=C[w];if(typeof y=="number"||typeof y=="boolean"){if(P!==y)return C[w]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(P.equals(y)===!1)return P.copy(y),!0}}return!1}function m(M){let S=M.uniforms,T=0,C=16;for(let w=0,P=S.length;w<P;w++){let F=Array.isArray(S[w])?S[w]:[S[w]];for(let B=0,k=F.length;B<k;B++){let D=F[B],W=Array.isArray(D.value)?D.value:[D.value];for(let Z=0,G=W.length;Z<G;Z++){let ne=W[Z],Y=p(ne),Q=T%C,se=Q%Y.boundary,Ne=Q+se;T+=se,Ne!==0&&C-Ne<Y.storage&&(T+=C-Ne),D.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=T,T+=Y.storage}}}let y=T%C;return y>0&&(T+=C-y),M.__size=T,M.__cache={},this}function p(M){let S={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(S.boundary=4,S.storage=4):M.isVector2?(S.boundary=8,S.storage=8):M.isVector3||M.isColor?(S.boundary=16,S.storage=12):M.isVector4?(S.boundary=16,S.storage=16):M.isMatrix3?(S.boundary=48,S.storage=48):M.isMatrix4?(S.boundary=64,S.storage=64):M.isTexture?Oe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(S.boundary=16,S.storage=M.byteLength):Oe("WebGLRenderer: Unsupported uniform value type.",M),S}function b(M){let S=M.target;S.removeEventListener("dispose",b);let T=a.indexOf(S.__bindingPointIndex);a.splice(T,1),n.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function R(){for(let M in s)n.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:l,update:c,dispose:R}}var Fy=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),_i=null;function Oy(){return _i===null&&(_i=new ca(Fy,16,16,ls,Kn),_i.name="DFG_LUT",_i.minFilter=rn,_i.magFilter=rn,_i.wrapS=ai,_i.wrapT=ai,_i.generateMipmaps=!1,_i.needsUpdate=!0),_i}var Wl=class{constructor(e={}){let{canvas:t=Qd(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=Sn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;let _=f,m=new Set([al,rl,sl]),p=new Set([Sn,Jn,vr,Mr,tl,nl]),b=new Uint32Array(4),R=new Int32Array(4),M=new O,S=null,T=null,C=[],y=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Zn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,F=!1,B=null,k=null,D=null,W=null;this._outputColorSpace=Qt;let Z=0,G=0,ne=null,Y=-1,Q=null,se=new Lt,Ne=new Lt,Ce=null,ct=new qe(0),st=0,lt=t.width,J=t.height,te=1,Se=null,Ve=null,ve=new Lt(0,0,lt,J),Ze=new Lt(0,0,lt,J),Wt=!1,je=new ur,at=!1,bt=!1,tt=new xt,It=new O,Kt=new Lt,vn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Nt=!1;function Bt(){return ne===null?te:1}let U=i;function an(v,L){return t.getContext(v,L)}let pt,A,x,z,X,$,oe,le,K,ee,ce,Pe,fe,he,Ie,Fe,We,N,ue,j,de,xe,re;try{let v={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",St,!1),t.addEventListener("webglcontextrestored",ht,!1),t.addEventListener("webglcontextcreationerror",Vn,!1),U===null){let L="webgl2";if(U=an(L,v),U===null)throw an(L)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}De()}catch(v){throw t.removeEventListener("webglcontextlost",St,!1),t.removeEventListener("webglcontextrestored",ht,!1),t.removeEventListener("webglcontextcreationerror",Vn,!1),Be("WebGLRenderer: "+v.message),v}function De(){pt=new Wx(U),pt.init(),de=new Py(U,pt),A=new Nx(U,pt,e,de),x=new Ry(U,pt),A.reversedDepthBuffer&&u&&x.buffers.depth.setReversed(!0),k=U.createFramebuffer(),D=U.createFramebuffer(),W=U.createFramebuffer(),z=new Yx(U),X=new py,$=new Cy(U,pt,x,X,A,de,z),oe=new Gx(P),le=new Zm(U),xe=new Lx(U,le),K=new Xx(U,le,z,xe),ee=new Zx(U,K,le,xe,z),N=new $x(U,A,$),Ie=new Ux(X),ce=new fy(P,oe,pt,A,xe,Ie),Pe=new Ny(P,X),fe=new gy,he=new by(pt),We=new Ix(P,oe,x,ee,g,l),Fe=new Ay(P,ee,A),re=new Uy(U,z,A,x),ue=new Dx(U,pt,z),j=new qx(U,pt,z),z.programs=ce.programs,P.capabilities=A,P.extensions=pt,P.properties=X,P.renderLists=fe,P.shadowMap=Fe,P.state=x,P.info=z}_!==Sn&&(w=new Kx(_,t.width,t.height,o,s,r));let Ae=new Zh(P,U);this.xr=Ae,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let v=pt.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=pt.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(v){v!==void 0&&(te=v,this.setSize(lt,J,!1))},this.getSize=function(v){return v.set(lt,J)},this.setSize=function(v,L,q=!0){if(Ae.isPresenting){Oe("WebGLRenderer: Can't change size while VR device is presenting.");return}lt=v,J=L,t.width=Math.floor(v*te),t.height=Math.floor(L*te),q===!0&&(t.style.width=v+"px",t.style.height=L+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,v,L)},this.getDrawingBufferSize=function(v){return v.set(lt*te,J*te).floor()},this.setDrawingBufferSize=function(v,L,q){lt=v,J=L,te=q,t.width=Math.floor(v*q),t.height=Math.floor(L*q),this.setViewport(0,0,v,L)},this.setEffects=function(v){if(_===Sn){Be("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let L=0;L<v.length;L++)if(v[L].isOutputPass===!0){Oe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(se)},this.getViewport=function(v){return v.copy(ve)},this.setViewport=function(v,L,q,H){v.isVector4?ve.set(v.x,v.y,v.z,v.w):ve.set(v,L,q,H),x.viewport(se.copy(ve).multiplyScalar(te).round())},this.getScissor=function(v){return v.copy(Ze)},this.setScissor=function(v,L,q,H){v.isVector4?Ze.set(v.x,v.y,v.z,v.w):Ze.set(v,L,q,H),x.scissor(Ne.copy(Ze).multiplyScalar(te).round())},this.getScissorTest=function(){return Wt},this.setScissorTest=function(v){x.setScissorTest(Wt=v)},this.setOpaqueSort=function(v){Se=v},this.setTransparentSort=function(v){Ve=v},this.getClearColor=function(v){return v.copy(We.getClearColor())},this.setClearColor=function(){We.setClearColor(...arguments)},this.getClearAlpha=function(){return We.getClearAlpha()},this.setClearAlpha=function(){We.setClearAlpha(...arguments)},this.clear=function(v=!0,L=!0,q=!0){let H=0;if(v){let V=!1;if(ne!==null){let ge=ne.texture.format;V=m.has(ge)}if(V){let ge=ne.texture.type,Me=p.has(ge),me=We.getClearColor(),Te=We.getClearAlpha(),Re=me.r,Xe=me.g,Qe=me.b;Me?(b[0]=Re,b[1]=Xe,b[2]=Qe,b[3]=Te,U.clearBufferuiv(U.COLOR,0,b)):(R[0]=Re,R[1]=Xe,R[2]=Qe,R[3]=Te,U.clearBufferiv(U.COLOR,0,R))}else H|=U.COLOR_BUFFER_BIT}L&&(H|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(H|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&U.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),B=v},this.dispose=function(){t.removeEventListener("webglcontextlost",St,!1),t.removeEventListener("webglcontextrestored",ht,!1),t.removeEventListener("webglcontextcreationerror",Vn,!1),We.dispose(),fe.dispose(),he.dispose(),X.dispose(),oe.dispose(),ee.dispose(),xe.dispose(),re.dispose(),ce.dispose(),Ae.dispose(),Ae.removeEventListener("sessionstart",Bu),Ae.removeEventListener("sessionend",zu),gs.stop()};function St(v){v.preventDefault(),ea("WebGLRenderer: Context Lost."),F=!0}function ht(){ea("WebGLRenderer: Context Restored."),F=!1;let v=z.autoReset,L=Fe.enabled,q=Fe.autoUpdate,H=Fe.needsUpdate,V=Fe.type;De(),z.autoReset=v,Fe.enabled=L,Fe.autoUpdate=q,Fe.needsUpdate=H,Fe.type=V}function Vn(v){Be("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function ni(v){let L=v.target;L.removeEventListener("dispose",ni),rm(L)}function rm(v){am(v),X.remove(v)}function am(v){let L=X.get(v).programs;L!==void 0&&(L.forEach(function(q){ce.releaseProgram(q)}),v.isShaderMaterial&&ce.releaseShaderCache(v))}this.renderBufferDirect=function(v,L,q,H,V,ge){L===null&&(L=vn);let Me=V.isMesh&&V.matrixWorld.determinantAffine()<0,me=cm(v,L,q,H,V);x.setMaterial(H,Me);let Te=q.index,Re=1;if(H.wireframe===!0){if(Te=K.getWireframeAttribute(q),Te===void 0)return;Re=2}let Xe=q.drawRange,Qe=q.attributes.position,we=Xe.start*Re,ut=(Xe.start+Xe.count)*Re;ge!==null&&(we=Math.max(we,ge.start*Re),ut=Math.min(ut,(ge.start+ge.count)*Re)),Te!==null?(we=Math.max(we,0),ut=Math.min(ut,Te.count)):Qe!=null&&(we=Math.max(we,0),ut=Math.min(ut,Qe.count));let zt=ut-we;if(zt<0||zt===1/0)return;xe.setup(V,H,me,q,Te);let Rt,yt=ue;if(Te!==null&&(Rt=le.get(Te),yt=j,yt.setIndex(Rt)),V.isMesh)H.wireframe===!0?(x.setLineWidth(H.wireframeLinewidth*Bt()),yt.setMode(U.LINES)):yt.setMode(U.TRIANGLES);else if(V.isLine){let on=H.linewidth;on===void 0&&(on=1),x.setLineWidth(on*Bt()),V.isLineSegments?yt.setMode(U.LINES):V.isLineLoop?yt.setMode(U.LINE_LOOP):yt.setMode(U.LINE_STRIP)}else V.isPoints?yt.setMode(U.POINTS):V.isSprite&&yt.setMode(U.TRIANGLES);if(V.isBatchedMesh)if(pt.get("WEBGL_multi_draw"))yt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let on=V._multiDrawStarts,ye=V._multiDrawCounts,dn=V._multiDrawCount,rt=Te?le.get(Te).bytesPerElement:1,Dn=X.get(H).currentProgram.getUniforms();for(let ii=0;ii<dn;ii++)Dn.setValue(U,"_gl_DrawID",ii),yt.render(on[ii]/rt,ye[ii])}else if(V.isInstancedMesh)yt.renderInstances(we,zt,V.count);else if(q.isInstancedBufferGeometry){let on=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,ye=Math.min(q.instanceCount,on);yt.renderInstances(we,zt,ye)}else yt.render(we,zt)};function Ou(v,L,q,H){B!==null&&v.isNodeMaterial&&B.setObject(H,v),at===!0&&Ie.setState(v,q,!1),v.transparent===!0&&v.side===Pn&&v.forceSinglePass===!1?(v.side=mn,v.needsUpdate=!0,Ga(v,L,H),v.side=ss,v.needsUpdate=!0,Ga(v,L,H),v.side=Pn):Ga(v,L,H)}this.compile=function(v,L,q=null){q===null&&(q=v),B!==null&&B.renderStart(v,L,q),T=he.get(q),T.init(L),y.push(T),q.traverseVisible(function(V){V.isLight&&V.layers.test(L.layers)&&(T.pushLight(V),V.castShadow&&T.pushShadow(V))}),v!==q&&v.traverseVisible(function(V){V.isLight&&V.layers.test(L.layers)&&(T.pushLight(V),V.castShadow&&T.pushShadow(V))}),T.setupLights(),B!==null&&B.updateLights(T.state.lightsArray),bt=this.localClippingEnabled,at=Ie.init(this.clippingPlanes,bt),at===!0&&Ie.setGlobalState(this.clippingPlanes,L),B!==null&&Fe.render(T.state.shadowsArray,q,L);let H=new Set;return v.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let ge=V.material;if(ge)if(Array.isArray(ge))for(let Me=0;Me<ge.length;Me++){let me=ge[Me];Ou(me,q,L,V),H.add(me)}else Ou(ge,q,L,V),H.add(ge)}),T=y.pop(),B!==null&&B.renderEnd(),H},this.compileAsync=function(v,L,q=null){let H=this.compile(v,L,q);return new Promise(V=>{function ge(){if(H.forEach(function(Me){let Te=X.get(Me).currentProgram;(Te===void 0||Te.isReady())&&H.delete(Me)}),H.size===0){V(v);return}setTimeout(ge,10)}pt.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let Cc=null;function om(v){Cc&&Cc(v)}function Bu(){gs.stop()}function zu(){gs.start()}let gs=new Pf;gs.setAnimationLoop(om),typeof self<"u"&&gs.setContext(self),this.setAnimationLoop=function(v){Cc=v,Ae.setAnimationLoop(v),v===null?gs.stop():gs.start()},Ae.addEventListener("sessionstart",Bu),Ae.addEventListener("sessionend",zu),this.render=function(v,L){if(L!==void 0&&L.isCamera!==!0){Be("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;B!==null&&B.renderStart(v,L);let q=Ae.enabled===!0&&Ae.isPresenting===!0,H=w!==null&&(ne===null||q)&&w.begin(P,ne);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),Ae.enabled===!0&&Ae.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Ae.cameraAutoUpdate===!0&&Ae.updateCamera(L),L=Ae.getCamera()),v.isScene===!0&&v.onBeforeRender(P,v,L,ne),T=he.get(v,y.length),T.init(L),T.state.textureUnits=$.getTextureUnits(),y.push(T),tt.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),je.setFromProjectionMatrix(tt,Yn,L.reversedDepth),bt=this.localClippingEnabled,at=Ie.init(this.clippingPlanes,bt),S=fe.get(v,C.length),S.init(),C.push(S),Ae.enabled===!0&&Ae.isPresenting===!0){let Me=P.xr.getDepthSensingMesh();Me!==null&&Pc(Me,L,-1/0,P.sortObjects)}Pc(v,L,0,P.sortObjects),S.finish(),B!==null&&B.updateLights(T.state.lightsArray),P.sortObjects===!0&&S.sort(Se,Ve),Nt=Ae.enabled===!1||Ae.isPresenting===!1||Ae.hasDepthSensing()===!1,Nt&&We.addToRenderList(S,v),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),at===!0&&Ie.beginShadows();let V=T.state.shadowsArray;if(Fe.render(V,v,L),at===!0&&Ie.endShadows(),(H&&w.hasRenderPass())===!1){let Me=S.opaque,me=S.transmissive;if(T.setupLights(),L.isArrayCamera){let Te=L.cameras;if(me.length>0)for(let Re=0,Xe=Te.length;Re<Xe;Re++){let Qe=Te[Re];Hu(Me,me,v,Qe)}Nt&&We.render(v);for(let Re=0,Xe=Te.length;Re<Xe;Re++){let Qe=Te[Re];ku(S,v,Qe,Qe.viewport)}}else me.length>0&&Hu(Me,me,v,L),Nt&&We.render(v),ku(S,v,L)}ne!==null&&G===0&&($.updateMultisampleRenderTarget(ne),$.updateRenderTargetMipmap(ne)),H&&w.end(P),v.isScene===!0&&v.onAfterRender(P,v,L),xe.resetDefaultState(),Y=-1,Q=null,y.pop(),y.length>0?(T=y[y.length-1],$.setTextureUnits(T.state.textureUnits),at===!0&&Ie.setGlobalState(P.clippingPlanes,T.state.camera)):T=null,C.pop(),C.length>0?S=C[C.length-1]:S=null,B!==null&&B.renderEnd()};function Pc(v,L,q,H){if(v.visible===!1)return;if(v.layers.test(L.layers)){if(v.isGroup)q=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(L);else if(v.isLightProbeGrid)T.pushLightProbeGrid(v);else if(v.isLight)T.pushLight(v),v.castShadow&&T.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||v.intersectsFrustum(je)){H&&Kt.setFromMatrixPosition(v.matrixWorld).applyMatrix4(tt);let Me=ee.update(v),me=v.material;me.visible&&S.push(v,Me,me,q,Kt.z,null,L)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||v.intersectsFrustum(je))){let Me=ee.update(v),me=v.material;if(H&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Kt.copy(v.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),Kt.copy(Me.boundingSphere.center)),Kt.applyMatrix4(v.matrixWorld).applyMatrix4(tt)),Array.isArray(me)){let Te=Me.groups;for(let Re=0,Xe=Te.length;Re<Xe;Re++){let Qe=Te[Re],we=me[Qe.materialIndex];we&&we.visible&&S.push(v,Me,we,q,Kt.z,Qe,L)}}else me.visible&&S.push(v,Me,me,q,Kt.z,null,L)}}let ge=v.children;for(let Me=0,me=ge.length;Me<me;Me++)Pc(ge[Me],L,q,H)}function ku(v,L,q,H){let{opaque:V,transmissive:ge,transparent:Me}=v;T.setupLightsView(q),at===!0&&Ie.setGlobalState(P.clippingPlanes,q),H&&x.viewport(se.copy(H)),V.length>0&&Va(V,L,q),ge.length>0&&Va(ge,L,q),Me.length>0&&Va(Me,L,q),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function Hu(v,L,q,H){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[H.id]===void 0){let we=pt.has("EXT_color_buffer_half_float")||pt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[H.id]=new bn(1,1,{generateMipmaps:!0,type:we?Kn:Sn,minFilter:as,samples:Math.max(4,A.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:nt.workingColorSpace})}let ge=T.state.transmissionRenderTarget[H.id],Me=H.viewport||se;ge.setSize(Me.z*P.transmissionResolutionScale,Me.w*P.transmissionResolutionScale);let me=P.getRenderTarget(),Te=P.getActiveCubeFace(),Re=P.getActiveMipmapLevel();P.setRenderTarget(ge),P.getClearColor(ct),st=P.getClearAlpha(),st<1&&P.setClearColor(16777215,.5),P.clear(),Nt&&We.render(q);let Xe=P.toneMapping;P.toneMapping=Zn;let Qe=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),T.setupLightsView(H),at===!0&&Ie.setGlobalState(P.clippingPlanes,H),Va(v,q,H),$.updateMultisampleRenderTarget(ge),$.updateRenderTargetMipmap(ge),pt.has("WEBGL_multisampled_render_to_texture")===!1){let we=!1;for(let ut=0,zt=L.length;ut<zt;ut++){let Rt=L[ut],{object:yt,geometry:on,material:ye,group:dn}=Rt;if(ye.side===Pn&&yt.layers.test(H.layers)){let rt=ye.side;ye.side=mn,ye.needsUpdate=!0,Vu(yt,q,H,on,ye,dn),ye.side=rt,ye.needsUpdate=!0,we=!0}}we===!0&&($.updateMultisampleRenderTarget(ge),$.updateRenderTargetMipmap(ge))}P.setRenderTarget(me,Te,Re),P.setClearColor(ct,st),Qe!==void 0&&(H.viewport=Qe),P.toneMapping=Xe}function Va(v,L,q){let H=L.isScene===!0?L.overrideMaterial:null;for(let V=0,ge=v.length;V<ge;V++){let Me=v[V],{object:me,geometry:Te,group:Re}=Me,Xe=Me.material;Xe.allowOverride===!0&&H!==null&&(Xe=H),me.layers.test(q.layers)&&Vu(me,L,q,Te,Xe,Re)}}function Vu(v,L,q,H,V,ge){B!==null&&V.isNodeMaterial&&B.setObject(v,V),v.onBeforeRender(P,L,q,H,V,ge),v.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),V.onBeforeRender(P,L,q,H,v,ge),V.transparent===!0&&V.side===Pn&&V.forceSinglePass===!1?(V.side=mn,V.needsUpdate=!0,P.renderBufferDirect(q,L,H,V,v,ge),V.side=ss,V.needsUpdate=!0,P.renderBufferDirect(q,L,H,V,v,ge),V.side=Pn):P.renderBufferDirect(q,L,H,V,v,ge),v.onAfterRender(P,L,q,H,V,ge)}function Ga(v,L,q){L.isScene!==!0&&(L=vn);let H=X.get(v),V=T.state.lights,ge=T.state.shadowsArray,Me=V.state.version,me=ce.getParameters(v,V.state,ge,L,q,T.state.lightProbeGridArray),Te=ce.getProgramCacheKey(me),Re=H.programs;H.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?L.environment:null,H.fog=L.fog;let Xe=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;H.envMap=oe.get(v.envMap||H.environment,Xe),H.envMapRotation=H.environment!==null&&v.envMap===null?L.environmentRotation:v.envMapRotation,Re===void 0&&(v.addEventListener("dispose",ni),Re=new Map,H.programs=Re);let Qe=Re.get(Te);if(Qe!==void 0){if(H.currentProgram===Qe&&H.lightsStateVersion===Me)return Wu(v,me),Qe}else me.uniforms=ce.getUniforms(v),B!==null&&v.isNodeMaterial&&B.build(v,q,me),v.onBeforeCompile(me,P),Qe=ce.acquireProgram(me,Te),Re.set(Te,Qe),H.uniforms=me.uniforms;let we=H.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(we.clippingPlanes=Ie.uniform),Wu(v,me),H.needsLights=um(v),H.lightsStateVersion=Me,H.needsLights&&(we.ambientLightColor.value=V.state.ambient,we.lightProbe.value=V.state.probe,we.sunLights.value=V.state.sun,we.sunLightShadows.value=V.state.sunShadow,we.directionalLights.value=V.state.directional,we.directionalLightShadows.value=V.state.directionalShadow,we.spotLights.value=V.state.spot,we.spotLightShadows.value=V.state.spotShadow,we.rectAreaLights.value=V.state.rectArea,we.ltc_1.value=V.state.rectAreaLTC1,we.ltc_2.value=V.state.rectAreaLTC2,we.pointLights.value=V.state.point,we.pointLightShadows.value=V.state.pointShadow,we.hemisphereLights.value=V.state.hemi,we.sunShadowMatrix.value=V.state.sunShadowMatrix,we.sunShadowCascade.value=V.state.sunShadowCascade,we.directionalShadowMatrix.value=V.state.directionalShadowMatrix,we.spotLightMatrix.value=V.state.spotLightMatrix,we.spotLightMap.value=V.state.spotLightMap,we.pointShadowMatrix.value=V.state.pointShadowMatrix),H.lightProbeGrid=T.state.lightProbeGridArray.length>0,H.currentProgram=Qe,H.uniformsList=null,Qe}function Gu(v){if(v.uniformsList===null){let L=v.currentProgram.getUniforms();v.uniformsList=Er.seqWithValue(L.seq,v.uniforms)}return v.uniformsList}function Wu(v,L){let q=X.get(v);q.outputColorSpace=L.outputColorSpace,q.batching=L.batching,q.batchingColor=L.batchingColor,q.instancing=L.instancing,q.instancingColor=L.instancingColor,q.instancingMorph=L.instancingMorph,q.skinning=L.skinning,q.morphTargets=L.morphTargets,q.morphNormals=L.morphNormals,q.morphColors=L.morphColors,q.morphTargetsCount=L.morphTargetsCount,q.numClippingPlanes=L.numClippingPlanes,q.numIntersection=L.numClipIntersection,q.vertexAlphas=L.vertexAlphas,q.vertexTangents=L.vertexTangents,q.toneMapping=L.toneMapping}function lm(v,L){if(v.length===0)return null;if(v.length===1)return v[0].texture!==null?v[0]:null;M.setFromMatrixPosition(L.matrixWorld);for(let q=0,H=v.length;q<H;q++){let V=v[q];if(V.texture!==null&&V.boundingBox.containsPoint(M))return V}return null}function cm(v,L,q,H,V){L.isScene!==!0&&(L=vn),$.resetTextureUnits();let ge=L.fog,Me=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?L.environment:null,me=ne===null?P.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:nt.workingColorSpace,Te=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Re=oe.get(H.envMap||Me,Te),Xe=H.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Qe=!!q.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),we=!!q.morphAttributes.position,ut=!!q.morphAttributes.normal,zt=!!q.morphAttributes.color,Rt=Zn;H.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Rt=P.toneMapping);let yt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,on=yt!==void 0?yt.length:0,ye=X.get(H),dn=T.state.lights;if(at===!0&&(bt===!0||v!==Q)){let Et=v===Q&&H.id===Y;Ie.setState(H,v,Et)}let rt=!1;H.version===ye.__version?(ye.needsLights&&ye.lightsStateVersion!==dn.state.version||ye.outputColorSpace!==me||V.isBatchedMesh&&ye.batching===!1||!V.isBatchedMesh&&ye.batching===!0||V.isBatchedMesh&&ye.batchingColor===!0&&V._colorsTexture===null||V.isBatchedMesh&&ye.batchingColor===!1&&V._colorsTexture!==null||V.isInstancedMesh&&ye.instancing===!1||!V.isInstancedMesh&&ye.instancing===!0||V.isSkinnedMesh&&ye.skinning===!1||!V.isSkinnedMesh&&ye.skinning===!0||V.isInstancedMesh&&ye.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&ye.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&ye.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&ye.instancingMorph===!1&&V.morphTexture!==null||ye.envMap!==Re||H.fog===!0&&ye.fog!==ge||ye.numClippingPlanes!==void 0&&(ye.numClippingPlanes!==Ie.numPlanes||ye.numIntersection!==Ie.numIntersection)||ye.vertexAlphas!==Xe||ye.vertexTangents!==Qe||ye.morphTargets!==we||ye.morphNormals!==ut||ye.morphColors!==zt||ye.toneMapping!==Rt||ye.morphTargetsCount!==on||!!ye.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(rt=!0):(rt=!0,ye.__version=H.version);let Dn=ye.currentProgram;rt===!0&&(Dn=Ga(H,L,V),B&&H.isNodeMaterial&&B.onUpdateProgram(H,Dn,ye));let ii=!1,Xi=!1,zs=!1,mt=Dn.getUniforms(),Ut=ye.uniforms;if(x.useProgram(Dn.program)&&(ii=!0,Xi=!0,zs=!0),H.id!==Y&&(Y=H.id,Xi=!0),ye.needsLights){let Et=lm(T.state.lightProbeGridArray,V);ye.lightProbeGrid!==Et&&(ye.lightProbeGrid=Et,Xi=!0)}if(ii||Q!==v){x.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),mt.setValue(U,"projectionMatrix",v.projectionMatrix),mt.setValue(U,"viewMatrix",v.matrixWorldInverse);let Yi=mt.map.cameraPosition;Yi!==void 0&&Yi.setValue(U,It.setFromMatrixPosition(v.matrixWorld)),A.logarithmicDepthBuffer&&mt.setValue(U,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&mt.setValue(U,"isOrthographic",v.isOrthographicCamera===!0),Q!==v&&(Q=v,Xi=!0,zs=!0)}if(ye.needsLights&&(dn.state.sunShadowMap.length>0&&mt.setValue(U,"sunShadowMap",dn.state.sunShadowMap,$),dn.state.directionalShadowMap.length>0&&mt.setValue(U,"directionalShadowMap",dn.state.directionalShadowMap,$),dn.state.spotShadowMap.length>0&&mt.setValue(U,"spotShadowMap",dn.state.spotShadowMap,$),dn.state.pointShadowMap.length>0&&mt.setValue(U,"pointShadowMap",dn.state.pointShadowMap,$)),V.isSkinnedMesh){mt.setOptional(U,V,"bindMatrix"),mt.setOptional(U,V,"bindMatrixInverse");let Et=V.skeleton;Et&&(Et.boneTexture===null&&Et.computeBoneTexture(),mt.setValue(U,"boneTexture",Et.boneTexture,$))}V.isBatchedMesh&&(mt.setOptional(U,V,"batchingTexture"),mt.setValue(U,"batchingTexture",V._matricesTexture,$),mt.setOptional(U,V,"batchingIdTexture"),mt.setValue(U,"batchingIdTexture",V._indirectTexture,$),mt.setOptional(U,V,"batchingColorTexture"),V._colorsTexture!==null&&mt.setValue(U,"batchingColorTexture",V._colorsTexture,$));let qi=q.morphAttributes;if((qi.position!==void 0||qi.normal!==void 0||qi.color!==void 0)&&N.update(V,q,Dn),(Xi||ye.receiveShadow!==V.receiveShadow)&&(ye.receiveShadow=V.receiveShadow,mt.setValue(U,"receiveShadow",V.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&L.environment!==null&&(Ut.envMapIntensity.value=L.environmentIntensity),Ut.dfgLUT!==void 0&&(Ut.dfgLUT.value=Oy()),Xi){if(mt.setValue(U,"toneMappingExposure",P.toneMappingExposure),ye.needsLights&&hm(Ut,zs),ge&&H.fog===!0&&Pe.refreshFogUniforms(Ut,ge),Pe.refreshMaterialUniforms(Ut,H,te,J,T.state.transmissionRenderTarget[v.id]),ye.needsLights&&ye.lightProbeGrid){let Et=ye.lightProbeGrid;Ut.probesSH.value=Et.texture,Ut.probesMin.value.copy(Et.boundingBox.min),Ut.probesMax.value.copy(Et.boundingBox.max),Ut.probesResolution.value.copy(Et.resolution)}Er.upload(U,Gu(ye),Ut,$)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Er.upload(U,Gu(ye),Ut,$),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&mt.setValue(U,"center",V.center),mt.setValue(U,"modelViewMatrix",V.modelViewMatrix),mt.setValue(U,"normalMatrix",V.normalMatrix),mt.setValue(U,"modelMatrix",V.matrixWorld),H.uniformsGroups!==void 0){let Et=H.uniformsGroups;for(let Yi=0,ks=Et.length;Yi<ks;Yi++){let qu=Et[Yi];re.update(qu,Dn),re.bind(qu,Dn)}}return Dn}function hm(v,L){v.ambientLightColor.needsUpdate=L,v.lightProbe.needsUpdate=L,v.sunLights.needsUpdate=L,v.sunLightShadows.needsUpdate=L,v.directionalLights.needsUpdate=L,v.directionalLightShadows.needsUpdate=L,v.pointLights.needsUpdate=L,v.pointLightShadows.needsUpdate=L,v.spotLights.needsUpdate=L,v.spotLightShadows.needsUpdate=L,v.rectAreaLights.needsUpdate=L,v.hemisphereLights.needsUpdate=L}function um(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return ne},this.setRenderTargetTextures=function(v,L,q){let H=X.get(v);H.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),X.get(v.texture).__webglTexture=L,X.get(v.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:q,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,L){let q=X.get(v);q.__webglFramebuffer=L,q.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(v,L=0,q=0){ne=v,Z=L,G=q;let H=null,V=!1,ge=!1;if(v){let me=X.get(v);if(me.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(U.FRAMEBUFFER,me.__webglFramebuffer),se.copy(v.viewport),Ne.copy(v.scissor),Ce=v.scissorTest,x.viewport(se),x.scissor(Ne),x.setScissorTest(Ce),Y=-1;return}else if(me.__webglFramebuffer===void 0)$.setupRenderTarget(v);else if(me.__hasExternalTextures)$.rebindTextures(v,X.get(v.texture).__webglTexture,X.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let Xe=v.depthTexture;if(me.__boundDepthTexture!==Xe){if(Xe!==null&&X.has(Xe)&&(v.width!==Xe.image.width||v.height!==Xe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");$.setupDepthRenderbuffer(v)}}let Te=v.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(ge=!0);let Re=X.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Re[L])?H=Re[L][q]:H=Re[L],V=!0):v.samples>0&&$.useMultisampledRTT(v)===!1?H=X.get(v).__webglMultisampledFramebuffer:Array.isArray(Re)?H=Re[q]:H=Re,se.copy(v.viewport),Ne.copy(v.scissor),Ce=v.scissorTest}else se.copy(ve).multiplyScalar(te).floor(),Ne.copy(Ze).multiplyScalar(te).floor(),Ce=Wt;if(q!==0&&(H=k),x.bindFramebuffer(U.FRAMEBUFFER,H)&&x.drawBuffers(v,H),x.viewport(se),x.scissor(Ne),x.setScissorTest(Ce),V){let me=X.get(v.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+L,me.__webglTexture,q)}else if(ge){let me=L;for(let Te=0;Te<v.textures.length;Te++){let Re=X.get(v.textures[Te]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Te,Re.__webglTexture,q,me)}}else if(v!==null&&q!==0){let me=X.get(v.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,me.__webglTexture,q)}Y=-1};function Xu(v){let L=X.get(v);return(L.__readFormat!==v.format||L.__readType!==v.type)&&(L.__readFormat=v.format,L.__readType=v.type,L.__formatReadable=A.textureFormatReadable(v.format),L.__typeReadable=A.textureTypeReadable(v.type)),L}this.readRenderTargetPixels=function(v,L,q,H,V,ge,Me,me=0){if(!(v&&v.isWebGLRenderTarget)){Be("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=X.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Me!==void 0&&(Te=Te[Me]),Te){x.bindFramebuffer(U.FRAMEBUFFER,Te);try{let Re=v.textures[me],Xe=Re.format,Qe=Re.type;v.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+me);let we=Xu(Re);if(we.__formatReadable===!1){Be("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(we.__typeReadable===!1){Be("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=v.width-H&&q>=0&&q<=v.height-V&&U.readPixels(L,q,H,V,de.convert(Xe),de.convert(Qe),ge)}finally{let Re=ne!==null?X.get(ne).__webglFramebuffer:null;x.bindFramebuffer(U.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(v,L,q,H,V,ge,Me,me=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=X.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Me!==void 0&&(Te=Te[Me]),Te)if(L>=0&&L<=v.width-H&&q>=0&&q<=v.height-V){x.bindFramebuffer(U.FRAMEBUFFER,Te);let Re=v.textures[me],Xe=Re.format,Qe=Re.type;v.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+me);let we=Xu(Re);if(we.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(we.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ut=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,ut),U.bufferData(U.PIXEL_PACK_BUFFER,ge.byteLength,U.STREAM_READ),U.readPixels(L,q,H,V,de.convert(Xe),de.convert(Qe),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);let zt=ne!==null?X.get(ne).__webglFramebuffer:null;x.bindFramebuffer(U.FRAMEBUFFER,zt);let Rt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await tf(U,Rt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,ut),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,ge),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(ut),U.deleteSync(Rt),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,L=null,q=0){let H=Math.pow(2,-q),V=Math.floor(v.image.width*H),ge=Math.floor(v.image.height*H),Me=L!==null?L.x:0,me=L!==null?L.y:0;$.setTexture2D(v,0),U.copyTexSubImage2D(U.TEXTURE_2D,q,0,0,Me,me,V,ge),x.unbindTexture()},this.copyTextureToTexture=function(v,L,q=null,H=null,V=0,ge=0){let Me,me,Te,Re,Xe,Qe,we,ut,zt,Rt=v.isCompressedTexture?v.mipmaps[ge]:v.image;if(q!==null)Me=q.max.x-q.min.x,me=q.max.y-q.min.y,Te=q.isBox3?q.max.z-q.min.z:1,Re=q.min.x,Xe=q.min.y,Qe=q.isBox3?q.min.z:0;else{let Ut=Math.pow(2,-V);Me=Math.floor(Rt.width*Ut),me=Math.floor(Rt.height*Ut),v.isDataArrayTexture?Te=Rt.depth:v.isData3DTexture?Te=Math.floor(Rt.depth*Ut):Te=1,Re=0,Xe=0,Qe=0}H!==null?(we=H.x,ut=H.y,zt=H.z):(we=0,ut=0,zt=0);let yt=de.convert(L.format),on=de.convert(L.type),ye;L.isData3DTexture?($.setTexture3D(L,0),ye=U.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?($.setTexture2DArray(L,0),ye=U.TEXTURE_2D_ARRAY):($.setTexture2D(L,0),ye=U.TEXTURE_2D),x.activeTexture(U.TEXTURE0),x.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,L.flipY),x.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),x.pixelStorei(U.UNPACK_ALIGNMENT,L.unpackAlignment);let dn=x.getParameter(U.UNPACK_ROW_LENGTH),rt=x.getParameter(U.UNPACK_IMAGE_HEIGHT),Dn=x.getParameter(U.UNPACK_SKIP_PIXELS),ii=x.getParameter(U.UNPACK_SKIP_ROWS),Xi=x.getParameter(U.UNPACK_SKIP_IMAGES);x.pixelStorei(U.UNPACK_ROW_LENGTH,Rt.width),x.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Rt.height),x.pixelStorei(U.UNPACK_SKIP_PIXELS,Re),x.pixelStorei(U.UNPACK_SKIP_ROWS,Xe),x.pixelStorei(U.UNPACK_SKIP_IMAGES,Qe);let zs=v.isDataArrayTexture||v.isData3DTexture,mt=L.isDataArrayTexture||L.isData3DTexture;if(v.isDepthTexture){let Ut=X.get(v),qi=X.get(L),Et=X.get(Ut.__renderTarget),Yi=X.get(qi.__renderTarget);x.bindFramebuffer(U.READ_FRAMEBUFFER,Et.__webglFramebuffer),x.bindFramebuffer(U.DRAW_FRAMEBUFFER,Yi.__webglFramebuffer);for(let ks=0;ks<Te;ks++)zs&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,X.get(v).__webglTexture,V,Qe+ks),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,X.get(L).__webglTexture,ge,zt+ks)),U.blitFramebuffer(Re,Xe,Me,me,we,ut,Me,me,U.DEPTH_BUFFER_BIT,U.NEAREST);x.bindFramebuffer(U.READ_FRAMEBUFFER,null),x.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(V!==0||v.isRenderTargetTexture||X.has(v)){let Ut=X.get(v),qi=X.get(L);x.bindFramebuffer(U.READ_FRAMEBUFFER,D),x.bindFramebuffer(U.DRAW_FRAMEBUFFER,W);for(let Et=0;Et<Te;Et++)zs?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ut.__webglTexture,V,Qe+Et):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Ut.__webglTexture,V),mt?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,qi.__webglTexture,ge,zt+Et):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,qi.__webglTexture,ge),V!==0?U.blitFramebuffer(Re,Xe,Me,me,we,ut,Me,me,U.COLOR_BUFFER_BIT,U.NEAREST):mt?U.copyTexSubImage3D(ye,ge,we,ut,zt+Et,Re,Xe,Me,me):U.copyTexSubImage2D(ye,ge,we,ut,Re,Xe,Me,me);x.bindFramebuffer(U.READ_FRAMEBUFFER,null),x.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else mt?v.isDataTexture||v.isData3DTexture?U.texSubImage3D(ye,ge,we,ut,zt,Me,me,Te,yt,on,Rt.data):L.isCompressedArrayTexture?U.compressedTexSubImage3D(ye,ge,we,ut,zt,Me,me,Te,yt,Rt.data):U.texSubImage3D(ye,ge,we,ut,zt,Me,me,Te,yt,on,Rt):v.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,ge,we,ut,Me,me,yt,on,Rt.data):v.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,ge,we,ut,Rt.width,Rt.height,yt,Rt.data):U.texSubImage2D(U.TEXTURE_2D,ge,we,ut,Me,me,yt,on,Rt);x.pixelStorei(U.UNPACK_ROW_LENGTH,dn),x.pixelStorei(U.UNPACK_IMAGE_HEIGHT,rt),x.pixelStorei(U.UNPACK_SKIP_PIXELS,Dn),x.pixelStorei(U.UNPACK_SKIP_ROWS,ii),x.pixelStorei(U.UNPACK_SKIP_IMAGES,Xi),ge===0&&L.generateMipmaps&&U.generateMipmap(ye),x.unbindTexture()},this.initRenderTarget=function(v){X.get(v).__webglFramebuffer===void 0&&$.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?$.setTextureCube(v,0):v.isData3DTexture?$.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?$.setTexture2DArray(v,0):$.setTexture2D(v,0),x.unbindTexture()},this.resetState=function(){Z=0,G=0,ne=null,x.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=nt._getDrawingBufferColorSpace(e),t.unpackColorSpace=nt._getUnpackColorSpace()}};var wr=[["missionSec","Tiempo de misi\xF3n (s)","Tiempos y vida",20,300,1,90,60,50,"Segundos reales para abordar en la Puerta 27."],["lifeSec","Vida de las c\xE1psulas (s)","Tiempos y vida",5,120,1,45,30,20,"Segundos reales hasta que explotan."],["lifeMax","Tope de vida (s)","Tiempos y vida",10,180,1,60,45,32,"M\xE1ximo al que se puede alargar la vida."],["pickupLife","Anti\xE1cido: +s de vida","Tiempos y vida",0,30,.5,8,7,7,"Segundos de vida que da cada \u{1F48A} del suelo."],["pickupTime","Reloj dorado: +s de misi\xF3n","Tiempos y vida",0,30,.5,6,5,4,"Segundos de misi\xF3n que da cada \u23F1."],["pillLife","Pastilla: +s de vida","Tiempos y vida",0,40,.5,12,10,8,"Segundos que da la pastilla (Q)."],["coffeeLife","Caf\xE9: +s de vida","Tiempos y vida",0,30,.5,5,4,3,""],["adrenLife","Adrenalina al zafarte: +s","Tiempos y vida",0,30,.5,4,4,3,"Vida que ganas al soltarte de un agarr\xF3n."],["hiddenDrain","Desgaste escondido (\xD7)","Tiempos y vida",.1,1,.05,.5,.55,.6,"Cu\xE1nto se desgastan las c\xE1psulas dentro de una taquilla."],["actionTime","Coste de tr\xE1mites (s)","Tiempos y vida",.1,2,.05,.5,.6,.7,'Segundos reales por cada "minuto" de las acciones de men\xFA.'],["walk","Velocidad al caminar (m/s)","Jugador",2,8,.1,4.2,4,4,""],["run","Velocidad al correr (m/s)","Jugador",4,12,.1,7.4,7.2,7.2,""],["crouchSpeed","Velocidad agachado (m/s)","Jugador",1,5,.1,2.2,2.1,2.1,""],["hp","Salud m\xE1xima","Jugador",25,400,5,150,100,100,""],["armedPct","Polic\xEDas armados (%)","Polic\xEDa",0,100,5,15,60,100,"Porcentaje de polic\xEDas con pistola."],["bulletDmg","Da\xF1o de cada bala","Polic\xEDa",5,100,1,20,25,34,""],["chaseHeat","Sospecha que activa la persecuci\xF3n","Polic\xEDa",5,100,1,45,30,20,"Menos = te persiguen antes."],["chaseSpeed","Velocidad de persecuci\xF3n (m/s)","Polic\xEDa",2,10,.1,4.4,5,5.8,""],["chaseSpeedHot","Persecuci\xF3n con sospecha > 70 (m/s)","Polic\xEDa",2,12,.1,5.2,5.8,6.6,""],["patrolMul","Velocidad de patrulla (\xD7)","Polic\xEDa",.5,2,.05,.9,1,1.15,""],["visionMul","Alcance de visi\xF3n (\xD7)","Polic\xEDa",.5,2,.05,.85,1,1.2,""],["shootWarn","Aviso antes de disparar (s)","Polic\xEDa",0,5,.1,1.8,1.2,.6,""],["fireMin","Cadencia de disparo m\xEDn (s)","Polic\xEDa",.2,4,.1,1.4,.9,.6,""],["fireMax","Cadencia de disparo m\xE1x (s)","Polic\xEDa",.2,5,.1,2,1.4,1,""],["hitBase","Precisi\xF3n base","Polic\xEDa",.1,1,.01,.5,.62,.75,"Probabilidad base de acertar (baja con la distancia)."],["shootRange","Alcance de disparo (m)","Polic\xEDa",8,40,1,20,24,28,""],["radioAll","Radio: alertan a todos","Polic\xEDa",0,1,1,0,1,1,"Al verte, todos los polic\xEDas reciben tu posici\xF3n."],["alertRadius","Radio de alerta sin radio (m)","Polic\xEDa",5,60,1,14,18,26,""],["flank","Flanqueo y cierre de rutas","Polic\xEDa",0,1,1,0,1,1,"Parte de los perseguidores te corta el camino por delante."],["droneOn","Dron con foco","Polic\xEDa",0,1,1,0,1,1,""],["droneSpeed","Velocidad del dron (m/s)","Polic\xEDa",2,14,.5,5,6,7.5,""],["dogRadius","Radio de olfato base (m)","Perros",4,40,1,12,17,22,""],["dogRadiusSmell","Radio extra por intensidad (m)","Perros",0,60,1,20,26,32,"Se suma seg\xFAn lo que huela tu mercanc\xEDa."],["dogRate","Velocidad de detecci\xF3n (\xD7)","Perros",.2,5,.05,1.1,1.6,2.2,"M\xE1s = te detectan antes."],["dogSpeed","Velocidad de persecuci\xF3n (m/s)","Perros",3,12,.1,6.8,7.6,8.4,""],["stunSec","Aturdimiento tras zafarte (s)","Perros",1,15,.5,6,5,4,""],["shiftSec","Cambio de pasillos cada (s, 0 = nunca)","Laberinto",0,120,1,30,18,10,"Los huecos de las paredes se mueven."],["shiftWarn","Aviso previo del cambio (s)","Laberinto",0,8,.5,3,2.5,1.5,""],["gapWidth","Ancho de los huecos (m)","Laberinto",6,22,1,14,12,10,""],["doorsClose","Puertas que se cierran a tu espalda","Laberinto",0,1,1,1,1,1,"Si te devuelves, esa entrada ya no sirve."],["laneClose","Bloqueo rotativo de carriles","Laberinto",0,1,1,1,1,1,"Cada cambio cierra una entrada del control."],["gps","Flecha de ruta (GPS)","Ayudas y objetos",0,1,1,1,1,0,""],["startSmoke","Bombas de humo iniciales","Ayudas y objetos",0,9,1,2,1,1,""],["startDecoy","Se\xF1uelos iniciales","Ayudas y objetos",0,9,1,2,1,1,""],["startEmp","Pulsos EMP iniciales","Ayudas y objetos",0,9,1,1,1,0,""],["startDogSpray","Sprays anti-perros iniciales","Ayudas y objetos",0,9,1,1,1,0,""],["itemDur","Duraci\xF3n de humo/spray/EMP (s)","Ayudas y objetos",2,30,1,8,7,6,""],["payoutMul","Multiplicador de ganancias","Econom\xEDa",.1,10,.1,1,1.5,2.2,"Dinero permanente que ganas por partida."]],Of=new Set(["radioAll","flank","droneOn","doorsClose","laneClose","gps"]),Fi=["novato","dificil","experto"],Oi={novato:"Novato",dificil:"Dif\xEDcil",experto:"Experto"},Kh={novato:"C\xE1psulas 45 s \xB7 misi\xF3n 90 s \xB7 pocos armados \xB7 pasillos cambian despacio.",dificil:"C\xE1psulas 30 s \xB7 misi\xF3n 60 s \xB7 mayor\xEDa armada \xB7 radio, flanqueo y dron.",experto:"C\xE1psulas 20 s \xB7 misi\xF3n 50 s \xB7 todos armados \xB7 sin flecha de ruta \xB7 cambios cada 10 s."},Bf="simulator.cfg.v1",zy=()=>{try{return JSON.parse(localStorage.getItem(Bf))||{}}catch{return{}}},$e=Object.assign({diff:"dificil",quality:"auto",pass:"admin"},zy());$e.over=Object.assign({novato:{},dificil:{},experto:{}},$e.over||{});try{let n=new URLSearchParams(location.search).get("q");["low","med","high"].includes(n)&&($e.quality=n)}catch{}var Yl=()=>{try{localStorage.setItem(Bf,JSON.stringify($e))}catch{}},ie={};function ky(n){let e=Fi.indexOf(n),t={};return wr.forEach(i=>t[i[0]]=i[6+e]),t}function hs(n){Fi.includes(n)||(n="dificil"),$e.diff=n;for(let e in ie)delete ie[e];Object.assign(ie,ky(n),$e.over[n]||{}),ie.diff=n,Yl()}hs($e.diff);var vi=(()=>{try{return matchMedia("(pointer:coarse)").matches||/Android|iPhone|iPad|Mobile/i.test(navigator.userAgent)}catch{return!1}})();function zf(){return $e.quality==="auto"?vi?"med":"high":$e.quality}var Jh=null,kf=n=>{Jh=n};function Hy(n,e,t){let i=typeof e=="boolean"?e?1:0:parseFloat(e);if(!isFinite(i))return null;i=Math.min(t[4],Math.max(t[3],i));let s=t[6+Fi.indexOf($e.diff)];return i===s?delete $e.over[$e.diff][n]:$e.over[$e.diff][n]=i,ie[n]=i,Yl(),i}function Hf(){let n=document.getElementById("admin");if(n.className="overlay on",sessionStorage.getItem("simAdmin")!=="1"){n.innerHTML=`<div class="adm"><h2>\u2699 ADMINISTRACI\xD3N</h2><p>Introduce la clave de administrador.</p>
      <input id="admPass" type="password" placeholder="Clave" autocomplete="off"><div id="admMsg" class="msg"></div>
      <div class="row"><button id="admOk">Entrar</button><button id="admX">Cancelar</button></div>
      <p class="dim">Nota: en una p\xE1gina p\xFAblica la clave solo evita abrir el panel por error; no es seguridad real.</p></div>`;let e=()=>{document.getElementById("admPass").value===$e.pass?(sessionStorage.setItem("simAdmin","1"),cs(n)):document.getElementById("admMsg").textContent="Clave incorrecta."};document.getElementById("admOk").onclick=e,document.getElementById("admX").onclick=()=>Vf(n),document.getElementById("admPass").addEventListener("keydown",t=>{t.key==="Enter"&&e(),t.stopPropagation()}),document.getElementById("admPass").focus();return}cs(n)}function Vf(n){n.className="overlay",n.innerHTML="",Jh&&Jh()}function cs(n){let e=[...new Set(wr.map(r=>r[2]))],t=Fi.indexOf($e.diff),i=r=>{let a=r[0],o=ie[a],l=r[6+t],c=o!==l,h=Of.has(a)?`<input type="checkbox" data-k="${a}" ${o?"checked":""}>`:`<input type="number" data-k="${a}" min="${r[3]}" max="${r[4]}" step="${r[5]}" value="${o}">`;return`<div class="prm ${c?"chg":""}" title="${r[9]||""}"><label>${r[1]}</label>${h}<span class="def">def: ${Of.has(a)?l?"s\xED":"no":l}</span><button class="rs" data-r="${a}" ${c?"":"disabled"}>\u21BA</button></div>`};n.innerHTML=`<div class="adm wide">
    <div class="admHead"><h2>\u2699 PANEL DE ADMINISTRACI\xD3N</h2><button id="admClose">\u2715 Cerrar</button></div>
    <div class="tabs">${Fi.map(r=>`<button data-d="${r}" class="${$e.diff===r?"on":""}">${Oi[r]}</button>`).join("")}</div>
    <p class="dim">${Kh[$e.diff]} Los cambios se aplican al instante y se guardan en este navegador.</p>
    <div class="admBody">${e.map(r=>`<details open><summary>${r}</summary>${wr.filter(a=>a[2]===r).map(i).join("")}</details>`).join("")}
      <details open><summary>Gr\xE1ficos y sistema</summary>
        <div class="prm"><label>Calidad gr\xE1fica</label><select id="admQ">${["auto","low","med","high"].map(r=>`<option value="${r}" ${$e.quality===r?"selected":""}>${{auto:"Autom\xE1tica",low:"Baja",med:"Media",high:"Alta"}[r]}</option>`).join("")}</select><span class="def">se aplica al recargar</span><span></span></div>
        <div class="prm"><label>Nueva clave de administrador</label><input id="admNewPass" type="text" placeholder="(sin cambios)"><button id="admSetPass">Guardar</button><span></span></div>
      </details></div>
    <div class="row"><button id="admExp">\u2B07 Exportar JSON</button><button id="admImp">\u2B06 Importar JSON</button><button id="admRst">Restablecer este modo</button><button id="admRstAll">Restablecer todo</button><button id="admReload">\u21BB Aplicar y recargar</button></div>
    <textarea id="admJson" placeholder="Pega aqu\xED un JSON exportado y pulsa Importar" style="display:none"></textarea></div>`,n.querySelectorAll("input[data-k]").forEach(r=>{r.addEventListener("keydown",a=>a.stopPropagation()),r.onchange=()=>{let a=wr.find(o=>o[0]===r.dataset.k);Hy(a[0],r.type==="checkbox"?r.checked:r.value,a),cs(n)}}),n.querySelectorAll("button[data-r]").forEach(r=>r.onclick=()=>{delete $e.over[$e.diff][r.dataset.r],hs($e.diff),cs(n)}),n.querySelectorAll(".tabs button").forEach(r=>r.onclick=()=>{hs(r.dataset.d),cs(n)}),document.getElementById("admClose").onclick=()=>Vf(n),document.getElementById("admQ").onchange=r=>{$e.quality=r.target.value,Yl()},document.getElementById("admSetPass").onclick=()=>{let r=document.getElementById("admNewPass").value.trim();r&&($e.pass=r,Yl(),document.getElementById("admNewPass").value="",document.getElementById("admNewPass").placeholder="Clave actualizada")},document.getElementById("admRst").onclick=()=>{$e.over[$e.diff]={},hs($e.diff),cs(n)},document.getElementById("admRstAll").onclick=()=>{confirm("\xBFRestablecer TODOS los modos a sus valores originales?")&&($e.over={novato:{},dificil:{},experto:{}},hs($e.diff),cs(n))},document.getElementById("admReload").onclick=()=>location.reload();let s=document.getElementById("admJson");document.getElementById("admExp").onclick=()=>{let r=JSON.stringify({diff:$e.diff,quality:$e.quality,over:$e.over},null,2);s.style.display="block",s.value=r;try{let a=document.createElement("a");a.href=URL.createObjectURL(new Blob([r],{type:"application/json"})),a.download="simula-tor-config.json",a.click()}catch{}},document.getElementById("admImp").onclick=()=>{if(s.style.display==="none"){s.style.display="block",s.value="",s.focus();return}try{let r=JSON.parse(s.value),a=new Set(wr.map(o=>o[0]));for(let o of Fi)if(!(!r.over||!r.over[o])){$e.over[o]={};for(let[l,c]of Object.entries(r.over[o])){let h=wr.find(d=>d[0]===l);h&&isFinite(c)&&($e.over[o][l]=Math.min(h[4],Math.max(h[3],+c)))}}["auto","low","med","high"].includes(r.quality)&&($e.quality=r.quality),hs(Fi.includes(r.diff)?r.diff:$e.diff),cs(n)}catch(r){s.value="JSON no v\xE1lido: "+r.message}},n.querySelector(".adm").addEventListener("keydown",r=>r.stopPropagation())}var Gf="simulator.meta.v1",Vy=()=>{try{return JSON.parse(localStorage.getItem(Gf))||{}}catch{return{}}},Dt=Object.assign({money:0,up:{},rec:{},runs:0,wins:0},Vy());Dt.up=Dt.up||{};Dt.rec=Dt.rec||{};var Ia=()=>{try{localStorage.setItem(Gf,JSON.stringify(Dt))}catch{}},jh=[{id:"life",name:"Est\xF3mago de acero",desc:"+2 s de vida de las c\xE1psulas por nivel.",max:5,cost:n=>200+150*n},{id:"hp",name:"Chaleco antibalas",desc:"+25 de salud por nivel.",max:4,cost:n=>250+200*n},{id:"bag",name:"Bolsa t\xE1ctica",desc:"+1 bomba de humo y +1 se\xF1uelo por nivel.",max:3,cost:n=>300+250*n},{id:"shoes",name:"Zapatillas ligeras",desc:"+0,25 m/s al caminar y correr por nivel.",max:4,cost:n=>200+175*n}],jn=n=>Dt.up[n]||0;function Wf(n){let e=jh.find(i=>i.id===n),t=jn(n);return!e||t>=e.max||Dt.money<e.cost(t)?!1:(Dt.money-=e.cost(t),Dt.up[n]=t+1,Ia(),!0)}function Xf(n){Dt.money+=Math.max(0,Math.round(n)),Ia()}function qf(n){return function(){n|=0,n=n+1831565813|0;let e=Math.imul(n^n>>>15,1|n);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function $l(){let n=new Date;return n.getFullYear()*1e4+(n.getMonth()+1)*100+n.getDate()}function Yf(n,e,t){let i=t?"daily-"+e.seed+"-"+n:n,s=Dt.rec[i]=Dt.rec[i]||[];return s.push(e),s.sort((r,a)=>a.score-r.score),Dt.rec[i]=s.slice(0,5),Ia(),Dt.rec[i][0]===e}var Qh=(n,e,t)=>Dt.rec[e?"daily-"+t+"-"+n:n]||[];var gn={x:0,z:0,mag:0},$f=[["Digit1","\u{1F32B}\uFE0F","smoke"],["Digit2","\u{1F4E3}","decoy"],["Digit3","\u26A1","emp"],["Digit4","\u{1F415}","dogspray"]];function Zf({keys:n,pressed:e,cam:t,canvas:i,isTouch:s,clamp:r}){s&&document.body.classList.add("touch");let a=new Map;i.addEventListener("pointerdown",_=>{if(a.set(_.pointerId,{x:_.clientX,y:_.clientY}),_.pointerType==="touch"&&document.body.classList.add("touch"),_.pointerType==="mouse"&&t.view==="fp"&&i.requestPointerLock&&document.pointerLockElement!==i)try{i.requestPointerLock()}catch{}}),addEventListener("mousemove",_=>{document.pointerLockElement===i&&(t.yaw-=_.movementX*.0022,t.fp=r(t.fp-_.movementY*.0018,-1.3,1.3))}),addEventListener("pointermove",_=>{if(document.pointerLockElement===i)return;let m=a.get(_.pointerId);if(!m)return;let p=_.clientX-m.x,b=_.clientY-m.y;m.x=_.clientX,m.y=_.clientY;let R=_.pointerType==="touch"?.0075:.006;t.yaw-=p*R,t.view==="fp"?t.fp=r(t.fp-b*(R*.65),-1.3,1.3):t.pitch=r(t.pitch+b*(R*.65),.15,1.15)});let o=_=>a.delete(_.pointerId);addEventListener("pointerup",o),addEventListener("pointercancel",o),i.addEventListener("wheel",_=>{t.dist=r(t.dist+_.deltaY*.01,5,16)});let l=document.getElementById("touch");l.innerHTML=`
    <div id="joy"><div id="knob"></div></div>
    <div id="tbtns">
      <button class="tb" data-k="Space" style="grid-area:a">\u2912<small>Saltar</small></button>
      <button class="tb" data-k="KeyE" id="tAct" style="grid-area:b">\u270B<small>Actuar</small></button>
      <button class="tb" data-k="KeyH" id="tHide" style="grid-area:c">\u{1F648}<small>Esconder</small></button>
      <button class="tb" data-k="KeyC" style="grid-area:d">\u21E9<small>Agachar</small></button>
      <button class="tb" data-k="KeyQ" style="grid-area:e">\u{1F48A}<small>Pastilla</small></button>
    </div>
    <div id="titems"><button class="tb it" data-k="KeyV" title="Vista">\u{1F441}</button>${$f.map(([_,m,p])=>`<button class="tb it" data-k="${_}" data-i="${p}">${m}<b id="ti-${p}">0</b></button>`).join("")}</div>`,l.querySelectorAll("button[data-k]").forEach(_=>{let m=_.dataset.k;_.addEventListener("pointerdown",b=>{b.preventDefault(),b.stopPropagation(),n[m]=!0,e[m]=!0,_.classList.add("down");try{_.setPointerCapture(b.pointerId)}catch{}});let p=()=>{n[m]=!1,_.classList.remove("down")};_.addEventListener("pointerup",p),_.addEventListener("pointercancel",p),_.addEventListener("pointerleave",p)});let c=document.getElementById("joy"),h=document.getElementById("knob"),d=null,u=56,f=_=>{let m=c.getBoundingClientRect(),p=m.left+m.width/2,b=m.top+m.height/2;u=m.width/2;let R=_.clientX-p,M=_.clientY-b,S=Math.hypot(R,M)||1,T=Math.min(1,S/u);gn.x=R/S*T,gn.z=M/S*T,gn.mag=T,h.style.transform=`translate(${R/S*T*u*.6}px,${M/S*T*u*.6}px)`};c.addEventListener("pointerdown",_=>{_.preventDefault(),_.stopPropagation(),d=_.pointerId;try{c.setPointerCapture(d)}catch{}f(_)}),c.addEventListener("pointermove",_=>{_.pointerId===d&&f(_)});let g=_=>{_.pointerId===d&&(d=null,gn.x=gn.z=gn.mag=0,h.style.transform="translate(0,0)")};c.addEventListener("pointerup",g),c.addEventListener("pointercancel",g),document.addEventListener("contextmenu",_=>_.preventDefault()),document.addEventListener("gesturestart",_=>_.preventDefault())}function eu(n,e){let t=(r,a)=>{let o=document.getElementById(r);o&&o.textContent!==String(a)&&(o.textContent=a)};n&&$f.forEach(([,,r])=>t("ti-"+r,n.inv[r]||0));let i=document.getElementById("tAct"),s=document.getElementById("tHide");if(i){i.classList.toggle("avail",!!e.act);let r=i.querySelector("small");r&&e.actLabel&&r.textContent!==e.actLabel&&(r.textContent=e.actLabel)}s&&s.classList.toggle("avail",!!e.hide)}var Zl=()=>/iPad|iPhone|iPod/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,tu=()=>{try{return matchMedia("(display-mode: fullscreen)").matches||matchMedia("(display-mode: standalone)").matches||navigator.standalone===!0}catch{return!1}};var Gy=()=>{let n=document.documentElement;return!!(n.requestFullscreen||n.webkitRequestFullscreen)};async function Jf(){try{if(document.fullscreenElement||document.webkitFullscreenElement)return await(document.exitFullscreen||document.webkitExitFullscreen).call(document),"off";if(!Gy())return Zl()?"ios":"none";let n=document.documentElement;await(n.requestFullscreen?n.requestFullscreen({navigationUI:"hide"}):n.webkitRequestFullscreen());try{screen.orientation&&screen.orientation.lock&&await screen.orientation.lock("landscape")}catch{}return"on"}catch{return Zl()?"ios":"none"}}async function Kf(){try{let n=document.documentElement;n.requestFullscreen&&!document.fullscreenElement&&await n.requestFullscreen({navigationUI:"hide"}),screen.orientation&&screen.orientation.lock&&await screen.orientation.lock("landscape")}catch{}}var Ue=null,ip=null,Cs=null,Kl=null,Ql=null,Wy=null,ec=null,Ar=!1,Bi="off",sp="off",iu=0,Rs=0,La={},rp=.5,tn={muted:!1,intensity:0,mood:"off"},Pt=n=>440*Math.pow(2,(n-69)/12);function ap(n,e){ip=n,tn.muted=!!e}function Xy(){if(Ue)return!0;try{Ue=ip()}catch{return!1}if(!Ue)return!1;Cs=Ue.createGain(),Cs.gain.value=tn.muted?0:rp;let n=Ue.createDynamicsCompressor();n.threshold.value=-16,n.ratio.value=6,Cs.connect(n),n.connect(Ue.destination);let e=Math.floor(Ue.sampleRate*2.4),t=Ue.createBuffer(2,e,Ue.sampleRate);for(let r=0;r<2;r++){let a=t.getChannelData(r);for(let o=0;o<e;o++)a[o]=(Math.random()*2-1)*Math.pow(1-o/e,2.4)}Kl=Ue.createConvolver(),Kl.buffer=t;let i=Ue.createGain();i.gain.value=.55,Kl.connect(i),i.connect(Cs),Ql=Ue.createBuffer(1,Ue.sampleRate,Ue.sampleRate);let s=Ql.getChannelData(0);for(let r=0;r<s.length;r++)s[r]=Math.random()*2-1;return ec=op(1),Wy=setInterval(Ky,40),!0}function op(n=0){let e=Ue.createGain(),t=Ue.createGain();return e.gain.value=n,t.gain.value=n,e.connect(Cs),t.connect(Kl),{dry:e,wet:t}}var lp=n=>La[n]||(La[n]=op(0));function cp(){if(Ar){Ue&&Ue.state==="suspended"&&Ue.resume();return}if(Ar=!0,!Xy()){Ar=!1;return}Ue.state==="suspended"&&Ue.resume();let n=sp;Bi="off",tc(n)}function hp(n){tn.muted=!!n,Cs&&Cs.gain.setTargetAtTime(n?0:rp,Ue.currentTime,.05)}function tc(n){if(sp=n,!Ar||!Ue||n===Bi)return;let e=Ue.currentTime;if(La[Bi]&&(La[Bi].dry.gain.setTargetAtTime(0,e,.5),La[Bi].wet.gain.setTargetAtTime(0,e,.5)),n!=="off"){let t=lp(n);t.dry.gain.setTargetAtTime(1,e,.3),t.wet.gain.setTargetAtTime(1,e,.3)}Bi=n,tn.mood=n,iu=0,Rs=Math.max(Rs,e+.08)}function vt(n,e,t,i,s={}){let{type:r="sine",vol:a=.2,a:o=.01,r:l=.1,detune:c=0,lp:h=0,wet:d=0}=s,u=Ue.createOscillator(),f=Ue.createGain();u.type=r,u.frequency.setValueAtTime(e,t),u.detune.value=c,f.gain.setValueAtTime(0,t),f.gain.linearRampToValueAtTime(a,t+o),f.gain.setValueAtTime(a,Math.max(t+o,t+i-l)),f.gain.linearRampToValueAtTime(0,t+i);let g=u;if(h){let _=Ue.createBiquadFilter();_.type="lowpass",_.frequency.value=h,u.connect(_),g=_}if(g.connect(f),f.connect(n.dry),d){let _=Ue.createGain();_.gain.value=d,f.connect(_),_.connect(n.wet)}u.start(t),u.stop(t+i+.05)}function Rr(n,e,t,i,s,r,a=1){let o=Ue.createBufferSource();o.buffer=Ql;let l=Ue.createBiquadFilter();l.type=s,l.frequency.value=r,l.Q.value=a;let c=Ue.createGain();c.gain.setValueAtTime(i,e),c.gain.exponentialRampToValueAtTime(1e-4,e+t),o.connect(l),l.connect(c),c.connect(n.dry),o.start(e,Math.random()*.5),o.stop(e+t+.02)}function jl(n,e,t){let i=Ue.createOscillator(),s=Ue.createGain();i.frequency.setValueAtTime(150,e),i.frequency.exponentialRampToValueAtTime(42,e+.13),s.gain.setValueAtTime(t,e),s.gain.exponentialRampToValueAtTime(1e-4,e+.28),i.connect(s),s.connect(n.dry),i.start(e),i.stop(e+.3)}function su(n,e,t){let i=Ue.createOscillator(),s=Ue.createGain();i.frequency.setValueAtTime(78,e),i.frequency.exponentialRampToValueAtTime(34,e+.16),s.gain.setValueAtTime(t,e),s.gain.exponentialRampToValueAtTime(1e-4,e+.26),i.connect(s),s.connect(n.dry),i.start(e),i.stop(e+.28)}var Jl=(n,e,t,i=.04)=>Rr(n,e,i,t,"highpass",7500),jf=(n,e,t)=>{Rr(n,e,.16,t,"bandpass",1900,.8),vt(n,190,e,.1,{type:"triangle",vol:t*.7,a:.002,r:.08})},qy=(n,e,t)=>Rr(n,e,.02,t,"highpass",3200),Qf=(n,e,t,i,s)=>vt(n,e,t,i,{type:"sawtooth",vol:s,a:.005,r:.05,lp:520}),ep=[[48,52,55,59],[45,48,52,55],[41,45,48,52],[43,47,50,52]],tp=[72,74,76,79,81,84],Yy=[{r:33,a:[57,60,64,69]},{r:29,a:[53,57,60,65]},{r:36,a:[55,60,64,67]},{r:31,a:[55,59,62,67]}],$y=[0,1,2,3,2,1,3,2,0,1,2,3,2,1,3,1],Zy=[{r:36,c:[60,64,67,72]},{r:43,c:[59,62,67,71]},{r:45,c:[60,64,69,72]},{r:41,c:[60,65,69,72]}],nu=[[45,52,57,60],[41,48,53,57],[43,50,55,59],[40,47,52,56]],Jy=[{r:36,c:[60,64,67,72]},{r:41,c:[60,65,69,72]},{r:43,c:[62,67,71,74]},{r:33,c:[60,64,69,72]}],np={calm:{sd:()=>60/72/4,step(n,e,t,i){let s=Math.floor(n/16)%4,r=n%16;r===0&&(ep[s].forEach((a,o)=>vt(t,Pt(a),e,i*18,{type:o%2?"triangle":"sine",vol:.05,a:1.1,r:1.8,wet:.6,detune:(o-1.5)*4})),vt(t,Pt(ep[s][0]-12),e,i*15,{vol:.1,a:.4,r:1.2})),[2,6,10,14].includes(r)&&Math.random()<.3&&vt(t,Pt(tp[Math.random()*tp.length|0]),e,1.7,{vol:.06,a:.005,r:1.4,wet:.9})}},suspense:{sd:()=>60/(52+tn.intensity*46)/4,step(n,e,t,i){let s=n%16,r=tn.intensity;if(s===0&&(vt(t,55,e,i*17,{type:"sawtooth",vol:.07,a:1.8,r:1.5,lp:160+r*240}),vt(t,110.5,e,i*17,{vol:.06,a:1.4,r:1.5})),s%4===0&&su(t,e,.32+r*.22),s%4===2&&su(t,e,.15+r*.12),s%2===0&&qy(t,e,.03+r*.03),s===8&&Math.random()<.55){let a=[76,64,71][Math.random()*3|0];vt(t,Pt(a),e,i*14,{vol:.028,a:1.5,r:2,wet:.9}),vt(t,Pt(a+1),e,i*14,{vol:.022,a:1.7,r:2,wet:.9})}s===4&&r>.5&&Math.random()<.5&&vt(t,Pt(57+(Math.random()*3|0)),e,i*6,{type:"sawtooth",vol:.025,a:.8,r:1,lp:900,wet:.5})}},adrenaline:{sd:()=>60/152/4,step(n,e,t,i){let s=Yy[Math.floor(n/16)%4],r=n%16;r%4===0&&jl(t,e,.5),(r===4||r===12)&&jf(t,e,.2),r%2===0&&Jl(t,e,.05),r%4===2&&Jl(t,e,.06,.1),r%2===0&&Qf(t,Pt(s.r+(r%8===6?12:0)),e,i*1.8,.22),vt(t,Pt(s.a[$y[r]]),e,i*1.6,{type:"sawtooth",vol:.03,a:.004,r:.05,lp:2400,wet:.25})}},win:{sd:()=>60/104/4,step(n,e,t,i){let s=Zy[Math.floor(n/16)%4],r=n%16;r===0&&(s.c.forEach((a,o)=>vt(t,Pt(a-12),e,i*17,{type:"triangle",vol:.05,a:.5,r:1.2,wet:.5,detune:(o-1.5)*5})),vt(t,Pt(s.r-12),e,i*15,{vol:.15,a:.1,r:.6})),(r===0||r===8)&&jl(t,e,.2),r%4===2&&Jl(t,e,.03),r%2===0&&vt(t,Pt(s.c[[0,1,2,3,2,1,3,2][r/2%8]]+12),e,i*3,{type:"triangle",vol:.05,a:.005,r:.4,wet:.5})}},sad:{sd:()=>60/52/4,step(n,e,t,i){let s=Math.floor(n/16)%4,r=n%16;r===0&&(nu[s].forEach((a,o)=>vt(t,Pt(a),e,i*17,{type:"sawtooth",vol:.025,a:1.6,r:2,lp:520,wet:.8,detune:(o-1.5)*6})),vt(t,Pt(nu[s][0]-12),e,i*16,{vol:.1,a:.6,r:1.5})),(r===6||r===12)&&Math.random()<.6&&vt(t,Pt(nu[s][Math.random()*4|0]+12),e,2,{vol:.045,a:.01,r:1.8,wet:1})}},epic:{sd:()=>60/96/4,step(n,e,t,i){let s=Jy[Math.floor(n/16)%4],r=n%16,a=tn.intensity;r===0&&(s.c.forEach((o,l)=>vt(t,Pt(o-12),e,i*17,{type:"sawtooth",vol:.03+a*.03,a:.8,r:1,lp:600+a*1600,wet:.4,detune:(l-1.5)*7})),Qf(t,Pt(s.r-12),e,i*16,.16)),r%4===0&&jl(t,e,.12+a*.38),a>.35&&r%2===0&&Jl(t,e,.03+a*.03),a>.55&&(r===4||r===12)&&jf(t,e,.14),a>.2&&r%2===0&&vt(t,Pt(s.c[[0,1,2,3,2,1,3,2][r/2%8]]+12),e,i*2.5,{type:"sawtooth",vol:.02+a*.025,a:.005,r:.1,lp:2600,wet:.4})}}};function Ky(){if(!Ue||Ue.state!=="running"||!np[Bi])return;let n=np[Bi],e=n.sd();for(Rs<Ue.currentTime-.5&&(Rs=Ue.currentTime+.05);Rs<Ue.currentTime+.3;)n.step(iu,Rs,lp(Bi),e),Rs+=e,iu++}function Bn(n,e=0){if(!Ar||!Ue||Ue.state!=="running")return;let t=Ue.currentTime+.03,i=ec;if(n==="fanfare")[[60,0,.3],[64,.13,.3],[67,.26,.3],[72,.4,.35],[76,.68,1.1]].forEach(([s,r,a])=>vt(i,Pt(s),t+r,a,{type:"sawtooth",vol:.075,a:.01,r:.15,lp:3200,wet:.5})),[72,76,79,84].forEach((s,r)=>vt(i,Pt(s),t+.68,2.4,{type:"triangle",vol:.05,a:.02,r:1.6,wet:1,detune:(r-1.5)*4})),jl(i,t+.68,.4),Rr(i,t+.68,.8,.08,"highpass",5e3);else if(n==="chime")vt(i,Pt(84),t,.55,{vol:.1,a:.005,r:.5,wet:.8}),vt(i,Pt(91),t+.13,.8,{vol:.1,a:.005,r:.7,wet:.9});else if(n==="ding")vt(i,Pt(91),t,.7,{vol:.1,a:.005,r:.6,wet:.7}),vt(i,Pt(86),t+.28,.9,{vol:.1,a:.005,r:.8,wet:.7});else if(n==="lose")[57,53,50,45].forEach((s,r)=>vt(i,Pt(s),t+r*.38,1,{type:"sawtooth",vol:.07,a:.02,r:.7,lp:800,wet:.9}));else if(n==="coin")vt(i,Pt(83+e),t,.13,{type:"square",vol:.045,a:.002,r:.1});else if(n==="stamp")su(i,t,.5),Rr(i,t,.12,.15,"lowpass",1200);else if(n==="clap")for(let s=0;s<70;s++)Rr(i,t+Math.random()*e,.05+Math.random()*.05,.025+Math.random()*.02,"bandpass",1800+Math.random()*1800,1.2)}function up(n,e=.5){if(!Ar||!Ue||Ue.state!=="running")return;let t=Ue.currentTime+.02,i=Ue.createBufferSource();i.buffer=Ql,i.loop=!0;let s=Ue.createBiquadFilter();s.type="lowpass",s.frequency.setValueAtTime(140,t),s.frequency.exponentialRampToValueAtTime(2400,t+n*.8);let r=Ue.createGain();r.gain.setValueAtTime(0,t),r.gain.linearRampToValueAtTime(e,t+n*.75),r.gain.linearRampToValueAtTime(0,t+n),i.connect(s),s.connect(r),r.connect(ec.dry),i.start(t),i.stop(t+n+.1);let a=Ue.createOscillator(),o=Ue.createGain();a.type="sawtooth",a.frequency.setValueAtTime(38,t),a.frequency.linearRampToValueAtTime(95,t+n*.8),o.gain.setValueAtTime(0,t),o.gain.linearRampToValueAtTime(e*.35,t+n*.7),o.gain.linearRampToValueAtTime(0,t+n);let l=Ue.createBiquadFilter();l.type="lowpass",l.frequency.value=260,a.connect(l),l.connect(o),o.connect(ec.dry),a.start(t),a.stop(t+n+.1)}var ae=n=>document.getElementById(n),At=(n,e)=>n+Math.random()*(e-n),sn=(n,e,t)=>Math.max(e,Math.min(t,n)),wp=n=>{for(;n>Math.PI;)n-=2*Math.PI;for(;n<-Math.PI;)n+=2*Math.PI;return n},Ln=(n,e,t)=>n+wp(e-n)*t,Ua=n=>new Promise(e=>setTimeout(e,n)),Or=()=>ie.lifeSec+jn("life")*2,Ap=()=>ie.lifeMax+jn("life")*2,Rp={coca:{id:"coca",name:"Coca\xEDna pura",weight:1,smell:.5,profit:9e3,acid:1.3,desc:"Ligera, valiosa, olor moderado. El l\xE1tex sufre con los jugos g\xE1stricos."},hero:{id:"hero",name:"Hero\xEDna",weight:1,smell:.35,profit:7e3,acid:1,desc:"Poco olor y c\xE1psulas resistentes. Paga menos, pero es discreta."},mari:{id:"mari",name:"Marihuana prensada",weight:3,smell:.9,profit:2500,acid:.8,desc:"Pesa, huele a kil\xF3metros y paga poco. Los perros te esperan con ilusi\xF3n."}},Cp={capsules:{id:"capsules",name:"C\xE1psulas ingeridas",stomach:1.3,desc:"Los perros casi no huelen, pero el esc\xE1ner te ve por dentro y el est\xF3mago es un reloj de arena."},tape:{id:"tape",name:"Pegado al cuerpo",stomach:.6,desc:"Los perros lo huelen y el esc\xE1ner lo detecta a medias."},bag:{id:"bag",name:"Doble fondo en la maleta",stomach:.6,desc:"Tu cuerpo va limpio, pero la maleta te delata ante rayos X y perros."}},Pp={exec:{id:"exec",name:"Ejecutivo de negocios",cash:400,heat:5,quiz:-.06,lie:.15,nerv:1,lost:!1,look:{shirt:1843760,pants:1843760,hair:2103828,tie:!0},desc:"Traje y malet\xEDn: te creen m\xE1s. Entras con efectivo."},tourist:{id:"tourist",name:"Turista despistado",cash:250,heat:15,quiz:.02,lie:.05,nerv:1,lost:!0,look:{shirt:16742973,pants:14931098,hair:7031339,hat:15786144},desc:"Camisa hawaiana y mapa al rev\xE9s. Nadie sospecha de un in\xFAtil."},student:{id:"student",name:"Estudiante",cash:120,heat:10,quiz:.06,lie:-.05,nerv:.5,lost:!1,look:{shirt:3890139,pants:3094084,hair:1380621,pack:!0},desc:'Poco dinero y mucha sospecha, pero tus nervios pasan por "estr\xE9s".'}},jy=[{id:"pills",name:"Pastilla antimotilidad",cost:50,desc:"Suma segundos de vida y frena el desgaste unos segundos. (Q para tomarla)"},{id:"perfume",name:"Spray anti-olor",cost:40,desc:"Los perros huelen la mitad. (R para usarlo)"},{id:"clothes",name:"Ropa de repuesto",cost:70,desc:"Cambia tu apariencia en un ba\xF1o y baja la sospecha."},{id:"contact",name:"Contacto de c\xF3mplice",cost:120,desc:'Alguien en los ba\xF1os cambia tu maleta por otra "m\xE1s amable".'}],xu={body:{title:"Esc\xE1ner corporal",hint:"Mant\xE9n pulsado (rat\xF3n o ESPACIO) y NO respires hasta que termine el barrido."},dog:{title:"Perro K9",hint:"Sincroniza tu pulso: toca (clic o ESPACIO) cuando el anillo llegue al borde. 5 latidos."},quiz:{title:"Guardia",hint:"Seca las gotas de sudor antes de que se note. 5 gotas."},cramp:{title:"\xA1Retortij\xF3n!",hint:"\xA1Aprieta! Toca r\xE1pido (clic o ESPACIO) 12 veces para contener las c\xE1psulas."},struggle:{title:"\xA1Te agarraron!",hint:"\xA1ZAFATE! Toca como loco (clic o ESPACIO) antes de que se acabe el tiempo."}},ru={body:{pass:'El agente del esc\xE1ner mira tu silueta con aburrimiento profesional. "Siguiente."',fail:"La pantalla muestra tu abdomen como un collar de perlas. El operador sonr\xEDe y pulsa un bot\xF3n rojo."},bag:{pass:"Tu equipaje pasa por rayos X entre un osito de peluche y un ukelele. Nada raro. Eso crees t\xFA.",fail:'En el monitor, tu maleta tiene un doble fondo con un contorno que ning\xFAn ukelele tiene. "\xBFMe abre esto, por favor?"'},quiz:{pass:"El guardia te mira de arriba abajo... y decide que no vale la pena molestarse."}},E=null,I={mode:"title",busy:!1,t:0,dlgKey:null,paused:!1,daily:!1,seed:1};function Ip(){return{time:ie.missionSec,life:Or(),hp:ie.hp+jn("hp")*25,playT:0,picked:0,empT:0,radioOff:0,dogOff:0,flankPt:null,heat:0,integrity:100,pillLeft:0,cash:0,lastBeep:99,hitFlash:0,inv:{pills:0,perfume:0,perfumeOn:!1,clothes:0,contact:0,smoke:ie.startSmoke+jn("bag"),decoy:ie.startDecoy+jn("bag"),emp:ie.startEmp,dogspray:ie.startDogSpray},cargo:null,method:null,profile:null,bagSwapped:!1,disguised:0,camsOff:!1,checkedIn:!1,passed:!1,done:{},sniff:0,crampT:At(8,14),over:!1,lastKnown:null,lastKnownDog:null,invuln:0,compromised:!1}}var dp=null,fp=!1,_c=()=>dp||(dp=new(window.AudioContext||window.webkitAudioContext));function Ke(n=880,e=.1,t="square",i=.05){try{let s=_c(),r=s.createOscillator(),a=s.createGain();r.type=t,r.frequency.value=n,a.gain.value=i,a.gain.exponentialRampToValueAtTime(1e-4,s.currentTime+e),r.connect(a),a.connect(s.destination),r.start(),r.stop(s.currentTime+e)}catch{}}function Vi(n=1,e=.3,t=1200){try{let i=_c(),s=i.sampleRate*n,r=i.createBuffer(1,s,i.sampleRate),a=r.getChannelData(0);for(let h=0;h<s;h++)a[h]=(Math.random()*2-1)*(1-h/s);let o=i.createBufferSource(),l=i.createGain(),c=i.createBiquadFilter();c.type="lowpass",c.frequency.value=t,l.gain.value=e,o.buffer=r,o.connect(c),c.connect(l),l.connect(i.destination),o.start()}catch{}}function Qy(){if(!fp){fp=!0;try{let n=_c(),e=n.sampleRate*2,t=n.createBuffer(1,e,n.sampleRate),i=t.getChannelData(0);for(let o=0;o<e;o++)i[o]=Math.random()*2-1;let s=n.createBufferSource(),r=n.createBiquadFilter(),a=n.createGain();s.buffer=t,s.loop=!0,r.type="lowpass",r.frequency.value=380,a.gain.value=.05,s.connect(r),r.connect(a),a.connect(n.destination),s.start()}catch{}}}var Wi=zf(),kn=new Wl({antialias:Wi==="high",powerPreference:"high-performance"});kn.setPixelRatio(Math.min(devicePixelRatio||1,{low:1,med:1.5,high:2}[Wi]));kn.setSize(innerWidth,innerHeight);kn.shadowMap.enabled=Wi!=="low";kn.shadowMap.type=Ss;ae("game").appendChild(kn.domElement);var et=new sa,Jt=new hn(62,innerWidth/innerHeight,.1,400);{let n=document.createElement("canvas");n.width=2,n.height=256;let e=n.getContext("2d"),t=e.createLinearGradient(0,0,0,256);t.addColorStop(0,"#1d3a6b"),t.addColorStop(.55,"#d98a5f"),t.addColorStop(1,"#f4c27a"),e.fillStyle=t,e.fillRect(0,0,2,256);let i=new Un(n);i.colorSpace=Qt,et.background=i,et.fog=new ia(13605494,90,260)}et.add(new xa(14674687,5917252,1.25));var In=new ya(16767400,2.3);In.position.set(-40,70,50);In.castShadow=!0;In.shadow.mapSize.set(Wi==="high"?2048:1024,Wi==="high"?2048:1024);In.castShadow=Wi!=="low";Object.assign(In.shadow.camera,{left:-70,right:70,top:110,bottom:-110,near:1,far:220});In.shadow.bias=-5e-4;et.add(In,In.target);addEventListener("resize",()=>{kn.setSize(innerWidth,innerHeight),Jt.aspect=innerWidth/innerHeight,Jt.updateProjectionMatrix()});var ev={},yn=(n,e)=>e?new Xt({color:n,roughness:.85,...e}):ev[n]||=new Xt({color:n,roughness:.85}),Si=[],yc=[],vc=[],bu=[],Tn=[],Br=[],Su=[],Lp=[],_u=[],Mc=[],Eu=[];function $t(n,e,t,i,s,r,a={}){let o=new Le(new ot(t-n,s,i-e),a.mat?yn(r,a.mat):yn(r));if(o.position.set((n+t)/2,(a.y0||0)+s/2,(e+i)/2),o.castShadow=a.shadow!==!1,o.receiveShadow=!0,et.add(o),a.coll!==!1){let l={x0:n,x1:t,z0:e,z1:i,h:s};Si.push(l),Eu.push(l),a.los!==!1&&yc.push(l)}return o}function _t(n,e,t,i,s,r,a=0,o){return $t(n,e,t,i,s,r,{coll:!1,y0:a,mat:o})}function Zt(n,e,t,i,s=9,r="#ffffff",a="rgba(10,14,20,.85)"){let o=document.createElement("canvas");o.width=512,o.height=128;let l=o.getContext("2d");l.fillStyle=a,l.fillRect(0,0,512,128),l.strokeStyle=r,l.lineWidth=6,l.strokeRect(3,3,506,122),l.fillStyle=r,l.font='bold 52px "Segoe UI", Arial',l.textAlign="center",l.textBaseline="middle",l.fillText(n,256,68);let c=new Un(o);c.colorSpace=Qt;let h=new di(new $n({map:c,transparent:!0}));return h.scale.set(s*.6,s*.15,1),h.position.set(e,t,i),et.add(h),h}function tv(n,e,t,i,s,r=0){let a=0,o=1,l=t-n,c=i-e;for(let[h,d,u,f]of[[n,l,s.x0-r,s.x1+r],[e,c,s.z0-r,s.z1+r]])if(Math.abs(d)<1e-9){if(h<u||h>f)return!1}else{let g=(u-h)/d,_=(f-h)/d;if(g>_&&([g,_]=[_,g]),a=Math.max(a,g),o=Math.min(o,_),a>o)return!1}return!0}var bc=(n,e,t,i,s,r=0)=>!s.some(a=>tv(n,e,t,i,a,r));function zr(n){let e=new Ft,t=b=>new Xt({color:b,roughness:.8}),i=t(n.shirt),s=t(n.pants),r=t(n.skin??14726282),a=t(n.hair??2236962),o=(b,R,M,S,T,C,y,w=e)=>{let P=new Le(new ot(b,R,M),S);return P.position.set(T,C,y),P.castShadow=!0,w.add(P),P},l=o(.52,.66,.28,i,0,1.13,0),c=o(.3,.3,.3,r,0,1.64,0);o(.32,.1,.32,a,0,1.8,0);let h=o(.4,.09,.4,t(n.hat??0),0,1.86,0);h.visible=!!n.hat;let d=o(.28,.06,.04,t(328965),0,1.66,.16);d.visible=!1;let u=b=>{let R=new Ft;return R.position.set(b,.8,0),e.add(R),o(.19,.8,.21,s,0,-.4,0,R),o(.2,.1,.27,t(1381653),0,-.78,.03,R),R},f=b=>{let R=new Ft;return R.position.set(b,1.44,0),e.add(R),o(.15,.6,.17,i,0,-.3,0,R),o(.14,.12,.15,r,0,-.64,0,R),R},g=u(-.13),_=u(.13),m=f(-.35),p=f(.35);if(n.tie&&o(.08,.4,.02,t(11148830),0,1.2,.15),n.vest&&o(.54,.3,.3,t(15263976),0,1.25,0),n.capCol&&(o(.34,.1,.34,t(n.capCol),0,1.84,0),o(.3,.03,.16,t(n.capCol),0,1.78,.24)),n.pack&&o(.4,.5,.18,t(12597547),0,1.15,-.23),n.bag){let b=o(.1,.42,.5,t(3813162),0,-.72,.1,p);o(.14,.05,.3,t(9075306),0,-.5,.1,p),b.name="bag"}return e.userData={legL:g,legR:_,armL:m,armR:p,torso:l,head:c,shirtM:i,pantsM:s,hat:h,shades:d,ph:Math.random()*6,o:n},e}function ti(n,e,t,i){let s=n.userData;s.ph+=e*t*2.1;let r=sn(e/4,0,1.4)*.85,a=Math.sin(s.ph)*r;s.legL.rotation.x=a,s.legR.rotation.x=-a,s.armL.rotation.x=-a*.9,s.armR.rotation.x=s.o.bag?-.15:a*.9;let o=i?.18:e>.2?.06:0;return s.torso.rotation.x+=(o-s.torso.rotation.x)*Math.min(1,t*8),s.torso.position.y=1.13+Math.abs(Math.sin(s.ph))*.03*(e>.2?1:0)+(e<.2?Math.sin(I.t*2+s.ph)*.004:0),s.head.position.y=s.torso.position.y+.51,Math.floor(s.ph/Math.PI)}function nv(){let n=new Ft,e=l=>new Xt({color:l,roughness:.9}),t=e(9067051),i=e(2825232),s=(l,c,h,d,u,f,g,_=n)=>{let m=new Le(new ot(l,c,h),d);return m.position.set(u,f,g),m.castShadow=!0,_.add(m),m};s(.34,.34,.85,t,0,.55,0);let r=new Ft;r.position.set(0,.72,.5),n.add(r),s(.24,.24,.26,t,0,0,0,r),s(.14,.12,.18,i,0,-.04,.2,r),s(.06,.12,.05,i,-.09,.16,-.04,r),s(.06,.12,.05,i,.09,.16,-.04,r);let a=new Ft;a.position.set(0,.66,-.42),n.add(a),s(.06,.06,.34,t,0,.08,-.16,a);let o=[[-.12,.38],[.12,.38],[-.12,-.34],[.12,-.34]].map(([l,c])=>{let h=new Ft;return h.position.set(l,.4,c),n.add(h),s(.09,.4,.09,t,0,-.2,0,h),h});return n.userData={head:r,tail:a,legs:o,ph:0},n}function pp(n,e,t,i){let s=n.userData;s.ph+=e*t*3,s.legs.forEach((r,a)=>r.rotation.x=Math.sin(s.ph+(a%2?Math.PI:0)+(a>1?Math.PI/2:0))*.7*Math.min(1,e/2)),s.tail.rotation.y=Math.sin(I.t*(i?22:7))*(i?.9:.4),s.head.rotation.x=i?.35:Math.sin(I.t*1.5)*.06}function iv(n,e,t){let i=document.createElement("canvas");i.width=i.height=128;let s=i.getContext("2d");s.fillStyle=n,s.fillRect(0,0,128,128),s.fillStyle=e,s.fillRect(0,0,64,64),s.fillRect(64,64,64,64),s.strokeStyle="#0003",s.strokeRect(0,0,128,128);let r=new Un(i);return r.wrapS=r.wrapT=bs,r.repeat.set(t[0],t[1]),r.colorSpace=Qt,r}function nc(n,e,t,i,s,r){let a=new Le(new mi(t-n,i-e),r);return a.rotation.x=-Math.PI/2,a.position.set((n+t)/2,s,(e+i)/2),a.receiveShadow=!0,et.add(a),a}var ds=null,Dp=[],Ir=null,lc=[];function sv(){nc(-200,-200,200,80,-.02,yn(3885615)),nc(-70,28,70,40,0,yn(10197653)),nc(-200,40,200,56,0,yn(2895152));for(let i=-190;i<190;i+=8)_t(i,47.8,i+4,48.2,.02,15260026,0);nc(-40,-70,40,28,.01,new Xt({map:iv("#cfd3d8","#b9bec6",[10,24]),roughness:.5}));let n=15196630;$t(-41,-71,-3,-70,6,7321302,{mat:{transparent:!0,opacity:.4,roughness:.1},los:!1,shadow:!1}),$t(3,-71,41,-70,6,7321302,{mat:{transparent:!0,opacity:.4,roughness:.1},los:!1,shadow:!1}),$t(-41,-71,-40,29,6,n),$t(40,-71,41,29,6,n),$t(-41,28,-5,29,6,n),$t(5,28,41,29,6,n),$t(-5,28,5,29,1,2236962,{coll:!1,y0:5}),Zt("SALIDAS \xB7 DEPARTURES",0,6.6,29.6,12,"#37f0ff"),_t(-5,28,-4.8,29,5,10475246,0,{transparent:!0,opacity:.35}),_t(4.8,28,5,29,5,10475246,0,{transparent:!0,opacity:.35});let e=[[-40,-38],[-30,-26],[-14,-8],[8,14],[26,40]];e.forEach(([i,s])=>$t(i,-28,s,0,4.6,9081760)),e.forEach(([i,s])=>_t(i,-28,s,0,.3,3357253,4.6)),Zt("MANTENIMIENTO \xB7 SOLO PERSONAL",-34,6,1,8.5,"#ffb020"),Zt("CARRIL A \xB7 ESC\xC1NER",-20,6,1,8.5,"#3ddc84"),Zt("CARRIL B \xB7 K9",0,6,1,8.5,"#ff7a1a"),Zt("CARRIL C \xB7 ENTREVISTA",20,6,1,8.5,"#37f0ff"),Zt("SEGURIDAD",0,8,1,14,"#ffffff"),$t(-23.2,-11,-22.6,-10,3,2963008),$t(-17.4,-11,-16.8,-10,3,2963008),_t(-23.2,-11,-16.8,-10,.4,2963008,3),_t(-22.6,-10.7,-17.4,-10.3,.05,4054148,2.8,{emissive:2072666,emissiveIntensity:.8});let t=_t(-22.6,-10.6,-17.4,-10.4,.08,16722474,1,{emissive:16711680,emissiveIntensity:1});t.userData.beam=!0,_u.push(t),[-20,0,20].forEach(i=>{_t(i-3.2,-6.2,i+3.2,-3.8,.6,2764341),_t(i-3.2,-6.2,i+3.2,-3.8,.05,1118999,.6);for(let s=0;s<3;s++){let r=_t(-.35,-.25,.35,.25,.4,[11027506,3042186,7035438][s],.65);r.userData={belt:!0,cx:i,i:s},_u.push(r)}}),$t(14.2,-13,19.6,-11,1.1,6965806,{los:!1}),Zt("PREGUNTAS",17,3,-12,3.5,"#ffffff"),[[-27,-19,"ECON\xD3MICO"],[-4,4,"EXPR\xC9S"],[19,27,"QUIOSCO"]].forEach(([i,s,r])=>{$t(i,15,s,17,1.2,3752269),_t(i,15,s,17,.12,14673388,1.2),Zt(r,(i+s)/2,4,16,6,"#ffffff")}),$t(-40,10,-33,24,3.4,4878218),Zt("BA\xD1OS \u{1F6BB}",-33,4.2,17,5,"#8fd3ff"),$t(33,10,40,24,3.4,9067066),Zt("CAF\xC9 \u2615",33,4.2,17,5,"#ffd18f");for(let i=11.5;i<24;i+=3.2)_t(33.4,i,35,i+1.4,.9,14206112,0);[[-14,4],[14,4],[-12,21],[12,21]].forEach(([i,s])=>{$t(i-2,s-.5,i+2,s+.5,.5,5002854)}),Uv(),$t(-6,-66,-1.6,-64.6,1.1,3029578),$t(1.6,-66,6,-64.6,1.1,3029578),_t(-1.7,-65.6,-1.5,-65,1.3,11581636,0),_t(1.5,-65.6,1.7,-65,1.3,11581636,0),_t(-1.5,-65.4,1.5,-65.2,.04,4054148,1.2,{emissive:2072666,emissiveIntensity:1}),Zt("PUERTA 27 \xB7 \xC1MSTERDAM",0,4.4,-66.2,11,"#ffffff"),Zt("ABORDAJE",0,6.3,-69.5,7,"#3ddc84"),aM(),rv();for(let i=-50;i<=50;i+=20){_t(i-.1,34.9,i+.1,35.1,7,3355443,0);let s=new Le(new gi(.35,8,8),new Ot({color:16771488}));s.position.set(i,7.2,35),et.add(s)}for(let i=-60;i<=60;i+=15)if(Math.abs(i)>8){_t(i-.25,36,i+.25,36.5,2.4,7031339,0);let s=new Le(new gi(1.6,10,8),yn(3112252));s.position.set(i,3.6,36.2),s.castShadow=!0,et.add(s)}for(let i=0;i<12;i++){let s=At(8,18),r=At(10,40),a=-150+i*28+At(-6,6);_t(a,70,a+s,70+At(8,14),r,[4871528,5989747,4015701][i%3],0)}Ir=new Le(new mr(.6,1.4,4),new Ot({color:16106776})),Ir.rotation.x=Math.PI,et.add(Ir)}function rv(){let n=new Ft,e=yn(15922423),t=yn(1920922),i=new Le(new pi(3.1,3.1,44,18),e);i.rotation.z=Math.PI/2,i.castShadow=!0,n.add(i);let s=new Le(new gi(3.1,16,12),e);s.position.x=22,s.scale.x=1.5,n.add(s);let r=new Le(new pi(3.1,1.2,12,14),e);r.rotation.z=-Math.PI/2,r.position.x=-27,n.add(r);let a=new Le(new ot(7,9,.5),t);a.position.set(-29,6,0),a.rotation.z=-.5,n.add(a);let o=new Le(new ot(40,.6,6.3),t);o.position.y=.2,n.add(o),[-1,1].forEach(l=>{let c=new Le(new ot(9,.5,22),e);c.position.set(-3,-1.2,l*12),c.rotation.y=l*-.3,c.castShadow=!0,n.add(c);let h=new Le(new pi(1.4,1.4,4.5,14),yn(9147811));h.rotation.z=Math.PI/2,h.position.set(2,-2.4,l*9),n.add(h);let d=new Le(new gi(.4,8,8),new Ot({color:l>0?16720418:2293589}));d.position.set(-8,-1,l*22),n.add(d),Dp.push(d)});for(let l=-8;l<=8;l++){let c=new Le(new ot(.7,.8,.1),yn(1910579));c.position.set(l*2.2,1.4,3.1),n.add(c)}n.position.set(0,3.4,-90),ds=n,et.add(n)}function av(n,e){let i=[0,0,0];for(let o=0;o<=14;o++){let l=-e+o/14*2*e;i.push(Math.sin(l)*n,0,Math.cos(l)*n)}let s=[];for(let o=1;o<=14;o++)s.push(0,o,o+1);let r=new Vt;r.setAttribute("position",new ft(i,3)),r.setIndex(s);let a=new Le(r,new Ot({color:16769357,transparent:!0,opacity:.22,side:Pn,depthWrite:!1}));return a.position.y=.06,a}var ov=(()=>{let n=document.createElement("canvas");n.width=n.height=64;let e=n.getContext("2d");return e.fillStyle="#ff2020",e.font="bold 60px Arial",e.textAlign="center",e.fillText("!",32,54),new Un(n)})(),Np=(()=>{let n=document.createElement("canvas");n.width=n.height=64;let e=n.getContext("2d"),t=e.createRadialGradient(32,32,2,32,32,30);return t.addColorStop(0,"#fff"),t.addColorStop(.3,"#ffd24a"),t.addColorStop(1,"rgba(255,120,0,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),new Un(n)})();function nn(n,e,t,i={}){let s=zr({shirt:1914199,pants:1451582,capCol:1056826,vest:!!i.vest,hair:2236962}),r=new Le(new ot(.08,.16,.4),new Xt({color:328965}));r.position.set(0,-.62,.22),r.visible=!1,s.userData.armR.add(r),s.position.set(n,0,e),et.add(s);let a=i.range||13,o=i.fov||.6,l=av(a,o);s.add(l);let c=new di(new $n({map:ov,transparent:!0}));c.scale.set(.8,.8,1),c.position.y=2.5,c.visible=!1,s.add(c);let h=new di(new $n({map:Np,transparent:!0,blending:yr,depthWrite:!1}));h.scale.set(1.3,1.3,1),h.position.set(.35,1.05,.85),h.visible=!1,s.add(h);let d=t.length>1?Math.atan2(t[1][0]-n,t[1][1]-e):i.ang||0,u={m:s,cone:l,bang:c,flash:h,gun:r,flashT:0,rank:i.rank??Math.random(),armed:!1,aiming:!1,warn:1.2,fireT:0,path:t,i:t.length>1?1:0,speed:i.speed||1.7,ang:d,base:i.ang||0,range:a,fov:o,wait:0,seeing:!1,sweep:i.sweep??1,x:n,z:e,moving:!1,state:"patrol",aware:0,chaser:!1,huntT:0,stun:0,retField:null,curSpeed:0,tf:"G",lostT:0,flank:!1};return Tn.push(u),u}function Up(n,e){n.armed=e,n.gun.visible=e;let t=n.m.userData;t.shirtM.color.set(e?1316895:1914199),t.pantsM.color.set(e?921879:1451582)}function Ba(){Tn.forEach(n=>Up(n,n.rank<ie.armedPct/100))}function au(n,e=1.6){let t=nv();et.add(t);let i={m:t,h:n,off:e,x:n.x,z:n.z+e,ang:0,sp:0,state:"follow",sniff:0,stun:0,huntT:0,retT:0,retField:null};return t.position.set(i.x,0,i.z),Br.push(i),i}function ou(n,e){let t=[12597547,3049153,2600544,15965202,9323693,15528177,1482885,13849600],i=zr({shirt:t[Math.floor(Math.random()*t.length)],pants:[2899536,4868682,8350282][Math.floor(Math.random()*3)],hair:[1118481,5913114,13214282,8947848][Math.floor(Math.random()*4)],skin:[14726282,13012322,9263675,15845797][Math.floor(Math.random()*4)],pack:Math.random()<.3}),s=At(n.x0,n.x1),r=At(n.z0,n.z1);if(i.position.set(s,0,r),i.scale.setScalar(At(.92,1.08)),et.add(i),Math.random()<.5){let o=new Le(new ot(.4,.55,.25),yn([3355443,8930338,2250103][Math.floor(Math.random()*3)]));o.position.set(.45,.3,.1),i.add(o)}let a={m:i,room:n,p:{x:s,z:r},t:null,wait:Math.random()*3,speed:At(1.1,1.8),ang:0,queue:e==="queue"};return Su.push(a),a}function lv(n){for(let e=0;e<14;e++){let t=At(n.room.x0,n.room.x1),i=At(n.room.z0,n.room.z1);if(!Si.some(s=>t>s.x0-.8&&t<s.x1+.8&&i>s.z0-.8&&i<s.z1+.8)&&bc(n.p.x,n.p.z,t,i,Si,.5)){n.t={x:t,z:i};return}}n.wait=1}function mp(n,e,t,i){let s=new Ft,r=new Le(new ot(4.2,.9,1.9),yn(t));r.position.y=.65,r.castShadow=!0,s.add(r);let a=new Le(new ot(2.2,.7,1.7),yn(2106926,{roughness:.2}));a.position.set(-.2,1.3,0),s.add(a),[[-1.3,.85],[1.3,.85],[-1.3,-.85],[1.3,-.85]].forEach(([l,c])=>{let h=new Le(new pi(.38,.38,.3,12),yn(1118481));h.rotation.x=Math.PI/2,h.position.set(l,.38,c),s.add(h)}),[[2.1,.6],[2.1,-.6]].forEach(([l,c])=>{let h=new Le(new ot(.1,.2,.35),new Ot({color:16773808}));h.position.set(l,.7,c),s.add(h)}),s.position.set(At(-150,150),0,n),s.rotation.y=e>0?0:Math.PI,et.add(s);let o={m:s,dir:e,speed:i,x:s.position.x};return Lp.push(o),o}var ei=null,be=null,za=[],yu=[];function ic(n,e,t,i=.9,s=null){let r=new Ft;if(t==="life"){let l=new Le(new fr(.16,.34,4,10),new Xt({color:3073437,emissive:2080634,emissiveIntensity:1.1,roughness:.3}));l.rotation.z=Math.PI/2,r.add(l);let c=new Le(new fr(.165,.12,4,10),new Xt({color:16777215,emissive:14540253,emissiveIntensity:.6}));c.rotation.z=Math.PI/2,c.position.x=-.2,r.add(c)}else{let l=new Le(new pa(.34,.06,8,20),new Xt({color:16106776,emissive:16097280,emissiveIntensity:1.2}));r.add(l);let c=new Le(new pr(.3,20),new Xt({color:16774344,emissive:8939008,emissiveIntensity:.4}));r.add(c);let h=new Le(new ot(.04,.2,.02),new Ot({color:1118481}));h.position.set(0,.08,.02),r.add(h);let d=new Le(new ot(.14,.04,.02),new Ot({color:1118481}));d.position.set(.06,0,.02),r.add(d)}let a=new di(new $n({map:Np,transparent:!0,blending:yr,depthWrite:!1,color:t==="life"?3407786:16763955}));a.scale.set(2.2,2.2,1),r.add(a),r.position.set(n,i,e),et.add(r);let o={x:n,z:e,type:t,y:i,m:r,taken:!1,ph:Math.random()*6,row:s};return za.push(o),o}function cv(){[[20,22],[-25,8],[0,-18],[-20,-18],[-34,-12]].forEach(([n,e])=>ic(n,e,"life")),[[-12,20],[20,-18]].forEach(([n,e])=>ic(n,e,"time")),Ti.forEach((n,e)=>ic(0,n.zc,e%2?"time":"life",2,n)),["life","life","time","life","life","time","life","time"].forEach(n=>yu.push(ic(0,30,n)))}function Tu(){if(!yu.length||!Us)return;let n=be?be.userData:{px:0,pz:36},e=[],t=n.px,i=n.pz;for(let r=0;r<500;r++){let a=Fs(Us,Fr,t,i);if(!a||(t+=a.x,i+=a.z,e.push([t,i]),Math.hypot(t,i+62)<3))break}let s=yu.filter(r=>!r.taken);s.forEach((r,a)=>{let o=Math.min(e.length-1,Math.max(6,Math.floor(e.length*(a+.6)/s.length*.96)));e[o]&&(r.x=e[o][0],r.z=e[o][1],r.m.position.set(r.x,r.y,r.z))})}function hv(n){for(let e of za)if(!e.taken){if(e.row){if(e.row.lowC==null){e.m.visible=!1;continue}e.m.visible=!0,e.x=e.row.lowC,e.z=e.row.zc}e.m.rotation.y+=n*2.2,e.m.position.set(e.x,e.y+Math.sin(I.t*3+e.ph)*.12,e.z)}}function uv(){let n=(e,t,i,s)=>{$t(e-.6,t-.6,e+.6,t+.6,2.1,2792847),_t(e-.5,t-.5,e+.5,t+.5,.12,1863526,2.1),Zt("TAQUILLA \xB7 H",e,2.9,t,2.6,"#3ddc84"),Mc.push({x:e,z:t,ex:i,ez:s})};n(-39.4,5,-36.6,5),n(39.4,5,36.6,5),n(-30,27.3,-30,24.8),n(30,27.3,30,24.8),n(-11,.7,-11,3.3),n(11,.7,11,3.3),n(-25.4,-20,-22.5,-20),n(25.4,-20,22.5,-20),n(7.4,-14,4.6,-14),n(-37.4,-20,-34.4,-20),n(-24,-33.2,-24,-31),n(30,-33.2,30,-31),n(18,-35.6,18,-37.6),n(-30,-35.6,-30,-37.6),n(18,-41.6,18,-43.6),n(34,-41.6,34,-43.6),n(-30,-47.6,-30,-49.6),n(6,-47.6,6,-49.6),n(14,-53.6,14,-55.6),n(34,-53.6,34,-55.6),n(-30,-59.6,-30,-61.6)}function dv(){uv(),cv();let n={low:.4,med:.65,high:1}[Wi]||1;nn(-30,6,[[-30,6],[30,6],[30,24],[-30,24]],{speed:1.5,vest:!0,rank:.05}),nn(9,25,[[9,25]],{ang:Math.PI,sweep:.8,range:11,rank:.6});let e=nn(-30,10,[[-30,10],[30,10]],{speed:1.3,range:9,fov:.5,rank:.7});au(e,1.7),nn(0,12,[[0,12]],{ang:0,sweep:1.1,range:12,rank:.8}),nn(-16,-8.4,[[-16,-8.4]],{ang:0,sweep:.7,range:9,vest:!0,rank:.75}),nn(-20,-22,[[-20,-22],[-20,-27]],{speed:1.2,range:9,fov:.5,rank:.85}),nn(17,-13.8,[[17,-13.8]],{ang:0,sweep:.5,range:10,fov:.55,rank:.1}),nn(20,-22,[[20,-22],[20,-27]],{speed:1.2,range:9,fov:.5,rank:.9});let t=nn(-4,-3,[[-4,-3],[4,-10],[-4,-17],[4,-24],[-4,-17],[4,-10]],{speed:1.3,range:9,fov:.5,rank:.65});au(t,1.8),nn(-34,-4,[[-34,-4],[-34,-15]],{speed:1.3,range:10,fov:.55,rank:.15}),nn(-34,-26,[[-34,-26],[-34,-16]],{speed:1.4,range:10,fov:.55,rank:.95}),nn(-30,-31,[[-30,-31],[30,-31]],{speed:1.6,range:12,fov:.45,vest:!0,rank:.2}),nn(30,-37.4,[[30,-37.4],[-30,-37.4]],{speed:1.5,range:12,fov:.45,rank:.55}),nn(-30,-43.4,[[-30,-43.4],[30,-43.4]],{speed:1.5,range:12,fov:.45,rank:.25});let i=nn(30,-49.4,[[30,-49.4],[-30,-49.4]],{speed:1.3,range:10,fov:.45,rank:.7});au(i,1.6),nn(-30,-55.4,[[-30,-55.4],[30,-55.4]],{speed:1.6,range:12,fov:.45,vest:!0,rank:.3}),nn(-12,-62,[[-12,-62],[12,-62]],{speed:1.4,range:11,fov:.5,rank:.45}),nn(8,-63,[[8,-63]],{ang:0,sweep:.9,range:11,rank:.35}),Ba();let s={x0:-36,x1:36,z0:2,z1:26};for(let a=0;a<Math.round(14*n);a++)ou(s);[[-32.5,-29.2],[-38.8,-36.2],[-44.8,-42.2],[-50.8,-48.2],[-56.8,-54.2]].forEach(([a,o])=>{for(let l=0;l<Math.max(1,Math.round(3*n));l++)ou({x0:-36,x1:36,z0:a,z1:o})});for(let a=0;a<4;a++){let o=ou({x0:-24,x1:-22,z0:19+a*1.3,z1:19+a*1.3});o.m.rotation.y=Math.PI,o.queue=!0}let r=[[44,1,12597547],[44,1,3049153],[52,-1,15528177],[52,-1,2600544],[44,1,9323693],[52,-1,15965202]];r.slice(0,Math.max(2,Math.round(r.length*n))).forEach(([a,o,l])=>mp(a,o,l,At(7,12))),ei=mp(40.6,1,16106776,0),ei.m.position.x=0,ei.x=0,ei.m.rotation.y=0,ei.parked=!0,be=zr({shirt:1843760,pants:1843760,bag:!0}),et.add(be),Object.assign(be.userData,{px:0,pz:36,vx:0,vz:0,ang:Math.PI,y:0,vy:0,grounded:!0,hidden:null,crouch:!1,hideT:0,sprint:!1,speed:0}),be.position.set(0,0,36),be.rotation.y=Math.PI,Hv(),Rv(),Tu(),lM()}function fv(n){let e=be.userData,t=n.look;e.shirtM.color.set(t.shirt),e.pantsM.color.set(t.pants),t.hat&&(e.hat.visible=!0,e.hat.material.color.set(t.hat));let i=new Le(new ot(.08,.4,.02),new Xt({color:11148830}));if(t.tie&&(i.position.set(0,1.2,.15),be.add(i)),t.pack){let s=new Le(new ot(.4,.5,.18),new Xt({color:12597547}));s.position.set(0,1.15,-.23),be.add(s)}}function ze(n,e=4800){let t=ae("sub");t.innerHTML=n,t.classList.add("on"),clearTimeout(ze.h),ze.h=setTimeout(()=>t.classList.remove("on"),e)}var Hn=n=>(Math.round(n*10)/10).toString().replace(/\.0$/,""),pv=n=>n.replace(/(\d+(?:\.\d+)?) min/g,(e,t)=>Hn(t*ie.actionTime)+" s");function Ur(n,e="#3ddc84"){let t=document.createElement("div");t.className="pop",t.textContent=n,t.style.color=e,document.body.appendChild(t),setTimeout(()=>t.remove(),1400)}async function Fp(n){let e=ae("fade");e.textContent=`\u23F1 -${Hn(n*ie.actionTime)} s`,e.classList.add("on"),await Ua(750),e.classList.remove("on"),await Ua(250)}function Ei(n){n&&(E.heat=sn(E.heat+n,0,100),E.heat>=100&&!E.over&&Bs("busted","DETENIDO",'Tu cara ya es un cartel de "SE BUSCA". Cuatro agentes te rodean con la sonrisa de quien acaba de ganar un viaje a Canc\xFAn.<br>Lo bueno: ahora tu est\xF3mago es problema del m\xE9dico forense... pero primero te har\xE1n una radiograf\xEDa muy detallada.'))}function Op(n){return(.95+.1*(E.cargo.acid*E.method.stomach-.48)/1.21)*(E.pillLeft>0?.3:1)*(n?ie.hiddenDrain:1)}function ka(){E.life=Math.min(Ap(),E.life),E.integrity=sn(E.life/Or()*100,0,100)}function Sc(n,e){E.life=Math.min(Ap(),E.life+n),ka(),Ur(`+${Hn(n)} s de vida`,"#3ddc84"),e&&void 0}function mv(n){E.time+=n,Ur(`+${Hn(n)} s de misi\xF3n`,"#f5c518")}function Bp(){Bs("dead","VUELO PERDIDO","Por la ventana ves c\xF3mo la manga se retira. El avi\xF3n despega sin ti con tu futuro a bordo.<br>Don Chuy no es un hombre de segundas oportunidades. Ni de primeras, la verdad.")}function zp(n){let e=n*ie.actionTime;return E.time-=e,E.life-=e*Op(!1),ka(),E.over?!1:E.life<=0?(wu("time"),!1):E.time<=0?(Bp(),!1):!0}function wu(n){Bs("boom","EXPLOTASTE",n==="time"?'El contador de tus c\xE1psulas marca 00. Sientes un calorcito agradable en el abdomen... y luego uno menos agradable. <b>\xA1BOOM!</b><br>Los polic\xEDas no te arrestan: te <i>limpian</i>. El aeropuerto cierra la Terminal B por "derrame cosm\xE9tico". Tu jefe lo llama "p\xE9rdida de inventario".':'Un gorgoteo. Otro. El est\xF3mago se rinde antes que t\xFA: las c\xE1psulas ceden por los jugos g\xE1stricos. Alcanzas a pensar "deb\xED tomar m\xE1s pastillas".<br><b>\xA1BOOM!</b> Fuiste el primer pasajero en cumplir la norma de "equipaje de mano que explota".')}function gv(){let n=be.position;ae("flash").style.transition="none",ae("flash").style.opacity=1,requestAnimationFrame(()=>{ae("flash").style.transition="opacity 1.4s",ae("flash").style.opacity=0}),Vi(1.6,.6,700),Ke(70,.8,"sawtooth",.25);for(let e=0;e<26;e++){let t=new Le(new gi(At(.25,.8),8,8),new Ot({color:[16734746,16756768,12589080,3355443][e%4],transparent:!0}));t.position.set(n.x,1.2,n.z),t.userData={v:new O(At(-6,6),At(3,11),At(-6,6)),life:1.6},et.add(t),lc.push(t)}be.visible=!1,I.exploded=!0,I.shake=1.2}function Bs(n,e,t,i){if(!E||E.over)return;E.over=!0,I.mode="over",I.busy=!0,Au(),ae("mini").classList.remove("on");let s=n==="win",r=Cu(n);I.endMood=s?"win":"sad",s||setTimeout(()=>Bn("lose"),n==="boom"?1800:600),n==="boom"&&gv(),n==="busted"&&(Ke(700,.25,"sawtooth",.08),setTimeout(()=>Ke(520,.25,"sawtooth",.08),280),setTimeout(()=>Ke(700,.25,"sawtooth",.08),560)),n==="shot"&&(Vi(.5,.5,1800),Ke(90,.4,"sawtooth",.15),I.shake=.8),setTimeout(()=>{let o=ae("end");o.className="overlay on "+(s?"win":"dead")+(n==="busted"?" busted":""),o.innerHTML=`<h2>${s?"\u2708 ":"\u2620 "}${e}</h2><p>${t}</p>${i?`<p>${i}</p>`:""}${r}<p style="text-align:center;margin-top:20px"><button id="again" style="font:700 20px Impact;letter-spacing:2px;padding:12px 30px">\u21BA JUGAR OTRA VEZ</button></p>`,ae("again").onclick=()=>location.reload()},s?3800:n==="boom"?2e3:1100)}function kp(n){let e=E.method.id,t=E.cargo.weight,i=E.heat,s=.7+.15*t;switch(n){case"body":return{capsules:.6,tape:.42,bag:.05}[e]*s+i/400;case"bag":return{capsules:.03,tape:.05,bag:.55}[e]*s*(E.bagSwapped&&e==="bag"?.4:1)+i/600;case"dog":return E.cargo.smell*{capsules:.3,tape:.65,bag:.8}[e]*(E.inv.perfumeOn?.5:1)+(E.integrity<40?.15:0)+i/500;case"quiz":return Math.min(.9,Math.max(.03,.08+i/160+E.profile.quiz+(E.time<15?.05:0)))}return 0}var xv=n=>E.camsOff&&(n==="body"||n==="quiz")?.35:1;function _v(n,e=1){n=typeof n=="string"?{t:n}:n;let t=Math.min(.95,(n.p??kp(n.t))*xv(n.t)*e),i=Math.random()<t;return n.t==="quiz"?i?{quiz:!0,text:'Un guardia te se\xF1ala con el dedo: "Usted. Acomp\xE1\xF1eme un momento."'}:{text:ru.quiz.pass}:i?{fail:!0,text:ru[n.t].fail}:{text:ru[n.t].pass}}function Au(){ae("dlg").classList.remove("on"),I.dlgKey=null,I.dlgEsc=null}function ms(n){return document.exitPointerLock&&document.exitPointerLock(),new Promise(e=>{let t=ae("dlg");t.classList.add("on"),ae("dlgT").textContent=n.title,ae("dlgX").innerHTML=n.text||"";let i=ae("dlgO");i.innerHTML="";let s=n.opts.filter(o=>o.show!==!1),r=o=>{t.classList.remove("on"),I.dlgKey=null,I.dlgEsc=null,e(o)};s.forEach((o,l)=>{let c=document.createElement("button");c.innerHTML=`<span class="k">${l+1}</span><span><b>${o.label}</b>${o.hint?`<small>${pv(o.hint)}</small>`:""}</span>`,c.disabled=!!o.disabled,c.onclick=()=>r(o),i.appendChild(c)}),I.dlgKey=o=>{let l=s[o];l&&!l.disabled&&r(l)};let a=s.find(o=>o.back||o.close);I.dlgEsc=a?()=>r(a):null})}async function yv(){let n=E.profile,e=E.heat,t=await ms({title:"INTERROGATORIO",text:"<p>Te llevan a un rinc\xF3n. El agente tiene una carpeta, un caf\xE9 y cero prisa.</p><p>\u2014Veo que viaja solo. \xBFMotivo del viaje? \xBFQui\xE9n hizo su maleta? \xBFPor qu\xE9 suda?</p><p><i>Tu est\xF3mago cruje en el silencio como un presagio.</i></p>",opts:[{label:"Improvisar una historia",hint:"4 min \xB7 arriesgado, puede salvarte",time:4,p:Math.max(.1,.35+n.lie-e/400),win:'Cuentas una historia de boda en \xC1msterdam con tantos detalles que el agente dice "ya, ya, basta". Te devuelve el pasaporte.',lose:'Te contradices a los 40 segundos. "Rep\xEDtame lo de su hermana, la que se casa con el primo". No ten\xEDas hermana.'},{label:"Respuestas cortas y calmadas",hint:"3 min \xB7 mejor cuanto menos sospecha tengas",time:3,p:Math.max(.1,.6-e/200),win:'"Negocios." "Mi maleta." "Calor." Tres frases, cero errores. El agente suspira y te deja ir.',lose:"Tus respuestas son tan cortas que el agente nota que son demasiado cortas. Te invita a un cuarto con una mesa y dos sillas."},{label:"Hacerte el ofendido",hint:"5 min \xB7 alto riesgo \xB7 +6 sospecha",time:5,heat:6,p:Math.max(.1,.3+(n.id==="exec"?.15:n.id==="tourist"?.1:-.05)),win:"Tu indignaci\xF3n es tan teatral que el agente se siente culpable. Te ofrece una disculpa y un caramelo.",lose:"El supervisor llega y es peor que el agente. Y trae un perro. Que ya te conoce."}]});return await Fp(t.time),!zp(t.time)||(t.heat&&Ei(t.heat),E.over)?!1:Math.random()>=t.p?(Bs("busted","DETENIDO",t.lose),!1):(ze(t.win,6e3),E.heat=Math.max(0,E.heat-15),!0)}async function Da(n,e){for(let t of n){let i=typeof t=="string"?{t}:t,s=xu[i.t]?(await Ru(i.t)).mult:1;if(E.over)return!1;let r=_v(i,s);if(E.camsOff&&(i.t==="body"||i.t==="quiz")&&(E.camsOff=!1),r.fail)return Bs("busted","DETENIDO",r.text+"<br>Las esposas son fr\xEDas. Tu est\xF3mago, por ahora, es el \xFAnico que no est\xE1 arrestado."),!1;if(r.quiz){if(ze(r.text,3e3),!await yv())return!1}else e&&e.push(r.text)}return!0}async function vv(n){let e=[];if(n.cost&&(E.cash-=n.cost),n.time){if(n.win){let t=n.time*ie.actionTime;E.time=Math.max(E.time,t+.3),E.life=Math.max(E.life,t*1.3+.3),ka()}if(await Fp(n.time),!zp(n.time))return!1}if(n.heat&&Ei(n.heat),E.over)return!1;if(n.fx){let t=n.fx();t&&e.push(t)}return n.checks&&!await Da(n.checks,e)?!1:n.win?(em(),!1):(e.length&&ze(e.join(" "),6e3),!!n.keep)}async function Mv(n){for(I.busy=!0,I.inZone=!0;;){let e=await ms(n.menu());if(e.close||!await vv(e)||E.over)break}I.inZone=!1,!E.over&&I.mode==="play"&&(I.busy=!1)}var Ls={label:"Salir",hint:"",close:!0},Hp=()=>(E.inv.pills--,E.pillLeft=5,Sc(ie.pillLife),`Te tragas la pastilla en seco: +${Hn(ie.pillLife)} s de vida y tus c\xE1psulas se desgastan m\xE1s lento unos segundos.`);function gp(){return{title:"BA\xD1OS",text:`<p>Azulejos blancos, luz fluorescente y olor a desinfectante que apenas combate el olor a miedo. ${["Del \xFAltimo cub\xEDculo sale un sonido que prefieres no clasificar.","Un se\xF1or se lava las manos durante tres minutos, mir\xE1ndote por el espejo.","El secador de manos ruge como una turbina. Ideal para los nervios."][Math.floor(I.t)%3]}</p><p>${E.inv.contact?'Tu contacto deber\xEDa estar "arreglando un grifo".':"Sin contacto, esto es solo un ba\xF1o."}</p>`,opts:[{label:"\u{1F9F3} Cambiar maleta con el contacto",hint:"6 min \xB7 riesgo de rayos X de maleta \xD70.4 (doble fondo) \xB7 -5 sospecha",show:E.inv.contact>0&&!E.bagSwapped,time:6,heat:-5,keep:!0,fx(){return E.inv.contact--,E.bagSwapped=!0,'Intercambio de maletas bajo la puerta del cub\xEDculo. "Encantado", susurra. Nunca lo volver\xE1s a ver.'}},{label:"\u{1F454} Cambiar de ropa",hint:"7 min \xB7 -25 sospecha",show:E.inv.clothes>0,time:7,heat:-25,keep:!0,fx(){E.inv.clothes--,E.disguised++;let n=be.userData;return n.shirtM.color.set([2792847,15167313,7166330][E.disguised%3]),n.hat.visible=!0,n.hat.material.color.set(2236962),n.shades.visible=!0,"Un gorro, otra camisa, unas gafas. El del espejo ya no se parece al de las c\xE1maras. Casi."}},{label:"\u{1F338} Rociar spray anti-olor",hint:"1 min \xB7 los perros huelen la mitad",show:E.inv.perfume>0&&!E.inv.perfumeOn,time:1,keep:!0,fx(){return E.inv.perfume--,E.inv.perfumeOn=!0,"Hueles a pino sint\xE9tico. Un pino con problemas legales."}},{label:"\u{1F48A} Tomar pastilla",hint:`1 min \xB7 +${Hn(ie.pillLife)} s de vida \xB7 +2 sospecha`,show:E.inv.pills>0,time:1,heat:2,keep:!0,fx:Hp},{label:"Lavarte la cara",hint:"3 min \xB7 -5 sospecha",time:3,heat:-5,keep:!0,fx(){return"Agua fr\xEDa, respiraci\xF3n profunda. Tu reflejo te mira como alguien que lo est\xE1 pensando mejor."}},Ls]}}var lu=(n,e,t,i,s,r)=>()=>({title:"CHECK-IN \xB7 "+n,text:E.checkedIn?'<p>Ya tienes tu pase. La agente te mira: "\xBFOtra vez, caballero?"</p>':"<p>El mostrador te espera con la sonrisa de quien cobra por sonre\xEDr.</p>",opts:[{label:e,hint:t,show:!E.checkedIn,time:i,cost:s,heat:r,disabled:E.cash<s,fx(){return E.checkedIn=!0,"Pase de abordar en mano. Un tr\xE1mite menos entre t\xFA y la puerta 27."}},Ls]}),bv=[{x:-23,z:19.5,r:3.6,label:"Check-in econ\xF3mico",menu:lu("ECON\xD3MICO","Hacer fila (la familia con 9 maletas)","12 min \xB7 -4 sospecha",12,0,-4)},{x:0,z:19.5,r:3.6,label:"Check-in expr\xE9s ($50)",menu:lu("EXPR\xC9S","Pagar el mostrador expr\xE9s \xB7 $50","4 min \xB7 +3 sospecha (\xBFpor qu\xE9 tanto dinero?)",4,50,3)},{x:23,z:19.5,r:3.6,label:"Quiosco autom\xE1tico",menu:lu("QUIOSCO","Usar el quiosco","2 min \xB7 +8 sospecha \xB7 la c\xE1mara capta tu cara sudorosa",2,0,8)},{x:-31,z:17,r:3.4,label:"Entrar a los ba\xF1os",menu:gp},{x:31,z:17,r:3.4,label:"Caf\xE9",menu:()=>({title:"CAF\xC9",text:"<p>Una barista con cara de haberlo visto todo te sonr\xEDe.</p>",opts:[{label:'Tomar un caf\xE9 "para calmar los nervios" \xB7 $5',hint:`6 min \xB7 -6 sospecha \xB7 +${Hn(ie.coffeeLife)} s de vida`,time:6,cost:5,disabled:E.cash<5,heat:-6,fx(){return Sc(ie.coffeeLife),`El caf\xE9 est\xE1 tibio, amargo y car\xEDsimo, pero el calor te asienta el est\xF3mago: +${Hn(ie.coffeeLife)} s de vida.`}},Ls]})},{x:-35.5,z:-37.4,r:3.4,label:"Farmacia",menu:()=>({title:"FARMACIA",text:"<p>La farmac\xE9utica te mira un segundo de m\xE1s.</p>",opts:[{label:"Comprar una pastilla \xB7 $60",hint:"3 min \xB7 precio de aeropuerto",time:3,cost:60,disabled:E.cash<60,keep:!0,fx(){return E.inv.pills++,'"Para el viaje", explicas. "Claro."'}},Ls]})},{x:35.5,z:-43.4,r:3.4,label:"Perfumer\xEDa",menu:()=>({title:"PERFUMER\xCDA",text:"<p>Una nube de aromas caros te acaricia los pulmones.</p>",opts:[{label:"Spray anti-olor \xB7 $40",hint:"4 min \xB7 los perros huelen la mitad",show:!E.inv.perfumeOn,time:4,cost:40,disabled:E.cash<40,fx(){return E.inv.perfumeOn=!0,'Te roc\xEDas con "Noche de Verano". Hueles como un cumplea\xF1os sospechoso.'}},Ls]})},{x:-35.5,z:-49.4,r:3.4,label:"\xD3ptica",menu:()=>({title:"\xD3PTICA",text:"<p>Expositores de gafas que prometen cambiarte la vida (o la cara).</p>",opts:[{label:"Gafas y gorra \xB7 $30",hint:"3 min \xB7 -10 sospecha",time:3,cost:30,disabled:E.cash<30,heat:-10,fx(){let n=be.userData;return n.shades.visible=!0,n.hat.visible=!0,n.hat.material.color.set(2236962),"Con las gafas puestas pareces menos nervioso. O m\xE1s misterioso. Ambas son una mejora."}},Ls]})},{x:35.5,z:-55.4,r:3.4,label:"Entrar a los ba\xF1os",menu:gp},{x:0,z:-62.3,r:5.5,label:"Puerta de embarque",menu:()=>({title:"PUERTA 27 \xB7 \xC1MSTERDAM",text:"<p>La azafata sonr\xEDe con una paciencia que se acaba justo en tu fila. Al fondo, la manga del avi\xF3n es el t\xFAnel m\xE1s hermoso que has visto. \xDAltimo filtro: un agente revisa pasaportes como un cr\xEDtico gastron\xF3mico.</p>",opts:[{label:"Fila normal",hint:"3 min \xB7 calma \xB7 revisi\xF3n est\xE1ndar",time:3,checks:["quiz"],win:!0},{label:"Fila prioritaria",hint:'1.5 min \xB7 +6 sospecha \xB7 "\xBFpor qu\xE9 tienes prioridad?"',time:1.5,heat:6,checks:["quiz"],win:!0},{label:"Correr a la puerta",hint:"0.8 min \xB7 +15 sospecha \xB7 el sudor es sospechoso",time:.8,heat:15,checks:["quiz"],win:!0},Ls]})}];bv.forEach(n=>vc.push(n));bu.push({id:"A",x0:-26,x1:-14,z0:-13.2,z1:-12,async run(){return ze("<b>CARRIL A:</b> esc\xE1ner corporal y rayos X."),Ke(1e3,.15),Da(["body","bag"],[])}},{id:"B",x0:-8,x1:8,z0:-8,z1:-7,async run(){return ze("<b>CARRIL B:</b> rayos X de equipaje. Cuidado con el perro..."),Da(["bag"],[])}},{id:"C",x0:14,x1:26,z0:-15,z1:-14,async run(){return ze("<b>CARRIL C:</b> el guardia de la mesa te hace una se\xF1a."),Da(["quiz","bag"],[])}},{id:"D",x0:-38,x1:-30,z0:-2.2,z1:-1,async run(){return ze('<b>MANTENIMIENTO:</b> "\xBFUsted qu\xE9 hace aqu\xED?" Dos guardias lo vigilan.'),Ei(18),E.over?!1:Da([{t:"quiz",p:.4}],[])}});var xp=(n,e)=>n>=e-1?.5:n>=Math.ceil(e/2)?.85:1.3;function Ru(n,e={}){return document.exitPointerLock&&document.exitPointerLock(),new Promise(t=>{let i=ae("mini"),s=ae("miniA");i.classList.add("on"),s.innerHTML="",I.miniKind=n,ae("miniT").textContent=xu[n].title.toUpperCase(),ae("miniH").textContent=xu[n].hint;let r=!1,a=[],o=(h,d,u)=>{r||(r=!0,a.forEach(f=>f()),ae("miniH").textContent=u,setTimeout(()=>{i.classList.remove("on"),I.miniKind=null,t({score:h,mult:d})},1100))},l=(h,d,u)=>{let f=document.createElement(h);return d&&(f.className=d),u&&(f.textContent=u),s.appendChild(f),f},c=(h,d)=>{let u=g=>{g.code==="Space"&&!g.repeat&&(g.preventDefault(),h())},f=g=>{g.code==="Space"&&(g.preventDefault(),d&&d())};addEventListener("keydown",u),addEventListener("keyup",f),a.push(()=>{removeEventListener("keydown",u),removeEventListener("keyup",f)})};if(n==="body"){let h=2500+E.heat*15,d=l("div","mbar"),u=document.createElement("i");d.appendChild(u);let f=l("button","big",`MANT\xC9N
PULSADO`),g=null,_,m=()=>{let R=(performance.now()-g)/h;if(u.style.width=Math.min(100,R*100)+"%",R>=1)return o(1,.5,"\u2714 Aguantaste. El operador bosteza y deja pasar la imagen.");_=requestAnimationFrame(m)},p=()=>{r||g||(g=performance.now(),m())},b=()=>{g&&!r&&(cancelAnimationFrame(_),o(0,1.45,"\u2718 Exhalaste a mitad del barrido. Mala idea."))};f.onpointerdown=p,f.onpointerup=b,f.onpointercancel=b,f.onpointerleave=b,c(p,b),setTimeout(()=>{g||o(0,1.2,"Te quedaste paralizado.")},6500)}else if(n==="dog"){let h=l("div");h.id="dogArea";let d=document.createElement("div");d.className="ring";let u=document.createElement("div");u.className="ring static";let f=document.createElement("button");f.className="tap",h.append(u,d,f);let g=l("div",null,"Toques: 0 \xB7 acertados: 0"),_=performance.now(),m=0,p=0,b=[1,2,3,4,5].map(M=>_+M*1e3),R=()=>{if(r)return;m++;let M=performance.now();Math.min(...b.map(T=>Math.abs(T-M)))<230?(p++,f.style.background="#3ddc8433",Ke(660,.06)):(f.style.background="#ff3b3b33",Ke(200,.08)),setTimeout(()=>f.style.background="transparent",120),g.textContent=`Toques: ${m} \xB7 acertados: ${p}`};f.onpointerdown=R,c(R),setTimeout(()=>o(p,xp(p,5),p>=4?"\u2714 Pulso de monje. El perro te ignora por completo.":p>=3?"Medio sudado, medio tranquilo. El perro duda.":"\u2718 Tu coraz\xF3n suena como un bombo. El perro inclina la cabeza."),5600)}else if(n==="quiz"){let h=l("div");h.id="sweatArea";let d=l("div",null,"Gotas secadas: 0 / 5"),u=0;for(let f=0;f<5;f++)setTimeout(()=>{if(r)return;let g=document.createElement("button");g.className="drop",g.style.left=12+Math.random()*76+"%",g.style.top=12+Math.random()*76+"%",g.onpointerdown=()=>{u++,d.textContent=`Gotas secadas: ${u} / 5`,g.remove()},h.appendChild(g),setTimeout(()=>g.remove(),1e3)},f*900);setTimeout(()=>o(u,xp(u,5),u>=4?"\u2714 Frente seca, mirada firme. Un modelo de ciudadano.":u>=3?"Brillas un poco, pero el guardia lo atribuye al calor.":"\u2718 Est\xE1s empapado. El guardia anota algo en su libreta."),5200)}else if(n==="cramp"||n==="struggle"){let h=e.n||12,d=e.t||3500,u=n==="struggle",f=l("div","mbar"),g=document.createElement("i");f.appendChild(g);let _=l("button","big",u?"\xA1Z\xC1FATE!":"\xA1APRIETA!"),m=0,p=()=>{r||(m++,g.style.width=Math.min(100,m/h*100)+"%",Ke(300+m*20,.04),m>=h&&o(1,1,u?"\u2714 \xA1Te soltaste de un tir\xF3n!":"\u2714 Contenido. Por los pelos."))};_.onpointerdown=p,c(p),setTimeout(()=>o(0,1,u?"\u2718 No pudiste soltarte...":"\u2718 No pudiste apretar a tiempo..."),d)}})}async function Sv(){if(I.busy=!0,ze("<b>Tu est\xF3mago se retuerce...</b>",2e3),(await Ru("cramp")).score)ze("Apretaste los dientes y las c\xE1psulas aguantaron.",4e3);else{if(E.life-=4,ka(),Ei(8),E.life<=0){wu("stomach");return}Ur("-4 s de vida","#ff3b3b"),ze("Un retortij\xF3n te dobla en dos: -4 s de vida, +8 sospecha.",5e3)}E.over||(I.busy=!1)}var Ev=[()=>({title:"PREPARACI\xD3N 1/4 \xB7 LA MERCANC\xCDA",text:"<p>Est\xE1s en un motel que huele a cloro y malas decisiones. Don Chuy golpea la mesa: \u2014Elige tu producto, mula. Si lo pierdes, t\xFA pagas.</p>",opts:Object.values(Rp).map(n=>({label:n.name,hint:`${n.weight}kg \xB7 olor ${Math.round(n.smell*100)}% \xB7 $${n.profit}. ${n.desc}`,fx(){E.cargo=n}}))}),()=>({title:"PREPARACI\xD3N 2/4 \xB7 EL CAMUFLAJE",text:'<p>\u2014\xBFC\xF3mo lo llevamos? \u2014dice Don Chuy, limpiando una navaja "para la fruta". En todos los casos te har\xE1 tragar una <b>c\xE1psula de lealtad</b>: su relaci\xF3n contigo caduca con el reloj.</p>',opts:Object.values(Cp).map(n=>({label:n.name,hint:n.desc,fx(){E.method=n}}))}),()=>({title:"PREPARACI\xD3N 3/4 \xB7 EL DISFRAZ",text:'<p>\u2014Nadie sospecha de lo que no recuerda \u2014dice. Te lanza un bolso con tu nuevo "yo".</p>',opts:Object.values(Pp).map(n=>({label:n.name,hint:`$${n.cash} \xB7 sospecha ${n.heat}. ${n.desc}`,fx(){E.profile=n,E.cash=n.cash,E.heat=n.heat}}))}),()=>({title:`PREPARACI\xD3N 4/4 \xB7 COMPRAS ($${E.cash})`,text:'<p>Un "proveedor" abre su gabardina. Dentro, un bazar de pecados. En el aeropuerto todo costar\xE1 m\xE1s y gastar\xE1 minutos.</p>',opts:jy.map(n=>({label:`${n.name} \xB7 $${n.cost}`,hint:n.desc,disabled:E.cash<n.cost,fx(){E.cash-=n.cost,n.id==="contact"?E.inv.contact++:E.inv[n.id]++}})).concat([{label:"\u2714 Terminar compras",hint:"Ir al resumen",done:!0}])}),()=>({title:"RESUMEN DEL VUELO",text:`<p><b>${E.cargo.name}</b> \xB7 ${E.method.name} \xB7 ${E.profile.name} \xB7 $${E.cash}</p>
    <p>Tienes <b>${ie.missionSec} segundos reales</b> para abordar en la Puerta 27, pero tus c\xE1psulas explotan en <b>${Or()} segundos</b>. Alarga tu vida con <b>anti\xE1cidos</b> \u{1F48A} del suelo, pastillas, caf\xE9, adrenalina al zafarte y escondi\xE9ndote (el desgaste baja a la mitad). Los <b>relojes</b> \u23F1 dorados suman segundos de misi\xF3n.</p>
    <p>Cuidado: algunos polic\xEDas van <b>armados</b> y disparan si huyes. Modo <b>${Oi[ie.diff]}</b>: ${ie.armedPct}% de los polic\xEDas van armados y tienes ${ie.hp} de salud. Los pasillos del laberinto cambian y las puertas se cierran a tu espalda.</p>
    <p>Esquiva los conos de visi\xF3n de los guardias, no te acerques a los perros y cuida el est\xF3mago.</p>`,opts:[{label:"\u2708 Entrar al aeropuerto",hint:"Empieza la cuenta regresiva",go:!0}]})];function Tv(){I.mode="title",I.busy=!1,document.body.classList.add("nohud"),ae("title").classList.add("on"),Ha()}async function wv(){E=Ip();let n=[],e=0;for(;e<5;){n[e]||(n[e]=structuredClone(E));let t=Ev[e]();t.opts=t.opts.concat([{label:"\u2190 Atr\xE1s",hint:e===0?"Volver al men\xFA principal (cambiar de modo)":"Volver al paso anterior (se deshace lo elegido aqu\xED)",back:!0}]);let i=await ms(t);if(i.back){if(e===0){Tv();return}if(e===4){e=3;continue}n.length=e,e--,E=structuredClone(n[e]);continue}if(e===3){i.done?e++:i.fx();continue}if(e===4)break;i.fx(),e++}Av()}function Av(){fv(E.profile),Ba(),Du(qf(I.seed||1));let n=be.userData;n.ang=0,Ee.yaw=0,Ee.x=n.px,Ee.y=1.6+Math.sin(Ee.pitch)*Ee.dist,Ee.z=n.pz+Math.cos(Ee.pitch)*Ee.dist,document.body.classList.remove("nohud"),I.mode="play",I.busy=!1,ae("help").style.opacity=vi?0:1,setTimeout(()=>ae("help").style.opacity=0,14e3),ze(`<b>Don Chuy:</b> "No me falles, mula. Y si vas a explotar, hazlo lejos de mi coche." <i>(${Oi[ie.diff]}${I.daily?" \xB7 reto diario":""})</i>`,6500),ei&&(ei.parked=!1)}function Cu(n){let e=n==="win",t=E.picked||0;Dt.runs++,e&&Dt.wins++;let i=e?Math.round(E.cargo.profit*(.6+.4*E.integrity/100)):0,s={novato:1,dificil:1.3,experto:1.8}[ie.diff]||1,r=e&&E.bonusMoney||0,a=e&&E.bonusScore||0,o=Math.max(0,Math.round(e?(i/10+Math.max(0,E.time)*20+Math.max(0,E.life)*15+Math.max(0,E.hp)*2+t*30)*s:t*30+(E.passed?200:0))+a),l=e?Math.round(i/10*ie.payoutMul):0,c=e?Math.round(Math.max(0,E.time)*2):0,h=Math.max(0,(e?l+c:Math.round((t*6+(E.passed?40:0))*ie.payoutMul))+r);Xf(h);let d="";return e&&(d=Yf(ie.diff,{score:o,time:+(E.playT||0).toFixed(1),date:new Date().toLocaleDateString(),seed:I.seed},I.daily)?" \u{1F3C6} <b>\xA1NUEVO R\xC9CORD!</b>":""),Ia(),I.lastRun={won:e,score:o,money:h,payout:i,partPay:l,partTime:c,bm:r,rec:d!==""},`<p style="text-align:center">Modo <b>${Oi[ie.diff]}</b>${I.daily?" \xB7 reto diario":""} \xB7 Puntuaci\xF3n: <b>${o}</b> \xB7 Dinero ganado: <b>$${h}</b> (total $${Dt.money})${d}</p>`}var wt={},Mt={};function Ec(){if(ae("admin").classList.contains("on")){ae("admin").className="overlay",ae("admin").innerHTML="",I.paused=!1,Ba();return}I.mode==="play"&&I.busy||(I.paused=!0,Hf())}kf(()=>{I.paused=!1,Ba(),Ha()});addEventListener("keydown",n=>{if(!n.repeat){if(n.code==="F2"){n.preventDefault(),Ec();return}if(!ae("admin").classList.contains("on")){if(wt[n.code]=!0,Mt[n.code]=!0,n.code==="Escape"&&I.dlgEsc){n.preventDefault(),I.dlgEsc();return}I.dlgKey&&/^Digit[1-9]$/.test(n.code)&&I.dlgKey(+n.code.slice(5)-1),["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(n.code)&&n.preventDefault()}}});addEventListener("keyup",n=>{wt[n.code]=!1});var Ee={yaw:0,pitch:.5,dist:9.5,x:0,y:0,z:0,fp:0,view:(()=>{try{return localStorage.getItem("simulator.view")==="fp"?"fp":"tp"}catch{return"tp"}})()};function Pu(){Jt.fov=Ee.view==="fp"?75:62,Jt.updateProjectionMatrix()}function Iu(){Ee.view=Ee.view==="fp"?"tp":"fp";try{localStorage.setItem("simulator.view",Ee.view)}catch{}Pu(),Uu(),Ee.view==="tp"&&document.exitPointerLock&&document.exitPointerLock(),ze(Ee.view==="fp"?"<b>Vista:</b> primera persona (V para cambiar)":"<b>Vista:</b> tercera persona (V para cambiar)",2200)}Pu();Zf({keys:wt,pressed:Mt,cam:Ee,canvas:kn.domElement,isTouch:vi,clamp:sn});function Ha(){document.querySelectorAll("#diffSel button").forEach(n=>n.classList.toggle("on",n.dataset.d===ie.diff)),ae("diffDesc").textContent=Kh[ie.diff],ae("moneyTag").textContent="Dinero permanente: $"+Dt.money}document.querySelectorAll("#diffSel button").forEach(n=>n.onclick=()=>{hs(n.dataset.d),Ha(),Ke(440,.05)});Ha();async function Vp(n){Qy(),Ke(520,.08),vi&&Kf(),ae("title").classList.remove("on"),I.daily=n,I.seed=n?$l():Math.random()*1e9|0,wv()}ae("btnStart").onclick=()=>Vp(!1);ae("btnDaily").onclick=()=>Vp(!0);ae("btnAdmin").onclick=()=>Ec();ae("btnAdminIn").onclick=()=>Ec();var _p='<b>Pantalla completa en iPhone:</b><br>1. Pulsa el bot\xF3n <b>Compartir</b> (cuadrado con flecha) de Safari.<br>2. Elige <b>"A\xF1adir a pantalla de inicio"</b>.<br>3. Abre <b>Simula-tor</b> desde ese icono: se ver\xE1 sin barra del navegador.';async function Gp(){let n=await Jf();n==="ios"?I.mode==="play"?ze(_p,12e3):await ms({title:"PANTALLA COMPLETA",text:"<p>"+_p+'</p><p class="dimtxt">Safari en iPhone no permite ocultar su barra desde una p\xE1gina web; instalado as\xED, el juego se abre a pantalla completa y funciona tambi\xE9n sin conexi\xF3n.</p>',opts:[{label:"Entendido",close:!0}]}):n==="none"&&ze("Este navegador no permite pantalla completa. Prueba Chrome o instala el juego en la pantalla de inicio.",5e3),Tc()}function Tc(){let n=tu();document.querySelectorAll("#btnFull, #btnFullIn").forEach(e=>{e.style.display=n?"none":"",e.textContent=document.fullscreenElement||document.webkitFullscreenElement?"\u2922 Salir de pantalla completa":"\u26F6 Pantalla completa",e.id==="btnFullIn"&&(e.textContent="\u26F6")}),ae("iosHint").style.display=Zl()&&!tu()?"block":"none"}ae("btnFull").onclick=Gp;ae("btnFullIn").onclick=Gp;document.addEventListener("fullscreenchange",Tc);document.addEventListener("webkitfullscreenchange",Tc);Tc();ae("btnShop").onclick=async()=>{for(ae("title").classList.remove("on");;){let n=await ms({title:`TIENDA PERMANENTE \xB7 $${Dt.money}`,text:"<p>Mejoras que se guardan en este navegador y valen para todas las partidas. Ganas dinero al abordar (y un poco al fallar).</p>",opts:jh.map(e=>{let t=jn(e.id),i=t>=e.max;return{label:`${e.name} \xB7 nivel ${t}/${e.max}`,hint:i?"Nivel m\xE1ximo":`${e.desc} \xB7 $${e.cost(t)}`,disabled:i||Dt.money<e.cost(t),up:e.id}}).concat([{label:"\u2190 Volver",close:!0}])});if(n.close)break;Wf(n.up)&&Ke(880,.08,"sine",.08)}ae("title").classList.add("on"),Ha()};ae("btnRecords").onclick=async()=>{ae("title").classList.remove("on");let n=t=>t.length?t.map((i,s)=>`${s+1}. <b>${i.score}</b> pts \xB7 ${i.time}s \xB7 ${i.date}`).join("<br>"):"<i>Sin r\xE9cords todav\xEDa</i>",e=Fi.map(t=>`<p><b>${Oi[t]}</b><br>${n(Qh(t,!1))}</p>`).join("")+`<p><b>Reto diario de hoy (${$l()}) \xB7 ${Oi[ie.diff]}</b><br>${n(Qh(ie.diff,!0,$l()))}</p>`;await ms({title:"R\xC9CORDS",text:e,opts:[{label:"\u2190 Volver",close:!0}]}),ae("title").classList.add("on")};var Tt=84,Hi=132,Lr=-42,Dr=-72,hc=[[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]],vu=null,Wp=null,Xp=null,zi=null,Ds=null,Fr=null,Us=null,Mu=null,uc=null,sc=null,cu=null,Fa=0,Gt={x:0,z:0};function hu(n){let e=new Uint8Array(Tt*Hi);for(let t=0;t<Hi;t++)for(let i=0;i<Tt;i++){let s=Lr+i+.5,r=Dr+t+.5;for(let a of Si)if(!a.dyn&&a.h>n&&s>a.x0-.7&&s<a.x1+.7&&r>a.z0-.7&&r<a.z1+.7){e[t*Tt+i]=1;break}}return e}function uu(n,e){let t=n.slice();for(let i of Si){if(!i.dyn||i.h<=e||i.x0>5e3)continue;let s=Math.max(0,Math.floor(i.x0-.7-Lr)),r=Math.min(Tt-1,Math.ceil(i.x1+.7-Lr)),a=Math.max(0,Math.floor(i.z0-.7-Dr)),o=Math.min(Hi-1,Math.ceil(i.z1+.7-Dr));for(let l=a;l<=o;l++)for(let c=s;c<=r;c++){let h=Lr+c+.5,d=Dr+l+.5;h>i.x0-.7&&h<i.x1+.7&&d>i.z0-.7&&d<i.z1+.7&&(t[l*Tt+c]=1)}}return t}var Lu=(n,e)=>sn(Math.floor(e-Dr),0,Hi-1)*Tt+sn(Math.floor(n-Lr),0,Tt-1);function bi(n,e,t){let i=new Int16Array(Tt*Hi).fill(-1),s=new Int32Array(Tt*Hi),r=0,a=0,o=Lu(n,e);if(t[o]){let l=-1,c=1e9,h=o%Tt,d=o/Tt|0;for(let u=-4;u<=4;u++)for(let f=-4;f<=4;f++){let g=h+f,_=d+u;g<0||_<0||g>=Tt||_>=Hi||!t[_*Tt+g]&&f*f+u*u<c&&(c=f*f+u*u,l=_*Tt+g)}if(l<0)return i;o=l}for(i[o]=0,s[a++]=o;r<a;){let l=s[r++],c=l%Tt,h=l/Tt|0,d=i[l];for(let u=0;u<8;u++){let f=c+hc[u][0],g=h+hc[u][1];if(f<0||g<0||f>=Tt||g>=Hi)continue;let _=g*Tt+f;t[_]||i[_]>=0||u>=4&&(t[h*Tt+f]||t[g*Tt+c])||(i[_]=d+1,s[a++]=_)}}return i}function Fs(n,e,t,i){if(!n)return null;let s=Lu(t,i),r=s%Tt,a=s/Tt|0,o=n[s]>=0?n[s]:1e9,l=-1,c=-1;for(let f=0;f<8;f++){let g=r+hc[f][0],_=a+hc[f][1];if(g<0||_<0||g>=Tt||_>=Hi)continue;let m=_*Tt+g;n[m]<0||e[m]&&!e[s]||f>=4&&(e[a*Tt+g]||e[_*Tt+r])||n[m]<o&&(o=n[m],l=g,c=_)}if(l<0)return null;let h=Lr+l+.5-t,d=Dr+c+.5-i,u=Math.hypot(h,d)||1;return{x:h/u,z:d/u}}function wc(){vu&&(zi=uu(vu,.95),Ds=uu(Wp,.6),Fr=uu(Xp,.3),Us=bi(0,-62,Fr))}function Rv(){vu=hu(.95),Wp=hu(.6),Xp=hu(.3),wc()}function qp(n,e,t){if(!Us)return{x:0,z:-62};for(let i=0;i<t;i++){let s=Fs(Us,Fr,n,e);if(!s)break;n+=s.x,e+=s.z}return{x:n,z:e}}function Ac(n,e,t){for(let i=0;i<2;i++)for(let s of Si){if(s.h<=t)continue;let r=sn(n.x,s.x0,s.x1),a=sn(n.z,s.z0,s.z1),o=n.x-r,l=n.z-a,c=o*o+l*l;if(c<e*e)if(c>1e-6){let h=Math.sqrt(c);n.x+=o/h*(e-h),n.z+=l/h*(e-h)}else{let h=n.x-s.x0,d=s.x1-n.x,u=n.z-s.z0,f=s.z1-n.z,g=Math.min(h,d,u,f);g===h?n.x=s.x0-e:g===d?n.x=s.x1+e:g===u?n.z=s.z0-e:n.z=s.z1+e}}}function Cv(n,e){let t=0;for(let i of Si)i.h<=1.3&&i.h>0&&n>i.x0-.2&&n<i.x1+.2&&e>i.z0-.2&&e<i.z1+.2&&(t=Math.max(t,i.h));return t}function Pv(n,e,t,i,s,r){let a=s-t,o=r-i,l=a*a+o*o||1,c=sn(((n-t)*a+(e-i)*o)/l,0,1);return Math.hypot(n-(t+a*c),e-(i+o*c))}var Iv=new ot(1,1,1),Lv=[-34.4,-40.4,-46.4,-52.4,-58.4],Dv=[[-38,-30],[-26,-14],[-8,8],[14,26]],Ti=[],ps=[],Je={t:0,warned:!1,rng:Math.random,navT:0,dirty:!1,entLocked:!1,exitLocked:!1,lastWarnSec:0};function Ps(n,e,t){let i=e==="low"?1:2.6,s=new Le(Iv,yn(t||(e==="low"?14275264:e==="door"?11546672:12093003)));s.castShadow=!0,s.receiveShadow=!0,s.visible=!1,et.add(s);let r={x0:9999,x1:9999,z0:n-.6,z1:n+.6,h:0,dyn:!0};return Si.push(r),Eu.push(r),e!=="low"&&yc.push(r),{b:r,mesh:s,H:i,kind:e,zc:n}}function Qn(n,e,t,i=1){let s=n.b;if(t-e<.05||i<=0){s.x0=s.x1=9999,s.h=0,n.mesh.visible=!1;return}s.x0=e,s.x1=t,s.h=n.H,n.mesh.visible=!0,n.mesh.scale.set(t-e,n.H*i,s.z1-s.z0),n.mesh.position.set((e+t)/2,n.H*i/2,n.zc)}function dc(n){let e=ie.gapWidth,t=sn(n.gx-e/2,-40,40-e),i=t+e;n.g0=t,n.g1=i;let s=[[-40,t],[i,40]],r=s[0][1]-s[0][0]>=s[1][1]-s[1][0]?0:1,a=[],o=null;s.forEach((l,c)=>{if(!(l[1]-l[0]<.3))if(c===r&&l[1]-l[0]>=22){let h=sn((l[0]+l[1])/2+n.lowOff,l[0]+8,l[1]-8);o=[h-4,h+4],a.push([l[0],h-4]),a.push([h+4,l[1]])}else a.push(l)}),n.pieces.forEach((l,c)=>a[c]?Qn(l,a[c][0],a[c][1]):Qn(l,0,0)),o?Qn(n.low,o[0],o[1]):Qn(n.low,0,0),n.lowC=o?(o[0]+o[1])/2:null,n.doorOn?Qn(n.door,t,i,Math.max(.03,n.doorS)):Qn(n.door,0,0)}function Nv(n){let e=Je.rng,t=Ti[n.i-1],i=Ti[n.i+1],s=n.gx,r=-1;for(let a=0;a<24;a++){let o=(e()*2-1)*24,l=Math.min(t?Math.abs(o-t.tx):99,i?Math.abs(o-i.tx):99);Math.abs(o-n.gx)<ie.gapWidth*.9&&(l-=40),l>r&&(r=l,s=o)}return s}function Uv(){Lv.forEach((e,t)=>{let i={zc:e,i:t,gx:0,tx:0,g0:0,g1:0,lowOff:0,lowC:null,closed:!1,doorOn:!1,doorS:0,pieces:[Ps(e,"tall"),Ps(e,"tall"),Ps(e,"tall")],low:Ps(e,"low"),door:Ps(e,"door")};Ti.push(i)}),Dv.forEach(([e,t],i)=>{let s=Ps(-.6,"door"),r=Ps(-28.6,"door"),a=Zt("\u2716 CERRADO",(e+t)/2,3.4,1.4,7,"#ff4d4d");a.visible=!1,ps.push({a:e,b:t,ent:s,ex:r,tag:a,entOn:!1,exOn:!1,entS:0,exS:0})});let n=(e,t,i,s,r,a,o)=>{_t(e-3,t,e+3,i,2.2,s,0),Zt(r,e,3.4,o,5.5,a)};n(-35.5,-39.8,-39.4,15266542,"FARMACIA \u271A","#3ddc84",-39.8),n(35.5,-41.4,-41,15783136,"PERFUMER\xCDA","#ff9fd0",-41),n(-35.5,-47.4,-47,15261896,"\xD3PTICA \u{1F576}","#ffd18f",-47),n(35.5,-53.4,-53,4878218,"BA\xD1OS \u{1F6BB}","#8fd3ff",-53),Zt("DUTY FREE",0,6,-30,10,"#ffd75a"),Du(Math.random)}function Du(n){Je.rng=n,Je.entLocked=!1,Je.exitLocked=!1,Je.warned=!1,Je.t=ie.shiftSec||0,Ti.forEach((e,t)=>{e.gx=e.tx=(t%2?-1:1)*(8+n()*14),e.lowOff=(n()-.5)*10,e.closed=!1,e.doorOn=!1,e.doorS=0,dc(e)}),ps.forEach(e=>{e.entOn=e.exOn=!1,e.entS=e.exS=0,Qn(e.ent,0,0),Qn(e.ex,0,0),e.tag.visible=!1}),wc(),Tu()}function Fv(){if(!ie.laneClose)return;let n=ie.diff==="experto"?2:1,e=new Set;for(;e.size<n;)e.add(Math.floor(Je.rng()*4));ps.forEach((t,i)=>{let s=e.has(i);t.entOn=s,t.entS=s?Math.max(.03,t.entS):0,t.tag.visible=s,s||Qn(t.ent,0,0)}),Je.dirty=!0}function Ov(n){if(ie.doorsClose){!Je.entLocked&&n.pz<-2.5&&(Je.entLocked=!0,ps.forEach(e=>{e.entOn=!0,e.entS=Math.max(.03,e.entS),e.tag.visible=!1}),Je.dirty=!0,du("Las puertas del control se cierran a tu espalda.")),!Je.exitLocked&&n.pz<-30.8&&(Je.exitLocked=!0,ps.forEach(e=>{e.exOn=!0,e.exS=.03}),Je.dirty=!0,du("La salida del control se bloquea tras de ti."));for(let e of Ti)!e.closed&&n.pz<e.zc-2.8&&(e.closed=!0,e.doorOn=!0,e.doorS=.03,dc(e),Je.dirty=!0,du("Una puerta se cierra detr\xE1s de ti. No hay vuelta atr\xE1s."))}}function du(n){Vi(.25,.3,500),Ke(90,.15,"square",.08),ze(n,3e3)}function Yp(){let n=be.userData,e=!1;n.pz>2&&!Je.entLocked&&ie.laneClose&&(Fv(),e=!0);for(let t of Ti)t.closed||n.pz<t.zc+3.5||(t.tx=Nv(t),e=!0);e&&(Je.shifted=!0,Vi(.7,.3,300),Ke(70,.25,"sawtooth",.1),ze("<b>\xA1El laberinto cambi\xF3!</b> Busca otro camino.",3200),I.shake=Math.max(I.shake||0,.35),Je.dirty=!0)}function Bv(n){let e=!1;for(let i of Ti)Math.abs(i.tx-i.gx)>.01?(i.gx+=sn(i.tx-i.gx,-14*n,14*n),dc(i),e=!0):i.doorOn&&i.doorS<1&&(i.doorS=Math.min(1,i.doorS+n*2.2),dc(i),e=!0);for(let i of ps)i.entOn&&(i.entS=Math.min(1,i.entS+n*2.2),Qn(i.ent,i.a,i.b,i.entS)),i.exOn&&(i.exS=Math.min(1,i.exS+n*2.2),Qn(i.ex,i.a,i.b,i.exS));if((e||Je.dirty)&&(Je.navT-=n,Je.navT<=0&&(Je.navT=.25,e||(Je.dirty=!1),wc(),!e&&Je.shifted&&(Je.shifted=!1,Tu()))),I.mode!=="play"||I.busy||!E)return;let t=be.userData;if(Ov(t),ie.shiftSec>0){Je.t-=n;let i=Math.ceil(Math.max(0,Je.t));Je.t<=ie.shiftWarn&&ie.shiftWarn>0&&i!==Je.lastWarnSec&&Je.t>0&&(Je.lastWarnSec=i,Ke(520,.06,"square",.05)),Je.t<=0&&(Yp(),Je.t=ie.shiftSec,Je.lastWarnSec=0)}}var Nr=[],Ns=[],zv=(()=>{let n=document.createElement("canvas");n.width=n.height=64;let e=n.getContext("2d"),t=e.createRadialGradient(32,32,4,32,32,30);return t.addColorStop(0,"rgba(235,235,235,.95)"),t.addColorStop(1,"rgba(200,200,200,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),new Un(n)})();function Nu(n,e,t,i){for(let s of Nr)if(Pv(s.x,s.z,n,e,t,i)<s.r*.75)return!0;return!1}var yp=(n,e,t,i)=>bc(n,e,t,i,yc)&&!Nu(n,e,t,i);function Na(n){if(!E||E.over||I.busy||I.mode!=="play")return;let e=be.userData;if(!(!E.inv[n]||e.hidden))if(E.inv[n]--,n==="smoke"){let t=new Ft;for(let i=0;i<7;i++){let s=new di(new $n({map:zv,transparent:!0,depthWrite:!1,opacity:.9}));s.scale.set(5,5,1),s.position.set(At(-2.2,2.2),At(.8,2.6),At(-2.2,2.2)),t.add(s)}t.position.set(e.px,0,e.pz),et.add(t),Nr.push({x:e.px,z:e.pz,r:5.5,t:ie.itemDur,m:t}),Vi(.8,.25,1500),ze("<b>Bomba de humo:</b> los polic\xEDas y los perros pierden la vista.",2600)}else if(n==="decoy"){let t=e.px,i=e.pz,s=Math.sin(e.ang),r=Math.cos(e.ang);for(let o=0;o<14;o++){let l=t+s,c=i+r;if(!bc(t,i,l,c,Si.filter(h=>h.h>1.2&&h.x0<5e3),.25))break;t=l,i=c}let a=new Le(new ot(.4,.3,.4),new Xt({color:16763955,emissive:16746496,emissiveIntensity:1.2}));a.position.set(t,.2,i),et.add(a),Ns.push({x:t,z:i,t:6,m:a,beepT:0}),ze("<b>Se\xF1uelo lanzado:</b> los polic\xEDas van hacia el ruido.",2600)}else n==="emp"?(E.camsOff=!0,E.empT=ie.itemDur,E.radioOff=ie.itemDur,En&&(En.stun=ie.itemDur),Vi(.5,.4,2200),Ke(1800,.2,"sawtooth",.08),ze("<b>Pulso EMP:</b> c\xE1maras, radio y dron fuera de servicio.",2800)):n==="dogspray"&&(E.dogOff=ie.itemDur,Br.forEach(t=>{t.state==="hunt"&&Math.hypot(t.x-e.px,t.z-e.pz)>3&&(t.state="return",t.sniff=0)}),Vi(.4,.2,3e3),ze("<b>Spray anti-perros:</b> los perros pierden el rastro.",2600))}function kv(n){for(let e=Nr.length-1;e>=0;e--){let t=Nr[e];t.t-=n,t.m.rotation.y+=n*.2,t.m.children.forEach(i=>i.material.opacity=Math.min(.9,t.t/2)),t.t<=0&&(et.remove(t.m),Nr.splice(e,1))}for(let e=Ns.length-1;e>=0;e--){let t=Ns[e];t.t-=n,t.beepT-=n,t.beepT<=0&&(t.beepT=.55,Ke(1400,.05,"square",.05)),t.m.position.y=.2+Math.abs(Math.sin(I.t*12))*.15,t.t<=0&&(et.remove(t.m),Ns.splice(e,1))}E&&(E.empT>0&&(E.empT-=n,E.empT<=0&&(E.camsOff=!1)),E.radioOff>0&&(E.radioOff-=n),E.dogOff>0&&(E.dogOff-=n))}var En=null;function Hv(){let n=new Ft,e=new Le(new ot(.9,.22,.9),new Xt({color:1711396}));n.add(e);let t=[];[[-.55,-.55],[.55,-.55],[-.55,.55],[.55,.55]].forEach(([a,o])=>{let l=new Le(new pi(.34,.34,.03,12),new Ot({color:1639,transparent:!0,opacity:.55}));l.position.set(a,.16,o),n.add(l),t.push(l)});let i=new Le(new gi(.12,8,8),new Ot({color:16720418}));i.position.set(0,-.05,.45),n.add(i);let s=new Le(new mr(4.4,7,20,1,!0),new Ot({color:16773800,transparent:!0,opacity:.12,side:Pn,depthWrite:!1}));s.position.y=-3.5,n.add(s);let r=new Le(new pr(4.4,28),new Ot({color:16773800,transparent:!0,opacity:.28,depthWrite:!1}));r.rotation.x=-Math.PI/2,et.add(r),n.position.set(0,7,-30),n.visible=!1,r.visible=!1,et.add(n),En={m:n,disc:r,beam:s,led:i,rotors:t,x:0,z:-30,y:7,wp:0,stun:0,sees:!1,active:!1,tx:0,tz:-30}}var vp=[[0,-31],[-20,-37.4],[20,-43.4],[-20,-49.4],[20,-55.4],[0,-62],[20,-31],[-20,-43.4],[20,-37.4],[-20,-55.4]];function Vv(n){let e=En;if(!e)return;let t=I.mode==="play"&&E&&ie.droneOn;if(e.active=!!(t&&(E.passed||ie.diff==="experto")),e.m.visible=e.active,e.disc.visible=e.active,!e.active)return;let i=be.userData;if(e.rotors.forEach((d,u)=>d.rotation.y+=n*40*(u%2?1:-1)),e.stun>0){e.stun-=n,e.y=Math.max(3,e.y-n*2),e.sees=!1,e.disc.material.color.set(5592405),e.m.position.set(e.x,e.y,e.z),e.disc.position.set(e.x,.08,e.z);return}e.y+=(7-e.y)*Math.min(1,n*2);let s,r;if(E.lastKnown&&Tn.some(d=>d.chaser))s=E.lastKnown.x,r=E.lastKnown.z;else{let d=vp[e.wp];s=d[0],r=d[1],Math.hypot(s-e.x,r-e.z)<2&&(e.wp=(e.wp+1+Math.floor(Math.random()*3))%vp.length)}let a=s-e.x,o=r-e.z,l=Math.hypot(a,o);if(l>.5){let d=Math.min(ie.droneSpeed,l*2);e.x+=a/l*d*n,e.z+=o/l*d*n}e.m.position.set(e.x,e.y,e.z),e.disc.position.set(e.x,.08,e.z);let c=Math.hypot(i.px-e.x,i.pz-e.z),h=e.sees;if(e.sees=!I.busy&&!i.hidden&&c<4.4&&!Nu(e.x,e.z,i.px,i.pz),e.disc.material.color.set(e.sees?16728128:16773800),e.beam.material.color.set(e.sees?16736352:16773800),e.led.material.color.set(e.sees?16711680:2293606),e.sees&&(h||(ze("<b>\u{1F681} \xA1El dron te ilumina!</b> Todos saben d\xF3nde est\xE1s.",2600),Ke(1100,.15,"sawtooth",.07)),E.lastKnown={x:i.px,z:i.pz},Ei(7*n),Tn.forEach(d=>{d.stun<=0&&d.state!=="hunt"&&(d.state="hunt",d.huntT=0,d.chaser=!1)}),e.alertT=(e.alertT||0)-n,E.heat>=ie.chaseHeat&&e.alertT<=0&&!Tn.some(d=>d.chaser))){e.alertT=2;let d=Tn.filter(u=>u.stun<=0).sort((u,f)=>Math.hypot(u.x-i.px,u.z-i.pz)-Math.hypot(f.x-i.px,f.z-i.pz))[0];d&&Rc(d)}}function Gv(n){let e=be.userData;e.hidden=n,e.hideT=0,e.crouch=!1,be.visible=!1,E.compromised=!!I.chasersSee,ze(E.compromised?"<b>\xA1Te vieron esconderte!</b> Van a revisar la taquilla...":"Te metes en una taquilla. Huele a calcetines y a miedo.",4e3)}function fc(){let n=be.userData,e=n.hidden;e&&(n.px=e.ex,n.pz=e.ez,n.vx=n.vz=0,n.hidden=null,n.hideT=0,be.visible=!0,E.compromised=!1)}var fu=!1;async function pc(n,e){if(I.busy||E.over||fu)return;fu=!0,I.busy=!0;let t=be.userData;t.hidden&&fc(),Ke(160,.3,"sawtooth",.1),Vi(.4,.3,800),ze(e==="dog"?"<b>\xA1EL PERRO TE AGARR\xD3!</b>":"<b>\xA1UN POLIC\xCDA TE AGARR\xD3!</b>",3e3);let i=await Ru("struggle",e==="dog"?{n:16,t:4300}:{n:20,t:4300});if(E.over)return;if(!i.score){Bs("busted","DETENIDO",e==="dog"?'Los colmillos del perro se cierran sobre tu pantorrilla. "Buen chico", dice el gu\xEDa. Esta noche cenar\xE1 mejor que t\xFA.<br>Las esposas son fr\xEDas. Tu est\xF3mago, por ahora, es el \xFAnico que no est\xE1 arrestado.':'Una mano enorme te aplasta contra la pared. "Alto, ciudadano". Lo de "ciudadano" son\xF3 a "culpable".<br>Las esposas son fr\xEDas. Tu est\xF3mago, por ahora, es el \xFAnico que no est\xE1 arrestado.');return}n.stun=ie.stunSec,E.invuln=3,Ei(20),Sc(ie.adrenLife);let s=t.px-n.x,r=t.pz-n.z,a=Math.hypot(s,r)||1;t.px+=s/a*1.8,t.pz+=r/a*1.8,Gt.x=t.px,Gt.z=t.pz,Ac(Gt,$p,0),t.px=Gt.x,t.pz=Gt.z,ze("<b>\xA1Te zafaste!</b> Corre, salta o esc\xF3ndete antes de que se recupere.",4500),I.busy=!1,fu=!1}var $p=.45,mc=0;function Wv(n){let e=be.userData,t=I.mode==="play";if(I.mode==="cine"||I.mode==="cabin")return uM(n);if(t&&!I.busy&&(wt.KeyZ&&(Ee.yaw+=n*1.8),wt.KeyX&&(Ee.yaw-=n*1.8)),e.hidden){e.px=e.hidden.x,e.pz=e.hidden.z,e.vx=e.vz=0,e.hideT+=n;return}let i=0,s=0,r=!1;if(t&&!I.busy){let c=jn("shoes")*.25,h=(wt.KeyD||wt.ArrowRight?1:0)-(wt.KeyA||wt.ArrowLeft?1:0),d=(wt.KeyS||wt.ArrowDown?1:0)-(wt.KeyW||wt.ArrowUp?1:0),u=0;if(gn.mag>.08&&(h+=gn.x,d+=gn.z,u=gn.mag),h||d){let p=Math.hypot(h,d),b=h/p,R=d/p,M=-Math.sin(Ee.yaw),S=-Math.cos(Ee.yaw),T=Math.cos(Ee.yaw),C=-Math.sin(Ee.yaw);i=M*-R+T*b,s=S*-R+C*b,r=!e.crouch&&(!!(wt.ShiftLeft||wt.ShiftRight)||u>.9)}let f=ie.walk+c,g=ie.run+c,_=e.crouch?ie.crouchSpeed:r?g:f;u&&!r&&!e.crouch&&(_=f*Math.min(1,u/.9));let m=Math.min(1,n*10);e.vx+=(i*_-e.vx)*m,e.vz+=(s*_-e.vz)*m,Mt.Space&&e.grounded&&(e.vy=9,e.grounded=!1,e.crouch=!1,Ke(320,.05,"triangle",.04))}else e.vx*=.8,e.vz*=.8;e.px+=e.vx*n,e.pz+=e.vz*n,Gt.x=e.px,Gt.z=e.pz,Ac(Gt,$p,e.y+.12),e.px=Gt.x,e.pz=Gt.z,e.px=sn(e.px,-118,118),e.pz=sn(e.pz,-69,56),e.vy-=26*n,e.y+=e.vy*n;let a=Cv(e.px,e.pz);e.y<=a&&e.vy<=0?(!e.grounded&&e.vy<-6&&t&&Ke(110,.05,"triangle",.05),e.y=a,e.vy=0,e.grounded=!0):e.y>a+.02&&(e.grounded=!1);let o=Math.hypot(e.vx,e.vz);o>.3&&(e.ang=Ln(e.ang,Math.atan2(e.vx,e.vz),Math.min(1,n*12))),be.position.set(e.px,e.y,e.pz),be.rotation.y=e.ang,be.scale.y=e.crouch?.78:1;let l=ti(be,o,n,r&&o>5);e.grounded||(e.legL.rotation.x=-.9,e.legR.rotation.x=.4,e.armL.rotation.x=-2.5,e.armR.rotation.x=-2),o>.8&&l!==mc&&(mc=l,t&&!e.crouch&&Ke(r?120:90,.04,"triangle",.035)),e.sprint=r&&o>5,e.speed=o}function Xv(n,e,t,i,s,r){let a=new Vt().setFromPoints([new O(n,e,t),new O(i,s,r)]),o=new ua(a,new dr({color:16769658}));et.add(o),setTimeout(()=>{et.remove(o),a.dispose()},90)}var qv=0;function Rc(n){if(n.stun>0||!E)return;let e=be.userData;n.state="hunt",n.chaser=!0,n.huntT=0,n.flank=qv++%2===1,n.lostT=0,n.armed&&(n.warn=ie.shootWarn,n.fireT=0),E.lastKnown={x:e.px,z:e.pz},Mu=bi(e.px,e.pz,zi),Fa=.3;let t=ie.radioAll&&!(E.radioOff>0);Tn.forEach(i=>{i!==n&&i.state==="patrol"&&i.stun<=0&&(t||Math.hypot(i.x-n.x,i.z-n.z)<ie.alertRadius)&&(i.state="hunt",i.chaser=!1,i.huntT=0,i.tf="G")}),Ke(1300,.1,"sawtooth",.06),setTimeout(()=>Ke(900,.1,"sawtooth",.06),130),ze(n.armed?"<b>\xA1ALTO O DISPARO!</b>":t?'<b>\xA1POLIC\xCDA!</b> Radio: "\xA1Sospechoso localizado!"':'<b>\xA1POLIC\xCDA!</b> "\xA1ALTO AH\xCD!"',3e3)}function Yv(n,e){let t=be.userData;n.fireT=At(ie.fireMin,Math.max(ie.fireMin,ie.fireMax));let i=sn(ie.hitBase-e*.016,.1,ie.hitBase);t.y>.4&&(i*=.4),t.crouch&&(i*=.7),t.sprint&&(i*=.8),E.invuln>0&&(i=0);let s=Math.random()<i,r=t.px+(s?0:At(-1.8,1.8)),a=t.pz+(s?0:At(-1.8,1.8));Xv(n.x+Math.sin(n.ang)*.6,1.25,n.z+Math.cos(n.ang)*.6,r,1+t.y,a),n.flash.visible=!0,n.flashT=.08,Vi(.12,.3,2600),Ke(150,.08,"square",.1),s?(E.hp-=ie.bulletDmg,E.hitFlash=.5,I.shake=Math.max(I.shake||0,.4),Ur(`-${ie.bulletDmg} salud`,"#ff3b3b"),ze("<b>\xA1TE DISPARARON!</b>",1500),navigator.vibrate&&navigator.vibrate(120),E.hp<=0&&Bs("shot","TE DISPARARON",'Un estruendo seco y el suelo sube hacia tu cara. "Alto" era una sugerencia con balas.<br>Lo \xFAltimo que escuchas es a alguien diciendo "tranquilos, tiene algo en el est\xF3mago". Eso no mejora el d\xEDa de nadie.')):Math.random()<.5&&ze("Una bala silba junto a tu oreja.",1200)}function $v(n){let e=be.userData,t=I.mode==="play"&&E;I.chasing=!1,I.chasersSee=!1;let i=Ns[0]||null;if(t&&(E.invuln=Math.max(0,E.invuln-n),E.hitFlash=Math.max(0,E.hitFlash-n),Fa-=n,Fa<=0)){Fa=.3;let r=Tn.some(a=>a.state==="hunt");E.lastKnown&&r&&(Mu=bi(E.lastKnown.x,E.lastKnown.z,zi)),E.lastKnownDog&&Br.some(a=>a.state==="hunt")&&(uc=bi(E.lastKnownDog.x,E.lastKnownDog.z,Ds)),ie.flank&&Tn.some(a=>a.chaser&&a.flank)?(E.flankPt=qp(e.px,e.pz,16),sc=bi(E.flankPt.x,E.flankPt.z,zi)):sc=null,cu=i?bi(i.x,i.z,zi):null}let s=!1;for(let r of Tn){if(r.moving=!1,r.flashT>0&&(r.flashT-=n,r.flashT<=0&&(r.flash.visible=!1)),r.stun>0){r.stun-=n,r.cone.visible=!1,r.bang.visible=!1,r.seeing=!1,r.aiming=!1,r.m.position.set(r.x,0,r.z),ti(r.m,0,n,!1);continue}r.cone.visible=!0,r.cone.scale.setScalar((e.crouch?.55:1)*ie.visionMul);let a=!1;if(t&&!e.hidden){let o=e.px-r.x,l=e.pz-r.z,c=Math.hypot(o,l),h=r.range*ie.visionMul*(e.crouch?.55:1);(c<h&&Math.abs(wp(Math.atan2(o,l)-r.ang))<r.fov||c<2.2)&&yp(r.x,r.z,e.px,e.pz)&&(a=!0)}if(a&&!r.seeing&&Ke(1500,.06,"square",.04),r.seeing=a,a?(s=!0,r.lostT=0,r.aware=Math.min(1.5,r.aware+n*(.5+E.heat/90+(e.sprint?.6:0))),r.aware>=1&&E.heat>=ie.chaseHeat&&!r.chaser&&Rc(r),r.chaser&&(E.lastKnown={x:e.px,z:e.pz},I.chasersSee=!0),r.tf="G"):(r.aware=Math.max(0,r.aware-n*.4),r.lostT=(r.lostT||0)+n),r.state==="patrol"){if(r.path.length>1)if(r.wait>0)r.wait-=n,r.ang+=Math.sin(I.t*2)*n*1.2;else{let o=r.path[r.i],l=o[0]-r.x,c=o[1]-r.z,h=Math.hypot(l,c),d=r.speed*ie.patrolMul;h<.4?(r.i=(r.i+1)%r.path.length,r.wait=At(.4,1.6)):(r.x+=l/h*d*n,r.z+=c/h*d*n,r.ang=Ln(r.ang,Math.atan2(l,c),Math.min(1,n*5)),r.moving=!0,r.curSpeed=d)}else r.ang=r.base+Math.sin(I.t*.8+r.x)*r.sweep;i&&Math.hypot(i.x-r.x,i.z-r.z)<32&&!a&&(r.state="hunt",r.chaser=!1,r.huntT=0,r.tf="DEC")}else if(r.state==="hunt"){i&&!a&&(!r.chaser||r.lostT>2)?r.tf="DEC":r.tf==="DEC"&&!i&&(r.tf="G");let o=E?E.lastKnown:null,l=Mu;r.tf==="DEC"&&i&&cu?(o=i,l=cu):r.chaser&&r.flank&&ie.flank&&sc&&E&&E.flankPt&&r.lostT>.4&&(o=E.flankPt,l=sc);let c=o?Math.hypot(o.x-r.x,o.z-r.z):0;if(o&&c>1.6&&l){let h=Fs(l,zi,r.x,r.z);h&&(r.curSpeed=r.chaser?E.heat>70?ie.chaseSpeedHot:ie.chaseSpeed:ie.chaseSpeed*.68,r.x+=h.x*r.curSpeed*n,r.z+=h.z*r.curSpeed*n,r.ang=Ln(r.ang,Math.atan2(h.x,h.z),Math.min(1,n*9)),r.moving=!0,Gt.x=r.x,Gt.z=r.z,Ac(Gt,.45,.95),r.x=Gt.x,r.z=Gt.z),r.huntT=0}else r.huntT+=n,r.ang+=Math.sin(I.t*3)*n*2.2,r.huntT>6&&(r.state="return",r.chaser=!1,r.aware=0,r.tf="G",r.retField=bi(r.path[r.i][0],r.path[r.i][1],zi))}else if(r.state==="return"){let o=r.path[r.i][0],l=r.path[r.i][1];if(Math.hypot(o-r.x,l-r.z)<1.2)r.state="patrol";else{let c=Fs(r.retField,zi,r.x,r.z);c?(r.curSpeed=2.4,r.x+=c.x*2.4*n,r.z+=c.z*2.4*n,r.ang=Ln(r.ang,Math.atan2(c.x,c.z),Math.min(1,n*6)),r.moving=!0):r.state="patrol"}}if(r.aiming=!1,t&&r.armed&&r.chaser&&!e.hidden&&!I.busy){let o=e.px-r.x,l=e.pz-r.z,c=Math.hypot(o,l);c<ie.shootRange&&c>3.2&&yp(r.x,r.z,e.px,e.pz)&&(r.aiming=!0,r.warn-=n,r.fireT-=n,r.ang=Ln(r.ang,Math.atan2(o,l),Math.min(1,n*10)),r.warn<=0&&r.fireT<=0&&Yv(r,c))}if(r.m.position.set(r.x,0,r.z),r.m.rotation.y=r.ang,ti(r.m,r.moving?r.curSpeed:0,n,r.chaser&&r.moving),r.aiming&&(r.m.userData.armR.rotation.x=-1.5),r.bang.visible=a||r.chaser,r.cone.material.color.set(a||r.chaser?16724016:16769357),r.cone.material.opacity=a||r.chaser?.38:.2,r.chaser&&(I.chasing=!0),t&&!I.busy){let o=Math.hypot(e.px-r.x,e.pz-r.z);(r.chaser&&E.invuln<=0&&!e.hidden&&o<1.15&&e.y<1||e.hidden&&r.state==="hunt"&&E.invuln<=0&&Math.hypot(e.hidden.x-r.x,e.hidden.z-r.z)<2.1&&(E.compromised||Math.random()<n*.8))&&pc(r,"guard")}}if(t&&!I.busy)if(s){let r=(2.2+(e.sprint?4.5:0)+E.heat*.05)*(E.profile.id==="student"?.85:1)*(E.disguised?.7:1)*(E.camsOff?.35:1);Ei(r*n)}else E.heat=Math.max(0,E.heat-(e.hidden&&!E.compromised?1.6:.7)*n);I.seen=s}function Zp(n){if(!E)return;let e=be.userData;n.state="hunt",n.huntT=0,E.lastKnownDog={x:e.px,z:e.pz},uc=bi(e.px,e.pz,Ds),Fa=.3,Ei(8),Ke(260,.12,"sawtooth",.08),setTimeout(()=>Ke(220,.12,"sawtooth",.08),150),ze("<b>\xA1El perro te detect\xF3!</b> Corre, salta o esc\xF3ndete.",4e3),(n.h.state!=="hunt"||!n.h.chaser)&&Rc(n.h)}function Zv(n){let e=be.userData,t=I.mode==="play"&&E,i=0;for(let s of Br){let r=s.h,a=0,o=!1;if(s.stun>0){s.stun-=n,s.m.position.set(s.x,0,s.z),pp(s.m,0,n,!1);continue}let l=Math.hypot(e.px-s.x,e.pz-s.z);if(t&&s.state!=="hunt"&&!I.busy){let c=kp("dog"),h=ie.dogRadius+c*ie.dogRadiusSmell;if(l<h&&!(E.dogOff>0)){let d=c*ie.dogRate*(1-l/h);bc(s.x,s.z,e.px,e.pz,yc)||(d*=.55),Nu(s.x,s.z,e.px,e.pz)&&(d*=.5),e.hidden&&(d*=.35),e.crouch&&(d*=.75),e.sprint&&(d*=1.3),s.sniff+=d*n}else s.sniff=Math.max(0,s.sniff-.15*n);s.sniff>=1&&Zp(s)}if(s.state==="follow"){let c=r.x+Math.sin(r.ang+.9)*s.off,h=r.z+Math.cos(r.ang+.9)*s.off,d=c-s.x,u=h-s.z,f=Math.hypot(d,u);a=Math.min(f*3,3.2),f>.05&&(s.x+=d/f*a*n,s.z+=u/f*a*n,s.ang=Ln(s.ang,Math.atan2(d,u),Math.min(1,n*8))),t&&s.sniff>.25&&l<30&&(s.ang=Ln(s.ang,Math.atan2(e.px-s.x,e.pz-s.z),Math.min(1,n*3))),o=s.sniff>.5}else if(s.state==="hunt"){o=!0;let c=e.hidden?l<5:l<16;t&&c&&!(E.dogOff>0&&l>3)&&(E.lastKnownDog={x:e.px,z:e.pz});let h=E&&E.lastKnownDog?E.lastKnownDog:{x:s.x,z:s.z};if(Math.hypot(h.x-s.x,h.z-s.z)>1.2&&uc){let u=Fs(uc,Ds,s.x,s.z);u&&(a=ie.dogSpeed,s.x+=u.x*a*n,s.z+=u.z*a*n,s.ang=Ln(s.ang,Math.atan2(u.x,u.z),Math.min(1,n*12)),Gt.x=s.x,Gt.z=s.z,Ac(Gt,.35,.6),s.x=Gt.x,s.z=Gt.z),s.huntT=0}else s.huntT+=n,s.huntT>5&&(s.state="return",s.sniff=.3,s.retT=0);t&&!I.busy&&E.invuln<=0&&(!e.hidden&&l<1.05&&e.y<1||e.hidden&&Math.hypot(e.hidden.x-s.x,e.hidden.z-s.z)<1.6)&&pc(s,"dog")}else if(s.state==="return"){s.retT-=n,s.retT<=0&&(s.retT=.6,s.retField=bi(r.x,r.z,Ds));let c=s.retField?Fs(s.retField,Ds,s.x,s.z):null;Math.hypot(r.x-s.x,r.z-s.z)<2.5||!c?s.state="follow":(a=4.5,s.x+=c.x*a*n,s.z+=c.z*a*n,s.ang=Ln(s.ang,Math.atan2(c.x,c.z),Math.min(1,n*8)))}s.sp=a,s.m.position.set(s.x,0,s.z),s.m.rotation.y=s.ang,pp(s.m,a,n,o),s.state==="hunt"&&(I.chasing=!0),o&&Math.random()<n*3&&Ke(240,.07,"sawtooth",.05),i=Math.max(i,s.state==="hunt"?1:s.sniff)}E&&(E.sniff=Math.min(1,i))}function Jv(n){for(let e of Su){if(e.queue){ti(e.m,0,n,!1);continue}if(e.wait>0){e.wait-=n,ti(e.m,0,n,!1);continue}if(!e.t){lv(e);continue}let t=e.t.x-e.p.x,i=e.t.z-e.p.z,s=Math.hypot(t,i);if(s<.3){e.t=null,e.wait=At(1,5);continue}e.p.x+=t/s*e.speed*n,e.p.z+=i/s*e.speed*n,e.ang=Ln(e.ang,Math.atan2(t,i),Math.min(1,n*6)),e.m.position.set(e.p.x,0,e.p.z),e.m.rotation.y=e.ang,ti(e.m,e.speed,n,!1)}for(let e of Lp)e.parked||(e.x+=e.dir*e.speed*n,e.x>170&&(e.x=-170),e.x<-170&&(e.x=170),e.m.position.x=e.x);ei&&!ei.parked&&ei.speed<14&&(ei.speed+=n*6);for(let e of _u)if(e.userData.beam)e.position.y=1+(Math.sin(I.t*2.2)*.5+.5)*1.6;else if(e.userData.belt){let t=(I.t*.8+e.userData.i/3)%1;e.position.set(e.userData.cx,.85,-6+t*2.4)}Dp.forEach((e,t)=>e.visible=Math.sin(I.t*5+t*3)>-.3),I.planeGo&&ds&&(I.planeV=(I.planeV||0)+n*6,ds.position.x+=I.planeV*n,ds.position.x>20&&(ds.position.y+=n*(ds.position.x-18)*.15));for(let e=lc.length-1;e>=0;e--){let t=lc[e],i=t.userData;i.life-=n,i.v.y-=14*n,t.position.addScaledVector(i.v,n),t.scale.multiplyScalar(1+n*1.2),t.material.opacity=Math.max(0,i.life/1.6),i.life<=0&&(et.remove(t),lc.splice(e,1))}}function Kv(n){for(let e of za)e.taken||!e.m.visible||Math.hypot(n.px-e.x,n.pz-e.z)<1.3&&Math.abs(n.y+1-e.y)<1.5&&(e.taken=!0,et.remove(e.m),E.picked=(E.picked||0)+1,e.type==="life"?(Sc(ie.pickupLife),Ke(880,.08,"sine",.08),setTimeout(()=>Ke(1180,.1,"sine",.08),80),ze(`<b>Anti\xE1cido:</b> +${Hn(ie.pickupLife)} s de vida para tus c\xE1psulas.`,2200)):(mv(ie.pickupTime),Ke(660,.08,"triangle",.08),setTimeout(()=>Ke(990,.1,"triangle",.08),80),ze(`<b>Reloj dorado:</b> +${Hn(ie.pickupTime)} s para abordar.`,2200)),navigator.vibrate&&navigator.vibrate(30))}function jv(n){if(I.mode!=="play"||!E)return;let e=be.userData;if(I.near=null,I.nearHide=null,I.busy)return;E.playT+=n,E.time-=n,E.life-=n*Op(e.hidden),E.pillLeft>0&&(E.pillLeft=Math.max(0,E.pillLeft-n)),ka(),E.life<Or()*.4&&Ei(.7*E.profile.nerv*n);let t=Math.ceil(Math.min(E.time,E.life));if(t!==E.lastBeep&&(E.lastBeep=t,t<=10&&t>0&&Ke(t<=3?1200:900,.07)),E.life<=0)return wu("time");if(E.time<=0)return Bp();if(E.integrity<45&&(E.crampT-=n,E.crampT<=0&&(E.crampT=At(8,14),Sv())),!E.passed&&e.pz<-29&&(E.passed=!0,ze("Pasaste seguridad. Ahora, el laberinto del Duty Free hasta la Puerta 27.",3500)),!e.hidden){for(let i of bu)if(!E.done[i.id]&&e.px>i.x0&&e.px<i.x1&&e.pz>i.z0&&e.pz<i.z1&&e.y<1.5){E.done[i.id]=!0,I.busy=!0,i.run().then(()=>{E.over||(I.busy=!1)});return}}if(!e.hidden){Kv(e);for(let i of vc)if(Math.hypot(e.px-i.x,e.pz-i.z)<i.r){I.near=i;break}for(let i of Mc)if(Math.hypot(e.px-i.x,e.pz-i.z)<2.3){I.nearHide=i;break}}Mt.KeyE&&I.near&&Mv(I.near),Mt.KeyH&&(e.hidden?fc():I.nearHide&&Gv(I.nearHide)),e.hidden&&e.hideT>.5&&(Mt.KeyE||Mt.Space||Mt.KeyW||Mt.KeyA||Mt.KeyS||Mt.KeyD||Mt.ArrowUp||Mt.ArrowDown||Mt.ArrowLeft||Mt.ArrowRight)&&fc(),Mt.KeyC&&!e.hidden&&(e.crouch=!e.crouch),Mt.KeyQ&&E.inv.pills>0&&(ze(Hp(),3500),Ei(2)),Mt.KeyR&&E.inv.perfume>0&&!E.inv.perfumeOn&&(E.inv.perfume--,E.inv.perfumeOn=!0,ze("Hueles a pino sint\xE9tico. Un pino con problemas legales.",3500)),Mt.Digit1&&Na("smoke"),Mt.Digit2&&Na("decoy"),Mt.Digit3&&Na("emp"),Mt.Digit4&&Na("dogspray")}function Qv(n){if(I.mode==="title"||!be){let f=I.t*.08;Jt.position.set(Math.sin(f)*50,22,10+Math.cos(f)*50),Jt.lookAt(0,2,-10);return}let e=be.userData,t=Ee.view==="fp"&&!(I.cine&&I.cine.camOverride);if(I.mode==="cabin"&&dM(n,t))return;if(I.exploded||(be.visible=!t&&!e.hidden),t){let f=(e.crouch?1.2:1.62)+e.y,g=e.grounded&&e.speed>.5?Math.sin(I.t*(e.sprint?14:9))*.035:0,_=0,m=0;E&&E.integrity<40&&I.mode==="play"&&(_=(Math.random()-.5)*.03,m=(Math.random()-.5)*.03),I.shake>0&&(I.shake-=n,_+=(Math.random()-.5)*I.shake*.4,m+=(Math.random()-.5)*I.shake*.4),Jt.position.set(e.px+_,f+g+m,e.pz);let p=Math.cos(Ee.fp);Jt.lookAt(e.px-Math.sin(Ee.yaw)*p*5,f+g+Math.sin(Ee.fp)*5,e.pz-Math.cos(Ee.yaw)*p*5),I.planeGo&&Jt.lookAt(ds.position.x*.5,3,-60);return}let i=e.px,s=1.6+e.y*.7,r=e.pz,a=Math.cos(Ee.pitch),o=i+Math.sin(Ee.yaw)*a*Ee.dist,l=s+Math.sin(Ee.pitch)*Ee.dist,c=r+Math.cos(Ee.yaw)*a*Ee.dist,h=Math.min(1,n*10);Ee.x+=(o-Ee.x)*h,Ee.y+=(l-Ee.y)*h,Ee.z+=(c-Ee.z)*h;let d=0,u=0;E&&E.integrity<40&&I.mode==="play"&&(d=(Math.random()-.5)*.04,u=(Math.random()-.5)*.04),I.shake>0&&(I.shake-=n,d+=(Math.random()-.5)*I.shake*.5,u+=(Math.random()-.5)*I.shake*.5),Jt.position.set(Ee.x+d,Math.max(.6,Ee.y+u),Ee.z),Jt.lookAt(i,s+.1,r),I.planeGo&&Jt.lookAt(ds.position.x*.5,3,-60)}var Is=ae("radar"),_e=Is.getContext("2d"),Mp=0,pu={x:0,z:-62};function eM(){let n=be.userData;if(n.pz>29)return{t:"Entra a la terminal",x:0,z:27};if(!E.passed){let t=null;return ps.forEach(i=>{if(i.entOn)return;let s=(i.a+i.b)/2,r=Math.abs(s-n.px);(!t||r<t.d)&&(t={x:s,d:r})}),{t:Je.entLocked?"Sal del control de seguridad":"Cruza el control de seguridad por un carril abierto",x:t?t.x:0,z:-1}}if(!ie.gps)return{t:"Llega a la Puerta 27 (modo sin flecha: gu\xEDate por el radar)",x:0,z:-62,far:!0};let e=performance.now();return e-Mp>350&&(Mp=e,pu=qp(n.px,n.pz,12)),{t:"Atraviesa el laberinto hasta la Puerta 27 (sigue la flecha amarilla)",x:pu.x,z:pu.z}}function tM(n){let e=be.userData,t=34,i=Is.width/2/t,s=Is.width/2;_e.clearRect(0,0,Is.width,Is.width),_e.save(),_e.beginPath(),_e.arc(s,s,s-2,0,Math.PI*2),_e.clip(),_e.fillStyle="#1b2430",_e.fillRect(0,0,Is.width,Is.width),_e.translate(s,s),_e.rotate(Ee.yaw),_e.scale(i,i),_e.translate(-e.px,-e.pz),_e.fillStyle="#2f3b4a",_e.fillRect(-40,-70,80,98);for(let h of Eu)h.x0>5e3||(_e.fillStyle=h.h<=1.3?"#8a9a7a":"#5b6878",_e.fillRect(h.x0,h.z0,h.x1-h.x0,h.z1-h.z0));_e.fillStyle="#37f0ff";for(let h of vc)_e.beginPath(),_e.arc(h.x,h.z,1,0,7),_e.fill();_e.fillStyle="#3ddc84";for(let h of Mc)_e.fillRect(h.x-.7,h.z-.7,1.4,1.4);for(let h of Tn){let d=h.chaser||h.seeing;_e.fillStyle=h.stun>0?"#777":d?"#ff2020":h.state==="hunt"?"#ff9020":"#ff7a7a",_e.beginPath(),_e.arc(h.x,h.z,h.chaser?1.5:1,0,7),_e.fill(),h.armed&&(_e.strokeStyle="#ffffff",_e.lineWidth=.4,_e.beginPath(),_e.arc(h.x,h.z,1.9,0,7),_e.stroke()),h.stun<=0&&(_e.fillStyle=d?"rgba(255,40,40,.35)":"rgba(255,225,77,.22)",_e.beginPath(),_e.moveTo(h.x,h.z),_e.arc(h.x,h.z,h.range*ie.visionMul,Math.PI/2-h.ang-h.fov,Math.PI/2-h.ang+h.fov),_e.closePath(),_e.fill())}for(let h of Br)_e.fillStyle=h.state==="hunt"?"#ff2020":"#ffa733",_e.beginPath(),_e.arc(h.x,h.z,h.state==="hunt"?1.4:.9,0,7),_e.fill();En&&En.active&&(_e.fillStyle=En.sees?"#ff2020":"#ffffff",_e.beginPath(),_e.arc(En.x,En.z,1.3,0,7),_e.fill());for(let h of Ns)_e.fillStyle="#ffcc33",_e.beginPath(),_e.arc(h.x,h.z,1.2,0,7),_e.fill();for(let h of za)h.taken||!h.m.visible||(_e.fillStyle=h.type==="life"?"#33ffaa":"#ffd23a",_e.fillRect(h.x-.6,h.z-.6,1.2,1.2));let r=n.x,a=n.z,o=r-e.px,l=a-e.pz,c=Math.hypot(o,l);c>t-3&&(r=e.px+o/c*(t-3),a=e.pz+l/c*(t-3)),_e.fillStyle="#f5c518",_e.beginPath(),_e.arc(r,a,1.5,0,7),_e.fill(),_e.restore(),_e.save(),_e.translate(s,s),_e.rotate(Ee.yaw-e.ang+Math.PI),_e.fillStyle=e.hidden?"#3ddc84":"#fff",_e.strokeStyle="#000",_e.lineWidth=1.5,_e.beginPath(),_e.moveTo(0,-8),_e.lineTo(6,7),_e.lineTo(0,3),_e.lineTo(-6,7),_e.closePath(),_e.fill(),_e.stroke(),_e.restore()}var nM=n=>n>70?["Estables","#3ddc84"]:n>40?["Inquietas","#ffb020"]:n>15?["Fugas \xE1cidas","#ff7a1a"]:["\xA1A PUNTO DE ESTALLAR!","#ff3b3b"];function iM(){if(!E||!E.cargo||I.mode==="title"||I.mode==="cine"||I.mode==="cabin")return;let n=be.userData,e=Math.max(E.time,0),t=ae("clock");t.textContent=`${Math.floor(e/60)}:${String(Math.floor(e)%60).padStart(2,"0")}`,t.className="hud "+(E.time<=10?"crit":E.time<=20?"warn":"");let i=ae("life");i.textContent=`\u{1F4A3} ${Math.max(E.life,0).toFixed(1)} s`,i.className="hud "+(E.life<=10?"crit":E.life<=20?"warn":"");let s=Math.round(E.heat/20);ae("stars").innerHTML=Array.from({length:5},(g,_)=>`<span class="${_<s?"on":"off"}">\u2605</span>`).join(""),ae("stars").className="hud"+(s>=3?" flash":""),ae("money").textContent="$"+String(E.cash).padStart(8,"0");let r=[];E.inv.pills&&r.push(`\u{1F48A} \xD7${E.inv.pills} (Q)`),E.inv.perfume&&r.push("\u{1F338} spray (R)"),E.inv.perfumeOn&&r.push("\u{1F338} aplicado"),E.inv.clothes&&r.push(`\u{1F454} \xD7${E.inv.clothes}`),E.inv.contact&&r.push("\u{1F4DE} contacto"),E.bagSwapped&&r.push("\u{1F9F3} maleta cambiada"),E.pillLeft>0&&r.push(`\u23F3 desgaste lento ${E.pillLeft.toFixed(0)}s`),ae("inv").innerHTML=r.join("<br>"),ae("itemsBar").innerHTML=[["1","\u{1F32B}\uFE0F","smoke"],["2","\u{1F4E3}","decoy"],["3","\u26A1","emp"],["4","\u{1F415}","dogspray"]].map(([g,_,m])=>`<span class="${E.inv[m]?"":"none"}"><b>${g}</b>${_}\xD7${E.inv[m]||0}</span>`).join(""),ae("diffTag").textContent=Oi[ie.diff]+(I.daily?" \xB7 RETO DIARIO":"");let[a,o]=nM(E.integrity);ae("stomLbl").textContent=a,ae("stomLbl").style.color=o,ae("stomBar").style.width=Math.max(0,E.integrity)+"%",ae("stomBar").style.background=o;let l=E.hp>ie.hp*.5?"#3ddc84":E.hp>ie.hp*.25?"#ffb020":"#ff3b3b";ae("hpBar").style.width=Math.max(0,E.hp/(ie.hp+jn("hp")*25)*100)+"%",ae("hpBar").style.background=l,ae("sniffBox").style.display=E.sniff>.03?"block":"none",ae("sniffBar").style.width=Math.min(100,E.sniff*100)+"%",ae("sniffBar").style.background=E.sniff>=1?"#ff2020":"#ffb020",ae("vig").style.background=`radial-gradient(ellipse at center, transparent ${45-E.hitFlash*40}%, rgba(255,0,0,${Math.min(.85,E.heat/100*.5+E.hitFlash*1.2)}) 100%)`;let c=ae("shift");if(I.mode==="play"&&ie.shiftSec>0&&!Je.entLocked||I.mode==="play"&&ie.shiftSec>0&&Ti.some(g=>!g.closed)){let g=Math.max(0,Je.t);c.style.display="block",c.textContent=`\u21BB Laberinto cambia en ${Math.ceil(g)} s`,c.className="hud"+(g<=ie.shiftWarn?" warn":"")}else c.style.display="none";let h=ae("alert");I.mode!=="play"?h.style.display="none":n.hidden?(h.style.display="block",h.className="hud "+(E.compromised?"bad":"ok"),h.textContent=E.compromised?"\u{1F441} TE VIERON ESCONDERTE":"\u{1F648} ESCONDIDO \xB7 c\xE1psulas m\xE1s lentas"):En&&En.sees?(h.style.display="block",h.className="hud bad",h.textContent="\u{1F681} \xA1TE ILUMINA EL DRON!"):Tn.some(g=>g.aiming)?(h.style.display="block",h.className="hud bad",h.textContent="\u{1F52B} \xA1TE APUNTAN!"):I.chasing?(h.style.display="block",h.className="hud bad",h.textContent="\u26A0 PERSECUCI\xD3N"):n.crouch?(h.style.display="block",h.className="hud ok",h.textContent="AGACHADO \xB7 sigiloso"):h.style.display="none";let d=eM();ae("obj").textContent=d.t,ae("obj").style.display=I.mode==="play"?"block":"none";let u=ae("prompt");I.mode==="play"&&!I.busy&&n.hidden?(u.style.display="block",u.innerHTML=`<b>${vi?"\u{1F648}":"H"}</b>Salir de la taquilla`):I.near&&!I.busy&&I.mode==="play"?(u.style.display="block",u.innerHTML=`<b>${vi?"\u270B":"E"}</b>${I.near.label}`):I.nearHide&&!I.busy&&I.mode==="play"?(u.style.display="block",u.innerHTML=`<b>${vi?"\u{1F648}":"H"}</b>Esconderse`):u.style.display="none",eu(E,{act:!!I.near&&!I.busy,hide:!!(I.nearHide||n.hidden),actLabel:I.near&&I.near.label==="Puerta de embarque"?"Abordar":"Actuar"}),ae("xhair").style.display=I.mode==="play"&&Ee.view==="fp"&&!I.busy?"block":"none",tM(d);let f=I.mode==="play"&&(!d.far||Math.hypot(n.px-d.x,n.pz-d.z)<28);Ir.visible=f,Ir.position.set(d.x,3.2+Math.sin(I.t*3)*.3,d.z),Ir.rotation.y=I.t*2}ap(_c,(()=>{try{return localStorage.getItem("simulator.mute")==="1"}catch{return!1}})());var bp=!1,sM=()=>{bp||(bp=!0,cp())};["pointerdown","keydown","touchstart"].forEach(n=>addEventListener(n,sM,{capture:!0,passive:!0}));function Jp(){let n=ae("btnMute");n&&(n.textContent=tn.muted?"\u{1F507}":"\u{1F50A}")}function Kp(){hp(!tn.muted);try{localStorage.setItem("simulator.mute",tn.muted?"1":"0")}catch{}Jp()}ae("btnMute").onclick=Kp;Jp();function Uu(){document.querySelectorAll("#viewSel button").forEach(n=>n.classList.toggle("on",n.dataset.v===Ee.view))}document.querySelectorAll("#viewSel button").forEach(n=>n.onclick=()=>{Ee.view=n.dataset.v;try{localStorage.setItem("simulator.view",Ee.view)}catch{}Pu(),Uu(),Ke(440,.05)});ae("btnViewIn").onclick=()=>{(I.mode==="play"||I.mode==="cabin"||I.mode==="cine")&&Iu()};Uu();addEventListener("keydown",n=>{n.code==="KeyM"&&!n.repeat&&!ae("admin").classList.contains("on")&&Kp()});var rc=0;function rM(n){let e="calm";if(I.mode==="cine"||I.mode==="cabin")e=I.cine&&I.cine.mood||"calm";else if(I.mode==="over")e=I.endMood||"sad";else if(I.mode==="play"&&E&&be){let t=be.userData,i=I.miniKind;I.chasing||Tn.some(r=>r.aiming)||En&&En.sees||E.time<=12||E.life<=10||i==="struggle"||i==="cramp"?rc=3:rc=Math.max(0,rc-n),I.seen||E.heat>=8||I.chasing?I.safeT=0:I.safeT=(I.safeT||0)+n,rc>0?e="adrenaline":I.inZone&&!i||t.hidden&&!E.compromised||I.safeT>5&&!i?e="calm":e="suspense",tn.intensity=sn(E.heat/100+(E.life<Or()*.4?.25:0)+(i?.2:0),0,1)}tc(e)}var He={x:2e3,z:0,hw:2.5,h:2.9},Mi=[-2.1,-1.48,-.86,.86,1.48,2.1],_n=n=>He.z+10-n*1.7,gc=null,fs=null,zn=null,Os=[],Fu=[],Gi=[];function aM(){_t(-2.5,-87.5,2.5,-69,.12,5593958,0),_t(-2.62,-87.5,-2.5,-69,2.9,13620701,0),_t(2.5,-87.5,2.62,-69,2.9,13620701,0),_t(-2.62,-87.5,2.62,-69,.14,13620701,2.9),_t(-2.52,-87.5+1,-2.48,-70,.8,10475246,1.3,{emissive:4890576,emissiveIntensity:.7}),_t(2.48,-87.5+1,2.52,-70,.8,10475246,1.3,{emissive:4890576,emissiveIntensity:.7}),_t(-.25,-87.5+.5,.25,-69-.5,.04,16777215,2.86,{emissive:16777215,emissiveIntensity:1.2}),_t(-1.1,-87.6,1.1,-87.5,2.3,1316895,.2),Zt("\u279C AVI\xD3N",0,3.6,-69.4,5,"#3ddc84")}function Sp(n){let e=document.createElement("canvas");e.width=128,e.height=128;let t=e.getContext("2d");if(n==="run"){let s=t.createLinearGradient(0,0,0,128);s.addColorStop(0,"#1d3a6b"),s.addColorStop(.42,"#e39a68"),s.addColorStop(.43,"#2b2e36"),s.addColorStop(1,"#14161b"),t.fillStyle=s,t.fillRect(0,0,128,128),t.fillStyle="#ffe9a0",t.fillRect(12,96,34,5),t.fillRect(76,96,34,5),t.fillStyle="#ffffff",t.fillRect(40,112,22,4),t.fillRect(104,112,22,4),t.fillStyle="#6fd0ff";for(let r=0;r<4;r++)t.fillRect(8+r*32,62,3,3);t.fillStyle="#ff5a3a",t.fillRect(20,68,3,3),t.fillRect(84,66,3,3)}else{let s=t.createLinearGradient(0,0,0,128);s.addColorStop(0,"#2f6fc4"),s.addColorStop(1,"#b8e3ff"),t.fillStyle=s,t.fillRect(0,0,128,128),t.fillStyle="rgba(255,255,255,.85)",[[20,40,22],[70,85,26],[105,30,16],[45,105,20]].forEach(([r,a,o])=>[-128,0,128].forEach(l=>{t.beginPath(),t.ellipse(r+l,a,o,o*.42,0,0,7),t.fill(),t.beginPath(),t.ellipse(r+l+o*.5,a-o*.2,o*.6,o*.32,0,0,7),t.fill()}))}let i=new Un(e);return i.colorSpace=Qt,i.wrapS=bs,i}var mu={};function oM(n){if(!mu[n]){let t=document.createElement("canvas");t.width=t.height=96;let i=t.getContext("2d");i.font='64px "Segoe UI Emoji", sans-serif',i.textAlign="center",i.textBaseline="middle",i.fillText(n,48,52),mu[n]=new Un(t)}let e=new di(new $n({map:mu[n],transparent:!0,depthWrite:!1}));return e.scale.set(.55,.55,1),e}function jp(n,e=-.25){let t=n.userData;t.legL.rotation.x=t.legR.rotation.x=-1.45,t.armL.rotation.x=t.armR.rotation.x=-.5,n.position.y=e}function us(n,e,t={}){let i=[12597547,3049153,2600544,15965202,9323693,15528177,1482885,13849600],s=o=>o[Math.random()*o.length|0],r=zr({shirt:t.shirt??s(i),pants:t.pants??s([2899536,4868682,8350282]),hair:t.hair??s([1118481,5913114,13214282,8947848]),skin:s([14726282,13012322,9263675,15845797]),hat:t.hat,tie:t.tie});r.position.set(n,0,e),r.rotation.y=t.ang??0,t.scale&&r.scale.setScalar(t.scale),gc.add(r),t.stand||jp(r);let a={m:r,x:n,z:e,id:t.id,name:t.name,talk:t.talk,done:!1,stand:!!t.stand,sleep:!!t.sleep,ph:Math.random()*6,marker:null,cleared:!1,tw:null};return t.mark&&(a.marker=oM(t.mark),a.marker.position.set(0,2.3/(t.scale||1),0),r.add(a.marker)),(t.talk?Os:Fu).push(a),a}var Cr={blocker:()=>({text:"<p>Un se\xF1or intenta meter en el compartimento una maleta del tama\xF1o de un refrigerador. Bloquea el pasillo y suda m\xE1s que t\xFA.</p><p>\u2014\xA1Esto cabe, tiene que caber!</p>",opts:[{label:"Ayudarlo a subir la maleta",hint:"+$60 de propina \xB7 +50 puntos",act(){return xn(60,50),'Entre los dos, la maleta entra... a la fuerza. Te da un billete arrugado: "Por si alg\xFAn d\xEDa necesitas un abogado".'}},{label:"Empujar la maleta con el pie",hint:"Pasas r\xE1pido, pero con mala fama",act(){return'La maleta entra de golpe y algo dentro grita: "\xA1Mis ukeleles!". Nadie te volver\xE1 a dirigir la palabra.'}},{label:"Esperar con paciencia",hint:"Ni premio ni castigo",act(){return xn(0,10),"Esperas. El se\xF1or acaba solo, jadeando, y te mira con respeto: eres la \xFAnica persona calmada del avi\xF3n. Si \xE9l supiera."}}]}),nervous:()=>({text:"<p>Un pasajero agarra el reposabrazos con tanta fuerza que ya no tiene huellas dactilares.</p><p>\u2014Odio volar. \xBFUsted no? Est\xE1 sudando mucho...</p>",opts:[{label:"Calmarlo con humor negro",hint:"+$30 \xB7 +30 puntos",act(){return xn(30,30),'"Si nos caemos, al menos no pagaremos equipaje extra". Se r\xEDe tanto que se le pasa el miedo y te da $30 "para tus nervios".'}},{label:"Fingir que t\xFA tambi\xE9n tienes miedo",hint:"+15 puntos",act(){return xn(0,15),"Os dais la mano. Se siente m\xE1s raro que reconfortante, pero los dos respir\xE1is mejor."}},{label:"Ignorarlo",hint:"",close:!0}]}),kid:()=>({text:"<p>Un ni\xF1o te mira fijamente con los ojos muy abiertos.</p><p>\u2014Se\xF1or, \xBFpor qu\xE9 hace ruido su barriga?</p>",opts:[{label:'"Es un animal muy t\xEDmido"',hint:"+20 puntos",act(){return xn(0,20),'El ni\xF1o asiente, serio: "Yo tambi\xE9n tengo un h\xE1mster en la mochila". Prefieres no investigar.'}},{label:'"Es una c\xE1psula del tiempo"',hint:"+25 puntos",act(){return xn(0,25),"\u2014\xBFY cu\xE1ndo se abre? \u2014En unas horas, as\xED que yo me alejar\xEDa. El ni\xF1o pone cara de entender m\xE1s de lo que deber\xEDa."}},{label:"Hacerle chit\xF3n",hint:"",close:!0}]}),granny:()=>({text:"<p>Una abuelita con un bolso enorme te sonr\xEDe con ternura.</p><p>\u2014Hijo, \xBFme ayudas con la bolsa? Tengo galletas.</p>",opts:[{label:"Ayudarla con la bolsa",hint:"+$40 \xB7 +40 puntos",act(){return xn(40,40),'Te da una galleta y una nota: "S\xE9 lo que llevas dentro. Buen provecho". Te gui\xF1a un ojo. Parece que la familia est\xE1 por todas partes.'}},{label:"Aceptar solo la galleta",hint:"+15 puntos",act(){return xn(0,15),"La galleta est\xE1 deliciosa. No quieres pensar de qu\xE9 es el relleno."}},{label:"Declinar con educaci\xF3n",hint:"",close:!0}]}),exec:()=>({text:"<p>Un ejecutivo ronca con la boca abierta. Su cartera asoma del bolsillo como invit\xE1ndote a una mala decisi\xF3n.</p>",opts:[{label:"Dejarlo dormir en paz",hint:"+20 puntos",act(){return xn(0,20),"Le arreglas la almohada. Tu karma sube un poco; el de tu est\xF3mago, no."}},{label:"Taparle la boca con una revista",hint:"+10 puntos",act(){return xn(0,10),"El ronquido cambia a un silbido. Un pasajero cercano te aplaude en silencio."}},{label:"Robarle la cartera",hint:"+$100 \xB7 -30 puntos (karma)",act(){return xn(100,-30),'Dentro hay $100 y una tarjeta: "Don Chuy \xB7 Gerente de p\xE9rdidas de inventario". Te la guardas sudando fr\xEDo.'}}]}),mate:()=>({text:"<p>El pasajero del otro lado del pasillo te mira de reojo.</p><p>\u2014\xBFPrimera vez volando? Pareces nervioso. Respira.</p>",opts:[{label:"Contarle la verdad (medio en broma)",hint:"+$20 \xB7 +25 puntos",act(){return xn(20,25),'"Llevo medio kilo de sorpresas en el est\xF3mago". Se r\xEDe, cree que bromeas, y te da $20 para un caf\xE9 "por el susto".'}},{label:"Hablar del clima",hint:"+10 puntos",act(){return xn(0,10),"Hablan del clima durante tres minutos. Nunca ha existido una conversaci\xF3n m\xE1s segura."}},{label:"Fingir que duermes",hint:"",close:!0}]})};function lM(){let n=new Ft;et.add(n),gc=n;let e=(G,ne)=>new Xt({color:G,roughness:.85,...ne||{}}),t=(G,ne,Y,Q,se,Ne,Ce)=>{let ct=new Le(new ot(G,ne,Y),Ce);return ct.position.set(He.x+Q,se,He.z+Ne),n.add(ct),ct},i=He.hw,s=He.h;t(i*2,.1,28,0,-.05,0,e(2766416)),t(.95,.02,28,0,.01,0,e(8007477)),t(i*2,.1,28,0,s+.05,0,e(15330802,{emissive:13160152,emissiveIntensity:.9})),t(.3,.03,26,0,s-.01,0,e(16777215,{emissive:16777215,emissiveIntensity:1.1})),t(.1,s,28,-i-.05,s/2,0,e(14209991,{emissive:4867648,emissiveIntensity:1})),t(.1,s,28,i+.05,s/2,0,e(14209991,{emissive:4867648,emissiveIntensity:1})),t(i*2,s,.1,0,s/2,14.05,e(13488857)),t(i*2,s,.1,0,s/2,-14.05,e(13488857)),t(.8,.5,26,-i+.42,s-.62,0,e(15657696,{emissive:6973020,emissiveIntensity:1})),t(.8,.5,26,i-.42,s-.62,0,e(15657696,{emissive:6973020,emissiveIntensity:1})),t(i*2-.2,2.4,.06,0,1.4,13.9,e(8201525)),t(.07,2.2,1.3,-i+.015,1.1,12.7,e(2106412));let r=new Le(new mi(1.1,2.1),new Ot({color:13625599}));r.rotation.y=Math.PI/2,r.position.set(He.x-i+.06,1.05,He.z+12.7),n.add(r),Zt("SALIDA",He.x-i+.2,2.6,He.z+12.7,2.2,"#3ddc84"),Zt("34C \u2192",He.x,2.65,He.z-7.2,2.2,"#f5c518");let a=new ot(.6,.14,.58),o=new ot(.6,.82,.12),l=new ot(.4,.2,.14),c=84,h=new fi(a,e(2903439),c),d=new fi(o,e(2903439),c),u=new fi(l,e(15790320),c),f=new Ht,g=0;for(let G=0;G<14;G++)for(let ne of Mi){let Y=He.x+ne,Q=_n(G);f.position.set(Y,.45,Q),f.updateMatrix(),h.setMatrixAt(g,f.matrix),f.position.set(Y,.95,Q-.3),f.updateMatrix(),d.setMatrixAt(g,f.matrix),f.position.set(Y,1.47,Q-.3),f.updateMatrix(),u.setMatrixAt(g,f.matrix),g++}[h,d,u].forEach(G=>{G.instanceMatrix.needsUpdate=!0,G.frustumCulled=!1,n.add(G)});let _=Sp("run"),m=_.clone();m.needsUpdate=!0;let p=Sp("sky"),b=p.clone();b.needsUpdate=!0;let R=new Ot({map:_}),M=new Ot({map:m});zn={tL:_,tR:m,sL:p,sR:b,mL:R,mR:M};let S=new mi(.44,.58);S.rotateY(Math.PI/2);let T=new mi(.44,.58);T.rotateY(-Math.PI/2);let C=new fi(S,R,14),y=new fi(T,M,14),w=new fi(new ot(.05,.72,.58),e(2106412),28);for(let G=0;G<14;G++)f.position.set(He.x-i+.04,1.35,_n(G)),f.updateMatrix(),C.setMatrixAt(G,f.matrix),f.position.set(He.x+i-.04,1.35,_n(G)),f.updateMatrix(),y.setMatrixAt(G,f.matrix),f.position.set(He.x-i,1.35,_n(G)),f.updateMatrix(),w.setMatrixAt(G,f.matrix),f.position.set(He.x+i,1.35,_n(G)),f.updateMatrix(),w.setMatrixAt(14+G,f.matrix);[C,y,w].forEach(G=>{G.instanceMatrix.needsUpdate=!0,G.frustumCulled=!1,n.add(G)});let P=us(He.x,He.z+7.4,{id:"blocker",stand:!0,ang:0,name:"Pasajero con maleta gigante",talk:Cr.blocker,shirt:9323693,hat:8930338,mark:"\u{1F4AC}"}),F=new Le(new ot(1.1,.75,.45),e(5913130));F.position.set(0,2.5,.15),P.m.add(F),P.suit=F,us(He.x+Mi[3],_n(3),{id:"nervous",name:"Pasajero nervioso",talk:Cr.nervous,mark:"\u{1F4AC}"}),us(He.x+Mi[2],_n(6),{id:"kid",name:"Ni\xF1o curioso",talk:Cr.kid,scale:.72,mark:"\u{1F4AC}"}),us(He.x+Mi[3],_n(8),{id:"granny",name:"Abuelita de las galletas",talk:Cr.granny,hair:14540253,shirt:11562912,mark:"\u{1F4AC}"}),us(He.x+Mi[2],_n(9),{id:"exec",name:"Ejecutivo dormido",talk:Cr.exec,sleep:!0,tie:!0,shirt:1843760,pants:1843760,mark:"\u{1F4A4}"}),us(He.x+Mi[3],_n(11),{id:"mate",name:"Pasajero del pasillo",talk:Cr.mate,mark:"\u{1F4AC}"});let B=us(He.x-1.5,He.z+12.2,{id:"att",stand:!0,ang:Math.PI/2,shirt:11740453,pants:2763317,hat:11740453,hair:3810324});gc.att=B;let k=new Set(["11:2","11:3","3:3","6:2","8:3","9:2"]),D={low:4,med:7,high:11}[Wi]||7,W=0,Z=0;for(;W<D&&Z++<300;){let G=Math.random()*14|0,ne=Math.random()*6|0,Y=G+":"+ne;G<1||k.has(Y)||(k.add(Y),us(He.x+Mi[ne],_n(G),{}),W++)}fs=zr({shirt:11740453,pants:2763317,capCol:11740453,hair:3810324}),fs.position.set(2.6,0,-65.2),et.add(fs)}function Oa(n,e){let t=ae("chapter");t.innerHTML=n+(e?"<small>"+e+"</small>":""),t.classList.remove("show"),t.offsetWidth,t.classList.add("show")}var xc=n=>{ae("btnSkip").style.display=n?"block":"none"};ae("btnSkip").onclick=()=>{I.cine&&(I.cine.skip=!0)};var ki=n=>new Promise(e=>{let t=performance.now(),i=setInterval(()=>{(I.cine&&I.cine.skip||performance.now()-t>=n)&&(clearInterval(i),e())},40)});function cc(n,e,t){return new Promise(i=>{let s=I.cine,r=be.userData;if(s.skip)return r.px=n,r.pz=e,i();s.walk={x:n,z:e,speed:t,res:i}})}async function Ep(n,e){let t=ae("fade");t.textContent=n,t.classList.add("on"),await Ua(450),e&&await e(),await Ua(500),t.classList.remove("on"),await Ua(350)}function xn(n,e){E.bonusMoney=(E.bonusMoney||0)+n,E.bonusScore=(E.bonusScore||0)+e,n>0&&(E.tips=(E.tips||0)+n),n>0?(Ur("+$"+n,"#7ed957"),Bn("coin",4)):e>0&&Ur("+"+e+" pts","#f5c518")}function Pr(n,e,t,i,s,r,a=2){let o=I.cine;o.cam={p:new O(n,e,t),l:new O(i,s,r),k:a},o.camOverride=!0}function cM(){Gi.forEach(e=>et.remove(e.m)),Gi.length=0;let n=[12597547,3049153,2600544,15965202,9323693];for(let e=0;e<5;e++){let t=zr({shirt:n[e],pants:2899536,hair:[1118481,5913114,13214282][e%3],skin:[14726282,13012322,15845797][e%3],pack:e%2===0});t.position.set(e%2?.7:-.7,0,-67.5-e*2.6),t.rotation.y=Math.PI,et.add(t),Gi.push({m:t,sp:2.2+Math.random()*.4})}}function hM(n){for(let e=Gi.length-1;e>=0;e--){let t=Gi[e];t.m.position.z-=t.sp*n,ti(t.m,t.sp,n,!1),t.m.position.z<-86.6&&(et.remove(t.m),Gi.splice(e,1))}if(fs&&I.mode!=="title"){let e=be&&be.userData;e&&I.mode==="cine"&&(fs.rotation.y=Math.atan2(e.px-fs.position.x,e.pz-fs.position.z)),ti(fs,0,n,!1)}}function uM(n){let e=be.userData,t=I.cine||{},i=0;if(e.hidden=null,t.seated){e.vx=e.vz=0,e.legL.rotation.x=e.legR.rotation.x=-1.45,e.armL.rotation.x=e.armR.rotation.x=-.5,be.position.set(e.px,-.25,e.pz),be.rotation.y=0,be.scale.y=1;return}if(t.walk){let r=t.walk,a=r.x-e.px,o=r.z-e.pz,l=Math.hypot(a,o),c=r.speed*n;if(t.skip||l<=c){e.px=r.x,e.pz=r.z;let h=r.res;t.walk=null,h&&h()}else e.px+=a/l*c,e.pz+=o/l*c,e.ang=Ln(e.ang,Math.atan2(a,o),Math.min(1,n*10)),i=r.speed}else if(I.mode==="cabin"&&!I.busy&&!t.locked){let r=(wt.KeyD||wt.ArrowRight?1:0)-(wt.KeyA||wt.ArrowLeft?1:0),a=(wt.KeyS||wt.ArrowDown?1:0)-(wt.KeyW||wt.ArrowUp?1:0),o=0,l=0,c=0;gn.mag>.08&&(r+=gn.x,a+=gn.z,o=gn.mag);let h=2.4;if(r||a){let g=Math.hypot(r,a),_=r/g,m=a/g,p=Ee.view==="fp"?Ee.yaw:0,b=-Math.sin(p),R=-Math.cos(p),M=Math.cos(p),S=-Math.sin(p);l=b*-m+M*_,c=R*-m+S*_,wt.ShiftLeft||wt.ShiftRight||o>.9?h=3.4:o&&(h=2.4*o/.9)}let d=Math.min(1,n*10);e.vx+=(l*h-e.vx)*d,e.vz+=(c*h-e.vz)*d;let u=Os.find(g=>g.id==="blocker"),f=u&&!u.cleared?u.z+.95:He.z-13;e.px=sn(e.px+e.vx*n,He.x-.4,He.x+.4),e.pz=sn(e.pz+e.vz*n,f,He.z+13.5),i=Math.hypot(e.vx,e.vz),i>.3&&(e.ang=Ln(e.ang,Math.atan2(e.vx,e.vz),Math.min(1,n*12)))}else e.vx*=.8,e.vz*=.8;be.position.set(e.px,0,e.pz),be.rotation.y=e.ang,be.scale.y=1;let s=ti(be,i,n,!1);i>.8&&s!==mc&&(mc=s,Ke(85,.04,"triangle",.03)),e.speed=i,e.sprint=!1,e.grounded=!0,e.y=0}function dM(n,e){let t=I.cine,i=be.userData;if(t.camOverride&&t.cam){t.cp||(t.cp=Jt.position.clone(),t.cl=new O(i.px,1.2,i.pz));let r=Math.min(1,n*t.cam.k);t.cp.lerp(t.cam.p,r),t.cl.lerp(t.cam.l,r);let a=0,o=0;return t.shake>0&&(a=(Math.random()-.5)*t.shake*.05,o=(Math.random()-.5)*t.shake*.05),Jt.position.set(t.cp.x+a,t.cp.y+o,t.cp.z),Jt.lookAt(t.cl),be.visible=Ee.view!=="fp",!0}if(e)return be.visible=!1,!1;Ee.yaw=0,be.visible=!0;let s=He.x+(i.px-He.x)*.6;return Jt.position.set(s,1.95,Math.min(He.z+13.6,i.pz+3.3)),Jt.lookAt(s,1.3,i.pz-3),!0}function fM(n){if(I.cine.locked)return null;let t=null,i=1e9;for(let r of Os){if(r.done)continue;let a=Math.hypot((n.px-r.x)*.6,n.pz-r.z);a<1.9&&a<i&&(i=a,t={type:"pax",p:r,label:"Hablar con "+r.name})}let s=Os.find(r=>r.id==="blocker");return!t&&(!s||s.cleared)&&Math.abs(n.pz-_n(11))<1.1&&(t={type:"seat",label:"Sentarte \xB7 asiento 34C"}),t}function pM(n){let e=I.cine;if(!e||!zn)return;let t=be.userData,i=I.t;e.v+=(e.vTarget-e.v)*Math.min(1,n*1.2),e.scroll+=e.v*n,zn.tL.offset.x=-e.scroll,zn.tR.offset.x=e.scroll,zn.sL.offset.x=-e.scroll*.4,zn.sR.offset.x=e.scroll*.4,e.shake>0&&e.phase!=="takeoff"&&(e.shake=Math.max(0,e.shake-n));for(let l of Os.concat(Fu)){let c=l.m.userData;if(l.tw){let h=l.tw,d=h.x-l.m.position.x,u=h.z-l.m.position.z,f=Math.hypot(d,u),g=1.5*n;f<=g?(l.m.position.x=h.x,l.m.position.z=h.z,l.m.rotation.y=0,jp(l.m),l.tw=null,l.stand=!1,l.cleared=!0,l.x=h.x,l.z=h.z):(l.m.position.x+=d/f*g,l.m.position.z+=u/f*g,l.m.rotation.y=Ln(l.m.rotation.y,Math.atan2(d,u),Math.min(1,n*8)),ti(l.m,1.5,n,!1))}else l.stand&&l.id==="blocker"&&!l.done?(c.armL.rotation.x=c.armR.rotation.x=-2.9+Math.sin(i*5)*.12,l.suit&&(l.suit.position.y=2.5+Math.sin(i*5+1)*.05),c.torso.rotation.z=Math.sin(i*4)*.05):l.stand&&l.id==="att"?(ti(l.m,0,n,!1),c.armR.rotation.x=-2.3+Math.sin(i*6)*.35):!l.stand&&l.sleep?c.head.rotation.x=.5+Math.sin(i*1.6)*.05:l.stand||(c.head.rotation.y=Math.sin(i*.6+l.ph)*.35);l.marker&&(l.marker.visible=!l.done,l.marker.position.y=2.3/l.m.scale.y+Math.sin(i*3+l.ph)*.05)}if(I.mode!=="cabin")return;e.target=fM(t);let s=ae("prompt"),r=ae("obj"),a=!I.busy&&!e.locked;a&&e.target?(s.style.display="block",s.innerHTML=`<b>${vi?"\u270B":"E"}</b>${e.target.label}`):s.style.display="none";let o=Os.find(l=>l.id==="blocker");r.style.display=a?"block":"none",r.textContent=o&&!o.cleared?"Un pasajero bloquea el pasillo: habla con \xE9l":`Camina por el pasillo hasta tu asiento 34C \xB7 charla con los pasajeros para ganar propinas (propinas: $${E.bonusMoney||0})`,eu(E,{act:a&&!!e.target,hide:!1,actLabel:e.target&&e.target.type==="seat"?"Sentarte":"Hablar"}),a&&e.target&&Mt.KeyE&&Qp(e.target)}async function Qp(n){let e=I.cine,t=be.userData;if(I.busy=!0,t.vx=t.vz=0,n.type==="seat"){await tm();return}let i=n.p,s=i.talk(),r=await ms({title:i.name.toUpperCase(),text:s.text,opts:s.opts});if(r.close){I.busy=!1;return}let a=r.act?r.act(i):"";i.done=!0,E.helped=(E.helped||0)+1,i.id==="blocker"&&(i.tw={x:He.x+Mi[3],z:_n(2)},i.m.userData.armL.rotation.x=i.m.userData.armR.rotation.x=0,i.m.remove(i.suit)),a&&ze(a,7e3),I.busy=!1}async function mM(){let n=await ms({title:"AZAFATA",text:'<p>Una azafata con sonrisa de pl\xE1stico te recibe en la puerta de la cabina.</p><p>\u2014Bienvenido a bordo. Su asiento es el <b>34C</b>, al fondo, pasillo izquierdo. \xBFAlgo que declarar?</p><p class="dimtxt">Camina con WASD o las flechas (joystick en el m\xF3vil). Habla con los pasajeros con E: algunos dan propinas.</p>',opts:[{label:'"Nada, solo mi est\xF3mago"',hint:"+10 puntos",act(){return xn(0,10),'La azafata suelta una risa nerviosa. "Qu\xE9 honesto... Que tenga buen viaje."'}},{label:"Sonre\xEDr sin decir nada",hint:"",act(){return'Sonr\xEDes tan r\xEDgido que la azafata da un paso atr\xE1s. "Por el pasillo, por favor."'}}]});n.act&&ze(n.act(),5e3)}async function em(){let n=be.userData;I.mode="cine",I.busy=!0,I.dlgEsc=null;let e=I.cine={mood:"win",walk:null,skip:!1,v:0,vTarget:0,scroll:0,shake:0,phase:"outside",locked:!0,seated:!1,camOverride:!1,cp:null,target:null};Au(),ae("mini").classList.remove("on"),document.body.classList.add("cine","bars"),xc(!0),await Ep("\u2708 PUERTA 27",async()=>{n.hidden&&fc(),n.px=0,n.pz=-58.8,n.vx=n.vz=0,n.ang=Math.PI,n.y=0,n.crouch=!1,be.visible=!0,be.scale.y=1,Ee.yaw=0,Ee.fp=0,Ee.pitch=.12,Ee.dist=4.6,Ee.x=n.px,Ee.y=2.15,Ee.z=n.pz+4.57,cM()}),Oa("ABORDANDO","Puerta 27 \xB7 Vuelo a \xC1msterdam"),await cc(0,-63.4,3.4);let t=ae("ticket");t.innerHTML='<h4>\u2708 BOARDING PASS</h4><div>PASAJERO: LA MULA<br>VUELO 027 \xB7 M\xC9XICO \u2192 \xC1MSTERDAM<br>PUERTA 27 \xB7 ASIENTO 34C</div><div class="ok">\u2714 ESCANEADO</div>',t.classList.add("on"),Bn("chime"),ze('<b>Agente:</b> "Buen viaje, se\xF1or. Disfrute del vuelo... y de lo que lleve dentro."',4200),await ki(2300),t.classList.remove("on"),await cc(0,-69.2,3.2),Oa("AL AVI\xD3N","Sigue a los dem\xE1s pasajeros"),await cc(0,-85.8,3.6),ze('<b>Azafata:</b> "\xA1Bienvenido a bordo!"',2200),await ki(900),await Ep("\u2708 A BORDO",async()=>{I.mode="cabin",e.phase="cabin",e.skip=!1,e.mood="calm",xc(!1),document.body.classList.remove("cine","bars"),document.body.classList.add("cabin"),n.px=He.x,n.pz=He.z+12.9,n.vx=n.vz=0,n.ang=Math.PI,Ee.yaw=0,Ee.fp=0,e.cp=null,kn.shadowMap.autoUpdate=!1,Gi.forEach(i=>et.remove(i.m)),Gi.length=0}),Oa("A BORDO","Asiento 34C \xB7 pasillo izquierdo"),await ki(900),await mM(),e.locked=!1,I.busy=!1}async function tm(){let n=I.cine,e=be.userData;n.locked=!0,n.phase="sit",I.busy=!0,ae("prompt").style.display="none",ae("obj").style.display="none",(E.helped||0)>=4&&(E.socBonus=50,xn(50,100),ze("<b>\xA1Alma de la fiesta!</b> Hablaste con medio avi\xF3n: bonus extra.",3500));let t=He.x+Mi[2],i=_n(11);await cc(t,i,1.9),e.ang=0,n.seated=!0,Ke(1700,.04,"square",.05),setTimeout(()=>Ke(1300,.05,"square",.05),160),document.body.classList.add("bars"),n.skippable=!0,n.phase="takeoff",xc(!0);let s=Ee.view==="fp";s?Pr(t,1.38,i+.05,t,1.36,i+3,2.5):Pr(He.x+.25,1.55,i+2.1,t,1,i,2.5),Oa("ASIENTO 34C","Cintur\xF3n abrochado"),ze('<b>Tu est\xF3mago:</b> "Gluuurp." <i>(Calma, peque\xF1as. Ya casi.)</i>',3600),await ki(2600),n.mood="epic",tn.intensity=.15,Bn("ding"),ze('<b>Capit\xE1n:</b> "Se\xF1ores pasajeros, bienvenidos al vuelo 027 con destino \xC1msterdam. Tripulaci\xF3n, preparados para el despegue."',5200),await ki(3400),s?Pr(t,1.38,i+.05,He.x-2.5,1.36,i-.05,1.6):Pr(He.x-1.45,1.42,i+.05,He.x-2.5,1.38,i-.02,1.6),up(8,.55),n.vTarget=.25,tn.intensity=.35,ze("<i>Los motores rugen. La pista empieza a correr bajo la ventanilla...</i>",3200),await ki(1700),n.vTarget=1.5,n.shake=1.2,tn.intensity=.6,await ki(2400),n.vTarget=2.6,n.shake=2.4,tn.intensity=.85,ze("<b>\xA1DESPEGANDO!</b>",1800),await ki(1900),zn.mL.map=zn.sL,zn.mR.map=zn.sR,zn.mL.needsUpdate=zn.mR.needsUpdate=!0,n.vTarget=.5,n.shake=3,tn.intensity=1,Oa("\xA1DESPEGASTE!","Rumbo a \xC1msterdam"),Bn("clap",3.4),Bn("ding"),navigator.vibrate&&navigator.vibrate([60,40,60,40,120]),s?Pr(t,1.38,i+.05,He.x-2.5,1.4,i-.08,1.2):Pr(He.x-1.2,1.45,i+.35,He.x-2.5,1.38,i-.02,1.2),ze('<b>Pasajeros:</b> "\xA1Bravooo!" <i>(Aplauden. T\xFA aplaudes tambi\xE9n, con las manos temblorosas.)</i>',4200),await ki(3600),await nm()}function nm(){let n=I.cine;xc(!1),document.body.classList.remove("cabin","bars"),document.body.classList.add("cine"),ae("ticket").classList.remove("on"),ae("sub").classList.remove("on"),clearTimeout(ze.h),E.over=!0,I.mode="over",I.busy=!0,I.endMood="win",Au(),Cu("win");let e=I.lastRun,t=[[E.time>=ie.missionSec*.25,`Tiempo (${Hn(Math.max(0,E.time))} s)`],[E.life>=Or()*.3,`C\xE1psulas (${Hn(Math.max(0,E.life))} s)`],[E.hp>=(ie.hp+jn("hp")*25)*.7,`Salud (${Math.max(0,Math.round(E.hp))})`]],i=Math.max(1,t.filter(f=>f[0]).length),s=E.tips||0,r=E.socBonus||0,a=[["Pago por la mercanc\xEDa",e.partPay],["Bonus por tiempo restante",e.partTime]];s&&a.push([`Propinas de los pasajeros (${E.helped||0} charlas)`,s]),r&&a.push(["Bonus \xABalma de la fiesta\xBB",r]);let o=ae("end");o.className="overlay on win",o.innerHTML=`<div id="confetti"></div><div class="reward">
    <div class="rstamp">MISI\xD3N CUMPLIDA</div>
    <h2>\u2708 \xA1DESPEGASTE!</h2>
    <div class="rstars">${[0,1,2].map(f=>`<span id="st${f}">\u2605</span>`).join("")}</div>
    <div class="crit">${t.map(([f,g])=>`<span class="${f?"y":""}">${f?"\u2714":"\u2718"} ${g}</span>`).join("")}</div>
    <p class="rstory">Desde la ventanilla ves c\xF3mo la terminal se hace peque\xF1a. Tu est\xF3mago gru\xF1e. Es el sonido m\xE1s bonito que has o\xEDdo, y hoy, por fin, nadie lo va a investigar.<br><i>(Fase 3: aduana de destino y entrega... pr\xF3ximamente.)</i></p>
    <table class="rtab" id="rTab">${a.map(([f,g])=>`<tr><td>${f}</td><td>+$${g}</td></tr>`).join("")}</table>
    <div class="rtotal">TOTAL <span id="rMoney">$0</span></div>
    <div id="rScore" class="rscore">Puntuaci\xF3n <b id="rScoreN">0</b> \xB7 Modo <b>${Oi[ie.diff]}</b>${I.daily?" \xB7 reto diario":""}<span id="rRec"></span></div>
    <div class="dimtxt">Dinero permanente total: $${Dt.money}</div>
    <p style="text-align:center;margin-top:14px"><button id="again" style="font:700 20px Impact;letter-spacing:2px;padding:12px 30px">\u21BA JUGAR OTRA VEZ</button></p></div>`,ae("again").onclick=()=>location.reload();let l=ae("confetti"),c=["#f5c518","#3ddc84","#ff3b3b","#37f0ff","#ff9fd0","#ffffff"];for(let f=0;f<(vi?55:90);f++){let g=document.createElement("i");g.style.left=Math.random()*100+"%",g.style.background=c[f%c.length],g.style.animationDuration=2.6+Math.random()*2.4+"s",g.style.animationDelay=-Math.random()*4+"s",l.appendChild(g)}Bn("fanfare"),navigator.vibrate&&navigator.vibrate([80,40,80,40,220]);for(let f=0;f<i;f++)setTimeout(()=>{let g=ae("st"+f);g&&g.classList.add("on"),Bn("coin",2+f*3)},900+f*450);let h=[...document.querySelectorAll("#rTab tr")];h.forEach((f,g)=>setTimeout(()=>{f.classList.add("on"),Bn("coin",g*2)},1500+g*520));let d=1500+h.length*520+300,u=(f,g,_,m)=>{let p=ae(f),b=performance.now(),R=-1,M=()=>{let S=Math.min(1,(performance.now()-b)/_),T=Math.round(g*(1-Math.pow(1-S,3)));p.textContent=m(T);let C=Math.floor(S*12);C!==R&&S<1&&(R=C,Bn("coin",4+C%6)),S<1&&requestAnimationFrame(M)};M()};setTimeout(()=>u("rMoney",e.money,1700,f=>"$"+f),d),setTimeout(()=>u("rScoreN",e.score,1700,f=>String(f)),d+1700),e.rec&&setTimeout(()=>{ae("rRec").innerHTML=' \xB7 \u{1F3C6} <b class="rrec">\xA1NUEVO R\xC9CORD!</b>',Bn("stamp")},d+3500)}var Tp=performance.now(),ac=0,gu=0,oc=Wi;function gM(n){let e=devicePixelRatio||1;kn.setPixelRatio(Math.min(e,{low:1,med:1.5,high:2}[n])),kn.setSize(innerWidth,innerHeight);let t=n!=="low";kn.shadowMap.enabled=t,In.castShadow=t,In.shadow.map&&(In.shadow.map.dispose(),In.shadow.map=null),In.shadow.mapSize.set(n==="high"?2048:1024,n==="high"?2048:1024),et.traverse(i=>{i.material&&(Array.isArray(i.material)?i.material:[i.material]).forEach(s=>s.needsUpdate=!0)})}function xM(n){if(!($e.quality!=="auto"||I.mode!=="play"||I.busy||oc==="low")&&(ac+=n,gu++,ac>=3)){let e=gu/ac;ac=0,gu=0,e<28&&(oc=oc==="high"?"med":"low",gM(oc),ze("Calidad gr\xE1fica reducida para mantener la fluidez.",2500))}}function im(n){if(!I.paused){Mt.KeyV&&(I.mode==="play"||I.mode==="cabin"||I.mode==="cine")&&Iu(),I.t+=n,Bv(n),kv(n),Jv(n),hv(n),be&&(Wv(n),$v(n),Zv(n),Vv(n)),I.mode==="play"&&jv(n),(I.mode==="cine"||I.mode==="cabin")&&pM(n),hM(n),rM(n);for(let e in Mt)Mt[e]=!1;Qv(n),iM()}}function sm(){requestAnimationFrame(sm);let n=performance.now(),e=(n-Tp)/1e3,t=Math.min(e,.05);Tp=n,im(t),xM(e),kn.render(et,Jt)}sv();dv();sm();window.__dbg={board:{CAB:He,CABP:Os,CABDECOR:Fu,victory:em,interact:Qp,takeoffSequence:tm,winScreen:nm,rowZ:_n,SEATX:Mi,boarders:Gi,get cabin(){return gc}},music:tn,setMood:tc,cam:Ee,camera:Jt,toggleView:Iu,P:ie,cfg:$e,MZ:Je,ROWS:Ti,LDOORS:ps,SMOKES:Nr,DECOYS:Ns,get DRONE(){return En},useItem:Na,rebuildNav:wc,resetMaze:Du,doShift:Yp,applyArmed:Ba,setArmed:Up,flow:(n,e)=>Fs(Us,Fr,n,e),nav:()=>({gridG:zi,gridD:Ds,gridR:Fr,routeField:Us,cellIdx:Lu,bfs:bi}),sim:(n,e=.05)=>{for(let t=0;t<Math.round(n/e);t++)im(e)},PICKUPS:za,keys:wt,pressed:Mt,DOGS:Br,NPCS:Su,HIDES:Mc,COLL:Si,startChase:Rc,startDogHunt:Zp,S:()=>E,G:I,player:()=>be,ZONES:vc,TRIGS:bu,GUARDS:Tn,newState:Ip,CARGO:Rp,METHOD:Cp,PROFILE:Pp,meta:Dt,finishRun:Cu,toggleAdmin:Ec};})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
