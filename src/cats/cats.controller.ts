
import { Controller, Get, Post, Res, HttpStatus } from '@nestjs/common';
import express from 'express';

@Controller('cats')
export class CatsController {
  @Post()
  create(@Res() res: express.Response) {
    res.status(HttpStatus.CREATED).send();
  }

  @Get()
  findAll(@Res() res: express.Response) {
     res.status(HttpStatus.OK).json([]);
  }
}
