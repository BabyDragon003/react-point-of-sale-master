import { createParamDecorator } from "routing-controllers";

export interface IPaginationQueryParam {
  perPage: number;
  pageNo: number;
      const pageNo = action.request.query["page"] || 1;

      const info: IPaginationQueryParam = {
        perPage,
        pageNo
      };

      return info;
    }
  });
}
