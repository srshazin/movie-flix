import publicClient from "../client/public.client";

const genreEndpoints = {
  list: ({ mediaType }) => `genre/${mediaType}/list`,
};

const genreApi = {
  getList: async ({ mediaType }) => {
    try {
      const response = await publicClient.get(
        genreEndpoints.list({ mediaType })
      );

      return { response };
    } catch (err) {
      return { err };
    }
  },
};

export default genreApi;
