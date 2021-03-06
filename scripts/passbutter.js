//import { Ros, Topic } from 'roslib';
let ros = new ROSLIB.Ros({});
ros.connect('ws://localhost:9090');
ros.on('connection', function () {
    console.log('Connected to websocket server.');
});
ros.on('error', function (error) {
    console.log('Error connecting to websocket server: ', error);
});
ros.on('close', function () {
    console.log('Connection to websocket server closed.');
});
var wheelSpeed = new ROSLIB.Topic({
    ros: ros,
    name: '/wheel_speed',
    messageType: 'std_msgs/Float32'
});
wheelSpeed.subscribe(function (message) {
    console.log(`Receive message: ${message}`);
});
//# sourceMappingURL=passbutter.js.map