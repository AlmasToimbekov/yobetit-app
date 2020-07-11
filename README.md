This project was created as a task for YoBetIt

This is a dockerized application with front- and backend sides with production container on heroku.<br>
In order to run it locally you need to launch this command from project's root directory:
```
docker-compose -f docker-compose-local.yml run
```
For using on heroku first login and create an app:
```
- heroku container:login
- heroku create
```
Then add a tag to the prod image:
```
docker tag yobetit-app:prod registry.heroku.com/pure-cliffs-69265/web

```
Where `pure-cliffs-69265` is the name of your app on heroku's web site.<br>
Go to your heroku account and select your app, install `Heroku Postgres` add-on,
then open installed postgres add-on on 'Overview' section, click 'Settings'
\- 'Database Credentials' - 'View Credentials...'<br>
Update your 'environment' vars in docker-compose-prod.yml file (PG_HOST,
PG_PORT, PG_USER, PG_PASSWORD, PG_DB, DATABASE_URL) and build:
```
docker-compose -f docker-compose-prod.yml build
```
Then push it to your heroku repository:
```
docker push registry.heroku.com/pure-cliffs-69265/web  
```
Now you can release the image with the following command:
```
heroku container:release web
```
This will start your app, it will be available in a minute and you will be able to open the app:
```
heroku open
```
You may see this live example [here](https://pure-cliffs-69265.herokuapp.com/).
