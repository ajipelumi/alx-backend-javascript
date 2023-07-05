interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'Oluwapelumi',
    lastName: 'Ajisafe',
    age: 26,
    location: 'Lagos'
};

const student2: Student = {
    firstName: 'Opeyemi',
    lastName: 'Areola',
    age: 25,
    location: 'Lagos'
}

const studentsList: Array<Student> = [student1, student2];

const table = document.createElement('table') as HTMLTableElement;

studentsList.forEach((student: Student) => {
    const row = document.createElement('tr') as HTMLTableRowElement;
    const firstName = document.createElement('td');
    const location = document.createElement('td');

    firstName.textContent = student.firstName;
    location.textContent = student.location;

    row.appendChild(firstName);
    row.appendChild(location);

    table.appendChild(row);
});

document.body.appendChild(table);