class Validator {
    constructor(id, pattern) {
        this.id = id;
        this.pattern = pattern;
    }

    getValue(){
        let variable = document.getElementById(`${this.id}`).value;
        if(this.pattern.test(variable)){
            document.getElementById(`${this.id}`).classList.add('not-error');
        } else {
            document.getElementById(`${this.id}`).classList.add('error');
        }
    }
}