from ast import Num
import re

# Exercise 1
# Exercise 2
# Exercise 3
# Exercise 4


class YouTubeLessonManager:
    def __init__(self):
        self.lessons = {}
        self.num = 0

    def save(self, name, url):

        url_ = url.split("=", 1)[1]
        c = self.clean(name)
        self.lessons[c] = [url_, self.num]
        print(self.lessons[c])

    def get(self, name):
        c = self.clean(name)
        self.lessons[c][1] += 1
        print(self.lessons[c][1])
        return f"https://www.youtube.com/watch?v={self.lessons[c][0]}"

    def get_counts(self, name):
        c = self.clean(name)
        return self.lessons[c][1]

    def clean(self, name):
        name = name.lower()
        return re.sub('[^a-zA-Z0-9]+\s*', ' ', name)

    def get_most_popular_lesson(self):
        max = 0
        name = ""
        for lesson in self.lessons:
            if self.lessons[lesson][1] > max:
                max = self.lessons[lesson][1]
                name = self.lessons[lesson][0]
        return f"https://www.youtube.com/watch?v={name}"


lesson_manager = YouTubeLessonManager()
lesson_manager.save("For-Loops", "https://www.youtube.com/watch?v=OnDr4J2UXSA")


lesson_manager.get("For-Loops")
lesson_manager.get("For-Loops")
lesson_manager.get("For-Loops")

print(lesson_manager.get_counts("For-Loops"))

print(lesson_manager.get_most_popular_lesson())
