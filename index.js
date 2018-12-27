driversWithRevenueOver = (drivers, revenue) => {
  return drivers.filter( driver => {
    return driver.revenue >= revenue
  })
}

driverNamesWithRevenueOver = (drivers, revenue) => {
  return driversWithRevenueOver(drivers, revenue).map(driver => {
    return driver.name
  })
}