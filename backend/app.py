from flask import Flask, request, jsonify
from flask_cors import CORS
import organisations
import quiz
import ast
import filters
from models import setup_db

# ----------------------------------------------------------------------------#
# App Config.
# ----------------------------------------------------------------------------#

app = Flask(__name__)
app.config["DEBUG"] = True
setup_db(app)

CORS(app)


@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Headers',
                         'Content-Type, Authorization')
    response.headers.add('Access-Control-Allow-Methods',
                         'GET,POST,PATCH,DELETE,OPTIONS')
    return response


# ----------------------------------------------------------------------------#
# Routes.
# ----------------------------------------------------------------------------#

@app.route('/api/v0', methods=['GET'])
def home():
    return 'Full Stack DOTS API Backend'


# orgaisations data
@app.route('/api/v0/organisations', methods=['GET'])
def get_all_organisations():
    res = organisations.get_all()
    return jsonify(res), 201


@app.route('/api/v0/organisations', methods=['POST'])
def add_organisations():
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


# quiz

@app.route('/api/v0/quiz', methods=['GET'])
def send_quiz():
    res = quiz.get_questions()
    return jsonify(res), 201


# filtering

@app.route('/api/v0/filters', methods=['GET'])
def get_filters():
    res = filters.get_filters()
    return jsonify(res), 201


@app.route('/api/v0/organisations/filter', methods=['POST'])
def search_organisations():
    body = ast.literal_eval(request.data.decode('utf-8'))
    res = filters.get_filtered_orgs(body)
    return jsonify(res), 201


# ----------------------------------------------------------------------------#
# Error Handling.
# ----------------------------------------------------------------------------#

@app.errorhandler(400)
def unprocessable(error):
    return jsonify({
        'success': False,
        'error': 400,
        'message': 'bad request'
    }), 400


@app.errorhandler(404)
def not_found(error):
    return jsonify({
        'success': False,
        'error': 404,
        'message': 'resource not found'
    }), 404


@app.errorhandler(405)
def method_not_allowed(error):
    return jsonify({
        'success': False,
        'error': 405,
        'message': 'method not allowed'
    }, 405)


@app.errorhandler(422)
def unprocessable(error):
    return jsonify({
        'success': False,
        'error': 422,
        'message': 'unprocessable'
    }), 422


@app.errorhandler(500)
def internal_server_error(error):
    return jsonify({
        'success': False,
        'error': 500,
        'message': 'Internal Server Error'
    }, 500)


# allows running with Flask or Python
if __name__ == "__main__":
    app.run()
