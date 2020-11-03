from bottle import route, run, response, request, template, static_file
from datetime import datetime
import json

@route("/timer")
def timer():
    timestamp = datetime(2020, 11, 17, 16, 0, 0).timestamp() * 1000
    return json.dumps({
        "timestamp": timestamp
    })

@route("/<url:re:.*>")
def loadHome(url):
    if url.startswith("static"):
        return static_file(url[7:], root="./PositronVue/dist")
    else:
        return template("./PositronVue/dist/index.html")

run(server="paste")