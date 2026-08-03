---
title:
params:
    header: "header image"
    picture: "user.svg"
    picture_mask: "hex"
    at: "{{ replace .File.ContentBaseName "-" " " }}"
    byline: "Byline"
    pronouns: "pro/nouns"
    extLink: "example.com"
    qna:
        - Question
        - Answer
---

Write a little bit about yourself...