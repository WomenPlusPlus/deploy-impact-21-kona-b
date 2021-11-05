import flask
from flask import request, jsonify
from query import query
from add import add
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



@app.route('/dots/organisations/query', methods=['POST'])
def query_organisations():
    body = ast.literal_eval(request.data.decode('utf-8'))
    res = query(body['filters'])
    return jsonify(res), 201

# @app.route('/api/v0/organisations/search', methods=['GET'])
# def search_organisations():
#     args = request.args
#     print(args)
#     body = ast.literal_eval(request.data.decode('utf-8'))
#     res = query(body['filters'])
#     return jsonify(res), 201



@app.route('/dots/organisations/add', methods=['POST'])
def add_organisations():
    body = ast.literal_eval(request.data.decode('utf-8'))
    add(body['data'])
    return jsonify("Organisation Added Successfully"), 201


app.run()