bcash-indexer
============

Indexes the bcash chain transactions by spent outpoint. Useful for explorers to
track spent outputs.

Install:
========

    npm install tuxcanfly/bcash-indexer

Usage:
======

    bcash --index-tx --plugins=bcash-indexer

    curl http://127.0.0.1:13037/tx/outpoint/:hash/:index

Note the bcash peer dependency.

Backported from bcash indexer.
