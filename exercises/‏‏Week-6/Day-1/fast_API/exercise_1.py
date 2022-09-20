from fastapi.responses import FileResponse
from fastapi import FastAPI
import uvicorn
import requests
from store import store

app = FastAPI()


# @app.get('/')
# def root():
#     return FileResponse('./static/pool_party.PNG')


# @app.get('/')
# def root():
#     return "Someone has made a request and accessed the server. Exciting!"

@app.get('/')
def root():
    return FileResponse('./static/cat.jpg', './static/meow.mp3')


@app.get('/sanity')
def root():
    return "Server is up and running smoothly"


# @app.get("/name/")
# async def query_params(name):
#     for i in store:
#         if name == i["name"]:
#             return {"price": i["price"]}



# @app.get('/maps')
# def maps():
#     return "Here's some stuff related to maps"


# @app.get('/shoobi')
# def shoobi():
#     return "This here is the shoobi *route*"


# @app.get("/landing/{username}")
# async def greet_user(username):
#     return {"message": f"Hi there {username}"}


# @app.get("/optionalParameters/")
# async def query_params(name, l_name):
#     return {"message": f"Hi there {name} {l_name}"}


# @app.get("/book/{name}")
# async def get_book(name):
#     res = requests.get(
#         f'https://www.googleapis.com/books/v1/volumes?q={name}')
#     return res.json()
if __name__ == "__main__":
    uvicorn.run("exercise_1:app", host="0.0.0.0", port=8000, reload=True)
