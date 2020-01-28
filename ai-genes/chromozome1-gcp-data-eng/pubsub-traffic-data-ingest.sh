Simulated traffic ingest:

Clone GitHub data to Cloud Shell (or other SDK environments), and browse to the publish folder:

cd ~ git clone https://github.com/linuxacademy/googledataengineer

cd ~/googledataengineer/courses/streaming/publish

Create a topic called sandiego:

gcloud pubsub topics create sandiego
Create a subscription to topic sandiego:

gcloud pubsub subscriptions create --topic sandiego mySub1
Run script to download sensor data:

./download_data.sh
(Optional). If you need to authenticate a shell to ensure we have the right permissions:

gcloud auth application-default login
View script info:

vim ./send_sensor_data.py or use viewer of your choice
Run python script to simulate one hour of data per minute:

./send_sensor_data.py --speedFactor=60 --project=YOUR-PROJECT-ID
If you receive an error: google.cloud.pubsub cannot be found OR ‘ImportError: No module named iterator’, run the below pip command to install components then try again:

sudo pip install -U google-cloud-pubsub
Open new Cloud Shell tab (using + symbol):

Pull the message using the subscription mySub1

gcloud pubsub subscriptions pull --auto-ack mySub1
Create a new subscription and pull messages with it:

gcloud pubsub subscriptions create --topic sandiego mySub2

gcloud pubsub subscriptions pull --auto-ack mySub2

