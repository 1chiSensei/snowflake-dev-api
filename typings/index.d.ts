export function Snowflake(...args: any[]): void;

export namespace Snowflake {
	function cat(): Promise<Buffer>

	function dog(): Promise<Buffer>

	function fox(): Promise<Buffer>

	function meme(subreddit?: string): Promise<object>

	function roast(): Promise<string>

	function eightball(): Promise<string>

	function token(): Promise<string>

	function chat(message: string, name?: string, gender?: string, id?: string): Promise<string>
}