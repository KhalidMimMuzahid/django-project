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

# project_name directory, run command, “python3 ./manage.py makemigrations” → // for apply database/model changes

# project_name directory, run command, “python3 ./manage.py migrate”  // for restart the database


# [NB:]: if you face any issue then try with: remove all __pycache__ folder and db.sqlite3 and then run commend "python3 ./manage.py makemigrations"   and  “python3 ./manage.py migrate”

# "project_name/app_name" directory, create a file named, “serializers.py”




# now add react app to this django app
# in the "/project_name" directory  → create app using “django-admin startapp frontend”

# inside of "/project_name/frontend" directory, create some folder, templates, static, src

# inside of "/project_name/frontend/static" directory, create some folder, css, frontend, images

# inside of "/project_name/frontend/src" directory, create some folder, components

# inside of "/project_name/frontend" directory, run "npm init -y"


# install "npm i webpack webpack-cli --save-dev"
# install "npm i @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev "
# install "npm i react react-dom --save-dev"
# install "npm i @material-ui/core  --legacy-peer-deps"
# install "npm i @material-ui/icons"
# install "npm i @babel/plugin-proposal-class-properties"
# install "npm i react-router-dom"



# goto project_name/project_name/settings.py  → inside of array INSTALLED_APPS add last array element,  'frontend.apps.FrontendConfig', 