import axios, {  AxiosInstance, AxiosRequestConfig } from 'axios'
import DictionaryModel from '../models/DictionaryModel'
import Axios from "axios";
//import word from '../pages/Home'



export default class DictionaryService {
  private _http: AxiosInstance
  private _endpoint: string
  private _dictionary: DictionaryModel[]
  //private _word : string
  constructor() {
    const urlApi = import.meta.env.VITE_API_URL
    this._http = axios.create({
      baseURL: urlApi,
    })

    this._endpoint = import.meta.env.VITE_DICTIONARY_ENDPOINT
    this._dictionary = []
    
  }

  async loadDictionary() {
    const response = await this._http(this._endpoint , 
  
      )

    if (response.status == 200) {
      const { data } = response
      this._dictionary = data.map((obj: any) => new DictionaryModel(obj))
    }

    return this._dictionary
  }


}
