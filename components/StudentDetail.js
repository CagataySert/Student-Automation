import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux';
import { getStudents, deleteStudent } from '../actions/StudentAction';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Actions } from 'react-native-router-flux';
import styles from '../Styles/StudentDetailStyle';

class StudentDetail extends Component {

    state = {
        choosenStudentData: {}
    }
    componentDidMount() {
        console.log('cdm', this.props.data);
        const allStudentsDatas = this.props.data;
        const filteredData = allStudentsDatas.filter((student) => student.id === this.props.studentId);
        this.setState({
            choosenStudentData: filteredData[0]
        });

    }

    handleDeleteIcon = (id) => {
        this.props.deleteStudent(id);
        Actions.pop();
    }

    handleAddScoreButton = (id) => {
        Actions.push('studentNote', { studentId: id });
    }

    render() {
        const data = this.state.choosenStudentData;
        return (
            <View style={styles.container}>
                <View style={styles.studentListBox}>
                    <Text style={styles.whiteText}>Name: {data.name}</Text>
                    <Text style={styles.whiteText}>Surname: {data.surname}</Text>
                    <Text style={styles.whiteText}>Class: {data.class}</Text>
                    <Text style={styles.whiteText}>Custodian: {data.custodian}</Text>
                    <Text style={styles.whiteText}>Custodian Phone: {data.custodianPhone}</Text>
                    <View style={styles.lastRow}>
                        <View style={styles.iconsView}>
                            <TouchableOpacity style={styles.deleteIcon} onPress={() => this.handleDeleteIcon(data.id)}>
                                <Icon name='trash' size={16} color='white' />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.updateIcon} onPress={this.handleDeleteIcon}>
                                <Icon name='edit' size={16} color='white' />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.addScoreButtonView}>
                            <TouchableOpacity
                                onPress={() => this.handleAddScoreButton(data.id)}
                                style={styles.addScoreButton}
                            >
                                <View>
                                    {
                                        data.notes === undefined
                                            ? (<Text style={styles.whiteText}>Add Score</Text>)
                                            : (<Text style={styles.whiteText}>Display Scores</Text>)
                                    }
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}



const mapStateToProps = ({ studentResponse }) => {
    console.log('StudentDetail', studentResponse);

    return { data: studentResponse.data[0] };
}

export default connect(mapStateToProps, { getStudents, deleteStudent })(StudentDetail);