import React from 'react'
import styled from 'styled-components'
import homepage1 from '../../assets/homepage1.jpeg'
import homepage3 from '../../assets/homepage3.png'
import productCard1 from '../../assets/homepage2.jpg'
import productCard2 from '../../assets/homepage4.jpeg'
import productCard3 from '../../assets/homepage6.jpeg'

const DetailedContent = () => {
    return (
        <StyledBox>
            <div className='topTextBox'>
                <span className='topTitle'>Power your online visibility</span>
                <span className='topText'>We design, build and support websites and apps for clients worldwide. We make your business stand out. Interested? Let's chat.</span>
            </div>

            <div className='topBox'>
                <div className='topBoxChild'>
                    <div className='topBoxChildAnime'>1</div>
                    <span className='topBoxChildTitle'>Develop objectives</span>
                    <span className='topBoxChildText'>Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia</span>
                </div>
                <div className='topBoxChild'>
                    <div className='topBoxChildAnime'>2</div>
                    <span className='topBoxChildTitle'>Determine resources</span>
                    <span className='topBoxChildText'>Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia</span>
                </div>
                <div className='topBoxChild'>
                    <div className='topBoxChildAnime'>3</div>
                    <span className='topBoxChildTitle'>Create a timeline</span>
                    <span className='topBoxChildText'>Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia</span>
                </div>
                <div className='topBoxChild'>
                    <div className='topBoxChildAnime'>4</div>
                    <span className='topBoxChildTitle'>Finalize plan</span>
                    <span className='topBoxChildText'>Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia</span>
                </div>
            </div>

            <div className='visualDetail'>
                <div className='visualDetailBox'>
                    <div className='visualDetailTextBox'>
                        <span className='visualDetailTitle'>Search engine optimization</span>
                        <span className='visualDetailText'>Arcu felis bibendum ut tristique et egestas quis bibendum ut tristique et egestas quis ipsum suspendisse. Eget egestas purus.</span>

                        <div className='visualDetailSpecBox'>
                            <span className='visualDetailSpec'><span className='rightSign'>&#x2713;</span>Tristique senectus et netus</span>
                            <span className='visualDetailSpec'><span className='rightSign'>&#x2713;</span>Pharetra sit amet aliquam</span>
                            <span className='visualDetailSpec'><span className='rightSign'>&#x2713;</span>Vitae suscipit tellus mauris</span>
                        </div>
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
                        <span className='visualDetailTitle'>Page changes monitoring</span>
                        <span className='visualDetailText'>Integer feugiat scelerisque varius morbi enim nunc faucibus. Egestas erat imperdiet sed euismod nisi elementum eu facilisis.</span>

                        <div className='visualDetailSpecBox'>
                            <span className='visualDetailSpec'><span className='rightSign'>&#x2713;</span>Integer feugiat scelerisque varius</span>
                            <span className='visualDetailSpec'><span className='rightSign'>&#x2713;</span>Ornare arcu dui vivamus arcu</span>
                            <span className='visualDetailSpec'><span className='rightSign'>&#x2713;</span>Nec tincidunt praesent semper feugiat</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='contactSection'>
                <span className='contactSectionTitle'>Join the ranks of more than 5,000 leading companies
                    and see what we can do for your business.</span>
                <button className='contactSectionBtn'>Contact Us</button>
            </div>

            <div className='achievedNumber'>
                <div className='achievedNumberBox'>
                    <span className='achievedNumberDigit'>150</span>
                    <span className='achievedNumberText'>Daily subscribers</span>
                </div>
                <div className='achievedNumberBox'>
                    <span className='achievedNumberDigit'>300</span>
                    <span className='achievedNumberText'>Active members</span>
                </div>
                <div className='achievedNumberBox'>
                    <span className='achievedNumberDigit'>450</span>
                    <span className='achievedNumberText'>Completed projects</span>
                </div>
                <div className='achievedNumberBox'>
                    <span className='achievedNumberDigit'>600</span>
                    <span className='achievedNumberText'>Happy clients</span>
                </div>
            </div>

            <div className='product'>
                <span className='productTitle'>What's on our mind</span>
                <span className='productText'>Explore our blog for insightful articles, personal reflections and ideas that inspire action on the topics you care about.</span>

                <div className='productCardBox'>
                    <div className='productCard'>
                        <img className='productCardImg' src={productCard1} />
                        <span className='productCardText'>Self-discipline and taking action is key to a happy, balanced mind</span>
                    </div>
                    <div className='productCard'>
                        <img className='productCardImg' src={productCard2} />
                        <span className='productCardText'>Technology and innovation events that will inspire you</span>
                    </div>
                    <div className='productCard'>
                        <img className='productCardImg' src={productCard3} />
                        <span className='productCardText'>Shanghai is a mythical, magical metropolis of beauty and wealth</span>
                    </div>
                </div>
            </div>

            <div className='contactSectionBottom'>
                <span className='contactSectionBottomTitle'>Ready to get started? Contact us!</span>
                <span className='contactSectionBottomText'>Ekko is a fully packed practical tool of premium built and design. Let your creativity loose and start building your website now.</span>
                <button className='contactSectionBottomBtn'>Contact Us</button>
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
    flex-direction: row;
    align-items: center;
    gap: 5%;
    margin-top: 5rem;
    margin-bottom: 5rem;
    margin-left: 5%;
    margin-right: 5%;
}

.topBoxChild {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
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
}

.topBoxChildAnime {
    display: flex;
    font-weight: 600;
    justify-content: center;
    align-items: center;
    color: white;
    width: 2.5rem;
    height: 2.5rem;
    background-color: var(--orange);
    border-radius: 50%;
    box-shadow: 0 0 1rem var(--orange);
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
    width: 35%;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.visualDetailTitle {
    font-size: 2.5rem;
    font-weight: 600;
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
    width: 60%;
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
}


.contactSectionTitle {
    font-size: 2.5rem;
    font-weight: 800;
    color: var(--white);
    text-align: center;
}


.contactSectionBtn {
    background-color: var(--orange);
    color: var(--white);
    padding: 1rem 1.5rem;
    font-size: 1.1rem;
    border: none;
    border-radius: 0.5rem;
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
    color: var(--orange);
}

.achievedNumberText {
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--color);
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
    justify-content: center;
    min-height: 20rem;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.3);
    gap: 1rem;
    padding: 2rem 0rem;
    border-radius: 1rem;
}

.productCardImg {
    width: 80%;
    height: 15rem;
}

.productCardText {
    width: 80%;
    font-size: 1.3rem;
    font-weight: 600;
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
    background-color: var(--lightOrange);
    color: var(--white);
    padding: 1rem 1.5rem;
    font-size: 1.1rem;
    border: none;
    border-radius: 0.5rem;
}

`


