import type { ServerLoad } from '@sveltejs/kit';
// file from https://github.com/vinitshahdeo/inspirational-quotes/blob/master/data/data.json
import quotes from '$lib/server/quotes.json';

export const load: ServerLoad = async () => {
    const time = Math.floor(Date.now() / (3600 * 1000)) & 0xffff;
    const index = ((time << 8) | (time >> 8)) ^ 0x1234;
    return quotes[index % quotes.length];
};
