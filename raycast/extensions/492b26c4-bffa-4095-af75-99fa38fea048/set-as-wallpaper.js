"use strict";var Sn=Object.create;var B=Object.defineProperty;var gn=Object.getOwnPropertyDescriptor;var xn=Object.getOwnPropertyNames;var wn=Object.getPrototypeOf,bn=Object.prototype.hasOwnProperty;var a=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),vn=(e,t)=>{for(var r in t)B(e,r,{get:t[r],enumerable:!0})},Ee=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of xn(t))!bn.call(e,s)&&s!==r&&B(e,s,{get:()=>t[s],enumerable:!(n=gn(t,s))||n.enumerable});return e};var J=(e,t,r)=>(r=e!=null?Sn(wn(e)):{},Ee(t||!e||!e.__esModule?B(r,"default",{value:e,enumerable:!0}):r,e)),En=e=>Ee(B({},"__esModule",{value:!0}),e);var Ce=a((ws,Ge)=>{Ge.exports=Pe;Pe.sync=Tn;var Ie=require("fs");function In(e,t){var r=t.pathExt!==void 0?t.pathExt:process.env.PATHEXT;if(!r||(r=r.split(";"),r.indexOf("")!==-1))return!0;for(var n=0;n<r.length;n++){var s=r[n].toLowerCase();if(s&&e.substr(-s.length).toLowerCase()===s)return!0}return!1}function Te(e,t,r){return!e.isSymbolicLink()&&!e.isFile()?!1:In(t,r)}function Pe(e,t,r){Ie.stat(e,function(n,s){r(n,n?!1:Te(s,e,t))})}function Tn(e,t){return Te(Ie.statSync(e),e,t)}});var Ne=a((bs,qe)=>{qe.exports=Oe;Oe.sync=Pn;var Ae=require("fs");function Oe(e,t,r){Ae.stat(e,function(n,s){r(n,n?!1:Re(s,t))})}function Pn(e,t){return Re(Ae.statSync(e),t)}function Re(e,t){return e.isFile()&&Gn(e,t)}function Gn(e,t){var r=e.mode,n=e.uid,s=e.gid,o=t.uid!==void 0?t.uid:process.getuid&&process.getuid(),i=t.gid!==void 0?t.gid:process.getgid&&process.getgid(),c=parseInt("100",8),u=parseInt("010",8),l=parseInt("001",8),f=c|u,h=r&l||r&u&&s===i||r&c&&n===o||r&f&&o===0;return h}});var ke=a((Es,_e)=>{var vs=require("fs"),M;process.platform==="win32"||global.TESTING_WINDOWS?M=Ce():M=Ne();_e.exports=ee;ee.sync=Cn;function ee(e,t,r){if(typeof t=="function"&&(r=t,t={}),!r){if(typeof Promise!="function")throw new TypeError("callback not provided");return new Promise(function(n,s){ee(e,t||{},function(o,i){o?s(o):n(i)})})}M(e,t||{},function(n,s){n&&(n.code==="EACCES"||t&&t.ignoreErrors)&&(n=null,s=!1),r(n,s)})}function Cn(e,t){try{return M.sync(e,t||{})}catch(r){if(t&&t.ignoreErrors||r.code==="EACCES")return!1;throw r}}});var Ue=a((Is,Fe)=>{var I=process.platform==="win32"||process.env.OSTYPE==="cygwin"||process.env.OSTYPE==="msys",$e=require("path"),An=I?";":":",je=ke(),Le=e=>Object.assign(new Error(`not found: ${e}`),{code:"ENOENT"}),Be=(e,t)=>{let r=t.colon||An,n=e.match(/\//)||I&&e.match(/\\/)?[""]:[...I?[process.cwd()]:[],...(t.path||process.env.PATH||"").split(r)],s=I?t.pathExt||process.env.PATHEXT||".EXE;.CMD;.BAT;.COM":"",o=I?s.split(r):[""];return I&&e.indexOf(".")!==-1&&o[0]!==""&&o.unshift(""),{pathEnv:n,pathExt:o,pathExtExe:s}},Me=(e,t,r)=>{typeof t=="function"&&(r=t,t={}),t||(t={});let{pathEnv:n,pathExt:s,pathExtExe:o}=Be(e,t),i=[],c=l=>new Promise((f,h)=>{if(l===n.length)return t.all&&i.length?f(i):h(Le(e));let m=n[l],y=/^".*"$/.test(m)?m.slice(1,-1):m,S=$e.join(y,e),g=!y&&/^\.[\\\/]/.test(e)?e.slice(0,2)+S:S;f(u(g,l,0))}),u=(l,f,h)=>new Promise((m,y)=>{if(h===s.length)return m(c(f+1));let S=s[h];je(l+S,{pathExt:o},(g,E)=>{if(!g&&E)if(t.all)i.push(l+S);else return m(l+S);return m(u(l,f,h+1))})});return r?c(0).then(l=>r(null,l),r):c(0)},On=(e,t)=>{t=t||{};let{pathEnv:r,pathExt:n,pathExtExe:s}=Be(e,t),o=[];for(let i=0;i<r.length;i++){let c=r[i],u=/^".*"$/.test(c)?c.slice(1,-1):c,l=$e.join(u,e),f=!u&&/^\.[\\\/]/.test(e)?e.slice(0,2)+l:l;for(let h=0;h<n.length;h++){let m=f+n[h];try{if(je.sync(m,{pathExt:s}))if(t.all)o.push(m);else return m}catch{}}}if(t.all&&o.length)return o;if(t.nothrow)return null;throw Le(e)};Fe.exports=Me;Me.sync=On});var ne=a((Ts,te)=>{"use strict";var De=(e={})=>{let t=e.env||process.env;return(e.platform||process.platform)!=="win32"?"PATH":Object.keys(t).reverse().find(n=>n.toUpperCase()==="PATH")||"Path"};te.exports=De;te.exports.default=De});var Ke=a((Ps,We)=>{"use strict";var He=require("path"),Rn=Ue(),qn=ne();function Xe(e,t){let r=e.options.env||process.env,n=process.cwd(),s=e.options.cwd!=null,o=s&&process.chdir!==void 0&&!process.chdir.disabled;if(o)try{process.chdir(e.options.cwd)}catch{}let i;try{i=Rn.sync(e.command,{path:r[qn({env:r})],pathExt:t?He.delimiter:void 0})}catch{}finally{o&&process.chdir(n)}return i&&(i=He.resolve(s?e.options.cwd:"",i)),i}function Nn(e){return Xe(e)||Xe(e,!0)}We.exports=Nn});var Ve=a((Gs,se)=>{"use strict";var re=/([()\][%!^"`<>&|;, *?])/g;function _n(e){return e=e.replace(re,"^$1"),e}function kn(e,t){return e=`${e}`,e=e.replace(/(\\*)"/g,'$1$1\\"'),e=e.replace(/(\\*)$/,"$1$1"),e=`"${e}"`,e=e.replace(re,"^$1"),t&&(e=e.replace(re,"^$1")),e}se.exports.command=_n;se.exports.argument=kn});var Ye=a((Cs,ze)=>{"use strict";ze.exports=/^#!(.*)/});var Ze=a((As,Qe)=>{"use strict";var $n=Ye();Qe.exports=(e="")=>{let t=e.match($n);if(!t)return null;let[r,n]=t[0].replace(/#! ?/,"").split(" "),s=r.split("/").pop();return s==="env"?n:n?`${s} ${n}`:s}});var et=a((Os,Je)=>{"use strict";var oe=require("fs"),jn=Ze();function Ln(e){let r=Buffer.alloc(150),n;try{n=oe.openSync(e,"r"),oe.readSync(n,r,0,150,0),oe.closeSync(n)}catch{}return jn(r.toString())}Je.exports=Ln});var st=a((Rs,rt)=>{"use strict";var Bn=require("path"),tt=Ke(),nt=Ve(),Mn=et(),Fn=process.platform==="win32",Un=/\.(?:com|exe)$/i,Dn=/node_modules[\\/].bin[\\/][^\\/]+\.cmd$/i;function Hn(e){e.file=tt(e);let t=e.file&&Mn(e.file);return t?(e.args.unshift(e.file),e.command=t,tt(e)):e.file}function Xn(e){if(!Fn)return e;let t=Hn(e),r=!Un.test(t);if(e.options.forceShell||r){let n=Dn.test(t);e.command=Bn.normalize(e.command),e.command=nt.command(e.command),e.args=e.args.map(o=>nt.argument(o,n));let s=[e.command].concat(e.args).join(" ");e.args=["/d","/s","/c",`"${s}"`],e.command=process.env.comspec||"cmd.exe",e.options.windowsVerbatimArguments=!0}return e}function Wn(e,t,r){t&&!Array.isArray(t)&&(r=t,t=null),t=t?t.slice(0):[],r=Object.assign({},r);let n={command:e,args:t,options:r,file:void 0,original:{command:e,args:t}};return r.shell?n:Xn(n)}rt.exports=Wn});var ct=a((qs,it)=>{"use strict";var ie=process.platform==="win32";function ce(e,t){return Object.assign(new Error(`${t} ${e.command} ENOENT`),{code:"ENOENT",errno:"ENOENT",syscall:`${t} ${e.command}`,path:e.command,spawnargs:e.args})}function Kn(e,t){if(!ie)return;let r=e.emit;e.emit=function(n,s){if(n==="exit"){let o=ot(s,t,"spawn");if(o)return r.call(e,"error",o)}return r.apply(e,arguments)}}function ot(e,t){return ie&&e===1&&!t.file?ce(t.original,"spawn"):null}function Vn(e,t){return ie&&e===1&&!t.file?ce(t.original,"spawnSync"):null}it.exports={hookChildProcess:Kn,verifyENOENT:ot,verifyENOENTSync:Vn,notFoundError:ce}});var lt=a((Ns,T)=>{"use strict";var at=require("child_process"),ae=st(),ue=ct();function ut(e,t,r){let n=ae(e,t,r),s=at.spawn(n.command,n.args,n.options);return ue.hookChildProcess(s,n),s}function zn(e,t,r){let n=ae(e,t,r),s=at.spawnSync(n.command,n.args,n.options);return s.error=s.error||ue.verifyENOENTSync(s.status,n),s}T.exports=ut;T.exports.spawn=ut;T.exports.sync=zn;T.exports._parse=ae;T.exports._enoent=ue});var ft=a((_s,dt)=>{"use strict";dt.exports=e=>{let t=typeof e=="string"?`
`:`
`.charCodeAt(),r=typeof e=="string"?"\r":"\r".charCodeAt();return e[e.length-1]===t&&(e=e.slice(0,e.length-1)),e[e.length-1]===r&&(e=e.slice(0,e.length-1)),e}});var ht=a((ks,N)=>{"use strict";var q=require("path"),pt=ne(),mt=e=>{e={cwd:process.cwd(),path:process.env[pt()],execPath:process.execPath,...e};let t,r=q.resolve(e.cwd),n=[];for(;t!==r;)n.push(q.join(r,"node_modules/.bin")),t=r,r=q.resolve(r,"..");let s=q.resolve(e.cwd,e.execPath,"..");return n.push(s),n.concat(e.path).join(q.delimiter)};N.exports=mt;N.exports.default=mt;N.exports.env=e=>{e={env:process.env,...e};let t={...e.env},r=pt({env:t});return e.path=t[r],t[r]=N.exports(e),t}});var St=a(($s,le)=>{"use strict";var yt=(e,t)=>{for(let r of Reflect.ownKeys(t))Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r));return e};le.exports=yt;le.exports.default=yt});var xt=a((js,U)=>{"use strict";var Yn=St(),F=new WeakMap,gt=(e,t={})=>{if(typeof e!="function")throw new TypeError("Expected a function");let r,n=0,s=e.displayName||e.name||"<anonymous>",o=function(...i){if(F.set(o,++n),n===1)r=e.apply(this,i),e=null;else if(t.throw===!0)throw new Error(`Function \`${s}\` can only be called once`);return r};return Yn(o,e),F.set(o,n),o};U.exports=gt;U.exports.default=gt;U.exports.callCount=e=>{if(!F.has(e))throw new Error(`The given function \`${e.name}\` is not wrapped by the \`onetime\` package`);return F.get(e)}});var wt=a(D=>{"use strict";Object.defineProperty(D,"__esModule",{value:!0});D.SIGNALS=void 0;var Qn=[{name:"SIGHUP",number:1,action:"terminate",description:"Terminal closed",standard:"posix"},{name:"SIGINT",number:2,action:"terminate",description:"User interruption with CTRL-C",standard:"ansi"},{name:"SIGQUIT",number:3,action:"core",description:"User interruption with CTRL-\\",standard:"posix"},{name:"SIGILL",number:4,action:"core",description:"Invalid machine instruction",standard:"ansi"},{name:"SIGTRAP",number:5,action:"core",description:"Debugger breakpoint",standard:"posix"},{name:"SIGABRT",number:6,action:"core",description:"Aborted",standard:"ansi"},{name:"SIGIOT",number:6,action:"core",description:"Aborted",standard:"bsd"},{name:"SIGBUS",number:7,action:"core",description:"Bus error due to misaligned, non-existing address or paging error",standard:"bsd"},{name:"SIGEMT",number:7,action:"terminate",description:"Command should be emulated but is not implemented",standard:"other"},{name:"SIGFPE",number:8,action:"core",description:"Floating point arithmetic error",standard:"ansi"},{name:"SIGKILL",number:9,action:"terminate",description:"Forced termination",standard:"posix",forced:!0},{name:"SIGUSR1",number:10,action:"terminate",description:"Application-specific signal",standard:"posix"},{name:"SIGSEGV",number:11,action:"core",description:"Segmentation fault",standard:"ansi"},{name:"SIGUSR2",number:12,action:"terminate",description:"Application-specific signal",standard:"posix"},{name:"SIGPIPE",number:13,action:"terminate",description:"Broken pipe or socket",standard:"posix"},{name:"SIGALRM",number:14,action:"terminate",description:"Timeout or timer",standard:"posix"},{name:"SIGTERM",number:15,action:"terminate",description:"Termination",standard:"ansi"},{name:"SIGSTKFLT",number:16,action:"terminate",description:"Stack is empty or overflowed",standard:"other"},{name:"SIGCHLD",number:17,action:"ignore",description:"Child process terminated, paused or unpaused",standard:"posix"},{name:"SIGCLD",number:17,action:"ignore",description:"Child process terminated, paused or unpaused",standard:"other"},{name:"SIGCONT",number:18,action:"unpause",description:"Unpaused",standard:"posix",forced:!0},{name:"SIGSTOP",number:19,action:"pause",description:"Paused",standard:"posix",forced:!0},{name:"SIGTSTP",number:20,action:"pause",description:'Paused using CTRL-Z or "suspend"',standard:"posix"},{name:"SIGTTIN",number:21,action:"pause",description:"Background process cannot read terminal input",standard:"posix"},{name:"SIGBREAK",number:21,action:"terminate",description:"User interruption with CTRL-BREAK",standard:"other"},{name:"SIGTTOU",number:22,action:"pause",description:"Background process cannot write to terminal output",standard:"posix"},{name:"SIGURG",number:23,action:"ignore",description:"Socket received out-of-band data",standard:"bsd"},{name:"SIGXCPU",number:24,action:"core",description:"Process timed out",standard:"bsd"},{name:"SIGXFSZ",number:25,action:"core",description:"File too big",standard:"bsd"},{name:"SIGVTALRM",number:26,action:"terminate",description:"Timeout or timer",standard:"bsd"},{name:"SIGPROF",number:27,action:"terminate",description:"Timeout or timer",standard:"bsd"},{name:"SIGWINCH",number:28,action:"ignore",description:"Terminal window size changed",standard:"bsd"},{name:"SIGIO",number:29,action:"terminate",description:"I/O is available",standard:"other"},{name:"SIGPOLL",number:29,action:"terminate",description:"Watched event",standard:"other"},{name:"SIGINFO",number:29,action:"ignore",description:"Request for process information",standard:"other"},{name:"SIGPWR",number:30,action:"terminate",description:"Device running out of power",standard:"systemv"},{name:"SIGSYS",number:31,action:"core",description:"Invalid system call",standard:"other"},{name:"SIGUNUSED",number:31,action:"terminate",description:"Invalid system call",standard:"other"}];D.SIGNALS=Qn});var de=a(P=>{"use strict";Object.defineProperty(P,"__esModule",{value:!0});P.SIGRTMAX=P.getRealtimeSignals=void 0;var Zn=function(){let e=vt-bt+1;return Array.from({length:e},Jn)};P.getRealtimeSignals=Zn;var Jn=function(e,t){return{name:`SIGRT${t+1}`,number:bt+t,action:"terminate",description:"Application-specific signal (realtime)",standard:"posix"}},bt=34,vt=64;P.SIGRTMAX=vt});var Et=a(H=>{"use strict";Object.defineProperty(H,"__esModule",{value:!0});H.getSignals=void 0;var er=require("os"),tr=wt(),nr=de(),rr=function(){let e=(0,nr.getRealtimeSignals)();return[...tr.SIGNALS,...e].map(sr)};H.getSignals=rr;var sr=function({name:e,number:t,description:r,action:n,forced:s=!1,standard:o}){let{signals:{[e]:i}}=er.constants,c=i!==void 0;return{name:e,number:c?i:t,description:r,supported:c,action:n,forced:s,standard:o}}});var Tt=a(G=>{"use strict";Object.defineProperty(G,"__esModule",{value:!0});G.signalsByNumber=G.signalsByName=void 0;var or=require("os"),It=Et(),ir=de(),cr=function(){return(0,It.getSignals)().reduce(ar,{})},ar=function(e,{name:t,number:r,description:n,supported:s,action:o,forced:i,standard:c}){return{...e,[t]:{name:t,number:r,description:n,supported:s,action:o,forced:i,standard:c}}},ur=cr();G.signalsByName=ur;var lr=function(){let e=(0,It.getSignals)(),t=ir.SIGRTMAX+1,r=Array.from({length:t},(n,s)=>dr(s,e));return Object.assign({},...r)},dr=function(e,t){let r=fr(e,t);if(r===void 0)return{};let{name:n,description:s,supported:o,action:i,forced:c,standard:u}=r;return{[e]:{name:n,number:e,description:s,supported:o,action:i,forced:c,standard:u}}},fr=function(e,t){let r=t.find(({name:n})=>or.constants.signals[n]===e);return r!==void 0?r:t.find(n=>n.number===e)},pr=lr();G.signalsByNumber=pr});var Gt=a((Us,Pt)=>{"use strict";var{signalsByName:mr}=Tt(),hr=({timedOut:e,timeout:t,errorCode:r,signal:n,signalDescription:s,exitCode:o,isCanceled:i})=>e?`timed out after ${t} milliseconds`:i?"was canceled":r!==void 0?`failed with ${r}`:n!==void 0?`was killed with ${n} (${s})`:o!==void 0?`failed with exit code ${o}`:"failed",yr=({stdout:e,stderr:t,all:r,error:n,signal:s,exitCode:o,command:i,escapedCommand:c,timedOut:u,isCanceled:l,killed:f,parsed:{options:{timeout:h}}})=>{o=o===null?void 0:o,s=s===null?void 0:s;let m=s===void 0?void 0:mr[s].description,y=n&&n.code,g=`Command ${hr({timedOut:u,timeout:h,errorCode:y,signal:s,signalDescription:m,exitCode:o,isCanceled:l})}: ${i}`,E=Object.prototype.toString.call(n)==="[object Error]",j=E?`${g}
${n.message}`:g,L=[j,t,e].filter(Boolean).join(`
`);return E?(n.originalMessage=n.message,n.message=L):n=new Error(L),n.shortMessage=j,n.command=i,n.escapedCommand=c,n.exitCode=o,n.signal=s,n.signalDescription=m,n.stdout=e,n.stderr=t,r!==void 0&&(n.all=r),"bufferedData"in n&&delete n.bufferedData,n.failed=!0,n.timedOut=!!u,n.isCanceled=l,n.killed=f&&!u,n};Pt.exports=yr});var At=a((Ds,fe)=>{"use strict";var X=["stdin","stdout","stderr"],Sr=e=>X.some(t=>e[t]!==void 0),Ct=e=>{if(!e)return;let{stdio:t}=e;if(t===void 0)return X.map(n=>e[n]);if(Sr(e))throw new Error(`It's not possible to provide \`stdio\` in combination with one of ${X.map(n=>`\`${n}\``).join(", ")}`);if(typeof t=="string")return t;if(!Array.isArray(t))throw new TypeError(`Expected \`stdio\` to be of type \`string\` or \`Array\`, got \`${typeof t}\``);let r=Math.max(t.length,X.length);return Array.from({length:r},(n,s)=>t[s])};fe.exports=Ct;fe.exports.node=e=>{let t=Ct(e);return t==="ipc"?"ipc":t===void 0||typeof t=="string"?[t,t,t,"ipc"]:t.includes("ipc")?t:[...t,"ipc"]}});var Ot=a((Hs,W)=>{W.exports=["SIGABRT","SIGALRM","SIGHUP","SIGINT","SIGTERM"];process.platform!=="win32"&&W.exports.push("SIGVTALRM","SIGXCPU","SIGXFSZ","SIGUSR2","SIGTRAP","SIGSYS","SIGQUIT","SIGIOT");process.platform==="linux"&&W.exports.push("SIGIO","SIGPOLL","SIGPWR","SIGSTKFLT","SIGUNUSED")});var kt=a((Xs,O)=>{var d=global.process,b=function(e){return e&&typeof e=="object"&&typeof e.removeListener=="function"&&typeof e.emit=="function"&&typeof e.reallyExit=="function"&&typeof e.listeners=="function"&&typeof e.kill=="function"&&typeof e.pid=="number"&&typeof e.on=="function"};b(d)?(Rt=require("assert"),C=Ot(),qt=/^win/i.test(d.platform),_=require("events"),typeof _!="function"&&(_=_.EventEmitter),d.__signal_exit_emitter__?p=d.__signal_exit_emitter__:(p=d.__signal_exit_emitter__=new _,p.count=0,p.emitted={}),p.infinite||(p.setMaxListeners(1/0),p.infinite=!0),O.exports=function(e,t){if(!b(global.process))return function(){};Rt.equal(typeof e,"function","a callback must be provided for exit handler"),A===!1&&pe();var r="exit";t&&t.alwaysLast&&(r="afterexit");var n=function(){p.removeListener(r,e),p.listeners("exit").length===0&&p.listeners("afterexit").length===0&&K()};return p.on(r,e),n},K=function(){!A||!b(global.process)||(A=!1,C.forEach(function(t){try{d.removeListener(t,V[t])}catch{}}),d.emit=z,d.reallyExit=me,p.count-=1)},O.exports.unload=K,v=function(t,r,n){p.emitted[t]||(p.emitted[t]=!0,p.emit(t,r,n))},V={},C.forEach(function(e){V[e]=function(){if(b(global.process)){var r=d.listeners(e);r.length===p.count&&(K(),v("exit",null,e),v("afterexit",null,e),qt&&e==="SIGHUP"&&(e="SIGINT"),d.kill(d.pid,e))}}}),O.exports.signals=function(){return C},A=!1,pe=function(){A||!b(global.process)||(A=!0,p.count+=1,C=C.filter(function(t){try{return d.on(t,V[t]),!0}catch{return!1}}),d.emit=_t,d.reallyExit=Nt)},O.exports.load=pe,me=d.reallyExit,Nt=function(t){b(global.process)&&(d.exitCode=t||0,v("exit",d.exitCode,null),v("afterexit",d.exitCode,null),me.call(d,d.exitCode))},z=d.emit,_t=function(t,r){if(t==="exit"&&b(global.process)){r!==void 0&&(d.exitCode=r);var n=z.apply(this,arguments);return v("exit",d.exitCode,null),v("afterexit",d.exitCode,null),n}else return z.apply(this,arguments)}):O.exports=function(){return function(){}};var Rt,C,qt,_,p,K,v,V,A,pe,me,Nt,z,_t});var jt=a((Ws,$t)=>{"use strict";var gr=require("os"),xr=kt(),wr=1e3*5,br=(e,t="SIGTERM",r={})=>{let n=e(t);return vr(e,t,r,n),n},vr=(e,t,r,n)=>{if(!Er(t,r,n))return;let s=Tr(r),o=setTimeout(()=>{e("SIGKILL")},s);o.unref&&o.unref()},Er=(e,{forceKillAfterTimeout:t},r)=>Ir(e)&&t!==!1&&r,Ir=e=>e===gr.constants.signals.SIGTERM||typeof e=="string"&&e.toUpperCase()==="SIGTERM",Tr=({forceKillAfterTimeout:e=!0})=>{if(e===!0)return wr;if(!Number.isFinite(e)||e<0)throw new TypeError(`Expected the \`forceKillAfterTimeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`);return e},Pr=(e,t)=>{e.kill()&&(t.isCanceled=!0)},Gr=(e,t,r)=>{e.kill(t),r(Object.assign(new Error("Timed out"),{timedOut:!0,signal:t}))},Cr=(e,{timeout:t,killSignal:r="SIGTERM"},n)=>{if(t===0||t===void 0)return n;let s,o=new Promise((c,u)=>{s=setTimeout(()=>{Gr(e,r,u)},t)}),i=n.finally(()=>{clearTimeout(s)});return Promise.race([o,i])},Ar=({timeout:e})=>{if(e!==void 0&&(!Number.isFinite(e)||e<0))throw new TypeError(`Expected the \`timeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`)},Or=async(e,{cleanup:t,detached:r},n)=>{if(!t||r)return n;let s=xr(()=>{e.kill()});return n.finally(()=>{s()})};$t.exports={spawnedKill:br,spawnedCancel:Pr,setupTimeout:Cr,validateTimeout:Ar,setExitHandler:Or}});var Bt=a((Ks,Lt)=>{"use strict";var x=e=>e!==null&&typeof e=="object"&&typeof e.pipe=="function";x.writable=e=>x(e)&&e.writable!==!1&&typeof e._write=="function"&&typeof e._writableState=="object";x.readable=e=>x(e)&&e.readable!==!1&&typeof e._read=="function"&&typeof e._readableState=="object";x.duplex=e=>x.writable(e)&&x.readable(e);x.transform=e=>x.duplex(e)&&typeof e._transform=="function";Lt.exports=x});var Ft=a((Vs,Mt)=>{"use strict";var{PassThrough:Rr}=require("stream");Mt.exports=e=>{e={...e};let{array:t}=e,{encoding:r}=e,n=r==="buffer",s=!1;t?s=!(r||n):r=r||"utf8",n&&(r=null);let o=new Rr({objectMode:s});r&&o.setEncoding(r);let i=0,c=[];return o.on("data",u=>{c.push(u),s?i=c.length:i+=u.length}),o.getBufferedValue=()=>t?c:n?Buffer.concat(c,i):c.join(""),o.getBufferedLength=()=>i,o}});var Ut=a((zs,k)=>{"use strict";var{constants:qr}=require("buffer"),Nr=require("stream"),{promisify:_r}=require("util"),kr=Ft(),$r=_r(Nr.pipeline),Y=class extends Error{constructor(){super("maxBuffer exceeded"),this.name="MaxBufferError"}};async function he(e,t){if(!e)throw new Error("Expected a stream");t={maxBuffer:1/0,...t};let{maxBuffer:r}=t,n=kr(t);return await new Promise((s,o)=>{let i=c=>{c&&n.getBufferedLength()<=qr.MAX_LENGTH&&(c.bufferedData=n.getBufferedValue()),o(c)};(async()=>{try{await $r(e,n),s()}catch(c){i(c)}})(),n.on("data",()=>{n.getBufferedLength()>r&&i(new Y)})}),n.getBufferedValue()}k.exports=he;k.exports.buffer=(e,t)=>he(e,{...t,encoding:"buffer"});k.exports.array=(e,t)=>he(e,{...t,array:!0});k.exports.MaxBufferError=Y});var Ht=a((Ys,Dt)=>{"use strict";var{PassThrough:jr}=require("stream");Dt.exports=function(){var e=[],t=new jr({objectMode:!0});return t.setMaxListeners(0),t.add=r,t.isEmpty=n,t.on("unpipe",s),Array.prototype.slice.call(arguments).forEach(r),t;function r(o){return Array.isArray(o)?(o.forEach(r),this):(e.push(o),o.once("end",s.bind(null,o)),o.once("error",t.emit.bind(t,"error")),o.pipe(t,{end:!1}),this)}function n(){return e.length==0}function s(o){e=e.filter(function(i){return i!==o}),!e.length&&t.readable&&t.end()}}});var Vt=a((Qs,Kt)=>{"use strict";var Wt=Bt(),Xt=Ut(),Lr=Ht(),Br=(e,t)=>{t===void 0||e.stdin===void 0||(Wt(t)?t.pipe(e.stdin):e.stdin.end(t))},Mr=(e,{all:t})=>{if(!t||!e.stdout&&!e.stderr)return;let r=Lr();return e.stdout&&r.add(e.stdout),e.stderr&&r.add(e.stderr),r},ye=async(e,t)=>{if(e){e.destroy();try{return await t}catch(r){return r.bufferedData}}},Se=(e,{encoding:t,buffer:r,maxBuffer:n})=>{if(!(!e||!r))return t?Xt(e,{encoding:t,maxBuffer:n}):Xt.buffer(e,{maxBuffer:n})},Fr=async({stdout:e,stderr:t,all:r},{encoding:n,buffer:s,maxBuffer:o},i)=>{let c=Se(e,{encoding:n,buffer:s,maxBuffer:o}),u=Se(t,{encoding:n,buffer:s,maxBuffer:o}),l=Se(r,{encoding:n,buffer:s,maxBuffer:o*2});try{return await Promise.all([i,c,u,l])}catch(f){return Promise.all([{error:f,signal:f.signal,timedOut:f.timedOut},ye(e,c),ye(t,u),ye(r,l)])}},Ur=({input:e})=>{if(Wt(e))throw new TypeError("The `input` option cannot be a stream in sync mode")};Kt.exports={handleInput:Br,makeAllStream:Mr,getSpawnedResult:Fr,validateInputSync:Ur}});var Yt=a((Zs,zt)=>{"use strict";var Dr=(async()=>{})().constructor.prototype,Hr=["then","catch","finally"].map(e=>[e,Reflect.getOwnPropertyDescriptor(Dr,e)]),Xr=(e,t)=>{for(let[r,n]of Hr){let s=typeof t=="function"?(...o)=>Reflect.apply(n.value,t(),o):n.value.bind(t);Reflect.defineProperty(e,r,{...n,value:s})}return e},Wr=e=>new Promise((t,r)=>{e.on("exit",(n,s)=>{t({exitCode:n,signal:s})}),e.on("error",n=>{r(n)}),e.stdin&&e.stdin.on("error",n=>{r(n)})});zt.exports={mergePromise:Xr,getSpawnedPromise:Wr}});var Jt=a((Js,Zt)=>{"use strict";var Qt=(e,t=[])=>Array.isArray(t)?[e,...t]:[e],Kr=/^[\w.-]+$/,Vr=/"/g,zr=e=>typeof e!="string"||Kr.test(e)?e:`"${e.replace(Vr,'\\"')}"`,Yr=(e,t)=>Qt(e,t).join(" "),Qr=(e,t)=>Qt(e,t).map(r=>zr(r)).join(" "),Zr=/ +/g,Jr=e=>{let t=[];for(let r of e.trim().split(Zr)){let n=t[t.length-1];n&&n.endsWith("\\")?t[t.length-1]=`${n.slice(0,-1)} ${r}`:t.push(r)}return t};Zt.exports={joinCommand:Yr,getEscapedCommand:Qr,parseCommand:Jr}});var cn=a((eo,R)=>{"use strict";var es=require("path"),ge=require("child_process"),ts=lt(),ns=ft(),rs=ht(),ss=xt(),Q=Gt(),tn=At(),{spawnedKill:os,spawnedCancel:is,setupTimeout:cs,validateTimeout:as,setExitHandler:us}=jt(),{handleInput:ls,getSpawnedResult:ds,makeAllStream:fs,validateInputSync:ps}=Vt(),{mergePromise:en,getSpawnedPromise:ms}=Yt(),{joinCommand:nn,parseCommand:rn,getEscapedCommand:sn}=Jt(),hs=1e3*1e3*100,ys=({env:e,extendEnv:t,preferLocal:r,localDir:n,execPath:s})=>{let o=t?{...process.env,...e}:e;return r?rs.env({env:o,cwd:n,execPath:s}):o},on=(e,t,r={})=>{let n=ts._parse(e,t,r);return e=n.command,t=n.args,r=n.options,r={maxBuffer:hs,buffer:!0,stripFinalNewline:!0,extendEnv:!0,preferLocal:!1,localDir:r.cwd||process.cwd(),execPath:process.execPath,encoding:"utf8",reject:!0,cleanup:!0,all:!1,windowsHide:!0,...r},r.env=ys(r),r.stdio=tn(r),process.platform==="win32"&&es.basename(e,".exe")==="cmd"&&t.unshift("/q"),{file:e,args:t,options:r,parsed:n}},$=(e,t,r)=>typeof t!="string"&&!Buffer.isBuffer(t)?r===void 0?void 0:"":e.stripFinalNewline?ns(t):t,Z=(e,t,r)=>{let n=on(e,t,r),s=nn(e,t),o=sn(e,t);as(n.options);let i;try{i=ge.spawn(n.file,n.args,n.options)}catch(y){let S=new ge.ChildProcess,g=Promise.reject(Q({error:y,stdout:"",stderr:"",all:"",command:s,escapedCommand:o,parsed:n,timedOut:!1,isCanceled:!1,killed:!1}));return en(S,g)}let c=ms(i),u=cs(i,n.options,c),l=us(i,n.options,u),f={isCanceled:!1};i.kill=os.bind(null,i.kill.bind(i)),i.cancel=is.bind(null,i,f);let m=ss(async()=>{let[{error:y,exitCode:S,signal:g,timedOut:E},j,L,yn]=await ds(i,n.options,l),xe=$(n.options,j),we=$(n.options,L),be=$(n.options,yn);if(y||S!==0||g!==null){let ve=Q({error:y,exitCode:S,signal:g,stdout:xe,stderr:we,all:be,command:s,escapedCommand:o,parsed:n,timedOut:E,isCanceled:f.isCanceled,killed:i.killed});if(!n.options.reject)return ve;throw ve}return{command:s,escapedCommand:o,exitCode:0,stdout:xe,stderr:we,all:be,failed:!1,timedOut:!1,isCanceled:!1,killed:!1}});return ls(i,n.options.input),i.all=fs(i,n.options),en(i,m)};R.exports=Z;R.exports.sync=(e,t,r)=>{let n=on(e,t,r),s=nn(e,t),o=sn(e,t);ps(n.options);let i;try{i=ge.spawnSync(n.file,n.args,n.options)}catch(l){throw Q({error:l,stdout:"",stderr:"",all:"",command:s,escapedCommand:o,parsed:n,timedOut:!1,isCanceled:!1,killed:!1})}let c=$(n.options,i.stdout,i.error),u=$(n.options,i.stderr,i.error);if(i.error||i.status!==0||i.signal!==null){let l=Q({stdout:c,stderr:u,error:i.error,signal:i.signal,exitCode:i.status,command:s,escapedCommand:o,parsed:n,timedOut:i.error&&i.error.code==="ETIMEDOUT",isCanceled:!1,killed:i.signal!==null});if(!n.options.reject)return l;throw l}return{command:s,escapedCommand:o,exitCode:0,stdout:c,stderr:u,failed:!1,timedOut:!1,isCanceled:!1,killed:!1}};R.exports.command=(e,t)=>{let[r,...n]=rn(e);return Z(r,n,t)};R.exports.commandSync=(e,t)=>{let[r,...n]=rn(e);return Z.sync(r,n,t)};R.exports.node=(e,t,r={})=>{t&&!Array.isArray(t)&&typeof t=="object"&&(r=t,t=[]);let n=tn.node(r),s=process.execArgv.filter(c=>!c.startsWith("--inspect")),{nodePath:o=process.execPath,nodeOptions:i=s}=r;return Z(o,[...i,e,...Array.isArray(t)?t:[]],{...r,stdin:void 0,stdout:void 0,stderr:void 0,stdio:n,shell:!1})}});var gs={};vn(gs,{default:()=>hn});module.exports=En(gs);var w=require("@raycast/api");var dn=require("@raycast/api"),fn=J(require("path"));var an=J(require("node:process"),1),un=J(cn(),1);async function ln(e,{humanReadableOutput:t=!0}={}){if(an.default.platform!=="darwin")throw new Error("macOS only");let r=t?[]:["-ss"],{stdout:n}=await(0,un.default)("osascript",["-e",e,r]);return n}function pn(e){let t=fn.default.extname(e.path);return[".jpg",".jpeg",".png",".gif",".heic"].includes(t)}async function Ss(e){await(0,dn.closeMainWindow)(),await ln(e)}function mn(e){return Ss(`
    tell application "System Events"
      tell appearance preferences
        tell application "System Events"
          tell every desktop
            set picture to "${e}"
          end tell
        end tell
      end tell
    end tell
  `)}async function hn(){try{let e=await(0,w.getSelectedFinderItems)();if(e.length===0){(0,w.showHUD)("No picture selected");return}if(e.length!==1){(0,w.showHUD)("Only one picture should be selected");return}let t=e[0];if(!pn(t)){(0,w.showHUD)("Only pictures with these extensions are supported: .jpg, .jpeg, .png, .gif, .heic");return}await mn(t.path),(0,w.showHUD)("Wallpaper updated")}catch{(0,w.showHUD)("No picture selected")}}
