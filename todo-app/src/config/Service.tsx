
import axios from 'axios';
import { stateType } from '../redux/reducer';
export function addTodo (data:stateType) {
    return axios.post(`${URL}addtodo`,data)
}