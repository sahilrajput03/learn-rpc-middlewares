#!/bin/bash
gacp Update
git add .; git commit -m "hurry update for heroku"; git push
git push heroku main
