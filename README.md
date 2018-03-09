# demo-heroku
To deploy an app with heroku
In heroku create new app by clicking on new
Choose github connect to github
Search your repo and connect
Then tape on Enable automatic deploys
Deploy the express server with heroku and open the app in heroku 
If we have to deploy front with back then we have to do npm install and npm run build in front folder
And we can also do npm install and npm run build automatic by putting  "postinstall": "cd front && npm install && npm run build" in script of main package.json

if we had a problems then we can put key as NPM_CONFIG_PRODUCTION and value as false in config vars in settings