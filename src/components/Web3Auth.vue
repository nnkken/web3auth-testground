<template>
  <div>
    <h1>LikeCoin Web3Auth Demo</h1>
    <button type="button" @click="run">Run</button>
  </div>
</template>

<script setup lang="ts">
import { Web3Auth } from "@web3auth/modal";
import { CHAIN_NAMESPACES } from "@web3auth/base";

const basicConfig = {
  clientId: 'CLIENT_ID',
  chainConfig: {
    chainNamespace: CHAIN_NAMESPACES.OTHER,
    chainId: 'likecoin-mainnet-2',
    rpcTarget: 'https://mainnet-node.like.co/',
    displayName: 'LikeCoin chain',
    blockExplorer: 'https://mintscan.io/likecoin',
    decimals: 9,
    ticker: 'nanolike',
    tickerName: 'LIKE',
  },
  web3AuthNetwork: 'testnet',
} as const;

const web3auth = new Web3Auth({
  ...basicConfig,
  uiConfig: {
    appLogo: 'https://liker.land/favicon.ico',
    defaultLanguage: 'zh',
  },
  authMode: 'DAPP',
});

async function run() {
  await web3auth.initModal();
  const provider = await web3auth.connect();
  console.log({ provider });
  if (provider === null) {
    return;
  }
  const userInfo = await web3auth.getUserInfo();
  console.log({ userInfo });
  const privateKey = await provider.request({
    method: `private_key`,
  });
  console.log({ privateKey });
}
</script>
