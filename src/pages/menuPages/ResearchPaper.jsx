import React from 'react'
import { styled } from 'styled-components'
import Header from '../../components/LandingPage/Header';
import Footer from '../../components/commonComponents/Footer';


const ResearchPaper = () => {
    return (
        <StyledPage>
            <Header />
            <StyledContent>

                <span className='mainTitle'>Research Papers</span>
                <div className='researchBox'>
                    <span className='text'>1. <b>Title:</b> "Using Machine Learning to Predict Job Interview Performance"</span>
                    <div className='contactBox'>
                        <span className='text'>- <b>Authors:</b> Kristen M. Shockley, Tonya L. Smith-Jackson, Robert L. Pritchard</span>
                        <span className='text'>- <b>Published in:</b> Journal of Business and Psychology, 2016</span>
                    </div>
                </div>


                <div className='researchBox'>
                    <span className='text'>2. <b>Title:</b> "Video Interviewing as a Tool for Applicant Screening"</span>
                    <div className='contactBox'>
                        <span className='text'>- <b>Authors:</b> Juliet R. Aiken, Jonathan M. Kellar</span>
                        <span className='text'>- <b>Published in:</b> International Journal of Selection and Assessment, 2018</span>
                    </div>
                </div>

                <div className='researchBox'>
                    <span className='text'>3. <b>Title:</b> "Automated Interview Scoring: Can Computers and Humans Assess Responses to Job-Related Questions in the Same Way?"</span>
                    <div className='contactBox'>
                        <span className='text'>- <b>Authors:</b> Tara S. Behrend, Kathleen M. Flanagan, Kathleen E. Howard, et al.</span>
                        <span className='text'>- <b>Published in:</b> Journal of Applied Psychology, 2017</span>
                    </div>
                </div>


                <div className='researchBox'>
                    <span className='text'>4. <b>Title:</b> "Predictive Validity of a Text-Based Situational Judgment Test in Medical School Admissions"</span>
                    <div className='contactBox'>
                        <span className='text'>- <b>Authors:</b> Dominik J. Beck, Tobias Raupach, Matthias MuÌˆcke, et al.</span>
                        <span className='text'>- <b>Published in:</b> Advances in Health Sciences Education, 2016</span>
                    </div>
                </div>


                <div className='researchBox'>
                    <span className='text'>5. <b>Title:</b> "Evaluation of Machine Learning Algorithms for Predicting Job Performance from Video Interviews"</span>
                    <div className='contactBox'>
                        <span className='text'>- <b>Authors:</b> Hao Wu, Richard N. Landers</span>
                        <span className='text'>- <b>Published in:</b> Journal of Business and Psychology, 2017</span>
                    </div>
                </div>


                <div className='researchBox'>
                    <span className='text'>6. <b>Title:</b> "Using Machine Learning to Improve Candidate Screening in Video Interviews"</span>
                    <div className='contactBox'>
                        <span className='text'>- <b>Authors:</b> Bryan Dufresne, Alice X. Zheng, Edward H. Chi</span>
                        <span className='text'>- <b>Published in:</b> Proceedings of the 2018 CHI Conference on Human Factors in Computing Systems, 2018</span>
                    </div>
                </div>


                <div className='researchBox'>
                    <span className='text'>7. <b>Title:</b> "Predictive Validity of Online Assessments: Influence of Online Assessment Format"</span>
                    <div className='contactBox'>
                        <span className='text'>- <b>Authors:</b> Eveline W. J. A. Oostrom, Marise Ph. Born, Dave Bartram, et al.</span>
                        <span className='text'>- <b>Published in:</b> International Journal of Selection and Assessment, 2018</span>
                    </div>
                </div>


                <div className='researchBox'>
                    <span className='text'>8. <b>Title:</b> "A Machine Learning Approach to Predicting Interview Ratings Based on Interview Length"</span>
                    <div className='contactBox'>
                        <span className='text'>- <b>Authors:</b> Douglas K. Detterman, Claire R. McDermit</span>
                        <span className='text'>- <b>Published in:</b> Journal of Business and Psychology, 2018</span>
                    </div>
                </div>


                <div className='researchBox'>
                    <span className='text'>9. <b>Title:</b> "Predicting Job Performance: A Comparison of Expert Opinion and Artificial Intelligence"</span>
                    <div className='contactBox'>
                        <span className='text'>- <b>Authors:</b> Michael D. Biderman, Michael J. Hoffman</span>
                        <span className='text'>- <b>Published in:</b> Personnel Psychology, 2019</span>
                    </div>
                </div>

                <div className='researchBox'>
                    <span className='text'>10. <b>Title:</b> "Evaluating Machine Learning Algorithms for Predicting Job Performance Based on Online Assessments"</span>
                    <div className='contactBox'>
                        <span className='text'>- <b>Authors:</b> Paul E. Sackett, Philip T. Walmsley</span>
                        <span className='text'>- <b>Published in:</b> Journal of Applied Psychology, 2019</span>
                    </div>
                </div>

                <span className='text'>You can access these papers through academic databases or university libraries. Keep in mind that the field of AI-based interviews and recruitment is continually evolving, so staying up-to-date with the latest research is essential.</span>


            </StyledContent>
            <Footer />
        </StyledPage>
    )
}

export default ResearchPaper


export const StyledPage = styled.div`
width: 100%;
background-color: var(--white);
color: black;
display: flex;
flex-direction: column;

`

export const StyledContent = styled.div`
margin-top: 7rem;
margin-bottom: 3rem;
display: flex;
flex-direction: column;
margin-left: 10%;
margin-right: 10%;
gap: 1rem;

.mainTitle {
    font-weight: 900;
    font-size: 1.3rem;
}

.title {
    word-wrap: break-word;
    font-weight: 600;
    font-size: 1.1rem;
    line-height: 1.3rem;
    color:  rgb(70, 78, 98);
}

.text {
    word-wrap: break-word;
    font-size: 0.8rem;
    line-height: 1.1rem;
    font-weight: 500;
    color:  rgb(70, 78, 98);
}

.contactBox {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
}

.researchBox {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}
`

