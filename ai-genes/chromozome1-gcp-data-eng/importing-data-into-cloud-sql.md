how to bulk import data into a Cloud SQL session, including SQL dump and CSV files. Detailed steps of what was performed in the lesson are below:

We will be using a sample data GitHub repo here: https://github.com/linuxacademy/googledataengineer

The original source of this data from Google's GitHub can be viewed here: https://github.com/GoogleCloudPlatform/training-data-analyst

Clone our sample data to Cloud Shell:

Open Cloud Shell.
Clone the data from repo to Cloud Shell.
git clone https://github.com/linuxacademy/googledataengineer
Create the Cloud Storage bucket to copy data:

gsutil mb -l (your_region) gs://(bucket_name)
Browse to the CloudSQL sample data directory:

cd googledataengineer/CPB100/lab3a/cloudsql
Copy all data into your cloud bucket:

gsutil cp * gs://(bucket_name)
Import an SQL dump file into Cloud SQL:

From Cloud SQL, click on the instance and click the Import button
Click Browse, select bucket, browse to table_creation.sql, and click Select.
Under the "Format of import" options, make sure SQL is selected as the import format (should be default).
Click Import.
Import CSV tables into SQL database (recommendation_spark):

From Cloud SQL, click on the instance and click the Import button.
Click Browse, select bucket, browse to accommodation.csv, and click Select.
Expand advanced options, and from the Database drop-down menu, select recommendation_spark.
Set the Table name to Accommodation.
Click Import.
Perform the same actions for the rating.csv file as well, setting the Table name to Rating.
Connect to your Cloud SQL instance:

Click Connect using Cloud Shell.
In Cloud Shell, hit enter once the command is populated.
Enter the root password when prompted.
View tables and table data:

Switch to database:
use recommendation_spark;
View tables:
show tables;
View contents of one of the tables:
select * from Rating;