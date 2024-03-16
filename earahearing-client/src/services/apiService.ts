
//const BASE_URL = 'http://127.0.0.1:8000'
const BASE_URL = 'https://earahearing-backend-api.onrender.com'

async function sendRequest(url: string, options: RequestInit) {
    const response = await fetch(url, options)
    return response
}


type methodType = 'POST' | 'GET' | 'PUT' | 'DELETE'
function createOptions(method:methodType, body: Record<string, unknown> | null ) {
    const options: Record<string, unknown> = {
        method,
        headers: {
            'Content-Type': 'application/json'
        }
    }

    if (body){
        options["body"] = JSON.stringify(body)
    }
    return options
}


export async function createUser(data: Record<string, unknown>) {
    const options = createOptions('POST', data)

    try {
        const response = await sendRequest(BASE_URL, options)
        if (response.status !== 201) {
            const err = await response.json()
            return {
                status: response.status,
                data: null,
                error: err
            }
        }

        return {
            status: response.status,
            data: await response.json(),
            error: null
        }
    } catch(err) {
        return {
            status: 500,
            data: null,
            error: err
        }
    }
}   