import React from 'react'
import styled from 'styled-components'
import homepage1 from '../../assets/homepage1.jpeg'
import homepage3 from '../../assets/homepage3.png'
import productCard1 from '../../assets/homepage2.jpg'
import productCard2 from '../../assets/homepage4.jpeg'
import productCard3 from '../../assets/homepage6.jpeg'
import bg1 from '../../assets/bg1.jpg'
import bg2 from '../../assets/bg5.jpg'
import { useNavigate } from 'react-router'

const DetailedContent = () => {
    const navigate = useNavigate();



    return (
        <StyledBox>
            <div className='topTextBox'>
                <span className='topTitle'>Empower your hiring ecosystem</span>
                <span className='topText'>IntelliView enables you with tools powered by AI & system that give you an edge, speed and cost effectiiveness on your regular and special hirng neeeds</span>
            </div>

            <div className='topBox'>
                <div className='topBoxChild'>
                    <div className='topBoxChildAnime'>1</div>
                    <span className='topBoxChildTitle'>AI powred Systems</span>
                    <span className='topBoxChildText'>IntelliView provide you an edge with its AI enabled tools to power your HR systems</span>
                </div>
                <div className='topBoxChild'>
                    <div className='topBoxChildAnime'>2</div>
                    <span className='topBoxChildTitle'>Automate Manual Tasks</span>
                    <span className='topBoxChildText'>Leave behind time and bandwidth consuming manual hiring processed to utilize your manpower better and getthing things done with few clicks</span>
                </div>
                <div className='topBoxChild'>
                    <div className='topBoxChildAnime'>3</div>
                    <span className='topBoxChildTitle'>Stream Line Processes</span>
                    <span className='topBoxChildText'>Simplify complex recrutment processes for smooth operations</span>
                </div>
                <div className='topBoxChild'>
                    <div className='topBoxChildAnime'>4</div>
                    <span className='topBoxChildTitle'>Speed Up growth</span>
                    <span className='topBoxChildText'>We know what matter most and that where all we build aims to fuel your growth</span>
                </div>
            </div>

            <div className='visualDetail'>
                <div className='visualDetailBox'>
                    <div className='visualDetailTextBox'>
                        <span className='visualDetailTitle'>Efficient Sourcing</span>
                        <span className='visualDetailText'>One of the most time-consuming tasks in recruitment is reviewing resumes and job applications. AI-powered resume screening systems can significantly improve this process. These systems use natural language processing (NLP) and machine learning algorithms to quickly analyze and rank resumes based on their relevance to the job description.</span>

                        {/* <div className='visualDetailSpecBox'>
                            <span className='visualDetailSpec'><span className='rightSign'>&#x2713;</span>Tristique senectus et netus</span>
                            <span className='visualDetailSpec'><span className='rightSign'>&#x2713;</span>Pharetra sit amet aliquam</span>
                            <span className='visualDetailSpec'><span className='rightSign'>&#x2713;</span>Vitae suscipit tellus mauris</span>
                        </div> */}
                    </div>
                    <div className='visualDetailImgBox'>
                        <img src={homepage1} />
                    </div>
                </div>
                <div className='visualDetailBox'>
                    <div className='visualDetailImgBox'>
                        <img src={homepage3} />
                    </div>
                    <div className='visualDetailTextBox'>
                        <span className='visualDetailTitle'>Processes to Fuel Growth</span>
                        <span className='visualDetailText'>To fully leverage the growth potential of AI in hiring processes, it's essential to choose the right AI tools and platforms, integrate them seamlessly into your existing systems, and provide appropriate training to HR professionals to use these tools effectively. Additionally, continuous monitoring and refinement of AI-driven processes are crucial to ensure ongoing success and alignment with your organization's growth goals.</span>

                        {/* <div className='visualDetailSpecBox'>
                            <span className='visualDetailSpec'><span className='rightSign'>&#x2713;</span>Integer feugiat scelerisque varius</span>
                            <span className='visualDetailSpec'><span className='rightSign'>&#x2713;</span>Ornare arcu dui vivamus arcu</span>
                            <span className='visualDetailSpec'><span className='rightSign'>&#x2713;</span>Nec tincidunt praesent semper feugiat</span>
                        </div> */}
                    </div>
                </div>
            </div>

            <div className='contactSection'>
                <span className='contactSectionTitle'>Become part of advanced Recruitment Solutions powered by AI, same time with Human Touch in your journey of growth.</span>
                <button className='contactSectionBtn' onClick={() => navigate('/contact')}>Contact Us</button>
            </div>

            <div className='achievedNumber'>
                <div className='achievedNumberBox'>
                    <span className='achievedNumberDigit'>150</span>
                    <span className='achievedNumberText'>Registered job seekers</span>
                </div>
                <div className='achievedNumberBox'>
                    <span className='achievedNumberDigit'>300</span>
                    <span className='achievedNumberText'>Employers on board</span>
                </div>
                <div className='achievedNumberBox'>
                    <span className='achievedNumberDigit'>450</span>
                    <span className='achievedNumberText'>Interviews completed</span>
                </div>
                <div className='achievedNumberBox'>
                    <span className='achievedNumberDigit'>600</span>
                    <span className='achievedNumberText'>Processes Automated</span>
                </div>
            </div>

            <div className='product'>
                <span className='productTitle'>Whats the latest we have built</span>
                <span className='productText'>Explore our blog for insightful articles, personal reflections and ideas that inspire action on the topics you care about.</span>

                <div className='productCardBox'>
                    <div className='productCard'>
                        <img className='productCardImg' src={productCard1} />
                        <span className='productCardText'>AI benefits with human touch</span>
                    </div>
                    <div className='productCard'>
                        <img className='productCardImg' src={productCard2} />
                        <span className='productCardText'>Streamline and Automate processes for better Opex</span>
                    </div>
                    <div className='productCard'>
                        <img className='productCardImg' src={productCard3} />
                        <span className='productCardText'>Technology and innovation  that will inspire you</span>
                    </div>
                </div>
            </div>

            <div className='contactSectionBottom'>
                <span className='contactSectionBottomTitle'>Ready to get started?</span>
                <span className='contactSectionBottomText'>IntelliView is a highly automated set of AI tools and systems. Let your start your journey to build team of best talent available!</span>
                <button className='contactSectionBottomBtn' onClick={() => navigate('/signup')}>Try Now</button>
            </div>
        </StyledBox>
    )
}

export default DetailedContent



const StyledBox = styled.div`

display: flex;
flex-direction: column;
width: 100%;
margin-top: 5rem;


.topTextBox {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
}

.topTitle {
    font-size: 2.5rem;
    font-weight: 600;
}

.topText {
    font-size: 1rem;
    font-weight: 400;
    width: 60%;
    text-align: center;
    line-height: 1.5rem;
}

.topBox {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-between;
    gap: 5%;
    margin-top: 5rem;
    margin-bottom: 5rem;
    margin-left: 5%;
    margin-right: 5%;
}

.topBoxChild {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 1.5rem;
    width: 20%;
    min-height: 15rem;
}

.topBoxChildTitle {
    font-size: 1.2rem;
    font-weight: 600;
    text-align: center;
}

.topBoxChildText {
    font-size: 0.95rem;
    font-weight: 400;
    line-height: 1.5rem;
    text-align: center;
    word-wrap: break-word;
}

.topBoxChildAnime {
    display: flex;
    font-weight: 600;
    justify-content: center;
    align-items: center;
    color: white;
    width: 2.5rem;
    height: 2.5rem;
    background-color: var(--lightOrange);
    border-radius: 50%;
    box-shadow: 0 0 1rem var(--lightOrange);
}


.visualDetail {
    display: flex;
    flex-direction: column;
    gap: 5rem;
    margin-top: 3rem;
    margin-bottom: 5rem;
    margin-left: 5%;
    margin-right: 5%;
}

.visualDetailBox {
    display: flex;
    flex-direction: row;
    gap: 5%;
}


.visualDetailTextBox {
    width: 40%;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.visualDetailTitle {
    font-size: 2.5rem;
    font-weight: 600;
    text-align: center;
}

.visualDetailText {
    font-size: 1rem;
    line-height: 1.5rem;
}

.visualDetailSpecBox {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.visualDetailSpec {
    display: flex;
    gap: 1rem;
    font-size; 1rem;
    font-weight: 500;
}

.rightSign {
    color: var(--orange);
    font-weight: 1000;
}

.visualDetailImgBox {
    width: 55%;
    display: flex;
    justify-content: center;
    align-items: center;
}


.visualDetailImgBox > img {
    width: 80%;
}


.contactSection {
    display: flex;
    flex-direction: column;
    background-color: var(--lightOrange);
    justify-content: center;
    align-items: center;
    padding: 6rem 7.5%;
    width: 85%;
    gap: 2rem;

    background-image: url(${bg1});
    background-size: cover;
    background-repeat: no-repeat; 
}


.contactSectionTitle {
    font-size: 2.5rem;
    font-weight: 800;
    color: var(--white);
    text-align: center;
}


.contactSectionBtn {
    background-color: var(--white);
    color: var(--color);
    padding: 0.7rem 1.1rem;
    font-size: 1rem;
    font-weight: 500;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
}

.contactSectionBtn:hover {
    cursor: pointer;
    background-color: #FFD580;
}

.achievedNumber {
    display: flex;
    flex-direction: row;
    width: 90%;
    justify-content: space-between;
    align-items: center;
    padding: 4rem 5%;
}

.achievedNumberBox {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
}

.achievedNumberDigit {
    font-size: 2.5rem;
    font-weight: 600;
    color: var(--lightOrange);
}

.achievedNumberText {
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--color);
    text-align: center;
}


.product {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 5rem;
    margin-bottom: 5rem;
    gap: 2rem;
}

.productTitle {
    font-size: 2.5rem;
    font-weight: 800;
    text-align: center;
}

.productText {
    font-size: 1.1rem;
    line-height: 1.5rem;
    width: 60%;
    text-align: center;
    font-weight: 400;
}

.productCardBox {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-top: 2rem;
}

.productCard {
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    // min-height: 20rem;
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.3);
    gap: 1rem;
    padding: 2rem 0rem;
    border-radius: 1rem;
}

.productCard:hover {
    cursor: pointer;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.3);
    background-color: #99d6ff;
}

.productCardImg {
    width: 80%;
    // height: 15rem;
}

.productCardText {
    width: 80%;
    font-size: 1.1rem;
    font-weight: 600;
    text-align: center;
}




.contactSectionBottom {
    display: flex;
    flex-direction: column;
    background-color: var(--orange);
    justify-content: center;
    align-items: center;
    padding: 6rem 0%;
    width: 94%;
    margin: 0% 3%;
    gap: 2rem;
    border-radius: 1rem;
    margin-bottom: 5rem;


    background-image: url(${bg2});
    background-size: cover;
    background-repeat: no-repeat; 
}


.contactSectionBottomTitle {
    font-size: 2.5rem;
    font-weight: 800;
    color: var(--white);
    text-align: center;
}

.contactSectionBottomText {
    font-size: 1.1rem;
    font-weight: 400;
    color: var(--white);
    text-align: center;
    width: 60%;
    line-height: 1.5rem;
}

.contactSectionBottomBtn {
    background-color: var(--white);
    color: var(--color);
    padding: 0.7rem 1rem;
    font-size: 1rem;
    font-weight: 500;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
}

.contactSectionBottomBtn:hover {
    cursor: pointer;
    background-color: #FFD580;
}


@media (max-width: 500px) {
    .topBoxChild {
        width: 40%;
        margin-top: 1rem;
    }
}

`


