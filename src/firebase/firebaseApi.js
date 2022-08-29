import database from "@react-native-firebase/database"
import storage from "@react-native-firebase/storage"

export const addUser = async (user) => {
    const imagePath=user.imageURL
    const parts=imagePath.split("/")
    const fileName=parts[parts.length-1]
    await uploadFile(imagePath,fileName)
    const url=await storage().ref(fileName).getDownloadURL();
    user.imageURL=url;

    await database()
        .ref(`/users/${user.id}`)
        .set(user)
        .then(() => console.log('Data set.'));
}

const uploadFile= async(filePath,fileName)=>{
    const ref=storage().ref(fileName)
    await ref.putFile(filePath)
}

export const addLikes= async(userName,ActiveUser)=>{
    const user= await getUserWithUsername(userName)
    user.likes.push(ActiveUser.id)
    await database()
        .ref(`/users/${user.id}`)
        .set(user)
        .then(() => console.log('Data set.'));
}

export const getUsers = async () => {
    let datas = []
    let users = []
    await database()
        .ref("/users")
        .once('value')
        .then(snapshot => {
            let data = snapshot.val()
            datas = [data];
        });

    datas.map((item) => {
        let arr =Object.getOwnPropertyNames(item)
        arr.forEach((id) => {
            users.push(item[id])
        })
    })
    return users
}

export const getUserWithUsername = async (username) => {
    let id = await getIdWithUserName(username)
    let user = {}
    await database()
        .ref('/users/' + id)
        .once('value')
        .then(snapshot => {
            user = snapshot.val()
        });
    return user;
}

export const getIdWithUserName = async (username) => {
    let arr;
    await database().ref("/users")
        .orderByChild("userName")
        .equalTo(username)
        .once('value')
        .then((snapshot) => {
            const data = snapshot.val();
            arr = Object.getOwnPropertyNames(data)
        });

    return arr[0]
}