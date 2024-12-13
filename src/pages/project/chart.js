import CardLineChart from '../components/SalesChart';
import LayoutsPage from '../layouts';

const ChartPage = () => {
   return (
    <LayoutsPage>
        <div  className='container mx-auto'>
            <CardLineChart/>
        </div>
    </LayoutsPage>
   )
}

export default ChartPage;