/**
 * @hidden
 */

/**
 */
//
// Blockchain Object
// BitGo accessor to a any Bitcoin address.
// Using this does not require authentication and is unrelated to BitGo wallet management.
//
// Copyright 2014, BitGo, Inc.  All Rights Reserved.
//

import _ from 'lodash';

import { common } from '@bitgo/sdk-core';

//
// Constructor
//
const Blockchain = function (bitgo) {
  // @ts-expect-error - no implicit this
  this.bitgo = bitgo;
};

//
// Get an address
// Fetch an address summary information.
// Includes balance and pending balance.
//
// Parameters include:
//   address: the address to get
//
Blockchain.prototype.getAddress = function (params, callback) {
  params = params || {};
  common.validateParams(params, ['address'], [], callback);

  return Promise.resolve(this.bitgo.get(this.bitgo.url('/address/' + params.address)).result())
    .then(callback)
    .catch(callback);
};

//
// Get address transactions
// List the transactions for a given address
// Parameters include:
//   address: the address to get transactions for
//
Blockchain.prototype.getAddressTransactions = function (params, callback) {
  params = params || {};
  common.validateParams(params, ['address'], [], callback);

  // TODO: support start and limit params
  return Promise.resolve(this.bitgo.get(this.bitgo.url('/address/' + params.address + '/tx')).result())
    .then(callback)
    .catch(callback);
};

//
// Unspent Transactions
// List the unspent outputs for a given address
// Parameters include:
//   address: the address to get unspent transactions
//   limit: return enough unspents to accumulate to at least this amount (in satoshis).
//
Blockchain.prototype.getAddressUnspents = function (params, callback) {
  params = params || {};
  common.validateParams(params, ['address'], [], callback);

  let url = this.bitgo.url('/address/' + params.address + '/unspents');
  if (params.limit) {
    if (!_.isInteger(params.limit)) {
      throw new Error('invalid limit - number expected');
    }
    url += '?limit=' + params.limit * 1e8;
  }

  return Promise.resolve(this.bitgo.get(url).result())
    .then(function (body) {
      return body.unspents;
    })
    .then(callback)
    .catch(callback);
};

//
// Get transaction
// Fetch transaction details.
//
// Parameters include:
//   id: the transaction id to get
//
Blockchain.prototype.getTransaction = function (params, callback) {
  params = params || {};
  common.validateParams(params, ['id'], [], callback);

  return Promise.resolve(this.bitgo.get(this.bitgo.url('/tx/' + params.id)).result())
    .then(callback)
    .catch(callback);
};

//
// Get transaction that spends a specific output
// Fetch transaction details.
//
// Parameters include:
//   txid: the transaction id of the output
//   vout: the position of the output on the transaction that created it
//
Blockchain.prototype.getTransactionByInput = function (params, callback) {
  params = params || {};
  common.validateParams(params, ['txid'], [], callback);
  if (!_.isInteger(params.vout)) {
    throw new Error('invalid vout - number expected');
  }
  return Promise.resolve(this.bitgo.get(this.bitgo.url('/tx/input/' + params.txid + '/' + params.vout)).result())
    .then(callback)
    .catch(callback);
};

//
// Get block
// Fetch block details.
//
// Parameters include:
//   id: the block hash to get, or latest for the latest
//
Blockchain.prototype.getBlock = function (params, callback) {
  params = params || {};
  common.validateParams(params, ['id'], [], callback);

  return Promise.resolve(this.bitgo.get(this.bitgo.url('/block/' + params.id)).result())
    .then(callback)
    .catch(callback);
};

module.exports = Blockchain;
