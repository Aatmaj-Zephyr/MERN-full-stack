const EventEmitter = require('events');
 
class ATM extends EventEmitter {
  constructor(balanceAmt) {
    super();
    this.balance = balanceAmt; // Initial account balance set using constructor
  }
 
  checkBalance() {
    // send data from class to js
    this.emit('checkBalance', this.balance);
  }
  deposit(amount){
      this.balance+=amount;
      this.checkBalance();
      this.emit('deposit',this.balance)
  }
 
  withdrawAmount(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      this.emit('withdraw', amount);
    } else {
      this.emit('insufficient-funds');
    }
  }
}
 
 
 
const atmMachine = new ATM(100);
 
// Listen for balance events
atmMachine.on('checkBalance', (balance) => {
  console.log(`Your account balance is $${balance}`);
});
 
// Listen for withdraw events
atmMachine.on('withdraw', (amount) => {
  console.log(`Withdrawn $${amount} from your account.`);
  console.log(`Remaining balance is $${atmMachine.balance}`);
});
 
// Listen for insufficient funds event
atmMachine.on('insufficient-funds', () => {
  console.log('Insufficient funds in your account. Transaction cancelled');
});
 
function isDeposited(balance){
    console.log("New balance is $", balance)
}
 
//deposit
atmMachine.on('deposit',(newBalance)=>{isDeposited(newBalance)})
 
// Perform some ATM operations
atmMachine.checkBalance();
atmMachine.withdrawAmount(500);
atmMachine.withdrawAmount(700);
atmMachine.deposit(23)
