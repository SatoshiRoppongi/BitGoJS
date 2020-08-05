import { KeyPair } from '../../../src/coin/hbar/keyPair';

export const ACCOUNT_1 = {
  accountId: '0.0.81320',
  privateKey: '302e020100300506032b65700422042062b0b669de0ab5e91b4328e1431859a5ca47e7426e701019272f5c2d52825b01',
  publicKey: '302a300506032b65700321005a9111b5e6881ff20b9243a42ac1a9a67fa16cd4f01e58bab30c1fe611ea8cf9',
  privateKeyBytes: Uint8Array.from(
    Buffer.from('62b0b669de0ab5e91b4328e1431859a5ca47e7426e701019272f5c2d52825b01', 'hex'),
  ),
  publicKeyBytes: Uint8Array.from(
    Buffer.from('5a9111b5e6881ff20b9243a42ac1a9a67fa16cd4f01e58bab30c1fe611ea8cf9', 'hex'),
  ),
};

export const OPERATOR = {
  accountId: '0.0.75861',
  publicKey: '302a300506032b6570032100d32b7b1eb103c10a6c8f6ec575b8002816e9725d95485b3d5509aa8c89b4528b',
  privateKey: '302e020100300506032b65700422042088b5af9484cef4b0aab6e0ba1002313fdfdfacfdf23d6d0957dc5f2c24fc3b81',
};

export const ACCOUNT_2 = {
  accountId: '0.0.75861',
  privateKey: '5bb72603f237c0993f7973d37fdade32c71aa94aee686aa79d260acba1882d9a',
  publicKey: '302a300506032b6570032100592a4fbb7263c59d450e651df96620dc9208ee7c7d9d6f2fdcb91c53f8831261',
};

export const ACCOUNT_3 = {
  accountId: '0.0.78963',
  privateKey: '310a775bcc36016275d64cb8e4508e19437708852e42a3948a641b664be800a9',
  publicKey: '302a300506032b6570032100fa344793601cef71348f994f30a168c2dd55f357426a180a5a724d7e03585e91',
};

export const ed25519PrivKeyPrefix = '302e020100300506032b657004220420';

export const ed25519PubKeyPrefix = '302a300506032b6570032100';

export const OWNER1 = ACCOUNT_1.publicKey;

export const OWNER2 = ACCOUNT_2.publicKey;

export const OWNER3 = ACCOUNT_3.publicKey;

export const FEE = '1000000000';

export const VALID_ADDRESS = { address: '10.0.24141' };

export const INVALID_ADDRESS = { address: '1002.4141' };

export const WALLET_INITIALIZATION =
  '229f010a100a080888e1e0f8051000120418d5d00412021804188094ebdc03220208785a7d0a722a700802126c0a2212201c5b8332673e2bdd7d677970e549e05157ea6a94f41a5da5020903c1c391f8ef0a221220265f7cc91c0330ef27a626ff8688da761ab0543d33ba63c8315e2c91b6c595af0a22122003ad12643db2a6ba5cf8a1da14d4bd5ee46625f88886d01cc70d2d9c6ee2266610004a0508d0c8e103';

export const NON_SIGNED_TRANSFER_TRANSACTION =
  '22450a140a0c089ded8af90510aac5d8b101120418a8fb04120318a912188094ebdc0322020878721e0a1c0a0c0a080800100018a8fb0410130a0c0a080800100018d5d0041014';

export const SIGNED_TRANSFER_TRANSACTION =
  '1a660a640a205a9111b5e6881ff20b9243a42ac1a9a67fa16cd4f01e58bab30c1fe611ea8cf91a405b1aeed9403e696be91a2a3353a82f677a7fa910071aeda071c011b2e79689ebd78e61f50c9755a453a0b4b5e29941bcdfd2f34e62de9ed14c905c3c8ac99a0422450a140a0c089ded8af90510aac5d8b101120418a8fb04120318a912188094ebdc0322020878721e0a1c0a0c0a080800100018a8fb0410130a0c0a080800100018d5d0041014';

export const THREE_TIMES_SIGNED_TRANSACTION =
  '1ab2020a640a205a9111b5e6881ff20b9243a42ac1a9a67fa16cd4f01e58bab30c1fe611ea8cf91a40865385d83d1d52c2eae5fcc2f2730e262e50865d66f9b6cd5026648c25fee58ca302a74901ae447f64f395ba0cb0e08b1a38a4d2093bac8dc25983aea43147050a640a20592a4fbb7263c59d450e651df96620dc9208ee7c7d9d6f2fdcb91c53f88312611a404556acc4c35636a07685b5d3166d2669f4a39285e32127b6c17ab843e69afcd4fc3700abbca5b90d31b2a84a6ed6a98a5b56b7a726898ede0e0c4361fee21b050a640a20fa344793601cef71348f994f30a168c2dd55f357426a180a5a724d7e03585e911a40542256c07d682b1a395d166f04f431c78748dbc3998641c9bac4dc64e22617776c16157b71591abe3bde2ba4dcdb872a3eb7b399b75885fb92ea2aa90d6fb10322440a140a0c089ded8af90510aac5d8b101120418a8fb0412021804188094ebdc0322020878721e0a1c0a0c0a080800100018a8fb0410130a0c0a080800100018d5d0041014';

export const ENCODED_TRANSACTION = 'not defined';

export const errorMessageInvalidPrivateKey = 'Invalid private key';

export const errorMessageInvalidPublicKey = 'Invalid public key:';

export const errorMessageNotPossibleToDeriveAddress = 'Address derivation is not supported in Hedera';

export const errorMessageFailedToParse = 'Failed to parse correct key';

export const INVALID_KEYPAIR_PRV = new KeyPair({
  prv: '8CAA00AE63638B0542A304823D66D96FF317A576F692663DB2F85E60FAB2590C',
});

export const KEYPAIR_PRV = new KeyPair({
  prv: '302e020100300506032b65700422042062b0b669de0ab5e91b4328e1431859a5ca47e7426e701019272f5c2d52825b01',
});

export const WALLET_TXDATA = Uint8Array.from(
  Buffer.from(
    '22a3010a140a0c0883aa91f9051080feab9b01120418d5d00412021804188094ebdc03220208785a7d0a722a700802126c0a2212205a9111b5e6881ff20b9243a42ac1a9a67fa16cd4f01e58bab30c1fe611ea8cf90a221220592a4fbb7263c59d450e651df96620dc9208ee7c7d9d6f2fdcb91c53f88312610a221220fa344793601cef71348f994f30a168c2dd55f357426a180a5a724d7e03585e9110004a0508d0c8e103',
    'hex',
  ),
);
export const WALLET_SIGNED_TRANSACTION =
  '1a660a640a205a9111b5e6881ff20b9243a42ac1a9a67fa16cd4f01e58bab30c1fe611ea8cf91a40ff00c43d4da6d33abf90b2de7d36db8cea62248a6b8ef35be7741c43e762f1208fe5224ac79cd53e59df48913418e976320f789a091cf67a23278a12781b490d22a3010a140a0c0883aa91f9051080feab9b01120418d5d00412021804188094ebdc03220208785a7d0a722a700802126c0a2212205a9111b5e6881ff20b9243a42ac1a9a67fa16cd4f01e58bab30c1fe611ea8cf90a221220592a4fbb7263c59d450e651df96620dc9208ee7c7d9d6f2fdcb91c53f88312610a221220fa344793601cef71348f994f30a168c2dd55f357426a180a5a724d7e03585e9110004a0508d0c8e103';
