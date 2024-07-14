import{_ as y}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as r,K as i,L as e,c as h,N as v,P as k,Q as c,e as t,b as d,d as w,M as p}from"./app-51564aae.js";const N={name:"NavCard",components:{},props:{arr:{type:String,default:""}},data(){return{cardArr:JSON.parse(this.arr),type:"success"}},methods:{gotoSite(a){window.open(a,"_blank").location}}},C=["src","alt"],b={style:{"text-align":"right"}},B={style:{"font-size":"10px",color:"#999999"}};function S(a,V,$,A,_,u){const s=l("el-col"),m=l("el-button"),f=l("el-tooltip"),n=l("el-row"),x=l("el-card");return r(),i(n,{gutter:30},{default:e(()=>[(r(!0),h(k,null,v(_.cardArr,(o,g)=>(r(),i(s,{xs:24,sm:24,md:12,lg:8,xl:8,key:g,style:{"margin-top":"20px",height:"100px",width:"100%",overflow:"auto"}},{default:e(()=>[c(' <el-link class="link-style" :underline="false" target="_blank" :href="cardObj.url" > '),c(` <el-card class="box-card" shadow="always" :body-style="{ padding:'5px' }" > `),t(x,{shadow:"never","body-style":{padding:"20px"}},{default:e(()=>[t(n,{class:"box-card-header"},{default:e(()=>[t(s,{xs:12,sm:12,md:12,lg:12,xl:12,style:{padding:"0px"}},{default:e(()=>[d("img",{style:{width:"30px",height:"30px","text-align":"left"},src:a.$withBase(o.icon),alt:o.title},null,8,C)]),_:2},1024),t(s,{xs:12,sm:12,md:12,lg:12,xl:12,style:{padding:"0px"}},{default:e(()=>[d("div",b,[t(f,{effect:"dark",content:o.desc,placement:"bottom"},{default:e(()=>[t(m,{type:_.type,plain:"",onClick:L=>u.gotoSite(o.url)},{default:e(()=>[w(p(o.title),1)]),_:2},1032,["type","onClick"])]),_:2},1032,["content"])])]),_:2},1024)]),_:2},1024),t(n,{class:"box-card-body"},{default:e(()=>[d("div",B,p(o.desc),1)]),_:2},1024)]),_:2},1024),c(" </el-link> ")]),_:2},1024))),128))]),_:1})}const E=y(N,[["render",S],["__file","NavCard.vue"]]);export{E as default};
