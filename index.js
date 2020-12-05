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

	/**
	 * Get a random dog!
	 * @returns {Promise<BufferSource>}
	 * @static
	 * @async
	 */
	static async dog() {
		const body = await fetch('https://api.snowflakedev.xyz/dog');
		const image = await body.buffer();
		return image;
	}
}

module.exports = Snowflake;