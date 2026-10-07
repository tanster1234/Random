(()=>{var uc=0,Pa=1,dc=2;var Ds=1,fc=2,Wi=3,Jn=0,ze=1,Ve=2,Mn=0,Xi=1,qi=2,Ia=3,La=4,pc=5;var ui=100,mc=101,gc=102,xc=103,_c=104,vc=200,yc=201,Mc=202,Sc=203,Da=204,Na=205,bc=206,wc=207,Tc=208,Ac=209,Ec=210,Cc=211,Rc=212,Pc=213,Ic=214,wr=0,Tr=1,Ar=2,Ui=3,Er=4,Cr=5,Rr=6,Pr=7,Ua=0,Lc=1,Dc=2,an=0,Fa=1,Oa=2,Ba=3,za=4,Va=5,ka=6,Ga=7;var Ha=300,$n=301,di=302,to=303,eo=304,Ns=306,Fi=1e3,Ee=1001,Ir=1002,Ae=1003,Nc=1004;var Us=1005;var pe=1006,no=1007;var Ne=1008;var ke=1009,Wa=1010,Xa=1011,Yi=1012,io=1013,ln=1014,cn=1015,hn=1016,so=1017,ro=1018,Zi=1020,qa=35902,Ya=35899,Za=1021,Ja=1022,He=1023,gn=1026,Kn=1027,$a=1028,oo=1029,Qn=1030,ao=1031;var lo=1033,Fs=33776,Os=33777,Bs=33778,zs=33779,co=35840,ho=35841,uo=35842,fo=35843,po=36196,mo=37492,go=37496,xo=37488,_o=37489,Vs=37490,vo=37491,yo=37808,Mo=37809,So=37810,bo=37811,wo=37812,To=37813,Ao=37814,Eo=37815,Co=37816,Ro=37817,Po=37818,Io=37819,Lo=37820,Do=37821,No=36492,Uo=36494,Fo=36495,Oo=36283,Bo=36284,ks=36285,zo=36286;var ps=2300,Lr=2301,Sr=2302,ba=2303,wa=2400,Ta=2401,Aa=2402;var Uc=3200;var Ka=0,Fc=1,In="",Ze="srgb",ms="srgb-linear",gs="linear",ie="srgb";var br=7680;var Oc=519,Bc=512,zc=513,Vc=514,Vo=515,kc=516,Gc=517,ko=518,Hc=519,Wc=35044;var Qa="300 es",on=2e3,xs=2001;function ru(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ou(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function _s(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Xc(){let i=_s("canvas");return i.style.display="block",i}var Hl={},Oi=null;function ja(...i){let t="THREE."+i.shift();Oi?Oi("log",t,...i):console.log(t,...i)}function qc(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ut(...i){i=qc(i);let t="THREE."+i.shift();if(Oi)Oi("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Ft(...i){i=qc(i);let t="THREE."+i.shift();if(Oi)Oi("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function li(...i){let t=i.join(" ");t in Hl||(Hl[t]=!0,Ut(...i))}function Yc(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Zc={[wr]:Tr,[Ar]:Rr,[Er]:Pr,[Ui]:Cr,[Tr]:wr,[Rr]:Ar,[Pr]:Er,[Cr]:Ui},xn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Ie=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Wl=1234567,ds=Math.PI/180,Bi=180/Math.PI;function Ji(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ie[i&255]+Ie[i>>8&255]+Ie[i>>16&255]+Ie[i>>24&255]+"-"+Ie[t&255]+Ie[t>>8&255]+"-"+Ie[t>>16&15|64]+Ie[t>>24&255]+"-"+Ie[e&63|128]+Ie[e>>8&255]+"-"+Ie[e>>16&255]+Ie[e>>24&255]+Ie[n&255]+Ie[n>>8&255]+Ie[n>>16&255]+Ie[n>>24&255]).toLowerCase()}function Jt(i,t,e){return Math.max(t,Math.min(e,i))}function tl(i,t){return(i%t+t)%t}function au(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function lu(i,t,e){return i!==t?(e-i)/(t-i):0}function fs(i,t,e){return(1-e)*i+e*t}function cu(i,t,e,n){return fs(i,t,1-Math.exp(-e*n))}function hu(i,t=1){return t-Math.abs(tl(i,t*2)-t)}function uu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function du(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function fu(i,t){return i+Math.floor(Math.random()*(t-i+1))}function pu(i,t){return i+Math.random()*(t-i)}function mu(i){return i*(.5-Math.random())}function gu(i){i!==void 0&&(Wl=i);let t=Wl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function xu(i){return i*ds}function _u(i){return i*Bi}function vu(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function yu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Mu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Su(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),u=o((t+n)/2),f=r((t-n)/2),h=o((t-n)/2),m=r((n-t)/2),v=o((n-t)/2);switch(s){case"XYX":i.set(a*u,l*f,l*h,a*c);break;case"YZY":i.set(l*h,a*u,l*f,a*c);break;case"ZXZ":i.set(l*f,l*h,a*u,a*c);break;case"XZX":i.set(a*u,l*v,l*m,a*c);break;case"YXY":i.set(l*m,a*u,l*v,a*c);break;case"ZYZ":i.set(l*v,l*m,a*u,a*c);break;default:Ut("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Di(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Oe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var jn={DEG2RAD:ds,RAD2DEG:Bi,generateUUID:Ji,clamp:Jt,euclideanModulo:tl,mapLinear:au,inverseLerp:lu,lerp:fs,damp:cu,pingpong:hu,smoothstep:uu,smootherstep:du,randInt:fu,randFloat:pu,randFloatSpread:mu,seededRandom:gu,degToRad:xu,radToDeg:_u,isPowerOfTwo:vu,ceilPowerOfTwo:yu,floorPowerOfTwo:Mu,setQuaternionFromProperEuler:Su,normalize:Oe,denormalize:Di},rl=class rl{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};rl.prototype.isVector2=!0;var qt=rl,_n=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],f=n[s+3],h=r[o+0],m=r[o+1],v=r[o+2],w=r[o+3];if(f!==w||l!==h||c!==m||u!==v){let p=l*h+c*m+u*v+f*w;p<0&&(h=-h,m=-m,v=-v,w=-w,p=-p);let d=1-a;if(p<.9995){let R=Math.acos(p),D=Math.sin(R);d=Math.sin(d*R)/D,a=Math.sin(a*R)/D,l=l*d+h*a,c=c*d+m*a,u=u*d+v*a,f=f*d+w*a}else{l=l*d+h*a,c=c*d+m*a,u=u*d+v*a,f=f*d+w*a;let R=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=R,c*=R,u*=R,f*=R}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],f=r[o],h=r[o+1],m=r[o+2],v=r[o+3];return t[e]=a*v+u*f+l*m-c*h,t[e+1]=l*v+u*h+c*f-a*m,t[e+2]=c*v+u*m+a*h-l*f,t[e+3]=u*v-a*f-l*h-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),f=a(r/2),h=l(n/2),m=l(s/2),v=l(r/2);switch(o){case"XYZ":this._x=h*u*f+c*m*v,this._y=c*m*f-h*u*v,this._z=c*u*v+h*m*f,this._w=c*u*f-h*m*v;break;case"YXZ":this._x=h*u*f+c*m*v,this._y=c*m*f-h*u*v,this._z=c*u*v-h*m*f,this._w=c*u*f+h*m*v;break;case"ZXY":this._x=h*u*f-c*m*v,this._y=c*m*f+h*u*v,this._z=c*u*v+h*m*f,this._w=c*u*f-h*m*v;break;case"ZYX":this._x=h*u*f-c*m*v,this._y=c*m*f+h*u*v,this._z=c*u*v-h*m*f,this._w=c*u*f+h*m*v;break;case"YZX":this._x=h*u*f+c*m*v,this._y=c*m*f+h*u*v,this._z=c*u*v-h*m*f,this._w=c*u*f-h*m*v;break;case"XZY":this._x=h*u*f-c*m*v,this._y=c*m*f-h*u*v,this._z=c*u*v+h*m*f,this._w=c*u*f+h*m*v;break;default:Ut("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],f=e[10],h=n+a+f;if(h>0){let m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(n>a&&n>f){let m=2*Math.sqrt(1+n-a-f);this._w=(u-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>f){let m=2*Math.sqrt(1+a-n-f);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+u)/m}else{let m=2*Math.sqrt(1+f-n-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Jt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},ol=class ol{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Xl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Xl.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),u=2*(a*e-r*s),f=2*(r*n-o*e);return this.x=e+l*c+o*f-a*u,this.y=n+l*u+a*c-r*f,this.z=s+l*f+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this.z=Jt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this.z=Jt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ia.copy(this).projectOnVector(t),this.sub(ia)}reflect(t){return this.sub(ia.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ol.prototype.isVector3=!0;var W=ol,ia=new W,Xl=new _n,al=class al{constructor(t,e,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],m=n[5],v=n[8],w=s[0],p=s[3],d=s[6],R=s[1],D=s[4],_=s[7],M=s[2],S=s[5],C=s[8];return r[0]=o*w+a*R+l*M,r[3]=o*p+a*D+l*S,r[6]=o*d+a*_+l*C,r[1]=c*w+u*R+f*M,r[4]=c*p+u*D+f*S,r[7]=c*d+u*_+f*C,r[2]=h*w+m*R+v*M,r[5]=h*p+m*D+v*S,r[8]=h*d+m*_+v*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],f=u*o-a*c,h=a*l-u*r,m=c*r-o*l,v=e*f+n*h+s*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);let w=1/v;return t[0]=f*w,t[1]=(s*c-u*n)*w,t[2]=(a*n-s*o)*w,t[3]=h*w,t[4]=(u*e-s*l)*w,t[5]=(s*r-a*e)*w,t[6]=m*w,t[7]=(n*l-c*e)*w,t[8]=(o*e-n*r)*w,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return li("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(sa.makeScale(t,e)),this}rotate(t){return li("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(sa.makeRotation(-t)),this}translate(t,e){return li("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(sa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};al.prototype.isMatrix3=!0;var Ot=al,sa=new Ot,ql=new Ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Yl=new Ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function bu(){let i={enabled:!0,workingColorSpace:ms,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ie&&(s.r=Pn(s.r),s.g=Pn(s.g),s.b=Pn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ie&&(s.r=Ni(s.r),s.g=Ni(s.g),s.b=Ni(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===In?gs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return li("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return li("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ms]:{primaries:t,whitePoint:n,transfer:gs,toXYZ:ql,fromXYZ:Yl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ze},outputColorSpaceConfig:{drawingBufferColorSpace:Ze}},[Ze]:{primaries:t,whitePoint:n,transfer:ie,toXYZ:ql,fromXYZ:Yl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ze}}}),i}var Zt=bu();function Pn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ni(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var yi,Dr=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{yi===void 0&&(yi=_s("canvas")),yi.width=t.width,yi.height=t.height;let s=yi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=yi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=_s("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Pn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Pn(e[n]/255)*255):e[n]=Pn(e[n]);return{data:e,width:t.width,height:t.height}}else return Ut("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},wu=0,zi=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:wu++}),this.uuid=Ji(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement!="undefined"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame!="undefined"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ra(s[o].image)):r.push(ra(s[o]))}else r=ra(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function ra(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?Dr.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ut("Texture: Unable to serialize Texture."),{})}var Tu=0,oa=new W,Be=class i extends xn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Ee,s=Ee,r=pe,o=Ne,a=He,l=ke,c=i.DEFAULT_ANISOTROPY,u=In){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Tu++}),this.uuid=Ji(),this.name="",this.source=new zi(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new qt(0,0),this.repeat=new qt(1,1),this.center=new qt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(oa).x}get height(){return this.source.getSize(oa).y}get depth(){return this.source.getSize(oa).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Ut(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ut(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ha)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Fi:t.x=t.x-Math.floor(t.x);break;case Ee:t.x=t.x<0?0:1;break;case Ir:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Fi:t.y=t.y-Math.floor(t.y);break;case Ee:t.y=t.y<0?0:1;break;case Ir:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Be.DEFAULT_IMAGE=null;Be.DEFAULT_MAPPING=Ha;Be.DEFAULT_ANISOTROPY=1;var ll=class ll{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],u=l[4],f=l[8],h=l[1],m=l[5],v=l[9],w=l[2],p=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-w)<.01&&Math.abs(v-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+w)<.1&&Math.abs(v+p)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let D=(c+1)/2,_=(m+1)/2,M=(d+1)/2,S=(u+h)/4,C=(f+w)/4,x=(v+p)/4;return D>_&&D>M?D<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(D),s=S/n,r=C/n):_>M?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=S/s,r=x/s):M<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),n=C/r,s=x/r),this.set(n,s,r,e),this}let R=Math.sqrt((p-v)*(p-v)+(f-w)*(f-w)+(h-u)*(h-u));return Math.abs(R)<.001&&(R=1),this.x=(p-v)/R,this.y=(f-w)/R,this.z=(h-u)/R,this.w=Math.acos((c+m+d-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this.z=Jt(this.z,t.z,e.z),this.w=Jt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this.z=Jt(this.z,t,e),this.w=Jt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ll.prototype.isVector4=!0;var re=ll,Nr=class extends xn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pe,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new re(0,0,t,e),this.scissorTest=!1,this.viewport=new re(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new Be(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:pe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new zi(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ge=class extends Nr{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},vs=class extends Be{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ae,this.minFilter=Ae,this.wrapR=Ee,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ur=class extends Be{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ae,this.minFilter=Ae,this.wrapR=Ee,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var jr=class jr{constructor(t,e,n,s,r,o,a,l,c,u,f,h,m,v,w,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,u,f,h,m,v,w,p)}set(t,e,n,s,r,o,a,l,c,u,f,h,m,v,w,p){let d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=m,d[7]=v,d[11]=w,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new jr().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Mi.setFromMatrixColumn(t,0).length(),r=1/Mi.setFromMatrixColumn(t,1).length(),o=1/Mi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let h=o*u,m=o*f,v=a*u,w=a*f;e[0]=l*u,e[4]=-l*f,e[8]=c,e[1]=m+v*c,e[5]=h-w*c,e[9]=-a*l,e[2]=w-h*c,e[6]=v+m*c,e[10]=o*l}else if(t.order==="YXZ"){let h=l*u,m=l*f,v=c*u,w=c*f;e[0]=h+w*a,e[4]=v*a-m,e[8]=o*c,e[1]=o*f,e[5]=o*u,e[9]=-a,e[2]=m*a-v,e[6]=w+h*a,e[10]=o*l}else if(t.order==="ZXY"){let h=l*u,m=l*f,v=c*u,w=c*f;e[0]=h-w*a,e[4]=-o*f,e[8]=v+m*a,e[1]=m+v*a,e[5]=o*u,e[9]=w-h*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let h=o*u,m=o*f,v=a*u,w=a*f;e[0]=l*u,e[4]=v*c-m,e[8]=h*c+w,e[1]=l*f,e[5]=w*c+h,e[9]=m*c-v,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let h=o*l,m=o*c,v=a*l,w=a*c;e[0]=l*u,e[4]=w-h*f,e[8]=v*f+m,e[1]=f,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=m*f+v,e[10]=h-w*f}else if(t.order==="XZY"){let h=o*l,m=o*c,v=a*l,w=a*c;e[0]=l*u,e[4]=-f,e[8]=c*u,e[1]=h*f+w,e[5]=o*u,e[9]=m*f-v,e[2]=v*f-m,e[6]=a*u,e[10]=w*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Au,t,Eu)}lookAt(t,e,n){let s=this.elements;return qe.subVectors(t,e),qe.lengthSq()===0&&(qe.z=1),qe.normalize(),Un.crossVectors(n,qe),Un.lengthSq()===0&&(Math.abs(n.z)===1?qe.x+=1e-4:qe.z+=1e-4,qe.normalize(),Un.crossVectors(n,qe)),Un.normalize(),er.crossVectors(qe,Un),s[0]=Un.x,s[4]=er.x,s[8]=qe.x,s[1]=Un.y,s[5]=er.y,s[9]=qe.y,s[2]=Un.z,s[6]=er.z,s[10]=qe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],m=n[13],v=n[2],w=n[6],p=n[10],d=n[14],R=n[3],D=n[7],_=n[11],M=n[15],S=s[0],C=s[4],x=s[8],T=s[12],L=s[1],y=s[5],A=s[9],I=s[13],P=s[2],U=s[6],B=s[10],V=s[14],K=s[3],k=s[7],H=s[11],Y=s[15];return r[0]=o*S+a*L+l*P+c*K,r[4]=o*C+a*y+l*U+c*k,r[8]=o*x+a*A+l*B+c*H,r[12]=o*T+a*I+l*V+c*Y,r[1]=u*S+f*L+h*P+m*K,r[5]=u*C+f*y+h*U+m*k,r[9]=u*x+f*A+h*B+m*H,r[13]=u*T+f*I+h*V+m*Y,r[2]=v*S+w*L+p*P+d*K,r[6]=v*C+w*y+p*U+d*k,r[10]=v*x+w*A+p*B+d*H,r[14]=v*T+w*I+p*V+d*Y,r[3]=R*S+D*L+_*P+M*K,r[7]=R*C+D*y+_*U+M*k,r[11]=R*x+D*A+_*B+M*H,r[15]=R*T+D*I+_*V+M*Y,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],f=t[6],h=t[10],m=t[14],v=t[3],w=t[7],p=t[11],d=t[15],R=l*m-c*h,D=a*m-c*f,_=a*h-l*f,M=o*m-c*u,S=o*h-l*u,C=o*f-a*u;return e*(w*R-p*D+d*_)-n*(v*R-p*M+d*S)+s*(v*D-w*M+d*C)-r*(v*_-w*S+p*C)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],u=t[10];return e*(o*u-a*c)-n*(r*u-a*l)+s*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],f=t[9],h=t[10],m=t[11],v=t[12],w=t[13],p=t[14],d=t[15],R=e*a-n*o,D=e*l-s*o,_=e*c-r*o,M=n*l-s*a,S=n*c-r*a,C=s*c-r*l,x=u*w-f*v,T=u*p-h*v,L=u*d-m*v,y=f*p-h*w,A=f*d-m*w,I=h*d-m*p,P=R*I-D*A+_*y+M*L-S*T+C*x;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let U=1/P;return t[0]=(a*I-l*A+c*y)*U,t[1]=(s*A-n*I-r*y)*U,t[2]=(w*C-p*S+d*M)*U,t[3]=(h*S-f*C-m*M)*U,t[4]=(l*L-o*I-c*T)*U,t[5]=(e*I-s*L+r*T)*U,t[6]=(p*_-v*C-d*D)*U,t[7]=(u*C-h*_+m*D)*U,t[8]=(o*A-a*L+c*x)*U,t[9]=(n*L-e*A-r*x)*U,t[10]=(v*S-w*_+d*R)*U,t[11]=(f*_-u*S-m*R)*U,t[12]=(a*T-o*y-l*x)*U,t[13]=(e*y-n*T+s*x)*U,t[14]=(w*D-v*M-p*R)*U,t[15]=(u*M-f*D+h*R)*U,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,f=a+a,h=r*c,m=r*u,v=r*f,w=o*u,p=o*f,d=a*f,R=l*c,D=l*u,_=l*f,M=n.x,S=n.y,C=n.z;return s[0]=(1-(w+d))*M,s[1]=(m+_)*M,s[2]=(v-D)*M,s[3]=0,s[4]=(m-_)*S,s[5]=(1-(h+d))*S,s[6]=(p+R)*S,s[7]=0,s[8]=(v+D)*C,s[9]=(p-R)*C,s[10]=(1-(h+w))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=Mi.set(s[0],s[1],s[2]).length(),a=Mi.set(s[4],s[5],s[6]).length(),l=Mi.set(s[8],s[9],s[10]).length();r<0&&(o=-o),en.copy(this);let c=1/o,u=1/a,f=1/l;return en.elements[0]*=c,en.elements[1]*=c,en.elements[2]*=c,en.elements[4]*=u,en.elements[5]*=u,en.elements[6]*=u,en.elements[8]*=f,en.elements[9]*=f,en.elements[10]*=f,e.setFromRotationMatrix(en),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,s,r,o,a=on,l=!1){let c=this.elements,u=2*r/(e-t),f=2*r/(n-s),h=(e+t)/(e-t),m=(n+s)/(n-s),v,w;if(l)v=r/(o-r),w=o*r/(o-r);else if(a===on)v=-(o+r)/(o-r),w=-2*o*r/(o-r);else if(a===xs)v=-o/(o-r),w=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=w,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=on,l=!1){let c=this.elements,u=2/(e-t),f=2/(n-s),h=-(e+t)/(e-t),m=-(n+s)/(n-s),v,w;if(l)v=1/(o-r),w=o/(o-r);else if(a===on)v=-2/(o-r),w=-(o+r)/(o-r);else if(a===xs)v=-1/(o-r),w=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=v,c[14]=w,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};jr.prototype.isMatrix4=!0;var me=jr,Mi=new W,en=new me,Au=new W(0,0,0),Eu=new W(1,1,1),Un=new W,er=new W,qe=new W,Zl=new me,Jl=new _n,kn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],f=s[2],h=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(Jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Jt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Jt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:Ut("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Zl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Zl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Jl.setFromEuler(this),this.setFromQuaternion(Jl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};kn.DEFAULT_ORDER="XYZ";var ys=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Cu=0,$l=new W,Si=new _n,Tn=new me,nr=new W,ls=new W,Ru=new W,Pu=new _n,Kl=new W(1,0,0),Ql=new W(0,1,0),jl=new W(0,0,1),tc={type:"added"},Iu={type:"removed"},bi={type:"childadded",child:null},aa={type:"childremoved",child:null},Je=class i extends xn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Cu++}),this.uuid=Ji(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new W,e=new kn,n=new _n,s=new W(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new me},normalMatrix:{value:new Ot}}),this.matrix=new me,this.matrixWorld=new me,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ys,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Si.setFromAxisAngle(t,e),this.quaternion.multiply(Si),this}rotateOnWorldAxis(t,e){return Si.setFromAxisAngle(t,e),this.quaternion.premultiply(Si),this}rotateX(t){return this.rotateOnAxis(Kl,t)}rotateY(t){return this.rotateOnAxis(Ql,t)}rotateZ(t){return this.rotateOnAxis(jl,t)}translateOnAxis(t,e){return $l.copy(t).applyQuaternion(this.quaternion),this.position.add($l.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Kl,t)}translateY(t){return this.translateOnAxis(Ql,t)}translateZ(t){return this.translateOnAxis(jl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Tn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?nr.copy(t):nr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ls.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Tn.lookAt(ls,nr,this.up):Tn.lookAt(nr,ls,this.up),this.quaternion.setFromRotationMatrix(Tn),s&&(Tn.extractRotation(s.matrixWorld),Si.setFromRotationMatrix(Tn),this.quaternion.premultiply(Si.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Ft("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(tc),bi.child=t,this.dispatchEvent(bi),bi.child=null):Ft("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Iu),aa.child=t,this.dispatchEvent(aa),aa.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Tn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Tn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Tn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(tc),bi.child=t,this.dispatchEvent(bi),bi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ls,t,Ru),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ls,Pu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),f=o(t.shapes),h=o(t.skeletons),m=o(t.animations),v=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),m.length>0&&(n.animations=m),v.length>0&&(n.nodes=v)}return n.object=s,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Je.DEFAULT_UP=new W(0,1,0);Je.DEFAULT_MATRIX_AUTO_UPDATE=!0;Je.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var mn=class extends Je{constructor(){super(),this.isGroup=!0,this.type="Group"}},Lu={type:"move"},Vi=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let w of t.hand.values()){let p=e.getJointPose(w,n),d=this._getHandJoint(c,w);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}let u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),m=.02,v=.005;c.inputState.pinching&&h>m+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=m-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Lu)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new mn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Jc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fn={h:0,s:0,l:0},ir={h:0,s:0,l:0};function la(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var $t=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ze){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Zt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Zt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Zt.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Zt.workingColorSpace){if(t=tl(t,1),e=Jt(e,0,1),n=Jt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=la(o,r,t+1/3),this.g=la(o,r,t),this.b=la(o,r,t-1/3)}return Zt.colorSpaceToWorking(this,s),this}setStyle(t,e=Ze){function n(r){r!==void 0&&parseFloat(r)<1&&Ut("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Ut("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Ut("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ze){let n=Jc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Ut("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Pn(t.r),this.g=Pn(t.g),this.b=Pn(t.b),this}copyLinearToSRGB(t){return this.r=Ni(t.r),this.g=Ni(t.g),this.b=Ni(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ze){return Zt.workingToColorSpace(Le.copy(this),t),Math.round(Jt(Le.r*255,0,255))*65536+Math.round(Jt(Le.g*255,0,255))*256+Math.round(Jt(Le.b*255,0,255))}getHexString(t=Ze){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Zt.workingColorSpace){Zt.workingToColorSpace(Le.copy(this),e);let n=Le.r,s=Le.g,r=Le.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Zt.workingColorSpace){return Zt.workingToColorSpace(Le.copy(this),e),t.r=Le.r,t.g=Le.g,t.b=Le.b,t}getStyle(t=Ze){Zt.workingToColorSpace(Le.copy(this),t);let e=Le.r,n=Le.g,s=Le.b;return t!==Ze?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Fn),this.setHSL(Fn.h+t,Fn.s+e,Fn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Fn),t.getHSL(ir);let n=fs(Fn.h,ir.h,e),s=fs(Fn.s,ir.s,e),r=fs(Fn.l,ir.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Le=new $t;$t.NAMES=Jc;var Ms=class extends Je{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new kn,this.environmentIntensity=1,this.environmentRotation=new kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},nn=new W,An=new W,ca=new W,En=new W,wi=new W,Ti=new W,ec=new W,ha=new W,ua=new W,da=new W,fa=new re,pa=new re,ma=new re,Vn=class i{constructor(t=new W,e=new W,n=new W){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),nn.subVectors(t,e),s.cross(nn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){nn.subVectors(s,e),An.subVectors(n,e),ca.subVectors(t,e);let o=nn.dot(nn),a=nn.dot(An),l=nn.dot(ca),c=An.dot(An),u=An.dot(ca),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;let h=1/f,m=(c*l-a*u)*h,v=(o*u-a*l)*h;return r.set(1-m-v,v,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,En)===null?!1:En.x>=0&&En.y>=0&&En.x+En.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,En)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,En.x),l.addScaledVector(o,En.y),l.addScaledVector(a,En.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return fa.setScalar(0),pa.setScalar(0),ma.setScalar(0),fa.fromBufferAttribute(t,e),pa.fromBufferAttribute(t,n),ma.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(fa,r.x),o.addScaledVector(pa,r.y),o.addScaledVector(ma,r.z),o}static isFrontFacing(t,e,n,s){return nn.subVectors(n,e),An.subVectors(t,e),nn.cross(An).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return nn.subVectors(this.c,this.b),An.subVectors(this.a,this.b),nn.cross(An).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;wi.subVectors(s,n),Ti.subVectors(r,n),ha.subVectors(t,n);let l=wi.dot(ha),c=Ti.dot(ha);if(l<=0&&c<=0)return e.copy(n);ua.subVectors(t,s);let u=wi.dot(ua),f=Ti.dot(ua);if(u>=0&&f<=u)return e.copy(s);let h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(wi,o);da.subVectors(t,r);let m=wi.dot(da),v=Ti.dot(da);if(v>=0&&m<=v)return e.copy(r);let w=m*c-l*v;if(w<=0&&c>=0&&v<=0)return a=c/(c-v),e.copy(n).addScaledVector(Ti,a);let p=u*v-m*f;if(p<=0&&f-u>=0&&m-v>=0)return ec.subVectors(r,s),a=(f-u)/(f-u+(m-v)),e.copy(s).addScaledVector(ec,a);let d=1/(p+w+h);return o=w*d,a=h*d,e.copy(n).addScaledVector(wi,o).addScaledVector(Ti,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Gn=class{constructor(t=new W(1/0,1/0,1/0),e=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(sn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(sn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=sn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,sn):sn.fromBufferAttribute(r,o),sn.applyMatrix4(t.matrixWorld),this.expandByPoint(sn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),sr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),sr.copy(n.boundingBox)),sr.applyMatrix4(t.matrixWorld),this.union(sr)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,sn),sn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(cs),rr.subVectors(this.max,cs),Ai.subVectors(t.a,cs),Ei.subVectors(t.b,cs),Ci.subVectors(t.c,cs),On.subVectors(Ei,Ai),Bn.subVectors(Ci,Ei),si.subVectors(Ai,Ci);let e=[0,-On.z,On.y,0,-Bn.z,Bn.y,0,-si.z,si.y,On.z,0,-On.x,Bn.z,0,-Bn.x,si.z,0,-si.x,-On.y,On.x,0,-Bn.y,Bn.x,0,-si.y,si.x,0];return!ga(e,Ai,Ei,Ci,rr)||(e=[1,0,0,0,1,0,0,0,1],!ga(e,Ai,Ei,Ci,rr))?!1:(or.crossVectors(On,Bn),e=[or.x,or.y,or.z],ga(e,Ai,Ei,Ci,rr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,sn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(sn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Cn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Cn=[new W,new W,new W,new W,new W,new W,new W,new W],sn=new W,sr=new Gn,Ai=new W,Ei=new W,Ci=new W,On=new W,Bn=new W,si=new W,cs=new W,rr=new W,or=new W,ri=new W;function ga(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ri.fromArray(i,r);let a=s.x*Math.abs(ri.x)+s.y*Math.abs(ri.y)+s.z*Math.abs(ri.z),l=t.dot(ri),c=e.dot(ri),u=n.dot(ri);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var ye=new W,ar=new qt,Du=0,Te=class extends xn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Du++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Wc,this.updateRanges=[],this.gpuType=cn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ar.fromBufferAttribute(this,e),ar.applyMatrix3(t),this.setXY(e,ar.x,ar.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix3(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix4(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyNormalMatrix(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.transformDirection(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Di(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Oe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Di(e,this.array)),e}setX(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Di(e,this.array)),e}setY(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Di(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Di(e,this.array)),e}setW(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array),s=Oe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array),s=Oe(s,this.array),r=Oe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Ss=class extends Te{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var bs=class extends Te{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var se=class extends Te{constructor(t,e,n){super(new Float32Array(t),e,n)}},Nu=new Gn,hs=new W,xa=new W,ci=class{constructor(t=new W,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Nu.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;hs.subVectors(t,this.center);let e=hs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(hs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(xa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(hs.copy(t.center).add(xa)),this.expandByPoint(hs.copy(t.center).sub(xa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Uu=0,je=new me,_a=new Je,Ri=new W,Ye=new Gn,us=new Gn,we=new W,Me=class i extends xn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Uu++}),this.uuid=Ji(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ru(t)?bs:Ss)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ot().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return je.makeRotationFromQuaternion(t),this.applyMatrix4(je),this}rotateX(t){return je.makeRotationX(t),this.applyMatrix4(je),this}rotateY(t){return je.makeRotationY(t),this.applyMatrix4(je),this}rotateZ(t){return je.makeRotationZ(t),this.applyMatrix4(je),this}translate(t,e,n){return je.makeTranslation(t,e,n),this.applyMatrix4(je),this}scale(t,e,n){return je.makeScale(t,e,n),this.applyMatrix4(je),this}lookAt(t){return _a.lookAt(t),_a.updateMatrix(),this.applyMatrix4(_a.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ri).negate(),this.translate(Ri.x,Ri.y,Ri.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new se(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Ut("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ft("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Ye.setFromBufferAttribute(r),this.morphTargetsRelative?(we.addVectors(this.boundingBox.min,Ye.min),this.boundingBox.expandByPoint(we),we.addVectors(this.boundingBox.max,Ye.max),this.boundingBox.expandByPoint(we)):(this.boundingBox.expandByPoint(Ye.min),this.boundingBox.expandByPoint(Ye.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ft('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ci);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ft("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(t){let n=this.boundingSphere.center;if(Ye.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];us.setFromBufferAttribute(a),this.morphTargetsRelative?(we.addVectors(Ye.min,us.min),Ye.expandByPoint(we),we.addVectors(Ye.max,us.max),Ye.expandByPoint(we)):(Ye.expandByPoint(us.min),Ye.expandByPoint(us.max))}Ye.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)we.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(we));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)we.fromBufferAttribute(a,c),l&&(Ri.fromBufferAttribute(t,c),we.add(Ri)),s=Math.max(s,n.distanceToSquared(we))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ft('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Ft("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Te(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let x=0;x<n.count;x++)a[x]=new W,l[x]=new W;let c=new W,u=new W,f=new W,h=new qt,m=new qt,v=new qt,w=new W,p=new W;function d(x,T,L){c.fromBufferAttribute(n,x),u.fromBufferAttribute(n,T),f.fromBufferAttribute(n,L),h.fromBufferAttribute(r,x),m.fromBufferAttribute(r,T),v.fromBufferAttribute(r,L),u.sub(c),f.sub(c),m.sub(h),v.sub(h);let y=1/(m.x*v.y-v.x*m.y);isFinite(y)&&(w.copy(u).multiplyScalar(v.y).addScaledVector(f,-m.y).multiplyScalar(y),p.copy(f).multiplyScalar(m.x).addScaledVector(u,-v.x).multiplyScalar(y),a[x].add(w),a[T].add(w),a[L].add(w),l[x].add(p),l[T].add(p),l[L].add(p))}let R=this.groups;R.length===0&&(R=[{start:0,count:t.count}]);for(let x=0,T=R.length;x<T;++x){let L=R[x],y=L.start,A=L.count;for(let I=y,P=y+A;I<P;I+=3)d(t.getX(I+0),t.getX(I+1),t.getX(I+2))}let D=new W,_=new W,M=new W,S=new W;function C(x){M.fromBufferAttribute(s,x),S.copy(M);let T=a[x];D.copy(T),D.sub(M.multiplyScalar(M.dot(T))).normalize(),_.crossVectors(S,T);let y=_.dot(l[x])<0?-1:1;o.setXYZW(x,D.x,D.y,D.z,y)}for(let x=0,T=R.length;x<T;++x){let L=R[x],y=L.start,A=L.count;for(let I=y,P=y+A;I<P;I+=3)C(t.getX(I+0)),C(t.getX(I+1)),C(t.getX(I+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Te(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,m=n.count;h<m;h++)n.setXYZ(h,0,0,0);let s=new W,r=new W,o=new W,a=new W,l=new W,c=new W,u=new W,f=new W;if(t)for(let h=0,m=t.count;h<m;h+=3){let v=t.getX(h+0),w=t.getX(h+1),p=t.getX(h+2);s.fromBufferAttribute(e,v),r.fromBufferAttribute(e,w),o.fromBufferAttribute(e,p),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(n,v),l.fromBufferAttribute(n,w),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(v,a.x,a.y,a.z),n.setXYZ(w,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,m=e.count;h<m;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)we.fromBufferAttribute(t,e),we.normalize(),t.setXYZ(e,we.x,we.y,we.z)}toNonIndexed(){function t(a,l){let c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u),m=0,v=0;for(let w=0,p=l.length;w<p;w++){a.isInterleavedBufferAttribute?m=l[w]*a.data.stride+a.offset:m=l[w]*u;for(let d=0;d<u;d++)h[v++]=c[m++]}return new Te(h,u,f)}if(this.index===null)return Ut("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,f=c.length;u<f;u++){let h=c[u],m=t(h,n);l.push(m)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){let m=c[f];u.push(m.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(e))}let r=t.morphAttributes;for(let c in r){let u=[],f=r[c];for(let h=0,m=f.length;h<m;h++)u.push(f[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,u=o.length;c<u;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var va=new W,Fu=new W,Ou=new Ot,rn=class{constructor(t=new W(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=va.subVectors(n,e).cross(Fu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(va),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Ou.getNormalMatrix(t),s=this.coplanarPoint(va).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Bu=0,Hn=class extends xn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Bu++}),this.uuid=Ji(),this.name="",this.type="Material",this.blending=Xi,this.side=Jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Da,this.blendDst=Na,this.blendEquation=ui,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $t(0,0,0),this.blendAlpha=0,this.depthFunc=Ui,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Oc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=br,this.stencilZFail=br,this.stencilZPass=br,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Ut(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ut(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new $t().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new rn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new qt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new qt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Rn=new W,ya=new W,lr=new W,cr=new W,ws=class{constructor(t=new W,e=new W(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Rn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Rn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Rn.copy(this.origin).addScaledVector(this.direction,e),Rn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ya.copy(t).add(e).multiplyScalar(.5),lr.copy(e).sub(t).normalize(),cr.copy(this.origin).sub(ya);let r=t.distanceTo(e)*.5,o=-this.direction.dot(lr),a=cr.dot(this.direction),l=-cr.dot(lr),c=cr.lengthSq(),u=Math.abs(1-o*o),f,h,m,v;if(u>0)if(f=o*l-a,h=o*a-l,v=r*u,f>=0)if(h>=-v)if(h<=v){let w=1/u;f*=w,h*=w,m=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=r,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+c;else h<=-v?(f=Math.max(0,-(-o*r+a)),h=f>0?-r:Math.min(Math.max(-r,-l),r),m=-f*f+h*(h+2*l)+c):h<=v?(f=0,h=Math.min(Math.max(-r,-l),r),m=h*(h+2*l)+c):(f=Math.max(0,-(o*r+a)),h=f>0?r:Math.min(Math.max(-r,-l),r),m=-f*f+h*(h+2*l)+c);else h=o>0?-r:r,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(ya).addScaledVector(lr,h),m}intersectSphere(t,e){if(t.radius<0)return null;Rn.subVectors(t.center,this.origin);let n=Rn.dot(this.direction),s=Rn.dot(Rn)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,s=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,s=(t.min.x-h.x)*c),u>=0?(r=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(t.min.z-h.z)*f,l=(t.max.z-h.z)*f):(a=(t.max.z-h.z)*f,l=(t.min.z-h.z)*f),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Rn)!==null}intersectTriangle(t,e,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,u=a.z,f=t.x-o.x,h=t.y-o.y,m=t.z-o.z,v=e.x-o.x,w=e.y-o.y,p=e.z-o.z,d=n.x-o.x,R=n.y-o.y,D=n.z-o.z,_=Math.abs(l),M=Math.abs(c),S=Math.abs(u),C,x,T,L,y,A,I,P,U,B,V,K;if(_>=M&&_>=S?(T=l,A=f,U=v,K=d,l>=0?(C=c,x=u,L=h,y=m,I=w,P=p,B=R,V=D):(C=u,x=c,L=m,y=h,I=p,P=w,B=D,V=R)):M>=S?(T=c,A=h,U=w,K=R,c>=0?(C=u,x=l,L=m,y=f,I=p,P=v,B=D,V=d):(C=l,x=u,L=f,y=m,I=v,P=p,B=d,V=D)):(T=u,A=m,U=p,K=D,u>=0?(C=l,x=c,L=f,y=h,I=v,P=w,B=d,V=R):(C=c,x=l,L=h,y=f,I=w,P=v,B=R,V=d)),T===0)return null;let k=C/T,H=x/T,Y=1/T,st=L-k*A,at=y-H*A,Bt=I-k*U,zt=P-H*U,Vt=B-k*K,$=V-H*K,et=Vt*zt-$*Bt,xt=st*$-at*Vt,Dt=Bt*at-zt*st;if(s){if(et<0||xt<0||Dt<0)return null}else if((et<0||xt<0||Dt<0)&&(et>0||xt>0||Dt>0))return null;let mt=et+xt+Dt;if(mt===0)return null;let kt=Y*(et*A+xt*U+Dt*K);return(mt>0?kt<0:kt>0)?null:this.at(kt/mt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ts=class extends Hn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.combine=Ua,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},nc=new me,oi=new ws,hr=new ci,ic=new W,ur=new W,dr=new W,fr=new W,Ma=new W,pr=new W,sc=new W,mr=new W,jt=class extends Je{constructor(t=new Me,e=new Ts){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){pr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],f=r[l];u!==0&&(Ma.fromBufferAttribute(f,t),o?pr.addScaledVector(Ma,u):pr.addScaledVector(Ma.sub(e),u))}e.add(pr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),hr.copy(n.boundingSphere),hr.applyMatrix4(r),oi.copy(t.ray).recast(t.near),!(hr.containsPoint(oi.origin)===!1&&(oi.intersectSphere(hr,ic)===null||oi.origin.distanceToSquared(ic)>(t.far-t.near)**2))&&(nc.copy(r).invert(),oi.copy(t.ray).applyMatrix4(nc),!(n.boundingBox!==null&&oi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,oi)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,w=h.length;v<w;v++){let p=h[v],d=o[p.materialIndex],R=Math.max(p.start,m.start),D=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let _=R,M=D;_<M;_+=3){let S=a.getX(_),C=a.getX(_+1),x=a.getX(_+2);s=gr(this,d,t,n,c,u,f,S,C,x),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let v=Math.max(0,m.start),w=Math.min(a.count,m.start+m.count);for(let p=v,d=w;p<d;p+=3){let R=a.getX(p),D=a.getX(p+1),_=a.getX(p+2);s=gr(this,o,t,n,c,u,f,R,D,_),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,w=h.length;v<w;v++){let p=h[v],d=o[p.materialIndex],R=Math.max(p.start,m.start),D=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let _=R,M=D;_<M;_+=3){let S=_,C=_+1,x=_+2;s=gr(this,d,t,n,c,u,f,S,C,x),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let v=Math.max(0,m.start),w=Math.min(l.count,m.start+m.count);for(let p=v,d=w;p<d;p+=3){let R=p,D=p+1,_=p+2;s=gr(this,o,t,n,c,u,f,R,D,_),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function zu(i,t,e,n,s,r,o,a){let l;if(t.side===ze?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Jn,a),l===null)return null;mr.copy(a),mr.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(mr);return c<e.near||c>e.far?null:{distance:c,point:mr.clone(),object:i}}function gr(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,ur),i.getVertexPosition(l,dr),i.getVertexPosition(c,fr);let u=zu(i,t,e,n,ur,dr,fr,sc);if(u){let f=new W;Vn.getBarycoord(sc,ur,dr,fr,f),s&&(u.uv=Vn.getInterpolatedAttribute(s,a,l,c,f,new qt)),r&&(u.uv1=Vn.getInterpolatedAttribute(r,a,l,c,f,new qt)),o&&(u.normal=Vn.getInterpolatedAttribute(o,a,l,c,f,new W),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a,b:l,c,normal:new W,materialIndex:0};Vn.getNormal(ur,dr,fr,h.normal),u.face=h,u.barycoord=f}return u}var ki=class extends Be{constructor(t=null,e=1,n=1,s,r,o,a,l,c=Ae,u=Ae,f,h){super(null,o,a,l,c,u,s,r,f,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var hi=class extends Te{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}};var ai=new ci,Vu=new qt(.5,.5),xr=new W,As=class{constructor(t=new rn,e=new rn,n=new rn,s=new rn,r=new rn,o=new rn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=on,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],f=r[5],h=r[6],m=r[7],v=r[8],w=r[9],p=r[10],d=r[11],R=r[12],D=r[13],_=r[14],M=r[15];if(s[0].setComponents(c-o,m-u,d-v,M-R).normalize(),s[1].setComponents(c+o,m+u,d+v,M+R).normalize(),s[2].setComponents(c+a,m+f,d+w,M+D).normalize(),s[3].setComponents(c-a,m-f,d-w,M-D).normalize(),n)s[4].setComponents(l,h,p,_).normalize(),s[5].setComponents(c-l,m-h,d-p,M-_).normalize();else if(s[4].setComponents(c-l,m-h,d-p,M-_).normalize(),e===on)s[5].setComponents(c+l,m+h,d+p,M+_).normalize();else if(e===xs)s[5].setComponents(l,h,p,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ai.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ai.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ai)}intersectsSprite(t){ai.center.set(0,0,0);let e=Vu.distanceTo(t.center);return ai.radius=.7071067811865476+e,ai.applyMatrix4(t.matrixWorld),this.intersectsSphere(ai)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(xr.x=s.normal.x>0?t.max.x:t.min.x,xr.y=s.normal.y>0?t.max.y:t.min.y,xr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(xr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Fr=class extends Hn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new $t(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},rc=new me,Ea=new ws,_r=new ci,vr=new W,Gi=class extends Je{constructor(t=new Me,e=new Fr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_r.copy(n.boundingSphere),_r.applyMatrix4(s),_r.radius+=r,t.ray.intersectsSphere(_r)===!1)return;rc.copy(s).invert(),Ea.copy(t.ray).applyMatrix4(rc);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,f=n.attributes.position;if(c!==null){let h=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let v=h,w=m;v<w;v++){let p=c.getX(v);vr.fromBufferAttribute(f,p),oc(vr,p,l,s,t,e,this)}}else{let h=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let v=h,w=m;v<w;v++)vr.fromBufferAttribute(f,v),oc(vr,v,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function oc(i,t,e,n,s,r,o){let a=Ea.distanceSqToPoint(i);if(a<e){let l=new W;Ea.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Es=class extends Be{constructor(t=[],e=$n,n,s,r,o,a,l,c,u){super(t,e,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},vn=class extends Be{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Wn=class extends Be{constructor(t,e,n=ln,s,r,o,a=Ae,l=Ae,c,u=gn,f=1){if(u!==gn&&u!==Kn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:t,height:e,depth:f};super(h,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new zi(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Or=class extends Wn{constructor(t,e=ln,n=$n,s,r,o=Ae,a=Ae,l,c=gn){let u={width:t,height:t,depth:1},f=[u,u,u,u,u,u];super(t,t,e,n,s,r,o,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Cs=class extends Be{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},$e=class i extends Me{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],f=[],h=0,m=0;v("z","y","x",-1,-1,n,e,t,o,r,0),v("z","y","x",1,-1,n,e,-t,o,r,1),v("x","z","y",1,1,t,n,e,s,o,2),v("x","z","y",1,-1,t,n,-e,s,o,3),v("x","y","z",1,-1,t,e,n,s,r,4),v("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new se(c,3)),this.setAttribute("normal",new se(u,3)),this.setAttribute("uv",new se(f,2));function v(w,p,d,R,D,_,M,S,C,x,T){let L=_/C,y=M/x,A=_/2,I=M/2,P=S/2,U=C+1,B=x+1,V=0,K=0,k=new W;for(let H=0;H<B;H++){let Y=H*y-I;for(let st=0;st<U;st++){let at=st*L-A;k[w]=at*R,k[p]=Y*D,k[d]=P,c.push(k.x,k.y,k.z),k[w]=0,k[p]=0,k[d]=S>0?1:-1,u.push(k.x,k.y,k.z),f.push(st/C),f.push(1-H/x),V+=1}}for(let H=0;H<x;H++)for(let Y=0;Y<C;Y++){let st=h+Y+U*H,at=h+Y+U*(H+1),Bt=h+(Y+1)+U*(H+1),zt=h+(Y+1)+U*H;l.push(st,at,zt),l.push(at,Bt,zt),K+=6}a.addGroup(m,K,T),m+=K,h+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Xn=class i extends Me{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],f=[],h=[],m=[],v=0,w=[],p=n/2,d=0;R(),o===!1&&(t>0&&D(!0),e>0&&D(!1)),this.setIndex(u),this.setAttribute("position",new se(f,3)),this.setAttribute("normal",new se(h,3)),this.setAttribute("uv",new se(m,2));function R(){let _=new W,M=new W,S=0,C=(e-t)/n;for(let x=0;x<=r;x++){let T=[],L=x/r,y=L*(e-t)+t;for(let A=0;A<=s;A++){let I=A/s,P=I*l+a,U=Math.sin(P),B=Math.cos(P);M.x=y*U,M.y=-L*n+p,M.z=y*B,f.push(M.x,M.y,M.z),_.set(U,C,B).normalize(),h.push(_.x,_.y,_.z),m.push(I,1-L),T.push(v++)}w.push(T)}for(let x=0;x<s;x++)for(let T=0;T<r;T++){let L=w[T][x],y=w[T+1][x],A=w[T+1][x+1],I=w[T][x+1];(t>0||T!==0)&&(u.push(L,y,I),S+=3),(e>0||T!==r-1)&&(u.push(y,A,I),S+=3)}c.addGroup(d,S,0),d+=S}function D(_){let M=v,S=new qt,C=new W,x=0,T=_===!0?t:e,L=_===!0?1:-1;for(let A=1;A<=s;A++)f.push(0,p*L,0),h.push(0,L,0),m.push(.5,.5),v++;let y=v;for(let A=0;A<=s;A++){let P=A/s*l+a,U=Math.cos(P),B=Math.sin(P);C.x=T*B,C.y=p*L,C.z=T*U,f.push(C.x,C.y,C.z),h.push(0,L,0),S.x=U*.5+.5,S.y=B*.5*L+.5,m.push(S.x,S.y),v++}for(let A=0;A<s;A++){let I=M+A,P=y+A;_===!0?u.push(P,P+1,I):u.push(P+1,P,I),x+=3}c.addGroup(d,x,_===!0?1:2),d+=x}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var yn=class i extends Me{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,f=t/a,h=e/l,m=[],v=[],w=[],p=[];for(let d=0;d<u;d++){let R=d*h-o;for(let D=0;D<c;D++){let _=D*f-r;v.push(_,-R,0),w.push(0,0,1),p.push(D/a),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let R=0;R<a;R++){let D=R+c*d,_=R+c*(d+1),M=R+1+c*(d+1),S=R+1+c*d;m.push(D,_,S),m.push(_,M,S)}this.setIndex(m),this.setAttribute("position",new se(v,3)),this.setAttribute("normal",new se(w,3)),this.setAttribute("uv",new se(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Hi=class i extends Me{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,u=[],f=new W,h=new W,m=[],v=[],w=[],p=[];for(let d=0;d<=n;d++){let R=[],D=d/n,_=o+D*a,M=t*Math.cos(_),S=Math.sqrt(t*t-M*M),C=0;d===0&&o===0?C=.5/e:d===n&&l===Math.PI&&(C=-.5/e);for(let x=0;x<=e;x++){let T=x/e,L=s+T*r;f.x=-S*Math.cos(L),f.y=M,f.z=S*Math.sin(L),v.push(f.x,f.y,f.z),h.copy(f).normalize(),w.push(h.x,h.y,h.z),p.push(T+C,1-D),R.push(c++)}u.push(R)}for(let d=0;d<n;d++)for(let R=0;R<e;R++){let D=u[d][R+1],_=u[d][R],M=u[d+1][R],S=u[d+1][R+1];(d!==0||o>0)&&m.push(D,_,S),(d!==n-1||l<Math.PI)&&m.push(_,M,S)}this.setIndex(m),this.setAttribute("position",new se(v,3)),this.setAttribute("normal",new se(w,3)),this.setAttribute("uv",new se(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function fi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(ac(s))s.isRenderTargetTexture?(Ut("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(ac(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Ue(i){let t={};for(let e=0;e<i.length;e++){let n=fi(i[e]);for(let s in n)t[s]=n[s]}return t}function ac(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function ku(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function el(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Zt.workingColorSpace}var $c={clone:fi,merge:Ue},Gu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ce=class extends Hn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Gu,this.fragmentShader=Hu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=fi(t.uniforms),this.uniformsGroups=ku(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new $t().setHex(s.value);break;case"v2":this.uniforms[n].value=new qt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new W().fromArray(s.value);break;case"v4":this.uniforms[n].value=new re().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ot().fromArray(s.value);break;case"m4":this.uniforms[n].value=new me().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Br=class extends Ce{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var zr=class extends Hn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Uc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Vr=class extends Hn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Pi(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Sa(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var qn=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},kr=class extends qn{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:wa,endingEnd:wa}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ta:r=t,a=2*e-n;break;case Aa:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ta:o=t,l=2*n-e;break;case Aa:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,u=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,m=this._weightNext,v=(n-e)/(s-e),w=v*v,p=w*v,d=-h*p+2*h*w-h*v,R=(1+h)*p+(-1.5-2*h)*w+(-.5+h)*v+1,D=(-1-m)*p+(1.5+m)*w+.5*v,_=m*p-m*w;for(let M=0;M!==a;++M)r[M]=d*o[u+M]+R*o[c+M]+D*o[l+M]+_*o[f+M];return r}},Gr=class extends qn{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=(n-e)/(s-e),f=1-u;for(let h=0;h!==a;++h)r[h]=o[c+h]*f+o[l+h]*u;return r}},Hr=class extends qn{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Wr=class extends qn{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=this.inTangents,f=this.outTangents;if(!u||!f){let v=(n-e)/(s-e),w=1-v;for(let p=0;p!==a;++p)r[p]=o[c+p]*w+o[l+p]*v;return r}let h=a*2,m=t-1;for(let v=0;v!==a;++v){let w=o[c+v],p=o[l+v],d=m*h+v*2,R=f[d],D=f[d+1],_=t*h+v*2,M=u[_],S=u[_+1],C=Xu(n,e,R,M,s);r[v]=Kc(C,w,D,S,p)}return r}};function Kc(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Wu(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Xu(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){let a=Kc(r,t,e,n,s)-i;if(Math.abs(a)<1e-10)break;let l=Wu(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var Ke=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Pi(e,this.TimeBufferType),this.values=Pi(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Pi(t.times,Array),values:Pi(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Sa(t.settings)&&(n.settings={inTangents:Pi(t.settings.inTangents,Array),outTangents:Pi(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Hr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Gr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new kr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Wr(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case ps:e=this.InterpolantFactoryMethodDiscrete;break;case Lr:e=this.InterpolantFactoryMethodLinear;break;case Sr:e=this.InterpolantFactoryMethodSmooth;break;case ba:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ut("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ps;case this.InterpolantFactoryMethodLinear:return Lr;case this.InterpolantFactoryMethodSmooth:return Sr;case this.InterpolantFactoryMethodBezier:return ba}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Sa(this.settings)&&(lc(this.settings.inTangents,t),lc(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Ft("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ft("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Ft("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Ft("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&ou(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){Ft("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Sr,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],u=t[a+1];if(c!==u&&(a!==1||c!==t[0]))if(s)l=!0;else{let f=a*n,h=f-n,m=f+n;for(let v=0;v!==n;++v){let w=e[f+v];if(w!==e[h+v]||w!==e[m+v]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let f=a*n,h=o*n;for(let m=0;m!==n;++m)e[h+m]=e[f+m]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Sa(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function lc(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}Ke.prototype.ValueTypeName="";Ke.prototype.TimeBufferType=Float32Array;Ke.prototype.ValueBufferType=Float32Array;Ke.prototype.DefaultInterpolation=Lr;var Yn=class extends Ke{constructor(t,e,n){super(t,e,n)}};Yn.prototype.ValueTypeName="bool";Yn.prototype.ValueBufferType=Array;Yn.prototype.DefaultInterpolation=ps;Yn.prototype.InterpolantFactoryMethodLinear=void 0;Yn.prototype.InterpolantFactoryMethodSmooth=void 0;var Xr=class extends Ke{constructor(t,e,n,s){super(t,e,n,s)}};Xr.prototype.ValueTypeName="color";var qr=class extends Ke{constructor(t,e,n,s){super(t,e,n,s)}};qr.prototype.ValueTypeName="number";var Yr=class extends qn{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let u=c+a;c!==u;c+=4)_n.slerpFlat(r,0,o,c-a,o,c,l);return r}},Rs=class extends Ke{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Yr(this.times,this.values,this.getValueSize(),t)}};Rs.prototype.ValueTypeName="quaternion";Rs.prototype.InterpolantFactoryMethodSmooth=void 0;var Zn=class extends Ke{constructor(t,e,n){super(t,e,n)}};Zn.prototype.ValueTypeName="string";Zn.prototype.ValueBufferType=Array;Zn.prototype.DefaultInterpolation=ps;Zn.prototype.InterpolantFactoryMethodLinear=void 0;Zn.prototype.InterpolantFactoryMethodSmooth=void 0;var Zr=class extends Ke{constructor(t,e,n,s){super(t,e,n,s)}};Zr.prototype.ValueTypeName="vector";var Jr=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){let f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){let m=c[f],v=c[f+1];if(m.global&&(m.lastIndex=0),m.test(u))return v}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Qc=new Jr,$r=class{constructor(t){this.manager=t!==void 0?t:Qc,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};$r.DEFAULT_MATERIAL_NAME="__DEFAULT";var yr=new W,Mr=new _n,pn=new W,Ps=class extends Je{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new me,this.projectionMatrix=new me,this.projectionMatrixInverse=new me,this.coordinateSystem=on,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(yr,Mr,pn),pn.x===1&&pn.y===1&&pn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(yr,Mr,pn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(yr,Mr,pn),pn.x===1&&pn.y===1&&pn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(yr,Mr,pn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},zn=new W,cc=new qt,hc=new qt,De=class extends Ps{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Bi*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ds*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Bi*2*Math.atan(Math.tan(ds*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){zn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(zn.x,zn.y).multiplyScalar(-t/zn.z),zn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(zn.x,zn.y).multiplyScalar(-t/zn.z)}getViewSize(t,e){return this.getViewBounds(t,cc,hc),e.subVectors(hc,cc)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ds*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Is=class extends Ps{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var Ls=class extends Me{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var Ii=-90,Li=1,Kr=class extends Je{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new De(Ii,Li,t,e);s.layers=this.layers,this.add(s);let r=new De(Ii,Li,t,e);r.layers=this.layers,this.add(r);let o=new De(Ii,Li,t,e);o.layers=this.layers,this.add(o);let a=new De(Ii,Li,t,e);a.layers=this.layers,this.add(a);let l=new De(Ii,Li,t,e);l.layers=this.layers,this.add(l);let c=new De(Ii,Li,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===on)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===xs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;let w=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=w,t.setRenderTarget(n,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(f,h,m),t.xr.enabled=v,n.texture.needsPMREMUpdate=!0}},Qr=class extends De{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var nl="\\[\\]\\.:\\/",qu=new RegExp("["+nl+"]","g"),il="[^"+nl+"]",Yu="[^"+nl.replace("\\.","")+"]",Zu=/((?:WC+[\/:])*)/.source.replace("WC",il),Ju=/(WCOD+)?/.source.replace("WCOD",Yu),$u=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",il),Ku=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",il),Qu=new RegExp("^"+Zu+Ju+$u+Ku+"$"),ju=["material","materials","bones","map"],Ca=class{constructor(t,e,n){let s=n||fe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},fe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(qu,"")}static parseTrackName(t){let e=Qu.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);ju.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ut("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Ft("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Ft("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Ft("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Ft("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Ft("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Ft("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Ft("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;Ft("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Ft("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Ft("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};fe.Composite=Ca;fe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};fe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};fe.prototype.GetterByBindingType=[fe.prototype._getValue_direct,fe.prototype._getValue_array,fe.prototype._getValue_arrayElement,fe.prototype._getValue_toArray];fe.prototype.SetterByBindingTypeAndVersioning=[[fe.prototype._setValue_direct,fe.prototype._setValue_direct_setNeedsUpdate,fe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[fe.prototype._setValue_array,fe.prototype._setValue_array_setNeedsUpdate,fe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[fe.prototype._setValue_arrayElement,fe.prototype._setValue_arrayElement_setNeedsUpdate,fe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[fe.prototype._setValue_fromArray,fe.prototype._setValue_fromArray_setNeedsUpdate,fe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var tg=new Float32Array(1);var cl=class cl{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};cl.prototype.isMatrix2=!0;var Ra=cl;function sl(i,t,e,n){let s=td(n);switch(e){case Za:return i*t;case $a:return i*t/s.components*s.byteLength;case oo:return i*t/s.components*s.byteLength;case Qn:return i*t*2/s.components*s.byteLength;case ao:return i*t*2/s.components*s.byteLength;case Ja:return i*t*3/s.components*s.byteLength;case He:return i*t*4/s.components*s.byteLength;case lo:return i*t*4/s.components*s.byteLength;case Fs:case Os:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Bs:case zs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ho:case fo:return Math.max(i,16)*Math.max(t,8)/4;case co:case uo:return Math.max(i,8)*Math.max(t,8)/2;case po:case mo:case xo:case _o:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case go:case Vs:case vo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case yo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Mo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case So:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case bo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case wo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case To:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ao:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Eo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Co:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ro:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Po:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Io:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Lo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Do:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case No:case Uo:case Fo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Oo:case Bo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ks:case zo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function td(i){switch(i){case ke:case Wa:return{byteLength:1,components:1};case Yi:case Xa:case hn:return{byteLength:2,components:1};case so:case ro:return{byteLength:2,components:4};case ln:case io:case cn:return{byteLength:4,components:1};case qa:case Ya:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window!="undefined"&&(window.__THREE__?Ut("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function yh(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function nd(i){let t=new WeakMap;function e(a,l){let c=a.array,u=a.usage,f=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),a.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array!="undefined"&&c instanceof Float16Array)m=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){let u=l.array,f=l.updateRanges;if(i.bindBuffer(c,a),f.length===0)i.bufferSubData(c,0,u);else{f.sort((m,v)=>m.start-v.start);let h=0;for(let m=1;m<f.length;m++){let v=f[h],w=f[m];w.start<=v.start+v.count+1?v.count=Math.max(v.count,w.start+w.count-v.start):(++h,f[h]=w)}f.length=h+1;for(let m=0,v=f.length;m<v;m++){let w=f[m];i.bufferSubData(c,w.start*u.BYTES_PER_ELEMENT,u,w.start,w.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var id=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sd=`#ifdef USE_ALPHAHASH
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
#endif`,rd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,od=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ad=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ld=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cd=`#ifdef USE_AOMAP
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
#endif`,hd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ud=`#ifdef USE_BATCHING
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
#endif`,dd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,fd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,pd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,md=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,gd=`#ifdef USE_IRIDESCENCE
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
#endif`,xd=`#ifdef USE_BUMPMAP
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
#endif`,_d=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,vd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Md=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Sd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,bd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,wd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Td=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Ad=`#define PI 3.141592653589793
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
} // validated`,Ed=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Cd=`vec3 transformedNormal = objectNormal;
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
#endif`,Rd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Pd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Id=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ld=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Dd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Nd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ud=`#ifdef USE_ENVMAP
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
#endif`,Fd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Od=`#ifdef USE_ENVMAP
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
#endif`,Bd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zd=`#ifdef USE_ENVMAP
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
#endif`,Vd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,kd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Wd=`#ifdef USE_GRADIENTMAP
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
}`,Xd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Yd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Zd=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Jd=`#ifdef USE_ENVMAP
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
#endif`,$d=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Kd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Qd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,tf=`PhysicalMaterial material;
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
#endif`,ef=`uniform sampler2D dfgLUT;
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
}`,nf=`
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
#endif`,sf=`#if defined( RE_IndirectDiffuse )
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
#endif`,rf=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,of=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,af=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,uf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,df=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ff=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,pf=`#if defined( USE_POINTS_UV )
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
#endif`,mf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_f=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yf=`#ifdef USE_MORPHTARGETS
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
#endif`,Mf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,bf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,wf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Af=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Ef=`#ifdef USE_NORMALMAP
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
#endif`,Cf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Rf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Pf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,If=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Lf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Df=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Nf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Uf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ff=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Of=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Bf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Vf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,kf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Gf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Hf=`float getShadowMask() {
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
}`,Wf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Xf=`#ifdef USE_SKINNING
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
#endif`,qf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Yf=`#ifdef USE_SKINNING
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
#endif`,Zf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$f=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Kf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Qf=`#ifdef USE_TRANSMISSION
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
#endif`,jf=`#ifdef USE_TRANSMISSION
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
#endif`,tp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ep=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,np=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ip=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,sp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rp=`uniform sampler2D t2D;
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
}`,op=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ap=`#ifdef ENVMAP_TYPE_CUBE
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
}`,lp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hp=`#include <common>
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
}`,up=`#if DEPTH_PACKING == 3200
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
}`,dp=`#define DISTANCE
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
}`,fp=`#define DISTANCE
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
}`,pp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gp=`uniform float scale;
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
}`,xp=`uniform vec3 diffuse;
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
}`,_p=`#include <common>
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
}`,vp=`uniform vec3 diffuse;
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
}`,yp=`#define LAMBERT
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
}`,Mp=`#define LAMBERT
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
}`,Sp=`#define MATCAP
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
}`,bp=`#define MATCAP
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
}`,wp=`#define NORMAL
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
}`,Tp=`#define NORMAL
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
}`,Ap=`#define PHONG
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
}`,Ep=`#define PHONG
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
}`,Cp=`#define STANDARD
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
}`,Rp=`#define STANDARD
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
}`,Pp=`#define TOON
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
}`,Ip=`#define TOON
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
}`,Lp=`uniform float size;
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
}`,Dp=`uniform vec3 diffuse;
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
}`,Np=`#include <common>
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
}`,Up=`uniform vec3 color;
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
}`,Fp=`uniform float rotation;
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
}`,Op=`uniform vec3 diffuse;
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
}`,Ht={alphahash_fragment:id,alphahash_pars_fragment:sd,alphamap_fragment:rd,alphamap_pars_fragment:od,alphatest_fragment:ad,alphatest_pars_fragment:ld,aomap_fragment:cd,aomap_pars_fragment:hd,batching_pars_vertex:ud,batching_vertex:dd,begin_vertex:fd,beginnormal_vertex:pd,bsdfs:md,iridescence_fragment:gd,bumpmap_pars_fragment:xd,clipping_planes_fragment:_d,clipping_planes_pars_fragment:vd,clipping_planes_pars_vertex:yd,clipping_planes_vertex:Md,color_fragment:Sd,color_pars_fragment:bd,color_pars_vertex:wd,color_vertex:Td,common:Ad,cube_uv_reflection_fragment:Ed,defaultnormal_vertex:Cd,displacementmap_pars_vertex:Rd,displacementmap_vertex:Pd,emissivemap_fragment:Id,emissivemap_pars_fragment:Ld,colorspace_fragment:Dd,colorspace_pars_fragment:Nd,envmap_fragment:Ud,envmap_common_pars_fragment:Fd,envmap_pars_fragment:Od,envmap_pars_vertex:Bd,envmap_physical_pars_fragment:Jd,envmap_vertex:zd,fog_vertex:Vd,fog_pars_vertex:kd,fog_fragment:Gd,fog_pars_fragment:Hd,gradientmap_pars_fragment:Wd,lightmap_pars_fragment:Xd,lights_lambert_fragment:qd,lights_lambert_pars_fragment:Yd,lights_pars_begin:Zd,lights_toon_fragment:$d,lights_toon_pars_fragment:Kd,lights_phong_fragment:Qd,lights_phong_pars_fragment:jd,lights_physical_fragment:tf,lights_physical_pars_fragment:ef,lights_fragment_begin:nf,lights_fragment_maps:sf,lights_fragment_end:rf,lightprobes_pars_fragment:of,logdepthbuf_fragment:af,logdepthbuf_pars_fragment:lf,logdepthbuf_pars_vertex:cf,logdepthbuf_vertex:hf,map_fragment:uf,map_pars_fragment:df,map_particle_fragment:ff,map_particle_pars_fragment:pf,metalnessmap_fragment:mf,metalnessmap_pars_fragment:gf,morphinstance_vertex:xf,morphcolor_vertex:_f,morphnormal_vertex:vf,morphtarget_pars_vertex:yf,morphtarget_vertex:Mf,normal_fragment_begin:Sf,normal_fragment_maps:bf,normal_pars_fragment:wf,normal_pars_vertex:Tf,normal_vertex:Af,normalmap_pars_fragment:Ef,clearcoat_normal_fragment_begin:Cf,clearcoat_normal_fragment_maps:Rf,clearcoat_pars_fragment:Pf,iridescence_pars_fragment:If,opaque_fragment:Lf,packing:Df,premultiplied_alpha_fragment:Nf,project_vertex:Uf,dithering_fragment:Ff,dithering_pars_fragment:Of,roughnessmap_fragment:Bf,roughnessmap_pars_fragment:zf,shadowmap_pars_fragment:Vf,shadowmap_pars_vertex:kf,shadowmap_vertex:Gf,shadowmask_pars_fragment:Hf,skinbase_vertex:Wf,skinning_pars_vertex:Xf,skinning_vertex:qf,skinnormal_vertex:Yf,specularmap_fragment:Zf,specularmap_pars_fragment:Jf,tonemapping_fragment:$f,tonemapping_pars_fragment:Kf,transmission_fragment:Qf,transmission_pars_fragment:jf,uv_pars_fragment:tp,uv_pars_vertex:ep,uv_vertex:np,worldpos_vertex:ip,background_vert:sp,background_frag:rp,backgroundCube_vert:op,backgroundCube_frag:ap,cube_vert:lp,cube_frag:cp,depth_vert:hp,depth_frag:up,distance_vert:dp,distance_frag:fp,equirect_vert:pp,equirect_frag:mp,linedashed_vert:gp,linedashed_frag:xp,meshbasic_vert:_p,meshbasic_frag:vp,meshlambert_vert:yp,meshlambert_frag:Mp,meshmatcap_vert:Sp,meshmatcap_frag:bp,meshnormal_vert:wp,meshnormal_frag:Tp,meshphong_vert:Ap,meshphong_frag:Ep,meshphysical_vert:Cp,meshphysical_frag:Rp,meshtoon_vert:Pp,meshtoon_frag:Ip,points_vert:Lp,points_frag:Dp,shadow_vert:Np,shadow_frag:Up,sprite_vert:Fp,sprite_frag:Op},_t={common:{diffuse:{value:new $t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ot}},envmap:{envMap:{value:null},envMapRotation:{value:new Ot},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ot},normalScale:{value:new qt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new W},probesMax:{value:new W},probesResolution:{value:new W}},points:{diffuse:{value:new $t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0},uvTransform:{value:new Ot}},sprite:{diffuse:{value:new $t(16777215)},opacity:{value:1},center:{value:new qt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}}},bn={basic:{uniforms:Ue([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.fog]),vertexShader:Ht.meshbasic_vert,fragmentShader:Ht.meshbasic_frag},lambert:{uniforms:Ue([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new $t(0)},envMapIntensity:{value:1}}]),vertexShader:Ht.meshlambert_vert,fragmentShader:Ht.meshlambert_frag},phong:{uniforms:Ue([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new $t(0)},specular:{value:new $t(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphong_vert,fragmentShader:Ht.meshphong_frag},standard:{uniforms:Ue([_t.common,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.roughnessmap,_t.metalnessmap,_t.fog,_t.lights,{emissive:{value:new $t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag},toon:{uniforms:Ue([_t.common,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.gradientmap,_t.fog,_t.lights,{emissive:{value:new $t(0)}}]),vertexShader:Ht.meshtoon_vert,fragmentShader:Ht.meshtoon_frag},matcap:{uniforms:Ue([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,{matcap:{value:null}}]),vertexShader:Ht.meshmatcap_vert,fragmentShader:Ht.meshmatcap_frag},points:{uniforms:Ue([_t.points,_t.fog]),vertexShader:Ht.points_vert,fragmentShader:Ht.points_frag},dashed:{uniforms:Ue([_t.common,_t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ht.linedashed_vert,fragmentShader:Ht.linedashed_frag},depth:{uniforms:Ue([_t.common,_t.displacementmap]),vertexShader:Ht.depth_vert,fragmentShader:Ht.depth_frag},normal:{uniforms:Ue([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,{opacity:{value:1}}]),vertexShader:Ht.meshnormal_vert,fragmentShader:Ht.meshnormal_frag},sprite:{uniforms:Ue([_t.sprite,_t.fog]),vertexShader:Ht.sprite_vert,fragmentShader:Ht.sprite_frag},background:{uniforms:{uvTransform:{value:new Ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ht.background_vert,fragmentShader:Ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ot}},vertexShader:Ht.backgroundCube_vert,fragmentShader:Ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ht.cube_vert,fragmentShader:Ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ht.equirect_vert,fragmentShader:Ht.equirect_frag},distance:{uniforms:Ue([_t.common,_t.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ht.distance_vert,fragmentShader:Ht.distance_frag},shadow:{uniforms:Ue([_t.lights,_t.fog,{color:{value:new $t(0)},opacity:{value:1}}]),vertexShader:Ht.shadow_vert,fragmentShader:Ht.shadow_frag}};bn.physical={uniforms:Ue([bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ot},clearcoatNormalScale:{value:new qt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ot},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ot},sheen:{value:0},sheenColor:{value:new $t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ot},transmissionSamplerSize:{value:new qt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ot},attenuationDistance:{value:0},attenuationColor:{value:new $t(0)},specularColor:{value:new $t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ot},anisotropyVector:{value:new qt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ot}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag};var Go={r:0,b:0,g:0},Bp=new me,Mh=new Ot;Mh.set(-1,0,0,0,1,0,0,0,1);function zp(i,t,e,n,s,r){let o=new $t(0),a=s===!0?0:1,l,c,u=null,f=0,h=null;function m(R){let D=R.isScene===!0?R.background:null;if(D&&D.isTexture){let _=R.backgroundBlurriness>0;D=t.get(D,_)}return D}function v(R){let D=!1,_=m(R);_===null?p(o,a):_&&_.isColor&&(p(_,1),D=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?e.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||D)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function w(R,D){let _=m(D);_&&(_.isCubeTexture||_.mapping===Ns)?(c===void 0&&(c=new jt(new $e(1,1,1),new Ce({name:"BackgroundCubeMaterial",uniforms:fi(bn.backgroundCube.uniforms),vertexShader:bn.backgroundCube.vertexShader,fragmentShader:bn.backgroundCube.fragmentShader,side:ze,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,S,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Bp.makeRotationFromEuler(D.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Mh),c.material.toneMapped=Zt.getTransfer(_.colorSpace)!==ie,(u!==_||f!==_.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=_,f=_.version,h=i.toneMapping),c.layers.enableAll(),R.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new jt(new yn(2,2),new Ce({name:"BackgroundMaterial",uniforms:fi(bn.background.uniforms),vertexShader:bn.background.vertexShader,fragmentShader:bn.background.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,l.material.toneMapped=Zt.getTransfer(_.colorSpace)!==ie,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||f!==_.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=_,f=_.version,h=i.toneMapping),l.layers.enableAll(),R.unshift(l,l.geometry,l.material,0,0,null))}function p(R,D){R.getRGB(Go,el(i)),e.buffers.color.setClear(Go.r,Go.g,Go.b,D,r)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(R,D=1){o.set(R),a=D,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(R){a=R,p(o,a)},render:v,addToRenderList:w,dispose:d}}function Vp(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null),r=s,o=!1;function a(y,A,I,P,U){let B=!1,V=f(y,P,I,A);r!==V&&(r=V,c(r.object)),B=m(y,P,I,U),B&&v(y,P,I,U),U!==null&&t.update(U,i.ELEMENT_ARRAY_BUFFER),(B||o)&&(o=!1,_(y,A,I,P),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function u(y){return i.deleteVertexArray(y)}function f(y,A,I,P){let U=P.wireframe===!0,B=n[A.id];B===void 0&&(B={},n[A.id]=B);let V=y.isInstancedMesh===!0?y.id:0,K=B[V];K===void 0&&(K={},B[V]=K);let k=K[I.id];k===void 0&&(k={},K[I.id]=k);let H=k[U];return H===void 0&&(H=h(l()),k[U]=H),H}function h(y){let A=[],I=[],P=[];for(let U=0;U<e;U++)A[U]=0,I[U]=0,P[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:I,attributeDivisors:P,object:y,attributes:{},index:null}}function m(y,A,I,P){let U=r.attributes,B=A.attributes,V=0,K=I.getAttributes();for(let k in K)if(K[k].location>=0){let Y=U[k],st=B[k];if(st===void 0&&(k==="instanceMatrix"&&y.instanceMatrix&&(st=y.instanceMatrix),k==="instanceColor"&&y.instanceColor&&(st=y.instanceColor)),Y===void 0||Y.attribute!==st||st&&Y.data!==st.data)return!0;V++}return r.attributesNum!==V||r.index!==P}function v(y,A,I,P){let U={},B=A.attributes,V=0,K=I.getAttributes();for(let k in K)if(K[k].location>=0){let Y=B[k];Y===void 0&&(k==="instanceMatrix"&&y.instanceMatrix&&(Y=y.instanceMatrix),k==="instanceColor"&&y.instanceColor&&(Y=y.instanceColor));let st={};st.attribute=Y,Y&&Y.data&&(st.data=Y.data),U[k]=st,V++}r.attributes=U,r.attributesNum=V,r.index=P}function w(){let y=r.newAttributes;for(let A=0,I=y.length;A<I;A++)y[A]=0}function p(y){d(y,0)}function d(y,A){let I=r.newAttributes,P=r.enabledAttributes,U=r.attributeDivisors;I[y]=1,P[y]===0&&(i.enableVertexAttribArray(y),P[y]=1),U[y]!==A&&(i.vertexAttribDivisor(y,A),U[y]=A)}function R(){let y=r.newAttributes,A=r.enabledAttributes;for(let I=0,P=A.length;I<P;I++)A[I]!==y[I]&&(i.disableVertexAttribArray(I),A[I]=0)}function D(y,A,I,P,U,B,V){V===!0?i.vertexAttribIPointer(y,A,I,U,B):i.vertexAttribPointer(y,A,I,P,U,B)}function _(y,A,I,P){w();let U=P.attributes,B=I.getAttributes(),V=A.defaultAttributeValues;for(let K in B){let k=B[K];if(k.location>=0){let H=U[K];if(H===void 0&&(K==="instanceMatrix"&&y.instanceMatrix&&(H=y.instanceMatrix),K==="instanceColor"&&y.instanceColor&&(H=y.instanceColor)),H!==void 0){let Y=H.normalized,st=H.itemSize,at=t.get(H);if(at===void 0)continue;let Bt=at.buffer,zt=at.type,Vt=at.bytesPerElement,$=zt===i.INT||zt===i.UNSIGNED_INT||H.gpuType===io;if(H.isInterleavedBufferAttribute){let et=H.data,xt=et.stride,Dt=H.offset;if(et.isInstancedInterleavedBuffer){for(let mt=0;mt<k.locationSize;mt++)d(k.location+mt,et.meshPerAttribute);y.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let mt=0;mt<k.locationSize;mt++)p(k.location+mt);i.bindBuffer(i.ARRAY_BUFFER,Bt);for(let mt=0;mt<k.locationSize;mt++)D(k.location+mt,st/k.locationSize,zt,Y,xt*Vt,(Dt+st/k.locationSize*mt)*Vt,$)}else{if(H.isInstancedBufferAttribute){for(let et=0;et<k.locationSize;et++)d(k.location+et,H.meshPerAttribute);y.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let et=0;et<k.locationSize;et++)p(k.location+et);i.bindBuffer(i.ARRAY_BUFFER,Bt);for(let et=0;et<k.locationSize;et++)D(k.location+et,st/k.locationSize,zt,Y,st*Vt,st/k.locationSize*et*Vt,$)}}else if(V!==void 0){let Y=V[K];if(Y!==void 0)switch(Y.length){case 2:i.vertexAttrib2fv(k.location,Y);break;case 3:i.vertexAttrib3fv(k.location,Y);break;case 4:i.vertexAttrib4fv(k.location,Y);break;default:i.vertexAttrib1fv(k.location,Y)}}}}R()}function M(){T();for(let y in n){let A=n[y];for(let I in A){let P=A[I];for(let U in P){let B=P[U];for(let V in B)u(B[V].object),delete B[V];delete P[U]}}delete n[y]}}function S(y){if(n[y.id]===void 0)return;let A=n[y.id];for(let I in A){let P=A[I];for(let U in P){let B=P[U];for(let V in B)u(B[V].object),delete B[V];delete P[U]}}delete n[y.id]}function C(y){for(let A in n){let I=n[A];for(let P in I){let U=I[P];if(U[y.id]===void 0)continue;let B=U[y.id];for(let V in B)u(B[V].object),delete B[V];delete U[y.id]}}}function x(y){for(let A in n){let I=n[A],P=y.isInstancedMesh===!0?y.id:0,U=I[P];if(U!==void 0){for(let B in U){let V=U[B];for(let K in V)u(V[K].object),delete V[K];delete U[B]}delete I[P],Object.keys(I).length===0&&delete n[A]}}}function T(){L(),o=!0,r!==s&&(r=s,c(r.object))}function L(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:T,resetDefaultState:L,dispose:M,releaseStatesOfGeometry:S,releaseStatesOfObject:x,releaseStatesOfProgram:C,initAttributes:w,enableAttribute:p,disableUnusedAttributes:R}}function kp(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),e.update(c,n,u))}function a(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let m=0;m<u;m++)h+=c[m];e.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Gp(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==He&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){let x=C===hn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==ke&&C!==cn&&!x&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(Ut("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let f=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&Ut("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),R=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),D=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=i.getParameter(i.MAX_SAMPLES),S=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:m,maxVertexTextures:v,maxTextureSize:w,maxCubemapSize:p,maxAttributes:d,maxVertexUniforms:R,maxVaryings:D,maxFragmentUniforms:_,maxSamples:M,samples:S}}function Hp(i){let t=this,e=null,n=0,s=!1,r=!1,o=new rn,a=new Ot,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){let m=f.length!==0||h||n!==0||s;return s=h,n=f.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){e=u(f,h,0)},this.setState=function(f,h,m){let v=f.clippingPlanes,w=f.clipIntersection,p=f.clipShadows,d=i.get(f);if(!s||v===null||v.length===0||r&&!p)r?u(null):c();else{let R=r?0:n,D=R*4,_=d.clippingState||null;l.value=_,_=u(v,h,D,m);for(let M=0;M!==D;++M)_[M]=e[M];d.clippingState=_,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=R}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(f,h,m,v){let w=f!==null?f.length:0,p=null;if(w!==0){if(p=l.value,v!==!0||p===null){let d=m+w*4,R=h.matrixWorldInverse;a.getNormalMatrix(R),(p===null||p.length<d)&&(p=new Float32Array(d));for(let D=0,_=m;D!==w;++D,_+=4)o.copy(f[D]).applyMatrix4(R,a),o.normal.toArray(p,_),p[_+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=w,t.numIntersection=0,p}}var Ki=4,Wp=6,Xp=20,qp=256,Gs=new Is,jc=new $t,hl=null,ul=0,dl=0,fl=!1,Yp=new W,pi=new W,Wo=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=Yp}=r;hl=this._renderer.getRenderTarget(),ul=this._renderer.getActiveCubeFace(),dl=this._renderer.getActiveMipmapLevel(),fl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=eh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(hl,ul,dl),this._renderer.xr.enabled=fl,t.scissorTest=!1,$i(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===$n||t.mapping===di?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),hl=this._renderer.getRenderTarget(),ul=this._renderer.getActiveCubeFace(),dl=this._renderer.getActiveMipmapLevel(),fl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:pe,minFilter:pe,generateMipmaps:!1,type:hn,format:He,colorSpace:ms,depthBuffer:!1},s=th(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=th(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Zp(r)),this._blurMaterial=$p(r,t,e),this._ggxMaterial=Jp(r,t,e)}return s}_compileMaterial(t){let e=new jt(new Me,t);this._renderer.compile(e,Gs)}_sceneToCubeUV(t,e,n,s,r){let l=new De(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,m=f.toneMapping;f.getClearColor(jc),f.toneMapping=an,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new jt(new $e,new Ts({name:"PMREM.Background",side:ze,depthWrite:!1,depthTest:!1})));let w=this._backgroundBox,p=w.material,d=!1,R=t.background;R?R.isColor&&(p.color.copy(R),t.background=null,d=!0):(p.color.copy(jc),d=!0);for(let D=0;D<6;D++){let _=D%3;_===0?(l.up.set(0,c[D],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[D],r.y,r.z)):_===1?(l.up.set(0,0,c[D]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[D],r.z)):(l.up.set(0,c[D],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[D]));let M=this._cubeSize;$i(s,_*M,D>2?M:0,M,M),f.setRenderTarget(s),d&&f.render(w,l),f.render(t,l)}f.toneMapping=m,f.autoClear=h,t.background=R}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===$n||t.mapping===di;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=nh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=eh());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;$i(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Gs)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),h=c*1.25,m=f*h,{_lodMax:v}=this,w=this._sizeLods[n],p=3*w*(n>v-Ki?n-v+Ki:0),d=4*(this._cubeSize-w);l.envMap.value=t.texture,l.roughness.value=m,l.mipInt.value=v-e,$i(r,p,d,3*w,2*w),s.setRenderTarget(r),s.render(a,Gs),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=v-n,$i(t,p,d,3*w,2*w),s.setRenderTarget(t),s.render(a,Gs)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,s,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let u=this._sizeLods[s],f=3*u*(s>this._lodMax-Ki?s-this._lodMax+Ki:0),h=4*(this._cubeSize-u);$i(e,f,h,3*u,2*u),o.setRenderTarget(e),o.render(l,Gs)}};function Zp(i){let t=[],e=[],n=i,s=i-Ki+1+Wp;for(let r=0;r<s;r++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),l=-a,c=1+a,u=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,h=6,m=3,v=new Float32Array(m*h*f),w=new Float32Array(m*h*f);for(let d=0;d<f;d++){let R=d%3*2/3-1,D=d>2?0:-1,_=[R,D,0,R+2/3,D,0,R+2/3,D+1,0,R,D,0,R+2/3,D+1,0,R,D+1,0];v.set(_,m*h*d);for(let M=0;M<h;M++){let S=u[M*2]*2-1,C=u[M*2+1]*2-1;d===0?pi.set(1,C,S):d===1?pi.set(-S,1,-C):d===2?pi.set(-S,C,1):d===3?pi.set(-1,C,-S):d===4?pi.set(-S,-1,C):pi.set(S,C,-1),pi.toArray(w,(d*h+M)*m)}}let p=new Me;p.setAttribute("position",new Te(v,m)),p.setAttribute("outputDirection",new Te(w,m)),e.push(new jt(p,null)),n>Ki&&n--}return{lodMeshes:e,sizeLods:t}}function th(i,t,e){let n=new Ge(i,t,e);return n.texture.mapping=Ns,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function $i(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Jp(i,t,e){return new Ce({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:qp,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Yo(),fragmentShader:`

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
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function $p(i,t,e){return new Ce({name:"SphericalGaussianBlur",defines:{SAMPLES:Xp,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Yo(),fragmentShader:`

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
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function eh(){return new Ce({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yo(),fragmentShader:`

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
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function nh(){return new Ce({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function Yo(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Xo=class extends Ge{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Es(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new $e(5,5,5),r=new Ce({name:"CubemapFromEquirect",uniforms:fi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ze,blending:Mn});r.uniforms.tEquirect.value=e;let o=new jt(s,r),a=e.minFilter;return e.minFilter===Ne&&(e.minFilter=pe),new Kr(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}};function Kp(i){let t=new WeakMap,e=new WeakMap,n=null;function s(h,m=!1){return h==null?null:m?o(h):r(h)}function r(h){if(h&&h.isTexture){let m=h.mapping;if(m===to||m===eo)if(t.has(h)){let v=t.get(h).texture;return a(v,h.mapping)}else{let v=h.image;if(v&&v.height>0){let w=new Xo(v.height);return w.fromEquirectangularTexture(i,h),t.set(h,w),h.addEventListener("dispose",c),a(w.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){let m=h.mapping,v=m===to||m===eo,w=m===$n||m===di;if(v||w){let p=e.get(h),d=p!==void 0?p.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==d)return n===null&&(n=new Wo(i)),p=v?n.fromEquirectangular(h,p):n.fromCubemap(h,p),p.texture.pmremVersion=h.pmremVersion,e.set(h,p),p.texture;if(p!==void 0)return p.texture;{let R=h.image;return v&&R&&R.height>0||w&&R&&l(R)?(n===null&&(n=new Wo(i)),p=v?n.fromEquirectangular(h):n.fromCubemap(h),p.texture.pmremVersion=h.pmremVersion,e.set(h,p),h.addEventListener("dispose",u),p.texture):null}}}return h}function a(h,m){return m===to?h.mapping=$n:m===eo&&(h.mapping=di),h}function l(h){let m=0,v=6;for(let w=0;w<v;w++)h[w]!==void 0&&m++;return m===v}function c(h){let m=h.target;m.removeEventListener("dispose",c);let v=t.get(m);v!==void 0&&(t.delete(m),v.dispose())}function u(h){let m=h.target;m.removeEventListener("dispose",u);let v=e.get(m);v!==void 0&&(e.delete(m),v.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function Qp(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&li("WebGLRenderer: "+n+" extension not supported."),s}}}function jp(i,t,e,n){let s={},r=new WeakMap;function o(f){let h=f.target;h.index!==null&&t.remove(h.index);for(let v in h.attributes)t.remove(h.attributes[v]);h.removeEventListener("dispose",o),delete s[h.id];let m=r.get(h);m&&(t.remove(m),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(f,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,e.memory.geometries++),h}function l(f){let h=f.attributes;for(let m in h)t.update(h[m],i.ARRAY_BUFFER)}function c(f){let h=[],m=f.index,v=f.attributes.position,w=0;if(v===void 0)return;if(m!==null){let R=m.array;w=m.version;for(let D=0,_=R.length;D<_;D+=3){let M=R[D+0],S=R[D+1],C=R[D+2];h.push(M,S,S,C,C,M)}}else{let R=v.array;w=v.version;for(let D=0,_=R.length/3-1;D<_;D+=3){let M=D+0,S=D+1,C=D+2;h.push(M,S,S,C,C,M)}}let p=new(v.count>=65535?bs:Ss)(h,1);p.version=w;let d=r.get(f);d&&t.remove(d),r.set(f,p)}function u(f){let h=r.get(f);if(h){let m=f.index;m!==null&&h.version<m.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function tm(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,h){i.drawElements(n,h,r,f*o),e.update(h,n,1)}function c(f,h,m){m!==0&&(i.drawElementsInstanced(n,h,r,f*o,m),e.update(h,n,m))}function u(f,h,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,f,0,m);let w=0;for(let p=0;p<m;p++)w+=h[p];e.update(w,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function em(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:Ft("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function nm(i,t,e){let n=new WeakMap,s=new re;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0,h=n.get(a);if(h===void 0||h.count!==f){let T=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",T)};h!==void 0&&h.texture.dispose();let m=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,w=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],R=a.morphAttributes.color||[],D=0;m===!0&&(D=1),v===!0&&(D=2),w===!0&&(D=3);let _=a.attributes.position.count*D,M=1;_>t.maxTextureSize&&(M=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let S=new Float32Array(_*M*4*f),C=new vs(S,_,M,f);C.type=cn,C.needsUpdate=!0;let x=D*4;for(let L=0;L<f;L++){let y=p[L],A=d[L],I=R[L],P=_*M*4*L;for(let U=0;U<y.count;U++){let B=U*x;m===!0&&(s.fromBufferAttribute(y,U),S[P+B+0]=s.x,S[P+B+1]=s.y,S[P+B+2]=s.z,S[P+B+3]=0),v===!0&&(s.fromBufferAttribute(A,U),S[P+B+4]=s.x,S[P+B+5]=s.y,S[P+B+6]=s.z,S[P+B+7]=0),w===!0&&(s.fromBufferAttribute(I,U),S[P+B+8]=s.x,S[P+B+9]=s.y,S[P+B+10]=s.z,S[P+B+11]=I.itemSize===4?s.w:1)}}h={count:f,texture:C,size:new qt(_,M)},n.set(a,h),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let m=0;for(let w=0;w<c.length;w++)m+=c[w];let v=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function im(i,t,e,n,s){let r=new WeakMap;function o(c){let u=s.render.frame,f=c.geometry,h=t.get(c,f);if(r.get(h)!==u&&(t.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let m=c.skeleton;r.get(m)!==u&&(m.update(),r.set(m,u))}return h}function a(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:o,dispose:a}}var sm={[Fa]:"LINEAR_TONE_MAPPING",[Oa]:"REINHARD_TONE_MAPPING",[Ba]:"CINEON_TONE_MAPPING",[za]:"ACES_FILMIC_TONE_MAPPING",[ka]:"AGX_TONE_MAPPING",[Ga]:"NEUTRAL_TONE_MAPPING",[Va]:"CUSTOM_TONE_MAPPING"};function rm(i,t,e,n,s,r){let o=new Ge(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new Me;c.setAttribute("position",new se([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new se([0,2,0,0,2,0],2));let u=new Br({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new jt(c,u),h=new Is(-1,1,1,-1,0,1),m=null,v=null,w=!1,p,d=null,R=[],D=!1;this.setSize=function(_,M){o.setSize(_,M),a!==null&&a.setSize(_,M),l!==null&&l.setSize(_,M);for(let S=0;S<R.length;S++){let C=R[S];C.setSize&&C.setSize(_,M)}},this.setEffects=function(_){R=_,D=R.length>0&&R[0].isRenderPass===!0;let M=o.width,S=o.height;R.length>0&&a===null&&(a=new Ge(M,S,{type:hn,depthBuffer:!1,stencilBuffer:!1}),l=new Ge(M,S,{type:hn,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<R.length;C++){let x=R[C];x.setSize&&x.setSize(M,S)}},this.begin=function(_,M){if(w||_.toneMapping===an&&R.length===0)return!1;if(d=M,M!==null){let S=M.width,C=M.height;(o.width!==S||o.height!==C)&&this.setSize(S,C)}return D===!1&&_.setRenderTarget(o),p=_.toneMapping,_.toneMapping=an,!0},this.hasRenderPass=function(){return D},this.end=function(_,M){_.toneMapping=p,w=!0;let S=o,C=a;for(let x=0;x<R.length;x++){let T=R[x];T.enabled!==!1&&(T.render(_,C,S,M),T.needsSwap!==!1&&(S=C,C=C===a?l:a))}if(m!==_.outputColorSpace||v!==_.toneMapping){m=_.outputColorSpace,v=_.toneMapping,u.defines={},Zt.getTransfer(m)===ie&&(u.defines.SRGB_TRANSFER="");let x=sm[v];x&&(u.defines[x]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=S.texture,_.setRenderTarget(d),_.render(f,h),d=null,w=!1},this.isCompositing=function(){return w},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}var Sh=new Be,gl=new Wn(1,1),bh=new vs,wh=new Ur,Th=new Es,ih=[],sh=[],rh=new Float32Array(16),oh=new Float32Array(9),ah=new Float32Array(4);function ji(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=ih[s];if(r===void 0&&(r=new Float32Array(s),ih[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Se(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function be(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Zo(i,t){let e=sh[t];e===void 0&&(e=new Int32Array(t),sh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function om(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function am(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;i.uniform2fv(this.addr,t),be(e,t)}}function lm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Se(e,t))return;i.uniform3fv(this.addr,t),be(e,t)}}function cm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;i.uniform4fv(this.addr,t),be(e,t)}}function hm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),be(e,t)}else{if(Se(e,n))return;ah.set(n),i.uniformMatrix2fv(this.addr,!1,ah),be(e,n)}}function um(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),be(e,t)}else{if(Se(e,n))return;oh.set(n),i.uniformMatrix3fv(this.addr,!1,oh),be(e,n)}}function dm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),be(e,t)}else{if(Se(e,n))return;rh.set(n),i.uniformMatrix4fv(this.addr,!1,rh),be(e,n)}}function fm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function pm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;i.uniform2iv(this.addr,t),be(e,t)}}function mm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;i.uniform3iv(this.addr,t),be(e,t)}}function gm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;i.uniform4iv(this.addr,t),be(e,t)}}function xm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function _m(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;i.uniform2uiv(this.addr,t),be(e,t)}}function vm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;i.uniform3uiv(this.addr,t),be(e,t)}}function ym(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;i.uniform4uiv(this.addr,t),be(e,t)}}function Mm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(gl.compareFunction=e.isReversedDepthBuffer()?ko:Vo,r=gl):r=Sh,e.setTexture2D(t||r,s)}function Sm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||wh,s)}function bm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Th,s)}function wm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||bh,s)}function Tm(i){switch(i){case 5126:return om;case 35664:return am;case 35665:return lm;case 35666:return cm;case 35674:return hm;case 35675:return um;case 35676:return dm;case 5124:case 35670:return fm;case 35667:case 35671:return pm;case 35668:case 35672:return mm;case 35669:case 35673:return gm;case 5125:return xm;case 36294:return _m;case 36295:return vm;case 36296:return ym;case 35678:case 36198:case 36298:case 36306:case 35682:return Mm;case 35679:case 36299:case 36307:return Sm;case 35680:case 36300:case 36308:case 36293:return bm;case 36289:case 36303:case 36311:case 36292:return wm}}function Am(i,t){i.uniform1fv(this.addr,t)}function Em(i,t){let e=ji(t,this.size,2);i.uniform2fv(this.addr,e)}function Cm(i,t){let e=ji(t,this.size,3);i.uniform3fv(this.addr,e)}function Rm(i,t){let e=ji(t,this.size,4);i.uniform4fv(this.addr,e)}function Pm(i,t){let e=ji(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Im(i,t){let e=ji(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Lm(i,t){let e=ji(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Dm(i,t){i.uniform1iv(this.addr,t)}function Nm(i,t){i.uniform2iv(this.addr,t)}function Um(i,t){i.uniform3iv(this.addr,t)}function Fm(i,t){i.uniform4iv(this.addr,t)}function Om(i,t){i.uniform1uiv(this.addr,t)}function Bm(i,t){i.uniform2uiv(this.addr,t)}function zm(i,t){i.uniform3uiv(this.addr,t)}function Vm(i,t){i.uniform4uiv(this.addr,t)}function km(i,t,e){let n=this.cache,s=t.length,r=Zo(e,s);Se(n,r)||(i.uniform1iv(this.addr,r),be(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=gl:o=Sh;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function Gm(i,t,e){let n=this.cache,s=t.length,r=Zo(e,s);Se(n,r)||(i.uniform1iv(this.addr,r),be(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||wh,r[o])}function Hm(i,t,e){let n=this.cache,s=t.length,r=Zo(e,s);Se(n,r)||(i.uniform1iv(this.addr,r),be(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Th,r[o])}function Wm(i,t,e){let n=this.cache,s=t.length,r=Zo(e,s);Se(n,r)||(i.uniform1iv(this.addr,r),be(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||bh,r[o])}function Xm(i){switch(i){case 5126:return Am;case 35664:return Em;case 35665:return Cm;case 35666:return Rm;case 35674:return Pm;case 35675:return Im;case 35676:return Lm;case 5124:case 35670:return Dm;case 35667:case 35671:return Nm;case 35668:case 35672:return Um;case 35669:case 35673:return Fm;case 5125:return Om;case 36294:return Bm;case 36295:return zm;case 36296:return Vm;case 35678:case 36198:case 36298:case 36306:case 35682:return km;case 35679:case 36299:case 36307:return Gm;case 35680:case 36300:case 36308:case 36293:return Hm;case 36289:case 36303:case 36311:case 36292:return Wm}}var xl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Tm(e.type)}},_l=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Xm(e.type)}},vl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},pl=/(\w+)(\])?(\[|\.)?/g;function lh(i,t){i.seq.push(t),i.map[t.id]=t}function qm(i,t,e){let n=i.name,s=n.length;for(pl.lastIndex=0;;){let r=pl.exec(n),o=pl.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){lh(e,c===void 0?new xl(a,i,t):new _l(a,i,t));break}else{let f=e.map[a];f===void 0&&(f=new vl(a),lh(e,f)),e=f}}}var Qi=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);qm(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function ch(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Ym=37297,Zm=0;function Jm(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var hh=new Ot;function $m(i){Zt._getMatrix(hh,Zt.workingColorSpace,i);let t=`mat3( ${hh.elements.map(e=>e.toFixed(4))} )`;switch(Zt.getTransfer(i)){case gs:return[t,"LinearTransferOETF"];case ie:return[t,"sRGBTransferOETF"];default:return Ut("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function uh(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Jm(i.getShaderSource(t),a)}else return r}function Km(i,t){let e=$m(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Qm={[Fa]:"Linear",[Oa]:"Reinhard",[Ba]:"Cineon",[za]:"ACESFilmic",[ka]:"AgX",[Ga]:"Neutral",[Va]:"Custom"};function jm(i,t){let e=Qm[t];return e===void 0?(Ut("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Ho=new W;function t0(){Zt.getLuminanceCoefficients(Ho);let i=Ho.x.toFixed(4),t=Ho.y.toFixed(4),e=Ho.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function e0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ws).join(`
`)}function n0(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function i0(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Ws(i){return i!==""}function dh(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function fh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var s0=/^[ \t]*#include +<([\w\d./]+)>/gm;function yl(i){return i.replace(s0,o0)}var r0=new Map;function o0(i,t){let e=Ht[t];if(e===void 0){let n=r0.get(t);if(n!==void 0)e=Ht[n],Ut('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return yl(e)}var a0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ph(i){return i.replace(a0,l0)}function l0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function mh(i){let t=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var c0={[Ds]:"SHADOWMAP_TYPE_PCF",[Wi]:"SHADOWMAP_TYPE_VSM"};function h0(i){return c0[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var u0={[$n]:"ENVMAP_TYPE_CUBE",[di]:"ENVMAP_TYPE_CUBE",[Ns]:"ENVMAP_TYPE_CUBE_UV"};function d0(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":u0[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var f0={[di]:"ENVMAP_MODE_REFRACTION"};function p0(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":f0[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var m0={[Ua]:"ENVMAP_BLENDING_MULTIPLY",[Lc]:"ENVMAP_BLENDING_MIX",[Dc]:"ENVMAP_BLENDING_ADD"};function g0(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":m0[i.combine]||"ENVMAP_BLENDING_NONE"}function x0(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function _0(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=h0(e),c=d0(e),u=p0(e),f=g0(e),h=x0(e),m=e0(e),v=n0(r),w=s.createProgram(),p,d,R=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Ws).join(`
`),p.length>0&&(p+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Ws).join(`
`),d.length>0&&(d+=`
`)):(p=[mh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ws).join(`
`),d=[mh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==an?"#define TONE_MAPPING":"",e.toneMapping!==an?Ht.tonemapping_pars_fragment:"",e.toneMapping!==an?jm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ht.colorspace_pars_fragment,Km("linearToOutputTexel",e.outputColorSpace),t0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ws).join(`
`)),o=yl(o),o=dh(o,e),o=fh(o,e),a=yl(a),a=dh(a,e),a=fh(a,e),o=ph(o),a=ph(a),e.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",e.glslVersion===Qa?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Qa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let D=R+p+o,_=R+d+a,M=ch(s,s.VERTEX_SHADER,D),S=ch(s,s.FRAGMENT_SHADER,_);s.attachShader(w,M),s.attachShader(w,S),e.index0AttributeName!==void 0?s.bindAttribLocation(w,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(w,0,"position"),s.linkProgram(w);function C(y){if(i.debug.checkShaderErrors){let A=s.getProgramInfoLog(w)||"",I=s.getShaderInfoLog(M)||"",P=s.getShaderInfoLog(S)||"",U=A.trim(),B=I.trim(),V=P.trim(),K=!0,k=!0;if(s.getProgramParameter(w,s.LINK_STATUS)===!1)if(K=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,w,M,S);else{let H=uh(s,M,"vertex"),Y=uh(s,S,"fragment");Ft("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(w,s.VALIDATE_STATUS)+`

Material Name: `+y.name+`
Material Type: `+y.type+`

Program Info Log: `+U+`
`+H+`
`+Y)}else U!==""?Ut("WebGLProgram: Program Info Log:",U):(B===""||V==="")&&(k=!1);k&&(y.diagnostics={runnable:K,programLog:U,vertexShader:{log:B,prefix:p},fragmentShader:{log:V,prefix:d}})}s.deleteShader(M),s.deleteShader(S),x=new Qi(s,w),T=i0(s,w)}let x;this.getUniforms=function(){return x===void 0&&C(this),x};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let L=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=s.getProgramParameter(w,Ym)),L},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(w),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Zm++,this.cacheKey=t,this.usedTimes=1,this.program=w,this.vertexShader=M,this.fragmentShader=S,this}var v0=0,Ml=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Sl(t),e.set(t,n)),n}},Sl=class{constructor(t){this.id=v0++,this.code=t,this.usedTimes=0}};function y0(i){return i===Qn||i===Vs||i===ks}function M0(i,t,e,n,s,r){let o=new ys,a=new Ml,l=new Set,c=[],u=new Map,f=n.logarithmicDepthBuffer,h=n.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(x){return l.add(x),x===0?"uv":`uv${x}`}function w(x,T,L,y,A,I){let P=y.fog,U=A.geometry,B=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?y.environment:null,V=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,K=t.get(x.envMap||B,V),k=K&&K.mapping===Ns?K.image.height:null,H=m[x.type];x.precision!==null&&(h=n.getMaxPrecision(x.precision),h!==x.precision&&Ut("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));let Y=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,st=Y!==void 0?Y.length:0,at=0;U.morphAttributes.position!==void 0&&(at=1),U.morphAttributes.normal!==void 0&&(at=2),U.morphAttributes.color!==void 0&&(at=3);let Bt,zt,Vt,$;if(H){let he=bn[H];Bt=he.vertexShader,zt=he.fragmentShader}else{Bt=x.vertexShader,zt=x.fragmentShader;let he=a.getVertexShaderStage(x),ee=a.getFragmentShaderStage(x);a.update(x,he,ee),Vt=he.id,$=ee.id}let et=i.getRenderTarget(),xt=i.state.buffers.depth.getReversed(),Dt=A.isInstancedMesh===!0,mt=A.isBatchedMesh===!0,kt=!!x.map,xe=!!x.matcap,Wt=!!K,Kt=!!x.aoMap,oe=!!x.lightMap,Xt=!!x.bumpMap&&x.wireframe===!1,ce=!!x.normalMap,_e=!!x.displacementMap,ot=!!x.emissiveMap,pt=!!x.metalnessMap,St=!!x.roughnessMap,N=x.anisotropy>0,Nt=x.clearcoat>0,bt=x.dispersion>0,E=x.retroreflectivity>0,g=x.iridescence>0,O=x.sheen>0,G=x.transmission>0,Z=N&&!!x.anisotropyMap,it=Nt&&!!x.clearcoatMap,rt=Nt&&!!x.clearcoatNormalMap,J=Nt&&!!x.clearcoatRoughnessMap,j=g&&!!x.iridescenceMap,dt=g&&!!x.iridescenceThicknessMap,vt=O&&!!x.sheenColorMap,ht=O&&!!x.sheenRoughnessMap,ct=!!x.specularMap,gt=!!x.specularColorMap,It=!!x.specularIntensityMap,Et=G&&!!x.transmissionMap,F=G&&!!x.thicknessMap,ut=!!x.gradientMap,tt=!!x.alphaMap,ft=x.alphaTest>0,lt=!!x.alphaHash,nt=!!x.extensions,At=an;x.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(At=i.toneMapping);let Ct={shaderID:H,shaderType:x.type,shaderName:x.name,vertexShader:Bt,fragmentShader:zt,defines:x.defines,customVertexShaderID:Vt,customFragmentShaderID:$,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:mt,batchingColor:mt&&A._colorsTexture!==null,instancing:Dt,instancingColor:Dt&&A.instanceColor!==null,instancingMorph:Dt&&A.morphTexture!==null,outputColorSpace:et===null?i.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:Zt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:kt,matcap:xe,envMap:Wt,envMapMode:Wt&&K.mapping,envMapCubeUVHeight:k,aoMap:Kt,lightMap:oe,bumpMap:Xt,normalMap:ce,displacementMap:_e,emissiveMap:ot,normalMapObjectSpace:ce&&x.normalMapType===Fc,normalMapTangentSpace:ce&&x.normalMapType===Ka,packedNormalMap:ce&&x.normalMapType===Ka&&y0(x.normalMap.format),metalnessMap:pt,roughnessMap:St,anisotropy:N,anisotropyMap:Z,clearcoat:Nt,clearcoatMap:it,clearcoatNormalMap:rt,clearcoatRoughnessMap:J,dispersion:bt,retroreflection:E,iridescence:g,iridescenceMap:j,iridescenceThicknessMap:dt,sheen:O,sheenColorMap:vt,sheenRoughnessMap:ht,specularMap:ct,specularColorMap:gt,specularIntensityMap:It,transmission:G,transmissionMap:Et,thicknessMap:F,gradientMap:ut,opaque:x.transparent===!1&&x.blending===Xi&&x.alphaToCoverage===!1,alphaMap:tt,alphaTest:ft,alphaHash:lt,combine:x.combine,mapUv:kt&&v(x.map.channel),aoMapUv:Kt&&v(x.aoMap.channel),lightMapUv:oe&&v(x.lightMap.channel),bumpMapUv:Xt&&v(x.bumpMap.channel),normalMapUv:ce&&v(x.normalMap.channel),displacementMapUv:_e&&v(x.displacementMap.channel),emissiveMapUv:ot&&v(x.emissiveMap.channel),metalnessMapUv:pt&&v(x.metalnessMap.channel),roughnessMapUv:St&&v(x.roughnessMap.channel),anisotropyMapUv:Z&&v(x.anisotropyMap.channel),clearcoatMapUv:it&&v(x.clearcoatMap.channel),clearcoatNormalMapUv:rt&&v(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&v(x.clearcoatRoughnessMap.channel),iridescenceMapUv:j&&v(x.iridescenceMap.channel),iridescenceThicknessMapUv:dt&&v(x.iridescenceThicknessMap.channel),sheenColorMapUv:vt&&v(x.sheenColorMap.channel),sheenRoughnessMapUv:ht&&v(x.sheenRoughnessMap.channel),specularMapUv:ct&&v(x.specularMap.channel),specularColorMapUv:gt&&v(x.specularColorMap.channel),specularIntensityMapUv:It&&v(x.specularIntensityMap.channel),transmissionMapUv:Et&&v(x.transmissionMap.channel),thicknessMapUv:F&&v(x.thicknessMap.channel),alphaMapUv:tt&&v(x.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(ce||N),vertexNormals:!!U.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:A.isPoints===!0&&!!U.attributes.uv&&(kt||tt),fog:!!P,useFog:x.fog===!0,fogExp2:!!P&&P.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||U.attributes.normal===void 0&&ce===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:xt,skinning:A.isSkinnedMesh===!0,hasPositionAttribute:U.attributes.position!==void 0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:st,morphTextureStride:at,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:I.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:At,decodeVideoTexture:kt&&x.map.isVideoTexture===!0&&Zt.getTransfer(x.map.colorSpace)===ie,decodeVideoTextureEmissive:ot&&x.emissiveMap.isVideoTexture===!0&&Zt.getTransfer(x.emissiveMap.colorSpace)===ie,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ve,flipSided:x.side===ze,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:nt&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(nt&&x.extensions.multiDraw===!0||mt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ct.vertexUv1s=l.has(1),Ct.vertexUv2s=l.has(2),Ct.vertexUv3s=l.has(3),l.clear(),Ct}function p(x){let T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(let L in x.defines)T.push(L),T.push(x.defines[L]);return x.isRawShaderMaterial===!1&&(d(T,x),R(T,x),T.push(i.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function d(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numSunLights),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numSunLightShadows),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function R(x,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.retroreflection&&o.enable(24),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),T.packedNormalMap&&o.enable(22),T.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),T.numLightProbeGrids>0&&o.enable(22),T.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function D(x){let T=m[x.type],L;if(T){let y=bn[T];L=$c.clone(y.uniforms)}else L=x.uniforms;return L}function _(x,T){let L=u.get(T);return L!==void 0?++L.usedTimes:(L=new _0(i,T,x,s),c.push(L),u.set(T,L)),L}function M(x){if(--x.usedTimes===0){let T=c.indexOf(x);c[T]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function S(x){a.remove(x)}function C(){a.dispose()}return{getParameters:w,getProgramCacheKey:p,getUniforms:D,acquireProgram:_,releaseProgram:M,releaseShaderCache:S,programs:c,dispose:C}}function S0(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function b0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function gh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function xh(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(h){let m=0;return h.isInstancedMesh&&(m+=2),h.isSkinnedMesh&&(m+=1),m}function a(h,m,v,w,p,d){let R=i[t];return R===void 0?(R={id:h.id,object:h,geometry:m,material:v,materialVariant:o(h),groupOrder:w,renderOrder:h.renderOrder,z:p,group:d},i[t]=R):(R.id=h.id,R.object=h,R.geometry=m,R.material=v,R.materialVariant=o(h),R.groupOrder=w,R.renderOrder=h.renderOrder,R.z=p,R.group=d),t++,R}function l(h,m,v,w,p,d,R){R.reversedDepth===!0&&(p=-p);let D=a(h,m,v,w,p,d);v.transmission>0?n.push(D):v.transparent===!0?s.push(D):e.push(D)}function c(h,m,v,w,p,d){let R=a(h,m,v,w,p,d);v.transmission>0?n.unshift(R):v.transparent===!0?s.unshift(R):e.unshift(R)}function u(h,m){e.length>1&&e.sort(h||b0),n.length>1&&n.sort(m||gh),s.length>1&&s.sort(m||gh)}function f(){for(let h=t,m=i.length;h<m;h++){let v=i[h];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:f,sort:u}}function w0(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new xh,i.set(n,[o])):s>=r.length?(o=new xh,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function T0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new W,color:new $t};break;case"SpotLight":e={position:new W,direction:new W,color:new $t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new W,color:new $t,distance:0,decay:0};break;case"HemisphereLight":e={direction:new W,skyColor:new $t,groundColor:new $t};break;case"RectAreaLight":e={color:new $t,position:new W,halfWidth:new W,halfHeight:new W};break}return i[t.id]=e,e}}}function A0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var E0=0;function C0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function R0(i){let t=new T0,e=A0(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new W);let s=new W,r=new me,o=new me;function a(c){let u=0,f=0,h=0;for(let A=0;A<9;A++)n.probe[A].set(0,0,0);let m=0,v=0,w=0,p=0,d=0,R=0,D=0,_=0,M=0,S=0,C=0,x=0,T=0,L=0;c.sort(C0);for(let A=0,I=c.length;A<I;A++){let P=c[A],U=P.color,B=P.intensity,V=P.distance,K=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Qn?K=P.shadow.map.texture:K=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)u+=U.r*B,f+=U.g*B,h+=U.b*B;else if(P.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(P.sh.coefficients[k],B);L++}else if(P.isSunLight){let k=t.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let H=P.shadow,Y=e.get(P);Y.shadowIntensity=H.intensity,Y.shadowBias=H.bias,Y.shadowNormalBias=H.normalBias,Y.shadowRadius=H.radius,Y.shadowMapSize.copy(H.mapSize).multiply(H.getFrameExtents()),n.sunShadow[v]=Y,n.sunShadowMap[v]=K;let st=H.getViewportCount();for(let at=0;at<st;at++)n.sunShadowMatrix[w+at]=H.getMatrix(at),n.sunShadowCascade[w+at]=H._cascadeData[at];w+=st,v++}n.sun[m]=k,m++}else if(P.isDirectionalLight){let k=t.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let H=P.shadow,Y=e.get(P);Y.shadowIntensity=H.intensity,Y.shadowBias=H.bias,Y.shadowNormalBias=H.normalBias,Y.shadowRadius=H.radius,Y.shadowMapSize=H.mapSize,n.directionalShadow[p]=Y,n.directionalShadowMap[p]=K,n.directionalShadowMatrix[p]=P.shadow.matrix,M++}n.directional[p]=k,p++}else if(P.isSpotLight){let k=t.get(P);k.position.setFromMatrixPosition(P.matrixWorld),k.color.copy(U).multiplyScalar(B),k.distance=V,k.coneCos=Math.cos(P.angle),k.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),k.decay=P.decay,n.spot[R]=k;let H=P.shadow;if(P.map&&(n.spotLightMap[x]=P.map,x++,H.updateMatrices(P),P.castShadow&&T++),n.spotLightMatrix[R]=H.matrix,P.castShadow){let Y=e.get(P);Y.shadowIntensity=H.intensity,Y.shadowBias=H.bias,Y.shadowNormalBias=H.normalBias,Y.shadowRadius=H.radius,Y.shadowMapSize=H.mapSize,n.spotShadow[R]=Y,n.spotShadowMap[R]=K,C++}R++}else if(P.isRectAreaLight){let k=t.get(P);k.color.copy(U).multiplyScalar(B),k.halfWidth.set(P.width*.5,0,0),k.halfHeight.set(0,P.height*.5,0),n.rectArea[D]=k,D++}else if(P.isPointLight){let k=t.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),k.distance=P.distance,k.decay=P.decay,P.castShadow){let H=P.shadow,Y=e.get(P);Y.shadowIntensity=H.intensity,Y.shadowBias=H.bias,Y.shadowNormalBias=H.normalBias,Y.shadowRadius=H.radius,Y.shadowMapSize=H.mapSize,Y.shadowCameraNear=H.camera.near,Y.shadowCameraFar=H.camera.far,n.pointShadow[d]=Y,n.pointShadowMap[d]=K,n.pointShadowMatrix[d]=P.shadow.matrix,S++}n.point[d]=k,d++}else if(P.isHemisphereLight){let k=t.get(P);k.skyColor.copy(P.color).multiplyScalar(B),k.groundColor.copy(P.groundColor).multiplyScalar(B),n.hemi[_]=k,_++}}D>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_t.LTC_FLOAT_1,n.rectAreaLTC2=_t.LTC_FLOAT_2):(n.rectAreaLTC1=_t.LTC_HALF_1,n.rectAreaLTC2=_t.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;let y=n.hash;(y.sunLength!==m||y.directionalLength!==p||y.pointLength!==d||y.spotLength!==R||y.rectAreaLength!==D||y.hemiLength!==_||y.numSunShadows!==v||y.numDirectionalShadows!==M||y.numPointShadows!==S||y.numSpotShadows!==C||y.numSpotMaps!==x||y.numLightProbes!==L)&&(n.sun.length=m,n.directional.length=p,n.spot.length=R,n.rectArea.length=D,n.point.length=d,n.hemi.length=_,n.sunShadow.length=v,n.sunShadowMap.length=v,n.sunShadowMatrix.length=w,n.sunShadowCascade.length=w,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=S,n.pointShadowMap.length=S,n.pointShadowMatrix.length=S,n.spotShadow.length=C,n.spotShadowMap.length=C,n.spotLightMatrix.length=C+x-T,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=L,y.sunLength=m,y.directionalLength=p,y.pointLength=d,y.spotLength=R,y.rectAreaLength=D,y.hemiLength=_,y.numSunShadows=v,y.numDirectionalShadows=M,y.numPointShadows=S,y.numSpotShadows=C,y.numSpotMaps=x,y.numLightProbes=L,n.version=E0++)}function l(c,u){let f=0,h=0,m=0,v=0,w=0,p=0,d=u.matrixWorldInverse;for(let R=0,D=c.length;R<D;R++){let _=c[R];if(_.isSunLight){let M=n.sun[f];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(d),f++}else if(_.isDirectionalLight){let M=n.directional[h];M.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(d),h++}else if(_.isSpotLight){let M=n.spot[v];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(d),M.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(d),v++}else if(_.isRectAreaLight){let M=n.rectArea[w];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(d),o.identity(),r.copy(_.matrixWorld),r.premultiply(d),o.extractRotation(r),M.halfWidth.set(_.width*.5,0,0),M.halfHeight.set(0,_.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),w++}else if(_.isPointLight){let M=n.point[m];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(d),m++}else if(_.isHemisphereLight){let M=n.hemi[p];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(d),p++}}}return{setup:a,setupView:l,state:n}}function _h(i){let t=new R0(i),e=[],n=[],s=[];function r(h){f.camera=h,e.length=0,n.length=0,s.length=0}function o(h){e.push(h)}function a(h){n.push(h)}function l(h){s.push(h)}function c(){t.setup(e)}function u(h){t.setupView(e,h)}let f={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function P0(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new _h(i),t.set(s,[a])):r>=o.length?(a=new _h(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var I0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,L0=`uniform sampler2D shadow_pass;
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
}`,D0=[new W(1,0,0),new W(-1,0,0),new W(0,1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1)],N0=[new W(0,-1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1),new W(0,-1,0),new W(0,-1,0)],vh=new me,Hs=new W,ml=new W;function U0(i,t,e){let n=new As,s=new qt,r=new qt,o=new re,a=new zr,l=new Vr,c={},u=e.maxTextureSize,f={[Jn]:ze,[ze]:Jn,[Ve]:Ve},h=new Ce({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qt},radius:{value:4}},vertexShader:I0,fragmentShader:L0}),m=h.clone();m.defines.HORIZONTAL_PASS=1;let v=new Me;v.setAttribute("position",new Te(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let w=new jt(v,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ds;let d=this.type;this.render=function(S,C,x){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||S.length===0)return;this.type===fc&&(Ut("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ds);let T=i.getRenderTarget(),L=i.getActiveCubeFace(),y=i.getActiveMipmapLevel(),A=i.state;A.setBlending(Mn),A.buffers.depth.getReversed()===!0?A.buffers.color.setClear(0,0,0,0):A.buffers.color.setClear(1,1,1,1),A.buffers.depth.setTest(!0),A.setScissorTest(!1);let I=d!==this.type;I&&C.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(U=>U.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,U=S.length;P<U;P++){let B=S[P],V=B.shadow;if(V===void 0){Ut("WebGLShadowMap:",B,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let K=V.getFrameExtents();s.multiply(K),r.copy(V.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/K.x),s.x=r.x*K.x,V.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/K.y),s.y=r.y*K.y,V.mapSize.y=r.y));let k=i.state.buffers.depth.getReversed();if(V.camera._reversedDepth=k,V.map===null||I===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===Wi){if(B.isPointLight){Ut("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new Ge(s.x,s.y,{format:Qn,type:hn,minFilter:pe,magFilter:pe,generateMipmaps:!1}),V.map.texture.name=B.name+".shadowMap",V.map.depthTexture=new Wn(s.x,s.y,cn),V.map.depthTexture.name=B.name+".shadowMapDepth",V.map.depthTexture.format=gn,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Ae,V.map.depthTexture.magFilter=Ae}else B.isPointLight?(V.map=new Xo(s.x),V.map.depthTexture=new Or(s.x,ln)):(V.map=new Ge(s.x,s.y),V.map.depthTexture=new Wn(s.x,s.y,ln)),V.map.depthTexture.name=B.name+".shadowMap",V.map.depthTexture.format=gn,this.type===Ds?(V.map.depthTexture.compareFunction=k?ko:Vo,V.map.depthTexture.minFilter=pe,V.map.depthTexture.magFilter=pe):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Ae,V.map.depthTexture.magFilter=Ae);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==s.x||V.map.height!==s.y)&&V.map.setSize(s.x,s.y);let H=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();B.isPointLight!==!0&&V.updateMatrices(B,x);for(let Y=0;Y<H;Y++){let st=V.getCamera(Y);if(B.isPointLight){let at=V.camera,Bt=V.matrix,zt=B.distance||at.far;zt!==at.far&&(at.far=zt,at.updateProjectionMatrix()),Hs.setFromMatrixPosition(B.matrixWorld),at.position.copy(Hs),ml.copy(at.position),ml.add(D0[Y]),at.up.copy(N0[Y]),at.lookAt(ml),at.updateMatrixWorld(),Bt.makeTranslation(-Hs.x,-Hs.y,-Hs.z),vh.multiplyMatrices(at.projectionMatrix,at.matrixWorldInverse),V._frustum.setFromProjectionMatrix(vh,at.coordinateSystem,at.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)i.setRenderTarget(V.map,Y),i.clear();else{Y===0&&(i.setRenderTarget(V.map),i.clear());let at=V.getViewport(Y);o.set(r.x*at.x,r.y*at.y,r.x*at.z,r.y*at.w),A.viewport(o)}n=V.getFrustum(Y),_(C,x,st,B,this.type)}V.isPointLightShadow!==!0&&this.type===Wi&&R(V,x),V.needsUpdate=!1}d=this.type,p.needsUpdate=!1,i.setRenderTarget(T,L,y)};function R(S,C){let x=t.update(w);h.defines.VSM_SAMPLES!==S.blurSamples&&(h.defines.VSM_SAMPLES=S.blurSamples,m.defines.VSM_SAMPLES=S.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),S.mapPass===null?S.mapPass=new Ge(s.x,s.y,{format:Qn,type:hn}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),h.uniforms.shadow_pass.value=S.map.depthTexture,h.uniforms.resolution.value.set(S.map.width,S.map.height),h.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(C,null,x,h,w,null),m.uniforms.shadow_pass.value=S.mapPass.texture,m.uniforms.resolution.value.set(S.map.width,S.map.height),m.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(C,null,x,m,w,null)}function D(S,C,x,T){let L=null,y=x.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(y!==void 0)L=y;else if(L=x.isPointLight===!0?l:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let A=L.uuid,I=C.uuid,P=c[A];P===void 0&&(P={},c[A]=P);let U=P[I];U===void 0&&(U=L.clone(),P[I]=U,C.addEventListener("dispose",M)),L=U}if(L.visible=C.visible,L.wireframe=C.wireframe,T===Wi?L.side=C.shadowSide!==null?C.shadowSide:C.side:L.side=C.shadowSide!==null?C.shadowSide:f[C.side],L.alphaMap=C.alphaMap,L.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,L.map=C.map,L.clipShadows=C.clipShadows,L.clippingPlanes=C.clippingPlanes,L.clipIntersection=C.clipIntersection,L.displacementMap=C.displacementMap,L.displacementScale=C.displacementScale,L.displacementBias=C.displacementBias,L.wireframeLinewidth=C.wireframeLinewidth,L.linewidth=C.linewidth,x.isPointLight===!0&&L.isMeshDistanceMaterial===!0){let A=i.properties.get(L);A.light=x}return L}function _(S,C,x,T,L){if(S.visible===!1)return;if(S.layers.test(C.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&L===Wi)&&(!S.frustumCulled||S.intersectsFrustum(n))){S.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,S.matrixWorld);let I=t.update(S),P=S.material;if(Array.isArray(P)){let U=I.groups;for(let B=0,V=U.length;B<V;B++){let K=U[B],k=P[K.materialIndex];if(k&&k.visible){let H=D(S,k,T,L);S.onBeforeShadow(i,S,C,x,I,H,K),i.renderBufferDirect(x,null,I,H,S,K),S.onAfterShadow(i,S,C,x,I,H,K)}}}else if(P.visible){let U=D(S,P,T,L);S.onBeforeShadow(i,S,C,x,I,U,null),i.renderBufferDirect(x,null,I,U,S,null),S.onAfterShadow(i,S,C,x,I,U,null)}}let A=S.children;for(let I=0,P=A.length;I<P;I++)_(A[I],C,x,T,L)}function M(S){S.target.removeEventListener("dispose",M);for(let x in c){let T=c[x],L=S.target.uuid;L in T&&(T[L].dispose(),delete T[L])}}}function F0(i,t){function e(){let F=!1,ut=new re,tt=null,ft=new re(0,0,0,0);return{setMask:function(lt){tt!==lt&&!F&&(i.colorMask(lt,lt,lt,lt),tt=lt)},setLocked:function(lt){F=lt},setClear:function(lt,nt,At,Ct,he){he===!0&&(lt*=Ct,nt*=Ct,At*=Ct),ut.set(lt,nt,At,Ct),ft.equals(ut)===!1&&(i.clearColor(lt,nt,At,Ct),ft.copy(ut))},reset:function(){F=!1,tt=null,ft.set(-1,0,0,0)}}}function n(){let F=!1,ut=!1,tt=null,ft=null,lt=null;return{setReversed:function(nt){if(ut!==nt){let At=t.get("EXT_clip_control");nt?At.clipControlEXT(At.LOWER_LEFT_EXT,At.ZERO_TO_ONE_EXT):At.clipControlEXT(At.LOWER_LEFT_EXT,At.NEGATIVE_ONE_TO_ONE_EXT),ut=nt;let Ct=lt;lt=null,this.setClear(Ct)}},getReversed:function(){return ut},setTest:function(nt){nt?et(i.DEPTH_TEST):xt(i.DEPTH_TEST)},setMask:function(nt){tt!==nt&&!F&&(i.depthMask(nt),tt=nt)},setFunc:function(nt){if(ut&&(nt=Zc[nt]),ft!==nt){switch(nt){case wr:i.depthFunc(i.NEVER);break;case Tr:i.depthFunc(i.ALWAYS);break;case Ar:i.depthFunc(i.LESS);break;case Ui:i.depthFunc(i.LEQUAL);break;case Er:i.depthFunc(i.EQUAL);break;case Cr:i.depthFunc(i.GEQUAL);break;case Rr:i.depthFunc(i.GREATER);break;case Pr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ft=nt}},setLocked:function(nt){F=nt},setClear:function(nt){lt!==nt&&(lt=nt,ut&&(nt=1-nt),i.clearDepth(nt))},reset:function(){F=!1,tt=null,ft=null,lt=null,ut=!1}}}function s(){let F=!1,ut=null,tt=null,ft=null,lt=null,nt=null,At=null,Ct=null,he=null;return{setTest:function(ee){F||(ee?et(i.STENCIL_TEST):xt(i.STENCIL_TEST))},setMask:function(ee){ut!==ee&&!F&&(i.stencilMask(ee),ut=ee)},setFunc:function(ee,tn,dn){(tt!==ee||ft!==tn||lt!==dn)&&(i.stencilFunc(ee,tn,dn),tt=ee,ft=tn,lt=dn)},setOp:function(ee,tn,dn){(nt!==ee||At!==tn||Ct!==dn)&&(i.stencilOp(ee,tn,dn),nt=ee,At=tn,Ct=dn)},setLocked:function(ee){F=ee},setClear:function(ee){he!==ee&&(i.clearStencil(ee),he=ee)},reset:function(){F=!1,ut=null,tt=null,ft=null,lt=null,nt=null,At=null,Ct=null,he=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,u={},f={},h={},m=new WeakMap,v=[],w=null,p=!1,d=null,R=null,D=null,_=null,M=null,S=null,C=null,x=new $t(0,0,0),T=0,L=!1,y=null,A=null,I=null,P=null,U=null,B=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,K=0,k=i.getParameter(i.VERSION);k.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(k)[1]),V=K>=1):k.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),V=K>=2);let H=null,Y={},st=i.getParameter(i.SCISSOR_BOX),at=i.getParameter(i.VIEWPORT),Bt=new re().fromArray(st),zt=new re().fromArray(at);function Vt(F,ut,tt,ft){let lt=new Uint8Array(4),nt=i.createTexture();i.bindTexture(F,nt),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let At=0;At<tt;At++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(ut,0,i.RGBA,1,1,ft,0,i.RGBA,i.UNSIGNED_BYTE,lt):i.texImage2D(ut+At,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,lt);return nt}let $={};$[i.TEXTURE_2D]=Vt(i.TEXTURE_2D,i.TEXTURE_2D,1),$[i.TEXTURE_CUBE_MAP]=Vt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[i.TEXTURE_2D_ARRAY]=Vt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),$[i.TEXTURE_3D]=Vt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),et(i.DEPTH_TEST),o.setFunc(Ui),Xt(!1),ce(Pa),et(i.CULL_FACE),Kt(Mn);function et(F){u[F]!==!0&&(i.enable(F),u[F]=!0)}function xt(F){u[F]!==!1&&(i.disable(F),u[F]=!1)}function Dt(F,ut){return h[F]!==ut?(i.bindFramebuffer(F,ut),h[F]=ut,F===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ut),F===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ut),!0):!1}function mt(F,ut){let tt=v,ft=!1;if(F){tt=m.get(ut),tt===void 0&&(tt=[],m.set(ut,tt));let lt=F.textures;if(tt.length!==lt.length||tt[0]!==i.COLOR_ATTACHMENT0){for(let nt=0,At=lt.length;nt<At;nt++)tt[nt]=i.COLOR_ATTACHMENT0+nt;tt.length=lt.length,ft=!0}}else tt[0]!==i.BACK&&(tt[0]=i.BACK,ft=!0);ft&&i.drawBuffers(tt)}function kt(F){return w!==F?(i.useProgram(F),w=F,!0):!1}let xe={[ui]:i.FUNC_ADD,[mc]:i.FUNC_SUBTRACT,[gc]:i.FUNC_REVERSE_SUBTRACT};xe[xc]=i.MIN,xe[_c]=i.MAX;let Wt={[vc]:i.ZERO,[yc]:i.ONE,[Mc]:i.SRC_COLOR,[Da]:i.SRC_ALPHA,[Ec]:i.SRC_ALPHA_SATURATE,[Tc]:i.DST_COLOR,[bc]:i.DST_ALPHA,[Sc]:i.ONE_MINUS_SRC_COLOR,[Na]:i.ONE_MINUS_SRC_ALPHA,[Ac]:i.ONE_MINUS_DST_COLOR,[wc]:i.ONE_MINUS_DST_ALPHA,[Cc]:i.CONSTANT_COLOR,[Rc]:i.ONE_MINUS_CONSTANT_COLOR,[Pc]:i.CONSTANT_ALPHA,[Ic]:i.ONE_MINUS_CONSTANT_ALPHA};function Kt(F,ut,tt,ft,lt,nt,At,Ct,he,ee){if(F===Mn){p===!0&&(xt(i.BLEND),p=!1);return}if(p===!1&&(et(i.BLEND),p=!0),F!==pc){if(F!==d||ee!==L){if((R!==ui||M!==ui)&&(i.blendEquation(i.FUNC_ADD),R=ui,M=ui),ee)switch(F){case Xi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case qi:i.blendFunc(i.ONE,i.ONE);break;case Ia:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case La:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ft("WebGLState: Invalid blending: ",F);break}else switch(F){case Xi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case qi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ia:Ft("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case La:Ft("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ft("WebGLState: Invalid blending: ",F);break}D=null,_=null,S=null,C=null,x.set(0,0,0),T=0,d=F,L=ee}return}lt=lt||ut,nt=nt||tt,At=At||ft,(ut!==R||lt!==M)&&(i.blendEquationSeparate(xe[ut],xe[lt]),R=ut,M=lt),(tt!==D||ft!==_||nt!==S||At!==C)&&(i.blendFuncSeparate(Wt[tt],Wt[ft],Wt[nt],Wt[At]),D=tt,_=ft,S=nt,C=At),(Ct.equals(x)===!1||he!==T)&&(i.blendColor(Ct.r,Ct.g,Ct.b,he),x.copy(Ct),T=he),d=F,L=!1}function oe(F,ut){F.side===Ve?xt(i.CULL_FACE):et(i.CULL_FACE);let tt=F.side===ze;ut&&(tt=!tt),Xt(tt),F.blending===Xi&&F.transparent===!1?Kt(Mn):Kt(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);let ft=F.stencilWrite;a.setTest(ft),ft&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),ot(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?et(i.SAMPLE_ALPHA_TO_COVERAGE):xt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Xt(F){y!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),y=F)}function ce(F){F!==uc?(et(i.CULL_FACE),F!==A&&(F===Pa?i.cullFace(i.BACK):F===dc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):xt(i.CULL_FACE),A=F}function _e(F){F!==I&&(V&&i.lineWidth(F),I=F)}function ot(F,ut,tt){F?(et(i.POLYGON_OFFSET_FILL),(P!==ut||U!==tt)&&(P=ut,U=tt,o.getReversed()&&(ut=-ut),i.polygonOffset(ut,tt))):xt(i.POLYGON_OFFSET_FILL)}function pt(F){F?et(i.SCISSOR_TEST):xt(i.SCISSOR_TEST)}function St(F){F===void 0&&(F=i.TEXTURE0+B-1),H!==F&&(i.activeTexture(F),H=F)}function N(F,ut,tt){tt===void 0&&(H===null?tt=i.TEXTURE0+B-1:tt=H);let ft=Y[tt];ft===void 0&&(ft={type:void 0,texture:void 0},Y[tt]=ft),(ft.type!==F||ft.texture!==ut)&&(H!==tt&&(i.activeTexture(tt),H=tt),i.bindTexture(F,ut||$[F]),ft.type=F,ft.texture=ut)}function Nt(){let F=Y[H];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function bt(){try{i.compressedTexImage2D(...arguments)}catch(F){Ft("WebGLState:",F)}}function E(){try{i.compressedTexImage3D(...arguments)}catch(F){Ft("WebGLState:",F)}}function g(){try{i.texSubImage2D(...arguments)}catch(F){Ft("WebGLState:",F)}}function O(){try{i.texSubImage3D(...arguments)}catch(F){Ft("WebGLState:",F)}}function G(){try{i.compressedTexSubImage2D(...arguments)}catch(F){Ft("WebGLState:",F)}}function Z(){try{i.compressedTexSubImage3D(...arguments)}catch(F){Ft("WebGLState:",F)}}function it(){try{i.texStorage2D(...arguments)}catch(F){Ft("WebGLState:",F)}}function rt(){try{i.texStorage3D(...arguments)}catch(F){Ft("WebGLState:",F)}}function J(){try{i.texImage2D(...arguments)}catch(F){Ft("WebGLState:",F)}}function j(){try{i.texImage3D(...arguments)}catch(F){Ft("WebGLState:",F)}}function dt(F){return f[F]!==void 0?f[F]:i.getParameter(F)}function vt(F,ut){f[F]!==ut&&(i.pixelStorei(F,ut),f[F]=ut)}function ht(F){Bt.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),Bt.copy(F))}function ct(F){zt.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),zt.copy(F))}function gt(F,ut){let tt=c.get(ut);tt===void 0&&(tt=new WeakMap,c.set(ut,tt));let ft=tt.get(F);ft===void 0&&(ft=i.getUniformBlockIndex(ut,F.name),tt.set(F,ft))}function It(F,ut){let ft=c.get(ut).get(F);l.get(ut)!==ft&&(i.uniformBlockBinding(ut,ft,F.__bindingPointIndex),l.set(ut,ft))}function Et(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},f={},H=null,Y={},h={},m=new WeakMap,v=[],w=null,p=!1,d=null,R=null,D=null,_=null,M=null,S=null,C=null,x=new $t(0,0,0),T=0,L=!1,y=null,A=null,I=null,P=null,U=null,Bt.set(0,0,i.canvas.width,i.canvas.height),zt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:et,disable:xt,bindFramebuffer:Dt,drawBuffers:mt,useProgram:kt,setBlending:Kt,setMaterial:oe,setFlipSided:Xt,setCullFace:ce,setLineWidth:_e,setPolygonOffset:ot,setScissorTest:pt,activeTexture:St,bindTexture:N,unbindTexture:Nt,compressedTexImage2D:bt,compressedTexImage3D:E,texImage2D:J,texImage3D:j,pixelStorei:vt,getParameter:dt,updateUBOMapping:gt,uniformBlockBinding:It,texStorage2D:it,texStorage3D:rt,texSubImage2D:g,texSubImage3D:O,compressedTexSubImage2D:G,compressedTexSubImage3D:Z,scissor:ht,viewport:ct,reset:Et}}function O0(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new qt,u=new WeakMap,f=new Set,h,m=new WeakMap,v=!1;try{v=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(E,g){return v?new OffscreenCanvas(E,g):_s("canvas")}function p(E,g,O){let G=1,Z=bt(E);if((Z.width>O||Z.height>O)&&(G=O/Math.max(Z.width,Z.height)),G<1)if(typeof HTMLImageElement!="undefined"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&E instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&E instanceof ImageBitmap||typeof VideoFrame!="undefined"&&E instanceof VideoFrame){let it=Math.floor(G*Z.width),rt=Math.floor(G*Z.height);h===void 0&&(h=w(it,rt));let J=g?w(it,rt):h;return J.width=it,J.height=rt,J.getContext("2d").drawImage(E,0,0,it,rt),Ut("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+it+"x"+rt+")."),J}else return"data"in E&&Ut("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),E;return E}function d(E){return E.generateMipmaps}function R(E){i.generateMipmap(E)}function D(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(E,g,O,G,Z,it=!1){if(E!==null){if(i[E]!==void 0)return i[E];Ut("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let rt;G&&(rt=t.get("EXT_texture_norm16"),rt||Ut("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=g;if(g===i.RED&&(O===i.FLOAT&&(J=i.R32F),O===i.HALF_FLOAT&&(J=i.R16F),O===i.UNSIGNED_BYTE&&(J=i.R8),O===i.UNSIGNED_SHORT&&rt&&(J=rt.R16_EXT),O===i.SHORT&&rt&&(J=rt.R16_SNORM_EXT)),g===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(J=i.R8UI),O===i.UNSIGNED_SHORT&&(J=i.R16UI),O===i.UNSIGNED_INT&&(J=i.R32UI),O===i.BYTE&&(J=i.R8I),O===i.SHORT&&(J=i.R16I),O===i.INT&&(J=i.R32I)),g===i.RG&&(O===i.FLOAT&&(J=i.RG32F),O===i.HALF_FLOAT&&(J=i.RG16F),O===i.UNSIGNED_BYTE&&(J=i.RG8),O===i.UNSIGNED_SHORT&&rt&&(J=rt.RG16_EXT),O===i.SHORT&&rt&&(J=rt.RG16_SNORM_EXT)),g===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(J=i.RG8UI),O===i.UNSIGNED_SHORT&&(J=i.RG16UI),O===i.UNSIGNED_INT&&(J=i.RG32UI),O===i.BYTE&&(J=i.RG8I),O===i.SHORT&&(J=i.RG16I),O===i.INT&&(J=i.RG32I)),g===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(J=i.RGB8UI),O===i.UNSIGNED_SHORT&&(J=i.RGB16UI),O===i.UNSIGNED_INT&&(J=i.RGB32UI),O===i.BYTE&&(J=i.RGB8I),O===i.SHORT&&(J=i.RGB16I),O===i.INT&&(J=i.RGB32I)),g===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),O===i.UNSIGNED_INT&&(J=i.RGBA32UI),O===i.BYTE&&(J=i.RGBA8I),O===i.SHORT&&(J=i.RGBA16I),O===i.INT&&(J=i.RGBA32I)),g===i.RGB&&(O===i.UNSIGNED_SHORT&&rt&&(J=rt.RGB16_EXT),O===i.SHORT&&rt&&(J=rt.RGB16_SNORM_EXT),O===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),O===i.UNSIGNED_INT_10F_11F_11F_REV&&(J=i.R11F_G11F_B10F)),g===i.RGBA){let j=it?gs:Zt.getTransfer(Z);O===i.FLOAT&&(J=i.RGBA32F),O===i.HALF_FLOAT&&(J=i.RGBA16F),O===i.UNSIGNED_BYTE&&(J=j===ie?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT&&rt&&(J=rt.RGBA16_EXT),O===i.SHORT&&rt&&(J=rt.RGBA16_SNORM_EXT),O===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function M(E,g){let O;return E?g===null||g===ln||g===Zi?O=i.DEPTH24_STENCIL8:g===cn?O=i.DEPTH32F_STENCIL8:g===Yi&&(O=i.DEPTH24_STENCIL8,Ut("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===ln||g===Zi?O=i.DEPTH_COMPONENT24:g===cn?O=i.DEPTH_COMPONENT32F:g===Yi&&(O=i.DEPTH_COMPONENT16),O}function S(E,g){return d(E)===!0||E.isFramebufferTexture&&E.minFilter!==Ae&&E.minFilter!==pe?Math.log2(Math.max(g.width,g.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?g.mipmaps.length:1}function C(E){let g=E.target;g.removeEventListener("dispose",C),T(g),g.isVideoTexture&&u.delete(g),g.isHTMLTexture&&f.delete(g)}function x(E){let g=E.target;g.removeEventListener("dispose",x),y(g)}function T(E){let g=n.get(E);if(g.__webglInit===void 0)return;let O=E.source,G=m.get(O);if(G){let Z=G[g.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&L(E),Object.keys(G).length===0&&m.delete(O)}n.remove(E)}function L(E){let g=n.get(E);i.deleteTexture(g.__webglTexture);let O=E.source,G=m.get(O);delete G[g.__cacheKey],o.memory.textures--}function y(E){let g=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(g.__webglFramebuffer[G]))for(let Z=0;Z<g.__webglFramebuffer[G].length;Z++)i.deleteFramebuffer(g.__webglFramebuffer[G][Z]);else i.deleteFramebuffer(g.__webglFramebuffer[G]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[G])}else{if(Array.isArray(g.__webglFramebuffer))for(let G=0;G<g.__webglFramebuffer.length;G++)i.deleteFramebuffer(g.__webglFramebuffer[G]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let G=0;G<g.__webglColorRenderbuffer.length;G++)g.__webglColorRenderbuffer[G]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[G]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}let O=E.textures;for(let G=0,Z=O.length;G<Z;G++){let it=n.get(O[G]);it.__webglTexture&&(i.deleteTexture(it.__webglTexture),o.memory.textures--),n.remove(O[G])}n.remove(E)}let A=0;function I(){A=0}function P(){return A}function U(E){A=E}function B(){let E=A;return E>=s.maxTextures&&Ut("WebGLTextures: Trying to use "+(E+1)+" texture units while this GPU supports only "+s.maxTextures),A+=1,E}function V(E){let g=[];return g.push(E.wrapS),g.push(E.wrapT),g.push(E.wrapR||0),g.push(E.magFilter),g.push(E.minFilter),g.push(E.anisotropy),g.push(E.internalFormat),g.push(E.format),g.push(E.type),g.push(E.generateMipmaps),g.push(E.premultiplyAlpha),g.push(E.flipY),g.push(E.unpackAlignment),g.push(E.colorSpace),g.join()}function K(E,g){let O=n.get(E);if(E.isVideoTexture&&N(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&O.__version!==E.version){let G=E.image;if(G===null)Ut("WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)Ut("WebGLRenderer: Texture marked for update but image is incomplete");else{xt(O,E,g);return}}else E.isExternalTexture&&(O.__webglTexture=E.sourceTexture?E.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+g)}function k(E,g){let O=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&O.__version!==E.version){xt(O,E,g);return}else E.isExternalTexture&&(O.__webglTexture=E.sourceTexture?E.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+g)}function H(E,g){let O=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&O.__version!==E.version){xt(O,E,g);return}e.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+g)}function Y(E,g){let O=n.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&O.__version!==E.version){Dt(O,E,g);return}e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+g)}let st={[Fi]:i.REPEAT,[Ee]:i.CLAMP_TO_EDGE,[Ir]:i.MIRRORED_REPEAT},at={[Ae]:i.NEAREST,[Nc]:i.NEAREST_MIPMAP_NEAREST,[Us]:i.NEAREST_MIPMAP_LINEAR,[pe]:i.LINEAR,[no]:i.LINEAR_MIPMAP_NEAREST,[Ne]:i.LINEAR_MIPMAP_LINEAR},Bt={[Bc]:i.NEVER,[Hc]:i.ALWAYS,[zc]:i.LESS,[Vo]:i.LEQUAL,[Vc]:i.EQUAL,[ko]:i.GEQUAL,[kc]:i.GREATER,[Gc]:i.NOTEQUAL};function zt(E,g){if(g.type===cn&&t.has("OES_texture_float_linear")===!1&&(g.magFilter===pe||g.magFilter===no||g.magFilter===Us||g.magFilter===Ne||g.minFilter===pe||g.minFilter===no||g.minFilter===Us||g.minFilter===Ne)&&Ut("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,st[g.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,st[g.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,st[g.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,at[g.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,at[g.minFilter]),g.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,Bt[g.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Ae||g.minFilter!==Us&&g.minFilter!==Ne||g.type===cn&&t.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){let O=t.get("EXT_texture_filter_anisotropic");i.texParameterf(E,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function Vt(E,g){let O=!1;E.__webglInit===void 0&&(E.__webglInit=!0,g.addEventListener("dispose",C));let G=g.source,Z=m.get(G);Z===void 0&&(Z={},m.set(G,Z));let it=V(g);if(it!==E.__cacheKey){Z[it]===void 0&&(Z[it]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,O=!0),Z[it].usedTimes++;let rt=Z[E.__cacheKey];rt!==void 0&&(Z[E.__cacheKey].usedTimes--,rt.usedTimes===0&&L(g)),E.__cacheKey=it,E.__webglTexture=Z[it].texture}return O}function $(E,g,O){return Math.floor(Math.floor(E/O)/g)}function et(E,g,O,G){let it=E.updateRanges;if(it.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,g.width,g.height,O,G,g.data);else{it.sort((vt,ht)=>vt.start-ht.start);let rt=0;for(let vt=1;vt<it.length;vt++){let ht=it[rt],ct=it[vt],gt=ht.start+ht.count,It=$(ct.start,g.width,4),Et=$(ht.start,g.width,4);ct.start<=gt+1&&It===Et&&$(ct.start+ct.count-1,g.width,4)===It?ht.count=Math.max(ht.count,ct.start+ct.count-ht.start):(++rt,it[rt]=ct)}it.length=rt+1;let J=e.getParameter(i.UNPACK_ROW_LENGTH),j=e.getParameter(i.UNPACK_SKIP_PIXELS),dt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,g.width);for(let vt=0,ht=it.length;vt<ht;vt++){let ct=it[vt],gt=Math.floor(ct.start/4),It=Math.ceil(ct.count/4),Et=gt%g.width,F=Math.floor(gt/g.width),ut=It,tt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Et),e.pixelStorei(i.UNPACK_SKIP_ROWS,F),e.texSubImage2D(i.TEXTURE_2D,0,Et,F,ut,tt,O,G,g.data)}E.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,J),e.pixelStorei(i.UNPACK_SKIP_PIXELS,j),e.pixelStorei(i.UNPACK_SKIP_ROWS,dt)}}function xt(E,g,O){let G=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(G=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(G=i.TEXTURE_3D);let Z=Vt(E,g),it=g.source;e.bindTexture(G,E.__webglTexture,i.TEXTURE0+O);let rt=n.get(it);if(it.version!==rt.__version||Z===!0){if(e.activeTexture(i.TEXTURE0+O),(typeof ImageBitmap!="undefined"&&g.image instanceof ImageBitmap)===!1){let tt=Zt.getPrimaries(Zt.workingColorSpace),ft=g.colorSpace===In?null:Zt.getPrimaries(g.colorSpace),lt=g.colorSpace===In||tt===ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,lt)}e.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment);let j=p(g.image,!1,s.maxTextureSize);j=Nt(g,j);let dt=r.convert(g.format,g.colorSpace),vt=r.convert(g.type),ht=_(g.internalFormat,dt,vt,g.normalized,g.colorSpace,g.isVideoTexture);zt(G,g);let ct,gt=g.mipmaps,It=g.isVideoTexture!==!0,Et=rt.__version===void 0||Z===!0,F=it.dataReady,ut=S(g,j);if(g.isDepthTexture)ht=M(g.format===Kn,g.type),Et&&(It?e.texStorage2D(i.TEXTURE_2D,1,ht,j.width,j.height):e.texImage2D(i.TEXTURE_2D,0,ht,j.width,j.height,0,dt,vt,null));else if(g.isDataTexture)if(gt.length>0){It&&Et&&e.texStorage2D(i.TEXTURE_2D,ut,ht,gt[0].width,gt[0].height);for(let tt=0,ft=gt.length;tt<ft;tt++)ct=gt[tt],It?F&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,ct.width,ct.height,dt,vt,ct.data):e.texImage2D(i.TEXTURE_2D,tt,ht,ct.width,ct.height,0,dt,vt,ct.data);g.generateMipmaps=!1}else It?(Et&&e.texStorage2D(i.TEXTURE_2D,ut,ht,j.width,j.height),F&&et(g,j,dt,vt)):e.texImage2D(i.TEXTURE_2D,0,ht,j.width,j.height,0,dt,vt,j.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){It&&Et&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ut,ht,gt[0].width,gt[0].height,j.depth);for(let tt=0,ft=gt.length;tt<ft;tt++)if(ct=gt[tt],g.format!==He)if(dt!==null)if(It){if(F)if(g.layerUpdates.size>0){let lt=sl(ct.width,ct.height,g.format,g.type);for(let nt of g.layerUpdates){let At=ct.data.subarray(nt*lt/ct.data.BYTES_PER_ELEMENT,(nt+1)*lt/ct.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,nt,ct.width,ct.height,1,dt,At)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,0,ct.width,ct.height,j.depth,dt,ct.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,tt,ht,ct.width,ct.height,j.depth,0,ct.data,0,0);else Ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else It?F&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,0,ct.width,ct.height,j.depth,dt,vt,ct.data):e.texImage3D(i.TEXTURE_2D_ARRAY,tt,ht,ct.width,ct.height,j.depth,0,dt,vt,ct.data);g.layerUpdates.size>0&&g.clearLayerUpdates()}else{It&&Et&&e.texStorage2D(i.TEXTURE_2D,ut,ht,gt[0].width,gt[0].height);for(let tt=0,ft=gt.length;tt<ft;tt++)ct=gt[tt],g.format!==He?dt!==null?It?F&&e.compressedTexSubImage2D(i.TEXTURE_2D,tt,0,0,ct.width,ct.height,dt,ct.data):e.compressedTexImage2D(i.TEXTURE_2D,tt,ht,ct.width,ct.height,0,ct.data):Ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):It?F&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,ct.width,ct.height,dt,vt,ct.data):e.texImage2D(i.TEXTURE_2D,tt,ht,ct.width,ct.height,0,dt,vt,ct.data)}else if(g.isDataArrayTexture)if(It){if(Et&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ut,ht,j.width,j.height,j.depth),F)if(g.layerUpdates.size>0){let tt=sl(j.width,j.height,g.format,g.type);for(let ft of g.layerUpdates){let lt=j.data.subarray(ft*tt/j.data.BYTES_PER_ELEMENT,(ft+1)*tt/j.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ft,j.width,j.height,1,dt,vt,lt)}g.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,dt,vt,j.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,ht,j.width,j.height,j.depth,0,dt,vt,j.data);else if(g.isData3DTexture)It?(Et&&e.texStorage3D(i.TEXTURE_3D,ut,ht,j.width,j.height,j.depth),F&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,dt,vt,j.data)):e.texImage3D(i.TEXTURE_3D,0,ht,j.width,j.height,j.depth,0,dt,vt,j.data);else if(g.isFramebufferTexture){if(Et)if(It)e.texStorage2D(i.TEXTURE_2D,ut,ht,j.width,j.height);else{let tt=j.width,ft=j.height;for(let lt=0;lt<ut;lt++)e.texImage2D(i.TEXTURE_2D,lt,ht,tt,ft,0,dt,vt,null),tt>>=1,ft>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in i){let tt=i.canvas;if(tt.hasAttribute("layoutsubtree")||tt.setAttribute("layoutsubtree","true"),j.parentNode!==tt){tt.appendChild(j),f.add(g),tt.onpaint=ft=>{let lt=ft.changedElements;for(let nt of f)lt.includes(nt.image)&&(nt.needsUpdate=!0)},tt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,j);else{let lt=i.RGBA,nt=i.RGBA,At=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,lt,nt,At,j)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(gt.length>0){if(It&&Et){let tt=bt(gt[0]);e.texStorage2D(i.TEXTURE_2D,ut,ht,tt.width,tt.height)}for(let tt=0,ft=gt.length;tt<ft;tt++)ct=gt[tt],It?F&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,dt,vt,ct):e.texImage2D(i.TEXTURE_2D,tt,ht,dt,vt,ct);g.generateMipmaps=!1}else if(It){if(Et){let tt=bt(j);e.texStorage2D(i.TEXTURE_2D,ut,ht,tt.width,tt.height)}F&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,dt,vt,j)}else e.texImage2D(i.TEXTURE_2D,0,ht,dt,vt,j);d(g)&&R(G),rt.__version=it.version,g.onUpdate&&g.onUpdate(g)}E.__version=g.version}function Dt(E,g,O){if(g.image.length!==6)return;let G=Vt(E,g),Z=g.source;e.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+O);let it=n.get(Z);if(Z.version!==it.__version||G===!0){e.activeTexture(i.TEXTURE0+O);let rt=Zt.getPrimaries(Zt.workingColorSpace),J=g.colorSpace===In?null:Zt.getPrimaries(g.colorSpace),j=g.colorSpace===In||rt===J?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);let dt=g.isCompressedTexture||g.image[0].isCompressedTexture,vt=g.image[0]&&g.image[0].isDataTexture,ht=[];for(let nt=0;nt<6;nt++)!dt&&!vt?ht[nt]=p(g.image[nt],!0,s.maxCubemapSize):ht[nt]=vt?g.image[nt].image:g.image[nt],ht[nt]=Nt(g,ht[nt]);let ct=ht[0],gt=r.convert(g.format,g.colorSpace),It=r.convert(g.type),Et=_(g.internalFormat,gt,It,g.normalized,g.colorSpace),F=g.isVideoTexture!==!0,ut=it.__version===void 0||G===!0,tt=Z.dataReady,ft=S(g,ct);zt(i.TEXTURE_CUBE_MAP,g);let lt;if(dt){F&&ut&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ft,Et,ct.width,ct.height);for(let nt=0;nt<6;nt++){lt=ht[nt].mipmaps;for(let At=0;At<lt.length;At++){let Ct=lt[At];g.format!==He?gt!==null?F?tt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,At,0,0,Ct.width,Ct.height,gt,Ct.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,At,Et,Ct.width,Ct.height,0,Ct.data):Ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?tt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,At,0,0,Ct.width,Ct.height,gt,It,Ct.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,At,Et,Ct.width,Ct.height,0,gt,It,Ct.data)}}}else{if(lt=g.mipmaps,F&&ut){lt.length>0&&ft++;let nt=bt(ht[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ft,Et,nt.width,nt.height)}for(let nt=0;nt<6;nt++)if(vt){F?tt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,ht[nt].width,ht[nt].height,gt,It,ht[nt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Et,ht[nt].width,ht[nt].height,0,gt,It,ht[nt].data);for(let At=0;At<lt.length;At++){let he=lt[At].image[nt].image;F?tt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,At+1,0,0,he.width,he.height,gt,It,he.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,At+1,Et,he.width,he.height,0,gt,It,he.data)}}else{F?tt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,gt,It,ht[nt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Et,gt,It,ht[nt]);for(let At=0;At<lt.length;At++){let Ct=lt[At];F?tt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,At+1,0,0,gt,It,Ct.image[nt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,At+1,Et,gt,It,Ct.image[nt])}}}d(g)&&R(i.TEXTURE_CUBE_MAP),it.__version=Z.version,g.onUpdate&&g.onUpdate(g)}E.__version=g.version}function mt(E,g,O,G,Z,it){let rt=r.convert(O.format,O.colorSpace),J=r.convert(O.type),j=_(O.internalFormat,rt,J,O.normalized,O.colorSpace),dt=n.get(g),vt=n.get(O);if(vt.__renderTarget=g,!dt.__hasExternalTextures){let ht=Math.max(1,g.width>>it),ct=Math.max(1,g.height>>it);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?e.texImage3D(Z,it,j,ht,ct,g.depth,0,rt,J,null):e.texImage2D(Z,it,j,ht,ct,0,rt,J,null)}e.bindFramebuffer(i.FRAMEBUFFER,E),St(g)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,G,Z,vt.__webglTexture,0,pt(g)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,G,Z,vt.__webglTexture,it),e.bindFramebuffer(i.FRAMEBUFFER,null)}function kt(E,g,O){if(i.bindRenderbuffer(i.RENDERBUFFER,E),g.depthBuffer){let G=g.depthTexture,Z=G&&G.isDepthTexture?G.type:null,it=M(g.stencilBuffer,Z),rt=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;St(g)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pt(g),it,g.width,g.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,pt(g),it,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,it,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,rt,i.RENDERBUFFER,E)}else{let G=g.textures;for(let Z=0;Z<G.length;Z++){let it=G[Z],rt=r.convert(it.format,it.colorSpace),J=r.convert(it.type),j=_(it.internalFormat,rt,J,it.normalized,it.colorSpace);St(g)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pt(g),j,g.width,g.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,pt(g),j,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,j,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function xe(E,g,O){let G=g.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,E),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Z=n.get(g.depthTexture);if(Z.__renderTarget=g,(!Z.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),G){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,g.depthTexture.addEventListener("dispose",C)),Z.__webglTexture===void 0){Z.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),zt(i.TEXTURE_CUBE_MAP,g.depthTexture);let dt=r.convert(g.depthTexture.format),vt=r.convert(g.depthTexture.type),ht;g.depthTexture.format===gn?ht=i.DEPTH_COMPONENT24:g.depthTexture.format===Kn&&(ht=i.DEPTH24_STENCIL8);for(let ct=0;ct<6;ct++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,ht,g.width,g.height,0,dt,vt,null)}}else K(g.depthTexture,0);let it=Z.__webglTexture,rt=pt(g),J=G?i.TEXTURE_CUBE_MAP_POSITIVE_X+O:i.TEXTURE_2D,j=g.depthTexture.format===Kn?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(g.depthTexture.format===gn)St(g)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,J,it,0,rt):i.framebufferTexture2D(i.FRAMEBUFFER,j,J,it,0);else if(g.depthTexture.format===Kn)St(g)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,J,it,0,rt):i.framebufferTexture2D(i.FRAMEBUFFER,j,J,it,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Wt(E){let g=n.get(E),O=E.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==E.depthTexture){let G=E.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),G){let Z=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,G.removeEventListener("dispose",Z)};G.addEventListener("dispose",Z),g.__depthDisposeCallback=Z}g.__boundDepthTexture=G}if(E.depthTexture&&!g.__autoAllocateDepthBuffer)if(O)for(let G=0;G<6;G++)xe(g.__webglFramebuffer[G],E,G);else{let G=E.texture.mipmaps;G&&G.length>0?xe(g.__webglFramebuffer[0],E,0):xe(g.__webglFramebuffer,E,0)}else if(O){g.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[G]),g.__webglDepthbuffer[G]===void 0)g.__webglDepthbuffer[G]=i.createRenderbuffer(),kt(g.__webglDepthbuffer[G],E,!1);else{let Z=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,it=g.__webglDepthbuffer[G];i.bindRenderbuffer(i.RENDERBUFFER,it),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,it)}}else{let G=E.texture.mipmaps;if(G&&G.length>0?e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),kt(g.__webglDepthbuffer,E,!1);else{let Z=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,it=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,it),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,it)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Kt(E,g,O){let G=n.get(E);g!==void 0&&mt(G.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&Wt(E)}function oe(E){let g=E.texture,O=n.get(E),G=n.get(g);E.addEventListener("dispose",x);let Z=E.textures,it=E.isWebGLCubeRenderTarget===!0,rt=Z.length>1;if(rt||(G.__webglTexture===void 0&&(G.__webglTexture=i.createTexture()),G.__version=g.version,o.memory.textures++),it){O.__webglFramebuffer=[];for(let J=0;J<6;J++)if(g.mipmaps&&g.mipmaps.length>0){O.__webglFramebuffer[J]=[];for(let j=0;j<g.mipmaps.length;j++)O.__webglFramebuffer[J][j]=i.createFramebuffer()}else O.__webglFramebuffer[J]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){O.__webglFramebuffer=[];for(let J=0;J<g.mipmaps.length;J++)O.__webglFramebuffer[J]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(rt)for(let J=0,j=Z.length;J<j;J++){let dt=n.get(Z[J]);dt.__webglTexture===void 0&&(dt.__webglTexture=i.createTexture(),o.memory.textures++)}if(E.samples>0&&St(E)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let J=0;J<Z.length;J++){let j=Z[J];O.__webglColorRenderbuffer[J]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[J]);let dt=r.convert(j.format,j.colorSpace),vt=r.convert(j.type),ht=_(j.internalFormat,dt,vt,j.normalized,j.colorSpace,E.isXRRenderTarget===!0),ct=pt(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,ct,ht,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+J,i.RENDERBUFFER,O.__webglColorRenderbuffer[J])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),kt(O.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(it){e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture),zt(i.TEXTURE_CUBE_MAP,g);for(let J=0;J<6;J++)if(g.mipmaps&&g.mipmaps.length>0)for(let j=0;j<g.mipmaps.length;j++)mt(O.__webglFramebuffer[J][j],E,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,j);else mt(O.__webglFramebuffer[J],E,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);d(g)&&R(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(rt){for(let J=0,j=Z.length;J<j;J++){let dt=Z[J],vt=n.get(dt),ht=i.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ht=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ht,vt.__webglTexture),zt(ht,dt),mt(O.__webglFramebuffer,E,dt,i.COLOR_ATTACHMENT0+J,ht,0),d(dt)&&R(ht)}e.unbindTexture()}else{let J=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(J=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(J,G.__webglTexture),zt(J,g),g.mipmaps&&g.mipmaps.length>0)for(let j=0;j<g.mipmaps.length;j++)mt(O.__webglFramebuffer[j],E,g,i.COLOR_ATTACHMENT0,J,j);else mt(O.__webglFramebuffer,E,g,i.COLOR_ATTACHMENT0,J,0);d(g)&&R(J),e.unbindTexture()}E.depthBuffer&&Wt(E)}function Xt(E){let g=E.textures;for(let O=0,G=g.length;O<G;O++){let Z=g[O];if(d(Z)){let it=D(E),rt=n.get(Z).__webglTexture;e.bindTexture(it,rt),R(it),e.unbindTexture()}}}let ce=[],_e=[];function ot(E){if(E.samples>0){if(St(E)===!1){let g=E.textures,O=E.width,G=E.height,Z=i.COLOR_BUFFER_BIT,it=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=n.get(E),J=g.length>1;if(J)for(let dt=0;dt<g.length;dt++)e.bindFramebuffer(i.FRAMEBUFFER,rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,rt.__webglMultisampledFramebuffer);let j=E.texture.mipmaps;j&&j.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,rt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,rt.__webglFramebuffer);for(let dt=0;dt<g.length;dt++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),J){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,rt.__webglColorRenderbuffer[dt]);let vt=n.get(g[dt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,vt,0)}i.blitFramebuffer(0,0,O,G,0,0,O,G,Z,i.NEAREST),l===!0&&(ce.length=0,_e.length=0,ce.push(i.COLOR_ATTACHMENT0+dt),E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&(ce.push(it),_e.push(it),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,_e)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ce))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),J)for(let dt=0;dt<g.length;dt++){e.bindFramebuffer(i.FRAMEBUFFER,rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,rt.__webglColorRenderbuffer[dt]);let vt=n.get(g[dt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,vt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,rt.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&l){let g=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function pt(E){return Math.min(s.maxSamples,E.samples)}function St(E){let g=n.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function N(E){let g=o.render.frame;u.get(E)!==g&&(u.set(E,g),E.update())}function Nt(E,g){let O=E.colorSpace,G=E.format,Z=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||O!==ms&&O!==In&&(Zt.getTransfer(O)===ie?(G!==He||Z!==ke)&&Ut("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ft("WebGLTextures: Unsupported texture color space:",O)),g}function bt(E){return typeof HTMLImageElement!="undefined"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame!="undefined"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=I,this.getTextureUnits=P,this.setTextureUnits=U,this.setTexture2D=K,this.setTexture2DArray=k,this.setTexture3D=H,this.setTextureCube=Y,this.rebindTextures=Kt,this.setupRenderTarget=oe,this.updateRenderTargetMipmap=Xt,this.updateMultisampleRenderTarget=ot,this.setupDepthRenderbuffer=Wt,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=St,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function B0(i,t){function e(n,s=In){let r,o=Zt.getTransfer(s);if(n===ke)return i.UNSIGNED_BYTE;if(n===so)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ro)return i.UNSIGNED_SHORT_5_5_5_1;if(n===qa)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ya)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Wa)return i.BYTE;if(n===Xa)return i.SHORT;if(n===Yi)return i.UNSIGNED_SHORT;if(n===io)return i.INT;if(n===ln)return i.UNSIGNED_INT;if(n===cn)return i.FLOAT;if(n===hn)return i.HALF_FLOAT;if(n===Za)return i.ALPHA;if(n===Ja)return i.RGB;if(n===He)return i.RGBA;if(n===gn)return i.DEPTH_COMPONENT;if(n===Kn)return i.DEPTH_STENCIL;if(n===$a)return i.RED;if(n===oo)return i.RED_INTEGER;if(n===Qn)return i.RG;if(n===ao)return i.RG_INTEGER;if(n===lo)return i.RGBA_INTEGER;if(n===Fs||n===Os||n===Bs||n===zs)if(o===ie)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Fs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Os)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Bs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===zs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Fs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Os)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Bs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===zs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===co||n===ho||n===uo||n===fo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===co)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ho)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===uo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===fo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===po||n===mo||n===go||n===xo||n===_o||n===Vs||n===vo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===po||n===mo)return o===ie?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===go)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===xo)return r.COMPRESSED_R11_EAC;if(n===_o)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Vs)return r.COMPRESSED_RG11_EAC;if(n===vo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===yo||n===Mo||n===So||n===bo||n===wo||n===To||n===Ao||n===Eo||n===Co||n===Ro||n===Po||n===Io||n===Lo||n===Do)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===yo)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Mo)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===So)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===bo)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===wo)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===To)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ao)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Eo)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Co)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ro)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Po)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Io)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Lo)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Do)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===No||n===Uo||n===Fo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===No)return o===ie?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Uo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Fo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Oo||n===Bo||n===ks||n===zo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Oo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Bo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ks)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===zo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Zi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var z0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,V0=`
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

}`,bl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Cs(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Ce({vertexShader:z0,fragmentShader:V0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new jt(new yn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},wl=class extends xn{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,m=null,v=null,w=typeof XRWebGLBinding!="undefined",p=new bl,d={},R=e.getContextAttributes(),D=null,_=null,M=[],S=[],C=new qt,x=null,T=null,L=new De;L.viewport=new re;let y=new De;y.viewport=new re;let A=[L,y],I=new Qr,P=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let et=M[$];return et===void 0&&(et=new Vi,M[$]=et),et.getTargetRaySpace()},this.getControllerGrip=function($){let et=M[$];return et===void 0&&(et=new Vi,M[$]=et),et.getGripSpace()},this.getHand=function($){let et=M[$];return et===void 0&&(et=new Vi,M[$]=et),et.getHandSpace()};function B($){let et=S.indexOf($.inputSource);if(et===-1)return;let xt=M[et];xt!==void 0&&(xt.update($.inputSource,$.frame,c||o),xt.dispatchEvent({type:$.type,data:$.inputSource}))}function V(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",K);for(let $=0;$<M.length;$++){let et=S[$];et!==null&&(S[$]=null,M[$].disconnect(et))}P=null,U=null,p.reset();for(let $ in d)delete d[$];if(t.setRenderTarget(D),m=null,h=null,f=null,s=null,_=null,Vt.stop(),n.isPresenting=!1,t.setPixelRatio(x),t.setSize(C.width,C.height,!1),T!==null){let $=T.camera;$.fov=T.fov,$.zoom=T.zoom,$.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&Ut("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&Ut("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return f===null&&w&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(D=t.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",V),s.addEventListener("inputsourceschange",K),R.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(C),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let xt=null,Dt=null,mt=null;R.depth&&(mt=R.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,xt=R.stencil?Kn:gn,Dt=R.stencil?Zi:ln);let kt={colorFormat:e.RGBA8,depthFormat:mt,scaleFactor:r};f=this.getBinding(),h=f.createProjectionLayer(kt),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),_=new Ge(h.textureWidth,h.textureHeight,{format:He,type:ke,depthTexture:new Wn(h.textureWidth,h.textureHeight,Dt,void 0,void 0,void 0,void 0,void 0,void 0,xt),stencilBuffer:R.stencil,colorSpace:t.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let xt={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,xt),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),_=new Ge(m.framebufferWidth,m.framebufferHeight,{format:He,type:ke,colorSpace:t.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Vt.setContext(s),Vt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function K($){for(let et=0;et<$.removed.length;et++){let xt=$.removed[et],Dt=S.indexOf(xt);Dt>=0&&(S[Dt]=null,M[Dt].disconnect(xt))}for(let et=0;et<$.added.length;et++){let xt=$.added[et],Dt=S.indexOf(xt);if(Dt===-1){for(let kt=0;kt<M.length;kt++)if(kt>=S.length){S.push(xt),Dt=kt;break}else if(S[kt]===null){S[kt]=xt,Dt=kt;break}if(Dt===-1)break}let mt=M[Dt];mt&&mt.connect(xt)}}let k=new W,H=new W;function Y($,et,xt){k.setFromMatrixPosition(et.matrixWorld),H.setFromMatrixPosition(xt.matrixWorld);let Dt=k.distanceTo(H),mt=et.projectionMatrix.elements,kt=xt.projectionMatrix.elements,xe=mt[14]/(mt[10]-1),Wt=mt[14]/(mt[10]+1),Kt=(mt[9]+1)/mt[5],oe=(mt[9]-1)/mt[5],Xt=(mt[8]-1)/mt[0],ce=(kt[8]+1)/kt[0],_e=xe*Xt,ot=xe*ce,pt=Dt/(-Xt+ce),St=pt*-Xt;if(et.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(St),$.translateZ(pt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),mt[10]===-1)$.projectionMatrix.copy(et.projectionMatrix),$.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{let N=xe+pt,Nt=Wt+pt,bt=_e-St,E=ot+(Dt-St),g=Kt*Wt/Nt*N,O=oe*Wt/Nt*N;$.projectionMatrix.makePerspective(bt,E,g,O,N,Nt),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function st($,et){et===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(et.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let et=$.near,xt=$.far;p.texture!==null&&(p.depthNear>0&&(et=p.depthNear),p.depthFar>0&&(xt=p.depthFar)),I.near=y.near=L.near=et,I.far=y.far=L.far=xt,(P!==I.near||U!==I.far)&&(s.updateRenderState({depthNear:I.near,depthFar:I.far}),P=I.near,U=I.far),I.layers.mask=$.layers.mask|6,L.layers.mask=I.layers.mask&-5,y.layers.mask=I.layers.mask&-3;let Dt=$.parent,mt=I.cameras;st(I,Dt);for(let kt=0;kt<mt.length;kt++)st(mt[kt],Dt);mt.length===2?Y(I,L,y):I.projectionMatrix.copy(L.projectionMatrix),T===null&&$.isPerspectiveCamera&&(T={camera:$,fov:$.fov,zoom:$.zoom}),at($,I,Dt)};function at($,et,xt){xt===null?$.matrix.copy(et.matrixWorld):($.matrix.copy(xt.matrixWorld),$.matrix.invert(),$.matrix.multiply(et.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(et.projectionMatrix),$.projectionMatrixInverse.copy(et.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Bi*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function($){l=$,h!==null&&(h.fixedFoveation=$),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=$)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(I)},this.getCameraTexture=function($){return d[$]};let Bt=null;function zt($,et){if(u=et.getViewerPose(c||o),v=et,u!==null){let xt=u.views;m!==null&&(t.setRenderTargetFramebuffer(_,m.framebuffer),t.setRenderTarget(_));let Dt=!1;xt.length!==I.cameras.length&&(I.cameras.length=0,Dt=!0);for(let Wt=0;Wt<xt.length;Wt++){let Kt=xt[Wt],oe=null;if(m!==null)oe=m.getViewport(Kt);else{let ce=f.getViewSubImage(h,Kt);oe=ce.viewport,Wt===0&&(t.setRenderTargetTextures(_,ce.colorTexture,ce.depthStencilTexture),t.setRenderTarget(_))}let Xt=A[Wt];Xt===void 0&&(Xt=new De,Xt.layers.enable(Wt),Xt.viewport=new re,A[Wt]=Xt),Xt.matrix.fromArray(Kt.transform.matrix),Xt.matrix.decompose(Xt.position,Xt.quaternion,Xt.scale),Xt.projectionMatrix.fromArray(Kt.projectionMatrix),Xt.projectionMatrixInverse.copy(Xt.projectionMatrix).invert(),Xt.viewport.set(oe.x,oe.y,oe.width,oe.height),Wt===0&&(I.matrix.copy(Xt.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Dt===!0&&I.cameras.push(Xt)}let mt=s.enabledFeatures;if(mt&&mt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&w){f=n.getBinding();let Wt=f.getDepthInformation(xt[0]);Wt&&Wt.isValid&&Wt.texture&&p.init(Wt,s.renderState)}if(mt&&mt.includes("camera-access")&&w){t.state.unbindTexture(),f=n.getBinding();for(let Wt=0;Wt<xt.length;Wt++){let Kt=xt[Wt].camera;if(Kt){let oe=d[Kt];oe||(oe=new Cs,d[Kt]=oe);let Xt=f.getCameraImage(Kt);oe.sourceTexture=Xt}}}}for(let xt=0;xt<M.length;xt++){let Dt=S[xt],mt=M[xt];Dt!==null&&mt!==void 0&&mt.update(Dt,et,c||o)}Bt&&Bt($,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),v=null}let Vt=new yh;Vt.setAnimationLoop(zt),this.setAnimationLoop=function($){Bt=$},this.dispose=function(){}}},k0=new me,Ah=new Ot;Ah.set(-1,0,0,0,1,0,0,0,1);function G0(i,t){function e(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function n(p,d){d.color.getRGB(p.fogColor.value,el(i)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function s(p,d,R,D,_){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?r(p,d):d.isMeshLambertMaterial?(r(p,d),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(p,d),f(p,d)):d.isMeshPhongMaterial?(r(p,d),u(p,d),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(p,d),h(p,d),d.isMeshPhysicalMaterial&&m(p,d,_)):d.isMeshMatcapMaterial?(r(p,d),v(p,d)):d.isMeshDepthMaterial?r(p,d):d.isMeshDistanceMaterial?(r(p,d),w(p,d)):d.isMeshNormalMaterial?r(p,d):d.isLineBasicMaterial?(o(p,d),d.isLineDashedMaterial&&a(p,d)):d.isPointsMaterial?l(p,d,R,D):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,e(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===ze&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,e(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===ze&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,e(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,e(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let R=t.get(d),D=R.envMap,_=R.envMapRotation;D&&(p.envMap.value=D,p.envMapRotation.value.setFromMatrix4(k0.makeRotationFromEuler(_)).transpose(),D.isCubeTexture&&D.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Ah),p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap&&(p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,p.lightMapTransform)),d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,p.aoMapTransform))}function o(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform))}function a(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,R,D){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*R,p.scale.value=D*.5,d.map&&(p.map.value=d.map,e(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function u(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function f(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function h(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,R){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===ze&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.retroreflectivity>0&&(p.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=R.texture,p.transmissionSamplerSize.value.set(R.width,R.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,p.specularIntensityMapTransform))}function v(p,d){d.matcap&&(p.matcap.value=d.matcap)}function w(p,d){let R=t.get(d).light;p.referencePosition.value.setFromMatrixPosition(R.matrixWorld),p.nearDistance.value=R.shadow.camera.near,p.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function H0(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,M){let S=M.program;n.uniformBlockBinding(_,S)}function c(_,M){let S=s[_.id];S===void 0&&(p(_),S=u(_),s[_.id]=S,_.addEventListener("dispose",R));let C=M.program;n.updateUBOMapping(_,C);let x=t.render.frame;r[_.id]!==x&&(h(_),r[_.id]=x)}function u(_){let M=f();_.__bindingPointIndex=M;let S=i.createBuffer(),C=_.__size,x=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,C,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,S),S}function f(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return Ft("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){let M=s[_.id],S=_.uniforms,C=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let x=0,T=S.length;x<T;x++){let L=S[x];if(Array.isArray(L))for(let y=0,A=L.length;y<A;y++)m(L[y],x,y,C);else m(L,x,0,C)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(_,M,S,C){if(w(_,M,S,C)===!0){let x=_.__offset,T=_.value;if(Array.isArray(T)){let L=0;for(let y=0;y<T.length;y++){let A=T[y],I=d(A);v(A,_.__data,L),typeof A!="number"&&typeof A!="boolean"&&!A.isMatrix3&&!ArrayBuffer.isView(A)&&(L+=I.storage/Float32Array.BYTES_PER_ELEMENT)}}else v(T,_.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,_.__data)}}function v(_,M,S){typeof _=="number"||typeof _=="boolean"?M[0]=_:_.isMatrix3?(M[0]=_.elements[0],M[1]=_.elements[1],M[2]=_.elements[2],M[3]=0,M[4]=_.elements[3],M[5]=_.elements[4],M[6]=_.elements[5],M[7]=0,M[8]=_.elements[6],M[9]=_.elements[7],M[10]=_.elements[8],M[11]=0):ArrayBuffer.isView(_)?M.set(new _.constructor(_.buffer,_.byteOffset,M.length)):_.toArray(M,S)}function w(_,M,S,C){let x=_.value,T=M+"_"+S;if(C[T]===void 0)return typeof x=="number"||typeof x=="boolean"?C[T]=x:ArrayBuffer.isView(x)?C[T]=x.slice():C[T]=x.clone(),!0;{let L=C[T];if(typeof x=="number"||typeof x=="boolean"){if(L!==x)return C[T]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(L.equals(x)===!1)return L.copy(x),!0}}return!1}function p(_){let M=_.uniforms,S=0,C=16;for(let T=0,L=M.length;T<L;T++){let y=Array.isArray(M[T])?M[T]:[M[T]];for(let A=0,I=y.length;A<I;A++){let P=y[A],U=Array.isArray(P.value)?P.value:[P.value];for(let B=0,V=U.length;B<V;B++){let K=U[B],k=d(K),H=S%C,Y=H%k.boundary,st=H+Y;S+=Y,st!==0&&C-st<k.storage&&(S+=C-st),P.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=S,S+=k.storage}}}let x=S%C;return x>0&&(S+=C-x),_.__size=S,_.__cache={},this}function d(_){let M={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(M.boundary=4,M.storage=4):_.isVector2?(M.boundary=8,M.storage=8):_.isVector3||_.isColor?(M.boundary=16,M.storage=12):_.isVector4?(M.boundary=16,M.storage=16):_.isMatrix3?(M.boundary=48,M.storage=48):_.isMatrix4?(M.boundary=64,M.storage=64):_.isTexture?Ut("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(M.boundary=16,M.storage=_.byteLength):Ut("WebGLRenderer: Unsupported uniform value type.",_),M}function R(_){let M=_.target;M.removeEventListener("dispose",R);let S=o.indexOf(M.__bindingPointIndex);o.splice(S,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function D(){for(let _ in s)i.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:l,update:c,dispose:D}}var W0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Sn=null;function X0(){return Sn===null&&(Sn=new ki(W0,16,16,Qn,hn),Sn.name="DFG_LUT",Sn.minFilter=pe,Sn.magFilter=pe,Sn.wrapS=Ee,Sn.wrapT=Ee,Sn.generateMipmaps=!1,Sn.needsUpdate=!0),Sn}var qo=class{constructor(t={}){let{canvas:e=Xc(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:m=ke}=t;this.isWebGLRenderer=!0;let v;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=n.getContextAttributes().alpha}else v=o;let w=m,p=new Set([lo,ao,oo]),d=new Set([ke,ln,Yi,Zi,so,ro]),R=new Uint32Array(4),D=new Int32Array(4),_=new W,M=null,S=null,C=[],x=[],T=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=an,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let L=this,y=!1,A=null,I=null,P=null,U=null;this._outputColorSpace=Ze;let B=0,V=0,K=null,k=-1,H=null,Y=new re,st=new re,at=null,Bt=new $t(0),zt=0,Vt=e.width,$=e.height,et=1,xt=null,Dt=null,mt=new re(0,0,Vt,$),kt=new re(0,0,Vt,$),xe=!1,Wt=new As,Kt=!1,oe=!1,Xt=new me,ce=new W,_e=new re,ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},pt=!1;function St(){return K===null?et:1}let N=n;function Nt(b,z){return e.getContext(b,z)}let bt,E,g,O,G,Z,it,rt,J,j,dt,vt,ht,ct,gt,It,Et,F,ut,tt,ft,lt,nt;try{let b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",he,!1),e.addEventListener("webglcontextrestored",ee,!1),e.addEventListener("webglcontextcreationerror",tn,!1),N===null){let z="webgl2";if(N=Nt(z,b),N===null)throw Nt(z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}At()}catch(b){throw e.removeEventListener("webglcontextlost",he,!1),e.removeEventListener("webglcontextrestored",ee,!1),e.removeEventListener("webglcontextcreationerror",tn,!1),Ft("WebGLRenderer: "+b.message),b}function At(){bt=new Qp(N),bt.init(),ft=new B0(N,bt),E=new Gp(N,bt,t,ft),g=new F0(N,bt),E.reversedDepthBuffer&&h&&g.buffers.depth.setReversed(!0),I=N.createFramebuffer(),P=N.createFramebuffer(),U=N.createFramebuffer(),O=new em(N),G=new S0,Z=new O0(N,bt,g,G,E,ft,O),it=new Kp(L),rt=new nd(N),lt=new Vp(N,rt),J=new jp(N,rt,O,lt),j=new im(N,J,rt,lt,O),F=new nm(N,E,Z),gt=new Hp(G),dt=new M0(L,it,bt,E,lt,gt),vt=new G0(L,G),ht=new w0,ct=new P0(bt),Et=new zp(L,it,g,j,v,l),It=new U0(L,j,E),nt=new H0(N,O,E,g),ut=new kp(N,bt,O),tt=new tm(N,bt,O),O.programs=dt.programs,L.capabilities=E,L.extensions=bt,L.properties=G,L.renderLists=ht,L.shadowMap=It,L.state=g,L.info=O}w!==ke&&(T=new rm(w,e.width,e.height,a,s,r));let Ct=new wl(L,N);this.xr=Ct,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let b=bt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=bt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return et},this.setPixelRatio=function(b){b!==void 0&&(et=b,this.setSize(Vt,$,!1))},this.getSize=function(b){return b.set(Vt,$)},this.setSize=function(b,z,Q=!0){if(Ct.isPresenting){Ut("WebGLRenderer: Can't change size while VR device is presenting.");return}Vt=b,$=z,e.width=Math.floor(b*et),e.height=Math.floor(z*et),Q===!0&&(e.style.width=b+"px",e.style.height=z+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,b,z)},this.getDrawingBufferSize=function(b){return b.set(Vt*et,$*et).floor()},this.setDrawingBufferSize=function(b,z,Q){Vt=b,$=z,et=Q,e.width=Math.floor(b*Q),e.height=Math.floor(z*Q),this.setViewport(0,0,b,z)},this.setEffects=function(b){if(w===ke){Ft("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let z=0;z<b.length;z++)if(b[z].isOutputPass===!0){Ut("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(Y)},this.getViewport=function(b){return b.copy(mt)},this.setViewport=function(b,z,Q,X){b.isVector4?mt.set(b.x,b.y,b.z,b.w):mt.set(b,z,Q,X),g.viewport(Y.copy(mt).multiplyScalar(et).round())},this.getScissor=function(b){return b.copy(kt)},this.setScissor=function(b,z,Q,X){b.isVector4?kt.set(b.x,b.y,b.z,b.w):kt.set(b,z,Q,X),g.scissor(st.copy(kt).multiplyScalar(et).round())},this.getScissorTest=function(){return xe},this.setScissorTest=function(b){g.setScissorTest(xe=b)},this.setOpaqueSort=function(b){xt=b},this.setTransparentSort=function(b){Dt=b},this.getClearColor=function(b){return b.copy(Et.getClearColor())},this.setClearColor=function(){Et.setClearColor(...arguments)},this.getClearAlpha=function(){return Et.getClearAlpha()},this.setClearAlpha=function(){Et.setClearAlpha(...arguments)},this.clear=function(b=!0,z=!0,Q=!0){let X=0;if(b){let q=!1;if(K!==null){let Mt=K.texture.format;q=p.has(Mt)}if(q){let Mt=K.texture.type,Tt=d.has(Mt),yt=Et.getClearColor(),Rt=Et.getClearAlpha(),Lt=yt.r,Gt=yt.g,Yt=yt.b;Tt?(R[0]=Lt,R[1]=Gt,R[2]=Yt,R[3]=Rt,N.clearBufferuiv(N.COLOR,0,R)):(D[0]=Lt,D[1]=Gt,D[2]=Yt,D[3]=Rt,N.clearBufferiv(N.COLOR,0,D))}else X|=N.COLOR_BUFFER_BIT}z&&(X|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Q&&(X|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X!==0&&N.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),A=b},this.dispose=function(){e.removeEventListener("webglcontextlost",he,!1),e.removeEventListener("webglcontextrestored",ee,!1),e.removeEventListener("webglcontextcreationerror",tn,!1),Et.dispose(),ht.dispose(),ct.dispose(),G.dispose(),it.dispose(),j.dispose(),lt.dispose(),nt.dispose(),dt.dispose(),Ct.dispose(),Ct.removeEventListener("sessionstart",Nl),Ct.removeEventListener("sessionend",Ul),ii.stop()};function he(b){b.preventDefault(),ja("WebGLRenderer: Context Lost."),y=!0}function ee(){ja("WebGLRenderer: Context Restored."),y=!1;let b=O.autoReset,z=It.enabled,Q=It.autoUpdate,X=It.needsUpdate,q=It.type;At(),O.autoReset=b,It.enabled=z,It.autoUpdate=Q,It.needsUpdate=X,It.type=q}function tn(b){Ft("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function dn(b){let z=b.target;z.removeEventListener("dispose",dn),Qh(z)}function Qh(b){jh(b),G.remove(b)}function jh(b){let z=G.get(b).programs;z!==void 0&&(z.forEach(function(Q){dt.releaseProgram(Q)}),b.isShaderMaterial&&dt.releaseShaderCache(b))}this.renderBufferDirect=function(b,z,Q,X,q,Mt){z===null&&(z=ot);let Tt=q.isMesh&&q.matrixWorld.determinantAffine()<0,yt=nu(b,z,Q,X,q);g.setMaterial(X,Tt);let Rt=Q.index,Lt=1;if(X.wireframe===!0){if(Rt=J.getWireframeAttribute(Q),Rt===void 0)return;Lt=2}let Gt=Q.drawRange,Yt=Q.attributes.position,Pt=Gt.start*Lt,ne=(Gt.start+Gt.count)*Lt;Mt!==null&&(Pt=Math.max(Pt,Mt.start*Lt),ne=Math.min(ne,(Mt.start+Mt.count)*Lt)),Rt!==null?(Pt=Math.max(Pt,0),ne=Math.min(ne,Rt.count)):Yt!=null&&(Pt=Math.max(Pt,0),ne=Math.min(ne,Yt.count));let ve=ne-Pt;if(ve<0||ve===1/0)return;lt.setup(q,X,yt,Q,Rt);let de,le=ut;if(Rt!==null&&(de=rt.get(Rt),le=tt,le.setIndex(de)),q.isMesh)X.wireframe===!0?(g.setLineWidth(X.wireframeLinewidth*St()),le.setMode(N.LINES)):le.setMode(N.TRIANGLES);else if(q.isLine){let Pe=X.linewidth;Pe===void 0&&(Pe=1),g.setLineWidth(Pe*St()),q.isLineSegments?le.setMode(N.LINES):q.isLineLoop?le.setMode(N.LINE_LOOP):le.setMode(N.LINE_STRIP)}else q.isPoints?le.setMode(N.POINTS):q.isSprite&&le.setMode(N.TRIANGLES);if(q.isBatchedMesh)if(bt.get("WEBGL_multi_draw"))le.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{let Pe=q._multiDrawStarts,wt=q._multiDrawCounts,Fe=q._multiDrawCount,Qt=Rt?rt.get(Rt).bytesPerElement:1,Qe=G.get(X).currentProgram.getUniforms();for(let fn=0;fn<Fe;fn++)Qe.setValue(N,"_gl_DrawID",fn),le.render(Pe[fn]/Qt,wt[fn])}else if(q.isInstancedMesh)le.renderInstances(Pt,ve,q.count);else if(Q.isInstancedBufferGeometry){let Pe=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,wt=Math.min(Q.instanceCount,Pe);le.renderInstances(Pt,ve,wt)}else le.render(Pt,ve)};function Dl(b,z,Q,X){A!==null&&b.isNodeMaterial&&A.setObject(X,b),Kt===!0&&gt.setState(b,Q,!1),b.transparent===!0&&b.side===Ve&&b.forceSinglePass===!1?(b.side=ze,b.needsUpdate=!0,tr(b,z,X),b.side=Jn,b.needsUpdate=!0,tr(b,z,X),b.side=Ve):tr(b,z,X)}this.compile=function(b,z,Q=null){Q===null&&(Q=b),A!==null&&A.renderStart(b,z,Q),S=ct.get(Q),S.init(z),x.push(S),Q.traverseVisible(function(q){q.isLight&&q.layers.test(z.layers)&&(S.pushLight(q),q.castShadow&&S.pushShadow(q))}),b!==Q&&b.traverseVisible(function(q){q.isLight&&q.layers.test(z.layers)&&(S.pushLight(q),q.castShadow&&S.pushShadow(q))}),S.setupLights(),A!==null&&A.updateLights(S.state.lightsArray),oe=this.localClippingEnabled,Kt=gt.init(this.clippingPlanes,oe),Kt===!0&&gt.setGlobalState(this.clippingPlanes,z),A!==null&&It.render(S.state.shadowsArray,Q,z);let X=new Set;return b.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;let Mt=q.material;if(Mt)if(Array.isArray(Mt))for(let Tt=0;Tt<Mt.length;Tt++){let yt=Mt[Tt];Dl(yt,Q,z,q),X.add(yt)}else Dl(Mt,Q,z,q),X.add(Mt)}),S=x.pop(),A!==null&&A.renderEnd(),X},this.compileAsync=function(b,z,Q=null){let X=this.compile(b,z,Q);return new Promise(q=>{function Mt(){if(X.forEach(function(Tt){let Rt=G.get(Tt).currentProgram;(Rt===void 0||Rt.isReady())&&X.delete(Tt)}),X.size===0){q(b);return}setTimeout(Mt,10)}bt.get("KHR_parallel_shader_compile")!==null?Mt():setTimeout(Mt,10)})};let ea=null;function tu(b){ea&&ea(b)}function Nl(){ii.stop()}function Ul(){ii.start()}let ii=new yh;ii.setAnimationLoop(tu),typeof self!="undefined"&&ii.setContext(self),this.setAnimationLoop=function(b){ea=b,Ct.setAnimationLoop(b),b===null?ii.stop():ii.start()},Ct.addEventListener("sessionstart",Nl),Ct.addEventListener("sessionend",Ul),this.render=function(b,z){if(z!==void 0&&z.isCamera!==!0){Ft("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;A!==null&&A.renderStart(b,z);let Q=Ct.enabled===!0&&Ct.isPresenting===!0,X=T!==null&&(K===null||Q)&&T.begin(L,K);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Ct.enabled===!0&&Ct.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Ct.cameraAutoUpdate===!0&&Ct.updateCamera(z),z=Ct.getCamera()),b.isScene===!0&&b.onBeforeRender(L,b,z,K),S=ct.get(b,x.length),S.init(z),S.state.textureUnits=Z.getTextureUnits(),x.push(S),Xt.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Wt.setFromProjectionMatrix(Xt,on,z.reversedDepth),oe=this.localClippingEnabled,Kt=gt.init(this.clippingPlanes,oe),M=ht.get(b,C.length),M.init(),C.push(M),Ct.enabled===!0&&Ct.isPresenting===!0){let Tt=L.xr.getDepthSensingMesh();Tt!==null&&na(Tt,z,-1/0,L.sortObjects)}na(b,z,0,L.sortObjects),M.finish(),A!==null&&A.updateLights(S.state.lightsArray),L.sortObjects===!0&&M.sort(xt,Dt),pt=Ct.enabled===!1||Ct.isPresenting===!1||Ct.hasDepthSensing()===!1,pt&&Et.addToRenderList(M,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Kt===!0&&gt.beginShadows();let q=S.state.shadowsArray;if(It.render(q,b,z),Kt===!0&&gt.endShadows(),(X&&T.hasRenderPass())===!1){let Tt=M.opaque,yt=M.transmissive;if(S.setupLights(),z.isArrayCamera){let Rt=z.cameras;if(yt.length>0)for(let Lt=0,Gt=Rt.length;Lt<Gt;Lt++){let Yt=Rt[Lt];Ol(Tt,yt,b,Yt)}pt&&Et.render(b);for(let Lt=0,Gt=Rt.length;Lt<Gt;Lt++){let Yt=Rt[Lt];Fl(M,b,Yt,Yt.viewport)}}else yt.length>0&&Ol(Tt,yt,b,z),pt&&Et.render(b),Fl(M,b,z)}K!==null&&V===0&&(Z.updateMultisampleRenderTarget(K),Z.updateRenderTargetMipmap(K)),X&&T.end(L),b.isScene===!0&&b.onAfterRender(L,b,z),lt.resetDefaultState(),k=-1,H=null,x.pop(),x.length>0?(S=x[x.length-1],Z.setTextureUnits(S.state.textureUnits),Kt===!0&&gt.setGlobalState(L.clippingPlanes,S.state.camera)):S=null,C.pop(),C.length>0?M=C[C.length-1]:M=null,A!==null&&A.renderEnd()};function na(b,z,Q,X){if(b.visible===!1)return;if(b.layers.test(z.layers)){if(b.isGroup)Q=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(z);else if(b.isLightProbeGrid)S.pushLightProbeGrid(b);else if(b.isLight)S.pushLight(b),b.castShadow&&S.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||b.intersectsFrustum(Wt)){X&&_e.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Xt);let Tt=j.update(b),yt=b.material;yt.visible&&M.push(b,Tt,yt,Q,_e.z,null,z)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||b.intersectsFrustum(Wt))){let Tt=j.update(b),yt=b.material;if(X&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),_e.copy(b.boundingSphere.center)):(Tt.boundingSphere===null&&Tt.computeBoundingSphere(),_e.copy(Tt.boundingSphere.center)),_e.applyMatrix4(b.matrixWorld).applyMatrix4(Xt)),Array.isArray(yt)){let Rt=Tt.groups;for(let Lt=0,Gt=Rt.length;Lt<Gt;Lt++){let Yt=Rt[Lt],Pt=yt[Yt.materialIndex];Pt&&Pt.visible&&M.push(b,Tt,Pt,Q,_e.z,Yt,z)}}else yt.visible&&M.push(b,Tt,yt,Q,_e.z,null,z)}}let Mt=b.children;for(let Tt=0,yt=Mt.length;Tt<yt;Tt++)na(Mt[Tt],z,Q,X)}function Fl(b,z,Q,X){let{opaque:q,transmissive:Mt,transparent:Tt}=b;S.setupLightsView(Q),Kt===!0&&gt.setGlobalState(L.clippingPlanes,Q),X&&g.viewport(Y.copy(X)),q.length>0&&js(q,z,Q),Mt.length>0&&js(Mt,z,Q),Tt.length>0&&js(Tt,z,Q),g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),g.setPolygonOffset(!1)}function Ol(b,z,Q,X){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[X.id]===void 0){let Pt=bt.has("EXT_color_buffer_half_float")||bt.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[X.id]=new Ge(1,1,{generateMipmaps:!0,type:Pt?hn:ke,minFilter:Ne,samples:Math.max(4,E.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Zt.workingColorSpace})}let Mt=S.state.transmissionRenderTarget[X.id],Tt=X.viewport||Y;Mt.setSize(Tt.z*L.transmissionResolutionScale,Tt.w*L.transmissionResolutionScale);let yt=L.getRenderTarget(),Rt=L.getActiveCubeFace(),Lt=L.getActiveMipmapLevel();L.setRenderTarget(Mt),L.getClearColor(Bt),zt=L.getClearAlpha(),zt<1&&L.setClearColor(16777215,.5),L.clear(),pt&&Et.render(Q);let Gt=L.toneMapping;L.toneMapping=an;let Yt=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),S.setupLightsView(X),Kt===!0&&gt.setGlobalState(L.clippingPlanes,X),js(b,Q,X),Z.updateMultisampleRenderTarget(Mt),Z.updateRenderTargetMipmap(Mt),bt.has("WEBGL_multisampled_render_to_texture")===!1){let Pt=!1;for(let ne=0,ve=z.length;ne<ve;ne++){let de=z[ne],{object:le,geometry:Pe,material:wt,group:Fe}=de;if(wt.side===Ve&&le.layers.test(X.layers)){let Qt=wt.side;wt.side=ze,wt.needsUpdate=!0,Bl(le,Q,X,Pe,wt,Fe),wt.side=Qt,wt.needsUpdate=!0,Pt=!0}}Pt===!0&&(Z.updateMultisampleRenderTarget(Mt),Z.updateRenderTargetMipmap(Mt))}L.setRenderTarget(yt,Rt,Lt),L.setClearColor(Bt,zt),Yt!==void 0&&(X.viewport=Yt),L.toneMapping=Gt}function js(b,z,Q){let X=z.isScene===!0?z.overrideMaterial:null;for(let q=0,Mt=b.length;q<Mt;q++){let Tt=b[q],{object:yt,geometry:Rt,group:Lt}=Tt,Gt=Tt.material;Gt.allowOverride===!0&&X!==null&&(Gt=X),yt.layers.test(Q.layers)&&Bl(yt,z,Q,Rt,Gt,Lt)}}function Bl(b,z,Q,X,q,Mt){A!==null&&q.isNodeMaterial&&A.setObject(b,q),b.onBeforeRender(L,z,Q,X,q,Mt),b.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),q.onBeforeRender(L,z,Q,X,b,Mt),q.transparent===!0&&q.side===Ve&&q.forceSinglePass===!1?(q.side=ze,q.needsUpdate=!0,L.renderBufferDirect(Q,z,X,q,b,Mt),q.side=Jn,q.needsUpdate=!0,L.renderBufferDirect(Q,z,X,q,b,Mt),q.side=Ve):L.renderBufferDirect(Q,z,X,q,b,Mt),b.onAfterRender(L,z,Q,X,q,Mt)}function tr(b,z,Q){z.isScene!==!0&&(z=ot);let X=G.get(b),q=S.state.lights,Mt=S.state.shadowsArray,Tt=q.state.version,yt=dt.getParameters(b,q.state,Mt,z,Q,S.state.lightProbeGridArray),Rt=dt.getProgramCacheKey(yt),Lt=X.programs;X.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?z.environment:null,X.fog=z.fog;let Gt=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;X.envMap=it.get(b.envMap||X.environment,Gt),X.envMapRotation=X.environment!==null&&b.envMap===null?z.environmentRotation:b.envMapRotation,Lt===void 0&&(b.addEventListener("dispose",dn),Lt=new Map,X.programs=Lt);let Yt=Lt.get(Rt);if(Yt!==void 0){if(X.currentProgram===Yt&&X.lightsStateVersion===Tt)return Vl(b,yt),Yt}else yt.uniforms=dt.getUniforms(b),A!==null&&b.isNodeMaterial&&A.build(b,Q,yt),b.onBeforeCompile(yt,L),Yt=dt.acquireProgram(yt,Rt),Lt.set(Rt,Yt),X.uniforms=yt.uniforms;let Pt=X.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Pt.clippingPlanes=gt.uniform),Vl(b,yt),X.needsLights=su(b),X.lightsStateVersion=Tt,X.needsLights&&(Pt.ambientLightColor.value=q.state.ambient,Pt.lightProbe.value=q.state.probe,Pt.sunLights.value=q.state.sun,Pt.sunLightShadows.value=q.state.sunShadow,Pt.directionalLights.value=q.state.directional,Pt.directionalLightShadows.value=q.state.directionalShadow,Pt.spotLights.value=q.state.spot,Pt.spotLightShadows.value=q.state.spotShadow,Pt.rectAreaLights.value=q.state.rectArea,Pt.ltc_1.value=q.state.rectAreaLTC1,Pt.ltc_2.value=q.state.rectAreaLTC2,Pt.pointLights.value=q.state.point,Pt.pointLightShadows.value=q.state.pointShadow,Pt.hemisphereLights.value=q.state.hemi,Pt.sunShadowMatrix.value=q.state.sunShadowMatrix,Pt.sunShadowCascade.value=q.state.sunShadowCascade,Pt.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Pt.spotLightMatrix.value=q.state.spotLightMatrix,Pt.spotLightMap.value=q.state.spotLightMap,Pt.pointShadowMatrix.value=q.state.pointShadowMatrix),X.lightProbeGrid=S.state.lightProbeGridArray.length>0,X.currentProgram=Yt,X.uniformsList=null,Yt}function zl(b){if(b.uniformsList===null){let z=b.currentProgram.getUniforms();b.uniformsList=Qi.seqWithValue(z.seq,b.uniforms)}return b.uniformsList}function Vl(b,z){let Q=G.get(b);Q.outputColorSpace=z.outputColorSpace,Q.batching=z.batching,Q.batchingColor=z.batchingColor,Q.instancing=z.instancing,Q.instancingColor=z.instancingColor,Q.instancingMorph=z.instancingMorph,Q.skinning=z.skinning,Q.morphTargets=z.morphTargets,Q.morphNormals=z.morphNormals,Q.morphColors=z.morphColors,Q.morphTargetsCount=z.morphTargetsCount,Q.numClippingPlanes=z.numClippingPlanes,Q.numIntersection=z.numClipIntersection,Q.vertexAlphas=z.vertexAlphas,Q.vertexTangents=z.vertexTangents,Q.toneMapping=z.toneMapping}function eu(b,z){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;_.setFromMatrixPosition(z.matrixWorld);for(let Q=0,X=b.length;Q<X;Q++){let q=b[Q];if(q.texture!==null&&q.boundingBox.containsPoint(_))return q}return null}function nu(b,z,Q,X,q){z.isScene!==!0&&(z=ot),Z.resetTextureUnits();let Mt=z.fog,Tt=X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial?z.environment:null,yt=K===null?L.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:Zt.workingColorSpace,Rt=X.isMeshStandardMaterial||X.isMeshLambertMaterial&&!X.envMap||X.isMeshPhongMaterial&&!X.envMap,Lt=it.get(X.envMap||Tt,Rt),Gt=X.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,Yt=!!Q.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Pt=!!Q.morphAttributes.position,ne=!!Q.morphAttributes.normal,ve=!!Q.morphAttributes.color,de=an;X.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(de=L.toneMapping);let le=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Pe=le!==void 0?le.length:0,wt=G.get(X),Fe=S.state.lights;if(Kt===!0&&(oe===!0||b!==H)){let ue=b===H&&X.id===k;gt.setState(X,b,ue)}let Qt=!1;X.version===wt.__version?(wt.needsLights&&wt.lightsStateVersion!==Fe.state.version||wt.outputColorSpace!==yt||q.isBatchedMesh&&wt.batching===!1||!q.isBatchedMesh&&wt.batching===!0||q.isBatchedMesh&&wt.batchingColor===!0&&q._colorsTexture===null||q.isBatchedMesh&&wt.batchingColor===!1&&q._colorsTexture!==null||q.isInstancedMesh&&wt.instancing===!1||!q.isInstancedMesh&&wt.instancing===!0||q.isSkinnedMesh&&wt.skinning===!1||!q.isSkinnedMesh&&wt.skinning===!0||q.isInstancedMesh&&wt.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&wt.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&wt.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&wt.instancingMorph===!1&&q.morphTexture!==null||wt.envMap!==Lt||X.fog===!0&&wt.fog!==Mt||wt.numClippingPlanes!==void 0&&(wt.numClippingPlanes!==gt.numPlanes||wt.numIntersection!==gt.numIntersection)||wt.vertexAlphas!==Gt||wt.vertexTangents!==Yt||wt.morphTargets!==Pt||wt.morphNormals!==ne||wt.morphColors!==ve||wt.toneMapping!==de||wt.morphTargetsCount!==Pe||!!wt.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(Qt=!0):(Qt=!0,wt.__version=X.version);let Qe=wt.currentProgram;Qt===!0&&(Qe=tr(X,z,q),A&&X.isNodeMaterial&&A.onUpdateProgram(X,Qe,wt));let fn=!1,Ln=!1,_i=!1,ae=Qe.getUniforms(),ge=wt.uniforms;if(g.useProgram(Qe.program)&&(fn=!0,Ln=!0,_i=!0),X.id!==k&&(k=X.id,Ln=!0),wt.needsLights){let ue=eu(S.state.lightProbeGridArray,q);wt.lightProbeGrid!==ue&&(wt.lightProbeGrid=ue,Ln=!0)}if(fn||H!==b){g.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),ae.setValue(N,"projectionMatrix",b.projectionMatrix),ae.setValue(N,"viewMatrix",b.matrixWorldInverse);let Nn=ae.map.cameraPosition;Nn!==void 0&&Nn.setValue(N,ce.setFromMatrixPosition(b.matrixWorld)),E.logarithmicDepthBuffer&&ae.setValue(N,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&ae.setValue(N,"isOrthographic",b.isOrthographicCamera===!0),H!==b&&(H=b,Ln=!0,_i=!0)}if(wt.needsLights&&(Fe.state.sunShadowMap.length>0&&ae.setValue(N,"sunShadowMap",Fe.state.sunShadowMap,Z),Fe.state.directionalShadowMap.length>0&&ae.setValue(N,"directionalShadowMap",Fe.state.directionalShadowMap,Z),Fe.state.spotShadowMap.length>0&&ae.setValue(N,"spotShadowMap",Fe.state.spotShadowMap,Z),Fe.state.pointShadowMap.length>0&&ae.setValue(N,"pointShadowMap",Fe.state.pointShadowMap,Z)),q.isSkinnedMesh){ae.setOptional(N,q,"bindMatrix"),ae.setOptional(N,q,"bindMatrixInverse");let ue=q.skeleton;ue&&(ue.boneTexture===null&&ue.computeBoneTexture(),ae.setValue(N,"boneTexture",ue.boneTexture,Z))}q.isBatchedMesh&&(ae.setOptional(N,q,"batchingTexture"),ae.setValue(N,"batchingTexture",q._matricesTexture,Z),ae.setOptional(N,q,"batchingIdTexture"),ae.setValue(N,"batchingIdTexture",q._indirectTexture,Z),ae.setOptional(N,q,"batchingColorTexture"),q._colorsTexture!==null&&ae.setValue(N,"batchingColorTexture",q._colorsTexture,Z));let Dn=Q.morphAttributes;if((Dn.position!==void 0||Dn.normal!==void 0||Dn.color!==void 0)&&F.update(q,Q,Qe),(Ln||wt.receiveShadow!==q.receiveShadow)&&(wt.receiveShadow=q.receiveShadow,ae.setValue(N,"receiveShadow",q.receiveShadow)),(X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial)&&X.envMap===null&&z.environment!==null&&(ge.envMapIntensity.value=z.environmentIntensity),ge.dfgLUT!==void 0&&(ge.dfgLUT.value=X0()),Ln){if(ae.setValue(N,"toneMappingExposure",L.toneMappingExposure),wt.needsLights&&iu(ge,_i),Mt&&X.fog===!0&&vt.refreshFogUniforms(ge,Mt),vt.refreshMaterialUniforms(ge,X,et,$,S.state.transmissionRenderTarget[b.id]),wt.needsLights&&wt.lightProbeGrid){let ue=wt.lightProbeGrid;ge.probesSH.value=ue.texture,ge.probesMin.value.copy(ue.boundingBox.min),ge.probesMax.value.copy(ue.boundingBox.max),ge.probesResolution.value.copy(ue.resolution)}Qi.upload(N,zl(wt),ge,Z)}if(X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Qi.upload(N,zl(wt),ge,Z),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&ae.setValue(N,"center",q.center),ae.setValue(N,"modelViewMatrix",q.modelViewMatrix),ae.setValue(N,"normalMatrix",q.normalMatrix),ae.setValue(N,"modelMatrix",q.matrixWorld),X.uniformsGroups!==void 0){let ue=X.uniformsGroups;for(let Nn=0,vi=ue.length;Nn<vi;Nn++){let Gl=ue[Nn];nt.update(Gl,Qe),nt.bind(Gl,Qe)}}return Qe}function iu(b,z){b.ambientLightColor.needsUpdate=z,b.lightProbe.needsUpdate=z,b.sunLights.needsUpdate=z,b.sunLightShadows.needsUpdate=z,b.directionalLights.needsUpdate=z,b.directionalLightShadows.needsUpdate=z,b.pointLights.needsUpdate=z,b.pointLightShadows.needsUpdate=z,b.spotLights.needsUpdate=z,b.spotLightShadows.needsUpdate=z,b.rectAreaLights.needsUpdate=z,b.hemisphereLights.needsUpdate=z}function su(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(b,z,Q){let X=G.get(b);X.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),G.get(b.texture).__webglTexture=z,G.get(b.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:Q,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,z){let Q=G.get(b);Q.__webglFramebuffer=z,Q.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(b,z=0,Q=0){K=b,B=z,V=Q;let X=null,q=!1,Mt=!1;if(b){let yt=G.get(b);if(yt.__useDefaultFramebuffer!==void 0){g.bindFramebuffer(N.FRAMEBUFFER,yt.__webglFramebuffer),Y.copy(b.viewport),st.copy(b.scissor),at=b.scissorTest,g.viewport(Y),g.scissor(st),g.setScissorTest(at),k=-1;return}else if(yt.__webglFramebuffer===void 0)Z.setupRenderTarget(b);else if(yt.__hasExternalTextures)Z.rebindTextures(b,G.get(b.texture).__webglTexture,G.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let Gt=b.depthTexture;if(yt.__boundDepthTexture!==Gt){if(Gt!==null&&G.has(Gt)&&(b.width!==Gt.image.width||b.height!==Gt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(b)}}let Rt=b.texture;(Rt.isData3DTexture||Rt.isDataArrayTexture||Rt.isCompressedArrayTexture)&&(Mt=!0);let Lt=G.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Lt[z])?X=Lt[z][Q]:X=Lt[z],q=!0):b.samples>0&&Z.useMultisampledRTT(b)===!1?X=G.get(b).__webglMultisampledFramebuffer:Array.isArray(Lt)?X=Lt[Q]:X=Lt,Y.copy(b.viewport),st.copy(b.scissor),at=b.scissorTest}else Y.copy(mt).multiplyScalar(et).floor(),st.copy(kt).multiplyScalar(et).floor(),at=xe;if(Q!==0&&(X=I),g.bindFramebuffer(N.FRAMEBUFFER,X)&&g.drawBuffers(b,X),g.viewport(Y),g.scissor(st),g.setScissorTest(at),q){let yt=G.get(b.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+z,yt.__webglTexture,Q)}else if(Mt){let yt=z;for(let Rt=0;Rt<b.textures.length;Rt++){let Lt=G.get(b.textures[Rt]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Rt,Lt.__webglTexture,Q,yt)}}else if(b!==null&&Q!==0){let yt=G.get(b.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,yt.__webglTexture,Q)}k=-1};function kl(b){let z=G.get(b);return(z.__readFormat!==b.format||z.__readType!==b.type)&&(z.__readFormat=b.format,z.__readType=b.type,z.__formatReadable=E.textureFormatReadable(b.format),z.__typeReadable=E.textureTypeReadable(b.type)),z}this.readRenderTargetPixels=function(b,z,Q,X,q,Mt,Tt,yt=0){if(!(b&&b.isWebGLRenderTarget)){Ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Rt=G.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Tt!==void 0&&(Rt=Rt[Tt]),Rt){g.bindFramebuffer(N.FRAMEBUFFER,Rt);try{let Lt=b.textures[yt],Gt=Lt.format,Yt=Lt.type;b.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+yt);let Pt=kl(Lt);if(Pt.__formatReadable===!1){Ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Pt.__typeReadable===!1){Ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=b.width-X&&Q>=0&&Q<=b.height-q&&N.readPixels(z,Q,X,q,ft.convert(Gt),ft.convert(Yt),Mt)}finally{let Lt=K!==null?G.get(K).__webglFramebuffer:null;g.bindFramebuffer(N.FRAMEBUFFER,Lt)}}},this.readRenderTargetPixelsAsync=async function(b,z,Q,X,q,Mt,Tt,yt=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Rt=G.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Tt!==void 0&&(Rt=Rt[Tt]),Rt)if(z>=0&&z<=b.width-X&&Q>=0&&Q<=b.height-q){g.bindFramebuffer(N.FRAMEBUFFER,Rt);let Lt=b.textures[yt],Gt=Lt.format,Yt=Lt.type;b.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+yt);let Pt=kl(Lt);if(Pt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Pt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ne=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,ne),N.bufferData(N.PIXEL_PACK_BUFFER,Mt.byteLength,N.STREAM_READ),N.readPixels(z,Q,X,q,ft.convert(Gt),ft.convert(Yt),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);let ve=K!==null?G.get(K).__webglFramebuffer:null;g.bindFramebuffer(N.FRAMEBUFFER,ve);let de=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Yc(N,de,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,ne),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,Mt),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(ne),N.deleteSync(de),Mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,z=null,Q=0){let X=Math.pow(2,-Q),q=Math.floor(b.image.width*X),Mt=Math.floor(b.image.height*X),Tt=z!==null?z.x:0,yt=z!==null?z.y:0;Z.setTexture2D(b,0),N.copyTexSubImage2D(N.TEXTURE_2D,Q,0,0,Tt,yt,q,Mt),g.unbindTexture()},this.copyTextureToTexture=function(b,z,Q=null,X=null,q=0,Mt=0){let Tt,yt,Rt,Lt,Gt,Yt,Pt,ne,ve,de=b.isCompressedTexture?b.mipmaps[Mt]:b.image;if(Q!==null)Tt=Q.max.x-Q.min.x,yt=Q.max.y-Q.min.y,Rt=Q.isBox3?Q.max.z-Q.min.z:1,Lt=Q.min.x,Gt=Q.min.y,Yt=Q.isBox3?Q.min.z:0;else{let ge=Math.pow(2,-q);Tt=Math.floor(de.width*ge),yt=Math.floor(de.height*ge),b.isDataArrayTexture?Rt=de.depth:b.isData3DTexture?Rt=Math.floor(de.depth*ge):Rt=1,Lt=0,Gt=0,Yt=0}X!==null?(Pt=X.x,ne=X.y,ve=X.z):(Pt=0,ne=0,ve=0);let le=ft.convert(z.format),Pe=ft.convert(z.type),wt;z.isData3DTexture?(Z.setTexture3D(z,0),wt=N.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(Z.setTexture2DArray(z,0),wt=N.TEXTURE_2D_ARRAY):(Z.setTexture2D(z,0),wt=N.TEXTURE_2D),g.activeTexture(N.TEXTURE0),g.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,z.flipY),g.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),g.pixelStorei(N.UNPACK_ALIGNMENT,z.unpackAlignment);let Fe=g.getParameter(N.UNPACK_ROW_LENGTH),Qt=g.getParameter(N.UNPACK_IMAGE_HEIGHT),Qe=g.getParameter(N.UNPACK_SKIP_PIXELS),fn=g.getParameter(N.UNPACK_SKIP_ROWS),Ln=g.getParameter(N.UNPACK_SKIP_IMAGES);g.pixelStorei(N.UNPACK_ROW_LENGTH,de.width),g.pixelStorei(N.UNPACK_IMAGE_HEIGHT,de.height),g.pixelStorei(N.UNPACK_SKIP_PIXELS,Lt),g.pixelStorei(N.UNPACK_SKIP_ROWS,Gt),g.pixelStorei(N.UNPACK_SKIP_IMAGES,Yt);let _i=b.isDataArrayTexture||b.isData3DTexture,ae=z.isDataArrayTexture||z.isData3DTexture;if(b.isDepthTexture){let ge=G.get(b),Dn=G.get(z),ue=G.get(ge.__renderTarget),Nn=G.get(Dn.__renderTarget);g.bindFramebuffer(N.READ_FRAMEBUFFER,ue.__webglFramebuffer),g.bindFramebuffer(N.DRAW_FRAMEBUFFER,Nn.__webglFramebuffer);for(let vi=0;vi<Rt;vi++)_i&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,G.get(b).__webglTexture,q,Yt+vi),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,G.get(z).__webglTexture,Mt,ve+vi)),N.blitFramebuffer(Lt,Gt,Tt,yt,Pt,ne,Tt,yt,N.DEPTH_BUFFER_BIT,N.NEAREST);g.bindFramebuffer(N.READ_FRAMEBUFFER,null),g.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(q!==0||b.isRenderTargetTexture||G.has(b)){let ge=G.get(b),Dn=G.get(z);g.bindFramebuffer(N.READ_FRAMEBUFFER,P),g.bindFramebuffer(N.DRAW_FRAMEBUFFER,U);for(let ue=0;ue<Rt;ue++)_i?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,ge.__webglTexture,q,Yt+ue):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,ge.__webglTexture,q),ae?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Dn.__webglTexture,Mt,ve+ue):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Dn.__webglTexture,Mt),q!==0?N.blitFramebuffer(Lt,Gt,Tt,yt,Pt,ne,Tt,yt,N.COLOR_BUFFER_BIT,N.NEAREST):ae?N.copyTexSubImage3D(wt,Mt,Pt,ne,ve+ue,Lt,Gt,Tt,yt):N.copyTexSubImage2D(wt,Mt,Pt,ne,Lt,Gt,Tt,yt);g.bindFramebuffer(N.READ_FRAMEBUFFER,null),g.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else ae?b.isDataTexture||b.isData3DTexture?N.texSubImage3D(wt,Mt,Pt,ne,ve,Tt,yt,Rt,le,Pe,de.data):z.isCompressedArrayTexture?N.compressedTexSubImage3D(wt,Mt,Pt,ne,ve,Tt,yt,Rt,le,de.data):N.texSubImage3D(wt,Mt,Pt,ne,ve,Tt,yt,Rt,le,Pe,de):b.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,Mt,Pt,ne,Tt,yt,le,Pe,de.data):b.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,Mt,Pt,ne,de.width,de.height,le,de.data):N.texSubImage2D(N.TEXTURE_2D,Mt,Pt,ne,Tt,yt,le,Pe,de);g.pixelStorei(N.UNPACK_ROW_LENGTH,Fe),g.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Qt),g.pixelStorei(N.UNPACK_SKIP_PIXELS,Qe),g.pixelStorei(N.UNPACK_SKIP_ROWS,fn),g.pixelStorei(N.UNPACK_SKIP_IMAGES,Ln),Mt===0&&z.generateMipmaps&&N.generateMipmap(wt),g.unbindTexture()},this.initRenderTarget=function(b){G.get(b).__webglFramebuffer===void 0&&Z.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Z.setTextureCube(b,0):b.isData3DTexture?Z.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Z.setTexture2DArray(b,0):Z.setTexture2D(b,0),g.unbindTexture()},this.resetState=function(){B=0,V=0,K=null,g.reset(),lt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return on}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Zt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Zt._getUnpackColorSpace()}};var ti=`
uniform float uTime;
uniform vec3 uMoonDir;
uniform vec2 uCityDir;
uniform float uCityBearing;
uniform float uCitySpread;
uniform float uCityElTop;
uniform sampler2D uNoise;
uniform float uFog;

float hash12(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
float hash13(vec3 p3){ p3 = fract(p3 * 0.1031); p3 += dot(p3, p3.zyx + 31.32); return fract((p3.x + p3.y) * p3.z); }
vec3 hash33(vec3 p3){ p3 = fract(p3 * vec3(0.1031, 0.1030, 0.0973)); p3 += dot(p3, p3.yxz + 33.33); return fract((p3.xxy + p3.yxx) * p3.zyx); }

vec3 skyColor(vec3 dir){
  float h = dir.y;
  float hp = max(h, 0.0);
  vec3 zenith  = vec3(0.008, 0.016, 0.040);
  vec3 mid     = vec3(0.020, 0.038, 0.086);
  vec3 horizon = vec3(0.085, 0.098, 0.145);
  vec3 col = mix(horizon, mid, smoothstep(0.0, 0.20, hp));
  col = mix(col, zenith, smoothstep(0.16, 0.9, hp));
  // Freetown's glow on the horizon
  vec2 dxz = normalize(dir.xz + vec2(1e-5));
  float ca = max(dot(dxz, uCityDir), 0.0);
  col += vec3(0.34, 0.16, 0.06) * pow(ca, 5.0) * (exp(-hp * 11.0) * 0.5 + exp(-hp * 40.0) * 0.35);
  // warm haze low everywhere
  col += vec3(0.045, 0.034, 0.032) * exp(-hp * 26.0);
  // moon glow
  float md = max(dot(dir, uMoonDir), 0.0);
  col += vec3(0.52, 0.50, 0.44) * (pow(md, 9.0) * 0.06 + pow(md, 90.0) * 0.18 + pow(md, 1400.0) * 0.45);
  if (h < 0.0) col = mix(horizon * 0.85, vec3(0.010, 0.015, 0.026), smoothstep(0.0, -0.12, h));
  return col;
}

vec3 fogColor(vec3 v){ return skyColor(normalize(vec3(v.x, 0.012, v.z))); }

vec3 applyFog(vec3 col, vec3 wp){
  vec3 d = wp - cameraPosition;
  float dist = length(d);
  float f = 1.0 - exp(-dist * uFog);
  return mix(col, fogColor(d / dist), f);
}

vec3 dither(vec3 c){ return c + (hash12(gl_FragCoord.xy + fract(uTime * 7.0) * 91.0) - 0.5) / 255.0; }
`,Jo=`
uniform vec4 uRegion;
uniform sampler2D uLightMap;
uniform float uLightGain;
uniform vec3 uSpotPos[2];
uniform vec3 uSpotDir[2];
uniform vec3 uSpotCol[2];
uniform vec2 uSpotCone[2];
uniform float uSpotRange[2];

vec2 regionUV(vec2 xz){ return (xz - uRegion.xy) / uRegion.zw; }
float inRegion(vec2 uv){ return step(0.0, uv.x) * step(uv.x, 1.0) * step(0.0, uv.y) * step(uv.y, 1.0); }
vec3 bakedLight(vec2 xz){ vec2 uv = regionUV(xz); return texture2D(uLightMap, uv).rgb * uLightGain * inRegion(uv); }

vec3 spot(vec3 sp, vec3 sd, vec3 sc, vec2 cone, float range, vec3 wp, vec3 n){
  vec3 L = sp - wp;
  float d = length(L);
  L /= max(d, 1e-3);
  float cd = dot(-L, sd);
  float c = smoothstep(cone.x, cone.y, cd);
  float att = 1.0 / (1.0 + d * d * 0.0011) * (1.0 - smoothstep(range * 0.5, range, d));
  return sc * c * att * max(dot(n, L), 0.0);
}

vec3 sceneLight(vec3 wp, vec3 n){
  vec3 amb = vec3(0.15, 0.18, 0.26) * (0.5 + 0.5 * max(dot(n, uMoonDir), 0.0));
  vec3 l = amb + bakedLight(wp.xz);
  l += spot(uSpotPos[0], uSpotDir[0], uSpotCol[0], uSpotCone[0], uSpotRange[0], wp, n);
  l += spot(uSpotPos[1], uSpotDir[1], uSpotCol[1], uSpotCone[1], uSpotRange[1], wp, n);
  return l;
}
`,q0=`
varying vec3 vWorld;
void main(){
  vec4 w = modelMatrix * vec4(position, 1.0);
  vWorld = w.xyz;
  gl_Position = projectionMatrix * viewMatrix * w;
}
`,Eh={vertex:`
    varying vec3 vDir;
    void main(){
      vDir = position;
      vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      gl_Position = p.xyww;
    }`,fragment:ti+`
    varying vec3 vDir;
    float starField(vec3 dir){
      vec3 p = dir * 290.0;
      vec3 id = floor(p);
      float h = hash13(id);
      if (h < 0.9915) return 0.0;
      vec3 c = id + 0.5 + (hash33(id) - 0.5) * 0.7;
      float d = length(p - c);
      float b = (h - 0.9915) / 0.0085;
      float tw = 0.62 + 0.38 * sin(uTime * (1.3 + 3.0 * b) + h * 97.0);
      return smoothstep(0.32, 0.0, d) * (0.18 + b * b * 1.5) * tw;
    }
    void main(){
      vec3 dir = normalize(vDir);
      vec3 col = skyColor(dir);
      // Milky-way-ish band of faint dust
      float band = exp(-pow(dot(dir, normalize(vec3(0.35, 0.6, 0.72))), 2.0) * 14.0);
      col += vec3(0.020, 0.022, 0.032) * band * texture2D(uNoise, dir.xz * 1.4 + dir.y).r * smoothstep(0.05, 0.4, dir.y);
      col += vec3(0.88, 0.92, 1.0) * starField(dir) * smoothstep(0.015, 0.14, dir.y) * (1.0 - smoothstep(0.9993, 0.9999, dot(dir, uMoonDir)) * 0.0);
      float md = dot(dir, uMoonDir);
      float disc = smoothstep(0.999915, 0.999945, md);
      if (disc > 0.0) {
        vec3 t = normalize(cross(uMoonDir, vec3(0.0, 1.0, 0.0)));
        vec3 b = cross(t, uMoonDir);
        vec2 mu = vec2(dot(dir, t), dot(dir, b)) / 0.0116;
        float maria = texture2D(uNoise, mu * 0.33 + 0.37).r;
        float limb = sqrt(max(0.0, 1.0 - dot(mu, mu)));
        vec3 mc = vec3(1.0, 0.95, 0.84) * (1.12 - smoothstep(0.5, 0.72, maria) * 0.14) * (0.86 + 0.14 * limb);
        col = mix(col, mc, disc);
      }
      gl_FragColor = vec4(dither(col), 1.0);
    }`},Ch={vertex:q0,fragment:ti+Jo+`
    uniform sampler2D uWaterN;
    uniform sampler2D uAlbedo;
    uniform vec4 uYardO; // the resort garden (YARD): origin xz, road direction xz
    uniform vec4 uYardR; // and its extent in the resort frame: u0, u1, w0, w1
    varying vec3 vWorld;

    float smin(float a, float b, float k){ float h = clamp(0.5 + 0.5 * (b - a) / k, 0.0, 1.0); return mix(b, a, h) - k * h * (1.0 - h); }
    float shoreX(float z){ return 6900.0 + 350.0 * sin(z * 0.00031) + 180.0 * sin(z * 0.00083 + 1.3) + 90.0 * sin(z * 0.0021 + 0.4); }

    float coast(vec2 p){
      float w1 = (texture2D(uNoise, vec2(0.37, p.y * 0.000055)).r - 0.5) * 1500.0 + (texture2D(uNoise, vec2(0.71, p.y * 0.00042)).g - 0.5) * 300.0;
      float w2 = (texture2D(uNoise, vec2(p.x * 0.000055, 0.83)).r - 0.5) * 1500.0 + (texture2D(uNoise, vec2(p.x * 0.00042, 0.19)).g - 0.5) * 300.0;
      float a = 4300.0 + w1 - p.x;
      float b = 5200.0 + w2 - p.y;
      return smin(a, b, 900.0);
    }

    vec3 landAlbedo(vec2 p){
      float n1 = texture2D(uNoise, p * 0.00032).r;
      float n2 = texture2D(uNoise, p * 0.0025 + 0.5).g;
      float n3 = texture2D(uNoise, p * 0.019).b;
      vec3 veg  = vec3(0.050, 0.064, 0.046);
      vec3 dark = vec3(0.022, 0.030, 0.024);
      vec3 soil = vec3(0.105, 0.075, 0.052);
      vec3 c = mix(veg, dark, smoothstep(0.42, 0.68, n1));
      c = mix(c, soil, smoothstep(0.6, 0.8, n2) * 0.75);
      return c * (0.78 + 0.44 * n3);
    }

    float runwayPaint(vec2 rw){
      float ax = abs(rw.x);
      float paint = step(21.2, ax) * step(ax, 22.1);
      if (rw.y > 6.0 && rw.y < 36.0 && ax > 3.0 && ax < 20.0) paint = max(paint, step(fract((ax - 3.0) / 3.4), 0.55));
      if (rw.y > 150.0 && ax < 0.45) paint = max(paint, step(fract((rw.y - 150.0) / 50.0), 0.6));
      if (rw.y > 400.0 && rw.y < 445.0 && ax > 8.0 && ax < 17.0) paint = 1.0;
      for (int i = 1; i <= 6; i++) {
        float y0 = 150.0 * float(i);
        if (i != 3 && rw.y > y0 && rw.y < y0 + 22.5 && ax > 8.0 && ax < 15.0) paint = max(paint, step(fract((ax - 8.0) / 2.4), 0.55));
      }
      return paint;
    }

    vec3 shadeWater(vec3 wp, vec3 v, float dist){
      vec2 uv1 = wp.xz * 0.0042 + vec2(uTime * 0.012, uTime * 0.007);
      vec2 uv2 = wp.xz * 0.0107 + vec2(-uTime * 0.009, uTime * 0.013);
      vec2 g = (texture2D(uWaterN, uv1).xy * 2.0 - 1.0) + (texture2D(uWaterN, uv2).xy * 2.0 - 1.0) * 0.7;
      float s = 0.34 / (1.0 + dist * 0.00032);
      vec3 n = normalize(vec3(-g.x * s, 1.0, -g.y * s));
      vec3 r = reflect(v, n);
      r.y = abs(r.y) + 0.0005;
      float cosv = max(dot(-v, n), 0.0);
      float fres = 0.02 + 0.98 * pow(1.0 - cosv, 5.0);
      vec3 refl = skyColor(r);
      // fine ripples only for the glints
      vec2 g2 = texture2D(uWaterN, wp.xz * 0.043 + vec2(uTime * 0.05, -uTime * 0.03)).xy * 2.0 - 1.0;
      vec3 n2 = normalize(n + vec3(-g2.x, 0.0, -g2.y) * s * 1.6);
      vec3 r2 = reflect(v, n2);
      float md = max(dot(r, uMoonDir), 0.0);
      float md2 = max(dot(r2, uMoonDir), 0.0);
      vec3 moon = vec3(1.0, 0.9, 0.74) * (pow(md2, 2600.0) * 9.0 + pow(md, 220.0) * 0.32);
      vec3 deep = vec3(0.005, 0.010, 0.017);
      vec3 col = mix(deep, refl, fres) + moon * (0.25 + fres);
      // Freetown's lights, broken up by the swell
      float az = atan(r.x, -r.z);
      float da = az - uCityBearing;
      da = mod(da + 3.14159265, 6.2831853) - 3.14159265;
      float band = exp(-da * da / (uCitySpread * uCitySpread));
      float vert = step(0.0, r.y) * (1.0 - smoothstep(0.0, uCityElTop, r.y));
      float streak = texture2D(uNoise, vec2(az * 42.0, r.y * 1.6 + uTime * 0.02)).b;
      col += vec3(1.0, 0.56, 0.22) * band * vert * pow(streak, 4.0) * 2.2 * (0.25 + fres);
      return col;
    }

    void main(){
      vec3 wp = vWorld;
      // Freetown's hills own everything past the far shore
      if (wp.z > -22000.0 && wp.z < 5500.0 && wp.x > shoreX(wp.z) + 8.0) discard;
      // the garden has its own, finer ground; leaving the hole stops the two fighting for depth
      vec2 rel = wp.xz - uYardO.xy;
      vec2 lq = vec2(dot(rel, uYardO.zw), dot(rel, vec2(-uYardO.w, uYardO.z)));
      if (lq.x > uYardR.x + 0.2 && lq.x < uYardR.y - 0.2 && lq.y > uYardR.z + 0.2 && lq.y < uYardR.w - 0.2) discard;
      vec3 d = wp - cameraPosition;
      float dist = length(d);
      vec3 v = d / dist;
      float c = coast(wp.xz);
      vec3 col;
      if (c < 0.0) {
        col = shadeWater(wp, v, dist);
        // faint surf line
        float surf = smoothstep(-40.0, -3.0, c) * (0.5 + 0.5 * sin(c * 0.35 + uTime * 1.2));
        col += vec3(0.05, 0.06, 0.07) * surf * 0.35;
      } else {
        vec3 n = vec3(0.0, 1.0, 0.0);
        vec3 alb = landAlbedo(wp.xz);
        vec2 ruv = regionUV(wp.xz);
        vec4 a = texture2D(uAlbedo, ruv) * inRegion(ruv);
        alb = alb * (1.0 - a.a) + a.rgb;
        vec2 rw = vec2(wp.x, -wp.z);
        if (abs(rw.x) < 22.6 && rw.y > 0.0 && rw.y < 3200.0) {
          float tyre = (rw.y > 200.0 && rw.y < 1100.0 && abs(rw.x) < 9.0) ? texture2D(uNoise, vec2(rw.x * 0.25, rw.y * 0.004)).g : 0.0;
          alb *= 1.0 - smoothstep(0.5, 0.8, tyre) * 0.5;
          alb = mix(alb, vec3(0.46, 0.46, 0.44), runwayPaint(rw) * 0.9);
        }
        alb *= mix(0.55, 1.0, smoothstep(0.0, 35.0, c));
        col = alb * sceneLight(wp, n);
      }
      col = applyFog(col, wp);
      gl_FragColor = vec4(dither(col), 1.0);
    }`},Rh={vertex:`
    varying vec3 vWorld;
    varying vec3 vNormal;
    void main(){
      vec4 w = modelMatrix * vec4(position, 1.0);
      vWorld = w.xyz;
      vNormal = normalize(mat3(modelMatrix) * normal);
      gl_Position = projectionMatrix * viewMatrix * w;
    }`,fragment:ti+`
    uniform float uCityZ;
    uniform float uCityZSpread;
    varying vec3 vWorld;
    varying vec3 vNormal;
    void main(){
      vec3 n = normalize(vNormal);
      float moonL = max(dot(n, uMoonDir), 0.0);
      float tex = texture2D(uNoise, vWorld.xz * 0.0011).r;
      vec3 col = vec3(0.010, 0.014, 0.018) * (0.7 + 0.6 * tex) + vec3(0.045, 0.05, 0.058) * moonL * 0.55;
      float dz = (vWorld.z - uCityZ) / uCityZSpread;
      float city = exp(-dz * dz);
      col += vec3(0.24, 0.10, 0.035) * city * exp(-max(vWorld.y, 0.0) / 140.0) * 0.32;
      vec3 dd = vWorld - cameraPosition;
      float dist = length(dd);
      col = mix(col, fogColor(dd / dist) * 0.8, (1.0 - exp(-dist * uFog * 0.55)));
      gl_FragColor = vec4(dither(col), 1.0);
    }`},Tl={vertex:`
    attribute vec2 fc;
    attribute vec4 bdata;
    varying vec3 vWorld;
    varying vec3 vN;
    varying vec2 vFc;
    varying vec4 vB;
    void main(){
      vWorld = position;
      vN = normal;
      vFc = fc;
      vB = bdata;
      gl_Position = projectionMatrix * viewMatrix * vec4(position, 1.0);
    }`,fragment:ti+Jo+`
    varying vec3 vWorld;
    varying vec3 vN;
    varying vec2 vFc;
    varying vec4 vB;
    uniform vec4 uPorch[32]; // the resort's porch and pavilion lights: xyz, strength
    uniform vec3 uPorchCol;

    vec3 porchLight(vec3 wp, vec3 n){
      vec3 acc = vec3(0.0);
      for (int i = 0; i < 32; i++) {
        vec4 L = uPorch[i];
        if (L.w <= 0.0) continue;
        vec3 d = L.xyz - wp;
        float d2 = dot(d, d);
        vec3 l = d * inversesqrt(max(d2, 1e-4));
        float ndl = max(dot(n, l), 0.0) * 0.75 + 0.25;
        acc += L.w * ndl / (1.0 + d2 * 0.42);
      }
      return acc * uPorchCol;
    }

    // the resort: villas, pavilion, gatehouse, walls (materials 6-15, see resort.js)
    vec4 resortShade(vec3 n, float type){
      float x = vFc.x;
      float y = vFc.y;
      vec3 alb = vec3(0.5);
      vec3 emit = vec3(0.0);
      float porchK = 1.0;
      if (type < 6.5) {                       // pink plaster, with windows and the door
        alb = vec3(0.80, 0.50, 0.42) * (0.94 + 0.12 * texture2D(uNoise, vWorld.xz * 0.21 + y * 0.13).r);
        // bdata.w: 0 plain wall, 2 windows, 100 + x = front wall with the door at x
        float mode = vB.w;
        if (mode > 0.5) {
          float doorX = mode > 99.0 ? mode - 100.0 : 1.6;
          float m = 3.0;
          float cell = floor((x - doorX) / m + 0.5);
          float lx = x - doorX - cell * m;
          if (mode > 99.0 && abs(cell) < 0.5) {
            // black door in a cream surround, with a lit fanlight
            float d = step(abs(lx), 0.62) * step(y, 2.3);
            float surround = step(abs(lx), 0.8) * step(y, 2.5) * (1.0 - d);
            alb = mix(alb, vec3(0.86, 0.78, 0.6), surround);
            float panel = step(abs(abs(lx) - 0.31), 0.014) + step(abs(y - 1.15), 0.014);
            alb = mix(alb, vec3(0.03, 0.028, 0.03) * (1.0 + panel * 2.0), d);
            emit += vec3(1.0, 0.72, 0.42) * 0.9 * step(abs(lx), 0.55) * step(2.33, y) * step(y, 2.45);
          } else {
            // windows on a 3 m grid round the door: white frames, glass lit warm or dark
            float win = step(abs(lx), 0.62) * step(0.82, y) * step(y, 2.38);
            float frame = win * (1.0 - step(abs(lx), 0.52) * step(0.92, y) * step(y, 2.28));
            float mullion = win * step(abs(lx), 0.035) * (1.0 - frame);
            float h = hash12(vec2(cell, vB.x * 37.0));
            float lit = step(h, vB.y);
            vec3 glow = mix(vec3(1.0, 0.70, 0.40), vec3(1.0, 0.80, 0.55), hash12(vec2(h, 3.0))) * (0.8 + 0.3 * (y - 0.9));
            vec3 glass = mix(vec3(0.03, 0.035, 0.045), glow * 1.25, lit);
            float pane = win * (1.0 - frame) * (1.0 - mullion);
            alb = mix(alb, vec3(0.92, 0.91, 0.88), max(frame, mullion));
            emit += glass * pane;
            alb *= 1.0 - pane;
          }
        }
      } else if (type < 7.5) {                // red brick, running bond with pale mortar
        float row = floor(y / 0.078);
        float bx = x / 0.235 + mod(row, 2.0) * 0.5;
        float mort = max(step(fract(y / 0.078), 0.14), step(fract(bx), 0.06));
        float v = hash12(vec2(floor(bx), row));
        alb = mix(vec3(0.46, 0.17, 0.12) * (0.75 + 0.4 * v), vec3(0.62, 0.55, 0.48), mort);
      } else if (type < 8.5) {                // maroon standing-seam metal roof
        float seam = 1.0 - smoothstep(0.0, 0.05, abs(fract(x / 0.48) - 0.5) * 0.48);
        alb = vec3(0.34, 0.075, 0.07) * (1.0 - seam * 0.45) * (0.9 + 0.2 * texture2D(uNoise, vWorld.xz * 0.05).g);
        porchK = 0.15;
        float sheen = pow(max(dot(reflect(normalize(vWorld - cameraPosition), n), uMoonDir), 0.0), 18.0);
        emit += vec3(0.30, 0.22, 0.24) * sheen * 0.35;
      } else if (type < 9.5) {                // cream columns and trim
        alb = vec3(0.88, 0.80, 0.62);
        float flute = 0.92 + 0.08 * step(0.5, fract(x / 0.075));
        alb *= flute;
      } else if (type < 10.5) {               // porch front: pink arches and frieze, white balustrade
        float bay = vB.w;
        float bx = mod(x, bay);
        float dp = min(bx, bay - bx);
        float pier = 0.27;
        float halfOpen = bay * 0.5 - pier;
        float ax = (bx - bay * 0.5) / max(halfOpen, 0.1);
        float spring = 2.05;
        float crown = spring + min(halfOpen, 0.42);
        // a shallow arch on stepped shoulders, springing from the column capitals
        float archTop = dp < pier + 0.2 ? spring - 0.16 : spring + sqrt(max(0.0, 1.0 - ax * ax)) * (crown - spring);
        float opening = step(pier, dp) * step(y, archTop);
        float bayMid = (floor(x / bay) + 0.5) * bay;
        float doorBay = vB.y > 0.0 ? step(abs(bayMid - vB.y), bay * 0.45) : 0.0;
        alb = vec3(0.80, 0.50, 0.42) * (0.94 + 0.12 * texture2D(uNoise, vWorld.xz * 0.21 + y * 0.13).r);
        if (opening > 0.5) {
          if (y > 0.95 || doorBay > 0.5) discard;
          float topRail = step(0.83, y);
          float botRail = step(y, 0.11);
          float bp = abs(mod(bx, 0.19) - 0.095);
          float t = clamp((y - 0.11) / 0.72, 0.0, 1.0);
          float bw = 0.028 + 0.03 * sin(t * 3.14159) * (0.6 + 0.4 * sin(t * 9.42));
          float baluster = step(bp, bw);
          if (topRail + botRail + baluster < 0.5) discard;
          alb = vec3(0.93, 0.93, 0.90);
        } else {
          // the arch's edge, and the ribbed band of plaster above
          float edge = (1.0 - step(pier + 0.07, dp)) * step(pier, dp) + step(abs(y - archTop - 0.04), 0.04) * step(pier, dp);
          float ribs = step(crown + 0.08, y) * step(fract(y / 0.085), 0.3);
          alb *= 1.0 - min(edge, 1.0) * 0.12 - ribs * 0.2;
        }
      } else if (type < 11.5) {               // pavilion columns, pale blue
        alb = vec3(0.50, 0.68, 0.76);
      } else if (type < 12.5) {               // fascia boards, soffits, beams
        alb = vec3(0.17, 0.18, 0.20);
      } else if (type < 13.5) {               // grey floor tiles
        float gl = max(step(fract(x / 0.6), 0.04), step(fract(y / 0.6), 0.04));
        alb = vec3(0.42, 0.42, 0.44) * (1.0 - gl * 0.35);
      } else if (type < 14.5) {               // wrought-iron railing
        float bar = step(abs(mod(x, 0.13) - 0.065), 0.012);
        float rails = step(0.88, y) + step(y, 0.08) + step(abs(y - 0.5), 0.02);
        if (bar + rails < 0.5) discard;
        alb = vec3(0.025, 0.025, 0.03);
        porchK = 0.4;
      } else if (type < 15.5) {               // perimeter wall
        alb = vec3(0.56, 0.56, 0.54) * (0.9 + 0.15 * texture2D(uNoise, vWorld.xz * 0.11 + y * 0.2).b);
        alb *= 1.0 - step(2.25, y) * 0.3;
      } else {                                 // grey fascia boards, stepped, with the gutter on top
        alb = vec3(0.40, 0.41, 0.43) * (1.0 - step(abs(y - 0.12), 0.015) * 0.4 - step(abs(y - 0.24), 0.015) * 0.4);
        alb *= 1.0 - step(0.31, y) * 0.45;
        porchK = 0.5;
      }
      float height = max(vWorld.y, 0.0);
      vec3 light = vec3(0.11, 0.13, 0.19) * (0.45 + 0.55 * max(dot(n, uMoonDir), 0.0));
      light += spot(uSpotPos[1], uSpotDir[1], uSpotCol[1], uSpotCone[1], uSpotRange[1], vWorld, n);
      light += bakedLight(vWorld.xz + n.xz * 1.5) * exp(-height / 2.4) * 0.9 * (1.0 - step(0.5, n.y) * 0.7);
      light += porchLight(vWorld, n) * porchK;
      return vec4(alb * light + emit, 1.0);
    }

    void main(){
      vec3 n = normalize(vN);
      float type = vB.z;
      if (type > 5.5) {
        vec3 rc = resortShade(n, type).rgb;
        rc = applyFog(rc, vWorld);
        gl_FragColor = vec4(dither(rc), 1.0);
        return;
      }
      vec3 alb = vec3(0.16, 0.15, 0.14);
      if (type > 0.5 && type < 1.5) alb = vec3(0.22, 0.22, 0.23);      // terminal
      else if (type > 1.5 && type < 2.5) alb = vec3(0.62, 0.56, 0.48); // resort, warm plaster
      else if (type > 2.5 && type < 3.5) alb = vec3(0.30, 0.27, 0.24); // resort wall
      else if (type > 3.5 && type < 4.5) alb = vec3(0.30, 0.20, 0.13); // pavilion roof (thatch)
      else if (type > 4.5) alb = vec3(0.10, 0.10, 0.11);                // vehicle
      float roof = step(0.5, n.y);
      alb *= mix(1.0, 0.55, roof);
      float height = max(vWorld.y, 0.0);
      vec3 light = vec3(0.11, 0.13, 0.19) * (0.5 + 0.5 * max(dot(n, uMoonDir), 0.0));
      light += spot(uSpotPos[0], uSpotDir[0], uSpotCol[0], uSpotCone[0], uSpotRange[0], vWorld, n);
      light += spot(uSpotPos[1], uSpotDir[1], uSpotCol[1], uSpotCone[1], uSpotRange[1], vWorld, n);
      // light pooled on the ground washes the bottom of walls
      vec3 baked = bakedLight(vWorld.xz + n.xz * 6.0);
      light += baked * mix(exp(-height / 3.8) * 1.1, 0.12, roof);
      vec3 col = alb * light;
      // resort facade uplight
      if (type > 1.5 && type < 2.5) col += alb * vec3(1.0, 0.78, 0.5) * exp(-height / 2.6) * (1.0 - roof) * 0.42;
      // windows
      float winType = vB.w;
      if (roof < 0.5 && winType > 2.5) {
        // resort house: two floors of rooms, balcony rails upstairs, a plain fascia on top
        float y = vFc.y;
        float fascia = step(7.2, y);
        vec2 q = vec2(vFc.x / 4.2, y / 3.6);
        vec2 id = floor(q);
        vec2 f = fract(q);
        float ground = 1.0 - step(1.0, id.y);
        float win = step(0.2, f.x) * step(f.x, 0.8) * step(ground > 0.5 ? 0.06 : 0.16, f.y) * step(f.y, 0.82) * (1.0 - fascia);
        float h = hash12(id + vB.x * 17.0);
        float lit = step(h, vB.y);
        float curtain = step(0.55, hash12(id * 1.7 + 3.0));
        vec3 wc = mix(vec3(1.0, 0.74, 0.44), vec3(1.0, 0.62, 0.32), curtain) * mix(1.05, 0.75, curtain);
        wc *= 0.78 + 0.35 * f.y;
        vec3 glass = vec3(0.014, 0.018, 0.026);
        col = mix(col, mix(glass, wc, lit), win);
        // balcony rail + slab edge upstairs
        float rail = step(3.62, y) * step(y, 4.55) * (1.0 - fascia);
        col = mix(col, col * 0.35 + vec3(0.02), rail * 0.85);
        float slab = step(3.5, y) * step(y, 3.72);
        col = mix(col, alb * 0.25, slab);
        // fascia: a quiet dark band that carries the sign
        col = mix(col, alb * vec3(0.16, 0.14, 0.13) + alb * vec3(1.0, 0.8, 0.55) * 0.05, fascia);
      } else if (roof < 0.5 && winType > 0.5) {
        vec2 cellSize = winType > 1.5 ? vec2(3.6, 3.3) : vec2(3.0, 2.9);
        vec2 q = vFc / cellSize;
        vec2 id = floor(q);
        vec2 f = fract(q);
        float win = step(0.22, f.x) * step(f.x, 0.78) * step(0.28, f.y) * step(f.y, 0.8);
        float h = hash12(id + vB.x * 17.0);
        float lit = step(h, vB.y);
        vec3 wc = mix(vec3(1.0, 0.72, 0.42), vec3(1.0, 0.86, 0.66), hash12(id * 3.1 + vB.x));
        if (winType > 1.5) wc = mix(vec3(0.85, 0.9, 1.0), vec3(1.0, 0.84, 0.6), step(0.5, hash12(id + 9.0)));
        vec3 glass = vec3(0.012, 0.016, 0.024);
        col = mix(col, mix(glass, wc * 1.2, lit), win);
      }
      col = applyFog(col, vWorld);
      gl_FragColor = vec4(dither(col), 1.0);
    }`},Ph={vertex:`
    attribute vec3 offset;
    attribute vec4 pdata;   // height, atlas idx, flip, uplight
    attribute vec3 tint;
    varying vec2 vUv;
    varying float vIdx;
    varying vec3 vTint;
    varying float vUp;
    varying vec3 vWorld;
    void main(){
      vec3 toCam = cameraPosition - offset;
      vec3 camDir = normalize(vec3(toCam.x, 0.0, toCam.z));
      vec3 right = normalize(cross(vec3(0.0, 1.0, 0.0), camDir));
      float h = pdata.x;
      float w = h * 0.5;
      float flip = pdata.z > 0.0 ? 1.0 : -1.0;
      vec3 p = offset + right * (position.x * w * flip) + vec3(0.0, (position.y + 0.5) * h, 0.0);
      vUv = vec2(position.x + 0.5, position.y + 0.5);
      vIdx = pdata.y;
      vTint = tint;
      vUp = pdata.w;
      vWorld = p;
      gl_Position = projectionMatrix * viewMatrix * vec4(p, 1.0);
    }`,fragment:ti+`
    uniform sampler2D uPalm;
    varying vec2 vUv;
    varying float vIdx;
    varying vec3 vTint;
    varying float vUp;
    varying vec3 vWorld;
    void main(){
      vec2 auv = vec2((vIdx + clamp(vUv.x, 0.002, 0.998)) / 4.0, vUv.y);
      float a = texture2D(uPalm, auv).a;
      if (a < 0.45) discard;
      vec3 col = vec3(0.003, 0.005, 0.005);
      float y = vUv.y;
      float trunk = 1.0 - smoothstep(0.62, 0.74, y);
      float crown = smoothstep(0.62, 0.74, y);
      // grazing uplight: bright at the foot, fading up the trunk; crown lit from below at its core
      float cx = abs(vUv.x - 0.5) * 2.0;
      float under = crown * (1.0 - smoothstep(0.0, 0.75, cx)) * (1.0 - smoothstep(0.7, 0.95, y));
      col += vTint * vUp * (trunk * pow(1.0 - y, 1.6) * 1.1 + under * 0.35);
      col += vec3(0.018, 0.022, 0.03) * crown * 0.6;
      col = applyFog(col, vWorld);
      gl_FragColor = vec4(dither(col), 1.0);
    }`},Al={vertex:`
    attribute vec3 color;
    attribute vec4 params; // size (m), type, phase, group
    uniform float uTime;
    uniform float uPixelScale;
    uniform vec4 uGroups;
    varying vec3 vColor;
    varying float vI;
    void main(){
      vec4 mv = modelViewMatrix * vec4(position, 1.0);
      float dist = max(-mv.z, 1.0);
      float px = params.x * uPixelScale / dist;
      float type = params.y;
      float I = 1.0;
      if (type > 0.5 && type < 1.5) {           // sequenced approach flasher
        float f = fract(uTime * 2.0 - params.z);
        I = 0.15 + smoothstep(0.0, 0.012, f) * (1.0 - smoothstep(0.02, 0.1, f)) * 3.2;
      } else if (type > 1.5 && type < 2.5) {    // double strobe
        float f = fract(uTime * 0.85 + params.z);
        I = (step(f, 0.035) + step(0.11, f) * step(f, 0.145)) * 3.0;
      } else if (type > 2.5 && type < 3.5) {    // red beacon
        I = 0.1 + pow(max(sin(uTime * 4.6 + params.z * 6.2831), 0.0), 5.0) * 2.0;
      } else if (type > 3.5) {                  // city scintillation
        I = 0.78 + 0.22 * sin(uTime * (0.8 + params.z * 3.0) + params.z * 61.0);
      }
      float g = params.w;
      float fade = g < 0.5 ? uGroups.x : (g < 1.5 ? uGroups.y : (g < 2.5 ? uGroups.z : uGroups.w));
      I *= fade;
      float core = clamp(px, 1.3, 26.0);
      vI = I * clamp(px * 0.9, 0.32, 1.0);
      vColor = color;
      gl_PointSize = core * 4.2;
      gl_Position = projectionMatrix * mv;
      gl_Position.z -= 0.0012 * gl_Position.w * smoothstep(1500.0, 4000.0, dist);
    }`,fragment:`
    varying vec3 vColor;
    varying float vI;
    void main(){
      float d = length(gl_PointCoord - 0.5) * 2.0;
      if (d > 1.0) discard;
      float core = smoothstep(0.26, 0.05, d);
      float halo = exp(-d * d * 9.0) * 0.55 + exp(-d * d * 2.6) * 0.12;
      float a = (core * 1.25 + halo) * vI;
      vec3 c = mix(vColor, vec3(1.0), core * 0.55);
      gl_FragColor = vec4(c * a, 1.0);
    }`},Ih={vertex:`
    varying vec2 vUv;
    varying vec3 vWorld;
    void main(){
      vUv = uv;
      vec4 w = modelMatrix * vec4(position, 1.0);
      vWorld = w.xyz;
      gl_Position = projectionMatrix * viewMatrix * w;
    }`,fragment:ti+`
    uniform vec2 uSize;
    varying vec2 vUv;
    varying vec3 vWorld;
    float caustic(vec2 p, float t){
      float n1 = texture2D(uNoise, p * 0.09 + vec2(t * 0.021, t * 0.013)).r;
      float n2 = texture2D(uNoise, p * 0.11 - vec2(t * 0.017, -t * 0.019) + 0.31).g;
      float v = abs(n1 - n2);
      return pow(1.0 - smoothstep(0.0, 0.05, v), 2.0);
    }
    void main(){
      vec2 p = vUv * uSize;
      float c = caustic(p, uTime) * 0.7 + caustic(p * 1.9 + 3.0, uTime * 1.3) * 0.4;
      vec3 base = vec3(0.03, 0.42, 0.52);
      vec3 col = base * (0.8 + 0.5 * c) + vec3(0.55, 1.0, 1.0) * pow(c, 2.5) * 0.55;
      vec2 e = min(vUv, 1.0 - vUv) * uSize;
      float edge = smoothstep(0.0, 0.9, min(e.x, e.y));
      col *= mix(0.35, 1.0, edge);
      float centre = 1.0 - length(vUv - 0.5) * 0.8;
      col *= 0.75 + 0.45 * centre;
      col = applyFog(col, vWorld);
      gl_FragColor = vec4(dither(col), 1.0);
    }`},Lh={vertex:`
    attribute vec2 lp;
    varying vec2 vLp;
    varying vec2 vUv;
    varying vec3 vWorld;
    void main(){
      vLp = lp;
      vUv = uv;
      vWorld = position;
      gl_Position = projectionMatrix * viewMatrix * vec4(position, 1.0);
    }`,fragment:ti+Jo+`
    uniform sampler2D uYardMask; // r pavers, g pool deck, b planting beds
    uniform sampler2D uYardLight;
    varying vec2 vLp;
    varying vec2 vUv;
    varying vec3 vWorld;
    void main(){
      vec2 p = vLp;
      vec4 m = texture2D(uYardMask, vUv);
      float fw = max(fwidth(p.x), fwidth(p.y));
      float fine = 1.0 - smoothstep(0.03, 0.1, fw); // joints fade out before they shimmer
      // lawn
      float n1 = texture2D(uNoise, p * 0.31).r;
      float n2 = texture2D(uNoise, p * 1.7 + 0.3).g;
      vec3 alb = vec3(0.105, 0.17, 0.085) * (0.72 + 0.4 * n1) * (0.85 + 0.3 * n2);
      // planting beds: soil and low shrubs
      float sh = texture2D(uNoise, p * 0.9 + 0.7).b;
      alb = mix(alb, mix(vec3(0.07, 0.055, 0.04), vec3(0.05, 0.10, 0.045), smoothstep(0.35, 0.6, sh)), m.b);
      // pavers, laid basket-weave, 22 x 11 cm
      vec2 c = floor(p / 0.44);
      vec2 f = fract(p / 0.44);
      if (mod(c.x + c.y, 2.0) > 0.5) f = f.yx;
      float joint = max(step(fract(f.y * 2.0), 0.07), step(f.x, 0.035)) * fine;
      float tone = hash12(c * 3.1 + floor(f.y * 2.0));
      alb = mix(alb, vec3(0.60, 0.55, 0.47) * (0.88 + 0.18 * tone) * (1.0 - joint * 0.35), m.r);
      // pool deck: grey stone slabs, 120 x 60 cm
      vec2 sl = p / vec2(1.2, 0.6);
      sl.x += step(1.0, mod(floor(sl.y), 2.0)) * 0.5;
      vec2 sf = fract(sl);
      float sj = max(step(sf.x, 0.02), step(sf.y, 0.04)) * fine;
      alb = mix(alb, vec3(0.47, 0.48, 0.50) * (0.9 + 0.15 * hash12(floor(sl))) * (1.0 - sj * 0.3), m.g);
      // moonlight, the lamps' pools and the shuttle's headlights
      vec3 n = vec3(0.0, 1.0, 0.0);
      vec3 light = vec3(0.15, 0.18, 0.26) * (0.5 + 0.5 * max(uMoonDir.y, 0.0));
      light += texture2D(uYardLight, vUv).rgb * uLightGain;
      light += spot(uSpotPos[1], uSpotDir[1], uSpotCol[1], uSpotCone[1], uSpotRange[1], vWorld, n);
      vec3 col = applyFog(alb * light, vWorld);
      gl_FragColor = vec4(dither(col), 1.0);
    }`},El={vertex:`
    varying vec2 vUv;
    void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragment:`
    uniform sampler2D uMap;
    uniform float uGain;
    varying vec2 vUv;
    void main(){
      vec4 t = texture2D(uMap, vUv);
      gl_FragColor = vec4(t.rgb * t.a * uGain, 1.0);
    }`},Dh={vertex:`
    varying vec3 vWorld;
    varying vec3 vN;
    void main(){
      vec4 w = modelMatrix * vec4(position, 1.0);
      vWorld = w.xyz;
      vN = normalize(mat3(modelMatrix) * normal);
      gl_Position = projectionMatrix * viewMatrix * w;
    }`,fragment:ti+Jo+`
    uniform vec3 uColor;
    varying vec3 vWorld;
    varying vec3 vN;
    void main(){
      vec3 n = normalize(vN);
      vec3 col = uColor * (sceneLight(vWorld, n) * 0.6 + 0.05);
      float rim = pow(1.0 - max(dot(n, normalize(cameraPosition - vWorld)), 0.0), 3.0);
      col += vec3(0.05, 0.06, 0.08) * rim;
      col = applyFog(col, vWorld);
      gl_FragColor = vec4(dither(col), 1.0);
    }`};var es=(i,t,e)=>Math.max(t,Math.min(e,i)),ts=(i,t,e)=>i+(t-i)*e,We=(i,t,e)=>{let n=es((e-i)/(t-i),0,1);return n*n*(3-2*n)};function Xs(i=1){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function mi(i,t){let e=i.length,n=new Array(e-1),s=new Array(e);for(let r=0;r<e-1;r++)n[r]=(t[r+1]-t[r])/(i[r+1]-i[r]);s[0]=n[0],s[e-1]=n[e-2];for(let r=1;r<e-1;r++)s[r]=n[r-1]*n[r]<=0?0:(n[r-1]+n[r])/2;for(let r=0;r<e-1;r++){if(n[r]===0){s[r]=0,s[r+1]=0;continue}let o=s[r]/n[r],a=s[r+1]/n[r],l=o*o+a*a;if(l>9){let c=3/Math.sqrt(l);s[r]=c*o*n[r],s[r+1]=c*a*n[r]}}return r=>{if(r<=i[0])return t[0];if(r>=i[e-1])return t[e-1];let o=0;for(;r>i[o+1];)o++;let a=i[o+1]-i[o],l=(r-i[o])/a,c=l*l,u=c*l;return(2*u-3*c+1)*t[o]+(u-2*c+l)*a*s[o]+(-2*u+3*c)*t[o+1]+(u-c)*a*s[o+1]}}function Cl(i){let t=i.map(r=>r[0]),e=mi(t,i.map(r=>r[1])),n=mi(t,i.map(r=>r[2])),s=mi(t,i.map(r=>r[3]));return r=>[e(r),n(r),s(r)]}function $o(i,t=24){let e=[],n=(a,l,c,u,f)=>{let h=f*f,m=h*f;return .5*(2*l+(-a+c)*f+(2*a-5*l+4*c-u)*h+(-a+3*l-3*c+u)*m)};for(let a=0;a<i.length-1;a++){let l=i[Math.max(0,a-1)],c=i[a],u=i[a+1],f=i[Math.min(i.length-1,a+2)];for(let h=0;h<t;h++){let m=h/t;e.push([n(l[0],c[0],u[0],f[0],m),n(l[1],c[1],u[1],f[1],m)])}}e.push(i[i.length-1].slice());let s=[0];for(let a=1;a<e.length;a++)s.push(s[a-1]+Math.hypot(e[a][0]-e[a-1][0],e[a][1]-e[a-1][1]));let r=s[s.length-1];function o(a){a=es(a,0,r);let l=0,c=s.length-1;for(;c-l>1;){let d=l+c>>1;s[d]<a?l=d:c=d}let u=s[c]-s[l]||1,f=(a-s[l])/u,h=ts(e[l][0],e[c][0],f),m=ts(e[l][1],e[c][1],f),v=e[c][0]-e[l][0],w=e[c][1]-e[l][1],p=Math.hypot(v,w)||1;return v/=p,w/=p,{x:h,z:m,dx:v,dz:w,rx:-w,rz:v}}return{pts:e,total:r,at:o}}function Ko(i,t,e){let n=Math.imul(i,374761393)+Math.imul(t,668265263)+Math.imul(e,1274126177)|0;return n=Math.imul(n^n>>>13,1274126177),n^=n>>>16,(n>>>0)/4294967295}function Nh(i,t,e,n){let s=Math.floor(i),r=Math.floor(t),o=i-s,a=t-r,l=o*o*(3-2*o),c=a*a*(3-2*a),u=w=>(w%e+e)%e,f=Ko(u(s),u(r),n),h=Ko(u(s+1),u(r),n),m=Ko(u(s),u(r+1),n),v=Ko(u(s+1),u(r+1),n);return f+(h-f)*l+(m-f)*c+(f-h-m+v)*l*c}function qs(i,t,e,n,s,r,o=0,a=0){let l=0,c=.5,u=0;for(let f=0;f<s;f++){let h=n<<f,m=h/e;l+=Nh((i+o)*m,(t+a)*m,h,r+f*31)*c,u+=c,c*=.5}return l/u}function Uh(i,t,e=!0){let n=new ki(i,t,t,He,ke);return n.wrapS=n.wrapT=e?Fi:Ee,n.magFilter=pe,n.minFilter=Ne,n.generateMipmaps=!0,n.needsUpdate=!0,n}function Fh(i=256){let t=new Uint8Array(i*i*4);for(let e=0;e<i;e++)for(let n=0;n<i;n++){let s=(e*i+n)*4;t[s]=qs(n,e,i,4,5,7)*255,t[s+1]=qs(n,e,i,4,5,91,37,11)*255,t[s+2]=Nh(n*64/i,e*64/i,64,5)*255,t[s+3]=qs(n,e,i,16,3,55)*255}return Uh(t,i)}function Oh(i=256){let t=new Float32Array(i*i);for(let s=0;s<i;s++)for(let r=0;r<i;r++){let o=qs(r,s,i,4,3,301),a=qs(r,s,i,16,3,777,13,29);t[s*i+r]=o*.65+a*.35}let e=new Uint8Array(i*i*4),n=(s,r)=>t[(r+i)%i*i+(s+i)%i];for(let s=0;s<i;s++)for(let r=0;r<i;r++){let o=(n(r+1,s)-n(r-1,s))*6,a=(n(r,s+1)-n(r,s-1))*6,l=(s*i+r)*4;e[l]=Math.max(0,Math.min(255,(o*.5+.5)*255)),e[l+1]=Math.max(0,Math.min(255,(a*.5+.5)*255)),e[l+2]=n(r,s)*255,e[l+3]=255}return Uh(e,i)}function Bh(){let e=document.createElement("canvas");e.width=256*4,e.height=512;let n=e.getContext("2d");n.fillStyle="#000",n.strokeStyle="#000";let s=Xs(4242);for(let o=0;o<4;o++){let l=o*256+256*.5+(s()-.5)*20,c=512,u=(s()-.5)*70+(o%2?26:-22),f=l+u,h=512*(.2+s()*.06),m=l+u*.15+(s()-.5)*20,v=512*.55,w=40,p=[],d=[];for(let D=0;D<=w;D++){let _=D/w,M=(1-_)*(1-_)*l+2*(1-_)*_*m+_*_*f,S=(1-_)*(1-_)*c+2*(1-_)*_*v+_*_*h,C=2*(1-_)*(m-l)+2*_*(f-m),x=2*(1-_)*(v-c)+2*_*(h-v),T=Math.hypot(C,x)||1,L=9-_*4.2+(D%4===0?.8:0);p.push([M-x/T*L,S+C/T*L]),d.push([M+x/T*L,S-C/T*L])}n.beginPath(),n.moveTo(p[0][0],p[0][1]);for(let D of p)n.lineTo(D[0],D[1]);for(let D=d.length-1;D>=0;D--)n.lineTo(d[D][0],d[D][1]);n.closePath(),n.fill();let R=11+Math.floor(s()*4);for(let D=0;D<R;D++){let _=D/R*Math.PI*2+s()*.4,M=Math.cos(_),S=Math.sin(_),C=118+s()*44,x=M*C*(.85+.15*Math.abs(S)),T=26+s()*30-Math.abs(S)*14,L=70+s()*50,y=f,A=h,I=y+x*.45,P=A-T,U=y+x,B=A-T*.2+L*(.6+Math.abs(M)*.4);n.lineWidth=3.2,n.beginPath(),n.moveTo(y,A),n.quadraticCurveTo(I,P,U,B),n.stroke();let V=26;for(let K=1;K<V;K++){let k=K/V,H=(1-k)*(1-k)*y+2*(1-k)*k*I+k*k*U,Y=(1-k)*(1-k)*A+2*(1-k)*k*P+k*k*B,st=2*(1-k)*(I-y)+2*k*(U-I),at=2*(1-k)*(P-A)+2*k*(B-P),Bt=Math.hypot(st,at)||1,zt=-at/Bt,Vt=st/Bt,$=(1-k*.7)*(28+s()*9);n.lineWidth=2.8-k*1.4;for(let et of[-1,1]){n.beginPath(),n.moveTo(H,Y);let xt=H+zt*$*et*.75+st/Bt*$*.35,Dt=Y+Vt*$*et*.75+$*.55;n.quadraticCurveTo(H+zt*$*et*.5,Y+Vt*$*et*.2,xt,Dt),n.stroke()}}}for(let D=0;D<5;D++)n.beginPath(),n.arc(f+(s()-.5)*16,h+6+s()*8,4.5,0,Math.PI*2),n.fill()}let r=new vn(e);return r.wrapS=r.wrapT=Ee,r.minFilter=Ne,r.magFilter=pe,r.anisotropy=4,r}function zh(i){let t=document.createElement("canvas");t.width=1024,t.height=768;let e=t.getContext("2d");e.textAlign="center",e.textBaseline="middle",e.shadowColor="rgba(255, 206, 140, 0.95)",e.fillStyle="rgba(255, 238, 210, 1)";for(let[s,r,o]of[["AFRICA",170,220],["WAKA",390,190],["WAKA",600,220]])e.font=`600 ${o}px ${i}`,e.shadowBlur=30,e.fillText(s,512,r),e.shadowBlur=8,e.fillText(s,512,r);let n=new vn(t);return n.minFilter=Ne,n.magFilter=pe,n.anisotropy=4,n}function Vh(i,t){let e=i.image,n=e.getContext("2d");n.clearRect(0,0,e.width,e.height);let s=Math.min(e.width/t.width,e.height/t.height),r=t.width*s,o=t.height*s,a=(e.width-r)/2,l=(e.height-o)/2;n.shadowColor="rgba(255, 170, 90, 0.7)",n.shadowBlur=26,n.drawImage(t,a,l,r,o),n.shadowBlur=0,n.drawImage(t,a,l,r,o),i.needsUpdate=!0}var te={PLASTER:6,BRICK:7,ROOF:8,CREAM:9,SCREEN:10,PAV_COL:11,DARK:12,FLOOR:13,RAIL:14,WALL:15,FASCIA:16},ns=[[-50,-35,57.5,2.7,9.5,3,9.3],[-30,-15,55,2.7,9.5,3,9.3],[-11,11,51,2.8,11,7,0],[15,30,55,2.7,9.5,3,9.3],[35,50,57.5,2.7,9.5,3,9.3]],is=.95,Qo=3.35,Ys=2.05,gi={w:3.6,h:2.7},Rl={u0:30,u1:46,w0:19,w1:31},Zs={u0:-15,u1:-9,w0:11.5,w1:16};function kh(i){let{g:t}=i,e=[],n=[],s=[],r=[],o=_=>[t.x+t.dx*_[0]+t.rx*_[2],_[1],t.z+t.dz*_[0]+t.rz*_[2]],a=_=>{let M=t.dx*_[0]+t.rx*_[2],S=t.dz*_[0]+t.rz*_[2],C=Math.hypot(M,_[1],S)||1;return[M/C,_[1]/C,S/C]},l=(_,M,S,C,x,T,L,y)=>{let A=a(C);for(let[I,P]of[[_,x],[M,T],[S,L]]){let U=o(I);e.push(U[0],U[1],U[2]),n.push(A[0],A[1],A[2]),s.push(P[0],P[1]),r.push(y[0],y[1],y[2],y[3])}},c=(_,M,S,C,x,T,L,y,A,I)=>{l(_,M,S,x,T,L,y,I),l(_,S,C,x,T,y,A,I)},u=(_,M)=>[_[0]-M[0],_[1]-M[1],_[2]-M[2]],f=(_,M)=>[_[1]*M[2]-_[2]*M[1],_[2]*M[0]-_[0]*M[2],_[0]*M[1]-_[1]*M[0]],h=(_,M,S,C=!0)=>{let x=f(u(M,_),u(S,_)),T=C&&x[1]<0?-1:1;return[x[0]*T,x[1]*T,x[2]*T]},m=.37,v=(_,M=0,S=0)=>[(m+=.131)%1,S,_,M];function w(_,M,S,C,x,T,L,y={}){let A=v(L,y.win||0,y.lit||0),I=C-S,P=[[[_,x],[M,x],[0,0,-1],M-_,"front"],[[M,T],[_,T],[0,0,1],M-_,"back"],[[_,T],[_,x],[-1,0,0],T-x,"left"],[[M,x],[M,T],[1,0,0],T-x,"right"]];for(let[U,B,V,K,k]of P){if(y.skip&&y.skip.includes(k))continue;let H=y.faceData&&y.faceData[k]?y.faceData[k]:A;c([U[0],S,U[1]],[B[0],S,B[1]],[B[0],C,B[1]],[U[0],C,U[1]],V,[0,0],[K,0],[K,I],[0,I],H)}if(!y.noTop){let U=y.topData||A;c([_,C,x],[M,C,x],[M,C,T],[_,C,T],[0,1,0],[0,0],[M-_,0],[M-_,T-x],[0,T-x],U)}}function p(_,M,S,C,x,T){let y=(A,I,P,U)=>{let B=v(U);for(let V=0;V<10;V++){let K=V/10*Math.PI*2,k=(V+1)/10*Math.PI*2,H=[_+Math.cos(K)*P,M+Math.sin(K)*P],Y=[_+Math.cos(k)*P,M+Math.sin(k)*P],st=(K+k)/2,at=[Math.cos(st),0,Math.sin(st)],Bt=P*(Math.PI*2/10);c([H[0],A,H[1]],[Y[0],A,Y[1]],[Y[0],I,Y[1]],[H[0],I,H[1]],at,[V*Bt,0],[(V+1)*Bt,0],[(V+1)*Bt,I-A],[V*Bt,I-A],B)}};y(S,S+.22,x*1.45,T),y(S+.22,C-.26,x,T),y(C-.26,C,x*1.5,T)}function d(_,M,S,C,x,T=.62){let L=M-_,y=C-S,A=v(te.ROOF),I=v(te.DARK),P=v(te.FASCIA);if(L>=y){let B=y/2,V=x+B*T,K=(S+C)/2,k=[_+B,V,K],H=[M-B,V,K],Y=Math.hypot(B,B*T),st=[_,x,S],at=[M,x,S];c(st,at,H,k,h(st,at,H),[0,0],[L,0],[L-B,Y],[B,Y],A),st=[M,x,C],at=[_,x,C],c(st,at,k,H,h(st,at,k),[0,0],[L,0],[L-B,Y],[B,Y],A),st=[_,x,C],at=[_,x,S],l(st,at,k,h(st,at,k),[0,0],[y,0],[B,Y],A),st=[M,x,S],at=[M,x,C],l(st,at,H,h(st,at,H),[0,0],[y,0],[B,Y],A)}else{let B=L/2,V=x+B*T,K=(_+M)/2,k=[K,V,S+B],H=[K,V,C-B],Y=Math.hypot(B,B*T),st=[_,x,C],at=[_,x,S];c(st,at,k,H,h(st,at,k),[0,0],[y,0],[y-B,Y],[B,Y],A),st=[M,x,S],at=[M,x,C],c(st,at,H,k,h(st,at,H),[0,0],[y,0],[y-B,Y],[B,Y],A),st=[_,x,S],at=[M,x,S],l(st,at,k,h(st,at,k),[0,0],[L,0],[B,Y],A),st=[M,x,C],at=[_,x,C],l(st,at,H,h(st,at,H),[0,0],[L,0],[B,Y],A)}let U=x-.32;for(let[B,V,K,k]of[[[_,S],[M,S],[0,0,-1],L],[[M,C],[_,C],[0,0,1],L],[[_,C],[_,S],[-1,0,0],y],[[M,S],[M,C],[1,0,0],y]])c([B[0],U,B[1]],[V[0],U,V[1]],[V[0],x+.04,V[1]],[B[0],x+.04,B[1]],K,[0,0],[k,0],[k,.36],[0,.36],P);c([_,U,S],[M,U,S],[M,U,C],[_,U,C],[0,-1,0],[0,0],[L,0],[L,y],[0,y],I)}function R(_,M,S,C,x,T,L=-1){let y=Math.hypot(M[0]-_[0],M[1]-_[1]),A=v(te.SCREEN,T,L);c([_[0],C,_[1]],[M[0],C,M[1]],[M[0],x,M[1]],[_[0],x,_[1]],S,[0,0],[y,0],[y,x-C],[0,x-C],A)}for(let[_,M,S,C,x,T,L]of ns){let y=L===0,A=S+C,I=A+x,P=is,U=P+Qo,B=(_+M)/2,V=y?_:B-L/2,K=y?M:B+L/2,k=(K-V)/T,H=S+.25;w(_,M,0,P,A,I,te.BRICK,{topData:v(te.FLOOR)}),w(V,K,0,P,S,A,te.BRICK,{topData:v(te.FLOOR),skip:["back"]}),w(_+.35,M-.35,P,U,A,I,te.PLASTER,{noTop:!0,faceData:{front:v(te.PLASTER,100+(M-_-.7)/2,y?.95:.75),back:v(te.PLASTER,2,.4),left:v(te.PLASTER,2,.5),right:v(te.PLASTER,2,.5)}});for(let Y=0;Y<=T;Y++)p(V+Y*k,H,P,P+Ys,.19,te.CREAM);p(V,A-.2,P,P+Ys,.19,te.CREAM),p(K,A-.2,P,P+Ys,.19,te.CREAM),R([V,H],[K,H],[0,0,-1],P,U,k,(K-V)/2),R([V,A-.2],[V,H],[-1,0,0],P,U,A-.2-H),R([K,H],[K,A-.2],[1,0,0],P,U,A-.2-H);for(let Y=0;Y<3;Y++){let st=P*((Y+1)/3);w(B-1.3,B+1.3,0,st,S-.42*(3-Y),S-.42*(2-Y),te.FLOOR,{skip:["back"]})}y?d(_-.45,M+.45,S-.4,I+.45,U):(d(_-.45,M+.45,A-.45,I+.45,U),d(V-.4,K+.4,S-.4,A+.6,U)),y&&w(B-gi.w/2-.15,B+gi.w/2+.15,U+.04,U+gi.h+.34,S-.62,S-.5,te.DARK)}{let{u0:_,u1:M,w0:S,w1:C}=Rl,x=.32,T=x+3.1;w(_,M,0,x,S,C,te.FLOOR);let L=5,y=4;for(let I=0;I<=L;I++)for(let P of[S+.3,C-.3])p(_+.3+I*(M-_-.6)/L,P,x,T,.2,te.PAV_COL);for(let I=1;I<y;I++)for(let P of[_+.3,M-.3])p(P,S+.3+I*(C-S-.6)/y,x,T,.2,te.PAV_COL);let A=(I,P,U)=>{let B=Math.hypot(P[0]-I[0],P[1]-I[1]);c([I[0],x,I[1]],[P[0],x,P[1]],[P[0],x+.95,P[1]],[I[0],x+.95,I[1]],U,[0,0],[B,0],[B,.95],[0,.95],v(te.RAIL))};A([_+.3,S+.3],[M-.3,S+.3],[0,0,-1]),A([M-.3,C-.3],[_+4.5,C-.3],[0,0,1]),A([M-.3,S+.3],[M-.3,C-.3],[1,0,0]),w(_+.1,M-.1,T-.45,T,S+.1,C-.1,te.DARK,{noTop:!0}),d(_-.6,M+.6,S-.6,C+.6,T,.5)}{let{u0:_,u1:M,w0:S,w1:C}=Zs;w(_,M,0,.6,S,C,te.BRICK,{noTop:!0}),w(_+.1,M-.1,.6,3.2,S+.1,C-.1,te.PLASTER,{noTop:!0,faceData:{front:v(te.PLASTER,2,1),back:v(te.PLASTER,0),left:v(te.PLASTER,2,1),right:v(te.PLASTER,0)}}),d(_-.5,M+.5,S-.5,C+.5,3.2)}let D=(_,M,S,C)=>w(_,M,0,2.4,S,C,te.WALL);D(-58,-6.6,9,9.35),D(6.6,58,9,9.35),D(-58.35,-58,9,96),D(58,58.35,9,96),D(-58,58,95.65,96);for(let _ of[-7.1,7.1])w(_-.5,_+.5,0,2.9,8.7,9.7,te.PLASTER),w(_-.62,_+.62,2.9,3.12,8.58,9.82,te.CREAM);return{position:e,normal:n,fc:s,bdata:r}}var os={x0:-1500,z0:-4500,size:6e3},ni={x:9e3,z:-5e3,zSpread:9e3},as={bearing:27,elev:6.5},ei={halfW:22.5,len:3200},Y0=[[680,-1600],[900,-1660],[1200,-1780],[1550,-1960],[1950,-2190],[2350,-2420],[2720,-2620],[3060,-2790],[3380,-2950],[3750,-3150],[4150,-3380]],wn=$o(Y0,28),xi=(()=>{let i=0,t=1/0;for(let e=0;e<wn.total;e+=2){let n=wn.at(e),s=Math.hypot(n.x-3060,n.z+2790);s<t&&(t=s,i=e)}return i})();function Z0(){let i=wn.at(xi),t=(n,s)=>[i.x+i.dx*n+i.rx*s,i.z+i.dz*n+i.rz*s],e=Math.atan2(i.dx,i.dz);return{g:i,toWorld:t,rotY:e}}function $s(i){return 6900+350*Math.sin(i*31e-5)+180*Math.sin(i*83e-5+1.3)+90*Math.sin(i*.0021+.4)}var Xe=[-26e3,10500];function ta(i){let t=Xs(i),e=new Float32Array(512);for(let n=0;n<512;n++)e[n]=t();return n=>{let s=Math.floor(n),r=n-s,o=r*r*(3-2*r),a=e[(s%512+512)%512],l=e[((s+1)%512+512)%512];return a+(l-a)*o}}var Xh=ta(11),qh=ta(12),Il=ta(13),J0=ta(14),Gh=i=>(Xh(i)*.55+qh(i*2.1)*.27+Il(i*4.3)*.12+J0(i*8.7)*.06)/1;function Ll(i,t){let e=3500+900*(qh(t*19e-5+3.1)-.5)*2,n=Math.exp(-(((i-e)/2400)**2)),s=We(0,650,i),r=420+760*Gh(t*12e-5+7),o=90*(Gh(i*.0021+t*.0011)-.5)+55*(Il(t*.0026+i*7e-4)-.5),a=We(Xe[0],Xe[0]+4e3,t)*(1-We(Xe[1]-5e3,Xe[1],t)),l=70*We(0,900,i)*(1-We(900,2600,i));return(r*n*s+o*s+l)*a-10*(1-s)}var un=[1,.92,.78],jo=[.86,.92,1],ss=[1,.66,.36],rs=[1,.76,.46],Hh=[.25,1,.5],Js=[1,.16,.1],Pl=[.25,.45,1],Wh=[.35,.95,1];function Yh(i={}){let t=!!i.mobile,e=Xs(20260928),n=[],s=[],r=(y,A,I,P,U,B=0,V=0,K=0)=>n.push([y,A,I,P[0],P[1],P[2],U,B,V,K]),o=(y,A,I,P,U=1)=>s.push([y,A,I,P[0],P[1],P[2],U]);for(let y=0;y>=-ei.len;y-=60)r(-24,.6,y,un,1.6),r(24,.6,y,un,1.6),o(-24,y,7,un,.35),o(24,y,7,un,.35);for(let y=-15;y>=-ei.len;y-=30){let A=ei.len+y,I=A<300||A<900&&Math.round(y/30)%2?Js:un;r(0,.3,y,I,.6)}for(let y=-21;y<=21;y+=3)r(y,.5,2,Hh,1.4),r(y,.5,-ei.len-2,Js,1.3);o(0,2,26,Hh,.4);for(let y=-30;y>=-900;y-=30)for(let A of[-1,1])for(let I=0;I<3;I++)r(A*(4.5+I*1.5),.3,y,un,.45);[un,un,Js,Js].forEach((y,A)=>r(-40-A*9,1,-300,y,2.2));for(let y=30;y<=900;y+=30){for(let A=-2;A<=2;A++)r(A*1.1,1.5,y,un,1.1);r(0,2,y,[1,1,1],1.8,1,(900-y)/900*.55,1),o(0,y,9,un,.35)}for(let y=-15;y<=15;y+=1.5)r(y,1.5,300,un,1.1);for(let y=40;y<=250;y+=30)r(y,.4,-1588,Pl,1.1),r(y,.4,-1612,Pl,1.1);for(let y=-1320;y>=-1880;y-=40)r(250,.4,y,Pl,1);for(let y of[-1380,-1500,-1620,-1740,-1860])r(420,24,y,[1,.86,.66],4.5),o(420,y,75,[1,.8,.55],.9);for(let y=-1400;y>=-1800;y-=50)r(640,8,y,ss,2.2),o(640,y,28,ss,.9);r(520,32,-1300,[.4,1,.6],3.2,3,.1),r(520,32,-1300,[1,1,1],3.2,3,.6);let a=wn.total,l=1;for(let y=40;y<a-60;y+=64+e()*22){let A=wn.at(y);if(Math.abs(y-xi)<40)continue;l=-l;let I=l*8,P=A.x+A.rx*I,U=A.z+A.rz*I,B=e()<.55?jo:ss;e()<.9&&(r(P,7,U,B,1.9),o(P-A.rx*I*.4,U-A.rz*I*.4,20,B,.75))}let c=[];for(let y=120;y<a-40;y+=55+e()*90){if(Math.abs(y-xi)<150)continue;let A=wn.at(y),I=1+Math.floor(e()*3);for(let P=0;P<I;P++){let U=e()<.5?-1:1,B=20+e()*45,V=(e()-.5)*50,K=A.x+A.rx*U*B+A.dx*V,k=A.z+A.rz*U*B+A.dz*V,H=e()<.18,Y=H?12:7+e()*3,st=H?8:5+e()*2,at=H?4:3.1;c.push({x:K,z:k,w:Y,d:st,h:at,rot:Math.atan2(A.dx,A.dz)+(e()-.5)*.3,lit:H?.9:.35+e()*.4,shop:H});let Bt=H?jo:rs;r(K-A.rx*U*(st*.5+1),2.6,k-A.rz*U*(st*.5+1),Bt,H?1.8:1.2),o(K-A.rx*U*(st*.5+3),k-A.rz*U*(st*.5+3),H?20:11,Bt,H?.9:.55)}}let u=t?380:700;for(let y=0;y<u;y++){let A,I,P=[-1800,900,2600,-600,3400,1600,-2600][y%7],U=[3600,2600,4200,-1200,-900,400,-3e3][y%7];if(A=P+(e()+e()+e()-1.5)*1400,I=U+(e()+e()+e()-1.5)*1400,Math.abs(A)<120&&I<950&&I>-3300||A>4100||I>5e3)continue;let B=e()<.72?rs:e()<.5?jo:ss;r(A,2.5,I,B,1.1+e()*.8,4,e()),o(A,I,9,B,.5)}let{g:f,toWorld:h,rotY:m}=Z0(),v={g:f,toWorld:h,rotY:m,palms:[],porch:[],pool:null,sign:null},w=(y,A)=>h(y,A),p=[1,.74,.44],d=[1,.86,.66],R=(y,A,I,P)=>{let[U,B]=w(y,A);v.porch.push([U,I,B,P])};for(let[y,A,I,P,,U,B]of ns){let V=B===0,K=(y+A)/2,k=is+Qo,H=(Y,st,at,Bt,zt,Vt)=>{let[$,et]=w(Y,st);if(r($,at,et,p,zt),R(Y,st,at,Bt),Vt){let[xt,Dt]=w(Y,Vt[0]);o(xt,Dt,Vt[1],p,Vt[2])}};if(V){for(let Y=0;Y<3;Y++)H(y+(Y+.5)/3*(A-y),I+P*.55,k-.4,2,.5,[I-1.2,7,.7]);for(let Y=0;Y<=U;Y++)H(y+Y*(A-y)/U,I-.07,is+Ys-.3,.75,.3,[I-1.6,4,.35])}else{H(K,I+P*.55,k-.4,1.9,.5,[I-1.2,7,.7]);for(let Y of[-1,1])H(K+Y*(B/2+1.6),I+P-.15,is+2.35,1.1,.34,[I+P-1.6,4,.4])}}for(let y of[-7.1,7.1]){let[A,I]=w(y,9.2);r(A,3.4,I,rs,1.6),o(A,I,12,rs,.9),R(y,8.4,3.4,1.4)}let D=(y,A)=>{let[I,P]=w(y,A);r(I,.5,P,d,.26),o(I,P,3,d,.5)};for(let y=14;y<=40;y+=6.5)for(let A of[-3.9,3.9])D(A,y);for(let y=-52;y<=52;y+=6.5)Math.abs(y)>5&&D(y,43.6);for(let[y,A]of[[9.6,19],[9.6,34],[29.4,34],[29.4,19],[19.5,34.4]])D(y,A);for(let y=-54;y<=54;y+=13.5){if(Math.abs(y)<12)continue;let[A,I]=w(y,10);r(A,2.5,I,rs,.8),o(A,I,6,rs,.4)}{let{u0:y,u1:A,w0:I,w1:P}=Rl;for(let V=0;V<3;V++)for(let K=0;K<2;K++){let k=y+(V+.5)/3*(A-y),H=I+(K+.5)/2*(P-I),[Y,st]=w(k,H);r(Y,2.9,st,[1,.72,.4],.7),K===0&&R(k,H,2.9,1.5)}let[U,B]=w((y+A)/2,(I+P)/2);o(U,B,14,[1,.7,.4],1.1)}v.pool={u:19.5,w:26.5,lu:14,lw:7};{let[y,A]=w(v.pool.u,v.pool.w);o(y,A,16,Wh,1),r(y,.4,A,Wh,2.2,0,0,2)}{let[y,A]=w((Zs.u0+Zs.u1)/2,Zs.w0-1.5);o(y,A,5,p,.6)}[[9.8,12.6],[-22,12.5],[-53,31],[-44,38],[-54,50],[54,40],[54,54],[48,15],[-33.5,67],[-14,65],[14,65],[33.5,67],[-44,85],[-24,87],[0,89],[24,87],[44,85]].forEach(([y,A],I)=>{let[P,U]=w(y+(e()-.5)*1.5,A+(e()-.5)*1.5);v.palms.push({x:P,z:U,h:10+e()*6,idx:I%4,flip:e()<.5?-1:1,up:1,tint:[1,.72,.42]}),o(P,U,4,[1,.72,.42],.8)});{let[y,A,I]=ns[2];v.sign={u:(y+A)/2,w:I-.66,y:is+Qo+.19+gi.h/2,width:gi.w,height:gi.h}}let M=[];for(let y=30;y<a;y+=26+e()*40){let A=wn.at(y);if(Math.abs(y-xi)<80)continue;let I=e()<.5?-1:1,P=14+e()*60;M.push({x:A.x+A.rx*I*P,z:A.z+A.rz*I*P,h:9+e()*9,idx:Math.floor(e()*4),flip:e()<.5?-1:1,up:0,tint:[0,0,0]})}let S=t?260:520;for(let y=0;y<S;y++){let A=-2200+e()*6200,I=-4200+e()*9e3;Math.abs(A)<160&&I<1100&&I>-3400||A>250&&A<720&&I<-1250&&I>-1950||M.push({x:A,z:I,h:9+e()*11,idx:Math.floor(e()*4),flip:e()<.5?-1:1,up:0,tint:[0,0,0]})}for(let y=0;y<(t?120:240);y++){let A=-3e3+e()*7e3,I=4600+e()*500;M.push({x:A,z:I,h:10+e()*9,idx:Math.floor(e()*4),flip:e()<.5?-1:1,up:0,tint:[0,0,0]})}let C=t?2600:4600,x=(y,A)=>Xh(A*55e-5+y*31e-5)*.6+Il(A*.0013-y*9e-4+5)*.4,T=0,L=0;for(;T<C&&L++<C*12;){let y;e()<.66?y=ni.z+(e()+e()+e()+e()-2)*ni.zSpread*.85:y=Xe[0]+3e3+e()*(Xe[1]-Xe[0]-6e3),y=es(y,Xe[0]+2500,Xe[1]-3e3);let A=25+Math.pow(e(),2.1)*2600;if(x(A,y)-A/5200<.36+e()*.12)continue;let P=$s(y)+A,U=Math.max(Ll(A,y),0)+5,B=e(),V=B<.6?ss:B<.88?[1,.84,.6]:jo;r(P-22,U,y,V,3.2+Math.pow(e(),3)*9,4,e(),0),T++}for(let y=Xe[0]+5e3;y<Xe[1]-4e3;y+=55+e()*40)Math.abs(y-ni.z)>14e3&&e()<.5||r($s(y)+18,6,y,ss,4.5,4,e(),0);for(let y=0;y<40;y++){let A=-2200+(e()-.5)*900;r($s(A)-10+e()*60,4+e()*18,A,[1,.93,.82],7+e()*6,4,e(),0)}return{lights:n,pools:s,houses:c,palms:M,resort:v}}function Zh(i,t){let{x0:e,z0:n,size:s}=os,r=(w,p)=>[(w-e)/s*t,(p-n)/s*t],o=t/s,a=document.createElement("canvas");a.width=a.height=t;let l=a.getContext("2d");l.clearRect(0,0,t,t);let c=(w,p,d,R,D)=>{let[_,M]=r(Math.min(w,d),Math.min(p,R));l.fillStyle=D,l.fillRect(_,M,Math.abs(d-w)*o,Math.abs(R-p)*o)};c(-30,60,30,-ei.len-60,"rgb(22,22,24)"),c(-ei.halfW,0,ei.halfW,-ei.len,"rgb(14,14,16)"),c(20,-1588,252,-1612,"rgb(26,26,28)"),c(250,-1300,560,-1900,"rgb(52,52,54)"),c(610,-1380,700,-1820,"rgb(44,42,40)"),l.lineCap="round",l.lineJoin="round",l.strokeStyle="rgb(92,48,28)",l.lineWidth=11*o,l.beginPath(),wn.pts.forEach((w,p)=>{let[d,R]=r(w[0],w[1]);p===0?l.moveTo(d,R):l.lineTo(d,R)}),l.stroke(),l.strokeStyle="rgb(70,52,40)",l.lineWidth=4*o;let{toWorld:u}=i.resort,f=(w,p)=>{l.fillStyle=p,l.beginPath(),w.forEach(([d,R],D)=>{let[_,M]=u(d,R),[S,C]=r(_,M);D===0?l.moveTo(S,C):l.lineTo(S,C)}),l.closePath(),l.fill()};f([[-58,9],[58,9],[58,96],[-58,96]],"rgb(30,48,26)"),f([[-6.6,0],[6.6,0],[6.6,12],[-6.6,12]],"rgb(122,112,98)");let h="rgb(152,140,120)";f([[-3.2,12],[3.2,12],[3.2,50],[-3.2,50]],h),f([[-8,38],[8,38],[8,50],[-8,50]],h),f([[-54,44.4],[54,44.4],[54,48.2],[-54,48.2]],h);for(let[w,p,d]of ns){let R=(w+p)/2;f([[R-1.6,48.2],[R+1.6,48.2],[R+1.6,d],[R-1.6,d]],h)}f([[3.2,24],[10,24],[10,29],[3.2,29]],h),f([[10,18.5],[47,18.5],[47,34.5],[10,34.5]],"rgb(116,120,124)"),l.fillStyle="rgb(60,44,32)";for(let w of i.houses){let[p,d]=r(w.x,w.z);l.beginPath(),l.arc(p,d,14*o,0,Math.PI*2),l.fill()}let m=document.createElement("canvas");m.width=m.height=t;let v=m.getContext("2d");v.fillStyle="#000",v.fillRect(0,0,t,t),v.globalCompositeOperation="lighter";for(let[w,p,d,R,D,_,M]of i.pools){let[S,C]=r(w,p),x=Math.max(1.5,d*o),T=v.createRadialGradient(S,C,0,S,C,x),L=`${R*255|0},${D*255|0},${_*255|0}`,y=Math.min(1,M);T.addColorStop(0,`rgba(${L},${y})`),T.addColorStop(.3,`rgba(${L},${y*.42})`),T.addColorStop(.65,`rgba(${L},${y*.1})`),T.addColorStop(1,`rgba(${L},0)`),v.fillStyle=T,v.fillRect(S-x,C-x,x*2,x*2)}return{albedo:a,light:m}}var Re={u0:-58,u1:58,w0:9,w1:96};function Jh(i,t){let{g:e}=i.resort,n=t?512:1024,s=n/(Re.u1-Re.u0),r=Math.round((Re.w1-Re.w0)*s),o=(p,d)=>[(p-Re.u0)*s,(d-Re.w0)*s],a=()=>{let p=document.createElement("canvas");p.width=n,p.height=r;let d=p.getContext("2d");return d.fillStyle="#000",d.fillRect(0,0,n,r),d.globalCompositeOperation="lighter",[p,d]},[l,c]=a(),u=(p,d,R,D,_)=>{let[M,S]=o(p,R),[C,x]=o(d,D);c.fillStyle=_,c.fillRect(M,S,C-M,x-S)},f="#f00",h="#0f0",m="#00f";u(-3.2,3.2,Re.w0,50,f),u(-8,8,38,50,f),u(-54,54,44.4,48.2,f),u(3.2,10,24,29,f),u(10,47,18.5,34.5,h);for(let[p,d,R,D,,,_]of ns){let M=(p+d)/2;u(M-1.6,M+1.6,48.2,R,f);let S=_?M-_/2:p,C=_?M+_/2:d;u(S,M-1.6,R-1,R,m),u(M+1.6,C,R-1,R,m),_&&(u(p,S,R+D-1,R+D,m),u(C,d,R+D-1,R+D,m))}let[v,w]=a();for(let[p,d,R,D,_,M,S]of i.pools){let C=p-e.x,x=d-e.z,T=C*e.dx+x*e.dz,L=C*e.rx+x*e.rz;if(T+R<Re.u0||T-R>Re.u1||L+R<Re.w0||L-R>Re.w1)continue;let[y,A]=o(T,L),I=w.createRadialGradient(y,A,0,y,A,R*s),P=`${D*255|0},${_*255|0},${M*255|0}`,U=Math.min(1,S);I.addColorStop(0,`rgba(${P},${U})`),I.addColorStop(.3,`rgba(${P},${U*.42})`),I.addColorStop(.65,`rgba(${P},${U*.1})`),I.addColorStop(1,`rgba(${P},0)`),w.fillStyle=I,w.fillRect(y-R*s,A-R*s,R*s*2,R*s*2)}return{mask:l,light:v}}function $0(i){let t=(S,C)=>i.toWorld(S,C),[e,n]=t(-560,-6),[s,r]=t(-170,-6),[o,a]=t(-80,-1),[l,c]=t(-40,21),[u,f]=t(-25,28),[h,m]=t(40,40),[v,w]=t(8,44),[p,d]=t(5,47),[R,D]=t(6,51),_=Cl([[0,0,720,13200],[.2,0,430,7e3],[.36,20,112,1500],[.415,50,62,-80],[.47,190,56,-760],[.557,620,52,-1350],[.654,1380,46,-1760],[.758,e,38,n],[.86,s,21,r],[.925,o,13,a],[.97,l,6.4,c],[1,u,5.2,f]]),M=Cl([[0,1700,-560,1200],[.2,800,-450,-1500],[.36,40,-60,-1400],[.415,30,-12,-1100],[.47,380,-4,-1750],[.557,1300,0,-2050],[.654,2300,0,-2520],[.758,h,2,m],[.86,v,3,w],[.925,p,3,d],[1,R,2.6,D]]);return{cam:_,look:M}}var Qs=-350,K0=mi([0,.2,.3,.36,.415,.47,.53,.6,.7,1],[12500,6300,2350,1060,Qs,-1120,-1700,-2100,-2330,-2420]),Q0=i=>(i-Qs)*Math.tan(3*Math.PI/180)+3.4,Ks=.84,j0=mi([0,.5,.565,.654,.758,Ks,1],[0,0,260,1200,2080,xi-12,xi-12]),$h=[{at:0,id:"approach"},{at:.38,id:"touchdown"},{at:.52,id:"road"},{at:.86,id:"arrived"}];function Kh({canvas:i,mobile:t=!1,fontFamily:e="Georgia, serif",signLogo:n=null}){let s=new qo({canvas:i,antialias:!1,alpha:!1,powerPreference:"high-performance",stencil:!1});s.setClearColor(329743,1),s.autoClear=!0;let r=t?1.25:1.5,o=Math.min(window.devicePixelRatio||1,r);s.setPixelRatio(o);let a=new Ms,l=new De(42,1,1.5,8e4),c=Fh(256),u=Oh(256),f=Bh(),h=zh(e),m=Yh({mobile:t});m.resort.porch.length>32&&console.warn("film: only the first 32 resort lamps light the buildings");let{cam:v,look:w}=$0(m.resort),d=Zh(m,t?1024:2048),R=new vn(d.albedo);R.flipY=!1,R.premultiplyAlpha=!0,R.wrapS=R.wrapT=Ee,R.minFilter=Ne,R.magFilter=pe,R.anisotropy=4;let D=new vn(d.light);D.flipY=!1,D.wrapS=D.wrapT=Ee,D.minFilter=Ne,D.magFilter=pe;let _=new W(Math.sin(jn.degToRad(as.bearing))*Math.cos(jn.degToRad(as.elev)),Math.sin(jn.degToRad(as.elev)),-Math.cos(jn.degToRad(as.bearing))*Math.cos(jn.degToRad(as.elev))).normalize(),M={uTime:{value:0},uMoonDir:{value:_},uCityDir:{value:new qt(1,0)},uCityBearing:{value:.5},uCitySpread:{value:.3},uCityElTop:{value:.02},uNoise:{value:c},uFog:{value:58e-6},uRegion:{value:new re(os.x0,os.z0,os.size,os.size)},uLightMap:{value:D},uLightGain:{value:2.9},uSpotPos:{value:[new W,new W]},uSpotDir:{value:[new W(0,-1,0),new W(0,-1,0)]},uSpotCol:{value:[new W,new W]},uSpotCone:{value:[new qt(.97,.995),new qt(.9,.97)]},uSpotRange:{value:[900,90]},uPorch:{value:Array.from({length:32},(ot,pt)=>new re(...m.resort.porch[pt]||[0,-100,0,0]))},uPorchCol:{value:new W(1,.72,.42)}},S=(ot,pt={},St={})=>new Ce({uniforms:{...M,...pt},vertexShader:ot.vertex,fragmentShader:ot.fragment,...St}),C=new jt(new Hi(3e4,48,24),S(Eh,{},{side:1,depthWrite:!1,depthTest:!1}));C.renderOrder=-10,C.frustumCulled=!1,a.add(C);let x=new yn(1e5,1e5,1,1);x.rotateX(-Math.PI/2);let T=m.resort.g,L=new jt(x,S(Ch,{uWaterN:{value:u},uAlbedo:{value:R},uYardO:{value:new re(T.x,T.z,T.dx,T.dz)},uYardR:{value:new re(Re.u0,Re.u1,Re.w0,Re.w1)}}));L.position.set(4e3,0,-2e3),L.frustumCulled=!1,a.add(L);{let ot=t?48:72,pt=t?200:320,St=9500,N=new Float32Array((ot+1)*(pt+1)*3),Nt=0;for(let O=0;O<=pt;O++){let G=ts(Xe[0],Xe[1],O/pt),Z=$s(G);for(let it=0;it<=ot;it++){let rt=Math.pow(it/ot,1.35)*St;N[Nt++]=Z+rt,N[Nt++]=Ll(rt,G),N[Nt++]=G}}let bt=[];for(let O=0;O<pt;O++)for(let G=0;G<ot;G++){let Z=O*(ot+1)+G,it=Z+1,rt=Z+(ot+1),J=rt+1;bt.push(Z,rt,it,it,rt,J)}let E=new Me;E.setAttribute("position",new Te(N,3)),E.setIndex(bt),E.computeVertexNormals();let g=new jt(E,S(Rh,{uCityZ:{value:ni.z},uCityZSpread:{value:ni.zSpread}},{side:Ve}));g.frustumCulled=!1,a.add(g)}{let ot=[],pt=[],St=[],N=[],Nt=(O,G,Z,it,rt,J,j,dt,vt,ht)=>{for(let[ct,gt]of[[O,J],[G,j],[Z,dt],[O,J],[Z,dt],[it,vt]])ot.push(ct[0],ct[1],ct[2]),pt.push(rt[0],rt[1],rt[2]),St.push(gt[0],gt[1]),N.push(ht[0],ht[1],ht[2],ht[3])},bt=(O,G,Z,it,rt,J,j,dt,vt=!1)=>{let ht=Math.cos(Z),ct=Math.sin(Z),gt=(lt,nt,At)=>[O+lt*ht+At*ct,nt,G-lt*ct+At*ht],It=(lt,nt,At)=>[lt*ht+At*ct,nt,-lt*ct+At*ht],Et=it/2,F=rt/2,ut=j+J,tt=vt?0:J;Nt(gt(-Et,ut,-F),gt(-Et,ut,F),gt(Et,ut,F),gt(Et,ut,-F),It(0,1,0),[-Et,-F],[-Et,F],[Et,F],[Et,-F],dt);let ft=[[[Et,-F],[Et,F],[1,0],rt],[[-Et,F],[-Et,-F],[-1,0],rt],[[Et,F],[-Et,F],[0,1],it],[[-Et,-F],[Et,-F],[0,-1],it]];for(let[lt,nt,At,Ct]of ft)Nt(gt(lt[0],j,lt[1]),gt(nt[0],j,nt[1]),gt(nt[0],ut,nt[1]),gt(lt[0],ut,lt[1]),It(At[0],0,At[1]),[0,0],[Ct,0],[Ct,tt],[0,tt],dt)};bt(585,-1600,0,50,500,14,0,[.37,.82,1,2]),bt(585,-1600,0,58,508,1.2,14,[.11,0,1,0],!0),m.houses.forEach((O,G)=>bt(O.x,O.z,O.rot,O.w,O.d,O.h,0,[G*.137,O.lit,0,1]));let E=new Me;E.setAttribute("position",new se(ot,3)),E.setAttribute("normal",new se(pt,3)),E.setAttribute("fc",new se(St,2)),E.setAttribute("bdata",new se(N,4));let g=new jt(E,S(Tl));g.frustumCulled=!1,a.add(g)}{let ot=kh(m.resort),pt=new Me;pt.setAttribute("position",new se(ot.position,3)),pt.setAttribute("normal",new se(ot.normal,3)),pt.setAttribute("fc",new se(ot.fc,2)),pt.setAttribute("bdata",new se(ot.bdata,4));let St=new jt(pt,S(Tl,{},{side:Ve}));St.frustumCulled=!1,a.add(St)}let y=m.resort,A=Math.atan2(-y.g.dz,y.g.dx);{let ot=Jh(m,t),pt=rt=>{let J=new vn(rt);return J.flipY=!1,J.wrapS=J.wrapT=Ee,J.minFilter=Ne,J.magFilter=pe,J.anisotropy=8,J},{u0:St,u1:N,w0:Nt,w1:bt}=Re,E=[[St,Nt],[N,Nt],[N,bt],[St,bt]],g=[],O=[],G=[];for(let rt of[0,1,2,0,2,3]){let[J,j]=E[rt],[dt,vt]=y.toWorld(J,j);g.push(dt,.05,vt),O.push((J-St)/(N-St),(j-Nt)/(bt-Nt)),G.push(J,j)}let Z=new Me;Z.setAttribute("position",new se(g,3)),Z.setAttribute("uv",new se(O,2)),Z.setAttribute("lp",new se(G,2));let it=new jt(Z,S(Lh,{uYardMask:{value:pt(ot.mask)},uYardLight:{value:pt(ot.light)}},{side:Ve,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-4}));it.frustumCulled=!1,a.add(it)}{let ot=new yn(y.pool.lu,y.pool.lw);ot.rotateX(-Math.PI/2);let pt=new jt(ot,S(Ih,{uSize:{value:new qt(y.pool.lu,y.pool.lw)}})),[St,N]=y.toWorld(y.pool.u,y.pool.w);pt.position.set(St,.3,N),pt.rotation.y=A,a.add(pt);let Nt=new yn(y.sign.width,y.sign.height),bt=new jt(Nt,new Ce({uniforms:{uMap:{value:h},uGain:{value:1.7}},vertexShader:El.vertex,fragmentShader:El.fragment,transparent:!0,blending:qi,depthWrite:!1})),[E,g]=y.toWorld(y.sign.u,y.sign.w);if(bt.position.set(E,y.sign.y,g),bt.rotation.y=Math.atan2(-y.g.rx,-y.g.rz),bt.renderOrder=12,bt.name="sign",a.add(bt),n){let O=new Image;O.onload=()=>{Vh(h,O),bt.material.uniforms.uGain.value=1.15},O.src=n}}{let ot=m.palms.concat(m.resort.palms),pt=new yn(1,1),St=new Ls;St.index=pt.index,St.setAttribute("position",pt.getAttribute("position"));let N=new Float32Array(ot.length*3),Nt=new Float32Array(ot.length*4),bt=new Float32Array(ot.length*3);ot.forEach((g,O)=>{N.set([g.x,0,g.z],O*3),Nt.set([g.h,g.idx,g.flip,g.up],O*4),bt.set(g.tint,O*3)}),St.setAttribute("offset",new hi(N,3)),St.setAttribute("pdata",new hi(Nt,4)),St.setAttribute("tint",new hi(bt,3)),St.instanceCount=ot.length;let E=new jt(St,S(Ph,{uPalm:{value:f}},{side:Ve}));E.frustumCulled=!1,a.add(E)}let I=ot=>new Ce({uniforms:{uTime:M.uTime,uPixelScale:{value:800},uGroups:{value:new re(1,1,1,1)}},vertexShader:Al.vertex,fragmentShader:Al.fragment,transparent:!0,blending:qi,depthWrite:!1}),P=ot=>{let pt=ot.length,St=new Float32Array(pt*3),N=new Float32Array(pt*3),Nt=new Float32Array(pt*4);ot.forEach((E,g)=>{St.set([E[0],E[1],E[2]],g*3),N.set([E[3],E[4],E[5]],g*3),Nt.set([E[6],E[7],E[8],E[9]],g*4)});let bt=new Me;return bt.setAttribute("position",new Te(St,3)),bt.setAttribute("color",new Te(N,3)),bt.setAttribute("params",new Te(Nt,4)),bt},U=new Gi(P(m.lights),I());U.frustumCulled=!1,U.renderOrder=10,a.add(U);let B=ot=>S(Dh,{uColor:{value:new $t(ot)}}),V=new mn;{let ot=B(9080729),pt=new jt(new Xn(2,2,34,14),ot);pt.rotation.x=Math.PI/2,V.add(pt);let St=new jt(new Hi(2,14,10),ot);St.scale.set(1,1,2.2),St.position.z=-17,V.add(St);let N=new jt(new Xn(.6,2,8,12),ot);N.rotation.x=-Math.PI/2,N.position.z=21,V.add(N);for(let bt of[-1,1]){let E=new jt(new $e(16,.45,4.5),ot);E.position.set(bt*9.5,-.9,1.5),E.rotation.y=bt*-.42,V.add(E);let g=new jt(new Xn(1.1,1.1,4,12),ot);g.rotation.x=Math.PI/2,g.position.set(bt*6.5,-2,-1.5),V.add(g);let O=new jt(new $e(5.5,.3,2.4),ot);O.position.set(bt*3.2,.6,22.5),O.rotation.y=bt*-.4,V.add(O)}let Nt=new jt(new $e(.4,6.5,4.5),ot);Nt.position.set(0,4.8,22.5),Nt.rotation.x=.35,V.add(Nt)}a.add(V);let K=$o([[-12,2.4],[-5,2.6],[-1.4,5.4],[0,10],[0,22],[0,34],[0,42.5]].map(([ot,pt])=>m.resort.toWorld(ot,pt)),12),k=mi([Ks,.955,1],[0,K.total,K.total]),H=new mn;{let ot=new jt(new $e(2,1.95,5.3),B(15328474));ot.position.y=1.3,H.add(ot);let pt=new jt(new $e(2.04,.62,5),B(1382429));pt.position.set(0,1.86,.05),H.add(pt);let St=new jt(new $e(1.86,.7,.1),B(1382429));St.position.set(0,1.8,-2.62),St.rotation.x=.18,H.add(St);let N=B(723724);for(let Nt of[-.92,.92])for(let bt of[-1.75,1.75]){let E=new jt(new Xn(.36,.36,.26,14),N);E.rotation.z=Math.PI/2,E.position.set(Nt,.36,bt),H.add(E)}}a.add(H);let Y=[];for(let ot=0;ot<11;ot++)Y.push([0,-100,0,1,1,1,1,0,0,3]);let st=P(Y),at=new Gi(st,I());at.frustumCulled=!1,at.renderOrder=13,a.add(at);let Bt=st.getAttribute("position"),zt=st.getAttribute("color"),Vt=st.getAttribute("params"),$=(ot,pt,St,N,Nt=0,bt=0)=>{Bt.setXYZ(ot,pt.x,pt.y,pt.z),zt.setXYZ(ot,St[0],St[1],St[2]),Vt.setXYZ(ot,N,Nt,bt)},et=1,xt=1,Dt=0,mt=new W,kt=new W,xe=new W,Wt=new W(0,1,0);function Kt(ot,pt){et=Math.max(1,ot),xt=Math.max(1,pt),s.setSize(et,xt,!1);let St=et/xt;l.aspect=St,l.fov=St>=1.45?40:St<=.62?62:ts(62,40,(St-.62)/(1.45-.62)),l.updateProjectionMatrix();let N=xt*s.getPixelRatio()/(2*Math.tan(jn.degToRad(l.fov)/2));U.material.uniforms.uPixelScale.value=N,at.material.uniforms.uPixelScale.value=N}function oe(ot,pt){Dt=ot,M.uTime.value=pt;let St=v(ot),N=w(ot),Nt=.35+St[1]*.006,bt=Math.sin(pt*.31)*Nt+Math.sin(pt*.87+1.2)*Nt*.4,E=Math.sin(pt*.43+.5)*Nt*.6;l.position.set(St[0]+bt,St[1]+E,St[2]),l.lookAt(N[0],N[1],N[2]);let g=et/xt;if(g<1.1){let lt=We(.93,1,ot),nt=(1.1-g)*(.2*(1-We(.06,.2,ot))+.25*We(.62,.86,ot)*(1-lt)+.08*lt);l.rotateY(-nt),l.rotateX(-(1.1-g)*.34*lt)}C.position.copy(l.position);let O=ni.x-l.position.x,G=ni.z-l.position.z,Z=Math.hypot(O,G);M.uCityDir.value.set(O/Z,G/Z),M.uCityBearing.value=Math.atan2(O,-G),M.uCitySpread.value=Math.atan(7500/Z)*.75,M.uCityElTop.value=Math.atan(420/Z);let it=K0(ot),rt=it<=Qs+1,J=We(Qs+400,Qs,it),j=Math.max(3.4,Q0(it)-J*2.5);V.position.set(0,j,it),V.rotation.set(rt?0:.03+J*.06,0,0),V.visible=ot<.9;let dt=1-We(.58,.66,ot);kt.set(0,0,-1),$(0,mt.set(-3.4,j-.9,it-5),[1,.97,.9],3.2*dt+.01),$(1,mt.set(3.4,j-.9,it-5),[1,.97,.9],3.2*dt+.01),$(2,mt.set(-16.8,j-.8,it+4.8),[1,.12,.1],1.6),$(3,mt.set(16.8,j-.8,it+4.8),[.2,1,.4],1.6),$(4,mt.set(-16.9,j-.8,it+5.3),[1,1,1],2.6,2,0),$(5,mt.set(16.9,j-.8,it+5.3),[1,1,1],2.6,2,0),$(6,mt.set(0,j+2.3,it+2),[1,.1,.08],1.8,3,.3),M.uSpotPos.value[0].set(0,j-.5,it-8),M.uSpotDir.value[0].set(0,-Math.sin(rt?.035:.11),-1).normalize(),M.uSpotCol.value[0].set(1,.95,.86).multiplyScalar(70*dt);let vt;if(ot<=Ks){let lt=wn.at(j0(ot));vt={x:lt.x+lt.rx*2.4,z:lt.z+lt.rz*2.4,dx:lt.dx,dz:lt.dz,rx:lt.rx,rz:lt.rz}}else vt=K.at(k(ot));H.position.set(vt.x,0,vt.z),H.rotation.y=Math.atan2(-vt.dx,-vt.dz),H.visible=ot>.45;let ht=H.visible?1:0,ct=vt.dx,gt=vt.dz,It=vt.rx,Et=vt.rz,F=H.position.x,ut=H.position.z,tt=ht*(1-.85*We(.962,.99,ot));$(7,mt.set(F+ct*2.7-It*.75,.85,ut+gt*2.7-Et*.75),[1,.95,.85],1.6*Math.max(tt,.35*ht)),$(8,mt.set(F+ct*2.7+It*.75,.85,ut+gt*2.7+Et*.75),[1,.95,.85],1.6*Math.max(tt,.35*ht));let ft=ot>.93&&ot<.975?1.6:1;$(9,mt.set(F-ct*2.65-It*.8,1,ut-gt*2.65-Et*.8),[1,.08,.05],.9*ft*ht),$(10,mt.set(F-ct*2.65+It*.8,1,ut-gt*2.65+Et*.8),[1,.08,.05],.9*ft*ht),M.uSpotPos.value[1].set(F+ct*2.8,1,ut+gt*2.8),M.uSpotDir.value[1].set(ct,-.12,gt).normalize(),M.uSpotCol.value[1].set(1,.93,.8).multiplyScalar(9*tt),M.uSpotRange.value[1]=ts(90,26,We(Ks,Ks+.03,ot)),Bt.needsUpdate=!0,zt.needsUpdate=!0,Vt.needsUpdate=!0}function Xt(){s.render(a,l)}function ce(ot){o=es(ot,.5,r),s.setPixelRatio(o),Kt(et,xt)}function _e(){let ot=s.getContext(),pt=new Uint8Array(64),St=ot.drawingBufferWidth;ot.readPixels(Math.floor(St/2)-8,2,16,1,ot.RGBA,ot.UNSIGNED_BYTE,pt);let N=0,Nt=0,bt=0;for(let E=0;E<16;E++)N+=pt[E*4],Nt+=pt[E*4+1],bt+=pt[E*4+2];return[N/16,Nt/16,bt/16]}return{renderer:s,camera:l,scene:a,world:m,setSize:Kt,place:oe,render:Xt,setPixelRatio:ce,get pixelRatio(){return o},get maxPixelRatio(){return r},get progress(){return Dt},readBottomColor:_e,dispose(){s.dispose()}}}window.WakaFilm={createFilm:Kh,CHAPTERS:$h};})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
