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

- SELECT example with LIMIT

```SELECT Title, Medium FROM MetObjects LIMIT 20;```

- SQL SELECT example with WHERE conditional

```SELECT Title, Medium, Link_Resource  FROM MetObjects WHERE Object_Begin_Date >= '2000' LIMIT 20;```

### Bigtable / Instance configuration

- Install the cbt command in Google SDK

```gcloud components update
gcloud components install cbt```

- Configure cbt to use your project and instance via .cbtrc file:

```echo -e "project = [PROJECT_ID]\ninstance = [INSTANCE_ID]" > ~/.cbtrc```

- Create a Bigtable table:

```cbt createtable my-table```

- List Bigtable table:

```cbt ls```

- Add a Bigtable column family:

```cbt createfamily my-table cf1```

- List Bigtable column family:

```cbt ls my-table```

- Bigtable: Add value to row 1, using column family cf1 and column qualifier c1:

```cbt set my-table r1 cf1:c1=test-value```

- Bigtable: read command to read the data from table:

```cbt read my-table```

### Cloud Spanner / Hands On and viewing GCP Python example

The below steps ran from Cloud Shell will create a Spanner instance and populate Singer and Album data for you.

Link Google Cloud documentation to follow along with for the Python example:

https://cloud.google.com/spanner/docs/getting-started/python/
Clone the GitHub repository to run scripts, and browse to the correct directory:

```git clone https://github.com/GoogleCloudPlatform/python-docs-samples.git

cd python-docs-samples/spanner/cloud-client```

Create a Python environment and install dependencies:

```virtualenv env
source env/bin/activate
pip install -r requirements.txt```

Create a Spanner instance named test-instance:
```
gcloud spanner instances create test-instance --config=regional-us-central1 --description="Test Instance" --nodes=1
```
Create a database and insert data using the Python scripts from our GitHub clone:

```python snippets.py test-instance --database-id example-db create_database

python snippets.py test-instance --database-id example-db insert_data
```
Run a query to read the values of all columns from the Albums table:

```gcloud spanner databases execute-sql example-db --instance=test-instance --sql='SELECT SingerId, AlbumId, AlbumTitle FROM Albums'```

