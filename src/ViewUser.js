import { useParams } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export function ViewUser({ final }) {
    const { id } = useParams();
    const user = final[id];
    const flag = useNavigate();
    let url = "https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_1280.png";
    return (
        <div className="container p-3">
            <span className="fs-1">User Details</span>
            <div className="d-flex flex-row justify-content-center m-3">
                <div className="bg-light rounded-4 idcard text-dark d-flex flex-column align-items-center p-3 shadow">
                    <div className="d-flex flex-row align-items-center">
                        <div className='img-thumbnail rounded-circle'>
                            <img src={url} alt={"Profilepic"} width={"200rem"} height={"200rem"} />
                        </div>
                        <div className="d-flex flex-column align-items-start ps-3 fs-5">
                            <div><label className="form-label">Name : </label>
                                <span className="ps-3">{user.name}</span></div>
                            <div><label className="form-label">ID no : </label>
                                <span className="ps-3">{user.id}</span></div>
                            <div><label className="form-label">Email : </label>
                                <span className="ps-3">{user.email}</span></div>
                        </div>
                    </div>
                    <div>
                        <Link to="/students">
                            <Button variant="contained" startIcon={<ArrowBackIcon />} onClick={()=> flag("/students")}>
                                Back
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <hr />
        </div>
    );
}