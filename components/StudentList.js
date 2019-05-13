import React, { Component } from 'react';
import { Text, View, Dimensions, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Actions } from 'react-native-router-flux';
import { getStudents } from '../actions/StudentAction';
import { connect } from 'react-redux';
import styles from '../Styles/StudentListStyle';

const { width } = Dimensions.get('window');

class StudentList extends Component {

    componentDidMount() {
        this.props.getStudents();
        console.log(this.props.data);
    }

    handleAddNewStudentButton = () => {
        Actions.push('addNewStudent');
    }

    handleDetailIcon = (studentId) => {
        Actions.push('studentDetail', { studentId });
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.plusIcon}>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={this.handleAddNewStudentButton}
                    >
                        <Icon
                            name="plus"
                            size={16}
                            color={"white"}
                        />
                    </TouchableOpacity>
                </View>
                {
                    this.props.data.length === 0
                        ? <Text>There is not any students yet..</Text>
                        : <FlatList
                            data={this.props.data[0]}
                            renderItem=
                            {
                                ({ item }) =>
                                    <View style={styles.studentListBox}>

                                        <View style={styles.studentDataRow}>
                                            <Text style={styles.textStyle}>Name: {item.name}</Text>
                                            <Text style={styles.textStyle}>Surname: {item.surname}</Text>
                                            <View style={styles.detailIcon}>
                                                <TouchableOpacity
                                                    activeOpacity={0.7}
                                                    onPress={() => this.handleDetailIcon(item.id)}
                                                >
                                                    <Icon
                                                        name="arrow-right"
                                                        size={16}
                                                        color={"white"}
                                                    />
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </View>

                            }
                            keyExtractor={(item, index) => index.toString()}
                        />
                }
            </View>
        )
    }
}

const mapStateToProps = ({ studentResponse }) => {
    console.log('srsp', studentResponse);

    return { data: studentResponse.data };
}

export default connect(mapStateToProps, { getStudents })(StudentList);


