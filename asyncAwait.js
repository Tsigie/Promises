fetch('https://swapi.co/api/starships/9/')
  .then(response => response.json())
  .then(console.log)

async function fetchStarship() {
  const response = await fetch('https://swapi.co/api/starships/9/')
  const data = await response.json();
  console.log(data);
}

const getData = async function() {
  const [ users, posts, albums ] = await
  Promise.all(urls.map(url =>
    fetch(url).then(resp => resp.json())
  ));
  console.log('users', usres);
  console.log('posts', posts);
  console.log('albums', albums);
}

const getData = async function() {
  const [ users, posts, albums ] = await
  Promise.all(urls.map(async function(url) {
    const response = await fetch(url);
    return response.json();
  }));
  console.log('users', users);
  console.log('posts', posts);
  console.log('albums', albums);
}

const getData = async function() {
  try{
    const [ users, posts, albums ] = await
    Promise.all(urls.map(async function(url) {
      const response = await fetch(url);
      return response.json();
    }));
    console.log('users', users);
    console.log('posts', posts);
    console.log('albums', albums);
  } catch (err) {
    console.log('oops', err);
  }
}
