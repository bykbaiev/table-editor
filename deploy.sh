#!/bin/bash

npx shadow-cljs release app

rm -fr docs/*

cp public/index.html docs/

cp -av public/js docs/js

cp -av public/css docs/css
