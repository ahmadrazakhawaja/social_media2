 document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll(".Newx").forEach(exa =>{
    exa.style.display='none';
  });

function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== '') {
      const cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
          const cookie = cookies[i].trim();
          // Does this cookie string begin with the name we want?
          if (cookie.substring(0, name.length + 1) === (name + '=')) {
              cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
              break;
          }
      }
  }
  return cookieValue;
}


function readURL(input,input2) {
    console.log(input.get('post_image2'))
    console.log(URL.createObjectURL(input.get('post_image2')))
      var output = input2;
      output.src = URL.createObjectURL(input.get('post_image2'));
     
  
}





  if ( document.querySelector("#fkx")==null){
    
  }
  else{
    document.querySelector("#fkx").onclick = function(){
        fetch('/follow', {
            method: 'POST',
            body: JSON.stringify({
                content: document.querySelector('#fkx').innerHTML,
                id: document.querySelector('#ido').value
            }),
            headers: { "X-CSRFToken": getCookie('csrftoken')}
          })
          .then(response => {
            if(response.status===201){
               lol = 1;
               return response.json();
            }
            else{
              lol = 2;
              return response.json();
            }
          })
          .then(result => {
            
             if (result.message == "following this User."){
              document.querySelector('#fkx').innerHTML = "Unfollow"
              document.querySelector('#follo').innerHTML = parseInt(document.querySelector('#follo').innerHTML) + 1
             }
             else if(result.message == "Already following."){
              
             }
             else if(result.message == "Already Unfollowed"){
              
             }
             else if(result.message == "You have unfollowed this user"){
              document.querySelector('#fkx').innerHTML = "Follow"
              document.querySelector('#follo').innerHTML = parseInt(document.querySelector('#follo').innerHTML) - 1
             }
             else if(result.message == "Please dont change the button value."){
              location.reload();
             }
             else{
              location.reload();
             }


                alert(result.message);
              
              console.log(result);
          })
          
          
    }
  }
  if(document.querySelector("#change_description")){
  document.querySelector("#change_description").style.display='none'
  
  document.querySelector("#edit_description").onclick=function(){

    document.querySelector("#change_description").style.display='block'

    document.querySelector("#description").style.display='none'
    document.querySelector("#edit_description").style.display='none'

    document.querySelector(".cancel_description").onclick=function(){
      document.querySelector("#description").style.display='block'
      document.querySelector("#change_description").style.display='none'
      document.querySelector("#edit_description").style.display='block'
      return false
    }
    return false
  }
}


document.querySelectorAll(".edit").forEach(exa =>{
  exa.onclick = function(){
  const parent= event.target.parentNode.parentNode
  parent.style.display='none'
  parent.nextElementSibling.style.display='block'
  document.querySelectorAll(".submitv").forEach(lkx => {
    lkx.onclick = function(){
      const vt = event.target.parentNode
    const parent2= vt.parentNode
    parent2.previousElementSibling.style.display='block'
  parent2.style.display='none'
  return false
    }
  })
  document.querySelectorAll(".submitxc").forEach(lkx => {
    lkx.onclick = function(){
      const vt = event.target.parentNode
    const parent2= vt.parentNode
     lk = parent2.querySelector('.submitxv').value
     var formdata = new FormData(parent2.querySelector('.newpost'))
     formdata.append('post_id',lk)
     fetch('/edit', {
      method: 'POST',
      body: formdata,
      headers: { "X-CSRFToken": getCookie('csrftoken')},
      enctype: 'multipart/form-data',
    })
    .then(response => {
      if(response.status===201){
         lol = 1;
         return response.json();
      }
      else{
        lol = 2;
        return response.json();
      }
    })
    .then(result => {
      if(lol===1){
      alert(result.message)
      alert(parent.querySelector('.content').innerHTML)
      parent.querySelector('.content').innerHTML= vt.querySelector('.tx').value
      if(formdata.get('post_image2').size!=0){
        readURL(formdata,parent.querySelector('#image'))
      }
      }
      else{
        alert(result.message)
      }
      
    })
    parent2.previousElementSibling.style.display='block'
  parent2.style.display='none'
  return false
    }
  })
  
    
    
}

})
document.querySelectorAll('.newpost').forEach(bx => {
  bx.onsubmit=function(){
    return false
  }
})

document.querySelectorAll('.like').forEach(kx => {
  console.log(kx.parentNode)
  if( kx.nextElementSibling!=null &&  kx.nextElementSibling.innerHTML==='Like'){
    kx.nextElementSibling.remove()
  }
  kx.onclick = function(){
  const bk= event.target.parentNode.parentNode
  sk = bk.querySelector('.submitmv')

    fetch('/like', {
      method: 'POST',
      body: JSON.stringify({
          content: kx.innerHTML,
          id: sk.value
      }),
      headers: { "X-CSRFToken": getCookie('csrftoken')}
    })
    .then(response => {
      if(response.status===201){
         lol = 1;
         return response.json();
      }
      else{
        lol = 2;
        return response.json();
      }
    })
    .then(result => {
      if(lol===1){
      alert(result.message)
      if(result.message=="Post Liked"){
        bk.querySelector('.likes').innerHTML = result.likes
      kx.innerHTML= "Unlike"
      }
      else if (result.message=="Post Unliked"){
        bk.querySelector('.likes').innerHTML = result.likes
        kx.innerHTML= "Like"
      }
    }
      else{
        alert(result.message)
      }
      
    })


  }
})
 })