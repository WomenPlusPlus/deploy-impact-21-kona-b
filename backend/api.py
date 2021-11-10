import flask
from flask import request, jsonify

from backend import organisations
from quiz import get_questions, process_quiz
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
def get_all_organisations():
    res = organisations.get_all()
    return jsonify(res), 201


@app.route('/api/v0/organisations/search', methods=['GET'])
def search_organisations():
    '''
    eg. http://127.0.0.1:5000/api/v0/organisations/search?region=Dakar&contactable=True
    :return: list of organisations matching passed filters
    '''
    filters = {}
    filters['region'] = request.args['region']
    filters['contactable'] = request.args['contactable']
    res = organisations.search(filters)
    return jsonify(res), 201


@app.route('/api/v0/organisations', methods=['POST'])
def add_organisations():
    '''
    eg. http://127.0.0.1:5000/api/v0/organisations
    body -> { "data":{"name":"new org6","region":"Dakar","contactable":"True"}}
    :return: message indicating organisation was added successfully
    '''
    body = ast.literal_eval(request.data.decode('utf-8'))
    organisations.add(body['data'])
    return jsonify("Organisation Added Successfully"), 201




@app.route('/api/v0/organisations/<org_id>', methods=['GET'])
def get_one_organisations(org_id):
    res = organisations.get_one(org_id)
    return jsonify(res), 201


@app.route('/api/v0/organisations/<org_id>', methods=['POST'])
def update_organisation(org_id):
    body = ast.literal_eval(request.data.decode('utf-8'))
    organisations.update_values(org_id, body['data'])
    return jsonify("Organisation Updated Successfully"), 201


@app.route('/api/v0/organisations/<org_id>', methods=['DELETE'])
def delete_organisation(org_id):
    organisations.delete(org_id)
    return jsonify("Organisation Deleted Successfully"), 201


@app.route('/api/v0/quiz', methods=['GET'])
def send_quiz():
    res = get_questions()
    return jsonify(res), 201


@app.route('/api/v0/quiz', methods=['POST'])
def get_quiz_answers():
    body = ast.literal_eval(request.data.decode('utf-8'))
    filters = process_quiz(body['data'])
    return jsonify(filters), 201


app.run()
