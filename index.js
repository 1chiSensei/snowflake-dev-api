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
	 * Get a random fox!
	 * @returns {Promise<Buffer>}
	 * @static
	 * @async
	 */
	static async fox() {
		const body = await fetch('https://api.snowflakedev.xyz/fox');
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

	/**
	 * Get a random roast!
	 * @returns {Promise<string>}
	 * @static
	 * @async
	 */
	static async roast() {
		const body = await fetch('https://api.snowflakedev.xyz/roast');
		const data = await body.json();
		return data.roast;
	}

	/**
	 * Get a random eightball response!
	 * @returns {Promise<string>}
	 * @static
	 * @async
	 */
	static async eightball() {
		const body = await fetch('https://api.snowflakedev.xyz/eightball');
		const data = await body.json();
		return data.response;
	}

	/**
	 * Get a random discord bot token!
	 * @returns {Promise<string>}
	 * @static
	 * @async
	 */
	static async token() {
		const body = await fetch('https://api.snowflakedev.xyz/token');
		const data = await body.json();
		return data.token;
	}

	/**
	 * Chat with a bot!
	 * @param {string} message - Your message.
	 * @param {string} [name] - The bot name.
	 * @param {string} [gender] - The gender of the bot.
	 * @param {string} [id] - The user id of the discord bot
	 * @returns {Promise<string>}
	 * @static
	 * @async
	 */
	static async chat(message, name, gender, id) {
		if (typeof message !== 'string') throw new Error('The message must be a string.');
		const body = await fetch(`https://api.snowflakedev.xyz/chatbot?message=${message}${name ? `&name=${name}` : ''}${gender ? `&gender=${gender}` : ''}${id ? `&user=${id}` : ''}`);
		const data = await body.json();
		return data.message;
	}
}

module.exports = Snowflake;