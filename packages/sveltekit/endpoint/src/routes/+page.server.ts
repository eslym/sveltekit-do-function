import type { ServerLoad } from "@sveltejs/kit";
import quotes from 'inspirational-quotes';

export const load: ServerLoad = async ()=>{
    return quotes.getQuote();
}
