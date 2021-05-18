let state = {};
const input = document.querySelectorAll("input");
for(let inp of input) {
  if(inp.name !== "send") {
    inp.addEventListener("change", () => {
      if(valid(inp)) {
        if(inp.name !== 'pass2') {
          state[inp.name] = inp.value;
        }
        let div = inp.closest(".input");
        let next = div.nextElementSibling;
        div.classList.toggle('hide');
        next.classList.toggle('hide');
        inp.removeAttribute("autofocus");
        next.querySelector('input').focus();
      } else  
        inp.nextElementSibling.innerHTML = '<b style="background:pink;color:tomato;">Введено Неверно!</b>';
    });
  } else {
    inp.addEventListener("focus", () => {
      let output = '';
      for(let key in state) {
        output+=key + ": " + state[key] + "\n";
      }
      document.getElementById('output').innerHTML = '<pre>' + output + '</pre>';
      inp.addEventListener("click", () => {
        alert(output);
       // ajaxPost(url,state);
      });
    });
  }
    
  function valid(inp) {
    if(inp.name === 'name') {
      if( inp.value.match(/([a-z]|[а-я]){4,}/gi) ) {
        return true;
      }
      else return false;
    } else
    if(inp.name === 'login') {
     if( inp.value.match(/[a-z0-9-]{4,}/gi) && !inp.value.match(/[\s]+/gi) ) {
       return true;
     }
      else return false;
    } else 
    if(inp.name === 'email') {
     if( inp.value.match(/[a-z-]+@[a-z-]+\.[a-z]{2,6}/gi) ) {
       return true;
    }
      else return false;
    } else
    if(inp.name === 'pass') {
     if( inp.value.match(/.{6,}/gi) ) {
       return true;
    }
      else return false;
    } else
    if(inp.name === 'pass2') {
     if( inp.value === state['pass'] ) {
       return true;
    }
      else return false;
    } 
  }
  
}
 
document.getElementById('reset').addEventListener('click',() => {
  location.reload()
}); 
