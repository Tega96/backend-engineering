

const API_URL = 'https:jsonplaceholder.typicode.com/users/1'

type UserPlaceholder = {
    id: number;
    name: string;
    email: string;
    company: {
        name: string;
    }
}

type UserData = {
    id: number;
    name: string;
    email: string
    company: string;
}

function transformUser (rawData:UserPlaceholder): UserData {
    return {
        id: rawData.id,
        name: rawData.name,
        email: rawData.email,
        company: rawData.company.name
    }
}

/**
 * @fetchExternalUser - function to fetch all users. 
 * 
 * AbortController() - allow us to cancel a fetch request in progress. 
 * it is particularly helpful when the external api becomes slow.
 * It give a signal which we pass to the fetch.
 * 
 * fetch() - sends api request to an external url
 * 
 * the controller.abort was called first before the api response. For that -
 * reason, fetch will call the abort method. thus we will check 
 */

async function fetchExternalUser(): Promise<void> {
    const controller = new AbortController()

    const timer = setTimeout(() => {
        controller.abort()
    }, 5000)

    try {
        const response = await fetch(API_URL, {
            method: 'GET',
            signal: controller.signal
        })

        if (!response.ok) {
            console.error(`upstream api failed with http ${response.status}`)
            return;
        }
        
        // get data
        const rawData = (await response.json()) as UserPlaceholder

        const user = transformUser(rawData)
        console.log(user)
    } catch (error) {
        if (error instanceof Error && error.name === "AbortError") {
            console.error(`request failed. upstream api took too long`)
            return
        }
        const message = error instanceof Error ? error.message : 'unknown error'
        console.error("External api failed", message)
    }finally {
        clearTimeout(timer)
    }
}

fetchExternalUser()