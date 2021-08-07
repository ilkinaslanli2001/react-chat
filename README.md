<h1 align="center">React Chat</h1>

<p align="center">This is a simple chat application which was built on ReactJs(Redux), NextJs and Django(DRF).</p>

### Technologies
* DJOSER (JWT Tokens)
* Django Channels
* Emoji
 
 
### Features
* Login and Registration
* Set Status and Profile Picture
* Search User by username 
* Using emojis
* Loading previous messages



# Installing Backend
To run this project, install it locally using npm:

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
