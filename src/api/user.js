import request from "../utils/request.js";

export async function login(data) {
    return await request({
        method: 'POST',
        url: 'user/login',
        data: JSON.stringify(data)
    })
}

export async function logout() {
    return await request({
        method: 'POST',
        url: 'user/logout'
    })
}

export async function me() {
    return await request({
        method: 'GET',
        url: '/user/me'
    })
}
