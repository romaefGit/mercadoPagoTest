import { ListOfProductCardsComponent } from '../components/ListOfProductCards'
import Data from '../assets/dataExample/data.json'

export const ListOfProductCards = () => {
  return ListOfProductCardsComponent(Data.products)
}