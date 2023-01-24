import { MenuButton } from './MenuButton';

export function Chart() {
    return (
        <div className='Chart bg-light rounded-2 col-8 col-md-12 col-lg-8 col-sm-12 border-primary bg-white shadow'>
            <div className='d-flex flex-row bg-light justify-content-between rounded-2 gap-2 p-3 pt-3 pb-3 align-items-center'>
                <header className='text-primary fs-4'>Earnings OverView</header>
                <MenuButton />
            </div>
        </div>
    );
}