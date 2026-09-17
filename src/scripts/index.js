
// SERVICES
import { getUser } from "./services/user.js"
import { getRepositories } from "./services/repositories.js"

// OBJECTS
import { user } from "./objects/user.js"
import { screen } from "./objects/screen.js"

function validateEmptyInput(userName) {
    if (userName.length === 0) {
        alert('Preencha o campo com o nome do usuário do GitHub')
        return true
    }
}

document.getElementById('btn-search').addEventListener('click', () => {
    const userName = document.getElementById('input-search').value
    if (validateEmptyInput(userName)) return
    getUserProfile(userName)
})

document.getElementById('input-search').addEventListener('keyup', (e) => {
    const userName = e.target.value
    const key = e.which || e.keyCode
    const isEnterKeyPressed = key === 13
    if (validateEmptyInput(userName)) return
    if (isEnterKeyPressed) {
        getUserProfile(userName);;
    }
})

async function getUserProfile(userName) {
    const userResponse = await getUser(userName)
    const repositoriesResponse = await getRepositories(userName)

    if (userResponse.message === 'Not Found') {
        screen.renderNotFound()
        return
    } else {
        user.setInfo(userResponse)
        user.setRepositories(repositoriesResponse)

        screen.renderUser(user)
    }
}
