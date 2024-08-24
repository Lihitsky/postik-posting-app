import { api } from "./api"

export const followApi = api.injectEndpoints({
  endpoints: builder => ({
    followUser: builder.mutation<void, { followingId: string }>({
      query: followData => ({
        url: "/follow",
        method: "POST",
        body: followData,
      }),
    }),
    unFollowUser: builder.mutation<void, { followingId: string }>({
      query: () => ({
        url: `/follow`,
        method: "DELETE",
      }),
    }),
  }),
})

export const { useFollowUserMutation, useUnFollowUserMutation } = followApi

export const {
  endpoints: { followUser, unFollowUser },
} = followApi
