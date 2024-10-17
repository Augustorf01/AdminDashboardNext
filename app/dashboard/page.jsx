import style from '../ui/dashboard/dashboard.module.css'
import Card from "../ui/dashboard/card/card"
import Rightbar from '../ui/dashboard/rightbar/rightbar'
import Transactions from '../ui/dashboard/transactions/transactions'
import Chart from '../ui/dashboard/chart/chart'

const DashboardPage = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.main}>
                <div className={style.cards}>
                    <Card />
                    <Card />
                    <Card />
                </div>
                <Transactions />
                <Chart />
            </div>
            <div className={style.side}>
                <Rightbar />
            </div>
        </div>
    )
}

export default DashboardPage