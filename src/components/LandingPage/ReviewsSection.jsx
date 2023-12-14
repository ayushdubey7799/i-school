import React from 'react'
import styled from 'styled-components'
import profileImg from '../../assets/resume/profileImg.png'


const reviews = [
    { profileImg: profileImg, name: 'Rajan S', title: 'System Engineer', text: "As a System Engineer, incorporating this AI-driven interview portal into our workflow has been transformative. It provides deep insights into candidates' technical skills, reducing screening time and improving hiring efficiency. The platform's adaptability to our unique technical requirements showcases its versatility, making it an indispensable tool for optimizing our recruitment process." },
    { profileImg: profileImg, name: 'Abhi K', title: 'Software Developer', text: "Our experience with this AI interview portal has been exceptional. Its robust features, such as natural language processing and real-time collaboration, elevate our recruitment process, particularly for Software Developers. The platform's adaptability to various roles and industries, coupled with insightful analytics, significantly improves hiring efficiency. It's a game-changer, enhancing both the quality and speed of our hiring for software development roles." },
    { profileImg: profileImg, name: 'Chirag Jain', title: 'Manager', text: "This AI-based interview portal streamlines hiring for managerial roles, providing efficient evaluations and reducing screening time. The intuitive interface, powered by cutting-edge AI, enhances our recruitment process for managerial positions. Real-time collaboration and insightful analytics contribute to informed decision-making, making it an invaluable asset for Managers. The platform's adaptability to diverse roles showcases its versatility, ensuring a seamless user experience." },
    { profileImg: profileImg, name: 'Amit Agarwal', title: 'Engineering and Production Manager', text: "Incorporating this AI-driven interview portal into our workflow has been a game-changer for Engineering and Production Managers. It provides deep insights into candidates' technical, cognitive, and soft skills, reducing time-to-hire and improving hiring quality for managerial roles. Realistic virtual interview simulations, coupled with real-time feedback, make it an indispensable tool for recruitment efficiency in engineering and production management." },
]

const ReviewsSection = () => {
    return (
        <Box>

            <div className='floatingBox'>
                {
                    reviews.map((review, i) => (
                        <div className='card'>
                            {/* <img className='img' src={review.profileImg} /> */}
                            <span className='name'>{review.name}</span>
                            <span className='title'>{review.title}</span>
                            <span className='text'>{review.text}</span>
                        </div>
                    ))
                }
            </div>
        </Box>
    )
}

export default ReviewsSection

const Box = styled.div`
width: 90%;
margin: 5rem auto 4rem auto;
display: flex;
background: linear-gradient(to bottom, #f0f0f0, #89f3eb);
border-radius: 0.75rem;
position: relative;
height: 26rem;


.floatingBox {
    width: 100%;
    display: flex;
    gap: 1%;
    justify-content: space-evenly;
    position: absolute;
    top: -4rem;
}

.card {
    width: 18%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    box-shadow: 0 0.1rem 0.5rem 0.1rem rgba(0, 0, 0, 0.25);
    padding: 1rem 1.5%;
    border-radius: 1rem;
    background-color: var(--white);
    color: var(--color);
    

    .img {
        width: 4rem;
        border-radius: 2rem;
    }

    .name {
        font-size: 1.2rem;
        font-weight: 700;
        text-align: center;
    }

    .title {
        font-size: 0.9rem;
        font-weight: 600;
        line-height: 1.3rem;
        text-align: center;
    }

    .text {
        font-size: 0.9rem;
        font-weight: 400;
        line-height: 1.3rem;
        text-align: center;
        color: var(--color);
    }
}



`