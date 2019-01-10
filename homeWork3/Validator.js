class Validator {
    constructor(idName, idPhone, idEmail) {
        this.idName = this._noda(idName);
        this.idPhone = this._noda(idPhone);
        this.idEmail = this._noda(idEmail);
    }

    // присваиваю каждому ID ноду

    _noda(id) {
        let elem = document.getElementById(id);
        return elem;
    }

    _regExp = {
        name: '/a-zаяё/i',
        phone: '/\+\d\(\d{3}\)\d{3}-\d{4}/',
        email: '/[a-z]+[.-]?[a-z]+?@[a-z]+\.ru/'
    };

    // Выясняю валидно ли поле инпут

    _isValid(noda, regExp) {
        return regExp.test(noda.value);
    }

    // добавляю класс в инпут

    setClass() {
        if (this._isValid(this.idName, this._regExp.name)) {
            this.idName.classList.add('not-error');
        } else this.idName.classList.add('error');
    }
}