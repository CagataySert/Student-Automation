import React, { Component } from 'react'
import { TextInput, View, Text, TouchableOpacity } from 'react-native'
import styles from "../Styles/AddNewStudentStyle";
import { connect } from "react-redux";
import { storeStudent } from '../actions/StudentAction';
import { Actions } from 'react-native-router-flux';


class AddNewStudent extends Component {

    state = {
        name: '',
        surname: '',
        class: '',
        custodian: '',
        custodianPhone: '',
        students: this.props.students
    }

    handleAddButton = async () => {
        console.log(this.props);

        const s = this.state;
        const students = [
            ...this.state.students,
            {
                name: s.name,
                surname: s.surname,
                class: s.class,
                custodian: s.custodian,
                custodianPhone: s.custodianPhone
            }
        ];

        await students.map((student, index) => student.id = index);
        console.log('handleAddButton:', students);

        await this.props.storeStudent(students);

        this.setState({
            name: '',
            surname: '',
            class: '',
            custodian: '',
            custodianPhone: '',
            students: []
        });
        Actions.pop();
    }
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.Label}>Student Name:</Text>
                    <TextInput
                        style={styles.inputStyle}
                        onChangeText={(text) => this.setState({ name: text })}
                        value={this.state.name}
                    />
                </View>

                <View>
                    <Text style={styles.Label}>Student Surname:</Text>
                    <TextInput
                        style={styles.inputStyle}
                        onChangeText={(text) => this.setState({ surname: text })}
                        value={this.state.surname}
                    />
                </View>

                <View>
                    <Text style={styles.Label}>Student Class:</Text>
                    <TextInput
                        style={styles.inputStyle}
                        onChangeText={(text) => this.setState({ class: text })}
                        value={this.state.class}
                    />
                </View>

                <View>
                    <Text style={styles.Label}>Custodian of Student:</Text>
                    <TextInput
                        style={styles.inputStyle}
                        onChangeText={(text) => this.setState({ custodian: text })}
                        value={this.state.custodian}
                    />
                </View>

                <View>
                    <Text style={styles.Label}>Phone Number:</Text>
                    <TextInput
                        style={styles.inputStyle}
                        onChangeText={(text) => this.setState({ custodianPhone: text })}
                        value={this.state.custodianPhone}
                    />
                </View>

                <TouchableOpacity
                    style={styles.addButton}
                    onPress={this.handleAddButton}
                >
                    <Text style={{ color: 'white' }}>
                        Add
                    </Text>
                </TouchableOpacity>
            </View>

        )
    }
}

const mapStateToProps = ({ studentResponse }) => {
    return { students: studentResponse.data.length === 0 ? studentResponse.data : studentResponse.data[0] };
}

export default connect(mapStateToProps, { storeStudent })(AddNewStudent);