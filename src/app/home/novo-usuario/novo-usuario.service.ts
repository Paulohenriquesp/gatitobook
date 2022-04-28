import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { NovoUsuario } from './novo-usuario';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class NovoUsuarioService {

  constructor( 
    private http: HttpClient,
  ) { }

  cadastraNovoUsuario(NovoUsuario: NovoUsuario){
    return this.http.post(`${API}user/signup`, NovoUsuario);
  }

  verificarUsuarioExistente(nomeUsuario: string) {
    return this.http.get(`${API}/user/exists/${nomeUsuario}`)
  }
}
  