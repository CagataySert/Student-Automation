import React, { Component } from 'react'
import { Text, View, StyleSheet, Dimensions, TextInput } from 'react-native'


const { width } = Dimensions.get('window');

class NotesBox extends Component {
    state = {

    }

    componentDidMount() {
        console.log(this.props);

    }


    handleTextChange = (score) => {
        const courseName = this.props.course;
        this.setState({
            courseName: score
        });
        this.props.handleTextChange(courseName, score);
    }

    render() {
        const courseName = this.props.course;
        return (
            <View style={styles.notesContainer}>
                <View style={styles.courseView}>
                    <Text style={styles.whiteText}>{this.props.course} : </Text>
                </View>

                {
                    this.props.score === undefined
                        ? (
                            <View style={styles.scoreView}>
                                <TextInput
                                    style={styles.scoreInput}
                                    onChangeText={(text) => this.handleTextChange(text)}
                                    value={this.state.courseName}
                                />
                            </View>
                        )
                        : (
                            <View style={styles.scoreView}>
                                <Text style={styles.whiteText}>{this.props.score}</Text>
                            </View>
                        )
                }


            </View>
        )
    }
}

const styles = StyleSheet.create({
    notesContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
        width: width * 0.8,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 10,
        padding: 10,
    },
    courseView: {
        flex: 3,
        justifyContent: 'center'
    },
    whiteText: {
        color: 'white'
    },
    scoreView: {
        flex: 7,
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    scoreInput: {
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 10,
        height: 30
    }
});



export default NotesBox;