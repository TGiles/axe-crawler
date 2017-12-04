/**
 * DOMNode
 *
 * @typedef {object} DOMNode
 */

/**
 * Logger object for managing logging at different log levels
 *
 * @typedef {object} Logger
 *
 * @method error
 * @method info
 * @method debug
 * @method force
 */

/**
 * Configuration Object for axe-crawler
 *
 * @typedef {object} AxeCrawlerConfiguration
 * @property {number} depth
 * @property {number} check
 * @property {string} output
 * @property {string} ignore
 * @property {string} whitelist
 * @property {number|boolean} random
 * @property {string} verbose
 * @property {number} useFileOver
 * @property {Logger} logger
 * @property {string} domain
 * @property {number} numToCheck
 * @property {object[]} viewPorts
 * @property {string} viewPorts[].name
 * @property {number} viewPorts[].width
 * @property {number} viewPorts[].height
 *
 * @method setNumToCheck
 * @method configureDB
 */

/**
 * AxeCrawler type
 * @typedef {object} Crawler
 * @method crawl
 */
