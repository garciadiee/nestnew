import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { Response } from 'express';

@Controller('usuarios')
export class UsuariosController {
        constructor(private readonly usuarioService: UsuariosService){}

      @Get()
      getUsuario(@Res() res:Response) {
        const usuario = this.usuarioService.getUsuario();
        res.status(HttpStatus.OK).json({ok: true, usuario, msg: 'Approved'})
      }
}


