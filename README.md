# node-red-contrib-keyvalue-r2

Node-RED nodes for reading and writing key-value pairs in a JSON file.

## Installation

Install using the Node-RED Palette Manager or by running the following command in your Node-RED user directory (typically `~/.node-red`):

```
npm install node-red-contrib-keyvalue-r2
```


## Nodes

This package includes two nodes:

- `keyvalue-read`: Reads a value from a JSON file based on the key provided in the input message payload.
- `keyvalue-write`: Writes a key-value pair to a JSON file. The input message should contain the key in the topic and the value in the payload.

## Usage

1. Drag and drop the `keyvalue-read` or `keyvalue-write` node into your Node-RED flow.
2. Double-click the node to open the configuration panel.
3. Enter the JSON file path where the key-value pairs will be stored or retrieved.
4. Connect the nodes as required in your flow.

For the `keyvalue-read` node, the input message should contain the key in the payload, and the output message will have the value in the payload.

For the `keyvalue-write` node, the input message should contain the key in the topic and the value in the payload.

## License

This project is licensed under the GNU General Public License v3.0. See the LICENSE file for details.
