import React, { useState } from 'react'
import Success from '../components/commonComponents/infoDialog/Success';
import Saved from '../components/commonComponents/infoDialog/Saved';
import Deleted from '../components/commonComponents/infoDialog/Deleted';
import Done from '../components/commonComponents/infoDialog/Done';
import Failed from '../components/commonComponents/infoDialog/Failed';
import Error from '../components/commonComponents/infoDialog/Error';
import AccessDenied1 from '../components/commonComponents/infoDialog/AccessDenied1';
import Created from '../components/commonComponents/infoDialog/Created';
import LoaderDialog from '../components/commonComponents/infoDialog/LoaderDialog';

const Trial = () => {
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    const [open5, setOpen5] = useState(false);
    const [open6, setOpen6] = useState(false);
    const [open7, setOpen7] = useState(false);
    const [open8, setOpen8] = useState(false);
    const [loader, setLoader] = useState(false);

    const handleClose1 = () => {
        setOpen1(false);
    }
    const handleClose2 = () => {
        setOpen2(false);
    }
    const handleClose3 = () => {
        setOpen3(false);
    }
    const handleClose4 = () => {
        setOpen4(false);
    }
    const handleClose5 = () => {
        setOpen5(false);
    }
    const handleClose6 = () => {
        setOpen6(false);
    }
    const handleClose7 = () => {
        setOpen7(false);
    }
    const handleClose8 = () => {
        setOpen8(false);
    }

    return (
        <div style={{ display: 'flex', width: '100%', height: '100vh', justifyContent: 'center', alignItems: 'center', gap: '1rem' }}>
            <Success open={open1} handleClose={handleClose1} msg='Success Msg' />
            <Error open={open2} handleClose={handleClose2} msg='Error Msg' />
            <Saved open={open3} handleClose={handleClose3} msg='Saved Msg' />
            <Deleted open={open4} handleClose={handleClose4} msg='Delete Msg' />
            <Done open={open5} handleClose={handleClose5} msg='Done Msg' />
            <Failed open={open6} handleClose={handleClose6} msg='Failed Msg' />
            <AccessDenied1 open={open7} handleClose={handleClose7} msg='Access Denied Msg' />
            <Created open={open8} handleClose={handleClose8} msg='Created Msg' />

            <button onClick={() => setOpen1(true)}>Success</button>
            <button onClick={() => setOpen2(true)}>Error</button>
            <button onClick={() => setOpen3(true)}>Saved</button>
            <button onClick={() => setOpen4(true)}>Delete</button>
            <button onClick={() => setOpen5(true)}>Done</button>
            <button onClick={() => setOpen6(true)}>Failed</button>
            <button onClick={() => setOpen7(true)}>Access Denied</button>
            <button onClick={() => setOpen8(true)}>Created</button>
            <button onClick={() => setLoader(!loader)}>Loader</button>

            {loader && <LoaderDialog/>}
            <iframe src="https://lottie.host/embed/9dba8e12-cd91-4060-bd90-7764990671d0/e0U0LcjhCB.json" style={{ backgroundColor: 'transparent', border: 'none' }}></iframe>
        </div>
    )
}

export default Trial

