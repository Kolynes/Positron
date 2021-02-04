from .base import *

SECRET_KEY = 'g-0fa7+o#*2@27n5xz0lsjo5=q=h+^bq(wn!%w5c0oqyukjbj$'

DEBUG = True

ALLOWED_HOSTS = [
    "127.0.0.1",
    "localhost"
]

INSTALLED_APPS.append("webpack_loader")

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, '../db.sqlite3'),
    }
}

FRONTEND_DIR = os.path.join(BASE_DIR, '../USDTStakersVue/')

WEBPACK_LOADER = {
    'DEFAULT': {
        # 'CACHE': DEBUG,
        # 'BUNDLE_DIR_NAME': '/bundles/',  # must end with slash
        'STATS_FILE': os.path.join(FRONTEND_DIR, 'webpack-stats.json'),
    }
}