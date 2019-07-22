import requests
import urllib.request
import time
from bs4 import BeautifulSoup
url='https://careers.nintendo.com/job-openings/listing/1900000059.html?src=CWS-10000'
response = requests.get(url)