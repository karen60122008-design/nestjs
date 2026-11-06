import { Controller, Get } from '@nestjs/common';
 
@Controller('inicio')
export class AppController {
  @Get('bienvenida')
  obtenerBienvenida() {
    return {
      mensaje: '¡Bienvenido a la API de gestión!',
      sistema: 'Gestion API',
      version: '1.0.0'
    };
  }
}