driversWithRevenueOver = (drivers, revenue) => {
  return drivers.filter( driver => {
    return driver.revenue >= revenue
  })
}

driverNamesWithRevenueOver = (drivers, revenue) => {
  return driversWithRevenueOver(drivers, revenue).map(driver => {
    return driver.name
  })


// return drivers.map( driver => {
//   if (driver.revenue >= revenue){
//     console.log(driver.name)
//     return driver.name 
//   } 
// }) 
}