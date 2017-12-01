import axios from 'axios';

export function startGame () {
    return axios.get('http://localhost:3000/rooms/1/start_game', {headers: {}})
        .then((response) => {
            if (response.status === 200) {
                return Promise.resolve(response.data);
            }
        });
}

export function stopGame () {
    return axios.get('http://localhost:3000/rooms/stop_server', {headers: {}})
        .then((response) => {
            if (response.status === 200) {
                return Promise.resolve(response.data);
            }
        });
}

export function createRoom (game) {
    return axios.post('http://localhost:3000/rooms/', { room: {
        title: 'Room',
        image: game.image,
        gameServer: game.serverUrl,
        maxPlayers: game.maxPlayers,
        currentPlayers: 1}},
    { headers: {}})
        .then((response) => {
            if (response.status === 200) {
                return Promise.resolve(response.data);
            }
        });
}

export function getGame (gameId) {
    return axios.get('http://localhost:3000/mini_games/' + gameId, {headers: {}})
        .then((response) => {
            if (response.status === 200) {
                return Promise.resolve(response.data);
            }
        });
}

export function getGames () {
    return axios.get('http://localhost:3000/mini_games', {headers: {}})
        .then((response) => {
            if (response.status === 200) {
                return Promise.resolve(response.data);
            }
        });
}

export function getRooms () {
    return axios.get('http://localhost:3000/rooms', {headers: {}})
        .then((response) => {
            if (response.status === 200) {
                return Promise.resolve(response.data);
            }
        });
}
