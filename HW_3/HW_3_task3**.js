// Ниже приведена структура компаний и задания, которые необходимо выполнить 
const enterprises = [
  {
    id: 1,
    name: "Предприятие 1",
    departments: [
      {
        id: 2,
        name: "Отдел тестирования",
        employees_count: 10,
      },
      {
        id: 3,
        name: "Отдел маркетинга",
        employees_count: 20,
      },
      {
        id: 4,
        name: "Администрация",
        employees_count: 15,
      },
    ]
  },
  {
    id: 5,
    name: "Предприятие 2",
    departments: [
      {
        id: 6,
        name: "Отдел разработки",
        employees_count: 50,
      },
      {
        id: 7,
        name: "Отдел маркетинга",
        employees_count: 20,
      },
      {
        id: 8,
        name: "Отдел охраны труда",
        employees_count: 5,
      },
    ]
  },
  {
    id: 9,
    name: "Предприятие 3",
    departments: [
      {
        id: 10,
        name: "Отдел аналитики",
        employees_count: 0,
      },
    ]
  }
]
//   Задания:
// 1. Вывести все предприятия и их отделы. Рядом указать количество сотрудников. Для предприятия посчитать сумму всех сотрудников во всех отделах.

// **Пример:**

// Предприятие 1 (45 сотрудников)
// - Отдел тестирования (10 сотрудников)
// - Отдел маркетинга (20 сотрудников)
// - Администрация (15 человек)
// Предприятие 2 (75 сотрудников)
// - Отдел разработки (50 сотрудников)
// - Отдел маркетинга (20 сотрудников)
// - Отдел охраны труда (5 сотрудников)
// Предприятие 3 (нет сотрудников)
// - Отдел аналитики (нет сотрудников)

// 2. Написать функцию, которая будет принимать 1 аргумент (id отдела или название отдела и возвращать название предприятия, к которому относится).

// Пример:
// getEnterpriseName(4) // Предприятие 1
// getEnterpriseName("Отдел маркетинга") // Предприятие 2

// 3. Написать функцию, которая будет добавлять предприятие. В качестве аргумента принимает название предприятия

// Пример:
// addEnterprise("Название нового предприятия")

// 4. Написать функцию, которая будет добавлять отдел в предприятие. В качестве аргумента принимает id предприятия, в которое будет добавлен отдел и название отдела.

// Пример:
// addDepartment(1, "Название нового отдела")

// 5. Написать функцию для редактирования названия предприятия. Принимает в качестве аргумента id предприятия и новое имя предприятия.

// Пример:
// editEnterprise(1, "Новое название предприятия")


// 6. Написать функцию для редактирования названия отдела. Принимает в качестве аргумента id отдела и новое имя отдела.

// Пример:
// editDepartment(7, "Новое название отдела")


// 7. Написать функцию для удаления предприятия. В качестве аргумента принимает id предприятия.

// Пример:
// deleteEnterprise(1)


// 8. Написать функцию для удаления отдела. В качестве аргумента принимает id отдела. Удалить отдел можно только, если в нем нет сотрудников.

// Пример:
// deleteDepartment(3)


// 9. Написать функцию для переноса сотрудников между отделами одного предприятия. В качестве аргумента принимает два значения: id отдела, из которого будут переноситься сотрудники и id отдела, в который будут переноситься сотрудники).

// Пример:
// moveEmployees(2, 3)

// 1. Вывести все предприятия и их отделы. Рядом указать количество сотрудников. Для предприятия посчитать сумму всех сотрудников во всех отделах.
// **Пример:**

// Предприятие 1 (45 сотрудников)
// - Отдел тестирования (10 сотрудников)
// - Отдел маркетинга (20 сотрудников)
// - Администрация (15 человек)
// Предприятие 2 (75 сотрудников)
// - Отдел разработки (50 сотрудников)
// - Отдел маркетинга (20 сотрудников)
// - Отдел охраны труда (5 сотрудников)
// Предприятие 3 (нет сотрудников)
// - Отдел аналитики (нет сотрудников)

  // const getDepartments = (companies) => {
  //   companies.forEach((company) => {
  //     let depts = [];
  //     let count = 0;
  //     depts.push(company.name);
  //     if (company.departments) {
  //       company.departments.forEach((dept) => {
  //         count += +dept.employees_count;
  //         if (dept.employees_count) {
  //           depts.push(`- ${dept.name} (${dept.employees_count})`);
  //         } else
  //           depts.push(`- ${dept.name} (нет сотрудников)`);
  //       });

  //       if (count) {
  //         depts[0] += ` (${count})`;
  //       } else
  //         depts[0] += `(нет сотрудников)`;

  //     }
  // console.log(depts.join('\n\ '));
  //   });
  // }
  // getDepartments(enterprises)

// 2. Написать функцию, которая будет принимать 1 аргумент (id отдела или название отдела и возвращать название предприятия, к которому относится).

//  const getEnterpriseByDepartment = function(val) {
//   let enterprise 
//   enterprises.forEach(ent=> {
//     let department 
//     if(ent.departments) {
//       department = ent.departments.find(dept => {return dept.id == val || dept.name == val})
//     }
//     if(department) {
//       enterprise = ent
//     }
//   })
//   return enterprise ? enterprise : "Нет организации с таким отделом"
//  }
//  console.log(getEnterpriseByDepartment("Отдел тестирования"))

 // 3. Написать функцию, которая будет добавлять предприятие. В качестве аргумента принимает название предприятия
 const getNewId = function (company) {
  let maxId = company[0].id
  company.forEach((el)=> {
    if (maxId < el.id) {
      maxId = el.id
    }
    if (el.department) {
      el.department.forEach((elem)=> {
        if (maxId < elem.id) {
          maxId = elem.id
        }
      })
    }
  })
  return maxId + 1 
}

// const addEnterprise = function (name) {
//   enterprises.push({
//     id: getNewId(enterprises), 
//     name: name, 
//     departments: []
//   })
// }


// addEnterprise('Рога_копыта')
// console.log(enterprises)

// 4. Написать функцию, которая будет добавлять отдел в предприятие. В качестве аргумента принимает id предприятия, в которое будет добавлен отдел и название отдела.
getEnterprise = function(val) {
  let enterprise = enterprises.find(el => el.id == val || el.name == val)
  return enterprise ? enterprise : "Такой организации нет"
 } 

const addDepartment = function(id, name, employees_count = 0) {
  const enterprise = getEnterprise(id)
  if (typeof enterprise == 'object'){
    enterprise.departments.push({
      id: getNewId(enterprises), 
      name: name,
      employees_count: employees_count,
    })
  } else console.log("Такой организации нет")
}

 addDepartment(11, "Автоматизация", 20)
 addDepartment(11, "Мануальщики", 20)
//  console.log(getEnterprise(11))

// 5. Написать функцию для редактирования названия предприятия. Принимает в качестве аргумента id предприятия и новое имя предприятия.


const editEnterprise = function(val, name) {
  const enterprise = getEnterprise(val)
  if (typeof enterprise == 'object') {
    enterprise.name = name
  } else console.log(enterprise)
} 
editEnterprise(11, "Тестировщики")
console.log(getEnterprise(11))



  // 6. Написать функцию для редактирования названия отдела. Принимает в качестве аргумента id отдела и новое имя отдела.
  
  const getDepartment = function(val) {
    let department
      enterprises.forEach((company) => {
        const dept = company.departments.find((el)=> {
          return el.id == val || el.name == val
        })
        if (dept) department = dept 
      })
      return department ? department : "Нет такого отдела"
    }

    const editDepartment = function(val, name) {
      const department = getDepartment(val)
      if (typeof department == 'object') {
        department.name = name
      } else console.log(department)
    }

  editDepartment(12, "Автотестировщики")
   console.log(getDepartment(12))

  // 7. Написать функцию для удаления предприятия. В качестве аргумента принимает id предприятия.

  const deleteEnterprise = function(id) {
    enterprise.forEach((enterprise, index) => {
      if (enterprise.id === id) {
        enterprises.splice(index,1)

        }
      })
  }
// 8. Написать функцию для удаления отдела. В качестве аргумента принимает id отдела. Удалить отдел можно только, если в нем нет сотрудников.
let deleteDepartment = function (id) {
  enterprises.forEach(e => {
    let index = e.departments.findIndex(d => d.id === d.employees_count === 0)
    if (index !== -1) {
      e.departments.splice(index, 1)
    }
  })
}
deleteDepartment(10)
console.log(enterprises)

// 9. Написать функцию для переноса сотрудников между отделами одного предприятия. В качестве аргумента принимает два значения: id отдела, из которого будут переноситься сотрудники и id отдела, в который будут переноситься сотрудники).
const transferEmployees = function (currentId, newId) {
  let currentDepartment = getDepartment(currentId)
  let newDepartment = getDepartment(newId)
  if(typeof currentDepartment == "object" && typeof newDepartment == "object") {
    newDepartment.employees_count += currentDepartment.employees_count
    currentDepartment.employees_count = 0 
  } else console.log ("Нет такого отдела")
}

transferEmployees(12,13)
console.log(getEnterprise(11))