import * as request from "../lib/request";

const baseUrl = 'http://localhost:3030/data/events'

export const getAll = async () => {
    const result = await request.get(baseUrl);

    return result;
};

export const getOne = async (eventId) => {
    const result = await request.get(`${baseUrl}/${eventId}`, );

    return result;
}

export const getLatest = async () => {
    const query = new URLSearchParams({
        // sortBy: `_createdOn desc`,
        offset: 0,
        pageSize: 3,
    });

    const result = await request.get(`${baseUrl}?${query}`);

    return result;
}

export const create = async (eventData) => {
    const result = await request.post(baseUrl, eventData);

    return result;
};

export const edit = async (eventId, eventData) => {
    const result = await request.put(`${baseUrl}/${eventId}`, eventData);

    return result;
};

export const remove = async (eventId) => request.remove(`${baseUrl}/${eventId}`);
