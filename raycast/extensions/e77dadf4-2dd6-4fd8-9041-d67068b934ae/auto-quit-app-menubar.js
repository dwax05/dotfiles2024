"use strict";var P=Object.create;var m=Object.defineProperty;var T=Object.getOwnPropertyDescriptor;var k=Object.getOwnPropertyNames;var F=Object.getPrototypeOf,L=Object.prototype.hasOwnProperty;var W=(e,n)=>{for(var t in n)m(e,t,{get:n[t],enumerable:!0})},w=(e,n,t,s)=>{if(n&&typeof n=="object"||typeof n=="function")for(let o of k(n))!L.call(e,o)&&o!==t&&m(e,o,{get:()=>n[o],enumerable:!(s=T(n,o))||s.enumerable});return e};var b=(e,n,t)=>(t=e!=null?P(F(e)):{},w(n||!e||!e.__esModule?m(t,"default",{value:e,enumerable:!0}):t,e)),H=e=>w(m({},"__esModule",{value:!0}),e);var B={};W(B,{default:()=>N});module.exports=H(B);var i=require("@raycast/api");var u=require("react"),f=require("@raycast/api");var y=require("@raycast/api");var c=new y.Cache;var S=b(require("node:process"),1),I=require("node:util"),d=require("node:child_process"),_=(0,I.promisify)(d.execFile);async function l(e,{humanReadableOutput:n=!0}={}){if(S.default.platform!=="darwin")throw new Error("macOS only");let t=n?[]:["-ss"],{stdout:s}=await _("osascript",["-e",e,t]);return s.trim()}var E=require("@raycast/api");async function A(e){for(let n=0;n<e.length;n++)try{let t=e[n].path.split("/").pop()?.replace(".app",""),s=await v(t),o=await x(t),p=await M(t);if(!s&&o&&!p){let a=`tell application "${t}"
   quit
end tell`;await l(a)}}catch(t){console.error(t)}}async function R(e){for(let n=0;n<e.length;n++)try{let t=e[n].path.split("/").pop()?.replace(".app","");if(await x(t)){let o=`tell application "${t}"
   quit
end tell`;await l(o)}}catch(t){console.error(t)}}async function M(e){try{return(await(0,E.getFrontmostApplication)())?.name==e}catch(n){return console.error(n),!1}}async function x(e){let n=`if application "${e}" is running then
	return true
else
	return false
end if`;try{return await l(n)=="true"}catch(t){return console.error(t),!1}}async function v(e){let n=`set appName to "${e}"
tell application "System Events"
    if not (exists process appName) then
        return false
    end if
    set appProcess to first process whose name is appName
    set appWindows to windows of appProcess
    if length of appWindows is 0 then
        return false
    else
        return true
    end if
end tell
`;try{return await l(n)=="true"}catch{return!1}}var Q=require("@raycast/api"),{layout:G,columns:J,itemInset:X,refreshInterval:g}=(0,Q.getPreferenceValues)();var q=()=>{let[e,n]=(0,u.useState)(!0),[t,s]=(0,u.useState)([]),o=(0,u.useCallback)(async()=>{n(!0);try{let p=c.get("Quit App"),a=[];typeof p=="string"&&(a=JSON.parse(p)),s(a)}catch(p){console.error(p)}if(f.environment.launchType==f.LaunchType.Background){let p=c.get("Refresh Interval"),a=5;if(typeof p=="string"&&(a=parseInt(p)),a==g)await A(t),c.set("Refresh Interval","5");else{let h=a+5;h>g?(await A(t),c.set("Refresh Interval","5")):c.set("Refresh Interval",String(h))}}else await A(t),c.set("Refresh Interval","5");n(!1)},[]);return(0,u.useEffect)(()=>{o()},[o]),{quitApps:t,loading:e}};var r=require("react/jsx-runtime");function N(){let{quitApps:e,loading:n}=q();return(0,r.jsxs)(i.MenuBarExtra,{icon:{source:{light:"menu-bar-icon.png",dark:"menu-bar-icon@dark.png"}},isLoading:n,tooltip:"Auto Quit App",children:[e.length!==0&&(0,r.jsx)(i.MenuBarExtra.Section,{title:"Auto Quit Apps",children:e?.map(t=>(0,r.jsx)(i.MenuBarExtra.Item,{title:t.name,icon:{fileIcon:t.path},tooltip:`Open ${t.name}`,onAction:async()=>{await(0,i.open)(t.path)}},t.name))}),e.length!==0&&(0,r.jsx)(i.MenuBarExtra.Section,{children:(0,r.jsx)(i.MenuBarExtra.Item,{title:"Quit All Apps",icon:i.Icon.XMarkTopRightSquare,shortcut:{modifiers:["cmd"],key:"q"},onAction:async()=>{await R(e)}})}),(0,r.jsx)(i.MenuBarExtra.Section,{children:(0,r.jsx)(i.MenuBarExtra.Item,{title:"Set Auto Quit App",icon:i.Icon.AppWindowGrid3x3,shortcut:{modifiers:["cmd"],key:"s"},onAction:()=>{(0,i.launchCommand)({name:"set-auto-quit-app",type:i.LaunchType.UserInitiated}).then()}})}),(0,r.jsx)(i.MenuBarExtra.Section,{children:(0,r.jsx)(i.MenuBarExtra.Item,{title:"Preferences",icon:i.Icon.Gear,shortcut:{modifiers:["cmd"],key:","},onAction:()=>{(0,i.openCommandPreferences)().then(()=>null)}})})]})}
