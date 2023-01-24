import CardGiftcardRoundedIcon from '@mui/icons-material/CardGiftcardRounded';

export function EarningsMonthly() {
    return (
        <div className="banner rounded-3 col-3 col-sm-2 col-md-6 col-lg-2 p-2 pe-4 bg-white border-4 border-start border-primary shadow d-flex flex-row">
            <div className="d-flex flex-column pt-2 ps-3 text-start text-primary col-10 fs-5">
                Earnings (Monthly)
                <span className="text-start fs-2 text-dark">
                    $40,000
                </span>
            </div>
            <div className="col-2 text-body-tertiary mt-4">
                <CardGiftcardRoundedIcon fontSize="large" sx={{ fontSize: 45 }} />
            </div>
        </div>
    )
}