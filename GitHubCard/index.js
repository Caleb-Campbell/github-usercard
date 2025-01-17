import axios from 'axios'

const followersArray = ['Caleb-Campbell', 'tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
function makeCards(username){
  axios.get(`https://api.github.com/users/${username}`)
  .then(resp => {
    document.querySelector('.cards').appendChild(cardMaker(resp.data));
    
  })
  .catch(err => {console.error(err)})

}

for (let i = 0; i < followersArray.length; i++){
  makeCards(followersArray[i])
}

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/





/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/



/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

*/

function cardMaker(dataObj){

  const cardWrapper = document.createElement('div')
  cardWrapper.classList.add('card')

  // child img
  const userImg = document.createElement('img')
  userImg.src = dataObj.avatar_url

  // another child of cardwrapper  
  const cardInfo = document.createElement('div')
  cardInfo.classList.add('card-info')

  const heading = document.createElement('h3')
  heading.classList.add('name')
  heading.textContent = dataObj.name

  const username = document.createElement('p')
  username.classList.add('username')
  username.textContent = dataObj.login

  const location = document.createElement('p')
  location.textContent = dataObj.location

  const profileLink = document.createElement('p')

  //nested child link in profileLink
  const pageLink = document.createElement('a')
  pageLink.href = dataObj.html_url

  const followers = document.createElement('p')
  followers.textContent = `Followers: ${dataObj.followers}`

  const following = document.createElement('p')
  following.textContent = `Following: ${dataObj.following}`

  const bio = document.createElement('p')
  bio.textContent = dataObj.bio
  bio.style.fontWeight = 'bold'

  cardWrapper.appendChild(userImg)
  cardWrapper.appendChild(cardInfo)
  cardInfo.appendChild(heading)
  cardInfo.appendChild(username)
  cardInfo.appendChild(location)
  cardInfo.appendChild(profileLink)
  profileLink.appendChild(pageLink)
  cardInfo.appendChild(followers)
  cardInfo.appendChild(following)
  cardInfo.appendChild(bio)

  return cardWrapper

}
/*



    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
