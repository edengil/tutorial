from fastapi.responses import FileResponse
from fastapi import FastAPI
import uvicorn
import requests
from store import store

app = FastAPI()


def is_admin(admin):
    if admin == "true" or admin == "True":
        return True
    elif admin == "false" or admin == "False":
        return False
    else:
        print("Not a Boolean")


@app.get("/name/")
async def query_params(name):
    for item in store:
        if name == item["name"]:
            return {"price": item["price"]}
    return {"price": None}


@app.get("/sale/")
async def query_params(admin):
    if (is_admin(admin)):
        for i in store:
            if (i["inventory"] > 10):
                # 50% off
                i["price"] = i["price"]/2
    return store

@app.get("/buy/")
async def query_params(name):
    for i in store:
        if name == i["name"]:
            if (i["inventory"] >= 1):
                i["inventory"] -= 1
                return {"inventory": i["inventory"]}
            else:
                return {"inventory": None}
    return {"inventory": None}

if __name__ == "__main__":
    uvicorn.run("server:app", host="0.0.0.0", port=8000, reload=True)
