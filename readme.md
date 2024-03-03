Install python first globally

# go to server folder → install  django and  djangorestframework  using “pip install django djangorestframework”
→create project using  “django-admin startproject project_name”

# goto project_name directory using “cd project_name”  → create app using “django-admin startapp app_name”

# goto project_name/project_name/settings.py  → inside of array INSTALLED_APPS add last array element,  'api.apps.ApiConfig', ‘rest_framework’
project_name/app_name/views is for end-point

# create a file inside of project_name/app_name , urls.py
project_name/project_name/urls.py  to  project_name/app_name/urls.py

# run this command in the /project_name directory,  ‘python3 ./manage.py makemigrations’  // so that if any changes in models or databases, it will be auto reload

#  run this command in the /project_name directory, ‘python3 ./manage.py migrate’  // it will create db.sqlite3 inside of /project_name directory

# run command inside of /project_name directory, ‘python ./manage.py runserver’  // it will start the server

#  project_name/app_name/models.py → why it is use?

# project_name directory, run command, “python3 ./manage.py makemigrations” → it will create migrations folder using models.py 

# project_name directory, run command, “python3 ./manage.py migrate”

# project_name/app_name directory, create a file named, “serializers.py”

Python manage.py makemigrations   // for apply database
Then
Python manage.py migrate   // for restart the database
