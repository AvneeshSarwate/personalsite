from flask import Flask, redirect, render_template, request, Response
from flask_compress import Compress
import re
import os
import mimetypes
import json
import random
from werkzeug.middleware.proxy_fix import ProxyFix

dburl = 'postgres://lwjyqvnvbnxlac:e04dc8370c3e4ac49ef541851b9523e0115c2993881351d558c0087de2de6a40@ec2-54-83-49-109.compute-1.amazonaws.com:5432/d2mmfjc0ic8kjg'

MB = 1 << 20
BUFF_SIZE = 10 * MB

quizResults = []

app = Flask(__name__)


# Apply ProxyFix to handle Heroku's reverse proxy
app.wsgi_app = ProxyFix(app.wsgi_app, x_proto=1, x_host=1)

@app.before_request
def enforce_https():
    """Redirect HTTP traffic to HTTPS"""
    if request.headers.get("X-Forwarded-Proto", "http") != "https":
        url = request.url.replace("http://", "https://", 1)
        return redirect(url, code=301)


Compress(app)

@app.after_request
def after_request(response):
    response.headers.add('Accept-Ranges', 'bytes')
    return response

@app.route('/')
def home():
    return render_template('newsite.html') #previously index.html

@app.route('/newsite/', methods=['GET'])
def newsite():
    print("got to newsite")
    return render_template('newsite.html')

@app.route('/shader/')
def shaderpage():
    return render_template('force_shader.html') 

@app.route('/bibletweets/', methods=['GET'])
def bibletweets():
    return render_template('twitterPoetry.html') 

@app.route('/paradiselost/', methods=['GET'])
def paradiselost():
    return render_template('subpage.html') 

@app.route('/electronicimprovisation/', methods=['GET'])
def electronicimprovisation():
    return render_template('subpage.html') 

@app.route('/publications/', methods=['GET'])
def publications():
    return render_template('subpage.html') 

@app.route('/interactivevisuals/', methods=['GET'])
def interactivevisuals():
    return render_template('subpage.html') 

@app.route('/art/', methods=['GET'])
def art():
    return render_template('subpage.html') 

@app.route('/greyprocessingunit/', methods=['GET'])
def greyprocessingunit():
    return render_template('subpage.html') 

@app.route('/reflectionroom/', methods=['GET'])
def reflectionroom():
    return render_template('subpage.html') 

@app.route('/soundcage/', methods=['GET'])
def soundcage():
    return render_template('subpage.html') 

@app.route('/audiovisualperformance/', methods=['GET'])
def audiovisualperformance():
    return render_template('subpage.html') 

@app.route('/familylightningtalk/', methods=['GET'])
def familylightningtalk():
    return render_template('subpage.html')  

@app.route('/cognitionExperiment/', methods=['GET'])
def cognitionexperiment():
    return render_template('cognitionQuiz.html') 

@app.route('/cognitionExperimentURLs/', methods=['GET'])
def cognitionexperimentURLs():
    spacer = 'spacer.mp3'
    random.seed(1)
    numQuestions = 20
    urls = {'spacers': [spacer, spacer, spacer], 'questions': []}
    multiVoiceQuestions = random.sample([i for i in range(numQuestions)], numQuestions/2)
    sameMelodyQuestions = random.sample(multiVoiceQuestions, numQuestions/4) + random.sample([i for i in range(numQuestions) if i not in multiVoiceQuestions], numQuestions/4)
    for q in range(numQuestions):
        isMultiVoiceQuestion = q in multiVoiceQuestions
        targets = []
        query = ""
        nums = [i+1 for i in range(5)]
        sameOrDiff = "t" if q in sameMelodyQuestions else "c"
        if isMultiVoiceQuestion:
            targets = random.sample(nums, 4)
            query = list(set(nums) - set(targets))[0]
        else:
            tq = random.sample(nums, 2)
            targets = [tq[0]]*4
            query = tq[1]
        urls['questions'].append({'targets':['sound{}-t-{}.mp3'.format(t, q) for t in targets], 'query': 'sound{}-{}-{}.mp3'.format(query, sameOrDiff, q)})

    return json.dumps(urls)


@app.route('/getAllCognitionTestResultsFile/', methods=['GET'])
def getAllCognitionTestResultsFile():
    results = open("quizResults.txt").read()
    return results

@app.route("/static/img/greyProcessingUnit/<filename>")
def video(filename):
    path = "static/img/greyProcessingUnit/" + filename
#    path = 'demo.mp4'

    start, end = get_range(request)
    return partial_response(path, start, end)


def partial_response(path, start, end=None):
    # LOG.info('Requested: %s, %s', start, end)
    file_size = os.path.getsize(path)

    # Determine (end, length)
    if end is None:
        end = start + BUFF_SIZE - 1
    end = min(end, file_size - 1)
    end = min(end, start + BUFF_SIZE - 1)
    length = end - start + 1

    # Read file
    with open(path, 'rb') as fd:
        fd.seek(start)
        bytes = fd.read(length)
    assert len(bytes) == length

    response = Response(
        bytes,
        206,
        mimetype=mimetypes.guess_type(path)[0],
        direct_passthrough=True,
    )
    response.headers.add(
        'Content-Range', 'bytes {0}-{1}/{2}'.format(
            start, end, file_size,
        ),
    )
    response.headers.add(
        'Accept-Ranges', 'bytes'
    )
    # LOG.info('Response: %s', response)
    # LOG.info('Response: %s', response.headers)
    return response

def get_range(request):
    range = request.headers.get('Range')
    # LOG.info('Requested: %s', range)
    m = re.match('bytes=(?P<start>\d+)-(?P<end>\d+)?', range)
    if m:
        start = m.group('start')
        end = m.group('end')
        start = int(start)
        if end is not None:
            end = int(end)
        return start, end
    else:
        return 0, None



# @app.route('/static/The_Force_embed/starfield.mov')
# def movieget():
#   print "HIT THE MOVIE URL"
#   return redirect('/static/The_Force_embed/starfield.mov')

if __name__ == '__main__':
    app.run(debug=True)