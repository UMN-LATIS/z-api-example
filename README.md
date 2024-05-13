# Example Z-Link API usage

A small reference demo for using the [z.umn.edu api](https://z.umn.edu/shortener/api_keys) to create or update z-links.

## Getting Started

Prerequisite: [NodeJS](https://nodejs.org/en)


1. Setup the .env file with your credentials:
```sh
# copy .env.example
cp .env.example .env

# add your ACCESS_ID and SECRET_KEY to `.env` 
# you can find them at <https://z.umn.edu/shortener/api_keys>
nano .env
```

2. Edit the payload of `./create.js` or `./update.js`. For the requests to be successful, the `keyword` needs to be available.

3. Run `./create.js` or `./update.js`. 

