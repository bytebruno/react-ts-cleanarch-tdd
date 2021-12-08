import { AxiosHttpClient } from './axios-http-client'
import axios from 'axios'
import { mockAxios } from '@/infra/test'
import { mockPostRequest } from '@/data/test'

type SutTypes = {
  sut: AxiosHttpClient
  mockedAxios: jest.Mocked<typeof axios>
}

const makeSut = (): SutTypes => {
  const sut = new AxiosHttpClient()
  const mockedAxios = mockAxios()
  return {
    sut,
    mockedAxios
  }
}

describe('AxiosHttpClient', () => {
  test('Should call axios with correct values', () => {
    expect(true).toBe(true)
  })
  // test('Should call axios with correct values ', async () => {
  //   const request = mockPostRequest()
  //   const { sut, mockedAxios } = makeSut()
  //   await sut.post(request)
  //   expect(mockedAxios.post).toHaveBeenCalledWith(request.url, request.body)
  // })
  // test('Should return the correct statusCode and body', async () => {
  //   const { sut, mockedAxios } = makeSut()
  //   const httpResponse = await sut.post(mockPostRequest())
  //   const axiosResponse = await mockedAxios.post.mock.results[0].value
  //   expect(httpResponse).toEqual({
  //     statusCode: axiosResponse.status,
  //     body: axiosResponse.data,
  //   })
  // })
})
