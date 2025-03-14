import should from 'should';
import utils from '../../../src/lib/utils';
import * as testData from '../../resources/xrp';
import { getBuilderFactory } from '../getBuilderFactory';

describe('XRP Token Transfer Builder', () => {
  const factory = getBuilderFactory('txrp:rlusd');

  it('should build a token transfer', async function () {
    const txBuilder = factory.getTokenTransferBuilder();
    const amount = '25000000000000000';

    txBuilder.to(testData.TEST_SINGLE_SIG_ACCOUNT.address);
    txBuilder.amount(amount);
    txBuilder.sender(utils.getAddressDetails(testData.TEST_MULTI_SIG_ACCOUNT.address).address);
    txBuilder.sequence(1546026);
    txBuilder.fee('1000');
    txBuilder.flags(2147483648);

    const tx = await txBuilder.build();
    const rawTx = tx.toBroadcastFormat();
    should.equal(utils.isValidRawTransaction(rawTx), true);
    rawTx.should.equal(testData.TEST_TOKEN_TRANSFER_TX.unsignedTxHex);

    const rebuilder = factory.from(rawTx);
    rebuilder.setMultiSig();
    rebuilder.sign({ key: testData.SIGNER_USER.prv });
    rebuilder.sign({ key: testData.SIGNER_BITGO.prv });
    const rebuiltTx = await rebuilder.build();
    const rebuiltRawTx = rebuiltTx.toBroadcastFormat();
    rebuiltRawTx.should.equal(testData.TEST_TOKEN_TRANSFER_TX.signedTxHex);
  });
});
