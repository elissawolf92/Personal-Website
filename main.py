import os
import artlist

from flask import Flask
from flask import request, render_template, redirect, send_from_directory

app = Flask(__name__)


@app.route('/')
def welcome():
    return render_template('welcome.html')

@app.route('/bio')
def bio():
    return render_template('bio.html', page='Character Profile')

@app.route('/portfolio')
def portfolio():
    return render_template('portfolio.html', pieces=artlist.drawings, page='Portfolio')

@app.route('/portfolio/drawing')
def drawing():
    return render_template('portfolio.html', pieces=artlist.drawings, selected='drawing', page='Portfolio')

@app.route('/portfolio/painting')
def painting():
    return render_template('portfolio.html', pieces=artlist.paintings, selected='painting', page='Portfolio')

@app.route('/portfolio/modeling')
def modeling():
    return render_template('portfolio.html', pieces=artlist.digital, selected='digital', page='Portfolio')

@app.route('/portfolio/lloyd')
def modeling():
    return render_template('portfolio.html', pieces=artlist.lloyd, selected='lloyd', page='Portfolio')

@app.route('/skills')
def skills():
    return render_template('skills.html', page='Skills')

@app.route("/art/<path:filename>")
def arts(filename):
	return send_from_directory('art', filename)
	
@app.route('/resume')
def resume():
	return send_from_directory('static', 'Resume_CURRENT.pdf')

if __name__ == '__main__':
    # Bind to PORT if defined, otherwise default to 5000.
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)
