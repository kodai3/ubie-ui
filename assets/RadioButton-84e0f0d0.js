import{j as e}from"./jsx-runtime-9c4ae004.js";import{c as o}from"./clsx-1229b3e0.js";const u="_icon_1swrm_1",d="_medium_1swrm_12",c="_small_1swrm_17",p="_label_1swrm_23",_="_radio_1swrm_43",x="_text_1swrm_56",s={icon:u,medium:d,small:c,label:p,radio:_,text:x},b=({size:t="medium",checked:a,onChange:n,value:i,name:m,children:r,...l})=>e.jsx("div",{className:o(s[t]),children:e.jsxs("label",{className:s.label,children:[e.jsx("input",{type:"radio",checked:a,name:m,value:i,className:s.radio,onChange:n,...l}),e.jsx("span",{className:s.icon}),e.jsx("span",{className:s.text,children:r})]})});b.__docgenInfo={description:"",methods:[],displayName:"RadioButton",props:{name:{required:!0,tsType:{name:"string"},description:"グループ化（排他制御）したい要素には同じ名前をつける"},value:{required:!0,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"選択時のコールバックで渡される値"},children:{required:!0,tsType:{name:"InputHTMLAttributes['children']",raw:"InputHTMLAttributes<HTMLInputElement>['children']"},description:"ラベルに表示されるテキストまたは要素"},size:{required:!1,tsType:{name:"union",raw:"'medium' | 'small'",elements:[{name:"literal",value:"'medium'"},{name:"literal",value:"'small'"}]},description:`サイズ
@default medium`,defaultValue:{value:"'medium'",computed:!1}}}};export{b as R};