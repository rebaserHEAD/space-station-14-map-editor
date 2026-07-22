// Preload runs in an isolated context with access to Node. Empty for the
// bare-wrap tier: the dev-server path needs no native bridge. The future
// ElectronResourceProvider (native fs reads via contextBridge) hooks in here.
