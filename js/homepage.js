window.addEventListener('DOMContentLoaded',(event) => {
  employeePayrollList = getEmployeePayrollDataFromStorage();
    console.log(employeePayrollList)
    document.querySelector(".emp-count").textContent = employeePayrollList.length;
    createInnerHtml();
    localStorage.removeItem('editEmp');
  });

const getEmployeePayrollDataFromStorage = () => {
    return localStorage.getItem('employeePayrollList') ? JSON.parse(localStorage.getItem('employeePayrollList')) : [];
}


const createInnerHtml = () => {
    const headerHtml =
       `<th>Profile</th>
        <th>Name</th>
        <th>Gender</th>
        <th>Department</th>
        <th>Salary</th>
        <th>Start Date</th>
        <th>Actions</th>`;

     let employeePayrollDataList = createEmployeePayrollJSON();
    let innerHtml = `${headerHtml}`;

    for(const employeePayrollData of employeePayrollDataList){
        innerHtml = `${innerHtml}
        <tr>
        <td>
        <img class="profile" src="${employeePayrollData._profileImage}" alt=""></td>
        <td>${employeePayrollData._name}</td>
        <td>${employeePayrollData._gender}</td>
        <td>${getDepartmentHtml(employeePayrollData._department)}</td>      
        <td>${employeePayrollData._salary}</td>
        <td>${employeePayrollData._startDate}</td>
        <td>
        <img src="asserts\delete.jpg" alt="delete" id="1" onclick="remove(this)">
        <img src="asserts\edit.jpg" alt="edit" id="1" onclick="update(this)">
        </td>
        </tr>`;
    }
    document.querySelector('#display').innerHTML = innerHtml;
}


const createEmployeePayrollJSON = () => {
    let employeePayrollListLocal = [
      {
        _name: 'Teja',
        _gender: 'Female',
        _department: [
          'HR'
        ],
        _salary: 400000,
        _startDate: '20 Jul 2016',
        _note: 'Hello',
        _id: new Date().getTime(),
        _profileImage: '/assets/profile-images/Ellipse -4.png' 
      },
      {
        _name: 'Vamshi',
        _gender: 'Male',
        _department: [
          'Engineer'
        ],
        _salary: 450000,
        _startDate: '02 Mar 2020',
        _note: 'hello',
        _id: new Date().getTime(),
        _profileImage: '/assets/profile-images/Ellipse -3.png'
      }
    ];
        return localStorage.getItem("employeePayrollList")
}
const getDepartmentHtml = (departmentList) => {
  let departmentHtml = '';
  for(const department of departmentList){
    departmentHtml = `${departmentHtml} <div class='dept-label'>${department}</div>`
  }
  return departmentHtml
}