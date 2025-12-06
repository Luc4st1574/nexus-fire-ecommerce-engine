// src/firebase/utils.ts
import { db, storage } from "./config";
import { 
    collection, 
    addDoc, 
    getDocs, 
    query, 
    where,
    type DocumentData 
} from "firebase/firestore";
import { 
    ref, 
    uploadBytes, 
    getDownloadURL 
} from "firebase/storage";

// --- DATABASE MODULE ---

/**
     * Generic function to add data to any collection
     * @param collectionName - The name of the collection (e.g., 'users', 'products')
     * @param data - The object to save
 */
export const addData = async (collectionName: string, data: DocumentData) => {
    try {
        const docRef = await addDoc(collection(db, collectionName), data);
        return { success: true, id: docRef.id };
    } catch (error) {
        console.error("Error adding document: ", error);
        return { success: false, error };
    }
};

/**
 * Generic function to fetch data with a simple filter
 */
export const getData = async (collectionName: string, field: string, value: string) => {
    const q = query(collection(db, collectionName), where(field, "==", value));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};


// --- STORAGE MODULE ---

/**
     * Uploads a file to Firebase Storage and returns the public URL
     * @param file - The JS File object from an input
     * @param path - The folder path (e.g., 'profile-pictures')
 */
export const uploadFile = async (file: File, path: string) => {
    try {
        const storageRef = ref(storage, `${path}/${file.name}-${Date.now()}`);
        const snapshot = await uploadBytes(storageRef, file);
        const url = await getDownloadURL(snapshot.ref);
        return { success: true, url };
    } catch (error) {
        console.error("Upload failed", error);
        return { success: false, error };
    }
};