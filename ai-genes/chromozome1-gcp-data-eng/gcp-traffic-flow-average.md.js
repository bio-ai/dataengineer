// # GCP Sandiego traffic > Dataflow > BQ speed average
// streaming ingest of traffic sensor data from the previous section, and run it through a Dataflow pipeline to calculate average speeds and output it to BigQuery.

// The command line reference for what we are demonstrating is below.

// - Step 1 - Create BigQuery dataset for processing pipeline output:
// $ > bq mk --dataset $DEVSHELL_PROJECT_ID:demos
// SI: Dataset 'aicolab:demos' successfully created. / Dec 30, 2019

// - Step 2 - Create Cloud Storage bucket for Dataflow staging:
// $ > gsutil mb gs://$DEVSHELL_PROJECT_ID
// SI: CommandException: "mb" command does not support provider-only URLs.
// $ > gsutil mb gs://aicolab-dataflow-ex1
// SI: Creating gs://aicolab-dataflow-ex1/...

// - Step 3 - Create a topic and publish messages:
// $ > gcloud pubsub topics create sandiego
// SI: ERROR: Failed to create topic [projects/aicolab/topics/sandiego]: Resource already exists in the project (resource=sandiego).
// SI: Created topic [projects/aicolab/topics/sandiego].
// // cd ~/googledataengineer/courses/streaming/publish
// cd courses/streaming/publish
// // ./download_data.sh
// sudo pip install -U google-cloud-pubsub

// ./send_sensor_data.py --speedFactor=60 --project=$DEVSHELL_PROJECT_ID
// SI: Traceback (most recent call last):
//   File "./send_sensor_data.py", line 22, in <module>
//   from google.cloud import pubsub
//   ImportError: No module named google.cloud <<-----------  Stopped here / Dec 30, 2019

// Open a new Cloud Shell tab
// Browse to the Dataflow directory and run the script to create a pipeline, passing along our project ID, storage bucket, and Average Speeds file to construct the pipeline.

// cd ~/googledataengineer/courses/streaming/process/sandiego

// ./run_oncloud.sh $DEVSHELL_PROJECT_ID $DEVSHELL_PROJECT_ID AverageSpeeds