import axios from 'axios';
const api = axios.create({
  baseURL: 'http://10.182.131.159:3000',
  Headers: {
    "Content-type": "Application/json"
  }
})

export function salvarTime(time) {
  api.post('/times', time)
    .then(() => {
      alert("salvando...");
    })
    .then((err) => {
      alert('Erro, ' + err.message)
    })
}
