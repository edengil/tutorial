from fastapi import Request
from fastapi.responses import FileResponse
from fastapi import FastAPI
import uvicorn
import requests


app = FastAPI()


wonders = [
    {
        "ID": 1,
        "name": "The Great Pyramid",
        "location": "Giza"
    }
]


# @app.get('/')
# def root():
#     return {"message": "Server is up and running"}
@app.get('/')
def root():
    return {"message": "Someone has made a request and accessed the server. Exciting!"}


@app.get("/wonders/{id}")
async def query_params(id):
    for wonder in wonders:
        if int(id) == wonder["ID"]:
            return wonder["name"]
    return ""

id_counter = 0


@app.post('/wonders', status_code=201)
async def create_wonder(request: Request):
    new_wonder = await request.json()
    global id_counter
    id_counter += 1
    new_wonder["ID"] = id_counter
    wonders.append(new_wonder)
    return "Created"

# Note : this is just a simple example! a PUT router should update a resource and not print
# @app.put("/items/{id}")
# async def items(id ,name = Body(...), location = Body(...)):
#     print(id)
#     print(f"username: ${name}, password ${location}")
#     return "done"


if __name__ == "__main__":
    uvicorn.run("server:app", host="0.0.0.0", port=4000, reload=True)
