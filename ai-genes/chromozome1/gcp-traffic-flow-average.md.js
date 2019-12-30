// # GCP Sandiego traffic > Dataflow > BQ speed average
// streaming ingest of traffic sensor data from the previous section, and run it through a Dataflow pipeline to calculate average speeds and output it to BigQuery.

// The command line reference for what we are demonstrating is below.

// - Create BigQuery dataset for processing pipeline output:
// $ > bq mk --dataset $DEVSHELL_PROJECT_ID:demos

// Create Cloud Storage bucket for Dataflow staging:

// gsutil mb gs://$DEVSHELL_PROJECT_ID
// Create a topic and publish messages:

// cd ~/googledataengineer/courses/streaming/publish

// gcloud pubsub topics create sandiego

// ./download_data.sh

// sudo pip install -U google-cloud-pubsub

// ./send_sensor_data.py --speedFactor=60 --project=$DEVSHELL_PROJECT_ID

// Open a new Cloud Shell tab

// Browse to the Dataflow directory and run the script to create a pipeline, passing along our project ID, storage bucket, and Average Speeds file to construct the pipeline.

// cd ~/googledataengineer/courses/streaming/process/sandiego

// ./run_oncloud.sh $DEVSHELL_PROJECT_ID $DEVSHELL_PROJECT_ID AverageSpeeds