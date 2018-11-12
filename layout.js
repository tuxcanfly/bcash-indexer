/*!
 * layout.js - indexer layout for bcash
 * Copyright (c) 2018, the bcash developers (MIT License).
 * https://github.com/bcash-org/bcash
 */

'use strict';

const bdb = require('bdb');

/*
 * Index Database Layout:
 * To be extended by indexer implementations
 *  V -> db version
 *  O -> flags
 *  h[height] -> recent block hash
 *  R -> chain sync state
 */

const layout = {
  V: bdb.key('V'),
  O: bdb.key('O'),
  h: bdb.key('h', ['uint32']),
  R: bdb.key('R')
};

/*
 * Expose
 */

module.exports = layout;
