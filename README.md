<h1 align="center">React Chat</h1>

<p align="center">This is a simple chat application which was built on ReactJs(Redux), NextJs and Django(DRF).</p>

### Technologies
* DJOSER (JWT Tokens)
* Django Channels
* ReactJs/Redux/NextJs
 
 
### Features
* Login and Registration
* Set Status and Profile Picture
* Search Users by username 
* Using emojis
* Loading previous messages
* Auto documentation API endpoints with swagger



## Setup Backend
For successfully running backend do:

```
$ virtualenv env
$ env\Scripts\activate (in Windows)
$ pip3 install -r requirements.txt
```

Creating database

```
$ python manage.py makemigrations
$ python manage.py migrate
```

Create superuser

```
$ python manage.py createsuperuser
```

Start your Redis Server

and finaly run your server

``` 
$ python manage.py runserver
```


## Setup Frontend

install packages with npm:

``` 
$ npm install package.json
```

and run your server

``` 
$ npm run dev
```
