import { useRecoilValue } from 'recoil';
import { HousingFundDataType } from '../model';
import { housingFundTableData } from '../state/housingfund.atom';
import HousingForm from '../FormsModal/HousingForm';
import TablesForm from './TablesForm';

const HousingFund = () => {
  const data = useRecoilValue<HousingFundDataType[]>(housingFundTableData)
  return (
    <TablesForm label='Housing Form Table' data={data} render={({ opened, close }) => (<HousingForm opened={opened} close={close} />)} />
  )
}

export default HousingFund