import{j as e}from"./jsx-runtime-9c4ae004.js";import{c as C}from"./clsx-1229b3e0.js";import{r as R}from"./index-1b03fe98.js";import{s,V as c}from"./VariantIcon-3a60e005.js";import{m as S}from"./style-d1e19ac4.js";const P="_root_1ntiw_1",k="_spin_1ntiw_1",z="_circle_1ntiw_7",j={root:P,spin:k,circle:z,"circular-progress":"_circular-progress_1ntiw_1"},a=44,_=3.6,b=({...t})=>e.jsx("span",{role:"progressbar",className:j.root,...t,children:e.jsx("svg",{role:"img","aria-label":"読み込み中",viewBox:`${a/2} ${a/2} ${a} ${a}`,children:e.jsx("circle",{className:j.circle,cx:a,cy:a,r:(a-_)/2,fill:"none",strokeWidth:_})})});b.__docgenInfo={description:"",methods:[],displayName:"CircularProgress"};const g=R.forwardRef(({children:t,variant:r="primary",size:h="large",block:N=!1,icon:i,fixedIcon:n,suffixIcon:u,type:y="button",disabled:d=!1,loading:l=!1,onClick:o,mt:I,mr:V,mb:v,ml:q,...w},B)=>{const f=l?e.jsx(b,{}):i==="default"?e.jsx(c,{variant:r}):i,p=n==="default"?e.jsx(c,{variant:r}):n,m=u==="default"?e.jsx(c,{variant:r}):u,E=C({[s.button]:!0,[s[r]]:!0,[s[h]]:!0,[s.block]:N,[s.disabled]:d,[s.loading]:l}),$=x=>{if(l){x.preventDefault();return}o==null||o(x)};return e.jsxs("button",{type:y,className:E,style:{...S({mt:I,mr:V,mb:v,ml:q})},ref:B,disabled:d,"aria-disabled":l,onClick:$,...w,children:[p&&e.jsx("span",{className:s.fixedIcon,children:p}),e.jsxs("span",{className:s.label,children:[f&&e.jsx("span",{className:s.icon,children:f}),t,m&&e.jsx("span",{className:s.suffixIcon,children:m})]})]})});g.displayName="Button";g.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{defaultValue:{value:"'primary'",computed:!1},required:!1},size:{defaultValue:{value:"'large'",computed:!1},required:!1},block:{defaultValue:{value:"false",computed:!1},required:!1},type:{defaultValue:{value:"'button'",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},loading:{defaultValue:{value:"false",computed:!1},required:!1}}};export{g as B};
