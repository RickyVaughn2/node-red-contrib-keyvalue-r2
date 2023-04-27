const fs = require('fs');
const path = require('path');

module.exports = function(RED) {
    function KeyValueRead(config) {
        RED.nodes.createNode(this, config);
        const node = this;
        const filePath = config.filePath;

        node.on('input', function(msg) {
            try {
                const data = JSON.parse(fs.readFileSync(filePath));
                msg.payload = data[msg.payload];
                node.send(msg);
            } catch (error) {
                node.error('Error reading JSON file: ' + error.message);
            }
        });
    }
    RED.nodes.registerType('keyvalue-read', KeyValueRead);

    function KeyValueWrite(config) {
        RED.nodes.createNode(this, config);
        const node = this;
        const filePath = config.filePath;

        node.on('input', function(msg) {
            try {
                const key = msg.topic;
                const value = msg.payload;
                let data = {};

                if (fs.existsSync(filePath)) {
                    data = JSON.parse(fs.readFileSync(filePath));
                }

                data[key] = value;
                fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
                node.send(msg);
            } catch (error) {
                node.error('Error writing JSON file: ' + error.message);
            }
        });
    }
    RED.nodes.registerType('keyvalue-write', KeyValueWrite);
};
