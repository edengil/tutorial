from fastapi import Request
from fastapi.responses import FileResponse
from fastapi import FastAPI
import uvicorn
from data import wordCounter
from utils import is_new_word, more_than_one
app = FastAPI()


# wonders = [
#     {
#         "ID": 1,
#         "name": "The Great Pyramid",
#         "location": "Giza"
#     }
# ]


@app.get('/')
def root():
    return {"message": "Server is up and running"}


@app.get('/sanity')
def root():
    return {"message": "Someone has made a request and accessed the server. Exciting!"}


@app.get("/word/{word}")
async def query_params(word):
    for item in wordCounter:
        if word == item["word"]:
            return {"count": item["count"]}
    return {"count": 0}


@app.post('/word', status_code=201)
async def create_word(request: Request):
    new_word = await request.json()
    word = (new_word["word"])
    count = is_new_word(word)
    if (count == 1):
        new_word["count"] = count
        wordCounter.append(new_word)
        return {"text": f"Added {word}", "currentCount": {count}}
    else:
        return {"text": f"Added {word}", "currentCount": {count}}

# Note : this is just a simple example! a PUT router should update a resource and not print


@app.post("/word2/", status_code=201)
async def sentence(request: Request):
    new_words = await request.json()
    numNewWords = 0
    words = new_words["word"].split(" ")
    for word in words:
        count = is_new_word(word)
        if (count == 1):
            numNewWords += 1
            new_word = {}
            new_word["word"] = word
            new_word["count"] = count
            wordCounter.append(new_word)

    numOldWords = len(words) - numNewWords
    return {"text": f"Added {numNewWords} words, {numOldWords} already existed", "currentCount": -1}


@app.get("/delete/{word}")
async def delete(word):
    for item in wordCounter:
        if word == item["word"]:
            word.clear()
            return {"delete": word}
    return {"delet": "Noting to delete"}


if __name__ == "__main__":
    uvicorn.run("server:app", host="0.0.0.0", port=4000, reload=True)
