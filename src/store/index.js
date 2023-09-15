import { defineStore } from 'pinia'
import useApiResponse from "@/use/ApiResponse";

let isFetchingData = false
export const useImageStore = defineStore('imageStore', {
  state: () => ({
    images: [],
    favoritesPictures: JSON.parse(localStorage.getItem('favorites-images')) || [],
    isLoading: false,
  }),
  getters: {},
  actions: {
    async getImageToId(idImage) {
      const res = await useApiResponse({
        method: 'GET',
        url: `/photos/${idImage}`,
      })

      this.images = [res]
    },

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
      if (!isFetchingData) {
        isFetchingData = true
        this.isLoading = true
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

        this.isLoading = false
        setTimeout(() => {
          isFetchingData = false;
        }, 1000);
      }
    },

    addPictureToFavorites(image) {
      const findIndex = this.favoritesPictures.findIndex(img => img.id === image.id)

      if (findIndex === -1) {
        this.favoritesPictures.push(image)
      } else {
        this.favoritesPictures.splice(findIndex, 1)
      }

      localStorage.setItem('favorites-images', JSON.stringify([...this.favoritesPictures]))
    }
  },
})
