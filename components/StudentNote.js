import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import NotesBox from './NotesBox';
import { connect } from 'react-redux';
import { storeNote, getNotes } from '../actions/NoteAction';
import { Actions } from 'react-native-router-flux';
import styles from '../Styles/StudentNoteStyle';

class StudentNote extends Component {

    state = {
        Math: '',
        English: '',
        Chemical: '',
        History: '',
        Physic: '',
        areNotesExist: false,
        scores: []
    }

    componentWillMount() {
        const choosenStudent = this.props.data.filter((student) => student.id === this.props.studentId);

        choosenStudent[0].notes === undefined
            ? this.setState({ areNotesExist: false })
            : this.setState({ areNotesExist: true, scores: choosenStudent[0].notes });
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
        const scores = this.state.scores;
        return (
            <View style={styles.container}>
                <View style={styles.courses}>
                    <NotesBox handleTextChange={this.handleTextChange} score={scores.Math} course='Math' />
                    <NotesBox handleTextChange={this.handleTextChange} score={scores.Chemical} course='Chemical' />
                    <NotesBox handleTextChange={this.handleTextChange} score={scores.Physic} course='Physic' />
                    <NotesBox handleTextChange={this.handleTextChange} score={scores.English} course='English' />
                    <NotesBox handleTextChange={this.handleTextChange} score={scores.History} course='History' />
                </View>
                {
                    this.state.areNotesExist === false
                        ? (
                            <View style={styles.saveButtonView}>
                                <TouchableOpacity
                                    onPress={this.handleSaveButton}
                                    style={styles.saveButton}
                                >
                                    <Text style={styles.whiteText}>Save Scores</Text>
                                </TouchableOpacity>
                            </View>
                        )
                        : null
                }

            </View>
        )
    }
}

const mapStateToProps = ({ studentResponse }) => {
    console.log('StudentNote', studentResponse);

    return { data: studentResponse.data[0] };
}

export default connect(mapStateToProps, { storeNote, getNotes })(StudentNote);