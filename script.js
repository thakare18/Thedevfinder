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

let searchbtn = document.querySelector(".search");
let usernameimp = document.querySelector(".usernameimp");
// Use the main card container (id="card") to inject the profile markup.
// Previously we selected the heading (.card1) which has `text-transparent`
// and caused child text to be invisible. Selecting #card avoids that.
let card1 = document.getElementById("card");


function fetchUserProfile(username){
    return fetch(`https://api.github.com/users/${username}`).then((raw) =>{
        if (!raw.ok) throw new Error("User not found"); // jar raw.ok is not true tr error la throw karto ani print honar user not found.
        return raw.json();
    }
    );
}


function fetchUserRepos(username){
     return fetch(`https://api.github.com/users/${username}/repos`).then((raw)=>{
        if (!raw.ok) throw new Error("User not found");
        return raw.json();
     });
    
}


fetchUserRepos("thakare18").then(function (data){
    console.log(data)
});

fetchUserProfile("thakare18").then(function(data){
    console.log(data)
});

function decorateProfileData(details){
    console.log(details);
   let data = `<div class="text-center space-y-6 pb-6 text-white">
        <div class="relative mx-auto">
        <div class="absolute -inset-1 bg-gradient-to-tr from-cyan-500 to-purple-600 rounded-full blur opacity-40"></div>
        <img src="${details.avatar_url}" alt="GitHub Avatar"
          class="relative w-28 h-28 md:w-32 md:h-32 rounded-full border border-white/20 object-cover shadow-[0_0_20px_rgba(0,255,255,0.15)]">
      </div>

      <div>
        <h2 class="text-2xl font-semibold">${details.name ? details.name : details.login}</h2>
        <p class="text-gray-400">${details.login}</p>
      </div>

      <p class="text-gray-300 max-w-md mx-auto leading-relaxed px-2">
       ${details.bio ? details.bio : "This user has no bio yet."}
      </p>

      <div class="flex justify-center flex-wrap gap-6 mt-4">
        <div class="bg-white/10 rounded-xl px-6 py-4 shadow-inner backdrop-blur-md">
          <p class="text-2xl font-semibold text-cyan-400">${details.public_repos}</p>
          <p class="text-sm text-gray-400">Public Repos</p>
        </div>
        <div class="bg-white/10 rounded-xl px-6 py-4 shadow-inner backdrop-blur-md">
          <p class="text-2xl font-semibold text-cyan-400">${details.followers}</p>
          <p class="text-sm text-gray-400">Followers</p>
        </div>
        <div class="bg-white/10 rounded-xl px-6 py-4 shadow-inner backdrop-blur-md">
          <p class="text-2xl font-semibold text-cyan-400">${details.following}</p>
          <p class="text-sm text-gray-400">Following</p>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 px-2">
        <div class="bg-white/10 rounded-xl p-4 shadow-inner backdrop-blur-md">
          <p class="text-gray-400 text-sm">Location</p>
          <p class="text-lg font-semibold text-cyan-300">${details.location ? details.location : "Not specified" }</p>
        </div>
        <div class="bg-white/10 rounded-xl p-4 shadow-inner backdrop-blur-md">
          <p class="text-gray-400 text-sm">Last Seen</p>
          <p class="text-lg font-semibold text-cyan-300">${details.updated_at}</p>
        </div>
      </div>

      <a href="https://github.com/${details.login}" target="_blank"
        class="mt-8 inline-block bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 px-10 py-3 rounded-full font-semibold transition-all duration-300 shadow-[0_0_15px_rgba(0,255,180,0.2)]">
        View GitHub Profile
      </a>
    </div>`
  card1.innerHTML = data;
}




if (searchbtn) {
    searchbtn.addEventListener("click", function(){
        if (!usernameimp) {
            // Input not found - log and inform the user
            console.error('Input element with class "usernameimp" not found');
            alert('Input element not found on the page.');
            return;
        }

        // Use the correct property to read the input value
        let username = (usernameimp.value || '').trim();

        if (username.length > 0) {
            fetchUserProfile(username).then((data)=>{
                decorateProfileData(data)
            })
        } else {
            alert('Please enter a GitHub username');
        }
    });
} else {
    console.error('Button with class "search" not found');
}
