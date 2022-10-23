export default class DictionaryModel {
  word: string
  meanings: string
    

  constructor(obj: any) {
    const {
      word,
      meanings,
      
    } = obj

    this.word = word
    this.meanings = meanings
    
  }
}