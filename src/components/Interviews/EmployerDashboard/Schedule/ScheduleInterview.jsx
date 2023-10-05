import React from 'react'
import ManageJds from './ManageJds'

const rows = [
  {
    "jd_id": "JD001",
    "req_id": "REQ001",
    "Date of creation": "2023-09-28",
    "Test Id": "Test001",
    "No of profiles available": 15,
    "description": "This is a job description for a software developer position. We are looking for an experienced developer to join our team."
  },
  {
    "jd_id": "JD002",
    "req_id": "REQ002",
    "Date of creation": "2023-09-27",
    "Test Id": "Test002",
    "No of profiles available": 10,
    "description": "We have an opening for a marketing specialist role. The ideal candidate should have a strong background in digital marketing."
  },
  {
    "jd_id": "JD003",
    "req_id": "REQ003",
    "Date of creation": "2023-09-26",
    "Test Id": "Test003",
    "No of profiles available": 8,
    "description": "Join our customer support team as a customer service representative. Help us provide excellent service to our customers."
  },
  {
    "jd_id": "JD004",
    "req_id": "REQ004",
    "Date of creation": "2023-09-25",
    "Test Id": "Test004",
    "No of profiles available": 12,
    "description": "We are hiring a project manager to oversee our upcoming software development projects."
  },
  {
    "jd_id": "JD005",
    "req_id": "REQ005",
    "Date of creation": "2023-09-24",
    "Test Id": "Test005",
    "No of profiles available": 20,
    "description": "Join our design team as a UI/UX designer. Help create user-friendly and visually appealing interfaces."
  },
  {
    "jd_id": "JD006",
    "req_id": "REQ006",
    "Date of creation": "2023-09-23",
    "Test Id": "Test006",
    "No of profiles available": 7,
    "description": "We are looking for a data analyst to extract valuable insights from our company's data."
  },
  {
    "jd_id": "JD007",
    "req_id": "REQ007",
    "Date of creation": "2023-09-22",
    "Test Id": "Test007",
    "No of profiles available": 14,
    "description": "Join our sales team as a sales representative. You'll have the opportunity to drive sales and grow our client base."
  },
  {
    "jd_id": "JD008",
    "req_id": "REQ008",
    "Date of creation": "2023-09-21",
    "Test Id": "Test008",
    "No of profiles available": 9,
    "description": "We are hiring a financial analyst to help with budgeting and financial planning."
  },
  {
    "jd_id": "JD009",
    "req_id": "REQ009",
    "Date of creation": "2023-09-20",
    "Test Id": "Test009",
    "No of profiles available": 18,
    "description": "Join our content creation team as a content writer. Create engaging and informative content for our audience."
  },
  {
    "jd_id": "JD010",
    "req_id": "REQ010",
    "Date of creation": "2023-09-19",
    "Test Id": "Test010",
    "No of profiles available": 6,
    "description": "We have an opening for a network administrator to maintain and troubleshoot our network infrastructure."
  }
]


const ScheduleInterview = () => {
  return (
    <div><ManageJds rows={rows}/></div>
  )
}

export default ScheduleInterview
