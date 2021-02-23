#!/bin/bash

npx shadow-cljs release app

rm -fr docs/*

cp public/index.html docs/

cp -av public/js docs/js
