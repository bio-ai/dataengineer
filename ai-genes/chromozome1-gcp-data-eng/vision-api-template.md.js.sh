# working with the Vision API service

# The commands we used to authenticate with our API key, create request.json file, and the curl command used to call on the API are below for your reference.

# Authenticate with your API key after creating the API credential:

# export API_KEY=(your copied key)

# Create your JSON file by typing:

# vim request.json

# Then copy/paste the following text, substituting the Cloud Storage info with your actual Cloud Storage bucket and object info:

# "requests": [
#    {
#      "image": {
#        "source": {
#            "gcsImageUri": "gs://(your_bucket)/(your_image_file)"
#        } 
#      },
#      "features": [
#        {
#          "type": "LABEL_DETECTION",
#          "maxResults": 10
#        },
#        {
#          "type": "WEB_DETECTION",
#          "maxResults": 10
#        },
#        {
#          "type": "FACE_DETECTION"
#        }
#      ]
#    }
# ]
# }
# Use the below command to authenticate with the Vision API using your API key, and supplying the request.json file we just created:

# curl -s -X POST -H "Content-Type: application/json" --data-binary @request.json https://vision.googleapis.com/v1/images:annotate?key=${API_KEY}