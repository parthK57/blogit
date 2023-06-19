const { spawn } = require("child_require");

const python = spawn("path to exe", ["path to script"]);

python.stdin.write("How\n");
python.stdin.write("you\n");
python.stdin.write("doin?\n");

python.stdout.on("data", (data) => console.log(`Data Recieved: ${data}`));

python.stdin.end();
