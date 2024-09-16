import{j as n}from"./jsx-runtime-69eee039.js";import{c as A}from"./clsx-1229b3e0.js";import{r as y}from"./index-7c191284.js";import{f as C}from"./component-22a2265d.js";const b="_text_gii90_1",B="_link_gii90_39",D="_bold_gii90_53",x="_body_gii90_58",h="_xs_gii90_58",w="_sm_gii90_62",q="_md_gii90_66",V="_lg_gii90_70",k="_heading_gii90_74",T="_xl_gii90_90",R="_button_gii90_94",j="_tag_gii90_106",N="_narrow_gii90_138",S="_main_gii90_143",H="_sub_gii90_147",L="_linkSub_gii90_155",M="_disabled_gii90_159",z="_primary_gii90_163",O="_accent_gii90_167",W="_alert_gii90_171",I="_white_gii90_175",P="_left_gii90_179",G="_center_gii90_183",J="_right_gii90_187",X="_nowrap_gii90_191",u={text:b,link:B,bold:D,body:x,xs:h,sm:w,md:q,lg:V,heading:k,xl:T,button:R,tag:j,default:"_default_gii90_115",narrow:N,main:S,sub:H,linkSub:L,disabled:M,primary:z,accent:O,alert:W,white:I,left:P,center:G,right:J,nowrap:X};function K(t,d){const{render:e,as:a="p",size:c="md",type:_="body",leading:m="default",bold:p=!1,noWrap:f=!1,color:l,children:g,id:F,textAlign:i,...E}=t,v=l??(a==="a"||a==="button"||e!=null?"link":"main");return((r,o)=>e?y.cloneElement(e,r,o):n.jsx(a,{...r,children:o}))({ref:d,id:F,className:A(u.text,u[c],u[_],u[m],u[v],i&&u[i],p&&u.bold,f&&u.nowrap),...E},n.jsx(n.Fragment,{children:g}))}const s=C(K);try{s.displayName="Text",s.__docgenInfo={description:"",displayName:"Text",props:{as:{defaultValue:{value:"p"},description:`レンダリングされる要素を指定。renderとは違い、HTMLのネイティブ要素に限定
また、指定した要素に応じて対応する属性も合わせて使用可能に`,name:"as",required:!1,type:{name:"ElementType"}},render:{defaultValue:null,description:`レンダリングされる要素を変更。フレームワークのリンクコンポーネントを想定しています
指定した場合、colorがデフォルトでlinkになります`,name:"render",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},children:{defaultValue:null,description:`表示するテキスト
pやdivなどを含めないでください（文法的にNGです）`,name:"children",required:!1,type:{name:"ReactNode"}},bold:{defaultValue:{value:"false"},description:"太字とするかどうか",name:"bold",required:!1,type:{name:"boolean"}},color:{defaultValue:{value:"main"},description:"文字色の抽象値",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"alert"'},{value:'"disabled"'},{value:'"link"'},{value:'"main"'},{value:'"sub"'},{value:'"accent"'},{value:'"white"'},{value:'"linkSub"'}]}},id:{defaultValue:null,description:"HTMLのid属性",name:"id",required:!1,type:{name:"string"}},textAlign:{defaultValue:null,description:"テキストの配置。指定しない場合、親要素の配置を継承",name:"textAlign",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"center"'},{value:'"right"'}]}},noWrap:{defaultValue:null,description:"領域が狭い場合でも折り返えさない",name:"noWrap",required:!1,type:{name:"boolean"}},type:{defaultValue:{value:"body"},description:"テキストの種類",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"heading"'},{value:'"body"'},{value:'"tag"'}]}},size:{defaultValue:{value:"md"},description:"フォントサイズの抽象値",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}},leading:{defaultValue:{value:`default
default
default`},description:"行送りの抽象値（`line-height`）",name:"leading",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"narrow"'}]}},ref:{defaultValue:null,description:"Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null` (or call the ref with `null` if you passed a callback ref).\n@see https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom",name:"ref",required:!1,type:{name:"Ref<any> | ((((instance: HTMLParagraphElement | null) => void) | RefObject<HTMLParagraphElement>) & (((instance: any) => void) | RefObject<...>))"}}}}}catch{}export{s as T};
