const ValidationError = require('./validation-error');

// Your code here
class MaximumLengthExceededError extends ValidationError{
  constructor(excessLength, ...params){
    let error = "Maximum length exceeded by " + excessLength;
    if (!message)
    {
      error = "Maximum length exceeded"
    }
    
    super(error, ...params);
    this.name = "MaximumLengthExceededError"
  }
}
/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = MaximumLengthExceededError;
} catch {
  module.exports = null;
}
