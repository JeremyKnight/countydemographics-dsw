from flask import Flask, request, Markup, render_template, flash, Markup
import os
import json

app = Flask(__name__) #__name__ = "__main__" if this is the file that was run.  Otherwise, it is the name of the file (ex. webapp)

@app.route("/")
def render_main():
    with open('county_demographics.json') as demographics_data:
        counties = json.load(demographics_data)
    return render_template('index.html', response = get_state_options)
# @app.route("/before")
# def render_page1():
#     return render_template('before.html')

def get_state_options:
    states = []
    options = ""
    for c in counties:
        if c["State"] not in states:
            states.append(c["State"])
            options += Markup("<option value=\"" + c["State"] + "\">" + c["State"] + "</option>")
    return options

if __name__=="__main__":
    app.run(debug=False, port=54321)
