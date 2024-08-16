server:
  hugo server -D -F

build:
  hugo --gc --minify

create-post:
  hugo new blog/new.md
