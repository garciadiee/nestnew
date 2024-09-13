import { Injectable } from '@nestjs/common';

@Injectable()
export class UsuariosService {
    getUsuario(){const usuario = { id:1 };
    return usuario;
    }
}
