import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import NotesBox from './NotesBox';
import { connect } from 'react-redux';
import { storeNote } from '../actions/NoteAction';
import { Actions } from 'react-native-router-flux';

class StudentNote extends Component {

    state = {
        Math: '',
        English: '',
        Chemical: '',
        History: '',
        Physic: ''
    }

    handleTextChange = (courseName, score) => {
        this.setState({
            [courseName]: score
        });
    }

    handleSaveButton = () => {
        this.props.storeNote(this.state, this.props.studentId);
        Actions.pop();
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.courses}>
                    <NotesBox handleTextChange={this.handleTextChange} course='Math' />
                    <NotesBox handleTextChange={this.handleTextChange} course='Chemical' />
                    <NotesBox handleTextChange={this.handleTextChange} course='Physic' />
                    <NotesBox handleTextChange={this.handleTextChange} course='English' />
                    <NotesBox handleTextChange={this.handleTextChange} course='History' />
                </View>
                <View style={styles.saveButtonView}>
                    <TouchableOpacity
                        onPress={this.handleSaveButton}
                        style={styles.saveButton}
                    >
                        <Text style={styles.whiteText}>Save Scores</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    courses: {
        alignItems: 'center'
    },
    saveButtonView: {
        alignItems: 'flex-end',
        marginTop: 20,
        marginRight: 20
    },
    saveButton: {
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 10,
        padding: 10
    },
    whiteText: {
        color: 'white'
    }
});


const mapStateToProps = ({ noteResponse }) => {
    console.log(noteResponse.data);
    return { data: 'aa' };
}

export default connect(mapStateToProps, { storeNote })(StudentNote);