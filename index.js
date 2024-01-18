$(document).ready(function(){
    const profileAvatar = $('#profile-avatar');
    const profileName = $('#profile-name');
    const profileUsername = $("#profile-username");
    const repository = $('#repositorios');
    const follower = $('#seguidores');
    const following = $('#seguindo');
    const profileLink = $('#profile-link');
    const button = $('#data-button');


    fetch('https://api.github.com/users/kevincamussi')
    .then(function(resposta){
        return resposta.json();
    })
    .then(function(json){
        
        $(profileAvatar).attr('src', json.avatar_url);
        $(profileName).text(json.name);  
        $(profileUsername).text(`@${json.login}`);
        $(repository).text( json.public_repos);
        $(follower).text(json.followers);
        $(following).text(json.following);
        $(profileLink).attr('href', json.html_url);
    })
    .catch(function(erro) {
        console.log('Ocorreu um erro ao tentar acessar o site, tente novamente mais tarde')
    })
    .finally(function(){
        console.log(' Fim da execução do código ')
    })
})
