import { ProductType } from '../../entity/ProductType';
import {
  Get,
  Post,
  Body,
  JsonController,
  Authorized,
  QueryParam,
  Param,
  Put,
  Delete
} from 'routing-controllers';
import { CrudServices, IFetchPageQuery } from '../../services/CrudServices';
import { CurrentUser } from '../../decorators/CurrentUser';

import {
  PaginationInfo,
  IPaginationQueryParam
} from '../../decorators/PaginationInfo';

  @Get()
  public async getProductTypes(
    @PaginationInfo() paginationInfo: IPaginationQueryParam,
    @QueryParam('q') search?: string
  ): Promise<ProductType[]> {
    const query: IFetchPageQuery = {
      search,
      perPage: paginationInfo.perPage,
      page: paginationInfo.pageNo
    };
    return await this.crudServices.fetchPages(query);
  }

  @Post()
  public async createNewProductType(
    @Body() productType: ProductType,
    @CurrentUser() userid: string
  ): Promise<any> {
    return await this.crudServices.create(userid, productType);
  }

  @Put('/:id')
  public async updateProductType(
    @Param('id') id: string,
    @Body() data: ProductType,
    @CurrentUser() userid: string
  ) {
    return await this.crudServices.updateById(userid, { id }, data);
  }

  @Delete('/:id')
  public async deleteProductType(@Param('id') id: string): Promise<any> {
    return await this.crudServices.deleteById(id);
  }
}
