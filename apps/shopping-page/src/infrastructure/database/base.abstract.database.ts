import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Model } from 'sequelize-typescript';

@Injectable()
export abstract class BaseAbstractDatabase<T extends Model> {
  constructor(
    @InjectModel(Model<T>)
    private readonly model: typeof Model<T>,
  ) {}

  create(dto: any) {
    return this.model.create(dto);
  }

  findAll() {
    return this.model.findAll();
  }

  findOne(id: string) {
    return this.model.findOne({ where: { id } });
  }

  update(id: string, dto: any) {
    return this.model.update(dto, { where: { id } });
  }

  remove(id: number) {
    return this.model.destroy({ where: { id } });
  }
}