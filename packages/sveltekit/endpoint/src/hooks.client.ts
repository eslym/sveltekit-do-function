import type { HandleClientError } from '@sveltejs/kit';
import './app.css';

export const handleError: HandleClientError = async ({ error }) => {
    if (error && typeof error === 'object' && 'message' in error) {
        return { message: `${error.message}` };
    }
    return { message: 'An error occurred' };
};
