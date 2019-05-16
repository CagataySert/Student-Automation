import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import NotesBox from './NotesBox';
import { connect } from 'react-redux';
import { storeNote } from '../actions/NoteAction';
import { Actions } from 'react-native-router-flux';
import styles from '../Styles/StudentNoteStyle';

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

const mapStateToProps = ({ noteResponse }) => {
    console.log('StudentNote', noteResponse);
    return { data: noteResponse };
}

export default connect(mapStateToProps, { storeNote })(StudentNote);