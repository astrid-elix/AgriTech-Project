
const socket= io("http://localhost:5000");

const form = document.getElementById('send-container');
const msgInput = document.getElementById('msg-input');
const messageBox=document.querySelector('.msg-show');

const append=(message , position)=>{
const messageElement =document.createElement('div');
messageElement.innerText = message; 
messageElement.classList.add('message');
messageElement.classList.add(position);
messageElement.classList.add('userjoined');
messageBox.append(messageElement);
};

const append_msg=(name,message , position,recive)=>{
    console.log(name)
    const messageElement =document.createElement('div');
    const your_name =document.createElement('span');
    const your_msg =document.createElement('span');

    if (recive&&name.localeCompare("Seller")==0) {
        
    your_name.innerHTML=`(Service Provider)${name} : `;
    }
else{
    your_name.innerHTML=`${name} : `;
}

  
    your_msg.innerHTML=message

    messageElement.append(your_name);
    messageElement.append(your_msg);
    // messageElement.innerText = message; 
    messageElement.classList.add('message');
    messageElement.classList.add(position);
    if (name.localeCompare("You")==0) {
        your_name.classList.add('you');
    }
    else if (name.localeCompare("Seller")==0) {
        your_name.classList.add('seller');
    } 
    else{
        your_name.classList.add('others');
    }

    messageBox.append(messageElement);
    };


form.addEventListener('submit',(e)=>{
e.preventDefault();
const message =msgInput.value;
append_msg('You',message,'right',0);
socket.emit('sendMsg',message);
msgInput.value="";
})


  let name;
  let password;
  while (1) {
    name = prompt("Enter Your Name");

if (name.localeCompare("Seller")==0) {
    password=prompt("Enter Your Password");
if (password.localeCompare("password")) {
    location.reload();
}

}

    if(name.trim().length>0)
    {
        break;
    }
  }
    socket.emit('new-user-joined', name);
  
 

socket.on('user-joined',name=>{
append(`${name} User Joined `,'right')
});

socket.on('recive',data=>{
    append_msg(data.name, data.message,'left',1);
    });
