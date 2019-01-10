class Validator {
    constructor(idName, idPhone, idEmail, idText, successStyle, failStyle) {
        this.idName = idName;
        this.idPhone = idPhone;
        this.idEmail = idEmail;
        this.idText = idText;
        this.successStyle = successStyle;
        this.failStyle = failStyle;
    }

    _regExp = {
        name: '/a-zаяё/i',
        phone: '/\+\d\(\d{3}\)\d{3}-\d{4}/',
        email: '/[a-z]+[.-]?[a-z]+?@[a-z]+\.ru/',
        text: '/\w{80}/gm',
    }
    
    isName() {
        let nameUser = document.getElementById(this.idName).value;
        if (this._regExp.name.test(nameUser)) {
            document.getElementById(this.idName).classList.add(this.successStyle);
        } else {
            document.getElementById(this.idName).classList.add(this.failStyle);
        }
    }

    isPhone() {
        let phoneUser = document.getElementById(this.idPhone).value;
        if (this._regExp.phone.test(phoneUser)) {
            document.getElementById(this.idPhone).classList.add(this.successStyle);
        } else {
            document.getElementById(this.idPhone).classList.add(this.failStyle);
        }
    }

    isEmail() {
        let emailUser = document.getElementById(this.idEmail).value;
        if (this._regExp.phone.test(emailUser)) {
            document.getElementById(this.idEmail).classList.add(this.successStyle);
        } else {
            document.getElementById(this.idEmail).classList.add(this.failStyle);
        }
    }

    isText() {
        let textUser = document.getElementById(this.idText).value;
        if (this._regExp.text.test(textUser)) {
            document.getElementById(this.idText).classList.add(this.successStyle);
        } else {
            document.getElementById(this.idText).classList.add(this.failStyle);
        }
    }


}