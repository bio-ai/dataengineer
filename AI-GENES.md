# W3AI Genes 

## LA / Google Cloud Certified Professional Data Engineer

### Cloud SQL / Importing Data

- Clone repo to Cloud Shell
```
git clone https://github.com/ORG/REPO-NAME
```
- Create Cloud Storage bucket

```gsutil mb -l (your_region) gs://(bucket_name)```

- Copy files in a Cloud bucket

```gsutil cp * gs://(bucket_name)```

- Cloud SQL switch/use to database

```use DATABASE-NAME;```

- Cloud SQL view/show tables

```show tables```

- Cloud SQL view/select rows of one table

```select * from TABLE-NAME;```

### Cloud Datastore / Queries and Indexing

- Create composite index in Cloud Datastore

```gcloud datastore create-indexes index.yaml```

### Cloud SQL Lab

- Copy files from local dir to google storage

```gsutil cp * gs://la-sql-991```

- Connect to Cloud SQL innstance

```gcloud sql connect la-met --user=root```



