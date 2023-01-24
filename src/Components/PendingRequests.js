export function PendingRequests(){
    return (
        <div>
           <div className="banner rounded-3 col-3 col-sm-2 col-lg-2 col-md-6 p-2 pe-4 bg-white border-4 border-start border-primary shadow d-flex flex-row">
                <div className="d-flex flex-column pt-2 ps-3 text-start text-primary col-12 fs-5">
                    Pending Requests
                    <span className="text-start fs-2 text-dark flex-column d-flex">
                        <span>18</span>
                    </span>
                </div>
                <div className="col-2 text-body-tertiary mt-4"></div>
            </div>
        </div>
    );
}