(()=>{var xu=0,mc=1,_u=2;var ss=1,yu=2,Js=3,Oi=0,on=1,_n=2,ei=0,Ks=1,js=2,gc=3,xc=4,vu=5;var rs=100,Mu=101,Su=102,bu=103,Eu=104,Tu=200,wu=201,Au=202,Ru=203,_c=204,yc=205,Cu=206,Iu=207,Pu=208,Lu=209,Du=210,Nu=211,Uu=212,Fu=213,Ou=214,Na=0,Ua=1,Fa=2,Bs=3,Oa=4,Ba=5,za=6,ka=7,vc=0,Bu=1,zu=2,Dn=0,Mc=1,Sc=2,bc=3,Ec=4,Tc=5,wc=6,Ac=7;var Rc=300,Bi=301,as=302,mo=303,go=304,Gr=306,zs=1e3,Xn=1001,Ha=1002,Ht=1003,ku=1004;var Wr=1005;var $t=1006,xo=1007;var zi=1008;var dn=1009,Cc=1010,Ic=1011,Qs=1012,_o=1013,Nn=1014,Un=1015,Fn=1016,yo=1017,vo=1018,er=1020,Pc=35902,Lc=35899,Dc=1021,Nc=1022,bn=1023,qn=1026,ki=1027,Uc=1028,Mo=1029,Hi=1030,So=1031;var bo=1033,Xr=33776,qr=33777,Yr=33778,$r=33779,Eo=35840,To=35841,wo=35842,Ao=35843,Ro=36196,Co=37492,Io=37496,Po=37488,Lo=37489,Zr=37490,Do=37491,No=37808,Uo=37809,Fo=37810,Oo=37811,Bo=37812,zo=37813,ko=37814,Ho=37815,Vo=37816,Go=37817,Wo=37818,Xo=37819,qo=37820,Yo=37821,$o=36492,Zo=36494,Jo=36495,Ko=36283,jo=36284,Jr=36285,Qo=36286;var Mr=2300,Va=2301,La=2302,lc=2303,cc=2400,hc=2401,uc=2402;var Hu=3200;var el=0,Vu=1,_i="",Yt="srgb",Sr="srgb-linear",br="linear",lt="srgb";var Da=7680;var Gu=519,Wu=512,Xu=513,qu=514,tl=515,Yu=516,$u=517,nl=518,Zu=519,Fc=35044;var Oc="300 es",Ln=2e3,ks=2001;function kf(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Hf(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Er(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Ju(){let n=Er("canvas");return n.style.display="block",n}var qh={},Hs=null;function Tr(...n){let e="THREE."+n.shift();Hs?Hs("log",e,...n):console.log(e,...n)}function Ku(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ne(...n){n=Ku(n);let e="THREE."+n.shift();if(Hs)Hs("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Ue(...n){n=Ku(n);let e="THREE."+n.shift();if(Hs)Hs("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function ts(...n){let e=n.join(" ");e in qh||(qh[e]=!0,Ne(...n))}function ju(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var Qu={[Na]:Ua,[Fa]:za,[Oa]:ka,[Bs]:Ba,[Ua]:Na,[za]:Fa,[ka]:Oa,[Ba]:Bs},Yn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ol=Math.PI/180,Ga=180/Math.PI;function Pi(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(jt[n&255]+jt[n>>8&255]+jt[n>>16&255]+jt[n>>24&255]+"-"+jt[e&255]+jt[e>>8&255]+"-"+jt[e>>16&15|64]+jt[e>>24&255]+"-"+jt[t&63|128]+jt[t>>8&255]+"-"+jt[t>>16&255]+jt[t>>24&255]+jt[i&255]+jt[i>>8&255]+jt[i>>16&255]+jt[i>>24&255]).toLowerCase()}function Ke(n,e,t){return Math.max(e,Math.min(t,n))}function Vf(n,e){return(n%e+e)%e}function Bl(n,e,t){return(1-t)*n+t*e}function Wn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function dt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Be=class n{static{n.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},$n=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3],u=r[a+0],p=r[a+1],g=r[a+2],_=r[a+3];if(d!==_||l!==u||c!==p||h!==g){let m=l*u+c*p+h*g+d*_;m<0&&(u=-u,p=-p,g=-g,_=-_,m=-m);let f=1-o;if(m<.9995){let S=Math.acos(m),R=Math.sin(S);f=Math.sin(f*S)/R,o=Math.sin(o*S)/R,l=l*f+u*o,c=c*f+p*o,h=h*f+g*o,d=d*f+_*o}else{l=l*f+u*o,c=c*f+p*o,h=h*f+g*o,d=d*f+_*o;let S=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=S,c*=S,h*=S,d*=S}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=r[a],u=r[a+1],p=r[a+2],g=r[a+3];return e[t]=o*g+h*d+l*p-c*u,e[t+1]=l*g+h*u+c*d-o*p,e[t+2]=c*g+h*p+o*u-l*d,e[t+3]=h*g-o*d-l*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),d=o(r/2),u=l(i/2),p=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d-u*p*g;break;case"YXZ":this._x=u*h*d+c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d+u*p*g;break;case"ZXY":this._x=u*h*d-c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d-u*p*g;break;case"ZYX":this._x=u*h*d-c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d+u*p*g;break;case"YZX":this._x=u*h*d+c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d-u*p*g;break;case"XZY":this._x=u*h*d-c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d+u*p*g;break;default:Ne("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=i+o+d;if(u>0){let p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(i>o&&i>d){let p=2*Math.sqrt(1+i-o-d);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>d){let p=2*Math.sqrt(1+o-i-d);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+d-i-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},F=class n{static{n.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Yh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Yh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),h=2*(o*t-r*s),d=2*(r*i-a*t);return this.x=t+l*c+a*d-o*h,this.y=i+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return zl.copy(this).projectOnVector(e),this.sub(zl)}reflect(e){return this.sub(zl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},zl=new F,Yh=new $n,Fe=class n{static{n.prototype.isMatrix3=!0}constructor(e,t,i,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],p=i[5],g=i[8],_=s[0],m=s[3],f=s[6],S=s[1],R=s[4],M=s[7],b=s[2],E=s[5],I=s[8];return r[0]=a*_+o*S+l*b,r[3]=a*m+o*R+l*E,r[6]=a*f+o*M+l*I,r[1]=c*_+h*S+d*b,r[4]=c*m+h*R+d*E,r[7]=c*f+h*M+d*I,r[2]=u*_+p*S+g*b,r[5]=u*m+p*R+g*E,r[8]=u*f+p*M+g*I,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,u=o*l-h*r,p=c*r-a*l,g=t*d+i*u+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=d*_,e[1]=(s*c-h*i)*_,e[2]=(o*i-s*a)*_,e[3]=u*_,e[4]=(h*t-s*l)*_,e[5]=(s*r-o*t)*_,e[6]=p*_,e[7]=(i*l-c*t)*_,e[8]=(a*t-i*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return ts("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(kl.makeScale(e,t)),this}rotate(e){return ts("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(kl.makeRotation(-e)),this}translate(e,t){return ts("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(kl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},kl=new Fe,$h=new Fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zh=new Fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Gf(){let n={enabled:!0,workingColorSpace:Sr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===lt&&(s.r=mi(s.r),s.g=mi(s.g),s.b=mi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===lt&&(s.r=Os(s.r),s.g=Os(s.g),s.b=Os(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===_i?br:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ts("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ts("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Sr]:{primaries:e,whitePoint:i,transfer:br,toXYZ:$h,fromXYZ:Zh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Yt},outputColorSpaceConfig:{drawingBufferColorSpace:Yt}},[Yt]:{primaries:e,whitePoint:i,transfer:lt,toXYZ:$h,fromXYZ:Zh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Yt}}}),n}var Je=Gf();function mi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Os(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var vs,Wa=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{vs===void 0&&(vs=Er("canvas")),vs.width=e.width,vs.height=e.height;let s=vs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=vs}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Er("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=mi(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(mi(t[i]/255)*255):t[i]=mi(t[i]);return{data:t,width:e.width,height:e.height}}else return Ne("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Wf=0,Vs=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Wf++}),this.uuid=Pi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Hl(s[a].image)):r.push(Hl(s[a]))}else r=Hl(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function Hl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Wa.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ne("Texture: Unable to serialize Texture."),{})}var Xf=0,Vl=new F,an=class n extends Yn{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Xn,s=Xn,r=$t,a=zi,o=bn,l=dn,c=n.DEFAULT_ANISOTROPY,h=_i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Xf++}),this.uuid=Pi(),this.name="",this.source=new Vs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Be(0,0),this.repeat=new Be(1,1),this.center=new Be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Vl).x}get height(){return this.source.getSize(Vl).y}get depth(){return this.source.getSize(Vl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Ne(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ne(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Rc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case zs:e.x=e.x-Math.floor(e.x);break;case Xn:e.x=e.x<0?0:1;break;case Ha:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case zs:e.y=e.y-Math.floor(e.y);break;case Xn:e.y=e.y<0?0:1;break;case Ha:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=Rc;an.DEFAULT_ANISOTROPY=1;var Tt=class n{static{n.prototype.isVector4=!0}constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],p=l[5],g=l[9],_=l[2],m=l[6],f=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let R=(c+1)/2,M=(p+1)/2,b=(f+1)/2,E=(h+u)/4,I=(d+_)/4,y=(g+m)/4;return R>M&&R>b?R<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(R),s=E/i,r=I/i):M>b?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=E/s,r=y/s):b<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),i=I/r,s=y/r),this.set(i,s,r,t),this}let S=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(d-_)/S,this.z=(u-h)/S,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this.w=Ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this.w=Ke(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Xa=class extends Yn{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$t,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Tt(0,0,e,t),this.scissorTest=!1,this.viewport=new Tt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:i.depth},r=new an(s),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:$t,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Vs(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},un=class extends Xa{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},wr=class extends an{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var qa=class extends an{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var bt=class n{static{n.prototype.isMatrix4=!0}constructor(e,t,i,s,r,a,o,l,c,h,d,u,p,g,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,h,d,u,p,g,_,m)}set(e,t,i,s,r,a,o,l,c,h,d,u,p,g,_,m){let f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=d,f[14]=u,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/Ms.setFromMatrixColumn(e,0).length(),r=1/Ms.setFromMatrixColumn(e,1).length(),a=1/Ms.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=a*h,p=a*d,g=o*h,_=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=p+g*c,t[5]=u-_*c,t[9]=-o*l,t[2]=_-u*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){let u=l*h,p=l*d,g=c*h,_=c*d;t[0]=u+_*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=p*o-g,t[6]=_+u*o,t[10]=a*l}else if(e.order==="ZXY"){let u=l*h,p=l*d,g=c*h,_=c*d;t[0]=u-_*o,t[4]=-a*d,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*h,t[9]=_-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let u=a*h,p=a*d,g=o*h,_=o*d;t[0]=l*h,t[4]=g*c-p,t[8]=u*c+_,t[1]=l*d,t[5]=_*c+u,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let u=a*l,p=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=_-u*d,t[8]=g*d+p,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*d+g,t[10]=u-_*d}else if(e.order==="XZY"){let u=a*l,p=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+_,t[5]=a*h,t[9]=p*d-g,t[2]=g*d-p,t[6]=o*h,t[10]=_*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(qf,e,Yf)}lookAt(e,t,i){let s=this.elements;return fn.subVectors(e,t),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),wi.crossVectors(i,fn),wi.lengthSq()===0&&(Math.abs(i.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),wi.crossVectors(i,fn)),wi.normalize(),la.crossVectors(fn,wi),s[0]=wi.x,s[4]=la.x,s[8]=fn.x,s[1]=wi.y,s[5]=la.y,s[9]=fn.y,s[2]=wi.z,s[6]=la.z,s[10]=fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],p=i[13],g=i[2],_=i[6],m=i[10],f=i[14],S=i[3],R=i[7],M=i[11],b=i[15],E=s[0],I=s[4],y=s[8],T=s[12],C=s[1],U=s[5],O=s[9],H=s[13],L=s[2],G=s[6],Z=s[10],J=s[14],re=s[3],q=s[7],te=s[11],ie=s[15];return r[0]=a*E+o*C+l*L+c*re,r[4]=a*I+o*U+l*G+c*q,r[8]=a*y+o*O+l*Z+c*te,r[12]=a*T+o*H+l*J+c*ie,r[1]=h*E+d*C+u*L+p*re,r[5]=h*I+d*U+u*G+p*q,r[9]=h*y+d*O+u*Z+p*te,r[13]=h*T+d*H+u*J+p*ie,r[2]=g*E+_*C+m*L+f*re,r[6]=g*I+_*U+m*G+f*q,r[10]=g*y+_*O+m*Z+f*te,r[14]=g*T+_*H+m*J+f*ie,r[3]=S*E+R*C+M*L+b*re,r[7]=S*I+R*U+M*G+b*q,r[11]=S*y+R*O+M*Z+b*te,r[15]=S*T+R*H+M*J+b*ie,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],p=e[14],g=e[3],_=e[7],m=e[11],f=e[15],S=l*p-c*u,R=o*p-c*d,M=o*u-l*d,b=a*p-c*h,E=a*u-l*h,I=a*d-o*h;return t*(_*S-m*R+f*M)-i*(g*S-m*b+f*E)+s*(g*R-_*b+f*I)-r*(g*M-_*E+m*I)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-i*(r*h-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],p=e[11],g=e[12],_=e[13],m=e[14],f=e[15],S=t*o-i*a,R=t*l-s*a,M=t*c-r*a,b=i*l-s*o,E=i*c-r*o,I=s*c-r*l,y=h*_-d*g,T=h*m-u*g,C=h*f-p*g,U=d*m-u*_,O=d*f-p*_,H=u*f-p*m,L=S*H-R*O+M*U+b*C-E*T+I*y;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let G=1/L;return e[0]=(o*H-l*O+c*U)*G,e[1]=(s*O-i*H-r*U)*G,e[2]=(_*I-m*E+f*b)*G,e[3]=(u*E-d*I-p*b)*G,e[4]=(l*C-a*H-c*T)*G,e[5]=(t*H-s*C+r*T)*G,e[6]=(m*M-g*I-f*R)*G,e[7]=(h*I-u*M+p*R)*G,e[8]=(a*O-o*C+c*y)*G,e[9]=(i*C-t*O-r*y)*G,e[10]=(g*E-_*M+f*S)*G,e[11]=(d*M-h*E-p*S)*G,e[12]=(o*T-a*U-l*y)*G,e[13]=(t*U-i*T+s*y)*G,e[14]=(_*R-g*b-m*S)*G,e[15]=(h*b-d*R+u*S)*G,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,d=o+o,u=r*c,p=r*h,g=r*d,_=a*h,m=a*d,f=o*d,S=l*c,R=l*h,M=l*d,b=i.x,E=i.y,I=i.z;return s[0]=(1-(_+f))*b,s[1]=(p+M)*b,s[2]=(g-R)*b,s[3]=0,s[4]=(p-M)*E,s[5]=(1-(u+f))*E,s[6]=(m+S)*E,s[7]=0,s[8]=(g+R)*I,s[9]=(m-S)*I,s[10]=(1-(u+_))*I,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let a=Ms.set(s[0],s[1],s[2]).length(),o=Ms.set(s[4],s[5],s[6]).length(),l=Ms.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Rn.copy(this);let c=1/a,h=1/o,d=1/l;return Rn.elements[0]*=c,Rn.elements[1]*=c,Rn.elements[2]*=c,Rn.elements[4]*=h,Rn.elements[5]*=h,Rn.elements[6]*=h,Rn.elements[8]*=d,Rn.elements[9]*=d,Rn.elements[10]*=d,t.setFromRotationMatrix(Rn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,s,r,a,o=Ln,l=!1){let c=this.elements,h=2*r/(t-e),d=2*r/(i-s),u=(t+e)/(t-e),p=(i+s)/(i-s),g,_;if(l)g=r/(a-r),_=a*r/(a-r);else if(o===Ln)g=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===ks)g=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=Ln,l=!1){let c=this.elements,h=2/(t-e),d=2/(i-s),u=-(t+e)/(t-e),p=-(i+s)/(i-s),g,_;if(l)g=1/(a-r),_=a/(a-r);else if(o===Ln)g=-2/(a-r),_=-(a+r)/(a-r);else if(o===ks)g=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Ms=new F,Rn=new bt,qf=new F(0,0,0),Yf=new F(1,1,1),wi=new F,la=new F,fn=new F,Jh=new bt,Kh=new $n,gi=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ke(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:Ne("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Jh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Jh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Kh.setFromEuler(this),this.setFromQuaternion(Kh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};gi.DEFAULT_ORDER="XYZ";var Ar=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},$f=0,jh=new F,Ss=new $n,ci=new bt,ca=new F,fr=new F,Zf=new F,Jf=new $n,Qh=new F(1,0,0),eu=new F(0,1,0),tu=new F(0,0,1),nu={type:"added"},Kf={type:"removed"},bs={type:"childadded",child:null},Gl={type:"childremoved",child:null},Vt=class n extends Yn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$f++}),this.uuid=Pi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new F,t=new gi,i=new $n,s=new F(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new bt},normalMatrix:{value:new Fe}}),this.matrix=new bt,this.matrixWorld=new bt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ar,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ss.setFromAxisAngle(e,t),this.quaternion.multiply(Ss),this}rotateOnWorldAxis(e,t){return Ss.setFromAxisAngle(e,t),this.quaternion.premultiply(Ss),this}rotateX(e){return this.rotateOnAxis(Qh,e)}rotateY(e){return this.rotateOnAxis(eu,e)}rotateZ(e){return this.rotateOnAxis(tu,e)}translateOnAxis(e,t){return jh.copy(e).applyQuaternion(this.quaternion),this.position.add(jh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Qh,e)}translateY(e){return this.translateOnAxis(eu,e)}translateZ(e){return this.translateOnAxis(tu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ci.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ca.copy(e):ca.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),fr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ci.lookAt(fr,ca,this.up):ci.lookAt(ca,fr,this.up),this.quaternion.setFromRotationMatrix(ci),s&&(ci.extractRotation(s.matrixWorld),Ss.setFromRotationMatrix(ci),this.quaternion.premultiply(Ss.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ue("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(nu),bs.child=e,this.dispatchEvent(bs),bs.child=null):Ue("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Kf),Gl.child=e,this.dispatchEvent(Gl),Gl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ci.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ci.multiply(e.parent.matrixWorld)),e.applyMatrix4(ci),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(nu),bs.child=e,this.dispatchEvent(bs),bs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fr,e,Zf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fr,Jf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Vt.DEFAULT_UP=new F(0,1,0);Vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Dt=class extends Vt{constructor(){super(),this.isGroup=!0,this.type="Group"}},jf={type:"move"},Gs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Dt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Dt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Dt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,i),f=this._getHandJoint(c,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&u>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(jf)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Dt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},ed={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ai={h:0,s:0,l:0},ha={h:0,s:0,l:0};function Wl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Ve=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=Je.workingColorSpace){return this.r=e,this.g=t,this.b=i,Je.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=Je.workingColorSpace){if(e=Vf(e,1),t=Ke(t,0,1),i=Ke(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Wl(a,r,e+1/3),this.g=Wl(a,r,e),this.b=Wl(a,r,e-1/3)}return Je.colorSpaceToWorking(this,s),this}setStyle(e,t=Yt){function i(r){r!==void 0&&parseFloat(r)<1&&Ne("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ne("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ne("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Yt){let i=ed[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ne("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=mi(e.r),this.g=mi(e.g),this.b=mi(e.b),this}copyLinearToSRGB(e){return this.r=Os(e.r),this.g=Os(e.g),this.b=Os(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Yt){return Je.workingToColorSpace(Qt.copy(this),e),Math.round(Ke(Qt.r*255,0,255))*65536+Math.round(Ke(Qt.g*255,0,255))*256+Math.round(Ke(Qt.b*255,0,255))}getHexString(e=Yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.workingToColorSpace(Qt.copy(this),t);let i=Qt.r,s=Qt.g,r=Qt.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Je.workingColorSpace){return Je.workingToColorSpace(Qt.copy(this),t),e.r=Qt.r,e.g=Qt.g,e.b=Qt.b,e}getStyle(e=Yt){Je.workingToColorSpace(Qt.copy(this),e);let t=Qt.r,i=Qt.g,s=Qt.b;return e!==Yt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Ai),this.setHSL(Ai.h+e,Ai.s+t,Ai.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ai),e.getHSL(ha);let i=Bl(Ai.h,ha.h,t),s=Bl(Ai.s,ha.s,t),r=Bl(Ai.l,ha.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Qt=new Ve;Ve.NAMES=ed;var Rr=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ve(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Cr=class extends Vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gi,this.environmentIntensity=1,this.environmentRotation=new gi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Cn=new F,hi=new F,Xl=new F,ui=new F,Es=new F,Ts=new F,iu=new F,ql=new F,Yl=new F,$l=new F,Zl=new Tt,Jl=new Tt,Kl=new Tt,pi=class n{constructor(e=new F,t=new F,i=new F){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Cn.subVectors(e,t),s.cross(Cn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Cn.subVectors(s,t),hi.subVectors(i,t),Xl.subVectors(e,t);let a=Cn.dot(Cn),o=Cn.dot(hi),l=Cn.dot(Xl),c=hi.dot(hi),h=hi.dot(Xl),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,p=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-p-g,g,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,ui)===null?!1:ui.x>=0&&ui.y>=0&&ui.x+ui.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,ui)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ui.x),l.addScaledVector(a,ui.y),l.addScaledVector(o,ui.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return Zl.setScalar(0),Jl.setScalar(0),Kl.setScalar(0),Zl.fromBufferAttribute(e,t),Jl.fromBufferAttribute(e,i),Kl.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Zl,r.x),a.addScaledVector(Jl,r.y),a.addScaledVector(Kl,r.z),a}static isFrontFacing(e,t,i,s){return Cn.subVectors(i,t),hi.subVectors(e,t),Cn.cross(hi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Cn.subVectors(this.c,this.b),hi.subVectors(this.a,this.b),Cn.cross(hi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,a,o;Es.subVectors(s,i),Ts.subVectors(r,i),ql.subVectors(e,i);let l=Es.dot(ql),c=Ts.dot(ql);if(l<=0&&c<=0)return t.copy(i);Yl.subVectors(e,s);let h=Es.dot(Yl),d=Ts.dot(Yl);if(h>=0&&d<=h)return t.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(Es,a);$l.subVectors(e,r);let p=Es.dot($l),g=Ts.dot($l);if(g>=0&&p<=g)return t.copy(r);let _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(Ts,o);let m=h*g-p*d;if(m<=0&&d-h>=0&&p-g>=0)return iu.subVectors(r,s),o=(d-h)/(d-h+(p-g)),t.copy(s).addScaledVector(iu,o);let f=1/(m+_+u);return a=_*f,o=u*f,t.copy(i).addScaledVector(Es,a).addScaledVector(Ts,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Li=class{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(In.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(In.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=In.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,In):In.fromBufferAttribute(r,a),In.applyMatrix4(e.matrixWorld),this.expandByPoint(In);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ua.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ua.copy(i.boundingBox)),ua.applyMatrix4(e.matrixWorld),this.union(ua)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,In),In.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(pr),da.subVectors(this.max,pr),ws.subVectors(e.a,pr),As.subVectors(e.b,pr),Rs.subVectors(e.c,pr),Ri.subVectors(As,ws),Ci.subVectors(Rs,As),Ki.subVectors(ws,Rs);let t=[0,-Ri.z,Ri.y,0,-Ci.z,Ci.y,0,-Ki.z,Ki.y,Ri.z,0,-Ri.x,Ci.z,0,-Ci.x,Ki.z,0,-Ki.x,-Ri.y,Ri.x,0,-Ci.y,Ci.x,0,-Ki.y,Ki.x,0];return!jl(t,ws,As,Rs,da)||(t=[1,0,0,0,1,0,0,0,1],!jl(t,ws,As,Rs,da))?!1:(fa.crossVectors(Ri,Ci),t=[fa.x,fa.y,fa.z],jl(t,ws,As,Rs,da))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,In).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(In).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},di=[new F,new F,new F,new F,new F,new F,new F,new F],In=new F,ua=new Li,ws=new F,As=new F,Rs=new F,Ri=new F,Ci=new F,Ki=new F,pr=new F,da=new F,fa=new F,ji=new F;function jl(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){ji.fromArray(n,r);let o=s.x*Math.abs(ji.x)+s.y*Math.abs(ji.y)+s.z*Math.abs(ji.z),l=e.dot(ji),c=t.dot(ji),h=i.dot(ji);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Lt=new F,pa=new Be,Qf=0,mn=class extends Yn{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Qf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Fc,this.updateRanges=[],this.gpuType=Un,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)pa.fromBufferAttribute(this,t),pa.applyMatrix3(e),this.setXY(t,pa.x,pa.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix3(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix4(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.applyNormalMatrix(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.transformDirection(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Wn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=dt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Wn(t,this.array)),t}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Wn(t,this.array)),t}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Wn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Wn(t,this.array)),t}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array),s=dt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array),s=dt(s,this.array),r=dt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Ir=class extends mn{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Pr=class extends mn{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var ct=class extends mn{constructor(e,t,i){super(new Float32Array(e),t,i)}},ep=new Li,mr=new F,Ql=new F,ns=class{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):ep.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;mr.subVectors(e,this.center);let t=mr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(mr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ql.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(mr.copy(e.center).add(Ql)),this.expandByPoint(mr.copy(e.center).sub(Ql))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},tp=0,Sn=new bt,ec=new Vt,Cs=new F,pn=new Li,gr=new Li,kt=new F,Nt=class n extends Yn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tp++}),this.uuid=Pi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(kf(e)?Pr:Ir)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Fe().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Sn.makeRotationFromQuaternion(e),this.applyMatrix4(Sn),this}rotateX(e){return Sn.makeRotationX(e),this.applyMatrix4(Sn),this}rotateY(e){return Sn.makeRotationY(e),this.applyMatrix4(Sn),this}rotateZ(e){return Sn.makeRotationZ(e),this.applyMatrix4(Sn),this}translate(e,t,i){return Sn.makeTranslation(e,t,i),this.applyMatrix4(Sn),this}scale(e,t,i){return Sn.makeScale(e,t,i),this.applyMatrix4(Sn),this}lookAt(e){return ec.lookAt(e),ec.updateMatrix(),this.applyMatrix4(ec.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cs).negate(),this.translate(Cs.x,Cs.y,Cs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ct(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ne("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Li);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ue("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];pn.setFromBufferAttribute(r),this.morphTargetsRelative?(kt.addVectors(this.boundingBox.min,pn.min),this.boundingBox.expandByPoint(kt),kt.addVectors(this.boundingBox.max,pn.max),this.boundingBox.expandByPoint(kt)):(this.boundingBox.expandByPoint(pn.min),this.boundingBox.expandByPoint(pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ue('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ns);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ue("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){let i=this.boundingSphere.center;if(pn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];gr.setFromBufferAttribute(o),this.morphTargetsRelative?(kt.addVectors(pn.min,gr.min),pn.expandByPoint(kt),kt.addVectors(pn.max,gr.max),pn.expandByPoint(kt)):(pn.expandByPoint(gr.min),pn.expandByPoint(gr.max))}pn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)kt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(kt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)kt.fromBufferAttribute(o,c),l&&(Cs.fromBufferAttribute(e,c),kt.add(Cs)),s=Math.max(s,i.distanceToSquared(kt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ue('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ue("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new mn(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let y=0;y<i.count;y++)o[y]=new F,l[y]=new F;let c=new F,h=new F,d=new F,u=new Be,p=new Be,g=new Be,_=new F,m=new F;function f(y,T,C){c.fromBufferAttribute(i,y),h.fromBufferAttribute(i,T),d.fromBufferAttribute(i,C),u.fromBufferAttribute(r,y),p.fromBufferAttribute(r,T),g.fromBufferAttribute(r,C),h.sub(c),d.sub(c),p.sub(u),g.sub(u);let U=1/(p.x*g.y-g.x*p.y);isFinite(U)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(U),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(U),o[y].add(_),o[T].add(_),o[C].add(_),l[y].add(m),l[T].add(m),l[C].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let y=0,T=S.length;y<T;++y){let C=S[y],U=C.start,O=C.count;for(let H=U,L=U+O;H<L;H+=3)f(e.getX(H+0),e.getX(H+1),e.getX(H+2))}let R=new F,M=new F,b=new F,E=new F;function I(y){b.fromBufferAttribute(s,y),E.copy(b);let T=o[y];R.copy(T),R.sub(b.multiplyScalar(b.dot(T))).normalize(),M.crossVectors(E,T);let U=M.dot(l[y])<0?-1:1;a.setXYZW(y,R.x,R.y,R.z,U)}for(let y=0,T=S.length;y<T;++y){let C=S[y],U=C.start,O=C.count;for(let H=U,L=U+O;H<L;H+=3)I(e.getX(H+0)),I(e.getX(H+1)),I(e.getX(H+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new mn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);let s=new F,r=new F,a=new F,o=new F,l=new F,c=new F,h=new F,d=new F;if(e)for(let u=0,p=e.count;u<p;u+=3){let g=e.getX(u+0),_=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,p=t.count;u<p;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)kt.fromBufferAttribute(e,t),kt.normalize(),e.setXYZ(t,kt.x,kt.y,kt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),p=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*h;for(let f=0;f<h;f++)u[g++]=c[p++]}return new mn(u,h,d)}if(this.index===null)return Ne("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,i);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],p=e(u,i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let p=c[d];h.push(p.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ya=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Fc,this.updateRanges=[],this.version=0,this.uuid=Pi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},rn=new F,Lr=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)rn.fromBufferAttribute(this,t),rn.applyMatrix4(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)rn.fromBufferAttribute(this,t),rn.applyNormalMatrix(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)rn.fromBufferAttribute(this,t),rn.transformDirection(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Wn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=dt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Wn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Wn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Wn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Wn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array),s=dt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array),s=dt(s,this.array),r=dt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Tr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new mn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Tr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},tc=new F,np=new F,ip=new Fe,Pn=class{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=tc.subVectors(i,t).cross(np.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(tc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||ip.getNormalMatrix(e),s=this.coplanarPoint(tc).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},sp=0,Zn=class extends Yn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sp++}),this.uuid=Pi(),this.name="",this.type="Material",this.blending=Ks,this.side=Oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_c,this.blendDst=yc,this.blendEquation=rs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=Bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Da,this.stencilZFail=Da,this.stencilZPass=Da,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Ne(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ne(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ve().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Pn().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Be().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Be().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Jn=class extends Zn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ve(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Is,xr=new F,Ps=new F,Ls=new F,Ds=new Be,_r=new Be,td=new bt,ma=new F,yr=new F,ga=new F,su=new Be,nc=new Be,ru=new Be,xi=class extends Vt{constructor(e=new Jn){if(super(),this.isSprite=!0,this.type="Sprite",Is===void 0){Is=new Nt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Ya(t,5);Is.setIndex([0,1,2,0,2,3]),Is.setAttribute("position",new Lr(i,3,0,!1)),Is.setAttribute("uv",new Lr(i,2,3,!1))}this.geometry=Is,this.material=e,this.center=new Be(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Ue('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ps.setFromMatrixScale(this.matrixWorld),td.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ls.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ps.multiplyScalar(-Ls.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let a=this.center;xa(ma.set(-.5,-.5,0),Ls,a,Ps,s,r),xa(yr.set(.5,-.5,0),Ls,a,Ps,s,r),xa(ga.set(.5,.5,0),Ls,a,Ps,s,r),su.set(0,0),nc.set(1,0),ru.set(1,1);let o=e.ray.intersectTriangle(ma,yr,ga,!1,xr);if(o===null&&(xa(yr.set(-.5,.5,0),Ls,a,Ps,s,r),nc.set(0,1),o=e.ray.intersectTriangle(ma,ga,yr,!1,xr),o===null))return;let l=e.ray.origin.distanceTo(xr);l<e.near||l>e.far||t.push({distance:l,point:xr.clone(),uv:pi.getInterpolation(xr,ma,yr,ga,su,nc,ru,new Be),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function xa(n,e,t,i,s,r){Ds.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(_r.x=r*Ds.x-s*Ds.y,_r.y=s*Ds.x+r*Ds.y):_r.copy(Ds),n.copy(e),n.x+=_r.x,n.y+=_r.y,n.applyMatrix4(td)}var fi=new F,ic=new F,_a=new F,ya=new F,Dr=class{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=fi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(fi.copy(this.origin).addScaledVector(this.direction,t),fi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){ic.copy(e).add(t).multiplyScalar(.5),_a.copy(t).sub(e).normalize(),ya.copy(this.origin).sub(ic);let r=e.distanceTo(t)*.5,a=-this.direction.dot(_a),o=ya.dot(this.direction),l=-ya.dot(_a),c=ya.lengthSq(),h=Math.abs(1-a*a),d,u,p,g;if(h>0)if(d=a*l-o,u=a*o-l,g=r*h,d>=0)if(u>=-g)if(u<=g){let _=1/h;d*=_,u*=_,p=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),p=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(ic).addScaledVector(_a,u),p}intersectSphere(e,t){if(e.radius<0)return null;fi.subVectors(e.center,this.origin);let i=fi.dot(this.direction),s=fi.dot(fi)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,fi)!==null}intersectTriangle(e,t,i,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=e.x-a.x,u=e.y-a.y,p=e.z-a.z,g=t.x-a.x,_=t.y-a.y,m=t.z-a.z,f=i.x-a.x,S=i.y-a.y,R=i.z-a.z,M=Math.abs(l),b=Math.abs(c),E=Math.abs(h),I,y,T,C,U,O,H,L,G,Z,J,re;if(M>=b&&M>=E?(T=l,O=d,G=g,re=f,l>=0?(I=c,y=h,C=u,U=p,H=_,L=m,Z=S,J=R):(I=h,y=c,C=p,U=u,H=m,L=_,Z=R,J=S)):b>=E?(T=c,O=u,G=_,re=S,c>=0?(I=h,y=l,C=p,U=d,H=m,L=g,Z=R,J=f):(I=l,y=h,C=d,U=p,H=g,L=m,Z=f,J=R)):(T=h,O=p,G=m,re=R,h>=0?(I=l,y=c,C=d,U=u,H=g,L=_,Z=f,J=S):(I=c,y=l,C=u,U=d,H=_,L=g,Z=S,J=f)),T===0)return null;let q=I/T,te=y/T,ie=1/T,Pe=C-q*O,Ce=U-te*O,pt=H-q*G,je=L-te*G,st=Z-q*re,Y=J-te*re,ee=st*je-Y*pt,Me=Pe*Y-Ce*st,Oe=pt*Ce-je*Pe;if(s){if(ee<0||Me<0||Oe<0)return null}else if((ee<0||Me<0||Oe<0)&&(ee>0||Me>0||Oe>0))return null;let ye=ee+Me+Oe;if(ye===0)return null;let Xe=ie*(ee*O+Me*G+Oe*re);return(ye>0?Xe<0:Xe>0)?null:this.at(Xe/ye,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Gt=class extends Zn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gi,this.combine=vc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},au=new bt,Qi=new Dr,va=new ns,ou=new F,Ma=new F,Sa=new F,ba=new F,sc=new F,Ea=new F,lu=new F,Ta=new F,Le=class extends Vt{constructor(e=new Nt,t=new Gt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Ea.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&(sc.fromBufferAttribute(d,e),a?Ea.addScaledVector(sc,h):Ea.addScaledVector(sc.sub(t),h))}t.add(Ea)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),va.copy(i.boundingSphere),va.applyMatrix4(r),Qi.copy(e.ray).recast(e.near),!(va.containsPoint(Qi.origin)===!1&&(Qi.intersectSphere(va,ou)===null||Qi.origin.distanceToSquared(ou)>(e.far-e.near)**2))&&(au.copy(r).invert(),Qi.copy(e.ray).applyMatrix4(au),!(i.boundingBox!==null&&Qi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Qi)))}_computeIntersections(e,t,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){let m=u[g],f=a[m.materialIndex],S=Math.max(m.start,p.start),R=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let M=S,b=R;M<b;M+=3){let E=o.getX(M),I=o.getX(M+1),y=o.getX(M+2);s=wa(this,f,e,i,c,h,d,E,I,y),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){let S=o.getX(m),R=o.getX(m+1),M=o.getX(m+2);s=wa(this,a,e,i,c,h,d,S,R,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){let m=u[g],f=a[m.materialIndex],S=Math.max(m.start,p.start),R=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let M=S,b=R;M<b;M+=3){let E=M,I=M+1,y=M+2;s=wa(this,f,e,i,c,h,d,E,I,y),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){let S=m,R=m+1,M=m+2;s=wa(this,a,e,i,c,h,d,S,R,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function rp(n,e,t,i,s,r,a,o){let l;if(e.side===on?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===Oi,o),l===null)return null;Ta.copy(o),Ta.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Ta);return c<t.near||c>t.far?null:{distance:c,point:Ta.clone(),object:n}}function wa(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,Ma),n.getVertexPosition(l,Sa),n.getVertexPosition(c,ba);let h=rp(n,e,t,i,Ma,Sa,ba,lu);if(h){let d=new F;pi.getBarycoord(lu,Ma,Sa,ba,d),s&&(h.uv=pi.getInterpolatedAttribute(s,o,l,c,d,new Be)),r&&(h.uv1=pi.getInterpolatedAttribute(r,o,l,c,d,new Be)),a&&(h.normal=pi.getInterpolatedAttribute(a,o,l,c,d,new F),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new F,materialIndex:0};pi.getNormal(Ma,Sa,ba,u.normal),h.face=u,h.barycoord=d}return h}var $a=class extends an{constructor(e=null,t=1,i=1,s,r,a,o,l,c=Ht,h=Ht,d,u){super(null,a,o,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var es=new ns,ap=new Be(.5,.5),Aa=new F,Ws=class{constructor(e=new Pn,t=new Pn,i=new Pn,s=new Pn,r=new Pn,a=new Pn){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ln,i=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],p=r[7],g=r[8],_=r[9],m=r[10],f=r[11],S=r[12],R=r[13],M=r[14],b=r[15];if(s[0].setComponents(c-a,p-h,f-g,b-S).normalize(),s[1].setComponents(c+a,p+h,f+g,b+S).normalize(),s[2].setComponents(c+o,p+d,f+_,b+R).normalize(),s[3].setComponents(c-o,p-d,f-_,b-R).normalize(),i)s[4].setComponents(l,u,m,M).normalize(),s[5].setComponents(c-l,p-u,f-m,b-M).normalize();else if(s[4].setComponents(c-l,p-u,f-m,b-M).normalize(),t===Ln)s[5].setComponents(c+l,p+u,f+m,b+M).normalize();else if(t===ks)s[5].setComponents(l,u,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),es.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),es.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(es)}intersectsSprite(e){es.center.set(0,0,0);let t=ap.distanceTo(e.center);return es.radius=.7071067811865476+t,es.applyMatrix4(e.matrixWorld),this.intersectsSphere(es)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Aa.x=s.normal.x>0?e.max.x:e.min.x,Aa.y=s.normal.y>0?e.max.y:e.min.y,Aa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Aa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Xs=class extends Zn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ve(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Za=new F,Ja=new F,cu=new bt,vr=new Dr,Ra=new ns,rc=new F,hu=new F,Nr=class extends Vt{constructor(e=new Nt,t=new Xs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Za.fromBufferAttribute(t,s-1),Ja.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Za.distanceTo(Ja);e.setAttribute("lineDistance",new ct(i,1))}else Ne("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ra.copy(i.boundingSphere),Ra.applyMatrix4(s),Ra.radius+=r,e.ray.intersectsSphere(Ra)===!1)return;cu.copy(s).invert(),vr.copy(e.ray).applyMatrix4(cu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){let p=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=p,m=g-1;_<m;_+=c){let f=h.getX(_),S=h.getX(_+1),R=Ca(this,e,vr,l,f,S,_);R&&t.push(R)}if(this.isLineLoop){let _=h.getX(g-1),m=h.getX(p),f=Ca(this,e,vr,l,_,m,g-1);f&&t.push(f)}}else{let p=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let _=p,m=g-1;_<m;_+=c){let f=Ca(this,e,vr,l,_,_+1,_);f&&t.push(f)}if(this.isLineLoop){let _=Ca(this,e,vr,l,g-1,p,g-1);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Ca(n,e,t,i,s,r,a){let o=n.geometry.attributes.position;if(Za.fromBufferAttribute(o,s),Ja.fromBufferAttribute(o,r),t.distanceSqToSegment(Za,Ja,rc,hu)>i)return;rc.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(rc);if(!(c<e.near||c>e.far))return{distance:c,point:hu.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}var Ur=class extends an{constructor(e=[],t=Bi,i,s,r,a,o,l,c,h){super(e,t,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Kn=class extends an{constructor(e,t,i,s,r,a,o,l,c){super(e,t,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Di=class extends an{constructor(e,t,i=Nn,s,r,a,o=Ht,l=Ht,c,h=qn,d=1){if(h!==qn&&h!==ki)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:d};super(u,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Vs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Ka=class extends Di{constructor(e,t=Nn,i=Bi,s,r,a=Ht,o=Ht,l,c=qn){let h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,i,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Fr=class extends an{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},_t=class n extends Nt{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,p=0;g("z","y","x",-1,-1,i,t,e,a,r,0),g("z","y","x",1,-1,i,t,-e,a,r,1),g("x","z","y",1,1,e,i,t,s,a,2),g("x","z","y",1,-1,e,i,-t,s,a,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ct(c,3)),this.setAttribute("normal",new ct(h,3)),this.setAttribute("uv",new ct(d,2));function g(_,m,f,S,R,M,b,E,I,y,T){let C=M/I,U=b/y,O=M/2,H=b/2,L=E/2,G=I+1,Z=y+1,J=0,re=0,q=new F;for(let te=0;te<Z;te++){let ie=te*U-H;for(let Pe=0;Pe<G;Pe++){let Ce=Pe*C-O;q[_]=Ce*S,q[m]=ie*R,q[f]=L,c.push(q.x,q.y,q.z),q[_]=0,q[m]=0,q[f]=E>0?1:-1,h.push(q.x,q.y,q.z),d.push(Pe/I),d.push(1-te/y),J+=1}}for(let te=0;te<y;te++)for(let ie=0;ie<I;ie++){let Pe=u+ie+G*te,Ce=u+ie+G*(te+1),pt=u+(ie+1)+G*(te+1),je=u+(ie+1)+G*te;l.push(Pe,Ce,je),l.push(Ce,pt,je),re+=6}o.addGroup(p,re,T),p+=re,u+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},qs=class n extends Nt{constructor(e=1,t=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:s,heightSegments:r},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],h=t/2,d=Math.PI/2*e,u=t,p=2*d+u,g=i*2+r,_=s+1,m=new F,f=new F;for(let S=0;S<=g;S++){let R=0,M=0,b=0,E=0;if(S<=i){let T=S/i,C=T*Math.PI/2;M=-h-e*Math.cos(C),b=e*Math.sin(C),E=-e*Math.cos(C),R=T*d}else if(S<=i+r){let T=(S-i)/r;M=-h+T*t,b=e,E=0,R=d+T*u}else{let T=(S-i-r)/i,C=T*Math.PI/2;M=h+e*Math.sin(C),b=e*Math.cos(C),E=e*Math.sin(C),R=d+u+T*d}let I=Math.max(0,Math.min(1,R/p)),y=0;S===0?y=.5/s:S===g&&(y=-.5/s);for(let T=0;T<=s;T++){let C=T/s,U=C*Math.PI*2,O=Math.sin(U),H=Math.cos(U);f.x=-b*H,f.y=M,f.z=b*O,o.push(f.x,f.y,f.z),m.set(-b*H,E,b*O),m.normalize(),l.push(m.x,m.y,m.z),c.push(C+y,I)}if(S>0){let T=(S-1)*_;for(let C=0;C<s;C++){let U=T+C,O=T+C+1,H=S*_+C,L=S*_+C+1;a.push(U,O,H),a.push(O,L,H)}}}this.setIndex(a),this.setAttribute("position",new ct(o,3)),this.setAttribute("normal",new ct(l,3)),this.setAttribute("uv",new ct(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},Ys=class n extends Nt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new F,h=new Be;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){let p=i+d/t*s;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/e+1)/2,h.y=(a[u+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new ct(a,3)),this.setAttribute("normal",new ct(o,3)),this.setAttribute("uv",new ct(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},jn=class n extends Nt{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],p=[],g=0,_=[],m=i/2,f=0;S(),a===!1&&(e>0&&R(!0),t>0&&R(!1)),this.setIndex(h),this.setAttribute("position",new ct(d,3)),this.setAttribute("normal",new ct(u,3)),this.setAttribute("uv",new ct(p,2));function S(){let M=new F,b=new F,E=0,I=(t-e)/i;for(let y=0;y<=r;y++){let T=[],C=y/r,U=C*(t-e)+e;for(let O=0;O<=s;O++){let H=O/s,L=H*l+o,G=Math.sin(L),Z=Math.cos(L);b.x=U*G,b.y=-C*i+m,b.z=U*Z,d.push(b.x,b.y,b.z),M.set(G,I,Z).normalize(),u.push(M.x,M.y,M.z),p.push(H,1-C),T.push(g++)}_.push(T)}for(let y=0;y<s;y++)for(let T=0;T<r;T++){let C=_[T][y],U=_[T+1][y],O=_[T+1][y+1],H=_[T][y+1];(e>0||T!==0)&&(h.push(C,U,H),E+=3),(t>0||T!==r-1)&&(h.push(U,O,H),E+=3)}c.addGroup(f,E,0),f+=E}function R(M){let b=g,E=new Be,I=new F,y=0,T=M===!0?e:t,C=M===!0?1:-1;for(let O=1;O<=s;O++)d.push(0,m*C,0),u.push(0,C,0),p.push(.5,.5),g++;let U=g;for(let O=0;O<=s;O++){let L=O/s*l+o,G=Math.cos(L),Z=Math.sin(L);I.x=T*Z,I.y=m*C,I.z=T*G,d.push(I.x,I.y,I.z),u.push(0,C,0),E.x=G*.5+.5,E.y=Z*.5*C+.5,p.push(E.x,E.y),g++}for(let O=0;O<s;O++){let H=b+O,L=U+O;M===!0?h.push(L,L+1,H):h.push(L+1,L,H),y+=3}c.addGroup(f,y,M===!0?1:2),f+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},$s=class n extends jn{constructor(e=1,t=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var is=class n extends Nt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,d=e/o,u=t/l,p=[],g=[],_=[],m=[];for(let f=0;f<h;f++){let S=f*u-a;for(let R=0;R<c;R++){let M=R*d-r;g.push(M,-S,0),_.push(0,0,1),m.push(R/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let S=0;S<o;S++){let R=S+c*f,M=S+c*(f+1),b=S+1+c*(f+1),E=S+1+c*f;p.push(R,M,E),p.push(M,b,E)}this.setIndex(p),this.setAttribute("position",new ct(g,3)),this.setAttribute("normal",new ct(_,3)),this.setAttribute("uv",new ct(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};var Qn=class n extends Nt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],d=new F,u=new F,p=[],g=[],_=[],m=[];for(let f=0;f<=i;f++){let S=[],R=f/i,M=a+R*o,b=e*Math.cos(M),E=Math.sqrt(e*e-b*b),I=0;f===0&&a===0?I=.5/t:f===i&&l===Math.PI&&(I=-.5/t);for(let y=0;y<=t;y++){let T=y/t,C=s+T*r;d.x=-E*Math.cos(C),d.y=b,d.z=E*Math.sin(C),g.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),m.push(T+I,1-R),S.push(c++)}h.push(S)}for(let f=0;f<i;f++)for(let S=0;S<t;S++){let R=h[f][S+1],M=h[f][S],b=h[f+1][S],E=h[f+1][S+1];(f!==0||a>0)&&p.push(R,M,E),(f!==i-1||l<Math.PI)&&p.push(M,b,E)}this.setIndex(p),this.setAttribute("position",new ct(g,3)),this.setAttribute("normal",new ct(_,3)),this.setAttribute("uv",new ct(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Or=class n extends Nt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},i=Math.floor(i),s=Math.floor(s);let l=[],c=[],h=[],d=[],u=new F,p=new F,g=new F;for(let _=0;_<=i;_++){let m=a+_/i*o;for(let f=0;f<=s;f++){let S=f/s*r;p.x=(e+t*Math.cos(m))*Math.cos(S),p.y=(e+t*Math.cos(m))*Math.sin(S),p.z=t*Math.sin(m),c.push(p.x,p.y,p.z),u.x=e*Math.cos(S),u.y=e*Math.sin(S),g.subVectors(p,u).normalize(),h.push(g.x,g.y,g.z),d.push(f/s),d.push(_/i)}}for(let _=1;_<=i;_++)for(let m=1;m<=s;m++){let f=(s+1)*_+m-1,S=(s+1)*(_-1)+m-1,R=(s+1)*(_-1)+m,M=(s+1)*_+m;l.push(f,S,M),l.push(S,R,M)}this.setIndex(l),this.setAttribute("position",new ct(c,3)),this.setAttribute("normal",new ct(h,3)),this.setAttribute("uv",new ct(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function os(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(uu(s))s.isRenderTargetTexture?(Ne("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(uu(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function tn(n){let e={};for(let t=0;t<n.length;t++){let i=os(n[t]);for(let s in i)e[s]=i[s]}return e}function uu(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function op(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Bc(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}var nd={clone:os,merge:tn},lp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,gn=class extends Zn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=lp,this.fragmentShader=cp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=os(e.uniforms),this.uniformsGroups=op(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new Ve().setHex(s.value);break;case"v2":this.uniforms[i].value=new Be().fromArray(s.value);break;case"v3":this.uniforms[i].value=new F().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Tt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Fe().fromArray(s.value);break;case"m4":this.uniforms[i].value=new bt().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},ja=class extends gn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Wt=class extends Zn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=el,this.normalScale=new Be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Qa=class extends Zn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Hu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},eo=class extends Zn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ns(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function ac(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var Ni=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=t[++i],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}a=i,i=0;break t}break n}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},to=class extends Ni{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:cc,endingEnd:cc}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case hc:r=e,o=2*t-i;break;case uc:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case hc:a=e,l=2*i-t;break;case uc:a=1,l=i+s[1]-s[0];break;default:a=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,p=this._weightNext,g=(i-t)/(s-t),_=g*g,m=_*g,f=-u*m+2*u*_-u*g,S=(1+u)*m+(-1.5-2*u)*_+(-.5+u)*g+1,R=(-1-p)*m+(1.5+p)*_+.5*g,M=p*m-p*_;for(let b=0;b!==o;++b)r[b]=f*a[h+b]+S*a[c+b]+R*a[l+b]+M*a[d+b];return r}},no=class extends Ni{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(s-t),d=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*d+a[l+u]*h;return r}},io=class extends Ni{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},so=class extends Ni{interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let g=(i-t)/(s-t),_=1-g;for(let m=0;m!==o;++m)r[m]=a[c+m]*_+a[l+m]*g;return r}let u=o*2,p=e-1;for(let g=0;g!==o;++g){let _=a[c+g],m=a[l+g],f=p*u+g*2,S=d[f],R=d[f+1],M=e*u+g*2,b=h[M],E=h[M+1],I=up(i,t,S,b,s);r[g]=id(I,_,R,E,m)}return r}};function id(n,e,t,i,s){let r=1-n;return r*r*r*e+3*r*r*n*t+3*r*n*n*i+n*n*n*s}function hp(n,e,t,i,s){let r=1-n;return 3*r*r*(t-e)+6*r*n*(i-t)+3*n*n*(s-i)}function up(n,e,t,i,s){let r=(n-e)/(s-e);for(let a=0;a<8;a++){let o=id(r,e,t,i,s)-n;if(Math.abs(o)<1e-10)break;let l=hp(r,e,t,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var xn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ns(t,this.TimeBufferType),this.values=Ns(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Ns(e.times,Array),values:Ns(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),ac(e.settings)&&(i.settings={inTangents:Ns(e.settings.inTangents,Array),outTangents:Ns(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new io(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new no(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new to(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new so(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Mr:t=this.InterpolantFactoryMethodDiscrete;break;case Va:t=this.InterpolantFactoryMethodLinear;break;case La:t=this.InterpolantFactoryMethodSmooth;break;case lc:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ne("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Mr;case this.InterpolantFactoryMethodLinear:return Va;case this.InterpolantFactoryMethodSmooth:return La;case this.InterpolantFactoryMethodBezier:return lc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;ac(this.settings)&&(du(this.settings.inTangents,e),du(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ue("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Ue("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Ue("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Ue("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&Hf(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Ue("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===La,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let d=o*i,u=d-i,p=d+i;for(let g=0;g!==i;++g){let _=t[d+g];if(_!==t[u+g]||_!==t[p+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let d=o*i,u=a*i;for(let p=0;p!==i;++p)t[u+p]=t[d+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,ac(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function du(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}xn.prototype.ValueTypeName="";xn.prototype.TimeBufferType=Float32Array;xn.prototype.ValueBufferType=Float32Array;xn.prototype.DefaultInterpolation=Va;var Ui=class extends xn{constructor(e,t,i){super(e,t,i)}};Ui.prototype.ValueTypeName="bool";Ui.prototype.ValueBufferType=Array;Ui.prototype.DefaultInterpolation=Mr;Ui.prototype.InterpolantFactoryMethodLinear=void 0;Ui.prototype.InterpolantFactoryMethodSmooth=void 0;var ro=class extends xn{constructor(e,t,i,s){super(e,t,i,s)}};ro.prototype.ValueTypeName="color";var ao=class extends xn{constructor(e,t,i,s){super(e,t,i,s)}};ao.prototype.ValueTypeName="number";var oo=class extends Ni{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)$n.slerpFlat(r,0,a,c-o,a,c,l);return r}},Br=class extends xn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new oo(this.times,this.values,this.getValueSize(),e)}};Br.prototype.ValueTypeName="quaternion";Br.prototype.InterpolantFactoryMethodSmooth=void 0;var Fi=class extends xn{constructor(e,t,i){super(e,t,i)}};Fi.prototype.ValueTypeName="string";Fi.prototype.ValueBufferType=Array;Fi.prototype.DefaultInterpolation=Mr;Fi.prototype.InterpolantFactoryMethodLinear=void 0;Fi.prototype.InterpolantFactoryMethodSmooth=void 0;var lo=class extends xn{constructor(e,t,i,s){super(e,t,i,s)}};lo.prototype.ValueTypeName="vector";var co=class{constructor(e,t,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let p=c[d],g=c[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},sd=new co,ho=class{constructor(e){this.manager=e!==void 0?e:sd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};ho.DEFAULT_MATERIAL_NAME="__DEFAULT";var zr=class extends Vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ve(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},kr=class extends zr{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ve(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},oc=new bt,fu=new F,pu=new F,uo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Be(512,512),this.mapType=dn,this.map=null,this.mapPass=null,this.matrix=new bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ws,this._frameExtents=new Be(1,1),this._viewportCount=1,this._viewports=[new Tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;fu.setFromMatrixPosition(e.matrixWorld),t.position.copy(fu),pu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(pu),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){oc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(oc,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===ks||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(oc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ia=new F,Pa=new $n,Gn=new F,Hr=class extends Vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new bt,this.projectionMatrix=new bt,this.projectionMatrixInverse=new bt,this.coordinateSystem=Ln,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ia,Pa,Gn),Gn.x===1&&Gn.y===1&&Gn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ia,Pa,Gn.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Ia,Pa,Gn),Gn.x===1&&Gn.y===1&&Gn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ia,Pa,Gn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ii=new F,mu=new Be,gu=new Be,en=class extends Hr{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ga*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ol*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ga*2*Math.atan(Math.tan(Ol*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ii.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ii.x,Ii.y).multiplyScalar(-e/Ii.z),Ii.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ii.x,Ii.y).multiplyScalar(-e/Ii.z)}getViewSize(e,t){return this.getViewBounds(e,mu,gu),t.subVectors(gu,mu)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ol*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Zs=class extends Hr{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},dc=class extends uo{constructor(){super(new Zs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Vr=class extends zr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.target=new Vt,this.shadow=new dc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Us=-90,Fs=1,fo=class extends Vt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new en(Us,Fs,e,t);s.layers=this.layers,this.add(s);let r=new en(Us,Fs,e,t);r.layers=this.layers,this.add(r);let a=new en(Us,Fs,e,t);a.layers=this.layers,this.add(a);let o=new en(Us,Fs,e,t);o.layers=this.layers,this.add(o);let l=new en(Us,Fs,e,t);l.layers=this.layers,this.add(l);let c=new en(Us,Fs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Ln)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ks)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,u,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},po=class extends en{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var zc="\\[\\]\\.:\\/",dp=new RegExp("["+zc+"]","g"),kc="[^"+zc+"]",fp="[^"+zc.replace("\\.","")+"]",pp=/((?:WC+[\/:])*)/.source.replace("WC",kc),mp=/(WCOD+)?/.source.replace("WCOD",fp),gp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",kc),xp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",kc),_p=new RegExp("^"+pp+mp+gp+xp+"$"),yp=["material","materials","bones","map"],fc=class{constructor(e,t,i){let s=i||St.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},St=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(dp,"")}static parseTrackName(e){let t=_p.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);yp.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ne("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){Ue("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ue("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ue("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ue("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ue("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Ue("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){Ue("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;Ue("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ue("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ue("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};St.Composite=fc;St.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};St.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};St.prototype.GetterByBindingType=[St.prototype._getValue_direct,St.prototype._getValue_array,St.prototype._getValue_arrayElement,St.prototype._getValue_toArray];St.prototype.SetterByBindingTypeAndVersioning=[[St.prototype._setValue_direct,St.prototype._setValue_direct_setNeedsUpdate,St.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[St.prototype._setValue_array,St.prototype._setValue_array_setNeedsUpdate,St.prototype._setValue_array_setMatrixWorldNeedsUpdate],[St.prototype._setValue_arrayElement,St.prototype._setValue_arrayElement_setNeedsUpdate,St.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[St.prototype._setValue_fromArray,St.prototype._setValue_fromArray_setNeedsUpdate,St.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ey=new Float32Array(1);var pc=class n{static{n.prototype.isMatrix2=!0}constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};function Hc(n,e,t,i){let s=vp(i);switch(t){case Dc:return n*e;case Uc:return n*e/s.components*s.byteLength;case Mo:return n*e/s.components*s.byteLength;case Hi:return n*e*2/s.components*s.byteLength;case So:return n*e*2/s.components*s.byteLength;case Nc:return n*e*3/s.components*s.byteLength;case bn:return n*e*4/s.components*s.byteLength;case bo:return n*e*4/s.components*s.byteLength;case Xr:case qr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Yr:case $r:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case To:case Ao:return Math.max(n,16)*Math.max(e,8)/4;case Eo:case wo:return Math.max(n,8)*Math.max(e,8)/2;case Ro:case Co:case Po:case Lo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Io:case Zr:case Do:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case No:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Uo:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Fo:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Oo:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Bo:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case zo:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case ko:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Ho:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Vo:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Go:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Wo:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Xo:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case qo:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Yo:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case $o:case Zo:case Jo:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Ko:case jo:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Jr:case Qo:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function vp(n){switch(n){case dn:case Cc:return{byteLength:1,components:1};case Qs:case Ic:case Fn:return{byteLength:2,components:1};case yo:case vo:return{byteLength:2,components:4};case Nn:case _o:case Un:return{byteLength:4,components:1};case Pc:case Lc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Ne("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function wd(){let n=null,e=!1,t=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Sp(n){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,d=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){let h=l.array,d=l.updateRanges;if(n.bindBuffer(c,o),d.length===0)n.bufferSubData(c,0,h);else{d.sort((p,g)=>p.start-g.start);let u=0;for(let p=1;p<d.length;p++){let g=d[u],_=d[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++u,d[u]=_)}d.length=u+1;for(let p=0,g=d.length;p<g;p++){let _=d[p];n.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var bp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ep=`#ifdef USE_ALPHAHASH
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
#endif`,Tp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ap=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Rp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Cp=`#ifdef USE_AOMAP
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
#endif`,Ip=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Pp=`#ifdef USE_BATCHING
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
#endif`,Lp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Dp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Np=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Up=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Fp=`#ifdef USE_IRIDESCENCE
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
#endif`,Op=`#ifdef USE_BUMPMAP
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
#endif`,Bp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,zp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Gp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Wp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Xp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,qp=`#define PI 3.141592653589793
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
} // validated`,Yp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,$p=`vec3 transformedNormal = objectNormal;
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
#endif`,Zp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Jp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Kp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Qp="gl_FragColor = linearToOutputTexel( gl_FragColor );",em=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,tm=`#ifdef USE_ENVMAP
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
#endif`,nm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,im=`#ifdef USE_ENVMAP
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
#endif`,sm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rm=`#ifdef USE_ENVMAP
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
#endif`,am=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,om=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hm=`#ifdef USE_GRADIENTMAP
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
}`,um=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pm=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,mm=`#ifdef USE_ENVMAP
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
#endif`,gm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_m=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ym=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vm=`PhysicalMaterial material;
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
#endif`,Mm=`uniform sampler2D dfgLUT;
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
}`,Sm=`
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
#endif`,bm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Em=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Tm=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,wm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Am=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Im=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Pm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Lm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Dm=`#if defined( USE_POINTS_UV )
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
#endif`,Nm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Um=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Fm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Om=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Bm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zm=`#ifdef USE_MORPHTARGETS
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
#endif`,km=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Vm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Gm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,qm=`#ifdef USE_NORMALMAP
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
#endif`,Ym=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$m=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Zm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Jm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Km=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Qm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,eg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ng=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ig=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ag=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,og=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,lg=`float getShadowMask() {
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
}`,cg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hg=`#ifdef USE_SKINNING
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
#endif`,ug=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dg=`#ifdef USE_SKINNING
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
#endif`,fg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,xg=`#ifdef USE_TRANSMISSION
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
#endif`,_g=`#ifdef USE_TRANSMISSION
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
#endif`,yg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,bg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Eg=`uniform sampler2D t2D;
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
}`,Tg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ag=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cg=`#include <common>
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
}`,Ig=`#if DEPTH_PACKING == 3200
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
}`,Pg=`#define DISTANCE
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
}`,Lg=`#define DISTANCE
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
}`,Dg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ng=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ug=`uniform float scale;
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
}`,Fg=`uniform vec3 diffuse;
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
}`,Og=`#include <common>
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
}`,Bg=`uniform vec3 diffuse;
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
}`,zg=`#define LAMBERT
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
}`,kg=`#define LAMBERT
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
}`,Hg=`#define MATCAP
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
}`,Vg=`#define MATCAP
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
}`,Gg=`#define NORMAL
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
}`,Wg=`#define NORMAL
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
}`,Xg=`#define PHONG
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
}`,qg=`#define PHONG
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
}`,Yg=`#define STANDARD
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
}`,$g=`#define STANDARD
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
}`,Zg=`#define TOON
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
}`,Jg=`#define TOON
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
}`,Kg=`uniform float size;
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
}`,jg=`uniform vec3 diffuse;
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
}`,Qg=`#include <common>
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
}`,e0=`uniform vec3 color;
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
}`,t0=`uniform float rotation;
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
}`,n0=`uniform vec3 diffuse;
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
}`,Ge={alphahash_fragment:bp,alphahash_pars_fragment:Ep,alphamap_fragment:Tp,alphamap_pars_fragment:wp,alphatest_fragment:Ap,alphatest_pars_fragment:Rp,aomap_fragment:Cp,aomap_pars_fragment:Ip,batching_pars_vertex:Pp,batching_vertex:Lp,begin_vertex:Dp,beginnormal_vertex:Np,bsdfs:Up,iridescence_fragment:Fp,bumpmap_pars_fragment:Op,clipping_planes_fragment:Bp,clipping_planes_pars_fragment:zp,clipping_planes_pars_vertex:kp,clipping_planes_vertex:Hp,color_fragment:Vp,color_pars_fragment:Gp,color_pars_vertex:Wp,color_vertex:Xp,common:qp,cube_uv_reflection_fragment:Yp,defaultnormal_vertex:$p,displacementmap_pars_vertex:Zp,displacementmap_vertex:Jp,emissivemap_fragment:Kp,emissivemap_pars_fragment:jp,colorspace_fragment:Qp,colorspace_pars_fragment:em,envmap_fragment:tm,envmap_common_pars_fragment:nm,envmap_pars_fragment:im,envmap_pars_vertex:sm,envmap_physical_pars_fragment:mm,envmap_vertex:rm,fog_vertex:am,fog_pars_vertex:om,fog_fragment:lm,fog_pars_fragment:cm,gradientmap_pars_fragment:hm,lightmap_pars_fragment:um,lights_lambert_fragment:dm,lights_lambert_pars_fragment:fm,lights_pars_begin:pm,lights_toon_fragment:gm,lights_toon_pars_fragment:xm,lights_phong_fragment:_m,lights_phong_pars_fragment:ym,lights_physical_fragment:vm,lights_physical_pars_fragment:Mm,lights_fragment_begin:Sm,lights_fragment_maps:bm,lights_fragment_end:Em,lightprobes_pars_fragment:Tm,logdepthbuf_fragment:wm,logdepthbuf_pars_fragment:Am,logdepthbuf_pars_vertex:Rm,logdepthbuf_vertex:Cm,map_fragment:Im,map_pars_fragment:Pm,map_particle_fragment:Lm,map_particle_pars_fragment:Dm,metalnessmap_fragment:Nm,metalnessmap_pars_fragment:Um,morphinstance_vertex:Fm,morphcolor_vertex:Om,morphnormal_vertex:Bm,morphtarget_pars_vertex:zm,morphtarget_vertex:km,normal_fragment_begin:Hm,normal_fragment_maps:Vm,normal_pars_fragment:Gm,normal_pars_vertex:Wm,normal_vertex:Xm,normalmap_pars_fragment:qm,clearcoat_normal_fragment_begin:Ym,clearcoat_normal_fragment_maps:$m,clearcoat_pars_fragment:Zm,iridescence_pars_fragment:Jm,opaque_fragment:Km,packing:jm,premultiplied_alpha_fragment:Qm,project_vertex:eg,dithering_fragment:tg,dithering_pars_fragment:ng,roughnessmap_fragment:ig,roughnessmap_pars_fragment:sg,shadowmap_pars_fragment:rg,shadowmap_pars_vertex:ag,shadowmap_vertex:og,shadowmask_pars_fragment:lg,skinbase_vertex:cg,skinning_pars_vertex:hg,skinning_vertex:ug,skinnormal_vertex:dg,specularmap_fragment:fg,specularmap_pars_fragment:pg,tonemapping_fragment:mg,tonemapping_pars_fragment:gg,transmission_fragment:xg,transmission_pars_fragment:_g,uv_pars_fragment:yg,uv_pars_vertex:vg,uv_vertex:Mg,worldpos_vertex:Sg,background_vert:bg,background_frag:Eg,backgroundCube_vert:Tg,backgroundCube_frag:wg,cube_vert:Ag,cube_frag:Rg,depth_vert:Cg,depth_frag:Ig,distance_vert:Pg,distance_frag:Lg,equirect_vert:Dg,equirect_frag:Ng,linedashed_vert:Ug,linedashed_frag:Fg,meshbasic_vert:Og,meshbasic_frag:Bg,meshlambert_vert:zg,meshlambert_frag:kg,meshmatcap_vert:Hg,meshmatcap_frag:Vg,meshnormal_vert:Gg,meshnormal_frag:Wg,meshphong_vert:Xg,meshphong_frag:qg,meshphysical_vert:Yg,meshphysical_frag:$g,meshtoon_vert:Zg,meshtoon_frag:Jg,points_vert:Kg,points_frag:jg,shadow_vert:Qg,shadow_frag:e0,sprite_vert:t0,sprite_frag:n0},fe={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new Be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new F},probesMax:{value:new F},probesResolution:{value:new F}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new Be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},ni={basic:{uniforms:tn([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:tn([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Ve(0)},envMapIntensity:{value:1}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:tn([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:tn([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:tn([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new Ve(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:tn([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:tn([fe.points,fe.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:tn([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:tn([fe.common,fe.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:tn([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:tn([fe.sprite,fe.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distance:{uniforms:tn([fe.common,fe.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distance_vert,fragmentShader:Ge.distance_frag},shadow:{uniforms:tn([fe.lights,fe.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};ni.physical={uniforms:tn([ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new Be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new Be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new Be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};var il={r:0,b:0,g:0},i0=new bt,Ad=new Fe;Ad.set(-1,0,0,0,1,0,0,0,1);function s0(n,e,t,i,s,r){let a=new Ve(0),o=s===!0?0:1,l,c,h=null,d=0,u=null;function p(S){let R=S.isScene===!0?S.background:null;if(R&&R.isTexture){let M=S.backgroundBlurriness>0;R=e.get(R,M)}return R}function g(S){let R=!1,M=p(S);M===null?m(a,o):M&&M.isColor&&(m(M,1),R=!0);let b=n.xr.getEnvironmentBlendMode();b==="additive"?t.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||R)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function _(S,R){let M=p(R);M&&(M.isCubeTexture||M.mapping===Gr)?(c===void 0&&(c=new Le(new _t(1,1,1),new gn({name:"BackgroundCubeMaterial",uniforms:os(ni.backgroundCube.uniforms),vertexShader:ni.backgroundCube.vertexShader,fragmentShader:ni.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,E,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(i0.makeRotationFromEuler(R.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Ad),c.material.toneMapped=Je.getTransfer(M.colorSpace)!==lt,(h!==M||d!==M.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,h=M,d=M.version,u=n.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Le(new is(2,2),new gn({name:"BackgroundMaterial",uniforms:os(ni.background.uniforms),vertexShader:ni.background.vertexShader,fragmentShader:ni.background.fragmentShader,side:Oi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,l.material.toneMapped=Je.getTransfer(M.colorSpace)!==lt,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||d!==M.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,h=M,d=M.version,u=n.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function m(S,R){S.getRGB(il,Bc(n)),t.buffers.color.setClear(il.r,il.g,il.b,R,r)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,R=1){a.set(S),o=R,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,m(a,o)},render:g,addToRenderList:_,dispose:f}}function r0(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,a=!1;function o(U,O,H,L,G){let Z=!1,J=d(U,L,H,O);r!==J&&(r=J,c(r.object)),Z=p(U,L,H,G),Z&&g(U,L,H,G),G!==null&&e.update(G,n.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,M(U,O,H,L),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return n.createVertexArray()}function c(U){return n.bindVertexArray(U)}function h(U){return n.deleteVertexArray(U)}function d(U,O,H,L){let G=L.wireframe===!0,Z=i[O.id];Z===void 0&&(Z={},i[O.id]=Z);let J=U.isInstancedMesh===!0?U.id:0,re=Z[J];re===void 0&&(re={},Z[J]=re);let q=re[H.id];q===void 0&&(q={},re[H.id]=q);let te=q[G];return te===void 0&&(te=u(l()),q[G]=te),te}function u(U){let O=[],H=[],L=[];for(let G=0;G<t;G++)O[G]=0,H[G]=0,L[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:H,attributeDivisors:L,object:U,attributes:{},index:null}}function p(U,O,H,L){let G=r.attributes,Z=O.attributes,J=0,re=H.getAttributes();for(let q in re)if(re[q].location>=0){let ie=G[q],Pe=Z[q];if(Pe===void 0&&(q==="instanceMatrix"&&U.instanceMatrix&&(Pe=U.instanceMatrix),q==="instanceColor"&&U.instanceColor&&(Pe=U.instanceColor)),ie===void 0||ie.attribute!==Pe||Pe&&ie.data!==Pe.data)return!0;J++}return r.attributesNum!==J||r.index!==L}function g(U,O,H,L){let G={},Z=O.attributes,J=0,re=H.getAttributes();for(let q in re)if(re[q].location>=0){let ie=Z[q];ie===void 0&&(q==="instanceMatrix"&&U.instanceMatrix&&(ie=U.instanceMatrix),q==="instanceColor"&&U.instanceColor&&(ie=U.instanceColor));let Pe={};Pe.attribute=ie,ie&&ie.data&&(Pe.data=ie.data),G[q]=Pe,J++}r.attributes=G,r.attributesNum=J,r.index=L}function _(){let U=r.newAttributes;for(let O=0,H=U.length;O<H;O++)U[O]=0}function m(U){f(U,0)}function f(U,O){let H=r.newAttributes,L=r.enabledAttributes,G=r.attributeDivisors;H[U]=1,L[U]===0&&(n.enableVertexAttribArray(U),L[U]=1),G[U]!==O&&(n.vertexAttribDivisor(U,O),G[U]=O)}function S(){let U=r.newAttributes,O=r.enabledAttributes;for(let H=0,L=O.length;H<L;H++)O[H]!==U[H]&&(n.disableVertexAttribArray(H),O[H]=0)}function R(U,O,H,L,G,Z,J){J===!0?n.vertexAttribIPointer(U,O,H,G,Z):n.vertexAttribPointer(U,O,H,L,G,Z)}function M(U,O,H,L){_();let G=L.attributes,Z=H.getAttributes(),J=O.defaultAttributeValues;for(let re in Z){let q=Z[re];if(q.location>=0){let te=G[re];if(te===void 0&&(re==="instanceMatrix"&&U.instanceMatrix&&(te=U.instanceMatrix),re==="instanceColor"&&U.instanceColor&&(te=U.instanceColor)),te!==void 0){let ie=te.normalized,Pe=te.itemSize,Ce=e.get(te);if(Ce===void 0)continue;let pt=Ce.buffer,je=Ce.type,st=Ce.bytesPerElement,Y=je===n.INT||je===n.UNSIGNED_INT||te.gpuType===_o;if(te.isInterleavedBufferAttribute){let ee=te.data,Me=ee.stride,Oe=te.offset;if(ee.isInstancedInterleavedBuffer){for(let ye=0;ye<q.locationSize;ye++)f(q.location+ye,ee.meshPerAttribute);U.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let ye=0;ye<q.locationSize;ye++)m(q.location+ye);n.bindBuffer(n.ARRAY_BUFFER,pt);for(let ye=0;ye<q.locationSize;ye++)R(q.location+ye,Pe/q.locationSize,je,ie,Me*st,(Oe+Pe/q.locationSize*ye)*st,Y)}else{if(te.isInstancedBufferAttribute){for(let ee=0;ee<q.locationSize;ee++)f(q.location+ee,te.meshPerAttribute);U.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let ee=0;ee<q.locationSize;ee++)m(q.location+ee);n.bindBuffer(n.ARRAY_BUFFER,pt);for(let ee=0;ee<q.locationSize;ee++)R(q.location+ee,Pe/q.locationSize,je,ie,Pe*st,Pe/q.locationSize*ee*st,Y)}}else if(J!==void 0){let ie=J[re];if(ie!==void 0)switch(ie.length){case 2:n.vertexAttrib2fv(q.location,ie);break;case 3:n.vertexAttrib3fv(q.location,ie);break;case 4:n.vertexAttrib4fv(q.location,ie);break;default:n.vertexAttrib1fv(q.location,ie)}}}}S()}function b(){T();for(let U in i){let O=i[U];for(let H in O){let L=O[H];for(let G in L){let Z=L[G];for(let J in Z)h(Z[J].object),delete Z[J];delete L[G]}}delete i[U]}}function E(U){if(i[U.id]===void 0)return;let O=i[U.id];for(let H in O){let L=O[H];for(let G in L){let Z=L[G];for(let J in Z)h(Z[J].object),delete Z[J];delete L[G]}}delete i[U.id]}function I(U){for(let O in i){let H=i[O];for(let L in H){let G=H[L];if(G[U.id]===void 0)continue;let Z=G[U.id];for(let J in Z)h(Z[J].object),delete Z[J];delete G[U.id]}}}function y(U){for(let O in i){let H=i[O],L=U.isInstancedMesh===!0?U.id:0,G=H[L];if(G!==void 0){for(let Z in G){let J=G[Z];for(let re in J)h(J[re].object),delete J[re];delete G[Z]}delete H[L],Object.keys(H).length===0&&delete i[O]}}}function T(){C(),a=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:T,resetDefaultState:C,dispose:b,releaseStatesOfGeometry:E,releaseStatesOfObject:y,releaseStatesOfProgram:I,initAttributes:_,enableAttribute:m,disableUnusedAttributes:S}}function a0(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function a(l,c,h){h!==0&&(n.drawArraysInstanced(i,l,c,h),t.update(c,i,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let p=0;p<h;p++)u+=c[p];t.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function o0(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let I=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(I){return!(I!==bn&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(I){let y=I===Fn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==dn&&I!==Un&&!y&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(I){if(I==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Ne("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&Ne("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),R=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),b=n.getParameter(n.MAX_SAMPLES),E=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:S,maxVaryings:R,maxFragmentUniforms:M,maxSamples:b,samples:E}}function l0(n){let e=this,t=null,i=0,s=!1,r=!1,a=new Pn,o=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let p=d.length!==0||u||i!==0||s;return s=u,i=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,p){let g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,f=n.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let S=r?0:i,R=S*4,M=f.clippingState||null;l.value=M,M=h(g,u,R,p);for(let b=0;b!==R;++b)M[b]=t[b];f.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,u,p,g){let _=d!==null?d.length:0,m=null;if(_!==0){if(m=l.value,g!==!0||m===null){let f=p+_*4,S=u.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<f)&&(m=new Float32Array(f));for(let R=0,M=p;R!==_;++R,M+=4)a.copy(d[R]).applyMatrix4(S,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}var nr=4,c0=6,h0=20,u0=256,Kr=new Zs,rd=new Ve,Vc=null,Gc=0,Wc=0,Xc=!1,d0=new F,ls=new F,rl=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:a=256,position:o=d0}=r;Vc=this._renderer.getRenderTarget(),Gc=this._renderer.getActiveCubeFace(),Wc=this._renderer.getActiveMipmapLevel(),Xc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ld(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=od(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Vc,Gc,Wc),this._renderer.xr.enabled=Xc,e.scissorTest=!1,tr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Bi||e.mapping===as?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Vc=this._renderer.getRenderTarget(),Gc=this._renderer.getActiveCubeFace(),Wc=this._renderer.getActiveMipmapLevel(),Xc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:$t,minFilter:$t,generateMipmaps:!1,type:Fn,format:bn,colorSpace:Sr,depthBuffer:!1},s=ad(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ad(e,t,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=f0(r)),this._blurMaterial=m0(r,e,t),this._ggxMaterial=p0(r,e,t)}return s}_compileMaterial(e){let t=new Le(new Nt,e);this._renderer.compile(t,Kr)}_sceneToCubeUV(e,t,i,s,r){let l=new en(90,1,t,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,p=d.toneMapping;d.getClearColor(rd),d.toneMapping=Dn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Le(new _t,new Gt({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,m=_.material,f=!1,S=e.background;S?S.isColor&&(m.color.copy(S),e.background=null,f=!0):(m.color.copy(rd),f=!0);for(let R=0;R<6;R++){let M=R%3;M===0?(l.up.set(0,c[R],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[R],r.y,r.z)):M===1?(l.up.set(0,0,c[R]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[R],r.z)):(l.up.set(0,c[R],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[R]));let b=this._cubeSize;tr(s,M*b,R>2?b:0,b,b),d.setRenderTarget(s),f&&d.render(_,l),d.render(e,l)}d.toneMapping=p,d.autoClear=u,e.background=S}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===Bi||e.mapping===as;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ld()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=od());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;tr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Kr)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;let l=a.uniforms,c=i/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,p=d*u,{_lodMax:g}=this,_=this._sizeLods[i],m=3*_*(i>g-nr?i-g+nr:0),f=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=g-t,tr(r,m,f,3*_,2*_),s.setRenderTarget(r),s.render(o,Kr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-i,tr(e,m,f,3*_,2*_),s.setRenderTarget(e),s.render(o,Kr)}_blur(e,t,i,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,i,a),this._blurPass(r,e,i,i,a)}_blurPass(e,t,i,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-i;let h=this._sizeLods[s],d=3*h*(s>this._lodMax-nr?s-this._lodMax+nr:0),u=4*(this._cubeSize-h);tr(t,d,u,3*h,2*h),a.setRenderTarget(t),a.render(l,Kr)}};function f0(n){let e=[],t=[],i=n,s=n-nr+1+c0;for(let r=0;r<s;r++){let a=Math.pow(2,i);e.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,p=3,g=new Float32Array(p*u*d),_=new Float32Array(p*u*d);for(let f=0;f<d;f++){let S=f%3*2/3-1,R=f>2?0:-1,M=[S,R,0,S+2/3,R,0,S+2/3,R+1,0,S,R,0,S+2/3,R+1,0,S,R+1,0];g.set(M,p*u*f);for(let b=0;b<u;b++){let E=h[b*2]*2-1,I=h[b*2+1]*2-1;f===0?ls.set(1,I,E):f===1?ls.set(-E,1,-I):f===2?ls.set(-E,I,1):f===3?ls.set(-1,I,-E):f===4?ls.set(-E,-1,I):ls.set(E,I,-1),ls.toArray(_,(f*u+b)*p)}}let m=new Nt;m.setAttribute("position",new mn(g,p)),m.setAttribute("outputDirection",new mn(_,p)),t.push(new Le(m,null)),i>nr&&i--}return{lodMeshes:t,sizeLods:e}}function ad(n,e,t){let i=new un(n,e,t);return i.texture.mapping=Gr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function tr(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function p0(n,e,t){return new gn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:u0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ll(),fragmentShader:`

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
		`,blending:ei,depthTest:!1,depthWrite:!1})}function m0(n,e,t){return new gn({name:"SphericalGaussianBlur",defines:{SAMPLES:h0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:ll(),fragmentShader:`

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
		`,blending:ei,depthTest:!1,depthWrite:!1})}function od(){return new gn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ll(),fragmentShader:`

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
		`,blending:ei,depthTest:!1,depthWrite:!1})}function ld(){return new gn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ll(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function ll(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var al=class extends un{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Ur(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new _t(5,5,5),r=new gn({name:"CubemapFromEquirect",uniforms:os(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:on,blending:ei});r.uniforms.tEquirect.value=t;let a=new Le(s,r),o=t.minFilter;return t.minFilter===zi&&(t.minFilter=$t),new fo(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}};function g0(n){let e=new WeakMap,t=new WeakMap,i=null;function s(u,p=!1){return u==null?null:p?a(u):r(u)}function r(u){if(u&&u.isTexture){let p=u.mapping;if(p===mo||p===go)if(e.has(u)){let g=e.get(u).texture;return o(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let _=new al(g.height);return _.fromEquirectangularTexture(n,u),e.set(u,_),u.addEventListener("dispose",c),o(_.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let p=u.mapping,g=p===mo||p===go,_=p===Bi||p===as;if(g||_){let m=t.get(u),f=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==f)return i===null&&(i=new rl(n)),m=g?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{let S=u.image;return g&&S&&S.height>0||_&&S&&l(S)?(i===null&&(i=new rl(n)),m=g?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,p){return p===mo?u.mapping=Bi:p===go&&(u.mapping=as),u}function l(u){let p=0,g=6;for(let _=0;_<g;_++)u[_]!==void 0&&p++;return p===g}function c(u){let p=u.target;p.removeEventListener("dispose",c);let g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function h(u){let p=u.target;p.removeEventListener("dispose",h);let g=t.get(p);g!==void 0&&(t.delete(p),g.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function x0(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&ts("WebGLRenderer: "+i+" extension not supported."),s}}}function _0(n,e,t,i){let s={},r=new WeakMap;function a(d){let u=d.target;u.index!==null&&e.remove(u.index);for(let g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete s[u.id];let p=r.get(u);p&&(e.remove(p),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,t.memory.geometries++),u}function l(d){let u=d.attributes;for(let p in u)e.update(u[p],n.ARRAY_BUFFER)}function c(d){let u=[],p=d.index,g=d.attributes.position,_=0;if(g===void 0)return;if(p!==null){let S=p.array;_=p.version;for(let R=0,M=S.length;R<M;R+=3){let b=S[R+0],E=S[R+1],I=S[R+2];u.push(b,E,E,I,I,b)}}else{let S=g.array;_=g.version;for(let R=0,M=S.length/3-1;R<M;R+=3){let b=R+0,E=R+1,I=R+2;u.push(b,E,E,I,I,b)}}let m=new(g.count>=65535?Pr:Ir)(u,1);m.version=_;let f=r.get(d);f&&e.remove(f),r.set(d,m)}function h(d){let u=r.get(d);if(u){let p=d.index;p!==null&&u.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function y0(n,e,t){let i;function s(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,u){n.drawElements(i,u,r,d*a),t.update(u,i,1)}function c(d,u,p){p!==0&&(n.drawElementsInstanced(i,u,r,d*a,p),t.update(u,i,p))}function h(d,u,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,d,0,p);let _=0;for(let m=0;m<p;m++)_+=u[m];t.update(_,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function v0(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:Ue("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function M0(n,e,t){let i=new WeakMap,s=new Tt;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=i.get(o);if(u===void 0||u.count!==d){let T=function(){I.dispose(),i.delete(o),o.removeEventListener("dispose",T)};u!==void 0&&u.texture.dispose();let p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],S=o.morphAttributes.color||[],R=0;p===!0&&(R=1),g===!0&&(R=2),_===!0&&(R=3);let M=o.attributes.position.count*R,b=1;M>e.maxTextureSize&&(b=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let E=new Float32Array(M*b*4*d),I=new wr(E,M,b,d);I.type=Un,I.needsUpdate=!0;let y=R*4;for(let C=0;C<d;C++){let U=m[C],O=f[C],H=S[C],L=M*b*4*C;for(let G=0;G<U.count;G++){let Z=G*y;p===!0&&(s.fromBufferAttribute(U,G),E[L+Z+0]=s.x,E[L+Z+1]=s.y,E[L+Z+2]=s.z,E[L+Z+3]=0),g===!0&&(s.fromBufferAttribute(O,G),E[L+Z+4]=s.x,E[L+Z+5]=s.y,E[L+Z+6]=s.z,E[L+Z+7]=0),_===!0&&(s.fromBufferAttribute(H,G),E[L+Z+8]=s.x,E[L+Z+9]=s.y,E[L+Z+10]=s.z,E[L+Z+11]=H.itemSize===4?s.w:1)}}u={count:d,texture:I,size:new Be(M,b)},i.set(o,u),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let p=0;for(let _=0;_<c.length;_++)p+=c[_];let g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function S0(n,e,t,i,s){let r=new WeakMap;function a(c){let h=s.render.frame,d=c.geometry,u=e.get(c,d);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let p=c.skeleton;r.get(p)!==h&&(p.update(),r.set(p,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var b0={[Mc]:"LINEAR_TONE_MAPPING",[Sc]:"REINHARD_TONE_MAPPING",[bc]:"CINEON_TONE_MAPPING",[Ec]:"ACES_FILMIC_TONE_MAPPING",[wc]:"AGX_TONE_MAPPING",[Ac]:"NEUTRAL_TONE_MAPPING",[Tc]:"CUSTOM_TONE_MAPPING"};function E0(n,e,t,i,s,r){let a=new un(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new Nt;c.setAttribute("position",new ct([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new ct([0,2,0,0,2,0],2));let h=new ja({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Le(c,h),u=new Zs(-1,1,1,-1,0,1),p=null,g=null,_=!1,m,f=null,S=[],R=!1;this.setSize=function(M,b){a.setSize(M,b),o!==null&&o.setSize(M,b),l!==null&&l.setSize(M,b);for(let E=0;E<S.length;E++){let I=S[E];I.setSize&&I.setSize(M,b)}},this.setEffects=function(M){S=M,R=S.length>0&&S[0].isRenderPass===!0;let b=a.width,E=a.height;S.length>0&&o===null&&(o=new un(b,E,{type:Fn,depthBuffer:!1,stencilBuffer:!1}),l=new un(b,E,{type:Fn,depthBuffer:!1,stencilBuffer:!1}));for(let I=0;I<S.length;I++){let y=S[I];y.setSize&&y.setSize(b,E)}},this.begin=function(M,b){if(_||M.toneMapping===Dn&&S.length===0)return!1;if(f=b,b!==null){let E=b.width,I=b.height;(a.width!==E||a.height!==I)&&this.setSize(E,I)}return R===!1&&M.setRenderTarget(a),m=M.toneMapping,M.toneMapping=Dn,!0},this.hasRenderPass=function(){return R},this.end=function(M,b){M.toneMapping=m,_=!0;let E=a,I=o;for(let y=0;y<S.length;y++){let T=S[y];T.enabled!==!1&&(T.render(M,I,E,b),T.needsSwap!==!1&&(E=I,I=I===o?l:o))}if(p!==M.outputColorSpace||g!==M.toneMapping){p=M.outputColorSpace,g=M.toneMapping,h.defines={},Je.getTransfer(p)===lt&&(h.defines.SRGB_TRANSFER="");let y=b0[g];y&&(h.defines[y]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=E.texture,M.setRenderTarget(f),M.render(d,u),f=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Rd=new an,$c=new Di(1,1),Cd=new wr,Id=new qa,Pd=new Ur,cd=[],hd=[],ud=new Float32Array(16),dd=new Float32Array(9),fd=new Float32Array(4);function sr(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=cd[s];if(r===void 0&&(r=new Float32Array(s),cd[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function Ot(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Bt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function cl(n,e){let t=hd[e];t===void 0&&(t=new Int32Array(e),hd[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function T0(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function w0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;n.uniform2fv(this.addr,e),Bt(t,e)}}function A0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ot(t,e))return;n.uniform3fv(this.addr,e),Bt(t,e)}}function R0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;n.uniform4fv(this.addr,e),Bt(t,e)}}function C0(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ot(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Bt(t,e)}else{if(Ot(t,i))return;fd.set(i),n.uniformMatrix2fv(this.addr,!1,fd),Bt(t,i)}}function I0(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ot(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Bt(t,e)}else{if(Ot(t,i))return;dd.set(i),n.uniformMatrix3fv(this.addr,!1,dd),Bt(t,i)}}function P0(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ot(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Bt(t,e)}else{if(Ot(t,i))return;ud.set(i),n.uniformMatrix4fv(this.addr,!1,ud),Bt(t,i)}}function L0(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function D0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;n.uniform2iv(this.addr,e),Bt(t,e)}}function N0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;n.uniform3iv(this.addr,e),Bt(t,e)}}function U0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;n.uniform4iv(this.addr,e),Bt(t,e)}}function F0(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function O0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;n.uniform2uiv(this.addr,e),Bt(t,e)}}function B0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;n.uniform3uiv(this.addr,e),Bt(t,e)}}function z0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;n.uniform4uiv(this.addr,e),Bt(t,e)}}function k0(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?($c.compareFunction=t.isReversedDepthBuffer()?nl:tl,r=$c):r=Rd,t.setTexture2D(e||r,s)}function H0(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Id,s)}function V0(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Pd,s)}function G0(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Cd,s)}function W0(n){switch(n){case 5126:return T0;case 35664:return w0;case 35665:return A0;case 35666:return R0;case 35674:return C0;case 35675:return I0;case 35676:return P0;case 5124:case 35670:return L0;case 35667:case 35671:return D0;case 35668:case 35672:return N0;case 35669:case 35673:return U0;case 5125:return F0;case 36294:return O0;case 36295:return B0;case 36296:return z0;case 35678:case 36198:case 36298:case 36306:case 35682:return k0;case 35679:case 36299:case 36307:return H0;case 35680:case 36300:case 36308:case 36293:return V0;case 36289:case 36303:case 36311:case 36292:return G0}}function X0(n,e){n.uniform1fv(this.addr,e)}function q0(n,e){let t=sr(e,this.size,2);n.uniform2fv(this.addr,t)}function Y0(n,e){let t=sr(e,this.size,3);n.uniform3fv(this.addr,t)}function $0(n,e){let t=sr(e,this.size,4);n.uniform4fv(this.addr,t)}function Z0(n,e){let t=sr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function J0(n,e){let t=sr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function K0(n,e){let t=sr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function j0(n,e){n.uniform1iv(this.addr,e)}function Q0(n,e){n.uniform2iv(this.addr,e)}function ex(n,e){n.uniform3iv(this.addr,e)}function tx(n,e){n.uniform4iv(this.addr,e)}function nx(n,e){n.uniform1uiv(this.addr,e)}function ix(n,e){n.uniform2uiv(this.addr,e)}function sx(n,e){n.uniform3uiv(this.addr,e)}function rx(n,e){n.uniform4uiv(this.addr,e)}function ax(n,e,t){let i=this.cache,s=e.length,r=cl(t,s);Ot(i,r)||(n.uniform1iv(this.addr,r),Bt(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=$c:a=Rd;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function ox(n,e,t){let i=this.cache,s=e.length,r=cl(t,s);Ot(i,r)||(n.uniform1iv(this.addr,r),Bt(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Id,r[a])}function lx(n,e,t){let i=this.cache,s=e.length,r=cl(t,s);Ot(i,r)||(n.uniform1iv(this.addr,r),Bt(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Pd,r[a])}function cx(n,e,t){let i=this.cache,s=e.length,r=cl(t,s);Ot(i,r)||(n.uniform1iv(this.addr,r),Bt(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Cd,r[a])}function hx(n){switch(n){case 5126:return X0;case 35664:return q0;case 35665:return Y0;case 35666:return $0;case 35674:return Z0;case 35675:return J0;case 35676:return K0;case 5124:case 35670:return j0;case 35667:case 35671:return Q0;case 35668:case 35672:return ex;case 35669:case 35673:return tx;case 5125:return nx;case 36294:return ix;case 36295:return sx;case 36296:return rx;case 35678:case 36198:case 36298:case 36306:case 35682:return ax;case 35679:case 36299:case 36307:return ox;case 35680:case 36300:case 36308:case 36293:return lx;case 36289:case 36303:case 36311:case 36292:return cx}}var Zc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=W0(t.type)}},Jc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=hx(t.type)}},Kc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],i)}}},qc=/(\w+)(\])?(\[|\.)?/g;function pd(n,e){n.seq.push(e),n.map[e.id]=e}function ux(n,e,t){let i=n.name,s=i.length;for(qc.lastIndex=0;;){let r=qc.exec(i),a=qc.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){pd(t,c===void 0?new Zc(o,n,e):new Jc(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new Kc(o),pd(t,d)),t=d}}}var ir=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);ux(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&i.push(a)}return i}};function md(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var dx=37297,fx=0;function px(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}var gd=new Fe;function mx(n){Je._getMatrix(gd,Je.workingColorSpace,n);let e=`mat3( ${gd.elements.map(t=>t.toFixed(4))} )`;switch(Je.getTransfer(n)){case br:return[e,"LinearTransferOETF"];case lt:return[e,"sRGBTransferOETF"];default:return Ne("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function xd(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+px(n.getShaderSource(e),o)}else return r}function gx(n,e){let t=mx(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var xx={[Mc]:"Linear",[Sc]:"Reinhard",[bc]:"Cineon",[Ec]:"ACESFilmic",[wc]:"AgX",[Ac]:"Neutral",[Tc]:"Custom"};function _x(n,e){let t=xx[e];return t===void 0?(Ne("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var sl=new F;function yx(){Je.getLuminanceCoefficients(sl);let n=sl.x.toFixed(4),e=sl.y.toFixed(4),t=sl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vx(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qr).join(`
`)}function Mx(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Sx(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Qr(n){return n!==""}function _d(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function yd(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var bx=/^[ \t]*#include +<([\w\d./]+)>/gm;function jc(n){return n.replace(bx,Tx)}var Ex=new Map;function Tx(n,e){let t=Ge[e];if(t===void 0){let i=Ex.get(e);if(i!==void 0)t=Ge[i],Ne('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return jc(t)}var wx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vd(n){return n.replace(wx,Ax)}function Ax(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Md(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}var Rx={[ss]:"SHADOWMAP_TYPE_PCF",[Js]:"SHADOWMAP_TYPE_VSM"};function Cx(n){return Rx[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Ix={[Bi]:"ENVMAP_TYPE_CUBE",[as]:"ENVMAP_TYPE_CUBE",[Gr]:"ENVMAP_TYPE_CUBE_UV"};function Px(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":Ix[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var Lx={[as]:"ENVMAP_MODE_REFRACTION"};function Dx(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Lx[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Nx={[vc]:"ENVMAP_BLENDING_MULTIPLY",[Bu]:"ENVMAP_BLENDING_MIX",[zu]:"ENVMAP_BLENDING_ADD"};function Ux(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Nx[n.combine]||"ENVMAP_BLENDING_NONE"}function Fx(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Ox(n,e,t,i){let s=n.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=Cx(t),c=Px(t),h=Dx(t),d=Ux(t),u=Fx(t),p=vx(t),g=Mx(r),_=s.createProgram(),m,f,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Qr).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Qr).join(`
`),f.length>0&&(f+=`
`)):(m=[Md(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qr).join(`
`),f=[Md(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Dn?"#define TONE_MAPPING":"",t.toneMapping!==Dn?Ge.tonemapping_pars_fragment:"",t.toneMapping!==Dn?_x("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,gx("linearToOutputTexel",t.outputColorSpace),yx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Qr).join(`
`)),a=jc(a),a=_d(a,t),a=yd(a,t),o=jc(o),o=_d(o,t),o=yd(o,t),a=vd(a),o=vd(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===Oc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Oc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let R=S+m+a,M=S+f+o,b=md(s,s.VERTEX_SHADER,R),E=md(s,s.FRAGMENT_SHADER,M);s.attachShader(_,b),s.attachShader(_,E),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function I(U){if(n.debug.checkShaderErrors){let O=s.getProgramInfoLog(_)||"",H=s.getShaderInfoLog(b)||"",L=s.getShaderInfoLog(E)||"",G=O.trim(),Z=H.trim(),J=L.trim(),re=!0,q=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(re=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,b,E);else{let te=xd(s,b,"vertex"),ie=xd(s,E,"fragment");Ue("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+G+`
`+te+`
`+ie)}else G!==""?Ne("WebGLProgram: Program Info Log:",G):(Z===""||J==="")&&(q=!1);q&&(U.diagnostics={runnable:re,programLog:G,vertexShader:{log:Z,prefix:m},fragmentShader:{log:J,prefix:f}})}s.deleteShader(b),s.deleteShader(E),y=new ir(s,_),T=Sx(s,_)}let y;this.getUniforms=function(){return y===void 0&&I(this),y};let T;this.getAttributes=function(){return T===void 0&&I(this),T};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(_,dx)),C},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=fx++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=b,this.fragmentShader=E,this}var Bx=0,Qc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new eh(e),t.set(e,i)),i}},eh=class{constructor(e){this.id=Bx++,this.code=e,this.usedTimes=0}};function zx(n){return n===Hi||n===Zr||n===Jr}function kx(n,e,t,i,s,r){let a=new Ar,o=new Qc,l=new Set,c=[],h=new Map,d=i.logarithmicDepthBuffer,u=i.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return l.add(y),y===0?"uv":`uv${y}`}function _(y,T,C,U,O,H){let L=U.fog,G=O.geometry,Z=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?U.environment:null,J=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,re=e.get(y.envMap||Z,J),q=re&&re.mapping===Gr?re.image.height:null,te=p[y.type];y.precision!==null&&(u=i.getMaxPrecision(y.precision),u!==y.precision&&Ne("WebGLProgram.getParameters:",y.precision,"not supported, using",u,"instead."));let ie=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Pe=ie!==void 0?ie.length:0,Ce=0;G.morphAttributes.position!==void 0&&(Ce=1),G.morphAttributes.normal!==void 0&&(Ce=2),G.morphAttributes.color!==void 0&&(Ce=3);let pt,je,st,Y;if(te){let gt=ni[te];pt=gt.vertexShader,je=gt.fragmentShader}else{pt=y.vertexShader,je=y.fragmentShader;let gt=o.getVertexShaderStage(y),at=o.getFragmentShaderStage(y);o.update(y,gt,at),st=gt.id,Y=at.id}let ee=n.getRenderTarget(),Me=n.state.buffers.depth.getReversed(),Oe=O.isInstancedMesh===!0,ye=O.isBatchedMesh===!0,Xe=!!y.map,Ft=!!y.matcap,Ye=!!re,it=!!y.aoMap,mt=!!y.lightMap,Ze=!!y.bumpMap&&y.wireframe===!1,Et=!!y.normalMap,zt=!!y.displacementMap,hn=!!y.emissiveMap,wt=!!y.metalnessMap,It=!!y.roughnessMap,N=y.anisotropy>0,Jt=y.clearcoat>0,ht=y.dispersion>0,w=y.retroreflectivity>0,x=y.iridescence>0,B=y.sheen>0,V=y.transmission>0,X=N&&!!y.anisotropyMap,ae=Jt&&!!y.clearcoatMap,oe=Jt&&!!y.clearcoatNormalMap,$=Jt&&!!y.clearcoatRoughnessMap,Q=x&&!!y.iridescenceMap,le=x&&!!y.iridescenceThicknessMap,Ae=B&&!!y.sheenColorMap,de=B&&!!y.sheenRoughnessMap,ce=!!y.specularMap,Re=!!y.specularColorMap,De=!!y.specularIntensityMap,ze=V&&!!y.transmissionMap,D=V&&!!y.thicknessMap,he=!!y.gradientMap,j=!!y.alphaMap,ue=y.alphaTest>0,ge=!!y.alphaHash,ne=!!y.extensions,Ie=Dn;y.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Ie=n.toneMapping);let Te={shaderID:te,shaderType:y.type,shaderName:y.name,vertexShader:pt,fragmentShader:je,defines:y.defines,customVertexShaderID:st,customFragmentShaderID:Y,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:u,batching:ye,batchingColor:ye&&O._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&O.instanceColor!==null,instancingMorph:Oe&&O.morphTexture!==null,outputColorSpace:ee===null?n.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:Je.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Xe,matcap:Ft,envMap:Ye,envMapMode:Ye&&re.mapping,envMapCubeUVHeight:q,aoMap:it,lightMap:mt,bumpMap:Ze,normalMap:Et,displacementMap:zt,emissiveMap:hn,normalMapObjectSpace:Et&&y.normalMapType===Vu,normalMapTangentSpace:Et&&y.normalMapType===el,packedNormalMap:Et&&y.normalMapType===el&&zx(y.normalMap.format),metalnessMap:wt,roughnessMap:It,anisotropy:N,anisotropyMap:X,clearcoat:Jt,clearcoatMap:ae,clearcoatNormalMap:oe,clearcoatRoughnessMap:$,dispersion:ht,retroreflection:w,iridescence:x,iridescenceMap:Q,iridescenceThicknessMap:le,sheen:B,sheenColorMap:Ae,sheenRoughnessMap:de,specularMap:ce,specularColorMap:Re,specularIntensityMap:De,transmission:V,transmissionMap:ze,thicknessMap:D,gradientMap:he,opaque:y.transparent===!1&&y.blending===Ks&&y.alphaToCoverage===!1,alphaMap:j,alphaTest:ue,alphaHash:ge,combine:y.combine,mapUv:Xe&&g(y.map.channel),aoMapUv:it&&g(y.aoMap.channel),lightMapUv:mt&&g(y.lightMap.channel),bumpMapUv:Ze&&g(y.bumpMap.channel),normalMapUv:Et&&g(y.normalMap.channel),displacementMapUv:zt&&g(y.displacementMap.channel),emissiveMapUv:hn&&g(y.emissiveMap.channel),metalnessMapUv:wt&&g(y.metalnessMap.channel),roughnessMapUv:It&&g(y.roughnessMap.channel),anisotropyMapUv:X&&g(y.anisotropyMap.channel),clearcoatMapUv:ae&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:oe&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:le&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:de&&g(y.sheenRoughnessMap.channel),specularMapUv:ce&&g(y.specularMap.channel),specularColorMapUv:Re&&g(y.specularColorMap.channel),specularIntensityMapUv:De&&g(y.specularIntensityMap.channel),transmissionMapUv:ze&&g(y.transmissionMap.channel),thicknessMapUv:D&&g(y.thicknessMap.channel),alphaMapUv:j&&g(y.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Et||N),vertexNormals:!!G.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!G.attributes.uv&&(Xe||j),fog:!!L,useFog:y.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||G.attributes.normal===void 0&&Et===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Me,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:G.attributes.position!==void 0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:Pe,morphTextureStride:Ce,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:H.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ie,decodeVideoTexture:Xe&&y.map.isVideoTexture===!0&&Je.getTransfer(y.map.colorSpace)===lt,decodeVideoTextureEmissive:hn&&y.emissiveMap.isVideoTexture===!0&&Je.getTransfer(y.emissiveMap.colorSpace)===lt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===_n,flipSided:y.side===on,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:ne&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ne&&y.extensions.multiDraw===!0||ye)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Te.vertexUv1s=l.has(1),Te.vertexUv2s=l.has(2),Te.vertexUv3s=l.has(3),l.clear(),Te}function m(y){let T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(let C in y.defines)T.push(C),T.push(y.defines[C]);return y.isRawShaderMaterial===!1&&(f(T,y),S(T,y),T.push(n.outputColorSpace)),T.push(y.customProgramCacheKey),T.join()}function f(y,T){y.push(T.precision),y.push(T.outputColorSpace),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.mapUv),y.push(T.alphaMapUv),y.push(T.lightMapUv),y.push(T.aoMapUv),y.push(T.bumpMapUv),y.push(T.normalMapUv),y.push(T.displacementMapUv),y.push(T.emissiveMapUv),y.push(T.metalnessMapUv),y.push(T.roughnessMapUv),y.push(T.anisotropyMapUv),y.push(T.clearcoatMapUv),y.push(T.clearcoatNormalMapUv),y.push(T.clearcoatRoughnessMapUv),y.push(T.iridescenceMapUv),y.push(T.iridescenceThicknessMapUv),y.push(T.sheenColorMapUv),y.push(T.sheenRoughnessMapUv),y.push(T.specularMapUv),y.push(T.specularColorMapUv),y.push(T.specularIntensityMapUv),y.push(T.transmissionMapUv),y.push(T.thicknessMapUv),y.push(T.combine),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numSunLights),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numSunLightShadows),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.numLightProbes),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function S(y,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),y.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),y.push(a.mask)}function R(y){let T=p[y.type],C;if(T){let U=ni[T];C=nd.clone(U.uniforms)}else C=y.uniforms;return C}function M(y,T){let C=h.get(T);return C!==void 0?++C.usedTimes:(C=new Ox(n,T,y,s),c.push(C),h.set(T,C)),C}function b(y){if(--y.usedTimes===0){let T=c.indexOf(y);c[T]=c[c.length-1],c.pop(),h.delete(y.cacheKey),y.destroy()}}function E(y){o.remove(y)}function I(){o.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:R,acquireProgram:M,releaseProgram:b,releaseShaderCache:E,programs:c,dispose:I}}function Hx(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function Vx(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Sd(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function bd(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function o(u,p,g,_,m,f){let S=n[e];return S===void 0?(S={id:u.id,object:u,geometry:p,material:g,materialVariant:a(u),groupOrder:_,renderOrder:u.renderOrder,z:m,group:f},n[e]=S):(S.id=u.id,S.object=u,S.geometry=p,S.material=g,S.materialVariant=a(u),S.groupOrder=_,S.renderOrder=u.renderOrder,S.z=m,S.group=f),e++,S}function l(u,p,g,_,m,f,S){S.reversedDepth===!0&&(m=-m);let R=o(u,p,g,_,m,f);g.transmission>0?i.push(R):g.transparent===!0?s.push(R):t.push(R)}function c(u,p,g,_,m,f){let S=o(u,p,g,_,m,f);g.transmission>0?i.unshift(S):g.transparent===!0?s.unshift(S):t.unshift(S)}function h(u,p){t.length>1&&t.sort(u||Vx),i.length>1&&i.sort(p||Sd),s.length>1&&s.sort(p||Sd)}function d(){for(let u=e,p=n.length;u<p;u++){let g=n[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function Gx(){let n=new WeakMap;function e(i,s){let r=n.get(i),a;return r===void 0?(a=new bd,n.set(i,[a])):s>=r.length?(a=new bd,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Wx(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new F,color:new Ve};break;case"SpotLight":t={position:new F,direction:new F,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":t={color:new Ve,position:new F,halfWidth:new F,halfHeight:new F};break}return n[e.id]=t,t}}}function Xx(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var qx=0;function Yx(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function $x(n){let e=new Wx,t=Xx(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new F);let s=new F,r=new bt,a=new bt;function o(c){let h=0,d=0,u=0;for(let O=0;O<9;O++)i.probe[O].set(0,0,0);let p=0,g=0,_=0,m=0,f=0,S=0,R=0,M=0,b=0,E=0,I=0,y=0,T=0,C=0;c.sort(Yx);for(let O=0,H=c.length;O<H;O++){let L=c[O],G=L.color,Z=L.intensity,J=L.distance,re=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Hi?re=L.shadow.map.texture:re=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=G.r*Z,d+=G.g*Z,u+=G.b*Z;else if(L.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(L.sh.coefficients[q],Z);C++}else if(L.isSunLight){let q=e.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let te=L.shadow,ie=t.get(L);ie.shadowIntensity=te.intensity,ie.shadowBias=te.bias,ie.shadowNormalBias=te.normalBias,ie.shadowRadius=te.radius,ie.shadowMapSize.copy(te.mapSize).multiply(te.getFrameExtents()),i.sunShadow[g]=ie,i.sunShadowMap[g]=re;let Pe=te.getViewportCount();for(let Ce=0;Ce<Pe;Ce++)i.sunShadowMatrix[_+Ce]=te.getMatrix(Ce),i.sunShadowCascade[_+Ce]=te._cascadeData[Ce];_+=Pe,g++}i.sun[p]=q,p++}else if(L.isDirectionalLight){let q=e.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let te=L.shadow,ie=t.get(L);ie.shadowIntensity=te.intensity,ie.shadowBias=te.bias,ie.shadowNormalBias=te.normalBias,ie.shadowRadius=te.radius,ie.shadowMapSize=te.mapSize,i.directionalShadow[m]=ie,i.directionalShadowMap[m]=re,i.directionalShadowMatrix[m]=L.shadow.matrix,b++}i.directional[m]=q,m++}else if(L.isSpotLight){let q=e.get(L);q.position.setFromMatrixPosition(L.matrixWorld),q.color.copy(G).multiplyScalar(Z),q.distance=J,q.coneCos=Math.cos(L.angle),q.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),q.decay=L.decay,i.spot[S]=q;let te=L.shadow;if(L.map&&(i.spotLightMap[y]=L.map,y++,te.updateMatrices(L),L.castShadow&&T++),i.spotLightMatrix[S]=te.matrix,L.castShadow){let ie=t.get(L);ie.shadowIntensity=te.intensity,ie.shadowBias=te.bias,ie.shadowNormalBias=te.normalBias,ie.shadowRadius=te.radius,ie.shadowMapSize=te.mapSize,i.spotShadow[S]=ie,i.spotShadowMap[S]=re,I++}S++}else if(L.isRectAreaLight){let q=e.get(L);q.color.copy(G).multiplyScalar(Z),q.halfWidth.set(L.width*.5,0,0),q.halfHeight.set(0,L.height*.5,0),i.rectArea[R]=q,R++}else if(L.isPointLight){let q=e.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),q.distance=L.distance,q.decay=L.decay,L.castShadow){let te=L.shadow,ie=t.get(L);ie.shadowIntensity=te.intensity,ie.shadowBias=te.bias,ie.shadowNormalBias=te.normalBias,ie.shadowRadius=te.radius,ie.shadowMapSize=te.mapSize,ie.shadowCameraNear=te.camera.near,ie.shadowCameraFar=te.camera.far,i.pointShadow[f]=ie,i.pointShadowMap[f]=re,i.pointShadowMatrix[f]=L.shadow.matrix,E++}i.point[f]=q,f++}else if(L.isHemisphereLight){let q=e.get(L);q.skyColor.copy(L.color).multiplyScalar(Z),q.groundColor.copy(L.groundColor).multiplyScalar(Z),i.hemi[M]=q,M++}}R>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=fe.LTC_FLOAT_1,i.rectAreaLTC2=fe.LTC_FLOAT_2):(i.rectAreaLTC1=fe.LTC_HALF_1,i.rectAreaLTC2=fe.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;let U=i.hash;(U.sunLength!==p||U.directionalLength!==m||U.pointLength!==f||U.spotLength!==S||U.rectAreaLength!==R||U.hemiLength!==M||U.numSunShadows!==g||U.numDirectionalShadows!==b||U.numPointShadows!==E||U.numSpotShadows!==I||U.numSpotMaps!==y||U.numLightProbes!==C)&&(i.sun.length=p,i.directional.length=m,i.spot.length=S,i.rectArea.length=R,i.point.length=f,i.hemi.length=M,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=_,i.sunShadowCascade.length=_,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.directionalShadowMatrix.length=b,i.pointShadow.length=E,i.pointShadowMap.length=E,i.pointShadowMatrix.length=E,i.spotShadow.length=I,i.spotShadowMap.length=I,i.spotLightMatrix.length=I+y-T,i.spotLightMap.length=y,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=C,U.sunLength=p,U.directionalLength=m,U.pointLength=f,U.spotLength=S,U.rectAreaLength=R,U.hemiLength=M,U.numSunShadows=g,U.numDirectionalShadows=b,U.numPointShadows=E,U.numSpotShadows=I,U.numSpotMaps=y,U.numLightProbes=C,i.version=qx++)}function l(c,h){let d=0,u=0,p=0,g=0,_=0,m=0,f=h.matrixWorldInverse;for(let S=0,R=c.length;S<R;S++){let M=c[S];if(M.isSunLight){let b=i.sun[d];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(f),d++}else if(M.isDirectionalLight){let b=i.directional[u];b.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(f),u++}else if(M.isSpotLight){let b=i.spot[g];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(f),b.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(f),g++}else if(M.isRectAreaLight){let b=i.rectArea[_];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(f),a.identity(),r.copy(M.matrixWorld),r.premultiply(f),a.extractRotation(r),b.halfWidth.set(M.width*.5,0,0),b.halfHeight.set(0,M.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),_++}else if(M.isPointLight){let b=i.point[p];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(f),p++}else if(M.isHemisphereLight){let b=i.hemi[m];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(f),m++}}}return{setup:o,setupView:l,state:i}}function Ed(n){let e=new $x(n),t=[],i=[],s=[];function r(u){d.camera=u,t.length=0,i.length=0,s.length=0}function a(u){t.push(u)}function o(u){i.push(u)}function l(u){s.push(u)}function c(){e.setup(t)}function h(u){e.setupView(t,u)}let d={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Zx(n){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Ed(n),e.set(s,[o])):r>=a.length?(o=new Ed(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}var Jx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Kx=`uniform sampler2D shadow_pass;
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
}`,jx=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],Qx=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],Td=new bt,jr=new F,Yc=new F;function e_(n,e,t){let i=new Ws,s=new Be,r=new Be,a=new Tt,o=new Qa,l=new eo,c={},h=t.maxTextureSize,d={[Oi]:on,[on]:Oi,[_n]:_n},u=new gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Be},radius:{value:4}},vertexShader:Jx,fragmentShader:Kx}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let g=new Nt;g.setAttribute("position",new mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Le(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ss;let f=this.type;this.render=function(E,I,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===yu&&(Ne("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ss);let T=n.getRenderTarget(),C=n.getActiveCubeFace(),U=n.getActiveMipmapLevel(),O=n.state;O.setBlending(ei),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let H=f!==this.type;H&&I.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(G=>G.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,G=E.length;L<G;L++){let Z=E[L],J=Z.shadow;if(J===void 0){Ne("WebGLShadowMap:",Z,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;s.copy(J.mapSize);let re=J.getFrameExtents();s.multiply(re),r.copy(J.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/re.x),s.x=r.x*re.x,J.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/re.y),s.y=r.y*re.y,J.mapSize.y=r.y));let q=n.state.buffers.depth.getReversed();if(J.camera._reversedDepth=q,J.map===null||H===!0){if(J.map!==null&&(J.map.depthTexture!==null&&(J.map.depthTexture.dispose(),J.map.depthTexture=null),J.map.dispose()),this.type===Js){if(Z.isPointLight){Ne("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}J.map=new un(s.x,s.y,{format:Hi,type:Fn,minFilter:$t,magFilter:$t,generateMipmaps:!1}),J.map.texture.name=Z.name+".shadowMap",J.map.depthTexture=new Di(s.x,s.y,Un),J.map.depthTexture.name=Z.name+".shadowMapDepth",J.map.depthTexture.format=qn,J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=Ht,J.map.depthTexture.magFilter=Ht}else Z.isPointLight?(J.map=new al(s.x),J.map.depthTexture=new Ka(s.x,Nn)):(J.map=new un(s.x,s.y),J.map.depthTexture=new Di(s.x,s.y,Nn)),J.map.depthTexture.name=Z.name+".shadowMap",J.map.depthTexture.format=qn,this.type===ss?(J.map.depthTexture.compareFunction=q?nl:tl,J.map.depthTexture.minFilter=$t,J.map.depthTexture.magFilter=$t):(J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=Ht,J.map.depthTexture.magFilter=Ht);J.camera.updateProjectionMatrix()}J.map.isWebGLCubeRenderTarget!==!0&&(J.map.width!==s.x||J.map.height!==s.y)&&J.map.setSize(s.x,s.y);let te=J.map.isWebGLCubeRenderTarget?6:J.getViewportCount();Z.isPointLight!==!0&&J.updateMatrices(Z,y);for(let ie=0;ie<te;ie++){let Pe=J.getCamera(ie);if(Z.isPointLight){let Ce=J.camera,pt=J.matrix,je=Z.distance||Ce.far;je!==Ce.far&&(Ce.far=je,Ce.updateProjectionMatrix()),jr.setFromMatrixPosition(Z.matrixWorld),Ce.position.copy(jr),Yc.copy(Ce.position),Yc.add(jx[ie]),Ce.up.copy(Qx[ie]),Ce.lookAt(Yc),Ce.updateMatrixWorld(),pt.makeTranslation(-jr.x,-jr.y,-jr.z),Td.multiplyMatrices(Ce.projectionMatrix,Ce.matrixWorldInverse),J._frustum.setFromProjectionMatrix(Td,Ce.coordinateSystem,Ce.reversedDepth)}if(J.map.isWebGLCubeRenderTarget)n.setRenderTarget(J.map,ie),n.clear();else{ie===0&&(n.setRenderTarget(J.map),n.clear());let Ce=J.getViewport(ie);a.set(r.x*Ce.x,r.y*Ce.y,r.x*Ce.z,r.y*Ce.w),O.viewport(a)}i=J.getFrustum(ie),M(I,y,Pe,Z,this.type)}J.isPointLightShadow!==!0&&this.type===Js&&S(J,y),J.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(T,C,U)};function S(E,I){let y=e.update(_);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null?E.mapPass=new un(s.x,s.y,{format:Hi,type:Fn}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(I,null,y,u,_,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value.set(E.map.width,E.map.height),p.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(I,null,y,p,_,null)}function R(E,I,y,T){let C=null,U=y.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(U!==void 0)C=U;else if(C=y.isPointLight===!0?l:o,n.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){let O=C.uuid,H=I.uuid,L=c[O];L===void 0&&(L={},c[O]=L);let G=L[H];G===void 0&&(G=C.clone(),L[H]=G,I.addEventListener("dispose",b)),C=G}if(C.visible=I.visible,C.wireframe=I.wireframe,T===Js?C.side=I.shadowSide!==null?I.shadowSide:I.side:C.side=I.shadowSide!==null?I.shadowSide:d[I.side],C.alphaMap=I.alphaMap,C.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,C.map=I.map,C.clipShadows=I.clipShadows,C.clippingPlanes=I.clippingPlanes,C.clipIntersection=I.clipIntersection,C.displacementMap=I.displacementMap,C.displacementScale=I.displacementScale,C.displacementBias=I.displacementBias,C.wireframeLinewidth=I.wireframeLinewidth,C.linewidth=I.linewidth,y.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let O=n.properties.get(C);O.light=y}return C}function M(E,I,y,T,C){if(E.visible===!1)return;if(E.layers.test(I.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&C===Js)&&(!E.frustumCulled||E.intersectsFrustum(i))){E.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,E.matrixWorld);let H=e.update(E),L=E.material;if(Array.isArray(L)){let G=H.groups;for(let Z=0,J=G.length;Z<J;Z++){let re=G[Z],q=L[re.materialIndex];if(q&&q.visible){let te=R(E,q,T,C);E.onBeforeShadow(n,E,I,y,H,te,re),n.renderBufferDirect(y,null,H,te,E,re),E.onAfterShadow(n,E,I,y,H,te,re)}}}else if(L.visible){let G=R(E,L,T,C);E.onBeforeShadow(n,E,I,y,H,G,null),n.renderBufferDirect(y,null,H,G,E,null),E.onAfterShadow(n,E,I,y,H,G,null)}}let O=E.children;for(let H=0,L=O.length;H<L;H++)M(O[H],I,y,T,C)}function b(E){E.target.removeEventListener("dispose",b);for(let y in c){let T=c[y],C=E.target.uuid;C in T&&(T[C].dispose(),delete T[C])}}}function t_(n,e){function t(){let D=!1,he=new Tt,j=null,ue=new Tt(0,0,0,0);return{setMask:function(ge){j!==ge&&!D&&(n.colorMask(ge,ge,ge,ge),j=ge)},setLocked:function(ge){D=ge},setClear:function(ge,ne,Ie,Te,gt){gt===!0&&(ge*=Te,ne*=Te,Ie*=Te),he.set(ge,ne,Ie,Te),ue.equals(he)===!1&&(n.clearColor(ge,ne,Ie,Te),ue.copy(he))},reset:function(){D=!1,j=null,ue.set(-1,0,0,0)}}}function i(){let D=!1,he=!1,j=null,ue=null,ge=null;return{setReversed:function(ne){if(he!==ne){let Ie=e.get("EXT_clip_control");ne?Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.ZERO_TO_ONE_EXT):Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.NEGATIVE_ONE_TO_ONE_EXT),he=ne;let Te=ge;ge=null,this.setClear(Te)}},getReversed:function(){return he},setTest:function(ne){ne?ee(n.DEPTH_TEST):Me(n.DEPTH_TEST)},setMask:function(ne){j!==ne&&!D&&(n.depthMask(ne),j=ne)},setFunc:function(ne){if(he&&(ne=Qu[ne]),ue!==ne){switch(ne){case Na:n.depthFunc(n.NEVER);break;case Ua:n.depthFunc(n.ALWAYS);break;case Fa:n.depthFunc(n.LESS);break;case Bs:n.depthFunc(n.LEQUAL);break;case Oa:n.depthFunc(n.EQUAL);break;case Ba:n.depthFunc(n.GEQUAL);break;case za:n.depthFunc(n.GREATER);break;case ka:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ue=ne}},setLocked:function(ne){D=ne},setClear:function(ne){ge!==ne&&(ge=ne,he&&(ne=1-ne),n.clearDepth(ne))},reset:function(){D=!1,j=null,ue=null,ge=null,he=!1}}}function s(){let D=!1,he=null,j=null,ue=null,ge=null,ne=null,Ie=null,Te=null,gt=null;return{setTest:function(at){D||(at?ee(n.STENCIL_TEST):Me(n.STENCIL_TEST))},setMask:function(at){he!==at&&!D&&(n.stencilMask(at),he=at)},setFunc:function(at,An,Hn){(j!==at||ue!==An||ge!==Hn)&&(n.stencilFunc(at,An,Hn),j=at,ue=An,ge=Hn)},setOp:function(at,An,Hn){(ne!==at||Ie!==An||Te!==Hn)&&(n.stencilOp(at,An,Hn),ne=at,Ie=An,Te=Hn)},setLocked:function(at){D=at},setClear:function(at){gt!==at&&(n.clearStencil(at),gt=at)},reset:function(){D=!1,he=null,j=null,ue=null,ge=null,ne=null,Ie=null,Te=null,gt=null}}}let r=new t,a=new i,o=new s,l=new WeakMap,c=new WeakMap,h={},d={},u={},p=new WeakMap,g=[],_=null,m=!1,f=null,S=null,R=null,M=null,b=null,E=null,I=null,y=new Ve(0,0,0),T=0,C=!1,U=null,O=null,H=null,L=null,G=null,Z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),J=!1,re=0,q=n.getParameter(n.VERSION);q.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(q)[1]),J=re>=1):q.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),J=re>=2);let te=null,ie={},Pe=n.getParameter(n.SCISSOR_BOX),Ce=n.getParameter(n.VIEWPORT),pt=new Tt().fromArray(Pe),je=new Tt().fromArray(Ce);function st(D,he,j,ue){let ge=new Uint8Array(4),ne=n.createTexture();n.bindTexture(D,ne),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ie=0;Ie<j;Ie++)D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY?n.texImage3D(he,0,n.RGBA,1,1,ue,0,n.RGBA,n.UNSIGNED_BYTE,ge):n.texImage2D(he+Ie,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ge);return ne}let Y={};Y[n.TEXTURE_2D]=st(n.TEXTURE_2D,n.TEXTURE_2D,1),Y[n.TEXTURE_CUBE_MAP]=st(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[n.TEXTURE_2D_ARRAY]=st(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Y[n.TEXTURE_3D]=st(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ee(n.DEPTH_TEST),a.setFunc(Bs),Ze(!1),Et(mc),ee(n.CULL_FACE),it(ei);function ee(D){h[D]!==!0&&(n.enable(D),h[D]=!0)}function Me(D){h[D]!==!1&&(n.disable(D),h[D]=!1)}function Oe(D,he){return u[D]!==he?(n.bindFramebuffer(D,he),u[D]=he,D===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=he),D===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=he),!0):!1}function ye(D,he){let j=g,ue=!1;if(D){j=p.get(he),j===void 0&&(j=[],p.set(he,j));let ge=D.textures;if(j.length!==ge.length||j[0]!==n.COLOR_ATTACHMENT0){for(let ne=0,Ie=ge.length;ne<Ie;ne++)j[ne]=n.COLOR_ATTACHMENT0+ne;j.length=ge.length,ue=!0}}else j[0]!==n.BACK&&(j[0]=n.BACK,ue=!0);ue&&n.drawBuffers(j)}function Xe(D){return _!==D?(n.useProgram(D),_=D,!0):!1}let Ft={[rs]:n.FUNC_ADD,[Mu]:n.FUNC_SUBTRACT,[Su]:n.FUNC_REVERSE_SUBTRACT};Ft[bu]=n.MIN,Ft[Eu]=n.MAX;let Ye={[Tu]:n.ZERO,[wu]:n.ONE,[Au]:n.SRC_COLOR,[_c]:n.SRC_ALPHA,[Du]:n.SRC_ALPHA_SATURATE,[Pu]:n.DST_COLOR,[Cu]:n.DST_ALPHA,[Ru]:n.ONE_MINUS_SRC_COLOR,[yc]:n.ONE_MINUS_SRC_ALPHA,[Lu]:n.ONE_MINUS_DST_COLOR,[Iu]:n.ONE_MINUS_DST_ALPHA,[Nu]:n.CONSTANT_COLOR,[Uu]:n.ONE_MINUS_CONSTANT_COLOR,[Fu]:n.CONSTANT_ALPHA,[Ou]:n.ONE_MINUS_CONSTANT_ALPHA};function it(D,he,j,ue,ge,ne,Ie,Te,gt,at){if(D===ei){m===!0&&(Me(n.BLEND),m=!1);return}if(m===!1&&(ee(n.BLEND),m=!0),D!==vu){if(D!==f||at!==C){if((S!==rs||b!==rs)&&(n.blendEquation(n.FUNC_ADD),S=rs,b=rs),at)switch(D){case Ks:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case js:n.blendFunc(n.ONE,n.ONE);break;case gc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case xc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Ue("WebGLState: Invalid blending: ",D);break}else switch(D){case Ks:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case js:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case gc:Ue("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case xc:Ue("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ue("WebGLState: Invalid blending: ",D);break}R=null,M=null,E=null,I=null,y.set(0,0,0),T=0,f=D,C=at}return}ge=ge||he,ne=ne||j,Ie=Ie||ue,(he!==S||ge!==b)&&(n.blendEquationSeparate(Ft[he],Ft[ge]),S=he,b=ge),(j!==R||ue!==M||ne!==E||Ie!==I)&&(n.blendFuncSeparate(Ye[j],Ye[ue],Ye[ne],Ye[Ie]),R=j,M=ue,E=ne,I=Ie),(Te.equals(y)===!1||gt!==T)&&(n.blendColor(Te.r,Te.g,Te.b,gt),y.copy(Te),T=gt),f=D,C=!1}function mt(D,he){D.side===_n?Me(n.CULL_FACE):ee(n.CULL_FACE);let j=D.side===on;he&&(j=!j),Ze(j),D.blending===Ks&&D.transparent===!1?it(ei):it(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);let ue=D.stencilWrite;o.setTest(ue),ue&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),hn(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ee(n.SAMPLE_ALPHA_TO_COVERAGE):Me(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ze(D){U!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),U=D)}function Et(D){D!==xu?(ee(n.CULL_FACE),D!==O&&(D===mc?n.cullFace(n.BACK):D===_u?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Me(n.CULL_FACE),O=D}function zt(D){D!==H&&(J&&n.lineWidth(D),H=D)}function hn(D,he,j){D?(ee(n.POLYGON_OFFSET_FILL),(L!==he||G!==j)&&(L=he,G=j,a.getReversed()&&(he=-he),n.polygonOffset(he,j))):Me(n.POLYGON_OFFSET_FILL)}function wt(D){D?ee(n.SCISSOR_TEST):Me(n.SCISSOR_TEST)}function It(D){D===void 0&&(D=n.TEXTURE0+Z-1),te!==D&&(n.activeTexture(D),te=D)}function N(D,he,j){j===void 0&&(te===null?j=n.TEXTURE0+Z-1:j=te);let ue=ie[j];ue===void 0&&(ue={type:void 0,texture:void 0},ie[j]=ue),(ue.type!==D||ue.texture!==he)&&(te!==j&&(n.activeTexture(j),te=j),n.bindTexture(D,he||Y[D]),ue.type=D,ue.texture=he)}function Jt(){let D=ie[te];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function ht(){try{n.compressedTexImage2D(...arguments)}catch(D){Ue("WebGLState:",D)}}function w(){try{n.compressedTexImage3D(...arguments)}catch(D){Ue("WebGLState:",D)}}function x(){try{n.texSubImage2D(...arguments)}catch(D){Ue("WebGLState:",D)}}function B(){try{n.texSubImage3D(...arguments)}catch(D){Ue("WebGLState:",D)}}function V(){try{n.compressedTexSubImage2D(...arguments)}catch(D){Ue("WebGLState:",D)}}function X(){try{n.compressedTexSubImage3D(...arguments)}catch(D){Ue("WebGLState:",D)}}function ae(){try{n.texStorage2D(...arguments)}catch(D){Ue("WebGLState:",D)}}function oe(){try{n.texStorage3D(...arguments)}catch(D){Ue("WebGLState:",D)}}function $(){try{n.texImage2D(...arguments)}catch(D){Ue("WebGLState:",D)}}function Q(){try{n.texImage3D(...arguments)}catch(D){Ue("WebGLState:",D)}}function le(D){return d[D]!==void 0?d[D]:n.getParameter(D)}function Ae(D,he){d[D]!==he&&(n.pixelStorei(D,he),d[D]=he)}function de(D){pt.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),pt.copy(D))}function ce(D){je.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),je.copy(D))}function Re(D,he){let j=c.get(he);j===void 0&&(j=new WeakMap,c.set(he,j));let ue=j.get(D);ue===void 0&&(ue=n.getUniformBlockIndex(he,D.name),j.set(D,ue))}function De(D,he){let ue=c.get(he).get(D);l.get(he)!==ue&&(n.uniformBlockBinding(he,ue,D.__bindingPointIndex),l.set(he,ue))}function ze(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},d={},te=null,ie={},u={},p=new WeakMap,g=[],_=null,m=!1,f=null,S=null,R=null,M=null,b=null,E=null,I=null,y=new Ve(0,0,0),T=0,C=!1,U=null,O=null,H=null,L=null,G=null,pt.set(0,0,n.canvas.width,n.canvas.height),je.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ee,disable:Me,bindFramebuffer:Oe,drawBuffers:ye,useProgram:Xe,setBlending:it,setMaterial:mt,setFlipSided:Ze,setCullFace:Et,setLineWidth:zt,setPolygonOffset:hn,setScissorTest:wt,activeTexture:It,bindTexture:N,unbindTexture:Jt,compressedTexImage2D:ht,compressedTexImage3D:w,texImage2D:$,texImage3D:Q,pixelStorei:Ae,getParameter:le,updateUBOMapping:Re,uniformBlockBinding:De,texStorage2D:ae,texStorage3D:oe,texSubImage2D:x,texSubImage3D:B,compressedTexSubImage2D:V,compressedTexSubImage3D:X,scissor:de,viewport:ce,reset:ze}}function n_(n,e,t,i,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Be,h=new WeakMap,d=new Set,u,p=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(w,x){return g?new OffscreenCanvas(w,x):Er("canvas")}function m(w,x,B){let V=1,X=ht(w);if((X.width>B||X.height>B)&&(V=B/Math.max(X.width,X.height)),V<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let ae=Math.floor(V*X.width),oe=Math.floor(V*X.height);u===void 0&&(u=_(ae,oe));let $=x?_(ae,oe):u;return $.width=ae,$.height=oe,$.getContext("2d").drawImage(w,0,0,ae,oe),Ne("WebGLRenderer: Texture has been resized from ("+X.width+"x"+X.height+") to ("+ae+"x"+oe+")."),$}else return"data"in w&&Ne("WebGLRenderer: Image in DataTexture is too big ("+X.width+"x"+X.height+")."),w;return w}function f(w){return w.generateMipmaps}function S(w){n.generateMipmap(w)}function R(w){return w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?n.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(w,x,B,V,X,ae=!1){if(w!==null){if(n[w]!==void 0)return n[w];Ne("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let oe;V&&(oe=e.get("EXT_texture_norm16"),oe||Ne("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=x;if(x===n.RED&&(B===n.FLOAT&&($=n.R32F),B===n.HALF_FLOAT&&($=n.R16F),B===n.UNSIGNED_BYTE&&($=n.R8),B===n.UNSIGNED_SHORT&&oe&&($=oe.R16_EXT),B===n.SHORT&&oe&&($=oe.R16_SNORM_EXT)),x===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&($=n.R8UI),B===n.UNSIGNED_SHORT&&($=n.R16UI),B===n.UNSIGNED_INT&&($=n.R32UI),B===n.BYTE&&($=n.R8I),B===n.SHORT&&($=n.R16I),B===n.INT&&($=n.R32I)),x===n.RG&&(B===n.FLOAT&&($=n.RG32F),B===n.HALF_FLOAT&&($=n.RG16F),B===n.UNSIGNED_BYTE&&($=n.RG8),B===n.UNSIGNED_SHORT&&oe&&($=oe.RG16_EXT),B===n.SHORT&&oe&&($=oe.RG16_SNORM_EXT)),x===n.RG_INTEGER&&(B===n.UNSIGNED_BYTE&&($=n.RG8UI),B===n.UNSIGNED_SHORT&&($=n.RG16UI),B===n.UNSIGNED_INT&&($=n.RG32UI),B===n.BYTE&&($=n.RG8I),B===n.SHORT&&($=n.RG16I),B===n.INT&&($=n.RG32I)),x===n.RGB_INTEGER&&(B===n.UNSIGNED_BYTE&&($=n.RGB8UI),B===n.UNSIGNED_SHORT&&($=n.RGB16UI),B===n.UNSIGNED_INT&&($=n.RGB32UI),B===n.BYTE&&($=n.RGB8I),B===n.SHORT&&($=n.RGB16I),B===n.INT&&($=n.RGB32I)),x===n.RGBA_INTEGER&&(B===n.UNSIGNED_BYTE&&($=n.RGBA8UI),B===n.UNSIGNED_SHORT&&($=n.RGBA16UI),B===n.UNSIGNED_INT&&($=n.RGBA32UI),B===n.BYTE&&($=n.RGBA8I),B===n.SHORT&&($=n.RGBA16I),B===n.INT&&($=n.RGBA32I)),x===n.RGB&&(B===n.UNSIGNED_SHORT&&oe&&($=oe.RGB16_EXT),B===n.SHORT&&oe&&($=oe.RGB16_SNORM_EXT),B===n.UNSIGNED_INT_5_9_9_9_REV&&($=n.RGB9_E5),B===n.UNSIGNED_INT_10F_11F_11F_REV&&($=n.R11F_G11F_B10F)),x===n.RGBA){let Q=ae?br:Je.getTransfer(X);B===n.FLOAT&&($=n.RGBA32F),B===n.HALF_FLOAT&&($=n.RGBA16F),B===n.UNSIGNED_BYTE&&($=Q===lt?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT&&oe&&($=oe.RGBA16_EXT),B===n.SHORT&&oe&&($=oe.RGBA16_SNORM_EXT),B===n.UNSIGNED_SHORT_4_4_4_4&&($=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&($=n.RGB5_A1)}return($===n.R16F||$===n.R32F||$===n.RG16F||$===n.RG32F||$===n.RGBA16F||$===n.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function b(w,x){let B;return w?x===null||x===Nn||x===er?B=n.DEPTH24_STENCIL8:x===Un?B=n.DEPTH32F_STENCIL8:x===Qs&&(B=n.DEPTH24_STENCIL8,Ne("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Nn||x===er?B=n.DEPTH_COMPONENT24:x===Un?B=n.DEPTH_COMPONENT32F:x===Qs&&(B=n.DEPTH_COMPONENT16),B}function E(w,x){return f(w)===!0||w.isFramebufferTexture&&w.minFilter!==Ht&&w.minFilter!==$t?Math.log2(Math.max(x.width,x.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?x.mipmaps.length:1}function I(w){let x=w.target;x.removeEventListener("dispose",I),T(x),x.isVideoTexture&&h.delete(x),x.isHTMLTexture&&d.delete(x)}function y(w){let x=w.target;x.removeEventListener("dispose",y),U(x)}function T(w){let x=i.get(w);if(x.__webglInit===void 0)return;let B=w.source,V=p.get(B);if(V){let X=V[x.__cacheKey];X.usedTimes--,X.usedTimes===0&&C(w),Object.keys(V).length===0&&p.delete(B)}i.remove(w)}function C(w){let x=i.get(w);n.deleteTexture(x.__webglTexture);let B=w.source,V=p.get(B);delete V[x.__cacheKey],a.memory.textures--}function U(w){let x=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(x.__webglFramebuffer[V]))for(let X=0;X<x.__webglFramebuffer[V].length;X++)n.deleteFramebuffer(x.__webglFramebuffer[V][X]);else n.deleteFramebuffer(x.__webglFramebuffer[V]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[V])}else{if(Array.isArray(x.__webglFramebuffer))for(let V=0;V<x.__webglFramebuffer.length;V++)n.deleteFramebuffer(x.__webglFramebuffer[V]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let V=0;V<x.__webglColorRenderbuffer.length;V++)x.__webglColorRenderbuffer[V]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[V]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let B=w.textures;for(let V=0,X=B.length;V<X;V++){let ae=i.get(B[V]);ae.__webglTexture&&(n.deleteTexture(ae.__webglTexture),a.memory.textures--),i.remove(B[V])}i.remove(w)}let O=0;function H(){O=0}function L(){return O}function G(w){O=w}function Z(){let w=O;return w>=s.maxTextures&&Ne("WebGLTextures: Trying to use "+(w+1)+" texture units while this GPU supports only "+s.maxTextures),O+=1,w}function J(w){let x=[];return x.push(w.wrapS),x.push(w.wrapT),x.push(w.wrapR||0),x.push(w.magFilter),x.push(w.minFilter),x.push(w.anisotropy),x.push(w.internalFormat),x.push(w.format),x.push(w.type),x.push(w.generateMipmaps),x.push(w.premultiplyAlpha),x.push(w.flipY),x.push(w.unpackAlignment),x.push(w.colorSpace),x.join()}function re(w,x){let B=i.get(w);if(w.isVideoTexture&&N(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&B.__version!==w.version){let V=w.image;if(V===null)Ne("WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)Ne("WebGLRenderer: Texture marked for update but image is incomplete");else{Me(B,w,x);return}}else w.isExternalTexture&&(B.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+x)}function q(w,x){let B=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&B.__version!==w.version){Me(B,w,x);return}else w.isExternalTexture&&(B.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+x)}function te(w,x){let B=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&B.__version!==w.version){Me(B,w,x);return}t.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+x)}function ie(w,x){let B=i.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&B.__version!==w.version){Oe(B,w,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+x)}let Pe={[zs]:n.REPEAT,[Xn]:n.CLAMP_TO_EDGE,[Ha]:n.MIRRORED_REPEAT},Ce={[Ht]:n.NEAREST,[ku]:n.NEAREST_MIPMAP_NEAREST,[Wr]:n.NEAREST_MIPMAP_LINEAR,[$t]:n.LINEAR,[xo]:n.LINEAR_MIPMAP_NEAREST,[zi]:n.LINEAR_MIPMAP_LINEAR},pt={[Wu]:n.NEVER,[Zu]:n.ALWAYS,[Xu]:n.LESS,[tl]:n.LEQUAL,[qu]:n.EQUAL,[nl]:n.GEQUAL,[Yu]:n.GREATER,[$u]:n.NOTEQUAL};function je(w,x){if(x.type===Un&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===$t||x.magFilter===xo||x.magFilter===Wr||x.magFilter===zi||x.minFilter===$t||x.minFilter===xo||x.minFilter===Wr||x.minFilter===zi)&&Ne("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(w,n.TEXTURE_WRAP_S,Pe[x.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,Pe[x.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,Pe[x.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,Ce[x.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,Ce[x.minFilter]),x.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,pt[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Ht||x.minFilter!==Wr&&x.minFilter!==zi||x.type===Un&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){let B=e.get("EXT_texture_filter_anisotropic");n.texParameterf(w,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function st(w,x){let B=!1;w.__webglInit===void 0&&(w.__webglInit=!0,x.addEventListener("dispose",I));let V=x.source,X=p.get(V);X===void 0&&(X={},p.set(V,X));let ae=J(x);if(ae!==w.__cacheKey){X[ae]===void 0&&(X[ae]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,B=!0),X[ae].usedTimes++;let oe=X[w.__cacheKey];oe!==void 0&&(X[w.__cacheKey].usedTimes--,oe.usedTimes===0&&C(x)),w.__cacheKey=ae,w.__webglTexture=X[ae].texture}return B}function Y(w,x,B){return Math.floor(Math.floor(w/B)/x)}function ee(w,x,B,V){let ae=w.updateRanges;if(ae.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,B,V,x.data);else{ae.sort((Ae,de)=>Ae.start-de.start);let oe=0;for(let Ae=1;Ae<ae.length;Ae++){let de=ae[oe],ce=ae[Ae],Re=de.start+de.count,De=Y(ce.start,x.width,4),ze=Y(de.start,x.width,4);ce.start<=Re+1&&De===ze&&Y(ce.start+ce.count-1,x.width,4)===De?de.count=Math.max(de.count,ce.start+ce.count-de.start):(++oe,ae[oe]=ce)}ae.length=oe+1;let $=t.getParameter(n.UNPACK_ROW_LENGTH),Q=t.getParameter(n.UNPACK_SKIP_PIXELS),le=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let Ae=0,de=ae.length;Ae<de;Ae++){let ce=ae[Ae],Re=Math.floor(ce.start/4),De=Math.ceil(ce.count/4),ze=Re%x.width,D=Math.floor(Re/x.width),he=De,j=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,ze),t.pixelStorei(n.UNPACK_SKIP_ROWS,D),t.texSubImage2D(n.TEXTURE_2D,0,ze,D,he,j,B,V,x.data)}w.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,$),t.pixelStorei(n.UNPACK_SKIP_PIXELS,Q),t.pixelStorei(n.UNPACK_SKIP_ROWS,le)}}function Me(w,x,B){let V=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(V=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(V=n.TEXTURE_3D);let X=st(w,x),ae=x.source;t.bindTexture(V,w.__webglTexture,n.TEXTURE0+B);let oe=i.get(ae);if(ae.version!==oe.__version||X===!0){if(t.activeTexture(n.TEXTURE0+B),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let j=Je.getPrimaries(Je.workingColorSpace),ue=x.colorSpace===_i?null:Je.getPrimaries(x.colorSpace),ge=x.colorSpace===_i||j===ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge)}t.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment);let Q=m(x.image,!1,s.maxTextureSize);Q=Jt(x,Q);let le=r.convert(x.format,x.colorSpace),Ae=r.convert(x.type),de=M(x.internalFormat,le,Ae,x.normalized,x.colorSpace,x.isVideoTexture);je(V,x);let ce,Re=x.mipmaps,De=x.isVideoTexture!==!0,ze=oe.__version===void 0||X===!0,D=ae.dataReady,he=E(x,Q);if(x.isDepthTexture)de=b(x.format===ki,x.type),ze&&(De?t.texStorage2D(n.TEXTURE_2D,1,de,Q.width,Q.height):t.texImage2D(n.TEXTURE_2D,0,de,Q.width,Q.height,0,le,Ae,null));else if(x.isDataTexture)if(Re.length>0){De&&ze&&t.texStorage2D(n.TEXTURE_2D,he,de,Re[0].width,Re[0].height);for(let j=0,ue=Re.length;j<ue;j++)ce=Re[j],De?D&&t.texSubImage2D(n.TEXTURE_2D,j,0,0,ce.width,ce.height,le,Ae,ce.data):t.texImage2D(n.TEXTURE_2D,j,de,ce.width,ce.height,0,le,Ae,ce.data);x.generateMipmaps=!1}else De?(ze&&t.texStorage2D(n.TEXTURE_2D,he,de,Q.width,Q.height),D&&ee(x,Q,le,Ae)):t.texImage2D(n.TEXTURE_2D,0,de,Q.width,Q.height,0,le,Ae,Q.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){De&&ze&&t.texStorage3D(n.TEXTURE_2D_ARRAY,he,de,Re[0].width,Re[0].height,Q.depth);for(let j=0,ue=Re.length;j<ue;j++)if(ce=Re[j],x.format!==bn)if(le!==null)if(De){if(D)if(x.layerUpdates.size>0){let ge=Hc(ce.width,ce.height,x.format,x.type);for(let ne of x.layerUpdates){let Ie=ce.data.subarray(ne*ge/ce.data.BYTES_PER_ELEMENT,(ne+1)*ge/ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,ne,ce.width,ce.height,1,le,Ie)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,ce.width,ce.height,Q.depth,le,ce.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,j,de,ce.width,ce.height,Q.depth,0,ce.data,0,0);else Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else De?D&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,ce.width,ce.height,Q.depth,le,Ae,ce.data):t.texImage3D(n.TEXTURE_2D_ARRAY,j,de,ce.width,ce.height,Q.depth,0,le,Ae,ce.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{De&&ze&&t.texStorage2D(n.TEXTURE_2D,he,de,Re[0].width,Re[0].height);for(let j=0,ue=Re.length;j<ue;j++)ce=Re[j],x.format!==bn?le!==null?De?D&&t.compressedTexSubImage2D(n.TEXTURE_2D,j,0,0,ce.width,ce.height,le,ce.data):t.compressedTexImage2D(n.TEXTURE_2D,j,de,ce.width,ce.height,0,ce.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?D&&t.texSubImage2D(n.TEXTURE_2D,j,0,0,ce.width,ce.height,le,Ae,ce.data):t.texImage2D(n.TEXTURE_2D,j,de,ce.width,ce.height,0,le,Ae,ce.data)}else if(x.isDataArrayTexture)if(De){if(ze&&t.texStorage3D(n.TEXTURE_2D_ARRAY,he,de,Q.width,Q.height,Q.depth),D)if(x.layerUpdates.size>0){let j=Hc(Q.width,Q.height,x.format,x.type);for(let ue of x.layerUpdates){let ge=Q.data.subarray(ue*j/Q.data.BYTES_PER_ELEMENT,(ue+1)*j/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ue,Q.width,Q.height,1,le,Ae,ge)}x.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,le,Ae,Q.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,de,Q.width,Q.height,Q.depth,0,le,Ae,Q.data);else if(x.isData3DTexture)De?(ze&&t.texStorage3D(n.TEXTURE_3D,he,de,Q.width,Q.height,Q.depth),D&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,le,Ae,Q.data)):t.texImage3D(n.TEXTURE_3D,0,de,Q.width,Q.height,Q.depth,0,le,Ae,Q.data);else if(x.isFramebufferTexture){if(ze)if(De)t.texStorage2D(n.TEXTURE_2D,he,de,Q.width,Q.height);else{let j=Q.width,ue=Q.height;for(let ge=0;ge<he;ge++)t.texImage2D(n.TEXTURE_2D,ge,de,j,ue,0,le,Ae,null),j>>=1,ue>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in n){let j=n.canvas;if(j.hasAttribute("layoutsubtree")||j.setAttribute("layoutsubtree","true"),Q.parentNode!==j){j.appendChild(Q),d.add(x),j.onpaint=ue=>{let ge=ue.changedElements;for(let ne of d)ge.includes(ne.image)&&(ne.needsUpdate=!0)},j.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,Q);else{let ge=n.RGBA,ne=n.RGBA,Ie=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,ge,ne,Ie,Q)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Re.length>0){if(De&&ze){let j=ht(Re[0]);t.texStorage2D(n.TEXTURE_2D,he,de,j.width,j.height)}for(let j=0,ue=Re.length;j<ue;j++)ce=Re[j],De?D&&t.texSubImage2D(n.TEXTURE_2D,j,0,0,le,Ae,ce):t.texImage2D(n.TEXTURE_2D,j,de,le,Ae,ce);x.generateMipmaps=!1}else if(De){if(ze){let j=ht(Q);t.texStorage2D(n.TEXTURE_2D,he,de,j.width,j.height)}D&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,le,Ae,Q)}else t.texImage2D(n.TEXTURE_2D,0,de,le,Ae,Q);f(x)&&S(V),oe.__version=ae.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function Oe(w,x,B){if(x.image.length!==6)return;let V=st(w,x),X=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+B);let ae=i.get(X);if(X.version!==ae.__version||V===!0){t.activeTexture(n.TEXTURE0+B);let oe=Je.getPrimaries(Je.workingColorSpace),$=x.colorSpace===_i?null:Je.getPrimaries(x.colorSpace),Q=x.colorSpace===_i||oe===$?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);let le=x.isCompressedTexture||x.image[0].isCompressedTexture,Ae=x.image[0]&&x.image[0].isDataTexture,de=[];for(let ne=0;ne<6;ne++)!le&&!Ae?de[ne]=m(x.image[ne],!0,s.maxCubemapSize):de[ne]=Ae?x.image[ne].image:x.image[ne],de[ne]=Jt(x,de[ne]);let ce=de[0],Re=r.convert(x.format,x.colorSpace),De=r.convert(x.type),ze=M(x.internalFormat,Re,De,x.normalized,x.colorSpace),D=x.isVideoTexture!==!0,he=ae.__version===void 0||V===!0,j=X.dataReady,ue=E(x,ce);je(n.TEXTURE_CUBE_MAP,x);let ge;if(le){D&&he&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ue,ze,ce.width,ce.height);for(let ne=0;ne<6;ne++){ge=de[ne].mipmaps;for(let Ie=0;Ie<ge.length;Ie++){let Te=ge[Ie];x.format!==bn?Re!==null?D?j&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ie,0,0,Te.width,Te.height,Re,Te.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ie,ze,Te.width,Te.height,0,Te.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?j&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ie,0,0,Te.width,Te.height,Re,De,Te.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ie,ze,Te.width,Te.height,0,Re,De,Te.data)}}}else{if(ge=x.mipmaps,D&&he){ge.length>0&&ue++;let ne=ht(de[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ue,ze,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(Ae){D?j&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,de[ne].width,de[ne].height,Re,De,de[ne].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,ze,de[ne].width,de[ne].height,0,Re,De,de[ne].data);for(let Ie=0;Ie<ge.length;Ie++){let gt=ge[Ie].image[ne].image;D?j&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ie+1,0,0,gt.width,gt.height,Re,De,gt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ie+1,ze,gt.width,gt.height,0,Re,De,gt.data)}}else{D?j&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Re,De,de[ne]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,ze,Re,De,de[ne]);for(let Ie=0;Ie<ge.length;Ie++){let Te=ge[Ie];D?j&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ie+1,0,0,Re,De,Te.image[ne]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ie+1,ze,Re,De,Te.image[ne])}}}f(x)&&S(n.TEXTURE_CUBE_MAP),ae.__version=X.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function ye(w,x,B,V,X,ae){let oe=r.convert(B.format,B.colorSpace),$=r.convert(B.type),Q=M(B.internalFormat,oe,$,B.normalized,B.colorSpace),le=i.get(x),Ae=i.get(B);if(Ae.__renderTarget=x,!le.__hasExternalTextures){let de=Math.max(1,x.width>>ae),ce=Math.max(1,x.height>>ae);X===n.TEXTURE_3D||X===n.TEXTURE_2D_ARRAY?t.texImage3D(X,ae,Q,de,ce,x.depth,0,oe,$,null):t.texImage2D(X,ae,Q,de,ce,0,oe,$,null)}t.bindFramebuffer(n.FRAMEBUFFER,w),It(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,V,X,Ae.__webglTexture,0,wt(x)):(X===n.TEXTURE_2D||X>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&X<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,V,X,Ae.__webglTexture,ae),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Xe(w,x,B){if(n.bindRenderbuffer(n.RENDERBUFFER,w),x.depthBuffer){let V=x.depthTexture,X=V&&V.isDepthTexture?V.type:null,ae=b(x.stencilBuffer,X),oe=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;It(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,wt(x),ae,x.width,x.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,wt(x),ae,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,ae,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,oe,n.RENDERBUFFER,w)}else{let V=x.textures;for(let X=0;X<V.length;X++){let ae=V[X],oe=r.convert(ae.format,ae.colorSpace),$=r.convert(ae.type),Q=M(ae.internalFormat,oe,$,ae.normalized,ae.colorSpace);It(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,wt(x),Q,x.width,x.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,wt(x),Q,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,Q,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ft(w,x,B){let V=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,w),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let X=i.get(x.depthTexture);if(X.__renderTarget=x,(!X.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),V){if(X.__webglInit===void 0&&(X.__webglInit=!0,x.depthTexture.addEventListener("dispose",I)),X.__webglTexture===void 0){X.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture),je(n.TEXTURE_CUBE_MAP,x.depthTexture);let le=r.convert(x.depthTexture.format),Ae=r.convert(x.depthTexture.type),de;x.depthTexture.format===qn?de=n.DEPTH_COMPONENT24:x.depthTexture.format===ki&&(de=n.DEPTH24_STENCIL8);for(let ce=0;ce<6;ce++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,de,x.width,x.height,0,le,Ae,null)}}else re(x.depthTexture,0);let ae=X.__webglTexture,oe=wt(x),$=V?n.TEXTURE_CUBE_MAP_POSITIVE_X+B:n.TEXTURE_2D,Q=x.depthTexture.format===ki?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(x.depthTexture.format===qn)It(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,$,ae,0,oe):n.framebufferTexture2D(n.FRAMEBUFFER,Q,$,ae,0);else if(x.depthTexture.format===ki)It(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,$,ae,0,oe):n.framebufferTexture2D(n.FRAMEBUFFER,Q,$,ae,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ye(w){let x=i.get(w),B=w.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==w.depthTexture){let V=w.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),V){let X=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,V.removeEventListener("dispose",X)};V.addEventListener("dispose",X),x.__depthDisposeCallback=X}x.__boundDepthTexture=V}if(w.depthTexture&&!x.__autoAllocateDepthBuffer)if(B)for(let V=0;V<6;V++)Ft(x.__webglFramebuffer[V],w,V);else{let V=w.texture.mipmaps;V&&V.length>0?Ft(x.__webglFramebuffer[0],w,0):Ft(x.__webglFramebuffer,w,0)}else if(B){x.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[V]),x.__webglDepthbuffer[V]===void 0)x.__webglDepthbuffer[V]=n.createRenderbuffer(),Xe(x.__webglDepthbuffer[V],w,!1);else{let X=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ae=x.__webglDepthbuffer[V];n.bindRenderbuffer(n.RENDERBUFFER,ae),n.framebufferRenderbuffer(n.FRAMEBUFFER,X,n.RENDERBUFFER,ae)}}else{let V=w.texture.mipmaps;if(V&&V.length>0?t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),Xe(x.__webglDepthbuffer,w,!1);else{let X=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ae=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ae),n.framebufferRenderbuffer(n.FRAMEBUFFER,X,n.RENDERBUFFER,ae)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function it(w,x,B){let V=i.get(w);x!==void 0&&ye(V.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&Ye(w)}function mt(w){let x=w.texture,B=i.get(w),V=i.get(x);w.addEventListener("dispose",y);let X=w.textures,ae=w.isWebGLCubeRenderTarget===!0,oe=X.length>1;if(oe||(V.__webglTexture===void 0&&(V.__webglTexture=n.createTexture()),V.__version=x.version,a.memory.textures++),ae){B.__webglFramebuffer=[];for(let $=0;$<6;$++)if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer[$]=[];for(let Q=0;Q<x.mipmaps.length;Q++)B.__webglFramebuffer[$][Q]=n.createFramebuffer()}else B.__webglFramebuffer[$]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer=[];for(let $=0;$<x.mipmaps.length;$++)B.__webglFramebuffer[$]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(oe)for(let $=0,Q=X.length;$<Q;$++){let le=i.get(X[$]);le.__webglTexture===void 0&&(le.__webglTexture=n.createTexture(),a.memory.textures++)}if(w.samples>0&&It(w)===!1){B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let $=0;$<X.length;$++){let Q=X[$];B.__webglColorRenderbuffer[$]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[$]);let le=r.convert(Q.format,Q.colorSpace),Ae=r.convert(Q.type),de=M(Q.internalFormat,le,Ae,Q.normalized,Q.colorSpace,w.isXRRenderTarget===!0),ce=wt(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,ce,de,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+$,n.RENDERBUFFER,B.__webglColorRenderbuffer[$])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),Xe(B.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ae){t.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture),je(n.TEXTURE_CUBE_MAP,x);for(let $=0;$<6;$++)if(x.mipmaps&&x.mipmaps.length>0)for(let Q=0;Q<x.mipmaps.length;Q++)ye(B.__webglFramebuffer[$][Q],w,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+$,Q);else ye(B.__webglFramebuffer[$],w,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);f(x)&&S(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(oe){for(let $=0,Q=X.length;$<Q;$++){let le=X[$],Ae=i.get(le),de=n.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(de=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(de,Ae.__webglTexture),je(de,le),ye(B.__webglFramebuffer,w,le,n.COLOR_ATTACHMENT0+$,de,0),f(le)&&S(de)}t.unbindTexture()}else{let $=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&($=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture($,V.__webglTexture),je($,x),x.mipmaps&&x.mipmaps.length>0)for(let Q=0;Q<x.mipmaps.length;Q++)ye(B.__webglFramebuffer[Q],w,x,n.COLOR_ATTACHMENT0,$,Q);else ye(B.__webglFramebuffer,w,x,n.COLOR_ATTACHMENT0,$,0);f(x)&&S($),t.unbindTexture()}w.depthBuffer&&Ye(w)}function Ze(w){let x=w.textures;for(let B=0,V=x.length;B<V;B++){let X=x[B];if(f(X)){let ae=R(w),oe=i.get(X).__webglTexture;t.bindTexture(ae,oe),S(ae),t.unbindTexture()}}}let Et=[],zt=[];function hn(w){if(w.samples>0){if(It(w)===!1){let x=w.textures,B=w.width,V=w.height,X=n.COLOR_BUFFER_BIT,ae=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=i.get(w),$=x.length>1;if($)for(let le=0;le<x.length;le++)t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer);let Q=w.texture.mipmaps;Q&&Q.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,oe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let le=0;le<x.length;le++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(X|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(X|=n.STENCIL_BUFFER_BIT)),$){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,oe.__webglColorRenderbuffer[le]);let Ae=i.get(x[le]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ae,0)}n.blitFramebuffer(0,0,B,V,0,0,B,V,X,n.NEAREST),l===!0&&(Et.length=0,zt.length=0,Et.push(n.COLOR_ATTACHMENT0+le),w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&(Et.push(ae),zt.push(ae),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,zt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Et))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),$)for(let le=0;le<x.length;le++){t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,oe.__webglColorRenderbuffer[le]);let Ae=i.get(x[le]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.TEXTURE_2D,Ae,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&l){let x=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function wt(w){return Math.min(s.maxSamples,w.samples)}function It(w){let x=i.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function N(w){let x=a.render.frame;h.get(w)!==x&&(h.set(w,x),w.update())}function Jt(w,x){let B=w.colorSpace,V=w.format,X=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||B!==Sr&&B!==_i&&(Je.getTransfer(B)===lt?(V!==bn||X!==dn)&&Ne("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ue("WebGLTextures: Unsupported texture color space:",B)),x}function ht(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=Z,this.resetTextureUnits=H,this.getTextureUnits=L,this.setTextureUnits=G,this.setTexture2D=re,this.setTexture2DArray=q,this.setTexture3D=te,this.setTextureCube=ie,this.rebindTextures=it,this.setupRenderTarget=mt,this.updateRenderTargetMipmap=Ze,this.updateMultisampleRenderTarget=hn,this.setupDepthRenderbuffer=Ye,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=It,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function i_(n,e){function t(i,s=_i){let r,a=Je.getTransfer(s);if(i===dn)return n.UNSIGNED_BYTE;if(i===yo)return n.UNSIGNED_SHORT_4_4_4_4;if(i===vo)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Pc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Lc)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Cc)return n.BYTE;if(i===Ic)return n.SHORT;if(i===Qs)return n.UNSIGNED_SHORT;if(i===_o)return n.INT;if(i===Nn)return n.UNSIGNED_INT;if(i===Un)return n.FLOAT;if(i===Fn)return n.HALF_FLOAT;if(i===Dc)return n.ALPHA;if(i===Nc)return n.RGB;if(i===bn)return n.RGBA;if(i===qn)return n.DEPTH_COMPONENT;if(i===ki)return n.DEPTH_STENCIL;if(i===Uc)return n.RED;if(i===Mo)return n.RED_INTEGER;if(i===Hi)return n.RG;if(i===So)return n.RG_INTEGER;if(i===bo)return n.RGBA_INTEGER;if(i===Xr||i===qr||i===Yr||i===$r)if(a===lt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Xr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Yr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===$r)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Xr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===qr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Yr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===$r)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Eo||i===To||i===wo||i===Ao)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Eo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===To)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===wo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ao)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ro||i===Co||i===Io||i===Po||i===Lo||i===Zr||i===Do)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Ro||i===Co)return a===lt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Io)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Po)return r.COMPRESSED_R11_EAC;if(i===Lo)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Zr)return r.COMPRESSED_RG11_EAC;if(i===Do)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===No||i===Uo||i===Fo||i===Oo||i===Bo||i===zo||i===ko||i===Ho||i===Vo||i===Go||i===Wo||i===Xo||i===qo||i===Yo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===No)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Uo)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Fo)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Oo)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Bo)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===zo)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ko)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ho)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Vo)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Go)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Wo)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Xo)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===qo)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Yo)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===$o||i===Zo||i===Jo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===$o)return a===lt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Zo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Jo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ko||i===jo||i===Jr||i===Qo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Ko)return r.COMPRESSED_RED_RGTC1_EXT;if(i===jo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Jr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Qo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===er?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var s_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,r_=`
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

}`,th=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Fr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new gn({vertexShader:s_,fragmentShader:r_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Le(new is(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},nh=class extends Yn{constructor(e,t){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,p=null,g=null,_=typeof XRWebGLBinding<"u",m=new th,f={},S=t.getContextAttributes(),R=null,M=null,b=[],E=[],I=new Be,y=null,T=null,C=new en;C.viewport=new Tt;let U=new en;U.viewport=new Tt;let O=[C,U],H=new po,L=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ee=b[Y];return ee===void 0&&(ee=new Gs,b[Y]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(Y){let ee=b[Y];return ee===void 0&&(ee=new Gs,b[Y]=ee),ee.getGripSpace()},this.getHand=function(Y){let ee=b[Y];return ee===void 0&&(ee=new Gs,b[Y]=ee),ee.getHandSpace()};function Z(Y){let ee=E.indexOf(Y.inputSource);if(ee===-1)return;let Me=b[ee];Me!==void 0&&(Me.update(Y.inputSource,Y.frame,c||a),Me.dispatchEvent({type:Y.type,data:Y.inputSource}))}function J(){s.removeEventListener("select",Z),s.removeEventListener("selectstart",Z),s.removeEventListener("selectend",Z),s.removeEventListener("squeeze",Z),s.removeEventListener("squeezestart",Z),s.removeEventListener("squeezeend",Z),s.removeEventListener("end",J),s.removeEventListener("inputsourceschange",re);for(let Y=0;Y<b.length;Y++){let ee=E[Y];ee!==null&&(E[Y]=null,b[Y].disconnect(ee))}L=null,G=null,m.reset();for(let Y in f)delete f[Y];if(e.setRenderTarget(R),p=null,u=null,d=null,s=null,M=null,st.stop(),i.isPresenting=!1,e.setPixelRatio(y),e.setSize(I.width,I.height,!1),T!==null){let Y=T.camera;Y.fov=T.fov,Y.zoom=T.zoom,Y.updateProjectionMatrix(),T=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,i.isPresenting===!0&&Ne("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,i.isPresenting===!0&&Ne("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(R=e.getRenderTarget(),s.addEventListener("select",Z),s.addEventListener("selectstart",Z),s.addEventListener("selectend",Z),s.addEventListener("squeeze",Z),s.addEventListener("squeezestart",Z),s.addEventListener("squeezeend",Z),s.addEventListener("end",J),s.addEventListener("inputsourceschange",re),S.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(I),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,Oe=null,ye=null;S.depth&&(ye=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Me=S.stencil?ki:qn,Oe=S.stencil?er:Nn);let Xe={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Xe),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),M=new un(u.textureWidth,u.textureHeight,{format:bn,type:dn,depthTexture:new Di(u.textureWidth,u.textureHeight,Oe,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let Me={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,Me),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new un(p.framebufferWidth,p.framebufferHeight,{format:bn,type:dn,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),st.setContext(s),st.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function re(Y){for(let ee=0;ee<Y.removed.length;ee++){let Me=Y.removed[ee],Oe=E.indexOf(Me);Oe>=0&&(E[Oe]=null,b[Oe].disconnect(Me))}for(let ee=0;ee<Y.added.length;ee++){let Me=Y.added[ee],Oe=E.indexOf(Me);if(Oe===-1){for(let Xe=0;Xe<b.length;Xe++)if(Xe>=E.length){E.push(Me),Oe=Xe;break}else if(E[Xe]===null){E[Xe]=Me,Oe=Xe;break}if(Oe===-1)break}let ye=b[Oe];ye&&ye.connect(Me)}}let q=new F,te=new F;function ie(Y,ee,Me){q.setFromMatrixPosition(ee.matrixWorld),te.setFromMatrixPosition(Me.matrixWorld);let Oe=q.distanceTo(te),ye=ee.projectionMatrix.elements,Xe=Me.projectionMatrix.elements,Ft=ye[14]/(ye[10]-1),Ye=ye[14]/(ye[10]+1),it=(ye[9]+1)/ye[5],mt=(ye[9]-1)/ye[5],Ze=(ye[8]-1)/ye[0],Et=(Xe[8]+1)/Xe[0],zt=Ft*Ze,hn=Ft*Et,wt=Oe/(-Ze+Et),It=wt*-Ze;if(ee.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(It),Y.translateZ(wt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),ye[10]===-1)Y.projectionMatrix.copy(ee.projectionMatrix),Y.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{let N=Ft+wt,Jt=Ye+wt,ht=zt-It,w=hn+(Oe-It),x=it*Ye/Jt*N,B=mt*Ye/Jt*N;Y.projectionMatrix.makePerspective(ht,w,x,B,N,Jt),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function Pe(Y,ee){ee===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ee.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let ee=Y.near,Me=Y.far;m.texture!==null&&(m.depthNear>0&&(ee=m.depthNear),m.depthFar>0&&(Me=m.depthFar)),H.near=U.near=C.near=ee,H.far=U.far=C.far=Me,(L!==H.near||G!==H.far)&&(s.updateRenderState({depthNear:H.near,depthFar:H.far}),L=H.near,G=H.far),H.layers.mask=Y.layers.mask|6,C.layers.mask=H.layers.mask&-5,U.layers.mask=H.layers.mask&-3;let Oe=Y.parent,ye=H.cameras;Pe(H,Oe);for(let Xe=0;Xe<ye.length;Xe++)Pe(ye[Xe],Oe);ye.length===2?ie(H,C,U):H.projectionMatrix.copy(C.projectionMatrix),T===null&&Y.isPerspectiveCamera&&(T={camera:Y,fov:Y.fov,zoom:Y.zoom}),Ce(Y,H,Oe)};function Ce(Y,ee,Me){Me===null?Y.matrix.copy(ee.matrixWorld):(Y.matrix.copy(Me.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ee.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ee.projectionMatrix),Y.projectionMatrixInverse.copy(ee.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Ga*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(Y){l=Y,u!==null&&(u.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(H)},this.getCameraTexture=function(Y){return f[Y]};let pt=null;function je(Y,ee){if(h=ee.getViewerPose(c||a),g=ee,h!==null){let Me=h.views;p!==null&&(e.setRenderTargetFramebuffer(M,p.framebuffer),e.setRenderTarget(M));let Oe=!1;Me.length!==H.cameras.length&&(H.cameras.length=0,Oe=!0);for(let Ye=0;Ye<Me.length;Ye++){let it=Me[Ye],mt=null;if(p!==null)mt=p.getViewport(it);else{let Et=d.getViewSubImage(u,it);mt=Et.viewport,Ye===0&&(e.setRenderTargetTextures(M,Et.colorTexture,Et.depthStencilTexture),e.setRenderTarget(M))}let Ze=O[Ye];Ze===void 0&&(Ze=new en,Ze.layers.enable(Ye),Ze.viewport=new Tt,O[Ye]=Ze),Ze.matrix.fromArray(it.transform.matrix),Ze.matrix.decompose(Ze.position,Ze.quaternion,Ze.scale),Ze.projectionMatrix.fromArray(it.projectionMatrix),Ze.projectionMatrixInverse.copy(Ze.projectionMatrix).invert(),Ze.viewport.set(mt.x,mt.y,mt.width,mt.height),Ye===0&&(H.matrix.copy(Ze.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),Oe===!0&&H.cameras.push(Ze)}let ye=s.enabledFeatures;if(ye&&ye.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){d=i.getBinding();let Ye=d.getDepthInformation(Me[0]);Ye&&Ye.isValid&&Ye.texture&&m.init(Ye,s.renderState)}if(ye&&ye.includes("camera-access")&&_){e.state.unbindTexture(),d=i.getBinding();for(let Ye=0;Ye<Me.length;Ye++){let it=Me[Ye].camera;if(it){let mt=f[it];mt||(mt=new Fr,f[it]=mt);let Ze=d.getCameraImage(it);mt.sourceTexture=Ze}}}}for(let Me=0;Me<b.length;Me++){let Oe=E[Me],ye=b[Me];Oe!==null&&ye!==void 0&&ye.update(Oe,ee,c||a)}pt&&pt(Y,ee),ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ee}),g=null}let st=new wd;st.setAnimationLoop(je),this.setAnimationLoop=function(Y){pt=Y},this.dispose=function(){}}},a_=new bt,Ld=new Fe;Ld.set(-1,0,0,0,1,0,0,0,1);function o_(n,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,Bc(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,S,R,M){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(m,f):f.isMeshLambertMaterial?(r(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(m,f),d(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,M)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,S,R):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===on&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===on&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let S=e.get(f),R=S.envMap,M=S.envMapRotation;R&&(m.envMap.value=R,m.envMapRotation.value.setFromMatrix4(a_.makeRotationFromEuler(M)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Ld),m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,S,R){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*S,m.scale.value=R*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,S){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===on&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.retroreflectivity>0&&(m.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){let S=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function l_(n,e,t,i){let s={},r={},a=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,b){let E=b.program;i.uniformBlockBinding(M,E)}function c(M,b){let E=s[M.id];E===void 0&&(m(M),E=h(M),s[M.id]=E,M.addEventListener("dispose",S));let I=b.program;i.updateUBOMapping(M,I);let y=e.render.frame;r[M.id]!==y&&(u(M),r[M.id]=y)}function h(M){let b=d();M.__bindingPointIndex=b;let E=n.createBuffer(),I=M.__size,y=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,I,y),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,E),E}function d(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return Ue("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(M){let b=s[M.id],E=M.uniforms,I=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let y=0,T=E.length;y<T;y++){let C=E[y];if(Array.isArray(C))for(let U=0,O=C.length;U<O;U++)p(C[U],y,U,I);else p(C,y,0,I)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(M,b,E,I){if(_(M,b,E,I)===!0){let y=M.__offset,T=M.value;if(Array.isArray(T)){let C=0;for(let U=0;U<T.length;U++){let O=T[U],H=f(O);g(O,M.__data,C),typeof O!="number"&&typeof O!="boolean"&&!O.isMatrix3&&!ArrayBuffer.isView(O)&&(C+=H.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(T,M.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,y,M.__data)}}function g(M,b,E){typeof M=="number"||typeof M=="boolean"?b[0]=M:M.isMatrix3?(b[0]=M.elements[0],b[1]=M.elements[1],b[2]=M.elements[2],b[3]=0,b[4]=M.elements[3],b[5]=M.elements[4],b[6]=M.elements[5],b[7]=0,b[8]=M.elements[6],b[9]=M.elements[7],b[10]=M.elements[8],b[11]=0):ArrayBuffer.isView(M)?b.set(new M.constructor(M.buffer,M.byteOffset,b.length)):M.toArray(b,E)}function _(M,b,E,I){let y=M.value,T=b+"_"+E;if(I[T]===void 0)return typeof y=="number"||typeof y=="boolean"?I[T]=y:ArrayBuffer.isView(y)?I[T]=y.slice():I[T]=y.clone(),!0;{let C=I[T];if(typeof y=="number"||typeof y=="boolean"){if(C!==y)return I[T]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(C.equals(y)===!1)return C.copy(y),!0}}return!1}function m(M){let b=M.uniforms,E=0,I=16;for(let T=0,C=b.length;T<C;T++){let U=Array.isArray(b[T])?b[T]:[b[T]];for(let O=0,H=U.length;O<H;O++){let L=U[O],G=Array.isArray(L.value)?L.value:[L.value];for(let Z=0,J=G.length;Z<J;Z++){let re=G[Z],q=f(re),te=E%I,ie=te%q.boundary,Pe=te+ie;E+=ie,Pe!==0&&I-Pe<q.storage&&(E+=I-Pe),L.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=E,E+=q.storage}}}let y=E%I;return y>0&&(E+=I-y),M.__size=E,M.__cache={},this}function f(M){let b={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(b.boundary=4,b.storage=4):M.isVector2?(b.boundary=8,b.storage=8):M.isVector3||M.isColor?(b.boundary=16,b.storage=12):M.isVector4?(b.boundary=16,b.storage=16):M.isMatrix3?(b.boundary=48,b.storage=48):M.isMatrix4?(b.boundary=64,b.storage=64):M.isTexture?Ne("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(b.boundary=16,b.storage=M.byteLength):Ne("WebGLRenderer: Unsupported uniform value type.",M),b}function S(M){let b=M.target;b.removeEventListener("dispose",S);let E=a.indexOf(b.__bindingPointIndex);a.splice(E,1),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function R(){for(let M in s)n.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:l,update:c,dispose:R}}var c_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ti=null;function h_(){return ti===null&&(ti=new $a(c_,16,16,Hi,Fn),ti.name="DFG_LUT",ti.minFilter=$t,ti.magFilter=$t,ti.wrapS=Xn,ti.wrapT=Xn,ti.generateMipmaps=!1,ti.needsUpdate=!0),ti}var ol=class{constructor(e={}){let{canvas:t=Ju(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:p=dn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;let _=p,m=new Set([bo,So,Mo]),f=new Set([dn,Nn,Qs,er,yo,vo]),S=new Uint32Array(4),R=new Int32Array(4),M=new F,b=null,E=null,I=[],y=[],T=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Dn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,U=!1,O=null,H=null,L=null,G=null;this._outputColorSpace=Yt;let Z=0,J=0,re=null,q=-1,te=null,ie=new Tt,Pe=new Tt,Ce=null,pt=new Ve(0),je=0,st=t.width,Y=t.height,ee=1,Me=null,Oe=null,ye=new Tt(0,0,st,Y),Xe=new Tt(0,0,st,Y),Ft=!1,Ye=new Ws,it=!1,mt=!1,Ze=new bt,Et=new F,zt=new Tt,hn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},wt=!1;function It(){return re===null?ee:1}let N=i;function Jt(v,P){return t.getContext(v,P)}let ht,w,x,B,V,X,ae,oe,$,Q,le,Ae,de,ce,Re,De,ze,D,he,j,ue,ge,ne;try{let v={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",gt,!1),t.addEventListener("webglcontextrestored",at,!1),t.addEventListener("webglcontextcreationerror",An,!1),N===null){let P="webgl2";if(N=Jt(P,v),N===null)throw Jt(P)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ie()}catch(v){throw t.removeEventListener("webglcontextlost",gt,!1),t.removeEventListener("webglcontextrestored",at,!1),t.removeEventListener("webglcontextcreationerror",An,!1),Ue("WebGLRenderer: "+v.message),v}function Ie(){ht=new x0(N),ht.init(),ue=new i_(N,ht),w=new o0(N,ht,e,ue),x=new t_(N,ht),w.reversedDepthBuffer&&u&&x.buffers.depth.setReversed(!0),H=N.createFramebuffer(),L=N.createFramebuffer(),G=N.createFramebuffer(),B=new v0(N),V=new Hx,X=new n_(N,ht,x,V,w,ue,B),ae=new g0(C),oe=new Sp(N),ge=new r0(N,oe),$=new _0(N,oe,B,ge),Q=new S0(N,$,oe,ge,B),D=new M0(N,w,X),Re=new l0(V),le=new kx(C,ae,ht,w,ge,Re),Ae=new o_(C,V),de=new Gx,ce=new Zx(ht),ze=new s0(C,ae,x,Q,g,l),De=new e_(C,Q,w),ne=new l_(N,B,w,x),he=new a0(N,ht,B),j=new y0(N,ht,B),B.programs=le.programs,C.capabilities=w,C.extensions=ht,C.properties=V,C.renderLists=de,C.shadowMap=De,C.state=x,C.info=B}_!==dn&&(T=new E0(_,t.width,t.height,o,s,r));let Te=new nh(C,N);this.xr=Te,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let v=ht.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=ht.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(v){v!==void 0&&(ee=v,this.setSize(st,Y,!1))},this.getSize=function(v){return v.set(st,Y)},this.setSize=function(v,P,W=!0){if(Te.isPresenting){Ne("WebGLRenderer: Can't change size while VR device is presenting.");return}st=v,Y=P,t.width=Math.floor(v*ee),t.height=Math.floor(P*ee),W===!0&&(t.style.width=v+"px",t.style.height=P+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,v,P)},this.getDrawingBufferSize=function(v){return v.set(st*ee,Y*ee).floor()},this.setDrawingBufferSize=function(v,P,W){st=v,Y=P,ee=W,t.width=Math.floor(v*W),t.height=Math.floor(P*W),this.setViewport(0,0,v,P)},this.setEffects=function(v){if(_===dn){Ue("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let P=0;P<v.length;P++)if(v[P].isOutputPass===!0){Ne("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(ie)},this.getViewport=function(v){return v.copy(ye)},this.setViewport=function(v,P,W,z){v.isVector4?ye.set(v.x,v.y,v.z,v.w):ye.set(v,P,W,z),x.viewport(ie.copy(ye).multiplyScalar(ee).round())},this.getScissor=function(v){return v.copy(Xe)},this.setScissor=function(v,P,W,z){v.isVector4?Xe.set(v.x,v.y,v.z,v.w):Xe.set(v,P,W,z),x.scissor(Pe.copy(Xe).multiplyScalar(ee).round())},this.getScissorTest=function(){return Ft},this.setScissorTest=function(v){x.setScissorTest(Ft=v)},this.setOpaqueSort=function(v){Me=v},this.setTransparentSort=function(v){Oe=v},this.getClearColor=function(v){return v.copy(ze.getClearColor())},this.setClearColor=function(){ze.setClearColor(...arguments)},this.getClearAlpha=function(){return ze.getClearAlpha()},this.setClearAlpha=function(){ze.setClearAlpha(...arguments)},this.clear=function(v=!0,P=!0,W=!0){let z=0;if(v){let k=!1;if(re!==null){let me=re.texture.format;k=m.has(me)}if(k){let me=re.texture.type,ve=f.has(me),pe=ze.getClearColor(),be=ze.getClearAlpha(),we=pe.r,He=pe.g,$e=pe.b;ve?(S[0]=we,S[1]=He,S[2]=$e,S[3]=be,N.clearBufferuiv(N.COLOR,0,S)):(R[0]=we,R[1]=He,R[2]=$e,R[3]=be,N.clearBufferiv(N.COLOR,0,R))}else z|=N.COLOR_BUFFER_BIT}P&&(z|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(z|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&N.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),O=v},this.dispose=function(){t.removeEventListener("webglcontextlost",gt,!1),t.removeEventListener("webglcontextrestored",at,!1),t.removeEventListener("webglcontextcreationerror",An,!1),ze.dispose(),de.dispose(),ce.dispose(),V.dispose(),ae.dispose(),Q.dispose(),ge.dispose(),ne.dispose(),le.dispose(),Te.dispose(),Te.removeEventListener("sessionstart",Oh),Te.removeEventListener("sessionend",Bh),Ji.stop()};function gt(v){v.preventDefault(),Tr("WebGLRenderer: Context Lost."),U=!0}function at(){Tr("WebGLRenderer: Context Restored."),U=!1;let v=B.autoReset,P=De.enabled,W=De.autoUpdate,z=De.needsUpdate,k=De.type;Ie(),B.autoReset=v,De.enabled=P,De.autoUpdate=W,De.needsUpdate=z,De.type=k}function An(v){Ue("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Hn(v){let P=v.target;P.removeEventListener("dispose",Hn),Df(P)}function Df(v){Nf(v),V.remove(v)}function Nf(v){let P=V.get(v).programs;P!==void 0&&(P.forEach(function(W){le.releaseProgram(W)}),v.isShaderMaterial&&le.releaseShaderCache(v))}this.renderBufferDirect=function(v,P,W,z,k,me){P===null&&(P=hn);let ve=k.isMesh&&k.matrixWorld.determinantAffine()<0,pe=Of(v,P,W,z,k);x.setMaterial(z,ve);let be=W.index,we=1;if(z.wireframe===!0){if(be=$.getWireframeAttribute(W),be===void 0)return;we=2}let He=W.drawRange,$e=W.attributes.position,Ee=He.start*we,ot=(He.start+He.count)*we;me!==null&&(Ee=Math.max(Ee,me.start*we),ot=Math.min(ot,(me.start+me.count)*we)),be!==null?(Ee=Math.max(Ee,0),ot=Math.min(ot,be.count)):$e!=null&&(Ee=Math.max(Ee,0),ot=Math.min(ot,$e.count));let Pt=ot-Ee;if(Pt<0||Pt===1/0)return;ge.setup(k,z,pe,W,be);let Mt,ft=he;if(be!==null&&(Mt=oe.get(be),ft=j,ft.setIndex(Mt)),k.isMesh)z.wireframe===!0?(x.setLineWidth(z.wireframeLinewidth*It()),ft.setMode(N.LINES)):ft.setMode(N.TRIANGLES);else if(k.isLine){let Kt=z.linewidth;Kt===void 0&&(Kt=1),x.setLineWidth(Kt*It()),k.isLineSegments?ft.setMode(N.LINES):k.isLineLoop?ft.setMode(N.LINE_LOOP):ft.setMode(N.LINE_STRIP)}else k.isPoints?ft.setMode(N.POINTS):k.isSprite&&ft.setMode(N.TRIANGLES);if(k.isBatchedMesh)if(ht.get("WEBGL_multi_draw"))ft.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let Kt=k._multiDrawStarts,_e=k._multiDrawCounts,sn=k._multiDrawCount,et=be?oe.get(be).bytesPerElement:1,Mn=V.get(z).currentProgram.getUniforms();for(let Vn=0;Vn<sn;Vn++)Mn.setValue(N,"_gl_DrawID",Vn),ft.render(Kt[Vn]/et,_e[Vn])}else if(k.isInstancedMesh)ft.renderInstances(Ee,Pt,k.count);else if(W.isInstancedBufferGeometry){let Kt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,_e=Math.min(W.instanceCount,Kt);ft.renderInstances(Ee,Pt,_e)}else ft.render(Ee,Pt)};function Fh(v,P,W,z){O!==null&&v.isNodeMaterial&&O.setObject(z,v),it===!0&&Re.setState(v,W,!1),v.transparent===!0&&v.side===_n&&v.forceSinglePass===!1?(v.side=on,v.needsUpdate=!0,oa(v,P,z),v.side=Oi,v.needsUpdate=!0,oa(v,P,z),v.side=_n):oa(v,P,z)}this.compile=function(v,P,W=null){W===null&&(W=v),O!==null&&O.renderStart(v,P,W),E=ce.get(W),E.init(P),y.push(E),W.traverseVisible(function(k){k.isLight&&k.layers.test(P.layers)&&(E.pushLight(k),k.castShadow&&E.pushShadow(k))}),v!==W&&v.traverseVisible(function(k){k.isLight&&k.layers.test(P.layers)&&(E.pushLight(k),k.castShadow&&E.pushShadow(k))}),E.setupLights(),O!==null&&O.updateLights(E.state.lightsArray),mt=this.localClippingEnabled,it=Re.init(this.clippingPlanes,mt),it===!0&&Re.setGlobalState(this.clippingPlanes,P),O!==null&&De.render(E.state.shadowsArray,W,P);let z=new Set;return v.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let me=k.material;if(me)if(Array.isArray(me))for(let ve=0;ve<me.length;ve++){let pe=me[ve];Fh(pe,W,P,k),z.add(pe)}else Fh(me,W,P,k),z.add(me)}),E=y.pop(),O!==null&&O.renderEnd(),z},this.compileAsync=function(v,P,W=null){let z=this.compile(v,P,W);return new Promise(k=>{function me(){if(z.forEach(function(ve){let be=V.get(ve).currentProgram;(be===void 0||be.isReady())&&z.delete(ve)}),z.size===0){k(v);return}setTimeout(me,10)}ht.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let Ul=null;function Uf(v){Ul&&Ul(v)}function Oh(){Ji.stop()}function Bh(){Ji.start()}let Ji=new wd;Ji.setAnimationLoop(Uf),typeof self<"u"&&Ji.setContext(self),this.setAnimationLoop=function(v){Ul=v,Te.setAnimationLoop(v),v===null?Ji.stop():Ji.start()},Te.addEventListener("sessionstart",Oh),Te.addEventListener("sessionend",Bh),this.render=function(v,P){if(P!==void 0&&P.isCamera!==!0){Ue("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;O!==null&&O.renderStart(v,P);let W=Te.enabled===!0&&Te.isPresenting===!0,z=T!==null&&(re===null||W)&&T.begin(C,re);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),Te.enabled===!0&&Te.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Te.cameraAutoUpdate===!0&&Te.updateCamera(P),P=Te.getCamera()),v.isScene===!0&&v.onBeforeRender(C,v,P,re),E=ce.get(v,y.length),E.init(P),E.state.textureUnits=X.getTextureUnits(),y.push(E),Ze.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),Ye.setFromProjectionMatrix(Ze,Ln,P.reversedDepth),mt=this.localClippingEnabled,it=Re.init(this.clippingPlanes,mt),b=de.get(v,I.length),b.init(),I.push(b),Te.enabled===!0&&Te.isPresenting===!0){let ve=C.xr.getDepthSensingMesh();ve!==null&&Fl(ve,P,-1/0,C.sortObjects)}Fl(v,P,0,C.sortObjects),b.finish(),O!==null&&O.updateLights(E.state.lightsArray),C.sortObjects===!0&&b.sort(Me,Oe),wt=Te.enabled===!1||Te.isPresenting===!1||Te.hasDepthSensing()===!1,wt&&ze.addToRenderList(b,v),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),it===!0&&Re.beginShadows();let k=E.state.shadowsArray;if(De.render(k,v,P),it===!0&&Re.endShadows(),(z&&T.hasRenderPass())===!1){let ve=b.opaque,pe=b.transmissive;if(E.setupLights(),P.isArrayCamera){let be=P.cameras;if(pe.length>0)for(let we=0,He=be.length;we<He;we++){let $e=be[we];kh(ve,pe,v,$e)}wt&&ze.render(v);for(let we=0,He=be.length;we<He;we++){let $e=be[we];zh(b,v,$e,$e.viewport)}}else pe.length>0&&kh(ve,pe,v,P),wt&&ze.render(v),zh(b,v,P)}re!==null&&J===0&&(X.updateMultisampleRenderTarget(re),X.updateRenderTargetMipmap(re)),z&&T.end(C),v.isScene===!0&&v.onAfterRender(C,v,P),ge.resetDefaultState(),q=-1,te=null,y.pop(),y.length>0?(E=y[y.length-1],X.setTextureUnits(E.state.textureUnits),it===!0&&Re.setGlobalState(C.clippingPlanes,E.state.camera)):E=null,I.pop(),I.length>0?b=I[I.length-1]:b=null,O!==null&&O.renderEnd()};function Fl(v,P,W,z){if(v.visible===!1)return;if(v.layers.test(P.layers)){if(v.isGroup)W=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(P);else if(v.isLightProbeGrid)E.pushLightProbeGrid(v);else if(v.isLight)E.pushLight(v),v.castShadow&&E.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||v.intersectsFrustum(Ye)){z&&zt.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Ze);let ve=Q.update(v),pe=v.material;pe.visible&&b.push(v,ve,pe,W,zt.z,null,P)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||v.intersectsFrustum(Ye))){let ve=Q.update(v),pe=v.material;if(z&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),zt.copy(v.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),zt.copy(ve.boundingSphere.center)),zt.applyMatrix4(v.matrixWorld).applyMatrix4(Ze)),Array.isArray(pe)){let be=ve.groups;for(let we=0,He=be.length;we<He;we++){let $e=be[we],Ee=pe[$e.materialIndex];Ee&&Ee.visible&&b.push(v,ve,Ee,W,zt.z,$e,P)}}else pe.visible&&b.push(v,ve,pe,W,zt.z,null,P)}}let me=v.children;for(let ve=0,pe=me.length;ve<pe;ve++)Fl(me[ve],P,W,z)}function zh(v,P,W,z){let{opaque:k,transmissive:me,transparent:ve}=v;E.setupLightsView(W),it===!0&&Re.setGlobalState(C.clippingPlanes,W),z&&x.viewport(ie.copy(z)),k.length>0&&aa(k,P,W),me.length>0&&aa(me,P,W),ve.length>0&&aa(ve,P,W),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function kh(v,P,W,z){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[z.id]===void 0){let Ee=ht.has("EXT_color_buffer_half_float")||ht.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[z.id]=new un(1,1,{generateMipmaps:!0,type:Ee?Fn:dn,minFilter:zi,samples:Math.max(4,w.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Je.workingColorSpace})}let me=E.state.transmissionRenderTarget[z.id],ve=z.viewport||ie;me.setSize(ve.z*C.transmissionResolutionScale,ve.w*C.transmissionResolutionScale);let pe=C.getRenderTarget(),be=C.getActiveCubeFace(),we=C.getActiveMipmapLevel();C.setRenderTarget(me),C.getClearColor(pt),je=C.getClearAlpha(),je<1&&C.setClearColor(16777215,.5),C.clear(),wt&&ze.render(W);let He=C.toneMapping;C.toneMapping=Dn;let $e=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),E.setupLightsView(z),it===!0&&Re.setGlobalState(C.clippingPlanes,z),aa(v,W,z),X.updateMultisampleRenderTarget(me),X.updateRenderTargetMipmap(me),ht.has("WEBGL_multisampled_render_to_texture")===!1){let Ee=!1;for(let ot=0,Pt=P.length;ot<Pt;ot++){let Mt=P[ot],{object:ft,geometry:Kt,material:_e,group:sn}=Mt;if(_e.side===_n&&ft.layers.test(z.layers)){let et=_e.side;_e.side=on,_e.needsUpdate=!0,Hh(ft,W,z,Kt,_e,sn),_e.side=et,_e.needsUpdate=!0,Ee=!0}}Ee===!0&&(X.updateMultisampleRenderTarget(me),X.updateRenderTargetMipmap(me))}C.setRenderTarget(pe,be,we),C.setClearColor(pt,je),$e!==void 0&&(z.viewport=$e),C.toneMapping=He}function aa(v,P,W){let z=P.isScene===!0?P.overrideMaterial:null;for(let k=0,me=v.length;k<me;k++){let ve=v[k],{object:pe,geometry:be,group:we}=ve,He=ve.material;He.allowOverride===!0&&z!==null&&(He=z),pe.layers.test(W.layers)&&Hh(pe,P,W,be,He,we)}}function Hh(v,P,W,z,k,me){O!==null&&k.isNodeMaterial&&O.setObject(v,k),v.onBeforeRender(C,P,W,z,k,me),v.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),k.onBeforeRender(C,P,W,z,v,me),k.transparent===!0&&k.side===_n&&k.forceSinglePass===!1?(k.side=on,k.needsUpdate=!0,C.renderBufferDirect(W,P,z,k,v,me),k.side=Oi,k.needsUpdate=!0,C.renderBufferDirect(W,P,z,k,v,me),k.side=_n):C.renderBufferDirect(W,P,z,k,v,me),v.onAfterRender(C,P,W,z,k,me)}function oa(v,P,W){P.isScene!==!0&&(P=hn);let z=V.get(v),k=E.state.lights,me=E.state.shadowsArray,ve=k.state.version,pe=le.getParameters(v,k.state,me,P,W,E.state.lightProbeGridArray),be=le.getProgramCacheKey(pe),we=z.programs;z.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?P.environment:null,z.fog=P.fog;let He=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;z.envMap=ae.get(v.envMap||z.environment,He),z.envMapRotation=z.environment!==null&&v.envMap===null?P.environmentRotation:v.envMapRotation,we===void 0&&(v.addEventListener("dispose",Hn),we=new Map,z.programs=we);let $e=we.get(be);if($e!==void 0){if(z.currentProgram===$e&&z.lightsStateVersion===ve)return Gh(v,pe),$e}else pe.uniforms=le.getUniforms(v),O!==null&&v.isNodeMaterial&&O.build(v,W,pe),v.onBeforeCompile(pe,C),$e=le.acquireProgram(pe,be),we.set(be,$e),z.uniforms=pe.uniforms;let Ee=z.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Ee.clippingPlanes=Re.uniform),Gh(v,pe),z.needsLights=zf(v),z.lightsStateVersion=ve,z.needsLights&&(Ee.ambientLightColor.value=k.state.ambient,Ee.lightProbe.value=k.state.probe,Ee.sunLights.value=k.state.sun,Ee.sunLightShadows.value=k.state.sunShadow,Ee.directionalLights.value=k.state.directional,Ee.directionalLightShadows.value=k.state.directionalShadow,Ee.spotLights.value=k.state.spot,Ee.spotLightShadows.value=k.state.spotShadow,Ee.rectAreaLights.value=k.state.rectArea,Ee.ltc_1.value=k.state.rectAreaLTC1,Ee.ltc_2.value=k.state.rectAreaLTC2,Ee.pointLights.value=k.state.point,Ee.pointLightShadows.value=k.state.pointShadow,Ee.hemisphereLights.value=k.state.hemi,Ee.sunShadowMatrix.value=k.state.sunShadowMatrix,Ee.sunShadowCascade.value=k.state.sunShadowCascade,Ee.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Ee.spotLightMatrix.value=k.state.spotLightMatrix,Ee.spotLightMap.value=k.state.spotLightMap,Ee.pointShadowMatrix.value=k.state.pointShadowMatrix),z.lightProbeGrid=E.state.lightProbeGridArray.length>0,z.currentProgram=$e,z.uniformsList=null,$e}function Vh(v){if(v.uniformsList===null){let P=v.currentProgram.getUniforms();v.uniformsList=ir.seqWithValue(P.seq,v.uniforms)}return v.uniformsList}function Gh(v,P){let W=V.get(v);W.outputColorSpace=P.outputColorSpace,W.batching=P.batching,W.batchingColor=P.batchingColor,W.instancing=P.instancing,W.instancingColor=P.instancingColor,W.instancingMorph=P.instancingMorph,W.skinning=P.skinning,W.morphTargets=P.morphTargets,W.morphNormals=P.morphNormals,W.morphColors=P.morphColors,W.morphTargetsCount=P.morphTargetsCount,W.numClippingPlanes=P.numClippingPlanes,W.numIntersection=P.numClipIntersection,W.vertexAlphas=P.vertexAlphas,W.vertexTangents=P.vertexTangents,W.toneMapping=P.toneMapping}function Ff(v,P){if(v.length===0)return null;if(v.length===1)return v[0].texture!==null?v[0]:null;M.setFromMatrixPosition(P.matrixWorld);for(let W=0,z=v.length;W<z;W++){let k=v[W];if(k.texture!==null&&k.boundingBox.containsPoint(M))return k}return null}function Of(v,P,W,z,k){P.isScene!==!0&&(P=hn),X.resetTextureUnits();let me=P.fog,ve=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?P.environment:null,pe=re===null?C.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:Je.workingColorSpace,be=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,we=ae.get(z.envMap||ve,be),He=z.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,$e=!!W.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Ee=!!W.morphAttributes.position,ot=!!W.morphAttributes.normal,Pt=!!W.morphAttributes.color,Mt=Dn;z.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(Mt=C.toneMapping);let ft=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Kt=ft!==void 0?ft.length:0,_e=V.get(z),sn=E.state.lights;if(it===!0&&(mt===!0||v!==te)){let xt=v===te&&z.id===q;Re.setState(z,v,xt)}let et=!1;z.version===_e.__version?(_e.needsLights&&_e.lightsStateVersion!==sn.state.version||_e.outputColorSpace!==pe||k.isBatchedMesh&&_e.batching===!1||!k.isBatchedMesh&&_e.batching===!0||k.isBatchedMesh&&_e.batchingColor===!0&&k._colorsTexture===null||k.isBatchedMesh&&_e.batchingColor===!1&&k._colorsTexture!==null||k.isInstancedMesh&&_e.instancing===!1||!k.isInstancedMesh&&_e.instancing===!0||k.isSkinnedMesh&&_e.skinning===!1||!k.isSkinnedMesh&&_e.skinning===!0||k.isInstancedMesh&&_e.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&_e.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&_e.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&_e.instancingMorph===!1&&k.morphTexture!==null||_e.envMap!==we||z.fog===!0&&_e.fog!==me||_e.numClippingPlanes!==void 0&&(_e.numClippingPlanes!==Re.numPlanes||_e.numIntersection!==Re.numIntersection)||_e.vertexAlphas!==He||_e.vertexTangents!==$e||_e.morphTargets!==Ee||_e.morphNormals!==ot||_e.morphColors!==Pt||_e.toneMapping!==Mt||_e.morphTargetsCount!==Kt||!!_e.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(et=!0):(et=!0,_e.__version=z.version);let Mn=_e.currentProgram;et===!0&&(Mn=oa(z,P,k),O&&z.isNodeMaterial&&O.onUpdateProgram(z,Mn,_e));let Vn=!1,bi=!1,_s=!1,ut=Mn.getUniforms(),Rt=_e.uniforms;if(x.useProgram(Mn.program)&&(Vn=!0,bi=!0,_s=!0),z.id!==q&&(q=z.id,bi=!0),_e.needsLights){let xt=Ff(E.state.lightProbeGridArray,k);_e.lightProbeGrid!==xt&&(_e.lightProbeGrid=xt,bi=!0)}if(Vn||te!==v){x.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),ut.setValue(N,"projectionMatrix",v.projectionMatrix),ut.setValue(N,"viewMatrix",v.matrixWorldInverse);let Ti=ut.map.cameraPosition;Ti!==void 0&&Ti.setValue(N,Et.setFromMatrixPosition(v.matrixWorld)),w.logarithmicDepthBuffer&&ut.setValue(N,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&ut.setValue(N,"isOrthographic",v.isOrthographicCamera===!0),te!==v&&(te=v,bi=!0,_s=!0)}if(_e.needsLights&&(sn.state.sunShadowMap.length>0&&ut.setValue(N,"sunShadowMap",sn.state.sunShadowMap,X),sn.state.directionalShadowMap.length>0&&ut.setValue(N,"directionalShadowMap",sn.state.directionalShadowMap,X),sn.state.spotShadowMap.length>0&&ut.setValue(N,"spotShadowMap",sn.state.spotShadowMap,X),sn.state.pointShadowMap.length>0&&ut.setValue(N,"pointShadowMap",sn.state.pointShadowMap,X)),k.isSkinnedMesh){ut.setOptional(N,k,"bindMatrix"),ut.setOptional(N,k,"bindMatrixInverse");let xt=k.skeleton;xt&&(xt.boneTexture===null&&xt.computeBoneTexture(),ut.setValue(N,"boneTexture",xt.boneTexture,X))}k.isBatchedMesh&&(ut.setOptional(N,k,"batchingTexture"),ut.setValue(N,"batchingTexture",k._matricesTexture,X),ut.setOptional(N,k,"batchingIdTexture"),ut.setValue(N,"batchingIdTexture",k._indirectTexture,X),ut.setOptional(N,k,"batchingColorTexture"),k._colorsTexture!==null&&ut.setValue(N,"batchingColorTexture",k._colorsTexture,X));let Ei=W.morphAttributes;if((Ei.position!==void 0||Ei.normal!==void 0||Ei.color!==void 0)&&D.update(k,W,Mn),(bi||_e.receiveShadow!==k.receiveShadow)&&(_e.receiveShadow=k.receiveShadow,ut.setValue(N,"receiveShadow",k.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&P.environment!==null&&(Rt.envMapIntensity.value=P.environmentIntensity),Rt.dfgLUT!==void 0&&(Rt.dfgLUT.value=h_()),bi){if(ut.setValue(N,"toneMappingExposure",C.toneMappingExposure),_e.needsLights&&Bf(Rt,_s),me&&z.fog===!0&&Ae.refreshFogUniforms(Rt,me),Ae.refreshMaterialUniforms(Rt,z,ee,Y,E.state.transmissionRenderTarget[v.id]),_e.needsLights&&_e.lightProbeGrid){let xt=_e.lightProbeGrid;Rt.probesSH.value=xt.texture,Rt.probesMin.value.copy(xt.boundingBox.min),Rt.probesMax.value.copy(xt.boundingBox.max),Rt.probesResolution.value.copy(xt.resolution)}ir.upload(N,Vh(_e),Rt,X)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(ir.upload(N,Vh(_e),Rt,X),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&ut.setValue(N,"center",k.center),ut.setValue(N,"modelViewMatrix",k.modelViewMatrix),ut.setValue(N,"normalMatrix",k.normalMatrix),ut.setValue(N,"modelMatrix",k.matrixWorld),z.uniformsGroups!==void 0){let xt=z.uniformsGroups;for(let Ti=0,ys=xt.length;Ti<ys;Ti++){let Xh=xt[Ti];ne.update(Xh,Mn),ne.bind(Xh,Mn)}}return Mn}function Bf(v,P){v.ambientLightColor.needsUpdate=P,v.lightProbe.needsUpdate=P,v.sunLights.needsUpdate=P,v.sunLightShadows.needsUpdate=P,v.directionalLights.needsUpdate=P,v.directionalLightShadows.needsUpdate=P,v.pointLights.needsUpdate=P,v.pointLightShadows.needsUpdate=P,v.spotLights.needsUpdate=P,v.spotLightShadows.needsUpdate=P,v.rectAreaLights.needsUpdate=P,v.hemisphereLights.needsUpdate=P}function zf(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return J},this.getRenderTarget=function(){return re},this.setRenderTargetTextures=function(v,P,W){let z=V.get(v);z.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),V.get(v.texture).__webglTexture=P,V.get(v.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:W,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,P){let W=V.get(v);W.__webglFramebuffer=P,W.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(v,P=0,W=0){re=v,Z=P,J=W;let z=null,k=!1,me=!1;if(v){let pe=V.get(v);if(pe.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(N.FRAMEBUFFER,pe.__webglFramebuffer),ie.copy(v.viewport),Pe.copy(v.scissor),Ce=v.scissorTest,x.viewport(ie),x.scissor(Pe),x.setScissorTest(Ce),q=-1;return}else if(pe.__webglFramebuffer===void 0)X.setupRenderTarget(v);else if(pe.__hasExternalTextures)X.rebindTextures(v,V.get(v.texture).__webglTexture,V.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let He=v.depthTexture;if(pe.__boundDepthTexture!==He){if(He!==null&&V.has(He)&&(v.width!==He.image.width||v.height!==He.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");X.setupDepthRenderbuffer(v)}}let be=v.texture;(be.isData3DTexture||be.isDataArrayTexture||be.isCompressedArrayTexture)&&(me=!0);let we=V.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(we[P])?z=we[P][W]:z=we[P],k=!0):v.samples>0&&X.useMultisampledRTT(v)===!1?z=V.get(v).__webglMultisampledFramebuffer:Array.isArray(we)?z=we[W]:z=we,ie.copy(v.viewport),Pe.copy(v.scissor),Ce=v.scissorTest}else ie.copy(ye).multiplyScalar(ee).floor(),Pe.copy(Xe).multiplyScalar(ee).floor(),Ce=Ft;if(W!==0&&(z=H),x.bindFramebuffer(N.FRAMEBUFFER,z)&&x.drawBuffers(v,z),x.viewport(ie),x.scissor(Pe),x.setScissorTest(Ce),k){let pe=V.get(v.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+P,pe.__webglTexture,W)}else if(me){let pe=P;for(let be=0;be<v.textures.length;be++){let we=V.get(v.textures[be]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+be,we.__webglTexture,W,pe)}}else if(v!==null&&W!==0){let pe=V.get(v.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,pe.__webglTexture,W)}q=-1};function Wh(v){let P=V.get(v);return(P.__readFormat!==v.format||P.__readType!==v.type)&&(P.__readFormat=v.format,P.__readType=v.type,P.__formatReadable=w.textureFormatReadable(v.format),P.__typeReadable=w.textureTypeReadable(v.type)),P}this.readRenderTargetPixels=function(v,P,W,z,k,me,ve,pe=0){if(!(v&&v.isWebGLRenderTarget)){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=V.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ve!==void 0&&(be=be[ve]),be){x.bindFramebuffer(N.FRAMEBUFFER,be);try{let we=v.textures[pe],He=we.format,$e=we.type;v.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+pe);let Ee=Wh(we);if(Ee.__formatReadable===!1){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ee.__typeReadable===!1){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=v.width-z&&W>=0&&W<=v.height-k&&N.readPixels(P,W,z,k,ue.convert(He),ue.convert($e),me)}finally{let we=re!==null?V.get(re).__webglFramebuffer:null;x.bindFramebuffer(N.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(v,P,W,z,k,me,ve,pe=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=V.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ve!==void 0&&(be=be[ve]),be)if(P>=0&&P<=v.width-z&&W>=0&&W<=v.height-k){x.bindFramebuffer(N.FRAMEBUFFER,be);let we=v.textures[pe],He=we.format,$e=we.type;v.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+pe);let Ee=Wh(we);if(Ee.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ee.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ot=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,ot),N.bufferData(N.PIXEL_PACK_BUFFER,me.byteLength,N.STREAM_READ),N.readPixels(P,W,z,k,ue.convert(He),ue.convert($e),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);let Pt=re!==null?V.get(re).__webglFramebuffer:null;x.bindFramebuffer(N.FRAMEBUFFER,Pt);let Mt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await ju(N,Mt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,ot),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,me),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(ot),N.deleteSync(Mt),me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,P=null,W=0){let z=Math.pow(2,-W),k=Math.floor(v.image.width*z),me=Math.floor(v.image.height*z),ve=P!==null?P.x:0,pe=P!==null?P.y:0;X.setTexture2D(v,0),N.copyTexSubImage2D(N.TEXTURE_2D,W,0,0,ve,pe,k,me),x.unbindTexture()},this.copyTextureToTexture=function(v,P,W=null,z=null,k=0,me=0){let ve,pe,be,we,He,$e,Ee,ot,Pt,Mt=v.isCompressedTexture?v.mipmaps[me]:v.image;if(W!==null)ve=W.max.x-W.min.x,pe=W.max.y-W.min.y,be=W.isBox3?W.max.z-W.min.z:1,we=W.min.x,He=W.min.y,$e=W.isBox3?W.min.z:0;else{let Rt=Math.pow(2,-k);ve=Math.floor(Mt.width*Rt),pe=Math.floor(Mt.height*Rt),v.isDataArrayTexture?be=Mt.depth:v.isData3DTexture?be=Math.floor(Mt.depth*Rt):be=1,we=0,He=0,$e=0}z!==null?(Ee=z.x,ot=z.y,Pt=z.z):(Ee=0,ot=0,Pt=0);let ft=ue.convert(P.format),Kt=ue.convert(P.type),_e;P.isData3DTexture?(X.setTexture3D(P,0),_e=N.TEXTURE_3D):P.isDataArrayTexture||P.isCompressedArrayTexture?(X.setTexture2DArray(P,0),_e=N.TEXTURE_2D_ARRAY):(X.setTexture2D(P,0),_e=N.TEXTURE_2D),x.activeTexture(N.TEXTURE0),x.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,P.flipY),x.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),x.pixelStorei(N.UNPACK_ALIGNMENT,P.unpackAlignment);let sn=x.getParameter(N.UNPACK_ROW_LENGTH),et=x.getParameter(N.UNPACK_IMAGE_HEIGHT),Mn=x.getParameter(N.UNPACK_SKIP_PIXELS),Vn=x.getParameter(N.UNPACK_SKIP_ROWS),bi=x.getParameter(N.UNPACK_SKIP_IMAGES);x.pixelStorei(N.UNPACK_ROW_LENGTH,Mt.width),x.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Mt.height),x.pixelStorei(N.UNPACK_SKIP_PIXELS,we),x.pixelStorei(N.UNPACK_SKIP_ROWS,He),x.pixelStorei(N.UNPACK_SKIP_IMAGES,$e);let _s=v.isDataArrayTexture||v.isData3DTexture,ut=P.isDataArrayTexture||P.isData3DTexture;if(v.isDepthTexture){let Rt=V.get(v),Ei=V.get(P),xt=V.get(Rt.__renderTarget),Ti=V.get(Ei.__renderTarget);x.bindFramebuffer(N.READ_FRAMEBUFFER,xt.__webglFramebuffer),x.bindFramebuffer(N.DRAW_FRAMEBUFFER,Ti.__webglFramebuffer);for(let ys=0;ys<be;ys++)_s&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,V.get(v).__webglTexture,k,$e+ys),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,V.get(P).__webglTexture,me,Pt+ys)),N.blitFramebuffer(we,He,ve,pe,Ee,ot,ve,pe,N.DEPTH_BUFFER_BIT,N.NEAREST);x.bindFramebuffer(N.READ_FRAMEBUFFER,null),x.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(k!==0||v.isRenderTargetTexture||V.has(v)){let Rt=V.get(v),Ei=V.get(P);x.bindFramebuffer(N.READ_FRAMEBUFFER,L),x.bindFramebuffer(N.DRAW_FRAMEBUFFER,G);for(let xt=0;xt<be;xt++)_s?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Rt.__webglTexture,k,$e+xt):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Rt.__webglTexture,k),ut?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ei.__webglTexture,me,Pt+xt):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Ei.__webglTexture,me),k!==0?N.blitFramebuffer(we,He,ve,pe,Ee,ot,ve,pe,N.COLOR_BUFFER_BIT,N.NEAREST):ut?N.copyTexSubImage3D(_e,me,Ee,ot,Pt+xt,we,He,ve,pe):N.copyTexSubImage2D(_e,me,Ee,ot,we,He,ve,pe);x.bindFramebuffer(N.READ_FRAMEBUFFER,null),x.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else ut?v.isDataTexture||v.isData3DTexture?N.texSubImage3D(_e,me,Ee,ot,Pt,ve,pe,be,ft,Kt,Mt.data):P.isCompressedArrayTexture?N.compressedTexSubImage3D(_e,me,Ee,ot,Pt,ve,pe,be,ft,Mt.data):N.texSubImage3D(_e,me,Ee,ot,Pt,ve,pe,be,ft,Kt,Mt):v.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,me,Ee,ot,ve,pe,ft,Kt,Mt.data):v.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,me,Ee,ot,Mt.width,Mt.height,ft,Mt.data):N.texSubImage2D(N.TEXTURE_2D,me,Ee,ot,ve,pe,ft,Kt,Mt);x.pixelStorei(N.UNPACK_ROW_LENGTH,sn),x.pixelStorei(N.UNPACK_IMAGE_HEIGHT,et),x.pixelStorei(N.UNPACK_SKIP_PIXELS,Mn),x.pixelStorei(N.UNPACK_SKIP_ROWS,Vn),x.pixelStorei(N.UNPACK_SKIP_IMAGES,bi),me===0&&P.generateMipmaps&&N.generateMipmap(_e),x.unbindTexture()},this.initRenderTarget=function(v){V.get(v).__webglFramebuffer===void 0&&X.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?X.setTextureCube(v,0):v.isData3DTexture?X.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?X.setTexture2DArray(v,0):X.setTexture2D(v,0),x.unbindTexture()},this.resetState=function(){Z=0,J=0,re=null,x.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ln}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Je._getDrawingBufferColorSpace(e),t.unpackColorSpace=Je._getUnpackColorSpace()}};var rr=[["missionSec","Tiempo de misi\xF3n (s)","Tiempos y vida",20,300,1,90,60,50,"Segundos reales para abordar en la Puerta 27."],["lifeSec","Vida de las c\xE1psulas (s)","Tiempos y vida",5,120,1,45,30,20,"Segundos reales hasta que explotan."],["lifeMax","Tope de vida (s)","Tiempos y vida",10,180,1,60,45,32,"M\xE1ximo al que se puede alargar la vida."],["pickupLife","Anti\xE1cido: +s de vida","Tiempos y vida",0,30,.5,8,7,7,"Segundos de vida que da cada \u{1F48A} del suelo."],["pickupTime","Reloj dorado: +s de misi\xF3n","Tiempos y vida",0,30,.5,6,5,4,"Segundos de misi\xF3n que da cada \u23F1."],["pillLife","Pastilla: +s de vida","Tiempos y vida",0,40,.5,12,10,8,"Segundos que da la pastilla (Q)."],["coffeeLife","Caf\xE9: +s de vida","Tiempos y vida",0,30,.5,5,4,3,""],["adrenLife","Adrenalina al zafarte: +s","Tiempos y vida",0,30,.5,4,4,3,"Vida que ganas al soltarte de un agarr\xF3n."],["hiddenDrain","Desgaste escondido (\xD7)","Tiempos y vida",.1,1,.05,.5,.55,.6,"Cu\xE1nto se desgastan las c\xE1psulas dentro de una taquilla."],["actionTime","Coste de tr\xE1mites (s)","Tiempos y vida",.1,2,.05,.5,.6,.7,'Segundos reales por cada "minuto" de las acciones de men\xFA.'],["walk","Velocidad al caminar (m/s)","Jugador",2,8,.1,4.2,4,4,""],["run","Velocidad al correr (m/s)","Jugador",4,12,.1,7.4,7.2,7.2,""],["crouchSpeed","Velocidad agachado (m/s)","Jugador",1,5,.1,2.2,2.1,2.1,""],["hp","Salud m\xE1xima","Jugador",25,400,5,150,100,100,""],["armedPct","Polic\xEDas armados (%)","Polic\xEDa",0,100,5,15,60,100,"Porcentaje de polic\xEDas con pistola."],["bulletDmg","Da\xF1o de cada bala","Polic\xEDa",5,100,1,20,25,34,""],["chaseHeat","Sospecha que activa la persecuci\xF3n","Polic\xEDa",5,100,1,45,30,20,"Menos = te persiguen antes."],["chaseSpeed","Velocidad de persecuci\xF3n (m/s)","Polic\xEDa",2,10,.1,4.4,5,5.8,""],["chaseSpeedHot","Persecuci\xF3n con sospecha > 70 (m/s)","Polic\xEDa",2,12,.1,5.2,5.8,6.6,""],["patrolMul","Velocidad de patrulla (\xD7)","Polic\xEDa",.5,2,.05,.9,1,1.15,""],["visionMul","Alcance de visi\xF3n (\xD7)","Polic\xEDa",.5,2,.05,.85,1,1.2,""],["shootWarn","Aviso antes de disparar (s)","Polic\xEDa",0,5,.1,1.8,1.2,.6,""],["fireMin","Cadencia de disparo m\xEDn (s)","Polic\xEDa",.2,4,.1,1.4,.9,.6,""],["fireMax","Cadencia de disparo m\xE1x (s)","Polic\xEDa",.2,5,.1,2,1.4,1,""],["hitBase","Precisi\xF3n base","Polic\xEDa",.1,1,.01,.5,.62,.75,"Probabilidad base de acertar (baja con la distancia)."],["shootRange","Alcance de disparo (m)","Polic\xEDa",8,40,1,20,24,28,""],["radioAll","Radio: alertan a todos","Polic\xEDa",0,1,1,0,1,1,"Al verte, todos los polic\xEDas reciben tu posici\xF3n."],["alertRadius","Radio de alerta sin radio (m)","Polic\xEDa",5,60,1,14,18,26,""],["flank","Flanqueo y cierre de rutas","Polic\xEDa",0,1,1,0,1,1,"Parte de los perseguidores te corta el camino por delante."],["droneOn","Dron con foco","Polic\xEDa",0,1,1,0,1,1,""],["droneSpeed","Velocidad del dron (m/s)","Polic\xEDa",2,14,.5,5,6,7.5,""],["dogRadius","Radio de olfato base (m)","Perros",4,40,1,12,17,22,""],["dogRadiusSmell","Radio extra por intensidad (m)","Perros",0,60,1,20,26,32,"Se suma seg\xFAn lo que huela tu mercanc\xEDa."],["dogRate","Velocidad de detecci\xF3n (\xD7)","Perros",.2,5,.05,1.1,1.6,2.2,"M\xE1s = te detectan antes."],["dogSpeed","Velocidad de persecuci\xF3n (m/s)","Perros",3,12,.1,6.8,7.6,8.4,""],["stunSec","Aturdimiento tras zafarte (s)","Perros",1,15,.5,6,5,4,""],["shiftSec","Cambio de pasillos cada (s, 0 = nunca)","Laberinto",0,120,1,30,18,10,"Los huecos de las paredes se mueven."],["shiftWarn","Aviso previo del cambio (s)","Laberinto",0,8,.5,3,2.5,1.5,""],["gapWidth","Ancho de los huecos (m)","Laberinto",6,22,1,14,12,10,""],["doorsClose","Puertas que se cierran a tu espalda","Laberinto",0,1,1,1,1,1,"Si te devuelves, esa entrada ya no sirve."],["laneClose","Bloqueo rotativo de carriles","Laberinto",0,1,1,1,1,1,"Cada cambio cierra una entrada del control."],["gps","Flecha de ruta (GPS)","Ayudas y objetos",0,1,1,1,1,0,""],["startSmoke","Bombas de humo iniciales","Ayudas y objetos",0,9,1,2,1,1,""],["startDecoy","Se\xF1uelos iniciales","Ayudas y objetos",0,9,1,2,1,1,""],["startEmp","Pulsos EMP iniciales","Ayudas y objetos",0,9,1,1,1,0,""],["startDogSpray","Sprays anti-perros iniciales","Ayudas y objetos",0,9,1,1,1,0,""],["itemDur","Duraci\xF3n de humo/spray/EMP (s)","Ayudas y objetos",2,30,1,8,7,6,""],["payoutMul","Multiplicador de ganancias","Econom\xEDa",.1,10,.1,1,1.5,2.2,"Dinero permanente que ganas por partida."]],Dd=new Set(["radioAll","flank","droneOn","doorsClose","laneClose","gps"]),yi=["novato","dificil","experto"],Wi={novato:"Novato",dificil:"Dif\xEDcil",experto:"Experto"},sh={novato:"C\xE1psulas 45 s \xB7 misi\xF3n 90 s \xB7 pocos armados \xB7 pasillos cambian despacio.",dificil:"C\xE1psulas 30 s \xB7 misi\xF3n 60 s \xB7 mayor\xEDa armada \xB7 radio, flanqueo y dron.",experto:"C\xE1psulas 20 s \xB7 misi\xF3n 50 s \xB7 todos armados \xB7 sin flecha de ruta \xB7 cambios cada 10 s."},Nd="simulator.cfg.v1",d_=()=>{try{return JSON.parse(localStorage.getItem(Nd))||{}}catch{return{}}},We=Object.assign({diff:"dificil",quality:"auto",pass:"admin"},d_());We.over=Object.assign({novato:{},dificil:{},experto:{}},We.over||{});try{let n=new URLSearchParams(location.search).get("q");["low","med","high"].includes(n)&&(We.quality=n)}catch{}var hl=()=>{try{localStorage.setItem(Nd,JSON.stringify(We))}catch{}},se={};function f_(n){let e=yi.indexOf(n),t={};return rr.forEach(i=>t[i[0]]=i[6+e]),t}function Gi(n){yi.includes(n)||(n="dificil"),We.diff=n;for(let e in se)delete se[e];Object.assign(se,f_(n),We.over[n]||{}),se.diff=n,hl()}Gi(We.diff);var Xi=(()=>{try{return matchMedia("(pointer:coarse)").matches||/Android|iPhone|iPad|Mobile/i.test(navigator.userAgent)}catch{return!1}})();function Ud(){return We.quality==="auto"?Xi?"med":"high":We.quality}var ih=null,Fd=n=>{ih=n};function p_(n,e,t){let i=typeof e=="boolean"?e?1:0:parseFloat(e);if(!isFinite(i))return null;i=Math.min(t[4],Math.max(t[3],i));let s=t[6+yi.indexOf(We.diff)];return i===s?delete We.over[We.diff][n]:We.over[We.diff][n]=i,se[n]=i,hl(),i}function Od(){let n=document.getElementById("admin");if(n.className="overlay on",sessionStorage.getItem("simAdmin")!=="1"){n.innerHTML=`<div class="adm"><h2>\u2699 ADMINISTRACI\xD3N</h2><p>Introduce la clave de administrador.</p>
      <input id="admPass" type="password" placeholder="Clave" autocomplete="off"><div id="admMsg" class="msg"></div>
      <div class="row"><button id="admOk">Entrar</button><button id="admX">Cancelar</button></div>
      <p class="dim">Nota: en una p\xE1gina p\xFAblica la clave solo evita abrir el panel por error; no es seguridad real.</p></div>`;let e=()=>{document.getElementById("admPass").value===We.pass?(sessionStorage.setItem("simAdmin","1"),Vi(n)):document.getElementById("admMsg").textContent="Clave incorrecta."};document.getElementById("admOk").onclick=e,document.getElementById("admX").onclick=()=>Bd(n),document.getElementById("admPass").addEventListener("keydown",t=>{t.key==="Enter"&&e(),t.stopPropagation()}),document.getElementById("admPass").focus();return}Vi(n)}function Bd(n){n.className="overlay",n.innerHTML="",ih&&ih()}function Vi(n){let e=[...new Set(rr.map(r=>r[2]))],t=yi.indexOf(We.diff),i=r=>{let a=r[0],o=se[a],l=r[6+t],c=o!==l,h=Dd.has(a)?`<input type="checkbox" data-k="${a}" ${o?"checked":""}>`:`<input type="number" data-k="${a}" min="${r[3]}" max="${r[4]}" step="${r[5]}" value="${o}">`;return`<div class="prm ${c?"chg":""}" title="${r[9]||""}"><label>${r[1]}</label>${h}<span class="def">def: ${Dd.has(a)?l?"s\xED":"no":l}</span><button class="rs" data-r="${a}" ${c?"":"disabled"}>\u21BA</button></div>`};n.innerHTML=`<div class="adm wide">
    <div class="admHead"><h2>\u2699 PANEL DE ADMINISTRACI\xD3N</h2><button id="admClose">\u2715 Cerrar</button></div>
    <div class="tabs">${yi.map(r=>`<button data-d="${r}" class="${We.diff===r?"on":""}">${Wi[r]}</button>`).join("")}</div>
    <p class="dim">${sh[We.diff]} Los cambios se aplican al instante y se guardan en este navegador.</p>
    <div class="admBody">${e.map(r=>`<details open><summary>${r}</summary>${rr.filter(a=>a[2]===r).map(i).join("")}</details>`).join("")}
      <details open><summary>Gr\xE1ficos y sistema</summary>
        <div class="prm"><label>Calidad gr\xE1fica</label><select id="admQ">${["auto","low","med","high"].map(r=>`<option value="${r}" ${We.quality===r?"selected":""}>${{auto:"Autom\xE1tica",low:"Baja",med:"Media",high:"Alta"}[r]}</option>`).join("")}</select><span class="def">se aplica al recargar</span><span></span></div>
        <div class="prm"><label>Nueva clave de administrador</label><input id="admNewPass" type="text" placeholder="(sin cambios)"><button id="admSetPass">Guardar</button><span></span></div>
      </details></div>
    <div class="row"><button id="admExp">\u2B07 Exportar JSON</button><button id="admImp">\u2B06 Importar JSON</button><button id="admRst">Restablecer este modo</button><button id="admRstAll">Restablecer todo</button><button id="admReload">\u21BB Aplicar y recargar</button></div>
    <textarea id="admJson" placeholder="Pega aqu\xED un JSON exportado y pulsa Importar" style="display:none"></textarea></div>`,n.querySelectorAll("input[data-k]").forEach(r=>{r.addEventListener("keydown",a=>a.stopPropagation()),r.onchange=()=>{let a=rr.find(o=>o[0]===r.dataset.k);p_(a[0],r.type==="checkbox"?r.checked:r.value,a),Vi(n)}}),n.querySelectorAll("button[data-r]").forEach(r=>r.onclick=()=>{delete We.over[We.diff][r.dataset.r],Gi(We.diff),Vi(n)}),n.querySelectorAll(".tabs button").forEach(r=>r.onclick=()=>{Gi(r.dataset.d),Vi(n)}),document.getElementById("admClose").onclick=()=>Bd(n),document.getElementById("admQ").onchange=r=>{We.quality=r.target.value,hl()},document.getElementById("admSetPass").onclick=()=>{let r=document.getElementById("admNewPass").value.trim();r&&(We.pass=r,hl(),document.getElementById("admNewPass").value="",document.getElementById("admNewPass").placeholder="Clave actualizada")},document.getElementById("admRst").onclick=()=>{We.over[We.diff]={},Gi(We.diff),Vi(n)},document.getElementById("admRstAll").onclick=()=>{confirm("\xBFRestablecer TODOS los modos a sus valores originales?")&&(We.over={novato:{},dificil:{},experto:{}},Gi(We.diff),Vi(n))},document.getElementById("admReload").onclick=()=>location.reload();let s=document.getElementById("admJson");document.getElementById("admExp").onclick=()=>{let r=JSON.stringify({diff:We.diff,quality:We.quality,over:We.over},null,2);s.style.display="block",s.value=r;try{let a=document.createElement("a");a.href=URL.createObjectURL(new Blob([r],{type:"application/json"})),a.download="simula-tor-config.json",a.click()}catch{}},document.getElementById("admImp").onclick=()=>{if(s.style.display==="none"){s.style.display="block",s.value="",s.focus();return}try{let r=JSON.parse(s.value),a=new Set(rr.map(o=>o[0]));for(let o of yi)if(!(!r.over||!r.over[o])){We.over[o]={};for(let[l,c]of Object.entries(r.over[o])){let h=rr.find(d=>d[0]===l);h&&isFinite(c)&&(We.over[o][l]=Math.min(h[4],Math.max(h[3],+c)))}}["auto","low","med","high"].includes(r.quality)&&(We.quality=r.quality),Gi(yi.includes(r.diff)?r.diff:We.diff),Vi(n)}catch(r){s.value="JSON no v\xE1lido: "+r.message}},n.querySelector(".adm").addEventListener("keydown",r=>r.stopPropagation())}var zd="simulator.meta.v1",m_=()=>{try{return JSON.parse(localStorage.getItem(zd))||{}}catch{return{}}},At=Object.assign({money:0,up:{},rec:{},runs:0,wins:0},m_());At.up=At.up||{};At.rec=At.rec||{};var ea=()=>{try{localStorage.setItem(zd,JSON.stringify(At))}catch{}},rh=[{id:"life",name:"Est\xF3mago de acero",desc:"+2 s de vida de las c\xE1psulas por nivel.",max:5,cost:n=>200+150*n},{id:"hp",name:"Chaleco antibalas",desc:"+25 de salud por nivel.",max:4,cost:n=>250+200*n},{id:"bag",name:"Bolsa t\xE1ctica",desc:"+1 bomba de humo y +1 se\xF1uelo por nivel.",max:3,cost:n=>300+250*n},{id:"shoes",name:"Zapatillas ligeras",desc:"+0,25 m/s al caminar y correr por nivel.",max:4,cost:n=>200+175*n}],ii=n=>At.up[n]||0;function kd(n){let e=rh.find(i=>i.id===n),t=ii(n);return!e||t>=e.max||At.money<e.cost(t)?!1:(At.money-=e.cost(t),At.up[n]=t+1,ea(),!0)}function Hd(n){At.money+=Math.max(0,Math.round(n)),ea()}function Vd(n){return function(){n|=0,n=n+1831565813|0;let e=Math.imul(n^n>>>15,1|n);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function ul(){let n=new Date;return n.getFullYear()*1e4+(n.getMonth()+1)*100+n.getDate()}function Gd(n,e,t){let i=t?"daily-"+e.seed+"-"+n:n,s=At.rec[i]=At.rec[i]||[];return s.push(e),s.sort((r,a)=>a.score-r.score),At.rec[i]=s.slice(0,5),ea(),At.rec[i][0]===e}var ah=(n,e,t)=>At.rec[e?"daily-"+t+"-"+n:n]||[];var On={x:0,z:0,mag:0},Wd=[["Digit1","\u{1F32B}\uFE0F","smoke"],["Digit2","\u{1F4E3}","decoy"],["Digit3","\u26A1","emp"],["Digit4","\u{1F415}","dogspray"]];function Xd({keys:n,pressed:e,cam:t,canvas:i,isTouch:s,clamp:r}){s&&document.body.classList.add("touch");let a=new Map;i.addEventListener("pointerdown",_=>{a.set(_.pointerId,{x:_.clientX,y:_.clientY}),_.pointerType==="touch"&&document.body.classList.add("touch")}),addEventListener("pointermove",_=>{let m=a.get(_.pointerId);if(!m)return;let f=_.clientX-m.x,S=_.clientY-m.y;m.x=_.clientX,m.y=_.clientY;let R=_.pointerType==="touch"?.0075:.006;t.yaw-=f*R,t.pitch=r(t.pitch+S*(R*.65),.15,1.15)});let o=_=>a.delete(_.pointerId);addEventListener("pointerup",o),addEventListener("pointercancel",o),i.addEventListener("wheel",_=>{t.dist=r(t.dist+_.deltaY*.01,5,16)});let l=document.getElementById("touch");l.innerHTML=`
    <div id="joy"><div id="knob"></div></div>
    <div id="tbtns">
      <button class="tb" data-k="Space" style="grid-area:a">\u2912<small>Saltar</small></button>
      <button class="tb" data-k="KeyE" id="tAct" style="grid-area:b">\u270B<small>Actuar</small></button>
      <button class="tb" data-k="KeyH" id="tHide" style="grid-area:c">\u{1F648}<small>Esconder</small></button>
      <button class="tb" data-k="KeyC" style="grid-area:d">\u21E9<small>Agachar</small></button>
      <button class="tb" data-k="KeyQ" style="grid-area:e">\u{1F48A}<small>Pastilla</small></button>
    </div>
    <div id="titems">${Wd.map(([_,m,f])=>`<button class="tb it" data-k="${_}" data-i="${f}">${m}<b id="ti-${f}">0</b></button>`).join("")}</div>`,l.querySelectorAll("button[data-k]").forEach(_=>{let m=_.dataset.k;_.addEventListener("pointerdown",S=>{S.preventDefault(),S.stopPropagation(),n[m]=!0,e[m]=!0,_.classList.add("down");try{_.setPointerCapture(S.pointerId)}catch{}});let f=()=>{n[m]=!1,_.classList.remove("down")};_.addEventListener("pointerup",f),_.addEventListener("pointercancel",f),_.addEventListener("pointerleave",f)});let c=document.getElementById("joy"),h=document.getElementById("knob"),d=null,u=56,p=_=>{let m=c.getBoundingClientRect(),f=m.left+m.width/2,S=m.top+m.height/2;u=m.width/2;let R=_.clientX-f,M=_.clientY-S,b=Math.hypot(R,M)||1,E=Math.min(1,b/u);On.x=R/b*E,On.z=M/b*E,On.mag=E,h.style.transform=`translate(${R/b*E*u*.6}px,${M/b*E*u*.6}px)`};c.addEventListener("pointerdown",_=>{_.preventDefault(),_.stopPropagation(),d=_.pointerId;try{c.setPointerCapture(d)}catch{}p(_)}),c.addEventListener("pointermove",_=>{_.pointerId===d&&p(_)});let g=_=>{_.pointerId===d&&(d=null,On.x=On.z=On.mag=0,h.style.transform="translate(0,0)")};c.addEventListener("pointerup",g),c.addEventListener("pointercancel",g),document.addEventListener("contextmenu",_=>_.preventDefault()),document.addEventListener("gesturestart",_=>_.preventDefault())}function qd(n,e){let t=(r,a)=>{let o=document.getElementById(r);o&&o.textContent!==String(a)&&(o.textContent=a)};n&&Wd.forEach(([,,r])=>t("ti-"+r,n.inv[r]||0));let i=document.getElementById("tAct"),s=document.getElementById("tHide");i&&i.classList.toggle("avail",!!e.act),s&&s.classList.toggle("avail",!!e.hide)}async function Yd(){try{let n=document.documentElement;n.requestFullscreen&&!document.fullscreenElement&&await n.requestFullscreen({navigationUI:"hide"}),screen.orientation&&screen.orientation.lock&&await screen.orientation.lock("landscape")}catch{}}var Se=n=>document.getElementById(n),vt=(n,e)=>n+Math.random()*(e-n),cn=(n,e,t)=>Math.max(e,Math.min(t,n)),of=n=>{for(;n>Math.PI;)n-=2*Math.PI;for(;n<-Math.PI;)n+=2*Math.PI;return n},ri=(n,e,t)=>n+of(e-n)*t,$d=n=>new Promise(e=>setTimeout(e,n)),Sl=()=>se.lifeSec+ii("life")*2,lf=()=>se.lifeMax+ii("life")*2,cf={coca:{id:"coca",name:"Coca\xEDna pura",weight:1,smell:.5,profit:9e3,acid:1.3,desc:"Ligera, valiosa, olor moderado. El l\xE1tex sufre con los jugos g\xE1stricos."},hero:{id:"hero",name:"Hero\xEDna",weight:1,smell:.35,profit:7e3,acid:1,desc:"Poco olor y c\xE1psulas resistentes. Paga menos, pero es discreta."},mari:{id:"mari",name:"Marihuana prensada",weight:3,smell:.9,profit:2500,acid:.8,desc:"Pesa, huele a kil\xF3metros y paga poco. Los perros te esperan con ilusi\xF3n."}},hf={capsules:{id:"capsules",name:"C\xE1psulas ingeridas",stomach:1.3,desc:"Los perros casi no huelen, pero el esc\xE1ner te ve por dentro y el est\xF3mago es un reloj de arena."},tape:{id:"tape",name:"Pegado al cuerpo",stomach:.6,desc:"Los perros lo huelen y el esc\xE1ner lo detecta a medias."},bag:{id:"bag",name:"Doble fondo en la maleta",stomach:.6,desc:"Tu cuerpo va limpio, pero la maleta te delata ante rayos X y perros."}},uf={exec:{id:"exec",name:"Ejecutivo de negocios",cash:400,heat:5,quiz:-.06,lie:.15,nerv:1,lost:!1,look:{shirt:1843760,pants:1843760,hair:2103828,tie:!0},desc:"Traje y malet\xEDn: te creen m\xE1s. Entras con efectivo."},tourist:{id:"tourist",name:"Turista despistado",cash:250,heat:15,quiz:.02,lie:.05,nerv:1,lost:!0,look:{shirt:16742973,pants:14931098,hair:7031339,hat:15786144},desc:"Camisa hawaiana y mapa al rev\xE9s. Nadie sospecha de un in\xFAtil."},student:{id:"student",name:"Estudiante",cash:120,heat:10,quiz:.06,lie:-.05,nerv:.5,lost:!1,look:{shirt:3890139,pants:3094084,hair:1380621,pack:!0},desc:'Poco dinero y mucha sospecha, pero tus nervios pasan por "estr\xE9s".'}},g_=[{id:"pills",name:"Pastilla antimotilidad",cost:50,desc:"Suma segundos de vida y frena el desgaste unos segundos. (Q para tomarla)"},{id:"perfume",name:"Spray anti-olor",cost:40,desc:"Los perros huelen la mitad. (R para usarlo)"},{id:"clothes",name:"Ropa de repuesto",cost:70,desc:"Cambia tu apariencia en un ba\xF1o y baja la sospecha."},{id:"contact",name:"Contacto de c\xF3mplice",cost:120,desc:'Alguien en los ba\xF1os cambia tu maleta por otra "m\xE1s amable".'}],yh={body:{title:"Esc\xE1ner corporal",hint:"Mant\xE9n pulsado (rat\xF3n o ESPACIO) y NO respires hasta que termine el barrido."},dog:{title:"Perro K9",hint:"Sincroniza tu pulso: toca (clic o ESPACIO) cuando el anillo llegue al borde. 5 latidos."},quiz:{title:"Guardia",hint:"Seca las gotas de sudor antes de que se note. 5 gotas."},cramp:{title:"\xA1Retortij\xF3n!",hint:"\xA1Aprieta! Toca r\xE1pido (clic o ESPACIO) 12 veces para contener las c\xE1psulas."},struggle:{title:"\xA1Te agarraron!",hint:"\xA1ZAFATE! Toca como loco (clic o ESPACIO) antes de que se acabe el tiempo."}},oh={body:{pass:'El agente del esc\xE1ner mira tu silueta con aburrimiento profesional. "Siguiente."',fail:"La pantalla muestra tu abdomen como un collar de perlas. El operador sonr\xEDe y pulsa un bot\xF3n rojo."},bag:{pass:"Tu equipaje pasa por rayos X entre un osito de peluche y un ukelele. Nada raro. Eso crees t\xFA.",fail:'En el monitor, tu maleta tiene un doble fondo con un contorno que ning\xFAn ukelele tiene. "\xBFMe abre esto, por favor?"'},quiz:{pass:"El guardia te mira de arriba abajo... y decide que no vale la pena molestarse."}},A=null,K={mode:"title",busy:!1,t:0,dlgKey:null,paused:!1,daily:!1,seed:1};function df(){return{time:se.missionSec,life:Sl(),hp:se.hp+ii("hp")*25,playT:0,picked:0,empT:0,radioOff:0,dogOff:0,flankPt:null,heat:0,integrity:100,pillLeft:0,cash:0,lastBeep:99,hitFlash:0,inv:{pills:0,perfume:0,perfumeOn:!1,clothes:0,contact:0,smoke:se.startSmoke+ii("bag"),decoy:se.startDecoy+ii("bag"),emp:se.startEmp,dogspray:se.startDogSpray},cargo:null,method:null,profile:null,bagSwapped:!1,disguised:0,camsOff:!1,checkedIn:!1,passed:!1,done:{},sniff:0,crampT:vt(8,14),over:!1,lastKnown:null,lastKnownDog:null,invuln:0,compromised:!1}}var Zd=null,Jd=!1,Th=()=>Zd||(Zd=new(window.AudioContext||window.webkitAudioContext));function Qe(n=880,e=.1,t="square",i=.05){try{let s=Th(),r=s.createOscillator(),a=s.createGain();r.type=t,r.frequency.value=n,a.gain.value=i,a.gain.exponentialRampToValueAtTime(1e-4,s.currentTime+e),r.connect(a),a.connect(s.destination),r.start(),r.stop(s.currentTime+e)}catch{}}function Si(n=1,e=.3,t=1200){try{let i=Th(),s=i.sampleRate*n,r=i.createBuffer(1,s,i.sampleRate),a=r.getChannelData(0);for(let h=0;h<s;h++)a[h]=(Math.random()*2-1)*(1-h/s);let o=i.createBufferSource(),l=i.createGain(),c=i.createBiquadFilter();c.type="lowpass",c.frequency.value=t,l.gain.value=e,o.buffer=r,o.connect(c),c.connect(l),l.connect(i.destination),o.start()}catch{}}function x_(){if(!Jd){Jd=!0;try{let n=Th(),e=n.sampleRate*2,t=n.createBuffer(1,e,n.sampleRate),i=t.getChannelData(0);for(let o=0;o<e;o++)i[o]=Math.random()*2-1;let s=n.createBufferSource(),r=n.createBiquadFilter(),a=n.createGain();s.buffer=t,s.loop=!0,r.type="lowpass",r.frequency.value=380,a.gain.value=.05,s.connect(r),r.connect(a),a.connect(n.destination),s.start()}catch{}}}var Yi=Ud(),kn=new ol({antialias:Yi==="high",powerPreference:"high-performance"});kn.setPixelRatio(Math.min(devicePixelRatio||1,{low:1,med:1.5,high:2}[Yi]));kn.setSize(innerWidth,innerHeight);kn.shadowMap.enabled=Yi!=="low";kn.shadowMap.type=ss;Se("game").appendChild(kn.domElement);var rt=new Cr,qi=new en(62,innerWidth/innerHeight,.1,400);{let n=document.createElement("canvas");n.width=2,n.height=256;let e=n.getContext("2d"),t=e.createLinearGradient(0,0,0,256);t.addColorStop(0,"#1d3a6b"),t.addColorStop(.55,"#d98a5f"),t.addColorStop(1,"#f4c27a"),e.fillStyle=t,e.fillRect(0,0,2,256);let i=new Kn(n);i.colorSpace=Yt,rt.background=i,rt.fog=new Rr(13605494,90,260)}rt.add(new kr(14674687,5917252,1.25));var yn=new Vr(16767400,2.3);yn.position.set(-40,70,50);yn.castShadow=!0;yn.shadow.mapSize.set(Yi==="high"?2048:1024,Yi==="high"?2048:1024);yn.castShadow=Yi!=="low";Object.assign(yn.shadow.camera,{left:-70,right:70,top:110,bottom:-110,near:1,far:220});yn.shadow.bias=-5e-4;rt.add(yn,yn.target);addEventListener("resize",()=>{kn.setSize(innerWidth,innerHeight),qi.aspect=innerWidth/innerHeight,qi.updateProjectionMatrix()});var __={},ln=(n,e)=>e?new Wt({color:n,roughness:.85,...e}):__[n]||=new Wt({color:n,roughness:.85}),ai=[],bl=[],El=[],wh=[],vn=[],dr=[],Ah=[],ff=[],vh=[],Tl=[],Rh=[];function Zt(n,e,t,i,s,r,a={}){let o=new Le(new _t(t-n,s,i-e),a.mat?ln(r,a.mat):ln(r));if(o.position.set((n+t)/2,(a.y0||0)+s/2,(e+i)/2),o.castShadow=a.shadow!==!1,o.receiveShadow=!0,rt.add(o),a.coll!==!1){let l={x0:n,x1:t,z0:e,z1:i,h:s};ai.push(l),Rh.push(l),a.los!==!1&&bl.push(l)}return o}function qt(n,e,t,i,s,r,a=0,o){return Zt(n,e,t,i,s,r,{coll:!1,y0:a,mat:o})}function nn(n,e,t,i,s=9,r="#ffffff",a="rgba(10,14,20,.85)"){let o=document.createElement("canvas");o.width=512,o.height=128;let l=o.getContext("2d");l.fillStyle=a,l.fillRect(0,0,512,128),l.strokeStyle=r,l.lineWidth=6,l.strokeRect(3,3,506,122),l.fillStyle=r,l.font='bold 52px "Segoe UI", Arial',l.textAlign="center",l.textBaseline="middle",l.fillText(n,256,68);let c=new Kn(o);c.colorSpace=Yt;let h=new xi(new Jn({map:c,transparent:!0}));return h.scale.set(s*.6,s*.15,1),h.position.set(e,t,i),rt.add(h),h}function y_(n,e,t,i,s,r=0){let a=0,o=1,l=t-n,c=i-e;for(let[h,d,u,p]of[[n,l,s.x0-r,s.x1+r],[e,c,s.z0-r,s.z1+r]])if(Math.abs(d)<1e-9){if(h<u||h>p)return!1}else{let g=(u-h)/d,_=(p-h)/d;if(g>_&&([g,_]=[_,g]),a=Math.max(a,g),o=Math.min(o,_),a>o)return!1}return!0}var wl=(n,e,t,i,s,r=0)=>!s.some(a=>y_(n,e,t,i,a,r));function Ch(n){let e=new Dt,t=S=>new Wt({color:S,roughness:.8}),i=t(n.shirt),s=t(n.pants),r=t(n.skin??14726282),a=t(n.hair??2236962),o=(S,R,M,b,E,I,y,T=e)=>{let C=new Le(new _t(S,R,M),b);return C.position.set(E,I,y),C.castShadow=!0,T.add(C),C},l=o(.52,.66,.28,i,0,1.13,0),c=o(.3,.3,.3,r,0,1.64,0);o(.32,.1,.32,a,0,1.8,0);let h=o(.4,.09,.4,t(n.hat??0),0,1.86,0);h.visible=!!n.hat;let d=o(.28,.06,.04,t(328965),0,1.66,.16);d.visible=!1;let u=S=>{let R=new Dt;return R.position.set(S,.8,0),e.add(R),o(.19,.8,.21,s,0,-.4,0,R),o(.2,.1,.27,t(1381653),0,-.78,.03,R),R},p=S=>{let R=new Dt;return R.position.set(S,1.44,0),e.add(R),o(.15,.6,.17,i,0,-.3,0,R),o(.14,.12,.15,r,0,-.64,0,R),R},g=u(-.13),_=u(.13),m=p(-.35),f=p(.35);if(n.tie&&o(.08,.4,.02,t(11148830),0,1.2,.15),n.vest&&o(.54,.3,.3,t(15263976),0,1.25,0),n.capCol&&(o(.34,.1,.34,t(n.capCol),0,1.84,0),o(.3,.03,.16,t(n.capCol),0,1.78,.24)),n.pack&&o(.4,.5,.18,t(12597547),0,1.15,-.23),n.bag){let S=o(.1,.42,.5,t(3813162),0,-.72,.1,f);o(.14,.05,.3,t(9075306),0,-.5,.1,f),S.name="bag"}return e.userData={legL:g,legR:_,armL:m,armR:f,torso:l,head:c,shirtM:i,pantsM:s,hat:h,shades:d,ph:Math.random()*6,o:n},e}function ar(n,e,t,i){let s=n.userData;s.ph+=e*t*2.1;let r=cn(e/4,0,1.4)*.85,a=Math.sin(s.ph)*r;s.legL.rotation.x=a,s.legR.rotation.x=-a,s.armL.rotation.x=-a*.9,s.armR.rotation.x=s.o.bag?-.15:a*.9;let o=i?.18:e>.2?.06:0;return s.torso.rotation.x+=(o-s.torso.rotation.x)*Math.min(1,t*8),s.torso.position.y=1.13+Math.abs(Math.sin(s.ph))*.03*(e>.2?1:0)+(e<.2?Math.sin(K.t*2+s.ph)*.004:0),s.head.position.y=s.torso.position.y+.51,Math.floor(s.ph/Math.PI)}function v_(){let n=new Dt,e=l=>new Wt({color:l,roughness:.9}),t=e(9067051),i=e(2825232),s=(l,c,h,d,u,p,g,_=n)=>{let m=new Le(new _t(l,c,h),d);return m.position.set(u,p,g),m.castShadow=!0,_.add(m),m};s(.34,.34,.85,t,0,.55,0);let r=new Dt;r.position.set(0,.72,.5),n.add(r),s(.24,.24,.26,t,0,0,0,r),s(.14,.12,.18,i,0,-.04,.2,r),s(.06,.12,.05,i,-.09,.16,-.04,r),s(.06,.12,.05,i,.09,.16,-.04,r);let a=new Dt;a.position.set(0,.66,-.42),n.add(a),s(.06,.06,.34,t,0,.08,-.16,a);let o=[[-.12,.38],[.12,.38],[-.12,-.34],[.12,-.34]].map(([l,c])=>{let h=new Dt;return h.position.set(l,.4,c),n.add(h),s(.09,.4,.09,t,0,-.2,0,h),h});return n.userData={head:r,tail:a,legs:o,ph:0},n}function Kd(n,e,t,i){let s=n.userData;s.ph+=e*t*3,s.legs.forEach((r,a)=>r.rotation.x=Math.sin(s.ph+(a%2?Math.PI:0)+(a>1?Math.PI/2:0))*.7*Math.min(1,e/2)),s.tail.rotation.y=Math.sin(K.t*(i?22:7))*(i?.9:.4),s.head.rotation.x=i?.35:Math.sin(K.t*1.5)*.06}function M_(n,e,t){let i=document.createElement("canvas");i.width=i.height=128;let s=i.getContext("2d");s.fillStyle=n,s.fillRect(0,0,128,128),s.fillStyle=e,s.fillRect(0,0,64,64),s.fillRect(64,64,64,64),s.strokeStyle="#0003",s.strokeRect(0,0,128,128);let r=new Kn(i);return r.wrapS=r.wrapT=zs,r.repeat.set(t[0],t[1]),r.colorSpace=Yt,r}function dl(n,e,t,i,s,r){let a=new Le(new is(t-n,i-e),r);return a.rotation.x=-Math.PI/2,a.position.set((n+t)/2,s,(e+i)/2),a.receiveShadow=!0,rt.add(a),a}var us=null,pf=[],or=null,xl=[];function S_(){dl(-200,-200,200,80,-.02,ln(3885615)),dl(-70,28,70,40,0,ln(10197653)),dl(-200,40,200,56,0,ln(2895152));for(let i=-190;i<190;i+=8)qt(i,47.8,i+4,48.2,.02,15260026,0);dl(-40,-70,40,28,.01,new Wt({map:M_("#cfd3d8","#b9bec6",[10,24]),roughness:.5}));let n=15196630;Zt(-41,-71,41,-70,6,7321302,{mat:{transparent:!0,opacity:.4,roughness:.1},los:!1,shadow:!1}),Zt(-41,-71,-40,29,6,n),Zt(40,-71,41,29,6,n),Zt(-41,28,-5,29,6,n),Zt(5,28,41,29,6,n),Zt(-5,28,5,29,1,2236962,{coll:!1,y0:5}),nn("SALIDAS \xB7 DEPARTURES",0,6.6,29.6,12,"#37f0ff"),qt(-5,28,-4.8,29,5,10475246,0,{transparent:!0,opacity:.35}),qt(4.8,28,5,29,5,10475246,0,{transparent:!0,opacity:.35});let e=[[-40,-38],[-30,-26],[-14,-8],[8,14],[26,40]];e.forEach(([i,s])=>Zt(i,-28,s,0,4.6,9081760)),e.forEach(([i,s])=>qt(i,-28,s,0,.3,3357253,4.6)),nn("MANTENIMIENTO \xB7 SOLO PERSONAL",-34,6,1,8.5,"#ffb020"),nn("CARRIL A \xB7 ESC\xC1NER",-20,6,1,8.5,"#3ddc84"),nn("CARRIL B \xB7 K9",0,6,1,8.5,"#ff7a1a"),nn("CARRIL C \xB7 ENTREVISTA",20,6,1,8.5,"#37f0ff"),nn("SEGURIDAD",0,8,1,14,"#ffffff"),Zt(-23.2,-11,-22.6,-10,3,2963008),Zt(-17.4,-11,-16.8,-10,3,2963008),qt(-23.2,-11,-16.8,-10,.4,2963008,3),qt(-22.6,-10.7,-17.4,-10.3,.05,4054148,2.8,{emissive:2072666,emissiveIntensity:.8});let t=qt(-22.6,-10.6,-17.4,-10.4,.08,16722474,1,{emissive:16711680,emissiveIntensity:1});t.userData.beam=!0,vh.push(t),[-20,0,20].forEach(i=>{qt(i-3.2,-6.2,i+3.2,-3.8,.6,2764341),qt(i-3.2,-6.2,i+3.2,-3.8,.05,1118999,.6);for(let s=0;s<3;s++){let r=qt(-.35,-.25,.35,.25,.4,[11027506,3042186,7035438][s],.65);r.userData={belt:!0,cx:i,i:s},vh.push(r)}}),Zt(14.2,-13,19.6,-11,1.1,6965806,{los:!1}),nn("PREGUNTAS",17,3,-12,3.5,"#ffffff"),[[-27,-19,"ECON\xD3MICO"],[-4,4,"EXPR\xC9S"],[19,27,"QUIOSCO"]].forEach(([i,s,r])=>{Zt(i,15,s,17,1.2,3752269),qt(i,15,s,17,.12,14673388,1.2),nn(r,(i+s)/2,4,16,6,"#ffffff")}),Zt(-40,10,-33,24,3.4,4878218),nn("BA\xD1OS \u{1F6BB}",-33,4.2,17,5,"#8fd3ff"),Zt(33,10,40,24,3.4,9067066),nn("CAF\xC9 \u2615",33,4.2,17,5,"#ffd18f");for(let i=11.5;i<24;i+=3.2)qt(33.4,i,35,i+1.4,.9,14206112,0);[[-14,4],[14,4],[-12,21],[12,21]].forEach(([i,s])=>{Zt(i-2,s-.5,i+2,s+.5,.5,5002854)}),Q_(),Zt(-6,-66,6,-64.6,1.1,3029578),nn("PUERTA 27 \xB7 \xC1MSTERDAM",0,4.4,-66.2,11,"#ffffff"),nn("ABORDAJE",0,6.3,-69.5,7,"#3ddc84"),qt(-2.5,-86,2.5,-70,3.2,9081760,.1),b_();for(let i=-50;i<=50;i+=20){qt(i-.1,34.9,i+.1,35.1,7,3355443,0);let s=new Le(new Qn(.35,8,8),new Gt({color:16771488}));s.position.set(i,7.2,35),rt.add(s)}for(let i=-60;i<=60;i+=15)if(Math.abs(i)>8){qt(i-.25,36,i+.25,36.5,2.4,7031339,0);let s=new Le(new Qn(1.6,10,8),ln(3112252));s.position.set(i,3.6,36.2),s.castShadow=!0,rt.add(s)}for(let i=0;i<12;i++){let s=vt(8,18),r=vt(10,40),a=-150+i*28+vt(-6,6);qt(a,70,a+s,70+vt(8,14),r,[4871528,5989747,4015701][i%3],0)}or=new Le(new $s(.6,1.4,4),new Gt({color:16106776})),or.rotation.x=Math.PI,rt.add(or)}function b_(){let n=new Dt,e=ln(15922423),t=ln(1920922),i=new Le(new jn(3.1,3.1,44,18),e);i.rotation.z=Math.PI/2,i.castShadow=!0,n.add(i);let s=new Le(new Qn(3.1,16,12),e);s.position.x=22,s.scale.x=1.5,n.add(s);let r=new Le(new jn(3.1,1.2,12,14),e);r.rotation.z=-Math.PI/2,r.position.x=-27,n.add(r);let a=new Le(new _t(7,9,.5),t);a.position.set(-29,6,0),a.rotation.z=-.5,n.add(a);let o=new Le(new _t(40,.6,6.3),t);o.position.y=.2,n.add(o),[-1,1].forEach(l=>{let c=new Le(new _t(9,.5,22),e);c.position.set(-3,-1.2,l*12),c.rotation.y=l*-.3,c.castShadow=!0,n.add(c);let h=new Le(new jn(1.4,1.4,4.5,14),ln(9147811));h.rotation.z=Math.PI/2,h.position.set(2,-2.4,l*9),n.add(h);let d=new Le(new Qn(.4,8,8),new Gt({color:l>0?16720418:2293589}));d.position.set(-8,-1,l*22),n.add(d),pf.push(d)});for(let l=-8;l<=8;l++){let c=new Le(new _t(.7,.8,.1),ln(1910579));c.position.set(l*2.2,1.4,3.1),n.add(c)}n.position.set(0,3.4,-90),us=n,rt.add(n)}function E_(n,e){let i=[0,0,0];for(let o=0;o<=14;o++){let l=-e+o/14*2*e;i.push(Math.sin(l)*n,0,Math.cos(l)*n)}let s=[];for(let o=1;o<=14;o++)s.push(0,o,o+1);let r=new Nt;r.setAttribute("position",new ct(i,3)),r.setIndex(s);let a=new Le(r,new Gt({color:16769357,transparent:!0,opacity:.22,side:_n,depthWrite:!1}));return a.position.y=.06,a}var T_=(()=>{let n=document.createElement("canvas");n.width=n.height=64;let e=n.getContext("2d");return e.fillStyle="#ff2020",e.font="bold 60px Arial",e.textAlign="center",e.fillText("!",32,54),new Kn(n)})(),mf=(()=>{let n=document.createElement("canvas");n.width=n.height=64;let e=n.getContext("2d"),t=e.createRadialGradient(32,32,2,32,32,30);return t.addColorStop(0,"#fff"),t.addColorStop(.3,"#ffd24a"),t.addColorStop(1,"rgba(255,120,0,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),new Kn(n)})();function Xt(n,e,t,i={}){let s=Ch({shirt:1914199,pants:1451582,capCol:1056826,vest:!!i.vest,hair:2236962}),r=new Le(new _t(.08,.16,.4),new Wt({color:328965}));r.position.set(0,-.62,.22),r.visible=!1,s.userData.armR.add(r),s.position.set(n,0,e),rt.add(s);let a=i.range||13,o=i.fov||.6,l=E_(a,o);s.add(l);let c=new xi(new Jn({map:T_,transparent:!0}));c.scale.set(.8,.8,1),c.position.y=2.5,c.visible=!1,s.add(c);let h=new xi(new Jn({map:mf,transparent:!0,blending:js,depthWrite:!1}));h.scale.set(1.3,1.3,1),h.position.set(.35,1.05,.85),h.visible=!1,s.add(h);let d=t.length>1?Math.atan2(t[1][0]-n,t[1][1]-e):i.ang||0,u={m:s,cone:l,bang:c,flash:h,gun:r,flashT:0,rank:i.rank??Math.random(),armed:!1,aiming:!1,warn:1.2,fireT:0,path:t,i:t.length>1?1:0,speed:i.speed||1.7,ang:d,base:i.ang||0,range:a,fov:o,wait:0,seeing:!1,sweep:i.sweep??1,x:n,z:e,moving:!1,state:"patrol",aware:0,chaser:!1,huntT:0,stun:0,retField:null,curSpeed:0,tf:"G",lostT:0,flank:!1};return vn.push(u),u}function gf(n,e){n.armed=e,n.gun.visible=e;let t=n.m.userData;t.shirtM.color.set(e?1316895:1914199),t.pantsM.color.set(e?921879:1451582)}function sa(){vn.forEach(n=>gf(n,n.rank<se.armedPct/100))}function lh(n,e=1.6){let t=v_();rt.add(t);let i={m:t,h:n,off:e,x:n.x,z:n.z+e,ang:0,sp:0,state:"follow",sniff:0,stun:0,huntT:0,retT:0,retField:null};return t.position.set(i.x,0,i.z),dr.push(i),i}function ch(n,e){let t=[12597547,3049153,2600544,15965202,9323693,15528177,1482885,13849600],i=Ch({shirt:t[Math.floor(Math.random()*t.length)],pants:[2899536,4868682,8350282][Math.floor(Math.random()*3)],hair:[1118481,5913114,13214282,8947848][Math.floor(Math.random()*4)],skin:[14726282,13012322,9263675,15845797][Math.floor(Math.random()*4)],pack:Math.random()<.3}),s=vt(n.x0,n.x1),r=vt(n.z0,n.z1);if(i.position.set(s,0,r),i.scale.setScalar(vt(.92,1.08)),rt.add(i),Math.random()<.5){let o=new Le(new _t(.4,.55,.25),ln([3355443,8930338,2250103][Math.floor(Math.random()*3)]));o.position.set(.45,.3,.1),i.add(o)}let a={m:i,room:n,p:{x:s,z:r},t:null,wait:Math.random()*3,speed:vt(1.1,1.8),ang:0,queue:e==="queue"};return Ah.push(a),a}function w_(n){for(let e=0;e<14;e++){let t=vt(n.room.x0,n.room.x1),i=vt(n.room.z0,n.room.z1);if(!ai.some(s=>t>s.x0-.8&&t<s.x1+.8&&i>s.z0-.8&&i<s.z1+.8)&&wl(n.p.x,n.p.z,t,i,ai,.5)){n.t={x:t,z:i};return}}n.wait=1}function jd(n,e,t,i){let s=new Dt,r=new Le(new _t(4.2,.9,1.9),ln(t));r.position.y=.65,r.castShadow=!0,s.add(r);let a=new Le(new _t(2.2,.7,1.7),ln(2106926,{roughness:.2}));a.position.set(-.2,1.3,0),s.add(a),[[-1.3,.85],[1.3,.85],[-1.3,-.85],[1.3,-.85]].forEach(([l,c])=>{let h=new Le(new jn(.38,.38,.3,12),ln(1118481));h.rotation.x=Math.PI/2,h.position.set(l,.38,c),s.add(h)}),[[2.1,.6],[2.1,-.6]].forEach(([l,c])=>{let h=new Le(new _t(.1,.2,.35),new Gt({color:16773808}));h.position.set(l,.7,c),s.add(h)}),s.position.set(vt(-150,150),0,n),s.rotation.y=e>0?0:Math.PI,rt.add(s);let o={m:s,dir:e,speed:i,x:s.position.x};return ff.push(o),o}var zn=null,ke=null,ra=[],Mh=[];function fl(n,e,t,i=.9,s=null){let r=new Dt;if(t==="life"){let l=new Le(new qs(.16,.34,4,10),new Wt({color:3073437,emissive:2080634,emissiveIntensity:1.1,roughness:.3}));l.rotation.z=Math.PI/2,r.add(l);let c=new Le(new qs(.165,.12,4,10),new Wt({color:16777215,emissive:14540253,emissiveIntensity:.6}));c.rotation.z=Math.PI/2,c.position.x=-.2,r.add(c)}else{let l=new Le(new Or(.34,.06,8,20),new Wt({color:16106776,emissive:16097280,emissiveIntensity:1.2}));r.add(l);let c=new Le(new Ys(.3,20),new Wt({color:16774344,emissive:8939008,emissiveIntensity:.4}));r.add(c);let h=new Le(new _t(.04,.2,.02),new Gt({color:1118481}));h.position.set(0,.08,.02),r.add(h);let d=new Le(new _t(.14,.04,.02),new Gt({color:1118481}));d.position.set(.06,0,.02),r.add(d)}let a=new xi(new Jn({map:mf,transparent:!0,blending:js,depthWrite:!1,color:t==="life"?3407786:16763955}));a.scale.set(2.2,2.2,1),r.add(a),r.position.set(n,i,e),rt.add(r);let o={x:n,z:e,type:t,y:i,m:r,taken:!1,ph:Math.random()*6,row:s};return ra.push(o),o}function A_(){[[20,22],[-25,8],[0,-18],[-20,-18],[-34,-12]].forEach(([n,e])=>fl(n,e,"life")),[[-12,20],[20,-18]].forEach(([n,e])=>fl(n,e,"time")),li.forEach((n,e)=>fl(0,n.zc,e%2?"time":"life",2,n)),["life","life","time","life","life","time","life","time"].forEach(n=>Mh.push(fl(0,30,n)))}function Ih(){if(!Mh.length||!gs)return;let n=ke?ke.userData:{px:0,pz:36},e=[],t=n.px,i=n.pz;for(let r=0;r<500;r++){let a=xs(gs,ur,t,i);if(!a||(t+=a.x,i+=a.z,e.push([t,i]),Math.hypot(t,i+62)<3))break}let s=Mh.filter(r=>!r.taken);s.forEach((r,a)=>{let o=Math.min(e.length-1,Math.max(6,Math.floor(e.length*(a+.6)/s.length*.96)));e[o]&&(r.x=e[o][0],r.z=e[o][1],r.m.position.set(r.x,r.y,r.z))})}function R_(n){for(let e of ra)if(!e.taken){if(e.row){if(e.row.lowC==null){e.m.visible=!1;continue}e.m.visible=!0,e.x=e.row.lowC,e.z=e.row.zc}e.m.rotation.y+=n*2.2,e.m.position.set(e.x,e.y+Math.sin(K.t*3+e.ph)*.12,e.z)}}function C_(){let n=(e,t,i,s)=>{Zt(e-.6,t-.6,e+.6,t+.6,2.1,2792847),qt(e-.5,t-.5,e+.5,t+.5,.12,1863526,2.1),nn("TAQUILLA \xB7 H",e,2.9,t,2.6,"#3ddc84"),Tl.push({x:e,z:t,ex:i,ez:s})};n(-39.4,5,-36.6,5),n(39.4,5,36.6,5),n(-30,27.3,-30,24.8),n(30,27.3,30,24.8),n(-11,.7,-11,3.3),n(11,.7,11,3.3),n(-25.4,-20,-22.5,-20),n(25.4,-20,22.5,-20),n(7.4,-14,4.6,-14),n(-37.4,-20,-34.4,-20),n(-24,-33.2,-24,-31),n(30,-33.2,30,-31),n(18,-35.6,18,-37.6),n(-30,-35.6,-30,-37.6),n(18,-41.6,18,-43.6),n(34,-41.6,34,-43.6),n(-30,-47.6,-30,-49.6),n(6,-47.6,6,-49.6),n(14,-53.6,14,-55.6),n(34,-53.6,34,-55.6),n(-30,-59.6,-30,-61.6)}function I_(){C_(),A_();let n={low:.4,med:.65,high:1}[Yi]||1;Xt(-30,6,[[-30,6],[30,6],[30,24],[-30,24]],{speed:1.5,vest:!0,rank:.05}),Xt(9,25,[[9,25]],{ang:Math.PI,sweep:.8,range:11,rank:.6});let e=Xt(-30,10,[[-30,10],[30,10]],{speed:1.3,range:9,fov:.5,rank:.7});lh(e,1.7),Xt(0,12,[[0,12]],{ang:0,sweep:1.1,range:12,rank:.8}),Xt(-16,-8.4,[[-16,-8.4]],{ang:0,sweep:.7,range:9,vest:!0,rank:.75}),Xt(-20,-22,[[-20,-22],[-20,-27]],{speed:1.2,range:9,fov:.5,rank:.85}),Xt(17,-13.8,[[17,-13.8]],{ang:0,sweep:.5,range:10,fov:.55,rank:.1}),Xt(20,-22,[[20,-22],[20,-27]],{speed:1.2,range:9,fov:.5,rank:.9});let t=Xt(-4,-3,[[-4,-3],[4,-10],[-4,-17],[4,-24],[-4,-17],[4,-10]],{speed:1.3,range:9,fov:.5,rank:.65});lh(t,1.8),Xt(-34,-4,[[-34,-4],[-34,-15]],{speed:1.3,range:10,fov:.55,rank:.15}),Xt(-34,-26,[[-34,-26],[-34,-16]],{speed:1.4,range:10,fov:.55,rank:.95}),Xt(-30,-31,[[-30,-31],[30,-31]],{speed:1.6,range:12,fov:.45,vest:!0,rank:.2}),Xt(30,-37.4,[[30,-37.4],[-30,-37.4]],{speed:1.5,range:12,fov:.45,rank:.55}),Xt(-30,-43.4,[[-30,-43.4],[30,-43.4]],{speed:1.5,range:12,fov:.45,rank:.25});let i=Xt(30,-49.4,[[30,-49.4],[-30,-49.4]],{speed:1.3,range:10,fov:.45,rank:.7});lh(i,1.6),Xt(-30,-55.4,[[-30,-55.4],[30,-55.4]],{speed:1.6,range:12,fov:.45,vest:!0,rank:.3}),Xt(-12,-62,[[-12,-62],[12,-62]],{speed:1.4,range:11,fov:.5,rank:.45}),Xt(8,-63,[[8,-63]],{ang:0,sweep:.9,range:11,rank:.35}),sa();let s={x0:-36,x1:36,z0:2,z1:26};for(let a=0;a<Math.round(14*n);a++)ch(s);[[-32.5,-29.2],[-38.8,-36.2],[-44.8,-42.2],[-50.8,-48.2],[-56.8,-54.2]].forEach(([a,o])=>{for(let l=0;l<Math.max(1,Math.round(3*n));l++)ch({x0:-36,x1:36,z0:a,z1:o})});for(let a=0;a<4;a++){let o=ch({x0:-24,x1:-22,z0:19+a*1.3,z1:19+a*1.3});o.m.rotation.y=Math.PI,o.queue=!0}let r=[[44,1,12597547],[44,1,3049153],[52,-1,15528177],[52,-1,2600544],[44,1,9323693],[52,-1,15965202]];r.slice(0,Math.max(2,Math.round(r.length*n))).forEach(([a,o,l])=>jd(a,o,l,vt(7,12))),zn=jd(40.6,1,16106776,0),zn.m.position.x=0,zn.x=0,zn.m.rotation.y=0,zn.parked=!0,ke=Ch({shirt:1843760,pants:1843760,bag:!0}),rt.add(ke),Object.assign(ke.userData,{px:0,pz:36,vx:0,vz:0,ang:Math.PI,y:0,vy:0,grounded:!0,hidden:null,crouch:!1,hideT:0,sprint:!1,speed:0}),ke.position.set(0,0,36),ke.rotation.y=Math.PI,ry(),q_(),Ih()}function P_(n){let e=ke.userData,t=n.look;e.shirtM.color.set(t.shirt),e.pantsM.color.set(t.pants),t.hat&&(e.hat.visible=!0,e.hat.material.color.set(t.hat));let i=new Le(new _t(.08,.4,.02),new Wt({color:11148830}));if(t.tie&&(i.position.set(0,1.2,.15),ke.add(i)),t.pack){let s=new Le(new _t(.4,.5,.18),new Wt({color:12597547}));s.position.set(0,1.15,-.23),ke.add(s)}}function nt(n,e=4800){let t=Se("sub");t.innerHTML=n,t.classList.add("on"),clearTimeout(nt.h),nt.h=setTimeout(()=>t.classList.remove("on"),e)}var wn=n=>(Math.round(n*10)/10).toString().replace(/\.0$/,""),L_=n=>n.replace(/(\d+(?:\.\d+)?) min/g,(e,t)=>wn(t*se.actionTime)+" s");function Al(n,e="#3ddc84"){let t=document.createElement("div");t.className="pop",t.textContent=n,t.style.color=e,document.body.appendChild(t),setTimeout(()=>t.remove(),1400)}async function xf(n){let e=Se("fade");e.textContent=`\u23F1 -${wn(n*se.actionTime)} s`,e.classList.add("on"),await $d(750),e.classList.remove("on"),await $d(250)}function oi(n){n&&(A.heat=cn(A.heat+n,0,100),A.heat>=100&&!A.over&&Zi("busted","DETENIDO",'Tu cara ya es un cartel de "SE BUSCA". Cuatro agentes te rodean con la sonrisa de quien acaba de ganar un viaje a Canc\xFAn.<br>Lo bueno: ahora tu est\xF3mago es problema del m\xE9dico forense... pero primero te har\xE1n una radiograf\xEDa muy detallada.'))}function _f(n){return(.95+.1*(A.cargo.acid*A.method.stomach-.48)/1.21)*(A.pillLeft>0?.3:1)*(n?se.hiddenDrain:1)}function Rl(){A.life=Math.min(lf(),A.life),A.integrity=cn(A.life/Sl()*100,0,100)}function Cl(n,e){A.life=Math.min(lf(),A.life+n),Rl(),Al(`+${wn(n)} s de vida`,"#3ddc84"),e&&void 0}function D_(n){A.time+=n,Al(`+${wn(n)} s de misi\xF3n`,"#f5c518")}function yf(){Zi("dead","VUELO PERDIDO","Por la ventana ves c\xF3mo la manga se retira. El avi\xF3n despega sin ti con tu futuro a bordo.<br>Don Chuy no es un hombre de segundas oportunidades. Ni de primeras, la verdad.")}function vf(n){let e=n*se.actionTime;return A.time-=e,A.life-=e*_f(!1),Rl(),A.over?!1:A.life<=0?(Ph("time"),!1):A.time<=0?(yf(),!1):!0}function Ph(n){Zi("boom","EXPLOTASTE",n==="time"?'El contador de tus c\xE1psulas marca 00. Sientes un calorcito agradable en el abdomen... y luego uno menos agradable. <b>\xA1BOOM!</b><br>Los polic\xEDas no te arrestan: te <i>limpian</i>. El aeropuerto cierra la Terminal B por "derrame cosm\xE9tico". Tu jefe lo llama "p\xE9rdida de inventario".':'Un gorgoteo. Otro. El est\xF3mago se rinde antes que t\xFA: las c\xE1psulas ceden por los jugos g\xE1stricos. Alcanzas a pensar "deb\xED tomar m\xE1s pastillas".<br><b>\xA1BOOM!</b> Fuiste el primer pasajero en cumplir la norma de "equipaje de mano que explota".')}function N_(){let n=ke.position;Se("flash").style.transition="none",Se("flash").style.opacity=1,requestAnimationFrame(()=>{Se("flash").style.transition="opacity 1.4s",Se("flash").style.opacity=0}),Si(1.6,.6,700),Qe(70,.8,"sawtooth",.25);for(let e=0;e<26;e++){let t=new Le(new Qn(vt(.25,.8),8,8),new Gt({color:[16734746,16756768,12589080,3355443][e%4],transparent:!0}));t.position.set(n.x,1.2,n.z),t.userData={v:new F(vt(-6,6),vt(3,11),vt(-6,6)),life:1.6},rt.add(t),xl.push(t)}ke.visible=!1,K.shake=1.2}function Zi(n,e,t,i){if(!A||A.over)return;A.over=!0,K.mode="over",K.busy=!0,B_(),Se("mini").classList.remove("on");let s=n==="win",r=bf(n);n==="boom"&&N_(),n==="busted"&&(Qe(700,.25,"sawtooth",.08),setTimeout(()=>Qe(520,.25,"sawtooth",.08),280),setTimeout(()=>Qe(700,.25,"sawtooth",.08),560)),n==="shot"&&(Si(.5,.5,1800),Qe(90,.4,"sawtooth",.15),K.shake=.8),setTimeout(()=>{let o=Se("end");o.className="overlay on "+(s?"win":"dead")+(n==="busted"?" busted":""),o.innerHTML=`<h2>${s?"\u2708 ":"\u2620 "}${e}</h2><p>${t}</p>${i?`<p>${i}</p>`:""}${r}<p style="text-align:center;margin-top:20px"><button id="again" style="font:700 20px Impact;letter-spacing:2px;padding:12px 30px">\u21BA JUGAR OTRA VEZ</button></p>`,Se("again").onclick=()=>location.reload()},s?3800:n==="boom"?2e3:1100)}function U_(){let n=Math.round(A.cargo.profit*(.6+.4*A.integrity/100));K.planeGo=!0,K.mode="over",Zi("win","ABORDASTE",'Cruzas la manga con las rodillas flojas y te dejas caer en el asiento 34B. El pasajero de al lado te dice: "Pareces nervioso". Respondes: "Odio volar".<br>Mientras el avi\xF3n despega, tu est\xF3mago gru\xF1e. Es el sonido m\xE1s bonito que has o\xEDdo.<br><i>(Fase 3: vuelo, aduana de destino y entrega... pr\xF3ximamente.)</i>',`Tiempo de misi\xF3n restante: ${wn(Math.max(0,A.time))} s \xB7 Vida de las c\xE1psulas: ${wn(Math.max(0,A.life))} s \xB7 Salud: ${Math.max(0,A.hp)}%<br>Pago: $${n} + efectivo $${A.cash} = <b>$${n+A.cash}</b>`)}function Mf(n){let e=A.method.id,t=A.cargo.weight,i=A.heat,s=.7+.15*t;switch(n){case"body":return{capsules:.6,tape:.42,bag:.05}[e]*s+i/400;case"bag":return{capsules:.03,tape:.05,bag:.55}[e]*s*(A.bagSwapped&&e==="bag"?.4:1)+i/600;case"dog":return A.cargo.smell*{capsules:.3,tape:.65,bag:.8}[e]*(A.inv.perfumeOn?.5:1)+(A.integrity<40?.15:0)+i/500;case"quiz":return Math.min(.9,Math.max(.03,.08+i/160+A.profile.quiz+(A.time<15?.05:0)))}return 0}var F_=n=>A.camsOff&&(n==="body"||n==="quiz")?.35:1;function O_(n,e=1){n=typeof n=="string"?{t:n}:n;let t=Math.min(.95,(n.p??Mf(n.t))*F_(n.t)*e),i=Math.random()<t;return n.t==="quiz"?i?{quiz:!0,text:'Un guardia te se\xF1ala con el dedo: "Usted. Acomp\xE1\xF1eme un momento."'}:{text:oh.quiz.pass}:i?{fail:!0,text:oh[n.t].fail}:{text:oh[n.t].pass}}function B_(){Se("dlg").classList.remove("on"),K.dlgKey=null}function fs(n){return new Promise(e=>{let t=Se("dlg");t.classList.add("on"),Se("dlgT").textContent=n.title,Se("dlgX").innerHTML=n.text||"";let i=Se("dlgO");i.innerHTML="";let s=n.opts.filter(a=>a.show!==!1),r=a=>{t.classList.remove("on"),K.dlgKey=null,e(a)};s.forEach((a,o)=>{let l=document.createElement("button");l.innerHTML=`<span class="k">${o+1}</span><span><b>${a.label}</b>${a.hint?`<small>${L_(a.hint)}</small>`:""}</span>`,l.disabled=!!a.disabled,l.onclick=()=>r(a),i.appendChild(l)}),K.dlgKey=a=>{let o=s[a];o&&!o.disabled&&r(o)}})}async function z_(){let n=A.profile,e=A.heat,t=await fs({title:"INTERROGATORIO",text:"<p>Te llevan a un rinc\xF3n. El agente tiene una carpeta, un caf\xE9 y cero prisa.</p><p>\u2014Veo que viaja solo. \xBFMotivo del viaje? \xBFQui\xE9n hizo su maleta? \xBFPor qu\xE9 suda?</p><p><i>Tu est\xF3mago cruje en el silencio como un presagio.</i></p>",opts:[{label:"Improvisar una historia",hint:"4 min \xB7 arriesgado, puede salvarte",time:4,p:Math.max(.1,.35+n.lie-e/400),win:'Cuentas una historia de boda en \xC1msterdam con tantos detalles que el agente dice "ya, ya, basta". Te devuelve el pasaporte.',lose:'Te contradices a los 40 segundos. "Rep\xEDtame lo de su hermana, la que se casa con el primo". No ten\xEDas hermana.'},{label:"Respuestas cortas y calmadas",hint:"3 min \xB7 mejor cuanto menos sospecha tengas",time:3,p:Math.max(.1,.6-e/200),win:'"Negocios." "Mi maleta." "Calor." Tres frases, cero errores. El agente suspira y te deja ir.',lose:"Tus respuestas son tan cortas que el agente nota que son demasiado cortas. Te invita a un cuarto con una mesa y dos sillas."},{label:"Hacerte el ofendido",hint:"5 min \xB7 alto riesgo \xB7 +6 sospecha",time:5,heat:6,p:Math.max(.1,.3+(n.id==="exec"?.15:n.id==="tourist"?.1:-.05)),win:"Tu indignaci\xF3n es tan teatral que el agente se siente culpable. Te ofrece una disculpa y un caramelo.",lose:"El supervisor llega y es peor que el agente. Y trae un perro. Que ya te conoce."}]});return await xf(t.time),!vf(t.time)||(t.heat&&oi(t.heat),A.over)?!1:Math.random()>=t.p?(Zi("busted","DETENIDO",t.lose),!1):(nt(t.win,6e3),A.heat=Math.max(0,A.heat-15),!0)}async function ta(n,e){for(let t of n){let i=typeof t=="string"?{t}:t,s=yh[i.t]?(await Lh(i.t)).mult:1;if(A.over)return!1;let r=O_(i,s);if(A.camsOff&&(i.t==="body"||i.t==="quiz")&&(A.camsOff=!1),r.fail)return Zi("busted","DETENIDO",r.text+"<br>Las esposas son fr\xEDas. Tu est\xF3mago, por ahora, es el \xFAnico que no est\xE1 arrestado."),!1;if(r.quiz){if(nt(r.text,3e3),!await z_())return!1}else e&&e.push(r.text)}return!0}async function k_(n){let e=[];if(n.cost&&(A.cash-=n.cost),n.time&&(await xf(n.time),!vf(n.time))||(n.heat&&oi(n.heat),A.over))return!1;if(n.fx){let t=n.fx();t&&e.push(t)}return n.checks&&!await ta(n.checks,e)?!1:n.win?(U_(),!1):(e.length&&nt(e.join(" "),6e3),!!n.keep)}async function H_(n){for(K.busy=!0;;){let e=await fs(n.menu());if(e.close||!await k_(e)||A.over)break}A.over||(K.busy=!1)}var ds={label:"Salir",hint:"",close:!0},Sf=()=>(A.inv.pills--,A.pillLeft=5,Cl(se.pillLife),`Te tragas la pastilla en seco: +${wn(se.pillLife)} s de vida y tus c\xE1psulas se desgastan m\xE1s lento unos segundos.`);function Qd(){return{title:"BA\xD1OS",text:`<p>Azulejos blancos, luz fluorescente y olor a desinfectante que apenas combate el olor a miedo. ${["Del \xFAltimo cub\xEDculo sale un sonido que prefieres no clasificar.","Un se\xF1or se lava las manos durante tres minutos, mir\xE1ndote por el espejo.","El secador de manos ruge como una turbina. Ideal para los nervios."][Math.floor(K.t)%3]}</p><p>${A.inv.contact?'Tu contacto deber\xEDa estar "arreglando un grifo".':"Sin contacto, esto es solo un ba\xF1o."}</p>`,opts:[{label:"\u{1F9F3} Cambiar maleta con el contacto",hint:"6 min \xB7 riesgo de rayos X de maleta \xD70.4 (doble fondo) \xB7 -5 sospecha",show:A.inv.contact>0&&!A.bagSwapped,time:6,heat:-5,keep:!0,fx(){return A.inv.contact--,A.bagSwapped=!0,'Intercambio de maletas bajo la puerta del cub\xEDculo. "Encantado", susurra. Nunca lo volver\xE1s a ver.'}},{label:"\u{1F454} Cambiar de ropa",hint:"7 min \xB7 -25 sospecha",show:A.inv.clothes>0,time:7,heat:-25,keep:!0,fx(){A.inv.clothes--,A.disguised++;let n=ke.userData;return n.shirtM.color.set([2792847,15167313,7166330][A.disguised%3]),n.hat.visible=!0,n.hat.material.color.set(2236962),n.shades.visible=!0,"Un gorro, otra camisa, unas gafas. El del espejo ya no se parece al de las c\xE1maras. Casi."}},{label:"\u{1F338} Rociar spray anti-olor",hint:"1 min \xB7 los perros huelen la mitad",show:A.inv.perfume>0&&!A.inv.perfumeOn,time:1,keep:!0,fx(){return A.inv.perfume--,A.inv.perfumeOn=!0,"Hueles a pino sint\xE9tico. Un pino con problemas legales."}},{label:"\u{1F48A} Tomar pastilla",hint:`1 min \xB7 +${wn(se.pillLife)} s de vida \xB7 +2 sospecha`,show:A.inv.pills>0,time:1,heat:2,keep:!0,fx:Sf},{label:"Lavarte la cara",hint:"3 min \xB7 -5 sospecha",time:3,heat:-5,keep:!0,fx(){return"Agua fr\xEDa, respiraci\xF3n profunda. Tu reflejo te mira como alguien que lo est\xE1 pensando mejor."}},ds]}}var hh=(n,e,t,i,s,r)=>()=>({title:"CHECK-IN \xB7 "+n,text:A.checkedIn?'<p>Ya tienes tu pase. La agente te mira: "\xBFOtra vez, caballero?"</p>':"<p>El mostrador te espera con la sonrisa de quien cobra por sonre\xEDr.</p>",opts:[{label:e,hint:t,show:!A.checkedIn,time:i,cost:s,heat:r,disabled:A.cash<s,fx(){return A.checkedIn=!0,"Pase de abordar en mano. Un tr\xE1mite menos entre t\xFA y la puerta 27."}},ds]}),V_=[{x:-23,z:19.5,r:3.6,label:"Check-in econ\xF3mico",menu:hh("ECON\xD3MICO","Hacer fila (la familia con 9 maletas)","12 min \xB7 -4 sospecha",12,0,-4)},{x:0,z:19.5,r:3.6,label:"Check-in expr\xE9s ($50)",menu:hh("EXPR\xC9S","Pagar el mostrador expr\xE9s \xB7 $50","4 min \xB7 +3 sospecha (\xBFpor qu\xE9 tanto dinero?)",4,50,3)},{x:23,z:19.5,r:3.6,label:"Quiosco autom\xE1tico",menu:hh("QUIOSCO","Usar el quiosco","2 min \xB7 +8 sospecha \xB7 la c\xE1mara capta tu cara sudorosa",2,0,8)},{x:-31,z:17,r:3.4,label:"Entrar a los ba\xF1os",menu:Qd},{x:31,z:17,r:3.4,label:"Caf\xE9",menu:()=>({title:"CAF\xC9",text:"<p>Una barista con cara de haberlo visto todo te sonr\xEDe.</p>",opts:[{label:'Tomar un caf\xE9 "para calmar los nervios" \xB7 $5',hint:`6 min \xB7 -6 sospecha \xB7 +${wn(se.coffeeLife)} s de vida`,time:6,cost:5,disabled:A.cash<5,heat:-6,fx(){return Cl(se.coffeeLife),`El caf\xE9 est\xE1 tibio, amargo y car\xEDsimo, pero el calor te asienta el est\xF3mago: +${wn(se.coffeeLife)} s de vida.`}},ds]})},{x:-35.5,z:-37.4,r:3.4,label:"Farmacia",menu:()=>({title:"FARMACIA",text:"<p>La farmac\xE9utica te mira un segundo de m\xE1s.</p>",opts:[{label:"Comprar una pastilla \xB7 $60",hint:"3 min \xB7 precio de aeropuerto",time:3,cost:60,disabled:A.cash<60,keep:!0,fx(){return A.inv.pills++,'"Para el viaje", explicas. "Claro."'}},ds]})},{x:35.5,z:-43.4,r:3.4,label:"Perfumer\xEDa",menu:()=>({title:"PERFUMER\xCDA",text:"<p>Una nube de aromas caros te acaricia los pulmones.</p>",opts:[{label:"Spray anti-olor \xB7 $40",hint:"4 min \xB7 los perros huelen la mitad",show:!A.inv.perfumeOn,time:4,cost:40,disabled:A.cash<40,fx(){return A.inv.perfumeOn=!0,'Te roc\xEDas con "Noche de Verano". Hueles como un cumplea\xF1os sospechoso.'}},ds]})},{x:-35.5,z:-49.4,r:3.4,label:"\xD3ptica",menu:()=>({title:"\xD3PTICA",text:"<p>Expositores de gafas que prometen cambiarte la vida (o la cara).</p>",opts:[{label:"Gafas y gorra \xB7 $30",hint:"3 min \xB7 -10 sospecha",time:3,cost:30,disabled:A.cash<30,heat:-10,fx(){let n=ke.userData;return n.shades.visible=!0,n.hat.visible=!0,n.hat.material.color.set(2236962),"Con las gafas puestas pareces menos nervioso. O m\xE1s misterioso. Ambas son una mejora."}},ds]})},{x:35.5,z:-55.4,r:3.4,label:"Entrar a los ba\xF1os",menu:Qd},{x:0,z:-62.3,r:4,label:"Puerta de embarque",menu:()=>({title:"PUERTA 27 \xB7 \xC1MSTERDAM",text:"<p>La azafata sonr\xEDe con una paciencia que se acaba justo en tu fila. Al fondo, la manga del avi\xF3n es el t\xFAnel m\xE1s hermoso que has visto. \xDAltimo filtro: un agente revisa pasaportes como un cr\xEDtico gastron\xF3mico.</p>",opts:[{label:"Fila normal",hint:"8 min \xB7 calma \xB7 revisi\xF3n est\xE1ndar",time:8,checks:["quiz"],win:!0},{label:"Fila prioritaria",hint:'3 min \xB7 +6 sospecha \xB7 "\xBFpor qu\xE9 tienes prioridad?"',time:3,heat:6,checks:["quiz"],win:!0},{label:"Correr a la puerta",hint:"2 min \xB7 +15 sospecha \xB7 el sudor es sospechoso",time:2,heat:15,checks:["quiz"],win:!0},ds]})}];V_.forEach(n=>El.push(n));wh.push({id:"A",x0:-26,x1:-14,z0:-13.2,z1:-12,async run(){return nt("<b>CARRIL A:</b> esc\xE1ner corporal y rayos X."),Qe(1e3,.15),ta(["body","bag"],[])}},{id:"B",x0:-8,x1:8,z0:-8,z1:-7,async run(){return nt("<b>CARRIL B:</b> rayos X de equipaje. Cuidado con el perro..."),ta(["bag"],[])}},{id:"C",x0:14,x1:26,z0:-15,z1:-14,async run(){return nt("<b>CARRIL C:</b> el guardia de la mesa te hace una se\xF1a."),ta(["quiz","bag"],[])}},{id:"D",x0:-38,x1:-30,z0:-2.2,z1:-1,async run(){return nt('<b>MANTENIMIENTO:</b> "\xBFUsted qu\xE9 hace aqu\xED?" Dos guardias lo vigilan.'),oi(18),A.over?!1:ta([{t:"quiz",p:.4}],[])}});var ef=(n,e)=>n>=e-1?.5:n>=Math.ceil(e/2)?.85:1.3;function Lh(n,e={}){return new Promise(t=>{let i=Se("mini"),s=Se("miniA");i.classList.add("on"),s.innerHTML="",Se("miniT").textContent=yh[n].title.toUpperCase(),Se("miniH").textContent=yh[n].hint;let r=!1,a=[],o=(h,d,u)=>{r||(r=!0,a.forEach(p=>p()),Se("miniH").textContent=u,setTimeout(()=>{i.classList.remove("on"),t({score:h,mult:d})},1100))},l=(h,d,u)=>{let p=document.createElement(h);return d&&(p.className=d),u&&(p.textContent=u),s.appendChild(p),p},c=(h,d)=>{let u=g=>{g.code==="Space"&&!g.repeat&&(g.preventDefault(),h())},p=g=>{g.code==="Space"&&(g.preventDefault(),d&&d())};addEventListener("keydown",u),addEventListener("keyup",p),a.push(()=>{removeEventListener("keydown",u),removeEventListener("keyup",p)})};if(n==="body"){let h=2500+A.heat*15,d=l("div","mbar"),u=document.createElement("i");d.appendChild(u);let p=l("button","big",`MANT\xC9N
PULSADO`),g=null,_,m=()=>{let R=(performance.now()-g)/h;if(u.style.width=Math.min(100,R*100)+"%",R>=1)return o(1,.5,"\u2714 Aguantaste. El operador bosteza y deja pasar la imagen.");_=requestAnimationFrame(m)},f=()=>{r||g||(g=performance.now(),m())},S=()=>{g&&!r&&(cancelAnimationFrame(_),o(0,1.45,"\u2718 Exhalaste a mitad del barrido. Mala idea."))};p.onpointerdown=f,p.onpointerup=S,p.onpointercancel=S,p.onpointerleave=S,c(f,S),setTimeout(()=>{g||o(0,1.2,"Te quedaste paralizado.")},6500)}else if(n==="dog"){let h=l("div");h.id="dogArea";let d=document.createElement("div");d.className="ring";let u=document.createElement("div");u.className="ring static";let p=document.createElement("button");p.className="tap",h.append(u,d,p);let g=l("div",null,"Toques: 0 \xB7 acertados: 0"),_=performance.now(),m=0,f=0,S=[1,2,3,4,5].map(M=>_+M*1e3),R=()=>{if(r)return;m++;let M=performance.now();Math.min(...S.map(E=>Math.abs(E-M)))<230?(f++,p.style.background="#3ddc8433",Qe(660,.06)):(p.style.background="#ff3b3b33",Qe(200,.08)),setTimeout(()=>p.style.background="transparent",120),g.textContent=`Toques: ${m} \xB7 acertados: ${f}`};p.onpointerdown=R,c(R),setTimeout(()=>o(f,ef(f,5),f>=4?"\u2714 Pulso de monje. El perro te ignora por completo.":f>=3?"Medio sudado, medio tranquilo. El perro duda.":"\u2718 Tu coraz\xF3n suena como un bombo. El perro inclina la cabeza."),5600)}else if(n==="quiz"){let h=l("div");h.id="sweatArea";let d=l("div",null,"Gotas secadas: 0 / 5"),u=0;for(let p=0;p<5;p++)setTimeout(()=>{if(r)return;let g=document.createElement("button");g.className="drop",g.style.left=12+Math.random()*76+"%",g.style.top=12+Math.random()*76+"%",g.onpointerdown=()=>{u++,d.textContent=`Gotas secadas: ${u} / 5`,g.remove()},h.appendChild(g),setTimeout(()=>g.remove(),1e3)},p*900);setTimeout(()=>o(u,ef(u,5),u>=4?"\u2714 Frente seca, mirada firme. Un modelo de ciudadano.":u>=3?"Brillas un poco, pero el guardia lo atribuye al calor.":"\u2718 Est\xE1s empapado. El guardia anota algo en su libreta."),5200)}else if(n==="cramp"||n==="struggle"){let h=e.n||12,d=e.t||3500,u=n==="struggle",p=l("div","mbar"),g=document.createElement("i");p.appendChild(g);let _=l("button","big",u?"\xA1Z\xC1FATE!":"\xA1APRIETA!"),m=0,f=()=>{r||(m++,g.style.width=Math.min(100,m/h*100)+"%",Qe(300+m*20,.04),m>=h&&o(1,1,u?"\u2714 \xA1Te soltaste de un tir\xF3n!":"\u2714 Contenido. Por los pelos."))};_.onpointerdown=f,c(f),setTimeout(()=>o(0,1,u?"\u2718 No pudiste soltarte...":"\u2718 No pudiste apretar a tiempo..."),d)}})}async function G_(){if(K.busy=!0,nt("<b>Tu est\xF3mago se retuerce...</b>",2e3),(await Lh("cramp")).score)nt("Apretaste los dientes y las c\xE1psulas aguantaron.",4e3);else{if(A.life-=4,Rl(),oi(8),A.life<=0){Ph("stomach");return}Al("-4 s de vida","#ff3b3b"),nt("Un retortij\xF3n te dobla en dos: -4 s de vida, +8 sospecha.",5e3)}A.over||(K.busy=!1)}var uh=[()=>({title:"PREPARACI\xD3N 1/4 \xB7 LA MERCANC\xCDA",text:"<p>Est\xE1s en un motel que huele a cloro y malas decisiones. Don Chuy golpea la mesa: \u2014Elige tu producto, mula. Si lo pierdes, t\xFA pagas.</p>",opts:Object.values(cf).map(n=>({label:n.name,hint:`${n.weight}kg \xB7 olor ${Math.round(n.smell*100)}% \xB7 $${n.profit}. ${n.desc}`,fx(){A.cargo=n}}))}),()=>({title:"PREPARACI\xD3N 2/4 \xB7 EL CAMUFLAJE",text:'<p>\u2014\xBFC\xF3mo lo llevamos? \u2014dice Don Chuy, limpiando una navaja "para la fruta". En todos los casos te har\xE1 tragar una <b>c\xE1psula de lealtad</b>: su relaci\xF3n contigo caduca con el reloj.</p>',opts:Object.values(hf).map(n=>({label:n.name,hint:n.desc,fx(){A.method=n}}))}),()=>({title:"PREPARACI\xD3N 3/4 \xB7 EL DISFRAZ",text:'<p>\u2014Nadie sospecha de lo que no recuerda \u2014dice. Te lanza un bolso con tu nuevo "yo".</p>',opts:Object.values(uf).map(n=>({label:n.name,hint:`$${n.cash} \xB7 sospecha ${n.heat}. ${n.desc}`,fx(){A.profile=n,A.cash=n.cash,A.heat=n.heat}}))}),()=>({title:`PREPARACI\xD3N 4/4 \xB7 COMPRAS ($${A.cash})`,text:'<p>Un "proveedor" abre su gabardina. Dentro, un bazar de pecados. En el aeropuerto todo costar\xE1 m\xE1s y gastar\xE1 minutos.</p>',opts:g_.map(n=>({label:`${n.name} \xB7 $${n.cost}`,hint:n.desc,disabled:A.cash<n.cost,fx(){A.cash-=n.cost,n.id==="contact"?A.inv.contact++:A.inv[n.id]++}})).concat([{label:"\u2714 Terminar compras",hint:"Ir al resumen",done:!0}])}),()=>({title:"RESUMEN DEL VUELO",text:`<p><b>${A.cargo.name}</b> \xB7 ${A.method.name} \xB7 ${A.profile.name} \xB7 $${A.cash}</p>
    <p>Tienes <b>${se.missionSec} segundos reales</b> para abordar en la Puerta 27, pero tus c\xE1psulas explotan en <b>${Sl()} segundos</b>. Alarga tu vida con <b>anti\xE1cidos</b> \u{1F48A} del suelo, pastillas, caf\xE9, adrenalina al zafarte y escondi\xE9ndote (el desgaste baja a la mitad). Los <b>relojes</b> \u23F1 dorados suman segundos de misi\xF3n.</p>
    <p>Cuidado: algunos polic\xEDas van <b>armados</b> y disparan si huyes. Modo <b>${Wi[se.diff]}</b>: ${se.armedPct}% de los polic\xEDas van armados y tienes ${se.hp} de salud. Los pasillos del laberinto cambian y las puertas se cierran a tu espalda.</p>
    <p>Esquiva los conos de visi\xF3n de los guardias, no te acerques a los perros y cuida el est\xF3mago.</p>`,opts:[{label:"\u2708 Entrar al aeropuerto",hint:"Empieza la cuenta regresiva",go:!0}]})];async function W_(){A=df();for(let n=0;n<3;n++)(await fs(uh[n]())).fx();for(;;){let n=await fs(uh[3]());if(n.done)break;n.fx()}await fs(uh[4]()),X_()}function X_(){P_(A.profile),sa(),Nh(Vd(K.seed||1));let n=ke.userData;n.ang=0,tt.yaw=0,tt.x=n.px,tt.y=1.6+Math.sin(tt.pitch)*tt.dist,tt.z=n.pz+Math.cos(tt.pitch)*tt.dist,document.body.classList.remove("nohud"),K.mode="play",K.busy=!1,Se("help").style.opacity=Xi?0:1,setTimeout(()=>Se("help").style.opacity=0,14e3),nt(`<b>Don Chuy:</b> "No me falles, mula. Y si vas a explotar, hazlo lejos de mi coche." <i>(${Wi[se.diff]}${K.daily?" \xB7 reto diario":""})</i>`,6500),zn&&(zn.parked=!1)}function bf(n){let e=n==="win",t=A.picked||0;At.runs++,e&&At.wins++;let i=e?Math.round(A.cargo.profit*(.6+.4*A.integrity/100)):0,s={novato:1,dificil:1.3,experto:1.8}[se.diff]||1,r=Math.round(e?(i/10+Math.max(0,A.time)*20+Math.max(0,A.life)*15+Math.max(0,A.hp)*2+t*30)*s:t*30+(A.passed?200:0)),a=Math.round(e?i/10*se.payoutMul+Math.max(0,A.time)*2:(t*6+(A.passed?40:0))*se.payoutMul);Hd(a);let o="";return e&&(o=Gd(se.diff,{score:r,time:+(A.playT||0).toFixed(1),date:new Date().toLocaleDateString(),seed:K.seed},K.daily)?" \u{1F3C6} <b>\xA1NUEVO R\xC9CORD!</b>":""),ea(),`<p style="text-align:center">Modo <b>${Wi[se.diff]}</b>${K.daily?" \xB7 reto diario":""} \xB7 Puntuaci\xF3n: <b>${r}</b> \xB7 Dinero ganado: <b>$${a}</b> (total $${At.money})${o}</p>`}var En={},Ct={};function Il(){if(Se("admin").classList.contains("on")){Se("admin").className="overlay",Se("admin").innerHTML="",K.paused=!1,sa();return}K.mode==="play"&&K.busy||(K.paused=!0,Od())}Fd(()=>{K.paused=!1,sa(),Pl()});addEventListener("keydown",n=>{if(!n.repeat){if(n.code==="F2"){n.preventDefault(),Il();return}Se("admin").classList.contains("on")||(En[n.code]=!0,Ct[n.code]=!0,K.dlgKey&&/^Digit[1-9]$/.test(n.code)&&K.dlgKey(+n.code.slice(5)-1),["Space","ArrowUp","ArrowDown"].includes(n.code)&&n.preventDefault())}});addEventListener("keyup",n=>{En[n.code]=!1});var tt={yaw:0,pitch:.5,dist:9.5,x:0,y:0,z:0};Xd({keys:En,pressed:Ct,cam:tt,canvas:kn.domElement,isTouch:Xi,clamp:cn});function Pl(){document.querySelectorAll("#diffSel button").forEach(n=>n.classList.toggle("on",n.dataset.d===se.diff)),Se("diffDesc").textContent=sh[se.diff],Se("moneyTag").textContent="Dinero permanente: $"+At.money}document.querySelectorAll("#diffSel button").forEach(n=>n.onclick=()=>{Gi(n.dataset.d),Pl(),Qe(440,.05)});Pl();async function Ef(n){x_(),Qe(520,.08),Xi&&Yd(),Se("title").classList.remove("on"),K.daily=n,K.seed=n?ul():Math.random()*1e9|0,W_()}Se("btnStart").onclick=()=>Ef(!1);Se("btnDaily").onclick=()=>Ef(!0);Se("btnAdmin").onclick=()=>Il();Se("btnAdminIn").onclick=()=>Il();Se("btnShop").onclick=async()=>{for(Se("title").classList.remove("on");;){let n=await fs({title:`TIENDA PERMANENTE \xB7 $${At.money}`,text:"<p>Mejoras que se guardan en este navegador y valen para todas las partidas. Ganas dinero al abordar (y un poco al fallar).</p>",opts:rh.map(e=>{let t=ii(e.id),i=t>=e.max;return{label:`${e.name} \xB7 nivel ${t}/${e.max}`,hint:i?"Nivel m\xE1ximo":`${e.desc} \xB7 $${e.cost(t)}`,disabled:i||At.money<e.cost(t),up:e.id}}).concat([{label:"\u2190 Volver",close:!0}])});if(n.close)break;kd(n.up)&&Qe(880,.08,"sine",.08)}Se("title").classList.add("on"),Pl()};Se("btnRecords").onclick=async()=>{Se("title").classList.remove("on");let n=t=>t.length?t.map((i,s)=>`${s+1}. <b>${i.score}</b> pts \xB7 ${i.time}s \xB7 ${i.date}`).join("<br>"):"<i>Sin r\xE9cords todav\xEDa</i>",e=yi.map(t=>`<p><b>${Wi[t]}</b><br>${n(ah(t,!1))}</p>`).join("")+`<p><b>Reto diario de hoy (${ul()}) \xB7 ${Wi[se.diff]}</b><br>${n(ah(se.diff,!0,ul()))}</p>`;await fs({title:"R\xC9CORDS",text:e,opts:[{label:"\u2190 Volver",close:!0}]}),Se("title").classList.add("on")};var yt=84,Mi=132,lr=-42,cr=-72,_l=[[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]],Sh=null,Tf=null,wf=null,vi=null,ps=null,ur=null,gs=null,bh=null,yl=null,pl=null,dh=null,ia=0,Ut={x:0,z:0};function fh(n){let e=new Uint8Array(yt*Mi);for(let t=0;t<Mi;t++)for(let i=0;i<yt;i++){let s=lr+i+.5,r=cr+t+.5;for(let a of ai)if(!a.dyn&&a.h>n&&s>a.x0-.7&&s<a.x1+.7&&r>a.z0-.7&&r<a.z1+.7){e[t*yt+i]=1;break}}return e}function ph(n,e){let t=n.slice();for(let i of ai){if(!i.dyn||i.h<=e||i.x0>5e3)continue;let s=Math.max(0,Math.floor(i.x0-.7-lr)),r=Math.min(yt-1,Math.ceil(i.x1+.7-lr)),a=Math.max(0,Math.floor(i.z0-.7-cr)),o=Math.min(Mi-1,Math.ceil(i.z1+.7-cr));for(let l=a;l<=o;l++)for(let c=s;c<=r;c++){let h=lr+c+.5,d=cr+l+.5;h>i.x0-.7&&h<i.x1+.7&&d>i.z0-.7&&d<i.z1+.7&&(t[l*yt+c]=1)}}return t}var Dh=(n,e)=>cn(Math.floor(e-cr),0,Mi-1)*yt+cn(Math.floor(n-lr),0,yt-1);function si(n,e,t){let i=new Int16Array(yt*Mi).fill(-1),s=new Int32Array(yt*Mi),r=0,a=0,o=Dh(n,e);if(t[o]){let l=-1,c=1e9,h=o%yt,d=o/yt|0;for(let u=-4;u<=4;u++)for(let p=-4;p<=4;p++){let g=h+p,_=d+u;g<0||_<0||g>=yt||_>=Mi||!t[_*yt+g]&&p*p+u*u<c&&(c=p*p+u*u,l=_*yt+g)}if(l<0)return i;o=l}for(i[o]=0,s[a++]=o;r<a;){let l=s[r++],c=l%yt,h=l/yt|0,d=i[l];for(let u=0;u<8;u++){let p=c+_l[u][0],g=h+_l[u][1];if(p<0||g<0||p>=yt||g>=Mi)continue;let _=g*yt+p;t[_]||i[_]>=0||u>=4&&(t[h*yt+p]||t[g*yt+c])||(i[_]=d+1,s[a++]=_)}}return i}function xs(n,e,t,i){if(!n)return null;let s=Dh(t,i),r=s%yt,a=s/yt|0,o=n[s]>=0?n[s]:1e9,l=-1,c=-1;for(let p=0;p<8;p++){let g=r+_l[p][0],_=a+_l[p][1];if(g<0||_<0||g>=yt||_>=Mi)continue;let m=_*yt+g;n[m]<0||e[m]&&!e[s]||p>=4&&(e[a*yt+g]||e[_*yt+r])||n[m]<o&&(o=n[m],l=g,c=_)}if(l<0)return null;let h=lr+l+.5-t,d=cr+c+.5-i,u=Math.hypot(h,d)||1;return{x:h/u,z:d/u}}function Ll(){Sh&&(vi=ph(Sh,.95),ps=ph(Tf,.6),ur=ph(wf,.3),gs=si(0,-62,ur))}function q_(){Sh=fh(.95),Tf=fh(.6),wf=fh(.3),Ll()}function Af(n,e,t){if(!gs)return{x:0,z:-62};for(let i=0;i<t;i++){let s=xs(gs,ur,n,e);if(!s)break;n+=s.x,e+=s.z}return{x:n,z:e}}function Dl(n,e,t){for(let i=0;i<2;i++)for(let s of ai){if(s.h<=t)continue;let r=cn(n.x,s.x0,s.x1),a=cn(n.z,s.z0,s.z1),o=n.x-r,l=n.z-a,c=o*o+l*l;if(c<e*e)if(c>1e-6){let h=Math.sqrt(c);n.x+=o/h*(e-h),n.z+=l/h*(e-h)}else{let h=n.x-s.x0,d=s.x1-n.x,u=n.z-s.z0,p=s.z1-n.z,g=Math.min(h,d,u,p);g===h?n.x=s.x0-e:g===d?n.x=s.x1+e:g===u?n.z=s.z0-e:n.z=s.z1+e}}}function Y_(n,e){let t=0;for(let i of ai)i.h<=1.3&&i.h>0&&n>i.x0-.2&&n<i.x1+.2&&e>i.z0-.2&&e<i.z1+.2&&(t=Math.max(t,i.h));return t}function $_(n,e,t,i,s,r){let a=s-t,o=r-i,l=a*a+o*o||1,c=cn(((n-t)*a+(e-i)*o)/l,0,1);return Math.hypot(n-(t+a*c),e-(i+o*c))}var Z_=new _t(1,1,1),J_=[-34.4,-40.4,-46.4,-52.4,-58.4],K_=[[-38,-30],[-26,-14],[-8,8],[14,26]],li=[],$i=[],qe={t:0,warned:!1,rng:Math.random,navT:0,dirty:!1,entLocked:!1,exitLocked:!1,lastWarnSec:0};function cs(n,e,t){let i=e==="low"?1:2.6,s=new Le(Z_,ln(t||(e==="low"?14275264:e==="door"?11546672:12093003)));s.castShadow=!0,s.receiveShadow=!0,s.visible=!1,rt.add(s);let r={x0:9999,x1:9999,z0:n-.6,z1:n+.6,h:0,dyn:!0};return ai.push(r),Rh.push(r),e!=="low"&&bl.push(r),{b:r,mesh:s,H:i,kind:e,zc:n}}function Bn(n,e,t,i=1){let s=n.b;if(t-e<.05||i<=0){s.x0=s.x1=9999,s.h=0,n.mesh.visible=!1;return}s.x0=e,s.x1=t,s.h=n.H,n.mesh.visible=!0,n.mesh.scale.set(t-e,n.H*i,s.z1-s.z0),n.mesh.position.set((e+t)/2,n.H*i/2,n.zc)}function vl(n){let e=se.gapWidth,t=cn(n.gx-e/2,-40,40-e),i=t+e;n.g0=t,n.g1=i;let s=[[-40,t],[i,40]],r=s[0][1]-s[0][0]>=s[1][1]-s[1][0]?0:1,a=[],o=null;s.forEach((l,c)=>{if(!(l[1]-l[0]<.3))if(c===r&&l[1]-l[0]>=22){let h=cn((l[0]+l[1])/2+n.lowOff,l[0]+8,l[1]-8);o=[h-4,h+4],a.push([l[0],h-4]),a.push([h+4,l[1]])}else a.push(l)}),n.pieces.forEach((l,c)=>a[c]?Bn(l,a[c][0],a[c][1]):Bn(l,0,0)),o?Bn(n.low,o[0],o[1]):Bn(n.low,0,0),n.lowC=o?(o[0]+o[1])/2:null,n.doorOn?Bn(n.door,t,i,Math.max(.03,n.doorS)):Bn(n.door,0,0)}function j_(n){let e=qe.rng,t=li[n.i-1],i=li[n.i+1],s=n.gx,r=-1;for(let a=0;a<24;a++){let o=(e()*2-1)*24,l=Math.min(t?Math.abs(o-t.tx):99,i?Math.abs(o-i.tx):99);Math.abs(o-n.gx)<se.gapWidth*.9&&(l-=40),l>r&&(r=l,s=o)}return s}function Q_(){J_.forEach((e,t)=>{let i={zc:e,i:t,gx:0,tx:0,g0:0,g1:0,lowOff:0,lowC:null,closed:!1,doorOn:!1,doorS:0,pieces:[cs(e,"tall"),cs(e,"tall"),cs(e,"tall")],low:cs(e,"low"),door:cs(e,"door")};li.push(i)}),K_.forEach(([e,t],i)=>{let s=cs(-.6,"door"),r=cs(-28.6,"door"),a=nn("\u2716 CERRADO",(e+t)/2,3.4,1.4,7,"#ff4d4d");a.visible=!1,$i.push({a:e,b:t,ent:s,ex:r,tag:a,entOn:!1,exOn:!1,entS:0,exS:0})});let n=(e,t,i,s,r,a,o)=>{qt(e-3,t,e+3,i,2.2,s,0),nn(r,e,3.4,o,5.5,a)};n(-35.5,-39.8,-39.4,15266542,"FARMACIA \u271A","#3ddc84",-39.8),n(35.5,-41.4,-41,15783136,"PERFUMER\xCDA","#ff9fd0",-41),n(-35.5,-47.4,-47,15261896,"\xD3PTICA \u{1F576}","#ffd18f",-47),n(35.5,-53.4,-53,4878218,"BA\xD1OS \u{1F6BB}","#8fd3ff",-53),nn("DUTY FREE",0,6,-30,10,"#ffd75a"),Nh(Math.random)}function Nh(n){qe.rng=n,qe.entLocked=!1,qe.exitLocked=!1,qe.warned=!1,qe.t=se.shiftSec||0,li.forEach((e,t)=>{e.gx=e.tx=(t%2?-1:1)*(8+n()*14),e.lowOff=(n()-.5)*10,e.closed=!1,e.doorOn=!1,e.doorS=0,vl(e)}),$i.forEach(e=>{e.entOn=e.exOn=!1,e.entS=e.exS=0,Bn(e.ent,0,0),Bn(e.ex,0,0),e.tag.visible=!1}),Ll(),Ih()}function ey(){if(!se.laneClose)return;let n=se.diff==="experto"?2:1,e=new Set;for(;e.size<n;)e.add(Math.floor(qe.rng()*4));$i.forEach((t,i)=>{let s=e.has(i);t.entOn=s,t.entS=s?Math.max(.03,t.entS):0,t.tag.visible=s,s||Bn(t.ent,0,0)}),qe.dirty=!0}function ty(n){if(se.doorsClose){!qe.entLocked&&n.pz<-2.5&&(qe.entLocked=!0,$i.forEach(e=>{e.entOn=!0,e.entS=Math.max(.03,e.entS),e.tag.visible=!1}),qe.dirty=!0,mh("Las puertas del control se cierran a tu espalda.")),!qe.exitLocked&&n.pz<-30.8&&(qe.exitLocked=!0,$i.forEach(e=>{e.exOn=!0,e.exS=.03}),qe.dirty=!0,mh("La salida del control se bloquea tras de ti."));for(let e of li)!e.closed&&n.pz<e.zc-2.8&&(e.closed=!0,e.doorOn=!0,e.doorS=.03,vl(e),qe.dirty=!0,mh("Una puerta se cierra detr\xE1s de ti. No hay vuelta atr\xE1s."))}}function mh(n){Si(.25,.3,500),Qe(90,.15,"square",.08),nt(n,3e3)}function Rf(){let n=ke.userData,e=!1;n.pz>2&&!qe.entLocked&&se.laneClose&&(ey(),e=!0);for(let t of li)t.closed||n.pz<t.zc+3.5||(t.tx=j_(t),e=!0);e&&(qe.shifted=!0,Si(.7,.3,300),Qe(70,.25,"sawtooth",.1),nt("<b>\xA1El laberinto cambi\xF3!</b> Busca otro camino.",3200),K.shake=Math.max(K.shake||0,.35),qe.dirty=!0)}function ny(n){let e=!1;for(let i of li)Math.abs(i.tx-i.gx)>.01?(i.gx+=cn(i.tx-i.gx,-14*n,14*n),vl(i),e=!0):i.doorOn&&i.doorS<1&&(i.doorS=Math.min(1,i.doorS+n*2.2),vl(i),e=!0);for(let i of $i)i.entOn&&(i.entS=Math.min(1,i.entS+n*2.2),Bn(i.ent,i.a,i.b,i.entS)),i.exOn&&(i.exS=Math.min(1,i.exS+n*2.2),Bn(i.ex,i.a,i.b,i.exS));if((e||qe.dirty)&&(qe.navT-=n,qe.navT<=0&&(qe.navT=.25,e||(qe.dirty=!1),Ll(),!e&&qe.shifted&&(qe.shifted=!1,Ih()))),K.mode!=="play"||K.busy||!A)return;let t=ke.userData;if(ty(t),se.shiftSec>0){qe.t-=n;let i=Math.ceil(Math.max(0,qe.t));qe.t<=se.shiftWarn&&se.shiftWarn>0&&i!==qe.lastWarnSec&&qe.t>0&&(qe.lastWarnSec=i,Qe(520,.06,"square",.05)),qe.t<=0&&(Rf(),qe.t=se.shiftSec,qe.lastWarnSec=0)}}var hr=[],ms=[],iy=(()=>{let n=document.createElement("canvas");n.width=n.height=64;let e=n.getContext("2d"),t=e.createRadialGradient(32,32,4,32,32,30);return t.addColorStop(0,"rgba(235,235,235,.95)"),t.addColorStop(1,"rgba(200,200,200,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),new Kn(n)})();function Uh(n,e,t,i){for(let s of hr)if($_(s.x,s.z,n,e,t,i)<s.r*.75)return!0;return!1}var tf=(n,e,t,i)=>wl(n,e,t,i,bl)&&!Uh(n,e,t,i);function na(n){if(!A||A.over||K.busy||K.mode!=="play")return;let e=ke.userData;if(!(!A.inv[n]||e.hidden))if(A.inv[n]--,n==="smoke"){let t=new Dt;for(let i=0;i<7;i++){let s=new xi(new Jn({map:iy,transparent:!0,depthWrite:!1,opacity:.9}));s.scale.set(5,5,1),s.position.set(vt(-2.2,2.2),vt(.8,2.6),vt(-2.2,2.2)),t.add(s)}t.position.set(e.px,0,e.pz),rt.add(t),hr.push({x:e.px,z:e.pz,r:5.5,t:se.itemDur,m:t}),Si(.8,.25,1500),nt("<b>Bomba de humo:</b> los polic\xEDas y los perros pierden la vista.",2600)}else if(n==="decoy"){let t=e.px,i=e.pz,s=Math.sin(e.ang),r=Math.cos(e.ang);for(let o=0;o<14;o++){let l=t+s,c=i+r;if(!wl(t,i,l,c,ai.filter(h=>h.h>1.2&&h.x0<5e3),.25))break;t=l,i=c}let a=new Le(new _t(.4,.3,.4),new Wt({color:16763955,emissive:16746496,emissiveIntensity:1.2}));a.position.set(t,.2,i),rt.add(a),ms.push({x:t,z:i,t:6,m:a,beepT:0}),nt("<b>Se\xF1uelo lanzado:</b> los polic\xEDas van hacia el ruido.",2600)}else n==="emp"?(A.camsOff=!0,A.empT=se.itemDur,A.radioOff=se.itemDur,Tn&&(Tn.stun=se.itemDur),Si(.5,.4,2200),Qe(1800,.2,"sawtooth",.08),nt("<b>Pulso EMP:</b> c\xE1maras, radio y dron fuera de servicio.",2800)):n==="dogspray"&&(A.dogOff=se.itemDur,dr.forEach(t=>{t.state==="hunt"&&Math.hypot(t.x-e.px,t.z-e.pz)>3&&(t.state="return",t.sniff=0)}),Si(.4,.2,3e3),nt("<b>Spray anti-perros:</b> los perros pierden el rastro.",2600))}function sy(n){for(let e=hr.length-1;e>=0;e--){let t=hr[e];t.t-=n,t.m.rotation.y+=n*.2,t.m.children.forEach(i=>i.material.opacity=Math.min(.9,t.t/2)),t.t<=0&&(rt.remove(t.m),hr.splice(e,1))}for(let e=ms.length-1;e>=0;e--){let t=ms[e];t.t-=n,t.beepT-=n,t.beepT<=0&&(t.beepT=.55,Qe(1400,.05,"square",.05)),t.m.position.y=.2+Math.abs(Math.sin(K.t*12))*.15,t.t<=0&&(rt.remove(t.m),ms.splice(e,1))}A&&(A.empT>0&&(A.empT-=n,A.empT<=0&&(A.camsOff=!1)),A.radioOff>0&&(A.radioOff-=n),A.dogOff>0&&(A.dogOff-=n))}var Tn=null;function ry(){let n=new Dt,e=new Le(new _t(.9,.22,.9),new Wt({color:1711396}));n.add(e);let t=[];[[-.55,-.55],[.55,-.55],[-.55,.55],[.55,.55]].forEach(([a,o])=>{let l=new Le(new jn(.34,.34,.03,12),new Gt({color:1639,transparent:!0,opacity:.55}));l.position.set(a,.16,o),n.add(l),t.push(l)});let i=new Le(new Qn(.12,8,8),new Gt({color:16720418}));i.position.set(0,-.05,.45),n.add(i);let s=new Le(new $s(4.4,7,20,1,!0),new Gt({color:16773800,transparent:!0,opacity:.12,side:_n,depthWrite:!1}));s.position.y=-3.5,n.add(s);let r=new Le(new Ys(4.4,28),new Gt({color:16773800,transparent:!0,opacity:.28,depthWrite:!1}));r.rotation.x=-Math.PI/2,rt.add(r),n.position.set(0,7,-30),n.visible=!1,r.visible=!1,rt.add(n),Tn={m:n,disc:r,beam:s,led:i,rotors:t,x:0,z:-30,y:7,wp:0,stun:0,sees:!1,active:!1,tx:0,tz:-30}}var nf=[[0,-31],[-20,-37.4],[20,-43.4],[-20,-49.4],[20,-55.4],[0,-62],[20,-31],[-20,-43.4],[20,-37.4],[-20,-55.4]];function ay(n){let e=Tn;if(!e)return;let t=K.mode==="play"&&A&&se.droneOn;if(e.active=!!(t&&(A.passed||se.diff==="experto")),e.m.visible=e.active,e.disc.visible=e.active,!e.active)return;let i=ke.userData;if(e.rotors.forEach((d,u)=>d.rotation.y+=n*40*(u%2?1:-1)),e.stun>0){e.stun-=n,e.y=Math.max(3,e.y-n*2),e.sees=!1,e.disc.material.color.set(5592405),e.m.position.set(e.x,e.y,e.z),e.disc.position.set(e.x,.08,e.z);return}e.y+=(7-e.y)*Math.min(1,n*2);let s,r;if(A.lastKnown&&vn.some(d=>d.chaser))s=A.lastKnown.x,r=A.lastKnown.z;else{let d=nf[e.wp];s=d[0],r=d[1],Math.hypot(s-e.x,r-e.z)<2&&(e.wp=(e.wp+1+Math.floor(Math.random()*3))%nf.length)}let a=s-e.x,o=r-e.z,l=Math.hypot(a,o);if(l>.5){let d=Math.min(se.droneSpeed,l*2);e.x+=a/l*d*n,e.z+=o/l*d*n}e.m.position.set(e.x,e.y,e.z),e.disc.position.set(e.x,.08,e.z);let c=Math.hypot(i.px-e.x,i.pz-e.z),h=e.sees;if(e.sees=!K.busy&&!i.hidden&&c<4.4&&!Uh(e.x,e.z,i.px,i.pz),e.disc.material.color.set(e.sees?16728128:16773800),e.beam.material.color.set(e.sees?16736352:16773800),e.led.material.color.set(e.sees?16711680:2293606),e.sees&&(h||(nt("<b>\u{1F681} \xA1El dron te ilumina!</b> Todos saben d\xF3nde est\xE1s.",2600),Qe(1100,.15,"sawtooth",.07)),A.lastKnown={x:i.px,z:i.pz},oi(7*n),vn.forEach(d=>{d.stun<=0&&d.state!=="hunt"&&(d.state="hunt",d.huntT=0,d.chaser=!1)}),e.alertT=(e.alertT||0)-n,A.heat>=se.chaseHeat&&e.alertT<=0&&!vn.some(d=>d.chaser))){e.alertT=2;let d=vn.filter(u=>u.stun<=0).sort((u,p)=>Math.hypot(u.x-i.px,u.z-i.pz)-Math.hypot(p.x-i.px,p.z-i.pz))[0];d&&Nl(d)}}function oy(n){let e=ke.userData;e.hidden=n,e.hideT=0,e.crouch=!1,ke.visible=!1,A.compromised=!!K.chasersSee,nt(A.compromised?"<b>\xA1Te vieron esconderte!</b> Van a revisar la taquilla...":"Te metes en una taquilla. Huele a calcetines y a miedo.",4e3)}function Eh(){let n=ke.userData,e=n.hidden;e&&(n.px=e.ex,n.pz=e.ez,n.vx=n.vz=0,n.hidden=null,n.hideT=0,ke.visible=!0,A.compromised=!1)}var gh=!1;async function Ml(n,e){if(K.busy||A.over||gh)return;gh=!0,K.busy=!0;let t=ke.userData;t.hidden&&Eh(),Qe(160,.3,"sawtooth",.1),Si(.4,.3,800),nt(e==="dog"?"<b>\xA1EL PERRO TE AGARR\xD3!</b>":"<b>\xA1UN POLIC\xCDA TE AGARR\xD3!</b>",3e3);let i=await Lh("struggle",e==="dog"?{n:16,t:4300}:{n:20,t:4300});if(A.over)return;if(!i.score){Zi("busted","DETENIDO",e==="dog"?'Los colmillos del perro se cierran sobre tu pantorrilla. "Buen chico", dice el gu\xEDa. Esta noche cenar\xE1 mejor que t\xFA.<br>Las esposas son fr\xEDas. Tu est\xF3mago, por ahora, es el \xFAnico que no est\xE1 arrestado.':'Una mano enorme te aplasta contra la pared. "Alto, ciudadano". Lo de "ciudadano" son\xF3 a "culpable".<br>Las esposas son fr\xEDas. Tu est\xF3mago, por ahora, es el \xFAnico que no est\xE1 arrestado.');return}n.stun=se.stunSec,A.invuln=3,oi(20),Cl(se.adrenLife);let s=t.px-n.x,r=t.pz-n.z,a=Math.hypot(s,r)||1;t.px+=s/a*1.8,t.pz+=r/a*1.8,Ut.x=t.px,Ut.z=t.pz,Dl(Ut,Cf,0),t.px=Ut.x,t.pz=Ut.z,nt("<b>\xA1Te zafaste!</b> Corre, salta o esc\xF3ndete antes de que se recupere.",4500),K.busy=!1,gh=!1}var Cf=.45,sf=0;function ly(n){let e=ke.userData,t=K.mode==="play";if(t&&!K.busy&&(En.ArrowLeft&&(tt.yaw+=n*1.8),En.ArrowRight&&(tt.yaw-=n*1.8)),e.hidden){e.px=e.hidden.x,e.pz=e.hidden.z,e.vx=e.vz=0,e.hideT+=n;return}let i=0,s=0,r=!1;if(t&&!K.busy){let c=ii("shoes")*.25,h=(En.KeyD?1:0)-(En.KeyA?1:0),d=(En.KeyS?1:0)-(En.KeyW?1:0),u=0;if(On.mag>.08&&(h+=On.x,d+=On.z,u=On.mag),h||d){let f=Math.hypot(h,d),S=h/f,R=d/f,M=-Math.sin(tt.yaw),b=-Math.cos(tt.yaw),E=Math.cos(tt.yaw),I=-Math.sin(tt.yaw);i=M*-R+E*S,s=b*-R+I*S,r=!e.crouch&&(!!(En.ShiftLeft||En.ShiftRight)||u>.9)}let p=se.walk+c,g=se.run+c,_=e.crouch?se.crouchSpeed:r?g:p;u&&!r&&!e.crouch&&(_=p*Math.min(1,u/.9));let m=Math.min(1,n*10);e.vx+=(i*_-e.vx)*m,e.vz+=(s*_-e.vz)*m,Ct.Space&&e.grounded&&(e.vy=9,e.grounded=!1,e.crouch=!1,Qe(320,.05,"triangle",.04))}else e.vx*=.8,e.vz*=.8;e.px+=e.vx*n,e.pz+=e.vz*n,Ut.x=e.px,Ut.z=e.pz,Dl(Ut,Cf,e.y+.12),e.px=Ut.x,e.pz=Ut.z,e.px=cn(e.px,-118,118),e.pz=cn(e.pz,-69,56),e.vy-=26*n,e.y+=e.vy*n;let a=Y_(e.px,e.pz);e.y<=a&&e.vy<=0?(!e.grounded&&e.vy<-6&&t&&Qe(110,.05,"triangle",.05),e.y=a,e.vy=0,e.grounded=!0):e.y>a+.02&&(e.grounded=!1);let o=Math.hypot(e.vx,e.vz);o>.3&&(e.ang=ri(e.ang,Math.atan2(e.vx,e.vz),Math.min(1,n*12))),ke.position.set(e.px,e.y,e.pz),ke.rotation.y=e.ang,ke.scale.y=e.crouch?.78:1;let l=ar(ke,o,n,r&&o>5);e.grounded||(e.legL.rotation.x=-.9,e.legR.rotation.x=.4,e.armL.rotation.x=-2.5,e.armR.rotation.x=-2),o>.8&&l!==sf&&(sf=l,t&&!e.crouch&&Qe(r?120:90,.04,"triangle",.035)),e.sprint=r&&o>5,e.speed=o}function cy(n,e,t,i,s,r){let a=new Nt().setFromPoints([new F(n,e,t),new F(i,s,r)]),o=new Nr(a,new Xs({color:16769658}));rt.add(o),setTimeout(()=>{rt.remove(o),a.dispose()},90)}var hy=0;function Nl(n){if(n.stun>0||!A)return;let e=ke.userData;n.state="hunt",n.chaser=!0,n.huntT=0,n.flank=hy++%2===1,n.lostT=0,n.armed&&(n.warn=se.shootWarn,n.fireT=0),A.lastKnown={x:e.px,z:e.pz},bh=si(e.px,e.pz,vi),ia=.3;let t=se.radioAll&&!(A.radioOff>0);vn.forEach(i=>{i!==n&&i.state==="patrol"&&i.stun<=0&&(t||Math.hypot(i.x-n.x,i.z-n.z)<se.alertRadius)&&(i.state="hunt",i.chaser=!1,i.huntT=0,i.tf="G")}),Qe(1300,.1,"sawtooth",.06),setTimeout(()=>Qe(900,.1,"sawtooth",.06),130),nt(n.armed?"<b>\xA1ALTO O DISPARO!</b>":t?'<b>\xA1POLIC\xCDA!</b> Radio: "\xA1Sospechoso localizado!"':'<b>\xA1POLIC\xCDA!</b> "\xA1ALTO AH\xCD!"',3e3)}function uy(n,e){let t=ke.userData;n.fireT=vt(se.fireMin,Math.max(se.fireMin,se.fireMax));let i=cn(se.hitBase-e*.016,.1,se.hitBase);t.y>.4&&(i*=.4),t.crouch&&(i*=.7),t.sprint&&(i*=.8),A.invuln>0&&(i=0);let s=Math.random()<i,r=t.px+(s?0:vt(-1.8,1.8)),a=t.pz+(s?0:vt(-1.8,1.8));cy(n.x+Math.sin(n.ang)*.6,1.25,n.z+Math.cos(n.ang)*.6,r,1+t.y,a),n.flash.visible=!0,n.flashT=.08,Si(.12,.3,2600),Qe(150,.08,"square",.1),s?(A.hp-=se.bulletDmg,A.hitFlash=.5,K.shake=Math.max(K.shake||0,.4),Al(`-${se.bulletDmg} salud`,"#ff3b3b"),nt("<b>\xA1TE DISPARARON!</b>",1500),navigator.vibrate&&navigator.vibrate(120),A.hp<=0&&Zi("shot","TE DISPARARON",'Un estruendo seco y el suelo sube hacia tu cara. "Alto" era una sugerencia con balas.<br>Lo \xFAltimo que escuchas es a alguien diciendo "tranquilos, tiene algo en el est\xF3mago". Eso no mejora el d\xEDa de nadie.')):Math.random()<.5&&nt("Una bala silba junto a tu oreja.",1200)}function dy(n){let e=ke.userData,t=K.mode==="play"&&A;K.chasing=!1,K.chasersSee=!1;let i=ms[0]||null;if(t&&(A.invuln=Math.max(0,A.invuln-n),A.hitFlash=Math.max(0,A.hitFlash-n),ia-=n,ia<=0)){ia=.3;let r=vn.some(a=>a.state==="hunt");A.lastKnown&&r&&(bh=si(A.lastKnown.x,A.lastKnown.z,vi)),A.lastKnownDog&&dr.some(a=>a.state==="hunt")&&(yl=si(A.lastKnownDog.x,A.lastKnownDog.z,ps)),se.flank&&vn.some(a=>a.chaser&&a.flank)?(A.flankPt=Af(e.px,e.pz,16),pl=si(A.flankPt.x,A.flankPt.z,vi)):pl=null,dh=i?si(i.x,i.z,vi):null}let s=!1;for(let r of vn){if(r.moving=!1,r.flashT>0&&(r.flashT-=n,r.flashT<=0&&(r.flash.visible=!1)),r.stun>0){r.stun-=n,r.cone.visible=!1,r.bang.visible=!1,r.seeing=!1,r.aiming=!1,r.m.position.set(r.x,0,r.z),ar(r.m,0,n,!1);continue}r.cone.visible=!0,r.cone.scale.setScalar((e.crouch?.55:1)*se.visionMul);let a=!1;if(t&&!e.hidden){let o=e.px-r.x,l=e.pz-r.z,c=Math.hypot(o,l),h=r.range*se.visionMul*(e.crouch?.55:1);(c<h&&Math.abs(of(Math.atan2(o,l)-r.ang))<r.fov||c<2.2)&&tf(r.x,r.z,e.px,e.pz)&&(a=!0)}if(a&&!r.seeing&&Qe(1500,.06,"square",.04),r.seeing=a,a?(s=!0,r.lostT=0,r.aware=Math.min(1.5,r.aware+n*(.5+A.heat/90+(e.sprint?.6:0))),r.aware>=1&&A.heat>=se.chaseHeat&&!r.chaser&&Nl(r),r.chaser&&(A.lastKnown={x:e.px,z:e.pz},K.chasersSee=!0),r.tf="G"):(r.aware=Math.max(0,r.aware-n*.4),r.lostT=(r.lostT||0)+n),r.state==="patrol"){if(r.path.length>1)if(r.wait>0)r.wait-=n,r.ang+=Math.sin(K.t*2)*n*1.2;else{let o=r.path[r.i],l=o[0]-r.x,c=o[1]-r.z,h=Math.hypot(l,c),d=r.speed*se.patrolMul;h<.4?(r.i=(r.i+1)%r.path.length,r.wait=vt(.4,1.6)):(r.x+=l/h*d*n,r.z+=c/h*d*n,r.ang=ri(r.ang,Math.atan2(l,c),Math.min(1,n*5)),r.moving=!0,r.curSpeed=d)}else r.ang=r.base+Math.sin(K.t*.8+r.x)*r.sweep;i&&Math.hypot(i.x-r.x,i.z-r.z)<32&&!a&&(r.state="hunt",r.chaser=!1,r.huntT=0,r.tf="DEC")}else if(r.state==="hunt"){i&&!a&&(!r.chaser||r.lostT>2)?r.tf="DEC":r.tf==="DEC"&&!i&&(r.tf="G");let o=A?A.lastKnown:null,l=bh;r.tf==="DEC"&&i&&dh?(o=i,l=dh):r.chaser&&r.flank&&se.flank&&pl&&A&&A.flankPt&&r.lostT>.4&&(o=A.flankPt,l=pl);let c=o?Math.hypot(o.x-r.x,o.z-r.z):0;if(o&&c>1.6&&l){let h=xs(l,vi,r.x,r.z);h&&(r.curSpeed=r.chaser?A.heat>70?se.chaseSpeedHot:se.chaseSpeed:se.chaseSpeed*.68,r.x+=h.x*r.curSpeed*n,r.z+=h.z*r.curSpeed*n,r.ang=ri(r.ang,Math.atan2(h.x,h.z),Math.min(1,n*9)),r.moving=!0,Ut.x=r.x,Ut.z=r.z,Dl(Ut,.45,.95),r.x=Ut.x,r.z=Ut.z),r.huntT=0}else r.huntT+=n,r.ang+=Math.sin(K.t*3)*n*2.2,r.huntT>6&&(r.state="return",r.chaser=!1,r.aware=0,r.tf="G",r.retField=si(r.path[r.i][0],r.path[r.i][1],vi))}else if(r.state==="return"){let o=r.path[r.i][0],l=r.path[r.i][1];if(Math.hypot(o-r.x,l-r.z)<1.2)r.state="patrol";else{let c=xs(r.retField,vi,r.x,r.z);c?(r.curSpeed=2.4,r.x+=c.x*2.4*n,r.z+=c.z*2.4*n,r.ang=ri(r.ang,Math.atan2(c.x,c.z),Math.min(1,n*6)),r.moving=!0):r.state="patrol"}}if(r.aiming=!1,t&&r.armed&&r.chaser&&!e.hidden&&!K.busy){let o=e.px-r.x,l=e.pz-r.z,c=Math.hypot(o,l);c<se.shootRange&&c>3.2&&tf(r.x,r.z,e.px,e.pz)&&(r.aiming=!0,r.warn-=n,r.fireT-=n,r.ang=ri(r.ang,Math.atan2(o,l),Math.min(1,n*10)),r.warn<=0&&r.fireT<=0&&uy(r,c))}if(r.m.position.set(r.x,0,r.z),r.m.rotation.y=r.ang,ar(r.m,r.moving?r.curSpeed:0,n,r.chaser&&r.moving),r.aiming&&(r.m.userData.armR.rotation.x=-1.5),r.bang.visible=a||r.chaser,r.cone.material.color.set(a||r.chaser?16724016:16769357),r.cone.material.opacity=a||r.chaser?.38:.2,r.chaser&&(K.chasing=!0),t&&!K.busy){let o=Math.hypot(e.px-r.x,e.pz-r.z);(r.chaser&&A.invuln<=0&&!e.hidden&&o<1.15&&e.y<1||e.hidden&&r.state==="hunt"&&A.invuln<=0&&Math.hypot(e.hidden.x-r.x,e.hidden.z-r.z)<2.1&&(A.compromised||Math.random()<n*.8))&&Ml(r,"guard")}}if(t&&!K.busy)if(s){let r=(2.2+(e.sprint?4.5:0)+A.heat*.05)*(A.profile.id==="student"?.85:1)*(A.disguised?.7:1)*(A.camsOff?.35:1);oi(r*n)}else A.heat=Math.max(0,A.heat-(e.hidden&&!A.compromised?1.6:.7)*n);K.seen=s}function If(n){if(!A)return;let e=ke.userData;n.state="hunt",n.huntT=0,A.lastKnownDog={x:e.px,z:e.pz},yl=si(e.px,e.pz,ps),ia=.3,oi(8),Qe(260,.12,"sawtooth",.08),setTimeout(()=>Qe(220,.12,"sawtooth",.08),150),nt("<b>\xA1El perro te detect\xF3!</b> Corre, salta o esc\xF3ndete.",4e3),(n.h.state!=="hunt"||!n.h.chaser)&&Nl(n.h)}function fy(n){let e=ke.userData,t=K.mode==="play"&&A,i=0;for(let s of dr){let r=s.h,a=0,o=!1;if(s.stun>0){s.stun-=n,s.m.position.set(s.x,0,s.z),Kd(s.m,0,n,!1);continue}let l=Math.hypot(e.px-s.x,e.pz-s.z);if(t&&s.state!=="hunt"&&!K.busy){let c=Mf("dog"),h=se.dogRadius+c*se.dogRadiusSmell;if(l<h&&!(A.dogOff>0)){let d=c*se.dogRate*(1-l/h);wl(s.x,s.z,e.px,e.pz,bl)||(d*=.55),Uh(s.x,s.z,e.px,e.pz)&&(d*=.5),e.hidden&&(d*=.35),e.crouch&&(d*=.75),e.sprint&&(d*=1.3),s.sniff+=d*n}else s.sniff=Math.max(0,s.sniff-.15*n);s.sniff>=1&&If(s)}if(s.state==="follow"){let c=r.x+Math.sin(r.ang+.9)*s.off,h=r.z+Math.cos(r.ang+.9)*s.off,d=c-s.x,u=h-s.z,p=Math.hypot(d,u);a=Math.min(p*3,3.2),p>.05&&(s.x+=d/p*a*n,s.z+=u/p*a*n,s.ang=ri(s.ang,Math.atan2(d,u),Math.min(1,n*8))),t&&s.sniff>.25&&l<30&&(s.ang=ri(s.ang,Math.atan2(e.px-s.x,e.pz-s.z),Math.min(1,n*3))),o=s.sniff>.5}else if(s.state==="hunt"){o=!0;let c=e.hidden?l<5:l<16;t&&c&&!(A.dogOff>0&&l>3)&&(A.lastKnownDog={x:e.px,z:e.pz});let h=A&&A.lastKnownDog?A.lastKnownDog:{x:s.x,z:s.z};if(Math.hypot(h.x-s.x,h.z-s.z)>1.2&&yl){let u=xs(yl,ps,s.x,s.z);u&&(a=se.dogSpeed,s.x+=u.x*a*n,s.z+=u.z*a*n,s.ang=ri(s.ang,Math.atan2(u.x,u.z),Math.min(1,n*12)),Ut.x=s.x,Ut.z=s.z,Dl(Ut,.35,.6),s.x=Ut.x,s.z=Ut.z),s.huntT=0}else s.huntT+=n,s.huntT>5&&(s.state="return",s.sniff=.3,s.retT=0);t&&!K.busy&&A.invuln<=0&&(!e.hidden&&l<1.05&&e.y<1||e.hidden&&Math.hypot(e.hidden.x-s.x,e.hidden.z-s.z)<1.6)&&Ml(s,"dog")}else if(s.state==="return"){s.retT-=n,s.retT<=0&&(s.retT=.6,s.retField=si(r.x,r.z,ps));let c=s.retField?xs(s.retField,ps,s.x,s.z):null;Math.hypot(r.x-s.x,r.z-s.z)<2.5||!c?s.state="follow":(a=4.5,s.x+=c.x*a*n,s.z+=c.z*a*n,s.ang=ri(s.ang,Math.atan2(c.x,c.z),Math.min(1,n*8)))}s.sp=a,s.m.position.set(s.x,0,s.z),s.m.rotation.y=s.ang,Kd(s.m,a,n,o),s.state==="hunt"&&(K.chasing=!0),o&&Math.random()<n*3&&Qe(240,.07,"sawtooth",.05),i=Math.max(i,s.state==="hunt"?1:s.sniff)}A&&(A.sniff=Math.min(1,i))}function py(n){for(let e of Ah){if(e.queue){ar(e.m,0,n,!1);continue}if(e.wait>0){e.wait-=n,ar(e.m,0,n,!1);continue}if(!e.t){w_(e);continue}let t=e.t.x-e.p.x,i=e.t.z-e.p.z,s=Math.hypot(t,i);if(s<.3){e.t=null,e.wait=vt(1,5);continue}e.p.x+=t/s*e.speed*n,e.p.z+=i/s*e.speed*n,e.ang=ri(e.ang,Math.atan2(t,i),Math.min(1,n*6)),e.m.position.set(e.p.x,0,e.p.z),e.m.rotation.y=e.ang,ar(e.m,e.speed,n,!1)}for(let e of ff)e.parked||(e.x+=e.dir*e.speed*n,e.x>170&&(e.x=-170),e.x<-170&&(e.x=170),e.m.position.x=e.x);zn&&!zn.parked&&zn.speed<14&&(zn.speed+=n*6);for(let e of vh)if(e.userData.beam)e.position.y=1+(Math.sin(K.t*2.2)*.5+.5)*1.6;else if(e.userData.belt){let t=(K.t*.8+e.userData.i/3)%1;e.position.set(e.userData.cx,.85,-6+t*2.4)}pf.forEach((e,t)=>e.visible=Math.sin(K.t*5+t*3)>-.3),K.planeGo&&us&&(K.planeV=(K.planeV||0)+n*6,us.position.x+=K.planeV*n,us.position.x>20&&(us.position.y+=n*(us.position.x-18)*.15));for(let e=xl.length-1;e>=0;e--){let t=xl[e],i=t.userData;i.life-=n,i.v.y-=14*n,t.position.addScaledVector(i.v,n),t.scale.multiplyScalar(1+n*1.2),t.material.opacity=Math.max(0,i.life/1.6),i.life<=0&&(rt.remove(t),xl.splice(e,1))}}function my(n){for(let e of ra)e.taken||!e.m.visible||Math.hypot(n.px-e.x,n.pz-e.z)<1.3&&Math.abs(n.y+1-e.y)<1.5&&(e.taken=!0,rt.remove(e.m),A.picked=(A.picked||0)+1,e.type==="life"?(Cl(se.pickupLife),Qe(880,.08,"sine",.08),setTimeout(()=>Qe(1180,.1,"sine",.08),80),nt(`<b>Anti\xE1cido:</b> +${wn(se.pickupLife)} s de vida para tus c\xE1psulas.`,2200)):(D_(se.pickupTime),Qe(660,.08,"triangle",.08),setTimeout(()=>Qe(990,.1,"triangle",.08),80),nt(`<b>Reloj dorado:</b> +${wn(se.pickupTime)} s para abordar.`,2200)),navigator.vibrate&&navigator.vibrate(30))}function gy(n){if(K.mode!=="play"||!A)return;let e=ke.userData;if(K.near=null,K.nearHide=null,K.busy)return;A.playT+=n,A.time-=n,A.life-=n*_f(e.hidden),A.pillLeft>0&&(A.pillLeft=Math.max(0,A.pillLeft-n)),Rl(),A.life<Sl()*.4&&oi(.7*A.profile.nerv*n);let t=Math.ceil(Math.min(A.time,A.life));if(t!==A.lastBeep&&(A.lastBeep=t,t<=10&&t>0&&Qe(t<=3?1200:900,.07)),A.life<=0)return Ph("time");if(A.time<=0)return yf();if(A.integrity<45&&(A.crampT-=n,A.crampT<=0&&(A.crampT=vt(8,14),G_())),!A.passed&&e.pz<-29&&(A.passed=!0,nt("Pasaste seguridad. Ahora, el laberinto del Duty Free hasta la Puerta 27.",3500)),!e.hidden){for(let i of wh)if(!A.done[i.id]&&e.px>i.x0&&e.px<i.x1&&e.pz>i.z0&&e.pz<i.z1&&e.y<1.5){A.done[i.id]=!0,K.busy=!0,i.run().then(()=>{A.over||(K.busy=!1)});return}}if(!e.hidden){my(e);for(let i of El)if(Math.hypot(e.px-i.x,e.pz-i.z)<i.r){K.near=i;break}for(let i of Tl)if(Math.hypot(e.px-i.x,e.pz-i.z)<2.3){K.nearHide=i;break}}Ct.KeyE&&K.near&&e.grounded&&H_(K.near),Ct.KeyH&&(e.hidden?Eh():K.nearHide&&oy(K.nearHide)),e.hidden&&e.hideT>.5&&(Ct.KeyE||Ct.Space||Ct.KeyW||Ct.KeyA||Ct.KeyS||Ct.KeyD)&&Eh(),Ct.KeyC&&!e.hidden&&(e.crouch=!e.crouch),Ct.KeyQ&&A.inv.pills>0&&(nt(Sf(),3500),oi(2)),Ct.KeyR&&A.inv.perfume>0&&!A.inv.perfumeOn&&(A.inv.perfume--,A.inv.perfumeOn=!0,nt("Hueles a pino sint\xE9tico. Un pino con problemas legales.",3500)),Ct.Digit1&&na("smoke"),Ct.Digit2&&na("decoy"),Ct.Digit3&&na("emp"),Ct.Digit4&&na("dogspray")}function xy(n){if(K.mode==="title"||!ke){let u=K.t*.08;qi.position.set(Math.sin(u)*50,22,10+Math.cos(u)*50),qi.lookAt(0,2,-10);return}let e=ke.userData,t=e.px,i=1.6+e.y*.7,s=e.pz,r=Math.cos(tt.pitch),a=t+Math.sin(tt.yaw)*r*tt.dist,o=i+Math.sin(tt.pitch)*tt.dist,l=s+Math.cos(tt.yaw)*r*tt.dist,c=Math.min(1,n*10);tt.x+=(a-tt.x)*c,tt.y+=(o-tt.y)*c,tt.z+=(l-tt.z)*c;let h=0,d=0;A&&A.integrity<40&&K.mode==="play"&&(h=(Math.random()-.5)*.04,d=(Math.random()-.5)*.04),K.shake>0&&(K.shake-=n,h+=(Math.random()-.5)*K.shake*.5,d+=(Math.random()-.5)*K.shake*.5),qi.position.set(tt.x+h,Math.max(.6,tt.y+d),tt.z),qi.lookAt(t,i+.1,s),K.planeGo&&qi.lookAt(us.position.x*.5,3,-60)}var hs=Se("radar"),xe=hs.getContext("2d"),rf=0,xh={x:0,z:-62};function _y(){let n=ke.userData;if(n.pz>29)return{t:"Entra a la terminal",x:0,z:27};if(!A.passed){let t=null;return $i.forEach(i=>{if(i.entOn)return;let s=(i.a+i.b)/2,r=Math.abs(s-n.px);(!t||r<t.d)&&(t={x:s,d:r})}),{t:qe.entLocked?"Sal del control de seguridad":"Cruza el control de seguridad por un carril abierto",x:t?t.x:0,z:-1}}if(!se.gps)return{t:"Llega a la Puerta 27 (modo sin flecha: gu\xEDate por el radar)",x:0,z:-62,far:!0};let e=performance.now();return e-rf>350&&(rf=e,xh=Af(n.px,n.pz,12)),{t:"Atraviesa el laberinto hasta la Puerta 27 (sigue la flecha amarilla)",x:xh.x,z:xh.z}}function yy(n){let e=ke.userData,t=34,i=hs.width/2/t,s=hs.width/2;xe.clearRect(0,0,hs.width,hs.width),xe.save(),xe.beginPath(),xe.arc(s,s,s-2,0,Math.PI*2),xe.clip(),xe.fillStyle="#1b2430",xe.fillRect(0,0,hs.width,hs.width),xe.translate(s,s),xe.rotate(tt.yaw),xe.scale(i,i),xe.translate(-e.px,-e.pz),xe.fillStyle="#2f3b4a",xe.fillRect(-40,-70,80,98);for(let h of Rh)h.x0>5e3||(xe.fillStyle=h.h<=1.3?"#8a9a7a":"#5b6878",xe.fillRect(h.x0,h.z0,h.x1-h.x0,h.z1-h.z0));xe.fillStyle="#37f0ff";for(let h of El)xe.beginPath(),xe.arc(h.x,h.z,1,0,7),xe.fill();xe.fillStyle="#3ddc84";for(let h of Tl)xe.fillRect(h.x-.7,h.z-.7,1.4,1.4);for(let h of vn){let d=h.chaser||h.seeing;xe.fillStyle=h.stun>0?"#777":d?"#ff2020":h.state==="hunt"?"#ff9020":"#ff7a7a",xe.beginPath(),xe.arc(h.x,h.z,h.chaser?1.5:1,0,7),xe.fill(),h.armed&&(xe.strokeStyle="#ffffff",xe.lineWidth=.4,xe.beginPath(),xe.arc(h.x,h.z,1.9,0,7),xe.stroke()),h.stun<=0&&(xe.fillStyle=d?"rgba(255,40,40,.35)":"rgba(255,225,77,.22)",xe.beginPath(),xe.moveTo(h.x,h.z),xe.arc(h.x,h.z,h.range*se.visionMul,Math.PI/2-h.ang-h.fov,Math.PI/2-h.ang+h.fov),xe.closePath(),xe.fill())}for(let h of dr)xe.fillStyle=h.state==="hunt"?"#ff2020":"#ffa733",xe.beginPath(),xe.arc(h.x,h.z,h.state==="hunt"?1.4:.9,0,7),xe.fill();Tn&&Tn.active&&(xe.fillStyle=Tn.sees?"#ff2020":"#ffffff",xe.beginPath(),xe.arc(Tn.x,Tn.z,1.3,0,7),xe.fill());for(let h of ms)xe.fillStyle="#ffcc33",xe.beginPath(),xe.arc(h.x,h.z,1.2,0,7),xe.fill();for(let h of ra)h.taken||!h.m.visible||(xe.fillStyle=h.type==="life"?"#33ffaa":"#ffd23a",xe.fillRect(h.x-.6,h.z-.6,1.2,1.2));let r=n.x,a=n.z,o=r-e.px,l=a-e.pz,c=Math.hypot(o,l);c>t-3&&(r=e.px+o/c*(t-3),a=e.pz+l/c*(t-3)),xe.fillStyle="#f5c518",xe.beginPath(),xe.arc(r,a,1.5,0,7),xe.fill(),xe.restore(),xe.save(),xe.translate(s,s),xe.rotate(tt.yaw-e.ang+Math.PI),xe.fillStyle=e.hidden?"#3ddc84":"#fff",xe.strokeStyle="#000",xe.lineWidth=1.5,xe.beginPath(),xe.moveTo(0,-8),xe.lineTo(6,7),xe.lineTo(0,3),xe.lineTo(-6,7),xe.closePath(),xe.fill(),xe.stroke(),xe.restore()}var vy=n=>n>70?["Estables","#3ddc84"]:n>40?["Inquietas","#ffb020"]:n>15?["Fugas \xE1cidas","#ff7a1a"]:["\xA1A PUNTO DE ESTALLAR!","#ff3b3b"];function My(){if(!A||!A.cargo||K.mode==="title")return;let n=ke.userData,e=Math.max(A.time,0),t=Se("clock");t.textContent=`${Math.floor(e/60)}:${String(Math.floor(e)%60).padStart(2,"0")}`,t.className="hud "+(A.time<=10?"crit":A.time<=20?"warn":"");let i=Se("life");i.textContent=`\u{1F4A3} ${Math.max(A.life,0).toFixed(1)} s`,i.className="hud "+(A.life<=10?"crit":A.life<=20?"warn":"");let s=Math.round(A.heat/20);Se("stars").innerHTML=Array.from({length:5},(g,_)=>`<span class="${_<s?"on":"off"}">\u2605</span>`).join(""),Se("stars").className="hud"+(s>=3?" flash":""),Se("money").textContent="$"+String(A.cash).padStart(8,"0");let r=[];A.inv.pills&&r.push(`\u{1F48A} \xD7${A.inv.pills} (Q)`),A.inv.perfume&&r.push("\u{1F338} spray (R)"),A.inv.perfumeOn&&r.push("\u{1F338} aplicado"),A.inv.clothes&&r.push(`\u{1F454} \xD7${A.inv.clothes}`),A.inv.contact&&r.push("\u{1F4DE} contacto"),A.bagSwapped&&r.push("\u{1F9F3} maleta cambiada"),A.pillLeft>0&&r.push(`\u23F3 desgaste lento ${A.pillLeft.toFixed(0)}s`),Se("inv").innerHTML=r.join("<br>"),Se("itemsBar").innerHTML=[["1","\u{1F32B}\uFE0F","smoke"],["2","\u{1F4E3}","decoy"],["3","\u26A1","emp"],["4","\u{1F415}","dogspray"]].map(([g,_,m])=>`<span class="${A.inv[m]?"":"none"}"><b>${g}</b>${_}\xD7${A.inv[m]||0}</span>`).join(""),Se("diffTag").textContent=Wi[se.diff]+(K.daily?" \xB7 RETO DIARIO":"");let[a,o]=vy(A.integrity);Se("stomLbl").textContent=a,Se("stomLbl").style.color=o,Se("stomBar").style.width=Math.max(0,A.integrity)+"%",Se("stomBar").style.background=o;let l=A.hp>se.hp*.5?"#3ddc84":A.hp>se.hp*.25?"#ffb020":"#ff3b3b";Se("hpBar").style.width=Math.max(0,A.hp/(se.hp+ii("hp")*25)*100)+"%",Se("hpBar").style.background=l,Se("sniffBox").style.display=A.sniff>.03?"block":"none",Se("sniffBar").style.width=Math.min(100,A.sniff*100)+"%",Se("sniffBar").style.background=A.sniff>=1?"#ff2020":"#ffb020",Se("vig").style.background=`radial-gradient(ellipse at center, transparent ${45-A.hitFlash*40}%, rgba(255,0,0,${Math.min(.85,A.heat/100*.5+A.hitFlash*1.2)}) 100%)`;let c=Se("shift");if(K.mode==="play"&&se.shiftSec>0&&!qe.entLocked||K.mode==="play"&&se.shiftSec>0&&li.some(g=>!g.closed)){let g=Math.max(0,qe.t);c.style.display="block",c.textContent=`\u21BB Laberinto cambia en ${Math.ceil(g)} s`,c.className="hud"+(g<=se.shiftWarn?" warn":"")}else c.style.display="none";let h=Se("alert");K.mode!=="play"?h.style.display="none":n.hidden?(h.style.display="block",h.className="hud "+(A.compromised?"bad":"ok"),h.textContent=A.compromised?"\u{1F441} TE VIERON ESCONDERTE":"\u{1F648} ESCONDIDO \xB7 c\xE1psulas m\xE1s lentas"):Tn&&Tn.sees?(h.style.display="block",h.className="hud bad",h.textContent="\u{1F681} \xA1TE ILUMINA EL DRON!"):vn.some(g=>g.aiming)?(h.style.display="block",h.className="hud bad",h.textContent="\u{1F52B} \xA1TE APUNTAN!"):K.chasing?(h.style.display="block",h.className="hud bad",h.textContent="\u26A0 PERSECUCI\xD3N"):n.crouch?(h.style.display="block",h.className="hud ok",h.textContent="AGACHADO \xB7 sigiloso"):h.style.display="none";let d=_y();Se("obj").textContent=d.t,Se("obj").style.display=K.mode==="play"?"block":"none";let u=Se("prompt");K.mode==="play"&&!K.busy&&n.hidden?(u.style.display="block",u.innerHTML=`<b>${Xi?"\u{1F648}":"H"}</b>Salir de la taquilla`):K.near&&!K.busy&&K.mode==="play"?(u.style.display="block",u.innerHTML=`<b>${Xi?"\u270B":"E"}</b>${K.near.label}`):K.nearHide&&!K.busy&&K.mode==="play"?(u.style.display="block",u.innerHTML=`<b>${Xi?"\u{1F648}":"H"}</b>Esconderse`):u.style.display="none",qd(A,{act:!!K.near&&!K.busy,hide:!!(K.nearHide||n.hidden)}),yy(d);let p=K.mode==="play"&&(!d.far||Math.hypot(n.px-d.x,n.pz-d.z)<28);or.visible=p,or.position.set(d.x,3.2+Math.sin(K.t*3)*.3,d.z),or.rotation.y=K.t*2}var af=performance.now(),ml=0,_h=0,gl=Yi;function Sy(n){let e=devicePixelRatio||1;kn.setPixelRatio(Math.min(e,{low:1,med:1.5,high:2}[n])),kn.setSize(innerWidth,innerHeight);let t=n!=="low";kn.shadowMap.enabled=t,yn.castShadow=t,yn.shadow.map&&(yn.shadow.map.dispose(),yn.shadow.map=null),yn.shadow.mapSize.set(n==="high"?2048:1024,n==="high"?2048:1024),rt.traverse(i=>{i.material&&(Array.isArray(i.material)?i.material:[i.material]).forEach(s=>s.needsUpdate=!0)})}function by(n){if(!(We.quality!=="auto"||K.mode!=="play"||K.busy||gl==="low")&&(ml+=n,_h++,ml>=3)){let e=_h/ml;ml=0,_h=0,e<28&&(gl=gl==="high"?"med":"low",Sy(gl),nt("Calidad gr\xE1fica reducida para mantener la fluidez.",2500))}}function Pf(n){if(!K.paused){K.t+=n,ny(n),sy(n),py(n),R_(n),ke&&(ly(n),dy(n),fy(n),ay(n)),K.mode==="play"&&gy(n);for(let e in Ct)Ct[e]=!1;xy(n),My()}}function Lf(){requestAnimationFrame(Lf);let n=performance.now(),e=(n-af)/1e3,t=Math.min(e,.05);af=n,Pf(t),by(e),kn.render(rt,qi)}S_();I_();Lf();window.__dbg={P:se,cfg:We,MZ:qe,ROWS:li,LDOORS:$i,SMOKES:hr,DECOYS:ms,get DRONE(){return Tn},useItem:na,rebuildNav:Ll,resetMaze:Nh,doShift:Rf,applyArmed:sa,setArmed:gf,flow:(n,e)=>xs(gs,ur,n,e),nav:()=>({gridG:vi,gridD:ps,gridR:ur,routeField:gs,cellIdx:Dh,bfs:si}),sim:(n,e=.05)=>{for(let t=0;t<Math.round(n/e);t++)Pf(e)},PICKUPS:ra,keys:En,pressed:Ct,DOGS:dr,NPCS:Ah,HIDES:Tl,COLL:ai,startChase:Nl,startDogHunt:If,S:()=>A,G:K,player:()=>ke,ZONES:El,TRIGS:wh,GUARDS:vn,newState:df,CARGO:cf,METHOD:hf,PROFILE:uf,meta:At,finishRun:bf,toggleAdmin:Il};})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
