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
} from "../../decorators/PaginationInfo";
import { CrudServices, IFetchPageQuery } from "../../services/CrudServices";
import { CurrentUser } from "../../decorators/CurrentUser";

@JsonController("/vendors")
@Authorized()
export class VendorsController {
  private crudServices: CrudServices<Vendor>;

  constructor() {
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
