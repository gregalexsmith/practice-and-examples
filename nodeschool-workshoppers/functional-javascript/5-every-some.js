// return true if all submittedUsers exist in list goodUsers
function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    // want to check that all submitedUsers pass a test
    return submittedUsers.every(sUser => {
      // goodUsers must contain at least one user with same id
      return goodUsers.some(gUser => gUser.id === sUser.id)
    })
  };
}

module.exports = checkUsersValid
