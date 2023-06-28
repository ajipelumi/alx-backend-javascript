export default function createIteratorObject(report) {
  function iter() {
    const departments = Object.values(report.allEmployees);
    let departmentIndex = 0;
    let employeeIndex = 0;

    const iterator = {
      next() {
        if (
          departmentIndex < departments.length
                && employeeIndex < departments[departmentIndex].length
        ) {
          const value = departments[departmentIndex][employeeIndex];
          employeeIndex += 1;
          if (employeeIndex === departments[departmentIndex].length) {
            departmentIndex += 1;
            employeeIndex = 0;
          }
          return { value, done: false };
        }
        if (
          departmentIndex < departments.length
        ) {
          const value = departments[departmentIndex];
          departmentIndex += 1;
          employeeIndex = 0;
          return { value, done: false };
        }
        return { done: true };
      },
    };

    return iterator;
  }

  return {
    [Symbol.iterator]: iter,
  };
}
