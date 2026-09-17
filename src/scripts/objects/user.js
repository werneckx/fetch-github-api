const user = {
    avatarUrl: '',
    name: '',
    bio: '',
    userName: '',
    repositories: [],
    setInfo(gitGubUser){
        this.avatarUrl = gitGubUser.avatar_url
        this.name = gitGubUser.name
        this.bio = gitGubUser.bio
        this.userName = gitGubUser.login
    },
    setRepositories(gitHubRepositories){
        this.repositories = gitHubRepositories
    }
}

export { user }