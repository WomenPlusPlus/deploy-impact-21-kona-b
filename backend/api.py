import flask
from flask import request, jsonify
from add import add
from search import search
import ast

app = flask.Flask(__name__)
app.config["DEBUG"] = True


@app.route('/', methods=['GET'])
def home():
    return '''<h1>DOTS</h1>
<p></p>'''


@app.errorhandler(404)
def page_not_found(e):
    return "<h1>404</h1><p> 404 :/ </p>", 404


@app.route('/api/v0/organisations', methods=['GET'])
def search_organisations():
    '''
    eg. http://127.0.0.1:5000/api/v0/organisations?region=Dakar&contactable=True
    :return: list of organisations matching passed filters
    '''
    filter = {}
    filter['region'] = request.args['region']
    filter['contactable'] = request.args['contactable']
    res = search(filter)
    return jsonify(res), 201


@app.route('/api/v0/organisations', methods=['POST'])
def add_organisations():
    '''
    eg. http://127.0.0.1:5000/api/v0/organisations
    body -> { "data":{"name":"new org6","region":"Dakar","contactable":"True"}}
    :return: message indicating organisation was added successfully
    '''
    body = ast.literal_eval(request.data.decode('utf-8'))
    add(body['data'])
    return jsonify("Organisation Added Successfully"), 201


app.run()
