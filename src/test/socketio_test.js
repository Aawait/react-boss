
// 引入客户端io
import io from 'socket.io-client'

// 连接服务器,得到服务器的连接对象
const socket = io('ws://localhost:3000')

// 发送消息
socket.emit('sendMsg',{name:'abc'})
console.log("客户端向服务端发送消息",{name:'abc'});

// 监听服务器发送回来的消息
socket.on('receiveMsg',function(data){
    console.log("接收到了服务器发送的消息",data);
})