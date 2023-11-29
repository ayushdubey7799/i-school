import React from 'react'
import styled from 'styled-components'
import ReportDepartmentText from '../commonComponents/ReportDepartmentText'
import ReportMetricCard from '../commonComponents/ReportMetricCard'
import Chart from "react-google-charts";


export const declineData = [
    ["role", "ratio"],
    ["Candidate Decline", 48],
    ["Client Decline", 52],
];

export const declineOptions = {
    pieHole: 0.3,
    is3D: false,
    backgroundColor: "transparent",
    legend: {
        position: "none", // Set the legend position to 'none' to remove the legend
    },
    colors: ["#ef6102", "#fec007"],
    chartArea: {
        left: 0,
        right: 0,
        top: 2,
        bottom: 2,
        width: "100%",
        height: "100%",
    },
    pieSliceTextStyle: {
        color: "white", // Text color inside the pie slices
    },
    pieSliceBorderColor: "transparent",
    sliceVisibilityThreshold: 0,
    shadow: "none",
};

export const sentimentData = [
    ["sentiment", "ratio"],
    ["Positive", 36],
    ["Negative", 32],
    ["Neutral", 32],
];

export const sentimentOptions = {
    pieHole: 0.3,
    is3D: false,
    backgroundColor: "transparent",
    legend: {
        position: "none", // Set the legend position to 'none' to remove the legend
    },
    colors: ["#ef6102", "#4384f4", "eb3792"],
    chartArea: {
        left: 0,
        right: 0,
        top: 2,
        bottom: 2,
        width: "100%",
        height: "100%",
    },
    pieSliceTextStyle: {
        color: "white", // Text color inside the pie slices
    },
    pieSliceBorderColor: "transparent",
    sliceVisibilityThreshold: 0,
    shadow: "none",
};

export const genderData = [
    ["gender", "ratio"],
    ["Male", 60],
    ["Female", 40],
];

export const genderOptions = {
    pieHole: 0.3,
    is3D: false,
    backgroundColor: "transparent",
    legend: {
        position: "none", // Set the legend position to 'none' to remove the legend
    },
    colors: ["#4384f4", "#6300ef",],
    chartArea: {
        left: 0,
        right: 0,
        top: 2,
        bottom: 2,
        width: "100%",
        height: "100%",
    },
    pieSliceTextStyle: {
        color: "white", // Text color inside the pie slices
    },
    pieSliceBorderColor: "transparent",
    sliceVisibilityThreshold: 0,
    shadow: "none",
};

export const openPosData = [
    ["openPositions", "ratio"],
    ["Marketing", 26],
    ["Accounts", 22],
    ["Analytics", 22],
    ["IT", 16],
    ["Operations", 8],
    ["HR", 6],
];


export const openPosOptions = {
    pieHole: 0.3,
    is3D: false,
    backgroundColor: "transparent",
    legend: {
        position: "none", // Set the legend position to 'none' to remove the legend
    },
    colors: ["#fec007", "#eb3792", "#ef6102", "#6300ef", "#4384f4", "#d482e2",],
    chartArea: {
        left: 0,
        right: 0,
        top: 2,
        bottom: 2,
        width: "100%",
        height: "100%",
    },
    pieSliceTextStyle: {
        color: "white", // Text color inside the pie slices
    },
    pieSliceBorderColor: "transparent",
    sliceVisibilityThreshold: 0,
    shadow: "none",
};


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
                    <div className='mainCard child1'>
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
                                <Chart
                                    chartType="PieChart"
                                    width="30vw"
                                    height="30vw"
                                    data={openPosData}
                                    options={openPosOptions}
                                    className="donut-chart"
                                />
                            </div>
                        </div>

                        <div className='innerBoxBottom'>

                        </div>
                    </div>
                    <div className='mainCard child1'>
                        <span className='title'>Applications Received by Source</span>
                    </div>
                </div>
                <div className='right'>
                    <div className='mainCard child1'>
                        <span className='title'>Gender Ratio</span>
                        <div className='innerBox'>
                            <div className='innerBox1'>
                                <ReportDepartmentText text='Male' color='#4384f4' />
                                <ReportDepartmentText text='Female' color='#6300ef' />
                            </div>
                            <div className='innerBox2'>
                                <Chart
                                    chartType="PieChart"
                                    width="15vw"
                                    height="15vw"
                                    data={genderData}
                                    options={genderOptions}
                                    className="donut-chart"
                                />
                            </div>

                        </div>
                    </div>
                    <div className='mainCard child2'>
                        <div className='innerChild1' style={{alignSelf: 'center'}}>
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
                    <div className='mainCard child3'>
                        <span className='title'>Candidate Withdrawal Rate</span>

                    </div>
                </div>
            </div>

            <div className='box2'>
                <div className='mainCard left'>
                    <span className='title'>Recruitment Funnel</span>
                    <div className='innerBox'>
                        <div className='innerBox1'>
                            <ReportDepartmentText text='Hired' color='#43a047' />
                            <ReportDepartmentText text='Offer Initiated' color='#6300ef' />
                            <ReportDepartmentText text='Interviewed' color='#fcba87' />
                            <ReportDepartmentText text='Qualified' color='#c0cb32' />
                            <ReportDepartmentText text='Shortlisted' color='#4384f4' />
                            <ReportDepartmentText text='Applications Received' color='#d81b60' />
                        </div>
                        <div className='innerBox2'>

                        </div>
                    </div>
                </div>
                <div className='mainCard right'>
                    <span className='title'>Sentiment Breakdown</span>

                    <div className='innerBox'>
                        <div className='innerBox1'>
                            <ReportDepartmentText text='Positive' color='#ef6102' />
                            <ReportDepartmentText text='Negative' color='#4384f4' />
                            <ReportDepartmentText text='Neutral' color='#eb3792' />
                        </div>
                        <div className='innerBox2'>
                            <Chart
                                chartType="PieChart"
                                width="20vw"
                                height="20vw"
                                data={sentimentData}
                                options={sentimentOptions}
                                className="donut-chart"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className='box3'>
                <div className='mainCard left'>
                    <span className='title'>Client Decline vs. Candidate Decline</span>
                    <div className='innerBox'>
                        <div className='innerBox1'>
                            <ReportDepartmentText text='Candidate Decline' color='#ef6102' />
                            <ReportDepartmentText text='Client Decline' color='#fec007' />
                        </div>
                        <div className='innerBox2'>
                            <Chart
                                chartType="PieChart"
                                width="20vw"
                                height="20vw"
                                data={declineData}
                                options={declineOptions}
                                className="donut-chart"
                            />
                        </div>
                    </div>
                </div>
                <div className='mainCard middle'>
                    <span className='title'>Reasons for Client Decline</span>
                </div>
                <div className='mainCard right'>
                    <span className='title'>Reason for Candidate Decline</span>
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
gap: 1rem;


.mainCard {
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
        gap: 2rem;
        align-items: center;
    
        .innerBox1 {
            display: flex;
            gap: 0.75rem;
        }
    
        .innerBox2 {

        }
    }
}


.box1 {
    width: 98%;
    display: flex;
    gap: 1.5%;

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
    }
    .child2 {
        width: 100%;
    }
}

.right {
    width: 28%;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .child1 {
        width: 100%;

        .title {
            font-size: 1rem;
            font-weight: 600;
        }

    }

    .child2 {
        width: 100%;

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

        .title {
            font-size: 1rem;
            font-weight: 600;
        }

    }
}

}


.box2 {
    width: 101%;
    display: flex;
    gap: 1.5%;
    justify-content: space-between;
    box-sizing: border-box;

    .left {
        width: 60%;

    }

    .right {
        width: 40%;

    }
}

.box3 {
    width: 101%;
    display: flex;
    gap: 1.5%;
    justify-content: space-between;
    box-sizing: border-box;

    .left {
        width: 33%;
    }

    .middle {
        width: 33%;
    }

    .right {
        width: 33%;
    }
}

`