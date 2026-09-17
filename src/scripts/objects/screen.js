const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        this.userProfile.innerHTML =
            `
                <div class="info">
                    <img src="${user.avatarUrl}" alt="Foto de perfil do usuário ${user.name}">
                    <div class="data">
                        <h1>${user.name ?? 'N/A'}</h1>
                        <p>${user.bio ?? 'N/A'}</p>
                    </div>
                </div>
            `

        let repositoriesItens = ''
        user.repositories.forEach(repo => {
            repositoriesItens +=
                `<li><a=href="${repo.html_url}" target="_blank">${repo.name}</a></li>`
        });

        this.userProfile.innerHTML +=
            `
                <div class="repositories section">
                    <h2>Repositórios</h2>
                    <ul>${repositoriesItens}</ul>
                </div>
            `

        console.log(repositoriesItens)
    }
}

export { screen }