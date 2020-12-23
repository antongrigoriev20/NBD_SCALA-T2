import requests
import json
url = 'http://localhost:8098/buckets/s23672/keys/1'
headers = {'Content-Type': 'application/json'}
wine = {
    "name": "Chateau Mouton Rothschild Pauillac",
    "color": "red",
    "alk": 13.0%
}

r = requests.put(data=json.dumps(wine), url=url, headers=headers)

r = requests.get('http://localhost:8098/buckets/s23672/keys/1')

print("Added: " + r.text)

data = json.loads(r.text)
data['alk'] = 13.5%

r = requests.put(data=json.dumps(data), url=url, headers=headers)
r = requests.get('http://localhost:8098/buckets/s23672/keys/1')

print("modified: " + r.text)

r= requests.delete(data=json.dumps(data), url=url, headers=headers)

r = requests.get('http://localhost:8098/buckets/s23672/keys/1')

print("Deleted: " + r.text)
