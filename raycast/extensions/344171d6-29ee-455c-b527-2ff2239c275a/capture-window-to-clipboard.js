"use strict";var c=Object.defineProperty;var p=Object.getOwnPropertyDescriptor;var s=Object.getOwnPropertyNames;var m=Object.prototype.hasOwnProperty;var f=(r,e)=>{for(var a in e)c(r,a,{get:e[a],enumerable:!0})},u=(r,e,a,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of s(e))!m.call(r,o)&&o!==a&&c(r,o,{get:()=>e[o],enumerable:!(i=p(e,o))||i.enumerable});return r};var w=r=>u(c({},"__esModule",{value:!0}),r);var l={};f(l,{default:()=>d});module.exports=w(l);var t=require("@raycast/api"),n=require("child_process"),d=async()=>{(0,n.exec)("/usr/sbin/screencapture -w -p -c"),await(0,t.closeMainWindow)()};