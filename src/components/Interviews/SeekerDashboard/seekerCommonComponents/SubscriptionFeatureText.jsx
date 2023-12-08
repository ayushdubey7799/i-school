import React from 'react'
import styled from 'styled-components'
import ColoredDot from '../../../../assets/icons/coloredDot.png'

const SubscriptionFeatureText = ({ text }) => {
    return (
        <Span><img src={ColoredDot} className='featureDot' /> {text}</Span>
    )
}

export default SubscriptionFeatureText

const Span = styled.span`
font-size: 0.8rem;
    font-weight: 400;
    display: flex;
    gap: 0.5rem;
    align-items: center;
    text-wrap: break-word;

    .featureDot {
        width: 0.5rem;
        height: 0.5rem;
    }


`