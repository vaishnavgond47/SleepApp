# Sleep Monitoring API

This project implements a REST API for monitoring sleep patterns.

Sleep Assessment API
This project is a backend implementation for a Sleep Assessment application, where users can input their sleep-related data during an onboarding process. The data includes information such as how long they've struggled with sleep, their bedtime, wake time, and sleep duration. The backend API manages this data, allowing users to update it at different steps in the onboarding process.

Project Structure
The project is structured as follows:

Models:

sleep.model.js: Defines the schema for storing sleep-related data. This schema includes fields like sleepStruggleFrom, bedTime, wakeTime, sleepDuration, and a dataCollectionStep to track the progress of the user's data input.
user.model.js: Defines the schema for storing user information. This includes fields like userID, emailID, passwordHash, and other personal details. The schema also includes methods for hashing passwords and comparing them for authentication purposes.
APIs:

Four POST APIs are created to handle the updating of sleep data at different steps of the onboarding process. Each API takes an updateObject in the request body, containing specific data like bedTime, wakeTime, sleepDuration, and sleepStruggleFrom, along with the current dataCollectionStep.

Example APIs:

Update Bed Time:
Endpoint: /api/v1/update/sleep
Request Body: { "updateObject": { "bedTime": "2021-01-16T01:00:19+05:30", "dataCollectionStep": 2 }}
Response: {"status": "success", "data": {...}, "message": "operation completed successfully"}

Update Sleep Duration:
Endpoint: /api/v1/update/sleep
Request Body: { "updateObject": { "sleepDuration": 9, "dataCollectionStep": 4 }}
Response: {"status": "success", "data": {...}, "message": "operation completed successfully"}

Update Sleep Struggle From:
Endpoint: /api/v1/update/sleep
Request Body: { "updateObject": { "sleepStruggleFrom": { "min": 0, "max": 2 }, "dataCollectionStep": 1 }}
Response: {"status": "success", "data": {...}, "message": "operation completed successfully"}

Update Wake Time:
Endpoint: /api/v1/update/sleep
Request Body: { "updateObject": { "wakeTime": "2021-01-16T10:00:19+05:30", "dataCollectionStep": 3 }}
Response: {"status": "success", "data": {...}, "message": "operation completed successfully"}