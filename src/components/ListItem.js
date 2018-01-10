import React, { Component } from 'react';
import { CardSection } from './common';
import { Text,View,TouchableWithoutFeedback } from 'react-native';
import * as actions from '../actions';
import { connect } from 'react-redux';

class ListItem extends Component{
    render(){    
        console.log(this.props);    
        return(
        <TouchableWithoutFeedback onPress={this.props.selectLibrary(this.props.id)}>
         <View>
          <CardSection>
               <Text style={styles.titleStyle}>{this.props.library.title}</Text>
          </CardSection>
         </View>
        </TouchableWithoutFeedback>
        );
    }
}

const styles={
    titleStyle:{
        fontSize:18,
        paddingLeft:15,
    }
}

export default connect(null,actions)(ListItem);