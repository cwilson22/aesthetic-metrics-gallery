import{c as pe,a as x,t as re,d as W}from"../chunks/C2CRrhbj.js";import{i as me}from"../chunks/yGvSlmE9.js";import{C as pr,x as yr,J as Fe,A as oe,D as kr,I as xr,g as c,a7 as xe,W as mr,X as Ze,Y as Te,B as Ae,ao as wr,Z as nr,y as or,_ as _r,ax as Be,as as ir,G as Qe,ay as je,a4 as Cr,M as $e,v as Er,az as Ye,aA as Ar,ar as Sr,aB as zr,z as Mr,aC as Xe,aD as Pr,am as Lr,aE as dr,a1 as qe,aF as Ir,aG as Nr,b as gr,a0 as Je,a2 as Dr,$ as cr,p as we,aH as Ue,aI as ye,aJ as Me,f as te,j as _e,O as $,aK as ne,e as X,k as K,l as H,t as Y,aL as Fr,n as ee,s as A,aM as Se,aN as Tr}from"../chunks/C0tkKv0H.js";import{l as Ie,e as y,s as he}from"../chunks/CXYUqKF5.js";import{c as hr,l as de,p as _,i as ce,b as Br,s as Hr}from"../chunks/ClgRhrvY.js";import{t as ke,s as ie,a as fe,b,e as Or,c as ur,r as Ge,d as Rr,f as qr,g as er,N as Gr}from"../chunks/Ba86NtfS.js";import{o as Vr}from"../chunks/CeqEPuNF.js";import{b as rr}from"../chunks/D9Xy-dqK.js";function ve(r,e){return e}function Yr(r,e,a,s){for(var t=[],i=e.length,l=0;l<i;l++)Ar(e[l].e,t,!0);var g=i>0&&t.length===0&&a!==null;if(g){var f=a.parentNode;Sr(f),f.append(a),s.clear(),ue(r,e[0].prev,e[i-1].next)}zr(t,()=>{for(var u=0;u<i;u++){var o=e[u];g||(s.delete(o.k),ue(r,o.prev,o.next)),Mr(o.e,!g)}})}function be(r,e,a,s,t,i=null){var l=r,g={flags:e,items:new Map,first:null},f=(e&dr)!==0;if(f){var u=r;l=oe?Fe(kr(u)):u.appendChild(pr())}oe&&xr();var o=null,D=!1,v=xe(()=>{var k=a();return Er(k)?k:k==null?[]:ir(k)});yr(()=>{var k=c(v),h=k.length;if(D&&h===0)return;D=h===0;let C=!1;if(oe){var M=l.data===mr;M!==(h===0)&&(l=Ze(),Fe(l),Te(!1),C=!0)}if(oe){for(var F=null,B,E=0;E<h;E++){if(Ae.nodeType===8&&Ae.data===wr){l=Ae,C=!0,Te(!1);break}var m=k[E],p=s(m,E);B=fr(Ae,g,F,null,m,p,E,t,e,a),g.items.set(p,B),F=B}h>0&&Fe(Ze())}oe||Xr(k,g,l,t,e,s,a),i!==null&&(h===0?o?nr(o):o=or(()=>i(l)):o!==null&&_r(o,()=>{o=null})),C&&Te(!0),c(v)}),oe&&(l=Ae)}function Xr(r,e,a,s,t,i,l){var P,d,z,q;var g=(t&Ir)!==0,f=(t&(Xe|Ye))!==0,u=r.length,o=e.items,D=e.first,v=D,k,h=null,C,M=[],F=[],B,E,m,p;if(g)for(p=0;p<u;p+=1)B=r[p],E=i(B,p),m=o.get(E),m!==void 0&&((P=m.a)==null||P.measure(),(C??(C=new Set)).add(m));for(p=0;p<u;p+=1){if(B=r[p],E=i(B,p),m=o.get(E),m===void 0){var J=v?v.e.nodes_start:a;h=fr(J,e,h,h===null?e.first:h.next,B,E,p,s,t,l),o.set(E,h),M=[],F=[],v=h.next;continue}if(f&&Jr(m,B,p,t),(m.e.f&Be)!==0&&(nr(m.e),g&&((d=m.a)==null||d.unfix(),(C??(C=new Set)).delete(m))),m!==v){if(k!==void 0&&k.has(m)){if(M.length<F.length){var V=F[0],R;h=V.prev;var ae=M[0],N=M[M.length-1];for(R=0;R<M.length;R+=1)ar(M[R],V,a);for(R=0;R<F.length;R+=1)k.delete(F[R]);ue(e,ae.prev,N.next),ue(e,h,ae),ue(e,N,V),v=V,h=N,p-=1,M=[],F=[]}else k.delete(m),ar(m,v,a),ue(e,m.prev,m.next),ue(e,m,h===null?e.first:h.next),ue(e,h,m),h=m;continue}for(M=[],F=[];v!==null&&v.k!==E;)(v.e.f&Be)===0&&(k??(k=new Set)).add(v),F.push(v),v=v.next;if(v===null)continue;m=v}M.push(m),h=m,v=m.next}if(v!==null||k!==void 0){for(var O=k===void 0?[]:ir(k);v!==null;)(v.e.f&Be)===0&&O.push(v),v=v.next;var S=O.length;if(S>0){var n=(t&dr)!==0&&u===0?a:null;if(g){for(p=0;p<S;p+=1)(z=O[p].a)==null||z.measure();for(p=0;p<S;p+=1)(q=O[p].a)==null||q.fix()}Yr(e,O,n,o)}}g&&qe(()=>{var U;if(C!==void 0)for(m of C)(U=m.a)==null||U.apply()}),Qe.first=e.first&&e.first.e,Qe.last=h&&h.e}function Jr(r,e,a,s){(s&Xe)!==0&&je(r.v,e),(s&Ye)!==0?je(r.i,a):r.i=a}function fr(r,e,a,s,t,i,l,g,f,u){var o=(f&Xe)!==0,D=(f&Pr)===0,v=o?D?Cr(t):$e(t):t,k=(f&Ye)===0?l:$e(l),h={i:k,v,k:i,a:null,e:null,prev:a,next:s};try{return h.e=or(()=>g(r,v,k,u),oe),h.e.prev=a&&a.e,h.e.next=s&&s.e,a===null?e.first=h:(a.next=h,a.e.next=h.e),s!==null&&(s.prev=h,s.e.prev=h.e),h}finally{}}function ar(r,e,a){for(var s=r.next?r.next.e.nodes_start:a,t=e?e.e.nodes_start:a,i=r.e.nodes_start;i!==s;){var l=Lr(i);t.before(i),i=l}}function ue(r,e,a){e===null?r.first=a:(e.next=a,e.e.next=a&&a.e),a!==null&&(a.prev=e,a.e.prev=e&&e.e)}function Ur(r,e,a=e){var s=Nr();Ie(r,"input",t=>{var i=t?r.defaultValue:r.value;if(i=Oe(r)?Re(i):i,a(i),s&&i!==(i=e())){var l=r.selectionStart,g=r.selectionEnd;r.value=i??"",g!==null&&(r.selectionStart=l,r.selectionEnd=Math.min(g,r.value.length))}}),(oe&&r.defaultValue!==r.value||gr(e)==null&&r.value)&&a(Oe(r)?Re(r.value):r.value),Je(()=>{var t=e();Oe(r)&&t===Re(r.value)||r.type==="date"&&!t&&!r.value||t!==r.value&&(r.value=t??"")})}const He=new Set;function Wr(r,e,a,s,t=s){var i=a.getAttribute("type")==="checkbox",l=r;let g=!1;if(e!==null)for(var f of e)l=l[f]??(l[f]=[]);l.push(a),Ie(a,"change",()=>{var u=a.__value;i&&(u=tr(l,u,a.checked)),t(u)},()=>t(i?[]:null)),Je(()=>{var u=s();if(oe&&a.defaultChecked!==a.checked){g=!0;return}i?(u=u||[],a.checked=u.includes(a.__value)):a.checked=hr(a.__value,u)}),Dr(()=>{var u=l.indexOf(a);u!==-1&&l.splice(u,1)}),He.has(l)||(He.add(l),qe(()=>{l.sort((u,o)=>u.compareDocumentPosition(o)===4?-1:1),He.delete(l)})),qe(()=>{if(g){var u;if(i)u=tr(l,u,a.checked);else{var o=l.find(D=>D.checked);u=o==null?void 0:o.__value}t(u)}})}function Kr(r,e,a=e){Ie(r,"change",s=>{var t=s?r.defaultChecked:r.checked;a(t)}),(oe&&r.defaultChecked!==r.checked||gr(e)==null)&&a(r.checked),Je(()=>{var s=e();r.checked=!!s})}function tr(r,e,a){for(var s=new Set,t=0;t<r.length;t+=1)r[t].checked&&s.add(r[t].__value);return a||s.delete(e),Array.from(s)}function Oe(r){var e=r.type;return e==="number"||e==="range"}function Re(r){return r===""?null:+r}function vr(r,e,a){if(r.multiple)return jr(r,e);for(var s of r.options){var t=ze(s);if(hr(t,e)){s.selected=!0;return}}(!a||e!==void 0)&&(r.selectedIndex=-1)}function Zr(r,e){cr(()=>{var a=new MutationObserver(()=>{var s=r.__value;vr(r,s)});return a.observe(r,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),()=>{a.disconnect()}})}function Qr(r,e,a=e){var s=!0;Ie(r,"change",t=>{var i=t?"[selected]":":checked",l;if(r.multiple)l=[].map.call(r.querySelectorAll(i),ze);else{var g=r.querySelector(i)??r.querySelector("option:not([disabled])");l=g&&ze(g)}a(l)}),cr(()=>{var t=e();if(vr(r,t,s),s&&t===void 0){var i=r.querySelector(":checked");i!==null&&(t=ze(i),a(t))}r.__value=t,s=!1}),Zr(r)}function jr(r,e){for(var a of r.options)a.selected=~e.indexOf(ze(a))}function ze(r){return"__value"in r?r.__value:r.value}var $r=re("<a><!></a>"),ea=re("<label><!></label>"),ra=re("<button><!></button>");function ge(r,e){const a=de(e,["children","$$slots","$$events","$$legacy"]),s=de(a,["pill","outline","size","href","type","color","shadow","tag","checked","disabled"]);we(e,!1);const t=Ue("group");let i=_(e,"pill",8,!1),l=_(e,"outline",8,!1),g=_(e,"size",8,t?"sm":"md"),f=_(e,"href",24,()=>{}),u=_(e,"type",8,"button"),o=_(e,"color",24,()=>t?l()?"dark":"alternative":"primary"),D=_(e,"shadow",8,!1),v=_(e,"tag",8,"button"),k=_(e,"checked",24,()=>{}),h=_(e,"disabled",8,!1);const C={alternative:"text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-400 hover:text-primary-700 focus-within:text-primary-700 dark:focus-within:text-white dark:hover:text-white dark:hover:bg-gray-700",blue:"text-white bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700",dark:"text-white bg-gray-800 hover:bg-gray-900 dark:bg-gray-800 dark:hover:bg-gray-700",green:"text-white bg-green-700 hover:bg-green-800 dark:bg-green-600 dark:hover:bg-green-700",light:"text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600",primary:"text-white bg-primary-700 hover:bg-primary-800 dark:bg-primary-600 dark:hover:bg-primary-700",purple:"text-white bg-purple-700 hover:bg-purple-800 dark:bg-purple-600 dark:hover:bg-purple-700",red:"text-white bg-red-700 hover:bg-red-800 dark:bg-red-600 dark:hover:bg-red-700",yellow:"text-white bg-yellow-400 hover:bg-yellow-500 ",none:""},M={alternative:"text-primary-700 border dark:text-primary-500 bg-gray-100 dark:bg-gray-700 border-gray-300 shadow-gray-300 dark:shadow-gray-800 shadow-inner",blue:"text-blue-900 bg-blue-400 dark:bg-blue-500 shadow-blue-700 dark:shadow-blue-800 shadow-inner",dark:"text-white bg-gray-500 dark:bg-gray-600 shadow-gray-800 dark:shadow-gray-900 shadow-inner",green:"text-green-900 bg-green-400 dark:bg-green-500 shadow-green-700 dark:shadow-green-800 shadow-inner",light:"text-gray-900 bg-gray-100 border border-gray-300 dark:bg-gray-500 dark:text-gray-900 dark:border-gray-700 shadow-gray-300 dark:shadow-gray-700 shadow-inner",primary:"text-primary-900 bg-primary-400 dark:bg-primary-500 shadow-primary-700 dark:shadow-primary-800 shadow-inner",purple:"text-purple-900 bg-purple-400 dark:bg-purple-500 shadow-purple-700 dark:shadow-purple-800 shadow-inner",red:"text-red-900 bg-red-400 dark:bg-red-500 shadow-red-700 dark:shadow-red-800 shadow-inner",yellow:"text-yellow-900 bg-yellow-300 dark:bg-yellow-400 shadow-yellow-500 dark:shadow-yellow-700 shadow-inner",none:""},F={alternative:"focus-within:ring-gray-200 dark:focus-within:ring-gray-700",blue:"focus-within:ring-blue-300 dark:focus-within:ring-blue-800",dark:"focus-within:ring-gray-300 dark:focus-within:ring-gray-700",green:"focus-within:ring-green-300 dark:focus-within:ring-green-800",light:"focus-within:ring-gray-200 dark:focus-within:ring-gray-700",primary:"focus-within:ring-primary-300 dark:focus-within:ring-primary-800",purple:"focus-within:ring-purple-300 dark:focus-within:ring-purple-900",red:"focus-within:ring-red-300 dark:focus-within:ring-red-900",yellow:"focus-within:ring-yellow-300 dark:focus-within:ring-yellow-900",none:""},B={alternative:"shadow-gray-500/50 dark:shadow-gray-800/80",blue:"shadow-blue-500/50 dark:shadow-blue-800/80",dark:"shadow-gray-500/50 dark:shadow-gray-800/80",green:"shadow-green-500/50 dark:shadow-green-800/80",light:"shadow-gray-500/50 dark:shadow-gray-800/80",primary:"shadow-primary-500/50 dark:shadow-primary-800/80",purple:"shadow-purple-500/50 dark:shadow-purple-800/80",red:"shadow-red-500/50 dark:shadow-red-800/80 ",yellow:"shadow-yellow-500/50 dark:shadow-yellow-800/80 ",none:""},E={alternative:"text-gray-900 dark:text-gray-400 hover:text-white border border-gray-800 hover:bg-gray-900 focus-within:bg-gray-900 focus-within:text-white focus-within:ring-gray-300 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-600 dark:focus-within:ring-gray-800",blue:"text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600",dark:"text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus-within:bg-gray-900 focus-within:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-600",green:"text-green-700 hover:text-white border border-green-700 hover:bg-green-800 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600",light:"text-gray-500 hover:text-gray-900 bg-white border border-gray-200 dark:border-gray-600 dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600",primary:"text-primary-700 hover:text-white border border-primary-700 hover:bg-primary-700 dark:border-primary-500 dark:text-primary-500 dark:hover:text-white dark:hover:bg-primary-600",purple:"text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500",red:"text-red-700 hover:text-white border border-red-700 hover:bg-red-800 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600",yellow:"text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400",none:""},m={xs:"px-3 py-2 text-xs",sm:"px-4 py-2 text-sm",md:"px-5 py-2.5 text-sm",lg:"px-5 py-3 text-base",xl:"px-6 py-3.5 text-base"},p=()=>l()||o()==="alternative"||o()==="light";let J=ne();ye(()=>(X(g()),X(l()),X(k()),X(o()),X(i()),X(D()),X(h()),X(a)),()=>{$(J,ke("text-center font-medium",t?"focus-within:ring-2":"focus-within:ring-4",t&&"focus-within:z-10",t||"focus-within:outline-hidden","inline-flex items-center justify-center "+m[g()],l()&&k()&&"border dark:border-gray-900",l()&&k()&&M[o()],l()&&!k()&&E[o()],!l()&&k()&&M[o()],!l()&&!k()&&C[o()],o()==="alternative"&&(t&&!k()?"dark:bg-gray-700 dark:text-white dark:border-gray-700 dark:hover:border-gray-600 dark:hover:bg-gray-600":"dark:bg-transparent dark:border-gray-600 dark:hover:border-gray-600"),l()&&o()==="dark"&&(t?k()?"bg-gray-900 border-gray-800 dark:border-white dark:bg-gray-600":"dark:text-white border-gray-800 dark:border-white":"dark:text-gray-400 dark:border-gray-700"),F[o()],p()&&t&&"not-first:-ms-px",t?i()&&"first:rounded-s-full last:rounded-e-full"||"first:rounded-s-lg last:rounded-e-lg":i()&&"rounded-full"||"rounded-lg",D()&&"shadow-lg",D()&&B[o()],h()&&"cursor-not-allowed opacity-50",a.class))}),Me(),me();var V=pe(),R=te(V);{var ae=O=>{var S=$r();let n;var P=K(S);ie(P,e,"default",{}),H(S),Y(()=>n=fe(S,n,{href:f(),...s,class:c(J),role:"button"})),y("click",S,function(d){b.call(this,e,d)}),y("change",S,function(d){b.call(this,e,d)}),y("keydown",S,function(d){b.call(this,e,d)}),y("keyup",S,function(d){b.call(this,e,d)}),y("touchstart",S,function(d){b.call(this,e,d)},void 0,!0),y("touchend",S,function(d){b.call(this,e,d)}),y("touchcancel",S,function(d){b.call(this,e,d)}),y("mouseenter",S,function(d){b.call(this,e,d)}),y("mouseleave",S,function(d){b.call(this,e,d)}),y("mouseup",S,function(d){b.call(this,e,d)}),y("mousedown",S,function(d){b.call(this,e,d)}),x(O,S)},N=(O,S)=>{{var n=d=>{var z=ea();let q;var U=K(z);ie(U,e,"default",{}),H(z),Y(()=>q=fe(z,q,{...s,class:c(J)})),x(d,z)},P=(d,z)=>{{var q=G=>{var w=ra();let Z;var le=K(w);ie(le,e,"default",{}),H(w),Y(()=>Z=fe(w,Z,{type:u(),...s,disabled:h(),class:c(J)})),y("click",w,function(L){b.call(this,e,L)}),y("change",w,function(L){b.call(this,e,L)}),y("keydown",w,function(L){b.call(this,e,L)}),y("keyup",w,function(L){b.call(this,e,L)}),y("touchstart",w,function(L){b.call(this,e,L)},void 0,!0),y("touchend",w,function(L){b.call(this,e,L)}),y("touchcancel",w,function(L){b.call(this,e,L)}),y("mouseenter",w,function(L){b.call(this,e,L)}),y("mouseleave",w,function(L){b.call(this,e,L)}),y("mouseup",w,function(L){b.call(this,e,L)}),y("mousedown",w,function(L){b.call(this,e,L)}),x(G,w)},U=G=>{var w=pe(),Z=te(w);Or(Z,v,!1,(le,L)=>{let Ce;Y(()=>Ce=fe(le,Ce,{...s,class:c(J)},void 0,le.namespaceURI===Fr,le.nodeName.includes("-")));var Pe=pe(),Ee=te(Pe);ie(Ee,e,"default",{}),x(L,Pe)}),x(G,w)};ce(d,G=>{v()==="button"?G(q):G(U,!1)},z)}};ce(O,d=>{v()==="label"?d(n):d(P,!1)},S)}};ce(R,O=>{f()&&!h()?O(ae):O(N,!1)})}x(r,V),_e()}var aa=re("<label><!></label>");function Ve(r,e){const a=de(e,["children","$$slots","$$events","$$legacy"]),s=de(a,["color","defaultClass","show"]);we(e,!1);const t=ne();let i=_(e,"color",12,"gray"),l=_(e,"defaultClass",8,"text-sm rtl:text-right font-medium block"),g=_(e,"show",8,!0),f=ne();const u={gray:"text-gray-900 dark:text-gray-300",green:"text-green-700 dark:text-green-500",red:"text-red-700 dark:text-red-500",disabled:"text-gray-400 dark:text-gray-500 grayscale contrast-50"};ye(()=>(c(f),X(i())),()=>{var C;const h=(C=c(f))==null?void 0:C.control;i(h!=null&&h.disabled?"disabled":i())}),ye(()=>(X(l()),X(i()),X(a)),()=>{$(t,ke(l(),u[i()],a.class))}),Me(),me();var o=pe(),D=te(o);{var v=h=>{var C=aa();let M;var F=K(C);ie(F,e,"default",{}),H(C),Br(C,B=>$(f,B),()=>c(f)),Y(()=>M=fe(C,M,{...s,class:c(t)})),x(h,C)},k=h=>{var C=pe(),M=te(C);ie(M,e,"default",{}),x(h,C)};ce(D,h=>{g()?h(v):h(k,!1)})}x(r,o),_e()}const ta={primary:"text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600",secondary:"text-secondary-600 focus:ring-secondary-500 dark:focus:ring-secondary-600",red:"text-red-600 focus:ring-red-500 dark:focus:ring-red-600",green:"text-green-600 focus:ring-green-500 dark:focus:ring-green-600",purple:"text-purple-600 focus:ring-purple-500 dark:focus:ring-purple-600",teal:"text-teal-600 focus:ring-teal-500 dark:focus:ring-teal-600",yellow:"text-yellow-400 focus:ring-yellow-500 dark:focus:ring-yellow-600",orange:"text-orange-500 focus:ring-orange-500 dark:focus:ring-orange-600",blue:"text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600"},lr=(r,e)=>ke(r?"inline-flex":"flex","items-center",e),sr=(r,e,a,s,t,i)=>ke("w-4 h-4 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2",t,s?"dark:bg-gray-600 dark:border-gray-500":"dark:bg-gray-700 dark:border-gray-600",r&&"sr-only peer","rounded",ta[e],i);var la=re(" <input> <!>",1),sa=re("<input> <!>",1);function na(r,e){const a=ur(e),s=de(e,["children","$$slots","$$events","$$legacy"]),t=de(s,["color","custom","inline","group","choices","value","checked","spacing","groupLabelClass","groupInputClass"]);we(e,!1);const i=[];let l=_(e,"color",8,"primary"),g=_(e,"custom",8,!1),f=_(e,"inline",8,!1),u=_(e,"group",28,()=>[]),o=_(e,"choices",24,()=>[]),D=_(e,"value",8,"on"),v=_(e,"checked",28,()=>{}),k=_(e,"spacing",24,()=>a.default?"me-2":""),h=_(e,"groupLabelClass",8,""),C=_(e,"groupInputClass",8,""),M=Ue("background");me();var F=pe(),B=te(F);{var E=p=>{var J=pe(),V=te(J);be(V,1,o,ve,(R,ae,N,O)=>{let S=()=>c(ae).value,n=()=>c(ae).label;const P=xe(()=>lr(f(),h()));Ve(R,{get class(){return c(P)},show:a.default,for:`checkbox-${N}`,children:(d,z)=>{ee();var q=la(),U=te(q),G=A(U);Ge(G);let w;var Z=A(G,2);ie(Z,e,"default",{}),Y(le=>{he(U,`${n()??""} `),w=fe(G,w,{id:`checkbox-${N}`,type:"checkbox",value:S(),...t,class:le})},[()=>sr(g(),l(),!0,M,k(),C())],xe),Wr(i,[],G,()=>(S(),u()),u),x(d,q)},$$slots:{default:!0}})}),x(p,J)},m=p=>{const J=xe(()=>lr(f(),s.class));Ve(p,{get class(){return c(J)},show:a.default,children:(V,R)=>{var ae=sa(),N=te(ae);Ge(N);let O;var S=A(N,2);ie(S,e,"default",{}),Y(n=>O=fe(N,O,{type:"checkbox",value:D(),...t,class:n}),[()=>sr(g(),l(),!0,M,k(),a.default||s.class)],xe),Kr(N,v),y("keyup",N,function(n){b.call(this,e,n)}),y("keydown",N,function(n){b.call(this,e,n)}),y("keypress",N,function(n){b.call(this,e,n)}),y("focus",N,function(n){b.call(this,e,n)}),y("blur",N,function(n){b.call(this,e,n)}),y("click",N,function(n){b.call(this,e,n)}),y("mouseover",N,function(n){b.call(this,e,n)}),y("mouseenter",N,function(n){b.call(this,e,n)}),y("mouseleave",N,function(n){b.call(this,e,n)}),y("paste",N,function(n){b.call(this,e,n)}),y("change",N,function(n){b.call(this,e,n)}),x(V,ae)},$$slots:{default:!0}})};ce(B,p=>{o().length>0?p(E):p(m,!1)})}x(r,F),_e()}var oa=re("<input>");function ia(r,e){const a=de(e,["children","$$slots","$$events","$$legacy"]),s=de(a,["value","size"]);we(e,!1);let t=_(e,"value",12,0),i=_(e,"size",8,"md");const l={sm:"h-1 range-sm",md:"h-2",lg:"h-3 range-lg"};let g=ne();ye(()=>(X(i()),X(a)),()=>{$(g,ke("w-full bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700",l[i()]??l.md,a.class))}),Me(),me();var f=oa();Ge(f);let u;Y(()=>u=fe(f,u,{type:"range",...s,class:c(g)})),Ur(f,t),y("change",f,function(o){b.call(this,e,o)}),y("click",f,function(o){b.call(this,e,o)}),y("keydown",f,function(o){b.call(this,e,o)}),y("keypress",f,function(o){b.call(this,e,o)}),y("keyup",f,function(o){b.call(this,e,o)}),x(r,f),_e()}var da=re("<!> <span></span> <!>",1);function Le(r,e){const a=ur(e),s=de(e,["children","$$slots","$$events","$$legacy"]),t=de(s,["size","group","value","checked","customSize","classDiv","disabled"]);we(e,!1);let i=_(e,"size",8,"default"),l=_(e,"group",28,()=>[]),g=_(e,"value",8,""),f=_(e,"checked",28,()=>{}),u=_(e,"customSize",8,""),o=_(e,"classDiv",8,""),D=_(e,"disabled",8,!1),v=Ue("background");const k="me-3 shrink-0 bg-gray-200 rounded-full peer-focus:ring-4 peer-checked:after:translate-x-full peer-checked:rtl:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:bg-white after:border-gray-300 after:border after:rounded-full after:transition-all",h={primary:"peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 peer-checked:bg-primary-600",secondary:"peer-focus:ring-secondary-300 dark:peer-focus:ring-secondary-800 peer-checked:bg-secondary-600",red:"peer-focus:ring-red-300 dark:peer-focus:ring-red-800 peer-checked:bg-red-600",green:"peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:bg-green-600",purple:"peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 peer-checked:bg-purple-600",yellow:"peer-focus:ring-yellow-300 dark:peer-focus:ring-yellow-800 peer-checked:bg-yellow-400",teal:"peer-focus:ring-teal-300 dark:peer-focus:ring-teal-800 peer-checked:bg-teal-600",orange:"peer-focus:ring-orange-300 dark:peer-focus:ring-orange-800 peer-checked:bg-orange-500",blue:"peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 peer-checked:bg-blue-600"},C={small:"w-9 h-5 after:top-[2px] after:start-[2px] after:h-4 after:w-4",default:"w-11 h-6 after:top-0.5 after:start-[2px] after:h-5 after:w-5",large:"w-14 h-7 after:top-0.5 after:start-[4px]  after:h-6 after:w-6",custom:u()};let M=ne(),F=ne();ye(()=>(X(t),X(i()),X(o())),()=>{$(M,ke(k,a.offLabel?"ms-3":"",v?"dark:bg-gray-600 dark:border-gray-500":"dark:bg-gray-700 dark:border-gray-600",h[t.color??"primary"],C[i()],"relative",o()))}),ye(()=>X(D()),()=>{$(F,D()?"cursor-not-allowed grayscale contrast-50 text-gray-400":"cursor-pointer text-gray-900")}),Me(),me();const B=xe(()=>ke(c(F),s.class));na(r,Hr({custom:!0},()=>t,{get disabled(){return D()},get class(){return c(B)},get value(){return g()},get checked(){return f()},set checked(E){f(E)},get group(){return l()},set group(E){l(E)},$$events:{click(E){b.call(this,e,E)},change(E){b.call(this,e,E)}},children:(E,m)=>{var p=da(),J=te(p);ie(J,e,"offLabel",{});var V=A(J,2),R=A(V,2);ie(R,e,"default",{}),Y(()=>Rr(V,1,qr(c(M)))),x(E,p)},$$slots:{default:!0},$$legacy:!0})),_e()}var ga=re("<!> <!>",1),ca=re('<div class="flex gap-4 items-center mt-3 mb-2"><p class="w-64 flex-1 text-sm font-medium text-gray-700">Individual Aesthetic Metrics:</p> <!> <!></div> <div class="flex flex-wrap gap-2 mb-3"></div> <div class="flex gap-4 items-center mt-3 mb-2"><p class="w-64 flex-1 text-sm font-medium text-gray-700">Metric + Crossing Minimization:</p> <!> <!></div> <div class="flex flex-wrap gap-2 mb-3"></div> <div class="flex gap-4 items-center mt-3 mb-2"><p class="w-64 flex-1 text-sm font-medium text-gray-700">Y-Metric With Fixed X:</p> <!> <!></div> <div class="flex flex-wrap gap-2 mb-3"></div> <div class="flex gap-4 items-center mt-3 mb-2"><p class="w-64 flex-1 text-sm font-medium text-gray-700">Y-Metric + Edge Length Minimization:</p> <!> <!></div> <div class="flex flex-wrap gap-2 mb-3"></div>',1),ha=re("<option> </option>"),ua=re('<div class="relative ring-2 ring-gray-300 p-2 pb-5 rounded-lg"><img class="h-auto max-w-full rounded-lg max-h-60"> <div class="absolute bottom-0 left-0 text-gray text-sm p-2 w-full"><!></div></div>'),fa=re('<div class="max-w-5xl mx-auto m-2"><div class="flex items-center mb-2"><p class="text-lg text-gray-700 me-5">Filter by Experiment:</p> <!></div> <!> <div class="mb-4 flex items-center mt-4"><label for="graph" class="text-lg text-gray-700">Filter by Graph:</label> <div class="ms-5 me-5 w-100"><!> <!></div> <select class="mt-1 block w-50 p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:border-indigo-300"></select></div>      <div class="grid grid-cols-3 gap-4"></div></div>');function va(r,e){we(e,!1);let a=[];Vr(async()=>{a=await(await fetch(`${rr}/data.json`)).json(),u()});let s=["All","graph513","graph808","graph750","graph1068","graph1099","graph761","graph530","graph769","graph1058","graph2339","graph912","graph747","graph536","graph516","graph576","graph594","graph1853","graph2115","graph1615","graph1741","graph2559","graph534","graph1618","graph2964","graph1658","graph2354","graph624","graph2585","graph1893","graph1835","graph242","graph1619","graph2450","graph1546","graph1909","graph1184","graph244","graph1766","graph2060","graph1152","graph1397","graph1091","graph2825","graph424","graph1341","graph1645","graph2780","graph1988","graph879","graph1862","graph1195","graph1127","graph1412","graph1377","graph9919","graph2993","graph2616","graph1923","graph2723","graph1355","graph2517","graph1666","graph1282","graph317","graph11427","graph1747","graph950","graph1196","graph2677","graph2840","graph5759","graph1445","graph11673","graph1949","graph2452","graph6121","graph1539","graph1206","graph1730","graph10796","graph3061","graph11415","graph1434","graph11013","graph10337","graph5961","graph1785","graph2947","graph1974","graph915","graph11611","graph10065","graph10341","graph3930","graph3588","graph2822","graph9874","graph2381","graph6435","graph7659","graph10005","graph9900","graph3534","graph5486","graph7286","graph11662","graph6615","graph7433","graph3751","graph3440","graph4051","graph10846","graph6246","graph2497","graph6814","graph6429","graph6404","graph7658","graph3226","graph4295","graph6127","graph8287","graph6004","graph4249","graph9668","graph8050","graph3564","graph9403","graph5324","graph4522","graph9808","graph10080","graph4128","graph5198","graph6423","graph9041","graph6305","graph8639","graph8693","graph5841","graph3069","graph7777","graph7969","graph3308","graph8466","graph10304","graph8543","graph8201","graph4200","graph8836","graph7174","graph11407","graph10097","graph9308"],t=["Crossings","EdgeLength","CrossingAngle","CrossingFairness","LengthFairness","NodeSymmetry","EdgeSymmetry","EdgeBundling","MinMaxCrossings","MaxPlanar","Crossings + EdgeLength","Crossings + CrossingAngle","Crossings + CrossingFairness","Crossings + LengthFairness","Crossings + NodeSymmetry","Crossings + EdgeSymmetry","Crossings + EdgeBundling","Crossings + MinMaxCrossings","Crossings + MaxPlanar","EdgeLength (fixed x)","CrossingAngle (fixed x)","LengthFairness (fixed x)","NodeSymmetry (fixed x)","EdgeSymmetry (fixed x)","EdgeLength + CrossingAngle (fixed x)","EdgeLength + LengthFairness (fixed x)","EdgeLength + NodeSymmetry (fixed x)","Bend + EdgeSymmetry (fixed x)"],i=!1,l=ne("All"),g=ne(t.map(()=>!1));Se(g,c(g)[0]=!0);let f=ne(a);function u(){c(l)==="All"?$(f,a.filter(n=>n.stream===i)):$(f,a.filter(n=>n.stream===i&&n.alt===c(l))),$(f,c(f).filter(n=>c(g)[t.indexOf(n.exp)])),$(f,c(f).filter(n=>n.nodes>=c(C)))}function o(n,P){$(g,c(g).map((d,z)=>n<=z&&z<P?!0:d)),u()}function D(n,P){$(g,c(g).map((d,z)=>n<=z&&z<P?!1:d)),u()}let v=ne(!0);function k(){$(v,!c(v))}function h(){u()}let C=ne(10);const M=10,F=200;ye(()=>{},()=>{u()}),Me(),me();var B=fa(),E=K(B),m=A(K(E),2);ge(m,{class:"",color:"blue",$$events:{click:k},children:(n,P)=>{var d=ga(),z=te(d);{var q=w=>{var Z=W("Hide Experiment Filters");x(w,Z)};ce(z,w=>{c(v)&&w(q)})}var U=A(z,2);{var G=w=>{var Z=W("Show Experiment Filters");x(w,Z)};ce(U,w=>{c(v)||w(G)})}x(n,d)},$$slots:{default:!0}}),H(E);var p=A(E,2);{var J=n=>{var P=ca(),d=te(P),z=A(K(d),2);ge(z,{class:"flex-none",color:"alternative",$$events:{click:()=>o(0,10)},children:(T,Q)=>{ee();var I=W("Select All");x(T,I)},$$slots:{default:!0}});var q=A(z,2);ge(q,{class:"flex-none",color:"alternative",$$events:{click:()=>D(0,10)},children:(T,Q)=>{ee();var I=W("Deselect All");x(T,I)},$$slots:{default:!0}}),H(d);var U=A(d,2);be(U,5,()=>t.slice(0,10),ve,(T,Q,I)=>{Le(T,{get checked(){return c(g)[I]},set checked(j){Se(g,c(g)[I]=j)},$$events:{change:u},children:(j,De)=>{ee();var se=W();Y(()=>he(se,c(Q))),x(j,se)},$$slots:{default:!0},$$legacy:!0})}),H(U);var G=A(U,2),w=A(K(G),2);ge(w,{class:"flex-none",color:"alternative",$$events:{click:()=>o(10,19)},children:(T,Q)=>{ee();var I=W("Select All");x(T,I)},$$slots:{default:!0}});var Z=A(w,2);ge(Z,{class:"flex-none",color:"alternative",$$events:{click:()=>D(10,19)},children:(T,Q)=>{ee();var I=W("Deselect All");x(T,I)},$$slots:{default:!0}}),H(G);var le=A(G,2);be(le,5,()=>t.slice(10,19),ve,(T,Q,I)=>{Le(T,{get checked(){return c(g)[I+10]},set checked(j){Se(g,c(g)[I+10]=j)},$$events:{change:u},children:(j,De)=>{ee();var se=W();Y(()=>he(se,c(Q))),x(j,se)},$$slots:{default:!0},$$legacy:!0})}),H(le);var L=A(le,2),Ce=A(K(L),2);ge(Ce,{class:"flex-none",color:"alternative",$$events:{click:()=>o(19,24)},children:(T,Q)=>{ee();var I=W("Select All");x(T,I)},$$slots:{default:!0}});var Pe=A(Ce,2);ge(Pe,{class:"flex-none",color:"alternative",$$events:{click:()=>D(19,24)},children:(T,Q)=>{ee();var I=W("Deselect All");x(T,I)},$$slots:{default:!0}}),H(L);var Ee=A(L,2);be(Ee,5,()=>t.slice(19,24),ve,(T,Q,I)=>{Le(T,{get checked(){return c(g)[I+19]},set checked(j){Se(g,c(g)[I+19]=j)},$$events:{change:u},children:(j,De)=>{ee();var se=W();Y(()=>he(se,c(Q))),x(j,se)},$$slots:{default:!0},$$legacy:!0})}),H(Ee);var Ne=A(Ee,2),We=A(K(Ne),2);ge(We,{class:"flex-none",color:"alternative",$$events:{click:()=>o(24,28)},children:(T,Q)=>{ee();var I=W("Select All");x(T,I)},$$slots:{default:!0}});var br=A(We,2);ge(br,{class:"flex-none",color:"alternative",$$events:{click:()=>D(24,28)},children:(T,Q)=>{ee();var I=W("Deselect All");x(T,I)},$$slots:{default:!0}}),H(Ne);var Ke=A(Ne,2);be(Ke,5,()=>t.slice(24,28),ve,(T,Q,I)=>{Le(T,{get checked(){return c(g)[I+24]},set checked(j){Se(g,c(g)[I+24]=j)},$$events:{change:u},children:(j,De)=>{ee();var se=W();Y(()=>he(se,c(Q))),x(j,se)},$$slots:{default:!0},$$legacy:!0})}),H(Ke),x(n,P)};ce(p,n=>{c(v)&&n(J)})}var V=A(p,2),R=A(K(V),2),ae=K(R);Ve(ae,{children:(n,P)=>{ee();var d=W();Y(()=>he(d,`Min nodes: ${c(C)??""}`)),x(n,d)},$$slots:{default:!0}});var N=A(ae,2);ia(N,{id:"range-steps",min:M,max:F,step:"5",get value(){return c(C)},set value(n){$(C,n)},$$events:{change:h},$$legacy:!0}),H(R);var O=A(R,2);Y(()=>{c(l),Tr(()=>{})}),be(O,5,()=>s,ve,(n,P)=>{var d=ha(),z={},q=K(d,!0);H(d),Y(()=>{z!==(z=c(P))&&(d.value=(d.__value=c(P))==null?"":c(P)),he(q,c(P))}),x(n,d)}),H(O),H(V);var S=A(V,2);be(S,5,()=>c(f),ve,(n,P)=>{var d=ua(),z=K(d),q=A(z,2),U=K(q);{var G=w=>{var Z=W();Y(()=>he(Z,c(P).alt)),x(w,Z)};ce(U,w=>{c(P).alt&&w(G)})}H(q),H(d),Y(()=>{er(z,"src",`${rr}/${c(P).src}`),er(z,"alt",c(P).alt)}),x(n,d)}),H(S),H(B),Qr(O,()=>c(l),n=>$(l,n)),y("change",O,u),x(r,B),_e()}var ba=re('<div class="w-screen"><!> <!></div>');function Ea(r){var e=ba(),a=K(e);Gr(a);var s=A(a,2);va(s,{}),H(e),x(r,e)}export{Ea as component};
