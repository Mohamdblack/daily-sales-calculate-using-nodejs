const data = require('./data')

function getSalesPersonById(data, id) {
    return data.find((item) => item.id === id);
  }
  
  function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
  }
  
  function workingDaysInMonth(year, month) {
    let workingDaysCount = 0;
  
    for (let i = 1; i <= getDaysInMonth(year, month); i++) {
      let dayOfWeek = new Date(year, month - 1, i).getDay();
      if (dayOfWeek !== 5) {
        workingDaysCount++;
      }
    }
  
    return { workingDays: workingDaysCount };
  }
  
  function daysWorkedExcludingFridays(from, to) {
    let workingDaysCount = 0;
    let currentDate = new Date(from);
  
    while (currentDate <= to) {
      let dayOfWeek = currentDate.getDay();
  
      if (dayOfWeek !== 5) {
        workingDaysCount++;
      }
  
      currentDate.setDate(currentDate.getDate() + 1);
    }
  
    return workingDaysCount;
  }
  
  function getSalesByDay(data, yearlySales, from, to, id) {
    const fromDate = new Date(from);
    const toDate = new Date(to);
    const monthlyAmount = yearlySales / 12;
    const person = getSalesPersonById(data, id);
  
    if (!person) {
      throw new Error(`Sales person not found ${id}`);
    }
  
    const validated = person.sales.filter((item) => {
      const itemDate = new Date(item.date);
      return itemDate >= fromDate && itemDate <= toDate;
    });
  
    const workedTargets = [];
    const workingDaysExcludedFridays = [];
    let currentDate = new Date(fromDate);
  
    while (currentDate <= toDate) {
      const year = currentDate.getFullYear();
      const month = currentDate.getMonth() + 1;
      const { workingDays } = workingDaysInMonth(year, month);
  
      if (workingDays > 0) {
        workedTargets.push(monthlyAmount / workingDays);
        workingDaysExcludedFridays.push(workingDays);
      }
  
      currentDate.setMonth(currentDate.getMonth() + 1, 1);
    }
  
    return {
      workedTargets,
      totalTarget: validated.length * monthlyAmount,
      workingDaysExcludedFridays,
      daysWorkedExcludingFridays: daysWorkedExcludingFridays(fromDate, toDate),
    };
  }
  

  module.exports = {
    getSalesByDay,
  };