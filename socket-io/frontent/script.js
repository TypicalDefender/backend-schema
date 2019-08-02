console.log('hello on project!')
let socket = io();

socket.on('connected', ()=>{
  console.log('connected'+ socket.id);
})
