#!/bin/bash

echo "Executing package requirements changes..."

sed -i'.bak' "10s/.*/var Buffer = require('buffer').Buffer;/" ./node_modules/typedarray-to-buffer/index.js
sed -i'.bak' "28s/.*/var process = require('process');/" ./node_modules/readable-stream/lib/_stream_writable.js
sed -i'.bak' "3s/.*/var process = require('process');/" ./node_modules/pbkdf2/browser.js
# sed -i'.bak' "17s/.*/var Buffer = require('buffer').Buffer;/" ./node_modules/pbkdf2/browser.js
sed -i'.bak' "2s/.*/var Transform = require('stream-browserify').Transform/" ./node_modules/cipher-base/index.js
sed -i'.bak' '10s/.*/var _fs = _interopRequireDefault(require("expo-file-system"));/' ./node_modules/@ckb-lumos/hd/lib/xpub_store.js
sed -i'.bak' '8s/.*/var _crypto = _interopRequireDefault(require("react-native-expo-crypto"));/' ./node_modules/@ckb-lumos/hd/lib/keystore.js
sed -i'.bak' '14s/.*/var _fs = _interopRequireDefault(require("expo-file-system"));/' ./node_modules/@ckb-lumos/hd/lib/keystore.js
sed -i'.bak' '16s/.*/var _path = _interopRequireDefault(require("path-browserify"));/' ./node_modules/@ckb-lumos/hd/lib/keystore.js
# sed -i'.bak' '19s/.*/var Buffer = require("buffer").Buffer;/' ./node_modules/@ckb-lumos/hd/lib/keystore.js
sed -i'.bak' '14s/.*/var _crypto = _interopRequireDefault(require("react-native-expo-crypto"));/' ./node_modules/@ckb-lumos/hd/lib/mnemonic/index.js
# sed -i'.bak' '17s/.*/var Buffer = require("buffer").Buffer;/' ./node_modules/@ckb-lumos/hd/lib/mnemonic/index.js
sed -i'.bak' '8s/.*/var _crypto = _interopRequireDefault(require("react-native-expo-crypto"));/' ./node_modules/@ckb-lumos/hd/lib/keychain.js
sed -i'.bak' '15s/.*/var Buffer = require("buffer").Buffer;/' ./node_modules/@ckb-lumos/hd/lib/keychain.js
sed -i'.bak' "3s/.*/var process = require('process');/" ./node_modules/react-native-expo-crypto/node_modules/pbkdf2/browser.js

#@ckb/lumos overrides
#Services
sed -i'.bak' "12s/.*/var fetch = require('whatwg-fetch').fetch;/" ./node_modules/@ckb-lumos/ckb-indexer/lib/services.js
sed -i'.bak' "95s/.*/const res = await (0, fetch)(rpcUrl, {/" ./node_modules/@ckb-lumos/ckb-indexer/lib/services.js
sed -i'.bak' "119s/.*/const res = await (0, fetch)(ckbIndexerUrl, {/" ./node_modules/@ckb-lumos/ckb-indexer/lib/services.js

#RPC
sed -i'.bak' "10s/.*/var fetch = require('whatwg-fetch').fetch;/" node_modules/@ckb-lumos/toolkit/lib/rpc.js
sed -i'.bak' "28s/.*/const response = await (0, fetch)(target.uri, mergeOptions({/" node_modules/@ckb-lumos/toolkit/lib/rpc.js
sed -i'.bak' "67s/.*/const response = await (0, fetch)(target.uri, mergeOptions({/" node_modules/@ckb-lumos/toolkit/lib/rpc.js

#Collector
sed -i'.bak' "14s/.*/var fetch = require('whatwg-fetch').fetch;/" ./node_modules/@ckb-lumos/ckb-indexer/lib/collector.js
sed -i'.bak' "209s/.*/const res = await (0, fetch)(rpcUrl, {/" ./node_modules/@ckb-lumos/ckb-indexer/lib/collector.js

#Crypto
sed -i'.bak' "1s/.*/const randomBytes = require('react-native-expo-crypto').randomBytes;/" ./node_modules/bip39-light/index.js
sed -i'.bak' "2s/.*/if (false) {/" ./node_modules/bip39-light/index.js
sed -i'.bak' "8s/.*//" ./node_modules/bip39-light/index.js


echo "Package requirements changed successfully!"
