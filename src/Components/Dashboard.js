import { ProgressStatus } from './ProgressStatus';
import { PendingRequests } from './PendingRequests';
import { EarningsMonthly } from './EarningsMonthly';
import { EarningsAnnual } from './EarningsAnnual';
import { Chart } from './Chart';
import { PieChart } from './PieChart';

export function Dashboard() {
    return (
        <div className="row mx-auto bg-light">
            <div className="fs-2 text-start ps-4 pt-4">
                DASHBOARD
            </div>
            <div className="d-flex flex-row gap-3 justify-content-start p-4 flex-wrap">
                <EarningsMonthly />
                <EarningsAnnual />
                <ProgressStatus />
                <PendingRequests />
            </div>
            <div className="d-flex flex-row gap-3 justify-content-center p-4 flex-wrap">
                <Chart />
                <PieChart />
            </div>
        </div>
    );
}