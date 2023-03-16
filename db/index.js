import { SQLite } from 'expo-sqlite'

const db = SQLite.openDatabase('foto.db')

export const init = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql('CREATE TABLE IF NOT EXIST foto (id INTEGER PRIMARY KEY NOT NULL, image TEXT NOT NULL)'), [],
                () => { resolve() },
                (_, err) => { reject(err) }
        })
    })

    return promise
}

export const insertImage = (image) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                'INSERT INTO foto (image) VALUES (?);', [image],
                (_, result) => resolve(result),
                (_, err) => reject(err)
            )
        })
    })
}