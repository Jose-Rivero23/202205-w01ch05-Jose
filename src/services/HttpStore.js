export class HttpStoreClass {
  url;
  constructor() {
    this.url = `https://pokeapi.co/api/v2/pokemon`;
  }

  getPokemon(id) {
    return fetch(this.url + `/${id}`).then((resp) => {
      return resp.json();
    });
  }
  // getPokemons() {
  //   return fetch(this.url).then((resp) => {
  //     console.log(resp.status);
  //     return resp.json();
  //   });
  //   //get All
  // }
  // setPokemon(task) {
  //   //post
  //   return fetch(this.url, {
  //     method: 'post',
  //     body: JSON.stringify(task),
  //     headers: { 'Content-Type': 'application/json' },
  //   }).then((response) => response.json());
  // }
  // updatePokemon(task) {
  //   //path
  //   return fetch(this.url + `/${task.id}`, {
  //     method: 'patch',
  //     body: JSON.stringify(task),
  //     headers: { 'Content-Type': 'application/json' },
  //   }).then((response) => response.json());
  // }
  // deletePokemon(id) {
  //   //delete
  //   return fetch(this.url + `/${id}`, {
  //     method: 'delete',
  //   }).then((response) => response.json());
  // }
}
