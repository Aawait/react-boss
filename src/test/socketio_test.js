
// 引入客户端io
import io from 'socket.io-client'

// 连接服务器，得到代表连接的socket对象
const socket = io('ws://localhost:3000')


// 绑定 receiveMessage 的监听，来接收服务器发送的消息

socket.on('receiveMsg',function(data){
    console.log("浏览器接收到了消息：",data);
})


// 向服务器发送消息
const obj  = {name:'Tom',date:Date.now().toLocaleString()}
socket.emit('sendMsg',obj)
console.log("浏览器端向服务器发送消息",obj);

