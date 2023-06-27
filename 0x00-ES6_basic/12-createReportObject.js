export default function createReportObject(employeesList) {
  const fullreport = {
    ...employeesList,
    allEmployees: employeesList,
    getNumberOfDepartments: (employeesList) => Object.keys(employeesList).length,
  };

  return fullreport;
}
