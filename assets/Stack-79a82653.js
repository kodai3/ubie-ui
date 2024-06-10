import{j as l}from"./jsx-runtime-69eee039.js";import{c as B}from"./clsx-1229b3e0.js";import{r as t}from"./index-7c191284.js";import{p as F,m as C}from"./style-e9a2251f.js";const y="_stack_9352n_1",D={stack:y},n=({as:u="div",children:s,className:r,spacing:i,alignItems:m="stretch",justifyContent:v="flex-start",pt:d,pr:p,pb:x,pl:c,mt:o,mr:E,mb:f,ml:g,...A})=>((e,a)=>t.isValidElement(u)?t.cloneElement(u,u.props,l.jsx("div",{...e,children:a})):l.jsx(u,{...e,children:a}))({className:B(r,D.stack),style:{alignItems:`${m}`,justifyContent:`${v}`,gap:`var(--size-spacing-${i})`,...F({pt:d,pr:p,pb:x,pl:c}),...C({mt:o,mr:E,mb:f,ml:g})},...A},s);try{n.displayName="Stack",n.__docgenInfo={description:`Stackコンポーネント
一方向に一定のリズムで要素を積み上げるレイアウト`,displayName:"Stack",props:{as:{defaultValue:{value:"div"},description:"レンダリングされるコンポーネントまたはHTML要素",name:"as",required:!1,type:{name:"keyof HTMLElementTagNameMap | ReactElement<ComponentType<FC<PropsWithChildren<PropsWithoutText | PropsWithTextBody | PropsWithTextNote>>>, string | JSXElementConstructor<...>>"}},spacing:{defaultValue:null,description:"子要素の間隔",name:"spacing",required:!0,type:{name:"enum",value:[{value:'"xxs"'},{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'}]}},alignItems:{defaultValue:{value:"stretch"},description:"水平方向における子要素のレイアウトを定める。",name:"alignItems",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"flex-start"'},{value:'"center"'},{value:'"flex-end"'},{value:'"stretch"'},{value:'"baseline"'}]}},justifyContent:{defaultValue:{value:"flex-start"},description:`垂直方向における子要素のレイアウトを定める。
@deprecated directionが削除されたため必要なくなりました`,name:"justifyContent",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"flex-start"'},{value:'"center"'},{value:'"flex-end"'},{value:'"space-between"'},{value:'"space-around"'},{value:'"space-evenly"'}]}},className:{defaultValue:null,description:`CSSのクラス
@deprecated マージンなどをつけたい場合は<Box>を使ってください`,name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"子要素",name:"children",required:!0,type:{name:"ReactNode"}},mt:{defaultValue:null,description:"margin-topの値。Spacing Tokenのキーを指定",name:"mt",required:!1,type:{name:"enum",value:[{value:'"xxs"'},{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'}]}},mr:{defaultValue:null,description:"margin-rightの値。Spacing Tokenのキーを指定",name:"mr",required:!1,type:{name:"enum",value:[{value:'"xxs"'},{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'}]}},mb:{defaultValue:null,description:"margin-bottomの値。Spacing Tokenのキーを指定",name:"mb",required:!1,type:{name:"enum",value:[{value:'"xxs"'},{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'}]}},ml:{defaultValue:null,description:"margin-leftの値。Spacing Tokenのキーを指定",name:"ml",required:!1,type:{name:"enum",value:[{value:'"xxs"'},{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'}]}},pt:{defaultValue:null,description:"padding-topの値。Spacing Tokenのキーを指定",name:"pt",required:!1,type:{name:"enum",value:[{value:'"xxs"'},{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'}]}},pr:{defaultValue:null,description:"padding-rightの値。Spacing Tokenのキーを指定",name:"pr",required:!1,type:{name:"enum",value:[{value:'"xxs"'},{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'}]}},pb:{defaultValue:null,description:"padding-bottomの値。Spacing Tokenのキーを指定",name:"pb",required:!1,type:{name:"enum",value:[{value:'"xxs"'},{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'}]}},pl:{defaultValue:null,description:"padding-leftの値。Spacing Tokenのキーを指定",name:"pl",required:!1,type:{name:"enum",value:[{value:'"xxs"'},{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'}]}}}}}catch{}export{n as S};
