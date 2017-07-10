var exec = require("child_process").exec;

var status = {
    dockerID: null,
    name: "node-docker-env",
    start: Date.now()
};

getDockerID((dockerID) => {
    status.dockerID = dockerID;
    console.log(status);
});

function getDockerID(callback) {
    exec("cat /proc/1/cgroup | grep 'docker/' | tail -1 | sed 's@^.*\/@@' | cut -c 1-12", (err, stdout, stderr) => {
        if(callback != null) callback(stdout.trim());
        else callback(null);
    });
}
