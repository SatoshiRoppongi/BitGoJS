import { StxLib } from '../../src';

/*
 * keys and addresses are from:
 *
 * import * as st from '@stacks/transactions';
 *
 * const secretKey1 = st.privateKeyToString(st.makeRandomPrivKey());
 * const publicKey1 = st.publicKeyToString(st.pubKeyfromPrivKey(secretKey1.data);
 * const address1 = st.getAddressFromPrivateKey(secretKey1);
 * etc.
 */

export const secretKey1 = '66c88648116b721bb2f394e0007f9d348ea08017b6e604de51a3a7d957d58524';
export const pubKey1 =
  '04a68c2d6fdb3706b39f32d6f4225275ce062561908fd7ca540a44c92eb8594ea6db9fcfe0b390c0ead3f45c36afd682eab62eb124a63b460945fe1f7c7f8a09e2';
export const address1 = 'SP10FDHQQ4F2F0KHMN6Z24RMAMGX5933SQJCWKAAR';

export const secretKey2 = '35794adf0dd2a313c18bc118b422740bb94f85114134be34703ff706658087e4';
export const pubKey2 =
  '0421d6f42c99f7d23ec2c0dc21208a9c5edfce4e5bc7b63972e68e86e3cea6f41a94a9a7c24a1ccd83792173f475fdb590cc82f94ff615df39142766e759ce6387';
export const pubKey2Compressed = '0321d6f42c99f7d23ec2c0dc21208a9c5edfce4e5bc7b63972e68e86e3cea6f41a';
export const address2 = 'SPS4HSXAD1WSD3943WZ52MPSY9WPK56SDG54HTAR';

// extended private/public keys
// STX does not use them
export const xprv1 =
  'xprv9s21ZrQH143K34bdhCWMuiuHfdjQB21gu95NwpeGEEfGMWs7tA5s3PMBBPeJmXn5DQ3vv8Hp8kq1KrsaJJnczW3BMztL2VGTnxVPgVjgq1H';
export const xpub1 =
  'xpub661MyMwAqRbcFYg6oE3NGrr2DfZtaUjYGMzykD3snaCFEKCGRhQ7bBff2g3CYvyYPQMGSwSe1DH8GXvP6uB3iiWsPGGMbXVZGkrk1UxQVk6';
export const xprv1Protocol = '73ea19aea25e87c4ee8eaee21417442ac9eb6898f4538ade8f2091d1d2c5946d';
export const xpub1Protocol =
  '042794bc43d75db0e8589987818754aa2f820a350a5742efaf0d50518fcbc6a80c597aa51aa8e755fd10b753f7e36410849171a99d8533f6ea84a0c4dfbe6e2419';
export const xpub1ProtocolCompressed = '032794bc43d75db0e8589987818754aa2f820a350a5742efaf0d50518fcbc6a80c';

export const ACCOUNT_1 = {
  prv: secretKey1,
  pub: pubKey1,
  address: address1,
};

export const ACCOUNT_2 = {
  prv: secretKey2,
  pub: pubKey2,
  address: address2,
};

export const SENDER_1 = {
  prv: 'edf9aee84d9b7abc145504dde6726c64f369d37ee34ded868fabd876c26570bc01',
};

export const RECIPIENT_1 = {
  address: 'SP3FGQ8Z7JY9BWYZ5WM53E0M9NK7WHJF0691NZ159',
};

export const defaultKeyPairFromPrv = new StxLib.KeyPair({
  prv: secretKey1,
});

export const defaultKeyPairFromPub = new StxLib.KeyPair({
  pub: pubKey2,
});

// verify signatures
export const message1 = 'abc';
// when signed with secretKey1
export const expectedSignature1 =
  '0157a170fae4a310c4b59b8d173289b4adacb79b0a187a6e132cdf02374c22b59519b862d95240af464808faaed341fe42d740c9b89850b52f5f7f906deba67064';

export const message2 = 'hello';
// when signed with secretKey2
export const expectedSignature2 =
  '007a86b0a5486987605f7274272cb4eaefa37af216bdf0c88c5b985a70923d550032b3cf226a8384ad2b96d0b3794b9a6f8e6ed191582fb0cc4f830b2ef14d05fe';

// seed is Buffer.alloc(64) -- all zero bytes
export const defaultSeedSecretKey = 'eafd15702fca3f80beb565e66f19e20bbad0a34b46bb12075cbf1c5d94bb27d2';
export const defaultSeedPubKey =
  '04669261fe20452fe6a03e625944c6a0523e6350b3ea8cbd37c9ca1ff97e3ac8bf3dd2d51a09d6d4831cb2bc9828c5af14ce4c3384c973d75aad423626a2a6d18d';

export const defaultSeedAddressUncompressedMainnet = 'SP21X8PMH8T4MVX8Z75JZPYEVA6Q8FDR7PJ13MV4Q';
export const defaultSeedAddressUncompressedTestnet = 'ST21X8PMH8T4MVX8Z75JZPYEVA6Q8FDR7PG88WTVF';
export const defaultSeedAddressCompressedMainnet = 'SP31MBRF9J8W22W3044MEAZDXFMM85699653ZKR7Q';
export const defaultSeedAddressCompressedTestnet = 'ST31MBRF9J8W22W3044MEAZDXFMM8569967TF1R41';

export const INVALID_KEYPAIR_PRV = new StxLib.KeyPair({
  prv: '8CAA00AE63638B0542A304823D66D96FF317A576F692663DB2F85E60FAB2590C',
});

export const TX_SENDER = {
  prv: 'cb3df38053d132895220b9ce471f6b676db5b9bf0b4adefb55f2118ece2478df01',
  pub: '03797dd653040d344fd048c1ad05d4cbcb2178b30c6a0c4276994795f3e833da41',
  address: 'STB44HYPYAT2BB2QE513NSP81HTMYWBJP02HPGK6',
};

export const TX_RECIEVER = {
  address: 'STDE7Y8HV3RX8VBM2TZVWJTS7ZA1XB0SSC3NEVH0',
};

export const RAW_TX_UNSIGNED =
  '80800000000400164247d6f2b425ac5771423ae6c80c754f7172b0000000000000000000000000000000b400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003020000000000051a1ae3f911d8f1d46d7416bfbe4b593fd41eac19cb00000000000003e800000000000000000000000000000000000000000000000000000000000000000000';

export const SIGNED_TRANSACTION =
  '80800000000400164247d6f2b425ac5771423ae6c80c754f7172b0000000000000000000000000000000b400011ae06c14c967f999184ea8a7913125f09ab64004446fca89940f092509124b9e773aef483e925476c78ec58166dcecab3875b8fab8e9aa4213179d164463962803020000000000051a1ae3f911d8f1d46d7416bfbe4b593fd41eac19cb00000000000003e800000000000000000000000000000000000000000000000000000000000000000000';

// Transactions sign with 2 of 3 keys.
export const SIGNED_TRANSACTION_PK_1_3 =
  '808000000004012fe507c09dbb23c3b7e5d166c81fc4b87692510b000000000000000000000000000000b40000000302009473a37b914f703c81f33141d10eabe4550c4d61f113662cc11cdc0463fc377358408c73d3d3273cdbcc3511dbbd2031b5eaca4cb2b13925da9f9b0c7e64d1a600024abddd63b56c55cd1ed0803c26c473f5f0b9d8473b37b65bd812f035365f154b02016aac0347b8520d8905cbd13c601f45a0ccbbb24831320c54d9ee2c1e3656b76d75e1c527932267d80beb90257bbe2dc7184d9b168993ab3a40fa73be6973c5f5000203020000000000051a1ae3f911d8f1d46d7416bfbe4b593fd41eac19cb00000000000003e874657374000000000000000000000000000000000000000000000000000000000000';
export const SIGNED_TRANSACTION_PK_2_3 =
  '808000000004012fe507c09dbb23c3b7e5d166c81fc4b87692510b000000000000000000000000000000b4000000030002b087ca52f40fdfdf4b16a0bbf7e91e4db2e183ac5c6491a5f60a5450e25de7d002000436f906d040388e3123eb9c37614d7f39da2f283385cda40997212acfa5b24d032fac8299ae9590fbd24d6398ac1c489b523c418d8c06b35467e685199877860201dba16d040f0af2fa8d4bf388cbc7f0cd7463aa7058c49f7e5db2d72d868d7167528cd8393369b94480f9b7f8a2c9087cbd57d4d1a782e553f9cede66642d12c9000203020000000000051a1ae3f911d8f1d46d7416bfbe4b593fd41eac19cb00000000000003e874657374000000000000000000000000000000000000000000000000000000000000';

// right length and format, but invalid
export const invalidPubKey1 = '0321d6f42c99f7d23ec2c0dc2120800c5edfce4e5bc7b63972e68e86e3cea6f41a';
export const invalidPubKey2 =
  '04a68c2d6fdb3706b39f32d6f4225275ce062561908fd7ca540a44c92eb8594ea6db9fcfe0b390c0ead3f45c36afd682eab62eb124a63b460945fe1f7c7f8a09e1';

// multi sig
export const prv1 = '21d43d2ae0da1d9d04cfcaac7d397a33733881081f0b2cd038062cf0ccbb752601';
export const prv2 = 'c71700b07d520a8c9731e4d0f095aa6efb91e16e25fb27ce2b72e7b698f8127a01';
export const prv3 = 'e75dcb66f84287eaf347955e94fa04337298dbd95aa0dbb985771104ef1913db01';
export const pub1 = '02b087ca52f40fdfdf4b16a0bbf7e91e4db2e183ac5c6491a5f60a5450e25de7d0';
export const pub2 = '024abddd63b56c55cd1ed0803c26c473f5f0b9d8473b37b65bd812f035365f154b';
export const pub3 = '038e3c4529395611be9abf6fa3b6987e81d402385e3d605a073f42f407565a4a3d';
export const MULTI_SIG_SIGNED_TRANSACTION =
  '808000000004012fe507c09dbb23c3b7e5d166c81fc4b87692510b000000000000000000000000000000b400000003020123d6d3d22d2ca1b7310f5c45314d1e783c03193e1bb5e08685fc1a48f8bdac7c0d93a463efee18b9b41fffe38d4b4c7475809a37c0fd53f52cef456a8d9280db020010b311f82b1b111eb5efa16c4790687b16dc92b7b4d07a1f0f1fe65baee43eb02ede226f807a097237e7d0ee3aa4fdf9b6287dd23d819ec560df180875f4019a00038e3c4529395611be9abf6fa3b6987e81d402385e3d605a073f42f407565a4a3d000203020000000000051a1ae3f911d8f1d46d7416bfbe4b593fd41eac19cb00000000000003e874657374206d656d6f00000000000000000000000000000000000000000000000000';

// contract call
export const CONTRACT_ADDRESS = 'ST000000000000000000002AMW42H';
export const CONTRACT_NAME = 'pox-4';
export const CONTRACT_FUNCTION_NAME = 'stack-stx';
export const UNSIGNED_SELF_STACK_CONTRACT_CALL =
  '80800000000400164247d6f2b425ac5771423ae6c80c754f7172b0000000000000000000000000000000b4000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000030200000000021a000000000000000000000000000000000000000005706f782d3409737461636b2d737478000000080100000000000000000000000017d784000c00000002096861736862797465730200000009736f6d652d686173680776657273696f6e020000000101010000000000000000000000000000ce4001000000000000000000000000000000020a0200000009736f6d652d686173680200000009736f6d652d6861736801ffffffffffffffffffffffffffffffff010000000000000000000000000001e240';
export const SIGNED_SELF_STACK_CONTRACT_CALL =
  '80800000000400164247d6f2b425ac5771423ae6c80c754f7172b0000000000000000000000000000000b40001833db79cd9c39c7262b808b6ea80a001a9bd290648cf3a19da95f10d1814d69437a00075e8325ef564ed9d6690c575583bcbb29c4e33c8ce80c34e7efd1f5457030200000000021a000000000000000000000000000000000000000005706f782d3409737461636b2d737478000000080100000000000000000000000017d784000c00000002096861736862797465730200000009736f6d652d686173680776657273696f6e020000000101010000000000000000000000000000ce4001000000000000000000000000000000020a0200000009736f6d652d686173680200000009736f6d652d6861736801ffffffffffffffffffffffffffffffff010000000000000000000000000001e240';

export const UNSIGNED_CONTRACT_CALL =
  '80800000000400164247d6f2b425ac5771423ae6c80c754f7172b0000000000000000000000000000000b4000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000030200000000021a000000000000000000000000000000000000000005706f782d3409737461636b2d737478000000040100000000000000000000000017d7840005163248e7aa6879968d241f3e5152d9f2796994d96c0a01000000000000000000000000000000c80a0c00000002096861736862797465730200000009736f6d652d686173680776657273696f6e020000000101';
export const SIGNED_CONTRACT_WITH_ARGS =
  '80800000000400164247d6f2b425ac5771423ae6c80c754f7172b0000000000000000000000000000000b40000dba4d775d6894746f0b8ff3cbc1b0f2696890d0669ffbb8eb8df51098741115e28af448a59583e3d34e344c34879c5c7a82d223833c1214d13cd9813165d8e1e030200000000021a000000000000000000000000000000000000000005706f782d3409737461636b2d737478000000040100000000000000000000000017d7840005163248e7aa6879968d241f3e5152d9f2796994d96c090a0c00000002096861736862797465730200000009736f6d652d686173680776657273696f6e020000000101';
export const SIGNED_CONTRACT_CALL =
  '80800000000400164247d6f2b425ac5771423ae6c80c754f7172b0000000000000000000000000000000b40001b693bdf014c1ac78e307fed49bc1df8fed2a5e42d4b79993f5df626d7b1b2516741495198a3dbf079deebc46ecdd535fe66f518c0a695c533f1667455a05036a030200000000021a000000000000000000000000000000000000000005706f782d3409737461636b2d737478000000010a000000000000000000000000000000007b';
export const MULTI_SIG_CONTRACT_CALL =
  '808000000004012fe507c09dbb23c3b7e5d166c81fc4b87692510b000000000000000000000000000000b400000003020169a032112373b481c48ecb12b8847519f89720d4297a7bf5cac43b9daa8d4ad23dd53657089dad55c94e8be5762e97052683f49e1f457b2e9252f27e975603230200128d0ba2b9584339359ff42c1d6f35ce79a7073152b3c90879bc5162eb8df73b02eada3ee322873a5fa736479e6c536109681482d9f22f1e1a89608090b8666800038e3c4529395611be9abf6fa3b6987e81d402385e3d605a073f42f407565a4a3d0002030200000000021a000000000000000000000000000000000000000005706f782d3409737461636b2d737478000000010a000000000000000000000000000000007b';

// contract call with memo nonce 45n,
export const SEND_MANY_CONTRACT_ADDRESS_WITH_MEMO = 'ST3F1X4QGV2SM8XD96X45M6RTQXKA1PZJZZCQAB4B';
export const SEND_MANY_CONTRACT_NAME_WITH_MEMO = 'send-many-memo';
export const SEND_MANY_CONTRACT_FUNCTION_NAME_WITH_MEMO = 'send-many';
export const UNSIGNED_SEND_MANY_WITH_MEMO =
  '80800000000401e7a4b7744e99a54760ca76e54f4d81e4b6026237000000000000002d00000000000002140000000300024b5d924ecc052f95153340054cae526d16e904288e19e1946e1977387f6828c9000294eab995844a334f4b7d946500a4e794f5f5f6e87f9b267175408c03e280640d0002b7ba3e17e31496bbf155596dc3f2a02de457cffead017f671f65d9d34ab261ea0002030200000001000215e7a4b7744e99a54760ca76e54f4d81e4b60262370100000000005b8d80021ade1e92f0d8b34475a937485a1b1abf66a0dbf2ff0e73656e642d6d616e792d6d656d6f0973656e642d6d616e79000000010b000000030c00000003046d656d6f02000000066d656d6f203102746f0515a4b0823a99fc5e87b8bd2e7e7c189915355e1c0a047573747801000000000000000000000000000f42400c00000003046d656d6f02000000066d656d6f203202746f05159fcae3aebdd9177ca0c2214cf0c5c6a96398a9b8047573747801000000000000000000000000001e84800c00000003046d656d6f02000000066d656d6f203302746f0515182d5c3b6d67376626597ee83fba62b392a15beb047573747801000000000000000000000000002dc6c0';
export const SIGNED_SEND_MANY_WITH_MEMO =
  '80800000000401e7a4b7744e99a54760ca76e54f4d81e4b6026237000000000000002d0000000000000214000000030200e692cb213bce035e38d5fa31df54a3039b3d24af05f66c046964615acb739670368f424af1c60c0961af5f976b46c6ad1593b6854f3d93b07c361a7ef348456502017b9cdedeb3fd92fe49019f4e310052e85a4c3bb46c0ee89db65f7c7e73592e7b60a9c127fbbb125a124baa3efb0dd679879c70c4a6ca55f3afacedb1565dde6c0002b7ba3e17e31496bbf155596dc3f2a02de457cffead017f671f65d9d34ab261ea0002030200000001000215e7a4b7744e99a54760ca76e54f4d81e4b60262370100000000005b8d80021ade1e92f0d8b34475a937485a1b1abf66a0dbf2ff0e73656e642d6d616e792d6d656d6f0973656e642d6d616e79000000010b000000030c00000003046d656d6f02000000066d656d6f203102746f0515a4b0823a99fc5e87b8bd2e7e7c189915355e1c0a047573747801000000000000000000000000000f42400c00000003046d656d6f02000000066d656d6f203202746f05159fcae3aebdd9177ca0c2214cf0c5c6a96398a9b8047573747801000000000000000000000000001e84800c00000003046d656d6f02000000066d656d6f203302746f0515182d5c3b6d67376626597ee83fba62b392a15beb047573747801000000000000000000000000002dc6c0';

export const prvKeysString = [
  'e55883d53335cdf0fe4c505051382b2f7cb95216663e4080ebbcaa74bcca975001',
  '0971b2ba193fd393a4c39efccc3d63baff5d498500acfc97c87655316522742401',
  '041c8b4ba8250855a4a3cd4d9b28e4562c9f4aee97f79442bb9ff2cff684522001',
];

export const sendManyRecipients = [
  {
    address: 'SN2JB10HTK7Y5X1XRQMQ7WZ0RK4AKAQGW1A755YYT',
    amount: '1000000',
    memo: 'memo 1',
  },
  {
    address: 'SN2FWNRXEQQCHEZ50R8GMSW65RTMP7659Q2MYY9P4',
    amount: '2000000',
    memo: 'memo 2',
  },
  {
    address: 'SNC2TQ1VDNKKESH6B5ZEGFXTCASS58AVXDAC9H7W',
    amount: '3000000',
    memo: 'memo 3',
  },
];

export const MEMO = 'memo 1';

export const FUNGIBLE_TOKEN_TRANSFER_CONSTANTS = {
  CONTRACT_ADDRESS: 'STAG18E45W613FZ3H4ZMF6QHH426EXM5QTSAVWYH',
  CONTRACT_NAME: 'tsip6dp-token',
  FUNCTION_NAME: 'transfer',
  SENDER_ADDRESS: 'STAG18E45W613FZ3H4ZMF6QHH426EXM5QTSAVWYH',
  RECEIVER_ADDRESS: 'SN2NN1JP9AEP5BVE19RNJ6T2MP7NDGRZYST1VDF3M',
  TOKEN_NAME: 'tsip6dp-token',
  UNSIGNED_SINGLE_SIG_TX:
    '80800000000400164247d6f2b425ac5771423ae6c80c754f7172b0000000000000000000000000000000b4000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000030200000000021a1500a1c42f0c11bfe3893f479af18904677685be0d747369703664702d746f6b656e087472616e73666572000000040100000000000000000000000000002710051a1500a1c42f0c11bfe3893f479af18904677685be0515ab50cac953ac55edc14e2b236854b1ead863fece020000000131',
  UNSIGNED_SINGLE_SIG_TX_WITHOUT_MEMO:
    '80800000000400164247d6f2b425ac5771423ae6c80c754f7172b0000000000000000000000000000000b4000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000030200000000021a1500a1c42f0c11bfe3893f479af18904677685be0d747369703664702d746f6b656e087472616e73666572000000030100000000000000000000000000002710051a1500a1c42f0c11bfe3893f479af18904677685be0515ab50cac953ac55edc14e2b236854b1ead863fece',
  SIGNED_MULTI_SIG_TX:
    '808000000004012fe507c09dbb23c3b7e5d166c81fc4b87692510b000000000000000000000000000000b400000003020000f2872c232e1747af46070c191947fa2503ac364d111c30c17a7d0307c7c6792140250743d22d37f0df813d48493bf58bdc455d9d71fce8a57245d8cd17335102018627c757a1216e33c6cd06a33a48ae072b8b28f50df772aaaa57cc067fc2220f646a068ea54847638e03c0782063bd4931674cf80be805bc458e27a0d042a24700038e3c4529395611be9abf6fa3b6987e81d402385e3d605a073f42f407565a4a3d0002030200000000021a1500a1c42f0c11bfe3893f479af18904677685be0d747369703664702d746f6b656e087472616e73666572000000040100000000000000000000000000002710051a1500a1c42f0c11bfe3893f479af18904677685be0515ab50cac953ac55edc14e2b236854b1ead863fece020000000131',
};
