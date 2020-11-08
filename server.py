from bottle import route, run, response, request, template, static_file
from datetime import datetime
import json

@route("/timer")
def timer():
    timestamp = datetime(2020, 11, 17, 16, 0, 0).timestamp() * 1000
    return json.dumps({
        "timestamp": timestamp
    })

@route("/save/email", method="POST")
def save_email():
    email = open("emails.txt", "a")
    email.write("%s\n" %request.POST["email"])
    email.flush()
    email.close()
    return "true"

@route("/<url:re:.*>")
def loadHome(url):
    if url.startswith("static"):
        return static_file(url[7:], root="./PositronVue/dist")
    else:
        return template("./PositronVue/dist/index.html")

run(server="paste")