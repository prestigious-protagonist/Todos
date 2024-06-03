
var counter=0;
 function marked(id){
     let btn=document.getElementById(id)
     btn.innerText="Done!"    
 }
 function addTodo(){
     const x=document.querySelector(".container");
     let title=document.querySelector("#title").value
     let desc=document.querySelector("#desc").value
     var t=document.createElement("div")
     var d=document.createElement("div")
     var b=document.createElement("button")
     counter++;
     b.setAttribute("id",`${counter}`)
     
     b.setAttribute("onclick",`marked(${counter})`)

     t.innerHTML=title;
     d.innerHTML=desc;
     b.innerHTML="Mark as done"
     x.appendChild(t)
     x.appendChild(d)
     x.appendChild(b)

 }
 function updating(state){
     let x=document.querySelector(".container")
     x.innerHTML=""
     for(let i=0;i<state.length;i++){

         var t=document.createElement("div")
         var d=document.createElement("div")
         var b=document.createElement("button")
       
         b.setAttribute("id",`${state[i].id}`)
         
         b.setAttribute("onclick",`marked(${state[i].id})`)

         t.innerHTML=state[i].title;
         d.innerHTML=state[i].description;
         b.innerHTML="Mark as done"
         x.appendChild(t)
         x.appendChild(d)
         x.appendChild(b)
     }

 }  

 window.setInterval(async ()=>{
     let t=await fetch("https://sum-server.100xdevs.com/todos");
     let data=await t.json();
     
     updating(data.todos);
 },5000)
