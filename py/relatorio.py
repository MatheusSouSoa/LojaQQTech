import time
import requests
import pandas as pd
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.chrome.options import Options

url = 'http://127.0.0.1:5500'

option = Options()
option.headless = True
driver = webdriver.Chrome()

driver.get(url)

time.sleep(10)
driver.find_element('//div[@id="btns"//button[@id="btnCad"]]').click()

driver.quit()