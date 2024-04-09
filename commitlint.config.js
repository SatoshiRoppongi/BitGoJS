const { readdir } = require('fs').promises;

module.exports = {
  extends: ['@commitlint/config-conventional'],
  ignores: [
    (commit) => /^Merge commit '[a-f0-9]{40}'$/m.test(commit),
    (commit) => /^chore\(root\): publish modules/m.test(commit),
    (commit) => /^chore(deps): /m.test(commit),
  ],
  rules: {
    'scope-enum': async () => [2, 'always', (await readdir('modules')).concat('root', 'deps')],
    'footer-max-line-length': [0, 'always', Infinity],
    'references-empty': [2, 'never'],
  },
  parserPreset: {
    parserOpts: {
      issuePrefixes: [
        'BG-',
        'BMF-',
        'BOS-',
        'BT-',
        'BTC-',
        'CE-',
        'CLEX-',
        'COPS-',
        'CP-',
        'CR-',
        'CS-',
        'DES-',
        'DO-',
        'DOS-',
        'EA-',
        'ERC20-',
        'FAC-',
        'GRC-',
        'HSM-',
        'INC-',
        'IR-',
        'IS-',
        'ITHD-',
        'ITOPS-',
        'MD-',
        'PB-',
        'POL-',
        'PX-',
        'QA-',
        'RA-',
        'SO-',
        'ST-',
        'STLX-',
        'TRUST-',
        'VL-',
        'WIN-',
        'WP-',
        '#', // Prefix used by GitHub issues
      ],
    },
  },
};
