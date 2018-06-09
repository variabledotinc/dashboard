import { observable, action } from "mobx";
import firebase from 'firebase'
import 'firebase/firestore'
import { ENGINE_METHOD_NONE } from "constants";

const firebaseConfigs = {
    apiKey: "AIzaSyDDEDhYZIjUgO-ZHeGS2EXEibz7wGVMjfw",
    authDomain: "dashboard-a2670.firebaseapp.com",
    databaseURL: "https://dashboard-a2670.firebaseio.com",
    projectId: "dashboard-a2670",
    storageBucket: "dashboard-a2670.appspot.com",
    messagingSenderId: "879652396502"

}

firebase.initializeApp(firebaseConfigs)

const db = firebase.firestore()
db.settings({timestampsInSnapshots: true})

db.collection("tasks").get().then(res=>{
    res.forEach(task => {
        console.log(task.data())
    });
})

class AppState {
    @observable tasksModalToggled = false;
    @observable contentLoaded = true;
    @observable userData = {
        userTasks : [{taskTitle: "test 001"}]
    }

    @action getTasks = () => {
        db.collection("tasks").get().then(res => {
            res.forEach(task => {
                this.pushTask(task.data(), "userTasks")
            })
        })
    }

    @action saveTask = (e) => {
        let obj = {taskTitle: e.taskTitle}
        db.collection("tasks").add(obj).then(doc => {
            console.log(doc)
            this.pushTask(obj, "userTasks")
        })
        
    }

    @action pushTask = (e, target) => {
        this.userData[target].push(e)
    }

    @action toggleTaskModal = () => {
        this.tasksModalToggled = !this.tasksModalToggled
    };


}



export default new AppState()