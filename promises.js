const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("SUCCESS"); 
  }, 4000)
});

pormise.then(console.log)
promise.then(resp => console.log(resp))

const promise = Promise.resolve(
  setTimeout(() => {
    console.log("SUCCESS");
  }, 4000)
);

Promise.reject('failed')
  .catch(console.log('Ooops something went wrong'))

const Urls = [
  'https://swapi.co/api/people/1',
  'https://swapi.co/api/people/2',
  'https://swapi.co/api/people/3',
  'https://swapi.co/api/people/4'
]
Promise.all(urls.map(url =>
  fetch(url).then(people => people.json())
))
  .then(array => {
    console.log('1', array[0])
    console.log('2', array[1])
    console.log('3', array[2])
    console.log('4', array[3])
  })
  .catch(err => console.log('eughhh fix it', err));