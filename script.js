// Day 68 Async Mastery Project


//Task 1 : Fetching User Profile  data from github
// function fetchUserProfile(username){
//     return fetch(`https://api.github.com/users/${username}`).then((raw) => raw.json()
//     );
// }


// fetchUserProfile("thakare18").then(function(data) {
//     console.log(data);
// });

//task 2 :: geting user repos from github using github username

function fetchUserRepos(username){
    return fetch(`https://api.github.com/users/${username}/repos`).then((raw)=> raw.json()
    );
}

fetchUserRepos("thakare18").then(function(data){
    console.log(data)
});
