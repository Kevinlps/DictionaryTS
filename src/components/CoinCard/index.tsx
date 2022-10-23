import DictionaryModel from '../../models/DictionaryModel'
import { Card, InfoLink, MeaningsStyle , Wordstyle} from './styles'

type Props = {
  coin: DictionaryModel
}



const CoinCard = ({ coin }: Props) => {

  return (
    <InfoLink to='/info'>
      <Card>
        
        <Wordstyle>{coin.word}</Wordstyle>
        <MeaningsStyle>{coin.meanings}</MeaningsStyle>
      </Card>
    </InfoLink>
  )
}

export default CoinCard
