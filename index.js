const fetch = require('node-fetch');

/**
 * The main class.
 * @class
 * @hideconstructor
 */
class Snowflake {
	/**
	 * Get a random cat!
	 * @returns {Promise<Buffer>}
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
	 * @returns {Promise<Buffer>}
	 * @static
	 * @async
	 */
	static async dog() {
		const body = await fetch('https://api.snowflakedev.xyz/dog');
		const image = await body.buffer();
		return image;
	}

	/**
	 * Get a random meme!
	 * @param {string} [subreddit] - The subreddit to get a random meme from.
	 * @returns {Promise<object>}
	 * @static
	 * @async
	 */
	static async meme(subreddit) {
		const body = await fetch(`https://api.snowflakedev.xyz/meme${subreddit ? `?sbr=${subreddit}` : ''}`);
		const data = await body.json();
		const meme = {
			isVideo: data.isVideo,
			nsfw: data.nsfw,
			createdAt: data.createdAt,
			url: data.url,
			ups: data.ratings.upvote,
			downs: data.ratings.downvote,
			comments: data.ratings.comments,
			subreddit: data.subreddit,
			title: data.title,
			link: data.link
		};
		return meme;
	}
}

module.exports = Snowflake;