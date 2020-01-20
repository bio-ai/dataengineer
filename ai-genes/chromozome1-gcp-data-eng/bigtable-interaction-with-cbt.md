# Example steps to interact with Bigtable via cbt command line:

## Install the cbt command in Google SDK:
sudo gcloud components update

gcloud components install cbt

## Configure cbt to use your project and instance via .cbtrc file:
echo -e "project = [PROJECT_ID]\ninstance = [INSTANCE_ID]" > ~/.cbtrc
## Create a table:
cbt createtable my-table
## List the table:
cbt ls
## Add a column family:
cbt createfamily my-table cf1
## List column family
cbt ls my-table
## Add value to row 1, using column family cf1 and column qualifier c1:
cbt set my-table r1 cf1:c1=test-value
## Use the cbt read command to read the data you added to the table:
cbt read my-table
## Delete the table (if not deleting instance):
cbt deletetable my-table