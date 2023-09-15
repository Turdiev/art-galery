import { defineStore } from 'pinia'
import useApiResponse from "@/use/ApiResponse";

export const useImageStore = defineStore('imageStore', {
  state: () => ({
    images: [],
    foundPictures: []
  }),
  getters: {},
  actions: {
    async getRandomImages() {
      this.images = await useApiResponse({
        method: 'GET',
        url: '/photos'
      })
    },

    async searchImages(searchQuery) {
      const res = await useApiResponse({
        method: 'GET',
        url: '/search/photos',
        params: {
          query: searchQuery
        }
      })

      this.images = res.results
    },

    async searchImageWhenScrolling(searchQuery = '', pageId) {
      let url = '/photos'
      const params = {
        page: pageId,
      }

      if (searchQuery !== '') {
        params.query = searchQuery
        url = '/search/photos'
      }

      const res = await useApiResponse({
        method: 'GET',
        url,
        params
      })

      const images = res.results ? res.results : res
      this.images = [...this.images, ...images]
    }
  },
})
