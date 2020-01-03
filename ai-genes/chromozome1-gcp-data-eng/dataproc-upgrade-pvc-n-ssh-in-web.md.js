// Updating a cluster with new workers/preemptible machines:

// gcloud dataproc clusters update [cluster_name] --num-workers [#] --num-preemptible-workers [#]

// SOCKS proxy configuration

// From the local machine, SSH to the master to enable port forwarding:

// gcloud compute ssh master-host-name --project=project-id --zone=master-host-zone -- -D 1080 -N
// Open new terminal window and launch the web browser with parameters (varies by OS/browser):

// "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --proxy-server="socks5://localhost:1080" --host-resolver-rules="MAP * 0.0.0.0 , EXCLUDE localhost" --user-data-dir=/tmp/cluster1-m

// Browse to http://[master]:port
// 8088 - Hadoop
// 9870 - HDFS
// Using Cloud Shell (must use for each port)
// gcloud compute ssh master-host-name --project=project-id --zone master-host-zone -- -4 -N -L port1:master-host-name:port2

// Use Web Preview to choose port (8088/9870).