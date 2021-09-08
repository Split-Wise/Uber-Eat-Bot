# Uber Eat Bot 🤖

This project is under develop.

## Source

[Jira]()

[Notion]()

## Prerequisites 

```
➜  ~ npm --version
7.21.1
➜  ~ node --version
v14.17.6
```

## Recommended Tools
1. Use `yarn` instead
2. use `nvm` to manage npm version


## Installation
```
git clone --recursive https://github.com/KaiChen1008/UBER-EAT-BOT/
git submodule foreach --recursive git pull origin master
```

## Develop
```
npm install

# local
npm run dev -- --console

# hook line sever
npm run dev

# debug mode
DEBUG=bottender:action npm run dev -- --console
```



## Configuration

### The `bottender.config.js` File

Bottender configuration file. You can use this file to provide settings for the session store and channels.

### The `.env` File

Bottender utilizes the [dotenv](https://www.npmjs.com/package/dotenv) package to load your environment variables when developing your app.

To make the bot work, you must put required environment variables into your `.env` file.
