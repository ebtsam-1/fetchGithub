let input = document.getElementById("input");
let btn = document.querySelector(".get-button"); 
let reposData = document.querySelector(".show-data");



btn.onclick = function (){
    getRepos();
}

async function getRepos(){
    if(input.value == "")
    {
        reposData.innerHTML = `<span>Please inter a username!</span>`
    }else {
        fetch(`https://api.github.com/users/${input.value}/repos`)

        .then((response) => {
          return  response.json()
        
        })

        .then((repos) => {
          reposData.innerHTML = " ";
        console.log(repos);

        repos.forEach(ele => {
           let repoDiv = document.createElement('div');
           let innerext = document.createElement('div');
           let repoDivTesxt = document.createTextNode(ele.name);
           repoDiv.className = 'repoDiv';
           innerext.className = 'repoDivChild';
           innerext.appendChild(repoDivTesxt);
           repoDiv.appendChild(innerext);
           let visitUlr = document.createElement('a');
           visitUlr.innerText = 'Visit';
           visitUlr.href = `https:/github.com/${input.value}/${ele.name}`
           visitUlr.setAttribute('target','_blank')
           repoDiv.appendChild(visitUlr);
           reposData.appendChild(repoDiv);
        });
        })
        .catch((error) => {
            reposData.innerHTML = `<span>Please enter valid Username</span>`
          });
        
        // reposData.innerHTML = " ";
        // let repo = await fetch(`https://api.github.com/users/${input.value}/repos`)

        // let repoArray = await repo.json();

        // repoArray.forEach(ele => {
        //    let repoDiv = document.createElement('div');
        //    let innerext = document.createElement('div');
        //    let repoDivTesxt = document.createTextNode(ele.name);
        //    repoDiv.className = 'repoDiv';
        //    innerext.className = 'repoDivChild';
        //    innerext.appendChild(repoDivTesxt);
        //    repoDiv.appendChild(innerext);
        //    let visitUlr = document.createElement('a');
        //    visitUlr.innerText = 'Visit';
        //    visitUlr.href = `https:/github.com/${input.value}/${ele.name}`
        //    visitUlr.setAttribute('target','_blank')
        //    repoDiv.appendChild(visitUlr);
        //    reposData.appendChild(repoDiv);
        
        // })

    
    }
}
