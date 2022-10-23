import { useEffect, useState } from 'react'
import CoinCard from '../../components/CoinCard'
import DictionaryModel from '../../models/DictionaryModel'
import DictionaryService from '../../services/DictionaryService'
import { Container, FilterInput } from './styles'



const Home = () => {
  const [dictionaryModel, setdictionaryModel] = useState<DictionaryModel[]>([])
  const [filter, setFilter] = useState('')
  const [dictionaryLoaded, setdictionaryLoaded] = useState(false)
  const [dictionaryService] = useState(new DictionaryService())
  
  const loadWords = async () => {
    setdictionaryLoaded(false)
    const loadedDictionary = await dictionaryService.loadDictionary()
    setdictionaryModel(loadedDictionary)
    setdictionaryLoaded(true)
  }

  useEffect(() => {
    loadWords()
  }, [])

  return (
    <Container>
      {(
        <>
          <FilterInput
            placeholder='Digite a palavra que deseja buscar'
            value={filter}
            
            
            onChange={(e) => setFilter(e.target.value)}
            
          />
          {
      
           dictionaryModel.map((c) => <CoinCard coin={c} key={c.word} />)}
        </>
        
      )}
    
   {!dictionaryLoaded }
    </Container>
  )
}

export default Home
