import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase";

export const fetchStudents = () => async (dispatch) => {
    dispatch({ type: "STUDENTS_START" });
    try {
        const s = await getDocs(collection(db, "students"));
        const students = s.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        dispatch({ type: "STUDENTS_SUCCESS", payload: students });
    } catch (error) {
        dispatch({ type: "STUDENTS_FAIL", payload: error.message });
    }
};

export const addStudent = (studentData) => async (dispatch) => {
    try {
        const docRef = await addDoc(collection(db, "students"), studentData);
        dispatch({ type: "ADD_STUDENT", payload: { id: docRef.id, ...studentData } });
    } catch (error) {
        console.error("Error adding student:", error);
    }
};

export const updateStudent = (id, studentData) => async (dispatch) => {
    try {
        const studentRef = doc(db, "students", id);
        await updateDoc(studentRef, studentData);
        dispatch({ type: "UPDATE_STUDENT", payload: { id, ...studentData } });
    } catch (error) {
        console.error("Error updating student:", error);
    }
};

export const deleteStudent = (id) => async (dispatch) => {
    try {
        await deleteDoc(doc(db, "students", id));
        dispatch(
            { type: "DELETE_STUDENT", payload: id }
        );
    } catch (error) {
        console.error("Error deleting student:", error);
    }
};
