import { Controller, Get } from '@nestjs/common';

@Controller('api')
export class AppController {
  @Get('load-test')
  loadTest(): string {
    // Simulando una pequeña operación matemática
    const result = Array(1000)
      .fill(0)
      .map((_, i) => i * Math.random())
      .reduce((acc, val) => acc + val, 0);

    return `Respuesta de la prueba de carga. Suma calculada: ${result}`;
  }
}
