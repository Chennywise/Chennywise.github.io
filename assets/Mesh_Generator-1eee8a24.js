import{B as b,S as v,V as n,T as x,C as i,a as o}from"./CardText-e5676477.js";import{V as k,P as _,c as r,b as j,a as I}from"./VCard-36d137e7.js";import{T as P}from"./TwoColumnImage-c016fce3.js";import{F as l}from"./FigureText-695d4a76.js";import{S as C}from"./SocialMediaButtons-16d5270a.js";import{V as h,k as V}from"./index-f1b8c507.js";import{I as M,C as R,D as O,E as t,m as e,O as a,F as c,M as d}from"./index-ef9cb0f5.js";import"./ssrBoot-68ec4ce3.js";const U="Mesh Generator",L=`This project was the first ever self directed major project that I had worked on since starting university.
    The project goal was to use what we had learned with Object Oriented Programming in Java and use it to create a
    2D mesh generator. The project was split into 3 components: the mesh details generator, the mesh viewer, and
    the actual mesh polygon generator. The mesh polygon generator was the first component that I had to work on and
    it was all about independently creating a randomized mesh of polygons based on the user's input. Next came the mesh
    viewer which was all about displaying the mesh that was generated. Finally, the mesh details generator was all about
    adding on physical properties to the polygons that were generated. This included things like altitude, temperature,
    biomes, rivers, cities, roads, lakes, aquifers, and more.`,S=500,D="Design Process",F=`The project details weren't given to us initally, everyone had thought that creating a mesh polygon generator
    was all we had to do. With that in mind, there wasn't much thought when it came to creating something that was
    sustainable and scalable. When the announcement was made that we had to add details onto the generated mesh, it
    was a mad scramble to refactor the code to make it work. The mesh viewer was the easiest part of the project as
    it was all about taking a mesh and displaying it. The project description and requirements were vague and it was
    purposefully done to see how we would handle the situation. The professor wanted to mimic a real world scenario
    where we were working with a client who didn't know exactly what they wanted from the get go.`,z="Generated Mesh Polygon Example",B=`Despite all the initial challenges that I faced, I was able to successfully create something that I thought
    was what the professor was looking for. For the next phase of the project, everyone had to form a group of 3
    and work on adding details to the output file that the mesh polygon generator created. The mesh details generator
    would take in the output file and add on physical properties to the polygons based on user input. Details included,
    island shapes, soils, elevation, biomes, rivers, lakes, aquifers, and viewing modes (such as heat map, precipitation,
    and elevation). The mesh details generator was the most challenging part of the project as it was all about working
    together with a group to create something that was cohesive and achievable within the time frame given.`,G="Map With Rivers Example",E="Precipitation View Example",q=`For the final phase of the project, we went back to working individually to create cities and roads based 
    not only on the user input and shortest path, but also on the physical properties of the mesh. The cities and
    roads need to be reasonable in the sense that a road can't be built on a mountain or in the middle of a lake.
    This added one more layer of complexity to the project since I had to take into account how certain 
    user input and randomization combinations would make some cities and roads impossible to build.`,N="Final Example: Urbanization",W="Conclusion",H=`This project was a great learning experience for me as it was the first time that I had the opportunity to
    apply what I had learned in class to a larger scale project. The project was challenging and required a lot of
    time and effort to complete. Through trial and error, I was able to learn how to effectively implement Object
    Oriented Programming on a practical level. Through working with others, I was able to effectively resolve
    conflicts and express my ideas in a way that was understandable to others. Overall, this was an enjoyable
    course that I had the pleasure of working on and I look forward to working on more projects like this in the
    future.`,J="https://github.com/Ahren-Chen/MeshGenerator",A="secondary",ne={__name:"Mesh_Generator",setup(K){const m=new URL("/assets/banner-769b625a.avif",self.location).href,u=["Java","Bash Scripting","Maven","Log4j"],p=["Teamwork","Communication","Time Management","Problem Solving","Perseverance"],g=new URL("/assets/summary-66c68219.png",self.location).href,w=new URL("/assets/mesh-ec901748.png",self.location).href,f=new URL("/assets/rivers-a94f0f9c.png",self.location).href,y=new URL("/assets/precipitation-e8c5593d.png",self.location).href,T=new URL("/assets/urbanization-6516ce28.png",self.location).href;return(Q,X)=>{const s=M("v-slot");return R(),O(k,{class:"fill-height"},{default:t(()=>[e(V,{class:"fill-height text-center"},{default:t(()=>[e(b,{imagePath:a(m)},null,8,["imagePath"]),e(_,{titleText:U}),e(v,{technical_skills_items:u,soft_skills_items:p}),e(n),e(x,{summaryText:L,summaryImg:a(g),height:S},null,8,["summaryImg"]),e(n),e(i,null,{default:t(()=>[e(s,null,{default:t(()=>[e(r,null,{default:t(()=>[c(d(D))]),_:1}),e(o,{text:F}),e(h,{cover:"",width:"500",src:a(w),class:"mx-auto"},null,8,["src"]),e(l,{text:z}),e(o,{text:B}),e(P,{imageOne:a(f),imageTwo:a(y),textOne:G,textTwo:E},null,8,["imageOne","imageTwo"]),e(o,{text:q}),e(h,{cover:"",width:"500",src:a(T),class:"mx-auto"},null,8,["src"]),e(l,{text:N})]),_:1})]),_:1}),e(i,null,{default:t(()=>[e(s,null,{default:t(()=>[e(r,null,{default:t(()=>[c(d(W))]),_:1}),e(o,{text:H}),e(j,{class:"pb-4 px-3 align-center justify-center"},{default:t(()=>[e(I,null,{default:t(()=>[e(C,{link:J,icon:"mdi-github",title:"GitHub",color:A})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}};export{ne as default};