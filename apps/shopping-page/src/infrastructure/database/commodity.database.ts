import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CommodityModel } from 'libs/database/configs/models';

@Injectable()
export class CommodityDatabase {
  constructor(
    @InjectModel(CommodityModel)
    private readonly commodityModel: typeof CommodityModel,
  ) {
    setTimeout(async () => {
      // for (let i = 0; i < 1000; i++) {
      //   this.abc();
      // }
      const a = await this.abc();
      console.log(a);
    }, 2000);
  }

  async abc() {
    await this.commodityModel.create({ id: crypto.randomUUID() });
    return await this.commodityModel.count();
  }

  create(dto: any) {
    return this.commodityModel.create(dto);
  }

  findAll() {
    return this.commodityModel.findAll();
  }

  findOne(id: string) {
    return this.commodityModel.findOne({ where: { id } });
  }

  update(id: string, dto: any) {
    return this.commodityModel.update(dto, { where: { id } });
  }

  remove(id: number) {
    return this.commodityModel.destroy({ where: { id } });
  }
}
