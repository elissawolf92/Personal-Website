import os
from flask import Flask
from flask import request, render_template, redirect, send_from_directory

app = Flask(__name__)


@app.route('/')
def land():
    return render_template('bio.html')

if __name__ == '__main__':
    # Bind to PORT if defined, otherwise default to 5000.
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)
