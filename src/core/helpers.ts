export const checkForApiError = async (response: Response) => {
    if (!response.ok) {
        throw Error((await response.json()).message);
    }
}