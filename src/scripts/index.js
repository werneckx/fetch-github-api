document.getElementById('btn-search').addEventListener('click', () => {
    const username = document.getElementById('input-search').value
    getUserProfile(username)
})

document.getElementById('input-search').addEventListener('keyup', (e) =>{
    const username = e.target.value
    const key = e.which || e.keyCode
    const isEnterKeyPressed = key === 13

    if (isEnterKeyPressed){
        getUserProfile(username)
    }
})


async function search(username) {
    const response = await fetch(`https://api.github.com/users/${username}`)
    return await response.json()
}

function getUserProfile(username) {
    search(username).then(
        userData => {
            let userInfo =
                `
                <img src="${userData.avatar_url}" alt="Foto de perfil do usuário ${userData.name}">
                <div class="data">
                    <h1>${userData.name ?? 'N/A'}</h1>
                    <p>${userData.bio ?? 'N/A'}</p>
                </div>
                `

            document.querySelector('.profile-data').innerHTML = userInfo
        }
    )
}
