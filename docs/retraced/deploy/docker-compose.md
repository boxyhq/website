# With Docker Compose

## Clone the project

`git clone https://github.com/boxyhq/retraced`

## Run Retraced

`docker-compose up`

## Run Retraced (Without Elasticsearch)

`docker-compose -f docker-compose-pg-search.yaml up`

## See it in action

Use the postman collection located at `./postman/Retraced.postman_collection.json`.
You can import the json file in postman and use the API calls to test Retraced.

`Make sure that the bootstrap & migrations and finished before makeing api calls.`