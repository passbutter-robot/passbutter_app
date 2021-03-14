import { Ros, Topic } from 'roslib';
let ros = new Ros({});
let example = new Topic({
    ros: ros,
    name: '/wheel_speed',
    messageType: 'std_msgs/Float32'
});
example.subscribe(function (message) {
    console.log(`Receive message: ${message}`);
});
//# sourceMappingURL=passbutter.js.map