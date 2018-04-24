import mongoose from "mongoose";

import config from '../../etc/config.json';

import '../models/Note';
import '../models/Lgota';
import '../models/News';

const Account = mongoose.model('Account');
const Lgota = mongoose.model('Lgota');
const News = mongoose.model('News');

export function setUpConnection() {
    mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`);
}

export function listNotes(id) {
    return Account.find();
}

export function createAccount(data) {
    const Acc = new Account({
        email: data.login,
        password: data.password,
    //     // color: data.color,
    //     // createdAt: new Date()
    });
    console.log(data);
    return Acc.save();
    // return true;
}

export function logAccount(data){
    console.log(data.login, data.password)
   return Account.find({email: data.login, password: data.password})
}

export function createLgota(data) {
    const Lgg = new Lgota({
        name: data.name,
        text: data.text,
        size: data.size,
    //     // color: data.color,
    //     // createdAt: new Date()
    });
    console.log(data);
    return Lgg.save();
    // return true;
}

export function listLgota(id) {
    return Lgota.find();
}

export function createNews(data) {
    const New = new News({
        name: data.name,
        date: data.date,
        text: data.text,
    //     // color: data.color,
    //     // createdAt: new Date()
    });
    console.log(data);
    return New.save();
    // return true;
}

export function listNews(id) {
    return News.find();
}

// export function deleteNote(id) {
//     return Note.findById(id).remove();
// }

