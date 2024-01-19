import React , { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import AddTask from './AddTask';

const ToDoList = ({ initTasks }) => {
    const [toDos, setToDos] = useState(
        initTasks.map((todo) => ({ id: uuidv4(), title: todo}))
    );

    const addToDo = (newTitle) => {
        const newTask = { id: uuidv4(), title: newTitle };
        setToDos((prevValues) => [...prevValues, newTask]);
    };

    const removeToDo = (id) => {
        setToDos((prevValues) => prevValues.filter((todo) => todo.id !== id))
    };

    return (
        <View style={styles.todoListContainer}>
            {toDos.map((todo) => (
                <View key={todo.id} style={styles.todoItem}>
                    <Button onPress={() => removeToDo(todo.id)}/>
                    <Text>{todo.title}</Text>
                </View>
            ))}
            <AddTask onAddTask={addToDo} />
        </View>
    );
};

ToDoList.defaultProps = {
    initTasks: [],
};

const styles = StyleSheet.create({
    todoListContainer: {
      margin: 10,
    },
    todoItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
      marginVertical: 5,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 5,
    },
});

export default ToDoList;
