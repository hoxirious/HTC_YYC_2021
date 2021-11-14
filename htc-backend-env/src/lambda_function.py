import json
import boto3
import base64
import base64


def lambda_handler(event, context):        
    
    # if event["type"] == "upload":
    if(not event["image"]):
        return {
            'statusCode': 400,
            'body': json.dumps("no image found")
        }
        
    imgstr = event["image"]
    img = imgstr.split(",")[1]    
    client = boto3.client("rekognition")
    response = client.detect_faces(
        
            Attributes = ["ALL"],
            Image = {
                "Bytes" : base64.b64decode(img)
                # 'S3Object': {
                # 'Bucket': 'htc-database-1',
                # 'Name': 'unknown.jpg'
            # }
                }
        
        )
    
    max = 00
    maxEmo = ''

    for i in response['FaceDetails'][0]['Emotions'] :
        if i['Confidence'] > max:
            maxEmo = i['Type']
            max = i['Confidence']
            
    
    return  {
        'statusCode': 200,
        'headers': {
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
        },
        'body': {"maxEmo": maxEmo}
    }

