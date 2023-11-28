import React from 'react'
import styled from 'styled-components'
import ReportDepartmentText from '../commonComponents/ReportDepartmentText'
import ReportMetricCard from '../commonComponents/ReportMetricCard'


const Report = () => {
    return (
        <Box>
            <div className='box1'>
                <div className='left'>
                    <ReportMetricCard metricText='Total Applicants' metricNumber='100' />
                    <ReportMetricCard metricText='Shortlisted Candidates' metricNumber='35' />
                    <ReportMetricCard metricText='Hired Candidates' metricNumber='8' />
                    <ReportMetricCard metricText='Rejected Candidates' metricNumber='65' />
                    <ReportMetricCard metricText='Cost per Hire' metricNumber='$17K' />
                    <ReportMetricCard metricText='Time to Hire (Days)' metricNumber='15' />
                    <ReportMetricCard metricText='Time to Fill (Days)' metricNumber='26' />
                </div>
                <div className='middle'>
                    <div className='child1'>
                        <span className='title'>Open Positions by Department</span>

                        <div className='innerBox'>
                            <div className='innerBox1'>
                                <ReportDepartmentText text='Marketing' color='#fec007' />
                                <ReportDepartmentText text='Accounts' color='#eb3792' />
                                <ReportDepartmentText text='Analytics' color='#ef6102' />
                                <ReportDepartmentText text='IT' color='#6300ef' />
                                <ReportDepartmentText text='Operations' color='#4384f4' />
                                <ReportDepartmentText text='HR' color='#d482e2' />
                            </div>
                            <div className='innerBox2'>

                            </div>
                        </div>

                        <div className='innerBoxBottom'>

                        </div>
                    </div>
                    <div className='child1'>
                        <span className='title'>Applications Received by Source</span>
                    </div>
                </div>
                <div className='right'>
                    <div className='child1'>
                        <span className='title'>Gender Ratio</span>
                        <div className='innerBox'>
                            <div className='innerBox1'>
                                <ReportDepartmentText text='Male' color='#4384f4' />
                                <ReportDepartmentText text='Female' color='#6300ef' />
                            </div>


                        </div>
                    </div>
                    <div className='child2'>
                        <div className='innerChild1'>
                            <span className='title'>72.73%</span>
                            <span className='text'>Offer Acceptance Ratio</span>
                        </div>
                        <div className='innerChild2'>
                            <span className='left'>
                                <span className='number'>8</span>
                                <span className='text'>Offers Accepted</span>
                            </span>

                            <span className='right'>
                                <span className='number'>11</span>
                                <span className='text'>Offers Provided</span>
                            </span>
                        </div>
                    </div>
                    <div className='child3'>
                        <span className='title'>Candidate Withdrawal Rate</span>

                    </div>
                </div>
            </div>
        </Box>
    )
}

export default Report

const Box = styled.div`
width: 96%;
margin: 1rem auto;
display: flex;
flex-direction: column;
box-sizing: border box;

.box1 {
    width: 98%;
    display: flex;
    gap: 2%;
}

.left {
    width: 22%;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

}

.middle {
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .child1 {
        width: 100%;
        background-color: var(--white);
        display: flex;
        flex-direction: column;
        align-items: start;
        padding: 1.5rem 1rem;
        gap: 2rem;
        border-radius: 0.5rem;
        box-shadow: 0.1rem 0.1rem 0.2rem 0.1rem rgba(0, 0, 0, 0.1);
        box-sizing: border-box;
        
        .title {
            font-size: 1rem;
            font-weight: 600;
        }

        .innerBox {
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            align-items: center;

            .innerBox1 {
                display: flex;
                gap: 0.75rem;


            }

            .innerBox2 {

            }
        }
    }
    .child2 {
        width: 100%;
        background-color: var(--white);
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1.5rem 0;
        gap: 0.5rem;
        border-radius: 0.5rem;
        box-shadow: 0.1rem 0.1rem 0.2rem 0.1rem rgba(0, 0, 0, 0.1);
    }
}

.right {
    width: 28%;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .child1 {
        width: 100%;
        background-color: var(--white);
        display: flex;
        flex-direction: column;
        align-items: start;
        padding: 1.5rem 1rem;
        gap: 2rem;
        border-radius: 0.5rem;
        box-shadow: 0.1rem 0.1rem 0.2rem 0.1rem rgba(0, 0, 0, 0.1);


        .title {
            font-size: 1rem;
            font-weight: 600;
        }

        .innerBox {
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            align-items: center;

            .innerBox1 {
                display: flex;
                gap: 0.75rem;
            }
            
        }
    }

    .child2 {
        width: 100%;
        background-color: var(--white);
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1.5rem 1rem;
        gap: 2rem;
        border-radius: 0.5rem;
        box-shadow: 0.1rem 0.1rem 0.2rem 0.1rem rgba(0, 0, 0, 0.1);

        .innerChild1 {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            align-items: center;

            .title {
                font-size: 1.5rem;
                font-weight: 600;
            }

            .text {
                font-size: 1rem;
                font-weight: 500;
            }
        }

        .innerChild2 {
            width: 100%;
            display: flex;
            gap: 1rem;
            justify-content: space-between;
            align-items: start;

            .number {
                font-size: 1.5rem;
                font-weight: 600;
            }

            .text {
                font-size: 1rem;
                font-weight: 500;
            }

            .left {
                width: 50%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-between;
            }

            .right {
                width: 50%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-between;
            }
        }


        
    }

    
    .child3 {
        width: 100%;
        background-color: var(--white);
        display: flex;
        flex-direction: column;
        align-items: start;
        padding: 1.5rem 1rem;
        gap: 2rem;
        border-radius: 0.5rem;
        box-shadow: 0.1rem 0.1rem 0.2rem 0.1rem rgba(0, 0, 0, 0.1);

        .title {
            font-size: 1rem;
            font-weight: 600;
        }

    }
}

`