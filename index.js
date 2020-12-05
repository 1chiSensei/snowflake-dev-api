const fetch = require('node-fetch');

/**
 * The main class.
 * @class
 * @hideconstructor
 */
class Snowflake {
	/**
	 * Get a random cat!
	 * @returns {Promise<BufferSource>}
	 * @static
	 * @async
	 */
	static async cat() {
		const body = await fetch('https://api.snowflakedev.xyz/cat');
		const image = await body.buffer();
		return image;
	}
}

module.exports = Snowflake;