import{j as z}from"./jsx-runtime-9c4ae004.js";import{c as p}from"./clsx-1229b3e0.js";import{p as V,m as B,r as D,c as N,a as u,b as h}from"./style-9d9d09b6.js";const w="_box_4s7hn_1",F="_backgroundColorPrimary_4s7hn_13",T="_backgroundColorPrimaryDarken_4s7hn_17",j="_backgroundColorAccent_4s7hn_21",v="_backgroundColorAccentDarken_4s7hn_25",W="_backgroundColorAlert_4s7hn_29",$="_backgroundColorGray_4s7hn_33",q="_backgroundColorWhite_4s7hn_37",E="_borderGray_4s7hn_41",I="_borderGrayThick_4s7hn_45",R="_borderPrimary_4s7hn_49",S="_borderPrimaryThick_4s7hn_53",U="_widthFull_4s7hn_57",H="_textBold_4s7hn_61",J="_textNormal_4s7hn_65",n={box:w,backgroundColorPrimary:F,backgroundColorPrimaryDarken:T,backgroundColorAccent:j,backgroundColorAccentDarken:v,backgroundColorAlert:W,backgroundColorGray:$,backgroundColorWhite:q,borderGray:E,borderGrayThick:I,borderPrimary:R,borderPrimaryThick:S,widthFull:U,textBold:H,textNormal:J},k=({type:r,size:e,leading:s})=>{if(r==null)return{};const o=r!=null&&e==null?"md":e,a=r!=null&&s==null?"default":s;switch(r){case"body":return{"--text-size":o?u({type:r,size:o}):"inherit","--text-leading":a?h({type:r,size:o||"md",leading:a}):"inherit"};case"note":return{"--text-size":o?u({type:r,size:o}):"inherit","--text-leading":a?h({type:r,size:o||"md",leading:a}):"inherit"}}return{}},m=r=>r.charAt(0).toUpperCase()+r.slice(1),K=({as:r="div",children:e,pt:s,pr:o,pb:a,pl:g,mt:C,mr:x,mb:y,ml:f,radius:P,backgroundColor:c,border:i,width:A,textType:l,textSize:d,textLeading:b,textColor:G,textBold:_})=>{let t={};return l==="body"?t=k({type:l,size:d,leading:b}):l==="note"&&(t=k({type:l,size:d,leading:b})),z.jsx(r,{className:p([n.box,c&&n[`backgroundColor${m(c)}`],i&&n[`border${m(i)}`],A&&n.widthFull,_&&n.textBold,_===!1&&n.textNormal]),style:{...V({pt:s,pr:o,pb:a,pl:g}),...B({mt:C,mr:x,mb:y,ml:f}),...D(P),...t,...N(G)},children:e})};K.__docgenInfo={description:"",methods:[],displayName:"Box",props:{as:{defaultValue:{value:"'div'",computed:!1},required:!1}}};export{K as B};
