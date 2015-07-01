"""
Routes and views for the flask application.
"""

from datetime import datetime
from flask import render_template
from bootstrapping import app
from bootstrapping.models import die


@app.route('/')
@app.route('/home')
def home():
    deterministic=die.rollDie(),
    rolls=die.rollN(5),
    sim=die.runSim('11111', 100)
    return render_template(
        'index.html',
        title='Home Page',
        year=datetime.now().year,
        #deterministic=deterministic,
        rolls=rolls,
        sim=sim
    )

@app.route('/contact')
def contact():
    """Renders the contact page."""
    return render_template(
        'contact.html',
        title='Contact',
        year=datetime.now().year,
        message='Your contact page.'
    )

@app.route('/about')
def about():
    """Renders the about page."""
    return render_template(
        'about.html',
        title='About',
        year=datetime.now().year,
        message='Your application description page.'
    )
