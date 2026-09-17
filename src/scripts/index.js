
// SERVICES
import { getUser } from "./services/user.js"
import { getRepositories } from "./services/repositories.js"

// OBJECTS
import { user } from "./objects/user.js"
import { screen } from "./objects/screen.js"

document.getElementById('btn-search').addEventListener('click', () => {
    const userName = document.getElementById('input-search').value
    getUserProfile(userName)
})

document.getElementById('input-search').addEventListener('keyup', (e) => {
    const userName = e.target.value
    const key = e.which || e.keyCode
    const isEnterKeyPressed = key === 13

    if (isEnterKeyPressed) {
        getUserProfile(userName);;
    }
})

async function getUserProfile(userName) {

    const userResponse = await getUser(userName)
    const repositoriesResponse = await getRepositories(userName)
    user.setInfo(userResponse)
    user.setRepositories(repositoriesResponse)
    screen.renderUser(user)
    
    console.log(user)
    console.log(repositoriesResponse)
}
