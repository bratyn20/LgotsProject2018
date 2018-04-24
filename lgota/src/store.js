import {observable, action} from 'mobx'

class store {
    @observable text = 'start'
    @observable qest = [
        {
            title: '1. Ваш пол:',
            array: [
                {title: 'женский'},
                {title: 'мужской'},
            ]
        },
        {
            title: '2.Сколько вам полных лет?',
            array: [
                {title: 'До 18'},
                {title: 'От 18 до 35'},
                {title: 'От 35 до 55(60)'}
            ]
        },
        {
            title: '3. Ваше семейное положение:',
            array: [
                {title: 'Женат (замужем);'},
                {title: 'Не женат (не замужем)'}
            ]
        },
        {
            title: '4. Есть ли дети ?',
            array: [
                {title: 'Да'},
                {title: 'Нет.'}
            ]
        },
    ]
    @observable req = [
        {req: 'none'},
        {req: 'none'}
    ]
        
    @observable list = []
    @observable loading = true

    @action
    listQuery(){
        this.loading = true
        fetch('http://localhost:8080/lgota' , {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            // authorization: window.localStorage.getItem('key')
            }}).then(response => {
            // if (response.ok) return response.json()
            // Message.setShow(true, 'danger', response.statusText)
            // console.log(response.json())
            return response.json()
            }).then (response => {
                console.log(response);
                this.list = response
                this.loading = false
                console.log(this.list, 'list!!!');
                if (response[0])  
                  {
                     console.log('вошел');
                     
                  }
                 
            })
            
    }
    

    @action
    go() {
        this.text = 'one'
        console.log('go')
    }

    @action
    one() {
        this.text = 'two'
        console.log('Hi')
    }
}

export default new store()