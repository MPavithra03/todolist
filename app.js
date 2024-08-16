const input=document.querySelector("#input");
const button=document.querySelector("#button");
const form=document.querySelector("#form");
const olis=document.querySelector("#olis");
let new1;
let new2;
let new3;
let arra=[]; 
let ind;  
let val; 
let ch; 

form.addEventListener('submit',function(e){
    e.preventDefault();
    let ipv=input.value.toLowerCase(); 
    if(new1=="add") {
        if(input.value==""){
            input.setAttribute("placeholder","It's Empty...");
            input.value="";
        }
        else{
        const lis=document.createElement("LI");
        lis.append(`${input.value}`);
        olis.append(lis);
        arra.push(input.value);
        input.value="";
        input.setAttribute("placeholder","Type any option");
        new1="";
            }
    }
    else if(ipv =="new" || ipv =="n")
    {
        input.value="";
        input.setAttribute("placeholder","Type todo...");
        new1="add";
    } 
    else if(ipv =="delete" ||ipv =="d"){
       if(arra.length===0){
        input.value="";
        input.setAttribute("placeholder","Empty!!! Nothing to delete");
        input.value="";
       }
       else if(arra.length===1){
        const ol=document.getElementById("olis");
        ol.innerHTML="";
        input.value="";
       }
       
       else{
        input.value="";
        input.setAttribute("placeholder","Type to Delete...");
        new2="remove";
       }
    }
     else if (new2 =="remove"){
        let che=isFinite(input.value);
        let siz=input.value<=arra.length;

        if(input.value==""){
            input.setAttribute("placeholder","Empty ...");
            input.value="";
        }
        else if(input.value==0){
            input.setAttribute("placeholder","Enter valid number!!!");
            input.value="";
        }
        else if(che==true && siz==true){
            const ol=document.getElementById("olis");
            ol.innerHTML="";
            input.value--;
            arra.splice(input.value,1);
            let list=document.getElementById("olis");
            for(let i=0;i<arra.length;++i){
            var li=document.createElement("li");
            li.innerText=arra[i];
            list.appendChild(li);
            }
            input.value="";
            input.setAttribute("placeholder","Type any option");
            new2="";
         
        }
        else{
            input.setAttribute("placeholder","Enter valid number!!!");
            input.value="";
        }
     }
    else if(ipv =="edit" || ipv =="e"){
        if(arra.length===0){
            input.value="";
            input.setAttribute("placeholder","Empty!!! nothing to edit");
            input.value="";
        }
        else if(arra.length===1){
            val=arra[0];
            input.value=val;
            ind=arra.indexOf(val);
            new3="modf";
        }
        else{
        input.value="";
        input.setAttribute("placeholder","Select to edit...");
        new3="modify";
        }
    } 
    else if(new3=="modify"){
        ch=input.value;
        let on = isFinite(ch);
        let siz = ch <= arra.length;
        if(ch==""){
            input.setAttribute("placeholder","Empty type number");
            input.value="";
        }
        else if(ch==0){
            input.setAttribute("placeholder","Enter valid number!!!");
            input.value="";
        }
        else if(siz==true && on==true){
            val=arra[ch-1];
            input.value=val;
            ind=arra.indexOf(val);
            new3="modf";
        }
        else{
            input.setAttribute("placeholder","Enter valid number!!!");
            input.value="";
        }
      
    }
    else if(new3=="modf")
    {
        
            let att=input.value;
            if(att==""){
                input.setAttribute("placeholder","Empty!!!");
                input.value="";
            }
            else if(att==0){
                input.setAttribute("placeholder","Enter valid number!!!");
                input.value="";
            }
            else{
            const ol=document.getElementById("olis");
            ol.innerHTML="";
            arra.splice(ind,1,att);
            let list=document.getElementById("olis");
            for(let i=0;i<arra.length;++i){
            var li=document.createElement("li");
            li.innerText=arra[i];
            list.appendChild(li);
           }
           input.value="";
           input.setAttribute("placeholder","Type any option");
           new3="";
        }
        
    }
        
    else if(ipv == "quit" || ipv == "q")
    {
        input.value="";
        input.placeholder="Quitting...";
        document.getElementById("input").disabled=true;
        document.getElementById("button").disabled=true;
    }
    
    else{
        input.value="";
        input.placeholder="Enter valid input!!!";
        input.value="";
    } 
})
