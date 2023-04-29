let employeePayrollList;
window.addEventListener('DOMContentLoaded',(event) => {
  employeePayrollList = getEmployeePayrollDataFromStorage();
    console.log(employeePayrollList)
    document.querySelector(".emp-count").textContent = employeePayrollList.length;
    createInnerHtml();
    localStorage.removeItem('editEmp');
  });

const getEmployeePayrollDataFromStorage = () => {
    return localStorage.getItem('EmployeePayrollList') ? JSON.parse(localStorage.getItem('EmployeePayrollList')) : [];
}


const createInnerHtml = () => {
  if(empPayrollList.length==0) return;
    const headerHtml =
       `<th>Profile</th>
        <th>Name</th>
        <th>Gender</th>
        <th>Department</th>
        <th>Salary</th>
        <th>Start Date</th>
        <th>Actions</th>`;

    //  let employeePayrollDataList = createEmployeePayrollJSON();
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
        <td>${stringifyDate(empPayrollData._startDate)}</td>
        <td>${employeePayrollData._startDate}</td>
        <td>
        <img src="asserts\delete.jpg" alt="delete" id="${empPayrollData._id}"" onclick="remove(this)">
        <img src="asserts\edit.jpg" alt="edit" id="id="${empPayrollData._id}"" onclick="update(this)">
        </td>
        </tr>`;
    }
    document.querySelector('#display').innerHTML = innerHtml;
}

const getDepartmentHtml = (departmentList) => {
  let departmentHtml = '';
  for(const department of departmentList){
    departmentHtml = `${departmentHtml} <div class='dept-label'>${department}</div>`
  }
  return departmentHtml
}
const remove = (node) => {
  let empPayrollData =empPayrollList.find(empData => empData._id == node._id);
  if(!empPayrollData) return;
  const index = empPayrollList.map(empData => empData._id).indexOf(empPayrollData._id);
  empPayrollList.splice(index,1);
  localStorage.setItem("EmployeePayrollList",JSON.stringify(empPayrollList));
  document.querySelector(".emp-count").textContent = empPayrollList.length;
  createInnerHtml();
}
const update = (node) => {
  let empPayrollData = empPayrollList.find(empData => empData._id == node.id);
  if(!empPayrollData) return;
  localStorage.setItem('editEmp', JSON.stringify(empPayrollData));
  window.location.replace(site_properties.add_emp_payroll_page);
}