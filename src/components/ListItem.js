import React, { Component } from 'react';
import { CardSection } from './common';
import { Text,View,TouchableWithoutFeedback,LayoutAnimation,Platform } from 'react-native';
import * as actions from '../actions';
import { connect } from 'react-redux';
import {UIManager} from 'react-native';

class ListItem extends Component{
    componentWillUpdate(){
        LayoutAnimation.spring();
    }

    constructor() {
        super();
    
        if (Platform.OS === 'android') {
          UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
        }
    }    

    renderDescription(){
        if(this.props.expanded)
        return(
        <CardSection>
            <Text>{this.props.library.description}</Text>
        </CardSection>
        );
    }

    render(){    
        console.log(this.props);    
        return(
        <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(this.props.library.id)}>
         <View>
          <CardSection>
               <Text style={styles.titleStyle}>{this.props.library.title}</Text>
          </CardSection>
          {this.renderDescription()}
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
};

const mapStateToProps = (state,ownProps) => {
    const expanded= ownProps.library.id===state.selectedLibraryId;

    return { expanded };
};

export default connect(mapStateToProps,actions)(ListItem);