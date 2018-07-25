from flask import Flask, render_template
from flask_compress import Compress

app = Flask(__name__)
Compress(app)

@app.route('/')
def home():
	return render_template('newsite.html') #previously index.html

@app.route('/newsite/', methods=['GET'])
def newsite():
	print "got to newsite"
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



# @app.route('/static/The_Force_embed/starfield.mov')
# def movieget():
# 	print "HIT THE MOVIE URL"
# 	return redirect('/static/The_Force_embed/starfield.mov')

if __name__ == '__main__':
	app.run(debug=True)