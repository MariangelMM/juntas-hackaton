import React from 'react';
import Header from '../Components/header';
import GeneralInformation from '../Components/general-information';
import Requirements from '../Components/upload-requirements';

const Loan = () => {
    return (
        <div>
            <div>
                <Header />
            </div>

            <div>
                <GeneralInformation />
                <Requirements />
            </div>
        </div>
    )

}
export default Loan;