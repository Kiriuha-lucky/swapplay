'use strict';

/**
 * swap service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::swap.swap');
