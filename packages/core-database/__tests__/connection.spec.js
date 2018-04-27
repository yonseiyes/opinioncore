'use strict';

let ConnectionInterface

beforeAll(async (done) => {
  await require('./__support__/setup')()

  ConnectionInterface = new (require('../lib/connection'))()

  done()
})

describe('Connection Interface', () => {
  it('should be an object', async () => {
    await expect(ConnectionInterface).toBeInstanceOf(require('../lib/connection'))
  })

  describe('getConnection', async () => {
    it('should be a function', async () => {
      await expect(ConnectionInterface.getConnection).toBeFunction()
    })
  })

  describe('connect', async () => {
    it('should be a function', async () => {
      await expect(ConnectionInterface.connect).toBeFunction()
    })
  })

  describe('disconnect', async () => {
    it('should be a function', async () => {
      await expect(ConnectionInterface.disconnect).toBeFunction()
    })
  })

  describe('getActiveDelegates', async () => {
    it('should be a function', async () => {
      await expect(ConnectionInterface.getActiveDelegates).toBeFunction()
    })
  })

  describe('buildDelegates', async () => {
    it('should be a function', async () => {
      await expect(ConnectionInterface.buildDelegates).toBeFunction()
    })
  })

  describe('buildWallets', async () => {
    it('should be a function', async () => {
      await expect(ConnectionInterface.buildWallets).toBeFunction()
    })
  })

  describe('saveWallets', async () => {
    it('should be a function', async () => {
      await expect(ConnectionInterface.saveWallets).toBeFunction()
    })
  })

  describe('saveBlock', async () => {
    it('should be a function', async () => {
      await expect(ConnectionInterface.saveBlock).toBeFunction()
    })
  })

  describe('saveBlockAsync', async () => {
    it('should be a function', async () => {
      await expect(ConnectionInterface.saveBlockAsync).toBeFunction()
    })
  })

  describe('saveBlockCommit', async () => {
    it('should be a function', async () => {
      await expect(ConnectionInterface.saveBlockCommit).toBeFunction()
    })
  })

  describe('deleteBlock', async () => {
    it('should be a function', async () => {
      await expect(ConnectionInterface.deleteBlock).toBeFunction()
    })
  })

  describe('getBlock', async () => {
    it('should be a function', async () => {
      await expect(ConnectionInterface.getBlock).toBeFunction()
    })
  })

  describe('getLastBlock', async () => {
    it('should be a function', async () => {
      await expect(ConnectionInterface.getLastBlock).toBeFunction()
    })
  })

  describe('getBlocks', async () => {
    it('should be a function', async () => {
      await expect(ConnectionInterface.getBlocks).toBeFunction()
    })
  })

  describe('saveRounds', async () => {
    it('should be a function', async () => {
      await expect(ConnectionInterface.saveRounds).toBeFunction()
    })
  })

  describe('deleteRound', async () => {
    it('should be a function', async () => {
      await expect(ConnectionInterface.deleteRound).toBeFunction()
    })
  })

  describe('updateDelegateStats', async () => {
    it('should be a function', async () => {
      await expect(ConnectionInterface.updateDelegateStats).toBeFunction()
    })
  })

  describe('applyRound', async () => {
    it('should be a function', async () => {
      await expect(ConnectionInterface.applyRound).toBeFunction()
    })
  })

  describe('undoRound', async () => {
    it('should be a function', async () => {
      await expect(ConnectionInterface.undoRound).toBeFunction()
    })
  })

  describe('validateDelegate', async () => {
    it('should be a function', async () => {
      await expect(ConnectionInterface.validateDelegate).toBeFunction()
    })
  })

  describe('validateForkedBlock', async () => {
    it('should be a function', async () => {
      await expect(ConnectionInterface.validateForkedBlock).toBeFunction()
    })
  })

  describe('applyBlock', async () => {
    it('should be a function', async () => {
      await expect(ConnectionInterface.applyBlock).toBeFunction()
    })
  })

  describe('undoBlock', async () => {
    it('should be a function', async () => {
      await expect(ConnectionInterface.undoBlock).toBeFunction()
    })
  })

  describe('applyTransaction', async () => {
    it('should be a function', async () => {
      await expect(ConnectionInterface.applyTransaction).toBeFunction()
    })
  })

  describe('undoTransaction', async () => {
    it('should be a function', async () => {
      await expect(ConnectionInterface.undoTransaction).toBeFunction()
    })
  })

  describe('snapshot', async () => {
    it('should be a function', async () => {
      await expect(ConnectionInterface.snapshot).toBeFunction()
    })
  })

  describe('__registerWalletManager', async () => {
    it('should be a function', async () => {
      await expect(ConnectionInterface.__registerWalletManager).toBeFunction()
    })
  })

  describe('__registerRepositories', async () => {
    it('should be a function', async () => {
      await expect(ConnectionInterface.__registerRepositories).toBeFunction()
    })
  })
})