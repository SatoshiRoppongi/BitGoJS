import * as express from 'express';
import { ApiResponseError } from '../errors';
import {
  getLightningWallet,
  InvoiceQuery,
  UpdateLightningWalletClientRequest,
  TransactionQuery,
  PaymentInfo,
  Transaction,
  PaymentQuery,
  updateWalletCoinSpecific,
} from '@bitgo/abstract-lightning';
import { decodeOrElse } from '@bitgo/sdk-core';
import { TransactionParams, PaymentHashParams } from './codecs';

export async function handleListLightningInvoices(req: express.Request): Promise<unknown> {
  const bitgo = req.bitgo;

  const params = decodeOrElse(InvoiceQuery.name, InvoiceQuery, req.query, (error) => {
    throw new ApiResponseError(`Invalid query parameters for listing lightning invoices: ${error}`, 400);
  });

  const coin = bitgo.coin(req.params.coin);
  const wallet = await coin.wallets().get({ id: req.params.id });
  const lightningWallet = getLightningWallet(wallet);

  return await lightningWallet.listInvoices(params);
}

export async function handleUpdateLightningWalletCoinSpecific(req: express.Request): Promise<unknown> {
  const bitgo = req.bitgo;

  const params = decodeOrElse(
    'UpdateLightningWalletClientRequest',
    UpdateLightningWalletClientRequest,
    req.body,
    (_) => {
      // DON'T throw errors from decodeOrElse. It could leak sensitive information.
      throw new ApiResponseError('Invalid request body to update lightning wallet coin specific', 400);
    }
  );

  const coin = bitgo.coin(req.params.coin);
  const wallet = await coin.wallets().get({ id: req.params.id });

  return await updateWalletCoinSpecific(wallet, params);
}

export async function handleListLightningTransactions(req: express.Request): Promise<unknown> {
  const bitgo = req.bitgo;
  const params = decodeOrElse(TransactionQuery.name, TransactionQuery, req.query, (error) => {
    throw new ApiResponseError(`Invalid query parameters for listing lightning transactions: ${error}`, 400);
  });

  const coin = bitgo.coin(req.params.coin);
  const wallet = await coin.wallets().get({ id: req.params.id });
  const lightningWallet = getLightningWallet(wallet);

  return await lightningWallet.listTransactions(params);
}

export async function handleGetLightningTransaction(req: express.Request): Promise<Transaction> {
  const bitgo = req.bitgo;
  const params = decodeOrElse('TransactionParams', TransactionParams, req.params, (error) => {
    throw new ApiResponseError(`Invalid transaction parameters: ${error}`, 400);
  });

  const coin = bitgo.coin(req.params.coin);
  const wallet = await coin.wallets().get({ id: req.params.id });
  const lightningWallet = getLightningWallet(wallet);

  return await lightningWallet.getTransaction(params.txid);
}

export async function handleGetLightningInvoice(req: express.Request): Promise<unknown> {
  const bitgo = req.bitgo;
  const params = decodeOrElse('PaymentHashParams', PaymentHashParams, req.params, (error) => {
    throw new ApiResponseError(`Invalid invoice parameters: ${error}`, 400);
  });

  const coin = bitgo.coin(req.params.coin);
  const wallet = await coin.wallets().get({ id: req.params.id });
  const lightningWallet = getLightningWallet(wallet);

  return await lightningWallet.getInvoice(params.paymentHash);
}

export async function handleGetLightningPayment(req: express.Request): Promise<PaymentInfo> {
  const bitgo = req.bitgo;
  const params = decodeOrElse('PaymentHashParams', PaymentHashParams, req.params, (error) => {
    throw new ApiResponseError(`Invalid payment parameters: ${error}`, 400);
  });

  const coin = bitgo.coin(req.params.coin);
  const wallet = await coin.wallets().get({ id: req.params.id });
  const lightningWallet = getLightningWallet(wallet);

  return await lightningWallet.getPayment(params.paymentHash);
}

export async function handleListLightningPayments(req: express.Request): Promise<PaymentInfo[]> {
  const bitgo = req.bitgo;
  const params = decodeOrElse(PaymentQuery.name, PaymentQuery, req.query, (error) => {
    throw new ApiResponseError(`Invalid query parameters for listing lightning payments: ${error}`, 400);
  });

  const coin = bitgo.coin(req.params.coin);
  const wallet = await coin.wallets().get({ id: req.params.id });
  const lightningWallet = getLightningWallet(wallet);

  return await lightningWallet.listPayments(params);
}
