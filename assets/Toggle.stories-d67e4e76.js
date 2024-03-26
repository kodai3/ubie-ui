import{j as F,a as i}from"./jsx-runtime-03b4ddbf.js";import{c as f}from"./clsx-1229b3e0.js";import{r as n}from"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";const N="_root_1uifd_1",q="_on_1uifd_23",S="_off_1uifd_27",V="_thumb_1uifd_41",j="_thumbOn_1uifd_49",v="_thumbOff_1uifd_53",I="_input_1uifd_57",e={root:N,on:q,off:S,thumb:V,thumbOn:j,thumbOff:v,input:I},o=n.forwardRef(({checked:s,defaultChecked:y,onChange:c,...E},D)=>{const{current:d}=n.useRef(s===void 0),[O,x]=n.useState(y),r=d?O:s,T=l=>{d&&x(l.target.checked),c&&c(l)};return F("label",{ref:D,className:f(e.root,r?e.on:e.off),children:[i("input",{type:"checkbox",role:"switch",checked:r,onChange:T,className:e.input,...E}),i("span",{className:f(e.thumb,r?e.thumbOn:e.thumbOff)})]})});o.displayName="Toggle";try{o.displayName="Toggle",o.__docgenInfo={description:"",displayName:"Toggle",props:{checked:{defaultValue:null,description:"現在の状態が選択中かどうか",name:"checked",required:!1,type:{name:"boolean"}},defaultChecked:{defaultValue:{value:"false"},description:"初期状態が選択状態かどうか",name:"defaultChecked",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"値が変化した場合のコールバック",name:"onChange",required:!1,type:{name:"ChangeEventHandler<HTMLInputElement>"}},disabled:{defaultValue:{value:"false"},description:"無効状態かどうか",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}const A={title:"Form/Toggle",component:o},u={},t={args:{defaultChecked:!0}},a={args:{disabled:!0}};var m,p,h;u.parameters={...u.parameters,docs:{...(m=u.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(h=(p=u.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var _,g,b;t.parameters={...t.parameters,docs:{...(_=t.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    defaultChecked: true
  }
}`,...(b=(g=t.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var C,B,k;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(k=(B=a.parameters)==null?void 0:B.docs)==null?void 0:k.source}}};const L=["Default","DefaultChecked","Disabled"];export{u as Default,t as DefaultChecked,a as Disabled,L as __namedExportsOrder,A as default};
//# sourceMappingURL=Toggle.stories-d67e4e76.js.map
