import { Vendor } from "../../entity/Vendor";
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
} from "routing-controllers";
import {
  PaginationInfo,
  IPaginationQueryParam
    const res = await this.crudServices.fetchById(id);
    return res || {};
  }

  @Get()
  public async getVendors(
    @PaginationInfo() paginationInfo: IPaginationQueryParam,
    @QueryParam("q") search?: string
  ): Promise<Vendor[]> {
    const query: IFetchPageQuery = {
      search,
      perPage: paginationInfo.perPage,
      page: paginationInfo.pageNo
    };
    return await this.crudServices.fetchPages(query);
  }

  @Post()
  public async createNewVendor(
    @Body() Vendor: Vendor,
    @CurrentUser() userid: string
  ): Promise<any> {
    return await this.crudServices.create(userid, Vendor);
  }

  @Put("/:id")
  public async updateVendor(
    @Param("id") id: string,
    @Body() data: Vendor,
    @CurrentUser() userid: string
  ) {
    return await this.crudServices.updateById(userid, { id }, data);
  }

  @Delete("/:id")
  public async deleteVendor(@Param("id") id: string): Promise<any> {
    return await this.crudServices.deleteById(id);
  }
}
