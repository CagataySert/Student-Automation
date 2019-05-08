import React, { Component } from 'react';
import { Text, View, Dimensions, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';



const { width } = Dimensions.get('window');

class StudentList extends Component {

    handleAddStudent = () => { console.log('asd'); }

    render() {
        const data =
            [
                {
                    name: 'Çağatay',
                    surname: 'Sert',
                    class: '201',
                    custodian: 'Şeref',
                    phone: '05376526222'
                },
                {
                    name: 'Çağatay',
                    surname: 'Sert',
                    class: '201',
                    custodian: 'Şeref',
                    phone: '05376526222'
                }
            ]


        return (
            <View style={styles.container}>
                <View style={styles.plusIcon}>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={this.handleAddStudent}
                    >
                        <Icon
                            name="plus"
                            size={16}
                            color={"white"}
                        />
                    </TouchableOpacity>
                </View>

                <FlatList
                    data={data}
                    renderItem={({ item }) =>
                        <View style={styles.studentListBox}>

                            <View style={styles.studentDataRow}>
                                <Text style={styles.textStyle}>Name: {item.name}</Text>
                                <Text style={styles.textStyle}>Surname: {item.surname}</Text>
                                <Text style={styles.textStyle}>Class: {item.name}</Text>
                                <Text style={styles.textStyle}>Custodian: {item.custodian}</Text>
                                <Text style={styles.textStyle}>Custodian Phone: {item.phone}</Text>
                                <View style={styles.detailIcon}>
                                    <TouchableOpacity
                                        activeOpacity={0.7}
                                        onPress={this.handleAddStudent}
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
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    studentListBox: {
        width: width * 0.8,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'white',
        marginTop: 10
    },
    studentDataRow: {
        padding: 10,
    },
    textStyle: {
        fontSize: 14,
        color: 'white'
    },
    plusIcon: {
        width: width * 0.9,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginTop: 10,
        marginBottom: 10
    },
    detailIcon: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }
})
export default StudentList;


