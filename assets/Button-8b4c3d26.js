import{j as s}from"./jsx-runtime-9c4ae004.js";import{c as N}from"./clsx-1229b3e0.js";import{r as h}from"./index-1b03fe98.js";import{s as e,V as l}from"./VariantIcon-b335cb87.js";const f=h.forwardRef(({children:i,variant:a="primary",size:m="large",block:p=!1,icon:t,fixedIcon:o,suffixIcon:r,type:x="button",...u},j)=>{const c=t==="default"?s.jsx(l,{variant:a}):t,d=o==="default"?s.jsx(l,{variant:a}):o,n=r==="default"?s.jsx(l,{variant:a}):r,b=N({[e.button]:!0,[e[a]]:!0,[e[m]]:!0,[e.block]:p,[e.disabled]:!!u.disabled});return s.jsxs("button",{type:x,className:b,ref:j,...u,children:[d&&s.jsx("span",{className:e.fixedIcon,children:d}),s.jsxs("span",{className:e.label,children:[c&&s.jsx("span",{className:e.icon,children:c}),i,n&&s.jsx("span",{className:e.suffixIcon,children:n})]})]})});f.displayName="Button";f.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{defaultValue:{value:"'primary'",computed:!1},required:!1},size:{defaultValue:{value:"'large'",computed:!1},required:!1},block:{defaultValue:{value:"false",computed:!1},required:!1},type:{defaultValue:{value:"'button'",computed:!1},required:!1}}};export{f as B};
