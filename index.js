driversWithRevenueOver = (drivers, revenue) => {
  return drivers.filter( driver => {
    return driver.revenue >= revenue
  })
}

driverNamesWithRevenueOver = (drivers, revenue) => {
 return drivers.map( driver => {
  if (driver.revenue >= revenue){
    return driver.name 
  } 
 }) 
}