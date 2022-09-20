from fastapi.responses import FileResponse
from fastapi import FastAPI
import uvicorn
import requests


app = FastAPI()


# @app.get('/')
# def root():
#     return FileResponse('./static/pool_party.PNG')


@app.get('/')
def root():
    return {"message": "Someone has made a request and accessed the server. Exciting!"}


@app.get('/maps')
def maps():
    return "Here's some stuff related to maps"


@app.get('/shoobi')
def shoobi():
    return "This here is the shoobi *route*"


@app.get("/landing/{username}")
async def greet_user(username):
    return {"message": f"Hi there {username}"}


@app.get("/optionalParameters/")
async def query_params(name, l_name):
    return {"message": f"Hi there {name} {l_name}"}


@app.get("/book/{name}")
async def get_book(name):
    res = requests.get(
        f'https://www.googleapis.com/books/v1/volumes?q={name}')
    return res.json()


if __name__ == "__main__":
    uvicorn.run("server:app", host="0.0.0.0", port=8000, reload=True)
