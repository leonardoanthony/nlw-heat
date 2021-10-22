

// camelCase
// PascalCase
// snake_case


const linksSocialMedia = {
    github: "leonardoanthony",
    youtube: "channel/UC-4kq1_R2iSsbg41h7EfjcQ",
    facebook: "leo.guimaraes.1671897",
    twitter: "maykbrito",
    instagram: "leonardoanthony.dev",
}

function changeSocialMediaLinks() {

    for (let li of socialLinks.children) {
        const social = li.getAttribute('class');
        li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`;
    }


}

changeSocialMediaLinks();

function getGithubUserData(){

    const url = `https://api.github.com/users/${linksSocialMedia.github}`;

    fetch(url)
     .then((response) => response.json())
     .then((data) => {
         userName.textContent = data.name;
         userBio.textContent = data.bio;
         userLink.href = data.html_url;
         userImage.src = data.avatar_url;
         userLogin.textContent = data.login;
     });


}

getGithubUserData();