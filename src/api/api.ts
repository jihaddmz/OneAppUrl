import {checkForApiError} from "../core/helpers.ts";

const token = localStorage.getItem('token');

const options = {
    baseUrl: 'http://localhost:8080',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        ...(token && {Authorization: `Bearer ${token}`}),
    }
}

export const signUp = async (fullName: string, username: string, password: string): Promise<Map<string, boolean>> => {
    const result = await fetch(`${options.baseUrl}/api/auth/signup`, {
        headers: options.headers,
        method: "POST",
        body: JSON.stringify({ fullName, username, password }),
    })

    await checkForApiError(result)

    return (await result.json());
}

export const signIn = async (username: string, password: string): Promise<string> => {
    const result = await fetch(`${options.baseUrl}/api/auth/signin`, {
        headers: options.headers,
        method: "POST",
        body: JSON.stringify({username, password }),
    })

    await checkForApiError(result)

    return (await result.json()).token;
}