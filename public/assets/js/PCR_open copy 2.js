const net = require('net');

const HOST = '192.168.1.101';
const PORT = 8001;
const M681 = '500000FFFF03000D0010000114010018020090010010';
const D844 = '500000FFFF03000C001000010400004C0300A80100';
const R4411_1 = '500000FFFF030010001000011400003B1100AF020041000000';
const R4411_2 = '500000FFFF03000E001000011400003B1100AF01000100';

const a = Buffer.from(M681, 'hex');
const b = Buffer.from(D844, 'hex');
const c = Buffer.from(R4411_1, 'hex');

const client = net.connect(PORT, HOST, () => {
  //client.write(a);
  client.write(a);
  console.log('Command sent!');
});

client.on('data', (data) => {
  //const received = data.();
  console.log('data received!');
  console.log('接收到的数据:', Buffer.from(data, 'hex'));

  // 在这里处理接收到的数据
  // ...
});
client.on('error', (error) => {
  console.log(error);
})

client.on('end', () => {
  client.end;
  console.log('已与服务器断开连接');
});

client.on('close', () => {
  console.log('Closing connection');
})

setTimeout(function () {
  console.log("Executed after 1 second");
  client.end();
}, 1000);

//client.end();