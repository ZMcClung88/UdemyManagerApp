import React from 'react';
import firebase from 'firebase';

class Database {
  static updateTest() {
    let path = '/personal';
    let data = { name: 'zachary' };
    // let data = {
    //   personal: {
    //     name: 'zac',
    //     age: 30
    //   },
    //   family: {
    //     wife: {
    //       name: 'court',
    //       age: 27
    //     },
    //     daughter: {
    //       name: 'mayble',
    //       age: 2
    //     }
    //   }
    // };

    return firebase
      .database()
      .ref(path)
      .set(data);
  }
}

module.exports = Database;
