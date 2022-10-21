import React from 'react';
import PropTypes from 'prop-types';
import { Title } from './Section.styled';

export default function Section({ title, children }) {
    return (
        <div>
            <Title>{title}</Title>
            {children}
        </div>
    )
}

Section.protoType = {
    "title": PropTypes.string.isRequired,
}