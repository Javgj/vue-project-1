import axios from 'axios'
import request from '@/libs/request'

jest.mock(axios)
describe('request library', () => {
  describe('When the API failed', () => {
    it('should catch promise error method is bad', async () => {
      const response = {
        data: null,
        success: false,
        error: 'Request failed with status code 404'
      }

      const URL = '/characters'

      axios.get.mockResolvedValueOnce(response)

      const result = await request(URL, 'post')

      expect(axios.get).toHaveBeenCalledWith(`${axios.defaults.baseURL}${URL}`)
      expect(result).toEqual(response)
    })
  })

  describe('When the API is successfully', () => {

  })
})
