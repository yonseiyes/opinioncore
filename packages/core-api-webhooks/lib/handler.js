'use strict';

const pluginManager = require('@arkecosystem/core-plugin-manager')
const database = require('@arkecosystem/core-webhooks').database
const utils = require('./utils')
const schema = require('./schema')

/**
 * @type {Object}
 */
exports.index = {
  handler: async (request, h) => {
    const webhooks = await database.paginate(utils.paginate(request))

    return utils.toPagination(request, webhooks, 'webhook')
  }
}

/**
 * @type {Object}
 */
exports.store = {
  handler: async (request, h) => {
    const token = require('crypto').randomBytes(32).toString('hex')
    request.payload.token = token.substring(0, 32)

    const webhook = await database.create(request.payload)
    webhook.token = token

    return h.response(utils.respondWithResource(request, webhook, 'webhook')).code(201)
  },
  options: {
    plugins: {
      pagination: {
        enabled: false
      }
    },
    validate: schema.store()
  }
}

/**
 * @type {Object}
 */
exports.show = {
  handler: async (request, h) => {
    const webhook = await database.findById(request.params.id)
    delete webhook.token

    return utils.respondWithResource(request, webhook, 'webhook')
  },
  options: {
    validate: schema.show()
  }
}

/**
 * @type {Object}
 */
exports.update = {
  handler: async (request, h) => {
    await database.update(request.params.id, request.payload)

    return h.response(null).code(204)
  },
  options: {
    validate: schema.update()
  }
}

/**
 * @type {Object}
 */
exports.destroy = {
  handler: async (request, h) => {
    await database.destroy(request.params.id, request.payload)

    return h.response(null).code(204)
  },
  options: {
    validate: schema.destroy()
  }
}

/**
 * @type {Object}
 */
exports.events = {
  handler: (request, h) => {
    return {
      data: pluginManager.get('webhooks').getEvents()
    }
  }
}