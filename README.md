# HTC_YYC_2021
Hack The Change YYC - 2021

## Inspiration

Listening to music can be entertaining, and some research suggests that it might even make you healthier. Music can be a source of pleasure and contentment, but there are many other psychological benefits as well. Music can relax the mind, energize the body, and even help people better manage pain. Music can impact one's mood and emotion significantly through acting as a mood regulator, source of safety and comfort, and stress reducer



## What it does
Recommend spotify playlists according to users' current mood.

## How we built it
We mainly used AWS (Lambda, Rekognition, API Gateway, IAM) with Python for cloud infrastructure and React, Typescript, Spotify API for the front end and Firebase for deployment.

![Infrastructure](https://github.com/hoxirious/HTC_YYC_2021/blob/main/htc-frontend/public/download.png?raw=true)

## Challenges we ran into

We have faced several of technical problems upon the completion of the project:
- Permission boundaries on AWS IAM.
- AWS lambda layers error because of environment conflicts.
- Handle images and video frames in base64 format. 
- Type error with TypeScript in front end during the implementation of Spotify API.

## Accomplishments that we're proud of
We have learned a lot, and have achieved our goal of creating a semi-working prototype of our project. 

## What we learned
AWS (Lambda, Rekognition, API Gateway, IAM); Spotify API; Project planning; Planning for attainable end-goals.

## What's next for Moosique
- Refactor backend and cloud services (add SQS/SNS/Cloudwatch to handle notification,concurrency calls, and debugging logs).
- Implement a more eye catching and responsive UI.
- Implement video analysis feature and connect with a mobile camera so it can analyze image/video real-time.
