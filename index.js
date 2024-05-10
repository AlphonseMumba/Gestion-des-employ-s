// Structure de données pour stocker les employés
var employees = [];

// Fonction pour ajouter un employé
function addEmployee() {
  var nameInput = document.getElementById('name');
  var positionInput = document.getElementById('position');

  var employee = {
    name: nameInput.value,
    position: positionInput.value
  };

  employees.push(employee);

  displayEmployees();

  nameInput.value = '';
  positionInput.value = '';
}

// Fonction pour afficher les employés
function displayEmployees() {
  var employeeList = document.getElementById('employeeList');
  employeeList.innerHTML = '';

  employees.forEach(function(employee, index) {
    var listItem = document.createElement('li');
    listItem.textContent = employee.name + ' - ' + employee.position;

    var editButton = document.createElement('button');
    editButton.textContent = 'Modifier';
    editButton.addEventListener('click', function() {
      editEmployee(index);
    });

    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Supprimer';
    deleteButton.addEventListener('click', function() {
      deleteEmployee(index);
    });

    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);

    employeeList.appendChild(listItem);
  });
}

// Fonction pour modifier un employé
function editEmployee(index) {
  var employee = employees[index];

  var newName = prompt('Nouveau nom :', employee.name);
  var newPosition = prompt('Nouveau poste :', employee.position);

  employee.name = newName;
  employee.position = newPosition;

  displayEmployees();
}

// Fonction pour supprimer un employé
function deleteEmployee(index) {
  employees.splice(index, 1);
  displayEmployees();
}

// Gestionnaire d'événement pour le formulaire d'ajout d'employé
var addEmployeeForm = document.getElementById('addEmployeeForm');
addEmployeeForm.addEventListener('submit', function(event) {
  event.preventDefault();
  addEmployee();
});
