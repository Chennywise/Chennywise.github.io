import{B as k,S as v,V as n,T as x,C as i,a,b as T}from"./CardText-e5676477.js";import{V as _,P as C,c as r,b as P,a as l}from"./VCard-36d137e7.js";import{F as S}from"./FigureText-695d4a76.js";import{S as c}from"./SocialMediaButtons-16d5270a.js";import{V,k as I}from"./index-f1b8c507.js";import{I as L,C as A,D as F,E as t,m as e,O as s,F as h,M as d}from"./index-ef9cb0f5.js";import"./ssrBoot-68ec4ce3.js";const D="Skybox",B=`Our hackathon team for "To the moon and hack" by major league hacking chose to create a 3D star
  system simulator. The game works in a sandbox style where you can place down stars/planets and
  give them qualities such as velocity, mass, gravity constant, and radius. After entering all the
  desired entities, you can choose which planets/stars can move as well as delete unwanted ones.
  Once you press the play button, the physics engine will start to simulate the passage of time in
  this universe and what would happen with these conditions. You can also rotate and move the
  camera to better observe the simulated environment from different angles.`,R=365,U="Design Process",j=`Our team of 4 had 48 hours to create something of our choice using any programming language as
  long as the theme of "space" was respected. In this regard, we ultimately chose to create a
  sandbox game using python that heavily relied on physics since it was a shared interest of us
  all. This was my first hackathon experience, but I had already been comfortable with python for
  years and was confident enough to create something with my friends.`,O=`For this project, I mainly focused on the front-end to back-end connection between the buttons,
  images, and textboxes to receive inputs/outputs. Since it was a small group, we were each aware
  of everyone's roles and positions keenly but worked together when difficulties appeared, so I am
  also familiar with the structure of all the back-end functions.`,E="Automatically Loaded Sample",M=`The most challenging aspect of this hackathon for me was working with others for an extended
  period. Each member of the group trusted the others to fully complete their portion of the work
  without error and asked for help if they got stuck. This structure worked amazingly, but the
  challenging part for me was reading and understanding others' code who had different habits than
  mine when trying to help them with their unknown error. I overcame this slowly over two days,
  and I learned what it means to work in a small group and gained valuable experience
  working/learning under a tight time constraints.`,N="Currently Available Features",Y="https://github.com/Ahren-Chen/SkyBox",z="https://devpost.com/software/skybox-3ebh5z",m="#385F73",$={__name:"Skybox",setup(G){const u=new URL("/assets/banner-11b4c1af.avif",self.location).href,f=["Python"],g=["Teamwork","Communication","Time Management","Problem Solving","Creativity"],p=new URL("/assets/summary-89575af5.png",self.location).href,y=new URL("/assets/fully_loaded-43beaf0f.png",self.location).href,w=["Able to create a new star or planet by filling out oll the text boxes other than gravity constant, click on either the star or planet icon, and hitting confirm","To change the gravity constant, type in your desired gravity constant and hit apply","Click on a planet/star to select it, when selected, the entity will show a colored dot at the center","Use the trash can button to delete a selected entity, or the movable button to lock it in place","You may save the current star system by clicking save, or click load to load your saved star system","A demo star system has been pre loaded and can be accessed by pressing load","The mini map can be used to determin the direction you are facing and where objects in your star system are","The PAUSE and PLAY button can be used to enable the physics of the the system to unfold","The eye icon can be clicked to reset your perspective","Note: The gravity constant has been pre-set to 0.0004"];return(b,H)=>{const o=L("v-slot");return A(),F(_,{class:"fill-height"},{default:t(()=>[e(I,{class:"fill-height text-center"},{default:t(()=>[e(k,{imagePath:s(u)},null,8,["imagePath"]),e(C,{titleText:D}),e(v,{technical_skills_items:f,soft_skills_items:g}),e(n),e(x,{summaryText:B,summaryImg:s(p),height:R},null,8,["summaryImg"]),e(n),e(i,null,{default:t(()=>[e(o,null,{default:t(()=>[e(r,null,{default:t(()=>[h(d(U))]),_:1}),e(a,{text:j}),e(a,{text:O}),e(V,{cover:"",width:"500",src:s(y),class:"mx-auto"},null,8,["src"]),e(S,{text:E}),e(a,{text:M})]),_:1})]),_:1}),e(i,null,{default:t(()=>[e(o,null,{default:t(()=>[e(r,null,{default:t(()=>[h(d(N))]),_:1}),e(a,{text:b.ConclusionText},null,8,["text"]),e(T,{lines:"two",items:w,class:"mx-auto text-bold",color:"#81D4FA"}),e(P,{class:"pb-4 px-3 align-center justify-center"},{default:t(()=>[e(l,null,{default:t(()=>[e(c,{link:Y,icon:"mdi-github",title:"GitHub",color:m})]),_:1}),e(l,null,{default:t(()=>[e(c,{link:z,icon:"mdi-devpost",title:"Devpost",color:m})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}};export{$ as default};