async function search(username) {
    const response = await fetch(`https://api.github.com/users/${username}`)
    return await response.json()
}

document.getElementById('btn-search').addEventListener('click', () =>{
    const username = document.getElementById('input-search').value
    getUserProfile(username)
})

function getUserProfile(username) {
    search(username).then(
        userData => {
            console.log(`Nome: ${userData.name}`);
            console.log(`Bio: ${userData.bio}`);
            console.log(userData.avatar_url);

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
