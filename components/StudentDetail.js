import React, { Component } from 'react'
import { Text, View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux';
import { getStudentDetail, deleteStudent } from '../actions/StudentAction';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Actions } from 'react-native-router-flux';

const { width } = Dimensions.get('window');

class StudentDetail extends Component {

    componentDidMount() {
        this.props.getStudentDetail(this.props.studentId);
    }

    handleDeleteIcon = (id) => {
        this.props.deleteStudent(id);
        Actions.pop();
    }

    handleAddScoreButton = (id) => {
        Actions.push('studentNote', { studentId: id });
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.studentListBox}>
                    <Text style={styles.whiteText}>Name: {this.props.data.name}</Text>
                    <Text style={styles.whiteText}>Surname: {this.props.data.surname}</Text>
                    <Text style={styles.whiteText}>Class: {this.props.data.class}</Text>
                    <Text style={styles.whiteText}>Custodian: {this.props.data.custodian}</Text>
                    <Text style={styles.whiteText}>Custodian Phone: {this.props.data.custodianPhone}</Text>
                    <View style={styles.lastRow}>
                        <View style={styles.iconsView}>
                            <TouchableOpacity style={styles.deleteIcon} onPress={() => this.handleDeleteIcon(this.props.data.id)}>
                                <Icon name='trash' size={16} color='white' />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.updateIcon} onPress={this.handleDeleteIcon}>
                                <Icon name='edit' size={16} color='white' />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.addScoreButtonView}>
                            <TouchableOpacity
                                onPress={() => this.handleAddScoreButton(this.props.data.id)}
                                style={styles.addScoreButton}
                            >
                                <View>
                                    <Text style={styles.whiteText}>Add Score</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    studentListBox: {
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 10,
        width: width * 0.8,
        padding: 10,
    },
    whiteText: {
        color: 'white'
    },
    lastRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    iconsView: {
        flex: 6,
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    deleteIcon: {
        marginRight: 10
    },
    updateIcon: {
        marginRight: 10
    },
    addScoreButtonView: {
        flex: 4,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    addScoreButton: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 10,
    }
});

const mapStateToProps = ({ studentResponse }) => {
    return { data: studentResponse.data[0][0] };
}

export default connect(mapStateToProps, { getStudentDetail, deleteStudent })(StudentDetail);