import json
import urllib.error
import urllib.parse
import urllib.request

from tw10back import twurl

# TWITTER_URL = 'https://api.twitter.com/1.1/search/tweets.json'
TWITTER_URL = 'https://ads-api-sandbox.twitter.com/1.1/search/tweets.json'

def get_tweets():
    result_list = []

    url = twurl.augment(TWITTER_URL, {
        'q':'#cat',
        'count': '100',
        'result_type': 'popular',
        'tweet_mode': 'extended',
    })

    connection = urllib.request.urlopen(url)
    data = connection.read().decode()
    headers = dict(connection.getheaders())
    print('Remaining', headers['x-rate-limit-remaining'])

    js = json.loads(data)
    items = js['statuses']

    for item in items:
        parsed_dict = {}

        entities = item['entities']
        media_list = entities.get('media', None)
        if not media_list:
            continue

        media_url_list = []
        for media in media_list:
            media_url_list.append(media['media_url'])

        post_id = item['id']
        user_id = item['user']['id']
        post_url = 'https://twitter.com/{}/status/{}'.format(user_id, post_id)
        created_at = item['created_at']
        text = item['full_text']

        parsed_dict['created_at'] = created_at
        parsed_dict['text'] = text
        parsed_dict['post_url'] = post_url
        parsed_dict['media_list'] = media_url_list

        result_list.append(parsed_dict)
    return result_list

result = get_tweets()
print(result)