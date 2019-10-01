function submitData (userName,userEmail){
  const URL = 'http://localhost:3000/users';
  const options = {
  headers: {
       'Accept': 'application/json',
      'Content-Type': 'application/json'
  },
  method: "POST",
  body:JSON.stringify({name:userName, email:userEmail})
}
return fetch(URL,options)
.then(res => {
  return res.json();
})
.then(json => {
  let el = document.createElement('div');
  el.innerHTML = json.id
  document.body.appendChild(el);
}).catch(err => document.body.innerHTML = err.message)
}
submitData('John','John@domain.com')