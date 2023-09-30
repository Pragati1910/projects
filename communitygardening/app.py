from flask import Flask, send_file

app = Flask(__name__)

@app.route('/http://127.0.0.1:3000/communitygardening/index.html')
def serve_index():
    # Use the send_file function to send the 'index.html' file
    return send_file('index.html')

if __name__ == '__main__':
    app.run(debug=True)
