class EmployeeParollData{

    get id(){ return this._id;}
    set id(id){
        this._id=id;
    }

    get name(){
        return this._name;
    }
    set name(name){
        let nameRegex=RegExp('^[A-Z]{1}{a-zA-Z\\s}{2,}$')
        if(nameRegex.test(name)){
            this._this=name;
        }
        else{
            throw 'name is incorrect!';
        }
    }

    get profilepic(){
        return this._profilepic;
    }
    set profilepic(profilepic){
        this._profilepic=profilepic;
    }

    get gender(){
        return this._gender;
    }
    set gender(gender){
        this._gender=gender;
    }

    get department(){
        return this._department;
    }
    set department(department){
        this._department=department;
    }

    get salary(){
        return this._salary;
    }
    set salary(salary){
        this._salary=salary;
    }

    get note(){
        return this._note;
    }
    set note(note){
        this._note=note;
    }

    get startDate(){
        return this._startDate;
    }
    set startDate(startDate){
        this._startDate=startDate;
    }
toString(){
    const options ={year :'numeric',month:'long',day:'numeric'}
    const empDate= !this.startDate ? "undefined": 
                    this.startDate.toLocaleDateString("en-US",options);
    return "id=" +this.id+"name= "+this.name+", gender="+this.gender + ", profilePic=" +this.profilepic + 
    ", department="+ this.department + ", salary="+this.salary+ ", startDate=" +empDate+", note="+this.note;
}
}
const salary = document.querySelector('#salary');
const output = document.querySelector('.salary-output');
output.textContent =salary.value;
salary.addEventListener('input',function(){
    output.textContent=salary.value
});

imgclicked=()=>{
    console.log("image clicked!!!!")
}