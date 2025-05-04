import {checkForApiError} from "../core/helpers.ts";
import {UrlType} from "../types/UrlType.ts";

const token = localStorage.getItem('token');

const options = {
    baseUrl: 'https://oneappurl.onrender.com',
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

export const saveUrl = async (appName: string, androidUrl: string, iosUrl: string): Promise<UrlType> => {
    const username = localStorage.getItem('username');
    const result = await fetch(`${options.baseUrl}/api/url/save`, {
        headers: options.headers,
        method: "POST",
        body: JSON.stringify({username, iosUrl, androidUrl, appName})
    })

    await checkForApiError(result)

    return (await result.json());
}

export const getAllUrls = async (): Promise<UrlType[]> => {
    const username = localStorage.getItem('username');
    const result = await fetch(`${options.baseUrl}/api/url?username=${username}`, {
        headers: options.headers,
        method: "GET",
    })

    await checkForApiError(result)

    return (await result.json());
}

export const searchUrls = async (query: string): Promise<UrlType[]> => {
    const result = await fetch(`${options.baseUrl}/api/url/filter?query=${query}`, {
        headers: options.headers,
        method: "GET",
    })

    await checkForApiError(result)

    const data = await result.json() as UrlType[];

    return (data);
}

export const deleteUrl = async (id: string): Promise<UrlType> => {
    const result = await fetch(`${options.baseUrl}/api/url/delete/${id}`, {
        headers: options.headers,
        method: "DELETE",
    })

    await checkForApiError(result)

    return (await result.json());
}