import React, { Component } from 'react';
import CardSection from './common';
import Text from 'react-native';

export default class ListItem{
    render(){        
        return(
            <CardSection>
               <Text>{this.props.library}</Text>
            </CardSection>
        );
    }

}