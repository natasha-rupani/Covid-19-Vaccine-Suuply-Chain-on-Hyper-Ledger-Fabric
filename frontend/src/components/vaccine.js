import React, {useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../services/api';
function Vaccine() {
    const [vaccineArr, setvaccineArr] = useState([]);
    let history = useHistory();
    useEffect(() => {
        try{ 
            api.get('/vaccines/all', { withCredentials: true }).then(res => {
                if (res.status === 200) {
                    setvaccineArr(res.data);
                } else {
                    //history.push('/error');
                    //return function cleanup() { }
                }
            })
            .catch(err => {
                history.push('/error', { 'message': err });
                return function cleanup() { }
            });
        }
        catch(e){
            console.log(e);
            throw e;
        }
    },[]);
   

    return(
        <div className="container-fluid">
            <h2>Vaccines</h2>
            <div className="table-responsive">
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th>Serial No</th>
                            <th>Manufacturer</th>
                            <th>Thermal</th>
                        </tr>
                    </thead>
                    <tbody>
                    {!vaccineArr ? null : vaccineArr.map(vaccine => (
                        <tr key={vaccine._id}>
                            <td>{vaccine.serialNo}</td>
                            <td>{vaccine.manufacturer}</td>
                            <td>{vaccine.thermal} </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
        
    );
}

export default Vaccine;
