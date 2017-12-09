from flask import Flask, render_template
from flask_compress import Compress

app = Flask(__name__)
Compress(app)

@app.route('/')
def home():
	return render_template('index.html')

@app.route('/newsite/', methods=['GET'])
def newsite():
	print "got to newsite"
	return render_template('newsite.html')

if __name__ == '__main__':
	app.run(debug=True)