import { Receiving } from "../../entity/Receiving";
import {
  Get,
  Post,
  Body,
  JsonController,
  Authorized,
  QueryParam,
  Param,
  Put,
@Authorized()
export class ReceivingsController {
  constructor(private receivingServices: ReceivingServices) {}

  @Get("/:id")
  public async getReceivingById(@Param("id") id: string): Promise<any> {
    const res = await this.receivingServices.fetchById(id);
    return res || {};
  }

  @Get()
  public async getReceivings(
    @PaginationInfo() paginationInfo: IPaginationQueryParam,
    @QueryParam("q") search?: string
  ): Promise<Receiving[]> {
    const query: IFetchPageQuery = {
      search,
      perPage: paginationInfo.perPage,
      page: paginationInfo.pageNo
    };
    return await this.receivingServices.fetchPages(query);
  }

  @Post()
  public async createNewReceiving(
    @Body() Receiving: Receiving,
    @CurrentUser() userid: string
  ): Promise<any> {
    return await this.receivingServices.create(userid, Receiving);
  }

  @Put("/:id")
  public async updateReceiving(
    @Param("id") id: string,
    @Body() data: Receiving,
    @CurrentUser() userid: string
  ) {
    return await this.receivingServices.updateById(userid, { id }, data);
  }

  @Delete("/:id")
  public async deleteReceiving(@Param("id") id: string): Promise<any> {
    return await this.receivingServices.deleteById(id);
  }
}
