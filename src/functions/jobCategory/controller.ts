import { FormattedQueryParameters } from "@libs/api-gateway";
import { models } from "src/db";
import { SWJobCategoryListResponse } from "src/models/jobCategory";

export const listAsync = async (
  query: FormattedQueryParameters
): Promise<SWJobCategoryListResponse> => {
  const { JobCategoryModel } = await models();
  const { count, rows } = await JobCategoryModel.findAndCountAll(query);

  return {
    data: rows,
    pagination: {
      page: query.offset / query.limit || 1,
      total: count,
      size: query.limit,
    },
  };
};
