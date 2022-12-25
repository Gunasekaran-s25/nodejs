document.addEventListener("click",function(e){
  //update
  
    if(e.target.classlist.contains("edit-me")){
        let res = prompt("enter the new value",e.target.parentElement.parentElement.querySelector(".item-text").innerHTML )

        axios.post('/update-item',{text:res,id:e.target.getAttributes("data-id")}).then(function(){)
    e.target.parentElement.parentElement.querySelector(".item-text").innerHTML = res
}).catch(function(){
    console.log("error,try again")
})
}  
})

//delete
if(e.target.classlist.contains("delete-me")){
    confirm = ("Do you want delete")

    axios.post('/delete-item',{id:e.target.getAttributes("data-id")}).then(function(){)
e.target.parentElement.parentElement.remove
}).catch(function(){
console.log("error,try again")
})
}  
})