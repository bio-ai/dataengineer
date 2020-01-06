# Cloud Composer Template

## Create GCS bucket to output Dataproc results (using Project ID shell variable)

gsutil mb -l us-central1 gs://output-$DEVSHELL_PROJECT_ID

## Set our Cloud Composer variables necessary for our workflow. Project ID will again be represented by the shell variable to auto-resolve to your unique Project ID:

gcloud composer environments run my-environment --location us-central1 variables -- --set gcp_project $DEVSHELL_PROJECT_ID

gcloud composer environments run my-environment --location us-central1 variables -- --set gcs_bucket gs://output-$DEVSHELL_PROJECT_ID

gcloud composer environments run my-environment --location us-central1 variables -- --set gce_zone us-central1-c

## Upload the example DAG file to the DAG folder for Cloud Composer. A copy of the DAG file can be found at this link.

### Direct link for local download: https://storage.googleapis.com/la-gcloud-course-resources/data-engineer/cloud-composer/quickstart.py

### Public GCS location: gs://la-gcloud-course-resources/data-engineer/cloud-composer/quickstart.py

### GitHub link: https://github.com/GoogleCloudPlatform/python-docs-samples/blob/b80895ed88ba86fce223df27a48bf481007ca708/composer/workflows/quickstart.py